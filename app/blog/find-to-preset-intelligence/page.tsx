import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find-to-Preset Intelligence: Know Which Settings Work",
  description:
    "Discover how SweepTrack Pro automatically tags every find with the detector preset that was active, building data over time to show which settings produce the best results.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Find-to-Preset Intelligence: Know Which Settings Work</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Every detectorist eventually asks: &ldquo;Which of my presets actually performs best?&rdquo; Gut feeling says one thing, but data might say another. Find-to-Preset Intelligence answers the question with hard numbers.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">How It Works</h2>
          <p>Every time you log a find, SweepTrack Pro takes a snapshot of the detector preset that was active at that moment and tags it to the find record. You don&apos;t need to do anything extra &mdash; just have a preset selected before you start detecting, and every find you log gets linked to those settings automatically.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What the Data Tells You</h2>
          <p>Over dozens of sessions, patterns emerge. You might discover:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>&ldquo;73% of my gold finds came from Preset 3&rdquo;</li>
            <li>&ldquo;Preset 1 produces the most coin finds, but Preset 5 has a higher keeper ratio&rdquo;</li>
            <li>&ldquo;I&apos;ve never found a relic on Preset 2 &mdash; maybe it&apos;s discriminating too aggressively&rdquo;</li>
          </ul>
          <p>This is the kind of insight that normally takes years of mental note-keeping to develop. With automatic tagging, the data accumulates in the background while you focus on swinging.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Using It to Improve</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Validate your presets</strong> &mdash; if a preset you use often has zero finds, it might need adjusting</li>
            <li><strong>Match presets to ground</strong> &mdash; compare preset performance across different sites and soil types</li>
            <li><strong>Stop guessing at the field</strong> &mdash; check your stats before you leave the car and select the preset that&apos;s proven for that find type</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">The More You Detect, the Smarter It Gets</h2>
          <p>With 10 finds the data is anecdotal. With 100 finds it becomes meaningful. With 500+ finds you have a personal database that no one else in the hobby has &mdash; a statistical profile of exactly how your detector performs under your settings, in your ground, with your swing style.</p>
          <p>All it takes is logging your finds consistently and keeping a preset active. The tagging does the rest.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> automatically links every logged find to the active detector preset, building a personal intelligence profile of which settings work best for each find type.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/organize-metal-detector-presets-settings" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Organize Your Detector Settings and Presets &rarr;</Link>
              <Link href="/blog/understanding-session-statistics" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Understanding Session Statistics &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
