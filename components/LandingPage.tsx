import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FieldLogTicker from "@/components/FieldLogTicker";
import FeaturesAll from "@/components/FeaturesAll";
import ForteSpotlights from "@/components/ForteSpotlights";
import ProSpotlights from "@/components/ProSpotlights";
import HowItWorks from "@/components/HowItWorks";
import MapCompareSlider from "@/components/MapCompareSlider";
import StatsBar from "@/components/StatsBar";
import Screenshots from "@/components/Screenshots";
import RadarSection from "@/components/RadarSection";
import FounderNote from "@/components/FounderNote";
import TrustStrip from "@/components/TrustStrip";
import PricingTable from "@/components/PricingTable";
import FAQ from "@/components/FAQ";
import GuidesTeaser from "@/components/GuidesTeaser";
import CTA from "@/components/CTA";
import CommunityLinks from "@/components/CommunityLinks";
import Footer from "@/components/Footer";

const jsonLdGraph = [
  {
    "@type": "WebSite",
    "@id": "https://sweeptrack.pro/#website",
    name: "SweepTrack Pro",
    url: "https://sweeptrack.pro",
    publisher: { "@id": "https://sweeptrack.pro/#org" },
    description:
      "Metal detecting app for Android. GPS tracking, USGS historical topographic overlays, offline maps, Waypoints, Radar live group positioning, Permission Vault, Detecting Forecast, and 45+ field tools.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sweeptrack.pro/#features",
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@type": "Organization",
    "@id": "https://sweeptrack.pro/#org",
    name: "Loriba",
    legalName: "Coc Lorand Adrian P.F.A.",
    url: "https://sweeptrack.pro",
    logo: "https://sweeptrack.pro/icon.svg",
    founder: { "@type": "Person", name: "Lorand", url: "https://lorand.cc" },
    sameAs: [
      "https://www.facebook.com/sweeptrackpro",
      "https://www.youtube.com/@SweepTrackPro",
      "https://www.instagram.com/sweeptrackpro",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@sweeptrack.pro",
      contactType: "customer support",
    },
  },
  // No aggregateRating/review until real Google Play ratings exist. Fake ratings = Google spam manual action.
  {
    "@type": "SoftwareApplication",
    "@id": "https://sweeptrack.pro/#app",
    name: "SweepTrack Pro",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Metal Detecting",
    operatingSystem: "Android",
    alternateName: [
      "Metal Detecting App",
      "Metal Detecting App for Android",
      "Metal Detector GPS App",
    ],
    description:
      "Metal detecting GPS app with USGS historical topographic map overlay, custom import-your-own map overlays, Finds Intelligence dashboard, offline maps (4 sources), track overlay, perimeter guard, Waypoints, Radar live group positioning, permission vault, detecting forecast, NOAA tide tables, Google Drive backup, and preset templates for 60+ detectors from 12 brands including Minelab, Garrett, XP, Nokta, and Fisher.",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free",
        availability: "https://schema.org/PreOrder",
        priceValidUntil: "2027-12-31",
        description:
          "Core GPS tracking, 10 sessions/month, basic find logging, 5 waypoints, 1 detector preset, 1 Permission Vault entry, 3 themes",
      },
      {
        "@type": "Offer",
        price: "19.99",
        priceCurrency: "USD",
        name: "Pro Annual",
        availability: "https://schema.org/PreOrder",
        description: "Everything unlimited. $19.99/year (save 52% vs monthly). 14-day free trial.",
        priceValidUntil: "2027-12-31",
      },
      {
        "@type": "Offer",
        price: "3.49",
        priceCurrency: "USD",
        name: "Pro Monthly",
        availability: "https://schema.org/PreOrder",
        priceValidUntil: "2027-12-31",
        description: "$3.49/month with 14-day free trial",
      },
      {
        "@type": "Offer",
        price: "39.99",
        priceCurrency: "USD",
        name: "Founder's Lifetime",
        availability: "https://schema.org/PreOrder",
        priceValidUntil: "2027-12-31",
        description:
          "One-time purchase, lifetime access. Limited to the first 1,000 customers. Available at launch on Google Play.",
      },
    ],
    featureList: [
      "GPS tracking with 3 base map types (Street, Satellite, Terrain) plus USGS Historical Topographic overlay (Pro)",
      "Measure tool: distance polylines with per-segment labels, or closed-polygon area in hectares/acres using spherical geometry; save to library or convert to Perimeter Guard with one tap",
      "Offline maps from 4 tile sources: OpenStreetMap, Esri Satellite, OpenTopoMap, USGS Topo",
      "Track overlay loads past sessions on the live map with color-coded paths",
      "Perimeter guard with draw-on-map boundary and leave-zone alerts",
      "Permission vault with 4 status colors, boundary drawing, expiry reminders, and a permission letter generator",
      "Detecting Forecast: 0-100 Detecting Score with 7-day outlook, soil moisture, wind, temperature, humidity, and tips",
      "NOAA tide table with 3, 7, or 14 day ranges from the nearest station",
      "Google Drive backup and restore of sessions, presets, and settings",
      "10 detector preset slots with JSON import/export and templates for 60+ detectors across 12 brands",
      "Find logging: free basic record (type, name, notes, 1 photo); Pro full record with value, 0-40 cm depth, weight, signal/VDI, soil type, video, audio notes, and multiple photos",
      "Finds Intelligence dashboard (Pro): finds-per-hour, best time of day, breakdowns by detector and site, total collection value over time, and a value-weighted hot-zone map of your most productive ground",
      "Custom map overlays (Pro): import your own scanned map, parcel sketch, or aerial photo and align it on the live satellite map by drag, pinch, and rotate (1 free, unlimited with Pro)",
      "Quick pin drop for instant find marking",
      "Coverage heatmap overlay",
      "Session comparison: overlay (with blend slider) or split view, 2 to 5 sessions",
      "Elevation profile per session",
      "Personal Waypoints: drop, name, categorize (11 categories), and navigate to saved map pins; export to GPX, KML, or CSV (5 free, unlimited with Pro)",
      "Radar live group positioning from a button on the home map: see your whole detecting group on one live map (join free, host with Pro) with shared waypoints, pings, base point, SOS, and a leave-before-dark countdown",
      "Night vision red monochromatic override for dawn and dusk detecting",
      "On-screen compass with return-bearing arrow and 10 cm / 4 in calibrated ruler",
      "Export sessions as GPX, KML, CSV, or SweepTrack JSON",
      "12 color themes: 3 free (Tactical, Amber, Cobalt), all 12 with Pro",
      "14 languages: English, Romanian, German, Spanish, French, Italian, Portuguese, Dutch, Polish, Russian, Danish, Swedish, Turkish, Hungarian",
      "Ad-free: no ads, no analytics, no tracking",
    ],
    url: "https://sweeptrack.pro",
    image: "https://sweeptrack.pro/icon-512.png",
    screenshot: [
      "https://sweeptrack.pro/screenshots/home.jpg",
      "https://sweeptrack.pro/screenshots/offline_maps.jpg",
      "https://sweeptrack.pro/screenshots/forecast.jpg",
      "https://sweeptrack.pro/screenshots/permission_vault.jpg",
      "https://sweeptrack.pro/screenshots/waypoints.jpg",
      "https://sweeptrack.pro/screenshots/radar.jpg",
    ],
    inLanguage: ["en", "ro", "de", "es", "fr", "it", "pt", "nl", "pl", "ru", "da", "sv", "tr", "hu"],
    publisher: { "@id": "https://sweeptrack.pro/#org" },
    author: { "@id": "https://sweeptrack.pro/#org" },
  },
  {
    "@type": "SoftwareApplication",
    "@id": "https://sweeptrack.pro/radar#app",
    name: "SweepTrack Radar",
    alternateName: ["Radar", "live group positioning", "Metal Detecting Group Tracker"],
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "Metal Detecting",
    operatingSystem: "Android",
    description:
      "Free live group-positioning companion app for SweepTrack Pro. See everyone on a detecting trip on one shared map in real time, no account needed. Join free with a code or QR. Radar Premium adds hosting, faster updates, and GPX track export. A SweepTrack Pro subscription includes Radar Premium.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      name: "Free",
      availability: "https://schema.org/PreOrder",
      priceValidUntil: "2027-12-31",
      description:
        "Join unlimited groups free with the live map, SOS, shared base point, shared waypoints, pings, and guide arrows. Radar Premium unlocks hosting, faster 10–15s updates, unlimited saved spots, and GPX track export.",
    },
    url: "https://sweeptrack.pro/radar",
    author: { "@id": "https://sweeptrack.pro/#org" },
  },
  {
    "@type": "WebPage",
    "@id": "https://sweeptrack.pro/#webpage",
    url: "https://sweeptrack.pro",
    name: "Metal Detecting App for Android | SweepTrack Pro",
    isPartOf: { "@id": "https://sweeptrack.pro/#website" },
    about: { "@id": "https://sweeptrack.pro/#app" },
    mainEntity: { "@id": "https://sweeptrack.pro/#app" },
    inLanguage: "en",
  },
];

const breadcrumbLd = {
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://sweeptrack.pro/#features" },
    { "@type": "ListItem", position: 3, name: "Radar", item: "https://sweeptrack.pro/radar" },
    { "@type": "ListItem", position: 4, name: "Pricing", item: "https://sweeptrack.pro/#pricing" },
    { "@type": "ListItem", position: 5, name: "FAQ", item: "https://sweeptrack.pro/#faq" },
    { "@type": "ListItem", position: 6, name: "Guides", item: "https://sweeptrack.pro/blog" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [...jsonLdGraph, breadcrumbLd],
};

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <h2 className="sr-only">
          Metal Detecting GPS App for Android: track every sweep, log finds, and overlay historical maps.
        </h2>
        <Hero />
        <FieldLogTicker />
        <MapCompareSlider />
        <HowItWorks />
        <FounderNote />
        <ForteSpotlights />
        <ProSpotlights />
        <StatsBar />
        <FeaturesAll />
        <Screenshots />
        <RadarSection />
        <TrustStrip />
        <PricingTable />
        <FAQ />
        <GuidesTeaser />
        <CTA />
        <CommunityLinks />
      </main>
      <Footer />
    </>
  );
}
