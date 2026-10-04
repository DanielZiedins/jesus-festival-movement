import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/ui/Icon";

const POPULAR = [
  { href: "/festivals", title: "Every festival", blurb: "Where Jesus Festivals have been held and where they are heading." },
  { href: "/answers", title: "Answers", blurb: "Straight answers to the questions people actually ask — searchable." },
  { href: "/blog", title: "The Journal", blurb: "Practical guides on evangelism, prayer and serving your city." },
  { href: "/know-jesus", title: "Know Jesus", blurb: "The Gospel, explained simply." },
  { href: "/start-a-jesus-festival/playbook", title: "The 13-step playbook", blurb: "Everything it takes to run one, free and printable." },
  { href: "/#contact", title: "Talk to us", blurb: "Tell us what God is putting on your heart for your city." },
];

export default function NotFound() {
  return (
    <main id="main" className="relative flex min-h-screen overflow-hidden bg-[#050812]">
      <div className="star-field absolute inset-0" />
      <div className="hero-rays absolute inset-0" />
      <div className="grain" />
      <div className="container-x relative z-10 flex w-full flex-col py-8 sm:py-10">
        <BrandMark priority className="w-fit" />
        <section className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center py-20 text-center">
          {/* Decorative watermark. Drawn from a data attribute via CSS so it is
              not text content: axe grades real text at 8% opacity as a contrast
              failure even when it is purely decorative. */}
          <span aria-hidden="true" data-num="404" className="watermark-num font-display text-[clamp(6rem,20vw,13rem)] font-bold leading-none tracking-[-.1em] text-white/[.08]" />
          <p className="mt-3 text-xs font-bold uppercase tracking-[.3em] text-gold">A turn in the road</p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[.88] tracking-[-.06em] text-white sm:text-6xl">This page has gone <span className="text-gradient-gold">somewhere else.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/62">The movement is still here. Find the story, the first steps, or the way to bring Jesus Festival to your city.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/" className="button-primary">Return home <Icon name="arrow" className="h-4 w-4" /></Link><Link href="/start-a-jesus-festival" className="button-secondary">Start in your city</Link></div>

          {/* Someone here usually followed an old or mistyped link — give them
              the main places to land rather than only the front door. */}
          <nav aria-label="Popular pages" className="mt-14 w-full max-w-3xl text-left">
            <p className="text-center text-xs font-bold uppercase tracking-[.24em] text-white/55">Or head somewhere useful</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {POPULAR.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[.035] p-5 transition hover:border-gold/35 hover:bg-white/[.06]"
                  >
                    <span>
                      <span className="block font-display text-lg font-bold text-white">{p.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-white/60">{p.blurb}</span>
                    </span>
                    <Icon name="arrow" className="mt-1 h-4 w-4 flex-none text-gold transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </main>
  );
}
