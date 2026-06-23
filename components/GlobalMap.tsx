"use client";

import { useState } from "react";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { MAP_MARKERS } from "@/lib/content";

const STATUS = {
  active: { color: "#ff6b35", label: "Festival held" },
  planning: { color: "#f5c451", label: "Being planned" },
  praying: { color: "#7dd3fc", label: "Being prayed for" },
} as const;

// Soft "continent" glows on an equirectangular field (x%, y%, size)
const CONTINENTS = [
  { x: 22, y: 35, s: 16 }, // N. America
  { x: 33, y: 66, s: 12 }, // S. America
  { x: 49, y: 30, s: 10 }, // Europe
  { x: 53, y: 58, s: 17 }, // Africa
  { x: 68, y: 42, s: 20 }, // Asia
  { x: 84, y: 74, s: 9 }, // Oceania
];

export default function GlobalMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="map" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(16,26,74,0.5),transparent_70%)]" />
      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>The Global Map</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">
              From One City To{" "}
              <span className="text-gradient-gold">The Nations</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Cities where festivals have happened, are being planned, or are
              being prayed for. Imagine your city on this map.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-14 overflow-hidden rounded-3xl glass-strong p-4 sm:p-8">
            {/* Map field */}
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-[#070b1c]">
              {/* lat/long grid */}
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(125,211,252,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.12) 1px, transparent 1px)",
                  backgroundSize: "5% 10%",
                }}
              />
              {/* continent glows */}
              {CONTINENTS.map((c, i) => (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    left: `${c.x}%`,
                    top: `${c.y}%`,
                    width: `${c.s}%`,
                    height: `${c.s * 1.4}%`,
                    background:
                      "radial-gradient(circle, rgba(99,140,255,0.25), transparent 70%)",
                    filter: "blur(8px)",
                  }}
                />
              ))}

              {/* connection arcs from Hamilton to others */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 50"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {MAP_MARKERS.filter((m) => m.status !== "active").map((m, i) => {
                  const ox = 25.5 / 2; // hamilton x in 0-50 space (x%/2)
                  const oy = 36 / 2;
                  const tx = m.x / 2;
                  const ty = m.y / 2;
                  const mx = (ox + tx) / 2;
                  const my = Math.min(oy, ty) - 6;
                  return (
                    <path
                      key={m.name}
                      d={`M ${ox} ${oy} Q ${mx} ${my} ${tx} ${ty}`}
                      fill="none"
                      stroke="url(#arc)"
                      strokeWidth="0.2"
                      opacity={active === m.name ? 0.9 : 0.25}
                    />
                  );
                })}
                <defs>
                  <linearGradient id="arc" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f5c451" />
                    <stop offset="100%" stopColor="#7dd3fc" />
                  </linearGradient>
                </defs>
              </svg>

              {/* markers */}
              {MAP_MARKERS.map((m) => {
                const c = STATUS[m.status as keyof typeof STATUS].color;
                return (
                  <button
                    key={m.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                    style={{ left: `${m.x}%`, top: `${m.y}%` }}
                    onMouseEnter={() => setActive(m.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(m.name)}
                    onBlur={() => setActive(null)}
                    aria-label={`${m.name} — ${m.note}`}
                  >
                    <span className="relative flex h-3 w-3 items-center justify-center">
                      <span
                        className="absolute inline-flex h-full w-full animate-ping-slow rounded-full"
                        style={{ backgroundColor: c }}
                      />
                      <span
                        className="relative inline-flex h-2.5 w-2.5 rounded-full ring-2 ring-white/20"
                        style={{
                          backgroundColor: c,
                          boxShadow: `0 0 12px ${c}`,
                        }}
                      />
                    </span>
                    <span
                      className={`pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[11px] font-semibold text-white transition-opacity ${
                        active === m.name ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {m.name} · {m.note}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* legend */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {Object.entries(STATUS).map(([k, v]) => (
                <span
                  key={k}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: v.color, boxShadow: `0 0 8px ${v.color}` }}
                  />
                  {v.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-base text-white/60">
            Is your city on God&apos;s heart?{" "}
            <a href="#contact" className="font-semibold text-gold hover:underline">
              Let&apos;s put it on the map.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
