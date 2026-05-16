"use client";

import { useI18n, type TranslationKey } from "@/lib/i18n";

/**
 * Five-tile feature strip — the headline capabilities of SweepTrack Pro.
 * Value is a one-word evocation of the feature; label carries the descriptor.
 * Value words stay in English everywhere (they read as iconic feature stamps,
 * mirroring how featuretag.* keeps product-feature names untranslated).
 */
const tiles = [
  { valueKey: "statsbar.vault_value",     labelKey: "statsbar.vault_label" },
  { valueKey: "statsbar.offline_value",   labelKey: "statsbar.offline_label" },
  { valueKey: "statsbar.tracks_value",    labelKey: "statsbar.tracks_label" },
  { valueKey: "statsbar.backup_value",    labelKey: "statsbar.backup_label" },
  { valueKey: "statsbar.perimeter_value", labelKey: "statsbar.perimeter_label" },
] as const;

export default function StatsBar() {
  const { t } = useI18n();
  return (
    <section className="stats-bar" aria-label="Headline app features">
      <div className="max-w-6xl mx-auto px-6 stats-bar__grid">
        {tiles.map((tile) => (
          <div key={tile.labelKey}>
            <span className="stats-bar__value">{t(tile.valueKey as TranslationKey)}</span>
            <div className="stats-bar__label">{t(tile.labelKey as TranslationKey)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
