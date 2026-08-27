import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import JoinForm from "@/components/JoinForm";
import { CATEGORIES, NETWORK, sitesIn } from "@/lib/network";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Network — Ministries, Tools & Initiatives For Reaching Your City",
  description:
    "The Thy Kingdom Network: Gospel festivals, free evangelism tools, local and global outreach, and Kingdom-minded business. Everything we build, in one place.",
  keywords: [
    "Thy Kingdom Network",
    "christian ministry network",
    "free evangelism tools",
    "gospel outreach resources",
    "kingdom business alliance",
    "Jesus Festival network",
  ],
  alternates: { canonical: "/network" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/network`,
    title: "The Network — Thy Kingdom Network",
    description:
      "Gospel festivals, free evangelism tools, local and global outreach, and Kingdom-minded business.",
  },
};

export default function NetworkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The Thy Kingdom Network",
    description:
      "Ministries, tools and initiatives for reaching your city with the Gospel.",
    url: `${SITE.url}/network`,
    hasPart: NETWORK.map((s) => ({
      "@type": "WebSite",
      name: s.name,
      url: s.url,
      description: s.tagline,
    })),
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
                <Eyebrow>The Network</Eyebrow>
              </Reveal>
              <Reveal immediate delay={0.05}>
                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                  One Family Of Work,{" "}
                  <span className="text-gradient-gold">One Purpose.</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                  Jesus Festivals are one part of something wider. These are the
                  ministries, free tools and initiatives built alongside it —
                  all pointed at the same thing: <strong className="text-white">Jesus
                  known, and cities reached.</strong>
                </p>
              </Reveal>
              <Reveal immediate delay={0.15}>
                <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-white/55">
                  {NETWORK.length} projects · One Kingdom
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {CATEGORIES.map((cat, ci) => {
          const sites = sitesIn(cat.key);
          if (!sites.length) return null;
          return (
            <section
              key={cat.key}
              className={`section-pad !py-14 ${
                ci % 2 === 1 ? "border-y border-white/5 bg-navy-950/40" : ""
              }`}
            >
              <div className="container-x">
                <Reveal>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/10 pb-5">
                    <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                      {cat.title}
                    </h2>
                    <p className="text-white/55">{cat.blurb}</p>
                  </div>
                </Reveal>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {sites.map((s, i) => (
                    <Reveal key={s.key} delay={i * 0.05}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-full flex-col rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-white/[0.06]"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <p className="font-display text-lg font-bold text-white">
                              {s.name}
                            </p>
                            <p className="mt-1 text-sm font-medium text-gold-400">
                              {s.tagline}
                            </p>
                          </div>
                          <Icon
                            name="arrow"
                            className="mt-1 h-5 w-5 flex-none text-white/55 transition-all group-hover:translate-x-0.5 group-hover:text-gold"
                          />
                        </div>
                        <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65">
                          {s.why}
                        </p>
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="section-pad">
          <div className="container-x">
            <Reveal>
              <div className="mx-auto max-w-4xl rounded-3xl border border-gold/20 bg-gradient-to-br from-navy-900/80 to-ink p-8 sm:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
                  <div>
                    <p className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Follow the whole{" "}
                      <span className="text-gradient-gold">movement.</span>
                    </p>
                    <p className="mt-3 max-w-md leading-relaxed text-white/65">
                      Nine letters on the story, the fruit, the mission, and
                      the ways you can step in — including what&apos;s happening
                      across the network.
                    </p>
                  </div>
                  <JoinForm source="network" variant="inline" cta="Join Free" />
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
