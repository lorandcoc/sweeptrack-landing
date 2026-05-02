import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "using-track-overlay";
const TITLE = "Using Track Overlay to See Where You Already Walked";
const DESCRIPTION = "Load your past SweepTrack Pro sessions onto the live map as color-coded overlay tracks to spot coverage gaps and avoid re-detecting the same ground.";
const IMAGE = "/screenshots/home.jpg";
const PUBLISHED = "2026-04-11";

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
        readTime="3 min"
        publishedDate={PUBLISHED}
        relatedGuides={[
          { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "Track Your Sessions with GPS" },
          { href: "/blog/comparing-sessions-overlay-split", title: "Comparing Sessions: Overlay and Split View" },
        ]}
      >
          <p>Ever returned to a field and had no idea which parts you already covered? You end up detecting the same strip twice while missing a corner entirely. Track Overlay fixes this by layering your past sessions directly onto the live map.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Loading Past Sessions</h2>
          <p>Open the Map Features sheet and find the Overlay Paths dialog. It shows a list of your recent sessions. Tap any session to add its path to the live map. The track draws as a coloured line showing exactly where you walked.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Color-Coded Tracks</h2>
          <p>Each overlay gets a color assigned in order from a fixed palette of five — blue, orange, purple, yellow, and teal. With each new overlay added, the color cycles through the palette so neighboring tracks always stand out from each other.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Remove Tracks Individually</h2>
          <p>Loaded tracks appear in the overlay dialog with a remove action. Pull them off the map one by one, or clear all overlays at once. Your current session path stays untouched regardless.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Spotting Coverage Gaps</h2>
          <p>This is where it gets genuinely useful. With multiple sessions overlaid, you can see blank spaces between tracks. Those gaps are undetected ground. On your next visit, head straight for the gaps instead of guessing. Over time, you build complete coverage of a site without wasting time on areas you&apos;ve already cleared.</p>
      </BlogPostFrame>
    </>
  );
}
