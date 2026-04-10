import AnimatedCounter from "./AnimatedCounter";
import ParallaxPhone from "./ParallaxPhone";
import ComingSoonButton from "./ComingSoonButton";

const numberStats = [
  { value: 57, label: "Detector Models" },
  { value: 4, label: "Offline Map Sources" },
  { value: 14, label: "Day Tide Forecast" },
  { value: 10, label: "Detector Preset Slots" },
];

const checkStats = [
  "USGS Historical Maps",
  "Permission Vault",
  "Perimeter Guard",
  "Cloud Backup",
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Free to Use &middot; Pro Features Available
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              {["Track", "Every", "Sweep."].map((word, i) => (
                <span key={word} className="word-reveal inline-block mr-[0.3em]" style={{ animationDelay: `${i * 150 + 200}ms` }}>
                  {word}
                </span>
              ))}
              <br />
              {["Find", "Every", "Treasure."].map((word, i) => (
                <span key={word} className="word-reveal inline-block mr-[0.3em] shimmer-text glow-text" style={{ animationDelay: `${i * 150 + 700}ms` }}>
                  {word}
                </span>
              ))}
            </h1>

            <p className="text-lg text-muted max-w-lg mb-8 md:mx-0 mx-auto leading-relaxed animate-fade-up delay-200">
              GPS tracking, detecting forecast, historical map overlays,
              offline maps, cloud backup — everything you wish you had
              on your last hunt. Ad-free. Always.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up delay-300">
              <ComingSoonButton />
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/10 text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all text-base hover:scale-[1.02] active:scale-[0.98]"
              >
                See What&apos;s Inside
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          <ParallaxPhone />
        </div>

        {/* Stats Bar — 4x2 grid: numbers top, checkmarks bottom */}
        <div className="mt-16 md:mt-20 animate-fade-up delay-500">
          <div className="section-divider mb-8" />

          {/* Row 1: Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {numberStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent stat-glow mb-1">
                  <AnimatedCounter target={stat.value} />
                </div>
                <div className="text-xs text-muted font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Checkmarks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {checkStats.map((label) => (
              <div key={label} className="flex items-center justify-center gap-2 py-2 rounded-lg bg-accent/5 border border-accent/10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00FF6A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-xs font-medium text-white/80 uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>

          <div className="section-divider mt-8" />
        </div>
      </div>
    </section>
  );
}
