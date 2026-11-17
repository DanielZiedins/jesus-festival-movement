/**
 * The 21-day Gospel of John plan: one chapter a day. Shared by the page, its
 * HowTo schema, and llms.txt so a day is only ever described once.
 */
export type PlanDay = { day: number; title: string; key: string; ask: string };

export const JOHN_PLAN: PlanDay[] = [
  { day: 1, title: "The Word became flesh", key: "John 1:14", ask: "What does it mean that God \"dwelt among us\"?" },
  { day: 2, title: "Water into wine", key: "John 2:11", ask: "What did the first sign show the disciples about Jesus?" },
  { day: 3, title: "Born again", key: "John 3:16", ask: "What does Jesus say you need, and how is it received?" },
  { day: 4, title: "The woman at the well", key: "John 4:14", ask: "What \"thirst\" in your life is Jesus offering to meet?" },
  { day: 5, title: "Healing at the pool", key: "John 5:24", ask: "What does Jesus promise to the one who hears and believes?" },
  { day: 6, title: "The bread of life", key: "John 6:35", ask: "Why did some people walk away — and why did Peter stay?" },
  { day: 7, title: "Rivers of living water", key: "John 7:37–38", ask: "Who does Jesus invite to come to Him?" },
  { day: 8, title: "The light of the world", key: "John 8:12", ask: "What does it look like to follow the light today?" },
  { day: 9, title: "The man born blind", key: "John 9:25", ask: "What could you say, like him, about what Jesus has done?" },
  { day: 10, title: "The good shepherd", key: "John 10:11", ask: "What does the good shepherd do that a hired hand won't?" },
  { day: 11, title: "Lazarus raised", key: "John 11:25–26", ask: "How do you answer Jesus' question: \"Do you believe this?\"" },
  { day: 12, title: "The King arrives", key: "John 12:24", ask: "What does the grain of wheat teach about Jesus' death?" },
  { day: 13, title: "He washes their feet", key: "John 13:34–35", ask: "Whose \"feet\" could you serve this week?" },
  { day: 14, title: "The way, the truth, the life", key: "John 14:6", ask: "What comfort does Jesus give troubled hearts?" },
  { day: 15, title: "The vine and the branches", key: "John 15:5", ask: "What helps you \"abide\" in Jesus day by day?" },
  { day: 16, title: "The Spirit comes", key: "John 16:33", ask: "What does Jesus promise in a world with trouble?" },
  { day: 17, title: "Jesus prays for us", key: "John 17:20–21", ask: "Jesus prayed for you here. What did He ask for?" },
  { day: 18, title: "Arrested and denied", key: "John 18:37", ask: "Where do you see Peter's fear in yourself?" },
  { day: 19, title: "\"It is finished\"", key: "John 19:30", ask: "What was finished on the cross?" },
  { day: 20, title: "He is risen", key: "John 20:31", ask: "Why did John write this book — and has it done that for you?" },
  { day: 21, title: "Breakfast on the shore", key: "John 21:17", ask: "Peter failed and was restored. What does Jesus ask you?" },
];
