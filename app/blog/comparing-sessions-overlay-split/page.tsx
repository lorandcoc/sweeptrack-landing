import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import Link from "next/link";

export const metadata = blogMeta({
  slug: "comparing-sessions-overlay-split",
  title: "Comparing Sessions: Overlay and Split View",
  description:
    "Compare metal detecting sessions side by side or overlaid on the same map with colour-coded paths, blend controls, and map type toggling.",
});

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({
          slug: "comparing-sessions-overlay-split",
          title: "Comparing Sessions: Overlay and Split View",
          description: "Compare metal detecting sessions side by side or overlaid on the same map with colour-coded paths, blend controls, and map type toggling.",
        })) }}
      />
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Comparing Sessions: Overlay and Split View</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>When you detect the same site over multiple visits, comparing sessions shows you how your coverage, finds, and strategy evolved. Session comparison gives you two ways to do this: overlay mode and split view.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Selecting Sessions to Compare</h2>
          <p>Open Map Comparison from the More tab. Browse your past sessions and tap the ones you want to compare. For split view, the first two selected sessions are placed side by side.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Overlay Mode</h2>
          <p>Overlay stacks all selected sessions onto a single map. Each session&apos;s path gets a distinct colour so you can tell them apart. Find pins appear in the matching colour. This view is ideal for:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Seeing total coverage across multiple visits</li>
            <li>Identifying gaps between sessions where ground was missed</li>
            <li>Noticing whether find clusters repeat in the same area</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Split View</h2>
          <p>Split view places two sessions side by side on separate maps. Both maps stay synchronised &mdash; pan or zoom one and the other follows. This makes it easy to compare:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Coverage patterns between two visits to the same field</li>
            <li>Find density across different weather conditions</li>
            <li>How your search strategy changed between sessions</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Blend Alpha Slider</h2>
          <p>In overlay mode, the blend alpha slider controls how transparent each path is. Pull it left and paths are nearly see-through, letting the map show more clearly. Push it right and paths are solid and vivid. Adjust this based on how many sessions you&apos;re overlaying &mdash; more sessions need more transparency to avoid a messy tangle.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Path Width and Map Types</h2>
          <p>You can also adjust the path width to make tracks thicker or thinner, and toggle between satellite and street map views. Satellite is usually best for field detecting because you can see physical features, while street view works better for park and urban sessions where road context helps.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> lets you compare sessions in overlay or split view with colour-coded paths and blend controls, so you can see exactly how your coverage builds over time.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/using-track-overlay" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Using Track Overlay &rarr;</Link>
              <Link href="/blog/understanding-session-statistics" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Understanding Your Session Statistics &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
