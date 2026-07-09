import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoonButton from "@/components/ComingSoonButton";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/iphone";
const TITLE = "iPhone Version: Join the Waitlist | SweepTrack Pro";
const DESCRIPTION =
  "SweepTrack Pro is Android-only today. An iPhone version is being evaluated. Join the waitlist and we'll email you first if and when an iOS version lands.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "SweepTrack Pro for iPhone: join the waitlist", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "SweepTrack Pro for iPhone waitlist", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" }, about: { "@id": "https://sweeptrack.pro/#app" }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
      { "@type": "ListItem", position: 2, name: "iPhone Waitlist", item: URL },
    ] },
  ],
};

export default function IphonePage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative pt-16 pb-20 md:pt-28 md:pb-28 overflow-hidden">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">iPhone</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
              An iPhone version? <span className="text-accent">Tell us you want it.</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed [text-wrap:pretty] mb-4">
              Straight answer: SweepTrack Pro is Android-only today, and an iPhone version is being evaluated, not
              promised with a date. The honest way to move it up the list is to show there is demand.
            </p>
            <p className="text-muted/80 text-sm max-w-xl mx-auto leading-relaxed mb-8">
              Join the waitlist and you get the link first if and when an iOS version lands. One email, that is it.
            </p>
            <div className="flex justify-center"><ComingSoonButton size="large" /></div>
            <p className="font-mono text-[11px] text-muted/70 mt-6">
              On Android now &middot; <a href="/" className="text-accent hover:underline">See the app</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
