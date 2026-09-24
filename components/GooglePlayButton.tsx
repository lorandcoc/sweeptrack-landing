"use client";

import { useI18n } from "@/lib/i18n";
import { PLAY_URL } from "@/lib/playStore";

/**
 * Re-exported for the client components that already import it from here.
 * Server Components must import it from @/lib/playStore instead: from this
 * "use client" module they get a client reference, not the string.
 */
export { PLAY_URL };

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
  const padClass = size === "large" ? "px-7 py-4 text-lg" : "px-6 py-3.5 text-base";

  return (
    <a
      href={PLAY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 ${padClass} rounded-lg bg-accent text-[#050510] font-semibold hover:bg-accent-dim transition-colors ${className}`}
    >
      {/* Play "triangle" glyph — monochrome to sit on the accent fill. */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5 3.5v17a1 1 0 0 0 1.5.87l14.5-8.5a1 1 0 0 0 0-1.74L6.5 2.63A1 1 0 0 0 5 3.5Z" />
      </svg>
      {t("cta.google_play")}
    </a>
  );
}
