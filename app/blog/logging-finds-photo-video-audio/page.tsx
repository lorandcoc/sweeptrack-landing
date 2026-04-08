import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Logging Finds with Photo, Video, and Audio Notes",
  description:
    "Log your metal detecting finds with GPS location, photos, video, audio notes, depth, value, and categorised find types for a complete detecting journal.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Logging Finds with Photo, Video, and Audio Notes</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 4 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>A find without a record is just a thing in a bag. Six months later you won&apos;t remember what field it came from, how deep it was, or what signal it gave. Logging your finds as you go builds a complete detecting journal that makes your hobby more rewarding and your data more useful.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Find Types</h2>
          <p>When you log a find, you start by picking a category:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Treasure</strong> &mdash; the catch-all for valuable or interesting items</li>
            <li><strong>Gold</strong> &mdash; gold rings, gold coins, anything precious</li>
            <li><strong>Coin</strong> &mdash; modern or historic coins</li>
            <li><strong>Relic</strong> &mdash; buttons, buckles, musket balls, historical artefacts</li>
            <li><strong>Jewelry</strong> &mdash; rings, necklaces, bracelets that aren&apos;t gold</li>
            <li><strong>Trash</strong> &mdash; pull tabs, foil, bottle caps (worth logging to track site condition)</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Quick Pin Drop</h2>
          <p>For a fast log, just tap the find button while tracking. It drops a pin at your current GPS location with a timestamp. You can fill in the details later, but the location is captured immediately. This is perfect mid-hunt when you don&apos;t want to stop swinging.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Full Logging</h2>
          <p>When you have a moment, open the find and add the details:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Name</strong> &mdash; what you think it is (e.g., &ldquo;George III halfpenny&rdquo;)</li>
            <li><strong>Depth</strong> &mdash; how deep you dug in cm or inches</li>
            <li><strong>Estimated value</strong> &mdash; your best guess or a known value</li>
            <li><strong>Weight</strong> &mdash; in grams, useful for jewellery and gold</li>
            <li><strong>Notes</strong> &mdash; free text for context like detector settings, signal strength, soil type</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Attaching Photos, Video, and Audio</h2>
          <p>Each find can have media attached to it:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Photos</strong> &mdash; snap the find in the ground, after cleaning, or both. Multiple photos per find.</li>
            <li><strong>Video</strong> &mdash; record a short clip showing the dig or the find in context. Great for social media later.</li>
            <li><strong>Audio notes</strong> &mdash; tap record and describe the find verbally. Faster than typing with muddy gloves.</li>
          </ul>
          <p>You can also attach media from your gallery if you took the photo with your regular camera app.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Why Bother Logging Trash?</h2>
          <p>It might seem pointless, but logging trash finds tells you about a site. If one corner of a field has 30 pull tabs and zero coins, that area was probably a picnic spot with modern litter. The opposite corner with fewer signals might be untouched historical ground. Trash data shapes your strategy.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> logs every find with GPS coordinates, photos, video, audio notes, and detailed metadata so your detecting journal is complete and searchable.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/metal-detecting-for-beginners" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Metal Detecting for Beginners &rarr;</Link>
              <Link href="/blog/understanding-session-statistics" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Understanding Your Session Statistics &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
