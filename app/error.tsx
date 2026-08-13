"use client";

import { useEffect } from "react";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Keep diagnostics in the browser console without exposing implementation details to visitors.
    console.error("Page recovery boundary reached", error.digest);
  }, [error.digest]);

  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#050812]">
      <div className="star-field absolute inset-0" />
      <div className="container-x relative z-10 flex w-full flex-col py-8 sm:py-10">
        <BrandMark priority className="w-fit" />
        <section className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[.3em] text-gold">A quick reset</p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[.88] tracking-[-.06em] text-white sm:text-6xl">Let&apos;s get you <span className="text-gradient-gold">back to the movement.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/62">Something unexpected interrupted this page. You can safely try again or return home.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row"><button type="button" onClick={reset} className="button-primary">Try again</button><Link href="/" className="button-secondary">Return home</Link></div>
        </section>
      </div>
    </main>
  );
}
