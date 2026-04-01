const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Live GPS Tracking",
    description:
      "Real-time satellite map with heading, altitude, speed, and distance overlay. Never lose track of where you've been.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
    title: "Grid Search Mode",
    description:
      "Systematic search grid overlay ensures complete ground coverage. Never miss a spot in your hunting area.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Heatmap Visualization",
    description:
      "Rainbow gradient density map shows exactly where you've spent time. Identify hot zones and untouched areas at a glance.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "55 Detector Presets",
    description:
      "Pre-configured settings for 55 metal detectors across 12 major brands. Select your model and start hunting instantly.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 110-14h8.5" />
        <path d="M21 12h-4M21 12l-3-3M21 12l-3 3" />
      </svg>
    ),
    title: "Offline Maps",
    description:
      "Download maps for offline use with 4 tile sources: OpenStreetMap, Satellite, Terrain, and Historical Topographic.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Perimeter Guard",
    description:
      "Set a virtual boundary and get vibration alerts when you leave your designated search zone. Stay within your permissions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.2" />
      </svg>
    ),
    title: "Session Analytics",
    description:
      "Detailed stats for every session — distance walked, duration, finds per session, calendar heatmap of activity over time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
    ),
    title: "GPX / KML Export",
    description:
      "Export your sessions in GPX, KML, or CSV format. Share with fellow detectorists or import into Google Earth.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 00-6 6v2a6 6 0 006 6h0a6 6 0 006-6V9a6 6 0 00-6-6z" />
        <path d="M12 17v4M8 21h8" />
      </svg>
    ),
    title: "Weather & Tides",
    description:
      "Built-in weather forecast and tide tables. Plan your hunts around optimal conditions for the best results.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Nearby Historic Sites",
    description:
      "Discover historically significant locations near you. Find promising detecting spots you didn't know existed.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Session Comparison",
    description:
      "Compare multiple sessions with overlay and side-by-side modes. Track your progress and favorite spots over time.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
        <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    title: "Cloud Backup",
    description:
      "Back up all your sessions to Google Drive. Restore on any device — never lose your detecting history.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-accent">Detect Smarter</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Professional-grade tools packed into one app. From GPS tracking to
            session analytics, every feature is designed for serious detectorists.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card gradient-border rounded-2xl p-6 bg-surface"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
