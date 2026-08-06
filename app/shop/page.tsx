import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/Icon";
import { KINGDOM_SHOP_URL, getJesusFestivalProducts } from "@/lib/shopify";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Jesus Festival Shop | Faith-forward apparel",
  description: "Shop the Jesus Festival collection through Kingdom Shop: faith-forward apparel made to carry the message and the mission.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Jesus Festival Shop | Kingdom Shop",
    description: "Wear the message. Carry the mission. Shop the Jesus Festival collection.",
  },
};

export default async function ShopPage() {
  const products = await getJesusFestivalProducts();

  return (
    <main id="main" className="min-h-screen overflow-hidden bg-[#050812]">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_74%_26%,rgba(244,196,92,.2),transparent_28%),radial-gradient(circle_at_12%_20%,rgba(233,95,50,.16),transparent_26%),#050812]">
        <div className="star-field absolute inset-0" />
        <div className="hero-rays absolute inset-0" />
        <div className="grain" />
        <div className="container-x relative z-10 py-7 sm:py-10">
          <BrandMark priority className="w-fit" />
          <div className="grid items-end gap-10 pb-16 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:pb-24 lg:pt-28">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/52 transition hover:text-gold"><span>←</span> Back to the movement</Link>
              <p className="mt-10 text-xs font-bold uppercase tracking-[.3em] text-gold">Kingdom Shop × Jesus Festival</p>
              <h1 className="mt-5 max-w-4xl font-display text-[clamp(4rem,9vw,8.5rem)] font-bold uppercase leading-[.78] tracking-[-.075em] text-white">
                Wear the message.
                <span className="block text-gradient-gold">Carry the mission.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/66 sm:text-xl">A faith-forward collection for people who want their everyday life to point somewhere higher: Jesus, His Gospel, and the cities He loves.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#collection" className="button-primary">Shop the collection <Icon name="arrow" className="h-4 w-4 rotate-90" /></a>
                <a href={KINGDOM_SHOP_URL} target="_blank" rel="noopener noreferrer" className="button-secondary">Visit Kingdom Shop <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="relative mx-auto grid w-full max-w-xl grid-cols-2 gap-4 lg:mb-1">
              {products.slice(0, 2).map((product, index) => (
                <a key={product.handle} href={product.url} target="_blank" rel="noopener noreferrer" className={`group relative aspect-[.78] overflow-hidden rounded-[2rem] border border-white/12 bg-[#0a0f1d] p-4 shadow-[0_28px_80px_rgba(0,0,0,.38)] transition hover:-translate-y-2 hover:border-gold/45 ${index === 1 ? "mt-10" : ""}`}>
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 1023px) 45vw, 22vw" className="object-contain p-4 transition duration-700 group-hover:scale-110" />
                  <span className="absolute inset-x-4 bottom-4 rounded-full border border-white/12 bg-ink/80 px-3 py-2 text-center text-[.58rem] font-bold uppercase tracking-[.15em] text-white/80 backdrop-blur-xl">{index === 0 ? "Fresh drop" : "Jesus Festival"}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="relative section-pad">
        <div className="container-x relative">
          <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-9 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.28em] text-gold">The Jesus Festival collection</p>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl">Choose your piece.</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/48">Live catalog, live pricing, and secure fulfillment through Kingdom Shop.</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.handle} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.025] transition duration-500 hover:-translate-y-1 hover:border-gold/35 hover:bg-white/[.045]">
                <a href={product.url} target="_blank" rel="noopener noreferrer" className="relative block aspect-square overflow-hidden bg-[radial-gradient(circle_at_50%_30%,rgba(244,196,92,.12),transparent_46%),#0a0f1d]">
                  <Image src={product.image} alt={product.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-contain p-7 transition duration-700 group-hover:scale-110 group-hover:rotate-1 sm:p-10" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/12 bg-ink/72 px-3 py-2 text-[.58rem] font-bold uppercase tracking-[.18em] text-gold backdrop-blur-xl">0{index + 1}</span>
                </a>
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold leading-tight text-white">{product.title}</h3>
                    <span className="shrink-0 text-lg font-bold text-gold">${product.price}</span>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className={`text-xs font-bold uppercase tracking-[.14em] ${product.available ? "text-sky-200" : "text-white/40"}`}>{product.available ? "Available now" : "Coming soon"}</span>
                    <a href={product.url} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-gold">View in Kingdom Shop <Icon name="arrow" className="h-4 w-4 transition-transform group-hover/link:translate-x-1" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#0b1222] py-20 sm:py-28">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.28em] text-ember-400">A Kingdom Shop perspective</p>
            <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl">This is a reminder, not a costume.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Start conversations", "A simple design can open a real moment to talk about Jesus."],
              ["02", "Support the mission", "Every piece is connected to the wider Kingdom vision and its local expressions."],
              ["03", "Wear it with love", "Let what you wear be an invitation marked by humility, courage, and hope."],
            ].map(([number, title, description]) => (
              <article key={number} className="rounded-[1.6rem] border border-white/10 bg-white/[.035] p-6">
                <span className="font-display text-sm font-bold text-gold">{number}</span>
                <h3 className="mt-6 font-display text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/56">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-4xl rounded-[2.2rem] border border-gold/20 bg-gradient-to-br from-gold/[.1] via-white/[.035] to-ember/[.09] p-7 text-center shadow-[0_35px_110px_rgba(0,0,0,.35)] sm:p-12">
            <Icon name="spark" className="mx-auto h-9 w-9 text-gold" />
            <p className="mt-6 text-xs font-bold uppercase tracking-[.28em] text-gold">Keep the message moving</p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-[-.04em] text-white sm:text-5xl">One name. One mission. Every nation.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">Shop the collection, then carry the message with humility and bold love wherever God sends you.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={KINGDOM_SHOP_URL} target="_blank" rel="noopener noreferrer" className="button-primary">Open Kingdom Shop <span aria-hidden="true">↗</span></a>
              <Link href="/stories/kingdom-shop" className="button-secondary">Read the launch story</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
