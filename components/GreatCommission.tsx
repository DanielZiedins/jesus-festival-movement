"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";

const words = "Go and make disciples of all nations".split(" ");

export default function GreatCommission() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="commission" className="commission-section section-pad relative isolate overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=2200&q=84"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(233,95,50,.16),transparent_32%),linear-gradient(180deg,#050812_0%,rgba(5,8,18,.64)_45%,#050812_100%)]" />
      <div className="commission-halo absolute left-1/2 top-1/2 h-[72vw] max-h-[65rem] w-[72vw] max-w-[65rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10" />
      <div className="grain" />

      <div className="container-x relative text-center">
        <Reveal>
          <Eyebrow>The Great Commission</Eyebrow>
        </Reveal>

        <h2 className="mx-auto mt-9 max-w-6xl text-balance font-display text-[clamp(3.1rem,8vw,7.8rem)] font-bold uppercase leading-[.82] tracking-[-.065em]">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className={word === "nations" ? "mr-[.2em] inline-block text-gradient-gold" : "mr-[.2em] inline-block text-white"}
              initial={reduceMotion ? false : { opacity: 0.18, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <Reveal delay={0.12}>
          <p className="mt-6 text-xs font-bold uppercase tracking-[.32em] text-gold-400">Matthew 28:19</p>
          <p className="mx-auto mt-10 max-w-3xl text-balance text-lg leading-relaxed text-white/68 sm:text-xl">
            The harvest is still before us. We believe our generation can play a part — through prayer, bold witness, united churches, and ordinary believers choosing to live on mission.
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-balance text-lg leading-relaxed text-white/68 sm:text-xl">
            In partnership with Love on The World, this movement exists to help believers reach cities and carry the love of Jesus to the nations.
          </p>

          <a
            href="https://LoveOnTheWorld.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2 border-b border-gold/40 pb-2 text-sm font-bold uppercase tracking-[.16em] text-gold"
          >
            Explore Love on The World
            <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
