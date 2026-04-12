import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metal Detecting for Beginners: What You Need to Know",
  description:
    "New to metal detecting? Learn how to pick your first detector, where to search, what signals mean, how to dig properly, and beginner mistakes to avoid.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Beginners</p>
        <h1 className="text-3xl font-bold mb-4">Metal Detecting for Beginners: What You Need to Know</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 7 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Metal detecting is one of those hobbies that looks simple until you try it. You wave a machine over the ground, it beeps, you dig. Except the first 50 beeps are pull tabs, bottle caps, and foil. This guide helps you skip the frustrating part.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Picking Your First Detector</h2>
          <p>You don&apos;t need a $2,000 machine to start. Some of the best beginner detectors cost $200-$400 and are genuinely capable machines. Look for:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Multi-frequency or high frequency</strong> — better for coins and jewelry</li>
            <li><strong>Built-in pinpointer mode</strong> — saves buying a separate tool</li>
            <li><strong>Discrimination</strong> — lets you ignore iron and trash signals</li>
            <li><strong>Waterproof coil</strong> — so you can detect in wet grass and shallow water</li>
          </ul>
          <p>Popular starter machines: Nokta Simplex+, Minelab Vanquish 440, Garrett Ace 400, XP ORX. All of these have preset templates in SweepTrack Pro.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Where to Detect</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Your own yard</strong> — start here. You can dig freely and learn your machine</li>
            <li><strong>Public parks</strong> (check local rules) — high traffic = lots of dropped coins</li>
            <li><strong>Beaches</strong> — coins, jewelry, and fewer permission hassles</li>
            <li><strong>Private farmland</strong> (with permission) — the holy grail for old coins and relics</li>
            <li><strong>Old footpaths and gathering spots</strong> — anywhere people congregated historically</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Understanding Signals</h2>
          <p>Every detector gives you two pieces of information: a tone and a number (VDI/target ID). Low numbers and grunty tones are usually iron. High numbers and clear tones are non-ferrous metals — coins, jewelry, copper, brass.</p>
          <p>As a beginner, dig everything above iron. You&apos;ll dig trash, but you&apos;ll also learn what different targets sound like. That experience is worth more than any setting adjustment.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Dig Properly</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Cut a horseshoe-shaped plug — leave one side attached so the turf flips back</li>
            <li>Put a cloth or towel down to catch loose soil</li>
            <li>Use a pinpointer to find the target in the hole or plug</li>
            <li>Replace the plug, press it down, and leave no trace</li>
          </ul>
          <p>Leaving clean holes is how you keep permissions. One messy digger ruins it for everyone.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Common Beginner Mistakes</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Swinging too fast — slow down, overlap your sweeps</li>
            <li>Skipping iron signals — some of the best finds sound like iron at first</li>
            <li>Not ground balancing — if your machine has manual GB, learn to use it</li>
            <li>Detecting without permission — always ask, always carry proof</li>
            <li>Giving up too soon — your first good find might be 20 hours in</li>
          </ul>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> has presets for popular beginner detectors, GPS tracking to show your coverage, and a detecting forecast so you know when conditions are good.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/best-weather-conditions-for-metal-detecting" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Best Weather for Metal Detecting &rarr;</Link>
              <Link href="/blog/metal-detecting-permission-letter-template" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Permission Letter Template &rarr;</Link>
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Track Your Sessions with GPS &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
