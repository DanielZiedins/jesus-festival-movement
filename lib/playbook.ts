/**
 * The full 13-step playbook.
 *
 * The starter guide at /start-a-jesus-festival is the front door — prayerful and
 * encouraging. This is the depth behind it: realistic timelines, practical
 * checklists, and the specific mistake most teams make at each step.
 */

export const STEPS = [
  {
    n: 1,
    title: "Pray & Seek God",
    desc: "Start with prayer, fasting, worship, and asking God for His heart for your city.",
  },
  {
    n: 2,
    title: "Gather A Core Team",
    desc: "Build a faithful team of believers who carry humility, unity, evangelism, and servant hearts.",
  },
  {
    n: 3,
    title: "Clarify The Vision",
    desc: "Decide the purpose, city, date, audience, location, and evangelistic focus.",
  },
  {
    n: 4,
    title: "Build Church & Ministry Unity",
    desc: "Reach out to local pastors, worship leaders, evangelists, ministries, and outreach groups.",
  },
  {
    n: 5,
    title: "Secure A Location",
    desc: "Find a park, outdoor space, church property, public venue, or city-approved gathering place.",
  },
  {
    n: 6,
    title: "Plan The Event Structure",
    desc: "Include worship, Gospel preaching, testimonies, prayer ministry, baptisms if possible, outreach, family-friendly elements, and clear next steps.",
  },
  {
    n: 7,
    title: "Get Permits & Logistics In Place",
    desc: "Handle permits, insurance, sound, stage, volunteers, security, first aid, bathrooms, parking, signage, and city requirements.",
  },
  {
    n: 8,
    title: "Mobilize Evangelism",
    desc: "Train volunteers to share the Gospel before, during, and after the event.",
  },
  {
    n: 9,
    title: "Promote With Excellence",
    desc: "Use social media, churches, flyers, email, local partnerships, video, testimonies, and prayer gatherings.",
  },
  {
    n: 10,
    title: "Host With Love & Excellence",
    desc: "Keep Jesus at the center. Serve people well. Preach the Gospel clearly. Create space for people to respond.",
  },
  {
    n: 11,
    title: "Capture The Fruit",
    desc: "Track testimonies, salvations, baptisms, prayer moments, volunteers, outreach impact, and stories of transformation.",
  },
  {
    n: 12,
    title: "Plant Ongoing Outreach",
    desc: "Do not let the event end when the festival ends. Launch or strengthen ongoing evangelism groups in the city.",
  },
  {
    n: 13,
    title: "Multiply The Movement",
    desc: "Help other cities do the same. Share the model, resources, testimonies, and support.",
  },
] as const;

export const PLAYBOOK_PHASES = [
  {
    phase: "Foundation",
    subtitle: "Before anything is booked or announced",
    steps: [1, 2, 3],
  },
  {
    phase: "Preparation",
    subtitle: "Building the team, the city, and the plan",
    steps: [4, 5, 6, 7],
  },
  {
    phase: "The Festival",
    subtitle: "Mobilizing, promoting, and hosting",
    steps: [8, 9, 10],
  },
  {
    phase: "The Movement",
    subtitle: "What happens after the stage comes down",
    steps: [11, 12, 13],
  },
] as const;

/** Practical detail for each of the 13 STEPS, keyed by step number. */
export const PLAYBOOK_DETAIL: Record<
  number,
  { timing: string; checklist: readonly string[]; watch?: string }
> = {
  1: {
    timing: "Start 9–12 months out — and never stop",
    checklist: [
      "Set aside dedicated time to pray and fast over your city",
      "Ask God specifically: is this His idea, or ours?",
      "Invite a few intercessors to pray with you before you tell anyone else",
      "Write down what you sense God saying — you'll return to it often",
    ],
    watch:
      "Don't skip this to get to logistics. Everything downstream is built on whether God actually called you to it.",
  },
  2: {
    timing: "6–9 months out",
    checklist: [
      "Look for humility, unity, and evangelistic hearts before looking for skills",
      "Keep the core team small at first — 3 to 6 committed people",
      "Assign clear ownership: prayer, logistics, evangelism, worship, communications, follow-up",
      "Meet regularly and pray together every single time",
    ],
    watch:
      "One divisive or self-promoting person on a core team can cost you the whole thing. Choose character first.",
  },
  3: {
    timing: "6–9 months out",
    checklist: [
      "Write one sentence that says exactly what this festival is for",
      "Decide the city, target date, and who you are specifically trying to reach",
      "Choose your evangelistic focus — street outreach, families, youth, a neighbourhood",
      "Define what 'success' looks like beyond attendance numbers",
    ],
    watch:
      "If your team can't repeat the vision from memory, it isn't clear enough yet.",
  },
  4: {
    timing: "5–8 months out",
    checklist: [
      "Meet local pastors in person — not by mass email",
      "Come to serve their church, not to recruit from it",
      "Invite worship leaders, evangelists, ministries, and existing outreach groups",
      "Be clear on the essentials you unite around, and generous on everything else",
      "Give partners real ownership, not just a logo on a poster",
    ],
    watch:
      "Unity takes longer than logistics. Start these conversations earlier than feels necessary.",
  },
  5: {
    timing: "4–6 months out",
    checklist: [
      "Consider parks, outdoor spaces, church properties, and city-approved venues",
      "Check capacity, power, sound restrictions, accessibility, and washrooms",
      "Confirm what's allowed — amplified sound, preaching, baptisms, signage",
      "Have a rain plan before you sign anything",
      "Get the booking in writing",
    ],
    watch:
      "Ask about noise bylaws and amplification limits specifically. It's the most common late surprise.",
  },
  6: {
    timing: "3–5 months out",
    checklist: [
      "Build the run sheet: worship, testimonies, Gospel message, response, prayer ministry",
      "Plan baptisms in advance if possible — water, towels, changes of clothes, counsellors",
      "Include family-friendly elements so parents can actually stay",
      "Decide exactly how people will respond and who will meet them",
      "Keep the Gospel message clear and unhurried — protect that time slot",
    ],
    watch:
      "Don't over-program. Leave room for the Holy Spirit and for people to respond without being rushed.",
  },
  7: {
    timing: "2–4 months out",
    checklist: [
      "Apply for city permits early — they take longer than you expect",
      "Secure event liability insurance",
      "Book sound, stage, and power; confirm a tech contact for the day",
      "Arrange first aid, security or safety volunteers, and an emergency plan",
      "Sort washrooms, parking, accessibility, signage, and waste",
      "Collect volunteer contact info and build a day-of schedule",
    ],
    watch:
      "Call your municipality and ask what they require — don't guess. One missing permit can cancel the day.",
  },
  8: {
    timing: "2–3 months out, and ongoing",
    checklist: [
      "Train volunteers to share the Gospel simply and kindly",
      "Practise real conversations, not scripts",
      "Go out before the festival — invite the city face to face",
      "Prepare follow-up materials and a way to capture contact details with consent",
      "Assign trained people to pray with anyone who responds",
    ],
    watch:
      "Evangelism training is the difference between an event people attended and a city that got reached.",
  },
  9: {
    timing: "6–8 weeks out",
    checklist: [
      "Announce early, then build momentum with testimonies and video",
      "Give partner churches ready-made graphics, dates, and bulletin text",
      "Use flyers and door-to-door in the actual neighbourhood you're reaching",
      "Post consistently on social media and ask partners to share",
      "Host public prayer gatherings in the lead-up",
    ],
    watch:
      "Promote to the lost, not only to the Church. Write your invitations for someone who has never been.",
  },
  10: {
    timing: "The day itself",
    checklist: [
      "Brief every volunteer before doors open — roles, tone, and the plan",
      "Welcome people warmly; make first-time guests feel expected",
      "Preach the Gospel clearly and give a real opportunity to respond",
      "Have prayer teams ready and visible",
      "Serve the venue and the neighbourhood — leave it cleaner than you found it",
    ],
    watch:
      "Excellence matters, but love matters more. People will remember how they were treated.",
  },
  11: {
    timing: "Within 72 hours",
    checklist: [
      "Contact everyone who responded — quickly and personally",
      "Record testimonies, salvations, baptisms, and stories while they're fresh",
      "Collect photos and video from your team",
      "Debrief with your core team: what God did, what you'd change",
      "Thank every volunteer, partner church, and vendor by name",
    ],
    watch:
      "Follow-up delayed is follow-up lost. Have people assigned to this before the festival, not after.",
  },
  12: {
    timing: "Weeks 1–8 after",
    checklist: [
      "Launch or strengthen a regular outreach group in the city",
      "Connect new believers into local churches for real discipleship",
      "Set a recurring rhythm — weekly or monthly, something sustainable",
      "Keep the volunteers who caught fire actively involved",
    ],
    watch:
      "This is the step most festivals skip. It's the one that turns an event into a movement.",
  },
  13: {
    timing: "Ongoing",
    checklist: [
      "Write down what you learned, including the mistakes",
      "Share your model, run sheets, and resources freely with other cities",
      "Mentor the next leader who wants to do this",
      "Keep praying for cities beyond your own",
    ],
    watch:
      "Give it away. The movement grows by generosity, not by protecting what worked.",
  },
};
