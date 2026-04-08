import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Setting Up Perimeter Guard: Stay Within Your Permitted Zone",
  description:
    "Learn how to draw boundary zones on the map and get vibration alerts when you approach the edge of your permitted metal detecting area.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Setting Up Perimeter Guard: Stay Within Your Permitted Zone</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>When a landowner gives you permission to detect on a specific field, you need to stay in that field. Walk too far and you&apos;re on someone else&apos;s land without permission. Perimeter Guard solves this by drawing a virtual fence on the map and buzzing your phone as you approach the edge.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Drawing a Boundary</h2>
          <p>Open the map and tap the Perimeter Guard icon. The map switches to boundary drawing mode:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Tap on the map to place corner points around your permitted area</li>
            <li>Each tap adds a point and connects it to the previous one</li>
            <li>Use the undo button if you misplace a point</li>
            <li>When you&apos;re done, tap the checkmark &mdash; the shape closes automatically</li>
          </ul>
          <p>Zoom in on satellite view first so you can follow field boundaries, hedgerows, and fences accurately.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">How the Alerts Work</h2>
          <p>Once you activate Perimeter Guard, it watches your GPS position and gives you four levels of warning as you approach the boundary:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Green zone</strong> &mdash; you&apos;re well inside the boundary, no alerts</li>
            <li><strong>Yellow zone</strong> &mdash; you&apos;re getting close, a gentle vibration nudges you</li>
            <li><strong>Orange zone</strong> &mdash; you&apos;re very close to the edge, stronger vibration</li>
            <li><strong>Red zone</strong> &mdash; you&apos;ve crossed the boundary, continuous vibration</li>
          </ul>
          <p>You don&apos;t need to stare at the screen. The vibration pattern tells you everything. Just swing your detector and let your phone do the watching.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Linking to the Permission Vault</h2>
          <p>If you&apos;ve already saved a permission entry in the Permission Vault for this site, you can link the boundary to it. This means the boundary is stored alongside your permission details &mdash; next time you visit the same site, load the permission and the boundary comes with it.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Clearing or Editing Boundaries</h2>
          <p>Tap the Perimeter Guard icon again while a boundary is active to see your options. You can clear the current boundary and draw a new one, or deactivate monitoring temporarily without deleting the shape. If your permission area changes, just redraw it.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> keeps you inside your permitted zone with real-time vibration alerts at four distance levels, so you never accidentally wander onto land you don&apos;t have permission for.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/using-the-permission-vault" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Using the Permission Vault &rarr;</Link>
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Track Your Sessions with GPS &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
