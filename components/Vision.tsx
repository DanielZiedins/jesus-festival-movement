import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { VISION_PILLARS } from "@/lib/content";

export default function Vision() {
  return (
    <section
      id="vision"
      className="section-pad relative overflow-hidden border-y border-white/5 bg-navy-950/40"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(16,26,74,0.6),transparent_60%)]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>The Vision</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              More Than Events.{" "}
              <span className="text-gradient-gold">Movements.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              These gatherings are designed to spark ongoing evangelism,
              discipleship, unity, and outreach in every city where they are
              held. We gather the Church, lift up Jesus publicly, preach the
              Gospel clearly, and help plant outreach groups that keep going out
              to share the Gospel with others.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VISION_PILLARS.map((p, i) => (
            <Reveal key={p.word} delay={i * 0.05}>
              <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                <span className="font-display text-sm font-bold text-ember-400">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-white">
                  {p.word}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={VISION_PILLARS.length * 0.05}>
            <div className="flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-gold-500/90 to-ember-500/90 p-6 text-center">
              <p className="font-display text-lg font-bold text-ink">
                Around the world. 🌍
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
