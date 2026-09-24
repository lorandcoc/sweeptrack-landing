import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComingSoonButton from "@/components/ComingSoonButton";
import { PageHero, TextLink } from "@/components/PageSection";
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
        <PageHero
          title="An iPhone version? Tell us you want it"
          actions={<ComingSoonButton size="large" />}
          note={
            <>
              On Android now. <TextLink href="/">See the app</TextLink>
            </>
          }
        >
          <p>
            Straight answer: SweepTrack Pro is Android-only today, and an iPhone version is being evaluated, not promised
            with a date. The honest way to move it up the list is to show there is demand.
          </p>
          <p className="text-base">
            Join the waitlist and you get the link first if and when an iOS version lands. One email, that is it.
          </p>
        </PageHero>
      </main>
      <Footer />
    </I18nProvider>
  );
}
