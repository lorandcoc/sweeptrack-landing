import GuidesIndex from "./GuidesIndex";
import { POSTS } from "@/lib/posts";

const BASE = "https://sweeptrack.pro";

// CollectionPage + Blog + ItemList for the guides hub. Built from the canonical
// POSTS list (titles match each post's real <title>), and rendered from this
// server page — NOT app/blog/layout.tsx, which also wraps every individual post
// and would otherwise leak this list schema onto each article page.
const blogLd = {
  "@context": "https://schema.org",
  "@type": ["CollectionPage", "Blog"],
  "@id": `${BASE}/blog#blog`,
  url: `${BASE}/blog`,
  name: "Metal Detecting Guides and Tutorials",
  description:
    "Metal detecting guides, location tips, detector comparisons, and SweepTrack Pro tutorials.",
  publisher: { "@type": "Organization", name: "Loriba", url: BASE },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: POSTS.length,
    itemListElement: POSTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}/blog/${p.slug}`,
      name: p.title,
    })),
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <GuidesIndex />
    </>
  );
}
