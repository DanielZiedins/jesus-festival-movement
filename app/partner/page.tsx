import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import { SITE } from "@/lib/content";

/** e3 Canada's own secure giving profile for Daniel & Katie. */
const GIVE_URL = "https://e3ministry.ca/staff/katie-daniel-ziedins";
const HOME_URL = "https://www.kd-ziedins.com";

export const metadata: Metadata = {
  title: "Partner With Daniel & Katie Ziedins",
  description:
    "Daniel and Katie Ziedins serve with e3 Canada and I Am Second — equipping believers to share Jesus, gathering cities, and sending outreach teams. An invitation to pray, give and go with them.",
  alternates: { canonical: `${SITE.url}/partner` },
  // Quiet on purpose: this is for people who are sent here, not a page the
  // movement site should be soliciting search traffic with. kd-ziedins.com is
  // the public front door.
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: `${SITE.url}/partner`,
    title: "Partner With Daniel & Katie Ziedins",
    description:
      "Pray, give and go with Daniel and Katie — serving with e3 Canada and I Am Second since 2014.",
  },
};

const WAYS = [
  {
    icon: "pray" as const,
    kicker: "First, and most",
    title: "Pray",
    body: "This is the part we ask for before anything else, and it is not a formality. The fruit we have seen — chains broken, people healed, hard men weeping in a park — has never once come from strategy. Pray for boldness, for our family, for the people we will meet this week whose names we do not know yet.",
  },
  {
    icon: "hands" as const,
    kicker: "If the Lord prompts you",
    title: "Give",
    body: "Daniel and Katie are supported through e3 Canada, which means a monthly or one-time gift goes through e3's own secure giving page and funds the ministry directly — outreach, training, equipping churches, and the freedom to say yes when God opens a door.",
  },
  {
    icon: "globe" as const,
    kicker: "The invitation that costs most",
    title: "Go",
    body: "Come out on a Thursday. Bring your church into a training. Start a group in your own neighbourhood, or a festival in your own city. The best partnership has never been a transaction — it is more people doing the same thing where they live.",
  },
];

const JOURNEY = [
  {
    year: "2014",
    title: "Love on Hamilton begins",
    body: "Weekly street evangelism and practical care for Hamilton's homeless community — sharing the Gospel with everyone they meet.",
  },
  {
    year: "Growth",
    title: "The movement multiplies",
    body: "A small outreach becomes 50+ people gathering weekly to evangelize, and Love on The World is born, carrying the mission into more cities.",
  },
  {
    year: "2022",
    title: "Overflow launches",
    body: "A Sunday evening service where the Holy Spirit is given full permission to move. Salvations, healings and baptisms follow.",
  },
  {
    year: "Unity",
    title: "Partnering with e3 Canada & I Am Second",
    body: "Joining forces to equip believers to evangelize and to establish multiplying, life-changing churches.",
  },
  {
    year: "Today",
    title: "All for God's glory",
    body: "Equipping churches, raising up bold believers, gathering cities around Jesus — believing Canada's greatest revival is at hand.",
  },
];

export default function PartnerPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#2a1030_0%,#0b0a1f_50%,#05060f_100%)]" />
          <div className="aurora opacity-50" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal immediate>
                <Eyebrow>Daniel &amp; Katie Ziedins</Eyebrow>
              </Reveal>
              <Reveal immediate delay={0.05}>
                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                  We All Have A Part{" "}
                  <span className="text-gradient-gold">In What God Is Doing.</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                  For over a decade we have given our lives to one simple thing:{" "}
                  <strong className="text-white">
                    that people would meet Jesus
                  </strong>{" "}
                  — on the streets of Hamilton, in churches being equipped, and
                  in cities learning to gather around His name. This page is an
                  invitation to walk that road with us.
                </p>
              </Reveal>
              <Reveal immediate delay={0.15}>
                <figure className="mx-auto mt-10 max-w-2xl border-l-2 border-gold/40 pl-6 text-left">
                  <blockquote className="font-display text-xl italic leading-relaxed text-white/80 sm:text-2xl">
                    &ldquo;Your kingdom come, your will be done, on earth as it
                    is in heaven.&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 text-xs font-bold uppercase tracking-[.22em] text-gold">
                    Matthew 6:10
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal immediate delay={0.2}>
                <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={GIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                  >
                    Partner through e3 Canada{" "}
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a href="#pray" className="button-secondary">
                    Start by praying
                  </a>
                </div>
              </Reveal>
              <Reveal immediate delay={0.25}>
                <p className="mt-6 text-sm text-white/50">
                  Giving is handled entirely on{" "}
                  <a
                    href="https://e3ministry.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/25 underline-offset-4 transition hover:text-gold"
                  >
                    e3 Canada&apos;s
                  </a>{" "}
                  own secure page — nothing is collected here.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* The story */}
        <section className="section-pad !py-16">
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="text-xs font-bold uppercase tracking-[.28em] text-gold">
                  The short version
                </p>
                <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-[.95] tracking-[-.04em] text-white sm:text-5xl">
                  It started with a yes,
                  <span className="block text-gradient-gold">
                    and a street corner.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/70">
                  <p>
                    In 2014 we began Love on Hamilton — walking our own city
                    every week, sharing the Gospel with anyone who would listen
                    and bringing practical care to people living on the street.
                    We had no plan beyond obedience.
                  </p>
                  <p>
                    What God did with that is still hard to write down without
                    stopping. Lives healed. Addictions broken. People delivered.
                    Baptisms and salvations often enough that they stopped being
                    remarkable and started being{" "}
                    <em className="text-white/85">Tuesday</em>. To God be all the
                    glory — none of it was ours to engineer.
                  </p>
                  <p>
                    That small outreach grew into 50+ people gathering weekly to
                    evangelize, then into Love on The World reaching other
                    cities, then into Overflow, the Jesus Festival, and training
                    churches to make evangelism a lifestyle rather than an event.
                  </p>
                  <p>
                    Today we serve with{" "}
                    <strong className="text-white">e3 Canada</strong> and{" "}
                    <strong className="text-white">I Am Second</strong>,
                    equipping believers to evangelize and helping establish
                    multiplying churches — here, and around the world.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <a
                  href={HOME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-white transition hover:text-gold"
                >
                  Read the full story at KD-Ziedins.com
                  <Icon name="link" className="h-4 w-4" />
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="section-pad !py-16 border-y border-white/5 bg-navy-950/40">
          <div className="container-x">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/10 pb-5">
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    God&apos;s faithfulness, year after year
                  </h2>
                </div>
              </Reveal>
              <ol className="mt-10 space-y-8">
                {JOURNEY.map((j, i) => (
                  <Reveal key={j.title} delay={i * 0.05}>
                    <li className="relative border-l border-white/12 pl-7">
                      <span
                        className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_0_5px_rgba(244,196,92,.12)]"
                        aria-hidden="true"
                      />
                      <p className="text-xs font-bold uppercase tracking-[.22em] text-gold-400">
                        {j.year}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                        {j.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-white/65">
                        {j.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Three ways */}
        <section id="pray" className="section-pad !py-16 scroll-mt-24">
          <div className="container-x">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <Eyebrow>Three ways to walk with us</Eyebrow>
                <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">
                  Pray. Give. Go.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                  In that order, honestly. We would rather have one person
                  praying for this work with real faith than ten who feel
                  obliged to fund it.
                </p>
              </Reveal>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
              {WAYS.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06}>
                  <article className="flex h-full flex-col rounded-2xl glass p-7">
                    <Icon name={w.icon} className="h-8 w-8 text-gold" />
                    <p className="mt-5 text-[.62rem] font-bold uppercase tracking-[.2em] text-white/45">
                      {w.kicker}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold uppercase text-white">
                      {w.title}
                    </h3>
                    <p className="mt-4 flex-1 leading-relaxed text-white/65">
                      {w.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What it fuels */}
        <section className="section-pad !py-16 border-y border-white/5 bg-navy-950/40">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  What your partnership actually goes into
                </h2>
                <p className="mt-3 text-white/60">
                  Not an organisation&apos;s overhead. These are the things that
                  happen because people stand behind them.
                </p>
              </Reveal>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "Weekly outreach",
                    "Teams on the streets of Hamilton and beyond — every week, not just when it is convenient.",
                  ],
                  [
                    "Equipping the Church",
                    "Training believers and churches with practical, biblical tools, then taking them out to actually use them.",
                  ],
                  [
                    "Gathering cities",
                    "Jesus Festivals — free, family-friendly, and built so that something keeps running after the stage comes down.",
                  ],
                  [
                    "Sending and multiplying",
                    "Helping establish multiplying outreach groups and churches, anywhere and everywhere God opens a door.",
                  ],
                ].map(([t, b], i) => (
                  <Reveal key={t} delay={i * 0.05}>
                    <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[.025] p-6">
                      <Icon
                        name="check"
                        className="mt-1 h-5 w-5 flex-none text-gold"
                      />
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          {t}
                        </h3>
                        <p className="mt-2 leading-relaxed text-white/65">{b}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The ask */}
        <section className="section-pad !py-16">
          <div className="container-x">
            <div className="mx-auto max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-8 text-center shadow-[0_35px_110px_rgba(0,0,0,.35)] sm:p-12">
              <Reveal>
                <Icon name="fire" className="mx-auto h-9 w-9 text-gold" />
                <p className="mt-6 text-xs font-bold uppercase tracking-[.28em] text-gold">
                  Prayerfully consider it
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">
                  Stand with us.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                  We believe Canada is on the brink of its greatest revival, and
                  we genuinely believe everyone has a part to play in it. If the
                  Lord puts it on your heart to partner with us financially, e3
                  Canada handles it from here.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={GIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                  >
                    Give through e3 Canada{" "}
                    <Icon name="arrow" className="h-4 w-4" />
                  </a>
                  <a
                    href={HOME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary"
                  >
                    KD-Ziedins.com
                  </a>
                </div>
                <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-white/50">
                  And if giving is not where you are right now — please still
                  pray. That has never been the lesser option.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="section-pad !py-16 border-t border-white/5">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <figure>
                  <blockquote className="font-display text-xl italic leading-relaxed text-white/80 sm:text-2xl">
                    &ldquo;Therefore go and make disciples of all nations… And
                    surely I am with you always, to the very end of the
                    age.&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-xs font-bold uppercase tracking-[.22em] text-gold">
                    Matthew 28:19–20
                  </figcaption>
                </figure>
                <p className="mt-8 font-display text-lg font-bold uppercase tracking-[.2em] text-gradient-gold">
                  All for God&apos;s glory
                </p>
                <p className="mt-6 text-white/60">
                  Thank you — genuinely. For reading this far, and for whatever
                  the Lord leads you to do with it.
                </p>
                <p className="mt-2 font-display text-lg font-bold text-white">
                  Daniel &amp; Katie
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
                  <a
                    href="https://www.instagram.com/kd.ziedins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white/60 transition hover:text-gold"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/KDZiedins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white/60 transition hover:text-gold"
                  >
                    Facebook
                  </a>
                  <Link
                    href="/"
                    className="font-semibold text-white/60 transition hover:text-gold"
                  >
                    Jesus Festival Movement
                  </Link>
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
