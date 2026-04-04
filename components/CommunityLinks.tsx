"use client";

import { useReveal } from "./useReveal";
import { Youtube, Instagram, Twitter, Facebook, Users, Video } from "lucide-react";

const communities = [
  {
    title: "Facebook Group",
    desc: "Join thousands of detectorists sharing finds, tips, and SweepTrack setups.",
    icon: <Facebook className="w-6 h-6 text-[#1877F2]" />,
    link: "#",
    color: "from-[#1877F2]/20",
    border: "group-hover:border-[#1877F2]/50",
    badge: "Most Active",
    bg: "group-hover:bg-[#1877F2]/5"
  },
  {
    title: "YouTube Shorts",
    desc: "Watch our bite-sized animated tutorials and mastering guides.",
    icon: <Youtube className="w-6 h-6 text-[#FF0000]" />,
    link: "#",
    color: "from-[#FF0000]/20",
    border: "group-hover:border-[#FF0000]/50",
    bg: "group-hover:bg-[#FF0000]/5"
  },
  {
    title: "Instagram",
    desc: "Epic permissions, legendary finds, and behind-the-scenes.",
    icon: <Instagram className="w-6 h-6 text-[#E1306C]" />,
    link: "#",
    color: "from-[#E1306C]/20",
    border: "group-hover:border-[#E1306C]/50",
    bg: "group-hover:bg-[#E1306C]/5"
  },
  {
    title: "X (Twitter)",
    desc: "App updates, dev logs, and quick metal detecting news.",
    icon: <Twitter className="w-6 h-6 text-white" />,
    link: "#",
    color: "from-white/20",
    border: "group-hover:border-white/50",
    bg: "group-hover:bg-white/5"
  },
  {
    title: "TikTok",
    desc: "Trending detecting moments and rapid-fire tips.",
    icon: <Video className="w-6 h-6 text-[#00f2fe]" />,
    link: "#",
    color: "from-[#00f2fe]/20",
    border: "group-hover:border-[#00f2fe]/50",
    bg: "group-hover:bg-[#00f2fe]/5"
  }
];

export default function CommunityLinks() {
  const { ref, visible } = useReveal();

  return (
    <section id="community" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-background to-background" />
      
      {/* Background Starfield effect */}
      <div className="star-field" aria-hidden="true" style={{ opacity: 0.5 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              "--dur": `${3 + Math.random() * 4}s`,
              "--drift": `${5 + Math.random() * 10}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div ref={ref} className={`relative z-10 max-w-6xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-accent/10 mb-6 glow-accent">
            <Users className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join The <span className="shimmer-text">Hunt</span>
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            SweepTrack isn't just an app — it's built by detectorists, for detectorists. Connect with the community, share your latest hoard, and master your machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((comm) => (
            <a
              key={comm.title}
              href={comm.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${comm.bg} ${comm.border}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${comm.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {comm.icon}
                  </div>
                  {comm.badge && (
                    <span className="text-[10px] uppercase tracking-wider font-bold text-white bg-accent/20 border border-accent/30 px-2 py-1 rounded-full">
                      {comm.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-white transition-colors">
                  {comm.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-grow group-hover:text-white/80 transition-colors">
                  {comm.desc}
                </p>
                
                <div className="text-xs font-semibold text-white/40 uppercase tracking-widest group-hover:text-white/80 transition-colors flex items-center gap-2">
                  Connect <span>→</span>
                </div>
              </div>
            </a>
          ))}
          
          {/* Join Discord / Newsletter CTA Card (Span 1 on lg, span 2 on md) */}
          <div className="group relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/5 p-6 backdrop-blur-sm cursor-pointer hover:bg-accent/10 transition-colors lg:col-span-1 md:col-span-2 cta-bg-shift">
             <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-8">
               <h3 className="text-2xl font-bold text-white mb-2">Want App Updates?</h3>
               <p className="text-muted text-sm mb-6">Be the first to know when SweepTrack drops its next major feature.</p>
               <button className="px-6 py-2 rounded-full bg-white text-black font-bold text-sm hover:scale-105 transition-transform">
                 Join Newsletter
               </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
