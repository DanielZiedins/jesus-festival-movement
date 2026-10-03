import { track as vercelTrack } from "@vercel/analytics";

/**
 * The actions worth measuring, in one place so the vocabulary stays small and
 * consistent as the site grows. Properties are deliberately non-personal —
 * never an email, name, or search text — matching what /privacy promises.
 */
export type TrackEvent =
  | { name: "signup"; props: { source: string } }
  | { name: "inquiry"; props: Record<string, never> }
  | { name: "download"; props: { file: string } }
  | { name: "outbound"; props: { kind: "give" | "network" | "shop" | "social" | "other"; host: string } }
  | { name: "cta"; props: { label: string; page: string } }
  | { name: "answers_search"; props: { results: "none" | "some" | "many" } };

/**
 * Safe to call anywhere. Until Web Analytics is enabled on the Vercel project
 * the event simply goes nowhere — it never throws and never blocks a click.
 */
export function track<E extends TrackEvent>(name: E["name"], props: E["props"]): void {
  try {
    vercelTrack(name, props as Record<string, string>);
  } catch {
    /* measurement must never break the page */
  }
}
