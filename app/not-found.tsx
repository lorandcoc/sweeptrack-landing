import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full text-center">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">404</p>
        <h1 className="font-display text-4xl md:text-5xl mb-4">Page not found</h1>
        <p className="text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for moved, was renamed, or never existed. Back to the map.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-[#050510] font-semibold hover:bg-accent-dim transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-foreground hover:border-white/20 transition-colors"
          >
            Browse guides
          </Link>
        </div>
      </div>
    </main>
  );
}
