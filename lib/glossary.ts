/**
 * Plain-language definitions of the words this site uses, each pointing at the
 * guide that goes deeper. One source for /glossary, its DefinedTermSet schema
 * and llms.txt, so a definition is only ever written once.
 *
 * Keep each definition consistent with the guide it links to — answer engines
 * quote these directly.
 */
export type Term = {
  id: string;
  term: string;
  definition: string;
  ref?: string;
  href?: string;
  linkLabel?: string;
};

export const GLOSSARY: Term[] = [
  {
    id: "altar-call",
    term: "Altar call",
    definition:
      "An invitation, usually at the end of a Gospel message, for people to respond publicly to Jesus — to give their life to Him, come back to Him, or ask for prayer. At an outdoor event it usually means walking to the front or to a prayer tent, where a trained team member meets them.",
    href: "/blog/how-to-give-an-altar-call-at-an-outdoor-event",
    linkLabel: "How to give an altar call",
  },
  {
    id: "baptism",
    term: "Baptism",
    definition:
      "Being immersed in water as a public declaration that you have died to your old life and been raised to new life in Jesus. It doesn't save you — faith in Christ does — but Jesus commanded it of His followers as the normal first step of obedience.",
    ref: "Romans 6:4",
    href: "/blog/how-to-plan-baptisms-at-an-outdoor-festival",
    linkLabel: "Planning baptisms at a festival",
  },
  {
    id: "discipleship",
    term: "Discipleship",
    definition:
      "Following Jesus day by day, and helping others do the same: learning His teaching, obeying it, and growing in a church family. Evangelism is the doorway; discipleship is the house. The Great Commission is to make disciples, not just decisions.",
    ref: "Matthew 28:19–20",
    href: "/blog/what-is-discipleship",
    linkLabel: "What is discipleship?",
  },
  {
    id: "evangelism",
    term: "Evangelism",
    definition:
      "Sharing the good news of Jesus — that God loves us, that Jesus died for our sins and rose again, and that anyone who turns from sin and trusts Him as Lord is forgiven and made new — and inviting people to respond. From the Greek euangelion, meaning good news.",
    ref: "Romans 1:16",
    href: "/blog/what-is-evangelism",
    linkLabel: "What is evangelism?",
  },
  {
    id: "follow-up",
    term: "Follow-up",
    definition:
      "Caring for people after they respond to the Gospel: a personal contact within days, an invitation to a local church, and one simple first step such as reading the Gospel of John. It is what turns a decision into a disciple.",
    href: "/blog/how-to-follow-up-with-a-new-believer",
    linkLabel: "The first 48 hours",
  },
  {
    id: "gospel",
    term: "Gospel",
    definition:
      "The good news of Jesus Christ: God loves us; sin separates us from Him; Jesus, God's Son, died in our place and rose again; and anyone who turns from sin and trusts Him as Lord is forgiven and given new life.",
    ref: "1 Corinthians 15:3–4",
    href: "/know-jesus",
    linkLabel: "The Gospel, explained simply",
  },
  {
    id: "gospel-tract",
    term: "Gospel tract",
    definition:
      "A short printed leaflet, card or link that explains the Gospel so someone can read it in their own time, ideally with a next step such as a website or local church. Most helpful as a companion to a real conversation.",
    href: "/blog/gospel-tracts-do-they-still-work",
    linkLabel: "Using Gospel tracts well",
  },
  {
    id: "great-commission",
    term: "Great Commission",
    definition:
      "Jesus' final instruction to His followers to go and make disciples of all nations, baptizing them and teaching them to obey everything He commanded. It applies both to the ends of the earth and to your own street.",
    ref: "Matthew 28:19–20",
    href: "/blog/great-commission-in-numbers",
    linkLabel: "The Great Commission today",
  },
  {
    id: "jesus-festival",
    term: "Jesus Festival",
    definition:
      "A free, public, outdoor Gospel celebration where churches across a city come together for worship, testimonies, clear preaching of the Gospel, prayer, and often baptisms — open to everyone, with no ticket and no collection.",
    href: "/blog/what-actually-happens-at-a-jesus-festival",
    linkLabel: "What happens at a Jesus Festival",
  },
  {
    id: "oikos",
    term: "Oikos",
    definition:
      "The New Testament word usually translated household. It means your whole relational world — family, friends, workmates and neighbours — the people God has already placed around you, and the people most likely to hear the Gospel from you.",
    href: "/blog/share-the-gospel-with-someone-you-already-know",
    linkLabel: "Sharing the Gospel with people you know",
  },
  {
    id: "open-air-preaching",
    term: "Open-air preaching",
    definition:
      "Proclaiming the Gospel in a public outdoor space — a park, a square, a street or a festival stage — to whoever is passing or gathered. Jesus taught crowds outdoors, and the apostles preached in streets and marketplaces.",
    ref: "Acts 17:17",
    href: "/blog/how-to-preach-the-gospel-outdoors",
    linkLabel: "How to preach outdoors",
  },
  {
    id: "prayer-walk",
    term: "Prayer walk",
    definition:
      "Praying while you walk through a neighbourhood, park or street, noticing people and places and praying for what you see. A simple way to begin loving and serving a city.",
    href: "/resources/prayer-walk",
    linkLabel: "The prayer walk guide",
  },
  {
    id: "repentance",
    term: "Repentance",
    definition:
      "Turning away from sin and toward God — a change of mind and direction, not just regret. In the Bible, repentance and faith in Jesus go together as the response to the Gospel.",
    ref: "Acts 3:19",
    href: "/know-jesus",
    linkLabel: "How to respond to Jesus",
  },
  {
    id: "response-team",
    term: "Response team",
    definition:
      "Trained believers, usually from partner churches, who care for people who respond to the Gospel at an event: welcoming them, listening, explaining the Gospel, praying together and offering a next step — always in pairs and with safeguarding in place.",
    href: "/resources/response-team",
    linkLabel: "The response team card",
  },
  {
    id: "revival",
    term: "Revival",
    definition:
      "A season when God renews the spiritual life of His people by His Spirit — deep repentance, fresh love for Jesus and Scripture, earnest prayer and holy living — which often overflows into many unbelievers coming to faith.",
    ref: "Psalm 85:6",
    href: "/blog/what-is-revival",
    linkLabel: "What is revival?",
  },
  {
    id: "testimony",
    term: "Testimony",
    definition:
      "Your own story of what Jesus has done in your life — usually what life was like before, how He became real to you, and what is different now. Nobody can argue with what happened to you.",
    ref: "Revelation 12:11",
    href: "/blog/how-to-share-your-testimony",
    linkLabel: "How to share your testimony",
  },
];
