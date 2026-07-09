import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton, { PLAY_URL } from "@/components/GooglePlayButton";
import MapCompareSlider from "@/components/MapCompareSlider";
import SpotlightMapOverlay from "@/components/SpotlightMapOverlay";
import SpotlightPrecisionAlign from "@/components/SpotlightPrecisionAlign";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary } from "@/lib/getDictionary";

const URL = "https://sweeptrack.pro/overlays";
const TITLE = "Custom Map Overlays for Metal Detecting: Import & Align Your Own Maps | SweepTrack Pro";
const DESCRIPTION =
  "Import your own scanned maps, old plats, and aerial photos and pin them to the live satellite map in SweepTrack Pro. Precision control-point align with accuracy in meters, the USGS historical layer, coverage heatmaps, and offline packs. Android.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: "Custom Map Overlays: pin your own maps to the ground",
    description: DESCRIPTION,
    url: URL,
    siteName: "SweepTrack Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Map Overlays for metal detecting",
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
      mainEntity: { "@id": "https://sweeptrack.pro/#app" },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
        { "@type": "ListItem", position: 2, name: "Maps & Overlays", item: URL },
      ],
    },
  ],
};

/* ─── small presentational helpers ─── */

function Layer({ title, body, tier }: { title: string; body: string; tier: "Free" | "Pro" }) {
  return (
    <div className="rounded-2xl p-5 bg-surface border border-white/[0.07] h-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-base">{title}</h3>
        <span
          className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
            tier === "Free"
              ? "text-accent/90 border-accent/30 bg-accent/[0.06]"
              : "text-amber-300/90 border-amber-400/30 bg-amber-400/[0.06]"
          }`}
        >
          {tier}
        </span>
      </div>
      <p className="text-muted text-sm leading-relaxed">{body}</p>
    </div>
  );
}

function Step({ n, t, b }: { n: string; t: string; b: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-3xl text-accent/30 mb-2">{n}</div>
      <h3 className="font-bold text-lg mb-2">{t}</h3>
      <p className="text-muted text-sm leading-relaxed max-w-[280px] mx-auto">{b}</p>
    </div>
  );
}

export default function OverlaysPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-12 pb-12 md:pt-20 md:pb-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left">
                <p className="font-mono text-[11px] md:text-xs text-accent/80 tracking-[0.15em] uppercase mb-5">
                  Maps &amp; Overlays · built into SweepTrack Pro
                </p>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-5 [text-wrap:balance]">
                  Bring your own map. <span className="text-accent">Pin it to the real world.</span>
                </h1>
                <p className="text-muted text-base md:text-lg max-w-xl mb-4 md:mx-0 mx-auto leading-relaxed [text-wrap:pretty]">
                  Import a scanned map, an old parcel plat, or an aerial photo and align it on the live satellite map,
                  right under your GPS track. Then detect with your own reference layer beneath your feet.
                </p>
                <p className="text-muted/80 text-sm max-w-xl mb-8 md:mx-0 mx-auto leading-relaxed">
                  Overlays sit on top of a whole map system: three base maps, the USGS historical layer, coverage and
                  past tracks, and offline packs for when there is no signal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                  <GooglePlayButton />
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Pro feature · Android
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex justify-center">
                <div className="phone-frame w-[220px] sm:w-[250px] aspect-[320/693] relative">
                  <Image
                    src="/screenshots/home.jpg"
                    alt="SweepTrack Pro live map with GPS tracking, the base for map overlays and the historical layer"
                    width={320}
                    height={693}
                    priority
                    className="w-full h-auto screenshot-crop"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* One map, many layers */}
        <section className="py-14 md:py-20 relative">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">One map, many layers</p>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                The map is a <span className="text-accent">stack you control.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Every layer below lives on the same live map, and you switch them on as you need them.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Layer tier="Free" title="Base maps" body="Street, Satellite, and Terrain. Pick the look that reads best on the ground you are working." />
              <Layer tier="Pro" title="USGS Historical" body="Swap your base map for genuine historical topo tiles with one tap. US and Romania." />
              <Layer tier="Pro" title="Your own overlays" body="Import a scanned map, plat, or aerial photo and pin it to the live satellite map." />
              <Layer tier="Pro" title="Precision align" body="Match a few features to their real spots and lock the image to the ground, to the meter." />
              <Layer tier="Pro" title="Coverage heatmap" body="A density map of where you have swept in the current session." />
              <Layer tier="Pro" title="Track overlay" body="Load past sessions as colored paths, or import a GPX or KML file. Up to 7 at once." />
              <Layer tier="Pro" title="Session compare" body="Put two or more past sessions side by side, or overlaid with a blend slider." />
              <Layer tier="Pro" title="Offline packs" body="Download tiles for the whole area from four sources, so the map works with no signal." />
            </div>
          </div>
        </section>

        {/* Import your own */}
        <section className="py-14 md:py-20 relative bg-surface/20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Your map, <span className="text-accent">pinned to the ground.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Take any map that lives on paper or in a photo and lay it over the real world at true scale.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Step n="01" t="Import an image" b="Bring in a PNG, JPG, WebP, or HEIC: a scanned old map, a parcel sketch, or an aerial photo. (No PDF, so export a page to an image first.)" />
              <Step n="02" t="Line it up by hand" b="Drag to move, pinch to scale, twist to rotate. Set the opacity anywhere from 10 to 100 percent so the ground reads through." />
              <Step n="03" t="Detect on top of it" b="Your overlay stays pinned as you walk, right under your live GPS track and your finds." />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="rounded-2xl p-5 bg-surface border border-white/[0.07]">
                <h3 className="font-semibold text-base mb-1.5">Stack as many as you like</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Keep several overlays on at once, name and rename them, and toggle each one, plus a master switch to
                  show or hide them all. It is a Pro feature, with no cap on how many you pin.
                </p>
              </div>
              <div className="rounded-2xl p-5 bg-surface border border-white/[0.07]">
                <h3 className="font-semibold text-base mb-1.5">Prep on a computer</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Already aligned a map in the MapTrack web studio? Import the finished .sweepmap package and it lands
                  in place, no on-phone lining-up needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Import demo */}
        <section className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-6"><SpotlightMapOverlay /></div>
        </section>

        {/* Precision align */}
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3">Precision align</p>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Line it up <span className="text-accent">to the meter.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                When a hand-align is not tight enough, place control points and let SweepTrack do the math.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl p-5 bg-surface border border-white/[0.07]">
                <h3 className="font-semibold text-base mb-1.5">Match features</h3>
                <p className="text-muted text-sm leading-relaxed">Tap a corner, crossroads, or building on your image, then tap the same spot on the real map.</p>
              </div>
              <div className="rounded-2xl p-5 bg-surface border border-white/[0.07]">
                <h3 className="font-semibold text-base mb-1.5">See the fit in meters</h3>
                <p className="text-muted text-sm leading-relaxed">SweepTrack fits the image to those points and shows the accuracy as an RMS readout in meters. Two points is usually enough.</p>
              </div>
              <div className="rounded-2xl p-5 bg-surface border border-white/[0.07]">
                <h3 className="font-semibold text-base mb-1.5">Honest about the math</h3>
                <p className="text-muted text-sm leading-relaxed">The fit is a similarity transform: move, scale, and rotate. It does not warp or rubber-sheet the image, so straight roads stay straight.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Precision demo */}
        <section className="py-8 md:py-12 bg-surface/20">
          <div className="max-w-6xl mx-auto px-6"><SpotlightPrecisionAlign /></div>
        </section>

        {/* Historical layer */}
        <section className="py-14 md:py-20 bg-surface/20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                A century of maps, <span className="text-accent">one tap away.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                The historical layer is a base-map type. Tap it and your map becomes genuine old topo tiles, so
                vanished homesteads, schools, and roads reappear where they once stood.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 bg-surface border border-white/[0.07]">
                <h3 className="font-semibold text-base mb-1.5">United States</h3>
                <p className="text-muted text-sm leading-relaxed">USGS historical topographic tiles (USA_Topo_Maps) across the country.</p>
              </div>
              <div className="rounded-2xl p-5 bg-surface border border-white/[0.07]">
                <h3 className="font-semibold text-base mb-1.5">Romania</h3>
                <p className="text-muted text-sm leading-relaxed">Three eHarta series: Soviet 1:50k, Firing Plans 1:20k, and Austrian 1:200k. Outside these regions, your base map shows through.</p>
              </div>
            </div>
            <p className="text-center text-muted text-sm mt-8">
              Drag the map slider just below to see the historical layer against today&apos;s satellite view.
            </p>
          </div>
        </section>

        {/* Historical slider */}
        <MapCompareSlider />

        {/* Free vs Pro */}
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl mb-4">Free vs Pro</h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                The base maps and field tools are free. The overlay system is where Pro earns its keep.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl p-6 bg-surface border border-white/[0.08]">
                <div className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Free</div>
                <ul className="space-y-2.5">
                  {[
                    "Three base maps: Street, Satellite, Terrain",
                    "Compass, ruler, measure, and Go-To search",
                    "Waypoints on the map",
                    "Overlays you made while on Pro keep showing",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                      <span className="text-accent font-bold mt-0.5">&#10003;</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sweep-outline rounded-2xl p-6 relative bg-surface">
                <div className="relative z-10">
                  <div className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-4">Pro</div>
                  <ul className="space-y-2.5">
                    {[
                      "Import your own overlays, no limit on how many",
                      "Precision control-point align with accuracy in meters",
                      "The USGS historical (Old Map) layer",
                      "Coverage heatmap and track overlay",
                      "Session comparison, overlay and split view",
                      "Offline packs from four tile sources",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                        <span className="text-amber-300 mt-0.5">&#9733;</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted text-xs leading-relaxed mt-5 pt-4 border-t border-white/[0.07]">
                    Pricing is set in Google Play and shown in the app, with a free trial when Google Play offers one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-surface/20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="relative border border-white/[0.06] rounded-3xl p-10 md:p-14 text-center bg-surface/50">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Put your own maps <span className="text-accent">on the ground.</span>
              </h2>
              <p className="text-muted text-lg max-w-lg mx-auto mb-8">
                Map Overlays ship in SweepTrack Pro today. Install free, then unlock the full map system with Pro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <GooglePlayButton />
                <a
                  href="/coverage"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base rounded-2xl border border-white/12 text-foreground font-semibold hover:border-accent/40 transition-colors"
                >
                  See Track &amp; Coverage
                </a>
              </div>
              <p className="text-accent/70 text-sm font-medium mt-6">
                Pro feature · Android · by Loriba ·{" "}
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Google Play</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </I18nProvider>
  );
}
