import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Know Jesus — the good news, explained simply";
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
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background:
            "radial-gradient(circle at 50% 12%, #2a1b12 0%, #05060f 60%)",
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
            marginBottom: 28,
          }}
        >
          New To Jesus?
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
            background: "linear-gradient(120deg,#ffd76e,#ff6b35)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 30,
          }}
        >
          Know Jesus
        </div>
        <div
          style={{ display: "flex", fontSize: 34, color: "#c7cdf0", maxWidth: 900 }}
        >
          God loves you. Sin separates us. Jesus made a way. You can respond
          today.
        </div>
      </div>
    ),
    { ...size },
  );
}
