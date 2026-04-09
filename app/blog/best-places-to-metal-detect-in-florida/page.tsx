import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Places to Metal Detect in Florida",
  description:
    "Florida's beaches, old homesteads, and Spanish shipwreck history make it a top state for metal detecting. Here's where to look and what the law allows.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Location</p>
        <h1 className="text-3xl font-bold mb-4">Best Places to Metal Detect in Florida</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 5 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Florida might be the single best state in the US for metal detecting. Centuries of shipwrecks, 1,350 miles of coastline, year-round detecting weather, and millions of tourists dropping things on beaches every year. If you&apos;re a Florida detectorist, you&apos;re sitting on a goldmine &mdash; sometimes literally.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Beaches</h2>
          <p>Florida beaches are the bread and butter of the hobby here. The Atlantic coast, particularly the stretch known as the Treasure Coast, has a history of Spanish shipwrecks dating to the 1700s. After storms, old coins and artifacts occasionally wash ashore. Gulf Coast beaches are excellent for modern jewelry and coins, especially near resort areas.</p>
          <p>Timing matters enormously. Detect at low tide, after storms, and early in the morning before the crowds arrive. The wet sand zone between high and low tide lines concentrates heavier targets like gold rings.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Freshwater Swimming Holes</h2>
          <p>Florida&apos;s springs and freshwater swimming areas are often overlooked. People have been swimming, picnicking, and losing things in these spots for over a century. Natural springs with sandy bottoms can produce old coins, jewelry, and artifacts from the early settlement era.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Old Homestead Sites</h2>
          <p>Florida was sparsely settled outside the coast until the early 1900s. Abandoned homesteads in rural areas &mdash; particularly in northern and central Florida &mdash; can produce Civil War era relics, old coins, and domestic artifacts. Research county records and old plat maps to locate former settlement sites on private land.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">State Forests</h2>
          <p>Some Florida state forests allow metal detecting with restrictions. Check the specific forest&apos;s management plan before you go. National forests in Florida generally allow casual hobby detecting in non-sensitive areas, but always verify with the district ranger office.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What the Law Says</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Public beaches are generally open to detecting in Florida</li>
            <li>State parks are off-limits &mdash; detecting is prohibited</li>
            <li>State forests vary &mdash; check individual forest rules</li>
            <li>Sovereign submerged lands (rivers, lakes, ocean bottom) require permits for artifact recovery</li>
            <li>The Archaeological Resources Protection Act (ARPA) applies on federal land</li>
            <li>Private land requires landowner permission</li>
          </ul>

          <p className="text-xs text-muted mt-8 p-4 rounded-lg bg-white/[0.02] border border-white/5">
            <strong>Disclaimer:</strong> Laws and regulations change. This article is for general information only and does not constitute legal advice. Always verify current rules with local authorities before detecting at any location.
          </p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> has a built-in tide table so you can time your beach hunts to low tide, plus GPS tracking to mark productive stretches of shoreline for return visits.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/beach-metal-detecting-tide-timing" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Beach Metal Detecting &amp; Tide Timing &rarr;</Link>
              <Link href="/blog/where-to-metal-detect-near-me" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Where to Metal Detect Near Me &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
