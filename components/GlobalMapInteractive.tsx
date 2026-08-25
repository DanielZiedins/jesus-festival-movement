"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { MAP_MARKERS } from "@/lib/content";
import { project, VB_W, VIEWBOX } from "@/lib/mapProjection";

const STATUS = {
  active: { color: "#ff6b35", label: "Festival held" },
  upcoming: { color: "#4ade80", label: "Happening next" },
  planning: { color: "#f5c451", label: "Being planned" },
  praying: { color: "#7dd3fc", label: "Being prayed for" },
} as const;

const HAMILTON = MAP_MARKERS[0];
const ORIGIN = project(HAMILTON.lng, HAMILTON.lat);

function arcPath(lng: number, lat: number) {
  const to = project(lng, lat);
  const mx = (ORIGIN.x + to.x) / 2;
  const my = (ORIGIN.y + to.y) / 2;
  const dist = Math.hypot(to.x - ORIGIN.x, to.y - ORIGIN.y);
  const lift = Math.min(220, dist * 0.3);
  return `M${ORIGIN.x.toFixed(1)},${ORIGIN.y.toFixed(1)} Q${mx.toFixed(1)},${(
    my - lift
  ).toFixed(1)} ${to.x.toFixed(1)},${to.y.toFixed(1)}`;
}

/**
 * Interactive layer only. The 138KB of country geometry is rendered by the
 * server component in GlobalMap.tsx and handed in as `countries`, so it never
 * reaches the client bundle.
 */
export default function GlobalMapInteractive({
  countries,
}: {
  countries: ReactNode;
}) {
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const activeMarker = MAP_MARKERS.find((m) => m.name === active) ?? null;

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
            <div className="relative w-full overflow-hidden rounded-2xl bg-[#070b1c]">
              <svg
                viewBox={VIEWBOX}
                className="block h-auto w-full"
                role="img"
                aria-label="World map of Jesus Festival cities"
              >
                <defs>
                  <linearGradient id="jfm-arc" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#f5c451" />
                    <stop offset="100%" stopColor="#7dd3fc" />
                  </linearGradient>
                  <radialGradient id="jfm-origin-glow">
                    <stop offset="0%" stopColor="rgba(255,107,53,0.35)" />
                    <stop offset="100%" stopColor="rgba(255,107,53,0)" />
                  </radialGradient>
                </defs>

                {/* real country geography — rendered on the server */}
                {countries}

                {/* glow radiating from Hamilton */}
                <circle
                  cx={ORIGIN.x}
                  cy={ORIGIN.y}
                  r={90}
                  fill="url(#jfm-origin-glow)"
                />

                {/* animated commission arcs from Hamilton */}
                <g fill="none">
                  {MAP_MARKERS.filter((m) => m.status !== "active").map(
                    (m, i) => (
                      <motion.path
                        key={m.name}
                        d={arcPath(m.lng, m.lat)}
                        stroke="url(#jfm-arc)"
                        strokeWidth={2.2}
                        opacity={
                          active === null || active === m.name ? 0.55 : 0.15
                        }
                        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                          duration: 1.6,
                          delay: 0.3 + i * 0.12,
                          ease: "easeOut",
                        }}
                      />
                    )
                  )}
                </g>

              </svg>

              {/* HTML marker layer — GPU-friendly, avoids repainting the big SVG */}
              {MAP_MARKERS.map((m) => {
                const p = project(m.lng, m.lat);
                const left = (p.x / VB_W) * 100;
                const top = ((p.y - 60) / 800) * 100;
                const c = STATUS[m.status as keyof typeof STATUS].color;
                const isActive = active === m.name;
                return (
                  <button
                    key={m.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 p-2 focus:outline-none"
                    style={{ left: `${left}%`, top: `${top}%` }}
                    onMouseEnter={() => setActive(m.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(m.name)}
                    onBlur={() => setActive(null)}
                    aria-label={`${m.name} — ${m.note}`}
                    tabIndex={-1}
                  >
                    <span className="relative flex h-3 w-3 items-center justify-center">
                      {!reduce && (
                        <span
                          className="absolute inline-flex h-full w-full animate-ping-slow rounded-full"
                          style={{ backgroundColor: c }}
                        />
                      )}
                      <span
                        className={`relative inline-flex rounded-full ring-2 ring-white/25 transition-all ${
                          isActive ? "h-3.5 w-3.5" : "h-2.5 w-2.5"
                        }`}
                        style={{
                          backgroundColor: c,
                          boxShadow: `0 0 10px ${c}`,
                        }}
                      />
                    </span>
                  </button>
                );
              })}

              {/* HTML tooltip layer (crisper than SVG text) */}
              {activeMarker &&
                (() => {
                  const p = project(activeMarker.lng, activeMarker.lat);
                  // convert viewBox coords (x: 0-2000, y: 60-860) to %
                  const left = (p.x / VB_W) * 100;
                  const top = ((p.y - 60) / 800) * 100;
                  return (
                    <div
                      className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg border border-white/10 bg-black/85 px-3 py-1.5 text-xs font-semibold text-white shadow-xl"
                      style={{ left: `${left}%`, top: `calc(${top}% - 14px)` }}
                    >
                      {activeMarker.name}{" "}
                      <span className="text-white/60">
                        · {activeMarker.note}
                      </span>
                    </div>
                  );
                })()}

              {/* Ontario inset — the Golden Horseshoe cluster is tiny at world scale */}
              <div className="absolute bottom-3 left-3 hidden w-[26%] max-w-[240px] overflow-hidden rounded-xl border border-gold/20 bg-[#0a1030]/90 shadow-lg backdrop-blur sm:block">
                <p className="px-3 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-400">
                  Southern Ontario
                </p>
                <svg viewBox="0 0 100 62" className="block w-full">
                  {/* stylized lake ontario shoreline */}
                  <path
                    d="M8,42 Q28,26 55,28 Q80,30 95,18 L100,24 Q82,40 56,38 Q32,36 14,50 Z"
                    fill="#101a4a"
                    opacity={0.9}
                  />
                  {[
                    { name: "Hamilton", x: 24, y: 40, c: STATUS.active.color },
                    { name: "Niagara", x: 52, y: 47, c: STATUS.active.color },
                    { name: "Toronto", x: 55, y: 20, c: STATUS.planning.color },
                  ].map((m) => (
                    <g key={m.name} transform={`translate(${m.x}, ${m.y})`}>
                      <circle
                        r={3}
                        fill={m.c}
                        style={{ filter: `drop-shadow(0 0 4px ${m.c})` }}
                      />
                      <text
                        x={0}
                        y={9.5}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.85)"
                        fontSize={5.5}
                        fontWeight={700}
                      >
                        {m.name}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
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
                    style={{
                      backgroundColor: v.color,
                      boxShadow: `0 0 8px ${v.color}`,
                    }}
                  />
                  {v.label}
                </span>
              ))}
            </div>

            {/* accessible city list (also the touch-friendly index) */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {MAP_MARKERS.map((m) => {
                const c = STATUS[m.status as keyof typeof STATUS].color;
                return (
                  <button
                    key={m.name}
                    onMouseEnter={() => setActive(m.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(m.name)}
                    onBlur={() => setActive(null)}
                    onClick={() =>
                      setActive((a) => (a === m.name ? null : m.name))
                    }
                    aria-label={`${m.name} — ${m.note}`}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                      active === m.name
                        ? "border-gold/60 bg-gold/10 text-gold"
                        : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white"
                    }`}
                  >
                    <span
                      className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle"
                      style={{ backgroundColor: c }}
                    />
                    {m.name}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-base text-white/60">
            Is your city on God&apos;s heart?{" "}
            <a
              href="#contact"
              className="font-semibold text-gold hover:underline"
            >
              Let&apos;s put it on the map.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
