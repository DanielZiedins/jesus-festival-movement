/**
 * Upcoming Jesus Festivals with dedicated pages.
 *
 * Structured so more events can be added as the movement spreads. Everything
 * here comes off the official promotional material — do not embellish details
 * (times, venues, phone numbers) that people will act on.
 */

export type FestivalEvent = {
  slug: string;
  /** Full name for headings and schema. */
  name: string;
  city: string;
  region: string;
  country: string;
  countryCode: string;
  flag: string;
  venue: string;
  /** ISO dates, first and last day inclusive. */
  startDate: string;
  endDate: string;
  /** Human-readable date range. */
  dateLabel: string;
  lat: number;
  lng: number;
  theme: string;
  scripture: { text: string; ref: string };
  speaker: { name: string; title: string };
  /** Sessions repeated each day. */
  sessions: { label: string; time: string }[];
  days: { date: string; label: string }[];
  /** International start times for the morning session, as published. */
  worldTimes: { flag: string; place: string; time: string }[];
  phones: string[];
  streaming: { label: string; platforms: string[] };
  timezone: string;
};

export const EVENTS: FestivalEvent[] = [
  {
    slug: "akuse",
    name: "The Jesus Festival — Akuse",
    city: "Akuse",
    region: "Eastern Region",
    country: "Ghana",
    countryCode: "GH",
    flag: "🇬🇭",
    venue: "Akuse Taxi Station",
    startDate: "2026-09-03",
    endDate: "2026-09-04",
    dateLabel: "3–4 September 2026",
    lat: 6.1006,
    lng: 0.1264,
    theme: "Jesus Christ Is Lord",
    scripture: {
      text: "…and every tongue confess that Jesus Christ is Lord, to the glory of God the Father.",
      ref: "Philippians 2:11",
    },
    speaker: { name: "Rev. Ezekiel Ashiley", title: "Speaker" },
    sessions: [
      { label: "Morning", time: "9:00 AM" },
      { label: "Evening", time: "6:00 PM" },
    ],
    days: [
      { date: "2026-09-03", label: "Thursday 3 September" },
      { date: "2026-09-04", label: "Friday 4 September" },
    ],
    worldTimes: [
      { flag: "🇬🇭", place: "Ghana", time: "9:00 AM GMT" },
      { flag: "🇳🇬", place: "Nigeria", time: "10:00 AM WAT" },
      { flag: "🇬🇧", place: "United Kingdom", time: "10:00 AM" },
      { flag: "🇿🇦", place: "South Africa", time: "11:00 AM SAST" },
      { flag: "🇰🇪", place: "Kenya", time: "12:00 PM EAT" },
      { flag: "🇺🇸", place: "United States", time: "5:00 AM EST" },
      { flag: "🇨🇦", place: "Canada", time: "5:00 AM EST" },
    ],
    phones: ["+233 548 221 228", "+233 502 319 580"],
    streaming: {
      label: "Jesus Festival Live TV",
      platforms: ["YouTube", "Facebook"],
    },
    timezone: "GMT",
  },
];

export const EVENT_BY_SLUG = new Map(EVENTS.map((e) => [e.slug, e]));

/** Events whose last day has not yet passed, soonest first. */
export function upcomingEvents(now = new Date()): FestivalEvent[] {
  const today = now.toISOString().slice(0, 10);
  return EVENTS.filter((e) => e.endDate >= today).sort((a, b) =>
    a.startDate.localeCompare(b.startDate),
  );
}
