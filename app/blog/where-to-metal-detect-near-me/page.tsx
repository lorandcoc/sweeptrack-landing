import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where to Metal Detect Near Me: Finding Good Spots Anywhere",
  description:
    "A practical guide to finding productive metal detecting locations in any area — using old maps, local research, and common sense to identify high-potential spots.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Location</p>
        <h1 className="text-3xl font-bold mb-4">Where to Metal Detect Near Me</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 5 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Every detectorist asks this question eventually. You&apos;ve got the machine, you know how to use it, but where do you actually go? The answer is closer than you think. Every town in every country has spots where people gathered, played, traded, and lost things. You just need to find them.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Think Like a Person, Not a Detectorist</h2>
          <p>The best detecting spots are places where people spent time. Not walked through &mdash; spent time. Sitting, eating, playing, swimming, trading. When people relax, things fall out of pockets. When people play, jewelry comes off. When people gather in large numbers over long periods, the accumulation of lost items is substantial.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">High-Potential Spot Types</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>School playgrounds</strong> (after hours, with permission) &mdash; decades of children dropping coins and toys</li>
            <li><strong>Church picnic grounds</strong> &mdash; congregations gathered here for generations</li>
            <li><strong>Fairgrounds and carnival sites</strong> &mdash; old and current, massive foot traffic</li>
            <li><strong>Beaches</strong> &mdash; consistently productive almost everywhere</li>
            <li><strong>River access points</strong> &mdash; swimming holes, fishing spots, old fords</li>
            <li><strong>Abandoned homesteads</strong> &mdash; look for old foundations, wells, and tree lines that mark property boundaries</li>
            <li><strong>Construction sites</strong> (with permission) &mdash; freshly turned soil brings deep targets to the surface</li>
            <li><strong>Parks</strong> (check rules) &mdash; especially older parks with mature trees and worn footpaths</li>
            <li><strong>Old sports fields</strong> &mdash; bleacher areas and spectator zones are coin magnets</li>
            <li><strong>Campgrounds</strong> &mdash; people camping lose all kinds of things</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Research Spots</h2>
          <p>Good detecting is 50% research and 50% swinging the coil. Here&apos;s how to find spots systematically:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Old maps</strong> &mdash; USGS historical topographic maps show buildings, schools, churches, and roads that no longer exist. Compare old maps to current satellite imagery to find vanished structures.</li>
            <li><strong>Google Earth historical imagery</strong> &mdash; use the time slider to see how an area has changed over the decades</li>
            <li><strong>County records</strong> &mdash; deed records, old plat maps, and county histories often mention gathering spots, mills, post offices, and taverns</li>
            <li><strong>Talk to locals</strong> &mdash; older residents often know where things used to be. Ask about old swimming holes, picnic spots, and gathering places</li>
            <li><strong>Detecting forums and clubs</strong> &mdash; local detecting clubs are invaluable for area knowledge and getting started</li>
            <li><strong>Aerial photography</strong> &mdash; crop marks and soil discoloration visible from above can reveal old foundations and paths</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Permission Is Everything</h2>
          <p>The best spot in the world is worthless if you don&apos;t have permission. For private land, approach the owner respectfully, explain the hobby, offer to show them anything you find, and get written permission. For public land, check the rules with the relevant parks department or land manager. Carry proof of permission whenever you detect.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Start Close to Home</h2>
          <p>Your own yard is the single best place to learn your machine. After that, expand outward. The oldest parts of your town, the parks that have been there for 100 years, the beach your family has been going to for decades &mdash; these are all detecting spots. You don&apos;t need to travel to find good ground.</p>

          <p className="text-xs text-muted mt-8 p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <strong>Disclaimer:</strong> Laws and regulations change. This article is for general information only and does not constitute legal advice. Always verify current rules with local authorities before detecting at any location.
          </p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> includes USGS historical map overlays to compare old and new terrain, a nearby historic sites feature to discover points of interest around you, and a detecting forecast to pick the best conditions for your next outing.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/how-to-use-old-maps-for-metal-detecting" className="block text-sm text-foreground/80 hover:text-accent transition-colors">How to Use Old Maps for Metal Detecting &rarr;</Link>
              <Link href="/blog/finding-historic-sites-nearby" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Finding Historic Sites Nearby &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
