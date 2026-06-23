import { createClient } from "@supabase/supabase-js";

const EXPECTED_TOKEN_HASH =
  "02283532cb11f5fec0af8ab9dff88541bd1bc2f794da9d5daef5b2058660325d";
const MAX_BODY_BYTES = 20_000;

type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  location?: unknown;
  organization?: unknown;
  message?: unknown;
  requestFingerprint?: unknown;
  userAgent?: unknown;
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function readString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function nullable(value: string) {
  return value || null;
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

function constantTimeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return mismatch === 0;
}

function getAdminKey() {
  const secretKeys = Deno.env.get("SUPABASE_SECRET_KEYS");
  if (secretKeys) {
    try {
      const parsed = JSON.parse(secretKeys) as Record<string, string>;
      if (parsed.default) return parsed.default;
    } catch {
      // Fall back to the legacy key while projects complete key migration.
    }
  }
  return Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
}

Deno.serve(async (request) => {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed." }, 405);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ error: "Request too large." }, 413);
  }

  const authorization = request.headers.get("authorization") ?? "";
  const token = authorization.startsWith("Bearer ")
    ? authorization.slice(7)
    : "";
  const tokenHash = token ? await sha256(token) : "";

  if (!tokenHash || !constantTimeEqual(tokenHash, EXPECTED_TOKEN_HASH)) {
    return json({ error: "Unauthorized." }, 401);
  }

  let payload: InquiryPayload;
  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return json({ error: "Invalid JSON." }, 400);
  }

  const name = readString(payload.name, 120);
  const email = readString(payload.email, 180).toLowerCase();
  const phone = readString(payload.phone, 80);
  const location = readString(payload.location, 180);
  const organization = readString(payload.organization, 180);
  const message = readString(payload.message, 5000);
  const requestFingerprint = readString(payload.requestFingerprint, 64);
  const userAgent = readString(payload.userAgent, 500);

  if (
    !name ||
    !email.includes("@") ||
    !location ||
    message.length < 8 ||
    (requestFingerprint && !/^[a-f0-9]{64}$/.test(requestFingerprint))
  ) {
    return json({ error: "Invalid submission." }, 400);
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const adminKey = getAdminKey();
  if (!supabaseUrl || !adminKey) {
    return json({ error: "Service configuration unavailable." }, 503);
  }

  const supabase = createClient(supabaseUrl, adminKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  if (requestFingerprint) {
    const oneMinuteAgo = new Date(Date.now() - 60_000).toISOString();
    const { data: recent, error: recentError } = await supabase
      .from("jesus_festival_inquiries")
      .select("id")
      .eq("request_fingerprint", requestFingerprint)
      .gte("created_at", oneMinuteAgo)
      .limit(1);

    if (recentError) {
      console.error("Inquiry rate-limit lookup failed", recentError.code);
      return json({ error: "Database unavailable." }, 503);
    }

    if (recent && recent.length > 0) {
      return json({ error: "Please wait before sending another message." }, 429);
    }
  }

  const { data, error } = await supabase
    .from("jesus_festival_inquiries")
    .insert({
      name,
      email,
      phone: nullable(phone),
      location,
      organization: nullable(organization),
      message,
      source: "jesus-festival-movement",
      request_fingerprint: nullable(requestFingerprint),
      user_agent: nullable(userAgent),
      metadata: { form_version: 1 },
    })
    .select("id, created_at")
    .single();

  if (error) {
    console.error("Inquiry insert failed", error.code);
    return json({ error: "Database unavailable." }, 503);
  }

  return json({ ok: true, id: data.id, createdAt: data.created_at }, 201);
});
