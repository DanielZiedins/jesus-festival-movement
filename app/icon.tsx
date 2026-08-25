import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ffd76e, #ff6b35)",
          borderRadius: 14,
          color: "#05060f",
          fontSize: 44,
          fontWeight: 700,
        }}
      >
        ✝
      </div>
    ),
    { ...size }
  );
}
