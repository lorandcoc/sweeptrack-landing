"use client";

import Link from "next/link";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-md w-full text-center">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Something went wrong</p>
        <h1 className="font-display text-4xl md:text-5xl mb-4">Unexpected error</h1>
        <p className="text-muted mb-8 leading-relaxed">
          Something broke on our end. Try reloading — if it keeps happening, let us know.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent text-[#050510] font-semibold hover:bg-accent-dim transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 text-foreground hover:border-white/20 transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
