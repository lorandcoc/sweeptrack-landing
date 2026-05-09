import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { I18nProvider } from "@/lib/i18n";
import CursorSweepTrail from "@/components/CursorSweepTrail";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050510",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sweeptrack.pro"),
  title: {
    default: "SweepTrack Pro — Metal Detecting GPS App for Android",
    template: "%s | SweepTrack Pro",
  },
  description:
    "Metal detecting app for Android. GPS tracking, USGS historical topographic overlays, offline maps, Permission Vault, Detecting Forecast, 60+ detector presets, and Cloud Backup. Free download, ad-free.",
  keywords: [
    // Primary searches
    "metal detecting app",
    "best metal detecting app",
    "best metal detecting app 2026",
    "metal detecting app android",
    "metal detecting GPS app",
    "metal detector app",
    "metal detecting field app",
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
    "relic detecting app",
    "coin identification by size",
    "GPX metal detecting",
    "KML metal detecting export",
    "night vision metal detecting",
  ],
  alternates: {
    canonical: "https://sweeptrack.pro",
    languages: {
      "en": "https://sweeptrack.pro",
      "ro": "https://sweeptrack.pro",
      "de": "https://sweeptrack.pro",
      "es": "https://sweeptrack.pro",
      "fr": "https://sweeptrack.pro",
      "nl": "https://sweeptrack.pro",
      "pl": "https://sweeptrack.pro",
      "it": "https://sweeptrack.pro",
      "pt": "https://sweeptrack.pro",
      "sv": "https://sweeptrack.pro",
      "tr": "https://sweeptrack.pro",
      "da": "https://sweeptrack.pro",
      "hu": "https://sweeptrack.pro",
      "ru": "https://sweeptrack.pro",
      "x-default": "https://sweeptrack.pro",
    },
    types: {
      "application/rss+xml": "https://sweeptrack.pro/blog/feed.xml",
    },
  },
  openGraph: {
    title: "SweepTrack Pro — Metal Detecting App for Android",
    description:
      "Metal detecting app for Android. GPS tracking, USGS historical topographic overlays, offline maps, Permission Vault, Detecting Forecast, Cloud Backup, and 60+ detector presets. Free download, ad-free.",
    url: "https://sweeptrack.pro",
    siteName: "SweepTrack Pro",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SweepTrack Pro — Metal Detecting App for Android",
    description:
      "GPS tracking, USGS Historical Topo overlay, offline maps, Track Overlay, Perimeter Guard, Permission Vault, and Detecting Forecast. Android, ad-free.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden`}
    >
      <body className="min-h-full aurora-bg overflow-x-hidden">
        <CursorSweepTrail />
        <I18nProvider>
          <div className="relative z-10 flex flex-col min-h-full w-full">{children}</div>
        </I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
