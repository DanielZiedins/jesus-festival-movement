import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/content";

/**
 * Every statement here describes what the code actually does — verified
 * against app/api/subscribe, app/api/contact, components/CityStarter and the
 * layout. If a data flow changes, this page must change with it.
 */
const UPDATED = "2026-10-02";
const UPDATED_LABEL = "2 October 2026";
const PAGE = `${SITE.url}/privacy`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Jesus Festival Movement collects when you join the email list or contact us, why, who processes it, and how to see, correct or delete it. No ad tracking, no cookies, nothing sold.",
  alternates: { canonical: "/privacy" },
  openGraph: { type: "article", url: PAGE, title: "Privacy Policy — Jesus Festival Movement" },
};

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
  {
    id: "summary",
    title: "The short version",
    body: (
      <ul>
        <li>We only collect what you choose to give us: your email (and optionally your name and city) when you join the list, and the details you type into the contact form.</li>
        <li>We use it to send the letters you asked for and to reply to you. Nothing else.</li>
        <li>We never sell, rent or trade your information, and we run no advertising trackers.</li>
        <li>This site sets <strong>no cookies</strong>.</li>
        <li>Every email has a one-click unsubscribe, and you can ask us to delete your information at any time.</li>
      </ul>
    ),
  },
  {
    id: "who",
    title: "Who we are",
    body: (
      <p>
        {SITE.name} is a Christ-centred movement based in Hamilton, Ontario, Canada, that helps local churches gather their cities around Jesus. You can reach us about anything on this page at{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
    ),
  },
  {
    id: "email-list",
    title: "When you join the email list",
    body: (
      <>
        <p>
          We store your <strong>email address</strong>, your <strong>first name</strong> and <strong>city</strong> if you give them, and <strong>which page you signed up on</strong> so we know which invitation worked.
        </p>
        <p>
          We use this only to send you the welcome letter and the short series of letters about the movement that follows it, plus occasional updates about festivals and ministry initiatives. By signing up you are giving us express consent to send these, and you can withdraw it whenever you like: every email carries an unsubscribe link that takes effect immediately, with nothing to log into.
        </p>
      </>
    ),
  },
  {
    id: "contact-form",
    title: "When you use the contact form",
    body: (
      <>
        <p>
          We store what you enter — your <strong>name</strong>, <strong>email</strong>, <strong>city or region</strong> and <strong>message</strong>, and your <strong>phone number</strong> and <strong>church or organization</strong> if you add them — so that our team can read it and reply.
        </p>
        <p>
          To stop spam and repeated submissions, we also record your browser&apos;s user-agent string and a <strong>one-way, salted hash</strong> of your IP address and browser. That hash lets us notice the same sender submitting again within a minute; it cannot be turned back into your IP address, and <strong>we do not store your IP address itself</strong>.
        </p>
      </>
    ),
  },
  {
    id: "on-device",
    title: "What stays on your own device",
    body: (
      <p>
        The &ldquo;city starter&rdquo; checklist remembers which steps you have ticked using your browser&apos;s local storage. That information never leaves your device and is not sent to us. Clearing your browser data removes it.
      </p>
    ),
  },
  {
    id: "measurement",
    title: "How we measure the site",
    body: (
      <p>
        We use Vercel&apos;s privacy-focused measurement tools to understand how fast pages load for real visitors and, where enabled, which pages and buttons are used. They work without cookies, do not build a profile of you, and do not follow you to other websites. We do not use Google Analytics, Facebook pixels or any advertising network.
      </p>
    ),
  },
  {
    id: "processors",
    title: "Who helps us run this",
    body: (
      <>
        <p>We do not sell or share your information with anyone for their own purposes. A small number of service providers process it on our behalf, only to provide their service to us:</p>
        <ul>
          <li><strong>Vercel</strong> — hosts the website and provides the measurement described above.</li>
          <li><strong>Supabase</strong> — stores email-list and contact-form records in a database.</li>
          <li><strong>Resend</strong> — delivers our emails.</li>
        </ul>
        <p>Images on this site are fetched and served from our own domain, so viewing them does not connect your browser to the photo provider.</p>
      </>
    ),
  },
  {
    id: "elsewhere",
    title: "Links to other sites, and giving",
    body: (
      <p>
        This site links to our shop, partner ministries and the wider network. Once you leave this site, the other site&apos;s own privacy policy applies. In particular, any gift made through our partnership page is processed entirely on e3 Canada&apos;s own secure giving page — we never see or store payment details here.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Seeing, correcting or deleting your information",
    body: (
      <>
        <p>
          You can ask us at any time what information we hold about you, to correct it, or to delete it. Email{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a> from the address in question and we will respond as promptly as we can. You can also unsubscribe from emails yourself at any time using the link in any letter.
        </p>
        <p>We keep your email-list details until you unsubscribe or ask us to remove them, and contact-form messages for as long as we need them to respond and follow up with you.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        This site is written for adults, and our email list and contact form are not intended for children under 13. If you believe a child has sent us their information, let us know and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        If the way we handle information changes, we will update this page and the date at the top of it.
      </p>
    ),
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE}#webpage`,
      url: PAGE,
      name: "Privacy Policy",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#organization` },
      dateModified: UPDATED,
      inLanguage: "en-CA",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: PAGE },
      ],
    },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main id="main" className="bg-[#050812]">
        <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#16284a_0%,#070b16_55%,#050812_100%)]" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[.28em] text-gold">Privacy</p>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
                Your information, <span className="text-gradient-gold">handled with care.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                What we collect, why we collect it, and how to see, correct or delete it — in plain words.
              </p>
              <p className="mt-6 text-sm text-white/55">
                Last updated <time dateTime={UPDATED}>{UPDATED_LABEL}</time>
              </p>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-x">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[14rem_1fr]">
              {/* On this page — long policies need a map, and this one will grow. */}
              <nav aria-label="On this page" className="hidden lg:block">
                <div className="sticky top-28">
                  <p className="text-xs font-bold uppercase tracking-[.22em] text-white/55">On this page</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {SECTIONS.map((s) => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="text-white/65 transition hover:text-gold">
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              <div className="policy-prose max-w-3xl space-y-12">
                {SECTIONS.map((s) => (
                  <section key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{s.title}</h2>
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-white/72 sm:text-lg">{s.body}</div>
                  </section>
                ))}

                <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
                  <p className="text-white/72">
                    Questions about any of this? Email{" "}
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, or go{" "}
                    <Link href="/">back to the movement</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
