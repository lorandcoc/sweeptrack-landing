import ParallaxPhone from "./ParallaxPhone";
import ComingSoonButton from "./ComingSoonButton";

const stats = [
  { value: "61", label: "Detector Presets" },
  { value: "131", label: "Coins Catalogued" },
  { value: "4", label: "Map Types" },
];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/8 border border-accent/15 text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Free to Use &middot; Ad-Free Forever
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.08] mb-5">
              Never miss a spot.
              <br />
              Never lose a find.
              <br />
              <span className="text-accent">Never trespass again.</span>
            </h1>

            <p className="text-base md:text-lg text-muted max-w-lg mb-6 md:mx-0 mx-auto leading-relaxed">
              The GPS field companion built by a detectorist, for detectorists.
              Track your sessions, map your coverage, log every find, and keep
              your permissions in order&nbsp;&mdash; all in one app.
            </p>

            {/* Stat pills — instant specificity */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <span className="font-mono text-sm font-semibold text-accent">{s.value}</span>
                  <span className="text-xs text-muted">{s.label}</span>
                </div>
              ))}
            </div>

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
