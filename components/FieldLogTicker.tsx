"use client";

import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Simulated field-log ticker — a thin strip of live app telemetry covering
 * one full Saturday outing: GPS lock → session start → finds → score →
 * boundary warning → buddy ping → tide → waypoint → leave-by → session saved.
 *
 * Dot tone is fixed per event index (never parsed from the copy, which is
 * localized): go = finds / GO score, warn = boundary / leave-by,
 * info = buddy pings / tide, base = everything else.
 */
type Tone = "base" | "go" | "warn" | "info";

const EVENTS: { key: TranslationKey; tone: Tone }[] = [
  { key: "ticker.e1", tone: "base" }, // GPS lock
  { key: "ticker.e2", tone: "base" }, // session start
  { key: "ticker.e3", tone: "go" }, // find
  { key: "ticker.e4", tone: "go" }, // detecting score · GO
  { key: "ticker.e5", tone: "warn" }, // boundary warning
  { key: "ticker.e6", tone: "info" }, // buddy ping
  { key: "ticker.e7", tone: "go" }, // find
  { key: "ticker.e8", tone: "info" }, // tide
  { key: "ticker.e9", tone: "base" }, // waypoint saved
  { key: "ticker.e10", tone: "go" }, // find
  { key: "ticker.e11", tone: "warn" }, // leave-by
  { key: "ticker.e12", tone: "base" }, // session saved
];

/*
 * Splits "06:54 — GPS lock · 9 satellites" into timestamp + event text so the
 * two halves can carry different weights. Falls back to rendering the whole
 * string if a locale drops the em dash.
 */
function splitEntry(s: string): { time: string | null; text: string } {
  const i = s.indexOf("—");
  if (i < 1) return { time: null, text: s };
  return { time: s.slice(0, i).trim(), text: s.slice(i + 1).trim() };
}

export default function FieldLogTicker() {
  const { t } = useI18n();
  const entries = EVENTS.map(({ key, tone }) => ({ tone, ...splitEntry(t(key)) }));

  const seq = (dup: boolean) => (
    <div className={dup ? "flogx__seq flogx__seq--dup" : "flogx__seq"}>
      {entries.map((e, i) => (
        <span key={i} className="flogx__item">
          <span
            className={`flogx__dot${e.tone === "base" ? "" : ` flogx__dot--${e.tone}`}`}
          />
          {e.time !== null && <span className="flogx__time">{e.time}</span>}
          <span className="flogx__text">{e.text}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="flogx">
      {/* Screen readers get one calm label; the moving, duplicated log is decorative. */}
      <span className="sr-only">{t("ticker.aria")}</span>
      <div className="flogx__track" aria-hidden="true">
        {seq(false)}
        {seq(true)}
      </div>
      <span className="flogx__scan" aria-hidden="true" />
    </div>
  );
}
