/**
 * Makes the scroll entrances fail visible.
 *
 * Reveal renders framer-motion's `initial={{opacity:0}}`, which means the
 * server-rendered HTML ships `style="opacity:0"` on every revealed block. If
 * JavaScript is blocked, the bundle fails to load, or React simply never
 * hydrates, that content stays invisible — not "unanimated", *gone*. Verified
 * on /festivals: 13 of 13 blocks at computed opacity 0, including the primary
 * CTA and the email capture.
 *
 * Two layers, neither of which depends on React:
 *
 *  1. A CSS rule (globals.css) force-shows `[data-reveal]` until the inline
 *     script below marks the document `motion-ready`. No JS at all → the page
 *     renders in full, just without entrances.
 *  2. The script also sweeps for blocks that are in the viewport yet still
 *     invisible, which covers JS running but framer never taking over. It
 *     leaves below-fold blocks alone, so a healthy page animates as designed.
 *
 * It is an inline script rather than an effect on purpose: an effect would
 * need the hydration that is exactly what fails here. Same reasoning as
 * EventCountdown.
 */
const GUARD = `
(function () {
  var d = document, root = d.documentElement;
  root.classList.add('motion-ready');

  var poll, idle;
  function stop() {
    clearInterval(poll);
    removeEventListener('scroll', schedule);
    removeEventListener('resize', schedule);
    d.removeEventListener('visibilitychange', schedule);
  }
  // Grace period: how long a block may sit in the viewport, still invisible,
  // before we stop waiting for framer. Without this the guard wins the race on
  // scroll and the block appears without ever animating.
  var GRACE = 600;
  function sweep(ignoreGrace) {
    var nodes = d.querySelectorAll('[data-reveal]');
    if (!nodes.length) return;
    // Throttled and hidden contexts can report innerHeight 0; be generous,
    // since the worst case of over-revealing is only a skipped animation.
    var vh = innerHeight || root.clientHeight || 800, pending = 0, i, el, r, since, now = Date.now();
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      if (getComputedStyle(el).opacity !== '0') { el.__rvSeen = 0; continue; }
      pending++;
      r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) {
        since = el.__rvSeen || (el.__rvSeen = now);
        if (!ignoreGrace && now - since < GRACE) continue; // framer still has time
        el.style.setProperty('opacity', '1', 'important');
        el.style.setProperty('transform', 'none', 'important');
        pending--;
      } else {
        el.__rvSeen = 0; // left the viewport; restart its clock next time
      }
    }
    if (!pending) stop();
  }
  // Coalesce with setTimeout, never rAF: rAF belongs to the same rendering
  // pipeline that stalls in the cases this guard exists for.
  function schedule() {
    if (idle) return;
    idle = setTimeout(function () { idle = 0; sweep(); }, 120);
  }
  // Give framer a fair chance to play its own entrance first.
  setTimeout(function () { sweep(true); }, 1200);
  poll = setInterval(sweep, 1000);
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  d.addEventListener('visibilitychange', schedule);
})();
`;

export default function RevealGuard() {
  return <script dangerouslySetInnerHTML={{ __html: GUARD }} />;
}
