/**
 * Display copy for the email journey shown on the signup section.
 * Mirrors lib/email/journey.ts — keep the two in step when letters change.
 */

export const LETTERS = [
  {
    n: 1,
    when: "Right away",
    title: "You already have a role",
    blurb: "What you've joined, and why your part in it genuinely matters.",
  },
  {
    n: 2,
    when: "Day 2",
    title: "One step of faith",
    blurb: "How this started in Hamilton with no budget and no guarantee.",
  },
  {
    n: 3,
    when: "Day 5",
    title: "The fruit is real",
    blurb: "Salvations, baptisms, churches united, outreach still running.",
  },
  {
    n: 4,
    when: "Day 7",
    title: "Three free tools",
    blurb: "Map the people around you, and never lose a follow-up again.",
  },
  {
    n: 5,
    when: "Day 9",
    title: "2.3 billion",
    blurb: "The mission, our goals, and why we're not discouraged.",
  },
  {
    n: 6,
    when: "Day 14",
    title: "Where the work happens",
    blurb: "Our ministry initiatives, city by city, in plain language.",
  },
  {
    n: 7,
    when: "Day 21",
    title: "We all play a role",
    blurb: "Five real ways to step in — pray, go, host, give, share.",
  },
  {
    n: 8,
    when: "Day 24",
    title: "Monday matters",
    blurb: "Why your work, your craft and your home are Kingdom ground.",
  },
  {
    n: 9,
    when: "Day 30",
    title: "Imagine your city",
    blurb: "An open invitation that doesn't expire.",
  },
] as const;