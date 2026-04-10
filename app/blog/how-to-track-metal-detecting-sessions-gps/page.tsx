import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Track Your Metal Detecting Sessions with GPS",
  description:
    "Learn how GPS tracking helps you cover more ground, avoid re-detecting the same areas, overlay past sessions, and build a complete history of your detecting hunts.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Guide</p>
        <h1 className="text-3xl font-bold mb-4">How to Track Your Metal Detecting Sessions with GPS</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 4 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Ever come back to a field and think &ldquo;did I already walk this row?&rdquo; GPS tracking solves that. It records your exact path in real time, so you know precisely what ground you&apos;ve covered — and more importantly, what you missed.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What GPS Tracking Does for Detecting</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Shows your walked path on a satellite map as you detect</li>
            <li>Records distance, time, speed, and altitude for every session</li>
            <li>Lets you overlay past tracks on the same map so you can see gaps</li>
            <li>Marks find locations with GPS coordinates so you can return to productive spots</li>
            <li>Exports your path as GPX for Google Earth or KML for other mapping software</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Why Track Overlay Changes Everything</h2>
          <p>A single session track is useful. But the real power comes from overlaying multiple sessions on the same site. When you see 5 or 6 colored paths on a satellite view, the gaps between them are immediately obvious — those are the patches you haven&apos;t walked yet.</p>
          <p>This is especially valuable on large permission sites where you visit multiple times over weeks or months. Without track overlay, you&apos;re guessing. With it, you&apos;re systematic.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Tips for Better GPS Sessions</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Walk in straight-ish lines</strong> — zigzag patterns make it hard to see gaps on playback</li>
            <li><strong>Use satellite view</strong> — it&apos;s easier to orient yourself with real terrain features</li>
            <li><strong>Mark your finds</strong> — pin drops with GPS coordinates let you see hotspot clusters over time</li>
            <li><strong>Check the heatmap</strong> — a density overlay shows where you&apos;ve spent the most time</li>
            <li><strong>Export and archive</strong> — save your best session GPX files for future reference</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">What About Battery Life?</h2>
          <p>GPS tracking does use battery — expect around 10-15% per hour on most modern phones, similar to navigation apps. For long sessions, bring a power bank. Some phones have battery saver GPS modes that reduce accuracy slightly but extend runtime.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> tracks your GPS path on 4 map types, overlays past sessions on the same map, and shows find pins. Works offline with downloaded tiles.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/how-to-use-old-maps-for-metal-detecting" className="block text-sm text-foreground/80 hover:text-accent transition-colors">How to Use Old Maps for Metal Detecting &rarr;</Link>
              <Link href="/blog/organize-metal-detector-presets-settings" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Organize Your Detector Settings and Presets &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
