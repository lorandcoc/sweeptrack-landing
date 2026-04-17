import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SweepTrack Pro — Metal Detecting GPS App",
    short_name: "SweepTrack Pro",
    description:
      "The metal detecting GPS companion. Tracking, maps, forecast, permissions, and 48 field tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#050510",
    theme_color: "#00FF6A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    categories: ["utilities", "tools", "lifestyle"],
  };
}
