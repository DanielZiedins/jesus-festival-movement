import type { Metadata } from "next";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Icon from "@/components/ui/Icon";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Your Faithful Yes Matters",
  description: "Your Jesus Festival Movement message has been received. We will be in touch as soon as possible.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

const nextSteps = [
  ["We will pray", "Your city and the stirring you shared will be carried with care."],
  ["We will read", "A real person from our team will thoughtfully review your message."],
  ["We will reach out", "We will contact you as soon as possible to discern the next step together."],
] as const;

export default function ThankYouPage() {
  return (
    <main id="main" className="relative min-h-screen overflow-hidden bg-[#050812]">
      <div className="star-field absolute inset-0" />
      <div className="hero-rays absolute inset-0" />
      <div className="absolute left-1/2 top-1/3 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10 bg-gold/[.04] shadow-[0_0_180px_rgba(244,196,92,.09)]" />
      <div className="grain" />

      <div className="container-x relative z-10 flex min-h-screen flex-col py-8 sm:py-10">
        <BrandMark priority className="w-fit" />

        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center py-16 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/25 bg-gradient-to-br from-gold/20 to-ember/10 text-gold shadow-glow">
            <Icon name="check" className="h-9 w-9" />
          </div>
          <p className="mt-8 text-xs font-bold uppercase tracking-[.3em] text-gold">Message received</p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[.84] tracking-[-.065em] text-white sm:text-7xl lg:text-8xl">
            Your faithful yes
            <span className="block text-gradient-gold">matters.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl">
            Thank you for taking this step. We received your message, and we will contact you as soon as possible. What God begins with a whisper can become an invitation for an entire city.
          </p>

          <div className="mt-12 grid w-full gap-4 text-left md:grid-cols-3">
            {nextSteps.map(([title, description], index) => (
              <div key={title} className="rounded-[1.6rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur-xl">
                <span className="font-display text-sm font-bold text-gold">0{index + 1}</span>
                <h2 className="mt-3 font-display text-xl font-bold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/52">{description}</p>
              </div>
            ))}
          </div>

          <blockquote className="mt-12 max-w-2xl border-y border-white/10 py-7 font-display text-xl font-semibold italic leading-relaxed text-white/76 sm:text-2xl">
            “For who hath despised the day of small things?”
            <cite className="mt-3 block font-sans text-xs not-italic uppercase tracking-[.24em] text-gold">Zechariah 4:10</cite>
          </blockquote>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/" className="button-primary">Return to the movement <Icon name="arrow" className="h-4 w-4" /></Link>
            <a href={`mailto:${SITE.email}`} className="button-secondary">Email us directly</a>
          </div>
        </div>
      </div>
    </main>
  );
}
