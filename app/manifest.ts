import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jesus Festival Movement",
    short_name: "Jesus Festival",
    description: "From Hamilton, Ontario to the nations — Gospel festivals that spark lasting movements.",
    start_url: "/",
    display: "standalone",
    background_color: "#050812",
    theme_color: "#050812",
    icons: [
      { src: "/jesus-festival-movement-mark.png", sizes: "1050x1050", type: "image/png" },
    ],
  };
}
