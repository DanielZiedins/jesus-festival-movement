"use client";

import { useEffect, useRef, useState } from "react";
import { track } from "@/lib/track";
import Icon from "./ui/Icon";

/**
 * Filters the search index already rendered on /search.
 *
 * Progressive enhancement, like AnswerSearch: every item is server-rendered
 * (so no-JS readers get the full index), and this only hides, shows and
 * reorders what is there. Title matches rank above text-only matches.
 *
 *   [data-search="<haystack>"][data-title="<title>"]   one result
 *
 * The query is kept in ?q= so a search can be linked to and shared.
 */
export default function SiteSearch({ total }: { total: number }) {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(total);
  const inputRef = useRef<HTMLInputElement>(null);
  const reported = useRef(false);

  // Read ?q= once on load (no useSearchParams, so the page stays static).
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);

  useEffect(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const el of document.querySelectorAll<HTMLElement>("[data-search]")) {
      const hay = el.dataset.search ?? "";
      const hit = !terms.length || terms.every((t) => hay.includes(t));
      el.hidden = !hit;
      // Title matches first; otherwise keep the server's order.
      const title = el.dataset.title ?? "";
      el.style.order = terms.length && hit && terms.every((t) => title.includes(t)) ? "0" : "1";
      if (hit) visible++;
    }
    setCount(visible);

    const url = new URL(window.location.href);
    if (query.trim()) url.searchParams.set("q", query.trim());
    else url.searchParams.delete("q");
    window.history.replaceState(null, "", url);

    if (terms.length && !reported.current) {
      const t = setTimeout(() => {
        reported.current = true;
        // Never what was typed — only whether it found anything.
        track("site_search", { results: visible === 0 ? "none" : visible > 5 ? "many" : "some" });
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [query]);

  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <label htmlFor="site-search" className="sr-only">
        Search the site
      </label>
      <div className="relative">
        <Icon name="search" className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/55" />
        <input
          ref={inputRef}
          id="site-search"
          type="search"
          autoComplete="off"
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try “baptism”, “altar call” or “how to start”"
          className="w-full rounded-full border border-white/15 bg-white/[.04] py-4 pl-14 pr-5 text-lg text-white placeholder:text-white/55 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30"
        />
      </div>
      <p className="mt-3 text-center text-sm text-white/65" role="status" aria-live="polite">
        {query.trim()
          ? count === 0
            ? "No results — try a simpler word, or browse the answers."
            : `${count} result${count === 1 ? "" : "s"}`
          : `${total} guides, answers, terms and pages`}
      </p>
    </div>
  );
}
