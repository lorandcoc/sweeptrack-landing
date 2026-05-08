import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SweepTrack Pro — Metal Detecting GPS App",
    short_name: "SweepTrack Pro",
    description:
      "Built for the dig, not the hike. GPS tracking, USGS overlay, perimeter guard, permission vault, detecting forecast, 60+ presets, Drive backup, and 45+ tools you'll reach for.",
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
