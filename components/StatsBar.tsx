"use client";

/**
 * Five-tile feature strip — the headline capabilities of SweepTrack Pro.
 * Value is a one-word evocation of the feature; label carries the descriptor.
 */
type Stat = { display: string; label: string };

const stats: Stat[] = [
  { display: "VAULT", label: "PERMISSIONS · CALENDAR · PDF" },
  { display: "OFFLINE", label: "MAPS · 4 SOURCES" },
  { display: "TRACKS", label: "PAST SESSIONS · LIVE MAP" },
  { display: "BACKUP", label: "GOOGLE DRIVE · ONE-TAP" },
  { display: "PERIMETER", label: "GUARD · HAPTIC + AUDIO" },
];

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Headline app features">
      <div className="max-w-6xl mx-auto px-6 stats-bar__grid">
        {stats.map((s) => (
          <div key={s.label}>
            <span className="stats-bar__value">{s.display}</span>
            <div className="stats-bar__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
