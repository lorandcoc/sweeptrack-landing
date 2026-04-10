import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Using Track Overlay to See Where You Already Walked",
  description:
    "Load your past SweepTrack Pro sessions onto the live map as color-coded overlay tracks to spot coverage gaps and avoid re-detecting the same ground.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Using Track Overlay to See Where You Already Walked</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Ever returned to a field and had no idea which parts you already covered? You end up detecting the same strip twice while missing a corner entirely. Track Overlay fixes this by layering your past sessions directly onto the live map.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Loading Past Sessions</h2>
          <p>Open the Map Features sheet and find the Overlay Paths dialog. It shows a list of your recent sessions. Tap any session to add its path to the live map. The track draws as a coloured line showing exactly where you walked.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Color-Coded Tracks</h2>
          <p>Each overlay gets a color assigned in order from a fixed palette of five — blue, orange, purple, yellow, and teal. With each new overlay added, the color cycles through the palette so neighboring tracks always stand out from each other.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Remove Tracks Individually</h2>
          <p>Loaded tracks appear in the overlay dialog with a remove action. Pull them off the map one by one, or clear all overlays at once. Your current session path stays untouched regardless.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Spotting Coverage Gaps</h2>
          <p>This is where it gets genuinely useful. With multiple sessions overlaid, you can see blank spaces between tracks. Those gaps are undetected ground. On your next visit, head straight for the gaps instead of guessing. Over time, you build complete coverage of a site without wasting time on areas you&apos;ve already cleared.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> lets you overlay color-coded past sessions on the live map, so you can spot coverage gaps and systematically work through a site.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Track Your Sessions with GPS &rarr;</Link>
              <Link href="/blog/comparing-sessions-overlay-split" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Comparing Sessions: Overlay and Split View &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
