import { EVENT_BY_SLUG } from "@/lib/events";
import { SITE } from "@/lib/content";

export const dynamic = "force-static";

/** RFC 5545 text escaping: backslash, semicolon, comma, newline. */
function esc(s: string) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

/** Fold lines longer than 75 octets with CRLF + space, per the spec. */
function fold(line: string) {
  const out: string[] = [];
  let rest = line;
  while (rest.length > 73) {
    out.push(rest.slice(0, 73));
    rest = " " + rest.slice(73);
  }
  out.push(rest);
  return out.join("\r\n");
}

export function GET() {
  const ev = EVENT_BY_SLUG.get("akuse")!;
  const url = `${SITE.url}/${ev.slug}`;
  // Deterministic stamp (build must be reproducible under force-static).
  const stamp = `${ev.startDate.replace(/-/g, "")}T000000Z`;

  const events = ev.days
    .map((d) => {
      const day = d.date.replace(/-/g, "");
      return [
        "BEGIN:VEVENT",
        `UID:${ev.slug}-${d.date}@jesusfestivalmovement.com`,
        `DTSTAMP:${stamp}`,
        // Ghana runs on GMT year-round, so Z times are also local times.
        `DTSTART:${day}T090000Z`,
        `DTEND:${day}T200000Z`,
        fold(`SUMMARY:${esc(`${ev.name} — ${d.label}`)}`),
        fold(
          `DESCRIPTION:${esc(
            `"${ev.theme}" (${ev.scripture.ref}) with ${ev.speaker.name}. Morning 9:00 AM, evening 6:00 PM. Free — all are welcome. Streaming live as ${ev.streaming.label} on ${ev.streaming.platforms.join(" and ")}. Details: ${url}`,
          )}`,
        ),
        fold(`LOCATION:${esc(`${ev.venue}, ${ev.city}, ${ev.country}`)}`),
        `URL:${url}`,
        "STATUS:CONFIRMED",
        "END:VEVENT",
      ].join("\r\n");
    })
    .join("\r\n");

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Jesus Festival Movement//Festival Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    events,
    "END:VCALENDAR",
    "",
  ].join("\r\n");

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="jesus-festival-akuse.ics"',
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
