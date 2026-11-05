import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import PrintButton from "@/components/PrintButton";
import { SITE } from "@/lib/content";

// Re-render daily so the week dates roll over to next year after Christmas.
export const revalidate = 86400;

/** Advent Sunday: the fourth Sunday before Christmas Day. */
function adventSunday(year: number): Date {
  const christmas = new Date(Date.UTC(year, 11, 25));
  const dow = christmas.getUTCDay();
  const lastSunday = new Date(christmas);
  lastSunday.setUTCDate(25 - (dow === 0 ? 7 : dow));
  const first = new Date(lastSunday);
  first.setUTCDate(lastSunday.getUTCDate() - 21);
  return first;
}

/** This season's Advent — next year's once Christmas has passed. */
function currentAdvent(now = new Date()) {
  const y = now.getUTCMonth() === 11 && now.getUTCDate() > 25 ? now.getUTCFullYear() + 1 : now.getUTCFullYear();
  const start = adventSunday(y);
  const weeks = [0, 1, 2, 3].map((i) => {
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate() + i * 7);
    return d;
  });
  return { year: y, weeks };
}

const fmt = (d: Date) =>
  d.toLocaleDateString("en-CA", { month: "long", day: "numeric", timeZone: "UTC" });

const WEEKS = [
  {
    theme: "Hope",
    scripture: "The people who walked in darkness have seen a great light; those who dwelt in a land of deep darkness, on them has light shone.",
    ref: "Isaiah 9:2",
    prayer: "Jesus, Light of the world, shine into the dark places of our city. Where people feel hopeless this season, let them find hope in You.",
    pray: ["People who are lonely or grieving this Christmas", "Anyone facing the season without enough", "Your city by name — its streets, homes and leaders"],
    act: "Write down three people you'll invite to a Christmas service, and pray for them by name every day this week.",
  },
  {
    theme: "Peace",
    scripture: "For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.",
    ref: "Isaiah 9:6",
    prayer: "Prince of Peace, bring Your peace to troubled homes, divided families and anxious hearts in our city. Make Your church peacemakers.",
    pray: ["Families under strain this season", "Neighbourhoods and communities in conflict", "Churches across the city to work together in unity"],
    act: "Reach out to someone you've drifted from or disagreed with — a message, a card or a coffee.",
  },
  {
    theme: "Joy",
    scripture: "Fear not, for behold, I bring you good news of great joy that will be for all the people. For unto you is born this day in the city of David a Savior, who is Christ the Lord.",
    ref: "Luke 2:10–11",
    prayer: "Lord, let the good news of great joy reach every corner of our city. Give Your people courage and gladness to share it.",
    pray: ["People who have never heard the Christmas story clearly", "Children and young people in your city", "Every carol, service and outreach this month"],
    act: "Give out your invitations by hand, or join a carol outreach. See Christmas outreach ideas.",
  },
  {
    theme: "Love",
    scripture: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
    ref: "John 3:16",
    prayer: "Father, thank You for the gift of Your Son. Fill us with Your love for the people around us, and let many receive that gift this Christmas.",
    pray: ["Anyone who will hear the Gospel at a Christmas service", "People who will be alone on Christmas Day", "Those who serve: shelters, hospitals, emergency workers"],
    act: "Serve someone who will be alone — a meal, a visit or a seat at your table.",
  },
] as const;

export const metadata: Metadata = {
  title: "Advent Prayer Guide For Your City (Free & Printable)",
  description:
    "A free, printable four-week Advent prayer guide — Hope, Peace, Joy and Love — with Scripture, prayers for your city, people to pray for, and one simple action each week, leading to Christmas Day.",
  keywords: [
    "advent prayer guide",
    "advent prayers for the city",
    "printable advent devotional",
    "advent hope peace joy love",
    "advent prayer guide for church",
    "christmas prayer guide",
  ],
  alternates: { canonical: "/resources/advent-prayer-guide" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/resources/advent-prayer-guide`,
    title: "Advent Prayer Guide For Your City — Jesus Festival Movement",
    description: "Four weeks of praying for your city: Hope, Peace, Joy and Love.",
  },
};

export default function AdventGuidePage() {
  const { year, weeks } = currentAdvent();
  const url = `${SITE.url}/resources/advent-prayer-guide`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "@id": `${url}#guide`,
        name: "How to pray for your city through Advent",
        description: "Four weeks of Advent prayer for your city — Hope, Peace, Joy and Love — leading to Christmas Day.",
        step: WEEKS.map((w, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: `Week ${i + 1}: ${w.theme}`,
          text: `${w.prayer} This week: ${w.act}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE.url}/resources` },
        { "@type": "ListItem", position: 3, name: "Advent Prayer Guide", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={ld} />
      <Nav />
      <main id="main" className="print-compact bg-[#050812]">
        <section className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_76%_18%,rgba(244,196,92,.18),transparent_28%),radial-gradient(circle_at_10%_45%,rgba(233,95,50,.12),transparent_26%),#050812] pb-16 pt-36 sm:pb-20 sm:pt-44 print:pb-2 print:pt-0">
          <div className="star-field absolute inset-0" aria-hidden="true" />
          <div className="grain" />
          <div className="container-x relative z-10">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[.3em] text-gold">A printable prayer resource · Advent {year}</p>
              <h1 className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase leading-[.85] tracking-[-.06em] text-white">
                Advent prayer guide{" "}
                <span className="block text-gradient-gold">for your city.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">
                Four weeks of Hope, Peace, Joy and Love — praying for the people
                and streets around you as Christmas draws near. Use it alone, as
                a family, or as a church.
              </p>
              <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
                <PrintButton label="Print the guide" />
                <Link href="/blog/christmas-outreach-ideas-for-churches" className="button-secondary">
                  Christmas outreach ideas <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad !pt-14">
          <div className="container-x">
            <div className="mx-auto max-w-4xl space-y-6 print:space-y-3">
              <div className="print-block rounded-[1.8rem] border border-white/10 bg-white/[.035] p-7 sm:p-8">
                <h2 className="font-display text-2xl font-bold uppercase tracking-[-.03em] text-white">How to use it</h2>
                <p className="mt-4 leading-relaxed text-white/75">
                  Each Sunday, read the Scripture and pray the prayer. During the
                  week, pray for the people listed and say your city&apos;s name
                  to God. Then do the one action. Five minutes a day is plenty —
                  and it goes further with a few friends praying the same thing.
                  If you can, take it on a{" "}
                  <Link href="/resources/prayer-walk" className="font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold">
                    prayer walk
                  </Link>
                  .
                </p>
              </div>

              {WEEKS.map((w, i) => (
                <article key={w.theme} className="print-block rounded-[1.8rem] border border-white/10 bg-white/[.035] p-7 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[.22em] text-gold-400">
                    Week {i + 1} · from Sunday {fmt(weeks[i])}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-[-.03em] text-white">{w.theme}</h2>
                  <blockquote className="mt-5 border-l-2 border-gold/60 pl-4 text-lg italic leading-relaxed text-white/85">
                    &ldquo;{w.scripture}&rdquo;{" "}
                    <cite className="not-italic font-semibold text-gold-400">{w.ref}</cite>
                  </blockquote>
                  <p className="mt-5 font-display text-lg leading-snug text-white">{w.prayer}</p>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[.2em] text-white/65">Pray for</h3>
                      <ul className="mt-3 space-y-2">
                        {w.pray.map((p) => (
                          <li key={p} className="flex gap-3 leading-relaxed text-white/75">
                            <span className="mt-1 flex h-4 w-4 shrink-0 rounded border border-gold/50" aria-hidden="true" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-[.2em] text-white/65">This week</h3>
                      <p className="mt-3 leading-relaxed text-white/75">{w.act}</p>
                    </div>
                  </div>
                </article>
              ))}

              <article className="print-block rounded-[1.8rem] border border-gold/25 bg-gradient-to-br from-gold/[.08] to-ember/[.05] p-7 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[.22em] text-gold-400">December 25</p>
                <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-[-.03em] text-white">Christmas Day</h2>
                <blockquote className="mt-5 border-l-2 border-gold/60 pl-4 text-lg italic leading-relaxed text-white/85">
                  &ldquo;And the Word became flesh and dwelt among us, and we have seen his glory, glory as of the only Son from the Father, full of grace and truth.&rdquo;{" "}
                  <cite className="not-italic font-semibold text-gold-400">John 1:14</cite>
                </blockquote>
                <p className="mt-5 font-display text-lg leading-snug text-white">
                  Jesus, You came near. Thank You. Let everyone who heard the good
                  news this season come to know You — and keep our city in Your
                  light all year long.
                </p>
              </article>
            </div>

            <div className="no-print mx-auto mt-14 max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-8 text-center sm:p-12">
              <Icon name="spark" className="mx-auto h-9 w-9 text-gold" />
              <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">Pray, then go.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                Christmas is one of the few seasons when people who never think
                about church are open to it. Turn your prayers into invitations.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/blog/christmas-outreach-ideas-for-churches" className="button-primary">
                  Christmas outreach ideas <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/blog/how-to-pray-for-your-city" className="button-secondary">How to pray for your city</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
