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
    description: "The best metal detecting app for Android. GPS tracking, historical map overlays, offline maps, permission vault, detecting forecast, and 48 field tools built for serious detectorists.",
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
    sameAs: ["https://www.facebook.com/sweeptrackpro"],
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
    alternateName: ["Metal Detecting App", "Metal Detecting App for Android", "Metal Detector GPS App"],
    description:
      "Metal detecting GPS app with USGS historical topographic map overlay, offline maps (4 sources), track overlay, perimeter guard, permission vault, detecting forecast, NOAA tide tables, Google Drive backup, and preset templates for 61 detectors from 12 brands including Minelab, Garrett, XP, Nokta, and Fisher.",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free",
        description: "Core GPS tracking, unlimited sessions, 5 finds, 1 detector preset",
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
      "GPS tracking with 4 map types — Normal, Satellite, Terrain, and USGS Historical Topographic overlay",
      "Measure tool — distance polylines with per-segment labels, or closed-polygon area in hectares/acres using real spherical geometry; save to library or convert to perimeter guard with one tap",
      "Offline maps from 4 tile sources — OpenStreetMap, Esri Satellite, OpenTopoMap, USGS Topo",
      "Track overlay — load past sessions on the live map with color-coded paths",
      "Perimeter guard with draw-on-map boundary and leave-zone alerts",
      "Permission vault with 4 status colors, boundary drawing, expiry reminders, and a permission letter generator",
      "Detecting Forecast — 0-100 Detecting Score with 7-day outlook, soil moisture, wind, temperature, humidity, and tips",
      "NOAA tide table with 3, 7, or 14 day ranges from the nearest station",
      "Google Drive backup and restore of sessions, presets, and settings",
      "10 detector preset slots with JSON import/export and templates for 61 detectors across 12 brands",
      "Find logging with 6 types (Treasure, Gold, Coin, Relic, Jewelry, Trash), 0-40 cm depth, photo, and audio notes",
      "Quick pin drop for instant find marking",
      "Coverage heatmap overlay",
      "Session comparison — overlay or split view",
      "Elevation profile per session",
      "Nearby historic sites from OpenStreetMap and Wikipedia",
      "Coin caliper with built-in database of 131 coins across 9 regions",
      "Night vision red monochromatic override for dawn and dusk detecting",
      "On-screen compass with return-bearing arrow and 10 cm / 4 in calibrated ruler",
      "Export sessions as GPX, KML, CSV, or SweepTrack JSON",
      "12 color themes and English + Romanian localization",
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

const breadcrumbLd = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://sweeptrack.pro/#features" },
    { "@type": "ListItem", position: 3, name: "Pricing", item: "https://sweeptrack.pro/#pricing" },
    { "@type": "ListItem", position: 4, name: "FAQ", item: "https://sweeptrack.pro/#faq" },
    { "@type": "ListItem", position: 5, name: "Guides", item: "https://sweeptrack.pro/blog" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [...jsonLdGraph, breadcrumbLd],
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
        <h2 className="sr-only">The Best Metal Detecting App for Android — GPS Tracking, Offline Maps, and 48 Field Tools</h2>
        <Hero />
        <MapCompareSlider />
        <HowItWorks />
        <FeaturesAll />
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
