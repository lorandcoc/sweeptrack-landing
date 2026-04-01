import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sweep Track Pro — GPS Tracking for Metal Detecting",
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
    title: "Sweep Track Pro — GPS Tracking for Metal Detecting",
    description:
      "The ultimate Android app for metal detecting. Track every sweep, find every treasure.",
    url: "https://sweeptrack.pro",
    siteName: "Sweep Track Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweep Track Pro",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col aurora-bg">{children}</body>
    </html>
  );
}
