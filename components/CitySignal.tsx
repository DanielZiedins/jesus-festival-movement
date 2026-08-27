"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

const signals = [
  {
    number: "01",
    eyebrow: "Start in prayer",
    title: "Listen before you launch.",
    description: "Ask God for His heart for your city. Write down the burden, the people, and the place that keeps coming to mind.",
    icon: "pray",
    detail: "One quiet yes can become a citywide invitation.",
  },
  {
    number: "02",
    eyebrow: "Gather a few",
    title: "Find the people who carry it too.",
    description: "Invite two or three humble believers to pray, dream, and walk the city with you. A movement starts relationally.",
    icon: "hands",
    detail: "You do not need a crowd. You need a faithful core.",
  },
  {
    number: "03",
    eyebrow: "Take the next step",
    title: "Let us walk it out with you.",
    description: "Tell us about your city. We will help you discern a wise, practical, prayer-filled first path forward.",
    icon: "globe",
    detail: "Your city is not too small, too early, or too far away.",
  },
] as const;

export default function CitySignal() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = signals[active];

  return (
    <section id="city-signal" className="city-signal relative isolate overflow-hidden border-y border-white/[0.08] bg-[#080e1d] py-7 sm:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_48%,rgba(244,196,92,.12),transparent_25%),radial-gradient(circle_at_12%_30%,rgba(125,211,252,.1),transparent_24%)]" />
      <div className="container-x relative">
        <div className="grid items-center gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
          <Reveal>
            <Eyebrow>Is your city on your heart?</Eyebrow>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-bold uppercase leading-[.9] tracking-[-.05em] text-white sm:text-4xl">
              A movement begins with a
              <span className="block text-gradient-gold">signal of faith.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-center">
              <div className="signal-radar relative mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-ink/80 shadow-[0_0_70px_rgba(244,196,92,.14)] sm:h-32 sm:w-32" aria-hidden="true">
                <span className="signal-radar-ring absolute inset-3 rounded-full border border-gold/20" />
                <span className="signal-radar-ring signal-radar-ring-two absolute inset-[-.85rem] rounded-full border border-sky-300/10" />
                <motion.span
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-[conic-gradient(from_25deg,transparent_0deg,rgba(244,196,92,.25)_36deg,transparent_84deg)]"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink shadow-glow">
                  <Icon name={current.icon} className="h-6 w-6" />
                </span>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[.035] p-4 backdrop-blur-xl sm:p-5">
                <div className="flex flex-wrap gap-2" role="tablist" aria-label="Your first movement steps">
                  {signals.map((signal, index) => (
                    <button
                      key={signal.number}
                      type="button"
                      role="tab"
                      aria-selected={active === index}
                      onClick={() => setActive(index)}
                      className={`rounded-full px-3 py-2 text-[.65rem] font-bold uppercase tracking-[.16em] transition sm:px-4 ${
                        active === index ? "bg-gold text-ink shadow-glow" : "bg-white/[.045] text-white/50 hover:bg-white/[.09] hover:text-white"
                      }`}
                    >
                      {signal.number} · {signal.eyebrow.replace("Start in ", "")}
                    </button>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div role="tabpanel">
                    <p className="text-[.66rem] font-bold uppercase tracking-[.22em] text-gold">{current.eyebrow}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">{current.title}</h3>
                    <p className="mt-2 max-w-2xl leading-relaxed text-white/58">{current.description}</p>
                  </div>
                  <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-bold text-gold sm:mb-1">
                    Take this step <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <p className="mt-4 border-t border-white/[.08] pt-3 text-sm font-medium italic text-white/55">“{current.detail}”</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
