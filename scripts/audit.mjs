#!/usr/bin/env node
/**
 * Site quality gate: `npm run audit` against a running build.
 *
 *   npm run build && npm start        # in one terminal
 *   npm run audit                     # in another  (AUDIT_URL to override)
 *
 * No dependencies — just fetch and regex — so it adds nothing to installs.
 * Every check here exists because it caught a real, shipped, silent defect:
 *
 *  1. VISIBLE WITHOUT JS  A root app/loading.tsx made Next stream every page as
 *     an empty fallback <main> plus the real content in a <div hidden>. AI
 *     crawlers, which mostly don't run JS, saw 5 words per page. (Sep 2026)
 *  2. ONE <main>          The same bug shipped two main landmarks per page.
 *  3. JSON-LD RESOLVES    Every bare {"@id"} must point at a node defined on
 *                         that page, and every block needs @context, or
 *                         engines drop the reference or the whole block.
 *  4. NO ORPHAN POSTS     "Keep reading" once showed the two newest posts, so
 *                         six of nine had no inbound link from anywhere.
 *  5. NO DEAD CLASSES     Tailwind v3 only compiles opacity modifiers on its
 *                         scale; 22 classes (text-white/46, bg-white/58 …)
 *                         silently emitted nothing.
 *
 * It fails loudly if it cannot see the site, because an audit that can't read
 * the page reports zero problems. Exits non-zero on any finding.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const BASE = (process.env.AUDIT_URL || "http://localhost:3000").replace(/\/$/, "");
const PROD = "https://www.jesusfestivalmovement.com";
// Pages that are deliberately noindex, so absent from the sitemap, but still ours.
const EXTRA = ["/partner"];

const problems = [];
const fail = (check, where, msg) => problems.push({ check, where, msg });

async function get(path) {
  const res = await fetch(BASE + path, { redirect: "manual" });
  return { status: res.status, text: res.status === 200 ? await res.text() : "" };
}

const words = (html) =>
  html
    .replace(/<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

const mainOf = (html) => html.match(/<main\b[^>]*>([\s\S]*)<\/main>/)?.[1] ?? "";

// ── Discover pages from the sitemap, so a new page can't be skipped ──────
const sm = await get("/sitemap.xml").catch((e) => ({ status: 0, err: e }));
if (sm.status !== 200) {
  console.error(`✗ Cannot read ${BASE}/sitemap.xml (${sm.status || sm.err?.message}). Is the build running?`);
  process.exit(2);
}
const pages = [
  ...new Set([
    ...[...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(PROD, "") || "/"),
    ...EXTRA,
  ]),
];
if (pages.length < 5) {
  console.error(`✗ Sitemap listed only ${pages.length} pages — refusing to report a clean audit.`);
  process.exit(2);
}

const html = new Map();
for (const p of pages) {
  const r = await get(p);
  if (r.status !== 200) fail("reachable", p, `HTTP ${r.status}`);
  else html.set(p, r.text);
}

for (const [p, h] of html) {
  // 1. Visible without JS — strip React's hidden streamed segments.
  const body = h.split(/<body\b[^>]*>/)[1] ?? h;
  const total = words(body);
  const visible = words(body.replace(/<div hidden[^>]*>[\s\S]*?<\/div>(?=<script)/g, " "));
  if (/\$RC\(/.test(h)) fail("no-js", p, "streams content through a Suspense swap ($RC)");
  if (total > 50 && visible < total * 0.9)
    fail("no-js", p, `only ${visible} of ${total} words visible without JavaScript`);

  // 2. Exactly one main landmark.
  const mains = (h.match(/<main\b/g) || []).length;
  if (mains !== 1) fail("landmark", p, `${mains} <main> elements`);

  // 3. JSON-LD validity and @id resolution.
  const blocks = [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  const defined = new Set();
  const refs = [];
  const walk = (o) => {
    if (Array.isArray(o)) return o.forEach(walk);
    if (o && typeof o === "object") {
      if (typeof o["@id"] === "string") (Object.keys(o).length > 1 ? defined.add(o["@id"]) : refs.push(o["@id"]));
      Object.values(o).forEach(walk);
    }
  };
  for (const [, raw] of blocks) {
    let d;
    try {
      d = JSON.parse(raw);
    } catch (e) {
      fail("json-ld", p, `invalid JSON: ${e.message}`);
      continue;
    }
    for (const root of Array.isArray(d) ? d : [d])
      if (!root["@context"]) fail("json-ld", p, `block without @context (${root["@type"]}) is ignored`);
    walk(d);
  }
  if (!blocks.length) fail("json-ld", p, "no structured data");
  for (const id of new Set(refs)) if (!defined.has(id)) fail("json-ld", p, `dangling @id ${id}`);
}

// 4. Every post needs at least one contextual inbound link.
const posts = pages.filter((p) => /^\/blog\/[^/]+$/.test(p));
for (const post of posts) {
  const linked = [...html].some(
    ([p, h]) => p !== post && p !== "/blog" && mainOf(h).includes(`href="${post}"`),
  );
  if (!linked) fail("orphan", post, "no inbound link from any page except the /blog index");
}

// 5. Every Tailwind colour/opacity class used in source must exist in the CSS.
const cssHref = [...html.values()][0]?.match(/\/_next\/static\/[^"]+\.css/)?.[0];
if (!cssHref) fail("css", "-", "no stylesheet found to check classes against");
else {
  const css = (await get(cssHref)).text;
  const files = [];
  const walkDir = (d) => {
    for (const f of readdirSync(d)) {
      const full = join(d, f);
      if (statSync(full).isDirectory()) walkDir(full);
      else if (/\.(tsx?|jsx?)$/.test(f)) files.push(full);
    }
  };
  ["app", "components"].forEach(walkDir);
  const used = new Set();
  const re = /\b(?:bg|text|border|decoration|ring|from|via|to|fill|stroke|shadow|outline)-[a-z]+(?:-\d{2,3})?\/\d{1,3}\b/g;
  for (const f of files) for (const m of readFileSync(f, "utf8").matchAll(re)) used.add(m[0]);
  for (const cls of used) {
    // The compiled selector escapes the slash: .text-white\/46
    if (!css.includes(cls.replace("/", "\\/"))) fail("dead-class", cls, "used in source but not in the compiled CSS");
  }
}

// ── Report ───────────────────────────────────────────────────────────────
console.log(`\nAudited ${html.size} pages at ${BASE} (${posts.length} posts)\n`);
if (!problems.length) {
  console.log("✓ All checks passed: visible without JS, one <main>, JSON-LD resolves, no orphan posts, no dead classes.\n");
  process.exit(0);
}
const byCheck = problems.reduce((acc, x) => ((acc[x.check] ??= []).push(x), acc), {});
for (const [check, list] of Object.entries(byCheck)) {
  console.log(`✗ ${check} (${list.length})`);
  for (const { where, msg } of list.slice(0, 12)) console.log(`    ${where}  —  ${msg}`);
  if (list.length > 12) console.log(`    … and ${list.length - 12} more`);
}
console.log();
process.exit(1);
