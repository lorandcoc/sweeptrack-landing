import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SweepTrack Pro — Metal Detecting GPS App",
    short_name: "SweepTrack Pro",
    description:
      "Metal detecting GPS app for Android. Tracking, maps, Waypoints, Radar live group positioning, forecast, permission management, and 45+ field tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#050510",
    theme_color: "#00FF6A",
    icons: [
      // SVG kept as a high-resolution any-purpose fallback for browsers that
      // honor it (Chrome on Android, recent Firefox). Real PWA installs lean
      // on the PNGs below.
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      // Maskable variant has ~10% safe-zone padding so adaptive-icon launchers
      // (most Android home screens) crop the rim without cutting the logo.
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    categories: ["utilities", "tools", "lifestyle"],
  };
}
