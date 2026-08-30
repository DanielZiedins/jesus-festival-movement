/**
 * The Thy Kingdom Network directory.
 *
 * Single source of truth for every sister site, used by the /network hub, the
 * blog's "related" links, and the email letters — so a description only ever
 * has to be written once.
 *
 * `why` explains the relevance to someone who came here for Jesus Festivals.
 * Keep it honest: these are links a reader should actually want to click.
 */

export type NetworkSite = {
  key: string;
  name: string;
  url: string;
  /** One line, sentence case, no trailing period. */
  tagline: string;
  /** Why a Jesus Festival reader would care. */
  why: string;
  category: CategoryKey;
};

export type CategoryKey =
  | "festivals"
  | "tools"
  | "mission"
  | "people"
  | "marketplace";

export const CATEGORIES: {
  key: CategoryKey;
  title: string;
  blurb: string;
}[] = [
  {
    key: "festivals",
    title: "The Festivals",
    blurb:
      "Where the movement gathers — the events themselves and the app that runs them.",
  },
  {
    key: "tools",
    title: "Tools For The Harvest",
    blurb:
      "Free and practical things that help ordinary believers actually reach people.",
  },
  {
    key: "mission",
    title: "Mission & Outreach",
    blurb:
      "Ministries carrying the Gospel locally, globally, and into crisis.",
  },
  {
    key: "people",
    title: "The People & The Vision",
    blurb: "The family and the wider network this all grew out of.",
  },
  {
    key: "marketplace",
    title: "Kingdom In The Marketplace",
    blurb:
      "Business, creativity and work done as worship — because ministry isn't only what happens on a stage.",
  },
];

export const NETWORK: NetworkSite[] = [
  // ── Festivals ──────────────────────────────────────────────
  {
    key: "jfm",
    name: "JesusFestivalMovement.com",
    url: "https://www.jesusfestivalmovement.com",
    tagline: "The global movement and the free 13-step playbook",
    why: "You're here. Everything we've learned about starting a festival, given away free.",
    category: "festivals",
  },
  {
    key: "jf-ca",
    name: "JesusFestival.ca",
    url: "https://JesusFestival.ca",
    tagline: "Jesus Festival Hamilton — where the vision began",
    why: "The original festival. See what an actual event looks like before you plan your own.",
    category: "festivals",
  },
  {
    key: "jf-niagara",
    name: "JesusFestivalNiagara.com",
    url: "https://JesusFestivalNiagara.com",
    tagline: "Jesus Festival Niagara — the expansion",
    why: "Proof the model travels. A second region, the same Gospel.",
    category: "festivals",
  },
  {
    key: "jf-app",
    name: "JesusFestival.app",
    url: "https://JesusFestival.app",
    tagline: "The festival companion app",
    why: "Schedule, map, and next steps in your pocket on the day — and a way to stay connected after.",
    category: "festivals",
  },

  // ── Tools ──────────────────────────────────────────────────
  {
    key: "oikos",
    name: "OikosMap.com",
    url: "https://OikosMap.com",
    tagline: "Map the people God has already placed around you",
    why: "The single most useful free tool we point people to. Most people meet Jesus through someone they already know — this helps you see who that is and pray for them by name.",
    category: "tools",
  },
  {
    key: "kingdom-base",
    name: "KingdomBase.App",
    url: "https://KingdomBase.App",
    tagline: "Evangelism CRM for follow-up that doesn't fall through",
    why: "The hardest part of a festival is what happens on Monday. This is how you keep track of everyone who responded and actually follow up.",
    category: "tools",
  },
  {
    key: "reborn",
    name: "IAmReborn.net",
    url: "https://IAmReborn.net",
    tagline: "The new birth, explained simply",
    why: "A clean link to send someone who is asking real questions and isn't ready for a conversation yet.",
    category: "tools",
  },
  {
    key: "lom",
    name: "LoveOnMission.world",
    url: "https://LoveOnMission.world",
    tagline: "The Great Commission, visualised",
    why: "See the unreached world on a map. It changes how you pray.",
    category: "tools",
  },

  // ── Mission ────────────────────────────────────────────────
  {
    key: "lotw",
    name: "LoveOnTheWorld.com",
    url: "https://LoveOnTheWorld.com",
    tagline: "Evangelism, outreach, discipleship, mobilization",
    why: "Our partner ministry. Much of the evangelism training behind the festivals comes from here.",
    category: "mission",
  },
  {
    key: "loh",
    name: "LoveOnHamilton.com",
    url: "https://LoveOnHamilton.com",
    tagline: "Loving one city, week in and week out",
    why: "What ongoing local outreach actually looks like between festivals. Steal the model for your city.",
    category: "mission",
  },
  {
    key: "seekfirst",
    name: "SeekFirst.World",
    url: "https://www.seekfirst.world",
    tagline: "Seek first the Kingdom — a movement of surrendered lives",
    why: "The heart posture underneath all of this. Read it when your motives need re-centring.",
    category: "mission",
  },
  {
    key: "response",
    name: "KingdomResponse.com",
    url: "https://KingdomResponse.com",
    tagline: "Church-led disaster relief",
    why: "When a city is hit by crisis, the Church should be first on the ground. This is how churches mobilise.",
    category: "mission",
  },

  // ── People ─────────────────────────────────────────────────
  {
    key: "tkn",
    name: "ThyKingdom.net",
    url: "https://ThyKingdom.net",
    tagline: "Thy Kingdom Network — the wider family",
    why: "The network all of these initiatives belong to, and where the team lives.",
    category: "people",
  },
  {
    key: "kd",
    name: "KD-Ziedins.com",
    url: "https://KD-Ziedins.com",
    tagline: "Daniel & Katie — Love Overflow",
    why: "The marriage and family behind the movement. Ministry starts at home.",
    category: "people",
  },
  {
    key: "dz",
    name: "DanielZiedins.com",
    url: "https://DanielZiedins.com",
    tagline: "Writing on faith, evangelism and building",
    why: "Longer-form thinking on why any of this matters.",
    category: "people",
  },

  // ── Marketplace ────────────────────────────────────────────
  {
    key: "lda",
    name: "LionsDenAlliance.com",
    url: "https://LionsDenAlliance.com",
    tagline: "An alliance of Kingdom businesses",
    why: "Festivals cost money. Kingdom-minded business owners are often the reason they happen at all.",
    category: "marketplace",
  },
  {
    key: "six33",
    name: "SIX33Outpost.com",
    url: "https://SIX33Outpost.com",
    tagline: "Apparel for believers who don't blend in",
    why: "Wearing your faith starts more conversations than you'd think.",
    category: "marketplace",
  },
  {
    key: "six33-legends",
    name: "SIX33Legends.com",
    url: "https://SIX33Legends.com",
    tagline: "Story-telling that points somewhere true",
    why: "Imagination is mission territory too. Stories reach people arguments can't.",
    category: "marketplace",
  },
  {
    key: "tasksimply",
    name: "TaskSimply.com",
    url: "https://TaskSimply.com",
    tagline: "Tasks, teams and budgets, kept simple",
    why: "Organising a festival is a logistics problem. Built by our own team because we needed it.",
    category: "marketplace",
  },
];

export const SITE_BY_KEY = new Map(NETWORK.map((s) => [s.key, s]));

export function sitesIn(category: CategoryKey): NetworkSite[] {
  return NETWORK.filter((s) => s.category === category);
}

/** Inline anchor for use inside blog/email prose. */
export function link(key: string, label?: string): string {
  const s = SITE_BY_KEY.get(key);
  if (!s) return label ?? key;
  return `<a href="${s.url}">${label ?? s.name}</a>`;
}
