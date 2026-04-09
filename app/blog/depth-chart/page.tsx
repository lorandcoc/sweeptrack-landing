import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Depth Chart: Track How Deep Your Finds Are",
  description:
    "Learn how the Depth Chart in SweepTrack Pro visualizes find depths as a scatter plot over time, color-coded by find type, with average depth lines and trend insights.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Depth Chart: Track How Deep Your Finds Are</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Depth tells a story. Shallow finds on a ploughed field mean recent drops. Deep finds on pasture mean old ground. The Depth Chart plots every find&apos;s depth over time so you can see the pattern &mdash; and what it means for a site&apos;s potential.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Reading the Chart</h2>
          <p>The chart is a scatter plot with two axes:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>X-axis (horizontal)</strong> &mdash; date of the find, oldest on the left</li>
            <li><strong>Y-axis (vertical)</strong> &mdash; depth of the find, shallowest at the top</li>
          </ul>
          <p>Each dot is a single find, color-coded by type. A dashed line shows the average depth across all plotted finds, giving you a baseline to compare against.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Color Coding</h2>
          <p>Find types get distinct colors so you can spot patterns at a glance. If all your coin dots cluster at 15-20 cm while relic dots sit at 25-30 cm, that tells you something about the site&apos;s depositional history &mdash; and about what you might be missing if your detector isn&apos;t reaching deep enough.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Trend Insights</h2>
          <p>The chart analyzes your depth data over time and flags trends. If your finds are getting progressively deeper across sessions at the same site, SweepTrack will note &ldquo;finds are trending deeper&rdquo; &mdash; which might mean you&apos;ve cleaned out the shallow layer and need to switch to a larger coil or slower swing to reach what&apos;s left.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Accessing the Depth Chart</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Navigate to <strong>More &rarr; Analysis</strong></li>
            <li>Select <strong>Depth Chart</strong></li>
            <li>Use the site picker at the top to choose which site to analyze</li>
            <li>The chart populates with all finds that have depth data at that site</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Getting Good Depth Data</h2>
          <p>The chart can only plot finds that have a depth recorded. When you log a find, take an extra second to measure or estimate the hole depth before backfilling. Even rough estimates are useful &mdash; the difference between &ldquo;6 inches&rdquo; and &ldquo;10 inches&rdquo; is meaningful for trend analysis.</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Use your pinpointer as a depth gauge &mdash; most are about 25 cm long</li>
            <li>Estimate in consistent units (the app accepts both cm and inches)</li>
            <li>Even logging depth on half your finds gives the chart enough data to spot trends</li>
          </ul>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> plots your find depths over time as a color-coded scatter chart with average lines and trend analysis, helping you understand what&apos;s happening underground at each site.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/understanding-session-statistics" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Understanding Session Statistics &rarr;</Link>
              <Link href="/blog/logging-finds-photo-video-audio" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Logging Finds with Photo, Video, and Audio &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
