import type { Metadata } from "next";

const BASE = "https://sweeptrack.pro";

/**
 * Generate full SEO metadata for a blog post.
 * Every post gets: canonical URL, Open Graph, Twitter Card.
 */
export function blogMeta({
  slug,
  title,
  description,
  publishedDate = "2026-04-01",
}: {
  slug: string;
  title: string;
  description: string;
  publishedDate?: string;
}): Metadata {
  const url = `${BASE}/blog/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "SweepTrack Pro",
      type: "article",
      locale: "en_US",
      publishedTime: publishedDate,
      authors: ["Lorand"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * Generate Article JSON-LD for a blog post.
 * Inject via <script type="application/ld+json"> in the page component.
 */
export function articleJsonLd({
  slug,
  title,
  description,
  publishedDate = "2026-04-01",
}: {
  slug: string;
  title: string;
  description: string;
  publishedDate?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE}/blog/${slug}`,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      "@type": "Person",
      name: "Lorand",
      url: "https://lorand.cc",
    },
    publisher: {
      "@type": "Organization",
      name: "Loriba",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${slug}` },
  };
}
