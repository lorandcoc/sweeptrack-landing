import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Using the Permission Vault to Manage Landowner Permissions",
  description:
    "Track your metal detecting permissions with expiry alerts, boundary maps, PDF letter generation, and landowner contact details all in one place.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Using the Permission Vault to Manage Landowner Permissions</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 5 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Keeping track of permissions is one of those things that starts easy and gets complicated fast. One or two sites, you can remember. Ten sites across three counties with different landowners, expiry dates, and conditions? You need a system. The Permission Vault is that system.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Adding a Permission Entry</h2>
          <p>Tap the plus button to create a new entry. Fill in the basics:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Site name</strong> &mdash; something you&apos;ll recognise (e.g., &ldquo;Thompson Farm - North Field&rdquo;)</li>
            <li><strong>Landowner name</strong> &mdash; who gave you permission</li>
            <li><strong>Status</strong> &mdash; green (active), yellow (pending renewal), or red (expired/denied)</li>
            <li><strong>Contact details</strong> &mdash; phone or email so you can reach the owner when you need to renew</li>
            <li><strong>Notes</strong> &mdash; any conditions like &ldquo;avoid the crop field east of the barn&rdquo;</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Drawing the Boundary</h2>
          <p>Each permission entry can have a boundary drawn on a full-screen map. Tap the map icon on the entry, and you&apos;ll get a satellite view where you tap to mark the corners of your permitted area. This boundary feeds directly into Perimeter Guard, so when you&apos;re detecting at this site, your phone vibrates if you stray outside.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Expiry Dates and Calendar Alerts</h2>
          <p>If a permission has a fixed duration (e.g., &ldquo;one year from today&rdquo;), set the expiry date. The app shows a countdown on the entry, and the status automatically shifts to yellow as the date approaches. You can also set a calendar alert that fires a reminder days or weeks before expiry, so you have time to ask the landowner for renewal.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Generating a Permission Letter</h2>
          <p>Need a formal letter to ask a new landowner? The PDF letter generator creates a professional detecting permission request that includes your name, the site details, and the proposed dates. It&apos;s a template you can customise, then export as a PDF to print or email. Having a printed letter makes you look serious and increases your chances of getting a yes.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Import and Export</h2>
          <p>If you switch phones or want to share permission data with a detecting partner, you can export your vault as a backup file and import it on another device. Combined with cloud backup, your permissions are never lost.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Linking to Perimeter Guard</h2>
          <p>The real power comes from the connection between the Permission Vault and Perimeter Guard. When you start a session at a saved site, you can load the boundary directly from the vault entry. No redrawing, no guessing where the edges were.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> gives you a complete permission management system with boundary maps, expiry alerts, and a PDF letter generator so you stay organised and never detect without proper permission.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/metal-detecting-permission-letter-template" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Permission Letter Template &rarr;</Link>
              <Link href="/blog/setting-up-perimeter-guard" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Setting Up Perimeter Guard &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
