"use client";

import { useState } from "react";
import { SITE } from "@/lib/content";

const INTERESTS = [
  "Start a festival in my city",
  "Volunteer / join a team",
  "Partner with the movement",
  "Share a testimony",
  "Something else",
];

export default function CityForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${interest} — ${city || "Jesus Festival Movement"}`
    );
    const body = encodeURIComponent(
      `Hi Jesus Festival Movement team,\n\n` +
        `Name: ${name}\nCity: ${city}\nI want to: ${interest}\n\n` +
        `${message}\n\nSent from JesusFestivalMovement.com`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-gold/50";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-14 max-w-2xl rounded-3xl glass-strong p-6 text-left sm:p-8"
    >
      <p className="text-center font-display text-xl font-bold text-white sm:text-2xl">
        Put Your City <span className="text-gradient-gold">On The Map</span>
      </p>
      <p className="mt-2 text-center text-sm text-white/60">
        Fill this out and it will open an email to us — ready to send.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/50">
            Your Name
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/50">
            Your City &amp; Country
          </span>
          <input
            type="text"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Calgary, Canada"
            className={inputClass}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/50">
          I Want To…
        </span>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={`${inputClass} appearance-none bg-[#0a1030]`}
        >
          {INTERESTS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-white/50">
          Tell Us More
        </span>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What has God put on your heart for your city?"
          className={`${inputClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gradient-to-r from-gold-500 to-ember-500 px-8 py-4 text-base font-bold text-ink shadow-glow-ember transition-transform hover:scale-[1.02]"
      >
        Send It — Take The Step Of Faith
      </button>
    </form>
  );
}
