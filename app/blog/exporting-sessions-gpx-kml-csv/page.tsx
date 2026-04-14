import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import Link from "next/link";

export const metadata = blogMeta({
  slug: "exporting-sessions-gpx-kml-csv",
  title: "Exporting Sessions as GPX, KML, or CSV",
  description:
    "Export your metal detecting sessions in GPX, KML, CSV, or SweepTrack JSON format for use in Google Earth, Garmin devices, or Excel spreadsheets.",
});

export default function Post() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({
          slug: "exporting-sessions-gpx-kml-csv",
          title: "Exporting Sessions as GPX, KML, or CSV",
          description: "Export your metal detecting sessions in GPX, KML, CSV, or SweepTrack JSON format for use in Google Earth, Garmin devices, or Excel spreadsheets.",
        })) }}
      />
      <article className="max-w-2xl w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm">&larr; Back to guides</Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">Tutorial</p>
        <h1 className="text-3xl font-bold mb-4">Exporting Sessions as GPX, KML, or CSV</h1>
        <p className="text-muted text-sm mb-10">April 2026 &middot; 3 min read</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Your detecting data isn&apos;t locked inside the app. You can export any session in four different formats depending on what you want to do with it &mdash; view tracks in Google Earth, import them into a Garmin, analyse finds in a spreadsheet, or share with a detecting partner.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">The Four Formats</h2>

          <p><strong>SweepTrack JSON</strong> &mdash; the full-fidelity format. Includes everything: GPS track, finds with all metadata, timestamps, session stats, detector settings. Use this for backups or transferring data between devices running the app.</p>

          <p><strong>GPX (GPS Exchange Format)</strong> &mdash; the universal GPS format. Your track appears as a sequence of waypoints with timestamps. Find locations are saved as named waypoints. Works with Google Earth, Garmin BaseCamp, GPS Visualizer, and almost every mapping tool. This is the format to use if you want to view your track on a computer.</p>

          <p><strong>KML (Keyhole Markup Language)</strong> &mdash; Google Earth&apos;s native format. Similar to GPX but with styling information. Your track renders as a coloured line and finds appear as labelled pins. Open the file directly in Google Earth for a 3D flyover of your session.</p>

          <p><strong>CSV (Comma-Separated Values)</strong> &mdash; a flat spreadsheet of your track points and finds. Each row is a data point with latitude, longitude, timestamp, and any find data. Open in Excel, Google Sheets, or any spreadsheet tool. Good for analysing patterns, calculating statistics, or creating custom charts.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Export</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Open any saved session from the History tab</li>
            <li>Tap the session summary to see its details</li>
            <li>Tap the export button</li>
            <li>Pick your format</li>
            <li>Choose where to save or share the file</li>
          </ul>
          <p>The file is generated instantly and you can share it via email, messaging apps, cloud drives, or AirDrop.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Which Format Should You Use?</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Backing up data or moving between phones &rarr; SweepTrack JSON</li>
            <li>Viewing in Google Earth or mapping software &rarr; GPX or KML</li>
            <li>Analysing in a spreadsheet &rarr; CSV</li>
            <li>Sharing with a detecting partner who also uses the app &rarr; SweepTrack JSON</li>
          </ul>

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> exports your sessions in GPX, KML, CSV, and its own JSON format, so your detecting data works with Google Earth, Garmin devices, Excel, and more.
              {" "}<Link href="/#features" className="text-accent hover:underline">See all features &rarr;</Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">Related Guides</p>
            <div className="space-y-3">
              <Link href="/blog/cloud-backup-google-drive" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Cloud Backup: Never Lose Your Detecting Data &rarr;</Link>
              <Link href="/blog/how-to-track-metal-detecting-sessions-gps" className="block text-sm text-foreground/80 hover:text-accent transition-colors">Track Your Sessions with GPS &rarr;</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
