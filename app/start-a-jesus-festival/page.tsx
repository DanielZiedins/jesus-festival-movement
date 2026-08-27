import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import CityStarter from "@/components/CityStarter";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import { SIMPLE_STEPS, SITE, STARTER_GUIDE_FAQS } from "@/lib/content";

const guidePath = "/resources/basics-how-to-start-a-jesus-festival.pdf";

export const metadata: Metadata = {
  title: "How to Start a Jesus Festival in Your City",
  description:
    "A practical, prayerful guide to starting a Jesus Festival: gather a team, serve your city well, and build for lasting Gospel fruit.",
  alternates: { canonical: "/start-a-jesus-festival" },
  openGraph: {
    title: "How to Start a Jesus Festival in Your City",
    description:
      "Practical first steps for people carrying a burden to lift up Jesus in their city.",
  },
};

const howToSteps = SIMPLE_STEPS.map((step) => ({
  "@type": "HowToStep",
  position: Number(step.number),
  name: step.title,
  text: step.description,
}));

const starterStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": `${SITE.url}/start-a-jesus-festival/#howto`,
      name: "How to Start a Jesus Festival in Your City",
      description:
        "A prayerful, practical pathway for gathering local believers and beginning a Jesus Festival conversation in a city.",
      image: `${SITE.url}/jesus-festival-movement-logo.png`,
      step: howToSteps,
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/start-a-jesus-festival/#faq`,
      mainEntity: STARTER_GUIDE_FAQS.map((fact) => ({
        "@type": "Question",
        name: fact.question,
        acceptedAnswer: { "@type": "Answer", text: fact.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        { "@type": "ListItem", position: 2, name: "How to Start a Jesus Festival", item: `${SITE.url}/start-a-jesus-festival` },
      ],
    },
  ],
};

export default function StartJesusFestivalPage() {
  return (
    <main id="main" className="min-h-screen overflow-hidden bg-[#050812]">
      <JsonLd data={starterStructuredData} />
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_78%_18%,rgba(244,196,92,.2),transparent_28%),radial-gradient(circle_at_12%_30%,rgba(233,95,50,.14),transparent_26%),#050812]">
        <div className="star-field absolute inset-0" />
        <div className="hero-rays absolute inset-0" />
        <div className="grain" />
        <div className="container-x relative z-10 py-7 sm:py-10">
          <BrandMark priority className="w-fit" />
          <div className="grid items-center gap-12 pb-20 pt-20 lg:grid-cols-[1.15fr_.85fr] lg:pb-28 lg:pt-28">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-gold"><span aria-hidden="true">←</span> Back to the movement</Link>
              <p className="mt-12 text-xs font-bold uppercase tracking-[.3em] text-gold">Free practical field guide</p>
              <h1 className="mt-5 font-display text-[clamp(3.8rem,8vw,7.5rem)] font-bold uppercase leading-[.8] tracking-[-.07em] text-white">How to start a <span className="text-gradient-gold">Jesus Festival.</span></h1>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/70">Start with a faithful first step—not a perfect plan. Here is a prayerful, practical way to gather people, serve your city, and build for fruit that remains.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={guidePath} download className="button-primary">Download the free guide <Icon name="download" className="h-5 w-5" /></a>
                <Link href="/#contact" className="button-secondary">Talk with our team</Link>
              </div>
            </div>
            <a href={guidePath} download aria-label="Download Basics: How to Start a Jesus Festival" className="group relative mx-auto block w-full max-w-sm">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold/18 to-ember/10 blur-2xl transition duration-500 group-hover:scale-105" />
              <div className="relative aspect-[.77] overflow-hidden rounded-[2rem] border border-gold/25 bg-[#050812] p-8 shadow-[0_42px_100px_rgba(0,0,0,.55)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-gold/20 bg-gold/[.07]" />
                <div className="relative flex h-full flex-col">
                  <Image src="/jesus-festival-movement-mark.png" alt="Jesus Festival Movement mark" width={1050} height={1050} className="h-16 w-16 object-contain" />
                  <div className="my-auto"><p className="text-xs font-bold uppercase tracking-[.28em] text-gold">Practical field guide</p><p className="mt-5 font-display text-5xl font-bold uppercase leading-[.83] tracking-[-.06em] text-white">Basics</p><p className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-white">How to start a</p><p className="mt-1 font-display text-4xl font-bold uppercase leading-none text-gradient-gold">Jesus Festival</p></div>
                  <div className="border-t border-white/10 pt-5 text-[.65rem] font-bold uppercase tracking-[.2em] text-gold">Free PDF download</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.28em] text-gold">The first faithful steps</p><h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[.92] tracking-[-.05em] text-white sm:text-6xl">Begin with what is in front of you.</h2><p className="mt-6 text-lg leading-relaxed text-white/60">You are not trying to manufacture a movement. You are making room to pray, listen, invite trusted people, and take the next right step with humility.</p></div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {SIMPLE_STEPS.map((step) => <article key={step.number} className="rounded-[1.7rem] border border-white/10 bg-white/[.035] p-7"><span className="font-display text-4xl font-bold text-gold/70">{step.number}</span><h3 className="mt-6 font-display text-2xl font-bold text-white">{step.title}</h3><p className="mt-3 leading-relaxed text-white/58">{step.description}</p></article>)}
          </div>
        </div>
      </section>

      <CityStarter />

      <section className="border-y border-white/10 bg-[#0b1122]/75 py-20 sm:py-28"><div className="container-x grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20"><div><p className="text-xs font-bold uppercase tracking-[.28em] text-ember-400">Build with wisdom</p><h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl">Four things to hold together.</h2></div><div className="grid gap-4 sm:grid-cols-2">{[["Prayer", "Ask God for His heart, timing, and the people who should carry the work."],["Local unity", "Build relationships with healthy churches and ministries already serving the city."],["Practical care", "Think through permits, accessibility, volunteers, safety, and real hospitality."],["Lasting follow-up", "Prepare a gracious connection and discipleship path before the public gathering begins."]].map(([title, text], index) => <article key={title} className="rounded-[1.6rem] border border-white/10 bg-white/[.035] p-6"><span className="font-display text-sm font-bold text-gold">0{index + 1}</span><h3 className="mt-5 font-display text-xl font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-relaxed text-white/56">{text}</p></article>)}</div></div></section>

      <section className="section-pad"><div className="container-x"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[.28em] text-gold">Questions people ask</p><h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[.92] tracking-[-.05em] text-white sm:text-6xl">A clear place to begin.</h2></div><div className="mt-12 grid gap-4 md:grid-cols-3">{STARTER_GUIDE_FAQS.map((faq) => <article key={faq.question} className="rounded-[1.7rem] border border-white/10 bg-white/[.035] p-7"><h3 className="font-display text-2xl font-bold leading-tight text-white">{faq.question}</h3><p className="mt-4 leading-relaxed text-white/58">{faq.answer}</p></article>)}</div></div></section>

      <section className="pb-20 sm:pb-28"><div className="container-x"><div className="mx-auto max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-8 text-center shadow-[0_35px_110px_rgba(0,0,0,.35)] sm:p-12"><Icon name="spark" className="mx-auto h-9 w-9 text-gold" /><p className="mt-6 text-xs font-bold uppercase tracking-[.28em] text-gold">Take the next step</p><h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">Your faithful yes matters.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/62">Download the guide, pray with your people, and tell us what God is putting on your heart for your city.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href={guidePath} download className="button-primary">Get the free PDF <Icon name="download" className="h-5 w-5" /></a><Link href="/start-a-jesus-festival/playbook" className="button-secondary">Open the full 13-step playbook</Link></div></div></div></section>
      <Footer />
    </main>
  );
}
