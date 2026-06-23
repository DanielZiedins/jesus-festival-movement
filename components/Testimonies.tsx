import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { TESTIMONIES } from "@/lib/content";

const FRUIT = [
  { value: "∞", label: "Lives changed" },
  { value: "Many", label: "Baptisms" },
  { value: "Real", label: "Salvations" },
  { value: "Lasting", label: "Outreach planted" },
];

export default function Testimonies() {
  return (
    <section
      id="testimonies"
      className="section-pad relative overflow-hidden border-y border-white/5 bg-navy-950/40"
    >
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>Testimonies &amp; Fruit</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              The Fruit Is{" "}
              <span className="text-gradient-gold">Real.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Stories of transformation, baptisms, salvations, and outreach that
              keeps going. This is what it&apos;s all for.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIES.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl glass p-8">
                <span className="font-display text-5xl leading-none text-gold/40">
                  “
                </span>
                <blockquote className="-mt-3 flex-1 text-lg leading-relaxed text-white/85">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-display font-bold text-white">{t.name}</p>
                  <p className="text-sm text-gold-400">{t.place}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 grid gap-4 rounded-3xl glass-strong p-8 sm:grid-cols-2 lg:grid-cols-4">
            {FRUIT.map((f) => (
              <div key={f.label} className="text-center">
                <p className="font-display text-3xl font-bold text-gradient-gold sm:text-4xl">
                  {f.value}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wide text-white/60">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-base text-white/55">
            Have a testimony, photo, or outreach report from a Jesus Festival?
            We&apos;d love to celebrate it.{" "}
            <a href="#contact" className="font-semibold text-gold hover:underline">
              Share your story →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
