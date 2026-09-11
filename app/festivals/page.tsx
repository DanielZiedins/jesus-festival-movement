import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import JoinForm from "@/components/JoinForm";
import { EVENTS, eventPhase, type FestivalEvent } from "@/lib/events";
import { SITE } from "@/lib/content";

const PAGE_URL = `${SITE.url}/festivals`;

// Re-render daily so a festival moves from "upcoming" to "held" on its own.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Jesus Festivals — Where They Are, And How To Bring One To Your City",
  description:
    "Every Jesus Festival in one place: where the next gatherings are happening, the festivals already held, and how to start one in your own city. Free, open to all, and streamed live.",
  keywords: [
    "Jesus Festival locations",
    "upcoming Christian festivals",
    "gospel festival near me",
    "where is the next Jesus Festival",
    "Christian outdoor events 2026",
    "Jesus Festival Ghana",
    "evangelistic festival schedule",
  ],
  alternates: { canonical: "/festivals" },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Jesus Festivals — Where They Are",
    description:
      "Where the next Jesus Festivals are happening, the ones already held, and how to bring one to your city.",
  },
};

function eventNode(e: FestivalEvent) {
  return {
    "@type": "Event",
    "@id": `${SITE.url}/${e.slug}#event`,
    name: e.name,
    url: `${SITE.url}/${e.slug}`,
    description: `${e.theme}. Worship, the Word and prayer at ${e.venue}, ${e.city}, ${e.country}, with ${e.speaker.name}. Free and open to all.`,
    startDate: `${e.startDate}T09:00:00+00:00`,
    endDate: `${e.endDate}T20:00:00+00:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    isAccessibleForFree: true,
    location: [
      {
        "@type": "Place",
        name: e.venue,
        address: {
          "@type": "PostalAddress",
          addressLocality: e.city,
          addressRegion: e.region,
          addressCountry: e.countryCode,
        },
        geo: { "@type": "GeoCoordinates", latitude: e.lat, longitude: e.lng },
      },
      {
        "@type": "VirtualLocation",
        url: `${SITE.url}/${e.slug}#watch`,
        name: e.streaming.label,
      },
    ],
    performer: { "@type": "Person", name: e.speaker.name },
    organizer: { "@id": `${SITE.url}/#organization` },
  };
}

/** One card per festival — the same shape whether it is ahead of us or behind. */
function FestivalCard({ e, held }: { e: FestivalEvent; held: boolean }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border p-7 transition-all duration-300 sm:p-9 ${
        held
          ? "border-white/10 bg-white/[.025] hover:border-white/20"
          : "border-gold/25 bg-gradient-to-br from-gold/[.08] via-white/[.035] to-ember/[.07] hover:-translate-y-1 hover:border-gold/45"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-2xl" aria-hidden="true">
          {e.flag}
        </span>
        <span
          className={`rounded-full border px-3 py-1.5 text-[.62rem] font-bold uppercase tracking-[.18em] ${
            held
              ? "border-white/15 text-white/60"
              : "border-gold/40 bg-gold/10 text-gold"
          }`}
        >
          {held ? "Held" : "Upcoming"}
        </span>
      </div>

      <h3 className="mt-6 font-display text-3xl font-bold uppercase leading-none text-white sm:text-4xl">
        {e.city}
      </h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[.16em] text-gold-400">
        {e.region}, {e.country}
      </p>

      <dl className="mt-7 space-y-3 text-sm">
        <div className="flex gap-3">
          <dt className="w-24 flex-none font-semibold uppercase tracking-[.12em] text-white/45">
            Dates
          </dt>
          <dd className="text-white/80">{e.dateLabel}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-24 flex-none font-semibold uppercase tracking-[.12em] text-white/45">
            Venue
          </dt>
          <dd className="text-white/80">{e.venue}</dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-24 flex-none font-semibold uppercase tracking-[.12em] text-white/45">
            Sessions
          </dt>
          <dd className="text-white/80">
            {e.sessions.map((s) => s.time).join(" and ")} each day
          </dd>
        </div>
        <div className="flex gap-3">
          <dt className="w-24 flex-none font-semibold uppercase tracking-[.12em] text-white/45">
            Speaker
          </dt>
          <dd className="text-white/80">{e.speaker.name}</dd>
        </div>
      </dl>

      <p className="mt-6 border-l-2 border-gold/40 pl-4 text-base italic leading-relaxed text-white/70">
        &ldquo;{e.theme}&rdquo;
        <span className="mt-1 block text-xs not-italic uppercase tracking-[.16em] text-white/45">
          {e.scripture.ref}
        </span>
      </p>

      <Link
        href={`/${e.slug}`}
        className={`mt-8 inline-flex items-center gap-2 self-start font-bold transition ${
          held ? "text-white/80 hover:text-gold" : "text-gold hover:text-gold-400"
        }`}
      >
        {held ? "See the festival page" : "Full details, times & live stream"}
        <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </article>
  );
}

export default function FestivalsPage() {
  const upcoming = EVENTS.filter((e) => eventPhase(e) !== "ended").sort((a, b) =>
    a.startDate.localeCompare(b.startDate),
  );
  const held = EVENTS.filter((e) => eventPhase(e) === "ended").sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Jesus Festivals",
        description:
          "Every Jesus Festival: upcoming gatherings, festivals already held, and how to bring one to your city.",
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en-CA",
      },
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#list`,
        name: "Jesus Festivals",
        numberOfItems: EVENTS.length,
        itemListElement: [...upcoming, ...held].map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: eventNode(e),
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Festivals", item: PAGE_URL },
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
      <ScrollProgress />
      <Nav />

      <main id="main">
        <section className="relative overflow-hidden pb-8 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)]" />
          <div className="aurora opacity-60" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal immediate>
                <Eyebrow>The Festivals</Eyebrow>
              </Reveal>
              <Reveal immediate delay={0.05}>
                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                  Cities Lifting Up{" "}
                  <span className="text-gradient-gold">One Name.</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                  Every Jesus Festival is free, open to everyone, and put on by
                  local believers in their own city.{" "}
                  <strong className="text-white">
                    Here is where they have happened, and where they are heading
                    next.
                  </strong>
                </p>
              </Reveal>
              <Reveal immediate delay={0.15}>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/start-a-jesus-festival" className="button-primary">
                    Bring one to your city <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <Link href="/answers#what-is-a-jesus-festival" className="button-secondary">
                    What actually happens?
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* TL;DR — the direct answer, for people and for AI engines. */}
        <section className="section-pad !py-10">
          <div className="container-x">
            <Reveal>
              <div className="mx-auto max-w-3xl rounded-2xl border border-gold/20 bg-gold/[.05] p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[.22em] text-gold">
                  In short
                </p>
                <p className="mt-3 text-lg leading-relaxed text-white/80">
                  {upcoming.length > 0 ? (
                    <>
                      The next Jesus Festival is in{" "}
                      <strong className="text-white">
                        {upcoming[0].city}, {upcoming[0].country}
                      </strong>{" "}
                      on{" "}
                      <strong className="text-white">{upcoming[0].dateLabel}</strong>{" "}
                      at {upcoming[0].venue}. It is free, open to all, and streamed
                      live. Festivals have also been held in Hamilton and Niagara,
                      Ontario
                      {held.length > 0
                        ? `, and in ${held.map((e) => e.city).join(", ")}`
                        : ""}
                      . Any city can host one — the movement exists to help local
                      believers do exactly that.
                    </>
                  ) : (
                    <>
                      No festival dates are confirmed right now. Festivals have been
                      held in Hamilton and Niagara, Ontario
                      {held.length > 0
                        ? `, and in ${held
                            .map((e) => `${e.city}, ${e.country}`)
                            .join("; ")}`
                        : ""}
                      . Every one of them started with a handful of local believers
                      praying — which means the next one could be in your city.{" "}
                      <Link href="/start-a-jesus-festival" className="font-semibold text-gold underline underline-offset-4">
                        Here is how to begin.
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {upcoming.length > 0 && (
          <section className="section-pad !py-14">
            <div className="container-x">
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/10 pb-5">
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    Coming up
                  </h2>
                  <p className="text-white/55">
                    Free entry · Everyone welcome · Streamed live
                  </p>
                </div>
              </Reveal>
              <div
                className={`mt-8 grid gap-6 ${
                  upcoming.length === 1 ? "mx-auto max-w-2xl" : "lg:grid-cols-2"
                }`}
              >
                {upcoming.map((e, i) => (
                  <Reveal key={e.slug} delay={i * 0.06}>
                    <FestivalCard e={e} held={false} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {held.length > 0 && (
          <section className="section-pad !py-14 border-y border-white/5 bg-navy-950/40">
            <div className="container-x">
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/10 pb-5">
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    Already held
                  </h2>
                  <p className="text-white/55">
                    The record stays up — these cities said yes.
                  </p>
                </div>
              </Reveal>
              <div
                className={`mt-8 grid gap-6 ${
                  held.length === 1 ? "mx-auto max-w-2xl" : "lg:grid-cols-2"
                }`}
              >
                {held.map((e, i) => (
                  <Reveal key={e.slug} delay={i * 0.06}>
                    <FestivalCard e={e} held />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Where it began — the two festivals that predate the events data. */}
        <section className="section-pad !py-14">
          <div className="container-x">
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/10 pb-5">
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Where it began
                </h2>
                <p className="text-white/55">Ontario, Canada</p>
              </div>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                {
                  city: "Hamilton",
                  region: "Ontario, Canada",
                  blurb:
                    "The first Jesus Festival. A step of faith became a public celebration of Jesus — worship, the Gospel preached plainly, baptisms in the middle of the city, and churches standing together.",
                  href: "https://JesusFestival.ca",
                  label: "JesusFestival.ca",
                },
                {
                  city: "Niagara",
                  region: "Ontario, Canada",
                  blurb:
                    "Worship in the Wild carried the same heart into Niagara Falls — thousands gathering outdoors to lift up the name of Jesus in one of the most visited places on earth.",
                  href: "https://JesusFestivalNiagara.com",
                  label: "JesusFestivalNiagara.com",
                },
              ].map((c, i) => (
                <Reveal key={c.city} delay={i * 0.06}>
                  <div className="flex h-full flex-col rounded-2xl glass p-7">
                    <h3 className="font-display text-2xl font-bold uppercase text-white">
                      {c.city}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[.16em] text-gold-400">
                      {c.region}
                    </p>
                    <p className="mt-5 flex-1 leading-relaxed text-white/65">
                      {c.blurb}
                    </p>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 self-start font-bold text-white/80 transition hover:text-gold"
                    >
                      {c.label}
                      <Icon name="link" className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Your city */}
        <section className="section-pad !py-16 border-t border-white/5">
          <div className="container-x">
            <div className="mx-auto max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-8 text-center shadow-[0_35px_110px_rgba(0,0,0,.35)] sm:p-12">
              <Reveal>
                <Icon name="spark" className="mx-auto h-9 w-9 text-gold" />
                <p className="mt-6 text-xs font-bold uppercase tracking-[.28em] text-gold">
                  There is no list you have to get on
                </p>
                <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">
                  The next city on this page could be yours.
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                  Every festival here started the same way: a few local believers
                  praying, then taking one honest step. You do not need a budget, a
                  platform, or a finished plan to begin — and the full playbook is
                  free.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/start-a-jesus-festival" className="button-primary">
                    Start with step one <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/start-a-jesus-festival/playbook"
                    className="button-secondary"
                  >
                    The full 13-step playbook
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Hear about the next one */}
        <section className="section-pad !py-16 border-t border-white/5 bg-navy-950/40">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <Eyebrow>Don&apos;t miss the next one</Eyebrow>
                <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
                  Know when a festival{" "}
                  <span className="text-gradient-gold">is announced.</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
                  New festivals, testimonies from the ones already held, and what
                  the Lord is doing across the network — sent as it happens, never
                  spam.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="mt-8">
                  <JoinForm source="festivals" />
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
