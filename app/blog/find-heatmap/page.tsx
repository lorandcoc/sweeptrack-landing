import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find Heatmap: See Where Your Finds Cluster",
  description:
    "Learn how the Find Heatmap in SweepTrack Pro shows density clusters of your logged finds with a gold-amber gradient, helping you identify your most productive patches.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Find Heatmap: See Where Your Finds Cluster</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>The walking heatmap shows where you&apos;ve been. The Find Heatmap shows where you&apos;ve actually <strong>found things</strong>. It&apos;s a separate overlay that plots every logged find on the map with a gold-amber gradient &mdash; the hotter the color, the more finds in that spot.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">How It&apos;s Different from the Walking Heatmap</h2>
          <p>The standard heatmap tracks foot traffic &mdash; it lights up everywhere you&apos;ve walked, whether you found anything or not. The Find Heatmap only cares about results. Two detectorists could walk the same field, but their Find Heatmaps would look completely different based on what they actually dug.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Turning It On</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Open the <strong>Map Features</strong> panel (the layers icon on the map screen)</li>
            <li>Toggle <strong>Find Heatmap</strong> on</li>
            <li>The overlay appears immediately, pulling GPS coordinates from every find you&apos;ve logged in the current session</li>
            <li>A counter at the top shows how many mapped finds are being displayed</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Filtering by Find Type</h2>
          <p>Not all finds are equal. Use the type filter to narrow the heatmap to specific categories:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>All</strong> &mdash; every logged find</li>
            <li><strong>Treasure</strong> &mdash; your high-value hits</li>
            <li><strong>Gold</strong> &mdash; gold items only</li>
            <li><strong>Coin</strong> &mdash; coins of any era</li>
            <li><strong>Relic</strong> &mdash; historical artifacts and relics</li>
            <li><strong>Jewelry</strong> &mdash; rings, chains, pendants</li>
          </ul>
          <p>Filtering to &ldquo;Coin&rdquo; on a ploughed field, for example, might reveal a tight cluster that suggests a dropped purse or a market site.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Reading the Gradient</h2>
          <p>The gold-amber gradient works on density. A faint warm glow means one or two finds in the area. A bright, saturated amber core means multiple finds stacked on top of each other. When you see that hot center, you&apos;ve found a productive patch worth revisiting with a slower swing and smaller grid.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Practical Tips</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Log your finds with GPS enabled &mdash; the heatmap can only plot finds that have coordinates</li>
            <li>Even trash finds are useful data points &mdash; they show active ground vs. dead zones</li>
            <li>Combine with grid search mode for methodical coverage of a hot cluster</li>
          </ul>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> overlays your find density as a gold-amber heatmap right on the satellite map, with type filters so you can isolate exactly what you&apos;re looking for.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/site-productivity-heatmap" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Site Productivity Heatmap: Your Most Productive Ground &rarr;</Link>
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">How to Track Your Metal Detecting Sessions with GPS &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
