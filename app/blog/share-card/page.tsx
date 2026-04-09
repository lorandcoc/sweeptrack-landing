import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Share Card: Show Off Your Session on Social Media",
  description:
    "Learn how to generate a shareable 1080x1920 session summary image in SweepTrack Pro, complete with map, stats, find breakdown, and weather data for Instagram and other platforms.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Share Card: Show Off Your Session on Social Media</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>You just wrapped a killer session &mdash; good finds, solid coverage, great weather. Now you want to share it. Instead of screenshotting your stats and cropping awkwardly, the Share Card generates a polished, purpose-built image that looks like it belongs on Instagram.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What&apos;s on the Card</h2>
          <p>The Share Card is a 1080 x 1920 pixel image (Instagram story format) that packs your entire session summary into one graphic:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Session name and date</strong> &mdash; the title and when you detected</li>
            <li><strong>Location</strong> &mdash; general area (not your exact GPS coordinates)</li>
            <li><strong>Minimap</strong> &mdash; a satellite view of your walked path with find markers plotted on it</li>
            <li><strong>Hero stats</strong> &mdash; distance walked, total finds, and session duration in large, readable numbers</li>
            <li><strong>Find breakdown chart</strong> &mdash; visual breakdown of your finds by type</li>
            <li><strong>Weather conditions</strong> &mdash; what the weather was like during your hunt</li>
            <li><strong>Detector preset</strong> &mdash; which settings you were running</li>
            <li><strong>SweepTrack branding</strong> &mdash; subtle app branding at the bottom</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Generate One</h2>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Finish a session and view its summary (or open any past session from History)</li>
            <li>Tap the <strong>Share</strong> button on the session summary screen</li>
            <li>The card generates in a few seconds</li>
            <li>Share it directly to Instagram, Facebook, WhatsApp, Discord &mdash; or any app that accepts images</li>
          </ol>

          <h2 className="text-xl font-semibold text-accent mt-8">Designed for Social Media</h2>
          <p>The 1080 x 1920 format is specifically sized for Instagram Stories, but it works well as a standard post on most platforms too. The layout prioritizes readability &mdash; stats are large enough to read on a phone screen, and the minimap gives context without revealing your exact honey hole.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Tips for Great Share Cards</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Name your sessions</strong> &mdash; &ldquo;Farmer Jones Pasture #3&rdquo; looks better than &ldquo;Session 47&rdquo;</li>
            <li><strong>Log your finds</strong> &mdash; the breakdown chart is only useful if you actually logged what you dug</li>
            <li><strong>Have a preset active</strong> &mdash; the card shows which detector settings you used, which other detectorists appreciate seeing</li>
            <li><strong>Share after every good session</strong> &mdash; it takes 10 seconds and builds your detecting journal on social media</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Privacy Consideration</h2>
          <p>The minimap shows your path shape but uses a zoomed-out satellite view. It gives a sense of the terrain without pinpointing the exact field. If you&apos;re still concerned about revealing a site, you can always crop the card before sharing.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> generates Instagram-ready session summary cards with your path, stats, finds, and weather &mdash; one tap from any session summary.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/exporting-sessions-gpx-kml-csv" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Exporting Sessions as GPX, KML, and CSV &rarr;</Link>
              <Link href="/blog/understanding-session-statistics" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Understanding Session Statistics &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
