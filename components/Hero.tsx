import AnimatedCounter from "./AnimatedCounter";
import ParallaxPhone from "./ParallaxPhone";

const stats = [
  { value: 55, label: "Detector Presets" },
  { value: 12, label: "Color Themes" },
  { value: 4, label: "Map Sources" },
  { value: 2, label: "Languages" },
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-8 md:pt-36 md:pb-12 overflow-hidden">
      {/* Background grid pattern */}
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
          {/* Text */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Now Available on Android
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
              The ultimate GPS tracking app for metal detecting. Heatmaps, grid
              search, 55 detector presets, offline maps, and detailed session
              analytics — all in your pocket.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up delay-300">
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl bg-accent text-[#0A0A1A] font-semibold hover:bg-accent-dim transition-all text-base cta-pulse hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Get on Google Play
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/10 text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all text-base hover:scale-[1.02] active:scale-[0.98]"
              >
                See Features
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                </svg>
              </a>
            </div>
          </div>

          {/* Phone Mockup with Parallax + Stars */}
          <ParallaxPhone />
        </div>

        {/* Stats Bar with Animated Counters */}
        <div className="mt-16 md:mt-24 animate-fade-up delay-500">
          <div className="section-divider mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent stat-glow mb-1">
                  <AnimatedCounter target={stat.value} />
                </div>
                <div className="text-sm text-muted font-medium tracking-wide uppercase">
                  {stat.label}
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
