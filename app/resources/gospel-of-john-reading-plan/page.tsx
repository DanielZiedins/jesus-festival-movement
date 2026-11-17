import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import PrintButton from "@/components/PrintButton";
import ReadingPlan from "@/components/ReadingPlan";
import { SITE } from "@/lib/content";
import { JOHN_PLAN } from "@/lib/john-plan";

const PATH = "/resources/gospel-of-john-reading-plan";
const URL = `${SITE.url}${PATH}`;

const HOW = [
  ["Read one chapter", "Most chapters of John take five to ten minutes. Same time and place each day helps."],
  ["Ask the question", "Each day has one question. Write a sentence in reply, or talk it over with someone."],
  ["Pray what you read", "Turn it into a short prayer: thank God, ask Him, or tell Him honestly where you are."],
  ["Read with a friend", "It's far easier to keep going together — and far more fun to talk about."],
] as const;

export const metadata: Metadata = {
  title: "Gospel of John Reading Plan: 21 Days (Free, Printable)",
  description:
    "A free 21-day reading plan through the Gospel of John — one chapter a day, a key verse and one question for each day. Tick off your progress or print it. Perfect for new believers and anyone exploring Jesus.",
  keywords: [
    "gospel of john reading plan",
    "21 day bible reading plan",
    "john reading plan for new believers",
    "bible reading plan for beginners",
    "printable bible reading plan",
    "read the gospel of john",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: "website",
    url: URL,
    title: "21 Days in the Gospel of John — Jesus Festival Movement",
    description: "One chapter a day, a key verse and one question. Tick it off or print it.",
  },
};

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": `${URL}#plan`,
      name: "Read the Gospel of John in 21 days",
      description: "One chapter of John each day for 21 days, with a key verse and a reflection question.",
      totalTime: "P21D",
      step: JOHN_PLAN.map((d) => ({
        "@type": "HowToStep",
        position: d.day,
        name: `Day ${d.day}: John ${d.day} — ${d.title}`,
        text: `Read John ${d.day}. Key verse: ${d.key}. ${d.ask}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE.url}/resources` },
        { "@type": "ListItem", position: 3, name: "Gospel of John Reading Plan", item: URL },
      ],
    },
  ],
};

export default function JohnPlanPage() {
  return (
    <>
      <JsonLd data={ld} />
      <Nav />
      <main id="main" className="print-compact bg-[#050812]">
        <section className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_76%_18%,rgba(244,196,92,.18),transparent_28%),radial-gradient(circle_at_10%_45%,rgba(233,95,50,.12),transparent_26%),#050812] pb-14 pt-36 sm:pb-16 sm:pt-44 print:pb-2 print:pt-0">
          <div className="star-field absolute inset-0" aria-hidden="true" />
          <div className="grain" />
          <div className="container-x relative z-10">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[.3em] text-gold">A free reading plan</p>
              <h1 className="mt-5 font-display text-[clamp(2.8rem,7.5vw,6rem)] font-bold uppercase leading-[.88] tracking-[-.05em] text-white">
                21 days in{" "}
                <span className="block text-gradient-gold">the Gospel of John.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">
                One chapter a day. A key verse and one question for each. John
                wrote his Gospel &ldquo;so that you may believe that Jesus is
                the Christ, the Son of God, and that by believing you may have
                life in his name&rdquo; (John 20:31).
              </p>
              <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
                <PrintButton label="Print the plan" />
                <Link href="/blog/how-to-read-the-bible-for-the-first-time" className="button-secondary">
                  New to the Bible? Start here <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad !pt-12">
          <div className="container-x">
            <div className="mx-auto max-w-5xl">
              <div className="no-print mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {HOW.map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
                    <p className="font-bold text-white">{title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">{text}</p>
                  </div>
                ))}
              </div>
              <h2 className="sr-only">The 21 days</h2>
              <ReadingPlan />
            </div>

            <div className="no-print ring-glow mx-auto mt-16 max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-8 text-center sm:p-12">
              <Icon name="spark" className="mx-auto h-9 w-9 text-gold" />
              <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">Meet the Jesus of John.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                Reading John with questions about faith? Start with who Jesus
                is — and if you&apos;re ready to respond, Know Jesus explains how.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/know-jesus" className="button-primary">
                  Know Jesus <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/blog/who-is-jesus" className="button-secondary">Who is Jesus?</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
