export const SITE = {
  name: "Jesus Festival Movement",
  shortName: "Jesus Festival",
  url: "https://www.jesusfestivalmovement.com",
  email: "Hello@JesusFestival.ca",
  tagline:
    "From Hamilton, Ontario to the nations — helping cities lift up Jesus, preach the Gospel, and spark movements that last.",
  description:
    "Jesus Festival Movement helps cities gather the Church, lift up Jesus, proclaim the Gospel, celebrate baptisms, and build lasting local outreach.",
} as const;

export const FAQS = [
  {
    question: "What is a Jesus Festival?",
    answer:
      "A Jesus Festival is a public, Christ-centred gathering where local churches and ministries unite for worship, clear Gospel proclamation, prayer, baptisms, outreach, and lasting discipleship.",
  },
  {
    question: "How can I bring Jesus Festival to my city?",
    answer:
      "Begin with prayer, gather a small group of trusted local leaders, and send us a message. You do not need a finished plan—we will help you discern the next faithful step.",
  },
  {
    question: "Do I need to be a pastor or ministry leader?",
    answer:
      "No. Many movements begin with one person who carries a burden for their city. Healthy local church relationships matter, and we can help you begin building that unity.",
  },
  {
    question: "Where did the Jesus Festival Movement begin?",
    answer:
      "The movement began in Hamilton, Ontario, Canada, and expanded into Niagara with a vision to help cities and nations lift up Jesus together.",
  },
] as const;

export const MOVEMENT_STAGES = [
  {
    number: "01",
    city: "Hamilton",
    region: "Ontario, Canada",
    label: "Where it began",
    description:
      "A step of faith became a public celebration of Jesus through worship, Gospel proclamation, baptisms, outreach, and church unity.",
    link: "https://JesusFestival.ca",
    linkLabel: "JesusFestival.ca",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "02",
    city: "Niagara",
    region: "Ontario, Canada",
    label: "The vision expands",
    description:
      "Worship in the Wild carried the same heart into Niagara Falls — thousands gathering to lift up the name of Jesus.",
    link: "https://JesusFestivalNiagara.com",
    linkLabel: "JesusFestivalNiagara.com",
    image:
      "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?auto=format&fit=crop&w=1600&q=85",
  },
  {
    number: "03",
    city: "The Nations",
    region: "Your city could be next",
    label: "The invitation",
    description:
      "We are believing for local expressions in cities and nations — each rooted in prayer, local unity, clear Gospel proclamation, and lasting fruit.",
    link: "#contact",
    linkLabel: "Start the conversation",
    image:
      "https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?auto=format&fit=crop&w=1600&q=85",
  },
] as const;

export const FESTIVAL_ELEMENTS = [
  {
    title: "Worship",
    description: "One sound rising across a city to lift up the name of Jesus.",
    icon: "music",
  },
  {
    title: "Gospel",
    description: "A clear, courageous invitation to know and follow Jesus.",
    icon: "megaphone",
  },
  {
    title: "Baptisms",
    description: "New life celebrated publicly in the middle of the gathering.",
    icon: "water",
  },
  {
    title: "Prayer",
    description: "Space for healing, ministry, encounter, and response.",
    icon: "pray",
  },
  {
    title: "Unity",
    description: "Churches and ministries serving together with Jesus at the center.",
    icon: "hands",
  },
  {
    title: "Outreach",
    description: "Believers equipped to carry the Gospel into streets and neighborhoods.",
    icon: "globe",
  },
  {
    title: "Community",
    description: "A welcoming, family-friendly celebration in the heart of the city.",
    icon: "spark",
  },
  {
    title: "Discipleship",
    description: "Ongoing local relationships that continue when the stage comes down.",
    icon: "sprout",
  },
] as const;

export const SIMPLE_STEPS = [
  {
    number: "01",
    title: "Pray",
    description: "Ask God for His heart and timing for your city.",
  },
  {
    number: "02",
    title: "Gather a few",
    description: "Invite a small, humble team who carries the same burden.",
  },
  {
    number: "03",
    title: "Reach out",
    description: "Tell us what God is putting on your heart — no polished plan required.",
  },
  {
    number: "04",
    title: "Walk it out together",
    description: "We will help you discern, prepare, build unity, launch, and keep going.",
  },
] as const;

export const TESTIMONIES = [
  {
    quote:
      "I came not knowing Jesus. I left forgiven, baptized, and full of joy. My whole life is different now.",
    name: "A new believer",
    place: "Hamilton, Ontario",
  },
  {
    quote:
      "Watching churches stand together to lift up Jesus was a picture of what unity can look like across a city.",
    name: "A local pastor",
    place: "Ontario, Canada",
  },
  {
    quote:
      "The outreach did not stop with the festival. Believers kept going — sharing the Gospel and serving people week after week.",
    name: "An outreach leader",
    place: "Jesus Festival Movement",
  },
] as const;

export const MAP_MARKERS = [
  { name: "Hamilton", x: 25.4, y: 35.5, status: "origin" },
  { name: "Niagara", x: 26.2, y: 36.6, status: "active" },
  { name: "Your city", x: 49, y: 31, status: "invitation" },
  { name: "The nations", x: 70, y: 47, status: "invitation" },
] as const;
