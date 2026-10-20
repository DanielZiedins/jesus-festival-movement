import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Icon from "@/components/ui/Icon";
import { GLOSSARY } from "@/lib/glossary";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Glossary — Evangelism & Gospel Festival Terms, Defined Plainly",
  description:
    "Plain-language definitions of the words Christians use about sharing their faith: the Gospel, evangelism, discipleship, the Great Commission, revival, oikos, altar call, baptism, testimony and more.",
  keywords: [
    "evangelism glossary",
    "christian terms defined",
    "what does gospel mean",
    "what is an altar call",
    "what is oikos",
    "great commission meaning",
  ],
  alternates: { canonical: "/glossary" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/glossary`,
    title: "Glossary — Jesus Festival Movement",
    description: "The words of evangelism and Gospel festivals, defined plainly.",
  },
};

const TERMS = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term));
const LETTERS = [...new Set(TERMS.map((t) => t.term[0].toUpperCase()))];

export default function GlossaryPage() {
  const url = `${SITE.url}/glossary`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet",
        "@id": `${url}#terms`,
        name: "Evangelism and Gospel festival glossary",
        url,
        publisher: { "@id": `${SITE.url}/#organization` },
        hasDefinedTerm: TERMS.map((t) => ({
          "@type": "DefinedTerm",
          "@id": `${url}#${t.id}`,
          name: t.term,
          description: t.definition,
          url: `${url}#${t.id}`,
          inDefinedTermSet: { "@id": `${url}#terms` },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Glossary", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Nav />
      <main id="main">
        <section className="relative overflow-hidden pb-8 pt-36 sm:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)]" />
          <div className="aurora opacity-60" />
          <div className="container-x relative">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal immediate>
                <Eyebrow>Glossary</Eyebrow>
              </Reveal>
              <Reveal immediate delay={0.05}>
                <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
                  The Words,{" "}
                  <span className="text-gradient-gold">Defined Plainly.</span>
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
                  Church language can sound like a code. Here is what the words
                  mean — in plain English, with the Bible behind them and a guide
                  to go deeper.
                </p>
              </Reveal>
            </div>

            <nav aria-label="Jump to a term" className="mx-auto mt-10 max-w-4xl">
              <ul className="flex flex-wrap justify-center gap-2">
                {TERMS.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="inline-flex min-h-9 items-center rounded-full border border-white/12 px-4 text-sm font-semibold text-white/80 transition hover:border-gold/40 hover:text-gold"
                    >
                      {t.term}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <section className="section-pad !pt-10">
          <div className="container-x">
            <div className="mx-auto max-w-4xl space-y-12">
              {LETTERS.map((letter) => (
                <div key={letter}>
                  <p className="font-display text-4xl font-bold text-gold-400" aria-hidden="true">
                    {letter}
                  </p>
                  <dl className="mt-4 space-y-4">
                    {TERMS.filter((t) => t.term[0].toUpperCase() === letter).map((t) => (
                      <div key={t.id} id={t.id} className="scroll-mt-28 rounded-2xl glass p-6 sm:p-7">
                        <dt className="font-display text-2xl font-bold text-white">{t.term}</dt>
                        <dd className="mt-3 leading-relaxed text-white/75">
                          {t.definition}
                          {t.ref && <> <span className="mt-2 block text-sm font-semibold text-gold-400">{t.ref}</span></>}
                          {t.href && (
                            <>
                              {" "}
                              <span className="mt-4 block">
                                <Link
                                  href={t.href}
                                  className="inline-flex min-h-6 items-center gap-1.5 text-sm font-semibold text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                                >
                                  {t.linkLabel ?? "Read more"}
                                  <Icon name="arrow" className="h-3.5 w-3.5" />
                                </Link>
                              </span>
                            </>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}

              <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-navy-900/80 to-ink p-8 text-center sm:p-10">
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Still have a <span className="text-gradient-gold">question?</span>
                </p>
                <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/70">
                  Browse straight answers on festivals, evangelism and faith, or
                  start with the most important page on this site.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link href="/answers" className="button-primary">
                    Browse answers <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                  <Link href="/know-jesus" className="button-secondary">Know Jesus</Link>
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
