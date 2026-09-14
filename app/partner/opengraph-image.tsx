import { socialCard, socialCardSize } from "@/lib/social-card";

export const alt =
  "Partner with Daniel and Katie Ziedins — serving with e3 Canada and I Am Second";
export const size = socialCardSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return socialCard({
    eyebrow: "Daniel & Katie Ziedins",
    title: "We all have a part",
    accent: "in what God is doing.",
    description:
      "Pray, give and go with Daniel and Katie — serving with e3 Canada and I Am Second since 2014.",
  });
}
