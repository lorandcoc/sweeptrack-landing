import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton from "@/components/GooglePlayButton";
import FeaturesAll from "@/components/FeaturesAll";
import Screenshots from "@/components/Screenshots";
import SpotlightForecast from "@/components/SpotlightForecast";
import { PageHero, PageSection } from "@/components/PageSection";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/features";
const TITLE = "Every Feature in the SweepTrack Pro Metal Detecting App | SweepTrack Pro";
const DESCRIPTION =
  "The full toolkit: GPS tracking, map overlays, Finds Intelligence, the Detecting Forecast, offline maps, Radar, Permission Vault, and 45+ more tools in one Android app.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "Every feature in the SweepTrack Pro metal detecting app", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "Every feature in SweepTrack Pro", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" }, about: { "@id": "https://sweeptrack.pro/#app" }, mainEntity: { "@id": "https://sweeptrack.pro/#app" }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
      { "@type": "ListItem", position: 2, name: "Features", item: URL },
    ] },
  ],
};

export default function FeaturesPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero title="Every tool in the metal detecting app" actions={<GooglePlayButton />} note="Android only.">
          <p>The big tools first, then the 45+ smaller ones that ship in the app today.</p>
        </PageHero>

        <PageSection>
          <SpotlightForecast />
        </PageSection>

        <FeaturesAll />
        <Screenshots />
      </main>
      <Footer />
    </I18nProvider>
  );
}
