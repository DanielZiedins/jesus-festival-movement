/**
 * "The Movement Letters" — the onboarding journey every new subscriber walks
 * through. One letter at a time, each one carrying a piece of the vision and
 * ending with something the reader can actually do.
 *
 * `dayOffset` is days after signup. The drip cron sends the earliest unsent
 * flow whose offset has elapsed, so the order here is the order received.
 *
 * Impact language is deliberately qualitative — it mirrors what the site
 * itself claims. Do not add invented numbers here.
 */

import { SITE_URL, escapeHtml, type EmailBlock } from "./shell";

export type FlowKey =
  | "welcome"
  | "story"
  | "impact"
  | "toolkit"
  | "mission"
  | "initiatives"
  | "your-role"
  | "everyday"
  | "invitation";

export type Flow = {
  key: FlowKey;
  dayOffset: number;
  /** Short label for the preview index and logs. */
  label: string;
  build: (name?: string) => EmailBlock;
};

/**
 * "Friend" reads warmer than an empty space when we have no name.
 * Escaped because `intro` strings are rendered as raw HTML — the name is
 * self-supplied at signup, so it must never be trusted as markup.
 */
const greet = (name?: string) => {
  const first = name?.trim().split(/\s+/)[0];
  return first && first.length > 1 ? escapeHtml(first.slice(0, 40)) : "friend";
};

export const FLOWS: Flow[] = [
  // ── Day 0 ──────────────────────────────────────────────────────────
  {
    key: "welcome",
    dayOffset: 0,
    label: "Welcome — you already have a role",
    build: (name) => ({
      subject: "You're in — and you already have a role in this",
      preheader:
        "Welcome to the Jesus Festival Movement. Here's what you've just joined, and why you matter to it.",
      eyebrow: "Welcome To The Movement",
      heading: "You're in, and you already<br>have a role in this.",
      intro: [
        `Hi ${greet(name)} — thank you for joining us.`,
        `You didn't just sign up for a newsletter. You stepped into something God is doing across cities and nations, and you have a genuine part in it.`,
        `Here's what we believe: <strong>the Great Commission was never given to a handful of professionals.</strong> It was given to the Church — to ordinary people who say yes. Some preach. Some pray. Some set up chairs, run sound, hand out water, or walk a nervous new believer to their first conversation about Jesus. Every one of those is Kingdom work. Every one of those matters.`,
        `Over the next few weeks we'll send you a short series of letters — the story of how this started, what God has actually done, where we're going, and the specific ways you can play your part. No noise. No pressure. Just the vision, and an open door.`,
      ],
      scripture: {
        text: "Now you are the body of Christ, and each one of you is a part of it.",
        reference: "1 Corinthians 12:27",
      },
      extra: `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:26px 0 0;">
          <tr>
            <td style="padding:18px 20px;background:rgba(255,107,53,0.08);border:1px solid rgba(255,107,53,0.25);border-radius:14px;">
              <div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#ff8a5b;font-weight:700;">Start Here</div>
              <div style="font-size:15px;line-height:1.7;color:#e8ebf7;padding-top:8px;">
                If you only do one thing today, do this: <strong>pray for your city by name.</strong>
                Ask God what He wants to do there — and whether He's inviting you into it.
                Every festival we've ever held started exactly that way.
              </div>
            </td>
          </tr>
        </table>`,
      cta: { label: "See The Vision", url: `${SITE_URL}/#vision` },
      ps: `<strong>P.S.</strong> If you're reading this and you don't yet know Jesus personally — that's the most important thing on our whole website. <a href="${SITE_URL}/know-jesus" style="color:#f5c451;">Start here</a>, no pressure at all.`,
    }),
  },

  // ── Day 2 ──────────────────────────────────────────────────────────
  {
    key: "story",
    dayOffset: 2,
    label: "The story — one step of faith in Hamilton",
    build: (name) => ({
      subject: "It started with one step of faith in Hamilton",
      preheader:
        "No big budget, no platform, no guarantee it would work. Just a conviction that Jesus should be lifted up publicly in our city.",
      eyebrow: "The Origin Story",
      heading: "It started with one step<br>of faith in Hamilton.",
      intro: [
        `Hi ${greet(name)},`,
        `There was no big budget. No platform. No guarantee any of it would work.`,
        `What there was: a conviction that Jesus should be lifted up publicly in our city, and a small group of people willing to find out what God would do if we actually tried.`,
        `So we prayed. We gathered a team. We knocked on doors and asked pastors who had never worked together to stand on one stage. We filled out permit forms. We trained volunteers who had never shared their faith out loud before. And on the day, we preached the Gospel in the open air of Hamilton, Ontario.`,
        `<strong>God showed up.</strong> People met Jesus. People were baptized. Churches that had operated in separate lanes for years worshipped shoulder to shoulder. And the thing we didn't expect — it didn't stop when the stage came down.`,
        `That's the part that turned an event into a movement. And it's the reason we now give the entire model away for free to anyone who asks.`,
      ],
      scripture: {
        text: "Do not despise these small beginnings, for the Lord rejoices to see the work begin.",
        reference: "Zechariah 4:10",
      },
      cta: { label: "Read The Full Story", url: `${SITE_URL}/#story` },
      ps: `<strong>P.S.</strong> Whatever you're praying about for your own city right now — the first Jesus Festival was once exactly that. An unanswered prayer and an unreasonable idea.`,
    }),
  },

  // ── Day 5 ──────────────────────────────────────────────────────────
  {
    key: "impact",
    dayOffset: 5,
    label: "The impact — what God has actually done",
    build: (name) => ({
      subject: "The fruit is real (here's what God has done)",
      preheader:
        "Salvations, baptisms, churches united, and outreach still running long after the stage came down.",
      eyebrow: "Testimonies & Fruit",
      heading: "The fruit is real.",
      intro: [
        `Hi ${greet(name)},`,
        `It would be easy to measure a festival by attendance. We don't. We measure it by what's still standing a year later.`,
        `Here's what God has done through Jesus Festivals so far:`,
      ],
      list: [
        {
          title: "People have met Jesus",
          body: "Men and women who arrived not knowing Him have gone home forgiven, free, and full of joy. Not statistics — actual people, with names, whose lives changed direction.",
        },
        {
          title: "New believers have been baptized",
          body: "Public declarations of new life, celebrated by a whole crowd of people who had never met them before that day.",
        },
        {
          title: "Churches have stood together",
          body: "Congregations that had never collaborated shared one stage to lift up one name. One local pastor told us that alone was a miracle.",
        },
        {
          title: "Outreach has kept going",
          body: "This is the one we care most about. Teams that formed for a festival are still on the streets every week, sharing the Gospel long after the equipment was returned.",
        },
      ],
      scripture: {
        text: "I planted, Apollos watered, but God gave the growth.",
        reference: "1 Corinthians 3:6",
      },
      extra: `
        <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#e8ebf7;">
          We say this carefully, because we know who did it. We organized. We showed up.
          <strong>God saved people.</strong> Every bit of fruit belongs to Him.
        </p>`,
      cta: { label: "Read The Testimonies", url: `${SITE_URL}/#testimonies` },
      ps: `<strong>P.S.</strong> Have a testimony from a Jesus Festival — yours or someone else's? Just reply to this email. We'd love to celebrate it with you.`,
    }),
  },

  // ── Day 7 ──────────────────────────────────────────────────────────
  {
    key: "toolkit",
    dayOffset: 7,
    label: "The toolkit — free things that actually help",
    build: (name) => ({
      subject: "Three free tools that will help you reach people",
      preheader:
        "Map the people already around you, keep track of follow-up, and have somewhere to send someone who's asking questions.",
      eyebrow: "Tools For The Harvest",
      heading: "Three free tools that<br>actually help.",
      intro: [
        `Hi ${greet(name)},`,
        `Most people don't need more motivation to share their faith. They need somewhere concrete to start, and a way to not drop the ball afterwards.`,
        `So here are three things we've built or lean on constantly. All free, all genuinely useful today — no festival required.`,
      ],
      list: [
        {
          title: "1. Map the people already around you",
          body: `Most people meet Jesus through someone they already know. <a href="https://OikosMap.com" style="color:#f5c451;">OikosMap</a> walks you through listing your relational world — family, friends, workmates, neighbours — so you can pray for them by name. Ten minutes, and most people are surprised how many names appear.`,
        },
        {
          title: "2. Don't lose the people who respond",
          body: `The hardest part of any outreach is the Monday after. <a href="https://KingdomBase.App" style="color:#f5c451;">Kingdom Base</a> is an evangelism CRM that keeps every conversation and follow-up in one place. We built it because we kept losing track of people we genuinely cared about.`,
        },
        {
          title: "3. Have somewhere to send someone",
          body: `Sometimes a person isn't ready to talk but is ready to read. <a href="https://IAmReborn.net" style="color:#f5c451;">IAmReborn.net</a> explains the new birth plainly, and our own <a href="${SITE_URL}/know-jesus" style="color:#f5c451;">Gospel page</a> ends with a prayer anyone can pray.`,
        },
      ],
      extra: `
        <p style="margin:16px 0 0;font-size:16px;line-height:1.7;color:#e8ebf7;">
          And if you want the thinking behind all of it, we wrote up
          <a href="${SITE_URL}/blog/share-the-gospel-with-someone-you-already-know" style="color:#f5c451;">how to share the Gospel with someone you already know</a>
          — the version that doesn't require being weird about it.
        </p>`,
      scripture: {
        text: "He first found his own brother Simon and said to him, 'We have found the Messiah.'",
        reference: "John 1:41",
      },
      cta: { label: "Build Your Oikos Map", url: "https://OikosMap.com" },
      ps: `<strong>P.S.</strong> If you only do one of these, do the first one. Everything else follows from actually seeing who God has already put around you.`,
    }),
  },

  // ── Day 9 ──────────────────────────────────────────────────────────
  {
    key: "mission",
    dayOffset: 9,
    label: "The mission — 2.3 billion and the map",
    build: (name) => ({
      subject: "2.3 billion people — and why we're not discouraged",
      preheader:
        "The Great Commission is still before us, and we believe it can be fulfilled in our generation.",
      eyebrow: "The Great Commission",
      heading: "2.3 billion people —<br>and why we're not discouraged.",
      intro: [
        `Hi ${greet(name)},`,
        `Here is the picture we keep in front of us:`,
      ],
      stats: [
        { value: "8.3B", label: "World Population" },
        { value: "2.6B", label: "Christians" },
        { value: "2.3B", label: "No Gospel Access" },
      ],
      scripture: {
        text: "And this gospel of the kingdom will be preached in all the world as a witness to all the nations, and then the end will come.",
        reference: "Matthew 24:14",
      },
      list: [
        {
          title: "Our goal isn't more events",
          body: "It's <strong>movements</strong>. Every festival is designed to leave behind ongoing evangelism, discipleship, and unity in that city — so the work continues without us.",
        },
        {
          title: "Our goal is a map that keeps filling in",
          body: "Hamilton and Niagara are on it. Toronto is being planned. New York, London, Lagos, Nairobi, Mumbai, Manila, São Paulo and Sydney are being prayed for. We want to run out of room.",
        },
        {
          title: "Our goal is to give it all away",
          body: "The full 13-step playbook is free, forever. If a leader in another city can do this better than us, we want to hand them everything we have and get out of the way.",
        },
      ],
      extra: `
        <p style="margin:16px 0 0;font-size:16px;line-height:1.7;color:#e8ebf7;">
          2.3 billion is not a number to fear. <strong>It's a frontier to cross.</strong>
          And it will not be crossed by a few famous preachers — it will be crossed by
          an awakened Church full of ordinary people who decided their city was worth it.
        </p>`,
      cta: { label: "See The Global Map", url: `${SITE_URL}/#map` },
      ps: `<strong>P.S.</strong> Is your city on the map yet? Reply and tell us its name — we'll pray for it this week. If seeing the gaps helps you pray, <a href="https://LoveOnMission.world" style="color:#f5c451;">Love on Mission</a> maps the whole thing.`,
    }),
  },

  // ── Day 14 ─────────────────────────────────────────────────────────
  {
    key: "initiatives",
    dayOffset: 14,
    label: "Our initiatives — where the work is happening",
    build: (name) => ({
      subject: "Where the work is actually happening right now",
      preheader:
        "Jesus Festival Hamilton, Jesus Festival Niagara, Love on The World, and the outreach that keeps going between festivals.",
      eyebrow: "Ministry Initiatives",
      heading: "Where the work is<br>actually happening.",
      intro: [
        `Hi ${greet(name)},`,
        `People often ask what "the movement" actually consists of day to day. Here it is — the initiatives your prayers and partnership go into.`,
      ],
      list: [
        {
          title: "Jesus Festival: Hamilton",
          body: `Where the vision began. Worship, evangelism, unity, baptisms and outreach in Hamilton, Ontario. <a href="https://JesusFestival.ca" style="color:#f5c451;">JesusFestival.ca</a>`,
        },
        {
          title: "Jesus Festival: Niagara",
          body: `The expansion — another step of faith to see a whole region impacted. <a href="https://JesusFestivalNiagara.com" style="color:#f5c451;">JesusFestivalNiagara.com</a>`,
        },
        {
          title: "Love on The World",
          body: `Our partner ministry carrying evangelism, outreach, discipleship, and mobilizing believers into the harvest. <a href="https://LoveOnTheWorld.com" style="color:#f5c451;">LoveOnTheWorld.com</a>`,
        },
        {
          title: "Ongoing city outreach",
          body: `The unglamorous, week-in week-out part. <a href="https://LoveOnHamilton.com" style="color:#f5c451;">Love on Hamilton</a> is what that looks like in our own city — teams on the streets between festivals, still going years later.`,
        },
        {
          title: "On the day itself",
          body: `<a href="https://JesusFestival.app" style="color:#f5c451;">JesusFestival.app</a> carries the schedule, the map and the next steps so nobody stands in a field wondering where to go.`,
        },
        {
          title: "When a city is in crisis",
          body: `The Church should be first through the door when a community is hurting. <a href="https://KingdomResponse.com" style="color:#f5c451;">Kingdom Response</a> helps churches mobilise fast without duplicating effort.`,
        },
        {
          title: "The free playbook",
          body: `Our 13-step guide for any leader anywhere who wants to start a festival in their own city — checklists, timelines and hard-won warnings, given away free. <a href="${SITE_URL}/start-a-jesus-festival/playbook" style="color:#f5c451;">Read it here</a>`,
        },
      ],
      extra: `
        <p style="margin:16px 0 0;font-size:16px;line-height:1.7;color:#e8ebf7;">
          All of it sits inside <a href="https://ThyKingdom.net" style="color:#f5c451;">Thy Kingdom Network</a>,
          with the heart behind it written out at <a href="https://SeekFirst.World" style="color:#f5c451;">SeekFirst.World</a>.
          You can see everything in one place on
          <a href="${SITE_URL}/network" style="color:#f5c451;">our network page</a>.
        </p>
        <p style="margin:16px 0 0;font-size:16px;line-height:1.7;color:#e8ebf7;">
          None of this is run by a large organization. It's run by people with jobs and
          families who decided the Gospel was worth their evenings and weekends.
          <strong>That's who this movement is made of.</strong>
        </p>`,
      cta: { label: "See The Whole Network", url: `${SITE_URL}/network` },
      ps: `<strong>P.S.</strong> Next letter is the practical one — the specific ways you can step in, whatever your season or capacity looks like.`,
    }),
  },

  // ── Day 21 ─────────────────────────────────────────────────────────
  {
    key: "your-role",
    dayOffset: 21,
    label: "Your role — five ways to step in",
    build: (name) => ({
      subject: "We all play a role — here's yours",
      preheader:
        "Five real ways to step in, whatever your season or capacity looks like right now.",
      eyebrow: "Your Part In This",
      heading: "We all play a role.<br>Here's yours.",
      intro: [
        `Hi ${greet(name)},`,
        `We've told you the story, the fruit, the mission and the initiatives. Now the honest ask.`,
        `<strong>No one does this alone, and no one is exempt.</strong> The body of Christ works precisely because different people carry different parts. Here are five real ways to step in — pick the one that fits the season you're actually in, not the one you feel guilty about.`,
      ],
      list: [
        {
          title: "1. Pray",
          body: "The least visible and most powerful. Pray for your city by name. Pray for the cities on our map. Nothing we've seen happened without it.",
        },
        {
          title: "2. Go",
          body: "Join an outreach. Serve at a festival. Learn to share your faith — most of our volunteers had never done it before their first day, and they'll tell you it changed them as much as anyone they spoke to.",
        },
        {
          title: "3. Host",
          body: `Start one in your city. The full playbook is free and we'll walk with you personally. <a href="${SITE_URL}/start-a-jesus-festival/playbook" style="color:#f5c451;">Open the playbook</a>`,
        },
        {
          title: "4. Give",
          body: "Stages, sound, permits, insurance and printed materials all cost money. Partnership makes free public Gospel proclamation possible.",
        },
        {
          title: "5. Share",
          body: `Send someone the Gospel page, or forward this email to a leader who's been dreaming about their own city. <a href="${SITE_URL}/know-jesus" style="color:#f5c451;">The Gospel page is here</a>`,
        },
      ],
      scripture: {
        text: "The harvest is plentiful, but the laborers are few. Therefore pray earnestly to the Lord of the harvest to send out laborers into his harvest.",
        reference: "Matthew 9:37–38",
      },
      extra: `
        <p style="margin:16px 0 0;font-size:16px;line-height:1.7;color:#e8ebf7;">
          If you read that list and thought <em>"I can only pray right now"</em> — then pray,
          and know that you are doing the thing everything else depends on.
          <strong>There are no small parts in this.</strong>
        </p>`,
      cta: { label: "Tell Us How You'd Like To Help", url: `${SITE_URL}/#contact` },
      ps: `<strong>P.S.</strong> Genuinely — just reply to this email. A real person reads every one.`,
    }),
  },

  // ── Day 24 ─────────────────────────────────────────────────────────
  {
    key: "everyday",
    dayOffset: 24,
    label: "Everyday faith — Monday matters",
    build: (name) => ({
      subject: "Your Monday counts as much as your Sunday",
      preheader:
        "If ministry only counts on a platform, most of the Church is benched most of the week. Scripture disagrees.",
      eyebrow: "Everyday Faith",
      heading: "Your Monday counts as<br>much as your Sunday.",
      intro: [
        `Hi ${greet(name)},`,
        `A quiet lie runs through a lot of church culture: that <em>real</em> ministry happens on a stage, and everything else is what you do to fund it.`,
        `If that were true, then the nurse, the plumber, the teacher and the developer are all second-tier Christians. Which would be strange, given that most of Jesus' own life was spent in a workshop.`,
      ],
      scripture: {
        text: "Whatever you do, work heartily, as for the Lord and not for men.",
        reference: "Colossians 3:23",
      },
      extra: `
        <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#e8ebf7;">
          Consider the arithmetic. A committed churchgoer might spend three hours a week
          in a church building — and forty at work. And the people at that workplace are
          far less likely to walk into a church than the people already in one.
          <strong>Your colleagues are a mission field no evangelist can reach as naturally as you can.</strong>
        </p>`,
      list: [
        {
          title: "Do excellent work",
          body: "Competence buys credibility. Sloppy work with a fish on the business card damages the name you're trying to honour.",
        },
        {
          title: "Be conspicuously kind",
          body: "Be decent to the people others are short with. It gets noticed far more than you think, and it's usually what prompts the eventual question.",
        },
        {
          title: "Be honest when it costs you",
          body: "Integrity is only visible when it's expensive. That's the moment your faith stops being an abstraction to the people watching.",
        },
        {
          title: "Let your work fund the harvest",
          body: `Stages, sound, permits and insurance cost real money. Festivals often happen because business owners decided their profit had a purpose — the conviction behind <a href="https://LionsDenAlliance.com" style="color:#f5c451;">Lions Den Alliance</a>.`,
        },
        {
          title: "Use what you make",
          body: `Tools, stories and even clothing open doors. <a href="https://TaskSimply.com" style="color:#f5c451;">TaskSimply</a> came out of running festival logistics; <a href="https://SIX33Legends.com" style="color:#f5c451;">SIX33 Legends</a> tells stories that reach people arguments can't; <a href="https://SIX33Outpost.com" style="color:#f5c451;">SIX33 Outpost</a> exists because a t-shirt has started more conversations than a tract.`,
        },
      ],
      cta: {
        label: "Read: Kingdom Work Outside Of Sunday",
        url: `${SITE_URL}/blog/kingdom-work-outside-of-sunday`,
      },
      ps: `<strong>P.S.</strong> Before any of the public work there's the private version nobody applauds — a marriage served well, children discipled patiently, a home genuinely open. <a href="https://KD-Ziedins.com" style="color:#f5c451;">Daniel &amp; Katie</a> write about that side of it, and there's longer-form thinking at <a href="https://DanielZiedins.com" style="color:#f5c451;">DanielZiedins.com</a>.`,
    }),
  },

  // ── Day 30 ─────────────────────────────────────────────────────────
  {
    key: "invitation",
    dayOffset: 30,
    label: "The invitation — imagine your city",
    build: (name) => ({
      subject: "Imagine your city on the map",
      preheader:
        "The last letter in the series — and an open invitation that doesn't expire.",
      eyebrow: "The Invitation",
      heading: "Imagine your city<br>on the map.",
      intro: [
        `Hi ${greet(name)},`,
        `This is the last letter in the welcome series. From here you'll just hear from us occasionally with real updates — what God is doing, where the movement is going, and how to pray.`,
        `Before that, one invitation.`,
        `Picture the park or square in your city where people already gather. Picture worship going up from it. Picture the Gospel preached clearly and kindly to people who have never once heard it. Picture believers from churches that don't normally talk to each other standing together. Picture someone going home forgiven.`,
        `<strong>That is not a fantasy. That is a Saturday, a permit, a team, and a lot of prayer.</strong> We know, because it's exactly how ours started — and we've written down every step so you don't have to guess.`,
        `It is a lot of work. We'd never pretend otherwise. But when lives are changed, a city is stirred, and Jesus is glorified — <strong>it is SO worth it.</strong>`,
      ],
      scripture: {
        text: "How beautiful are the feet of those who bring good news!",
        reference: "Romans 10:15",
      },
      cta: {
        label: "Open The Free Playbook",
        url: `${SITE_URL}/start-a-jesus-festival/playbook`,
      },
      ps: `<strong>P.S.</strong> Not the right season to host one? That's completely fine. Stay with us, keep praying, and forward this to the person you thought of while reading it.`,
    }),
  },
];

export const FLOW_BY_KEY = new Map(FLOWS.map((f) => [f.key, f]));
