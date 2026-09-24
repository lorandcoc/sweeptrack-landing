import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton from "@/components/GooglePlayButton";
import SpotlightVault from "@/components/SpotlightVault";
import SpotlightPerimeter from "@/components/SpotlightPerimeter";
import InfoCard from "@/components/InfoCard";
import { ItemGrid, PageClosing, PageHero, PageSection, TextLink } from "@/components/PageSection";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/permissions";
const TITLE = "Permissions & Boundaries for Metal Detecting | SweepTrack Pro";
const DESCRIPTION =
  "Keep every landowner permission in one place, generate a signed PDF permission letter, get reminders before permits expire, and set a perimeter alarm that warns you before you cross a boundary. Android.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "Permissions & Boundaries for metal detecting", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "Permissions & Boundaries for metal detecting", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" }, about: { "@id": "https://sweeptrack.pro/#app" }, mainEntity: { "@id": "https://sweeptrack.pro/#app" }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
      { "@type": "ListItem", position: 2, name: "Permissions & Boundaries", item: URL },
    ] },
  ],
};


export default function PermissionsPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          title="Permission in writing, and a warning before you cross the line"
          actions={<GooglePlayButton />}
          note="Android only."
        >
          <p>
            Turn a verbal yes into a signed PDF, keep each landowner&apos;s permission with its expiry date and boundary in
            one place, and let your phone warn you before you cross the line you agreed to.
          </p>
        </PageHero>

        <PageSection>
          <SpotlightVault />
        </PageSection>

        <PageSection>
          <SpotlightPerimeter />
        </PageSection>

        <PageSection title="The permission tools">
          <ItemGrid>
            <InfoCard tier="Free" title="The Vault" body="Every permission with a status color (approved, ask first, denied), landowner details, and the site boundary on the map. Free covers 1 entry; Pro is unlimited." />
            <InfoCard tier="Pro" title="PDF permission letter" body="Generate a branded A4 request or thank-you letter with a site map, signed by the landowner on your screen." />
            <InfoCard tier="Free" title="Expiry reminders" body="Add any permit's expiry date to your phone's calendar with one tap, and see what's expiring soon in the forecast." />
            <InfoCard tier="Pro" title="Perimeter Guard" body="Draw a boundary and get escalating vibration near the edge, plus an alarm if you step outside, even through Do Not Disturb." />
          </ItemGrid>
        </PageSection>

        <PageClosing
          title="Detect where you're welcome"
          actions={
            <>
              <GooglePlayButton />
              <TextLink href="/trust">How your data is handled</TextLink>
            </>
          }
        >
          Keep your permissions straight and your boundaries honest, and you keep your access.
        </PageClosing>
      </main>
      <Footer />
    </I18nProvider>
  );
}
