/**
 * Resend + Supabase plumbing for the movement letters.
 *
 * Storage goes through SECURITY DEFINER RPCs rather than table access, so the
 * deploy only needs the public anon key — there is no service-role secret to
 * leak, and the subscriber list cannot be enumerated through the API.
 *
 * Follows the house pattern from the other Thy Kingdom projects: raw fetch (no
 * SDK), an Idempotency-Key per logical send, Resend tags for filtering, and
 * graceful "not-configured" degradation so a missing key never 500s a signup.
 */

import { renderEmail, SITE_URL } from "./shell";
import { FLOW_BY_KEY, type FlowKey } from "./journey";

const RESEND_API = "https://api.resend.com";

const FROM =
  process.env.RESEND_FROM ||
  "Jesus Festival Movement <hello@jesusfestival.ca>";
const REPLY_TO = process.env.RESEND_REPLY_TO || "Hello@JesusFestival.ca";

export type SendStatus = "sent" | "skipped" | "not-configured" | "failed";

export function unsubUrl(token: string): string {
  return `${SITE_URL}/api/unsubscribe?token=${encodeURIComponent(token)}`;
}

/* ------------------------------------------------------------------ */
/* Supabase RPC                                                        */
/* ------------------------------------------------------------------ */

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "";
const SUPABASE_KEY =
  process.env.SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "";
/** Gates the scheduler-only RPCs. */
export const DRIP_SECRET = process.env.JFM_DRIP_SECRET || "";

export const supabaseConfigured = () => Boolean(SUPABASE_URL && SUPABASE_KEY);

export async function rpc<T = unknown>(
  fn: string,
  args: Record<string, unknown>,
): Promise<T> {
  if (!supabaseConfigured()) throw new Error("Supabase is not configured");
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Supabase ${fn} ${res.status}: ${await res.text()}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : null) as T;
}

/* ------------------------------------------------------------------ */
/* Resend                                                              */
/* ------------------------------------------------------------------ */

export const resendConfigured = () => Boolean(process.env.RESEND_API_KEY);

export async function resendSend(body: unknown, idempotencyKey: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");

  const res = await fetch(`${RESEND_API}/emails`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "JesusFestivalMovement/2026",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  return res.json();
}

/* ------------------------------------------------------------------ */
/* Journey sends                                                       */
/* ------------------------------------------------------------------ */

export type Recipient = {
  email: string;
  full_name?: string | null;
  unsub_token: string;
};

/**
 * Send one journey letter. The (email, flow_key) claim is taken before the
 * provider call, so a subscriber can never receive the same letter twice —
 * even if the cron overlaps a manual run.
 */
export async function sendFlow(
  to: Recipient,
  flowKey: FlowKey,
  opts: { claim?: boolean } = {},
): Promise<SendStatus> {
  const flow = FLOW_BY_KEY.get(flowKey);
  if (!flow) throw new Error(`Unknown flow: ${flowKey}`);
  if (!resendConfigured()) return "not-configured";

  const claim = opts.claim !== false && supabaseConfigured() && Boolean(DRIP_SECRET);

  if (claim) {
    const won = await rpc<boolean>("jfm_claim_send", {
      p_secret: DRIP_SECRET,
      p_email: to.email,
      p_flow: flowKey,
    });
    if (!won) return "skipped";
  }

  const block = flow.build(to.full_name ?? undefined);
  const html = renderEmail(block, unsubUrl(to.unsub_token));

  try {
    await resendSend(
      {
        from: FROM,
        to: [to.email],
        reply_to: REPLY_TO,
        subject: block.subject,
        html,
        headers: {
          "List-Unsubscribe": `<${unsubUrl(to.unsub_token)}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
        tags: [
          { name: "site", value: "jesus_festival_movement" },
          { name: "flow", value: flowKey },
        ],
      },
      `jfm-${flowKey}-${to.email}`,
    );
    return "sent";
  } catch (err) {
    // Release the claim so the next cron run retries this letter.
    if (claim) {
      await rpc("jfm_release_send", {
        p_secret: DRIP_SECRET,
        p_email: to.email,
        p_flow: flowKey,
      }).catch(() => undefined);
    }
    throw err;
  }
}
