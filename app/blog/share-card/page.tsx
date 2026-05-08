import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "share-card";
const TITLE = "Share Card: A Vertical Summary of Your Session";
const DESCRIPTION = "Generate a 1080×1920 PNG share card with your session name, path preview, stats, and find breakdown. One tap to share via any app that accepts images.";
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
          <p>When you want to show a detecting buddy what happened today without screenshotting five different screens, the Share Card is a single 1080×1920 PNG image that sums the whole session up &mdash; sized perfectly for an Instagram Story, a WhatsApp status, or any vertical chat thumbnail.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">What&apos;s on the Card</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Header</strong> &mdash; SweepTrack Pro logo with the &ldquo;by Loriba&rdquo; subtitle</li>
            <li><strong>Session name and date</strong> &mdash; whatever you named it, or the auto-generated place label</li>
            <li><strong>Path preview</strong> &mdash; a large rendered map of your track for the session</li>
            <li><strong>Stats</strong> &mdash; Distance, Finds, Duration, and Average Speed</li>
            <li><strong>Find breakdown</strong> &mdash; color-coded chips per find type (Treasure, Gold, Coin, Relic, Jewelry, Trash) with counts</li>
            <li><strong>Weather snapshot</strong> &mdash; if a session weather sample was captured, you&apos;ll see temperature, wind, and humidity at the time</li>
            <li><strong>Footer</strong> &mdash; <em>sweeptrack.pro</em> with a deep-link to the session</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">How to Generate One</h2>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Finish a session (or open an older one from History).</li>
            <li>Tap the <strong>Share</strong> action on the summary screen.</li>
            <li>The card is rendered as a PNG in a split second.</li>
            <li>Send it via your system share sheet &mdash; WhatsApp, Telegram, Discord, email, Instagram, or anywhere else that accepts images.</li>
          </ol>

          <h2 className="text-xl font-semibold text-accent mt-8">Why 1080×1920</h2>
          <p>That&apos;s the standard portrait/Story aspect ratio, so the card slots cleanly into Instagram and Facebook Stories, WhatsApp Status, TikTok still posts, and any vertical phone-first context. It still works in a horizontal chat thread &mdash; just shows up as a tall thumbnail.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Tips</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Name your sessions</strong> &mdash; a descriptive name reads much better than auto-generated coordinates.</li>
            <li><strong>Log your finds by type</strong> &mdash; the breakdown chips only show counts if you actually tagged finds.</li>
            <li><strong>Double-check privacy</strong> &mdash; the path preview shows where you walked. If you&apos;re sharing publicly, make sure you&apos;re comfortable with the route being visible.</li>
          </ul>
      </BlogPostFrame>
    </>
  );
}
