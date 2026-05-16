import { POSTS } from "@/lib/posts";

const BASE = "https://sweeptrack.pro";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function rfc822(date: string): string {
  // Posts ship with YYYY-MM-DD; pin to noon UTC so timezone drift can't shift
  // the displayed date in a reader.
  return new Date(`${date}T12:00:00Z`).toUTCString();
}

export async function GET() {
  const buildDate = new Date().toUTCString();

  // Newest first so feed readers surface recent posts at the top
  const ordered = [...POSTS].sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate),
  );

  const items = ordered
    .map(
      (p) => `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${BASE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${p.slug}</guid>
      <pubDate>${rfc822(p.publishedDate)}</pubDate>
    </item>`,
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml("SweepTrack Pro — Guides & Tips")}</title>
    <link>${BASE}/blog</link>
    <description>Metal detecting guides, tips, tutorials, and location guides from SweepTrack Pro.</description>
    <language>en</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
