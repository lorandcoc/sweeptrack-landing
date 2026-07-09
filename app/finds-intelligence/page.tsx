import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton, { PLAY_URL } from "@/components/GooglePlayButton";
import SpotlightFindsIntel from "@/components/SpotlightFindsIntel";
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

function Metric({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl p-5 bg-surface border border-white/[0.07] h-full">
      <h3 className="font-semibold text-base mb-1.5">{title}</h3>
      <p className="text-muted text-sm leading-relaxed">{body}</p>
    </div>
  );
}

export default function FindsIntelligencePage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <section className="relative pt-12 pb-10 md:pt-20 md:pb-12 overflow-hidden">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">Finds Intelligence · Pro</p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
              Your finds, turned into a map of <span className="text-accent">where to dig.</span>
            </h1>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:pretty]">
              The free app tracks your detecting. Finds Intelligence reads every find you have logged and tells you what
              is actually working, so you spend your next Saturday on productive ground, not just busy ground.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <GooglePlayButton />
              <span className="inline-flex items-center gap-2 text-xs font-medium text-muted"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Pro feature · Android</span>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="max-w-6xl mx-auto px-6"><SpotlightFindsIntel /></div>
        </section>

        <section className="py-12 md:py-16 bg-surface/20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">What it reads from <span className="text-accent">your log.</span></h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">Real numbers from the finds you already recorded. No guessing, no made-up score.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Metric title="Finds per hour" body="Your true rate, so you can tell a productive site from a slow one." />
              <Metric title="Best time of day" body="A 24-hour breakdown of when your finds actually come in." />
              <Metric title="By detector, type, and site" body="Which machine, which target types, and which sites carry their weight, each with count, value, and weight." />
              <Metric title="Collection value over time" body="Your total collection value charted month by month." />
              <Metric title="Value-weighted hot zones" body="A heatmap built from find value, so a single gold ring outshines a pile of pull-tabs." />
              <Metric title="Built from real records" body="Every metric comes from your logged finds. There is no summary score inventing a number." />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">It only works if you <span className="text-accent">log the find.</span></h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">Good news: logging is quick, and the free record is enough to get started.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              <div className="rounded-2xl p-6 bg-surface border border-white/[0.08]">
                <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Free record</div>
                <p className="text-muted text-sm leading-relaxed">Type (one of six), a name, notes, and one photo, dropped on a GPS pin. Enough to build a real find history.</p>
              </div>
              <div className="sweep-outline rounded-2xl p-6 relative bg-surface">
                <div className="relative z-10">
                  <div className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-4">Pro record</div>
                  <p className="text-muted text-sm leading-relaxed">Everything above plus value, depth on a 0 to 40 cm slider, weight, signal or VDI, soil type, audio notes, video, and multiple photos, which is what feeds the deeper analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-surface/20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Dig smarter <span className="text-accent">next time.</span></h2>
            <p className="text-muted text-lg max-w-2xl mx-auto mb-8">Finds Intelligence ships in SweepTrack Pro. Install free, log your finds, and let your own history point the way.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GooglePlayButton />
              <a href="/coverage" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base rounded-2xl border border-white/12 text-foreground font-semibold hover:border-accent/40 transition-colors">See Track &amp; Coverage</a>
            </div>
            <p className="text-accent/70 text-sm font-medium mt-6">Pro feature · Android · by Loriba · <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Google Play</a></p>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
