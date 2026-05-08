import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturesAll from "@/components/FeaturesAll";
import HowItWorks from "@/components/HowItWorks";
import MapCompareSlider from "@/components/MapCompareSlider";
import StatsBar from "@/components/StatsBar";
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
    description: "The metal-detecting kit built for the dig, not the hike. GPS tracking, USGS historical map overlay, perimeter guard with four-stage haptic ladder, permission vault with PDF Request and Thank-You letters, 0–100 Detecting Forecast with GO / CAUTION / WAIT verdict, NOAA tide tables, 60+ detector presets in real brand colors, daily Google Drive backup, and 45+ field tools built by a detectorist for detectorists.",
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
      "Metal detecting GPS app for Android. Live tracking with 8-field tactical HUD, USGS historical topographic map overlay, offline tile packs from 4 sources, track overlay with 6 cycling colors, four-stage perimeter guard, permission vault with PDF Request and Thank-You letters, 0–100 Detecting Forecast with GO/CAUTION/WAIT verdict, hourly weather and 7-day outlook, NOAA tide tables, nearby historic POIs from OpenStreetMap and Wikipedia, 60+ detector presets across 12 brands in real brand colors, 130-coin caliper, 8-tier rank ladder from New Explorer to Founder, daily auto-backup to Google Drive, atomic restore, GPX/KML/CSV/JSON export, 12 themes, 14 languages, no ads, no tracking.",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free",
        description: "Core GPS tracking, 10 sessions, 5 finds, 1 detector preset, 2 vault entries, 3 themes, compass + ruler + back-to-start line — enough to run a Saturday.",
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
      "Live GPS tracking with 4 map types (Satellite, Terrain, Street, USGS Historical Topo) and 8-field tactical HUD",
      "Tap-to-expand HUD: elapsed time, distance, speed, altitude, finds, heading, GPS accuracy, max speed",
      "USGS historical topographic map overlay with adjustable opacity slider",
      "Measure tool: distance polylines with per-segment labels, closed-polygon area in hectares or acres via spherical geometry, drag-to-edit vertices, save to Library, one-tap convert to Perimeter Guard",
      "Offline tile packs from 4 sources (Street/OpenStreetMap, Satellite, Terrain, USGS Historical Topo)",
      "Track Overlay with 6 cycling path colors (Neon Green, Pink, Slate Blue, Orange, Gold, White) and per-track opacity slider",
      "Perimeter Guard with four-stage haptic ladder: Approaching, Near, At edge, Outside",
      "Permission Vault with status colors (Approved / Ask First / Denied), expiry countdown, calendar reminder integration, boundary polygon editor, search across site/owner/permit/tags",
      "Permission Letter Generator with two PDF templates: Request and Thank-You, both with signature space and Exhibit A site boundary attached",
      "Detecting Forecast with 0–100 Detecting Score and one-word verdict (GO / CAUTION / WAIT) factoring in soil moisture, wind, temperature, humidity, precipitation, UV, pressure",
      "Hourly forecast for the next 24 hours and 7-day outlook (Pro)",
      "Eight-phase moon tracker on the planner",
      "NOAA tide table with 3/7/14-day ranges, map-pick coastal location, lat/lon coordinate input",
      "Find logger with 6 types (Treasure, Gold, Coin, Relic, Jewelry, Trash), 0–40 cm depth slider, VDI / Target ID, signal strength, 7 soil types (sandy/clay/loam/rocky/chalk/peat/gravel), photo, 15-second video, audio note, name, value, weight, free-text notes",
      "Quick Pin Drop: one-tap find pin at current GPS, fill details later",
      "Color-coded find pins on map: Treasure (amber), Gold (yellow), Coin (blue), Relic (brown), Jewelry (magenta), Trash (grey)",
      "Coverage heatmap with rainbow density overlay (requires 5+ GPS points)",
      "Session Comparison: stack 2–5 sessions in overlay mode (blend slider) or split / grid view",
      "Session merging, batch rename (40-char), batch export, batch delete from History",
      "Calendar grouping in History with collapsible monthly headers, multi-select, search, and 4 sort options",
      "Elevation profile per session: min, max, range, ascent, descent, average",
      "Career Stats: weekly / monthly / yearly tabs, sessions, finds-per-session, active days, treasure rate, top sessions, top locations, weather insight that learns which conditions you find on",
      "Nearby historic sites from OpenStreetMap and Wikipedia, plotted on a map with distance and bearing",
      "Coin Caliper with on-screen measuring ring, 70–130% DPI calibration slider, 130 coins across 9 regions, region and era filters, custom coin add/delete",
      "60+ detector presets across 12 brands (Minelab, XP, Nokta, Garrett, Fisher, Teknetics, Bounty Hunter, Quest, White's, Tesoro, Detech, Rutus) in real brand colors, plus a Custom slot",
      "Detector preset sharing via QR code, JSON file, or text export; import via QR scan, file picker, or cloud backup",
      "Daily auto-backup to your Google Drive with atomic restore that won't overwrite an active session",
      "GPX, KML, CSV, and SweepTrack JSON export — individual or batch",
      "Auto-named sessions via reverse-geocoded place labels — no more 'Session 47'",
      "Animated session summary with path waveform, distance vs. historical average, find-type breakdown, weather snapshot, and 8 toggleable session tags (Park, Beach, Farm, Forest, Field, Historic, Private, Public)",
      "Share Card: 1080×1920 PNG with map preview, stats grid, find breakdown, QR deep-link to sweeptrack.pro/s/{session}",
      "Night Vision red filter, High Contrast mode, Light theme for sunlight, plus 12 color themes grouped Neutral / Feminine / Masculine / Neon",
      "Eight-tier detectorist rank ladder from New Explorer to Master Detectorist, plus exclusive Founder badge for the first 1,000 lifetime purchases",
      "Personalized rotating greetings on the home screen",
      "OEM-aware battery rationale that detects Xiaomi/Samsung/OnePlus and walks you through the exact battery setting to keep tracking alive",
      "Metric / Imperial toggle for distance, speed, altitude, depth",
      "14 languages with on-the-fly switching: English, Romanian, German, Spanish, French, Italian, Portuguese, Dutch, Polish, Russian, Danish, Swedish, Turkish, Hungarian",
      "5-screen onboarding tutorial: Welcome, Detect Smarter, Your Territory, Field Arsenal, Go Premium",
      "Local-first Room database, no analytics, no ads, no third-party tracking SDKs",
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
        <h2 className="sr-only">The Best Metal Detecting App for Android — GPS Tracking, Offline Maps, and 45+ Field Tools</h2>
        <Hero />
        <Marquee />
        <MapCompareSlider />
        <HowItWorks />
        <FounderNote />
        <FeaturesAll />
        <StatsBar />
        <Screenshots />
        <PricingTable />
        <FAQ />
        <CTA />
        <CommunityLinks />
      </main>
      <Footer />
    </>
  );
}
