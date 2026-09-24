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
    // Standard PWA sizes, flattened onto the brand navy so the white mark
    // stays legible on a light launcher. The 1050px source is far too heavy
    // to hand an installer.
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
