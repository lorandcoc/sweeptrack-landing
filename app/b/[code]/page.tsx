import type { Metadata } from "next";
import { bandReferrerUrl, sanitizeBandCode } from "@/lib/playStore";
import BandRedirect from "./BandRedirect";

/**
 * SweepTrack Field Band funnel: `sweeptrack.pro/b/{CODE}`.
 *
 * A printed band QR points here. We fire a GA4 `band_scan` event (web-side
 * click count) and forward to a Play Store URL tagged with the code as the
 * campaign, so installs are attributed per-band in Play Console with zero
 * backend. See lib/playStore.ts.
 */

// Redirect funnels must never be indexed.
export const metadata: Metadata = {
  title: "Opening SweepTrack Pro…",
  robots: { index: false, follow: false },
};

type Params = Promise<{ code: string }>;

export default async function BandLanding({ params }: { params: Params }) {
  const { code } = await params;
  const safe = sanitizeBandCode(code);
  const target = bandReferrerUrl(safe);

  return (
    <>
      {/* No-JS fallback: meta refresh forwards immediately. */}
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </noscript>
      <BandRedirect code={safe} target={target} />
    </>
  );
}
