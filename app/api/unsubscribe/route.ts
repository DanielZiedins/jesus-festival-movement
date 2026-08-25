import { rpc, supabaseConfigured } from "@/lib/email/send";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function page(title: string, body: string, ok = true) {
  return new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title} — Jesus Festival Movement</title></head>
<body style="margin:0;background:#05060f;color:#e8ebf7;font-family:system-ui,-apple-system,Segoe UI,sans-serif;">
<div style="max-width:560px;margin:0 auto;padding:16vh 24px;text-align:center;">
  <div style="display:inline-block;width:44px;height:44px;line-height:44px;background:${ok ? "#f5c451" : "#ff6b35"};color:#05060f;font-size:24px;font-weight:700;border-radius:12px;">&#10013;</div>
  <h1 style="margin:26px 0 14px;font-size:28px;line-height:1.25;">${title}</h1>
  <p style="margin:0 0 28px;font-size:17px;line-height:1.7;color:#a2abd0;">${body}</p>
  <a href="/" style="display:inline-block;padding:14px 30px;background:#f5c451;color:#05060f;font-weight:700;text-decoration:none;border-radius:999px;">Back to the site</a>
</div></body></html>`,
    { status: ok ? 200 : 400, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

async function unsubscribe(token: string) {
  if (!token) return page("Invalid link", "That unsubscribe link is missing its token.", false);
  if (!supabaseConfigured()) {
    return page(
      "Temporarily unavailable",
      "We couldn't process that right now. Please email Hello@JesusFestival.ca and we'll remove you straight away.",
      false,
    );
  }

  try {
    const hit = await rpc<boolean>("jfm_unsubscribe", { p_token: token });

    if (!hit) {
      return page("Link not recognised", "That link may have already been used. If you're still receiving emails, reply to any of them and we'll remove you.", false);
    }

    return page(
      "You're unsubscribed",
      "You won't receive any more emails from the Jesus Festival Movement. No hard feelings at all — we're still praying for you and your city.",
    );
  } catch (err) {
    console.error("[unsubscribe] failed:", err);
    return page("Something went wrong", "Please email Hello@JesusFestival.ca and we'll remove you manually.", false);
  }
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token") ?? "";
  return unsubscribe(token);
}

/** RFC 8058 one-click unsubscribe — inbox providers POST to this. */
export async function POST(request: Request) {
  const token = new URL(request.url).searchParams.get("token") ?? "";
  return unsubscribe(token);
}
