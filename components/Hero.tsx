"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Icon from "./ui/Icon";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=2000&q=88";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, 110]);
  const copyY = useTransform(scrollY, [0, 900], [0, 48]);

  return (
    <section
      id="top"
      className="hero-shell relative isolate flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,rgba(55,93,172,.25),transparent_34%),radial-gradient(circle_at_18%_14%,rgba(233,95,50,.18),transparent_30%),linear-gradient(135deg,#050812_0%,#070d1d_55%,#050711_100%)]" />
      <div className="hero-rays absolute inset-0" />
      <div className="star-field absolute inset-0" aria-hidden="true" />
      <div className="grain" />

      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-10">
        <motion.div style={reduceMotion ? undefined : { y: copyY }}>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-gold" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-gold-400">
              Jesus Festival Movement
            </span>
          </div>

          <h1 className="mt-7 font-display text-[clamp(3.9rem,10vw,8.5rem)] font-bold uppercase leading-[0.79] tracking-[-0.075em] text-white">
            From one
            <span className="block text-outline-gold">city</span>
            <span className="block pl-[.35em] text-gradient-gold">to the nations</span>
          </h1>

          <p className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-white/70 sm:text-xl">
            Helping cities lift up Jesus, preach the Gospel, and spark movements that last — from Hamilton, Ontario to the nations.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="button-primary group">
              Bring this to my city
              <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#movement" className="button-secondary">
              Discover the movement
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
            <span className="text-white/75">Hamilton</span>
            <span className="h-px w-8 bg-gradient-to-r from-gold to-ember" />
            <span className="text-white/75">Niagara</span>
            <span className="h-px w-8 bg-gradient-to-r from-gold to-ember" />
            <span className="text-gold">The nations</span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[39rem] lg:mr-[-4.5rem]"
          style={reduceMotion ? undefined : { y: imageY }}
        >
          <div className="hero-orbit absolute -inset-10 rounded-full border border-gold/10" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/12 bg-navy-950 shadow-[0_40px_120px_rgba(0,0,0,.6)] sm:aspect-[5/6]">
            <Image
              src={HERO_IMAGE}
              alt="A large festival crowd gathered together"
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 46vw"
              className="scale-[1.04] object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,18,.1)_0%,rgba(4,8,18,.1)_35%,rgba(4,8,18,.94)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(255,221,135,.3),transparent_28%)] mix-blend-screen" />
            <div className="light-beam left-[25%]" />
            <div className="light-beam right-[18%] rotate-[9deg]" />

            <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/75 backdrop-blur-md">
              Worship in the wild
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-gold-400">
                A holy invitation
              </p>
              <p className="mt-3 max-w-md font-display text-3xl font-bold leading-[1.02] text-white sm:text-4xl">
                Gather the Church. Reach the city. Leave a movement.
              </p>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <Icon name="water" className="h-5 w-5 text-sky-300" />
            <span>Baptisms</span>
          </div>
          <div className="floating-card floating-card-two">
            <Icon name="fire" className="h-5 w-5 text-ember-400" />
            <span>Gospel fire</span>
          </div>

          <div className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-gold/25 bg-ink/90 p-4 shadow-2xl backdrop-blur-xl sm:block">
            <p className="font-display text-3xl font-bold text-gold">ONE</p>
            <p className="mt-0.5 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/50">
              name above all
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 overflow-hidden border-y border-white/[0.07] bg-black/20 py-3 backdrop-blur-sm">
        <div className="movement-marquee flex min-w-max gap-8 text-[0.67rem] font-bold uppercase tracking-[0.26em] text-white/45">
          {Array.from({ length: 2 }).map((_, group) => (
            <span key={group} className="flex gap-8" aria-hidden={group === 1}>
              <span>Worship</span><span className="text-gold">✦</span>
              <span>Gospel</span><span className="text-gold">✦</span>
              <span>Baptisms</span><span className="text-gold">✦</span>
              <span>Unity</span><span className="text-gold">✦</span>
              <span>Outreach</span><span className="text-gold">✦</span>
              <span>Discipleship</span><span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
