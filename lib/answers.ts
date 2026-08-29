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

export type TopicKey = "basics" | "attending" | "planning" | "practical" | "faith";

export const TOPICS: { key: TopicKey; title: string; blurb: string }[] = [
  {
    key: "basics",
    title: "The Basics",
    blurb: "What a Jesus Festival is, and what this movement exists to do.",
  },
  {
    key: "attending",
    title: "Coming To A Festival",
    blurb: "For anyone thinking of turning up — including if you're not religious.",
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
      { label: "The festival", href: "/#festival" },
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
    links: [{ label: "Open the free playbook", href: "/start-a-jesus-festival/playbook" }],
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
    links: [{ label: "The 13-step playbook", href: "/start-a-jesus-festival/playbook" }],
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
    links: [{ label: "Timelines for every step", href: "/start-a-jesus-festival/playbook" }],
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
      { label: "Budget and logistics — step 7", href: "/start-a-jesus-festival/playbook" },
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
    links: [{ label: "Permits and logistics — step 7", href: "/start-a-jesus-festival/playbook" }],
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
      { label: "Mobilizing evangelism — step 8", href: "/start-a-jesus-festival/playbook" },
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
  /* ── Attending ──────────────────────────────────────────── */
  {
    id: "do-i-have-to-be-a-christian",
    q: "Do I have to be a Christian to come?",
    topic: "attending",
    short:
      "No. Jesus Festivals are free, public and open to everyone, including people who don't believe, aren't sure, or have never been to a church. You can stand at the back with your arms folded, listen, and leave whenever you like. Nothing is asked of you.",
    detail: [
      "A good number of the people who now serve on our teams came the first time out of curiosity, scepticism, or because a friend dragged them along.",
      "There is no sign-up, no collection, and nobody will single you out.",
    ],
    links: [
      { label: "What actually happens at one", href: "/blog/what-actually-happens-at-a-jesus-festival" },
    ],
  },
  {
    id: "bring-children",
    q: "Can I bring my children to a Jesus Festival?",
    topic: "attending",
    short:
      "Yes — festivals are planned to be family-friendly, with elements running alongside the main programme so parents can actually stay and listen. They're outdoor events, so bring water, sun protection and something to sit on, and check the specific festival page for that venue's facilities.",
    detail: [
      "Because it's outdoors and public, children stay your responsibility throughout — there's no drop-off childcare.",
      "Practical details like washrooms, parking and accessibility vary by venue, so the page for each individual festival is the place to check.",
    ],
    links: [{ label: "Jesus Festival Akuse — details", href: "/akuse" }],
  },
  {
    id: "will-i-be-pressured",
    q: "Will I be pressured into anything?",
    topic: "attending",
    short:
      "No. There is no collection, no sign-up sheet, and no pressure to sing, raise a hand or come forward. If there's an invitation to respond, taking it is entirely your choice — and choosing not to is completely fine. You can leave at any point without anyone stopping you.",
    detail: [
      "We take this seriously, because good news that has to be forced on someone isn't being treated as good news.",
      "If you do want to talk or be prayed for, there are trained people ready — but you have to come to them.",
    ],
  },
  {
    id: "cant-attend-in-person",
    q: "What if I can't be there in person?",
    topic: "attending",
    short:
      "Most festivals are streamed live so you can watch from anywhere. Each festival's page lists the platforms and the start times converted into several time zones. You can also read the Gospel message and pray at any time without waiting for an event.",
    detail: [
      "If distance or health keeps you away, the invitation is exactly the same — you don't need to be in a field to meet Jesus.",
    ],
    links: [
      { label: "Watch Akuse live", href: "/akuse" },
      { label: "The Gospel, explained simply", href: "/know-jesus" },
    ],
  },

  /* ── More practical ─────────────────────────────────────── */
  {
    id: "insurance",
    q: "Do you need insurance for a church event?",
    topic: "practical",
    short:
      "Yes — public liability insurance is essential for any public gathering, and most municipalities require proof of it before granting a permit. Check whether your church's existing policy covers off-site events; many don't, and a separate event policy is needed. Never skip this to save money.",
    detail: [
      "Ask your insurer specifically about amplified sound, temporary structures, water baptisms and volunteer stewards, since those are the items commonly excluded.",
      "Get the certificate in writing well before the permit deadline — it is frequently the document that holds an application up.",
    ],
    links: [{ label: "Permits and logistics — step 7", href: "/start-a-jesus-festival/playbook" }],
  },
  {
    id: "how-many-volunteers",
    q: "How many volunteers do you need for an outreach event?",
    topic: "practical",
    short:
      "It depends on scale, but plan roles rather than headcount: setup and teardown, welcome, sound and stage, prayer ministry, evangelism conversations, kids' activities, first aid, stewarding, parking, and follow-up. Assign a named lead to each, and recruit to fill the roles you've actually defined.",
    detail: [
      "Teams that recruit a vague number of \"helpers\" end up with people standing around while critical roles go uncovered.",
      "Roster in shifts so nobody serves for eight hours straight, and brief everyone before doors open.",
    ],
    links: [{ label: "Mobilizing evangelism — step 8", href: "/start-a-jesus-festival/playbook" }],
  },
  {
    id: "rain-plan",
    q: "What do you do if it rains on the day?",
    topic: "practical",
    short:
      "Decide your rain plan before you book anything, and write down who makes the call and by when. Options include a covered stage and marquees, a partner church building on standby, or a pre-announced backup date. Electrical safety around sound and power is the non-negotiable part.",
    detail: [
      "Communicate the decision through the same channels you promoted on, and tell your volunteers before you tell the public.",
      "Most outdoor events proceed in light rain. It's wind and lightning that stop them, so agree those thresholds with your sound supplier in advance.",
    ],
  },
  {
    id: "promote-with-no-budget",
    q: "How do you promote an event with little or no budget?",
    topic: "practical",
    short:
      "Personal invitation beats paid advertising for this kind of event. Equip partner churches with ready-made graphics and bulletin text, go door to door in the actual neighbourhood, share testimonies and short video on social media, and hold public prayer gatherings in the lead-up that people can join.",
    detail: [
      "Write your invitations for someone who has never been to a church rather than for people already inside one. Plain language, a clear time and place, and an explicit \"everyone is welcome\".",
      "Local radio, community noticeboards and shop windows are often free and still remarkably effective.",
    ],
    links: [{ label: "Promotion — step 9", href: "/start-a-jesus-festival/playbook" }],
  },

  /* ── More faith ─────────────────────────────────────────── */
  {
    id: "isnt-this-pushy",
    q: "Isn't public evangelism just pushy?",
    topic: "faith",
    short:
      "It can be, and when it is, it's wrong. The distinction is between announcing something publicly and coercing someone privately. A festival makes an open invitation in a public space that people are free to walk past, listen to, or ignore — with no pressure, no collection, and no one singled out.",
    detail: [
      "Christians have a genuinely good reason to speak: we believe the news is true and that it matters. What we don't have is a licence to manipulate, shame or corner anyone.",
      "If you've experienced pushy evangelism, we're sorry. That isn't what this is meant to be, and where we've got it wrong we'd want to know.",
    ],
  },
  {
    id: "afraid-to-share-faith",
    q: "I'm afraid to share my faith. Where do I start?",
    topic: "faith",
    short:
      "Start with prayer rather than conversation. Write down the people already around you, pick three, and pray for them daily by name for a month before saying anything evangelistic. When a conversation does open, be interested in them, answer the question actually asked, and make small invitations rather than large ones.",
    detail: [
      "Nearly every volunteer we've trained felt exactly the same before their first outreach, and most say the experience changed them as much as anyone they spoke to.",
      "You are not required to win an argument. You are only telling someone what happened to you and why it matters.",
    ],
    links: [
      { label: "Sharing the Gospel with someone you know", href: "/blog/share-the-gospel-with-someone-you-already-know" },
    ],
  },
  {
    id: "what-is-baptism",
    q: "What is baptism, and do I need to be baptized?",
    topic: "faith",
    short:
      "Baptism is being immersed in water as a public declaration that you have died to your old life and been raised to new life in Jesus. It doesn't save you — faith in Christ does — but Jesus commanded it of His followers, and it's the normal first step of obedience after believing.",
    detail: [
      "Festivals sometimes include baptisms on the day where a venue allows it. If not, any local church will gladly help you.",
      "You don't need to have your life sorted out first. Baptism marks a beginning, not a graduation.",
    ],
    links: [{ label: "How to follow Jesus", href: "/know-jesus" }],
  },

];

export const ANSWER_BY_ID = new Map(ANSWERS.map((a) => [a.id, a]));

export function answersIn(topic: TopicKey): Answer[] {
  return ANSWERS.filter((a) => a.topic === topic);
}
