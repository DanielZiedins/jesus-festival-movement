/**
 * Daily drip. Walks still-subscribed contacts and sends the earliest journey
 * letter whose dayOffset has elapsed and which they haven't received yet.
 *
 * One letter per person per run, so nobody gets a burst even if the cron
 * missed a few days. Double-sends are impossible: jfm_claim_send takes an
 * exclusive claim on (email, flow) before the provider call.
 */

import { NextResponse } from "next/server";
import {
  rpc,
  sendFlow,
  supabaseConfigured,
  resendConfigured,
  DRIP_SECRET,
} from "@/lib/email/send";
import { FLOWS } from "@/lib/email/journey";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

type Due = {
  email: string;
  full_name: string | null;
  unsub_token: string;
  age_days: number;
  sent_flows: string[] | null;
};

function authorized(request: Request): boolean {
  const secret = process.env.CRON_SECRET;
  // Vercel Cron sends Authorization: Bearer <CRON_SECRET>.
  if (!secret) return process.env.NODE_ENV !== "production";
  return request.headers.get("authorization") === `Bearer ${secret}`;
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!supabaseConfigured() || !resendConfigured() || !DRIP_SECRET) {
    return NextResponse.json({ ok: false, reason: "not-configured" });
  }

  const started = Date.now();
  const results = { scanned: 0, sent: 0, skipped: 0, failed: 0 };
  const errors: string[] = [];

  try {
    const due = await rpc<Due[]>("jfm_due_letters", {
      p_secret: DRIP_SECRET,
      p_limit: 400,
    });

    for (const person of due ?? []) {
      results.scanned++;
      const already = new Set(person.sent_flows ?? []);
      const next = FLOWS.find(
        (f) => f.dayOffset <= Number(person.age_days) && !already.has(f.key),
      );
      if (!next) continue;

      try {
        const status = await sendFlow(person, next.key);
        if (status === "sent") results.sent++;
        else results.skipped++;
      } catch (err) {
        results.failed++;
        if (errors.length < 5) {
          errors.push(`${next.key}: ${String(err).slice(0, 160)}`);
        }
      }

      // Stay well inside the function timeout on large lists.
      if (Date.now() - started > 45_000) break;
    }

    return NextResponse.json({ ok: true, ...results, errors });
  } catch (err) {
    console.error("[cron/drip] failed:", err);
    return NextResponse.json(
      { ok: false, error: String(err).slice(0, 300), ...results },
      { status: 500 },
    );
  }
}
