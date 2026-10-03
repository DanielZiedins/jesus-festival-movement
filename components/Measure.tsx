"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect } from "react";
import { NETWORK } from "@/lib/network";
import { track } from "@/lib/track";

const OWN_HOST = "www.jesusfestivalmovement.com";
const NETWORK_HOSTS = new Set(
  NETWORK.map((s) => {
    try {
      return new URL(s.url).host.replace(/^www\./, "").toLowerCase();
    } catch {
      return "";
    }
  }).filter(Boolean),
);
const SOCIAL = /(^|\.)(instagram|facebook|youtube|x|twitter|tiktok)\.com$/;

function classify(host: string): "give" | "network" | "shop" | "social" | "other" {
  const h = host.replace(/^www\./, "").toLowerCase();
  if (h === "e3ministry.ca") return "give";
  if (h.includes("shop") || h.endsWith("myshopify.com")) return "shop";
  if (SOCIAL.test(h)) return "social";
  if (NETWORK_HOSTS.has(h)) return "network";
  return "other";
}

/**
 * Real-visitor measurement.
 *
 * Speed Insights reports field Core Web Vitals from actual visitors — the only
 * performance number that is not distorted by whichever machine runs a lab
 * test. It is already enabled on the Vercel project.
 *
 * Web Analytics renders only when NEXT_PUBLIC_WEB_ANALYTICS=on, because until
 * it is switched on in the Vercel dashboard its script 404s and would log a
 * console error on every page. Flip both and events start flowing.
 *
 * One delegated listener tracks downloads, outbound links and primary CTAs
 * across the whole site, so new links are measured without touching them.
 */
export default function Measure() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      let url: URL;
      try {
        url = new URL(a.href, location.href);
      } catch {
        return;
      }
      if (/\.pdf$/i.test(url.pathname)) {
        track("download", { file: url.pathname.split("/").pop() ?? url.pathname });
        return;
      }
      if (url.protocol.startsWith("http") && url.host !== location.host && url.host !== OWN_HOST) {
        track("outbound", { kind: classify(url.host), host: url.host.replace(/^www\./, "") });
        return;
      }
      if (a.classList.contains("button-primary")) {
        const label = (a.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 48);
        track("cta", { label, page: location.pathname });
      }
    };
    document.addEventListener("click", onClick, { capture: true, passive: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      <SpeedInsights />
      {process.env.NEXT_PUBLIC_WEB_ANALYTICS === "on" && <Analytics />}
    </>
  );
}
