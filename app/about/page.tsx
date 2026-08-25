import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import JoinForm from "@/components/JoinForm";
import { SITE, VISION_PILLARS } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Who We Are & What We Believe",
  description:
    "The Jesus Festival Movement began in Hamilton, Ontario. Who we are, what we believe, how we're funded, and why we give the entire festival model away free.",
  keywords: [
    "about Jesus Festival Movement",
    "who runs Jesus Festival",
    "christian festival organisation",
    "statement of faith evangelism",
    "Hamilton Ontario ministry",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/about`,
    title: "About — Jesus Festival Movement",
    description:
      "Who we are, what we believe, and why we give the entire festival model away free.",
  },
};

const BELIEFS = [
  {
    title: "Jesus Christ, crucified and risen",
    text: "That Jesus is the Son of God, that He died for our sins and rose bodily from the dead, and that He alone is Lord and Savior.",
  },
  {
    title: "Salvation by grace through faith",
    text: "That no one earns their way to God. Salvation is a gift received by repentance and faith, not a reward for self-improvement.",
  },
  {
    title: "The authority of Scripture",
    text: "That the Bible is God's word — trustworthy, sufficient, and the standard we measure our practice against, including this work.",
  },
  {
    title: "The Great Commission, given to everyone",
    text: "That the call to make disciples of all nations belongs to the whole Church, not to a professional class within it.",
  },
  {
    title: "The unity of the Church",
    text: "That Jesus prayed for His people to be one so the world would believe. We hold our secondary convictions honestly and our preferences loosely.",
  },
];

const HOW_WE_WORK = [
  {
    title: "We give the model away",
    text: "The full 13-step playbook is free and public. If a leader elsewhere can run this better than us, we want to hand them everything and get out of the way.",
  },
  {
    title: "We don't inflate numbers",
    text: "You won't find impressive conversion statistics on this site, because we don't keep score that way and we won't invent figures. We describe fruit honestly and qualitatively.",
  },
  {
    title: "We serve the local church",
    text: "We are not a church and we don't plant them. Festivals exist to serve the churches already in a city, and new believers are handed to them.",
  },
  {
    title: "We are volunteers",
    text: "This is run by people with jobs and families who decided the Gospel was worth their evenings and weekends. Costs are covered by partnership and Kingdom-minded business owners.",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE.url}/about#page`,
        url: `${SITE.url}/about`,
        name: "About the Jesus Festival Movement",
        description:
          "Who we are, what we believe, and why we give the festival model away free.",
        about: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        description: SITE.description,
        foundingLocation: {
          "@type": "Place",
          name: "Hamilton, Ontario, Canada",
        },
        areaServed: "Worldwide",
        knowsAbout: [
          "Evangelism",
          "Gospel festivals",
          "Church unity",
          "Outreach event planning",
          "The Great Commission",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: `${SITE.url}/about`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <main id="main">
        <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)]" />
          <div className="aurora opacity-60" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal immediate>
                <Eyebrow>About Us</Eyebrow>
              </Reveal>
              <Reveal immediate delay={0.05}>
                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                  Ordinary People,{" "}
                  <span className="text-gradient-gold">One Commission.</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                  The Jesus Festival Movement began in Hamilton, Ontario, Canada
                  — with no budget, no platform, and no guarantee it would work.
                  Here&apos;s who we are and how we operate.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-pad !py-14">
          <div className="container-x">
            <div className="mx-auto max-w-3xl space-y-6">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  How this started
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-lg leading-relaxed text-white/75">
                  A small group of believers in Hamilton became convinced that
                  Jesus should be lifted up publicly in their city — not inside a
                  building, but in the open air where people who would never
                  attend a service could hear.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-lg leading-relaxed text-white/75">
                  So they prayed. They asked pastors who had never worked
                  together to share one stage. They filled in permit forms and
                  trained volunteers who had never shared their faith out loud
                  before. And on the day, the Gospel was preached in a public
                  park.
                </p>
              </Reveal>
              <Reveal delay={0.11}>
                <p className="text-lg leading-relaxed text-white/75">
                  People met Jesus. People were baptized. And — the part
                  nobody planned for — <strong className="text-white">it
                  didn&apos;t stop when the stage came down.</strong> Outreach
                  teams formed for the festival are still on the streets years
                  later. That&apos;s what turned an event into a movement, and
                  it&apos;s why we now publish the entire model for free.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="text-base text-white/55">
                  The vision has since expanded into the Niagara region, with
                  Toronto being planned and cities across the world being prayed
                  for.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="section-pad !py-14 border-y border-white/5 bg-navy-950/40">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  What we believe
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mt-3 max-w-2xl text-white/60">
                  These are the essentials we unite around. Churches partnering
                  with a festival agree here; on secondary matters we differ
                  gladly.
                </p>
              </Reveal>
              <div className="mt-9 space-y-4">
                {BELIEFS.map((b, i) => (
                  <Reveal key={b.title} delay={i * 0.04}>
                    <div className="rounded-2xl glass p-6">
                      <div className="flex items-start gap-3.5">
                        <Icon
                          name="check"
                          className="mt-1 h-5 w-5 flex-none text-gold"
                          strokeWidth={2.4}
                        />
                        <div>
                          <h3 className="font-display text-lg font-bold text-white">
                            {b.title}
                          </h3>
                          <p className="mt-1.5 leading-relaxed text-white/65">
                            {b.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="section-pad !py-14">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  How we work
                </h2>
              </Reveal>
              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                {HOW_WE_WORK.map((h, i) => (
                  <Reveal key={h.title} delay={i * 0.05}>
                    <div className="h-full rounded-2xl border-l-2 border-gold/50 bg-white/[0.035] p-6">
                      <h3 className="font-display text-lg font-bold text-white">
                        {h.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-white/65">
                        {h.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision pillars */}
        <section className="section-pad !py-14 border-y border-white/5 bg-navy-950/40">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  What we&apos;re aiming at
                </h2>
              </Reveal>
              <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {VISION_PILLARS.map((p, i) => (
                  <Reveal key={p.word} delay={i * 0.04}>
                    <li className="h-full rounded-2xl glass p-5">
                      <span className="font-display text-xs font-bold text-ember-400">
                        0{i + 1}
                      </span>
                      <h3 className="mt-2 font-display font-bold text-white">
                        {p.word}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/60">
                        {p.desc}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Contact + join */}
        <section className="section-pad">
          <div className="container-x">
            <Reveal>
              <div className="mx-auto max-w-4xl rounded-3xl border border-gold/20 bg-gradient-to-br from-navy-900/80 to-ink p-8 sm:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
                  <div>
                    <p className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Come and{" "}
                      <span className="text-gradient-gold">meet us.</span>
                    </p>
                    <p className="mt-3 max-w-md leading-relaxed text-white/65">
                      Questions, ideas, or a city on your heart? Email{" "}
                      <a
                        href={`mailto:${SITE.email}`}
                        className="font-semibold text-gold hover:underline"
                      >
                        {SITE.email}
                      </a>
                      . A real person reads every one.
                    </p>
                  </div>
                  <JoinForm source="about" variant="inline" cta="Join Free" />
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
