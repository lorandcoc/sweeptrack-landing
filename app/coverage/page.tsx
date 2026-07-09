import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton, { PLAY_URL } from "@/components/GooglePlayButton";
import SpotlightEngine from "@/components/SpotlightEngine";
import InfoCard from "@/components/InfoCard";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/coverage";
const TITLE = "GPS Track & Coverage for Metal Detecting | SweepTrack Pro";
const DESCRIPTION =
  "See exactly where you swept and where you missed. SweepTrack draws a clean GPS track as you walk, autosaves through reboots, and overlays past sessions, a coverage heatmap, and side-by-side comparisons. Android.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: "GPS Track & Coverage for metal detecting", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "GPS Track & Coverage for metal detecting", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" }, about: { "@id": "https://sweeptrack.pro/#app" }, mainEntity: { "@id": "https://sweeptrack.pro/#app" }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
      { "@type": "ListItem", position: 2, name: "Track & Coverage", item: URL },
    ] },
  ],
};

const ICON = {
  tracks: (<><circle cx="6" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="M8 6h7a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h7" /></>),
  heatmap: (<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>),
  compare: (<><rect x="3" y="4" width="7" height="16" rx="1" /><rect x="14" y="4" width="7" height="16" rx="1" /></>),
  elevation: (<><path d="M3 17l5-7 4 4 3-6 6 9" /><path d="M3 20h18" /></>),
};

export default function CoveragePage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative pt-12 pb-10 md:pt-20 md:pb-12 overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">Track &amp; Coverage</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
              Never search the same ground <span className="text-accent">twice.</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:pretty]">
              Your GPS path draws on the map as you walk, so you sweep in lanes instead of circles. SweepTrack keeps a
              clean line from the first step and autosaves the whole time, so a reboot or a dead battery never costs you
              the dig.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <GooglePlayButton />
              <span className="inline-flex items-center gap-2 text-xs font-medium text-muted"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Free tracking · Android</span>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="max-w-6xl mx-auto px-6"><SpotlightEngine /></div>
        </section>

        <section className="py-12 md:py-16 bg-surface/20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">See the ground you <span className="text-accent">already covered.</span></h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">Four ways to read your coverage and find the strip you missed.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <InfoCard icon={ICON.tracks} tier="Pro" title="Track overlay" body="Load past sessions onto the live map as colored paths, up to 7 at once, so covered ground stays visible." />
              <InfoCard icon={ICON.heatmap} tier="Pro" title="Coverage heatmap" body="A density map of the current session's walked path. See at a glance where you swept hard and where you barely passed." />
              <InfoCard icon={ICON.compare} tier="Pro" title="Session compare" body="Put two or more past sessions side by side, or overlaid with a blend slider, to spot the gaps between visits." />
              <InfoCard icon={ICON.elevation} tier="Free" title="Elevation profile" body="A per-session terrain chart with min, max, ascent, descent, and average, in meters or feet." />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Your data, <span className="text-accent">yours to keep.</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
              Every session stores on your phone and exports to GPX, KML, CSV, or JSON whenever you want. Back it up to
              your own Google Drive, encrypted with a passphrase only you hold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GooglePlayButton />
              <a href="/overlays" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base rounded-2xl border border-white/12 text-foreground font-semibold hover:border-accent/40 transition-colors">See Maps &amp; Overlays</a>
            </div>
            <p className="text-accent/70 text-sm font-medium mt-6">Free tracking · Android · by Loriba · <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Google Play</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
