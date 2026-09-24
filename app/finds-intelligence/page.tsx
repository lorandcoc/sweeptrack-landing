import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton from "@/components/GooglePlayButton";
import SpotlightFindsIntel from "@/components/SpotlightFindsIntel";
import InfoCard from "@/components/InfoCard";
import { ItemGrid, PageClosing, PageHero, PageSection, PlanCompare, TextLink } from "@/components/PageSection";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/finds-intelligence";
const TITLE = "Finds Intelligence: Know Where to Dig Next | SweepTrack Pro";
const DESCRIPTION =
  "Finds Intelligence reads every find you've logged and turns it into direction: finds per hour, your best time of day, breakdowns by detector and site, collection value over time, and a value-weighted hot-zone map of your best ground. Android, Pro.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "Finds Intelligence: know where to dig next", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "Finds Intelligence for metal detecting", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" }, about: { "@id": "https://sweeptrack.pro/#app" }, mainEntity: { "@id": "https://sweeptrack.pro/#app" }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
      { "@type": "ListItem", position: 2, name: "Finds Intelligence", item: URL },
    ] },
  ],
};


export default function FindsIntelligencePage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          title="What your find log says about where to dig"
          actions={<GooglePlayButton />}
          note="A Pro feature. Android only."
        >
          <p>
            Finds Intelligence reads every find you have logged and shows what is working: your finds per hour, the
            time of day you do best, and which sites pay off, so your next Saturday goes to ground that produces.
          </p>
        </PageHero>

        <PageSection>
          <SpotlightFindsIntel />
        </PageSection>

        <PageSection title="What it reads from your log" intro="Every figure is computed from the finds you have logged.">
          <ItemGrid cols={3}>
            <InfoCard title="Finds per hour" body="Your true rate, so you can tell a productive site from a slow one." />
            <InfoCard title="Best time of day" body="A 24-hour breakdown of when your finds actually come in." />
            <InfoCard title="By detector, type, and site" body="Which machine, which target types, and which sites carry their weight, each with count, value, and weight." />
            <InfoCard title="Collection value over time" body="Your total collection value charted month by month." />
            <InfoCard title="Value-weighted hot zones" body="A heatmap built from find value, so a single gold ring outshines a pile of pull-tabs." />
            <InfoCard title="Built from real records" body="Every metric comes from your logged finds. There is no summary score inventing a number." />
          </ItemGrid>
        </PageSection>

        <PageSection title="It only works if you log your finds" intro="Logging is quick, and the free record is enough to start with.">
          <PlanCompare
            free={{ label: "Free record", items: ["Type (one of six)", "Name and notes", "One photo", "Dropped on a GPS pin"] }}
            paid={{
              label: "Pro record",
              items: [
                "Everything in the free record",
                "Value, weight, and depth on a 0 to 40 cm slider",
                "Signal or VDI, and soil type",
                "Audio notes, video, and multiple photos",
              ],
            }}
            note="The Pro fields are what feed the deeper analysis."
          />
        </PageSection>

        <PageClosing
          title="Start logging on your next outing"
          actions={
            <>
              <GooglePlayButton />
              <TextLink href="/coverage">Track and coverage</TextLink>
            </>
          }
        >
          Finds Intelligence is part of SweepTrack Pro. Install the app free, log your finds, and the dashboard fills in
          as your history grows.
        </PageClosing>
      </main>
      <Footer />
    </I18nProvider>
  );
}
