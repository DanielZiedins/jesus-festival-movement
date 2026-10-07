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
        href: "/start-a-jesus-festival/playbook",
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
        href: "/start-a-jesus-festival/playbook",
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
        text: "That's the quiet compounding return on all the awkward coffees — and it's a big part of what <a href=\"https://ThyKingdom.net\">Thy Kingdom Network</a> exists to nurture. The same instinct runs through <a href=\"https://www.seekfirst.world\">Seek First</a>, and among business owners through <a href=\"https://LionsDenAlliance.com\">Lions Den Alliance</a>.",
      },
      {
        t: "callout",
        title: "Unity is step 4 of 13",
        text: "In the playbook we put church partnership early on purpose — because it takes the longest and everything else leans on it.",
        href: "/start-a-jesus-festival/playbook",
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
        href: "/start-a-jesus-festival/playbook",
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
        href: "/start-a-jesus-festival/playbook",
        cta: "Open the playbook",
      },
    ],
  },

  /* ────────────────────────────────────────────────────────── */
  {
    slug: "how-to-pray-for-your-city",
    title: "How To Pray For Your City (Without Running Out Of Words)",
    description:
      "Every festival we've ever held started with someone praying for their city by name. Here's a simple, sustainable way to do it — including what to pray when you don't know what to say.",
    tldr:
      "Pray for your city by name, on a rhythm you can sustain — five minutes daily beats an hour once. Use a simple frame: thank God for the city, pray for its people by category (leaders, churches, the hurting, the lost), pray Scripture over it, and ask God what your part is. Walking or driving a route while you pray helps it stay concrete.",
    date: "2026-08-25",
    category: "Prayer",
    eyebrow: "Where Every Festival Starts",
    keywords: [
      "how to pray for your city",
      "praying for your community",
      "prayer walking guide",
      "scriptures to pray over a city",
      "intercession for a city",
      "revival prayer",
    ],
    related: ["oikos", "seekfirst", "loh", "lom"],
    body: [
      {
        t: "p",
        text: "Every Jesus Festival that has ever happened started the same way: not with a venue, a budget or a team, but with somebody praying for their city by name.",
      },
      {
        t: "p",
        text: "That's not a sentimental origin story — it's the actual first step of the playbook, and the one everything else depends on. But 'pray for your city' is one of those instructions that sounds simple until you sit down to do it, say two sentences, and run out of words.",
      },
      {
        t: "p",
        text: "Here's what has helped us pray for years without running dry.",
      },
      { t: "h2", text: "Say the name" },
      {
        t: "p",
        text: "Start by actually naming the place. Not 'our community' or 'this region' — <em>Hamilton</em>. <em>Akuse</em>. <em>Your city</em>. Something changes when a place stops being an abstraction and becomes a name you say to God.",
      },
      {
        t: "scripture",
        text: "Seek the welfare of the city where I have sent you into exile, and pray to the LORD on its behalf, for in its welfare you will find your welfare.",
        ref: "Jeremiah 29:7",
      },
      {
        t: "p",
        text: "Notice the assignment in that verse. The exiles didn't choose Babylon and mostly didn't like it. They were still told to seek its good and pray for it — because God had placed them there on purpose. The same is true of where you live.",
      },
      { t: "h2", text: "A frame for when you run out of words" },
      {
        t: "steps",
        items: [
          {
            title: "Thank God for the city",
            text: "Start with gratitude, not grievance. Thank Him for specific things — the people, the parks, the churches already labouring there, the mercy the city has already received. Gratitude re-orders how you see the place before you ask for anything.",
          },
          {
            title: "Pray for its people, by category",
            text: "Leaders and officials by name where you know them (1 Timothy 2:1–2 makes this explicit). Pastors and churches — including the ones you'd never attend. The hurting: the sick, the addicted, the lonely, the grieving. And the lost — that they would encounter Jesus.",
          },
          {
            title: "Pray Scripture over it",
            text: "When your own words run out, borrow God's. Pray Jeremiah 29:7 for its welfare, Matthew 9:37–38 for labourers, Habakkuk 2:14 that the knowledge of the glory of the LORD would fill it, Psalm 127:1 over everything being built there.",
          },
          {
            title: "Ask what your part is",
            text: "End with the dangerous question: 'God, what do You want to do here — and what's my part in it?' Every movement we've seen began with someone praying that and meaning it.",
          },
        ],
      },
      { t: "h2", text: "Make it a rhythm, not a heroic effort" },
      {
        t: "p",
        text: "Five minutes every day will change you more than an hour once a month. Attach it to something you already do — the commute, the school run, the kettle boiling. The goal is a habit that survives a busy week, not a mountain-top experience.",
      },
      {
        t: "p",
        text: "If you want company in it, invite two or three others to pray the same frame for the same city. You don't need a meeting — a shared commitment and an occasional message is enough to keep each other going.",
      },
      { t: "h2", text: "Walk while you pray" },
      {
        t: "p",
        text: "Prayer walking is nothing mystical — it's simply praying with your eyes open while you move through the place you're praying for. Walk a street and pray for the homes on it. Pass the school and pray for its teachers and students. Stand outside the town hall and pray for whoever makes decisions inside.",
      },
      {
        t: "list",
        items: [
          "Pick one route and repeat it weekly rather than covering the whole city once",
          "Pray quietly and normally — this is not a demonstration",
          "Let what you see set the agenda: the shuttered shop, the busy clinic, the full playground",
          "Take note of what stirs you. Repeated burdens are often assignments in disguise",
        ],
      },
      { t: "h2", text: "Pray for people, not just place" },
      {
        t: "p",
        text: "A city is people. As the habit grows, narrow some of your praying to actual names — the neighbours, workmates and friends God has already put around you. <a href=\"https://OikosMap.com\">OikosMap</a> is a free tool for writing that circle down so you can pray through it deliberately; most people are surprised how many names appear.",
      },
      {
        t: "p",
        text: "And if you want to see how local, week-in week-out prayer and outreach compound over years in one city, <a href=\"https://LoveOnHamilton.com\">Love on Hamilton</a> is what that looks like where this movement began. For lifting your eyes wider, <a href=\"https://LoveOnMission.world\">Love on Mission</a> maps the parts of the world still waiting to hear at all.",
      },
      {
        t: "scripture",
        text: "The harvest is plentiful, but the laborers are few. Therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.",
        ref: "Matthew 9:37–38",
      },
      { t: "h2", text: "What praying like this tends to produce" },
      {
        t: "p",
        text: "We can't promise what God will do with your prayers — but we can tell you the pattern we've watched. People who pray for their city by name start noticing it differently. Noticing turns into small acts of love. Small acts of love turn into relationships, teams, and sometimes — a park, a stage, and the Gospel preached in the open air.",
      },
      {
        t: "p",
        text: "That's not a formula. It's just what seeking first the Kingdom looks like when it's aimed at an actual postcode — the heart <a href=\"https://www.seekfirst.world\">Seek First</a> exists to keep in front of us.",
      },
      {
        t: "callout",
        title: "When prayer turns into a stirring",
        text: "If you pray for your city long enough, don't be surprised if God asks you to be part of the answer. Step 1 of the playbook is exactly this — and steps 2 to 13 are what to do next.",
        href: "/start-a-jesus-festival/playbook",
        cta: "Open the playbook",
      },
    ],
  },
  {
    slug: "how-to-follow-up-with-a-new-believer",
    title: "The First 48 Hours: How To Follow Up With A New Believer",
    description:
      "Someone said yes to Jesus at your event. What you do in the next two days matters more than everything you spent nine months planning. A practical, honest guide to follow-up that actually keeps people.",
    tldr: "Contact a new believer within 48 hours, as a person rather than an organisation. Ask how they are, answer the practical questions they actually have, help them read a Gospel for themselves, and walk them into one healthy local church in person. One real relationship outperforms any automated sequence.",
    date: "2026-09-08",
    category: "Discipleship",
    eyebrow: "After the yes",
    keywords: [
      "how to follow up with a new believer",
      "new Christian follow up",
      "discipleship after evangelistic event",
      "what to do after someone accepts Christ",
      "church follow up process",
      "new believer first steps",
    ],
    related: ["kingdom-base", "reborn", "oikos", "jf-app"],
    body: [
      {
        t: "p",
        text: "Here is the uncomfortable arithmetic of evangelism. A city-wide festival can take nine months to plan, involve a dozen churches, and cost more than most of them spend on anything else all year. And the part that decides whether any of it lasts happens in the two days afterwards, usually on a phone, usually by someone who is exhausted.",
      },
      {
        t: "p",
        text: "We are not neutral about this. We have watched good events produce almost nothing because nobody planned the Monday. We have also watched small, unimpressive gatherings produce believers who are still walking with Jesus years later, because three people took follow-up seriously. The difference is almost never the quality of the preaching.",
      },
      {
        t: "scripture",
        text: "So neither he who plants is anything, nor he who waters, but God who gives the increase.",
        ref: "1 Corinthians 3:7",
      },
      {
        t: "p",
        text: "God gives the growth. But notice that watering is still listed as a job someone has to do.",
      },

      { t: "h2", text: "Why 48 hours" },
      {
        t: "p",
        text: "Nothing magical happens at hour 49. The window matters because of what silence communicates. Someone made the most significant decision of their life in front of strangers, went home, and then heard nothing. Within a few days the most natural conclusion available to them is that it was an event moment — emotional, sincere, and not really connected to anything ongoing.",
      },
      {
        t: "p",
        text: "A short message the next morning quietly says the opposite: this was real, and you were not a number on a report. That is most of the work.",
      },
      {
        t: "list",
        items: [
          "<strong>Day 1:</strong> a personal message from the person who actually prayed with them, if at all possible.",
          "<strong>Day 2–3:</strong> a real conversation — phone, coffee, walk. Not a group text, not a newsletter.",
          "<strong>Week 1:</strong> a specific invitation to something with a time, a place, and a person meeting them at the door.",
          "<strong>Month 1:</strong> they know at least three people by name, and one of them is not you.",
        ],
      },

      { t: "h2", text: "Be a person, not an organisation" },
      {
        t: "p",
        text: "The single most common follow-up mistake is switching registers. The person who prayed with someone on Saturday, crying, was warm and human. The message that arrives on Monday sounds like it came from a communications department. \"Thank you for your response at our event. We would love to connect you with a partner church in your area.\"",
      },
      {
        t: "p",
        text: "Nobody has ever been discipled by that sentence. Write the way you spoke. \"Hey — it was really good to meet you Saturday. I've been thinking about you. How are you doing today?\" is better follow-up than anything a template will produce, because it is true.",
      },
      {
        t: "quote",
        text: "People do not need to be onboarded. They need to be known.",
      },

      { t: "h2", text: "Answer the questions they actually have" },
      {
        t: "p",
        text: "New believers rarely open with theology. The questions that keep people awake in the first week are almost entirely practical, and often slightly embarrassing to ask:",
      },
      {
        t: "list",
        items: [
          "What do I tell my partner, my family, my friends?",
          "Do I have to stop doing the things I was doing on Friday nights?",
          "Am I supposed to go to church every Sunday now? What happens there?",
          "How do I pray? Do I have to say it out loud? Am I doing it wrong?",
          "What do I do with the parts of my life that are genuinely a mess?",
        ],
      },
      {
        t: "p",
        text: "Answer these plainly, and include the honest bits. \"I still find prayer awkward some days\" builds far more trust than a confident answer that makes following Jesus sound like a solved problem. You are not trying to look finished. You are trying to make it credible that an ordinary person can walk this out.",
      },
      {
        t: "p",
        text: "For the questions that are better read than answered on the spot, hand them something plain and unembarrassing — <a href=\"/know-jesus\">the Gospel explained simply</a>, or <a href=\"https://IAmReborn.net\">I Am Reborn</a>, which exists for exactly this moment: someone new, at home, wanting to understand what just happened to them without being handed a reading list.",
      },

      { t: "h2", text: "Get them into the Scriptures themselves, early" },
      {
        t: "p",
        text: "The goal of follow-up is not dependence on you. It is a person who can feed themselves. The fastest route is a Gospel — start them in John or Mark — read at their own pace, with a standing invitation to ask you about anything confusing.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Give them one book, not a Bible reading plan",
            text: "A whole Bible plus a twelve-month schedule is overwhelming on day two. One Gospel, one chapter at a time, is not.",
          },
          {
            title: "Ask what they noticed, not what it means",
            text: "\"What stood out to you?\" gets a real answer. \"What do you think this teaches about atonement?\" gets silence and shame.",
          },
          {
            title: "Let them find things you didn't point out",
            text: "The moment someone brings you something they saw in the text themselves, follow-up has done its job.",
          },
        ],
      },

      { t: "h2", text: "Introduce, do not refer" },
      {
        t: "p",
        text: "This is where most follow-up quietly fails. \"Here's a list of good churches near you\" feels helpful and almost never works. The barrier was never information. The barrier is walking alone into a room where everyone appears to know each other, the songs, and when to stand up.",
      },
      {
        t: "p",
        text: "So do not refer. Introduce. \"I'll meet you at the door at 10:15 and sit with you.\" Then actually be there, early, and stay with them afterwards through the part where people mill around and a newcomer has nobody to talk to.",
      },
      {
        t: "p",
        text: "Think in terms of their existing relationships too, not just yours. Everyone comes with an <em>oikos</em> — the household, workmates and friends already around them. Mapping that out with someone, gently, both shows them who might walk this with them and reveals who they are now praying for. <a href=\"https://OikosMap.com\">Oikos Map</a> is a free tool built for exactly that conversation.",
      },

      { t: "h2", text: "Write it down, or you will lose people to good intentions" },
      {
        t: "p",
        text: "Nobody plans to drop a new believer. They get dropped because forty people responded, six volunteers each assumed someone else had that name, and by the time anyone checks it is three weeks later and too awkward to start.",
      },
      {
        t: "p",
        text: "A shared list — who responded, who is following up, what has happened, what is next — is not bureaucracy. It is the difference between a number in a report and a person being discipled. Keep it somewhere the whole team can see, keep it accurate, and review it weekly for the first month.",
      },
      {
        t: "callout",
        title: "A free tool for the list",
        text: "Kingdom Base is a free follow-up tool built for this exact problem: who responded, who's walking with them, and what happens next — so nobody falls through the gap between volunteers.",
        href: "https://KingdomBase.App",
        cta: "See Kingdom Base",
      },
      {
        t: "p",
        text: "Handle it with care, though. These are people's spiritual lives, not leads. Store only what you need, tell people what you are keeping, and never pass a name to another organisation without asking them first.",
      },

      { t: "h2", text: "Expect it to be uneven" },
      {
        t: "p",
        text: "Some people you follow up with will disappear. Some will come to two things and stop. Some will call you at eleven at night in a crisis you are not qualified for. Some will be walking with Jesus and leading others within the year, and you will not be able to explain why it worked for them and not for the person sitting beside them.",
      },
      {
        t: "p",
        text: "That unevenness is in the parable. Four soils, one sower, one seed. Jesus told His disciples to expect exactly this — and He never suggested that the sower's response to poor soil was to stop sowing.",
      },
      {
        t: "scripture",
        text: "But the ones that fell on the good ground are those who, having heard the word with a noble and good heart, keep it and bear fruit with patience.",
        ref: "Luke 8:15",
      },
      {
        t: "p",
        text: "With patience. Not with a six-week onboarding funnel.",
      },

      { t: "h2", text: "The part nobody warns you about" },
      {
        t: "p",
        text: "Follow-up is harder than the event, and far less rewarding in the moment. There is no crowd, no music, no visible result. It is a text message that gets no reply for two days. It is turning up to a church door at 10:15 for the third Sunday running. It is being the only person who remembered.",
      },
      {
        t: "p",
        text: "It is also, almost certainly, the most Christlike thing your team will do all year. Jesus preached to thousands and discipled twelve. Whatever the crowd is for, it is not the whole of it.",
      },
      {
        t: "callout",
        title: "Planning the event that comes before all this",
        text: "Follow-up is step 12 of 13 — and the playbook is deliberately built backwards from it, so the day is planned around what will still be running in six months.",
        href: "/start-a-jesus-festival/playbook",
        cta: "Open the free playbook",
      },
    ],
  },
  {
    slug: "how-to-share-your-testimony",
    title: "How To Share Your Testimony In Three Minutes",
    description:
      "A simple, honest structure for telling your story of coming to Jesus — before, the turning point, and after — in about three minutes, without preaching, exaggerating or making it about you.",
    tldr: "Share your testimony in three parts: what your life was like before, the moment or season Jesus became real to you, and what is genuinely different now. Keep it to about three minutes, use plain words instead of church language, be honest about what is still hard, and end by asking about their story.",
    date: "2026-10-01",
    category: "Evangelism",
    eyebrow: "Your story, told well",
    keywords: [
      "how to share your testimony",
      "how to write your testimony",
      "christian testimony structure",
      "personal testimony example",
      "how to tell your faith story",
      "sharing your testimony with friends",
    ],
    related: ["reborn", "oikos", "kingdom-base", "lotw"],
    body: [
      {
        t: "p",
        text: "Most believers have exactly one piece of evidence for the Gospel that nobody can argue with, and almost none of them have ever practised telling it. Your testimony is not a sermon and it is not a debate. It is a true account of what happened to you — and people who would never sit through an argument will listen to a story all the way to the end.",
      },
      {
        t: "p",
        text: "The trouble is that most testimonies are either too long, too vague, or quietly about the person telling them. The good news is that all three are fixable with a structure you can learn in an evening.",
      },
      {
        t: "scripture",
        text: "But in your hearts honour Christ the Lord as holy, always being prepared to make a defence to anyone who asks you for a reason for the hope that is in you; yet do it with gentleness and respect.",
        ref: "1 Peter 3:15",
      },
      {
        t: "p",
        text: "Notice the order: prepared, then gentle. The preparation is what makes the gentleness possible. When you know what you are going to say, you are free to actually listen.",
      },

      { t: "h2", text: "The three-part structure" },
      {
        t: "steps",
        items: [
          {
            title: "Before — about 45 seconds",
            text: "What was your life actually like? Not your worst moment for effect — the honest shape of things. What were you living for, what did you assume, what was quietly not working? Be specific enough that someone could recognise themselves.",
          },
          {
            title: "The turning point — about 60 seconds",
            text: "How did Jesus become real to you? It might have been a single night or a slow two years. Say what actually happened, what you understood about Him, and what you did about it. This is the part to slow down for.",
          },
          {
            title: "After — about 45 seconds",
            text: "What is genuinely different now? Not that everything is fixed — what has changed. Where you find peace, what you are no longer carrying, how you treat people. Then stop talking and ask about them.",
          },
        ],
      },
      {
        t: "p",
        text: "Three minutes is not a rule, it is a kindness. It is long enough to be real and short enough that the other person still has room to respond. You can always go longer if they ask; you can rarely recover a conversation you talked over.",
      },

      { t: "h2", text: "If you grew up in church" },
      {
        t: "p",
        text: "Many people quietly believe they do not have a testimony because there was no dramatic before. That is not true, and it is worth saying why. You still have a before — the point where faith was your parents' and not yet yours, or the season you believed the right things without trusting Him with anything real.",
      },
      {
        t: "p",
        text: "A testimony about being kept is every bit as much a testimony as one about being rescued. Plenty of people listening did not have a dramatic before either, and yours may be the first story that sounds like theirs.",
      },

      { t: "h2", text: "Four things that quietly ruin a good story" },
      {
        t: "list",
        items: [
          "<strong>Church language.</strong> \"I got saved and washed in the blood and now I walk in victory\" means a great deal to believers and almost nothing to anyone else. Say what you actually mean, in the words you would use with a colleague.",
          "<strong>Exaggeration.</strong> If it was a hard year, say a hard year. People can feel when a story has been polished, and the moment they suspect one detail they stop trusting the rest.",
          "<strong>Making it a résumé.</strong> If the after is all about what you now do — your ministry, your discipline, your growth — the hero of the story has quietly become you. Keep pointing back at what He did.",
          "<strong>Pretending it is finished.</strong> Saying what is still hard is not a weakness in a testimony. It is usually the most believable part of it.",
        ],
      },

      { t: "h2", text: "Write it down once" },
      {
        t: "p",
        text: "You do not need to memorise a script, and you should not read one. But writing it out a single time does something useful: it shows you which parts are vague, which are too long, and where you have slipped into language nobody outside a church would use.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Write it without editing",
            text: "Get the whole thing down in one go, as if you were telling a friend over coffee.",
          },
          {
            title: "Cut it in half",
            text: "Almost every first draft is twice as long as it needs to be. Keep the specific details and lose the general ones.",
          },
          {
            title: "Say it out loud to one believer",
            text: "Ask them to stop you whenever they would have lost interest, or did not understand a phrase. That single conversation will improve it more than another week of writing.",
          },
        ],
      },
      {
        t: "p",
        text: "If you want to see how others have told theirs, <a href=\"https://IAmReborn.net\">I Am Reborn</a> exists to gather exactly these stories — ordinary people describing, in plain words, what changed when they met Jesus. It is a good place both to read and, eventually, to add your own.",
      },

      { t: "h2", text: "Who to tell first" },
      {
        t: "p",
        text: "Not a stranger, usually. The people most likely to hear your story with interest are the ones who already know you — and who have probably noticed that something about you is different. Your workmates, your neighbours, the friend you have known since school.",
      },
      {
        t: "p",
        text: "If you are not sure who those people are, it is worth slowing down and writing their names. <a href=\"https://OikosMap.com\">Oikos Map</a> is a free tool for exactly that: mapping the relationships already around you and praying for them by name, so that when an opening comes you recognise it.",
      },
      {
        t: "quote",
        text: "You will never run out of people to tell. You will only run out of courage — and that comes back faster than you think once you have done it once.",
      },

      { t: "h2", text: "When the moment actually comes" },
      {
        t: "p",
        text: "It will almost never be the moment you planned. Someone asks why you seem calmer, or what you did on Sunday, or how you got through a hard year. The structure is what lets you answer in the moment instead of freezing or saying nothing.",
      },
      {
        t: "list",
        items: [
          "Ask permission first: <em>\"Can I tell you what actually happened?\"</em> Almost no one says no, and it changes the whole tone.",
          "Keep it short and let them pull more out of you.",
          "End with a question about them rather than a pitch: <em>\"Has anything like that ever happened to you?\"</em>",
          "If they want to go further, the simplest next step is a short, plain explanation of the Gospel — <a href=\"/know-jesus\">there is one here</a> you can send them.",
        ],
      },
      {
        t: "p",
        text: "And if they do not — that is fine. You have told the truth to someone who now knows a real person whose life was changed. That is rarely the end of the story.",
      },
      {
        t: "callout",
        title: "Telling it at a festival",
        text: "Testimonies are one of the heartbeats of a Jesus Festival — real people telling what changed. The full guide to sharing the Gospel with people you already know goes deeper on the conversations that come after.",
        href: "/blog/share-the-gospel-with-someone-you-already-know",
        cta: "Read the guide",
      },
    ],
  },
  {
    slug: "church-outreach-ideas",
    title: "Church Outreach Ideas That Actually Reach People",
    description:
      "Eleven church outreach ideas arranged by how much they ask of you — this week, this season, this year — with why each one works, how it usually goes wrong, and the follow-up step most lists leave out.",
    tldr: "The outreach that reaches people is repeatable, relational and has a clear next step. Start this week with no budget — prayer walking, mapping the people you already know, sharing your story. Build to something weekly as a small team. Then gather across churches once a year. Plan the follow-up before any of it.",
    date: "2026-10-04",
    category: "Outreach",
    eyebrow: "Ideas worth doing",
    keywords: [
      "church outreach ideas",
      "evangelism ideas for churches",
      "community outreach ideas for churches",
      "outreach ideas for small churches",
      "how to reach your community for Jesus",
      "church evangelism strategy",
    ],
    related: ["oikos", "loh", "lotw", "kingdom-base"],
    body: [
      {
        t: "p",
        text: "Most lists of outreach ideas are lists of events. A barbecue, a concert, a carnival, a free car wash. Some of those are good. But a list of events quietly teaches a church that outreach is something you put on, rather than something you are — and the result is a busy weekend, a tired team, and a handful of names nobody calls on Monday.",
      },
      {
        t: "p",
        text: "So the ideas below are arranged differently: by how much they ask of you. Some you can start this week alone. Some need a small team and a season. A few need churches across a city. Each comes with why it works and the way it most often goes wrong.",
      },
      {
        t: "scripture",
        text: "Then he said to his disciples, \"The harvest is plentiful but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.\"",
        ref: "Matthew 9:37–38",
      },

      { t: "h2", text: "Three tests for any outreach idea" },
      {
        t: "list",
        items: [
          "<strong>Is it repeatable?</strong> Something you can do every week will out-reach something you can only manage once a year, almost every time.",
          "<strong>Is it relational?</strong> People come to faith through people. An idea that never puts a believer in a real conversation is publicity, not outreach.",
          "<strong>Is there a next step?</strong> If someone is moved, where do they go on Tuesday? Decide that before you start, not after.",
        ],
      },

      { t: "h2", text: "This week — no budget, no permission needed" },
      { t: "h3", text: "1. Prayer walk the streets you already live on" },
      {
        t: "p",
        text: "Walk slowly, pray for what you see, and write down one thing to do about it. It costs nothing, and it changes how you notice your own neighbourhood. <strong>Where it goes wrong:</strong> treating it as a performance. Nobody needs to know you are doing it. The <a href=\"/resources/prayer-walk\">prayer walk guide</a> keeps it simple.",
      },
      { t: "h3", text: "2. Write down the people already in your life" },
      {
        t: "p",
        text: "Most people who come to faith do so through someone they already know. Name your household, workmates, neighbours and friends, and start praying for them by name. <a href=\"https://OikosMap.com\">Oikos Map</a> is a free tool built for exactly this. <strong>Where it goes wrong:</strong> turning friends into projects. You are praying for people you love, not working a list.",
      },
      { t: "h3", text: "3. Get ready to tell your own story" },
      {
        t: "p",
        text: "You have one piece of evidence nobody can argue with. Learn to tell it in three minutes — before, the turning point, after — so you can when someone asks. <a href=\"/blog/how-to-share-your-testimony\">Here is how</a>. <strong>Where it goes wrong:</strong> waiting until it is polished. It never will be, and that is fine.",
      },
      { t: "h3", text: "4. Meet one practical need, unannounced" },
      {
        t: "p",
        text: "A meal for a neighbour who has just had a baby, groceries for someone between jobs, a lift to an appointment. <strong>Why it works:</strong> love that costs something is noticed, and it opens conversations that a leaflet never could. <strong>Where it goes wrong:</strong> attaching a pitch. Let the kindness be kind.",
      },

      { t: "h2", text: "This season — a small team, every week" },
      { t: "h3", text: "5. Weekly street outreach with practical care" },
      {
        t: "p",
        text: "This is where the Jesus Festival Movement itself began. In 2014 <a href=\"https://www.loveonhamilton.com\">Love on Hamilton</a> started going out every week — sharing the Gospel with whoever would listen and bringing practical care to people living on the street — and it has kept going since. <strong>Why it works:</strong> consistency. The same faces, the same corner, week after week, builds a trust that one big event cannot. <strong>Where it goes wrong:</strong> going without training, or going once. Train first, then commit to a season.",
      },
      { t: "h3", text: "6. A testimony night people can bring friends to" },
      {
        t: "p",
        text: "Ordinary people telling, plainly, what changed when they met Jesus — with food, and without a sermon the guest has to sit through first. <strong>Why it works:</strong> it gives believers something easy to invite a friend to. <strong>Where it goes wrong:</strong> stacking it with the most dramatic stories. Quieter ones are often the ones that sound like the guest's life.",
      },
      { t: "h3", text: "7. Serve alongside something already working" },
      {
        t: "p",
        text: "Before inventing a new ministry, ask who in your city is already feeding people, mentoring kids or visiting the lonely — and offer to help. <strong>Why it works:</strong> the need is real and the relationships exist already. <strong>Where it goes wrong:</strong> showing up to be seen. Serve under their leadership, on their terms.",
      },
      { t: "h3", text: "8. Be ready before the crisis comes" },
      {
        t: "p",
        text: "Floods, fires, cold snaps and sudden closures find out which churches were prepared. A list of who can house, feed, drive or sit with people is outreach you build now and use later. <a href=\"/blog/serving-your-city-when-crisis-hits\">How churches can serve a city in crisis</a> covers the practical side.",
      },

      { t: "h2", text: "This year — across churches in a city" },
      { t: "h3", text: "9. Pray together as a city before you plan together" },
      {
        t: "p",
        text: "Churches that have prayed together for a season find it far easier to work together afterwards. <strong>Where it goes wrong:</strong> skipping straight to logistics, where most unity quietly breaks. <a href=\"/blog/why-city-wide-church-unity-is-worth-it\">Why it is worth the effort</a>.",
      },
      { t: "h3", text: "10. A public gathering in the heart of the city" },
      {
        t: "p",
        text: "Worship, real stories, the Gospel preached clearly, prayer for anyone who wants it, and baptisms where a venue allows — free, outdoors and open to everyone. That is what a Jesus Festival is. <strong>Why it works:</strong> it gives a whole city one visible, unthreatening reason to hear about Jesus, and it gives churches a shared goal. <strong>Where it goes wrong:</strong> treating the day as the point. <a href=\"/blog/what-actually-happens-at-a-jesus-festival\">See what actually happens at one</a>, and use the <a href=\"/start-a-jesus-festival/playbook\">13-step playbook</a> to plan backwards from what should still be running six months later.",
      },
      { t: "h3", text: "11. Start a group that multiplies" },
      {
        t: "p",
        text: "The longest-lasting outreach is a small group of ordinary believers, equipped and sent, who in time train others to do the same. <a href=\"https://www.evangelize.world\">Evangelize.World</a> is working to see 100 such outreach groups established anywhere and everywhere. <strong>Where it goes wrong:</strong> building around one gifted leader. Design it to hand on from day one.",
      },

      { t: "h2", text: "The part most outreach lists leave out" },
      {
        t: "p",
        text: "Every idea above can produce the moment where someone says <em>I want to know more</em> — and every one of them can waste it. The most important outreach decision is made before you start: who follows up, how quickly, and where that person goes next.",
      },
      {
        t: "list",
        items: [
          "Contact within 48 hours, as a person rather than an organisation.",
          "Introduce them to a church in person, rather than handing over a list.",
          "Keep one shared record of who is following up with whom, so nobody falls between volunteers.",
        ],
      },
      {
        t: "p",
        text: "<a href=\"/blog/how-to-follow-up-with-a-new-believer\">The first 48 hours</a> goes through it in detail, and <a href=\"https://KingdomBase.App\">Kingdom Base</a> is a free tool for keeping that record.",
      },

      { t: "h2", text: "How to choose" },
      {
        t: "p",
        text: "Pick one idea from each tier. Start the personal one this week, build the weekly one over a season, and pray about the city-wide one. A church doing three of these faithfully will reach more people than one attempting all eleven once.",
      },
      {
        t: "callout",
        title: "When your church is ready for the city-wide one",
        text: "The full playbook walks through all 13 steps of a Jesus Festival — timelines, checklists and the mistake most teams make at each stage. It is free.",
        href: "/start-a-jesus-festival/playbook",
        cta: "Open the playbook",
      },
    ],
  },
  {
    slug: "plunder-hell-populate-heaven",
    title: "Plunder Hell, Populate Heaven: An Invitation To Partner",
    description:
      "Daniel and Katie Ziedins have spent twelve years taking the Gospel to the streets of Hamilton and beyond. Now they serve with e3 Canada and I Am Second, and the vision is bigger than ever. Here is what it is, why it matters eternally, and how you can stand with it.",
    tldr: "Daniel and Katie Ziedins began Love on Hamilton in 2014 and have spent twelve years taking the Gospel to the streets. Today they serve with e3 Canada and I Am Second, equipping believers to evangelize and helping establish multiplying churches — with a goal of 100 outreach groups worldwide. You can stand with them by praying, by giving through e3 Canada, and by going yourself.",
    date: "2026-10-05",
    category: "Mission",
    eyebrow: "An invitation",
    keywords: [
      "plunder hell populate heaven",
      "partner with evangelists in Canada",
      "support missionaries e3 Canada",
      "support street evangelism Hamilton",
      "how to partner with a ministry",
      "Daniel and Katie Ziedins",
    ],
    related: ["kd", "loh", "lotw", "oikos"],
    body: [
      {
        t: "p",
        text: "There is a phrase the evangelist Reinhard Bonnke made famous, and it has never lost its edge: <strong>plunder hell, populate heaven</strong>. It sounds dramatic. It is meant to. Because underneath it is the most serious thing in the world — that every person you will pass today is eternal, that Jesus died and rose to bring them home, and that most of them have never once heard that clearly.",
      },
      {
        t: "p",
        text: "This post is an invitation. Not to admire someone else's ministry from a distance, but to step into the work with them.",
      },
      {
        t: "scripture",
        text: "And I tell you, you are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it.",
        ref: "Matthew 16:18",
      },

      { t: "h2", text: "Gates are defensive" },
      {
        t: "p",
        text: "Notice what Jesus actually said. Gates do not attack anyone. A gate is what a city hides behind. In Jesus' picture, it is not the Church that is under siege — it is the darkness, and it cannot hold. The Church is meant to be advancing.",
      },
      {
        t: "p",
        text: "That is the whole meaning of the phrase. Jesus did not come to help us survive until the end. He came, as John puts it, to destroy the works of the devil — and He has already done the decisive part.",
      },
      {
        t: "scripture",
        text: "He has delivered us from the domain of darkness and transferred us to the kingdom of his beloved Son.",
        ref: "Colossians 1:13",
      },
      {
        t: "p",
        text: "Every person who comes to Jesus is a rescue like that. Every one is a life plundered out of the enemy's hands and carried into the Kingdom. And heaven does not treat it as a statistic.",
      },
      {
        t: "scripture",
        text: "Just so, I tell you, there will be more joy in heaven over one sinner who repents than over ninety-nine righteous persons who need no repentance.",
        ref: "Luke 15:7",
      },

      { t: "h2", text: "Twelve years on the street" },
      {
        t: "p",
        text: "In 2014 Daniel and Katie Ziedins started <a href=\"https://www.loveonhamilton.com\">Love on Hamilton</a> with a simple, stubborn idea: go out every week, share the Gospel with whoever will listen, and bring practical care to the people living on Hamilton's streets.",
      },
      {
        t: "p",
        text: "What God did with that is the reason this post exists. Lives healed. Addictions broken. People set free. Salvations and baptisms often enough that they stopped being surprising. A small outreach grew into more than fifty people gathering every week to evangelize, and then into <a href=\"https://www.loveontheworld.com\">Love on The World</a>, carrying the same mission into other cities.",
      },
      {
        t: "p",
        text: "From there came the Overflow gatherings, the Jesus Festival — <a href=\"/festivals\">now reaching as far as Akuse, Ghana</a> — and years of training ordinary believers and whole churches to make evangelism a way of life rather than an event.",
      },
      {
        t: "quote",
        text: "It isn't an event. It's a way of life.",
        cite: "Daniel & Katie Ziedins, on evangelism",
      },

      { t: "h2", text: "Why e3 Canada and I Am Second" },
      {
        t: "p",
        text: "Today Daniel and Katie serve with <strong>e3 Canada</strong> and <strong>I Am Second</strong>, joining a work dedicated to equipping believers to evangelize and to establishing multiplying, life-changing churches around the world. It is a family of people who share the same five convictions:",
      },
      {
        t: "steps",
        items: [
          { title: "Equipping God's people", text: "Ordinary believers trained, confident, and sent — not spectators of someone else's ministry." },
          { title: "Evangelize His world", text: "Streets, campuses, hospitals, festivals: no place is off the map for the Gospel." },
          { title: "Establishing multiplying churches", text: "Disciples who make disciples, and churches that plant churches." },
          { title: "Love God", text: "Obedience to our King, before strategy and before results." },
          { title: "Love others", text: "Practical love that goes with the message and makes it believable." },
        ],
      },

      { t: "h2", text: "The vision ahead is bigger" },
      {
        t: "p",
        text: "The goal now is not one more outreach in one more city. It is <strong>100 multiplying outreach groups</strong> around the world through <a href=\"https://www.evangelize.world\">Evangelize.World</a> — ordinary believers, equipped and sent to bring the Gospel and practical love into their own communities. Groups that train the next group. Work that keeps going long after any one person has moved on.",
      },
      {
        t: "p",
        text: "And it rests on a conviction Daniel and Katie say plainly: that Canada is on the brink of its greatest revival, and that every one of us has a part to play in it.",
      },
      {
        t: "scripture",
        text: "After this I looked, and behold, a great multitude that no one could number, from every nation, from all tribes and peoples and languages, standing before the throne and before the Lamb.",
        ref: "Revelation 7:9",
      },
      {
        t: "p",
        text: "That is where this is all going. Every name added to that multitude is someone who was reached, here, by someone who went.",
      },

      { t: "h2", text: "Somebody has to be sent — and somebody has to send" },
      {
        t: "scripture",
        text: "How then will they call on him in whom they have not believed? And how are they to believe in him of whom they have never heard? And how are they to hear without someone preaching? And how are they to preach unless they are sent?",
        ref: "Romans 10:14–15",
      },
      {
        t: "p",
        text: "Paul's chain only works if every link holds. Someone preaches. Someone is sent. And behind every person who goes, there are people who make the going possible — people who pray when it is hard, who give so that the work can be full-time, who keep showing up.",
      },
      {
        t: "p",
        text: "Paul did not treat those people as donors. He called them partners, and he told them the fruit was theirs as much as his.",
      },
      {
        t: "scripture",
        text: "I thank my God in all my remembrance of you … because of your partnership in the gospel from the first day until now.",
        ref: "Philippians 1:3–5",
      },

      { t: "h2", text: "Three ways to stand with them" },
      {
        t: "steps",
        items: [
          {
            title: "Pray — first, and most",
            text: "For boldness on the streets. For the people they will meet this week whose names nobody knows yet. For their family. For the outreach groups being raised up. Prayer is not the lesser option; every rescue begins there.",
          },
          {
            title: "Give — if the Lord puts it on your heart",
            text: "Daniel and Katie are supported through e3 Canada. A monthly or one-time gift goes through e3 Canada's own secure giving page and funds the work directly: weekly outreach, training churches, and the freedom to say yes when God opens a door.",
          },
          {
            title: "Go — the invitation that costs most",
            text: "Learn to share your faith. Start where you live. Bring your church into training. The best partnership has never been a transaction — it is more people doing the same thing in their own city.",
          },
        ],
      },
      {
        t: "callout",
        title: "Partner with Daniel & Katie through e3 Canada",
        text: "Gifts are handled entirely on e3 Canada's own secure page. Every one helps put more of the Gospel on more streets.",
        href: "https://e3ministry.ca/staff/katie-daniel-ziedins",
        cta: "Give through e3 Canada",
      },
      {
        t: "p",
        text: "Want to see what partnership produces? Read <a href=\"/blog/the-harvest-is-real-kingdom-impact\">The Harvest Is Real</a>: the fruit from Jesus Festival Hamilton 2026, Love on The World and the road ahead.",
      },
      {
        t: "p",
        text: "If you want to start going yourself, begin with <a href=\"/blog/how-to-share-your-testimony\">telling your own story well</a>, then pick one of these <a href=\"/blog/church-outreach-ideas\">outreach ideas</a> and do it this week. And if you have never settled the question for yourself, <a href=\"/know-jesus\">start here</a> — that is where every one of these stories begins.",
      },

      { t: "h2", text: "God gives the growth" },
      {
        t: "p",
        text: "None of this is about a ministry's name, and none of it is ours to engineer. Paul said it best: one plants, another waters, God gives the growth — and all of us are simply His fellow workers. The invitation is to be one of them.",
      },
      {
        t: "scripture",
        text: "For we are God's fellow workers.",
        ref: "1 Corinthians 3:9",
      },
      {
        t: "callout",
        title: "Follow the journey",
        text: "Daniel and Katie's story, ministry updates, and everything the Lord is doing through their work live at KD-Ziedins.com. All for God's glory.",
        href: "https://www.kd-ziedins.com",
        cta: "Visit KD-Ziedins.com",
      },
    ],
  },  {
    slug: "the-harvest-is-real-kingdom-impact",
    title: "The Harvest Is Real: Kingdom Impact From Hamilton To The Nations",
    description:
      "70+ people gave their lives to Jesus and 50+ were baptized at Jesus Festival Hamilton 2026. Here is the fruit behind it — twelve years of street evangelism, Love on The World, SIX33 — and how you can partner with Daniel and Katie Ziedins through e3 Canada to plunder hell and populate heaven.",
    tldr: "Early reports from Jesus Festival Hamilton 2026 count 70+ people giving their lives to Jesus and 50+ baptisms in a city park. That fruit grew from twelve years of weekly street evangelism that began with Love on Hamilton in 2014, became Love on The World, and is now reaching Niagara and Akuse, Ghana. SIX33, a Christian culture brand coming soon, is being built to fund the same street outreach. You can stand with it by praying, by giving to Daniel and Katie Ziedins through e3 Canada, and by going yourself.",
    date: "2026-10-06",
    category: "Mission",
    eyebrow: "The fruit",
    keywords: [
      "Jesus Festival Hamilton 2026 results",
      "impact of evangelism",
      "support evangelism ministry Canada",
      "partner with missionaries e3 Canada",
      "plunder hell populate heaven",
      "Love on The World",
      "SIX33 Christian brand",
      "Daniel and Katie Ziedins",
    ],
    related: ["kd", "lotw", "jf-ca", "six33-world"],
    body: [
      {
        t: "p",
        text: "We have written <a href=\"/blog/plunder-hell-populate-heaven\">an invitation to partner</a>. This is the other half of it: what the partnership actually produces. Not theory. Not a vision deck. Names, baptisms, and a city park full of people hearing the Gospel for free.",
      },
      {
        t: "scripture",
        text: "Do you not say, 'There are yet four months, then comes the harvest'? Look, I tell you, lift up your eyes, and see that the fields are white for harvest.",
        ref: "John 4:35",
      },
      {
        t: "p",
        text: "Jesus told His disciples to look up. The harvest was not coming someday. It was standing in front of them. Here is some of what it looks like right now.",
      },

      { t: "h2", text: "Labour Day weekend at Gage Park" },
      {
        t: "p",
        text: "On September 4–5, 2026, Jesus Festival Hamilton filled Gage Park with free worship, testimony, prayer, food and families, with a record turnout. These are the early reports published by <a href=\"https://www.jesusfestival.ca/news/thank-you-hamilton-jesus-festival-2026\">JesusFestival.ca</a>:",
      },
      {
        t: "list",
        items: [
          "<strong>70+ people</strong> gave their lives to Jesus",
          "<strong>50+ baptisms</strong>, held right in the middle of the park",
          "<strong>3,000+</strong> free hot dogs and drinks served to the city",
          "Many reported healings and deliverances",
          "Altar calls on both Friday night and Saturday",
        ],
      },
      {
        t: "quote",
        text: "I was lost — who would have thought Jesus led me here!",
        cite: "Shared at the baptism tank, Jesus Festival Hamilton 2026",
      },
      {
        t: "p",
        text: "Behind each of those numbers is a person, someone's son or neighbour or coworker, who walked into a park on a holiday weekend and walked out with a new life. That is what <em>populate heaven</em> means, and it is why every number matters more than it looks.",
      },
      {
        t: "scripture",
        text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come.",
        ref: "2 Corinthians 5:17",
      },

      { t: "h2", text: "Three cities, two continents, one year" },
      {
        t: "p",
        text: "Hamilton was not alone. The same week, <a href=\"/akuse\">the Jesus Festival in Akuse, Ghana</a> lifted up the name of Jesus on another continent. And 2026 was the very first <a href=\"https://JesusFestivalNiagara.com\">Jesus Festival Niagara</a>, where the City of Niagara Falls lit the Falls yellow, the Jesus Festival colour, in recognition of the festival.",
      },
      {
        t: "p",
        text: "A movement that began as one free festival in one park is now an idea any city can carry. That is the point of everything on this site: <a href=\"/start-a-jesus-festival\">the playbook is free</a>, and <a href=\"/festivals\">every festival so far</a> is proof it can be done.",
      },
      {
        t: "scripture",
        text: "For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea.",
        ref: "Habakkuk 2:14",
      },

      { t: "h2", text: "The fruit grew from a weekly root" },
      {
        t: "p",
        text: "Festivals are the visible harvest. The roots are weekly, unglamorous and slow. In 2014 Daniel and Katie Ziedins started <a href=\"https://www.loveonhamilton.com\">Love on Hamilton</a>: street evangelism and practical care for Hamilton's homeless community, every single week. As <a href=\"https://www.kd-ziedins.com/blog/twelve-years-on-the-streets\">they tell it on KD-Ziedins.com</a>, it began with two people, coffee and a question, and grew into 20+ weekly outreach teams.",
      },
      {
        t: "p",
        text: "That rhythm became <a href=\"https://www.loveontheworld.com\">Love on The World</a>, a Great Commission movement making disciples who make disciples. Today it lists twelve city outreach groups across Ontario and New Brunswick, most meeting every week, and prays by name for 36 nations. <a href=\"https://www.loveontheworld.com/impact\">Its impact page</a> tells the whole story.",
      },
      {
        t: "scripture",
        text: "And the Lord added to their number day by day those who were being saved.",
        ref: "Acts 2:47",
      },
      {
        t: "p",
        text: "Notice the order in Acts: day by day. Not once a year. The festival weekend works because there are people on the streets every other weekend of the year, and churches ready to <a href=\"/blog/how-to-follow-up-with-a-new-believer\">follow up with every new believer</a> when the stage comes down.",
      },

      { t: "h2", text: "Impacting culture: SIX33" },
      {
        t: "p",
        text: "The Gospel was never meant to stay inside church walls, or inside a festival fence. That is the heart of <a href=\"https://www.six33.world\">SIX33</a>, coming really soon: a Christian lifestyle and performance culture brand for people who refuse to waste their potential. It started in 2014 as Seek First Brand and is being rebuilt in 2026 as SIX33, with its whole operating order taken from one verse.",
      },
      {
        t: "scripture",
        text: "But seek first the kingdom of God and his righteousness, and all these things will be added to you.",
        ref: "Matthew 6:33",
      },
      {
        t: "p",
        text: "Purpose, performance, culture and impact, with Jesus first and everyone welcome. And here is the part that ties it all together: a major part of SIX33's heart is raising funds for Love on The World's street-level outreach. The culture work pays for the street work. Every drop, every athlete, every story points back to the same mission.",
      },
      {
        t: "scripture",
        text: "In the same way, let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.",
        ref: "Matthew 5:16",
      },
      {
        t: "callout",
        title: "SIX33 is coming soon",
        text: "Seek first. Live different. The Inner Circle gets first access and the first drop. Be early.",
        href: "https://www.six33.world",
        cta: "Visit SIX33.World",
      },

      { t: "h2", text: "Numbers are never the point — people are" },
      {
        t: "p",
        text: "We share these figures carefully, because they are early reports and because heaven counts differently than we do. Jesus left ninety-nine sheep for one. A festival can feel huge, and a single conversation on a Tuesday night can matter just as much.",
      },
      {
        t: "scripture",
        text: "I planted, Apollos watered, but God gave the growth. So neither he who plants nor he who waters is anything, but only God who gives the growth.",
        ref: "1 Corinthians 3:6–7",
      },
      {
        t: "p",
        text: "So the numbers are not trophies. They are reasons to keep going, and receipts for everyone who prayed and gave. All the glory goes to Jesus.",
      },

      { t: "h2", text: "Your share of the fruit" },
      {
        t: "p",
        text: "Today Daniel and Katie serve full-time with <strong>e3 Canada</strong> and <strong>I Am Second</strong>, equipping believers to evangelize and helping establish multiplying churches, with a goal of <strong>100 multiplying outreach groups</strong> around the world through <a href=\"https://www.evangelize.world\">Evangelize.World</a>. That kind of work runs on partners.",
      },
      {
        t: "p",
        text: "Paul said something remarkable to the church in Philippi, who supported him while he travelled. He was not after their money. He wanted the fruit of the mission credited to <em>them</em>.",
      },
      {
        t: "scripture",
        text: "Not that I seek the gift, but I seek the fruit that increases to your credit.",
        ref: "Philippians 4:17",
      },
      {
        t: "p",
        text: "That is what partnership is. When someone is baptized in a park in Hamilton, or a new outreach group starts in a city that had none, the people who prayed and gave share in that harvest. To plunder hell and populate heaven is a team sport.",
      },
      {
        t: "steps",
        items: [
          {
            title: "Pray",
            text: "For the 70+ who said yes at Gage Park to be rooted in local churches. For the outreach teams on the streets this week. For Daniel, Katie and their family. For Canada to see revival.",
          },
          {
            title: "Give",
            text: "If the Lord puts it on your heart, partner monthly or once with Daniel and Katie through e3 Canada's own secure giving page. Every gift funds weekly outreach, training churches and saying yes to the next open door.",
          },
          {
            title: "Go",
            text: "Learn to share your story, join or start an outreach group, or bring a Jesus Festival to your own city. The best partners end up doing the same thing where they live.",
          },
          {
            title: "Share",
            text: "Send this to someone who would want to know what God is doing. Testimony is fuel.",
          },
        ],
      },
      {
        t: "callout",
        title: "Partner with Daniel & Katie through e3 Canada",
        text: "Gifts are handled entirely on e3 Canada's secure page and go straight to the work. Thank you for sending.",
        href: "https://e3ministry.ca/staff/katie-daniel-ziedins",
        cta: "Give through e3 Canada",
      },
      {
        t: "p",
        text: "Ready to go yourself? Start with <a href=\"/blog/how-to-share-your-testimony\">how to share your testimony</a>, pick one of these <a href=\"/blog/church-outreach-ideas\">church outreach ideas</a>, or <a href=\"/start-a-jesus-festival\">bring a Jesus Festival to your city</a>. And if you have never settled the question for yourself, <a href=\"/know-jesus\">start here</a>. Every story in this post began exactly there.",
      },
      {
        t: "scripture",
        text: "Let us not grow weary of doing good, for in due season we will reap, if we do not give up.",
        ref: "Galatians 6:9",
      },
      {
        t: "callout",
        title: "Follow the whole journey",
        text: "Daniel and Katie's story, ministry updates and every new door the Lord opens live at KD-Ziedins.com. To God be the glory.",
        href: "https://www.kd-ziedins.com",
        cta: "Visit KD-Ziedins.com",
      },
    ],
  },
];

export const POST_BY_SLUG = new Map(POSTS.map((p) => [p.slug, p]));

/**
 * Real word count of a post's readable content. The reading time and the
 * schema's wordCount both derive from this — never the other way round.
 * Hand-typed reading times had drifted to roughly double the truth.
 */
export function wordCount(p: Post): number {
  const parts: string[] = [p.tldr ?? ""];
  for (const b of p.body) {
    if ("text" in b) parts.push(b.text);
    if ("title" in b) parts.push(b.title);
    if ("cite" in b && b.cite) parts.push(b.cite);
    if ("items" in b)
      for (const i of b.items as (string | { title: string; text: string })[])
        parts.push(typeof i === "string" ? i : `${i.title} ${i.text}`);
  }
  return parts.join(" ").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
}

/** Minutes at 230 wpm, a typical adult silent-reading pace. Never below 1. */
export function readingMinutes(p: Post): number {
  return Math.max(1, Math.round(wordCount(p) / 230));
}

/** Newest first. */
export const SORTED_POSTS = [...POSTS].sort((a, b) =>
  b.date.localeCompare(a.date),
);

const STOP = new Set(
  "a an and the to of in on for with your you how what why is are it be do does our we at as from after that this".split(" "),
);
function terms(p: Post): Set<string> {
  const words = [p.title, p.category, p.eyebrow, ...p.keywords]
    .join(" ")
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
  return new Set(words);
}
const TERMS = new Map(POSTS.map((p) => [p.slug, terms(p)]));

function relevance(a: Post, b: Post): number {
  const ta = TERMS.get(a.slug)!, tb = TERMS.get(b.slug)!;
  let shared = 0;
  for (const t of ta) if (tb.has(t)) shared++;
  return shared + (a.category === b.category ? 2 : 0);
}

/**
 * Related posts for every article, computed once.
 *
 * Replaces "the two newest posts", which made every article recommend the same
 * pair and left six of nine with no inbound links at all — and would have got
 * worse with every post added.
 *
 * Relevance is term overlap across title, category, eyebrow and keywords. Each
 * time a post is picked it pays a small penalty on later picks, so links
 * spread across the catalogue instead of pooling on whichever post happens to
 * share the most generic words. Order and tie-breaks are content-derived —
 * never Date or random, which would differ between build and hydration.
 */
const RELATED: Map<string, Post[]> = (() => {
  const PENALTY = 0.75;
  const picked = new Map(POSTS.map((p) => [p.slug, 0]));
  const out = new Map<string, Post[]>();
  const ordered = [...POSTS].sort((a, b) => a.slug.localeCompare(b.slug));
  for (const post of ordered) {
    const chosen = POSTS.filter((p) => p.slug !== post.slug)
      .map((p) => ({ p, s: relevance(post, p) - PENALTY * picked.get(p.slug)! }))
      .sort((a, b) => b.s - a.s || a.p.slug.localeCompare(b.p.slug))
      .slice(0, 3)
      .map((x) => x.p);
    for (const c of chosen) picked.set(c.slug, picked.get(c.slug)! + 1);
    out.set(post.slug, chosen);
  }
  return out;
})();

export function relatedPosts(post: Post, n = 3): Post[] {
  return (RELATED.get(post.slug) ?? []).slice(0, n);
}
