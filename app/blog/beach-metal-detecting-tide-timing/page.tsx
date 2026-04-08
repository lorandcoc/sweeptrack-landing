import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beach Metal Detecting: Tide Timing & Where to Search",
  description:
    "Learn how to time your beach metal detecting hunts around low tide, where to search on the wet sand, and how tide charts help you find more gold, coins, and jewelry.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Beach</p>
        <h1 className="text-3xl font-bold mb-4">Beach Metal Detecting: Tide Timing & Where to Search</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 5 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Beach detecting is where the gold is — literally. Rings, chains, coins, and watches get lost in the sand every day. But the beach only gives them up at the right time. If you show up at high tide, you&apos;re wasting your time.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Why Low Tide Matters</h2>
          <p>At high tide, the water covers the most productive areas. At low tide, the ocean retreats and exposes wet sand that was underwater hours ago. This wet sand zone is where most lost items settle — pulled off swimmers, waders, and beachgoers by waves and currents.</p>
          <p>The lower the tide, the more ground you can access. Spring tides (around full and new moons) produce the lowest lows — these are your best beach days.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">The Three Beach Zones</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Dry sand</strong> — towel line area. Mostly modern coins and cheap jewelry. Easy digging but lots of trash.</li>
            <li><strong>Wet sand / tidal zone</strong> — the area between high and low tide marks. This is where the good stuff is. Rings, chains, old coins pulled from deeper water.</li>
            <li><strong>In the water</strong> — requires waterproof equipment. Highest concentration of gold but hardest to work.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Read a Tide Chart</h2>
          <p>A tide chart shows you the predicted water level for each hour of the day. You want to arrive 1-2 hours before the lowest predicted tide. This gives you maximum time on the exposed wet sand before the water comes back.</p>
          <p>Check for:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Tide height</strong> — lower is better. Anything below 0.5m is excellent.</li>
            <li><strong>Time of low</strong> — plan to be on the beach 1-2 hours before this time.</li>
            <li><strong>Tidal range</strong> — bigger difference between high and low means more exposed sand.</li>
            <li><strong>Storm tides</strong> — after a storm, sand gets churned up and items that were buried deep get exposed. Best detecting conditions.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Where Exactly to Swing</h2>
          <p>Don&apos;t just walk randomly. Focus on:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Cut lines</strong> — where waves have eroded a step in the sand. Items collect along these edges.</li>
            <li><strong>Troughs</strong> — shallow channels between sandbars. Heavy items (gold, lead weights) settle here.</li>
            <li><strong>Near rocks and jetties</strong> — waves push items against solid structures.</li>
            <li><strong>Beach access points</strong> — where people enter the water. Highest density of recent losses.</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Timing Your Hunts</h2>
          <p>The best beach detecting window is roughly 2 hours before low tide to 1 hour after. After that, the water starts coming back fast. Always keep an eye on the water — getting caught between incoming tide and a cliff or seawall is dangerous.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> has a built-in tide table showing high and low tide times with 3, 7, and 14-day forecasts for U.S. coastal stations. Plan your beach hunts from the app.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/best-weather-conditions-for-metal-detecting" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Best Weather Conditions for Metal Detecting &rarr;</Link>
              <Link href="/blog/how-to-use-old-maps-for-metal-detecting" className="block text-sm text-foreground/80 hover:text-accent transition-colors">How to Use Old Maps for Metal Detecting &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
