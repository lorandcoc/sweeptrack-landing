import Image from "next/image";

const screenshots = [
  {
    src: "/screenshots/home.png",
    alt: "GPS Map with Satellite View and HUD Overlay",
    label: "Live Map & HUD",
  },
  {
    src: "/screenshots/more.png",
    alt: "Tools and Features Menu",
    label: "Detection Tools",
  },
  {
    src: "/screenshots/challenges.png",
    alt: "Personal Challenges and XP System",
    label: "Challenges & XP",
  },
  {
    src: "/screenshots/stats.png",
    alt: "Session Statistics Dashboard",
    label: "Statistics",
  },
  {
    src: "/screenshots/history.png",
    alt: "Session History with Calendar Heatmap",
    label: "Session History",
  },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-20 md:py-32 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See It in <span className="text-accent">Action</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A sleek, dark interface designed for outdoor use. Every screen
            optimized for readability in bright sunlight.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 screenshot-scroll snap-x snap-mandatory px-4">
          {screenshots.map((shot) => (
            <div
              key={shot.label}
              className="flex-shrink-0 snap-center flex flex-col items-center gap-3"
            >
              <div className="phone-frame w-[220px] md:w-[260px] border-[2px] border-white/10">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={260}
                  height={563}
                  className="w-full h-auto"
                />
              </div>
              <span className="text-sm text-muted font-medium">
                {shot.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
