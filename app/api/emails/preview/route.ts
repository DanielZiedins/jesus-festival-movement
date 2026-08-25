/**
 * Browser preview for the movement letters.
 *
 *   /api/emails/preview               → index of all letters
 *   /api/emails/preview?flow=welcome  → that letter, fully rendered
 *   /api/emails/preview?flow=welcome&name=Daniel
 *
 * Read-only and sends nothing. Disabled in production unless
 * EMAIL_PREVIEW_ENABLED is set, so the drafts aren't publicly crawlable.
 */

import { renderEmail } from "@/lib/email/shell";
import { FLOWS, FLOW_BY_KEY, type FlowKey } from "@/lib/email/journey";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function index() {
  const rows = FLOWS.map(
    (f) => `
      <li style="margin:0 0 10px;">
        <a href="?flow=${f.key}" style="color:#f5c451;font-size:16px;">
          Day ${f.dayOffset} — ${f.label}
        </a>
        <div style="color:#8b93b8;font-size:13px;">${f.key}</div>
      </li>`,
  ).join("");

  return new Response(
    `<!doctype html><meta charset="utf-8">
<body style="margin:0;background:#05060f;color:#e8ebf7;font-family:system-ui,sans-serif;padding:48px 24px;">
<div style="max-width:620px;margin:0 auto;">
  <h1 style="font-size:26px;">The Movement Letters</h1>
  <p style="color:#a2abd0;">Preview only — nothing is sent from this page.</p>
  <ul style="list-style:none;padding:0;margin-top:28px;">${rows}</ul>
</div></body>`,
    { headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

export async function GET(request: Request) {
  if (
    process.env.NODE_ENV === "production" &&
    !process.env.EMAIL_PREVIEW_ENABLED
  ) {
    return new Response("Not found", { status: 404 });
  }

  const params = new URL(request.url).searchParams;
  const flowKey = params.get("flow") as FlowKey | null;
  if (!flowKey) return index();

  const flow = FLOW_BY_KEY.get(flowKey);
  if (!flow) return new Response(`Unknown flow: ${flowKey}`, { status: 404 });

  const name = params.get("name") ?? undefined;
  const html = renderEmail(
    flow.build(name),
    "https://example.com/api/unsubscribe?token=preview",
  );

  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
