import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton from "@/components/GooglePlayButton";
import SpotlightEngine from "@/components/SpotlightEngine";
import InfoCard from "@/components/InfoCard";
import { ItemGrid, PageClosing, PageHero, PageSection, TextLink } from "@/components/PageSection";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/coverage";
const TITLE = "GPS Track & Coverage for Metal Detecting | SweepTrack Pro";
const DESCRIPTION =
  "See exactly where you swept and where you missed. SweepTrack draws a clean GPS track as you walk, autosaves through reboots, and overlays past sessions, a coverage heatmap, and side-by-side comparisons. Android.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "GPS Track & Coverage for metal detecting", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "GPS Track & Coverage for metal detecting", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" }, about: { "@id": "https://sweeptrack.pro/#app" }, mainEntity: { "@id": "https://sweeptrack.pro/#app" }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
      { "@type": "ListItem", position: 2, name: "Track & Coverage", item: URL },
    ] },
  ],
};


export default function CoveragePage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero title="Never search the same ground twice" actions={<GooglePlayButton />} note="Tracking is free. Android only.">
          <p>
            Your GPS path draws on the map as you walk, so you sweep in lanes instead of circles. SweepTrack keeps a
            clean line from the first step and autosaves the whole time, so a reboot or a dead battery never costs you
            the dig.
          </p>
        </PageHero>

        <PageSection>
          <SpotlightEngine />
        </PageSection>

        <PageSection title="See the ground you already covered" intro="Four ways to read your coverage and find the strip you missed.">
          <ItemGrid>
            <InfoCard tier="Pro" title="Track overlay" body="Load past sessions onto the live map as colored paths, up to 7 at once, so covered ground stays visible." />
            <InfoCard tier="Pro" title="Coverage heatmap" body="A density map of the current session's walked path. See at a glance where you swept hard and where you barely passed." />
            <InfoCard tier="Pro" title="Session compare" body="Put two or more past sessions side by side, or overlaid with a blend slider, to spot the gaps between visits." />
            <InfoCard tier="Free" title="Elevation profile" body="A per-session terrain chart with min, max, ascent, descent, and average, in meters or feet." />
          </ItemGrid>
        </PageSection>

        <PageClosing
          title="Export it, back it up"
          actions={
            <>
              <GooglePlayButton />
              <TextLink href="/overlays">Maps and overlays</TextLink>
            </>
          }
        >
          Every session is stored on your phone and exports to GPX, KML, CSV, or JSON whenever you want. Back it up to
          your own Google Drive, encrypted with a passphrase only you hold.
        </PageClosing>
      </main>
      <Footer />
    </I18nProvider>
  );
}
