"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { STATS } from "@/lib/content";

function StatNumber({ value }: { value: string }) {
  // value like "8.3B" -> animate the numeric part
  const num = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(1) + suffix);

  useEffect(() => {
    if (inView) {
      if (reduce) {
        count.set(num);
      } else {
        const controls = animate(count, num, { duration: 1.6, ease: "easeOut" });
        return controls.stop;
      }
    }
  }, [inView, num, count, reduce]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function GreatCommission() {
  return (
    <section
      id="commission"
      className="section-pad relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(255,107,53,0.12),transparent_55%)]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow>The Great Commission</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-6 text-balance font-display text-4xl font-bold leading-[1.1] sm:text-6xl">
              The Great Commission Is Still Before Us — And We Believe It Can Be{" "}
              <span className="text-gradient-gold">
                Fulfilled In Our Generation.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl glass-strong p-8 text-center">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-ember-500/10 blur-2xl" />
                <p className="font-display text-6xl font-bold text-gradient-gold sm:text-7xl">
                  <StatNumber value={s.value} />
                </p>
                <p className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-white">
                  {s.label}
                </p>
                <p className="mt-2 text-sm text-white/60">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-white/75">
              2.3 billion people still have no access to the Gospel. That is not
              a number to fear — it is a frontier to cross. We believe Jesus
              Festival events and this global movement can play a major role in{" "}
              <span className="font-semibold text-gold">
                awakening believers, reaching cities, and mobilizing people into
                action.
              </span>
            </p>
            <p className="mt-5 text-sm text-white/40">
              Stats sourced from{" "}
              <a
                href="https://LoveOnTheWorldMap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold-400 underline-offset-4 hover:underline"
              >
                LoveOnTheWorldMap.com
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
