import { NextResponse } from "next/server";
import {
  rpc,
  sendFlow,
  supabaseConfigured,
  resendConfigured,
} from "@/lib/email/send";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Deliberately permissive — we reject the obviously-broken, not the unusual.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type SubscribeRow = { unsub_token: string; is_new: boolean };

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String(payload.email ?? "").trim().toLowerCase();
  const name = String(payload.name ?? "").trim().slice(0, 120);
  const city = String(payload.city ?? "").trim().slice(0, 120);
  const source = String(payload.source ?? "site").trim().slice(0, 60);
  // Bots fill hidden fields; humans don't.
  const honeypot = String(payload.website ?? "").trim();

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  // Silently accept honeypot hits so bots don't learn they were caught.
  if (honeypot) return NextResponse.json({ ok: true, status: "subscribed" });

  if (!supabaseConfigured()) {
    console.error("[subscribe] Supabase is not configured");
    return NextResponse.json(
      { error: "Signup is temporarily unavailable. Please email us instead." },
      { status: 503 },
    );
  }

  try {
    const rows = await rpc<SubscribeRow[]>("jfm_subscribe", {
      p_email: email,
      p_name: name || null,
      p_city: city || null,
      p_source: source,
    });

    const row = Array.isArray(rows) ? rows[0] : (rows as SubscribeRow | null);
    if (!row?.unsub_token) throw new Error("No subscriber row returned");

    // Fire the welcome letter, but never fail the signup on it — the drip
    // cron picks up anyone whose welcome didn't land.
    let welcome: string = resendConfigured() ? "queued" : "not-configured";
    if (resendConfigured()) {
      try {
        welcome = await sendFlow(
          { email, full_name: name || null, unsub_token: row.unsub_token },
          "welcome",
        );
      } catch (err) {
        console.error("[subscribe] welcome send failed:", err);
        welcome = "failed";
      }
    }

    return NextResponse.json({
      ok: true,
      status: row.is_new ? "subscribed" : "resubscribed",
      welcome,
    });
  } catch (err) {
    console.error("[subscribe] failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
