import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <main id="main" className="relative flex min-h-screen overflow-hidden bg-[#050812]">
      <div className="star-field absolute inset-0" />
      <div className="hero-rays absolute inset-0" />
      <div className="grain" />
      <div className="container-x relative z-10 flex w-full flex-col py-8 sm:py-10">
        <BrandMark priority className="w-fit" />
        <section className="mx-auto flex max-w-4xl flex-1 flex-col items-center justify-center py-20 text-center">
          <p className="font-display text-[clamp(6rem,20vw,13rem)] font-bold leading-none tracking-[-.1em] text-white/[.08]">404</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[.3em] text-gold">A turn in the road</p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[.88] tracking-[-.06em] text-white sm:text-6xl">This page has gone <span className="text-gradient-gold">somewhere else.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/62">The movement is still here. Find the story, the first steps, or the way to bring Jesus Festival to your city.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/" className="button-primary">Return home <Icon name="arrow" className="h-4 w-4" /></Link><Link href="/start-a-jesus-festival" className="button-secondary">Start in your city</Link></div>
        </section>
      </div>
    </main>
  );
}
