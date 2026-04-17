"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

type RelatedGuide = { href: string; title: string };

type BlogCategory = "tutorials" | "guides" | "tips" | "location" | "beach" | "beginners" | "gear";

export default function BlogPostFrame({
  title,
  category,
  readTime,
  publishedDate,
  relatedGuides,
  children,
}: {
  title: string;
  category: BlogCategory;
  readTime: string;
  publishedDate: string;
  relatedGuides?: RelatedGuide[];
  children: React.ReactNode;
}) {
  const { t } = useI18n();
  const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm"
        >
          &larr; {t("blog.back_to_guides")}
        </Link>
        <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-3">
          {t(`blog.cat_${category}`)}
        </p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-muted text-sm mb-10">
          <time dateTime={publishedDate}>{formattedDate}</time> &middot; {readTime} {t("blog.read_suffix")}
        </p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          {children}

          <div className="mt-10 p-6 rounded-2xl bg-accent/5 border border-accent/20">
            <p className="text-sm text-muted">
              <strong className="text-foreground">SweepTrack Pro</strong> {t("blog.cta_card_text")}
              {" "}
              <Link href="/#features" className="text-accent hover:underline">
                {t("blog.cta_card_link")}
              </Link>
            </p>
          </div>

          {relatedGuides && relatedGuides.length > 0 && (
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-4">
                {t("blog.related_guides")}
              </p>
              <div className="space-y-3">
                {relatedGuides.map((g) => (
                  <Link
                    key={g.href}
                    href={g.href}
                    className="block text-sm text-foreground/80 hover:text-accent transition-colors"
                  >
                    {g.title} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
