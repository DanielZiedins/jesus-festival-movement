import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import Share from "@/components/Share";
import JoinForm from "@/components/JoinForm";
import { EVENT_BY_SLUG } from "@/lib/events";
import { SITE } from "@/lib/content";

const EV = EVENT_BY_SLUG.get("akuse")!;
const PAGE_URL = `${SITE.url}/akuse`;

export const metadata: Metadata = {
  title: "Jesus Festival Akuse — 3–4 September 2026 | Jesus Christ Is Lord",
  description:
    "The Jesus Festival comes to Akuse, Ghana on 3–4 September 2026 with Rev. Ezekiel Ashiley. Akuse Taxi Station, 9AM and 6PM each day. Free, open to all, and streaming live.",
  keywords: [
    "Jesus Festival Akuse",
    "Jesus Festival Ghana",
    "Christian event Akuse",
    "Rev Ezekiel Ashiley",
    "Gospel festival Ghana 2026",
    "Akuse Taxi Station event",
    "Eastern Region Ghana crusade",
    "Jesus Christ is Lord festival",
  ],
  alternates: { canonical: "/akuse" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Jesus Festival Akuse — 3–4 September 2026",
    description:
      "Two days of worship, the Word and prayer at Akuse Taxi Station with Rev. Ezekiel Ashiley. All are welcome.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jesus Festival Akuse — 3–4 September 2026",
    description:
      "Akuse Taxi Station, Ghana. 9AM & 6PM each day. Jesus Christ is Lord!",
  },
};

/** One Event node per day — how Google expects multi-day recurring sessions. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ...EV.days.map((d) => ({
      "@type": "Event",
      "@id": `${PAGE_URL}#${d.date}`,
      name: `${EV.name} — ${d.label}`,
      description: `${EV.theme}. Worship, the Word, prayer and fellowship with ${EV.speaker.name} at ${EV.venue}, ${EV.city}, ${EV.country}. Morning 9:00 AM and evening 6:00 PM.`,
      startDate: `${d.date}T09:00:00+00:00`,
      endDate: `${d.date}T20:00:00+00:00`,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode:
        "https://schema.org/MixedEventAttendanceMode",
      isAccessibleForFree: true,
      inLanguage: "en",
      location: [
        {
          "@type": "Place",
          name: EV.venue,
          address: {
            "@type": "PostalAddress",
            streetAddress: EV.venue,
            addressLocality: EV.city,
            addressRegion: EV.region,
            addressCountry: EV.countryCode,
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: EV.lat,
            longitude: EV.lng,
          },
        },
        {
          "@type": "VirtualLocation",
          name: EV.streaming.label,
          url: PAGE_URL,
        },
      ],
      performer: { "@type": "Person", name: EV.speaker.name },
      organizer: { "@id": `${SITE.url}/#organization` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "GHS",
        availability: "https://schema.org/InStock",
        url: PAGE_URL,
        validFrom: "2026-01-01",
      },
      url: PAGE_URL,
    })),
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Jesus Festival Akuse",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function AkusePage() {
  const mapQuery = encodeURIComponent(
    `${EV.venue}, ${EV.city}, ${EV.country}`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,#2a1a08_0%,#0d0a1f_45%,#05060f_100%)]" />
          <div className="aurora opacity-80" />
          <div className="grain" />

          <div className="container-x relative">
            <div className="mx-auto max-w-4xl text-center">
              <div className="hero-in inline-flex items-center gap-2.5 rounded-full glass px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-ember" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
                </span>
                Upcoming Festival · {EV.flag} {EV.country}
              </div>

              <h1
                className="hero-in mt-7 text-balance font-display text-5xl font-bold leading-[0.98] sm:text-7xl lg:text-8xl"
                style={{ "--reveal-d": "0.06s" } as React.CSSProperties}
              >
                Jesus Festival
                <span className="mt-1 block text-gradient-gold">
                  {EV.city}
                </span>
              </h1>

              <p
                className="hero-in mx-auto mt-7 max-w-2xl text-balance font-display text-xl font-medium text-white sm:text-2xl"
                style={{ "--reveal-d": "0.12s" } as React.CSSProperties}
              >
                &ldquo;{EV.theme}&rdquo;
              </p>
              <p
                className="hero-in mt-2 text-sm font-bold uppercase tracking-[0.25em] text-gold-400"
                style={{ "--reveal-d": "0.16s" } as React.CSSProperties}
              >
                {EV.scripture.ref}
              </p>

              {/* Key facts */}
              <div
                className="hero-in mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3"
                style={{ "--reveal-d": "0.2s" } as React.CSSProperties}
              >
                {[
                  { k: "When", v: EV.dateLabel },
                  { k: "Where", v: `${EV.venue}, ${EV.city}` },
                  { k: "Each day", v: "9:00 AM & 6:00 PM" },
                ].map((f) => (
                  <div
                    key={f.k}
                    className="rounded-2xl glass-strong px-5 py-4 text-center"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">
                      {f.k}
                    </p>
                    <p className="mt-1.5 font-display font-bold leading-snug text-white">
                      {f.v}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="hero-in mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
                style={{ "--reveal-d": "0.26s" } as React.CSSProperties}
              >
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-base font-bold text-ink shadow-glow-ember transition-transform hover:scale-105 sm:w-auto"
                >
                  Get Directions
                </a>
                <a
                  href="#watch"
                  className="w-full rounded-full glass px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold/40 hover:text-gold sm:w-auto"
                >
                  Watch Live Online
                </a>
              </div>

              <p
                className="hero-in mt-7 text-sm text-white/55"
                style={{ "--reveal-d": "0.3s" } as React.CSSProperties}
              >
                Free entry · Everyone welcome · With{" "}
                <span className="font-semibold text-white">
                  {EV.speaker.name}
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="section-pad !py-14 border-y border-white/5 bg-navy-950/40">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <Eyebrow>The Schedule</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                  Two days.{" "}
                  <span className="text-gradient-gold">Four gatherings.</span>
                </h2>
              </Reveal>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">
                {EV.days.map((d, i) => (
                  <Reveal key={d.date} delay={0.08 + i * 0.06}>
                    <div className="h-full rounded-2xl glass p-7">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                        Day {i + 1}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white">
                        {d.label}
                      </h3>
                      <ul className="mt-6 space-y-3">
                        {EV.sessions.map((s) => (
                          <li
                            key={s.label}
                            className="flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3"
                          >
                            <span className="font-medium text-white/80">
                              {s.label}
                            </span>
                            <span className="font-display text-lg font-bold text-gold">
                              {s.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.2}>
                <p className="mt-7 text-center text-white/60">
                  Come for one session or stay for all four — you&apos;re
                  welcome at any point.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="section-pad !py-14">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <Eyebrow>What To Expect</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                  Jesus at the centre of{" "}
                  <span className="text-gradient-gold">everything.</span>
                </h2>
              </Reveal>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: "music",
                    t: "Worship",
                    d: "Voices lifted together, out in the open, over the town of Akuse.",
                  },
                  {
                    icon: "fire",
                    t: "The Word",
                    d: `Clear, unhurried preaching of the Gospel with ${EV.speaker.name}.`,
                  },
                  {
                    icon: "pray",
                    t: "Prayer",
                    d: "Time to be prayed for personally — for healing, for family, for whatever you're carrying.",
                  },
                  {
                    icon: "hands",
                    t: "Fellowship",
                    d: "The Church of the town gathered in one place, and room for anyone who has never belonged to one.",
                  },
                ].map((x, i) => (
                  <Reveal key={x.t} delay={0.08 + i * 0.05}>
                    <div className="flex h-full gap-4 rounded-2xl glass p-6">
                      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-gold-500/20 to-ember-500/20 text-gold">
                        <Icon name={x.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          {x.t}
                        </h3>
                        <p className="mt-1.5 leading-relaxed text-white/65">
                          {x.d}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.3}>
                <figure className="mt-9 rounded-2xl border border-gold/25 bg-gold/[0.06] p-7 text-center">
                  <blockquote className="font-display text-xl leading-snug text-white sm:text-2xl">
                    &ldquo;{EV.scripture.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                    {EV.scripture.ref}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section-pad !py-14 border-y border-white/5 bg-navy-950/40">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <Eyebrow>Getting There</Eyebrow>
              </Reveal>
              <div className="mt-7 grid items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
                <Reveal delay={0.05}>
                  <div className="rounded-2xl glass-strong p-7">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 text-2xl" aria-hidden="true">
                        📍
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-white">
                          {EV.venue}
                        </h3>
                        <p className="mt-1 text-white/65">
                          {EV.city}, {EV.region}, {EV.country} {EV.flag}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 leading-relaxed text-white/65">
                      An open-air gathering right at the taxi station — easy to
                      reach by trotro or taxi, and impossible to miss once
                      you&apos;re in town.
                    </p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-6 py-3 text-sm font-bold text-ink transition-transform hover:scale-105"
                    >
                      Open in Google Maps
                      <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="rounded-2xl glass p-7">
                    <h3 className="font-display text-lg font-bold text-white">
                      Bring someone with you
                    </h3>
                    <p className="mt-2 leading-relaxed text-white/65">
                      Most people who meet Jesus do so because somebody they
                      already knew invited them. Invite your family, your
                      neighbours, your workmates.
                    </p>
                    <div className="mt-6">
                      <Share
                        title="Share this festival"
                        url={PAGE_URL}
                        text={`Jesus Festival Akuse — ${EV.dateLabel} at ${EV.venue}. Jesus Christ is Lord!`}
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Watch live */}
        <section id="watch" className="section-pad !py-14 scroll-mt-24">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <Reveal>
                <Eyebrow>Can&apos;t Be There?</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                  Watch it{" "}
                  <span className="text-gradient-gold">live.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-4 max-w-2xl text-lg text-white/70">
                  Every session streams on{" "}
                  <span className="font-semibold text-white">
                    {EV.streaming.label}
                  </span>{" "}
                  — search for it on {EV.streaming.platforms.join(" or ")} when
                  the festival begins.
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-8 rounded-2xl glass-strong p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
                    Morning session starts at
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {EV.worldTimes.map((w) => (
                      <div
                        key={w.place}
                        className="rounded-xl bg-white/[0.04] px-4 py-3 text-center"
                      >
                        <div className="text-xl" aria-hidden="true">
                          {w.flag}
                        </div>
                        <p className="mt-1 font-display font-bold text-white">
                          {w.time}
                        </p>
                        <p className="text-[11px] uppercase tracking-wide text-white/50">
                          {w.place}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm text-white/55">
                    Evening sessions begin at 6:00 PM Ghana time (GMT). Times
                    shown as published — please double-check your own local
                    conversion.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section-pad !py-14 border-y border-white/5 bg-navy-950/40">
          <div className="container-x">
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  Partnership · Enquiries ·{" "}
                  <span className="text-gradient-gold">Prayer</span>
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
                  Want to partner, serve, ask a question, or have someone pray
                  with you? The team is reachable directly.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  {EV.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="w-full rounded-2xl glass px-7 py-5 font-display text-xl font-bold text-white transition-colors hover:border-gold/40 hover:text-gold sm:w-auto"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="section-pad relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(255,107,53,0.2),transparent_55%)]" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <h2 className="text-balance font-display text-4xl font-bold leading-[1.05] sm:text-5xl">
                  All Are{" "}
                  <span className="text-gradient-gold">Welcome.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
                  You don&apos;t need to believe anything to come. You
                  don&apos;t need to dress a certain way or know anyone there.
                  Just come.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 font-display text-2xl font-bold text-gradient-gold sm:text-3xl">
                  Jesus Christ is Lord!
                </p>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="mt-12 rounded-3xl border border-gold/20 bg-gradient-to-br from-navy-900/80 to-ink p-8 text-left sm:p-10">
                  <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
                    <div>
                      <p className="font-display text-2xl font-bold leading-tight text-white">
                        Never been to one?
                      </p>
                      <p className="mt-3 max-w-md leading-relaxed text-white/65">
                        Read{" "}
                        <a
                          href="/blog/what-actually-happens-at-a-jesus-festival"
                          className="font-semibold text-gold hover:underline"
                        >
                          what actually happens at a Jesus Festival
                        </a>
                        , or join the movement and we&apos;ll keep you posted on
                        what God is doing.
                      </p>
                    </div>
                    <JoinForm
                      source="akuse"
                      variant="inline"
                      cta="Join Free"
                    />
                  </div>
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
