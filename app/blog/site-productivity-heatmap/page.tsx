import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site Productivity Heatmap: Your Most Productive Ground",
  description:
    "Learn how the Site Productivity Heatmap in SweepTrack Pro loads all finds from all sessions onto a single map, revealing your most productive detecting ground across your entire history.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Site Productivity Heatmap: Your Most Productive Ground</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>The Find Heatmap shows clusters within a single session. The Site Productivity Heatmap goes bigger &mdash; it loads <strong>every find from every session in your entire history</strong> onto one map. If you&apos;ve been detecting for months or years, this is where you see the full picture.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What It Shows</h2>
          <p>A standalone map overlay with a gold-amber heatmap built from the GPS coordinates stored on each find. Every find you&apos;ve ever logged with a location &mdash; across all sites, all sessions, all time &mdash; appears on this single view. Clusters of finds glow hot. Barren ground stays cold.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">How It&apos;s Different from the Walking Heatmap</h2>
          <p>This is a critical distinction:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Walking heatmap</strong> &mdash; shows where your feet went. High traffic = hot. This tells you about coverage, not productivity</li>
            <li><strong>Site Productivity Heatmap</strong> &mdash; shows where you found things. High find density = hot. This tells you about results</li>
          </ul>
          <p>A field you walked 20 times might be cool on the productivity heatmap if you only found trash. A corner of a pasture you visited once might glow bright if you pulled six coins from a 3-meter patch.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Filtering by Find Type</h2>
          <p>Just like the session-level Find Heatmap, you can filter by type &mdash; All, Treasure, Gold, Coin, Relic, or Jewelry. Filtering to &ldquo;Gold&rdquo; across your entire history might reveal that one beach section where gold always seems to concentrate after storms.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Not Tied to the Permission Vault</h2>
          <p>The productivity heatmap works entirely from find coordinates, not from permission boundaries. You don&apos;t need vault entries for it to work. If a find has GPS data, it appears on the map. This makes it useful even if you haven&apos;t set up any permissions yet.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Practical Uses</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Decide where to go today</strong> &mdash; zoom out and see which of your sites has historically produced the most</li>
            <li><strong>Find forgotten hotspots</strong> &mdash; a cluster you haven&apos;t revisited in months might be worth another session</li>
            <li><strong>Compare sites objectively</strong> &mdash; gut feeling says Site A is better, but the heatmap might disagree</li>
          </ul>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> aggregates every find from your entire detecting history into a single productivity heatmap, so you always know which ground has treated you best.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/find-heatmap" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Find Heatmap: See Where Your Finds Cluster &rarr;</Link>
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">How to Track Your Metal Detecting Sessions with GPS &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
