import type { Metadata } from "next";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import PrintButton from "@/components/PrintButton";
import { STEPS, PLAYBOOK_PHASES, PLAYBOOK_DETAIL } from "@/lib/playbook";
import { SITE } from "@/lib/content";

const PAGE = `${SITE.url}/start-a-jesus-festival/playbook`;

export const metadata: Metadata = {
  title: "The Full 13-Step Playbook — Start a Jesus Festival",
  description:
    "Every step of running a Jesus Festival, free: four phases, realistic timelines, practical checklists, and the specific mistake most teams make at each stage. Printable.",
  keywords: [
    "how to start a Jesus Festival",
    "how to plan a Christian festival",
    "gospel festival planning checklist",
    "outdoor evangelism event planning",
    "christian event permits insurance",
    "evangelism volunteer training",
    "church event follow up plan",
  ],
  alternates: { canonical: "/start-a-jesus-festival/playbook" },
  openGraph: {
    type: "article",
    url: PAGE,
    title: "The Full 13-Step Playbook — Start a Jesus Festival",
    description:
      "Four phases, timelines, checklists and the mistakes to avoid. Free and printable.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": `${PAGE}#howto`,
      name: "How to start a Jesus Festival in your city",
      description:
        "A practical 13-step guide to planning and hosting an evangelistic Gospel festival that leaves lasting outreach behind in the city.",
      totalTime: "P9M",
      isAccessibleForFree: true,
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
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Start a Jesus Festival",
          item: `${SITE.url}/start-a-jesus-festival`,
        },
        { "@type": "ListItem", position: 3, name: "The full playbook", item: PAGE },
      ],
    },
  ],
};

export default function PlaybookPage() {
  return (
    <main id="main" className="min-h-screen overflow-hidden bg-[#050812]">
      <JsonLd data={jsonLd} />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_78%_14%,rgba(244,196,92,.2),transparent_29%),radial-gradient(circle_at_14%_50%,rgba(233,95,50,.14),transparent_28%),#050812]">
        <div className="star-field absolute inset-0 no-print" />
        <div className="hero-rays absolute inset-0 no-print" />
        <div className="grain no-print" />
        <div className="container-x relative z-10 py-7 sm:py-10">
          <div className="no-print">
            <BrandMark priority className="w-fit" />
          </div>
          <div className="mx-auto max-w-5xl pb-16 pt-16 sm:pb-24 sm:pt-24">
            <Link
              href="/start-a-jesus-festival"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-gold no-print"
            >
              <span aria-hidden="true">←</span> Back to the starter guide
            </Link>
            <p className="mt-10 text-xs font-bold uppercase tracking-[.3em] text-gold">
              The full playbook · Free forever
            </p>
            <h1 className="mt-5 font-display text-[clamp(3rem,7.5vw,6.5rem)] font-bold uppercase leading-[.84] tracking-[-.06em] text-white">
              Thirteen steps.
              <span className="block text-gradient-gold">Nothing held back.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/70">
              Everything we&apos;ve learned running these, written down. Four
              phases, realistic timelines, practical checklists, and the
              specific mistake most teams make at each stage. Print it and work
              through it with your team.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row no-print">
              <a href="#phase-1" className="button-primary">
                Start with step one <Icon name="arrow" className="h-4 w-4" />
              </a>
              <PrintButton />
            </div>
          </div>
        </div>
      </section>

      {/* The honest part */}
      <section className="section-pad !pb-0">
        <div className="container-x">
          <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[.035] p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              First, the honest part.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/66">
              This is a lot of work. It takes prayer, unity, sacrifice,
              leadership, volunteers, permits, planning and faith. Things will
              go wrong. People will say no. There will be a moment where you
              wonder why you started.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-white/66">
              And then someone will give their life to Jesus, and get baptized,
              and go home a different person — and you will know exactly why you
              started.{" "}
              <span className="font-bold text-gold">It is SO worth it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      {PLAYBOOK_PHASES.map((phase, pi) => (
        <section
          key={phase.phase}
          id={`phase-${pi + 1}`}
          className="section-pad scroll-mt-8"
        >
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b border-white/10 pb-6">
                <span className="font-display text-5xl font-bold text-gold/25 sm:text-6xl">
                  0{pi + 1}
                </span>
                <div>
                  <h2 className="font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-4xl">
                    {phase.phase}
                  </h2>
                  <p className="mt-1 text-white/55">{phase.subtitle}</p>
                </div>
              </div>

              <div className="mt-10 space-y-5">
                {phase.steps.map((n) => {
                  const step = STEPS.find((s) => s.n === n)!;
                  const detail = PLAYBOOK_DETAIL[n];
                  return (
                    <article
                      key={n}
                      className="print-block rounded-[1.8rem] border border-white/10 bg-white/[.035] p-7 sm:p-9"
                    >
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl border border-gold/30 bg-[#0b1122] font-display text-lg font-bold text-gold">
                          {step.n}
                        </span>
                        <h3 className="font-display text-2xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-5 text-lg leading-relaxed text-white/70">
                        {step.desc}
                      </p>

                      <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-ember/25 bg-ember/[.1] px-4 py-1.5 text-sm font-bold text-ember-400">
                        <Icon name="calendar" className="h-4 w-4" />
                        {detail.timing}
                      </p>

                      <div className="mt-7">
                        <p className="text-xs font-bold uppercase tracking-[.2em] text-white/55">
                          Checklist
                        </p>
                        <ul className="mt-4 space-y-3">
                          {detail.checklist.map((c) => (
                            <li key={c} className="flex gap-3">
                              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-md border border-gold/30 text-gold">
                                <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.4} />
                              </span>
                              <span className="leading-relaxed text-white/66">
                                {c}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {detail.watch && (
                        <div className="mt-7 rounded-2xl border-l-2 border-gold/50 bg-gold/[.06] p-5">
                          <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">
                            Watch out for this
                          </p>
                          <p className="mt-2 leading-relaxed text-white/72">
                            {detail.watch}
                          </p>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Close */}
      <section className="pb-20 sm:pb-28 no-print">
        <div className="container-x">
          <div className="mx-auto max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-8 text-center shadow-[0_35px_110px_rgba(0,0,0,.35)] sm:p-12">
            <Icon name="spark" className="mx-auto h-9 w-9 text-gold" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[.28em] text-gold">
              You don&apos;t have to do this alone
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">
              Tell us about your city.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/62">
              We&apos;ll share what worked, what didn&apos;t, and pray with you.
              However we can, for God&apos;s glory.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/#contact" className="button-primary">
                Start a conversation <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/answers" className="button-secondary">
                Read the common questions
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
