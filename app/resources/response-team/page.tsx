import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import PrintButton from "@/components/PrintButton";
import { SITE } from "@/lib/content";

/**
 * A one-page card for the people waiting at the front when the invitation is
 * given. The long-form reasoning lives in the altar call guide; this is the
 * thing you hand out at the training night and carry on the day.
 */
const GUIDE = "/blog/how-to-give-an-altar-call-at-an-outdoor-event";

const BEFORE = [
  "Recruited through a partner church whose pastor vouches for you",
  "At the team training, and you know who your safeguarding lead and first-aider are",
  "Wearing your lanyard or team shirt, with a partner you will stay with",
  "Carrying Bibles or Gospels of John, connect cards and a pen",
  "Prayed up — for the people who will come forward, by name, though you don't know them yet",
] as const;

const STEPS = [
  ["Welcome them", "Smile, introduce yourself and your partner, and thank them for coming. Courage brought them here."],
  ["Listen first", "Ask their name and why they came forward. First time giving their life to Jesus? Coming back to Him? Prayer for healing? Asking about baptism?"],
  ["Explain simply", "In a sentence or two: Jesus died for our sins and rose again, and He forgives and gives new life to everyone who turns from sin and trusts Him as Lord. Check they understand."],
  ["Pray together", "Invite them to pray in their own words, or to repeat a short prayer after you if they'd like. Pray with them, not at them."],
  ["Give a first step", "A Bible or Gospel of John, and one simple habit: read a chapter a day, starting with John."],
  ["Offer the connect card", "Explain it's so a local church can help with next steps. Make it clearly optional, and fill it in with them."],
  ["Hand over well", "Walk them to the next thing — the baptism tent, a pastor, their friends — rather than leaving them standing alone."],
] as const;

const PRAYER =
  "Jesus, I believe You are the Son of God, that You died for my sins and rose again. I turn from my sin and trust You as my Lord. Thank You for forgiving me and making me new. Help me follow You. Amen.";

const SAFEGUARDING = [
  "Always in pairs — never alone with anyone",
  "Never take a child aside; talk with them with their parent or guardian present",
  "Ask before laying a hand on anyone, and keep it to a shoulder or hand",
  "Where you can, men pray with men and women with women",
  "If anyone is in distress or crisis, bring in the first-aider or pastoral lead straight away",
] as const;

const HEALING_DO = [
  "Pray boldly and simply, in Jesus' name",
  "Ask how they are and pray again if they want",
  "Encourage them to have any healing confirmed by their doctor",
] as const;
const HEALING_DONT = [
  "Promise an outcome God hasn't promised",
  "Tell anyone to stop medication or medical care",
  "Pressure anyone to say they feel better",
] as const;

const CARD = [
  "Name and a way to contact them (with consent)",
  "Their area or neighbourhood",
  "What they responded for",
  "Any church they already attend",
  "Cards go to one named person, not a loose pile; entered securely that night",
  "Shared only with the church that will follow up — within 48 hours",
] as const;

export const metadata: Metadata = {
  title: "Altar Call Response Team Training Card (Printable)",
  description:
    "A free, printable one-page training card for altar call and prayer response teams at outreach events: what to do when someone comes forward, a simple prayer, safeguarding, praying for healing with care, and connect-card consent.",
  keywords: [
    "altar call response team training",
    "prayer ministry team guidelines",
    "altar worker training",
    "what to say when someone comes forward",
    "salvation prayer card",
  ],
  alternates: { canonical: "/resources/response-team" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/resources/response-team`,
    title: "Response Team Training Card — Jesus Festival Movement",
    description: "Everything your altar team needs on one printable page.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      "@id": `${SITE.url}/resources/response-team#howto`,
      name: "How to care for someone who responds to an altar call",
      description: "The seven steps a response team member follows when someone comes forward at an outreach event.",
      step: STEPS.map(([name, text], i) => ({ "@type": "HowToStep", position: i + 1, name, text })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Response Team Training Card", item: `${SITE.url}/resources/response-team` },
      ],
    },
  ],
};

function Check({ children }: { children: string }) {
  return (
    <li className="flex gap-3 leading-relaxed text-white/75">
      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded border border-gold/50" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}

export default function ResponseTeamPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Nav />
      <main id="main" className="print-compact bg-[#050812]">
        <section className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_76%_18%,rgba(244,196,92,.18),transparent_28%),radial-gradient(circle_at_10%_45%,rgba(233,95,50,.12),transparent_26%),#050812] pb-16 pt-36 sm:pb-20 sm:pt-44 print:pb-2 print:pt-0">
          <div className="star-field absolute inset-0" aria-hidden="true" />
          <div className="grain" />
          <div className="container-x relative z-10">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[.3em] text-gold">A printable team resource</p>
              <h1 className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold uppercase leading-[.85] tracking-[-.06em] text-white">
                Response team <span className="block text-gradient-gold">training card.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">
                For the people waiting at the front when the invitation is given. Print it for your training night, and carry it on the day.
              </p>
              <div className="no-print mt-8 flex flex-col gap-3 sm:flex-row">
                <PrintButton label="Print the card" />
                <Link href={GUIDE} className="button-secondary">
                  Read the full altar call guide <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad !pt-14">
          <div className="container-x">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 print:block print:space-y-3">
              <div className="print-block rounded-[1.8rem] border border-white/10 bg-white/[.035] p-7 sm:p-8">
                <h2 className="font-display text-2xl font-bold uppercase tracking-[-.03em] text-white">Before you serve</h2>
                <ul className="mt-5 space-y-3">{BEFORE.map((t) => <Check key={t}>{t}</Check>)}</ul>
              </div>
              <div className="print-block rounded-[1.8rem] border border-gold/25 bg-gradient-to-br from-gold/[.08] to-ember/[.05] p-7 sm:p-8">
                <h2 className="font-display text-2xl font-bold uppercase tracking-[-.03em] text-white">A simple prayer</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  Only if they would like to. Their own words are just as good.
                </p>
                <blockquote className="mt-4 border-l-2 border-gold/60 pl-4 font-display text-lg leading-snug text-white">
                  {PRAYER}
                </blockquote>
                <p className="mt-5 text-sm text-white/65">
                  &ldquo;Whoever comes to me I will never cast out.&rdquo; <span className="text-gold-400">John 6:37</span>
                </p>
              </div>

              <div className="print-block rounded-[1.8rem] border border-white/10 bg-white/[.035] p-7 sm:p-8 lg:col-span-2">
                <h2 className="font-display text-2xl font-bold uppercase tracking-[-.03em] text-white">When someone comes forward</h2>
                <ol className="mt-6 grid gap-x-8 gap-y-5 md:grid-cols-2">
                  {STEPS.map(([title, text], i) => (
                    <li key={title} className="flex gap-4">
                      <strong className="font-display text-xl font-bold text-gold">{String(i + 1).padStart(2, "0")}</strong>
                      <span>
                        <span className="block font-bold text-white">{title}</span>
                        <span className="mt-1 block leading-relaxed text-white/70">{text}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="print-block rounded-[1.8rem] border border-white/10 bg-white/[.035] p-7 sm:p-8">
                <h2 className="font-display text-2xl font-bold uppercase tracking-[-.03em] text-white">Safeguarding</h2>
                <ul className="mt-5 space-y-3">{SAFEGUARDING.map((t) => <Check key={t}>{t}</Check>)}</ul>
              </div>
              <div className="print-block rounded-[1.8rem] border border-white/10 bg-white/[.035] p-7 sm:p-8">
                <h2 className="font-display text-2xl font-bold uppercase tracking-[-.03em] text-white">Praying for healing</h2>
                <p className="mt-5 text-xs font-bold uppercase tracking-[.2em] text-gold-400">Do</p>
                <ul className="mt-3 space-y-2">{HEALING_DO.map((t) => <Check key={t}>{t}</Check>)}</ul>
                <p className="mt-5 text-xs font-bold uppercase tracking-[.2em] text-ember-400">Never</p>
                <ul className="mt-3 space-y-2">{HEALING_DONT.map((t) => <Check key={t}>{t}</Check>)}</ul>
              </div>

              <div className="print-block rounded-[1.8rem] border border-white/10 bg-white/[.035] p-7 sm:p-8 lg:col-span-2">
                <h2 className="font-display text-2xl font-bold uppercase tracking-[-.03em] text-white">Connect cards</h2>
                <ul className="mt-5 grid gap-3 md:grid-cols-2">{CARD.map((t) => <Check key={t}>{t}</Check>)}</ul>
              </div>
            </div>

            <div className="no-print mx-auto mt-14 max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-8 text-center sm:p-12">
              <Icon name="spark" className="mx-auto h-9 w-9 text-gold" />
              <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">Train the team together.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                The full guide covers preaching for a response, giving the invitation without pressure, and the first 48 hours after. Pair it with{" "}
                <Link href="/blog/how-to-follow-up-with-a-new-believer" className="font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold">
                  following up with a new believer
                </Link>{" "}
                and{" "}
                <Link href="/blog/how-to-plan-baptisms-at-an-outdoor-festival" className="font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold">
                  planning baptisms
                </Link>
                .
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href={GUIDE} className="button-primary">
                  The altar call guide <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/start-a-jesus-festival/playbook" className="button-secondary">The festival playbook</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
