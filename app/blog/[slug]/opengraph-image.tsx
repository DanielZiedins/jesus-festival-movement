import { ImageResponse } from "next/og";
import { POST_BY_SLUG, POSTS } from "@/lib/blog/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export const alt = "Jesus Festival Movement — The Journal";

// Next 15+ delivers route params as a Promise; without awaiting it every
// post's card silently fell back to the generic "The Journal" title.
export default async function Og({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POST_BY_SLUG.get(slug);
  const title = post?.title ?? "The Journal";
  const category = post?.category ?? "Jesus Festival Movement";
  const read = post ? `${post.readMinutes} min read` : "";

  // Long headlines need to step down a size or they overflow the card.
  const fontSize = title.length > 62 ? 60 : title.length > 44 ? 70 : 80;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 18% 8%, #1a1030 0%, #05060f 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 7,
            textTransform: "uppercase",
            color: "#f5c451",
          }}
        >
          {category}
        </div>

        <div
          style={{
            display: "flex",
            fontSize,
            fontWeight: 800,
            lineHeight: 1.08,
            background: "linear-gradient(120deg,#ffffff 40%,#ffd76e 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#c7cdf0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "linear-gradient(135deg,#ffd76e,#ff6b35)",
                color: "#05060f",
                fontSize: 24,
                fontWeight: 700,
                marginRight: 14,
              }}
            >
              ✝
            </div>
            JesusFestivalMovement.com
          </div>
          <div style={{ display: "flex", color: "#8b93b8" }}>{read}</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
