import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAll from "@/components/FeaturesAll";
import HowItWorks from "@/components/HowItWorks";
import MapCompareSlider from "@/components/MapCompareSlider";
import Screenshots from "@/components/Screenshots";
import FounderNote from "@/components/FounderNote";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import CommunityLinks from "@/components/CommunityLinks";
import Footer from "@/components/Footer";

const jsonLdGraph = [
  {
    "@type": "WebSite",
    name: "SweepTrack Pro",
    url: "https://sweeptrack.pro",
    description: "The best metal detecting app for Android. GPS tracking, historical map overlays, offline maps, and 20+ tools for serious detectorists.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sweeptrack.pro/#features",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@type": "Organization",
    name: "Loriba",
    legalName: "Coc Lorand P.F.A.",
    url: "https://sweeptrack.pro",
    logo: "https://sweeptrack.pro/icon.svg",
    founder: {
      "@type": "Person",
      name: "Lorand",
      url: "https://lorand.cc",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@sweeptrack.pro",
      contactType: "customer support",
    },
  },
  {
    "@type": "SoftwareApplication",
    name: "SweepTrack Pro",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Metal Detecting",
    operatingSystem: "Android",
    description:
      "Metal detecting GPS app with USGS historical topographic map overlay, offline maps, track overlay (up to 7 past tracks), perimeter guard, permission vault, detecting forecast, tide tables, cloud backup, and presets for 57 detectors from 12 brands including Minelab, Garrett, XP, Nokta, and Fisher.",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free",
        description: "Core GPS tracking, 10 sessions, 5 finds, 1 detector preset",
      },
      {
        "@type": "Offer",
        price: "19.99",
        priceCurrency: "USD",
        name: "Pro Annual",
        description: "Everything unlimited. $19.99/year (save 44% vs monthly). 7-day free trial.",
        priceValidUntil: "2027-12-31",
      },
      {
        "@type": "Offer",
        price: "2.99",
        priceCurrency: "USD",
        name: "Pro Monthly",
        description: "$2.99/month with 7-day free trial",
      },
    ],
    featureList: [
      "GPS tracking with 4 map types (Satellite, Terrain, Topographic, Street)",
      "USGS Historical Topographic Map overlay from ArcGIS collection",
      "Offline maps download (Street, Satellite, Terrain, Historical Topo)",
      "Track overlay — see up to 7 past sessions on the same map",
      "Perimeter guard with vibration and audio boundary alerts",
      "Permission vault with site boundaries, expiry alerts, and PDF letter generator",
      "Weather-based detecting forecast with soil moisture and hunt score 0-100",
      "Tide table with up to 14-day predictions for beach detecting",
      "Cloud backup and restore to Google Drive",
      "10 detector preset slots with QR code sharing for 57 models from 12 brands",
      "Find logging with photo, video, and audio notes",
      "Quick pin drop for instant find marking",
      "Heatmap visualization of detecting coverage",
      "Session comparison with overlay and split view",
      "Road back indicator with distance to starting point",
      "Nearby historic sites finder",
      "Coin caliper identification by diameter",
      "Night vision mode for dawn and dusk detecting",
      "On-screen compass and 10cm/4in ruler",
      "GPX, KML, CSV, and JSON export",
      "Ad-free — no ads, no analytics, no tracking",
    ],
    url: "https://sweeptrack.pro",
    author: {
      "@type": "Organization",
      name: "Loriba",
      url: "https://sweeptrack.pro",
    },
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": jsonLdGraph,
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
        <FounderNote />
        <PricingTable />
        <FAQ />
        <CTA />
        <CommunityLinks />
      </main>
      <Footer />
    </>
  );
}
