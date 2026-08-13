import { ImageResponse } from "next/og";

type SocialCardProps = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
};

export const socialCardSize = { width: 1200, height: 630 };

export function socialCard({ eyebrow, title, accent, description }: SocialCardProps) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "radial-gradient(circle at 80% 20%, #1a315a 0%, #08101f 42%, #03050b 76%)", color: "white", padding: "64px 72px", fontFamily: "sans-serif" }}>
        <div style={{ position: "absolute", right: "-50px", top: "-130px", width: "590px", height: "590px", display: "flex", borderRadius: "50%", border: "2px solid rgba(244,196,92,.18)", boxShadow: "inset 0 0 140px rgba(244,196,92,.08)" }} />
        <div style={{ position: "absolute", right: "120px", bottom: "-170px", width: "420px", height: "420px", display: "flex", borderRadius: "50%", border: "1px solid rgba(233,95,50,.3)" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "25px", fontWeight: 800, letterSpacing: "-1px" }}><div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "54px", height: "54px", borderRadius: "18px", background: "linear-gradient(135deg,#fff1b8,#f4c45c 50%,#e95f32)", color: "#07101f", fontSize: "34px", fontWeight: 900 }}>✝</div>Jesus Festival Movement</div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "930px" }}><div style={{ display: "flex", fontSize: "23px", letterSpacing: "7px", textTransform: "uppercase", color: "#f4c45c", fontWeight: 700 }}>{eyebrow}</div><div style={{ display: "flex", flexDirection: "column", marginTop: "18px", fontSize: "74px", lineHeight: 0.88, letterSpacing: "-6px", textTransform: "uppercase", fontWeight: 900 }}><span>{title}</span><span style={{ color: "#f4c45c" }}>{accent}</span></div><div style={{ display: "flex", marginTop: "28px", maxWidth: "840px", color: "rgba(255,255,255,.68)", fontSize: "25px", lineHeight: 1.35 }}>{description}</div></div>
        </div>
      </div>
    ),
    socialCardSize,
  );
}
