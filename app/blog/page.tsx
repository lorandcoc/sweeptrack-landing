import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metal Detecting Tips, Guides & App Updates",
  description:
    "Tips, guides, and updates for metal detectorists. Learn how to use old maps to find homesteads, pick the best detecting conditions with weather forecasts, and get the most out of SweepTrack Pro.",
};

const posts = [
  {
    slug: "how-to-use-old-maps-for-metal-detecting",
    title: "How to Use Old Maps to Find Better Metal Detecting Spots",
    excerpt:
      "Historical topographic maps from USGS can reveal old homesteads, vanished roads, and forgotten settlements. Here's how to use them to find productive detecting sites.",
    date: "April 2026",
    tag: "Guide",
  },
  {
    slug: "best-weather-conditions-for-metal-detecting",
    title: "Best Weather Conditions for Metal Detecting (And When to Stay Home)",
    excerpt:
      "Soil moisture, temperature, wind, and barometric pressure all affect your detector's performance. Learn what makes a good detecting day and how to check before you go.",
    date: "April 2026",
    tag: "Tips",
  },
  {
    slug: "metal-detecting-permission-letter-template",
    title: "Metal Detecting Permission Letter: Free Template + What to Include",
    excerpt:
      "Getting landowner permission is the #1 rule of detecting. Here's a template letter that works, plus tips on approaching landowners and tracking your permissions.",
    date: "April 2026",
    tag: "Guide",
  },
];

export default function BlogIndex() {
  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm"
        >
          &larr; Back to home
        </Link>

        <h1 className="text-3xl font-bold mb-2">Metal Detecting Blog</h1>
        <p className="text-muted mb-10">Tips, guides, and app updates for detectorists.</p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-2xl border border-white/5 bg-surface/50 p-6 hover:border-accent/20 hover:bg-surface/80 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {post.tag}
                </span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <h2 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
