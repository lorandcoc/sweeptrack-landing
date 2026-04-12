import ParallaxPhone from "./ParallaxPhone";
import ComingSoonButton from "./ComingSoonButton";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-8 md:pt-36 md:pb-12">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Free to Use &middot; Pro Features Available
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Track Every Sweep.
              <br />
              <span className="text-accent">Find Every Treasure.</span>
            </h1>

            <p className="text-lg text-muted max-w-lg mb-8 md:mx-0 mx-auto leading-relaxed">
              GPS tracking, detecting forecast, historical map overlays,
              offline maps, cloud backup — everything you wish you had
              on your last hunt. Ad-free. Always.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <ComingSoonButton />
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl border border-white/10 text-foreground hover:border-white/20 transition-colors text-base"
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

      </div>
    </section>
  );
}
