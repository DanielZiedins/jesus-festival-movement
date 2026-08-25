import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import JoinForm from "@/components/JoinForm";
import { ANSWERS, TOPICS, answersIn } from "@/lib/answers";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Answers — Straight Answers On Festivals, Evangelism & Faith",
  description:
    "Direct answers to the real questions: what a Jesus Festival is, how to start one, permits and costs, training volunteers, follow-up, the Great Commission, and how to become a Christian.",
  keywords: [
    "what is a Jesus Festival",
    "how to start a christian festival",
    "do you need a permit for an outdoor church event",
    "how to train evangelism volunteers",
    "what is the great commission",
    "how do I become a christian",
    "cost of running an outreach event",
  ],
  alternates: { canonical: "/answers" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/answers`,
    title: "Answers — Jesus Festival Movement",
    description:
      "Straight answers on running Gospel festivals, evangelism, and faith.",
  },
};

export default function AnswersPage() {
  // FAQPage is the schema answer engines and Google most reliably parse.
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}/answers#faq`,
    mainEntity: ANSWERS.map((a) => ({
      "@type": "Question",
      "@id": `${SITE.url}/answers#${a.id}`,
      name: a.q,
      acceptedAnswer: { "@type": "Answer", text: a.short },
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Answers", item: `${SITE.url}/answers` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Nav />

      <main id="main">
        <section className="relative overflow-hidden pb-8 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)]" />
          <div className="aurora opacity-60" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal immediate>
                <Eyebrow>Answers</Eyebrow>
              </Reveal>
              <Reveal immediate delay={0.05}>
                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                  Straight Answers,{" "}
                  <span className="text-gradient-gold">No Runaround.</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                  The questions people actually ask us — about running Gospel
                  festivals, about evangelism, and about faith itself. Answered
                  plainly, with the detail underneath if you want it.
                </p>
              </Reveal>
            </div>

            {/* Jump nav — also gives crawlers a clean question index */}
            <Reveal immediate delay={0.15}>
              <nav
                aria-label="Questions"
                className="mx-auto mt-12 max-w-4xl rounded-2xl glass p-6"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                  Jump to a question
                </p>
                <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {ANSWERS.map((a) => (
                    <li key={a.id}>
                      <a
                        href={`#${a.id}`}
                        className="text-sm text-white/65 transition-colors hover:text-gold"
                      >
                        {a.q}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
          </div>
        </section>

        {TOPICS.map((topic, ti) => {
          const items = answersIn(topic.key);
          if (!items.length) return null;
          return (
            <section
              key={topic.key}
              className={`section-pad !py-14 ${
                ti % 2 === 1 ? "border-y border-white/5 bg-navy-950/40" : ""
              }`}
            >
              <div className="container-x">
                <div className="mx-auto max-w-4xl">
                  <Reveal>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/10 pb-5">
                      <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                        {topic.title}
                      </h2>
                      <p className="text-white/55">{topic.blurb}</p>
                    </div>
                  </Reveal>

                  <div className="mt-8 space-y-5">
                    {items.map((a, i) => (
                      <Reveal key={a.id} delay={i * 0.04}>
                        {/* itemProp markup mirrors the JSON-LD for engines that read inline */}
                        <article
                          id={a.id}
                          className="scroll-mt-28 rounded-2xl glass p-6 sm:p-8"
                          itemScope
                          itemType="https://schema.org/Question"
                        >
                          <h3
                            itemProp="name"
                            className="font-display text-xl font-bold leading-snug text-white sm:text-2xl"
                          >
                            {a.q}
                          </h3>

                          <div
                            itemScope
                            itemProp="acceptedAnswer"
                            itemType="https://schema.org/Answer"
                          >
                            {/* The quotable answer, visually set apart */}
                            <p
                              itemProp="text"
                              className="mt-4 border-l-2 border-gold/60 pl-5 text-lg leading-relaxed text-white/90"
                            >
                              {a.short}
                            </p>

                            {a.detail.map((d, j) => (
                              <p
                                key={j}
                                className="mt-4 leading-relaxed text-white/65"
                                dangerouslySetInnerHTML={{ __html: d }}
                              />
                            ))}
                          </div>

                          {a.links && a.links.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5">
                              {a.links.map((l) => (
                                <a
                                  key={l.href}
                                  href={l.href}
                                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:underline"
                                >
                                  {l.label}
                                  <Icon name="arrow" className="h-3.5 w-3.5" />
                                </a>
                              ))}
                            </div>
                          )}
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="section-pad">
          <div className="container-x">
            <Reveal>
              <div className="mx-auto max-w-4xl rounded-3xl border border-gold/20 bg-gradient-to-br from-navy-900/80 to-ink p-8 sm:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
                  <div>
                    <p className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Still have a{" "}
                      <span className="text-gradient-gold">question?</span>
                    </p>
                    <p className="mt-3 max-w-md leading-relaxed text-white/65">
                      Ask us anything at{" "}
                      <a
                        href={`mailto:${SITE.email}`}
                        className="font-semibold text-gold hover:underline"
                      >
                        {SITE.email}
                      </a>
                      . A real person reads every one. Or join the movement and
                      get the nine letters free.
                    </p>
                  </div>
                  <JoinForm source="answers" variant="inline" cta="Join Free" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
