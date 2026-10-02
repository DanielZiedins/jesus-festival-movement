#!/usr/bin/env node
/**
 * Tell Bing (and through IndexNow, Yandex, Seznam, Naver) about our pages.
 * Bing's index is what ChatGPT search and Copilot answer from, so this is the
 * fastest route for a new or rewritten page to become citable.
 *
 *   npm run indexnow                 # every URL in the live sitemap
 *   npm run indexnow -- /blog/foo    # just these paths
 *
 * Run it AFTER a deploy is live: IndexNow verifies ownership by fetching
 * https://<host>/<key>.txt, and a submission made before that file is live is
 * rejected. Submit after publishing or materially rewriting pages — not on
 * every deploy. Google has no equivalent ping; it reads the sitemap.
 */
import { readdirSync, readFileSync } from "node:fs";

const SITE = "https://www.jesusfestivalmovement.com";
const host = new URL(SITE).host;

// The key is whichever 32-hex .txt lives in public/ — found by pattern so it
// can be rotated by replacing the file.
const keyFile = readdirSync("public").find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("No IndexNow key file (public/<32 hex>.txt) found.");
const key = readFileSync(`public/${keyFile}`, "utf8").trim();
const keyLocation = `${SITE}/${keyFile}`;

const live = await fetch(keyLocation);
if (!live.ok || (await live.text()).trim() !== key) {
  console.error(`✗ ${keyLocation} is not live with the right key yet. Deploy first.`);
  process.exit(2);
}

// Take URLs from the LIVE sitemap, never a local copy, so a stale or partial
// build can't submit the wrong set.
const args = process.argv.slice(2);
const urlList = args.length
  ? args.map((p) => (p.startsWith("http") ? p : SITE + p))
  : [...(await (await fetch(`${SITE}/sitemap.xml`)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

if (!urlList.length) {
  console.error("✗ No URLs to submit.");
  process.exit(2);
}

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});
// 200 and 202 Accepted are both success. Report the count, not just the status
// — a malformed list can still come back 200.
console.log(`${res.ok ? "✓" : "✗"} IndexNow ${res.status} ${res.statusText} — submitted ${urlList.length} URLs`);
if (!res.ok) console.log(await res.text());
process.exit(res.ok ? 0 : 1);
