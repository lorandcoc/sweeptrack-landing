import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import { ItemGrid, PageHero, PageSection, TextLink } from "@/components/PageSection";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/trust";
const TITLE = "Trust Center: Your Data, in Plain English | SweepTrack Pro";
const DESCRIPTION =
  "Exactly what SweepTrack Pro stores, what stays on your phone, what leaves it, and what you control. A plain-English data-flow table covering sessions, finds, Radar, backups, and optional diagnostics.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "SweepTrack Pro Trust Center: your data, in plain English",
    description: DESCRIPTION,
    url: URL,
    siteName: "SweepTrack Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SweepTrack Pro Trust Center",
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" },
      about: { "@id": "https://sweeptrack.pro/#app" },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
        { "@type": "ListItem", position: 2, name: "Trust Center", item: URL },
      ],
    },
  ],
};

/* Data-flow matrix — every cell is code/FAQ-verified against the app.
   feature · data used · stored · shared with · retention · your control */
const MATRIX: [string, string, string, string, string, string][] = [
  [
    "Sessions & GPS tracks",
    "Your location and the path you walk",
    "On your device (plus your Google Drive if you turn on backup)",
    "No one; a Drive backup lives in your own account",
    "Until you delete it",
    "Export or delete anytime",
  ],
  [
    "Finds, photos, video, audio",
    "The find details and media you log",
    "On your device (plus backup)",
    "No one",
    "Until you delete it",
    "Edit, delete, or export",
  ],
  [
    "Radar live group",
    "Your live position, only while you're in a group with the app open",
    "A temporary group on our server",
    "Only people who joined with your code",
    "The group expires in about 12 hours; your entry is removed the moment you leave",
    "Leave, or pause sharing with ghost mode",
  ],
  [
    "Radar saved spots",
    "Coordinates you save for yourself",
    "On your device only",
    "No one",
    "Until you delete them",
    "Private to you, never shared",
  ],
  [
    "Map overlays",
    "The map images you import",
    "On your device (plus backup)",
    "No one",
    "Until you delete them",
    "Delete anytime",
  ],
  [
    "Weather, tide & forecast",
    "An approximate location, per request",
    "Not stored by us",
    "The weather provider (Open-Meteo) and NOAA for tides, to return the forecast",
    "Per request",
    "Skip the forecast and tide tools to send nothing",
  ],
  [
    "Diagnostics (optional)",
    "Anonymized, coordinate-scrubbed crash and usage data",
    "Off until you turn it on",
    "The diagnostics provider, without your identity",
    "Per the provider's policy",
    "Stays off by default; toggle in Settings",
  ],
  [
    "Billing",
    "None for the core app; purchases go through Google Play",
    "Google",
    "Google",
    "Per Google's policy",
    "Manage in Google Play",
  ],
];


const PRINCIPLES = [
  { title: "On your device first", body: "Your sessions, finds, and their locations live on your phone, not on our servers." },
  { title: "No ads, no ad trackers", body: "No advertising, no third-party advertising trackers, and we never sell your data." },
  { title: "Diagnostics are opt-in", body: "Crash and usage diagnostics are off by default, anonymized, and coordinate-scrubbed when you turn them on." },
  { title: "Backups only you can open", body: "A backup writes to your own Google Drive, which the app can't read. Add a passphrase and it's AES-256 encrypted on your phone before it uploads." },
];

export default function TrustPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero title="What happens to your data">
          <p>
            Detectorists guard their spots. So here is exactly what SweepTrack stores, what stays on your phone, what
            leaves it and why, and what you control.
          </p>
        </PageHero>

        <PageSection>
          <ItemGrid>
            {PRINCIPLES.map((p) => (
              <InfoCard key={p.title} title={p.title} body={p.body} />
            ))}
          </ItemGrid>
        </PageSection>

        <PageSection
          title="Where each piece of data goes"
          intro="One row per feature. If a row says data leaves your phone, it says exactly where and why."
        >
          <div className="overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[820px] text-left text-sm border-collapse">
              <thead>
                <tr className="bg-white/[0.03]">
                  {["Feature", "Data used", "Where it's stored", "Shared with", "Retention", "Your control"].map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold text-foreground whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((row) => (
                  <tr key={row[0]} className="border-t border-white/[0.07]">
                    <td className="px-4 py-3 align-top font-semibold text-foreground/90">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className="px-4 py-3 align-top text-muted leading-relaxed">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PageSection>

        <PageSection title="What the Google Play labels mean">
          <div className="max-w-2xl space-y-4 text-muted leading-relaxed">
            <p>
              The app&apos;s Google Play listing carries a Data safety section because a few features send data off your
              phone by design. Radar shares your live position with the group you join. The forecast and tide tools ask a
              weather provider for data by location. Optional diagnostics, when you switch them on, send anonymized crash
              and usage data.
            </p>
            <p>
              That is the whole of it. Your finds and their locations stay on your device, nothing is sold, and nothing
              feeds advertising. If a Play label looks broader than what you read here, it is covering those specific,
              optional flows.
            </p>
          </div>
        </PageSection>

        <PageSection title="What you control">
          <p className="max-w-2xl text-muted text-lg leading-relaxed">
            Export your data to GPX, KML, CSV, or JSON anytime. Delete any session, find, waypoint, or overlay. Leave a
            Radar group with one tap. Keep diagnostics off for good.
          </p>
          <p className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
            <TextLink href="/privacy">Privacy Policy</TextLink>
            <TextLink href="/privacy-radar">Radar Privacy Policy</TextLink>
            <TextLink href="/data-deletion">Data Deletion</TextLink>
            <TextLink href="/terms">Terms of Service</TextLink>
          </p>
        </PageSection>
      </main>
      <Footer />
    </I18nProvider>
  );
}
