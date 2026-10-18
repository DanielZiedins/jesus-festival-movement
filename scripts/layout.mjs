#!/usr/bin/env node
/**
 * Phone layout gate: `npm run audit:layout` against a running build
 * (AUDIT_URL to override; PAGES="/a,/b" for a subset; WIDTHS="360,390").
 *
 * The axe pass runs at desktop width, where none of these show up:
 *  - Horizontal overflow. `overflow-x: clip` hides the scrollbar, so a single
 *    nowrap pill wider than the screen reads as a cut-off page, not a bug.
 *  - Tap targets under 24×24 CSS px (WCAG 2.2 SC 2.5.8). Line-height alone
 *    does not make a link 24px tall; footer lists are the usual offenders.
 *    Inline links inside a sentence are exempt, as is any target whose 24px
 *    circle touches no other target (the SC's spacing exception).
 *  - Text under 11px, which is unreadable on a phone whatever its contrast.
 *
 * Headless Chrome clamps `--window-size` to 500px wide, which silently turns a
 * "phone" run into a small-tablet run. The viewport is set through device
 * metrics emulation instead, and the measured width is printed next to every
 * result so a clamped run can never pass unnoticed.
 *
 * Reuses the puppeteer-core install in .a11y-cache/ (run audit:a11y once).
 */
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const BASE = (process.env.AUDIT_URL || "http://localhost:3000").replace(/\/$/, "");
const PROD = "https://www.jesusfestivalmovement.com";
const EXTRA = ["/partner", "/privacy"];
const WIDTHS = (process.env.WIDTHS || "360,390").split(",").map(Number);
const CACHE = join(process.cwd(), ".a11y-cache");
const CHROME =
  process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

if (!existsSync(join(CACHE, "node_modules/puppeteer-core"))) {
  console.error("Run `npm run audit:a11y` once first — it installs the browser tools this uses.");
  process.exit(2);
}
const req = createRequire(join(CACHE, "node_modules/"));
const { default: puppeteer } = await import(req.resolve("puppeteer-core"));

async function pages() {
  if (process.env.PAGES) return process.env.PAGES.split(",").map((p) => p.trim());
  const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
  const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1].replace(PROD, "").replace(BASE, "") || "/",
  );
  if (!paths.length) throw new Error(`Empty sitemap at ${BASE} — refusing to pass with no pages.`);
  return [...new Set([...paths, ...EXTRA])];
}

/** Runs in the page. Returns everything that fails at the current width. */
function inspect() {
  const vw = document.documentElement.clientWidth;
  const visible = (e) =>
    e.checkVisibility({ opacityProperty: true, visibilityProperty: true }) &&
    e.getBoundingClientRect().width > 0;
  const label = (e) => {
    const t = (e.getAttribute("aria-label") || e.textContent || e.getAttribute("alt") || "").trim();
    return `<${e.tagName.toLowerCase()}> "${t.replace(/\s+/g, " ").slice(0, 50)}"`;
  };

  // 1. Overflow: the deepest elements sticking out past the right edge.
  const overflow = [];
  if (document.documentElement.scrollWidth > vw + 1) {
    for (const e of document.querySelectorAll("body *")) {
      if (!visible(e)) continue;
      const r = e.getBoundingClientRect();
      if (r.right <= vw + 1 || r.left >= vw) continue; // fine, or parked fully off-screen
      if ([...e.children].some((c) => c.getBoundingClientRect().right > vw + 1)) continue;
      if (getComputedStyle(e).position === "fixed") continue;
      overflow.push(`${label(e)} right edge ${Math.round(r.right)}px`);
    }
  }

  // 2. Target size (SC 2.5.8) with the inline and spacing exceptions.
  const sel = "a[href], button, input:not([type=hidden]), select, textarea, summary, [role=button]";
  const targets = [...document.querySelectorAll(sel)].filter(visible);
  const rects = targets.map((e) => e.getBoundingClientRect());
  const inline = (e) => {
    if (e.tagName !== "A") return false;
    const p = e.parentElement;
    const own = [...p.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 1);
    return own && getComputedStyle(e).display === "inline";
  };
  const small = [];
  targets.forEach((e, i) => {
    const r = rects[i];
    if (r.width >= 24 && r.height >= 24) return;
    if (inline(e)) return;
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const clash = rects.some((o, j) => {
      if (j === i || targets[j].contains(e) || e.contains(targets[j])) return false;
      const dx = Math.max(o.left - cx, 0, cx - o.right);
      const dy = Math.max(o.top - cy, 0, cy - o.bottom);
      return Math.hypot(dx, dy) < 12;
    });
    if (clash) small.push(`${label(e)} ${Math.round(r.width)}×${Math.round(r.height)}`);
  });

  // 3. Text under 11px.
  const tiny = [];
  for (const e of document.querySelectorAll("body *")) {
    const own = [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    if (!own || !visible(e)) continue;
    const size = parseFloat(getComputedStyle(e).fontSize);
    if (size < 11) tiny.push(`${label(e)} ${size}px`);
  }

  // 4. Headings whose words run together across element boundaries —
  // "From one<span class=block>city</span>" looks fine but reads (to crawlers
  // and screen readers) as "From onecity". Needs {" "} at the join in JSX.
  const joins = [];
  for (const h of document.querySelectorAll("h1,h2,h3")) {
    const w = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (w.nextNode()) if (w.currentNode.textContent.length) nodes.push(w.currentNode);
    for (let i = 1; i < nodes.length; i++) {
      const a = nodes[i - 1].textContent, b = nodes[i].textContent;
      if (/[A-Za-z0-9.,!?;:'’”)]$/.test(a) && /^[A-Za-z0-9“"‘(]/.test(b) && nodes[i - 1].parentElement !== nodes[i].parentElement)
        joins.push(`"${a.slice(-15)}|${b.slice(0, 15)}" in "${h.textContent.replace(/\s+/g, " ").trim().slice(0, 60)}"`);
    }
  }

  return { vw, scroll: document.documentElement.scrollWidth, overflow, small, tiny, joins };
}

const list = await pages();
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  protocolTimeout: 180_000,
  args: ["--no-sandbox", "--hide-scrollbars"],
});
let failed = 0;
try {
  for (const width of WIDTHS) {
    const page = await browser.newPage();
    // setViewport goes through Emulation.setDeviceMetricsOverride — not clamped.
    await page.setViewport({ width, height: 800, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
    for (const path of list) {
      try {
        await page.goto(`${BASE}${path}`, { waitUntil: "networkidle2", timeout: 90_000 });
      } catch (err) {
        failed++;
        console.log(`✗ ${path} @${width}: unreachable (${err.message})`);
        continue;
      }
      const r = await page.evaluate(inspect);
      if (r.vw !== width) {
        failed++;
        console.log(`✗ ${path}: measured ${r.vw}px, asked for ${width}px — emulation failed`);
        continue;
      }
      const n = r.overflow.length + r.small.length + r.tiny.length + r.joins.length + (r.scroll > r.vw + 1 ? 1 : 0);
      if (!n) {
        console.log(`  ✓ ${path} @${r.vw}px`);
        continue;
      }
      failed++;
      console.log(`✗ ${path} @${r.vw}px (page ${r.scroll}px wide)`);
      for (const o of r.overflow.slice(0, 8)) console.log(`    overflow   ${o}`);
      for (const s of r.small.slice(0, 12)) console.log(`    target<24  ${s}`);
      if (r.small.length > 12) console.log(`    … ${r.small.length - 12} more small targets`);
      for (const t of r.tiny.slice(0, 8)) console.log(`    text<11px  ${t}`);
      for (const j of r.joins.slice(0, 8)) console.log(`    run-on     ${j}`);
      if (r.tiny.length > 8) console.log(`    … ${r.tiny.length - 8} more tiny text`);
    }
    await page.close();
  }
} finally {
  await browser.close();
}
console.log(
  failed
    ? `\n${failed} page×width result(s) failed at ${BASE}.`
    : `\n✓ ${list.length} pages × ${WIDTHS.join("/")}px: no overflow, every target ≥24px or spaced, no text under 11px, no run-together headings.`,
);
process.exit(failed ? 1 : 0);
