import { blogMeta, articleJsonLd } from "@/lib/blog-meta";
import BlogPostFrame from "@/components/BlogPostFrame";

const SLUG = "finding-historic-sites-nearby";
const TITLE = "Finding Historic Sites and Landmarks Near Your Location";
const DESCRIPTION = "Discover metal detecting spots by browsing nearby historic sites, landmarks, and Wikipedia-listed locations on an interactive map with distance display.";
const IMAGE = "/screenshots/nearby.png";

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
          { href: "/blog/how-to-use-old-maps-for-metal-detecting", title: "How to Use Old Maps for Metal Detecting" },
          { href: "/blog/metal-detecting-permission-letter-template", title: "Permission Letter Template" },
        ]}
      >
          <p>Good detecting starts with good research. The most productive sites are usually places where people gathered historically &mdash; old market squares, coaching inns, battlefields, fairgrounds. The Nearby tool helps you discover these places without hours of map research.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Where the Data Comes From</h2>
          <p>Nearby pulls from two sources:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>OpenStreetMap</strong> &mdash; tagged historic features like ruins, archaeological sites, monuments, and listed buildings</li>
            <li><strong>Wikipedia</strong> &mdash; geotagged articles about places with historical significance</li>
          </ul>
          <p>Together, these cover everything from Roman forts to Victorian railway stations to medieval village sites.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Filtering Results</h2>
          <p>The default view shows everything, but you can filter to narrow it down:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>All</strong> &mdash; shows every nearby point of interest</li>
            <li><strong>Historic</strong> &mdash; only OSM-tagged historic features (ruins, memorials, archaeological sites)</li>
            <li><strong>Wikipedia</strong> &mdash; only Wikipedia geotagged articles</li>
          </ul>

          <h2 className="text-xl font-semibold text-accent mt-8">Map View and Distance</h2>
          <p>Results appear as pins on a map centered on your current location. Each pin shows the site name and how far away it is. Tap a pin to see more details. The map view makes it easy to see clusters of historic sites &mdash; if three sites are within walking distance of each other, that area might be worth an entire day&apos;s detecting.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Opening External Links</h2>
          <p>Each result has a link to its full Wikipedia article or OpenStreetMap entry. Tap the link to read about the site&apos;s history in your browser. This is where you&apos;ll learn what happened there, when it was active, and whether it&apos;s the kind of place that would have seen coin loss or artefact deposition.</p>

          <h2 className="text-xl font-semibold text-accent mt-8">Searching a Different Area</h2>
          <p>By default, Nearby uses your current GPS position. But you can also search around a different location by panning the map or entering a place name. Planning a trip? Search the area around your destination before you leave and identify sites worth visiting.</p>
      </BlogPostFrame>
    </>
  );
}
