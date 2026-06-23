import { TESTIMONIES } from "@/lib/content";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

export default function Testimonies() {
  return (
    <section id="fruit" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_15%,rgba(244,196,92,.1),transparent_30%)]" />
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-white/10 bg-white/[.025] p-7 sm:p-10">
              <Eyebrow>The fruit</Eyebrow>
              <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl">
                This is why
                <span className="block text-gradient-gold">the yes is worth it.</span>
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-white/60">
                Not production for production&apos;s sake. Not another date on the calendar. We are believing for lives transformed and cities awakened to the love of Jesus.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-3">
                {["Lives changed", "Baptisms", "Churches united", "Outreach continuing"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/[0.08] bg-black/20 p-4">
                    <span className="text-gold">✦</span>
                    <p className="mt-3 text-sm font-semibold text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {TESTIMONIES.map((testimony, index) => (
              <Reveal key={testimony.quote} delay={index * 0.06}>
                <figure className={`group relative overflow-hidden rounded-[2rem] border border-white/10 p-7 transition duration-500 hover:border-gold/25 sm:p-9 ${
                  index === 0
                    ? "bg-[linear-gradient(115deg,rgba(233,95,50,.16),rgba(244,196,92,.04))]"
                    : "bg-white/[.025]"
                }`}>
                  <span className="absolute right-7 top-3 font-display text-7xl font-bold text-gold/[.11]">“</span>
                  <blockquote className="relative max-w-3xl text-balance font-display text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    “{testimony.quote}”
                  </blockquote>
                  <figcaption className="relative mt-7 flex items-center gap-4">
                    <span className="h-px w-10 bg-gradient-to-r from-gold to-ember" />
                    <span>
                      <span className="block text-sm font-bold text-white">{testimony.name}</span>
                      <span className="mt-0.5 block text-xs uppercase tracking-[.14em] text-white/40">{testimony.place}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
