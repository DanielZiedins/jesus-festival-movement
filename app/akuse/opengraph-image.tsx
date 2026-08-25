import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Jesus Festival Akuse — 3–4 September 2026, Akuse Taxi Station, Ghana";
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
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 22% 8%, #2a1a08 0%, #05060f 62%)",
          color: "#fff",
          fontFamily: "sans-serif",
          padding: "70px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            letterSpacing: 7,
            textTransform: "uppercase",
            color: "#f5c451",
          }}
        >
          Upcoming Festival · Ghana
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 700,
              color: "#c7cdf0",
              marginBottom: 6,
            }}
          >
            The Jesus Festival
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 800,
              lineHeight: 1,
              background: "linear-gradient(120deg,#ffd76e,#ff6b35)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AKUSE
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#ffffff",
              marginTop: 18,
              fontStyle: "italic",
            }}
          >
            &ldquo;Jesus Christ Is Lord&rdquo; · Philippians 2:11
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#c7cdf0",
            borderTop: "1px solid #22305e",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontWeight: 700 }}>
              3–4 September 2026
            </span>
            <span style={{ fontSize: 24 }}>Akuse Taxi Station · 9AM &amp; 6PM</span>
          </div>
          <div style={{ display: "flex", color: "#8b93b8", fontSize: 22 }}>
            JesusFestivalMovement.com/akuse
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
