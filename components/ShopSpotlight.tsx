import Image from "next/image";
import Link from "next/link";
import { getJesusFestivalProducts } from "@/lib/shopify";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";

export default async function ShopSpotlight() {
  const products = await getJesusFestivalProducts();
  const featured = products[0];

  return (
    <section id="shop" className="shop-spotlight section-pad relative isolate overflow-hidden border-y border-gold/15 bg-[#0c1120]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_48%,rgba(244,196,92,.18),transparent_26%),radial-gradient(circle_at_14%_26%,rgba(233,95,50,.13),transparent_24%)]" />
      <div className="shop-grid absolute inset-0" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Now open · Kingdom Shop</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-5xl font-bold uppercase leading-[.88] tracking-[-.06em] text-white sm:text-6xl lg:text-7xl">
              Wear the message.
              <span className="block text-gradient-gold">Carry the mission.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              The Jesus Festival collection is now live through Kingdom Shop—simple, faith-forward apparel for the street, the gathering, and the everyday yes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[.16em] text-white/50">
              {["Faith-forward", "Made to be worn", "Secure Shopify checkout"].map((item) => (
                <span key={item} className="rounded-full border border-white/12 bg-white/[.045] px-4 py-2.5">{item}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="button-primary group">
                Shop Jesus Festival
                <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/stories/kingdom-shop" className="button-secondary">Read the Kingdom Shop story</Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto grid w-full max-w-2xl gap-4 sm:grid-cols-[1.05fr_.95fr]">
              <Link href="/shop" className="shop-feature-card group relative min-h-[29rem] overflow-hidden rounded-[2rem] border border-white/12 bg-[#090d18] p-5 shadow-[0_40px_100px_rgba(0,0,0,.38)] sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(244,196,92,.16),transparent_45%)]" />
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 31vw"
                  className="object-contain p-5 transition duration-700 group-hover:scale-[1.06] group-hover:rotate-1 sm:p-8"
                />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 sm:inset-x-7 sm:bottom-7">
                  <span className="rounded-full border border-white/15 bg-ink/75 px-3 py-2 text-[.62rem] font-bold uppercase tracking-[.18em] text-white/82 backdrop-blur-xl">Featured drop</span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink shadow-glow transition group-hover:scale-110">↗</span>
                </div>
              </Link>
              <div className="grid gap-4">
                <div className="rounded-[1.7rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur-xl sm:p-7">
                  <Icon name="spark" className="h-7 w-7 text-gold" />
                  <p className="mt-7 font-display text-2xl font-bold leading-tight text-white">More than merch.</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/56">A visible reminder that Jesus is worth lifting up—in every city, every day.</p>
                </div>
                <Link href="/shop" className="group rounded-[1.7rem] border border-ember/25 bg-gradient-to-br from-ember/[.16] to-gold/[.08] p-6 transition hover:-translate-y-1 hover:border-gold/45 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[.22em] text-gold">The collection</p>
                  <p className="mt-3 font-display text-4xl font-bold text-white">{products.length}</p>
                  <p className="mt-1 text-sm text-white/58">Jesus Festival pieces live now.</p>
                  <p className="mt-6 flex items-center gap-2 text-sm font-bold text-gold">See the drop <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></p>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
