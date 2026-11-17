"use client";

import { useEffect, useState } from "react";
import { JOHN_PLAN } from "@/lib/john-plan";

/**
 * Tick-off list for the 21-day John plan. Progress lives in localStorage on
 * this device only. Server HTML renders every day unticked, and saved
 * progress is applied after mount, so hydration always matches.
 */
const KEY = "jfm-john-plan";

export default function ReadingPlan() {
  const [done, setDone] = useState<number[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      if (Array.isArray(saved)) setDone(saved.filter((n) => typeof n === "number"));
    } catch {
      /* blocked storage: start fresh */
    }
  }, []);

  const toggle = (day: number) => {
    setDone((prev) => {
      const next = prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day].sort((a, b) => a - b);
      try {
        localStorage.setItem(KEY, JSON.stringify(next));
      } catch {
        /* not essential */
      }
      return next;
    });
  };

  const pct = Math.round((done.length / JOHN_PLAN.length) * 100);
  const nextDay = JOHN_PLAN.find((d) => !done.includes(d.day));

  return (
    <div>
      <div className="no-print sticky top-20 z-20 mb-6 rounded-2xl border border-white/10 bg-[#070b18]/90 p-4 backdrop-blur-xl sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-semibold text-white" aria-live="polite">
            {done.length === JOHN_PLAN.length
              ? "You've read the whole Gospel of John. Well done!"
              : `${done.length} of ${JOHN_PLAN.length} days read${nextDay ? ` · next: Day ${nextDay.day}, John ${nextDay.day}` : ""}`}
          </p>
          {done.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setDone([]);
                try {
                  localStorage.removeItem(KEY);
                } catch {
                  /* ignore */
                }
              }}
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/75 transition hover:border-gold/40 hover:text-gold"
            >
              Reset
            </button>
          )}
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
          <div
            className="h-full origin-left rounded-full bg-gradient-to-r from-ember via-gold to-gold-400 transition-transform duration-700 ease-out"
            style={{ transform: `scaleX(${pct / 100})` }}
          />
        </div>
      </div>

      <ol className="grid gap-3 md:grid-cols-2 print:block">
        {JOHN_PLAN.map((d) => {
          const isDone = done.includes(d.day);
          return (
            <li key={d.day} className="print-block">
              <label
                className={`flex h-full cursor-pointer gap-4 rounded-2xl border p-5 transition duration-300 ${
                  isDone ? "border-gold/40 bg-gold/[.07]" : "border-white/10 bg-white/[.035] hover:border-white/25"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isDone}
                  onChange={() => toggle(d.day)}
                  className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-[#f4c45c]"
                />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[.2em] text-gold-400">
                    Day {d.day} · John {d.day}
                  </span>
                  <span className={`mt-1 block font-display text-lg font-bold leading-snug ${isDone ? "text-white/80" : "text-white"}`}>
                    {d.title}
                  </span>
                  <span className="mt-1 block text-sm text-white/65">Key verse: {d.key}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-white/75">{d.ask}</span>
                </span>
              </label>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
