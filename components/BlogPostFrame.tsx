"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import GooglePlayButton from "./GooglePlayButton";

type RelatedGuide = { href: string; title: string };

type BlogCategory = "tutorials" | "guides" | "tips" | "location" | "beach" | "beginners" | "gear";

/*
 * Frame for every blog post, in the same editorial style as the rest of the
 * site. Posts pass plain semantic HTML (p, h2, ul/ol, li, strong, em, links);
 * the .post-body rules in globals.css style it. The only classes a post needs
 * are .post-note (a small aside, e.g. a disclaimer) and .post-letter (a
 * fill-in template).
 */
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
  const { t, locale } = useI18n();
  // Format the publish date using whatever locale the chrome is rendering in.
  // Today that's always "en" because /blog stays English-only, but driving
  // this from the i18n context means localizing blog content later is one
  // fewer thing to remember to flip.
  const formattedDate = new Date(publishedDate).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="px-6 pt-10 pb-24 md:pt-16">
      <article className="mx-auto max-w-[42rem]">
        <header>
          <Link href="/blog" className="text-sm text-muted hover:text-foreground transition-colors">
            &larr; {t("blog.back_to_guides")}
          </Link>
          <h1 className="mt-8 font-display text-[2rem] leading-[1.1] sm:text-[2.6rem] [text-wrap:balance]">{title}</h1>
          <p className="mt-5 text-sm text-muted">
            {t(`blog.cat_${category}`)}
            <span className="mx-2" aria-hidden="true">·</span>
            <time dateTime={publishedDate}>{formattedDate}</time>
            <span className="mx-2" aria-hidden="true">·</span>
            {readTime} {t("blog.read_suffix")}
          </p>
        </header>

        <div className="post-body mt-10">{children}</div>

        <aside className="mt-16 border-t border-white/10 pt-8">
          <p className="text-lg leading-relaxed text-muted">
            <strong className="font-semibold text-foreground">SweepTrack Pro</strong> {t("blog.cta_card_text")}{" "}
            <Link
              href="/"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent transition-colors"
            >
              {t("blog.cta_card_link")}
            </Link>
          </p>
          <div className="mt-6">
            <GooglePlayButton />
          </div>
        </aside>

        {relatedGuides && relatedGuides.length > 0 && (
          <nav aria-labelledby="related-guides" className="mt-16">
            <h2 id="related-guides" className="font-display text-xl">
              {t("blog.related_guides")}
            </h2>
            <ul className="mt-4 border-t border-white/10">
              {relatedGuides.map((g) => (
                <li key={g.href} className="border-b border-white/10">
                  <Link
                    href={g.href}
                    className="group flex items-baseline justify-between gap-6 py-4 text-foreground/90 hover:text-foreground transition-colors"
                  >
                    <span className="underline decoration-transparent underline-offset-4 group-hover:decoration-white/40 transition-colors">
                      {g.title}
                    </span>
                    <span className="text-muted" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </article>
    </main>
  );
}
