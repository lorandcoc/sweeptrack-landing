import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "import-and-georeference-your-own-maps";
const TITLE = "Import and Align Your Own Maps Over Satellite";
const DESCRIPTION =
  "Pin a scanned old map, plat, or aerial photo onto SweepTrack Pro's live satellite map at true scale, then line it up by hand or with precise control points.";
const IMAGE = "/screenshots/offline_maps.jpg";
const PUBLISHED = "2026-06-24";

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
        readTime="4 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps to Find Better Detecting Spots" },
          { href: "/blog/downloading-offline-maps", title: "Downloading Offline Maps for Areas Without Cell Service" },
        ]}
      >
          <p>SweepTrack Pro&apos;s built-in historical layer covers a lot of ground, but it can&apos;t hold every map. The county plat you found in an archive, a hand-drawn estate map, an old aerial photo of your permission: any of them can be imported and locked onto the live satellite map, sitting where it belongs on real ground. A building that vanished a century ago ends up pinned to the field in front of you.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Import almost any map image</h2>
          <p>Add an overlay and pick an image through Android&apos;s file picker. Anything the phone can decode works, including JPEG, PNG, and WebP, so a photo of a paper map or a screenshot from an archive is fine. Large scans are downsampled to a 2048 pixel long edge to keep the map smooth, and the file is copied into the app&apos;s private storage. It stays on your device, and nothing is uploaded.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Line it up by hand, or with control points</h2>
          <p>There are two ways to place a map. Manual align is free and quick. Drag to move, pinch to scale, and twist to rotate until the roads and rivers sit over their real counterparts. Nudge buttons shift the image in 5 meter steps for fine adjustments, and Reset starts you over if the alignment gets away from you.</p>
          <p>Precision georeferencing is the exact method. Tap a landmark on your map, tap the same landmark on the satellite view, and repeat for a few recognizable points such as a road junction or a building corner. Two pairs are enough to apply a fit. Place three or more and the app reports the real accuracy, the average error in meters on the ground, so you know how far to trust the result. It corrects the map&apos;s scale, rotation, and position as one, and it will not rubber-sheet a warped scan into place, so a clean map lines up tighter than a crumpled one.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Set the opacity and manage your overlays</h2>
          <p>Every overlay has its own opacity slider, from 10 percent for a faint reference up to 100 percent when you want to read the map directly. The overlay manager lists everything you have added, where you can rename it, hide and show it, re-open the editor, or delete it. Drop a historical map over the satellite view and fade between the two to see exactly what changed on the ground.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">It stays yours, and it travels with you</h2>
          <p>Custom overlays are separate from the built-in Old Map layer, so importing your own never disturbs the USGS historical tiles. They are saved with the rest of your data, which means a Google Drive backup carries your aligned maps to a new phone and restores them in place. The free plan holds one custom overlay. Pro removes the limit, and any overlay you saved earlier keeps showing even if a subscription lapses.</p>
      </BlogPostFrame>
    </>
  );
}
