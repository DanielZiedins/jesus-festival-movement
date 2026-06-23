import { ImageResponse } from "next/og";

export const alt = "Jesus Festival Movement — From one city to the nations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(circle at 75% 30%, #172d56 0%, #07101f 38%, #03050b 78%)",
          color: "white",
          padding: "62px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-60px",
            top: "-170px",
            width: "660px",
            height: "660px",
            display: "flex",
            borderRadius: "50%",
            border: "2px solid rgba(244,196,92,.17)",
            boxShadow: "inset 0 0 150px rgba(244,196,92,.07)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "54px",
                height: "54px",
                borderRadius: "18px",
                background: "linear-gradient(135deg,#fff1b8,#f4c45c 50%,#e95f32)",
                color: "#07101f",
                fontSize: "34px",
                fontWeight: 900,
              }}
            >
              ✝
            </div>
            <div style={{ display: "flex", fontSize: "25px", fontWeight: 800, letterSpacing: "-1px" }}>
              Jesus Festival Movement
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: "25px", letterSpacing: "8px", textTransform: "uppercase", color: "#f4c45c", fontWeight: 700 }}>
              Hamilton → Niagara → Nations
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "18px", fontSize: "88px", lineHeight: 0.86, letterSpacing: "-7px", textTransform: "uppercase", fontWeight: 900 }}>
              <span>From one city</span>
              <span style={{ color: "#f4c45c" }}>to the nations.</span>
            </div>
            <div style={{ display: "flex", marginTop: "28px", maxWidth: "890px", color: "rgba(255,255,255,.68)", fontSize: "26px", lineHeight: 1.35 }}>
              Helping cities lift up Jesus, preach the Gospel, and spark movements that last.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
