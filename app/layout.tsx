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
  title: "SweepTrack Pro — GPS Tracking for Metal Detecting",
  description:
    "The ultimate Android app for metal detecting. GPS tracking, heatmaps, grid search, 55 detector presets, offline maps, and more. Track every sweep, find every treasure.",
  keywords: [
    "metal detecting",
    "GPS tracking",
    "metal detector app",
    "treasure hunting",
    "heatmap",
    "grid search",
    "detector presets",
    "offline maps",
  ],
  openGraph: {
    title: "SweepTrack Pro — GPS Tracking for Metal Detecting",
    description:
      "The ultimate Android app for metal detecting. Track every sweep, find every treasure.",
    url: "https://sweeptrack.pro",
    siteName: "SweepTrack Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SweepTrack Pro",
    description:
      "The ultimate Android app for metal detecting. GPS tracking, heatmaps, and more.",
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
