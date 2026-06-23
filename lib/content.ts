export const SITE = {
  name: "Jesus Festival Movement",
  shortName: "Jesus Festival",
  url: "https://jesus-festival-movement.vercel.app",
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
  { name: "Hamilton", x: 25.5, y: 36, status: "active", note: "Where it began" },
  { name: "Niagara", x: 26.4, y: 37, status: "active", note: "Region impacted" },
  { name: "Toronto", x: 26.8, y: 35.5, status: "planning", note: "Being planned" },
  { name: "New York", x: 28.5, y: 38, status: "praying", note: "Being prayed for" },
  { name: "London", x: 48.5, y: 30, status: "praying", note: "Being prayed for" },
  { name: "Lagos", x: 49.5, y: 56, status: "praying", note: "Being prayed for" },
  { name: "Nairobi", x: 56, y: 60, status: "praying", note: "Being prayed for" },
  { name: "Mumbai", x: 67, y: 49, status: "praying", note: "Being prayed for" },
  { name: "Manila", x: 81, y: 55, status: "praying", note: "Being prayed for" },
  { name: "São Paulo", x: 34, y: 70, status: "praying", note: "Being prayed for" },
  { name: "Sydney", x: 86, y: 76, status: "praying", note: "Being prayed for" },
] as const;
