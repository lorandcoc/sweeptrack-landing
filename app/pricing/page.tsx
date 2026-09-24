import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTable from "@/components/PricingTable";
import { PageHero } from "@/components/PageSection";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/pricing";
const TITLE = "Pricing: Free vs Pro | SweepTrack Pro Metal Detecting App";
const DESCRIPTION =
  "SweepTrack Pro is free to start. Pro unlocks unlimited sessions, the full find record, Finds Intelligence, map overlays, offline maps, Radar hosting, and every export format. A limited Founder's Lifetime is available too. Android.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "SweepTrack Pro pricing: Free vs Pro", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "SweepTrack Pro pricing", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" }, about: { "@id": "https://sweeptrack.pro/#app" }, mainEntity: { "@id": "https://sweeptrack.pro/#app" }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
      { "@type": "ListItem", position: 2, name: "Pricing", item: URL },
    ] },
  ],
};

export default function PricingPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero title="What SweepTrack Pro costs">
          <p>
            Tracking is free for good. Pro unlocks the map layers, the full find record, the forecast, and backups, and
            there is a one-time Founder&apos;s Lifetime option for the first 1,000 buyers.
          </p>
        </PageHero>
        <PricingTable heading={false} />
      </main>
      <Footer />
    </I18nProvider>
  );
}
