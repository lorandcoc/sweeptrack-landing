import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton from "@/components/GooglePlayButton";
import FeaturesAll from "@/components/FeaturesAll";
import Screenshots from "@/components/Screenshots";
import SpotlightForecast from "@/components/SpotlightForecast";
import SpotlightArsenal from "@/components/SpotlightArsenal";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/features";
const TITLE = "Every Feature in the SweepTrack Pro Metal Detecting App | SweepTrack Pro";
const DESCRIPTION =
  "The full toolkit: GPS tracking, map overlays, Finds Intelligence, the Detecting Forecast, 60+ detector presets, offline maps, Radar, Permission Vault, and 45+ more tools in one Android app.";

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
        <section className="relative pt-12 pb-6 md:pt-20 md:pb-8 overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">The full toolkit</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
              Every tool in the <span className="text-accent">metal detecting app.</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:pretty]">
              The homepage shows the five big jobs. This is everything: the flagship tools and the 45+ quality-of-life
              features that ship in the app today.
            </p>
            <div className="flex justify-center mt-8"><GooglePlayButton /></div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-6 space-y-16 md:space-y-24">
            <SpotlightForecast />
            <SpotlightArsenal />
          </div>
        </section>

        <FeaturesAll />
        <Screenshots />
      </main>
      <Footer />
    </I18nProvider>
  );
}
