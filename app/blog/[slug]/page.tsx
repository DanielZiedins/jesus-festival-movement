import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollFX from "@/components/ui/ScrollFX";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import Share from "@/components/Share";
import JoinForm from "@/components/JoinForm";
import Blocks from "@/components/blog/Blocks";
import { POST_BY_SLUG, POSTS, SORTED_POSTS } from "@/lib/blog/posts";
import { SITE_BY_KEY } from "@/lib/network";
import { SITE } from "@/lib/content";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = POST_BY_SLUG.get(params.slug);
  if (!post) return {};
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function fmt(date: string) {
  return new Date(date + "T12:00:00Z").toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPost({ params }: Params) {
  const post = POST_BY_SLUG.get(params.slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const related = post.related
    .map((k) => SITE_BY_KEY.get(k))
    .filter(Boolean)
    .slice(0, 4);
  const more = SORTED_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en",
    // The answer-first summary, offered as the abstract engines should quote.
    ...(post.tldr ? { abstract: post.tldr } : null),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".post-tldr", "h1"],
    },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <ScrollFX />
      <Nav />

      <main id="main">
        {/* Header */}
        <article>
          <header className="relative overflow-hidden pb-8 pt-36 sm:pt-44">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-20%,#1a1140_0%,#080a1f_50%,#05060f_100%)]" />
            <div className="aurora opacity-50" />
            <div className="container-x relative">
              <div className="mx-auto max-w-3xl">
                <Reveal immediate>
                  <nav className="flex items-center gap-2 text-sm text-white/45">
                    <a href="/blog" className="transition-colors hover:text-gold">
                      Journal
                    </a>
                    <span>/</span>
                    <span className="text-gold-400">{post.category}</span>
                  </nav>
                </Reveal>
                <Reveal immediate delay={0.05}>
                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
                    {post.eyebrow}
                  </p>
                </Reveal>
                <Reveal immediate delay={0.08}>
                  <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-[1.08] sm:text-5xl">
                    {post.title}
                  </h1>
                </Reveal>
                <Reveal immediate delay={0.12}>
                  <p className="mt-6 text-xl leading-relaxed text-white/70">
                    {post.description}
                  </p>
                </Reveal>
                <Reveal immediate delay={0.15}>
                  <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/10 pt-6 text-sm text-white/45">
                    <span>{fmt(post.date)}</span>
                    <span>·</span>
                    <span>{post.readMinutes} min read</span>
                    <span>·</span>
                    <span>Jesus Festival Movement</span>
                  </p>
                </Reveal>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="container-x pb-8">
            <div className="mx-auto max-w-3xl">
              {/* Answer-first summary — for skimmers, and for answer engines */}
              {post.tldr && (
                <Reveal>
                  <aside className="mb-12 rounded-2xl border border-gold/25 bg-gold/[0.06] p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                      The short answer
                    </p>
                    <p className="post-tldr mt-3 text-lg leading-relaxed text-white/90">
                      {post.tldr}
                    </p>
                  </aside>
                </Reveal>
              )}
              <Blocks blocks={post.body} />
            </div>
          </div>
        </article>

        {/* Share */}
        <div className="container-x">
          <div className="mx-auto max-w-3xl border-t border-white/10 pt-10">
            <Share
              title="Know someone who needs this?"
              url={url}
              text={post.title}
            />
          </div>
        </div>

        {/* Explore next — network rail */}
        {related.length > 0 && (
          <section className="section-pad">
            <div className="container-x">
              <div className="mx-auto max-w-4xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                  Explore next
                </p>
                <p className="mt-2 text-white/55">
                  Sister projects in the Thy Kingdom Network that go deeper on
                  this.
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {related.map((s) => (
                    <a
                      key={s!.key}
                      href={s!.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                    >
                      <p className="font-display font-bold text-white">
                        {s!.name}
                      </p>
                      <p className="mt-1 text-sm font-medium text-gold-400">
                        {s!.tagline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/60">
                        {s!.why}
                      </p>
                    </a>
                  ))}
                </div>
                <a
                  href="/network"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  See the whole network
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Subscribe + more posts */}
        <section className="section-pad !pt-0">
          <div className="container-x">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-navy-900/80 to-ink p-8 sm:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
                  <div>
                    <p className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                      You have a role in{" "}
                      <span className="text-gradient-gold">this.</span>
                    </p>
                    <p className="mt-3 max-w-md leading-relaxed text-white/65">
                      Nine free letters on the story, the fruit, the mission,
                      and the specific ways you can step in.
                    </p>
                  </div>
                  <JoinForm source={`blog-${post.slug}`} variant="inline" cta="Join Free" />
                </div>
              </div>

              {more.length > 0 && (
                <div className="mt-14">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-400">
                    Keep reading
                  </p>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {more.map((p) => (
                      <a
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="group rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-400">
                          {p.category}
                        </p>
                        <p className="mt-3 font-display text-lg font-bold leading-snug text-white">
                          {p.title}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                          Read it
                          <Icon
                            name="arrow"
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                          />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
