"use client";

import { useEffect, useState } from "react";
import Icon from "./ui/Icon";

const DISMISS_KEY = "jfm-join-dismissed";

/**
 * Slides up once the reader is genuinely engaged (past ~55% of the page),
 * hides itself around the real signup section so it never competes with it,
 * and stays dismissed for 30 days.
 */
export default function StickyJoin() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(true); // assume until storage read

  useEffect(() => {
    try {
      const until = Number(localStorage.getItem(DISMISS_KEY) ?? 0);
      setDismissed(Date.now() < until);
    } catch {
      setDismissed(false);
    }
  }, []);

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const progress =
        doc.scrollTop / Math.max(1, doc.scrollHeight - doc.clientHeight);

      // Don't shout over the signup section while it's on screen.
      const join = document.getElementById("join");
      let joinVisible = false;
      if (join) {
        const r = join.getBoundingClientRect();
        joinVisible = r.top < window.innerHeight && r.bottom > 0;
      }

      setShow(progress > 0.55 && progress < 0.97 && !joinVisible);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [dismissed]);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    try {
      localStorage.setItem(
        DISMISS_KEY,
        String(Date.now() + 30 * 86_400_000),
      );
    } catch {
      /* private mode — dismissing for this session is enough */
    }
  };

  if (dismissed) return null;

  return (
    <div
      aria-hidden={!show}
      className={`slide-panel fixed inset-x-3 bottom-3 z-40 sm:inset-x-0 sm:mx-auto sm:w-[min(40rem,calc(100vw-2rem))] ${
        show ? "is-shown" : ""
      }`}
    >
      <div className="flex items-center gap-4 rounded-2xl glass-strong px-4 py-3 shadow-2xl shadow-black/60 sm:px-5">
        <span className="hidden h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-gold-400 to-ember-500 text-ink sm:flex">
          <Icon name="mail" className="h-5 w-5" />
        </span>
        <p className="min-w-0 flex-1 text-sm leading-snug text-white/85">
          <span className="font-bold text-white">
            You have a role in this.
          </span>{" "}
          <span className="hidden sm:inline">
            Get the nine letters — free.
          </span>
        </p>
        <a
          href="#join"
          tabIndex={show ? 0 : -1}
          onClick={dismiss}
          className="flex-none rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-4 py-2 text-sm font-bold text-ink transition-transform hover:scale-105 sm:px-5"
        >
          Join
        </a>
        <button
          onClick={dismiss}
          tabIndex={show ? 0 : -1}
          aria-label="Dismiss"
          className="flex-none rounded-lg p-1.5 text-white/40 transition-colors hover:text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
