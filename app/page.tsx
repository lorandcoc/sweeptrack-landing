import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAll from "@/components/FeaturesAll";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import MapCompareSlider from "@/components/MapCompareSlider";
import Tutorials from "@/components/Tutorials";
import Marquee from "@/components/Marquee";
import CommunityLinks from "@/components/CommunityLinks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SweepTrack Pro",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Android",
  description:
    "Metal detecting GPS app with historical map overlays, offline maps, track overlay, perimeter guard, permission vault, detecting forecast, tide tables, and cloud backup.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "7-day free trial, then $2.99/month or $19.99/year",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "GPS tracking with 4 map types",
    "USGS historical topographic map overlay",
    "Offline maps (Street, Satellite, Terrain, Historical Topo)",
    "Track overlay (up to 7 simultaneous past tracks)",
    "Perimeter guard with vibration and audio alerts",
    "Permission vault with PDF letter generator",
    "Detecting forecast (weather-based hunt score)",
    "Tide table (up to 14-day forecast)",
    "Cloud backup to Google Drive",
    "10 detector preset slots with QR sharing",
    "Night vision mode",
    "Session comparison (overlay and split view)",
    "Coin caliper identification",
    "Nearby historic sites finder",
    "Heatmap visualization",
    "GPX, KML, CSV export",
  ],
  url: "https://sweeptrack.pro",
  author: {
    "@type": "Organization",
    name: "Loriba",
    url: "https://sweeptrack.pro",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <FeaturesAll />
        <HowItWorks />
        <MapCompareSlider />
        <Screenshots />
        <Tutorials />
        <Marquee />
        <CommunityLinks />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
