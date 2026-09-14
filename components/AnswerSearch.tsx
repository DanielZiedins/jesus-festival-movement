"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./ui/Icon";

/**
 * Filters the answers already rendered on the page.
 *
 * Deliberately a progressive enhancement: every answer is server-rendered and
 * stays in the HTML, so crawlers and no-JS readers get the full page. This
 * only toggles visibility on what is already there — it never fetches or
 * re-renders the list.
 *
 * Elements it drives, by data attribute:
 *   [data-answer="<haystack>"]   one answer card
 *   [data-answer-link="<hay>"]   one jump-nav entry
 *   [data-answer-topic]          a topic section, hidden when it empties
 */
export default function AnswerSearch({ total }: { total: number }) {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(total);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    const terms = q.split(/\s+/).filter(Boolean);
    const matches = (haystack: string) =>
      terms.every((t) => haystack.includes(t));

    let visible = 0;
    for (const el of document.querySelectorAll<HTMLElement>("[data-answer]")) {
      const hit = !terms.length || matches(el.dataset.answer ?? "");
      // Each card sits alone inside a Reveal wrapper. Hide the wrapper when
      // there is one, or the list's row gap leaves a hole where the card was —
      // and record the verdict on the card itself, so the topic pass below
      // reads match state rather than guessing which element carries .hidden.
      el.dataset.match = hit ? "1" : "0";
      const parent = el.parentElement;
      const target =
        parent && parent.childElementCount === 1 && parent !== document.body
          ? parent
          : el;
      target.classList.toggle("hidden", !hit);
      if (hit) visible++;
    }
    for (const el of document.querySelectorAll<HTMLElement>("[data-answer-link]")) {
      el.classList.toggle(
        "hidden",
        !(!terms.length || matches(el.dataset.answerLink ?? "")),
      );
    }
    // A topic heading with nothing under it reads as a bug, so hide the section.
    for (const section of document.querySelectorAll<HTMLElement>("[data-answer-topic]")) {
      const anyVisible = section.querySelector('[data-answer][data-match="1"]');
      section.classList.toggle("hidden", !anyVisible);
    }
    setCount(visible);
  }, [query]);

  // Let anyone press "/" to jump to the box, the way search boxes behave.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const typing =
        el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;
      if (e.key === "/" && !typing) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape" && el === inputRef.current) setQuery("");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <label htmlFor="answer-search" className="sr-only">
        Search the answers
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/40"
          aria-hidden="true"
        >
          <Icon name="spark" className="h-5 w-5" />
        </span>
        <input
          id="answer-search"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${total} answers — try permits, volunteers, baptism…`}
          autoComplete="off"
          className="w-full rounded-2xl border border-white/12 bg-white/[.04] py-4 pl-14 pr-28 text-base text-white placeholder:text-white/40 transition focus:border-gold/45 focus:bg-white/[.06] focus:outline-none focus:ring-2 focus:ring-gold/25"
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-white/55 transition hover:bg-white/10 hover:text-white"
          >
            Clear
          </button>
        ) : (
          <kbd className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/15 px-2 py-1 text-[.65rem] font-semibold text-white/40 sm:block">
            /
          </kbd>
        )}
      </div>

      <p aria-live="polite" className="mt-3 min-h-[1.5rem] text-sm text-white/55">
        {query.trim() ? (
          count > 0 ? (
            <>
              Showing <span className="font-semibold text-gold">{count}</span> of{" "}
              {total} answers.
            </>
          ) : (
            <>
              No answer matches &ldquo;{query.trim()}&rdquo; yet.{" "}
              <a
                href="/#contact"
                className="font-semibold text-gold underline underline-offset-4"
              >
                Ask us directly
              </a>{" "}
              — we&apos;ll answer you, and add it here.
            </>
          )
        ) : (
          <>All {total} answers. Start typing to narrow them down.</>
        )}
      </p>
    </div>
  );
}
