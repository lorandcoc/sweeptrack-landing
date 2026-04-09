import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Backup: Never Lose Your Detecting Data",
  description:
    "Back up your metal detecting sessions, detector presets, permissions, and settings to Google Drive so you never lose your data when switching phones.",
};

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Cloud Backup: Never Lose Your Detecting Data</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Months of detecting sessions, carefully logged finds, detector presets tuned to your favourite sites &mdash; losing all of that to a dead phone or a factory reset is painful. Cloud backup copies everything to your Google Drive so it&apos;s always recoverable.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Connecting Your Google Account</h2>
          <p>Go to Settings and tap Cloud Backup. You&apos;ll be prompted to sign in with your Google account. The app requests access only to its own app folder on your Drive &mdash; it cannot see or touch any of your other files. Once connected, your account email appears on the backup screen.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What Gets Backed Up</h2>
          <p>A backup includes everything you&apos;d need to fully restore your detecting setup:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>All sessions</strong> &mdash; GPS tracks, finds, timestamps, statistics</li>
            <li><strong>Detector presets</strong> &mdash; your saved detector models and custom settings</li>
            <li><strong>Permission Vault</strong> &mdash; all permission entries with boundaries and contact details</li>
            <li><strong>App settings</strong> &mdash; theme, units, map preferences, challenge progress</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Creating a Backup</h2>
          <p>You have two options: &ldquo;Create Backup&rdquo; uploads directly to your connected Google Drive. &ldquo;Export to File&rdquo; saves the backup to your phone so you can store it wherever you want. Either way, the backup file contains your full detecting history and takes just a few seconds to create.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Restoring on a New Device</h2>
          <p>Install the app on your new phone, connect the same Google account, and tap Restore. It downloads the latest backup and rebuilds your entire detecting history. All your sessions, finds, presets, and permissions appear exactly as they were.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Auto-Backup</h2>
          <p>Enable auto-backup and the app creates a new backup automatically after each session ends. You don&apos;t have to remember to do it manually. If something happens to your device, the most you&apos;d lose is the session that was actively recording.</p>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> backs up your sessions, presets, permissions, and settings to Google Drive with one tap, so switching phones or recovering from data loss takes seconds.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/exporting-sessions-gpx-kml-csv" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Exporting Sessions as GPX, KML, or CSV &rarr;</Link>
              <Link href="/blog/organize-metal-detector-presets-settings" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Organize Your Detector Presets &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
