import type { Metadata } from "next";
import Link from "next/link";

const PLAY_INTERNAL_TEST_URL = "https://play.google.com/apps/internaltest/4701450047070007769";

export const metadata: Metadata = {
  title: "Internal Test",
  description:
    "Before SweepTrack Pro hits the Play Store, it ships here. v1.0.1 internal testing track for the first detectorists in.",
  // Page is sharable by direct link only — keep it out of search and out of
  // sitemap.ts. The robots block here reinforces the absence from the index;
  // even if Googlebot stumbles across the URL via a referrer, it ignores it.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: "https://sweeptrack.pro/internal-testing" },
  openGraph: {
    title: "Get the SweepTrack Pro build before launch",
    description: "Internal testing track. First boots on the ground.",
    url: "https://sweeptrack.pro/internal-testing",
    siteName: "SweepTrack Pro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get the SweepTrack Pro build before launch",
    description: "Internal testing track. First boots on the ground.",
  },
};

export default function InternalTestingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Minimal top bar — wordmark only, no nav. Clicking returns to home,
          but the home page does NOT link back here (sharable-by-link only). */}
      <header className="px-6 py-6">
        <Link href="/" className="inline-flex items-center gap-2 font-display text-lg">
          SweepTrack <span className="text-accent">Pro</span>
        </Link>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl text-center">
          <p className="font-mono text-xs text-muted tracking-[0.2em] uppercase mb-6">
            Internal Test · v1.0.1
          </p>

          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] mb-8 [text-wrap:balance]">
            First boots <span className="text-accent">on the ground.</span>
          </h1>

          <p className="text-muted text-lg md:text-xl mb-5 leading-relaxed [text-wrap:pretty]">
            Before SweepTrack Pro reaches Play Store search, it lands here — with the first detectorists to install it, walk it through real sites, and tell me what cracked.
          </p>

          <p className="text-muted text-base md:text-lg mb-10 leading-relaxed [text-wrap:pretty]">
            GPS tracking, four offline tile sources, USGS historical overlays, Permission Vault with PDF authorization letters, Google Drive backup, Arsenal of 60+ detector models, Detecting Forecast, Perimeter Guard, 9-theme tactical interface. Some edges are still rough. That&apos;s the point.
          </p>

          <a
            href={PLAY_INTERNAL_TEST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-accent text-[#050510] font-semibold text-lg hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get the build
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <p className="font-mono text-xs text-muted/70 mt-4">
            Opens Google Play. Sign in with the email you&apos;ll test from.
          </p>
        </div>
      </section>

      {/* Cap notice */}
      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/30 bg-amber-500/10 text-amber-300 text-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="6" />
            </svg>
            Limited to 100 testers. After that the track closes.
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-muted/60 border-t border-white/[0.06]">
        SweepTrack Pro · by Loriba
      </footer>
    </main>
  );
}
