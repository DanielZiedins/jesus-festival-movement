"use client";

import { useState } from "react";
import Icon from "./ui/Icon";

type Variant = "panel" | "inline";

type Props = {
  /** Where this form lives — used for list attribution. */
  source: string;
  variant?: Variant;
  /** Ask for a first name as well as the email. */
  withName?: boolean;
  cta?: string;
};

type State = "idle" | "loading" | "done" | "error";

export default function JoinForm({
  source,
  variant = "panel",
  withName = false,
  cta = "Join The Movement",
}: Props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading") return;
    setState("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source, website }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setState("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setState("done");
    } catch {
      setState("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  /* ---------------- success ---------------- */
  if (state === "done") {
    return (
      <div
        className="hero-in rounded-2xl border border-gold/30 bg-gold/[0.07] p-7 text-center"
        role="status"
        aria-live="polite"
      >
        <span
          className="hero-in mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-ember-500 text-ink shadow-glow-ember"
          style={{ "--reveal-d": "0.1s" } as React.CSSProperties}
        >
          <Icon name="check" className="h-7 w-7" strokeWidth={2.6} />
        </span>
        <p className="mt-5 font-display text-2xl font-bold text-white">
          You&apos;re in.
        </p>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-white/75">
          Your first letter is on its way — check your inbox in the next minute
          or two. Welcome to the movement.
        </p>
        <p className="mt-4 text-sm text-gold-400">
          And today, would you pray for your city by name?
        </p>
      </div>
    );
  }

  /* ---------------- form ---------------- */
  const inputBase =
    "w-full rounded-xl border border-white/12 bg-white/[0.05] px-4 py-3.5 text-white placeholder:text-white/55 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.07]";

  return (
    <form onSubmit={onSubmit} className="w-full">
      {/* honeypot — hidden from humans, catnip for bots */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      <div
        className={
          variant === "inline"
            ? "flex flex-col gap-3 sm:flex-row"
            : "flex flex-col gap-3"
        }
      >
        {withName && (
          <label className="sr-only" htmlFor={`${source}-name`}>
            First name
          </label>
        )}
        {withName && (
          <input
            id={`${source}-name`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First name"
            autoComplete="given-name"
            className={inputBase}
          />
        )}

        <label className="sr-only" htmlFor={`${source}-email`}>
          Email address
        </label>
        <input
          id={`${source}-email`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          autoComplete="email"
          inputMode="email"
          className={inputBase}
        />

        <button
          type="submit"
          disabled={state === "loading"}
          className="group relative flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-gradient-to-r from-gold-500 to-ember-500 px-7 py-3.5 font-bold text-ink shadow-glow-ember transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "loading" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
              Joining…
            </>
          ) : (
            <>
              {cta}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </div>

      {state === "error" && (
        <p
          className="hero-in mt-3 text-sm font-medium text-ember-400"
          role="alert"
        >
          {message}
        </p>
      )}

      <p className="mt-3.5 text-xs leading-relaxed text-white/55">
        Nine letters, then occasional updates. No spam, ever. Unsubscribe in
        one click.
      </p>
    </form>
  );
}
