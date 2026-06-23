"use client";

import { useEffect, useState } from "react";
import BrandMark from "./BrandMark";

const LINKS = [
  { href: "#movement", label: "The movement" },
  { href: "#journey", label: "The journey" },
  { href: "#festival", label: "The festival" },
  { href: "#commission", label: "Why it matters" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/88 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl"
          : "py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between" aria-label="Main navigation">
        <BrandMark priority />

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/62 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-400 lg:inline-flex"
        >
          Bring it to my city
        </a>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-white transition ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span aria-hidden="true" className={`absolute h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-white transition ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="container-x pb-4 pt-6 lg:hidden">
          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
                <span aria-hidden="true" className="text-gold">↘</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center rounded-2xl bg-gold px-5 py-3.5 font-bold text-ink"
            >
              Bring it to my city
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
