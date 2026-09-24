import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GooglePlayButton from "@/components/GooglePlayButton";
import MapCompareSlider from "@/components/MapCompareSlider";
import SpotlightMapOverlay from "@/components/SpotlightMapOverlay";
import SpotlightPrecisionAlign from "@/components/SpotlightPrecisionAlign";
import InfoCard, { StepCard } from "@/components/InfoCard";
import { ItemGrid, PageClosing, PageHero, PageSection, PlanCompare, TextLink } from "@/components/PageSection";
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
  openGraph: { title: "Custom Map Overlays: pin your own maps to the ground", description: DESCRIPTION, url: URL, siteName: "SweepTrack Pro", type: "website" },
  twitter: { card: "summary_large_image", title: "Custom Map Overlays for metal detecting", description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESCRIPTION, isPartOf: { "@type": "WebSite", name: "SweepTrack Pro", url: "https://sweeptrack.pro" }, about: { "@id": "https://sweeptrack.pro/#app" }, mainEntity: { "@id": "https://sweeptrack.pro/#app" }, inLanguage: "en" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sweeptrack.pro" },
      { "@type": "ListItem", position: 2, name: "Maps & Overlays", item: URL },
    ] },
  ],
};


const LAYERS = [
  { tier: "Free" as const, title: "Base maps", body: "Street, Satellite, and Terrain. Pick the look that reads best on the ground you are working." },
  { tier: "Pro" as const, title: "USGS Historical", body: "Swap your base map for genuine historical topo tiles with one tap. US and Romania." },
  { tier: "Pro" as const, title: "Your own overlays", body: "Import a scanned map, plat, or aerial photo and pin it to the live satellite map." },
  { tier: "Pro" as const, title: "Precision align", body: "Match a few features to their real spots and lock the image to the ground, to the meter." },
  { tier: "Pro" as const, title: "Coverage heatmap", body: "A density map of where you have swept in the current session." },
  { tier: "Pro" as const, title: "Track overlay", body: "Load past sessions as colored paths, or import a GPX or KML file. Up to 7 at once." },
  { tier: "Pro" as const, title: "Session compare", body: "Put two or more past sessions side by side, or overlaid with a blend slider." },
  { tier: "Pro" as const, title: "Offline packs", body: "Download tiles for the whole area from four sources, so the map works with no signal." },
];

export default function OverlaysPage() {
  const dict = getDictionary("en");
  return (
    <I18nProvider initialLocale="en" initialDict={dict}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageHero
          title="Detect with an old map lined up under your track"
          actions={<GooglePlayButton />}
          note="A Pro feature. Android only."
          aside={
            <div className="flex justify-center md:justify-end">
              <div className="phone-frame w-[220px] sm:w-[250px] md:w-full">
                <Image
                  src="/maps/old_map.jpg"
                  alt="The USGS historical topo layer in SweepTrack Pro, with its opacity slider"
                  width={1280}
                  height={2773}
                  priority
                  sizes="(max-width: 640px) 220px, 290px"
                  className="block w-full h-auto"
                />
              </div>
            </div>
          }
        >
          <p>
            Import a scanned map, an old parcel plat, or an aerial photo and align it on the live satellite map, right
            under your GPS track. Then detect with your own reference layer beneath your feet.
          </p>
          <p className="text-base">
            Overlays sit on top of a whole map system: three base maps, the USGS historical layer, coverage and past
            tracks, and offline packs for when there is no signal.
          </p>
        </PageHero>

        <PageSection title="The layers" intro="Every layer below lives on the same live map, and you switch them on as you need them.">
          <ItemGrid>
            {LAYERS.map((l) => (
              <InfoCard key={l.title} tier={l.tier} title={l.title} body={l.body} />
            ))}
          </ItemGrid>
        </PageSection>

        <PageSection title="Importing your own map" intro="Take any map that lives on paper or in a photo and lay it over the real world at true scale.">
          <ItemGrid cols={3}>
            <StepCard n="1" title="Import an image" body="Bring in a PNG, JPG, WebP, or HEIC: a scanned old map, a parcel sketch, or an aerial photo. (No PDF, so export a page to an image first.)" />
            <StepCard n="2" title="Line it up by hand" body="Drag to move, pinch to scale, twist to rotate. Set the opacity anywhere from 10 to 100 percent so the ground reads through." />
            <StepCard n="3" title="Detect on top of it" body="Your overlay stays pinned as you walk, right under your live GPS track and your finds." />
          </ItemGrid>
          <div className="mt-12 max-w-4xl">
            <ItemGrid cols={2}>
              <InfoCard title="Stack as many as you like" body="Keep several overlays on at once, name and rename them, and toggle each one, plus a master switch to show or hide them all. A Pro tool, with no cap on how many you pin." />
              <InfoCard title="Prep on a computer" body="Already aligned a map in the MapTrack web studio? Import the finished .sweepmap package and it lands in place, no on-phone lining-up needed." />
            </ItemGrid>
          </div>
        </PageSection>

        <PageSection>
          <SpotlightMapOverlay />
        </PageSection>

        <PageSection title="Precision align" intro="When a hand-align is not tight enough, place control points and let SweepTrack do the math.">
          <ItemGrid cols={3}>
            <InfoCard title="Match features" body="Tap a corner, crossroads, or building on your image, then tap the same spot on the real map." />
            <InfoCard title="See the fit in meters" body="SweepTrack fits the image to those points and shows the accuracy as an RMS readout in meters. Two points is usually enough." />
            <InfoCard title="Honest about the math" body="The fit is a similarity transform: move, scale, and rotate. It does not warp or rubber-sheet the image, so straight roads stay straight." />
          </ItemGrid>
        </PageSection>

        <PageSection>
          <SpotlightPrecisionAlign />
        </PageSection>

        <PageSection
          title="The historical layer"
          intro="The historical layer is a base-map type. Tap it and your map becomes genuine old topo tiles, so vanished homesteads, schools, and roads show up where they once stood."
        >
          <div className="max-w-4xl">
            <ItemGrid cols={2}>
              <InfoCard title="United States" body="USGS historical topographic tiles (USA_Topo_Maps) across the country." />
              <InfoCard title="Romania" body="Three eHarta series: Soviet 1:50k, Firing Plans 1:20k, and Austrian 1:200k. Outside these regions, your base map shows through." />
            </ItemGrid>
          </div>
        </PageSection>

        <MapCompareSlider />

        <PageSection title="Free and Pro" intro="The base maps and field tools are free. The overlay system is where Pro earns its keep.">
          <PlanCompare
            free={{
              label: "Free",
              items: [
                "Three base maps: Street, Satellite, Terrain",
                "Compass, ruler, measure, and Go-To search",
                "Waypoints on the map",
                "Overlays you made while on Pro keep showing",
              ],
            }}
            paid={{
              label: "Pro",
              items: [
                "Import your own overlays, no limit on how many",
                "Precision control-point align with accuracy in meters",
                "The USGS historical (Old Map) layer",
                "Coverage heatmap and track overlay",
                "Session comparison, overlay and split view",
                "Offline packs from four tile sources",
              ],
            }}
            note="Pricing is set in Google Play and shown in the app, with a free trial when Google Play offers one."
          />
        </PageSection>

        <PageClosing
          title="Try it with a map of your own"
          actions={
            <>
              <GooglePlayButton />
              <TextLink href="/coverage">Track and coverage</TextLink>
            </>
          }
        >
          Overlays are part of SweepTrack Pro. Install the app free and upgrade when you want the map tools.
        </PageClosing>
      </main>
      <Footer />
    </I18nProvider>
  );
}
