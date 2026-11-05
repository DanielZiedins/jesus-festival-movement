/**
 * Seasonal resources, shown only while they're timely. Both the Journal and
 * the homepage revalidate daily, so these appear and retire on their own.
 */
export const CHRISTMAS_SEASON = [
  { label: "Free printable", title: "Advent prayer guide for your city", href: "/resources/advent-prayer-guide" },
  { label: "The season", title: "What is Advent?", href: "/blog/what-is-advent" },
  { label: "Outreach", title: "Christmas outreach ideas for churches", href: "/blog/christmas-outreach-ideas-for-churches" },
  { label: "Invite", title: "How to invite someone to church at Christmas", href: "/blog/how-to-invite-someone-to-church-at-christmas" },
] as const;

/** November 1 to December 25. */
export function inChristmasSeason(now = new Date()): boolean {
  const m = now.getUTCMonth();
  return m === 10 || (m === 11 && now.getUTCDate() <= 25);
}
