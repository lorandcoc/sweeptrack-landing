import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Now Available on Android
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Track Every Sweep.
              <br />
              <span className="text-accent glow-text">Find Every Treasure.</span>
            </h1>

            <p className="text-lg text-muted max-w-lg mb-8 md:mx-0 mx-auto">
              The ultimate GPS tracking app for metal detecting. Heatmaps, grid
              search, 55 detector presets, offline maps, and detailed session
              analytics — all in your pocket.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-accent text-[#0A0A1A] font-semibold hover:bg-accent-dim transition-colors text-base"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Get on Google Play
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all text-base"
              >
                See Features
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                </svg>
              </a>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full" />
              <div className="relative phone-frame w-[280px] md:w-[320px] border-[3px] border-white/10">
                <Image
                  src="/screenshots/home.png"
                  alt="Sweep Track Pro - GPS Map View"
                  width={320}
                  height={693}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
