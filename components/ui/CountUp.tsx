"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a stat up when it scrolls into view.
 *
 * The finished value is what renders on the server, so the real number is in
 * the HTML for crawlers and for anyone without JavaScript — the animation only
 * ever replaces an already-correct figure.
 */
export default function CountUp({ value }: { value: string }) {
  const target = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let start = 0;
    const DURATION = 1600;

    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown((target * eased).toFixed(1) + suffix);
      if (t < 1) frame = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        setShown("0.0" + suffix);
        frame = requestAnimationFrame(step);
      },
      { rootMargin: "0px 0px -60px 0px" },
    );

    io.observe(node);
    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [target, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  );
}
