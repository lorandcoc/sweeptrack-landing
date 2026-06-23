import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "browsing-your-finds-photo-gallery";
const TITLE = "Browsing Every Find Photo in One Gallery";
const DESCRIPTION =
  "The SweepTrack Pro gallery gathers the photos, videos, and audio notes from every find into one date-grouped grid you can filter, zoom, and share.";
const IMAGE = "/screenshots/gallery.jpg";
const PUBLISHED = "2026-06-24";

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
          { href: "/blog/logging-finds-photo-video-audio", title: "Logging Finds with Photos and Audio Notes" },
          { href: "/blog/share-card", title: "Share Card: Show Off Your Session" },
        ]}
      >
          <p>Every find you photograph ends up in one place. The gallery gathers the photos, videos, and audio notes from across all your finds into a single grid, so you can scroll a whole season without opening one find at a time.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Grouped by when you found it</h2>
          <p>Media lays out three across and is grouped by date, starting with Today and Yesterday and then running back by day and month. Because it follows the calendar, the gallery doubles as a timeline of your detecting, and a good day stands out as a full row of finds.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Filter to what you want to see</h2>
          <p>Chips across the top switch between All, Photos, Videos, and Audio, each showing a live count of how many it holds. If you only left voice notes on a handful of finds, one tap pulls them out of everything else.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Open, zoom, and share</h2>
          <p>Tap a photo for a fullscreen viewer that pinch-zooms from one up to five times, with a double-tap to jump in and a swipe between shots. Videos open in your player and audio notes play right there. Turn on multi-select and you can share several items at once or save a batch into a folder you choose.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">One tile per find</h2>
          <p>The gallery shows each find&apos;s main photo, so a find with several pictures appears here as a single tile. To see all the photos on a particular find, open it from your finds list, where the full set lives.</p>
      </BlogPostFrame>
    </>
  );
}
