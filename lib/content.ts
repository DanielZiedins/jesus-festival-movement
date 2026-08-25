export const SITE = {
  name: "Jesus Festival Movement",
  shortName: "Jesus Festival",
  url: "https://www.jesusfestivalmovement.com",
  email: "Hello@JesusFestival.ca",
  tagline:
    "From Hamilton, Ontario to the nations — raising up evangelistic festivals that become lasting Gospel movements.",
  description:
    "Jesus Festival Movement is a global evangelistic movement that began in Hamilton, Ontario, Canada. We raise up Gospel festivals that gather the Church, lift up Jesus, reach the lost, disciple believers, and plant ongoing outreach in cities and nations.",
};

export const STATS = [
  {
    value: "8.3B",
    label: "World Population",
    detail: "Every person bearing the image of God.",
  },
  {
    value: "2.6B",
    label: "Christians Worldwide",
    detail: "An awakening Church across the nations.",
  },
  {
    value: "2.3B",
    label: "Without Gospel Access",
    detail: "Still waiting to hear the name of Jesus.",
  },
] as const;

export const VISION_PILLARS = [
  { word: "Gather", desc: "Unite the Church across a city." },
  { word: "Worship", desc: "Lift up the name of Jesus publicly." },
  { word: "Preach Jesus", desc: "Proclaim the Gospel clearly and boldly." },
  { word: "Reach the Lost", desc: "Go out with the love of Christ." },
  { word: "Disciple Believers", desc: "Establish people in their faith." },
  { word: "Plant Ongoing Outreach", desc: "Keep going after the stage comes down." },
  { word: "Multiply Movements", desc: "Send the vision to other cities and nations." },
] as const;

export const MODEL = [
  {
    title: "Worship",
    desc: "Voices united, lifting the name of Jesus over a city.",
    icon: "music",
  },
  {
    title: "Gospel Preaching",
    desc: "The clear, bold proclamation of who Jesus is and why He came.",
    icon: "fire",
  },
  {
    title: "Evangelism",
    desc: "Trained believers sharing the Gospel before, during, and after.",
    icon: "megaphone",
  },
  {
    title: "Baptisms",
    desc: "Public declarations of new life in Christ, celebrated together.",
    icon: "water",
  },
  {
    title: "Unity",
    desc: "Churches, ministries, and leaders standing shoulder to shoulder.",
    icon: "hands",
  },
  {
    title: "Discipleship",
    desc: "Helping new believers take root and grow.",
    icon: "sprout",
  },
  {
    title: "Outreach",
    desc: "Ongoing groups that keep going out long after the event.",
    icon: "globe",
  },
  {
    title: "Prayer",
    desc: "Covering everything in prayer, fasting, and dependence on God.",
    icon: "pray",
  },
] as const;

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

/** Expanded playbook: the 13 steps grouped into phases, with practical checklists. */
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

export const FESTIVALS = [
  {
    name: "Jesus Festival: Hamilton",
    city: "Hamilton, Ontario",
    url: "https://JesusFestival.ca",
    display: "JesusFestival.ca",
    blurb:
      "Where the vision began. In Hamilton, Ontario we saw God move powerfully through worship, evangelism, unity, baptisms, outreach, and lives changed forever.",
    tag: "The Beginning",
  },
  {
    name: "Jesus Festival: Niagara",
    city: "Niagara, Ontario",
    url: "https://JesusFestivalNiagara.com",
    display: "JesusFestivalNiagara.com",
    blurb:
      "The vision expanded into Niagara — another step of faith to see whole regions impacted by Jesus and the Gospel carried forward.",
    tag: "The Expansion",
  },
  {
    name: "Jesus Festival: Akuse",
    city: "Akuse, Ghana 🇬🇭",
    url: "/akuse",
    display: "Full details & directions",
    blurb:
      "From Ontario to West Africa. Two days of worship, the Word and prayer at Akuse Taxi Station with Rev. Ezekiel Ashiley — 3–4 September 2026, streaming live worldwide.",
    tag: "Happening Next",
  },
] as const;

export const TESTIMONIES = [
  {
    quote:
      "I came not knowing Jesus. I left forgiven, baptized, and full of joy. My whole life is different now.",
    name: "A New Believer",
    place: "Hamilton, ON",
  },
  {
    quote:
      "Watching churches that had never worked together stand on one stage to lift up Jesus — that alone was a miracle.",
    name: "Local Pastor",
    place: "Niagara, ON",
  },
  {
    quote:
      "Our outreach team didn't stop when the festival ended. We're still on the streets every week sharing the Gospel.",
    name: "Outreach Leader",
    place: "Ontario",
  },
] as const;

export const MAP_MARKERS = [
  { name: "Hamilton", lat: 43.2557, lng: -79.8711, status: "active", note: "Where it began" },
  { name: "Niagara", lat: 43.0896, lng: -79.0849, status: "active", note: "Region impacted" },
  { name: "Akuse", lat: 6.1006, lng: 0.1264, status: "upcoming", note: "3–4 Sept 2026" },
  { name: "Toronto", lat: 43.6532, lng: -79.3832, status: "planning", note: "Being planned" },
  { name: "New York", lat: 40.7128, lng: -74.006, status: "praying", note: "Being prayed for" },
  { name: "London", lat: 51.5074, lng: -0.1278, status: "praying", note: "Being prayed for" },
  { name: "Lagos", lat: 6.5244, lng: 3.3792, status: "praying", note: "Being prayed for" },
  { name: "Nairobi", lat: -1.2921, lng: 36.8219, status: "praying", note: "Being prayed for" },
  { name: "Mumbai", lat: 19.076, lng: 72.8777, status: "praying", note: "Being prayed for" },
  { name: "Manila", lat: 14.5995, lng: 120.9842, status: "praying", note: "Being prayed for" },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333, status: "praying", note: "Being prayed for" },
  { name: "Sydney", lat: -33.8688, lng: 151.2093, status: "praying", note: "Being prayed for" },
] as const;

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

export const FAQS = [
  {
    q: "What exactly is a Jesus Festival?",
    a: "A Jesus Festival is a public, evangelistic Gospel festival — worship, clear Gospel preaching, testimonies, prayer ministry, baptisms where possible, and trained believers reaching out with the love of Christ. It gathers the Church of a city onto one stage and lifts up the name of Jesus publicly.",
  },
  {
    q: "How is this different from a regular Christian event or concert?",
    a: "The goal is not an event — it's a movement. Every Jesus Festival is designed to spark ongoing evangelism, discipleship, unity, and outreach that continue in the city long after the stage comes down. The event is the spark; the movement is the fire.",
  },
  {
    q: "Do I need a big ministry or budget to start one?",
    a: "No. Every festival starts the same way ours did — with prayer and a step of faith. You need God's leading, a faithful core team, and a heart for your city. Start where you are, with what you have. We'll help you with the model, the roadmap, and encouragement along the way.",
  },
  {
    q: "Is this tied to one church or denomination?",
    a: "No — unity is at the heart of the movement. Jesus Festivals bring together churches, ministries, and leaders across a city who agree on the essentials: Jesus Christ crucified and risen, the authority of Scripture, and the call of the Great Commission.",
  },
  {
    q: "What support do you provide if I want to start one?",
    a: "We freely share the full festival model, the 13-step roadmap, practical guidance on permits, teams, evangelism training and follow-up, plus prayer and personal encouragement. Reach out and we'll walk with you — however we can, for God's glory.",
  },
  {
    q: "How can I get involved without starting a festival?",
    a: "Pray for the movement, volunteer at an existing festival, partner financially, help with evangelism and follow-up, or simply connect us with leaders in your city. Every laborer matters in the harvest.",
  },
] as const;
