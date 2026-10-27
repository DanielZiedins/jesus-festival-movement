#!/usr/bin/env node
/**
 * Deep-link gate: `npm run audit:deeplinks` (AUDIT_URL, LINKS="/a#x,/b#y").
 * Cold-loads anchor links at desktop and phone widths and checks the target
 * lands just below the fixed header with no layout shift. A layout scroll
 * reset or late-mounting sections can silently break every #anchor link.
 * Reuses puppeteer-core from .a11y-cache/ (run audit:a11y once).
 */
import { createRequire } from "node:module"; import { join } from "node:path";
const req = createRequire(join(process.cwd(), ".a11y-cache/node_modules/"));
const { default: puppeteer } = await import(req.resolve("puppeteer-core"));
const B = process.env.AUDIT_URL || "https://www.jesusfestivalmovement.com";
const LINKS = (process.env.LINKS || [
  "/answers#permits", "/answers#what-is-baptism", "/answers#jesus-festival-2027", "/answers#what-if-nobody-responds",
  "/glossary#baptism", "/glossary#testimony", "/glossary#street-evangelism",
  "/#movement", "/#fruit", "/#contact",
  "/blog/how-to-give-an-altar-call-at-an-outdoor-event#if-nobody-comes-forward",
  "/blog/how-to-preach-the-gospel-outdoors#answering-hecklers-with-grace",
  "/know-jesus#questions", "/blog/what-is-revival#questions",
].join(",")).split(",");
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--no-sandbox"] });
let bad = 0;
for (const [w, h, mobile] of [[1280, 900, false], [390, 844, true]]) {
  for (const link of LINKS) {
    const p = await b.newPage();
    await p.setViewport({ width: w, height: h, isMobile: mobile, hasTouch: mobile });
    const c = await p.createCDPSession(); await c.send("Network.setCacheDisabled", { cacheDisabled: true });
    await p.evaluateOnNewDocument(() => { window.__cls = 0; new PerformanceObserver((l) => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__cls += e.value; }).observe({ type: "layout-shift", buffered: true }); });
    await p.goto(B + link, { waitUntil: "networkidle2", timeout: 90000 });
    await new Promise((r) => setTimeout(r, 2500));
    const r = await p.evaluate((id) => { const el = document.getElementById(decodeURIComponent(id)); if (!el) return { missing: true }; return { top: Math.round(el.getBoundingClientRect().top), y: Math.round(scrollY), cls: +window.__cls.toFixed(3) }; }, link.split("#")[1]);
    const ok = !r.missing && r.top >= -10 && r.top <= 200 && r.cls < 0.1;
    if (!ok) bad++;
    console.log(`${ok ? "  ✓" : "  ✗"} ${w}px ${link.padEnd(70)} ${JSON.stringify(r)}`);
    await p.close();
  }
}
await b.close();
console.log(bad ? `\n${bad} deep link(s) landed wrong` : "\n✓ all deep links land on target with no layout shift");
process.exit(bad ? 1 : 0);
