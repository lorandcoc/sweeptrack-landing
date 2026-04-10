import ParallaxPhone from "./ParallaxPhone";
import ComingSoonButton from "./ComingSoonButton";
import LiveSessionWidget from "./LiveSessionWidget";

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

        {/* Live Session Widget — a running tactical HUD, not a feature list */}
        <div className="mt-16 md:mt-20 animate-fade-up delay-500">
          <div className="section-divider mb-10" />

          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-3 px-1">
              <p className="text-white/30 text-[9px] font-mono font-bold tracking-[0.25em] uppercase">
                {"// Live Readout"}
              </p>
              <p className="text-white/30 text-[9px] font-mono tracking-[0.2em] uppercase">
                Baia Mare · Pasture #3
              </p>
            </div>
            <LiveSessionWidget />
            <p className="text-center text-white/30 text-[10px] font-mono tracking-[0.2em] uppercase mt-4">
              This is what your screen looks like in the field.
            </p>
          </div>

          <div className="section-divider mt-10" />
        </div>
      </div>
    </section>
  );
}
