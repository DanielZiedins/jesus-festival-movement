"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/content";

const LINKS = [
  // Kept deliberately short so the desktop bar never wraps. Every section is
  // still listed in the mobile menu and the footer.
  { href: "#vision", label: "Vision" },
  { href: "#festivals", label: "Festivals" },
  { href: "#map", label: "Map" },
  { href: "#join", label: "Join" },
];

/** Sections dropped from the desktop bar but kept in the mobile menu. */
const MOBILE_ONLY_LINKS = [
  { href: "#story", label: "Story" },
  { href: "#commission", label: "Great Commission" },
  { href: "#how-to-start", label: "Start One" },
  { href: "#contact", label: "Connect" },
];

/** Real routes, shown alongside the on-page anchors. */
const PAGE_LINKS = [
  { href: "/akuse", label: "Akuse 2026" },
  { href: "/answers", label: "Answers" },
  { href: "/blog", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On subpages the section anchors live back on the homepage.
  const to = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const sections = LINKS.map((l) =>
      document.querySelector(l.href)
    ).filter(Boolean) as Element[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3 shadow-lg shadow-black/40" : "py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <a href={isHome ? "#top" : "/"} className="group flex items-center gap-2.5">
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
              href={to(l.href)}
              className={`relative text-sm font-medium transition-colors hover:text-gold ${
                activeSection === l.href ? "text-gold" : "text-white/70"
              }`}
            >
              {l.label}
              {activeSection === l.href && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}
            </a>
          ))}
          {PAGE_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                pathname.startsWith(l.href) ? "text-gold" : "text-white/70"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="/start-a-festival"
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
            {[...LINKS, ...MOBILE_ONLY_LINKS].map((l) => (
              <a
                key={l.href}
                href={to(l.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            {[
              ...PAGE_LINKS,
              { href: "/network", label: "Network" },
              { href: "/about", label: "About" },
              { href: "/know-jesus", label: "Know Jesus" },
            ].map(
              (l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
                >
                  {l.label}
                </a>
              ),
            )}
            <a
              href="/start-a-festival"
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
