import { ImageResponse } from "next/og";

export const alt =
  "The full 13-step playbook for starting a Jesus Festival in your city";
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
            "radial-gradient(circle at 20% 8%, #221708 0%, #050812 62%)",
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
            color: "#f4c45c",
          }}
        >
          The full playbook · Free forever
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            Thirteen steps.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              background: "linear-gradient(118deg,#fff0b2,#f4c45c 45%,#e95f32)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nothing held back.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#c7cdf0",
            borderTop: "1px solid #22305e",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex" }}>
            Four phases · Timelines · Checklists · Printable
          </div>
          <div style={{ display: "flex", color: "#8b93b8", fontSize: 22 }}>
            JesusFestivalMovement.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
