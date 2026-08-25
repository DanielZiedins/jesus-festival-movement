import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import KnowJesus from "@/components/KnowJesus";
import ScriptureQuote from "@/components/ScriptureQuote";
import Reveal from "@/components/ui/Reveal";
import Share from "@/components/Share";
import ScrollFX from "@/components/ui/ScrollFX";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Know Jesus — How To Be Saved & Start Following Him Today",
  description:
    "The good news of Jesus Christ explained simply: God loves you, sin separates us, Jesus made a way, and you can respond in faith today. A prayer to pray and next steps to take.",
  keywords: [
    "how to be saved",
    "how to become a Christian",
    "who is Jesus",
    "the gospel explained",
    "prayer of salvation",
    "how to follow Jesus",
    "give my life to Jesus",
    "what is the good news",
  ],
  alternates: { canonical: "/know-jesus" },
  openGraph: {
    type: "article",
    url: `${SITE.url}/know-jesus`,
    title: "Know Jesus — The Good News, Explained Simply",
    description:
      "God loves you. Sin separates us. Jesus made a way. You can respond today.",
  },
};

const NEXT_STEPS = [
  {
    title: "Tell someone",
    text: "Faith grows when it's spoken. Tell a Christian friend, a pastor, or tell us — we would love to celebrate with you.",
  },
  {
    title: "Read the Gospel of John",
    text: "Start there rather than at page one of the Bible. It was written so you would believe and have life in His name.",
  },
  {
    title: "Find a church family",
    text: "You were never meant to follow Jesus alone. Find a local church that loves Jesus and teaches the Bible.",
  },
  {
    title: "Get baptized",
    text: "Jesus asked His followers to be baptized as a public declaration of new life. Ask a local church to help you.",
  },
  {
    title: "Talk to God daily",
    text: "Prayer isn't a performance. Just talk to Him honestly, and read a little of His Word each day.",
  },
];

/**
 * HowTo rather than Article: the page is literally a set of steps someone can
 * follow, which is what answer engines are matching for "how do I become a
 * Christian". `speakable` points at the prayer, the part worth reading aloud.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": `${SITE.url}/know-jesus#howto`,
      name: "How to become a Christian and start following Jesus",
      description:
        "The good news in four steps — God loves you, sin separates us, Jesus made a way, and you can respond in faith today — with a prayer to pray and next steps to take.",
      totalTime: "PT5M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "God loves you",
          text: "You were created on purpose, for a purpose — to know God. He loves you more than you can imagine. (John 3:16)",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Sin separates us",
          text: "All of us have fallen short. Sin separates us from God, and no amount of effort can bridge that gap on our own. (Romans 3:23)",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Jesus made a way",
          text: "Jesus Christ — God's Son — died on the cross for your sins and rose from the dead. He paid the price you couldn't pay. (Romans 5:8)",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Respond in faith",
          text: "Turn from sin, believe in Jesus, and confess Him as Lord. He will forgive you, make you new, and never leave you. (Romans 10:9)",
        },
      ],
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1"],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Know Jesus",
          item: `${SITE.url}/know-jesus`,
        },
      ],
    },
  ],
};

export default function KnowJesusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollFX />
      <Nav />
      <main id="main">
        {/* Hero — carries the page h1 */}
        <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)]" />
          <div className="aurora opacity-60" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal immediate>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-400 sm:text-sm">
                  The Most Important Thing On This Website
                </p>
              </Reveal>
              <Reveal immediate delay={0.05}>
                <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.02] sm:text-7xl">
                  Know <span className="text-gradient-gold">Jesus</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                  God loves you. Sin separates us from Him. Jesus made a way. And
                  you can respond today — right where you are, in the next two
                  minutes.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <KnowJesus />

        <ScriptureQuote
          quote="For God so loved the world that He gave His only Son, that whoever believes in Him should not perish but have eternal life."
          reference="John 3:16"
        />

        {/* Next steps */}
        <section className="section-pad relative overflow-hidden border-y border-white/5 bg-navy-950/40">
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                  You Said Yes To Jesus.{" "}
                  <span className="text-gradient-gold">Now What?</span>
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
                  Salvation is a gift, not a graduation. Here are five simple
                  next steps to help you grow.
                </p>
              </Reveal>
            </div>

            <ol className="mx-auto mt-14 max-w-3xl space-y-4">
              {NEXT_STEPS.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.05}>
                  <li className="flex gap-5 rounded-2xl glass p-6">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-gold/30 bg-navy-900 font-display font-bold text-gold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 leading-relaxed text-white/70">
                        {s.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Reach out + share */}
        <section className="section-pad relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(255,107,53,0.18),transparent_55%)]" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <h2 className="text-balance font-display text-3xl font-bold leading-tight sm:text-4xl">
                  Questions? Doubts? Somewhere In Between?
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
                  You don&apos;t need to have it all figured out to reach out.
                  Ask us anything — no pressure, no judgment.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <a
                  href={`mailto:${SITE.email}?subject=A%20question%20about%20Jesus`}
                  className="mt-9 inline-block rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-base font-bold text-ink shadow-glow-ember transition-transform hover:scale-105"
                >
                  Ask Us Anything
                </a>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-14">
                  <Share
                    title="Send this to someone who needs it"
                    url={`${SITE.url}/know-jesus`}
                    text="The good news of Jesus, explained simply."
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
