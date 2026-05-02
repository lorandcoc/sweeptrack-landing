import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "how-to-use-old-maps-for-metal-detecting";
const TITLE = "How to Use Old Maps to Find Better Metal Detecting Spots";
const DESCRIPTION = "Use USGS historical topographic maps to find old homesteads, vanished roads, and forgotten settlements for metal detecting. Tips on reading old topo maps.";
const IMAGE = "/screenshots/offline_maps.jpg";
const PUBLISHED = "2026-02-28";

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
        category="guides"
        readTime="5 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "Track Your Sessions with GPS" },
          { href: "/blog/metal-detecting-permission-letter-template", title: "Permission Letter Template" },
        ]}
      >
          <p>
            One of the biggest advantages a metal detectorist can have is knowing where things <em>used to be</em>. Old homesteads, vanished roads, abandoned schoolhouses, and forgotten town squares — these are the places where people lived, worked, and lost things decades or centuries ago.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">What Are USGS Historical Topographic Maps?</h2>
          <p>
            The U.S. Geological Survey (USGS) has been making topographic maps since the late 1800s. These maps show terrain, roads, buildings, railroads, and landmarks as they existed at the time of the survey. The entire collection — over 180,000 maps — is now digitized and freely available.
          </p>
          <p>
            For metal detecting, these maps are invaluable. A building shown on an 1890s topo map that no longer exists today could be sitting in an empty field — a field that nobody thinks to detect because there&apos;s nothing visible on the surface.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">What to Look for on Old Maps</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Small squares near crossroads</strong> — these are buildings. Old general stores, churches, schools, and farmhouses were usually at intersections.</li>
            <li><strong>Dashed lines</strong> — old roads or trails that may no longer exist. People traveled these paths and dropped things.</li>
            <li><strong>Named features</strong> — &ldquo;Smith Farm,&rdquo; &ldquo;Old Mill,&rdquo; &ldquo;Ferry Landing&rdquo; — these tell you exactly what was there.</li>
            <li><strong>Railroad stops</strong> — any place a train stopped had people waiting, buying, trading, and losing coins.</li>
            <li><strong>Creek crossings</strong> — before bridges, people forded creeks. Items fell out of wagons and pockets.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Overlay Old Maps on Modern Satellite View</h2>
          <p>
            The real power comes from overlaying a historical map on top of a modern satellite or street map. This lets you see exactly where that old building was in relation to today&apos;s landscape. You can walk right to the spot with GPS.
          </p>
          <p>
            In SweepTrack Pro, the USGS Historical Map Overlay does this automatically. You can adjust the opacity slider to blend between old and new, spot features that no longer exist, and then detect right on the coordinate.
          </p>

          <h2 className="text-xl font-semibold text-accent mt-8">Tips for Using Old Maps Effectively</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Compare maps from different decades. A building might appear on an 1890 map but be gone by 1920 — that&apos;s a 30-year window of human activity.</li>
            <li>Look for areas that were once populated but are now farmland or forest. These are your best detecting spots.</li>
            <li>Pay attention to elevation lines. Old homesteads were typically on high ground near water sources.</li>
            <li>Cross-reference with the Nearby Sites feature in the app to find additional historical landmarks and Wikipedia articles about the area.</li>
            <li>Always get permission before detecting on private land, regardless of what old maps show.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Where to Access USGS Historical Maps</h2>
          <p>
            You can browse the collection at <a href="https://ngmdb.usgs.gov/topoview/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">USGS TopoView</a> or use them directly in SweepTrack Pro, where they&apos;re overlaid on your GPS map in the field — no internet required if you&apos;ve downloaded offline tiles.
          </p>
      </BlogPostFrame>
    </>
  );
}
