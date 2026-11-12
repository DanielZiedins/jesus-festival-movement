"use client";

import { useEffect, useRef } from "react";

/**
 * Reading progress bar. Where the browser supports scroll-driven animations
 * the bar is pure CSS (`.progress-css` in globals.css) and this component
 * attaches nothing; elsewhere a passive scroll listener writes the transform
 * directly — no React state, so scrolling never re-renders.
 */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof CSS !== "undefined" && CSS.supports?.("animation-timeline: scroll()")) return;
    const el = bar.current;
    if (!el) return;
    let raf = 0;
    const paint = () => {
      raf = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
      el.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };
    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="no-print pointer-events-none fixed inset-x-0 top-0 z-[60] h-px bg-white/[0.05]" aria-hidden="true">
      <div
        ref={bar}
        className="progress-css h-full origin-left bg-gradient-to-r from-ember via-gold to-sky-300 shadow-[0_0_18px_rgba(244,196,92,.8)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
