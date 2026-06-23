import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Jesus Festival Movement — From Hamilton, Ontario to the nations";
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
          background:
            "radial-gradient(circle at 25% 15%, #1a1030 0%, #05060f 55%)",
          color: "#fff",
          fontFamily: "sans-serif",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#f5c451",
            marginBottom: 28,
          }}
        >
          Global Gospel Movement
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.05,
            background: "linear-gradient(120deg,#ffd76e,#ff6b35)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 30,
          }}
        >
          Jesus Festival Movement
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#c7cdf0",
            maxWidth: 900,
          }}
        >
          From Hamilton, Ontario to the nations — festivals that become lasting
          Gospel movements.
        </div>
      </div>
    ),
    { ...size },
  );
}
