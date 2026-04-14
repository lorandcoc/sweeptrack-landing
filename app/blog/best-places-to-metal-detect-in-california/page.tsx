import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import Link from "next/link";

export const metadata = blogMeta({
  slug: "best-places-to-metal-detect-in-california",
  title: "Best Places to Metal Detect in California",
  description:
    "California",
});

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({
          slug: "best-places-to-metal-detect-in-california",
          title: "Best Places to Metal Detect in California",
          description: "California",
        })) }}
      />
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Location</p>
        <h1 className="text-3xl font-bold mb-4">Best Places to Metal Detect in California</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 5 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>California&apos;s history runs from Spanish missions to the Gold Rush to Hollywood, and the detecting opportunities match that range. The challenge isn&apos;t finding interesting places &mdash; it&apos;s navigating a patchwork of land management agencies, each with their own rules.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Gold Rush Era Sites</h2>
          <p>The Sierra Nevada foothills are dotted with former mining camps, supply towns, and stagecoach stops from the 1849 Gold Rush and the decades that followed. Many of these sites are on Bureau of Land Management (BLM) land, which generally allows casual metal detecting. Old mining towns produced coins, tokens, buttons, and everyday items that are still in the ground. Research historical mining district maps to find promising areas.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Beaches</h2>
          <p>California has over 800 miles of coastline. Southern California beaches near tourist areas are excellent for modern coins and jewelry, especially after summer weekends. Northern California beaches tend to be less crowded but have their own charm &mdash; storms can expose old shipwreck material along the rugged coast. Rules vary by beach &mdash; some city and county beaches allow detecting, while state beaches generally prohibit it.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Old Mining Towns</h2>
          <p>Beyond the Gold Rush, California had silver, copper, and borax mining booms that created and abandoned dozens of towns. Many desert mining towns in eastern California are remarkably well-preserved due to the dry climate. Ghost town sites on BLM land are generally accessible, but always verify land status before detecting.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">River Beds</h2>
          <p>Metal detecting and gold panning overlap significantly in California. Rivers that carried gold also carried coins, tools, and equipment lost by miners. When water levels drop in late summer, exposed gravel bars and river banks become accessible. Some river areas fall under mining claims &mdash; check for active claims before detecting.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Desert Ghost Towns</h2>
          <p>The Mojave and Colorado deserts have ghost towns from mining, railroad, and military eras. The dry desert climate preserves metal objects well. These areas are remote &mdash; bring plenty of water, tell someone where you&apos;re going, and carry offline maps. Cell service is often nonexistent.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What the Law Says</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>State parks and state beaches generally prohibit metal detecting</li>
            <li>BLM land generally allows casual hobby detecting</li>
            <li>National parks and national monuments prohibit detecting under ARPA</li>
            <li>National forests prohibit detecting for archaeological artifacts</li>
            <li>City and county beaches and parks vary &mdash; check local rules</li>
            <li>Active mining claims are off-limits without the claim holder&apos;s permission</li>
            <li>Private land requires landowner permission</li>
          </ul>

          <p className="text-xs text-muted mt-8 p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <strong>Disclaimer:</strong> Laws and regulations change. This article is for general information only and does not constitute legal advice. Always verify current rules with local authorities before detecting at any location.
          </p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> has downloadable offline maps for remote desert and mountain areas where cell service doesn&apos;t reach, plus a detecting forecast to help you pick the best days to head out.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/where-to-metal-detect-near-me" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Where to Metal Detect Near Me &rarr;</Link>
              <Link href="/blog/metal-detecting-for-beginners" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Metal Detecting for Beginners &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
