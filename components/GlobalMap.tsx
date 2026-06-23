"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { MAP_MARKERS } from "@/lib/content";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const markerCopy: Record<string, string> = {
  Hamilton: "Where a local step of faith became a movement.",
  Niagara: "The vision expanding across a region.",
  "Your city": "A team praying, gathering, and saying yes.",
  "The nations": "Local expressions multiplying around the world.",
};

const worldPaths = [
  "M72 154 110 104l63-28 72 12 42 42-16 35 31 27-18 33-54-10-28 30-42-8-24-47-49-9-30-47 18-35 44 2 27 31Z",
  "M270 270 317 281l30 42-6 61-31 72-25-28 6-49-31-40-10-41Z",
  "M445 117 480 94l48 8 14 23-24 17-35-7-22 15-31-10Z",
  "M465 174 515 151l44 26 12 58-25 97-46 77-28-63 6-55-35-54Z",
  "M536 102 614 67l108 5 38 25 92 5 74 38-18 44-59 12-28 43-62-3-30-42-48 18-47-35-70 19-44-31 16-33-25-31Z",
  "M791 350 837 322l68 18 18 42-51 38-63-14Z",
  "M406 116 422 103l12 10-12 12Z",
  "M922 237 946 225l14 14-20 19Z",
];

export default function GlobalMap() {
  const [active, setActive] = useState("Hamilton");
  const reduceMotion = useReducedMotion();

  return (
    <section id="map" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(26,55,107,.38),transparent_64%)]" />
      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <Reveal>
            <Eyebrow>A movement without borders</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-5xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl">
              Imagine your city
              <span className="block text-gradient-gold">lit up with the Gospel.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-xl text-lg leading-relaxed text-white/62 lg:ml-auto">
              Hamilton and Niagara are real steps in the story. Every new light begins the same way: someone prays, gathers a few people, and takes a first step of faith.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="map-frame relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[#050a16] p-3 shadow-[0_50px_130px_rgba(0,0,0,.5)] sm:p-6">
            <div className="relative aspect-[1.28/1] overflow-hidden rounded-[1.4rem] border border-white/[0.06] bg-[radial-gradient(circle_at_48%_50%,#0e1d39,#060b17_68%)] sm:aspect-[2/1]">
              <div className="map-grid absolute inset-0" />
              <div className="absolute -inset-1/2 animate-[spin_70s_linear_infinite] rounded-full bg-[conic-gradient(from_180deg,transparent,rgba(244,196,92,.06),transparent_35%)]" />
              <svg
                viewBox="0 0 1000 500"
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 h-full w-full opacity-80"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="land" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#263e63" />
                    <stop offset="1" stopColor="#111f38" />
                  </linearGradient>
                  <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#f4c45c" />
                    <stop offset=".45" stopColor="#e95f32" />
                    <stop offset="1" stopColor="#7dd3fc" />
                  </linearGradient>
                  <filter id="route-glow">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                {worldPaths.map((path) => (
                  <path key={path} d={path} fill="url(#land)" stroke="#54729b" strokeWidth="1" opacity=".72" />
                ))}
                {[
                  "M254 178 Q360 96 490 155",
                  "M254 178 Q460 38 700 235",
                  "M254 178 Q510 450 865 375",
                ].map((path, index) => (
                  <motion.path
                    key={path}
                    d={path}
                    fill="none"
                    stroke="url(#route)"
                    strokeWidth="1.7"
                    strokeDasharray="5 7"
                    opacity=".7"
                    filter="url(#route-glow)"
                    initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.7 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: index * 0.2 }}
                  />
                ))}
              </svg>

              {MAP_MARKERS.map((marker) => (
                <button
                  key={marker.name}
                  type="button"
                  aria-label={`${marker.name}: ${markerCopy[marker.name]}`}
                  aria-pressed={active === marker.name}
                  className="map-pin group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  onMouseEnter={() => setActive(marker.name)}
                  onFocus={() => setActive(marker.name)}
                  onClick={() => setActive(marker.name)}
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="absolute h-full w-full animate-ping-slow rounded-full bg-gold/70" />
                    <span className={`relative h-3 w-3 rounded-full border-2 border-white/60 ${
                      marker.status === "origin" ? "bg-ember" : marker.status === "active" ? "bg-gold" : "bg-sky-300"
                    }`} />
                  </span>
                  <span className="absolute left-1/2 top-7 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-ink/90 px-3 py-1.5 text-[.62rem] font-bold uppercase tracking-[.12em] text-white shadow-xl backdrop-blur-md sm:block">
                    {marker.name}
                  </span>
                </button>
              ))}

              <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-lg sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm sm:p-5">
                <p className="text-[.62rem] font-bold uppercase tracking-[.22em] text-gold">{active}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-base">{markerCopy[active]}</p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-5 px-2 pb-2 pt-5 sm:flex-row sm:items-center sm:px-3">
              <p className="text-sm text-white/48">The map is an invitation, not a limit.</p>
              <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-bold text-gold">
                Put your city on the journey <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
