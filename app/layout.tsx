import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sweeptrack.pro"),
  title: {
    default: "SweepTrack Pro — Best Metal Detecting App for Android | GPS Tracking, Old Maps, Offline Maps",
    template: "%s | SweepTrack Pro — Metal Detecting App",
  },
  description:
    "The #1 metal detecting app for Android. GPS tracking with 4 map types, USGS historical topographic map overlay to find old homesteads and roads, offline maps for areas with no cell service, track overlay to see where you already walked, perimeter guard with vibration alerts, permission vault with PDF letters, weather-based detecting forecast, tide tables for beach hunting, cloud backup to Google Drive, and detector presets for Minelab, Garrett, XP, Nokta, Fisher and more. Ad-free. Free to use.",
  keywords: [
    // Primary searches
    "metal detecting app",
    "best metal detecting app",
    "best metal detecting app 2026",
    "metal detecting app android",
    "metal detecting GPS app",
    "metal detector app",
    "treasure hunting app",
    // Feature searches
    "metal detecting GPS tracker",
    "metal detecting map app",
    "historical map overlay metal detecting",
    "old map overlay for metal detecting",
    "USGS historical topographic map",
    "USGS old maps for detecting",
    "detect on old maps",
    "find old homesteads metal detecting",
    "offline maps metal detecting",
    "metal detecting offline GPS",
    "metal detecting track overlay",
    "metal detecting path tracker",
    "where did I already detect",
    "metal detecting coverage map",
    "metal detecting heatmap",
    "metal detecting permission tracker",
    "metal detecting permission letter",
    "landowner permission metal detecting",
    "metal detecting perimeter guard",
    "metal detecting boundary alert",
    "detecting forecast",
    "detecting forecast app",
    "best time to metal detect",
    "soil moisture metal detecting",
    "metal detecting weather conditions",
    "metal detecting tide table",
    "beach metal detecting app",
    "beach detecting tide times",
    "low tide metal detecting",
    "metal detecting finds logger",
    "log metal detecting finds",
    "metal detecting cloud backup",
    "metal detecting session tracker",
    "metal detecting statistics",
    "metal detecting session compare",
    // Detector brand searches
    "Minelab Equinox app",
    "Minelab Manticore app",
    "Garrett AT Pro app",
    "Garrett Ace app",
    "XP Deus app",
    "XP Deus II app",
    "Nokta Legend app",
    "Nokta Simplex app",
    "Fisher F75 app",
    "metal detector presets",
    "metal detector settings app",
    "metal detector preset import export",
    // Activity searches
    "metal detecting tips",
    "metal detecting for beginners",
    "how to metal detect",
    "metal detecting near me",
    "metal detecting spots",
    "metal detecting historical sites",
    "coin shooting app",
    "relic hunting app",
    "coin identification by size",
    "GPX metal detecting",
    "KML metal detecting export",
    "night vision metal detecting",
  ],
  alternates: {
    canonical: "https://sweeptrack.pro",
  },
  openGraph: {
    title: "SweepTrack Pro — Best Metal Detecting App for Android",
    description:
      "GPS tracking, USGS historical map overlays, offline maps, track overlay, perimeter guard, permission vault, detecting forecast, tide tables, and cloud backup. The app that was actually built for metal detecting. Ad-free.",
    url: "https://sweeptrack.pro",
    siteName: "SweepTrack Pro",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SweepTrack Pro — Best Metal Detecting App",
    description:
      "GPS tracking, old map overlays, offline maps, track overlay, perimeter guard, permission vault, detecting forecast. Built for detectorists. Ad-free.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "NxYPPcarbhOOTS89dkKan0TTRaaK3DZlT_hAcxbaMLU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased overflow-x-hidden`}
    >
      <body className="min-h-full aurora-bg overflow-x-hidden">
        <div className="flex flex-col min-h-full w-full">{children}</div>
      </body>
    </html>
  );
}
