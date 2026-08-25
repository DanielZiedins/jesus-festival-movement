"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Drives the CSS motion system for the whole document, mounted once in the root
 * layout. Every `<Reveal>` is a plain server-rendered element carrying
 * `data-reveal="scroll"`; this flips it to `.is-in`.
 *
 * Deliberately NOT dependent on IntersectionObserver. Because `.js` hides
 * un-revealed content, a silent observer failure would mean permanently
 * invisible text — so a geometry check (getBoundingClientRect, run on mount and
 * on scroll) is the primary mechanism and IO is only an optimization layered on
 * top. Both paths converge on the same `show()`, so content can be late but
 * never lost.
 */

const MARGIN = 60; // px of the element that must be on screen to count

export default function RevealEngine() {
  const pathname = usePathname();

  useEffect(() => {
    const selector = '[data-reveal="scroll"]';
    let pending = Array.from(
      document.querySelectorAll<HTMLElement>(`${selector}:not(.is-in)`),
    );
    if (!pending.length) return;

    const show = (el: HTMLElement) => el.classList.add("is-in");

    /** Reveal everything at or above the fold. Returns how many remain. */
    const sweep = () => {
      if (!pending.length) return 0;
      const limit = window.innerHeight - MARGIN;
      const rest: HTMLElement[] = [];
      for (const el of pending) {
        const { top, bottom } = el.getBoundingClientRect();
        // Visible, or already scrolled past — either way, show it.
        if (top < limit) show(el);
        else rest.push(el);
      }
      pending = rest;
      return pending.length;
    };

    let io: IntersectionObserver | null = null;
    let timer = 0;

    const teardown = () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io?.disconnect();
      io = null;
    };

    // Coalesced with a timer rather than requestAnimationFrame on purpose:
    // rAF is tied to the rendering pipeline and can be starved in exactly the
    // situations this fallback exists to cover. A timer is a plain task.
    function onScroll() {
      if (timer) return;
      timer = window.setTimeout(() => {
        timer = 0;
        if (!sweep()) teardown();
      }, 50);
    }

    // Pass one, synchronously — before any scrolling can happen.
    if (!sweep()) return;

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            show(el);
            io?.unobserve(el);
            pending = pending.filter((n) => n !== el);
          }
          if (!pending.length) teardown();
        },
        { rootMargin: `0px 0px -${MARGIN}px 0px`, threshold: 0.01 },
      );
      pending.forEach((n) => io!.observe(n));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return teardown;
  }, [pathname]);

  return null;
}
