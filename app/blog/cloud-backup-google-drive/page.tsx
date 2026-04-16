import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "cloud-backup-google-drive";
const TITLE = "Cloud Backup: Never Lose Your Detecting Data";
const DESCRIPTION = "Back up your metal detecting sessions, detector presets, permissions, and settings to Google Drive so you never lose your data when switching phones.";
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
          { href: "/blog/exporting-sessions-gpx-kml-csv", title: "Exporting Sessions as GPX, KML, or CSV" },
          { href: "/blog/organize-metal-detector-presets-settings", title: "Organize Your Detector Presets" },
        ]}
      >
          <p>Months of detecting sessions, carefully logged finds, detector presets tuned to your favourite sites &mdash; losing all of that to a dead phone or a factory reset is painful. Cloud backup copies everything to your Google Drive so it&apos;s always recoverable.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Connecting Your Google Account</h2>
          <p>Go to Settings and tap Cloud Backup. You&apos;ll be prompted to sign in with your Google account. The app requests access only to its own app folder on your Drive &mdash; it cannot see or touch any of your other files. Once connected, your account email appears on the backup screen.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What Gets Backed Up</h2>
          <p>A backup includes everything you&apos;d need to fully restore your detecting setup:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>All sessions</strong> &mdash; GPS tracks, finds, timestamps, statistics</li>
            <li><strong>Detector presets</strong> &mdash; your saved detector models and custom settings</li>
            <li><strong>Permission Vault</strong> &mdash; all permission entries with boundaries and contact details</li>
            <li><strong>App settings</strong> &mdash; theme, units, language, and map preferences</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Creating a Backup</h2>
          <p>You have two options: &ldquo;Create Backup&rdquo; uploads directly to your connected Google Drive. &ldquo;Export to File&rdquo; saves the backup to your phone so you can store it wherever you want. Either way, the backup file contains your full detecting history and takes just a few seconds to create.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Restoring on a New Device</h2>
          <p>Install the app on your new phone, connect the same Google account, and tap Restore. It downloads the latest backup and rebuilds your entire detecting history. All your sessions, finds, presets, and permissions appear exactly as they were.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Auto-Backup</h2>
          <p>Enable auto-backup and the app creates a new backup automatically after each session ends. You don&apos;t have to remember to do it manually. If something happens to your device, the most you&apos;d lose is the session that was actively recording.</p>
      </BlogPostFrame>
    </>
  );
}
