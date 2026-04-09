import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Signal Diary: Log What Your Detector Is Telling You",
  description:
    "Learn how to record VDI/Target ID numbers and signal strength with each find in SweepTrack Pro, building a personal reference library for reading your detector better.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Signal Diary: Log What Your Detector Is Telling You</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Your detector is constantly giving you numbers &mdash; VDI readings, target IDs, signal strength bars. But unless you write them down, that information disappears the moment you dig. The Signal Diary captures those numbers alongside your finds so you can learn what they actually mean in your ground.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What You Can Record</h2>
          <p>When logging a find, two optional fields appear:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>VDI / Target ID</strong> &mdash; the number your detector displays, from 0 to 9999. This varies by machine and manufacturer, but it&apos;s the primary clue your detector gives you about what&apos;s underground</li>
            <li><strong>Signal Strength</strong> &mdash; how strong the response was, from 0 to 99. Deeper or smaller targets generally read lower</li>
          </ul>
          <p>Both fields are optional. Skip them when you&apos;re in a hurry or the signal was unclear. Fill them in when you want to build your reference library.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Building Your Personal Reference</h2>
          <p>After a few months of consistent logging, you&apos;ll have a database that&apos;s unique to your detector, your coil, and your local ground conditions. Patterns start to appear:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>&ldquo;VDI 82 at strength 70 on my Equinox is almost always a silver coin&rdquo;</li>
            <li>&ldquo;Anything below VDI 15 at my farm permission is iron &mdash; not worth digging&rdquo;</li>
            <li>&ldquo;Gold rings on this beach hit between 12 and 18, strength 40-60&rdquo;</li>
          </ul>
          <p>No book or YouTube video can give you this data. It&apos;s specific to your setup and your soil.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Tips for Better Signal Logging</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Log before you dig</strong> &mdash; record the VDI number and strength while the target is still in the ground for the most accurate reading</li>
            <li><strong>Be consistent</strong> &mdash; even logging 50% of your finds is better than none</li>
            <li><strong>Include trash finds</strong> &mdash; knowing that pull tabs read VDI 44 on your machine is just as valuable as knowing what coins read</li>
            <li><strong>Note when the signal was &ldquo;iffy&rdquo;</strong> &mdash; low-strength signals on good VDI numbers often mean deep keepers</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Why It Matters</h2>
          <p>The detectorists who dig the fewest holes and find the most keepers aren&apos;t lucky &mdash; they&apos;ve learned to read their machines. The Signal Diary accelerates that learning by turning scattered memories into searchable data.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> lets you record VDI/Target ID and signal strength with every find, building a personal signal reference library over time.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/logging-finds-photo-video-audio" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Logging Finds with Photo, Video, and Audio &rarr;</Link>
              <Link href="/blog/find-to-preset-intelligence" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Find-to-Preset Intelligence: Know Which Settings Work &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
