import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "share-card";
const TITLE = "Share Card: A Printable Summary of Your Session";
const DESCRIPTION = "Generate a shareable PNG session card with your name, date, stats, find breakdown, and score. One tap to share via any app that accepts images.";
const IMAGE = "/screenshots/stats.jpg";
const PUBLISHED = "2026-03-30";

export const metadata = blogMeta({ slug: SLUG, title: TITLE, description: DESCRIPTION, publishedDate: PUBLISHED });

export default function Post() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ slug: SLUG, title: TITLE, description: DESCRIPTION, image: IMAGE, publishedDate: PUBLISHED })) }}
      />
      <BlogPostFrame
        title={TITLE}
        category="tutorials"
        readTime="2 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/exporting-sessions-gpx-kml-csv", title: "Exporting Sessions as GPX, KML, and CSV" },
          { href: "/blog/understanding-session-statistics", title: "Understanding Session Statistics" },
        ]}
      >
          <p>When you want to show a detecting buddy what happened today without screenshotting five different screens, the Share Card is a single 800&times;500 PNG image that sums the whole session up.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What&apos;s on the Card</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>SweepTrack Pro header</strong> — bright accent-green title across the top</li>
            <li><strong>Session name</strong> — whatever you named it, or the auto-generated place label</li>
            <li><strong>Date</strong> — muted line under the name</li>
            <li><strong>Four stats</strong> — Distance, Finds, Duration, and Score in large monospaced figures</li>
            <li><strong>Finds breakdown</strong> — color-coded chips for Treasure (amber), Gold (yellow), and Trash (grey) with counts</li>
            <li><strong>Footer</strong> — <em>by Loriba &middot; sweeptrack.app</em></li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Generate One</h2>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Finish a session (or open an older one from History).</li>
            <li>Tap the <strong>Share</strong> action on the summary.</li>
            <li>The card is rendered as a PNG in a split second.</li>
            <li>Send it via your system share sheet — WhatsApp, Telegram, Discord, email, or anywhere else that accepts images.</li>
          </ol>

          <h2 className="text-xl font-semibold text-accent mt-8">Why 800&times;500</h2>
          <p>The card is sized for chat and forum posts — it looks clean in a Discord message, fits nicely on Reddit, and drops straight into Telegram or WhatsApp without extra cropping. Not every share is an Instagram Story.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Tips</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Name your sessions</strong> — a descriptive name reads much better than &ldquo;Session 47&rdquo;.</li>
            <li><strong>Log your finds by type</strong> — the breakdown chips only show counts if you actually tagged finds as Treasure, Gold, or Trash.</li>
            <li><strong>Double-check privacy</strong> — the card doesn&apos;t show your exact GPS, but the session name might. Edit it first if you&apos;re sharing publicly.</li>
          </ul>
      </BlogPostFrame>
    </>
  );
}
