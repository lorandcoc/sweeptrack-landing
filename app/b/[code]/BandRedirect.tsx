"use client";

import { useEffect } from "react";

/**
 * Client interstitial for a SweepTrack Field Band QR scan.
 *
 * Fires a best-effort GA4 `band_scan` event (queued through `dataLayer` so it
 * survives gtag.js not being ready yet), then forwards to the campaign-tagged
 * Play Store URL. Install attribution is carried by the Play `referrer` param,
 * so the funnel stays robust even if the web event is occasionally missed.
 */
export default function BandRedirect({
  code,
  target,
}: {
  code: string;
  target: string;
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
      gtag("event", "band_scan", {
        band_code: code,
        campaign: code,
        transport_type: "beacon",
      });
    } catch {
      // analytics is best-effort; never block the redirect
    }

    // Brief splash so the GA beacon flushes; imperceptible behind the brand frame.
    const id = window.setTimeout(() => {
      window.location.replace(target);
    }, 250);
    return () => window.clearTimeout(id);
  }, [code, target]);

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
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
        alt="SweepTrack Pro"
        style={{ borderRadius: 12 }}
      />
      <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>
        SweepTrack <span style={{ color: "#00FF6A" }}>Pro</span>
      </div>
      <div style={{ fontSize: 14, color: "#B0B0CC" }}>Opening Google Play…</div>
      <a
        href={target}
        style={{
          marginTop: 6,
          fontSize: 14,
          color: "#00FF6A",
          textDecoration: "none",
          fontWeight: 500,
        }}
      >
        Tap here if nothing happens
      </a>
    </main>
  );
}
