import Link from "next/link";
import type { CSSProperties } from "react";

// Server-rendered hub -> spoke internal links. Sends homepage authority into
// the central cluster posts with descriptive, keyword-bearing anchors, and
// gives crawlers in-content paths to the guides. English-only, like /blog.
const guides = [
  { href: "/blog/metal-detecting-for-beginners", title: "Metal Detecting for Beginners" },
  { href: "/blog/how-to-track-metal-detecting-sessions-gps", title: "How to Track Detecting Sessions with GPS" },
  { href: "/blog/how-to-use-old-maps-for-metal-detecting", title: "Use Old Maps to Find Better Spots" },
  { href: "/blog/where-to-metal-detect-near-me", title: "Where to Metal Detect Near Me" },
  { href: "/blog/best-metal-detectors-under-500", title: "Best Metal Detectors Under $500" },
  { href: "/blog/metal-detecting-permission-letter-template", title: "Permission Letter Template" },
];

const HOVER = { "--c-edge": "var(--st-accent-edge)", "--c-glow": "var(--accent)" } as CSSProperties;

export default function GuidesTeaser() {
  return (
    <section id="guides" className="st-rule py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16">
        <div>
          <h2 className="font-display st-h2">Metal detecting guides</h2>
          <p className="mt-5 text-muted leading-relaxed max-w-sm">
            Articles on finding sites, asking for permission, and using the app.
          </p>
          <p className="mt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--st-accent-edge)] bg-[var(--st-accent-faint)] px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent hover:text-[#050510] transition-colors"
            >
              All guides
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {guides.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                style={HOVER}
                className="fcard group flex h-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0a0a18] px-5 py-4 text-foreground/90 hover:text-foreground"
              >
                <span>{g.title}</span>
                <span className="text-muted transition-all group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
