import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ui/ScrollFX";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import PrintButton from "@/components/PrintButton";
import Share from "@/components/Share";
import {
  SITE,
  STEPS,
  PLAYBOOK_PHASES,
  PLAYBOOK_DETAIL,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "How To Start A Jesus Festival In Your City — The Full Playbook",
  description:
    "A free, practical 13-step playbook for starting a Jesus Festival in your city: prayer, core team, church unity, permits, evangelism training, follow-up, and planting ongoing outreach. Printable checklist included.",
  keywords: [
    "how to start a Jesus Festival",
    "how to plan a Christian festival",
    "how to organize an evangelistic event",
    "Gospel festival planning guide",
    "outdoor evangelism event checklist",
    "city-wide outreach event planning",
    "Christian event permits",
    "evangelism training volunteers",
  ],
  alternates: { canonical: "/start-a-festival" },
  openGraph: {
    type: "article",
    url: `${SITE.url}/start-a-festival`,
    title: "How To Start A Jesus Festival In Your City — The Full Playbook",
    description:
      "The free 13-step playbook: prayer, team, unity, permits, evangelism, follow-up, and multiplication. Take the step of faith.",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How To Start A Jesus Festival In Your City",
  description:
    "A practical 13-step guide to planning and hosting an evangelistic Gospel festival that becomes a lasting movement in your city.",
  totalTime: "P9M",
  step: STEPS.map((s) => ({
    "@type": "HowToStep",
    position: s.n,
    name: s.title,
    text: s.desc,
    itemListElement: PLAYBOOK_DETAIL[s.n].checklist.map((c) => ({
      "@type": "HowToDirection",
      text: c,
    })),
  })),
};

export default function StartAFestival() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <ScrollFX />
      <div className="no-print">
        <Nav />
      </div>

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)] no-print" />
          <div className="aurora opacity-70 no-print" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal immediate>
                <Eyebrow>The Playbook</Eyebrow>
              </Reveal>
              <Reveal immediate delay={0.05}>
                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                  How To Start A Jesus Festival{" "}
                  <span className="text-gradient-gold">In Your City</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                  Everything we&apos;ve learned, given away free. Thirteen steps
                  across four phases — from the first prayer to multiplying the
                  movement into other cities. Print it, work it, make it yours.
                </p>
              </Reveal>
              <Reveal immediate delay={0.15}>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row no-print">
                  <a
                    href="#phase-foundation"
                    className="w-full rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-base font-semibold text-ink shadow-glow-ember transition-transform hover:scale-105 sm:w-auto"
                  >
                    Start With Step One
                  </a>
                  <PrintButton />
                </div>
              </Reveal>
              <Reveal immediate delay={0.2}>
                <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-white/40">
                  13 Steps · 4 Phases · Free Forever
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Honest expectations */}
        <section className="relative pb-8">
          <div className="container-x">
            <Reveal>
              <div className="mx-auto max-w-3xl rounded-3xl glass-strong p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-white">
                  First, the honest part.
                </h2>
                <p className="mt-4 leading-relaxed text-white/70">
                  This is a lot of work. It takes prayer, unity, sacrifice,
                  leadership, volunteers, permits, planning, and faith. Things
                  will go wrong. People will say no. There will be a moment
                  where you wonder why you started.
                </p>
                <p className="mt-4 leading-relaxed text-white/70">
                  And then someone will give their life to Jesus, and get
                  baptized, and go home a different person — and you will know
                  exactly why you started.{" "}
                  <span className="font-semibold text-gold">
                    It is SO worth it.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Phases */}
        {PLAYBOOK_PHASES.map((phase, pi) => (
          <section
            key={phase.phase}
            id={`phase-${phase.phase.toLowerCase().replace(/\s+/g, "-")}`}
            className={`section-pad relative overflow-hidden ${
              pi % 2 === 1 ? "border-y border-white/5 bg-navy-950/40" : ""
            }`}
          >
            <div className="container-x relative">
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-white/10 pb-6">
                  <span className="font-display text-5xl font-bold text-gold/25 sm:text-6xl">
                    0{pi + 1}
                  </span>
                  <div>
                    <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                      Phase {pi + 1}:{" "}
                      <span className="text-gradient-gold">{phase.phase}</span>
                    </h2>
                    <p className="mt-1 text-white/60">{phase.subtitle}</p>
                  </div>
                </div>
              </Reveal>

              <div className="mt-12 space-y-6">
                {phase.steps.map((n) => {
                  const step = STEPS.find((s) => s.n === n)!;
                  const detail = PLAYBOOK_DETAIL[n];
                  return (
                    <Reveal key={n}>
                      <article className="rounded-3xl glass p-7 sm:p-9 print-block">
                        <div className="flex flex-wrap items-center gap-4">
                          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-gold/30 bg-navy-900 font-display text-lg font-bold text-gold">
                            {step.n}
                          </span>
                          <h3 className="font-display text-2xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>

                        <p className="mt-5 text-lg leading-relaxed text-white/75">
                          {step.desc}
                        </p>

                        <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-ember-500/10 px-4 py-1.5 text-sm font-semibold text-ember-400">
                          <Icon name="spark" className="h-4 w-4" />
                          {detail.timing}
                        </p>

                        <div className="mt-7">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                            Checklist
                          </p>
                          <ul className="mt-4 space-y-3">
                            {detail.checklist.map((c) => (
                              <li key={c} className="flex gap-3">
                                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border border-gold/30 text-gold">
                                  <Icon name="check" className="h-3.5 w-3.5" />
                                </span>
                                <span className="leading-relaxed text-white/70">
                                  {c}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {detail.watch && (
                          <div className="mt-7 rounded-2xl border-l-2 border-gold/50 bg-gold/[0.06] p-5">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">
                              Watch out for this
                            </p>
                            <p className="mt-2 leading-relaxed text-white/75">
                              {detail.watch}
                            </p>
                          </div>
                        )}
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Closing CTA */}
        <section className="section-pad relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(255,107,53,0.2),transparent_55%)] no-print" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <h2 className="text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
                  You Don&apos;t Have To Do This{" "}
                  <span className="text-gradient-gold">Alone.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mx-auto mt-7 max-w-2xl text-lg text-white/75">
                  We will happily walk with you — share what worked, what
                  didn&apos;t, and pray with you for your city. However we can,
                  for God&apos;s glory.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row no-print">
                  <a
                    href={`mailto:${SITE.email}?subject=Starting%20a%20Jesus%20Festival%20in%20my%20city`}
                    className="w-full rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-base font-bold text-ink shadow-glow-ember transition-transform hover:scale-105 sm:w-auto"
                  >
                    Email Us About Your City
                  </a>
                  <a
                    href="/#contact"
                    className="w-full rounded-full glass px-8 py-4 text-base font-semibold text-white transition-colors hover:text-gold sm:w-auto"
                  >
                    Use The Contact Form
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-14 no-print">
                  <Share
                    title="Help someone else start one"
                    url={`${SITE.url}/start-a-festival`}
                    text="How to start a Jesus Festival in your city — a free 13-step playbook."
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <div className="no-print">
        <Footer />
      </div>
    </>
  );
}
