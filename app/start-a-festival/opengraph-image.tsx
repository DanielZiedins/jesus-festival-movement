import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "How To Start A Jesus Festival In Your City — the free 13-step playbook";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Og() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 20% 10%, #1a1030 0%, #05060f 58%)",
          color: "#fff",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#f5c451",
            marginBottom: 26,
          }}
        >
          The Playbook · Free Forever
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.05,
            background: "linear-gradient(120deg,#ffd76e,#ff6b35)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 28,
          }}
        >
          How To Start A Jesus Festival In Your City
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#c7cdf0" }}>
          13 steps · 4 phases · checklists, timelines & what to watch out for
        </div>
      </div>
    ),
    { ...size },
  );
}
