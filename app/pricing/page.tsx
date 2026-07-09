import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingTable from "@/components/PricingTable";
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
        <section className="relative pt-12 pb-4 md:pt-20 md:pb-6 overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">Pricing</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
              Free to start. <span className="text-accent">No ads, ever.</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:pretty]">
              Track your detecting free forever. Upgrade to Pro when you want the full toolkit, or grab one of the
              limited Founder&apos;s Lifetime spots.
            </p>
          </div>
        </section>
        <PricingTable />
      </main>
      <Footer />
    </I18nProvider>
  );
}
