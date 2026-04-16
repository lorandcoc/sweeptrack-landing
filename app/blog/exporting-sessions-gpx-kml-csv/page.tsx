import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "exporting-sessions-gpx-kml-csv";
const TITLE = "Exporting Sessions as GPX, KML, or CSV";
const DESCRIPTION = "Export your metal detecting sessions in GPX, KML, CSV, or SweepTrack JSON format for use in Google Earth, Garmin devices, or Excel spreadsheets.";
const IMAGE = "/screenshots/cloud_backup.png";

export const metadata = blogMeta({ slug: SLUG, title: TITLE, description: DESCRIPTION });

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ slug: SLUG, title: TITLE, description: DESCRIPTION, image: IMAGE })) }}
      />
      <BlogPostFrame
        title={TITLE}
        category="tutorials"
        readTime="3 min"
        relatedGuides={[
          { href: "/blog/cloud-backup-google-drive", title: "Cloud Backup: Never Lose Your Detecting Data" },
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "Track Your Sessions with GPS" },
        ]}
      >
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
      </BlogPostFrame>
    </>
  );
}
