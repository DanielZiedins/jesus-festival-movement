"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/content";
import Eyebrow from "./ui/Eyebrow";
import Icon from "./ui/Icon";

type FormStatus = "idle" | "sending" | "error";

const fieldClass =
  "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-white/26 focus:border-gold/55 focus:bg-white/[0.065]";

export default function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Unable to send form");
      form.reset();
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="contact-section section-pad relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=84"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050812_0%,rgba(5,8,18,.9)_48%,rgba(5,8,18,.72)_100%),radial-gradient(circle_at_20%_45%,rgba(233,95,50,.2),transparent_28%)]" />
      <div className="grain" />

      <div className="container-x relative">
        <div className="grid items-start gap-14 lg:grid-cols-[.84fr_1.16fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Could your city be next?</Eyebrow>
            <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[.87] tracking-[-.06em] text-white sm:text-6xl lg:text-7xl">
              Do not ignore
              <span className="block text-gradient-gold">the stirring.</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
              It will take prayer, sacrifice, unity, and faith. But when lives are changed, people are baptized, the Gospel is preached, and a city is impacted — it is so worth it.
            </p>
            <p className="mt-5 max-w-xl text-lg font-semibold leading-relaxed text-white">
              Reach out. We will help you take the next step.
            </p>

            <a
              href={`mailto:${SITE.email}`}
              className="mt-8 inline-flex items-center gap-3 text-base font-bold text-gold hover:underline"
            >
              <Icon name="mail" className="h-5 w-5" />
              {SITE.email}
            </a>

            <div className="mt-8 rounded-[1.5rem] border border-gold/20 bg-gradient-to-br from-gold/[.09] to-ember/[.05] p-5 shadow-[0_20px_60px_rgba(0,0,0,.2)] backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold text-ink shadow-glow">
                  <Icon name="download" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[0.66rem] font-bold uppercase tracking-[.22em] text-gold">Included instantly after you submit</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">Basics: How to Start a Jesus Festival</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    Receive a free 10-page field guide covering prayer, permits, your core team, safety, outreach, volunteers, follow-up, and a 90-day head start.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <span className="font-display text-4xl font-bold text-white/15">43°N</span>
              <p className="max-w-xs text-sm leading-relaxed text-white/40">Born in Hamilton. Believing for cities and nations.</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/12 bg-[#0b1122]/90 p-6 shadow-[0_40px_100px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:p-9"
          >
            <div className="mb-8 flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.22em] text-ember-400">Start the conversation</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">Tell us about your city.</h3>
              </div>
              <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-gold/[.08] text-gold sm:flex">
                <Icon name="spark" className="h-5 w-5" />
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-white/72">
                Name <span className="text-gold">*</span>
                <input name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
              </label>
              <label className="text-sm font-semibold text-white/72">
                Email <span className="text-gold">*</span>
                <input name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@example.com" />
              </label>
              <label className="text-sm font-semibold text-white/72">
                Phone
                <input name="phone" type="tel" autoComplete="tel" className={fieldClass} placeholder="Optional" />
              </label>
              <label className="text-sm font-semibold text-white/72">
                City / region / nation <span className="text-gold">*</span>
                <input name="location" required autoComplete="address-level2" className={fieldClass} placeholder="Hamilton, Ontario" />
              </label>
            </div>

            <label className="mt-5 block text-sm font-semibold text-white/72">
              Church or ministry
              <input name="organization" className={fieldClass} placeholder="If applicable" />
            </label>

            <label className="mt-5 block text-sm font-semibold text-white/72">
              What is God putting on your heart? <span className="text-gold">*</span>
              <textarea
                name="message"
                required
                rows={6}
                className={`${fieldClass} resize-y`}
                placeholder="Share the vision, burden, or first step you are carrying..."
              />
            </label>

            <div className="hidden" aria-hidden="true">
              <label>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-gold to-ember px-6 py-4 font-bold text-ink shadow-glow-ember transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-65"
            >
              {status === "sending" ? "Sending..." : "Help me bring Jesus Festival to my city"}
              {status !== "sending" && <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
            </button>

            <div aria-live="polite" className="mt-4 min-h-6 text-center text-sm">
              {status === "error" && (
                <p className="text-rose-200">
                  The form could not send just now. Please email{" "}
                  <a className="font-bold text-gold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                </p>
              )}
              {status === "idle" && <p className="text-white/35">We will only use your details to respond to this conversation.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
