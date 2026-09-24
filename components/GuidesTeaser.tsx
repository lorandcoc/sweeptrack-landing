import Link from "next/link";

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

export default function GuidesTeaser() {
  return (
    <section id="guides" className="st-rule py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16">
        <div>
          <h2 className="font-display st-h2">Metal detecting guides</h2>
          <p className="mt-5 text-muted leading-relaxed max-w-sm">
            Articles on finding sites, asking for permission, and using the app.
          </p>
          <p className="mt-5">
            <Link
              href="/blog"
              className="text-foreground underline decoration-white/30 underline-offset-4 hover:decoration-foreground transition-colors"
            >
              All guides
            </Link>
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-x-10">
          {guides.map((g) => (
            <li key={g.href} className="border-t border-white/10">
              <Link
                href={g.href}
                className="group flex items-baseline justify-between gap-4 py-4 text-foreground/90 hover:text-foreground"
              >
                <span className="group-hover:underline decoration-white/40 underline-offset-4">{g.title}</span>
                <span className="text-muted group-hover:text-accent transition-colors" aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
