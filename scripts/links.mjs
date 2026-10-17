#!/usr/bin/env node
/**
 * Link gate: `npm run audit:links` (AUDIT_URL to override; zero dependencies).
 *
 * Crawls every page in the sitemap (plus the noindex extras) and checks:
 *  - every internal link returns 200,
 *  - every #anchor exists on the page it points to (an email CTA once pointed
 *    at /#testimonies, a section id that never existed),
 *  - every external link resolves — dead domains (ThyKingdom.Network has no
 *    DNS) and apex hosts with broken TLS (seekfirst.world, six33.shop) fail
 *    the fetch outright rather than returning a status.
 *
 * Also scans the email journey source for links, since letters are never
 * served as pages. External checks are throttled and deduplicated; a few
 * sites refuse bots (403/429) and are reported as warnings, not failures.
 */
import { readFileSync } from "node:fs";

const BASE = (process.env.AUDIT_URL || "http://localhost:3000").replace(/\/$/, "");
const PROD = "https://www.jesusfestivalmovement.com";
const EXTRA = ["/partner", "/privacy"];
const UA = "Mozilla/5.0 (compatible; JFM-link-audit/1.0; +https://www.jesusfestivalmovement.com)";
const SKIP = /^(mailto:|tel:|javascript:|data:)/i;
// Sites known to block automated requests; a 403/429 from them is not a dead link.
const BOT_WALLED = /(instagram|facebook|linkedin|x\.com|twitter|tiktok)\./i;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const local = (u) => u.replace(PROD, BASE);

async function get(url, method = "GET") {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), 25_000);
  try {
    const res = await fetch(url, { method, redirect: "follow", headers: { "user-agent": UA }, signal: ctl.signal });
    return { status: res.status, url: res.url, text: method === "GET" ? await res.text() : "" };
  } catch (err) {
    return { status: 0, error: err.cause?.code || err.name || String(err) };
  } finally {
    clearTimeout(t);
  }
}

const ids = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const hrefs = (html) =>
  [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));

const sitemap = await get(`${BASE}/sitemap.xml`);
const pages = [
  ...new Set([
    ...[...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(PROD, "").replace(BASE, "") || "/"),
    ...EXTRA,
  ]),
];
if (pages.length < 5) {
  console.error(`Only ${pages.length} pages found at ${BASE} — refusing to pass a crawl that saw nothing.`);
  process.exit(2);
}

const pageCache = new Map(); // path -> { status, ids }
async function page(path) {
  if (!pageCache.has(path)) {
    const r = await get(`${BASE}${path}`);
    pageCache.set(path, { status: r.status, ids: ids(r.text || ""), links: hrefs(r.text || "") });
  }
  return pageCache.get(path);
}

const internal = new Map(); // "path#hash" -> [sources]
const external = new Map(); // url -> [sources]
const add = (map, key, src) => map.set(key, [...(map.get(key) || []), src]);

for (const p of pages) {
  const { status, links } = await page(p);
  if (status !== 200) add(internal, p, "(sitemap)");
  for (const h of links) {
    if (SKIP.test(h)) continue;
    if (h.startsWith("#")) add(internal, `${p}${h}`, p);
    else if (h.startsWith("/")) add(internal, h, p);
    else if (h.startsWith(PROD)) add(internal, h.slice(PROD.length) || "/", p);
    else if (/^https?:\/\//.test(h)) add(external, h, p);
  }
}

// Email letters: links live in template strings, not served pages.
const journey = readFileSync("lib/email/journey.ts", "utf8");
for (const m of journey.matchAll(/(?:href="|url: `)(\$\{SITE_URL\}[^"`]*|https?:\/\/[^"`]+)/g)) {
  const u = m[1];
  if (u.startsWith("${SITE_URL}")) add(internal, u.slice("${SITE_URL}".length) || "/", "email journey");
  else if (!u.includes("${")) add(external, u, "email journey");
}

const fails = [];
const warns = [];

for (const [target, sources] of internal) {
  const [rawPath, hash] = target.split("#");
  const path = (rawPath.split("?")[0] || "/").replace(/(.)\/$/, "$1");
  if (/\.(pdf|png|jpg|txt|xml|webmanifest)$/.test(path)) {
    const r = await get(`${BASE}${path}`, "HEAD");
    if (r.status !== 200) fails.push(`${target} → ${r.status || r.error}  (from ${sources[0]})`);
    continue;
  }
  const t = await page(path);
  if (t.status !== 200) fails.push(`${target} → ${t.status}  (from ${[...new Set(sources)].slice(0, 3).join(", ")})`);
  else if (hash && !t.ids.has(decodeURIComponent(hash))) fails.push(`${target} → no element with id="${hash}"  (from ${[...new Set(sources)].slice(0, 3).join(", ")})`);
}

for (const [url, sources] of external) {
  let r = await get(url, "HEAD");
  if (r.status === 405 || r.status === 403 || r.status === 0) r = await get(url); // some hosts reject HEAD
  const from = [...new Set(sources)].slice(0, 2).join(", ");
  if (r.status >= 200 && r.status < 400) continue;
  if ((r.status === 403 || r.status === 429 || r.status === 999) && BOT_WALLED.test(url)) warns.push(`${url} → ${r.status} (bot-walled)`);
  else if (r.status === 403 || r.status === 429) warns.push(`${url} → ${r.status} (may block bots — check by hand)  (from ${from})`);
  else fails.push(`${url} → ${r.status || r.error}  (from ${from})`);
  await sleep(150);
}

console.log(`Checked ${pages.length} pages: ${internal.size} internal targets, ${external.size} external links at ${BASE}\n`);
for (const w of warns) console.log(`  ⚠ ${w}`);
for (const f of fails) console.log(`  ✗ ${f}`);
console.log(fails.length ? `\n${fails.length} broken link(s).` : `\n✓ No broken links${warns.length ? ` (${warns.length} warning(s))` : ""}.`);
process.exit(fails.length ? 1 : 0);
