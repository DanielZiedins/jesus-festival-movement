"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/content";

const words = ["Jesus", "Festival", "Movement"];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Cinematic layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,#1a1140_0%,#080a1f_45%,#05060f_100%)]" />
      <div className="aurora" />

      {/* Animated city-light field */}
      <div className="absolute inset-0">
        {!reduce &&
          Array.from({ length: 36 }).map((_, i) => {
            const left = (i * 53) % 100;
            const top = (i * 71) % 100;
            const size = (i % 3) + 1;
            return (
              <motion.span
                key={i}
                className="absolute rounded-full bg-gold"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: size,
                  height: size,
                }}
                animate={{ opacity: [0.1, 0.9, 0.1] }}
                transition={{
                  duration: 3 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              />
            );
          })}
      </div>

      {/* Horizon glow */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ember-600/25 via-ember-600/5 to-transparent" />
      <div className="grain" />

      <div className="container-x relative z-10 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gold-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-ember" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          A Global Gospel Movement
        </motion.div>

        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[8rem]">
          {words.map((w, i) => (
            <motion.span
              key={w}
              className={`block ${i === 1 ? "text-shimmer" : "text-white"}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-lg text-white/75 sm:text-xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#how-to-start"
            className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-base font-semibold text-ink shadow-glow-ember transition-transform hover:scale-105 sm:w-auto"
          >
            <span className="relative z-10">Start A Festival</span>
          </a>
          <a
            href="#contact"
            className="w-full rounded-full glass px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold/40 hover:text-gold sm:w-auto"
          >
            Connect With Us
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-white/40"
        >
          Gather · Worship · Preach Jesus · Reach the Lost · Multiply
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        animate={reduce ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}
