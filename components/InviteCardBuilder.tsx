"use client";

import { useEffect, useId, useState } from "react";
import Icon from "./ui/Icon";

/**
 * A fill-in-the-blanks Christmas invitation. Everything stays in the browser:
 * the details are kept in localStorage (per device, best-effort) so a church
 * admin can come back and reprint, and nothing is ever sent anywhere.
 *
 * On print, globals.css hides the page and lays four copies of the card out
 * on one sheet (`.invite-sheet`) for cutting.
 */
type Fields = {
  church: string;
  event: string;
  when: string;
  where: string;
  note: string;
  web: string;
};

const EMPTY: Fields = {
  church: "",
  event: "Christmas Eve Carols & Candlelight",
  when: "",
  where: "",
  note: "Come as you are. Bring a friend. Everyone is welcome.",
  web: "",
};

const PLACEHOLDER: Fields = {
  church: "Your church name",
  event: "Christmas Eve Carols & Candlelight",
  when: "Thursday, December 24 · 7:00 pm",
  where: "Your address or venue",
  note: "Come as you are. Bring a friend. Everyone is welcome.",
  web: "yourchurch.ca",
};

const KEY = "jfm-invite-card";

const LABELS: { key: keyof Fields; label: string; max: number; area?: boolean }[] = [
  { key: "church", label: "Church or group name", max: 60 },
  { key: "event", label: "What's happening", max: 60 },
  { key: "when", label: "Day and time", max: 50 },
  { key: "where", label: "Where", max: 80 },
  { key: "web", label: "Website or contact (optional)", max: 50 },
  { key: "note", label: "A short welcome", max: 110, area: true },
];

function Card({ f, className = "" }: { f: Fields; className?: string }) {
  const v = (k: keyof Fields) => f[k].trim() || PLACEHOLDER[k];
  return (
    <div className={`invite-card relative overflow-hidden rounded-[1.6rem] border border-gold/30 bg-[radial-gradient(circle_at_80%_0%,rgba(244,196,92,.22),transparent_45%),radial-gradient(circle_at_0%_100%,rgba(233,95,50,.16),transparent_45%),#070b18] p-7 text-center sm:p-9 ${className}`}>
      <div className="star-field absolute inset-0" aria-hidden="true" />
      <div className="relative">
        <p className="text-[0.72rem] font-bold uppercase tracking-[.32em] text-gold-400">You&apos;re invited</p>
        <p className="mt-4 font-display text-[1.7rem] font-bold leading-[1.05] text-white sm:text-[2rem]">{v("event")}</p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[.16em] text-white/70">{v("church")}</p>
        <span className="mx-auto mt-5 block h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden="true" />
        <p className="mt-5 font-semibold text-white">{v("when")}</p>
        <p className="mt-1 text-white/75">{v("where")}</p>
        <p className="mx-auto mt-5 max-w-xs text-sm leading-relaxed text-white/75">{v("note")}</p>
        <p className="mx-auto mt-5 max-w-xs text-[0.78rem] italic leading-relaxed text-white/65">
          &ldquo;I bring you good news of great joy that will be for all the people.&rdquo; Luke 2:10
        </p>
        {(f.web.trim() || !f.church.trim()) && (
          <p className="mt-4 text-[0.78rem] font-bold tracking-[.08em] text-gold-400">{v("web")}</p>
        )}
      </div>
    </div>
  );
}

export default function InviteCardBuilder() {
  const [f, setF] = useState<Fields>(EMPTY);
  const id = useId();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) setF({ ...EMPTY, ...JSON.parse(saved) });
    } catch {
      /* private mode or blocked storage: start fresh */
    }
  }, []);

  const update = (k: keyof Fields, value: string) => {
    const next = { ...f, [k]: value };
    setF(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {
      /* not essential */
    }
  };

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr]">
      <form className="no-print space-y-5 rounded-[1.8rem] border border-white/10 bg-white/[.035] p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
        <h2 className="font-display text-2xl font-bold text-white">Your details</h2>
        {LABELS.map(({ key, label, max, area }) => (
          <div key={key}>
            <label htmlFor={`${id}-${key}`} className="block text-sm font-semibold text-white/80">
              {label}
            </label>
            {area ? (
              <textarea
                id={`${id}-${key}`}
                value={f[key]}
                maxLength={max}
                rows={3}
                placeholder={PLACEHOLDER[key]}
                onChange={(e) => update(key, e.target.value)}
                className="mt-2 w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            ) : (
              <input
                id={`${id}-${key}`}
                type="text"
                value={f[key]}
                maxLength={max}
                placeholder={PLACEHOLDER[key]}
                onChange={(e) => update(key, e.target.value)}
                className="mt-2 w-full rounded-full border border-white/15 bg-black/30 px-5 py-3 text-white placeholder:text-white/40 focus:border-gold/60 focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
            )}
          </div>
        ))}
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button type="button" onClick={() => window.print()} className="button-primary">
            <Icon name="print" className="h-5 w-5" /> Print 4 per page
          </button>
          <button
            type="button"
            onClick={() => {
              setF(EMPTY);
              try {
                localStorage.removeItem(KEY);
              } catch {
                /* ignore */
              }
            }}
            className="button-secondary"
          >
            Start over
          </button>
        </div>
        <p className="text-sm leading-relaxed text-white/60">
          Your details stay on this device — nothing is sent or saved anywhere else.
        </p>
      </form>

      <div className="no-print lg:sticky lg:top-28">
        <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-white/60">Live preview</p>
        <div aria-live="polite">
          <Card f={f} />
        </div>
      </div>

      {/* Print-only sheet: four cards to cut out. */}
      <div className="invite-sheet" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <Card key={i} f={f} />
        ))}
      </div>
    </div>
  );
}
