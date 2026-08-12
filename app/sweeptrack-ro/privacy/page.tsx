import type { Metadata } from "next";
import { cookies } from "next/headers";
import LegalPage from "@/components/LegalPage";
import { I18nProvider } from "@/lib/i18n";
import { getDictionary, isLocale, type LocaleCode } from "@/lib/getDictionary";

export const metadata: Metadata = {
  title: "SweepTrack RO — Politica de confidențialitate",
  description:
    "Politica de confidențialitate pentru SweepTrack RO (com.sweeptrack.ro), aplicația de detecție metalică cu stratul de zone protejate RAN / Natura 2000.",
};

/**
 * Privacy policy for the SweepTrack RO Android app (com.sweeptrack.ro) — a
 * SEPARATE Play listing from SweepTrack Pro (com.sweeptrack.native), whose
 * policy lives at /privacy and must not be reused here: RO bills RevenueCat
 * under a stable device identifier (Android SSAID) instead of Pro's random
 * anonymous ID, and it keeps a free-tier monthly session counter in Firebase.
 * Same per-app pattern as /privacy-radar and /sittrack/privacy.
 *
 * Source of truth is the app repo's `legal/privacy-policy-{ro,en}.md`, copied
 * to `legal/privacy-ro-app/` — keep them in sync when either changes.
 *
 * Locale defaults to Romanian (the app's primary language, RO-only market)
 * rather than the site-wide English default; Hungarian visitors fall back to
 * the English text via LegalPage's loader fallback.
 */
async function detectLocale(): Promise<LocaleCode> {
  const store = await cookies();
  const value = store.get("st-geo-lang")?.value;
  return value && isLocale(value) ? value : "ro";
}

export default async function SweepTrackRoPrivacy() {
  const locale = await detectLocale();
  const dict = getDictionary(locale);
  return (
    <I18nProvider initialLocale={locale} initialDict={dict}>
      <LegalPage page="privacy-ro-app" />
    </I18nProvider>
  );
}
