import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt = "Straight answers on Gospel festivals, evangelism and faith";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({
    eyebrow: "Answers",
    title: "Straight answers,",
    accent: "no runaround.",
    description:
      "What a Jesus Festival is, how to start one, permits and costs, training volunteers, follow-up — and how to know Jesus.",
  });
}
