#!/usr/bin/env node
/**
 * Accessibility gate: `npm run audit:a11y` against a running build.
 *
 *   npm run build && npm start              # in one terminal
 *   npm run audit:a11y                      # in another (AUDIT_URL to override)
 *
 * Runs axe-core with the WCAG 2.0, 2.1 and 2.2 A/AA rules in real headless
 * Chrome over every page in the sitemap. Its tools install on first run into
 * .a11y-cache/ (git-ignored), so nothing is added to package.json or to the
 * Vercel install. Set CHROME_PATH if Chrome is not in the default macOS spot.
 *
 * Two traps it is built to avoid, both of which have produced false passes:
 *  - Grading mid-animation. axe reads computed colour including ancestor
 *    opacity, so a half-revealed block makes white text look near-black and
 *    invents contrast failures — or, if still at opacity 0, hides real ones.
 *    Every page is walked top to bottom and allowed to settle first.
 *  - Reporting "0 failures" for a page it could not see. Unreachable pages,
 *    pages with no <main>, and axe's "needs review" bucket are all reported.
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const BASE = (process.env.AUDIT_URL || "http://localhost:3000").replace(/\/$/, "");
const PROD = "https://www.jesusfestivalmovement.com";
const EXTRA = ["/partner", "/privacy"];
const CACHE = join(process.cwd(), ".a11y-cache");
const CHROME =
  process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

if (!existsSync(join(CACHE, "node_modules/puppeteer-core")) || !existsSync(join(CACHE, "node_modules/axe-core"))) {
  console.log("Installing audit tools into .a11y-cache/ (first run only)…");
  execSync(`npm i --prefix "${CACHE}" --no-save --silent puppeteer-core@24 axe-core@4`, { stdio: "inherit" });
}
const req = createRequire(join(CACHE, "node_modules/"));
const { default: puppeteer } = await import(req.resolve("puppeteer-core"));
const axeSource = readFileSync(req.resolve("axe-core/axe.min.js"), "utf8");

/**
 * Worst-case contrast for elements axe could not grade.
 *
 * Each element is scrolled into view and screenshotted on its own, with all
 * text hidden, so the pixels sampled are exactly what sits behind it. (A
 * single full-page capture was tried first and proved unreliable: layout can
 * shift during the capture, so boxes measured beforehand land on the wrong
 * pixels — it failed a 6.49:1 button at 1.09:1.)
 *
 * Light text is judged against the bright end of its background (90th
 * percentile, so sparse star specks do not count), dark text against the dark
 * end. Semi-transparent text is composited over that background first, as the
 * eye sees it. Skipped: containers with no text of their own, and text whose
 * fill is transparent by design (outline or gradient-clipped display text).
 */
async function pixelContrast(page, selectors) {
  // 1. Read each element's real colour and size while text is still visible.
  const items = await page.evaluate((sels) => {
    const out = [];
    for (const sel of sels) {
      const e = document.querySelector(sel);
      if (!e) continue;
      const cs = getComputedStyle(e);
      const ownText = [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      const clipped = cs.backgroundClip === "text" || cs.webkitBackgroundClip === "text";
      if (!ownText || clipped) continue;
      // Outline text (near-transparent fill + solid stroke): judge the stroke.
      const stroke = parseFloat(cs.webkitTextStrokeWidth) || 0;
      const fillA = +(cs.color.match(/[\d.]+/g)?.[3] ?? 1);
      const m = (stroke > 0 && fillA < 0.2 ? cs.webkitTextStrokeColor : cs.color).match(/[\d.]+/g);
      if (!m) continue;
      const a = m[3] !== undefined ? +m[3] : 1;
      const r = e.getBoundingClientRect();
      if (a === 0 || r.width < 2 || r.height < 2) continue;
      const size = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight) >= 700;
      e.setAttribute("data-a11y-px", String(out.length));
      out.push({
        sel, rgb: [+m[0], +m[1], +m[2]], a,
        need: size >= 24 || (bold && size >= 18.66) ? 3 : 4.5,
        radius: Math.min(parseFloat(cs.borderTopLeftRadius) || 0, r.width / 2, r.height / 2),
      });
    }
    return out;
  }, selectors);
  if (!items.length) return [];

  // 2. Hide all text (fill, stroke, shadow, gradient-clipped fills) and every
  //    fixed layer, so only what sits behind the text remains. Sticky columns
  //    stay: they are real content in the flow.
  await page.addStyleTag({
    // transition:none — `transition-all` animates visibility, so a hidden fixed
    // nav otherwise stays painted for its whole transition and gets sampled.
    content: "html,body{scroll-behavior:auto!important}*{transition:none!important;animation:none!important;color:transparent!important;-webkit-text-fill-color:transparent!important;-webkit-text-stroke:0!important;text-shadow:none!important;caret-color:transparent!important}",
  });
  await page.evaluate(() => {
    for (const el of document.querySelectorAll("body *")) {
      const cs = getComputedStyle(el);
      if (cs.backgroundClip === "text" || cs.webkitBackgroundClip === "text") el.style.setProperty("background", "none", "important");
      if (cs.position === "fixed") el.style.setProperty("visibility", "hidden", "important");
    }
  });

  // 3. One screen at a time: scroll instantly, capture the viewport at rest,
  //    and measure every pending element that sits wholly inside it. About 15
  //    captures per page instead of one per element.
  const vh = 900;
  const pending = new Set(items.map((_, i) => i));
  const fails = [];
  const docH = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < docH && pending.size; y += vh - 160) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
    await new Promise((r) => setTimeout(r, 160));
    const boxes = await page.evaluate((idx) => {
      const out = [];
      for (const i of idx) {
        const e = document.querySelector(`[data-a11y-px="${i}"]`);
        if (!e) continue;
        const r = e.getBoundingClientRect();
        if (r.top >= 0 && r.bottom <= innerHeight && r.left >= 0 && r.right <= innerWidth)
          out.push({ i, x: r.left, y: r.top, w: r.width, h: r.height });
      }
      return out;
    }, [...pending]);
    if (!boxes.length) continue;
    const b64 = await page.screenshot({ encoding: "base64" });
    // A11Y_DEBUG_DIR=/some/dir saves every capture, to eyeball what was sampled.
    if (process.env.A11Y_DEBUG_DIR) {
      const { writeFileSync } = await import("node:fs");
      writeFileSync(`${process.env.A11Y_DEBUG_DIR}/${Date.now()}-y${y}.png`, Buffer.from(b64, "base64"));
    }
    const ratios = await page.evaluate(async (b64, boxes, items) => {
      const img = new Image();
      img.src = "data:image/png;base64," + b64;
      await img.decode();
      const c = document.createElement("canvas");
      c.width = img.width; c.height = img.height;
      const ctx = c.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(img, 0, 0);
      const k = img.width / innerWidth; // device pixel ratio of the capture
      const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
      const L = (p) => 0.2126 * lin(p[0]) + 0.7152 * lin(p[1]) + 0.0722 * lin(p[2]);
      return boxes.map((b) => {
        const it = items[b.i];
        // Stay inside rounded corners so a badge is sampled within its fill.
        const ins = Math.min(Math.ceil(it.radius * 0.3) + 1, Math.floor(Math.min(b.w, b.h) / 3));
        const x = Math.round((b.x + ins) * k), y = Math.round((b.y + ins) * k);
        const w = Math.max(1, Math.round((b.w - ins * 2) * k)), h = Math.max(1, Math.round((b.h - ins * 2) * k));
        const d = ctx.getImageData(x, y, Math.min(w, c.width - x), Math.min(h, c.height - y)).data;
        // At most ~4,000 evenly spread samples, luminance computed once each —
        // a large card is hundreds of thousands of pixels, and sorting with the
        // maths inside the comparator timed the browser out.
        const n = d.length / 4, step = Math.max(1, Math.floor(n / 4000));
        const px = [];
        for (let i = 0; i < n; i += step) {
          const p = [d[i * 4], d[i * 4 + 1], d[i * 4 + 2]];
          px.push({ p, l: L(p) });
        }
        px.sort((a, b) => a.l - b.l);
        // Light text: judge against the bright end (90th percentile, so sparse
        // star specks do not count); dark text against the dark end.
        const bg = px[Math.floor((L(it.rgb) > 0.4 ? 0.9 : 0.1) * (px.length - 1))].p;
        const fg = it.rgb.map((v, i) => v * it.a + bg[i] * (1 - it.a));
        const X = L(fg), Y = L(bg);
        return { i: b.i, ratio: (Math.max(X, Y) + 0.05) / (Math.min(X, Y) + 0.05) };
      });
    }, b64, boxes, items);
    for (const { i, ratio } of ratios) {
      pending.delete(i);
      if (ratio < items[i].need) fails.push(`${items[i].sel.slice(0, 60)}  ${ratio.toFixed(2)}:1 (needs ${items[i].need})`);
    }
  }
  // Anything taller than a screen was never wholly in view; it is reported as
  // unmeasured rather than silently counted as a pass.
  unmeasured += pending.size;
  return fails;
}

const sm = await fetch(`${BASE}/sitemap.xml`).catch(() => null);
if (!sm?.ok) {
  console.error(`✗ Cannot read ${BASE}/sitemap.xml. Is the build running?`);
  process.exit(2);
}
const pages = [
  ...new Set([
    ...[...(await sm.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(PROD, "") || "/"),
    ...EXTRA,
  ]),
];

if (process.env.PAGES) {
  const only = new Set(process.env.PAGES.split(",").map((p) => p.trim()));
  pages.splice(0, pages.length, ...pages.filter((p) => only.has(p)));
}

// Chrome can crash under memory pressure on a busy machine. A crash must not
// end the run: relaunch with a fresh profile and carry on with the next page.
let launches = 0;
const launch = () =>
  puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    protocolTimeout: 300000,
    args: ["--no-sandbox", `--user-data-dir=/tmp/jfm-a11y-${process.pid}-${++launches}`],
  });
let browser = await launch();

const violations = new Map();
const review = new Map(); // rule id -> { help, count, sample }
let pixelChecked = 0;
let unmeasured = 0;
const unreachable = [];
for (const path of pages) {
  if (!browser.connected) browser = await launch();
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(180000);
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  try {
    const res = await page.goto(BASE + path, { waitUntil: "load" });
    if (!res || res.status() !== 200) throw new Error(`HTTP ${res?.status()}`);
    // The site scrolls smoothly (scroll-behavior: smooth). An audit must not:
    // screenshots taken mid-glide land on the wrong pixels and read ~1.0:1.
    await page.addStyleTag({ content: "html,body{scroll-behavior:auto!important}" });
    // Walk the page so every scroll entrance plays, then settle.
    await page.evaluate(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      await sleep(1200);
      for (let y = 0; y <= document.body.scrollHeight; y += 700) {
        window.scrollTo(0, y);
        await sleep(450);
      }
      window.scrollTo(0, 0);
      await sleep(1500);
    });
    if (!(await page.$("main"))) throw new Error("no <main> — page did not render");
    // Self-test: a line that must fail and one that must pass, over a gradient
    // so the pixel path (not just axe) is exercised. If the audit cannot catch
    // a known failure, its "no violations" means nothing.
    if (path === pages[0]) {
      await page.evaluate(() => {
        const box = document.createElement("div");
        box.style.cssText = "background:linear-gradient(90deg,#0b1122,#16284a);padding:16px;position:relative;z-index:1";
        box.innerHTML =
          '<p id="a11y-selftest-bad" style="color:rgba(255,255,255,.15);font-size:14px;margin:0">Self-test: deliberately too faint.</p>' +
          '<p id="a11y-selftest-good" style="color:#ffffff;font-size:14px;margin:0">Self-test: clearly legible.</p>';
        document.querySelector("main").prepend(box);
      });
    }
    await page.evaluate(axeSource);
    const r = await page.evaluate(() =>
      window.axe.run(document, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"] },
      }),
    );
    // axe gives up on text over gradients and textures — most of this site.
    // Measure those from real pixels instead: hide all text, screenshot, and
    // sample the background actually behind each element.
    // WCAG 1.4.1: a link inside running text must be distinguishable by more
    // than colour. axe usually files this as "needs review", which is how
    // every inline Journal link once shipped looking exactly like plain text.
    const indistinct = await page.evaluate(() => {
      const bad = [];
      for (const a of document.querySelectorAll("main p a, main li a")) {
        const p = a.parentElement?.closest("p, li");
        if (!p) continue;
        const own = (a.textContent || "").trim(), all = (p.textContent || "").trim();
        if (all.length <= own.length + 3) continue; // a standalone link, not running text
        const ca = getComputedStyle(a), cp = getComputedStyle(p);
        const underlined = ca.textDecorationLine.includes("underline");
        const recoloured = ca.color !== cp.color;
        const bolder = parseInt(ca.fontWeight) >= parseInt(cp.fontWeight) + 300;
        // Colour alone is only enough with a non-colour cue; require one of the two.
        if (!underlined && !bolder) bad.push(`${own.slice(0, 40)}${recoloured ? " (colour only)" : " (identical to text)"}`);
      }
      return bad;
    });
    if (indistinct.length) {
      const entry = violations.get("link-in-running-text") ?? {
        impact: "serious",
        help: "Links inside text must be distinguishable without colour (WCAG 1.4.1)",
        hits: [],
      };
      for (const t of indistinct.slice(0, 4)) entry.hits.push(`${path}  "${t}"`);
      violations.set("link-in-running-text", entry);
    }
    const undecided = r.incomplete.find((v) => v.id === "color-contrast");
    if (undecided) {
      const selectors = undecided.nodes.map((n) => n.target[0]).filter((t) => typeof t === "string");
      const fails = await pixelContrast(page, selectors);
      pixelChecked += selectors.length;
      if (fails.length) {
        const entry = violations.get("color-contrast-pixel") ?? {
          impact: "serious",
          help: "Contrast measured from rendered pixels (over a gradient or texture)",
          hits: [],
        };
        for (const f of fails.slice(0, 6)) entry.hits.push(`${path}  ${f}`);
        violations.set("color-contrast-pixel", entry);
      }
      r.incomplete = r.incomplete.filter((v) => v.id !== "color-contrast");
    }
    for (const v of r.incomplete) {
      const e = review.get(v.id) ?? { help: v.help, count: 0, sample: "" };
      e.count += v.nodes.length;
      e.sample ||= `${path}  ${v.nodes[0]?.target.join(" ").slice(0, 60)}  ${(v.nodes[0]?.any?.[0]?.message || "").slice(0, 90)}`;
      review.set(v.id, e);
    }
    for (const v of r.violations) {
      const entry = violations.get(v.id) ?? { impact: v.impact, help: v.help, hits: [] };
      for (const n of v.nodes.slice(0, 3))
        entry.hits.push(`${path}  ${n.target.join(" ").slice(0, 70)}  ${(n.failureSummary || "").split("\n")[1]?.trim().slice(0, 90) ?? ""}`);
      violations.set(v.id, entry);
    }
    // Progress per page, so a run cut short still reports what it covered.
    console.log(`  · ${path}`);
  } catch (e) {
    unreachable.push(`${path} (${e.message})`);
  }
  await page.close().catch(() => {});
}
await browser.close().catch(() => {});

const allHits = [...violations.values()].flatMap((v) => v.hits);
const caughtBad = allHits.some((h) => h.includes("a11y-selftest-bad"));
const flaggedGood = allHits.some((h) => h.includes("a11y-selftest-good"));
for (const v of violations.values()) v.hits = v.hits.filter((h) => !h.includes("a11y-selftest"));
for (const [id, v] of [...violations]) if (!v.hits.length) violations.delete(id);
if (!unreachable.some((u) => u.startsWith(pages[0] + " ")) && (!caughtBad || flaggedGood)) {
  console.error(
    `\n✗ Self-test failed: ${!caughtBad ? "a deliberately unreadable line was NOT caught" : "a clearly legible line WAS flagged"}.` +
      " The contrast check cannot be trusted on this run.\n",
  );
  for (const h of allHits.filter((h) => h.includes("a11y-selftest"))) console.error(`    saw: ${h}`);
  process.exit(2);
}
console.log(`\nAudited ${pages.length - unreachable.length}/${pages.length} pages at ${BASE} against WCAG 2.2 AA (self-test passed)\n`);
if (unreachable.length) {
  console.log(`✗ could not audit (${unreachable.length}):`);
  for (const u of unreachable) console.log(`    ${u}`);
}
const order = { critical: 0, serious: 1, moderate: 2, minor: 3 };
for (const [id, v] of [...violations].sort((a, b) => (order[a[1].impact] ?? 9) - (order[b[1].impact] ?? 9))) {
  console.log(`✗ [${v.impact}] ${id} — ${v.help}`);
  for (const h of v.hits.slice(0, 6)) console.log(`    ${h}`);
}
if (pixelChecked) console.log(`  ${pixelChecked - unmeasured} element(s) over gradients/textures were checked from rendered pixels${unmeasured ? ` (${unmeasured} taller than a screen, not measured)` : ""}.`);
if (review.size) {
  // Not failures, but not passes either — axe could not decide. Gradients and
  // background images are the usual reason; check the samples by eye.
  console.log(`\n  Needs review (axe could not decide automatically):`);
  for (const [id, e] of [...review].sort((a, b) => b[1].count - a[1].count))
    console.log(`    ${String(e.count).padStart(3)}  ${id} — ${e.help}\n         e.g. ${e.sample}`);
}
if (!violations.size && !unreachable.length) {
  console.log("✓ No WCAG 2.2 AA violations.\n");
  process.exit(0);
}
console.log();
process.exit(1);
