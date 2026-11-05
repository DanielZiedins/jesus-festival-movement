import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/content";

/** Every free tool on the site, in one place. Add new printables here. */
type Resource = { title: string; text: string; href: string; download?: boolean };
const RESOURCES: { group: string; items: Resource[] }[] = [
  {
    group: "Printables",
    items: [
      { title: "Advent prayer guide for your city", text: "Four printable weeks of Hope, Peace, Joy and Love — Scripture, prayers for your city and one action each week.", href: "/resources/advent-prayer-guide" },
      { title: "Response team training card", text: "What your altar call and prayer team does when someone comes forward, on two printable pages.", href: "/resources/response-team" },
      { title: "Prayer walk guide", text: "A short, practical way to pray for your city one street at a time.", href: "/resources/prayer-walk" },
      { title: "Starter guide (PDF)", text: "The basics of how to start a Jesus Festival — a free 10-page guide to download and share with your team.", href: "/resources/basics-how-to-start-a-jesus-festival.pdf", download: true },
    ],
  },
  {
    group: "Planning",
    items: [
      { title: "The 13-step festival playbook", text: "Timelines, checklists and the mistake most teams make at every stage.", href: "/start-a-jesus-festival/playbook" },
      { title: "Start a Jesus Festival", text: "The prayerful, practical front door — plus every free tool for your team.", href: "/start-a-jesus-festival" },
      { title: "Plan an outdoor worship night", text: "A simpler first step toward a festival.", href: "/blog/how-to-plan-an-outdoor-worship-night" },
    ],
  },
  {
    group: "Reference",
    items: [
      { title: "Answers", text: "Straight answers on festivals, evangelism and faith.", href: "/answers" },
      { title: "Glossary", text: "Evangelism and festival terms, defined plainly.", href: "/glossary" },
      { title: "Search everything", text: "Every guide, answer, definition and page.", href: "/search" },
    ],
  },
  {
    group: "For someone exploring faith",
    items: [
      { title: "Know Jesus", text: "The good news explained simply, honest answers to common doubts, and a prayer anyone can pray.", href: "/know-jesus" },
      { title: "Your first 30 days as a Christian", text: "A warm, simple guide for new believers.", href: "/blog/i-just-became-a-christian-what-now" },
      { title: "How to read the Bible for the first time", text: "Where to start, and a simple 30-day plan.", href: "/blog/how-to-read-the-bible-for-the-first-time" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Free Resources — Printables, Guides & Tools For Evangelism",
  description:
    "Free printable resources and tools for churches and believers: an Advent prayer guide, a response team training card, a prayer walk guide, a festival starter PDF, the 13-step playbook, and more.",
  keywords: [
    "free evangelism resources",
    "printable prayer guide",
    "church outreach resources",
    "free christian printables",
    "evangelism training resources",
  ],
  alternates: { canonical: "/resources" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/resources`,
    title: "Free Resources — Jesus Festival Movement",
    description: "Printables, guides and tools for reaching your city — all free.",
  },
};

export default function ResourcesPage() {
  const url = `${SITE.url}/resources`;
  const all = RESOURCES.flatMap((g) => g.items);
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: "Free resources",
        url,
        isPartOf: { "@id": `${SITE.url}/#website` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: all.map((r, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: r.title,
            url: `${SITE.url}${r.href}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Resources", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={ld} />
      <Nav />
      <main id="main">
        <section className="relative overflow-hidden pb-6 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)]" />
          <div className="aurora opacity-60" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>Free resources</Eyebrow>
              <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                Everything We&apos;ve Learned,{" "}
                <span className="text-gradient-gold">Free.</span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                Printables, guides and tools for praying for your city, sharing
                the Gospel and starting something in your own community. Use
                them, print them, share them.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad !pt-10">
          <div className="container-x">
            <div className="mx-auto max-w-5xl space-y-12">
              {RESOURCES.map((g) => (
                <div key={g.group}>
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{g.group}</h2>
                  <ul className="mt-5 grid gap-4 md:grid-cols-2">
                    {g.items.map((r) => (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          {...(r.download ? { download: true } : {})}
                          className="group flex h-full flex-col rounded-[1.6rem] border border-white/10 bg-white/[.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[.055]"
                        >
                          <span className="font-display text-xl font-bold leading-snug text-white">{r.title}</span>
                          <span className="mt-2 flex-1 leading-relaxed text-white/70">{r.text}</span>
                          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                            {r.download ? "Download" : "Open it"}
                            <Icon name={r.download ? "download" : "arrow"} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
