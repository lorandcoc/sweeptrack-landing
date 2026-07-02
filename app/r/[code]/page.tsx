import type { Metadata } from "next";
import {
  isValidRadarCode,
  normalizeRadarCode,
  radarInviteReferrerUrl,
  radarJoinDeepLink,
} from "@/lib/playStore";
import RadarRedirect from "./RadarRedirect";

/**
 * SweepTrack Radar invite funnel: `sweeptrack.pro/r/{CODE}`.
 *
 * The Radar app shares this URL when a host invites the crew. If the app is
 * installed we deep-link straight into the join flow via
 * `sweeptrackradar://join/{CODE}`; if not, we fall back to Radar's Play Store
 * listing with the code as the Install Referrer campaign — same zero-backend
 * attribution as the band funnel (see BAND_FUNNEL.md / lib/playStore.ts).
 *
 * Once `com.sweeptrack.radar` verifies against
 * public/.well-known/assetlinks.json, Android opens the app directly and never
 * even loads this page; this interstitial covers unverified installs, desktop,
 * and the not-installed case.
 */

// Redirect funnels must never be indexed.
export const metadata: Metadata = {
  title: "Opening SweepTrack Radar…",
  robots: { index: false, follow: false },
};

type Params = Promise<{ code: string }>;

export default async function RadarInviteLanding({
  params,
}: {
  params: Params;
}) {
  const { code } = await params;
  // Mirror the app's GroupCode.normalize so what we deep-link is exactly what
  // the app would accept. Garbled codes still land on the Play listing.
  const normalized = normalizeRadarCode(code);
  const valid = isValidRadarCode(normalized);
  const playTarget = radarInviteReferrerUrl(valid ? normalized : "RADAR_INVITE");
  const appLink = valid ? radarJoinDeepLink(normalized) : null;

  return (
    <>
      {/* No-JS fallback: meta refresh forwards straight to the Play listing. */}
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=${playTarget}`} />
      </noscript>
      <RadarRedirect
        code={valid ? normalized : null}
        appLink={appLink}
        playTarget={playTarget}
      />
    </>
  );
}
