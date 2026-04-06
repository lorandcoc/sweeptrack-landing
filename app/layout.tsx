import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sweeptrack.pro"),
  title: {
    default: "SweepTrack Pro — Metal Detecting GPS App with Offline Maps & Historical Overlays",
    template: "%s | SweepTrack Pro",
  },
  description:
    "Metal detecting app for Android with GPS tracking, USGS historical map overlays, offline maps, track overlay (up to 7 past tracks), perimeter guard, permission vault, detecting forecast, tide tables, cloud backup, and 10 detector presets. Ad-free. 7-day free trial.",
  keywords: [
    "metal detecting app",
    "metal detector GPS app",
    "metal detecting GPS tracker",
    "best metal detecting app",
    "best metal detecting app android",
    "metal detecting map app",
    "historical map overlay metal detecting",
    "USGS old map overlay",
    "offline maps metal detecting",
    "metal detecting permission tracker",
    "detecting forecast app",
    "metal detecting tide table",
    "metal detector presets",
    "treasure hunting app",
    "metal detecting track overlay",
    "metal detecting finds logger",
    "metal detecting cloud backup",
    "detect on old maps",
    "metal detecting perimeter guard",
    "metal detecting session tracker",
    "Minelab app",
    "Garrett detector app",
    "XP Deus app",
    "Nokta detector app",
    "night vision metal detecting",
    "coin identification app",
    "GPX metal detecting",
  ],
  alternates: {
    canonical: "https://sweeptrack.pro",
  },
  openGraph: {
    title: "SweepTrack Pro — Metal Detecting GPS App",
    description:
      "GPS tracking, historical map overlays, offline maps, track overlay, perimeter guard, permission vault, and detecting forecast. The app detectorists actually use in the field.",
    url: "https://sweeptrack.pro",
    siteName: "SweepTrack Pro",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SweepTrack Pro — Metal Detecting GPS App",
    description:
      "GPS tracking, USGS old maps, offline maps, track overlay, perimeter guard, and permission vault. Ad-free. 7-day free trial.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased overflow-x-hidden`}
    >
      <body className="min-h-full aurora-bg overflow-x-hidden">
        {/* Floating gradient orbs */}
        <div className="bg-orbs" aria-hidden="true">
          <span className="bg-orb-3" />
        </div>
        {/* Noise texture grain */}
        <div className="noise-overlay" aria-hidden="true" />
        {/* Page content above orbs */}
        <div className="relative z-10 flex flex-col min-h-full w-full">{children}</div>
      </body>
    </html>
  );
}
