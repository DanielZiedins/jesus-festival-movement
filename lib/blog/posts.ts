import type { Post } from "./types";

/**
 * The Jesus Festival Movement journal.
 *
 * Every post has to earn its place: practical, biblical, and genuinely useful
 * to someone trying to reach their own city. Network links appear where they
 * actually help the reader — never as a link dump.
 */

export const POSTS: Post[] = [
  /* ────────────────────────────────────────────────────────── */
  {
    slug: "share-the-gospel-with-someone-you-already-know",
    title: "How To Share The Gospel With Someone You Already Know",
    description:
      "Most people don't meet Jesus through a stranger. They meet Him through someone who already loves them. Here's how to start — without being weird about it.",
    tldr:
      "Most people come to faith through someone they already know. Start by writing out your relational world — family, friends, workmates, neighbours — then pray for three of them by name daily. Be genuinely interested, answer the questions actually asked, tell your own short story, and make small warm invitations rather than large cold ones.",
    date: "2026-06-02",
    readMinutes: 7,
    category: "Evangelism",
    eyebrow: "Start Where You Are",
    keywords: [
      "how to share the gospel with friends",
      "relational evangelism",
      "oikos evangelism",
      "how to talk about Jesus naturally",
      "personal evangelism tips",
    ],
    related: ["oikos", "reborn", "lotw", "kingdom-base"],
    body: [
      {
        t: "p",
        text: "Ask most Christians how they came to faith and you'll rarely hear about a billboard. You'll hear a name. A friend, an aunt, a coworker, a neighbour who kept showing up.",
      },
      {
        t: "p",
        text: "That's not an accident. It's the pattern all through Scripture — the Gospel travelling along the lines of existing relationship. Andrew finds Peter. The woman at the well runs back to her town. Cornelius gathers his household before Peter even arrives.",
      },
      {
        t: "scripture",
        text: "He first found his own brother Simon and said to him, 'We have found the Messiah.'",
        ref: "John 1:41",
      },
      {
        t: "p",
        text: "The New Testament has a word for that circle of people: <em>oikos</em>. It's usually translated 'household,' but it means more than the people under your roof. It's your whole relational world — family, friends, workmates, the barista who knows your order.",
      },
      { t: "h2", text: "Start by seeing who's actually there" },
      {
        t: "p",
        text: "Most of us have never actually counted. We have a vague sense that we 'should evangelise' and no idea who we mean. So the first step isn't courage — it's clarity.",
      },
      {
        t: "p",
        text: "Sit down and write out the people God has already put around you. Not who you wish you knew. Who you actually know.",
      },
      {
        t: "callout",
        title: "Do this one first",
        text: "OikosMap is a free tool we built for exactly this. It walks you through mapping your relational world, then gives you something to pray over. It takes about ten minutes and most people are surprised by how many names appear.",
        href: "https://OikosMap.com",
        cta: "Build your Oikos Map",
      },
      { t: "h2", text: "Then pray for them by name, out loud" },
      {
        t: "p",
        text: "There is something about saying a person's name to God that changes how you see them. You stop seeing a project and start seeing someone He loves.",
      },
      {
        t: "p",
        text: "Pick three names. Pray for them daily for a month before you say anything evangelistic at all. You'll be astonished how often the conversation opens on its own.",
      },
      { t: "h2", text: "Four things that actually help" },
      {
        t: "steps",
        items: [
          {
            title: "Be interested before you're interesting",
            text: "Ask about their life and genuinely listen. People can tell the difference between being cared about and being targeted. If your only questions are setups for your point, they'll know.",
          },
          {
            title: "Answer the question they asked",
            text: "When someone asks something real — about suffering, or meaning, or whether you actually believe this — answer that. Don't redirect to the presentation you'd rather give.",
          },
          {
            title: "Tell your own story",
            text: "Nobody can argue with what happened to you. What was your life like, what changed, what's different now. Three minutes, no jargon. Practise it once so it doesn't ramble.",
          },
          {
            title: "Make the ask small",
            text: "Not 'will you repent' but 'would you come to this with me' or 'can I pray for that?' Most people say yes to small, warm invitations and no to large, cold ones.",
          },
        ],
      },
      { t: "h2", text: "What about the awkwardness?" },
      {
        t: "p",
        text: "It's real, and it mostly comes from a fear of damaging the relationship. Here's the reframe that helped us: <strong>you are not risking the friendship, you are offering it the best thing you have.</strong>",
      },
      {
        t: "p",
        text: "You can do that badly — pushy, argumentative, treating someone like a scalp. Don't. But you can also do it with obvious love, and love is very hard to be offended by.",
      },
      {
        t: "scripture",
        text: "Let your speech always be gracious, seasoned with salt, so that you may know how you ought to answer each person.",
        ref: "Colossians 4:6",
      },
      { t: "h2", text: "Give them somewhere to go next" },
      {
        t: "p",
        text: "Sometimes a person isn't ready to talk but is ready to read. Having something simple to send takes the pressure off both of you — <a href=\"https://IAmReborn.net\">IAmReborn.net</a> explains the new birth plainly, and <a href=\"/know-jesus\">our own Gospel page</a> ends with a prayer anyone can pray.",
      },
      {
        t: "p",
        text: "And if you're part of a team doing this together, write things down. Who you spoke to, what they said, when to check back. Good intentions evaporate; notes don't. <a href=\"https://KingdomBase.App\">Kingdom Base</a> exists because we kept losing track of people we genuinely cared about.",
      },
      { t: "h2", text: "The long game" },
      {
        t: "p",
        text: "Very few people are argued into the Kingdom in a single conversation. Most are loved in over years, by someone who stayed.",
      },
      {
        t: "p",
        text: "So be the one who stays. Keep praying the names. Keep being useful and kind. And when the door opens — and it will — walk through it gently.",
      },
      {
        t: "callout",
        title: "Want to go further?",
        text: "Our free 13-step playbook shows how a whole city's worth of these conversations gets mobilised into a public Gospel festival.",
        href: "/start-a-jesus-festival",
        cta: "Open the playbook",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  {
    slug: "what-happens-after-the-festival",
    title: "What Happens After The Festival: Turning An Event Into A Movement",
    description:
      "The stage comes down on Sunday. Most of the fruit is won or lost in the two weeks that follow. Here's how to build the part nobody photographs.",
    tldr:
      "Assign one person to own follow-up before the event, not after. Contact everyone who responded within 72 hours personally, record decisions and testimonies while they're fresh, hand people to a named person at a local church, then launch a sustainable weekly or monthly outreach within about six weeks.",
    date: "2026-06-18",
    readMinutes: 8,
    category: "Festival Playbook",
    eyebrow: "The Part Nobody Photographs",
    keywords: [
      "event follow up strategy church",
      "discipleship after evangelistic event",
      "new believer follow up",
      "turning outreach into a movement",
      "church outreach sustainability",
    ],
    related: ["kingdom-base", "loh", "lotw", "jf-app"],
    body: [
      {
        t: "p",
        text: "Here's an uncomfortable truth about evangelistic events: the day itself is the easy part.",
      },
      {
        t: "p",
        text: "Not easy to organise — it's months of work. But easy compared to what comes after. The crowd, the music, the momentum, the response at the end. All of that carries you. Then Monday arrives, everyone's tired, the equipment has to go back, and a list of names sits in someone's inbox.",
      },
      {
        t: "p",
        text: "<strong>That list is the whole point.</strong> And it is where most events quietly fail.",
      },
      {
        t: "scripture",
        text: "Others fell on good soil and produced grain, some a hundredfold, some sixty, some thirty.",
        ref: "Matthew 13:8",
      },
      { t: "h2", text: "Decide who owns follow-up before the event" },
      {
        t: "p",
        text: "The single biggest predictor of whether follow-up happens is whether one specific person was given it as their only job — before the festival, not after.",
      },
      {
        t: "p",
        text: "If follow-up belongs to 'the team', it belongs to nobody. Everyone will assume someone else has it, and by the time anyone checks, it's three weeks later and the moment has passed.",
      },
      {
        t: "list",
        items: [
          "Name the person out loud in a planning meeting",
          "Give them a small team of two or three, not the whole volunteer pool",
          "Free them from day-of responsibilities so they're not exhausted on Monday",
          "Agree the target: first contact within 72 hours, no exceptions",
        ],
      },
      { t: "h2", text: "Capture properly on the day" },
      {
        t: "p",
        text: "You cannot follow up what you didn't record. Response cards get rained on, lost, and stuffed into pockets. Photos of a sign-up sheet are unreadable a week later.",
      },
      {
        t: "p",
        text: "Whatever you use, make sure it captures the same fields every time — name, contact, what they responded to, who prayed with them, and anything that person noticed. That last field matters more than people expect. 'Just lost her mum' turns a generic follow-up message into an act of care.",
      },
      {
        t: "callout",
        title: "The tool we built for this",
        text: "Kingdom Base is an evangelism CRM — it keeps every conversation, decision and follow-up in one place so nobody slips through the cracks. It exists because we kept losing people we genuinely loved.",
        href: "https://KingdomBase.App",
        cta: "See Kingdom Base",
      },
      { t: "h2", text: "The 72-hour window" },
      {
        t: "p",
        text: "Contact everyone who responded within three days. Not a newsletter — a real message from a real person who was actually there.",
      },
      {
        t: "p",
        text: "Keep it short and human. Say who you are, say you were glad to meet them, ask one open question, and offer one concrete next thing. Don't attach a PDF. Don't add them to a mailing list without asking.",
      },
      {
        t: "quote",
        text: "The goal of follow-up isn't to process a lead. It's to make sure a new brother or sister isn't left standing alone in a room they've just walked into.",
      },
      { t: "h2", text: "Hand people to a local church — properly" },
      {
        t: "p",
        text: "A warm handoff means a named person at a named church who is expecting them, ideally who offers to meet them at the door on Sunday. A cold handoff is a list of church websites.",
      },
      {
        t: "p",
        text: "This is where the unity you built during planning pays off. If pastors across your city genuinely partnered with the festival, they'll receive new believers gladly rather than suspiciously.",
      },
      { t: "h2", text: "Then launch the thing that keeps going" },
      {
        t: "p",
        text: "An event that produces no ongoing rhythm is a spike, not a movement. Within about six weeks you want something regular running — a weekly outreach, a monthly gathering, a discipleship group for the people who just came to faith.",
      },
      {
        t: "p",
        text: "It doesn't have to be big. It has to be <em>sustainable</em>, and it has to be on the calendar. <a href=\"https://LoveOnHamilton.com\">Love on Hamilton</a> is what this looks like in our own city — unglamorous, weekly, and still going long after the stage came down. Much of the training behind it comes from <a href=\"https://LoveOnTheWorld.com\">Love on The World</a>.",
      },
      { t: "h2", text: "Debrief honestly, then write it down" },
      {
        t: "p",
        text: "Within two weeks, get the core team in a room and ask three questions: what did God do, what would we change, and what nearly went wrong that we got away with?",
      },
      {
        t: "p",
        text: "Write the answers down while they sting. Next year's team — or the team in the next city — will need them.",
      },
      {
        t: "callout",
        title: "The full 13-step playbook",
        text: "Follow-up and multiplication are steps 11 to 13. The whole thing is free, printable, and includes the mistakes we'd rather you didn't repeat.",
        href: "/start-a-jesus-festival",
        cta: "Open the playbook",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  {
    slug: "why-city-wide-church-unity-is-worth-it",
    title: "Why City-Wide Church Unity Is Worth The Effort",
    description:
      "Getting churches to work together is slow, awkward and occasionally discouraging. It is also the thing Jesus prayed for — and the thing a watching city notices most.",
    tldr:
      "Work in three tiers: agree on the essentials, respect differing convictions without making them the price of admission, and let go of preferences on purpose. Visit pastors in person, ask how you can serve what they're already doing, and give partners real ownership rather than a logo on a poster.",
    date: "2026-07-01",
    readMinutes: 6,
    category: "The Church",
    eyebrow: "Better Together",
    keywords: [
      "church unity in a city",
      "interdenominational outreach",
      "churches working together evangelism",
      "John 17 unity",
      "city wide church partnership",
    ],
    related: ["tkn", "seekfirst", "lda", "jf-ca"],
    body: [
      {
        t: "p",
        text: "The first time we asked pastors across Hamilton to stand on one stage, we were braced for polite refusals. Some came. Some didn't. A few said yes and then went quiet.",
      },
      {
        t: "p",
        text: "It was slower and more awkward than any other part of planning a festival. It was also, by a distance, the most important.",
      },
      {
        t: "scripture",
        text: "That they may all be one, just as you, Father, are in me, and I in you, that they also may be in us, so that the world may believe that you have sent me.",
        ref: "John 17:21",
      },
      {
        t: "p",
        text: "Notice the logic in what Jesus prays. Unity isn't presented as a nice internal virtue. It's presented as <strong>evidence</strong> — the thing that makes a watching world take the claim seriously.",
      },
      { t: "h2", text: "What a city actually sees" },
      {
        t: "p",
        text: "Most people outside the Church don't know or care about our denominational distinctions. What they do notice is whether Christians appear to like each other.",
      },
      {
        t: "p",
        text: "When congregations that have operated in separate lanes for twenty years show up in the same park, serving side by side, it lands. One local pastor told us that alone was a miracle — and he'd been in the city his whole ministry.",
      },
      { t: "h2", text: "Unity is not uniformity" },
      {
        t: "p",
        text: "This is where people get nervous, and fairly. Nobody is asking anyone to abandon convictions.",
      },
      {
        t: "p",
        text: "Practically, we've found it works when you're clear about three tiers:",
      },
      {
        t: "steps",
        items: [
          {
            title: "The essentials — we agree",
            text: "Jesus Christ crucified and risen, salvation by grace through faith, the authority of Scripture, the call of the Great Commission. If we're together here, we can work together.",
          },
          {
            title: "The convictions — we differ, and that's fine",
            text: "Baptism practice, church governance, spiritual gifts, worship style. We don't paper over these. We just don't make them the price of admission to a Gospel festival.",
          },
          {
            title: "The preferences — we let go",
            text: "Whose sound system, whose logo is bigger, who prays first. Most unity dies here rather than over doctrine. Decide early that you'll lose these arguments on purpose.",
          },
        ],
      },
      { t: "h2", text: "How to actually start the conversations" },
      {
        t: "list",
        items: [
          "Go in person. A mass email to twenty churches gets twenty deletions.",
          "Ask what their church is already doing, and mean it. Then ask how you can serve <em>that</em>.",
          "Be explicit that you're not recruiting their people or planting anything.",
          "Give real ownership — a slot, a team to lead, a decision that's genuinely theirs. A logo on a poster is not partnership.",
          "Expect it to take longer than logistics. Start these conversations first, not last.",
        ],
      },
      {
        t: "quote",
        text: "You are not trying to build one church out of many. You are trying to help many churches remember they are one Church.",
      },
      { t: "h2", text: "When someone says no" },
      {
        t: "p",
        text: "Some will. Occasionally for reasons that sting. Bless them anyway, keep the door open, and don't make it public. The pastor who declines this year has watched how you handled it by the time you ask again.",
      },
      {
        t: "p",
        text: "And be honest with yourself about whether the no was fair. Sometimes we've been turned down because we came asking for volunteers rather than offering to serve.",
      },
      { t: "h2", text: "It outlasts the event" },
      {
        t: "p",
        text: "The relationships built while planning a festival tend to survive it. Leaders who prayed together in a church basement in February are still texting each other in November.",
      },
      {
        t: "p",
        text: "That's the quiet compounding return on all the awkward coffees — and it's a big part of what <a href=\"https://ThyKingdom.net\">Thy Kingdom Network</a> exists to nurture. The same instinct runs through <a href=\"https://SeekFirst.World\">Seek First</a>, and among business owners through <a href=\"https://LionsDenAlliance.com\">Lions Den Alliance</a>.",
      },
      {
        t: "callout",
        title: "Unity is step 4 of 13",
        text: "In the playbook we put church partnership early on purpose — because it takes the longest and everything else leans on it.",
        href: "/start-a-jesus-festival",
        cta: "Open the playbook",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  {
    slug: "great-commission-in-numbers",
    title: "2.3 Billion: The Great Commission In Numbers — And On Your Street",
    description:
      "The scale of the unreached world can either paralyse you or aim you. Here's how to hold the global number and your own neighbourhood in the same hand.",
    tldr:
      "About 2.3 billion people have essentially no access to the Gospel, while around 2.6 billion identify as Christians — so the labour force is not small, just largely dormant. Hold both scales at once: pray for one nation weekly on a rhythm, and act consistently in your own neighbourhood.",
    date: "2026-07-14",
    readMinutes: 6,
    category: "Mission",
    eyebrow: "Zoom Out, Then Zoom In",
    keywords: [
      "unreached people groups statistics",
      "great commission facts",
      "2.3 billion unreached",
      "world evangelization",
      "how to pray for the nations",
    ],
    related: ["lom", "lotw", "oikos", "seekfirst"],
    body: [
      {
        t: "p",
        text: "Roughly 8.3 billion people are alive right now. Around 2.6 billion identify as Christians. And about 2.3 billion have essentially no access to the Gospel — not 'have heard and declined', but have no realistic way of hearing at all.",
      },
      {
        t: "p",
        text: "Sit with that middle number for a second, because it cuts both ways. There are 2.6 billion of us. The labour force is not small. It's just largely dormant.",
      },
      {
        t: "scripture",
        text: "The harvest is plentiful, but the laborers are few. Therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.",
        ref: "Matthew 9:37–38",
      },
      { t: "h2", text: "Why big numbers paralyse us" },
      {
        t: "p",
        text: "Psychologists have a name for it — compassion fade. Our capacity to care doesn't scale with the size of a statistic. Tell someone about one child in need and they act; tell them about a million and something in us shuts down.",
      },
      {
        t: "p",
        text: "So the number alone won't move you, and guilt about the number definitely won't. What helps is turning it into something with edges.",
      },
      { t: "h2", text: "Make it a map, not a statistic" },
      {
        t: "p",
        text: "Seeing where the gaps actually are changes how you pray. It stops being 'the world' and becomes a region, a language, a city with a name.",
      },
      {
        t: "callout",
        title: "Look at it",
        text: "Love on Mission maps the Great Commission visually — where the Church is strong, where it's thin, and where there's essentially nothing. Ten minutes with it will do more for your prayer life than another article.",
        href: "https://LoveOnMission.world",
        cta: "Open the mission map",
      },
      { t: "h2", text: "Then bring it down to your street" },
      {
        t: "p",
        text: "Here's the part that keeps global vision from becoming escapism: the same commission that sends people across oceans also sent you to your own postcode.",
      },
      {
        t: "p",
        text: "Jesus said Jerusalem <em>and</em> Judea <em>and</em> Samaria <em>and</em> the ends of the earth. Not one instead of the others.",
      },
      {
        t: "scripture",
        text: "You will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth.",
        ref: "Acts 1:8",
      },
      {
        t: "p",
        text: "Most of us can't relocate to an unreached region this year. All of us can learn the name of the family four doors down. If you don't know where to start, <a href=\"https://OikosMap.com\">map the people already around you</a> and pray for three of them daily.",
      },
      { t: "h2", text: "Three honest ways to hold both" },
      {
        t: "steps",
        items: [
          {
            title: "Pray globally on a rhythm",
            text: "One nation a week is enough. Put it in your calendar or it won't happen. Pray for labourers specifically — that's the prayer Jesus told us to pray.",
          },
          {
            title: "Act locally on a rhythm",
            text: "One consistent thing beats five enthusiastic things you stop doing in March. A weekly outreach, a monthly meal, one relationship you keep investing in.",
          },
          {
            title: "Give to someone actually going",
            text: "You can be part of work you'll never see. Support a missionary, a translation project, or a church planting in a hard place.",
          },
        ],
      },
      { t: "h2", text: "The frontier framing" },
      {
        t: "p",
        text: "We keep coming back to this: <strong>2.3 billion is not a number to fear. It's a frontier to cross.</strong>",
      },
      {
        t: "p",
        text: "And frontiers aren't crossed by a handful of famous preachers. They're crossed by an awakened Church full of ordinary people who decided their city was worth it — which is exactly what a Jesus Festival is designed to wake up.",
      },
      {
        t: "callout",
        title: "See the cities we're praying for",
        text: "Hamilton and Niagara are on the map. Toronto is being planned. New York, London, Lagos, Nairobi, Mumbai, Manila, São Paulo and Sydney are being prayed for. We want to run out of room.",
        href: "/#map",
        cta: "See the global map",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  {
    slug: "kingdom-work-outside-of-sunday",
    title: "Kingdom Work Outside Of Sunday",
    description:
      "If ministry only counts when it happens on a platform, then most of the Church is benched most of the week. Scripture disagrees.",
    tldr:
      "A churchgoer might spend three hours a week in a church building and forty at work, among people far less likely to walk into a church. Do excellent work, be conspicuously kind, be honest when it costs you, and treat your trade, your resources and your home as Kingdom ground.",
    date: "2026-07-22",
    readMinutes: 6,
    category: "Discipleship",
    eyebrow: "Monday Matters",
    keywords: [
      "faith and work",
      "christian in business",
      "everyday discipleship",
      "work as worship",
      "kingdom business",
    ],
    related: ["lda", "six33", "tasksimply", "dz", "kd"],
    body: [
      {
        t: "p",
        text: "There's a quiet lie that runs through a lot of church culture: that real ministry is what happens on a stage, and everything else is what you do to fund it.",
      },
      {
        t: "p",
        text: "If that were true, then the plumber, the nurse, the teacher and the software developer are all second-tier Christians — useful, but not really in the game. Which would be strange, given that most of Jesus' own life was spent in a workshop.",
      },
      {
        t: "scripture",
        text: "Whatever you do, work heartily, as for the Lord and not for men.",
        ref: "Colossians 3:23",
      },
      { t: "h2", text: "Where people actually are" },
      {
        t: "p",
        text: "Consider the arithmetic. A committed churchgoer might spend two or three hours a week in a church building. They'll spend forty at work.",
      },
      {
        t: "p",
        text: "And the people at that workplace are, statistically, far less likely to walk into a church than the people already in one. Your colleagues are a mission field that no evangelist can reach as naturally as you can.",
      },
      {
        t: "quote",
        text: "You are not a Christian who happens to have a job. You are a Christian sent, most days of the week, to that job.",
      },
      { t: "h2", text: "What this looks like in practice" },
      {
        t: "steps",
        items: [
          {
            title: "Do excellent work",
            text: "Competence buys credibility. Sloppy work with a fish on the business card damages the name you're trying to honour. Excellence is itself a witness.",
          },
          {
            title: "Be conspicuously kind",
            text: "Be the person who is decent to the people others are short with. This gets noticed far more than you think, and it's usually what prompts the eventual question.",
          },
          {
            title: "Be honest when it costs you",
            text: "Integrity is only visible when it's expensive. The moment you tell the truth at your own cost is the moment your faith stops being an abstraction to the people watching.",
          },
          {
            title: "Don't hide, don't hammer",
            text: "You don't need to preach at the printer. You also don't need to pretend Sunday didn't happen. Just be an ordinary person who obviously follows Jesus.",
          },
        ],
      },
      { t: "h2", text: "Business as a Kingdom engine" },
      {
        t: "p",
        text: "There's a practical dimension too. Public Gospel festivals cost real money — stages, sound, permits, insurance, printing. They are very often possible because business owners in the city decided their profits had a purpose beyond themselves.",
      },
      {
        t: "p",
        text: "That's the conviction behind <a href=\"https://LionsDenAlliance.com\">Lions Den Alliance</a>, an alliance of Kingdom businesses. It's also why some of the tools we use day to day were built in-house rather than bought — <a href=\"https://TaskSimply.com\">TaskSimply</a> came out of needing to run festival logistics without losing our minds.",
      },
      {
        t: "p",
        text: "Creativity counts too. Stories reach people arguments can't, which is the thinking behind <a href=\"https://SIX33Legends.com\">SIX33 Legends</a>, and even what you wear can open a door — <a href=\"https://SIX33Outpost.com\">SIX33 Outpost</a> exists partly because a t-shirt has started more conversations than a tract.",
      },
      { t: "h2", text: "And it starts at home" },
      {
        t: "p",
        text: "Before any of the public work, there's the private version nobody applauds — a marriage served well, children discipled patiently, a home that's genuinely open.",
      },
      {
        t: "p",
        text: "That's the least photogenic and most load-bearing ministry there is. <a href=\"https://KD-Ziedins.com\">Daniel &amp; Katie</a> write about that side of it, and there's more long-form thinking at <a href=\"https://DanielZiedins.com\">DanielZiedins.com</a>.",
      },
      {
        t: "scripture",
        text: "So, whether you eat or drink, or whatever you do, do all to the glory of God.",
        ref: "1 Corinthians 10:31",
      },
      {
        t: "callout",
        title: "Bring it to your city",
        text: "If you've been sensing that your work, your network or your resources are meant for something bigger — a festival in your city might be exactly the shape of it.",
        href: "/start-a-jesus-festival",
        cta: "Open the playbook",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  {
    slug: "serving-your-city-when-crisis-hits",
    title: "Serving Your City When Crisis Hits",
    description:
      "The Church should be the first through the door when a community is hurting — not the last to organise. Here's how to be ready before you need to be.",
    tldr:
      "Prepare before the crisis: introduce yourself to your municipality's emergency contact, agree in advance which church coordinates a joint response, write down what your building can genuinely offer, and keep a current volunteer list with skills noted. Then serve without strings — no evangelistic invoice attached.",
    date: "2026-07-28",
    readMinutes: 5,
    category: "Outreach",
    eyebrow: "Ready Before It Happens",
    keywords: [
      "church disaster response",
      "how churches help in a crisis",
      "community crisis ministry",
      "church emergency preparedness",
      "practical compassion ministry",
    ],
    related: ["response", "loh", "lotw", "kingdom-base"],
    body: [
      {
        t: "p",
        text: "Floods, fires, storms, a factory closing, a tragedy that puts a whole town in shock. Every city eventually has a week where everything stops.",
      },
      {
        t: "p",
        text: "In those weeks people ask questions they don't normally ask, and they notice who shows up. The Church has an extraordinary opportunity — and it is almost entirely determined by decisions made <em>before</em> the crisis, not during it.",
      },
      {
        t: "scripture",
        text: "Let us not love in word or talk but in deed and in truth.",
        ref: "1 John 3:18",
      },
      { t: "h2", text: "Why churches are unusually well placed" },
      {
        t: "list",
        items: [
          "Buildings with kitchens, halls, parking and often generators",
          "Volunteers who already know how to organise around a Sunday",
          "Existing trust in the neighbourhood, built over years",
          "Networks that cross the whole city, not one postcode",
          "People willing to do unglamorous work for free",
        ],
      },
      {
        t: "p",
        text: "What's usually missing isn't willingness. It's coordination — twenty churches all independently making sandwiches while nobody has blankets.",
      },
      { t: "h2", text: "Get the boring things sorted now" },
      {
        t: "steps",
        items: [
          {
            title: "Know who to call",
            text: "Introduce yourself to your municipality's emergency management contact before there's an emergency. In a crisis, official channels work with organisations they already recognise.",
          },
          {
            title: "Agree who coordinates",
            text: "Decide in advance which church or leader coordinates a joint response, so the first hours aren't spent negotiating. This is far easier if you've already built city-wide relationships.",
          },
          {
            title: "Know your actual capacity",
            text: "Write down what your building can genuinely offer — how many people, what facilities, accessibility, whether you can run without power.",
          },
          {
            title: "Keep a callable list",
            text: "A current list of volunteers with skills noted: medical, trades, languages, driving, childcare. Ad hoc recruitment during a crisis wastes the first critical day.",
          },
        ],
      },
      {
        t: "callout",
        title: "A framework that already exists",
        text: "Kingdom Response is built for exactly this — helping churches mobilise quickly and sensibly when their community is hit, without duplicating effort or getting in the way of official responders.",
        href: "https://KingdomResponse.com",
        cta: "See Kingdom Response",
      },
      { t: "h2", text: "Serve without strings" },
      {
        t: "p",
        text: "This matters enormously. Help people because they're made in God's image and they're hurting — not as a transaction with an evangelistic invoice attached.",
      },
      {
        t: "p",
        text: "People can smell an agenda in a crisis, and nothing damages a church's standing faster. Give the blanket, make the meal, clear the debris. If someone asks why you came, tell them honestly. That's usually all it takes.",
      },
      {
        t: "quote",
        text: "Compassion with conditions isn't compassion. Serve as though nobody will ever know it was you — and let God handle the rest.",
      },
      { t: "h2", text: "The connection to festivals" },
      {
        t: "p",
        text: "It might seem like a different topic. It isn't. Both are the same instinct: <strong>the Church showing up publicly for the good of the city.</strong>",
      },
      {
        t: "p",
        text: "And practically, the two feed each other. The unity you build planning a Gospel festival is exactly the network you need on a bad week. The credibility you earn serving in a crisis is why people come when you invite them to a park to hear about Jesus. Ongoing local work like <a href=\"https://LoveOnHamilton.com\">Love on Hamilton</a> is what keeps both muscles warm.",
      },
      {
        t: "callout",
        title: "Build the network before you need it",
        text: "Step 4 of the playbook is city-wide church unity. It's the step that pays off in ways you can't predict.",
        href: "/start-a-jesus-festival",
        cta: "Open the playbook",
      },
    ],
  },
  /* ────────────────────────────────────────────────────────── */
  {
    slug: "what-actually-happens-at-a-jesus-festival",
    title: "What Actually Happens At A Jesus Festival",
    description:
      "Never been to one? Here's honestly what a day looks like — what to expect, what's expected of you, and why people who came sceptical stayed all afternoon.",
    tldr:
      "A Jesus Festival is a free outdoor event with live worship, real testimonies, a clear unhurried Gospel message, and trained volunteers ready to pray with anyone who responds. Nothing is expected of you — no belief, no singing, no collection. Family-friendly elements run alongside so parents can stay.",
    date: "2026-08-04",
    readMinutes: 6,
    category: "The Festivals",
    eyebrow: "Before You Come",
    keywords: [
      "what is a Jesus Festival",
      "christian festival what to expect",
      "outdoor gospel event",
      "volunteer at a christian festival",
      "family friendly christian event",
    ],
    related: ["jf-ca", "jf-app", "jf-niagara", "reborn"],
    body: [
      {
        t: "p",
        text: "If you've never been to an open-air Gospel festival, the mental picture is probably either a stadium crusade or someone shouting on a street corner. It's neither.",
      },
      {
        t: "p",
        text: "Here's what actually happens — described plainly, so you can decide whether to come, bring someone, or serve.",
      },
      { t: "h2", text: "The shape of the day" },
      {
        t: "steps",
        items: [
          {
            title: "It starts before you arrive",
            text: "For weeks beforehand, volunteers have been out in the neighbourhood inviting people face to face, and teams have been praying over the site. By the time the gates open, the day has already been carried a long way.",
          },
          {
            title: "Worship, in the open air",
            text: "Live music, usually led by musicians from several different churches in the city. Loud enough to be heard from the street, which is deliberate — the invitation is meant to reach people who didn't plan to come.",
          },
          {
            title: "Real people telling the truth",
            text: "Testimonies from people whose lives changed. Not polished, not scripted. Usually the part visitors remember most, because it's very hard to argue with what happened to someone.",
          },
          {
            title: "The Gospel, preached clearly",
            text: "Who Jesus is, why He came, what He did, and what it means for you. Unhurried and understandable, with no assumed church vocabulary. Nobody is singled out or pressured.",
          },
          {
            title: "A chance to respond",
            text: "If you want to follow Jesus, pray, or just talk to someone, there are trained people ready to sit with you. If you don't, that's genuinely fine — nobody will chase you.",
          },
          {
            title: "Baptisms, when we can",
            text: "Sometimes people are baptized on the day, right there. It's usually the loudest the crowd gets.",
          },
        ],
      },
      { t: "h2", text: "What's expected of you: nothing" },
      {
        t: "p",
        text: "You don't need to believe anything to attend. You don't need to sing, raise a hand, sign a card, or give money — there's no collection.",
      },
      {
        t: "p",
        text: "You can stand at the back with your arms folded and leave halfway through. Several of the people who now serve on our teams did exactly that the first time.",
      },
      {
        t: "quote",
        text: "The whole point is that the Gospel is good news, freely offered. Good news doesn't need to be forced on anyone.",
      },
      { t: "h2", text: "Is it alright to bring kids?" },
      {
        t: "p",
        text: "Yes — and we plan for it. Family-friendly elements run alongside the main programme specifically so parents can actually stay and listen rather than spending the afternoon managing a bored six-year-old.",
      },
      {
        t: "p",
        text: "It's outdoors, so bring water, sunscreen and something to sit on. Check the specific event page for accessibility details, parking and washrooms.",
      },
      {
        t: "callout",
        title: "Details for the next one",
        text: "Jesus Festival Hamilton is where the vision began, and the Niagara festival carried it into a second region. Both sites carry dates, locations and practical details.",
        href: "https://JesusFestival.ca",
        cta: "See JesusFestival.ca",
      },
      { t: "h2", text: "On the day itself, use the app" },
      {
        t: "p",
        text: "Schedules move, stages change, and standing in a field wondering where to go is nobody's idea of a good time. <a href=\"https://JesusFestival.app\">JesusFestival.app</a> carries the schedule, the site map and the next steps in your pocket — and it's how you stay connected afterwards if you want to.",
      },
      { t: "h2", text: "If you'd rather serve than spectate" },
      {
        t: "p",
        text: "Honestly, this is where the day changes people most. Volunteers consistently tell us they got more out of it than they gave.",
      },
      {
        t: "list",
        items: [
          "You don't need experience — most of our evangelism volunteers had never shared their faith out loud before their first festival",
          "You don't need to be an extrovert. Setup, sound, first aid, kids' activities, parking and clean-up all matter enormously",
          "Training is provided, and you'll never be sent into a conversation alone",
          "The team you serve with tends to become the people you keep serving with",
        ],
      },
      {
        t: "scripture",
        text: "How beautiful are the feet of those who bring good news!",
        ref: "Romans 10:15",
      },
      { t: "h2", text: "And if you're just curious about Jesus" },
      {
        t: "p",
        text: "You don't have to wait for a festival. If you've got questions right now, <a href=\"https://IAmReborn.net\">IAmReborn.net</a> explains the new birth simply, and <a href=\"/know-jesus\">our own Gospel page</a> ends with a prayer you can pray wherever you're sitting.",
      },
      {
        t: "p",
        text: "That, in the end, is the only reason any of this exists.",
      },
      {
        t: "callout",
        title: "Want one in your city?",
        text: "Everything we've learned about running these — 13 steps, four phases, checklists and warnings — is free and printable.",
        href: "/start-a-jesus-festival",
        cta: "Open the playbook",
      },
    ],
  },
];

export const POST_BY_SLUG = new Map(POSTS.map((p) => [p.slug, p]));

/** Newest first. */
export const SORTED_POSTS = [...POSTS].sort((a, b) =>
  b.date.localeCompare(a.date),
);
