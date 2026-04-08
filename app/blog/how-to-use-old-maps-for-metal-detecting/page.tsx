import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Use Old Maps to Find Better Metal Detecting Spots",
  description:
    "Learn how to use USGS historical topographic maps to find old homesteads, vanished roads, and forgotten settlements for metal detecting. Step-by-step guide with tips on reading old topo maps.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">
          &larr; Back to blog
        </Link>

        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Guide</p>
        <h1 className="text-3xl font-bold mb-4">How to Use Old Maps to Find Better Metal Detecting Spots</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 5 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
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

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> includes the USGS Historical Map Overlay as a Pro feature. Overlay old maps right on your detecting map, adjust transparency, and detect on coordinates where old structures once stood.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
