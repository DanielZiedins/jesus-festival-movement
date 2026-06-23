import { MOVEMENT_STAGES } from "@/lib/content";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";
import Image from "next/image";

export default function Festivals() {
  return (
    <section id="journey" className="section-pad relative overflow-hidden bg-[#070b16]">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(244,196,92,.035),transparent)]" />
      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal>
            <Eyebrow>Hamilton → Niagara → Nations</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-5xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
              A local yes can
              <span className="block text-gradient-gold">travel farther than you imagine.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xl text-lg leading-relaxed text-white/62 lg:ml-auto">
              What began in Hamilton moved into Niagara with the same simple heart: gather in public, lift up Jesus, preach the Gospel, and invite a region into lasting mission.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <div className="movement-line absolute left-7 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-ember to-sky-300/20 lg:block" />
          <div className="space-y-7">
            {MOVEMENT_STAGES.map((stage, index) => (
              <Reveal key={stage.city} delay={index * 0.08}>
                <article className="group relative grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition duration-500 hover:border-gold/25 lg:ml-16 lg:grid-cols-[.88fr_1.12fr]">
                  <span className="absolute -left-[3.12rem] top-10 z-10 hidden h-3.5 w-3.5 rounded-full border-2 border-ink bg-gold shadow-[0_0_0_7px_rgba(244,196,92,.12),0_0_24px_rgba(244,196,92,.7)] lg:block" />
                  <div
                    className={`relative min-h-[18rem] overflow-hidden transition duration-1000 group-hover:scale-[1.035] ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={stage.image}
                      alt={`${stage.city}, ${stage.region}`}
                      fill
                      sizes="(max-width: 1023px) 100vw, 45vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className={`relative flex flex-col justify-center p-7 sm:p-10 lg:p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(244,196,92,.09),transparent_36%)]" />
                    <div className="relative">
                      <div className="flex items-center justify-between gap-5">
                        <span className="font-display text-sm font-bold tracking-[.18em] text-ember-400">{stage.number}</span>
                        <span className="rounded-full border border-white/10 px-3 py-1.5 text-[.62rem] font-bold uppercase tracking-[.2em] text-white/48">
                          {stage.label}
                        </span>
                      </div>
                      <h3 className="mt-8 font-display text-4xl font-bold uppercase leading-none text-white sm:text-5xl">
                        {stage.city}
                      </h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-[.16em] text-gold-400">{stage.region}</p>
                      <p className="mt-6 max-w-xl text-base leading-relaxed text-white/62 sm:text-lg">{stage.description}</p>
                      <a
                        href={stage.link}
                        target={stage.link.startsWith("http") ? "_blank" : undefined}
                        rel={stage.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-7 inline-flex items-center gap-2 font-bold text-white transition hover:text-gold"
                      >
                        {stage.linkLabel}
                        <Icon name="arrow" className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
