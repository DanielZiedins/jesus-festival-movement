/**
 * Direct answers to the questions people actually search.
 *
 * Written answer-first for AI answer engines and featured snippets: `short` is
 * a self-contained ~40–60 word reply that makes sense quoted with no context,
 * and reads naturally on the page. `detail` expands for a human who stayed.
 *
 * Keep `short` factual and non-promotional — an engine quoting a sales pitch
 * helps nobody, and it's the fastest way to stop being quoted.
 */

export type Answer = {
  id: string;
  q: string;
  /** The quotable answer. Self-contained, no "as mentioned above". */
  short: string;
  /** Follow-on paragraphs. May contain inline HTML links. */
  detail: string[];
  topic: TopicKey;
  /** Internal links surfaced under the answer. */
  links?: { label: string; href: string }[];
};

export type TopicKey = "basics" | "planning" | "practical" | "faith";

export const TOPICS: { key: TopicKey; title: string; blurb: string }[] = [
  {
    key: "basics",
    title: "The Basics",
    blurb: "What a Jesus Festival is, and what this movement exists to do.",
  },
  {
    key: "planning",
    title: "Planning One",
    blurb: "Timelines, teams, budgets and church partnership.",
  },
  {
    key: "practical",
    title: "Practical Logistics",
    blurb: "Permits, insurance, volunteers, safety and follow-up.",
  },
  {
    key: "faith",
    title: "Faith Questions",
    blurb: "The Gospel itself, and questions people bring to a festival.",
  },
];

export const ANSWERS: Answer[] = [
  /* ── Basics ─────────────────────────────────────────────── */
  {
    id: "what-is-a-jesus-festival",
    q: "What is a Jesus Festival?",
    topic: "basics",
    short:
      "A Jesus Festival is a free, public, outdoor Gospel event that brings churches across a city together for worship, testimonies, clear Gospel preaching, prayer ministry and often baptisms. It is evangelistic rather than internal — designed for people who don't attend church — and aims to leave ongoing outreach behind in the city.",
    detail: [
      "The format is deliberately simple: live worship led by musicians from several local churches, real people telling how their lives changed, a clear and unhurried Gospel message, and trained volunteers ready to pray with anyone who responds.",
      "What separates it from a concert or a conference is the goal. The event is a spark, not the point. Every festival is planned backwards from the question <em>what will still be running here in six months?</em>",
    ],
    links: [
      { label: "What actually happens at one", href: "/blog/what-actually-happens-at-a-jesus-festival" },
      { label: "The festival model", href: "/#model" },
    ],
  },
  {
    id: "who-can-start-one",
    q: "Who can start a Jesus Festival?",
    topic: "basics",
    short:
      "Anyone God is calling to it. You do not need to be a pastor, run a large ministry, or have a budget. Most festivals begin with one person praying, a small core team of three to six committed believers, and local church partnership built one conversation at a time.",
    detail: [
      "The first Jesus Festival in Hamilton, Ontario started exactly that way — no platform, no guarantee it would work, and a lot of unanswered questions.",
      "The full 13-step playbook is free and public precisely so that no one has to be credentialed to use it.",
    ],
    links: [{ label: "Open the free playbook", href: "/start-a-festival" }],
  },
  {
    id: "denomination",
    q: "Is the Jesus Festival Movement tied to one denomination?",
    topic: "basics",
    short:
      "No. Jesus Festivals are intentionally interdenominational. Churches partner around the essentials — Jesus Christ crucified and risen, salvation by grace through faith, the authority of Scripture, and the Great Commission — while differing convictions on secondary matters are respected rather than flattened.",
    detail: [
      "In practice we work in three tiers: essentials we agree on, convictions we differ on and don't make the price of admission, and preferences we let go of on purpose.",
      "Most unity dies over preferences — whose sound system, whose logo, who prays first — rather than over doctrine.",
    ],
    links: [
      { label: "Why city-wide unity is worth it", href: "/blog/why-city-wide-church-unity-is-worth-it" },
    ],
  },

  /* ── Planning ───────────────────────────────────────────── */
  {
    id: "how-to-start",
    q: "How do you start a Christian festival in your city?",
    topic: "planning",
    short:
      "Work through four phases: Foundation (pray, gather a core team, clarify the vision), Preparation (build church unity, secure a location, plan the structure, sort permits), the Festival itself (train evangelism volunteers, promote, host), and the Movement (follow up, plant ongoing outreach, help other cities do the same).",
    detail: [
      "That is the shape of our free 13-step playbook. Each step carries a realistic timeline, a practical checklist, and the specific mistake most teams make at that stage.",
      "The order matters more than people expect. Church unity takes far longer than logistics, so it belongs early — everything downstream leans on it.",
    ],
    links: [{ label: "The 13-step playbook", href: "/start-a-festival" }],
  },
  {
    id: "how-far-in-advance",
    q: "How far in advance should you plan an evangelistic event?",
    topic: "planning",
    short:
      "Plan roughly nine to twelve months ahead for a first city-wide festival. Prayer and core team formation start at 9–12 months, church partnership conversations at 5–8 months, venue at 4–6 months, permits and logistics at 2–4 months, and promotion in the final 6–8 weeks.",
    detail: [
      "Teams that compress this usually do so at the cost of church unity, which is the slowest and least compressible part.",
      "A smaller neighbourhood-scale outreach can absolutely be done in three or four months. The timeline scales with how many other organisations you need to bring with you.",
    ],
    links: [{ label: "Timelines for every step", href: "/start-a-festival" }],
  },
  {
    id: "cost",
    q: "How much does it cost to run an outdoor Gospel event?",
    topic: "planning",
    short:
      "Costs vary enormously by scale and country, but the recurring line items are consistent: venue or park fees, municipal permits, public liability insurance, stage and sound hire, power, portable washrooms, first aid, printing and promotion. Many costs can be reduced through donated equipment and church partnership.",
    detail: [
      "We deliberately don't publish a single figure, because quoting a Canadian park-permit price to someone in Lagos or Manila would be actively misleading.",
      "The honest guidance: get three quotes for sound and stage, ask your municipality for the actual permit schedule rather than guessing, and never skip insurance to save money. In many cities, Kingdom-minded business owners are the reason free public Gospel events are financially possible at all.",
    ],
    links: [
      { label: "Budget and logistics — step 7", href: "/start-a-festival" },
      { label: "Kingdom work outside of Sunday", href: "/blog/kingdom-work-outside-of-sunday" },
    ],
  },

  /* ── Practical ──────────────────────────────────────────── */
  {
    id: "permits",
    q: "Do you need a permit for an outdoor church event?",
    topic: "practical",
    short:
      "In most cities, yes. Public parks and streets typically require an event permit, and amplified sound, temporary structures, food service and road closures often need separate approvals. Requirements differ by municipality, so contact your local council directly rather than assuming — and apply earlier than you think you need to.",
    detail: [
      "Ask specifically about noise bylaws and amplification limits. In our experience that is the single most common late surprise, and it can quietly reshape your whole run sheet.",
      "You will usually also be asked for proof of public liability insurance, a site plan, and an emergency or crowd-safety plan. Preparing those in advance makes the application dramatically smoother.",
    ],
    links: [{ label: "Permits and logistics — step 7", href: "/start-a-festival" }],
  },
  {
    id: "volunteers",
    q: "How do you train volunteers to share the Gospel?",
    topic: "practical",
    short:
      "Train for conversations, not scripts. Teach volunteers to ask genuine questions and listen, to tell their own three-minute story clearly, to answer the question actually asked, and to make small warm invitations. Practise in pairs beforehand, and never send anyone into a conversation alone on the day.",
    detail: [
      "Most first-time volunteers have never shared their faith out loud before, and they consistently report the training changed them as much as anyone they later spoke to.",
      "Start people where the fear is lowest: praying for the people they already know. Mapping your own relational world is a far gentler on-ramp than approaching strangers.",
    ],
    links: [
      { label: "Sharing the Gospel with someone you know", href: "/blog/share-the-gospel-with-someone-you-already-know" },
      { label: "Mobilizing evangelism — step 8", href: "/start-a-festival" },
    ],
  },
  {
    id: "follow-up",
    q: "What should you do after an evangelistic event?",
    topic: "practical",
    short:
      "Contact everyone who responded within 72 hours, personally rather than by newsletter. Record testimonies and decisions while they're fresh, hand people warmly to a named person at a local church rather than a list of websites, then launch a regular ongoing outreach within about six weeks so the momentum has somewhere to go.",
    detail: [
      "Assign one specific person to own follow-up <em>before</em> the event, and free them from day-of responsibilities so they aren't exhausted on Monday. If follow-up belongs to 'the team', it belongs to nobody.",
      "This is the step most events skip, and it is the one that decides whether you held an event or started a movement.",
    ],
    links: [
      { label: "What happens after the festival", href: "/blog/what-happens-after-the-festival" },
    ],
  },
  {
    id: "church-unity",
    q: "How do you get churches in a city to work together?",
    topic: "practical",
    short:
      "Go in person rather than emailing, ask what each church is already doing and offer to serve that, be explicit that you are not recruiting their people, and give partners real ownership rather than a logo on a poster. Start these conversations first, because unity takes longer than logistics.",
    detail: [
      "Expect some no's, including a few that sting. Bless them, keep the door open, and don't make it public — the pastor who declines this year has watched how you handled it by the time you ask again.",
      "The relationships built while planning tend to outlast the event itself, which is the quiet compounding return on all the awkward coffees.",
    ],
    links: [
      { label: "Why city-wide unity is worth it", href: "/blog/why-city-wide-church-unity-is-worth-it" },
    ],
  },

  /* ── Faith ──────────────────────────────────────────────── */
  {
    id: "great-commission",
    q: "What is the Great Commission?",
    topic: "faith",
    short:
      "The Great Commission is Jesus' instruction to His followers in Matthew 28:18–20 to go and make disciples of all nations, baptizing them and teaching them to obey everything He commanded. It is given to the whole Church rather than to a professional class, and it is the mandate behind evangelistic work like Jesus Festivals.",
    detail: [
      "Roughly 2.3 billion people today still have essentially no access to the Gospel — not that they have heard and declined, but that they have no realistic way of hearing at all.",
      "We hold that number as a frontier rather than a fear. There are around 2.6 billion Christians alive; the labour force is not small, it is largely dormant.",
    ],
    links: [
      { label: "2.3 billion, and your street", href: "/blog/great-commission-in-numbers" },
      { label: "See the global map", href: "/#map" },
    ],
  },
  {
    id: "how-to-become-a-christian",
    q: "How do I become a Christian?",
    topic: "faith",
    short:
      "Turn from sin, believe that Jesus Christ died for you and rose again, and confess Him as Lord. You can do this in prayer wherever you are — no building, ritual or qualification is required. Then tell another believer, find a local church, read the Gospel of John, and ask about baptism.",
    detail: [
      "A prayer as simple as this is enough: <em>&ldquo;Jesus, I believe You died for me and rose again. Forgive my sins. I turn to You. Be my Lord and Savior. Fill me with Your Spirit. Amen.&rdquo;</em>",
      "Salvation is a gift received by faith, not a reward for cleaning yourself up first. If you prayed that and meant it, you are not on probation — you are family.",
    ],
    links: [{ label: "The Gospel, explained simply", href: "/know-jesus" }],
  },
  {
    id: "is-evangelism-effective",
    q: "Does public evangelism still work?",
    topic: "faith",
    short:
      "Public proclamation works best when it is paired with relationship. Most people come to faith through someone they already know, so the festivals that bear lasting fruit are the ones where believers personally invite friends, family and neighbours — and where trained volunteers follow up afterwards rather than leaving people alone.",
    detail: [
      "A public event on its own tends to produce a spike. A public event surrounded by praying, inviting, following-up believers tends to produce a movement.",
      "That is why we put evangelism training before promotion in the playbook, and follow-up before celebration.",
    ],
    links: [
      { label: "Start with the people you know", href: "/blog/share-the-gospel-with-someone-you-already-know" },
    ],
  },
];

export const ANSWER_BY_ID = new Map(ANSWERS.map((a) => [a.id, a]));

export function answersIn(topic: TopicKey): Answer[] {
  return ANSWERS.filter((a) => a.topic === topic);
}
