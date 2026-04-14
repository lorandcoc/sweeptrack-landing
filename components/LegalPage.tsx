"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

/* ── Locale-keyed dynamic loaders ────────────────────────────── */

type Loaders = Record<string, () => Promise<{ default: string }>>;

const termsLoaders: Loaders = {
  en: () => import("@/legal/terms/en.md"),
  ro: () => import("@/legal/terms/ro.md"),
  de: () => import("@/legal/terms/de.md"),
  es: () => import("@/legal/terms/es.md"),
  fr: () => import("@/legal/terms/fr.md"),
  nl: () => import("@/legal/terms/nl.md"),
  pl: () => import("@/legal/terms/pl.md"),
  it: () => import("@/legal/terms/it.md"),
  pt: () => import("@/legal/terms/pt.md"),
  sv: () => import("@/legal/terms/sv.md"),
  tr: () => import("@/legal/terms/tr.md"),
  da: () => import("@/legal/terms/da.md"),
  hu: () => import("@/legal/terms/hu.md"),
  ru: () => import("@/legal/terms/ru.md"),
};

const privacyLoaders: Loaders = {
  en: () => import("@/legal/privacy/en.md"),
  ro: () => import("@/legal/privacy/ro.md"),
  de: () => import("@/legal/privacy/de.md"),
  es: () => import("@/legal/privacy/es.md"),
  fr: () => import("@/legal/privacy/fr.md"),
  nl: () => import("@/legal/privacy/nl.md"),
  pl: () => import("@/legal/privacy/pl.md"),
  it: () => import("@/legal/privacy/it.md"),
  pt: () => import("@/legal/privacy/pt.md"),
  sv: () => import("@/legal/privacy/sv.md"),
  tr: () => import("@/legal/privacy/tr.md"),
  da: () => import("@/legal/privacy/da.md"),
  hu: () => import("@/legal/privacy/hu.md"),
  ru: () => import("@/legal/privacy/ru.md"),
};

const pageLoaders = { terms: termsLoaders, privacy: privacyLoaders };

/* ── Tiny Markdown → HTML converter (no deps) ───────────────── */

function md(src: string): string {
  // Normalise line endings
  let s = src.replace(/\r\n?/g, "\n");

  // Fenced code blocks (```…```)
  s = s.replace(/```(\w*)\n([\s\S]*?)```/g, (_, _lang, code) =>
    `<pre><code>${esc(code.trimEnd())}</code></pre>`
  );

  // Inline code
  s = s.replace(/`([^`]+)`/g, (_, c) => `<code>${esc(c)}</code>`);

  // Horizontal rules
  s = s.replace(/^---+$/gm, "<hr />");

  // Headings
  s = s.replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold text-foreground/90 mb-2 mt-6">$1</h3>');
  s = s.replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold text-accent mb-3 mt-8">$1</h2>');
  s = s.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-1">$1</h1>');

  // Bold + italic
  s = s.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>");
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links  [text](url)
  s = s.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-accent hover:underline" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Make mailto links not open in new tab
  s = s.replace(
    /target="_blank" rel="noopener noreferrer">(.*?)<\/a>(\s*\n|\s*$)/g,
    (match, text, after) => {
      // Only fix mailto links
      if (match.includes("mailto:")) return match.replace(' target="_blank" rel="noopener noreferrer"', "");
      return match;
    }
  );

  // Unordered lists: gather consecutive `- ` lines into <ul>
  s = s.replace(/(^- .+$\n?)+/gm, (block) => {
    const items = block
      .trim()
      .split("\n")
      .map((line) => `<li>${line.replace(/^- /, "")}</li>`)
      .join("\n");
    return `<ul class="list-disc list-inside space-y-1.5 ml-2 mb-3">${items}</ul>\n`;
  });

  // Paragraphs: blank-line-separated non-tag text
  s = s
    .split("\n\n")
    .map((block) => {
      const t = block.trim();
      if (!t) return "";
      // Don't wrap blocks that already start with an HTML block-level tag
      if (/^<(h[1-6]|ul|ol|li|pre|hr|div|section|table|blockquote)/i.test(t)) return t;
      return `<p class="mb-3">${t.replace(/\n/g, "<br />")}</p>`;
    })
    .join("\n");

  return s;
}

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ── Component ───────────────────────────────────────────────── */

export default function LegalPage({ page }: { page: "terms" | "privacy" }) {
  const { t, locale } = useI18n();
  const [raw, setRaw] = useState<string | null>(null);

  useEffect(() => {
    const loaders = pageLoaders[page];
    const loader = loaders[locale] || loaders.en;
    loader().then((m) => setRaw(typeof m === "string" ? m : m.default)).catch(() => {
      // Fallback to English if the locale file doesn't exist
      loaders.en().then((m) => setRaw(typeof m === "string" ? m : m.default));
    });
  }, [locale, page]);

  const html = useMemo(() => (raw ? md(raw) : ""), [raw]);

  if (!raw) {
    return (
      <main className="flex-1 flex justify-center px-4 py-12">
        <div className="max-w-2xl w-full animate-pulse space-y-4">
          <div className="h-4 bg-white/5 rounded w-24" />
          <div className="h-8 bg-white/5 rounded w-64" />
          <div className="h-4 bg-white/5 rounded w-full" />
          <div className="h-4 bg-white/5 rounded w-5/6" />
          <div className="h-4 bg-white/5 rounded w-4/6" />
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 flex justify-center px-4 py-12">
      <article className="max-w-2xl w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm"
        >
          &larr; {t("legal.back")}
        </Link>

        <div
          className="space-y-2 text-foreground/90 leading-relaxed text-sm legal-prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-12 pt-8 border-t border-surface-variant text-center text-muted text-xs">
          &copy; {new Date().getFullYear()} {page === "terms" ? "Loriba" : "Coc Lorand P.F.A."}. {t("legal.rights")}
        </div>
      </article>
    </main>
  );
}
