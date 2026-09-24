/**
 * HeroTrackDemo: a sweep drawn over the home-screen screenshot, the way the
 * app draws your path as you walk. Three passes along the field strip between
 * the dirt road and the hedge; the third pass is still in progress and ends on
 * the position arrow. It draws once on load and then stays; with reduced
 * motion it is shown finished.
 *
 * Coordinates are pixels of public/screenshots/home.jpg (720×1560), so the
 * viewBox matches the image and the lanes sit on the same field at every
 * phone size. The strip runs at about 34° (parallel to the road), and the
 * passes are 16 px apart.
 */

const SWEEP_PATH =
  "M 209.6 608.4 L 408.5 742.6 " +
  "Q 410.7 753.7 399.6 755.8 L 200.6 621.7 " +
  "Q 189.5 623.8 191.7 634.9 L 364.9 751.8";

// Finds logged along the way. `at` is the fraction of the path where each
// one sits, so it appears as the line reaches it.
const FINDS = [
  { x: 292.5, y: 664.3, at: 0.14 },
  { x: 333.3, y: 711.1, at: 0.47 },
  { x: 258, y: 679.7, at: 0.82 },
];

const DRAW_DELAY_S = 0.4;
const DRAW_S = 3.2;

export default function HeroTrackDemo() {
  return (
    <svg className="hero-track" viewBox="0 0 720 1560" aria-hidden="true">
      <path
        d={SWEEP_PATH}
        pathLength={1}
        className="hero-track__line"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ animationDelay: `${DRAW_DELAY_S}s`, animationDuration: `${DRAW_S}s` }}
      />
      {FINDS.map((f) => (
        <circle
          key={`${f.x}-${f.y}`}
          className="hero-track__find"
          cx={f.x}
          cy={f.y}
          r="9"
          fill="#FFFFFF"
          stroke="#050510"
          strokeWidth="3"
          style={{ animationDelay: `${DRAW_DELAY_S + f.at * DRAW_S}s` }}
        />
      ))}
    </svg>
  );
}
