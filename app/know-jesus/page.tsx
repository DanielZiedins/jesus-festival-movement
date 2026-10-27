import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import KnowJesus from "@/components/KnowJesus";
import ScriptureQuote from "@/components/ScriptureQuote";
import Reveal from "@/components/ui/Reveal";
import Share from "@/components/Share";
import ScrollProgress from "@/components/ScrollProgress";
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

type Step = { title: string; text: string; href?: string; cta?: string };

const NEXT_STEPS: Step[] = [
  {
    title: "Tell someone",
    text: "Faith grows when it's spoken. Tell a Christian friend, a pastor, or tell us — we would love to celebrate with you.",
    href: `mailto:${SITE.email}?subject=I%20just%20decided%20to%20follow%20Jesus`,
    cta: "Tell us",
  },
  {
    title: "Read the Gospel of John",
    text: "Start there rather than at page one of the Bible. It was written so you would believe and have life in His name.",
    href: "https://www.biblegateway.com/passage/?search=John+1&version=NIV",
    cta: "Read John 1 free online",
  },
  {
    title: "Find a church family",
    text: "You were never meant to follow Jesus alone. Find a local church that loves Jesus and teaches the Bible — and if you're not sure where to start, ask us and we'll help.",
    href: "https://www.loveontheworld.com/cities",
    cta: "Find a Love on The World group near you",
  },
  {
    title: "Get baptized",
    text: "Jesus asked His followers to be baptized as a public declaration of new life. Ask a local church to help you.",
    href: "/answers#what-is-baptism",
    cta: "What baptism is",
  },
  {
    title: "Talk to God daily",
    text: "Prayer isn't a performance. Just talk to Him honestly, and read a little of His Word each day.",
  },
];

/**
 * The doubts that actually hold people back, answered briefly and honestly.
 * Rendered as visible text and mirrored in FAQPage schema below.
 */
const QUESTIONS = [
  {
    q: "I've done too much. Could God really forgive me?",
    a: "Yes. No sin is bigger than the cross. The apostle Paul called himself the worst of sinners, and he was forgiven completely. If you come to Jesus honestly, He does not hold back.",
    ref: "1 John 1:9",
    verse: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.",
  },
  {
    q: "Do I need to clean up my life first?",
    a: "No. You come as you are, and He does the changing. Jesus didn't wait for anyone to become good enough before He died for them — and He isn't waiting for you to either.",
    ref: "Romans 5:8",
    verse: "But God shows his love for us in that while we were still sinners, Christ died for us.",
  },
  {
    q: "Isn't Jesus just one way among many?",
    a: "Jesus didn't leave that option open. He claimed to be the only way to God, which means He was either telling the truth or He wasn't. Don't take our word for it — read His own words in the Gospel of John and decide for yourself.",
    ref: "John 14:6",
    verse: "Jesus said to him, \"I am the way, and the truth, and the life. No one comes to the Father except through me.\"",
  },
  {
    q: "If God is good, why is there so much suffering?",
    a: "There's no tidy answer, and we won't pretend there is. But God is not distant from pain. In Jesus He stepped into it — rejected, beaten and crucified — and He promises a day when every tear is wiped away.",
    ref: "Revelation 21:4",
    verse: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore.",
  },
  {
    q: "What if I prayed and didn't feel anything?",
    a: "Your salvation rests on Jesus' promise, not on your feelings. Feelings come and go; His word doesn't. If you called on Him honestly, He heard you.",
    ref: "Romans 10:13",
    verse: "For everyone who calls on the name of the Lord will be saved.",
  },
  {
    q: "Do I have to go to church?",
    a: "Following Jesus was never meant to be a solo journey. A church is a family that helps you grow, carries you when it's hard, and lets you help others. Start anywhere that loves Jesus and teaches the Bible — we'll gladly help you find one.",
    ref: "Hebrews 10:24–25",
    verse: "And let us consider how to stir up one another to love and good works, not neglecting to meet together.",
  },
] as const;

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
      "@type": "FAQPage",
      "@id": `${SITE.url}/know-jesus#questions`,
      mainEntity: QUESTIONS.map((x) => ({
        "@type": "Question",
        name: x.q,
        acceptedAnswer: { "@type": "Answer", text: `${x.a} (${x.ref})` },
      })),
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
      <ScrollProgress />
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
                  next steps to help you grow — and a fuller guide to{" "}
                  <a
                    href="/blog/i-just-became-a-christian-what-now"
                    className="font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                  >
                    your first 30 days
                  </a>
                  .
                </p>
              </Reveal>
            </div>

            <ol className="mx-auto mt-14 max-w-3xl space-y-4">
              {NEXT_STEPS.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.05} as="li" className="flex gap-5 rounded-2xl glass p-6">
                  
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
                      {s.href && (
                        <a
                          href={s.href}
                          {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="mt-3 inline-flex min-h-6 items-center text-sm font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                        >
                          {s.cta}
                        </a>
                      )}
                    </div>
                  
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Honest questions */}
        <section id="questions" className="section-pad relative overflow-hidden">
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                  Honest Questions,{" "}
                  <span className="text-gradient-gold">Honest Answers</span>
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
                  The things that hold people back — answered plainly, with
                  what the Bible actually says.
                </p>
              </Reveal>
            </div>
            <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
              {QUESTIONS.map((x, i) => (
                <Reveal key={x.q} delay={(i % 2) * 0.05}>
                  <article className="h-full rounded-2xl glass p-6 sm:p-7">
                    <h3 className="font-display text-xl font-bold leading-snug text-white">{x.q}</h3>
                    <p className="mt-3 leading-relaxed text-white/75">{x.a}</p>
                    <blockquote className="mt-4 border-l-2 border-gold/60 pl-4 text-sm italic leading-relaxed text-white/65">
                      &ldquo;{x.verse}&rdquo;{" "}
                      <cite className="not-italic font-semibold text-gold-400">{x.ref}</cite>
                    </blockquote>
                  </article>
                </Reveal>
              ))}
            </div>
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
              <Reveal delay={0.12}>
                <p className="mx-auto mt-8 max-w-xl text-white/65">
                  Already following Jesus and want to help someone else meet Him?{" "}
                  <a
                    href="/blog/how-to-lead-someone-to-christ"
                    className="font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                  >
                    How to lead someone to Christ
                  </a>
                  .
                </p>
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
