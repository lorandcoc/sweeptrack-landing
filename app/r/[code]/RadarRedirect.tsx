"use client";

import { useEffect } from "react";

/**
 * Client interstitial for a SweepTrack Radar invite link.
 *
 * Fires a best-effort GA4 `radar_invite_visit` event (queued through
 * `dataLayer` so it survives gtag.js not being ready yet, exactly like
 * `band_scan` in app/b), then:
 *
 *  - valid code    → attempts the `sweeptrackradar://join/{CODE}` deep link;
 *                    if the app doesn't take over within a short timeout,
 *                    falls back to the campaign-tagged Play listing. The
 *                    fallback is cancelled when the page is hidden (the app
 *                    opened), so installed users aren't bounced to Play when
 *                    they return to the browser.
 *  - garbled code  → skips the deep-link attempt and forwards to Play after
 *                    the same brief splash /b uses.
 *
 * The visible buttons double as manual retries if the automatic hop is blocked.
 */
export default function RadarRedirect({
  code,
  appLink,
  playTarget,
}: {
  /** Normalized 8-char hunt code, or null when the URL segment was invalid. */
  code: string | null;
  /** `sweeptrackradar://join/{CODE}`, or null when the code is invalid. */
  appLink: string | null;
  playTarget: string;
}) {
  useEffect(() => {
    try {
      const w = window as unknown as {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      // Faithful to the gtag.js bootstrap in app/layout.tsx: queue the call into
      // the shared dataLayer; gtag.js drains the queue once it loads.
      const gtag =
        w.gtag ||
        function gtag() {
          // eslint-disable-next-line prefer-rest-params
          w.dataLayer!.push(arguments);
        };
      gtag("event", "radar_invite_visit", {
        invite_code: code ?? "INVALID",
        campaign: code ?? "RADAR_INVITE",
        transport_type: "beacon",
      });
    } catch {
      // analytics is best-effort; never block the redirect
    }

    let fallbackId: number | undefined;
    const cancelFallback = () => {
      if (fallbackId !== undefined) {
        window.clearTimeout(fallbackId);
        fallbackId = undefined;
      }
    };
    // If the deep link succeeds the browser is backgrounded — don't yank the
    // returning tab to the Play Store.
    const onHidden = () => {
      if (document.visibilityState === "hidden") cancelFallback();
    };
    document.addEventListener("visibilitychange", onHidden);
    window.addEventListener("pagehide", cancelFallback);

    // Brief splash so the GA beacon flushes (same 250ms as /b), then hop.
    const attemptId = window.setTimeout(() => {
      if (!appLink) {
        window.location.replace(playTarget);
        return;
      }
      window.location.href = appLink;
      fallbackId = window.setTimeout(() => {
        window.location.replace(playTarget);
      }, 1600);
    }, 250);

    return () => {
      window.clearTimeout(attemptId);
      cancelFallback();
      document.removeEventListener("visibilitychange", onHidden);
      window.removeEventListener("pagehide", cancelFallback);
    };
  }, [code, appLink, playTarget]);

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        background: "#050510",
        color: "#E8E8F0",
        fontFamily:
          "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif",
        padding: 24,
        textAlign: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icon.svg"
        width={56}
        height={56}
        alt="SweepTrack Radar"
        style={{ borderRadius: 12 }}
      />
      <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>
        SweepTrack <span style={{ color: "#00FF6A" }}>Radar</span>
      </div>

      {code ? (
        <>
          <div style={{ fontSize: 15, color: "#B0B0CC" }}>
            Join the trip in SweepTrack Radar
          </div>
          <div
            style={{
              fontFamily: "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "#FFFFFF",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10,
              padding: "8px 14px",
            }}
          >
            {code}
          </div>
        </>
      ) : (
        <div style={{ fontSize: 14, color: "#B0B0CC", maxWidth: 320 }}>
          That invite code looks incomplete. Get the free app and type the code
          your host shared.
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          marginTop: 6,
          width: "100%",
          maxWidth: 280,
        }}
      >
        {appLink && (
          <a
            href={appLink}
            style={{
              display: "block",
              padding: "12px 18px",
              borderRadius: 12,
              background: "#00FF6A",
              color: "#04140A",
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Open in app
          </a>
        )}
        <a
          href={playTarget}
          style={{
            display: "block",
            padding: "12px 18px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "#E8E8F0",
            fontSize: 15,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Get the app on Google Play
        </a>
      </div>

      <div style={{ fontSize: 12, color: "#7A7A96", marginTop: 4 }}>
        Free · No account · Android
      </div>
    </main>
  );
}
