import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import InviteCardBuilder from "@/components/InviteCardBuilder";
import { SITE } from "@/lib/content";

const URL = `${SITE.url}/resources/christmas-invitation`;

const TIPS = [
  ["Hand it over in person", "A card from a friend lands very differently from one in a mailbox. Say why you'd love them to come."],
  ["Offer to go together", "\"I'll pick you up\" or \"Sit with us\" removes the hardest part: walking in alone."],
  ["Invite early", "Two to three weeks ahead gives people time to plan around family and work."],
  ["Follow up kindly", "A quick message the day before helps — and if they can't come, keep the friendship anyway."],
] as const;

export const metadata: Metadata = {
  title: "Free Christmas Church Invitation Card Maker (Printable)",
  description:
    "Make a free, printable Christmas invitation for your church or carol service in a minute: add your details, preview it live, and print four cut-out cards per page. No sign-up.",
  keywords: [
    "christmas church invitation template",
    "printable christmas service invitation",
    "christmas eve service invite card",
    "church invite card free",
    "carol service invitation",
    "invite someone to church at christmas",
  ],
  alternates: { canonical: "/resources/christmas-invitation" },
  openGraph: {
    type: "website",
    url: URL,
    title: "Christmas Invitation Card Maker — Jesus Festival Movement",
    description: "Add your details, preview, print four invitation cards per page. Free, no sign-up.",
  },
};

const ld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": `${URL}#app`,
      name: "Christmas Invitation Card Maker",
      url: URL,
      applicationCategory: "DesignApplication",
      operatingSystem: "Any (web browser)",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
      description:
        "Create a printable Christmas invitation for a church service or carol event: enter your details, preview live and print four cards per page.",
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "HowTo",
      "@id": `${URL}#howto`,
      name: "How to make a printable Christmas church invitation",
      step: [
        { "@type": "HowToStep", position: 1, name: "Add your details", text: "Enter your church name, the event, the day and time, and where it is." },
        { "@type": "HowToStep", position: 2, name: "Check the preview", text: "The card updates as you type. Keep the welcome short and warm." },
        { "@type": "HowToStep", position: 3, name: "Print and cut", text: "Print on card stock — four invitations per page — and cut along the dashed lines." },
        { "@type": "HowToStep", position: 4, name: "Hand them out personally", text: "Give each card to someone by name, and offer to go with them." },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Resources", item: `${SITE.url}/resources` },
        { "@type": "ListItem", position: 3, name: "Christmas Invitation Card Maker", item: URL },
      ],
    },
  ],
};

export default function ChristmasInvitationPage() {
  return (
    <>
      <JsonLd data={ld} />
      <Nav />
      <main id="main" className="bg-[#050812]">
        <section className="no-print relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_76%_18%,rgba(244,196,92,.18),transparent_28%),radial-gradient(circle_at_10%_45%,rgba(233,95,50,.12),transparent_26%),#050812] pb-14 pt-36 sm:pb-16 sm:pt-44">
          <div className="star-field absolute inset-0" aria-hidden="true" />
          <div className="grain" />
          <div className="container-x relative z-10">
            <div className="mx-auto max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[.3em] text-gold">A free tool · Christmas</p>
              <h1 className="mt-5 font-display text-[clamp(2.8rem,7.5vw,6rem)] font-bold uppercase leading-[.88] tracking-[-.05em] text-white">
                Christmas invitation{" "}
                <span className="block text-gradient-gold">card maker.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/75">
                Christmas is one of the easiest times of year to invite a friend
                to church. Add your details, check the preview, and print four
                cards per page — free, with no sign-up.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad !pt-12">
          <div className="container-x">
            <div className="mx-auto max-w-6xl">
              <InviteCardBuilder />
            </div>

            <div className="no-print mx-auto mt-16 max-w-6xl">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Four tips for inviting well</h2>
              <ol className="mt-6 grid gap-4 md:grid-cols-2">
                {TIPS.map(([title, text], i) => (
                  <li key={title} className="spot flex gap-4 rounded-[1.6rem] border border-white/10 bg-white/[.035] p-6">
                    <strong className="font-display text-2xl font-bold text-gold">{String(i + 1).padStart(2, "0")}</strong>
                    <span>
                      <span className="block font-bold text-white">{title}</span>
                      <span className="mt-1 block leading-relaxed text-white/70">{text}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="no-print mx-auto mt-14 max-w-4xl ring-glow rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-8 text-center sm:p-12">
              <Icon name="spark" className="mx-auto h-9 w-9 text-gold" />
              <h2 className="mt-5 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">Pray, then invite.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                Pair your invitations with the Advent prayer guide — pray for the
                people you&apos;ll invite by name, every day, through December.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/resources/advent-prayer-guide" className="button-primary">
                  Advent prayer guide <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/blog/how-to-invite-someone-to-church-at-christmas" className="button-secondary">
                  How to invite someone at Christmas
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
