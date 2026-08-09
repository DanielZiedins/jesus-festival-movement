import type { Metadata } from "next";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import { MOVEMENT_FACTS, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Jesus Festival Movement",
  description:
    "Learn what Jesus Festival Movement is, where it began, and how it helps local churches and believers gather cities around Jesus.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Jesus Festival Movement",
    description:
      "A Christ-centred movement from Hamilton, Ontario helping cities lift up Jesus together.",
  },
};

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE.url}/about/#webpage`,
      url: `${SITE.url}/about`,
      name: "About Jesus Festival Movement",
      description:
        "A clear introduction to the purpose, origin, and city-serving vision of Jesus Festival Movement.",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-CA",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/about/#faq`,
      mainEntity: MOVEMENT_FACTS.map((fact) => ({
        "@type": "Question",
        name: fact.question,
        acceptedAnswer: { "@type": "Answer", text: fact.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <main id="main" className="min-h-screen overflow-hidden bg-[#050812]">
      <JsonLd data={aboutStructuredData} />
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_80%_16%,rgba(244,196,92,.2),transparent_29%),radial-gradient(circle_at_15%_48%,rgba(233,95,50,.14),transparent_28%),#050812]">
        <div className="star-field absolute inset-0" />
        <div className="hero-rays absolute inset-0" />
        <div className="grain" />
        <div className="container-x relative z-10 py-7 sm:py-10">
          <BrandMark priority className="w-fit" />
          <div className="mx-auto max-w-5xl pb-20 pt-20 sm:pb-28 sm:pt-28">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-gold">
              <span aria-hidden="true">←</span> Back to the movement
            </Link>
            <p className="mt-12 text-xs font-bold uppercase tracking-[.3em] text-gold">About Jesus Festival Movement</p>
            <h1 className="mt-5 font-display text-[clamp(3.8rem,9vw,8rem)] font-bold uppercase leading-[.8] tracking-[-.07em] text-white">
              Cities lifting up
              <span className="block text-gradient-gold">the name of Jesus.</span>
            </h1>
            <p className="mt-9 max-w-3xl text-xl leading-relaxed text-white/70 sm:text-2xl">
              Jesus Festival Movement exists to help local churches, ministries, and believers gather their city around Jesus—then keep walking together when the gathering is over.
            </p>
          </div>
        </div>
      </section>

      <section className="relative section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-gold">The heart</p>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl">A public yes to Jesus. A lasting yes to people.</h2>
          </div>
          <div className="max-w-3xl text-lg leading-relaxed text-white/66 sm:text-xl">
            <p>From Hamilton, Ontario to Niagara and beyond, the movement is rooted in a simple conviction: Jesus is worthy of being lifted up in the heart of every city.</p>
            <p className="mt-7">A Jesus Festival is more than a one-day moment. Worship, clear Gospel proclamation, prayer, baptisms, practical outreach, and church unity are designed to open a door. The ongoing work is local relationship, discipleship, and love that remains after the stage comes down.</p>
            <p className="mt-7">Every city has its own story. That is why the approach begins with prayer, listening, humble local leadership, and partnership with churches already serving their neighbours.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b1122]/75 py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-ember-400">Quick answers</p>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[.92] tracking-[-.05em] text-white sm:text-6xl">The essential facts.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {MOVEMENT_FACTS.map((fact, index) => (
              <article key={fact.question} className="rounded-[1.8rem] border border-white/10 bg-white/[.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[.055] sm:p-8">
                <span className="font-display text-sm font-bold text-gold">0{index + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight text-white">{fact.question}</h3>
                <p className="mt-4 leading-relaxed text-white/58">{fact.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-8 text-center shadow-[0_35px_110px_rgba(0,0,0,.35)] sm:p-12">
            <Icon name="spark" className="mx-auto h-9 w-9 text-gold" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[.28em] text-gold">Your city can begin small</p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">Learn the first faithful steps.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/62">A practical, prayerful starter guide for people carrying a burden for their city—before the first big meeting or public announcement.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/start-a-jesus-festival" className="button-primary">How to start <Icon name="arrow" className="h-4 w-4" /></Link>
              <Link href="/#contact" className="button-secondary">Start a conversation</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
