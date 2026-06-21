"use client";

import { useI18n } from "@/lib/i18n";

/**
 * Canonical Play Store listing for the app (open testing as of launch).
 * Single source of truth — imported by every download CTA and the JSON-LD
 * downloadUrl so the link is never duplicated by hand.
 */
export const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.sweeptrack.native";

/**
 * Primary "Get it on Google Play" CTA. Replaced the pre-launch waitlist
 * button (ComingSoonButton) once the app went live on Google Play.
 */
export default function GooglePlayButton({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  const { t } = useI18n();
  const padClass = size === "large" ? "px-8 py-4 text-lg" : "px-7 py-4 text-base";

  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 ${padClass} rounded-2xl bg-accent text-[#050510] font-semibold hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      {/* Play "triangle" glyph — monochrome to sit on the accent fill. */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5 3.5v17a1 1 0 0 0 1.5.87l14.5-8.5a1 1 0 0 0 0-1.74L6.5 2.63A1 1 0 0 0 5 3.5Z" />
      </svg>
      {t("cta.google_play")}
    </a>
  );
}
