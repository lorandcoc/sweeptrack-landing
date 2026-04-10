import ParallaxPhone from "./ParallaxPhone";
import ComingSoonButton from "./ComingSoonButton";

/**
 * "Built because…" pain → fix pairs.
 * Every fix below maps to a real, shipped feature verified in the Kotlin source.
 */
const builtBecause = [
  {
    pain: "Walked this row already?",
    fix: "Coverage heatmap + past-track overlay",
  },
  {
    pain: "Lost on the way back to the car?",
    fix: "Compass with return-bearing arrow",
  },
  {
    pain: "Rained-out hunt, wasted drive?",
    fix: "Detecting Forecast for any location",
  },
  {
    pain: "Phone died, session gone?",
    fix: "One-tap Google Drive backup",
  },
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

        {/* Built Because — pain → fix grid, replaces the dry stats bar */}
        <div className="mt-16 md:mt-20 animate-fade-up delay-500">
          <div className="section-divider mb-10" />

          <div className="text-center mb-6">
            <p className="text-accent text-[11px] font-bold tracking-[0.25em] uppercase">
              Built because a detectorist got tired of&hellip;
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {builtBecause.map((item, i) => (
              <div
                key={item.pain}
                className="relative rounded-2xl border border-white/8 bg-surface/60 px-5 py-4 overflow-hidden transition-all hover:border-accent/30 hover:bg-surface/80 animate-fade-up"
                style={{ animationDelay: `${600 + i * 80}ms` }}
              >
                {/* Left edge accent bar */}
                <div className="absolute inset-y-0 left-0 w-[3px] bg-accent/60" />
                <div className="flex items-start gap-3 pl-1">
                  <span
                    className="text-white/35 font-black text-xl leading-none select-none mt-0.5"
                    aria-hidden
                  >
                    &times;
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/60 line-through decoration-white/20 decoration-1">
                      {item.pain}
                    </p>
                    <p className="text-sm font-semibold text-accent mt-1.5 flex items-center gap-1.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item.fix}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-divider mt-10" />
        </div>
      </div>
    </section>
  );
}
