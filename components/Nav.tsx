"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

const LINKS = [
  { href: "#story", label: "Story" },
  { href: "#vision", label: "Vision" },
  { href: "#commission", label: "Great Commission" },
  { href: "#festivals", label: "Festivals" },
  { href: "#how-to-start", label: "Start One" },
  { href: "#map", label: "Map" },
  { href: "#contact", label: "Connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3 shadow-lg shadow-black/40" : "py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-ember-500 shadow-glow">
            <span className="text-lg font-bold text-ink">✝</span>
          </span>
          <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
            Jesus Festival<span className="text-gold"> Movement</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#how-to-start"
            className="rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-5 py-2.5 text-sm font-semibold text-ink shadow-glow-ember transition-transform hover:scale-105"
          >
            Start A Festival
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg glass lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-xl text-white">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="container-x mt-3 lg:hidden">
          <div className="glass-strong flex flex-col gap-1 rounded-2xl p-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#how-to-start"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Start A Festival
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="px-3 py-2 text-center text-xs text-white/50"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
