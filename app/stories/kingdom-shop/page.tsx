import type { Metadata } from "next";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/content";
import { KINGDOM_SHOP_URL } from "@/lib/shopify";

export const metadata: Metadata = {
  title: "Kingdom Shop is open",
  description: "Kingdom Shop is now open with faith-forward apparel, including the Jesus Festival collection. Here is the heart behind the drop.",
  alternates: { canonical: "/stories/kingdom-shop" },
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE.url}/stories/kingdom-shop/#article`,
      mainEntityOfPage: `${SITE.url}/stories/kingdom-shop`,
      headline: "Kingdom Shop is open",
      description:
        "The heart behind Kingdom Shop and the Jesus Festival faith-forward apparel collection.",
      author: { "@id": `${SITE.url}/#organization` },
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en-CA",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE.name, item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Kingdom Shop is open", item: `${SITE.url}/stories/kingdom-shop` },
      ],
    },
  ],
};

export default function KingdomShopStory() {
  return (
    <main id="main" className="min-h-screen overflow-hidden bg-[#050812]">
      <JsonLd data={articleStructuredData} />
      <section className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_75%_18%,rgba(244,196,92,.18),transparent_26%),radial-gradient(circle_at_18%_38%,rgba(233,95,50,.12),transparent_25%),#050812]">
        <div className="star-field absolute inset-0" />
        <div className="grain" />
        <div className="container-x relative z-10 py-7 sm:py-10">
          <BrandMark priority className="w-fit" />
          <article className="mx-auto max-w-4xl pb-20 pt-20 sm:pb-28 sm:pt-28">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/52 transition hover:text-gold"><span>←</span> Back to the movement</Link>
            <p className="mt-12 text-xs font-bold uppercase tracking-[.3em] text-gold">Kingdom Shop is open</p>
            <h1 className="mt-5 font-display text-[clamp(3.8rem,8vw,7.5rem)] font-bold uppercase leading-[.8] tracking-[-.07em] text-white">What if what we wear could point <span className="text-gradient-gold">beyond us?</span></h1>
            <p className="mt-9 max-w-3xl text-xl leading-relaxed text-white/72">We have opened Kingdom Shop with a simple hope: to make faith-forward pieces that carry a message of Jesus into ordinary places and unexpected conversations.</p>
          </article>
        </div>
      </section>

      <article className="relative pb-24 pt-16 sm:pb-32 sm:pt-24">
        <div className="container-x grid gap-12 lg:grid-cols-[.32fr_.68fr] lg:gap-20">
          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <p className="text-xs font-bold uppercase tracking-[.24em] text-white/34">In this story</p>
            <div className="mt-5 space-y-3 border-l border-gold/25 pl-5 text-sm font-semibold text-white/56"><p>The heart behind the shop</p><p>Why the Jesus Festival collection exists</p><p>How to wear the message well</p></div>
          </aside>
          <div className="max-w-3xl text-lg leading-relaxed text-white/67 sm:text-xl">
            <p className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">The goal was never to make people look spiritual. The goal is to make room for Jesus to be seen.</p>
            <p className="mt-8">Kingdom Shop is built around faith, not fashion for fashion&apos;s sake. The pieces are small visual reminders: the Kingdom is real, Jesus is worthy of public love, and every ordinary day can become a place of witness.</p>
            <p className="mt-7">That is why the Jesus Festival collection belongs here. The movement has always been about gathering the Church, lifting up Jesus, proclaiming the Gospel, and carrying the love of God into cities. A hoodie or tee cannot do that work on its own—but it can start a conversation, encourage a believer, or remind us to pray for the people we pass.</p>
            <blockquote className="my-12 border-y border-gold/20 py-9 font-display text-2xl font-semibold italic leading-relaxed text-white sm:text-3xl">“Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.”<cite className="mt-4 block font-sans text-xs not-italic uppercase tracking-[.22em] text-gold">Matthew 5:16</cite></blockquote>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Wear it with love.</h2>
            <p className="mt-5">Let it be an invitation, never a badge of superiority. Wear it with humility. Wear it with joy. Be ready to listen, to pray, and to love the person who asks what it means. The message gets its truest expression in the way we treat people.</p>
            <h2 className="mt-12 font-display text-3xl font-bold text-white sm:text-4xl">This is just the beginning.</h2>
            <p className="mt-5">We are believing for new Kingdom Shop drops, fresh Jesus Festival pieces, and resources that help believers carry faith into the real world. Thank you for being part of a movement that believes Jesus is worth lifting up—in Hamilton, Niagara, and every nation.</p>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="button-primary">Shop the Jesus Festival collection <Icon name="arrow" className="h-4 w-4" /></Link>
              <a href={KINGDOM_SHOP_URL} target="_blank" rel="noopener noreferrer" className="button-secondary">Visit Kingdom Shop <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
