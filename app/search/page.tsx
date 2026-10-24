import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import SiteSearch from "@/components/SiteSearch";
import { searchIndex } from "@/lib/search-index";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Search — Guides, Answers & Definitions",
  description:
    "Search every guide, answer, definition and resource on Jesus Festival Movement — evangelism, festivals, baptism, prayer, discipleship and more.",
  alternates: { canonical: "/search" },
  // Search pages are thin by nature; let crawlers follow the links, not index the page.
  robots: { index: false, follow: true },
  openGraph: { type: "website", url: `${SITE.url}/search`, title: "Search — Jesus Festival Movement" },
};

const KIND_STYLE: Record<string, string> = {
  Guide: "text-gold-400",
  Answer: "text-sky-300",
  Glossary: "text-emerald-300",
  Page: "text-white/65",
};

export default function SearchPage() {
  const items = searchIndex();
  return (
    <>
      <Nav />
      <main id="main">
        <section className="relative overflow-hidden pb-6 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)]" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Search</Eyebrow>
              <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                Find What You{" "}
                <span className="text-gradient-gold">Need.</span>
              </h1>
            </div>
            <SiteSearch total={items.length} />
          </div>
        </section>

        <section className="section-pad !pt-6">
          <div className="container-x">
            <ul className="mx-auto flex max-w-3xl flex-col gap-3" aria-label="Search results">
              {items.map((i) => (
                <li key={i.href} data-search={i.hay} data-title={i.title.toLowerCase()}>
                  <a
                    href={i.href}
                    className="block rounded-2xl glass p-5 transition hover:border-gold/30 sm:p-6"
                  >
                    <span className={`text-xs font-bold uppercase tracking-[0.2em] ${KIND_STYLE[i.kind]}`}>
                      {i.kind}
                    </span>
                    <span className="mt-1.5 block font-display text-lg font-bold leading-snug text-white">
                      {i.title}
                    </span>
                    <span className="mt-1.5 line-clamp-2 block text-sm leading-relaxed text-white/70">
                      {i.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
