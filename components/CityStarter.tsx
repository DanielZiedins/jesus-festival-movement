"use client";

import { useEffect, useMemo, useState } from "react";
import Icon from "./ui/Icon";

const STORAGE_KEY = "jesus-festival-city-starter-v1";

const STEPS = [
  ["Pray for your city", "Set aside 15 minutes to ask Jesus for His heart, timing, and direction."],
  ["Name two trusted people", "Invite humble believers who carry the same love for your city."],
  ["Take a prayer walk", "Walk a possible gathering place and pay attention to the people and needs around it."],
  ["Write your first prayer", "Put the vision into a few honest sentences—no polished proposal required."],
  ["Open the conversation", "Send your note to the Jesus Festival Movement team when you are ready."],
] as const;

export default function CityStarter() {
  const [complete, setComplete] = useState<number[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(saved)) setComplete(saved.filter((item): item is number => Number.isInteger(item) && item >= 0 && item < STEPS.length));
    } catch {
      // Local progress is a convenience; the checklist remains usable without storage.
    } finally {
      setReady(true);
    }
  }, []);

  const progress = useMemo(() => Math.round((complete.length / STEPS.length) * 100), [complete.length]);

  function toggle(index: number) {
    setComplete((current) => {
      const next = current.includes(index) ? current.filter((item) => item !== index) : [...current, index].sort((a, b) => a - b);
      try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* Preserve in-memory progress. */ }
      return next;
    });
  }

  return (
    <section className="border-y border-white/10 bg-[#0b1122]/75 py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.28em] text-ember-400">Your seven-day city starter</p>
          <h2 className="mt-5 font-display text-4xl font-bold uppercase leading-[.9] tracking-[-.055em] text-white sm:text-6xl">Small steps. Real momentum.</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">This is your private place to begin. Check off what you have done; your progress stays on this device and is never sent anywhere.</p>
          <div className="mt-8 flex items-center gap-5"><div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/[.08]"><svg viewBox="0 0 36 36" className="absolute inset-1 -rotate-90" aria-hidden="true"><path d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="3"/><path d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="#f4c45c" strokeDasharray={`${progress}, 100`} strokeLinecap="round" strokeWidth="3"/></svg><span className="relative font-display text-sm font-bold text-gold">{ready ? `${progress}%` : "—"}</span></div><div><p className="font-display text-xl font-bold text-white">{complete.length} of {STEPS.length} steps started</p><p className="mt-1 text-sm text-white/46">There is grace to begin exactly where you are.</p></div></div>
        </div>
        <ol className="space-y-3" aria-label="City starter checklist">{STEPS.map(([title, description], index) => { const checked = complete.includes(index); return <li key={title}><button type="button" onClick={() => toggle(index)} aria-pressed={checked} className={`group flex w-full items-start gap-5 rounded-[1.45rem] border p-5 text-left transition sm:p-6 ${checked ? "border-gold/35 bg-gold/[.08]" : "border-white/10 bg-white/[.035] hover:border-white/20 hover:bg-white/[.055]"}`}><span className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition ${checked ? "border-gold bg-gold text-ink" : "border-white/15 text-white/35 group-hover:border-gold/35 group-hover:text-gold"}`}>{checked ? <Icon name="check" className="h-5 w-5" /> : <span className="font-display text-sm font-bold">0{index + 1}</span>}</span><span><span className="font-display text-xl font-bold text-white">{title}</span><span className="mt-1.5 block text-sm leading-relaxed text-white/56">{description}</span></span></button></li>; })}</ol>
      </div>
    </section>
  );
}
