type Item = { dot?: "amber" | "cyan" | "orange"; label: string; value: string };

const items: Item[] = [
  { label: "GPS", value: "14 SATS LOCKED" },
  { dot: "amber", label: "SOIL", value: "62% · MOIST" },
  { dot: "cyan", label: "TIDE", value: "LOW 14:22" },
  { dot: "orange", label: "PERIMETER", value: "INSIDE" },
  { label: "SCORE", value: "96 EXCELLENT" },
  { label: "SESSIONS", value: "+2,184 / WK" },
  { dot: "amber", label: "FORECAST", value: "RAIN +18H" },
  { dot: "cyan", label: "POI", value: "0.4 km" },
];

export default function HudTicker() {
  // Duplicate for seamless infinite scroll
  const all = [...items, ...items];
  return (
    <div className="hud-ticker" aria-hidden="true">
      <div className="hud-ticker__track">
        {all.map((it, i) => (
          <span key={i} className="hud-ticker__item">
            <span className={`dot${it.dot ? " " + it.dot : ""}`} />
            {it.label} · <strong>{it.value}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}
