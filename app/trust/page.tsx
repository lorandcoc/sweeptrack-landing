import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

function Principle({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl p-5 bg-surface border border-white/[0.07] h-full">
      <h3 className="font-semibold text-base mb-1.5">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{body}</p>
    </div>
  );
}

export default function TrustPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-12 pb-10 md:pt-20 md:pb-12 overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">
              Trust Center
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
              Your data, <span className="text-accent">in plain English.</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:pretty]">
              Detectorists guard their spots. So here is exactly what SweepTrack stores, what stays on your phone, what
              leaves it and why, and what you control. No policy fog.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Principle title="On your device first" body="Your sessions, finds, and their locations live on your phone, not on our servers." />
              <Principle title="No ads, no ad trackers" body="No advertising, no third-party advertising trackers, and we never sell your data." />
              <Principle title="Diagnostics are opt-in" body="Crash and usage diagnostics are off by default, anonymized, and coordinate-scrubbed when you turn them on." />
              <Principle title="Backups only you can open" body="A backup writes to your own Google Drive, which the app can't read. Add a passphrase and it's AES-256 encrypted on your phone before it uploads." />
            </div>
          </div>
        </section>

        {/* Data-flow matrix */}
        <section className="py-12 md:py-16 bg-surface/20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Where every piece of data <span className="text-accent">goes.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                One row per feature. If a row says data leaves your phone, it says exactly where and why.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/[0.07]">
              <table className="w-full min-w-[820px] text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-surface/80">
                    {["Feature", "Data used", "Where it's stored", "Shared with", "Retention", "Your control"].map((h) => (
                      <th key={h} className="px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted border-b border-white/[0.07] whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map((row, i) => (
                    <tr key={row[0]} className={i % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"}>
                      <td className="px-4 py-3 align-top font-semibold text-white/90 border-b border-white/[0.05]">{row[0]}</td>
                      {row.slice(1).map((cell, j) => (
                        <td key={j} className="px-4 py-3 align-top text-muted leading-relaxed border-b border-white/[0.05]">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* What Google Play's labels mean */}
        <section className="py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl mb-4">
                What the Google Play labels <span className="text-accent">mean.</span>
              </h2>
            </div>
            <div className="rounded-2xl p-6 bg-surface border border-white/[0.07]">
              <p className="text-muted text-sm leading-relaxed mb-4">
                The app&apos;s Google Play listing carries a Data safety section because a few features send data off your
                phone by design. Radar shares your live position with the group you join. The forecast and tide tools ask
                a weather provider for data by location. Optional diagnostics, when you switch them on, send anonymized
                crash and usage data.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                That is the whole of it. Your finds and their locations stay on your device, nothing is sold, and nothing
                feeds advertising. If a Play label looks broader than what you read here, it is covering those specific,
                optional flows.
              </p>
            </div>
          </div>
        </section>

        {/* Your controls + links */}
        <section className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl mb-4">
              You&apos;re in <span className="text-accent">control.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
              Export your data to GPX, KML, CSV, or JSON anytime. Delete any session, find, waypoint, or overlay. Leave a
              Radar group with one tap. Keep diagnostics off for good.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
              <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
              <a href="/privacy-radar" className="text-accent hover:underline">Radar Privacy Policy</a>
              <a href="/data-deletion" className="text-accent hover:underline">Data Deletion</a>
              <a href="/terms" className="text-accent hover:underline">Terms of Service</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
