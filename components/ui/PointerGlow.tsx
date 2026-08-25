"use client";

import { useEffect, useRef } from "react";

/**
 * The revival glow that follows the cursor across the hero.
 *
 * Listens on its own parent element and eases the position with a spring-ish
 * lerp inside a single rAF loop — no state, no re-renders, no animation
 * library. Skipped entirely on touch devices and for reduced-motion readers.
 */
export default function PointerGlow() {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = el.current;
    const host = node?.parentElement;
    if (!node || !host) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;

    let targetX = 0.5;
    let targetY = 0.5;
    let x = 0.5;
    let y = 0.5;
    let frame = 0;
    let idle = true;

    const loop = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      node.style.setProperty("--px", `${(x * 100).toFixed(2)}%`);
      node.style.setProperty("--py", `${(y * 100).toFixed(2)}%`);

      if (Math.abs(targetX - x) < 0.001 && Math.abs(targetY - y) < 0.001) {
        idle = true;
        frame = 0;
        return;
      }
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      targetX = (e.clientX - r.left) / r.width;
      targetY = (e.clientY - r.top) / r.height;
      if (idle) {
        idle = false;
        frame = requestAnimationFrame(loop);
      }
    };

    host.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      host.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={el}
      aria-hidden="true"
      className="pointer-glow pointer-events-none absolute h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(245,196,81,0.14), rgba(255,107,53,0.08) 40%, transparent 70%)",
      }}
    />
  );
}
