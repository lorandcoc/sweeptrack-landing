"use client";

import { useI18n, type TranslationKey } from "@/lib/i18n";

type Item = { color?: "amber" | "cyan" | "orange"; key: TranslationKey };

const items: Item[] = [
  { key: "featuretag.gps" },
  { color: "amber", key: "featuretag.forecast" },
  { color: "cyan", key: "featuretag.tide" },
  { color: "orange", key: "featuretag.perimeter" },
  { key: "featuretag.track" },
  { color: "amber", key: "featuretag.oldmap" },
  { color: "cyan", key: "featuretag.cloud" },
  { key: "featuretag.findlog" },
  { color: "orange", key: "featuretag.permission" },
  { key: "featuretag.offline" },
  { color: "amber", key: "featuretag.nightvision" },
  { color: "cyan", key: "featuretag.compare" },
];

export default function Marquee() {
  const { t } = useI18n();
  const all = [...items, ...items];

  return (
    <div className="feat-marquee cv-auto" aria-hidden="true">
      <div className="feat-marquee__track">
        {all.map((it, i) => (
          <span key={i} className="feat-marquee__item">
            <span className={`feat-marquee__pin${it.color ? " " + it.color : ""}`} />
            {t(it.key)}
          </span>
        ))}
      </div>
    </div>
  );
}
