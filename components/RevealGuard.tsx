/**
 * Drives every scroll entrance on the site (Reveal, the Great Commission
 * words, the map routes) and makes them fail visible.
 *
 * Entrances used to be framer-motion, which shipped `style="opacity:0"` in the
 * server HTML and needed React to hydrate before anything appeared — a 37KB
 * library on every page whose failure mode was a blank page. Now:
 *
 *  - The markup is visible by default. The hidden "before" state lives in CSS
 *    (globals.css) under `html.motion-ready`, a class only this script adds —
 *    so no JavaScript, or no IntersectionObserver, means a complete page that
 *    simply doesn't animate.
 *  - One IntersectionObserver marks blocks `data-rv-in` as they scroll in;
 *    CSS transitions do the animating. `data-rv-now` blocks (above the fold)
 *    are shown straight away.
 *  - A timer sweep shows anything that has sat in the viewport, still hidden,
 *    for longer than GRACE. It covers a starved observer (throttled or hidden
 *    tabs stop delivering IO callbacks and rAF), and uses setTimeout, never
 *    rAF, for the same reason.
 *  - A MutationObserver picks up blocks added by client-side navigation.
 *
 * It is an inline script rather than an effect on purpose: it must run
 * without waiting for hydration. Same reasoning as EventCountdown.
 */
const GUARD = `
(function () {
  var d = document, root = d.documentElement, w = window;
  if (!('IntersectionObserver' in w)) return;
  root.classList.add('motion-ready');

  var GRACE = 600, watched = new WeakSet(), seen = new WeakMap(), poll = 0, idle = 0;
  var io = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) if (entries[i].isIntersecting) show(entries[i].target);
  }, { rootMargin: '0px 0px -80px 0px' });

  function show(el) {
    el.setAttribute('data-rv-in', '');
    io.unobserve(el);
  }
  function pending() {
    return d.querySelectorAll('[data-reveal]:not([data-rv-in])');
  }
  function scan() {
    var nodes = pending(), i, el;
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      if (watched.has(el)) continue;
      watched.add(el);
      if (el.hasAttribute('data-rv-now')) setTimeout(show.bind(null, el), 30);
      else io.observe(el);
    }
    if (nodes.length && !poll) poll = setInterval(sweep, 1000);
  }
  function sweep() {
    var nodes = pending(), now = Date.now(), i, el, r;
    // Throttled and hidden contexts can report innerHeight 0; be generous,
    // since the worst case of over-revealing is only a skipped animation.
    var vh = w.innerHeight || root.clientHeight || 800;
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) {
        if (!seen.has(el)) seen.set(el, now);
        else if (now - seen.get(el) >= GRACE) show(el);
      } else {
        seen.delete(el); // left the viewport; restart its clock next time
      }
    }
    if (!nodes.length) { clearInterval(poll); poll = 0; }
  }
  function schedule() {
    if (idle) return;
    idle = setTimeout(function () { idle = 0; scan(); sweep(); }, 120);
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', scan);
  else scan();
  new MutationObserver(schedule).observe(root, { childList: true, subtree: true });
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  d.addEventListener('visibilitychange', schedule);
})();
`;

export default function RevealGuard() {
  return <script dangerouslySetInnerHTML={{ __html: GUARD }} />;
}
