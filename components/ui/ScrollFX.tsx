"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reading-progress bar + back-to-top button.
 *
 * The progress bar prefers a CSS scroll-driven animation (see `.scroll-progress`
 * in globals.css) which runs entirely off the main thread. Only browsers without
 * `animation-timeline` fall back to writing the transform from a rAF-throttled
 * scroll listener.
 */
export default function ScrollFX() {
  const bar = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const nativeTimeline =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("animation-timeline: scroll()");

    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;

      if (!nativeTimeline && bar.current) {
        const max = doc.scrollHeight - doc.clientHeight;
        const progress = max > 0 ? doc.scrollTop / max : 0;
        bar.current.style.transform = `scaleX(${progress})`;
      }

      setShowTop(doc.scrollTop > 900);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={bar}
        aria-hidden="true"
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[3px] bg-gradient-to-r from-gold-400 via-ember-400 to-gold-500"
      />

      <a
        href="#top"
        aria-label="Back to top"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
        className={`fab fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full glass-strong text-gold shadow-glow hover:scale-110 ${
          showTop ? "is-shown" : ""
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </>
  );
}
