import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import JoinForm from "@/components/JoinForm";
import { SORTED_POSTS } from "@/lib/blog/posts";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Journal — Evangelism, Unity & Reaching Your City",
  description:
    "Practical, biblical writing on evangelism, church unity, follow-up and reaching your city — from the team behind the Jesus Festival Movement.",
  keywords: [
    "evangelism blog",
    "how to reach your city for Christ",
    "church unity",
    "gospel outreach ideas",
    "great commission blog",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/blog`,
    title: "The Journal — Jesus Festival Movement",
    description:
      "Practical, biblical writing on evangelism, unity, and reaching your city.",
  },
};

function fmt(date: string) {
  return new Date(date + "T12:00:00Z").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndex() {
  const [lead, ...rest] = SORTED_POSTS;

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)]" />
          <div className="aurora opacity-60" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal immediate>
                <Eyebrow>The Journal</Eyebrow>
              </Reveal>
              <Reveal immediate delay={0.05}>
                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                  Writing For People Who Want{" "}
                  <span className="text-gradient-gold">
                    Their City Reached
                  </span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                  Practical and biblical, written by people actually doing this.
                  No filler, no clickbait — just what we&apos;ve learned and
                  what we&apos;re still learning.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-pad !pt-4">
          <div className="container-x">
            {/* Lead article */}
            {lead && (
              <Reveal>
                <a
                  href={`/blog/${lead.slug}`}
                  className="group relative block overflow-hidden rounded-3xl glass-strong p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 sm:p-12"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
                  <div className="relative max-w-3xl">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.18em]">
                      <span className="rounded-full bg-ember-500/15 px-3 py-1 text-ember-400">
                        Latest
                      </span>
                      <span className="text-gold-400">{lead.category}</span>
                      <span className="text-white/35">
                        {fmt(lead.date)} · {lead.readMinutes} min read
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                      {lead.title}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-white/70">
                      {lead.description}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 font-semibold text-gold">
                      Read it
                      <Icon
                        name="arrow"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </a>
              </Reveal>
            )}

            {/* The rest */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <a
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col rounded-3xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                  >
                    <div className="flex flex-wrap items-center gap-x-3 text-[11px] font-bold uppercase tracking-[0.18em]">
                      <span className="text-gold-400">{p.category}</span>
                      <span className="text-white/35">
                        {p.readMinutes} min read
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                      {p.title}
                    </h2>
                    <p className="mt-3 flex-1 leading-relaxed text-white/65">
                      {p.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                      Read it
                      <Icon
                        name="arrow"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Subscribe */}
            <Reveal>
              <div className="mt-14 rounded-3xl border border-gold/20 bg-gradient-to-br from-navy-900/80 to-ink p-8 sm:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
                  <div>
                    <p className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                      Get the next one{" "}
                      <span className="text-gradient-gold">by email.</span>
                    </p>
                    <p className="mt-3 max-w-md leading-relaxed text-white/65">
                      Join the movement and we&apos;ll send you nine letters on
                      the story, the fruit, and the part you play in it.
                    </p>
                  </div>
                  <JoinForm source="blog-index" variant="inline" cta="Join Free" />
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
