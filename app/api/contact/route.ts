import { NextResponse } from "next/server";

function readString(value: unknown, maxLength = 4000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

async function sha256(value: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, "0"),
  ).join("");
}

function nullable(value: string) {
  return value || null;
}

type Inquiry = {
  name: string;
  email: string;
  phone: string;
  location: string;
  organization: string;
  message: string;
  requestFingerprint: string;
  userAgent: string;
};

async function insertDirectly(inquiry: Inquiry) {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const secretKey = process.env.SUPABASE_SECRET_KEY ?? process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !secretKey) return null;

  const endpoint = `${supabaseUrl.replace(/\/$/, "")}/rest/v1/jesus_festival_inquiries`;
  const headers = {
    apikey: secretKey,
    Authorization: `Bearer ${secretKey}`,
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  };

  const recentSince = new Date(Date.now() - 60_000).toISOString();
  const recentUrl = new URL(endpoint);
  recentUrl.searchParams.set("select", "id");
  recentUrl.searchParams.set("request_fingerprint", `eq.${inquiry.requestFingerprint}`);
  recentUrl.searchParams.set("created_at", `gte.${recentSince}`);
  recentUrl.searchParams.set("limit", "1");

  const recentResponse = await fetch(recentUrl, {
    headers,
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  if (!recentResponse.ok) {
    console.error("Supabase inquiry rate-limit lookup failed", recentResponse.status);
    return { ok: false, status: 503 };
  }

  const recent = (await recentResponse.json()) as Array<{ id: string }>;
  if (recent.length > 0) return { ok: false, status: 429 };

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: inquiry.name,
      email: inquiry.email,
      phone: nullable(inquiry.phone),
      location: inquiry.location,
      organization: nullable(inquiry.organization),
      message: inquiry.message,
      source: "jesus-festival-movement",
      request_fingerprint: inquiry.requestFingerprint,
      user_agent: nullable(inquiry.userAgent),
      metadata: { form_version: 2, ingestion: "vercel-server" },
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    console.error("Supabase inquiry insert failed", response.status);
    return { ok: false, status: 503 };
  }

  return { ok: true, status: 201 };
}

async function insertThroughRelay(inquiry: Inquiry) {
  const ingestUrl = process.env.SUPABASE_FORM_INGEST_URL;
  const ingestToken = process.env.SUPABASE_FORM_INGEST_TOKEN;
  if (!ingestUrl || !ingestToken) return null;

  const response = await fetch(ingestUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ingestToken}`,
    },
    body: JSON.stringify(inquiry),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  });

  return { ok: response.ok, status: response.status };
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > 20_000) {
      return NextResponse.json({ error: "Message is too large." }, { status: 413 });
    }

    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    if (origin && host && new URL(origin).host !== host) {
      return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
    }

    const body = (await request.json()) as Record<string, unknown>;

    if (readString(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const name = readString(body.name, 120);
    const email = readString(body.email, 180).toLowerCase();
    const location = readString(body.location, 180);
    const message = readString(body.message, 5000);

    if (!name || !email.includes("@") || !location || message.length < 8) {
      return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    }

    const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const userAgent = readString(request.headers.get("user-agent"), 500);
    const fingerprintSalt =
      process.env.SUPABASE_FORM_INGEST_TOKEN ??
      process.env.SUPABASE_SECRET_KEY ??
      process.env.SUPABASE_SERVICE_ROLE_KEY ??
      "jesus-festival-inquiry";
    const inquiry: Inquiry = {
      name,
      email,
      phone: readString(body.phone, 80),
      location,
      organization: readString(body.organization, 180),
      message,
      requestFingerprint: await sha256(`${fingerprintSalt}|${forwardedFor}|${userAgent}`),
      userAgent,
    };

    const result = (await insertDirectly(inquiry)) ?? (await insertThroughRelay(inquiry));

    if (!result?.ok) {
      if (result?.status === 429) {
        return NextResponse.json(
          { error: "Please wait a moment before sending another message." },
          { status: 429 },
        );
      }
      return NextResponse.json({ error: "Message service unavailable." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form request failed", error instanceof Error ? error.name : "unknown");
    return NextResponse.json({ error: "Message service unavailable." }, { status: 503 });
  }
}
