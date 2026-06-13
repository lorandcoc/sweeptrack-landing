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
    <section id="guides" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-muted text-sm font-medium tracking-wider uppercase mb-3 text-center">Guides</p>
        <h2 className="font-display text-3xl md:text-4xl mb-3 text-center">Metal detecting guides</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto text-center mb-10">
          Field-tested advice on finding good spots and getting permission.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="block h-full px-4 py-3.5 rounded-xl bg-surface/50 border border-white/[0.05] hover:border-accent/30 hover:bg-surface/80 transition-colors"
            >
              <span className="font-semibold text-sm text-white/90 hover:text-accent">{g.title} &rarr;</span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-8">
          <Link href="/blog" className="text-accent hover:underline text-sm">
            See all metal detecting guides
          </Link>
        </p>
      </div>
    </section>
  );
}
