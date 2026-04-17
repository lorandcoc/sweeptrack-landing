import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "downloading-offline-maps";
const TITLE = "Downloading Offline Maps for Metal Detecting Without Cell Service";
const DESCRIPTION = "Download offline maps in four tile styles for metal detecting in remote areas with no cell signal. Street, satellite, terrain, and historical topo maps.";
const IMAGE = "/screenshots/offline_maps.png";
const PUBLISHED = "2026-02-16";

export const metadata = blogMeta({ slug: SLUG, title: TITLE, description: DESCRIPTION, publishedDate: PUBLISHED });

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ slug: SLUG, title: TITLE, description: DESCRIPTION, image: IMAGE, publishedDate: PUBLISHED })) }}
      />
      <BlogPostFrame
        title={TITLE}
        category="tutorials"
        readTime="3 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps for Metal Detecting" },
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "Track Your Sessions with GPS" },
        ]}
      >
          <p>Some of the best detecting spots are in places where your phone gets zero signal. Old farmland, remote beaches, woodland &mdash; no bars, no data, no map loading. Offline maps solve this by downloading the tiles you need while you still have Wi-Fi.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Four Tile Sources</h2>
          <p>You can download maps in four different styles, depending on what you need:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Street (OpenStreetMap)</strong> &mdash; roads, paths, and field boundaries. Good for navigating to a site.</li>
            <li><strong>Satellite</strong> &mdash; aerial imagery so you can see hedgerows, ditches, and field shapes. Best for planning where to swing.</li>
            <li><strong>Terrain</strong> &mdash; elevation contours and hill shading. Useful for spotting old earthworks, moats, and ridge-and-furrow patterns.</li>
            <li><strong>Historical Topo</strong> &mdash; older topographical maps that show features that no longer exist: demolished buildings, old railways, abandoned settlements.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Download a Map Pack</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Open the Offline Maps screen from the More tab</li>
            <li>Pan and zoom the map to the area you want to detect</li>
            <li>The download radius adjusts automatically based on your zoom level &mdash; zoom in for a focused pack, zoom out for a wider area</li>
            <li>Select which tile source you want (you can download multiple sources for the same area)</li>
            <li>Tap download and wait for the tiles to cache</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Managing Your Map Packs</h2>
          <p>Each download is saved as a named pack. You can see how much storage each one uses, rename them to match your detecting sites, and delete old ones you no longer need. Maps are stored locally on your device, so they survive app restarts and don&apos;t count against any cloud storage.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Storage Considerations</h2>
          <p>Satellite tiles are the largest because they include high-resolution imagery. A typical field-sized area at max zoom might be 50&ndash;100 MB for satellite versus 5&ndash;10 MB for street tiles. Download over Wi-Fi and keep an eye on your device storage if you&apos;re caching lots of areas.</p>
      </BlogPostFrame>
    </>
  );
}
