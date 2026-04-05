"use client";

import { useReveal } from "./useReveal";
import { Users } from "lucide-react";

// Brand icons (lucide doesn't include social/brand icons)
const FacebookIcon = () => (
  <svg className="w-6 h-6 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const YoutubeIcon = () => (
  <svg className="w-6 h-6 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const InstagramIcon = () => (
  <svg className="w-6 h-6 text-[#E1306C]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const XIcon = () => (
  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const TiktokIcon = () => (
  <svg className="w-6 h-6 text-[#00f2fe]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
);


const communities = [
  {
    title: "Facebook Group",
    desc: "Join thousands of detectorists sharing finds, tips, and SweepTrack setups.",
    icon: <FacebookIcon />,
    link: "#",
    color: "from-[#1877F2]/20",
    border: "group-hover:border-[#1877F2]/50",
    badge: "Most Active",
    bg: "group-hover:bg-[#1877F2]/5"
  },
  {
    title: "YouTube Shorts",
    desc: "Watch our bite-sized animated tutorials and mastering guides.",
    icon: <YoutubeIcon />,
    link: "#",
    color: "from-[#FF0000]/20",
    border: "group-hover:border-[#FF0000]/50",
    bg: "group-hover:bg-[#FF0000]/5"
  },
  {
    title: "Instagram",
    desc: "Epic permissions, legendary finds, and behind-the-scenes.",
    icon: <InstagramIcon />,
    link: "#",
    color: "from-[#E1306C]/20",
    border: "group-hover:border-[#E1306C]/50",
    bg: "group-hover:bg-[#E1306C]/5"
  },
  {
    title: "X (Twitter)",
    desc: "App updates, dev logs, and quick metal detecting news.",
    icon: <XIcon />,
    link: "#",
    color: "from-white/20",
    border: "group-hover:border-white/50",
    bg: "group-hover:bg-white/5"
  },
  {
    title: "TikTok",
    desc: "Trending detecting moments and rapid-fire tips.",
    icon: <TiktokIcon />,
    link: "#",
    color: "from-[#00f2fe]/20",
    border: "group-hover:border-[#00f2fe]/50",
    bg: "group-hover:bg-[#00f2fe]/5"
  }
];

export default function CommunityLinks() {
  const { ref, visible } = useReveal();

  return (
    <section id="community" className="py-20 md:py-32 relative overflow-hidden">
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
            Share your finds, swap tips, and see what other hunters are digging up. We&apos;re all in this together.
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
