"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import { Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const SUPABASE_URL = "https://vntuabtcrllroulgqhwf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZudHVhYnRjcmxscm91bGdxaHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMjYwNTIsImV4cCI6MjA4ODkwMjA1Mn0.WXVRYyUqt98tMe8g_yiFkP7puJUNyaQiQsz6SySKor4";

function NewsletterForm() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "duplicate" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      if (res.ok) {
        fetch("/api/notify-waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email.trim().toLowerCase() }),
        }).catch(() => {});
        setStatus("ok");
      } else if (res.status === 409) setStatus("duplicate");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const done = status === "ok" || status === "duplicate";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/[0.03]">
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-5 sm:px-8 py-5 sm:py-6">
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-white mb-1">{t("community.newsletter_heading")}</h3>
          <p className="text-muted text-sm">{t("community.newsletter_description")}</p>
        </div>
        {done ? (
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent/15 border border-accent/30 text-accent text-sm font-semibold shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {status === "ok" ? t("community.newsletter_success") : t("community.newsletter_duplicate")}
          </div>
        ) : (
          <form className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto shrink-0" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              disabled={status === "sending"}
              className="px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/40 transition-colors w-full sm:w-[200px] disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-5 py-2.5 rounded-xl bg-accent text-[#050510] text-sm font-semibold hover:bg-accent-dim transition-colors shrink-0 disabled:opacity-50"
            >
              {status === "sending" ? "..." : status === "error" ? t("community.newsletter_retry") : t("community.newsletter_subscribe")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

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
const RedditIcon = () => (
  <svg className="w-6 h-6 text-[#FF4500]" viewBox="0 0 24 24" fill="currentColor"><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.923-.561.085-.084.223-.084.308 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.794c0-.98-.812-1.776-1.811-1.776-.531 0-1.001.231-1.319.591-1.219-.769-2.881-1.264-4.71-1.318l.956-3.783 3.252.754-.006.046c0 .76.625 1.377 1.392 1.377.764 0 1.387-.616 1.387-1.375 0-.76-.624-1.378-1.387-1.378-.55 0-1.022.318-1.249.778l-3.495-.812c-.137-.029-.276.057-.312.193l-1.056 4.183c-1.794.072-3.4.011-4.611.79-.318-.359-.787-.59-1.317-.59-.999 0-1.811.796-1.811 1.776 0 .722.443 1.34 1.072 1.614-.029.157-.044.318-.044.481 0 2.443 2.879 4.426 6.435 4.426s6.435-1.982 6.435-4.426c0-.163-.015-.323-.043-.479.626-.274 1.067-.893 1.067-1.613zm-4.585.61c-.508 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.414-.919-.922-.919z"/></svg>
);
const TiktokIcon = () => (
  <svg className="w-6 h-6 text-[#00f2fe]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
);


const communities = [
  {
    titleKey: "community.facebook_title",
    descKey: "community.facebook_desc",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/sweeptrackpro/",
    color: "from-[#1877F2]/20",
    border: "group-hover:border-[#1877F2]/50",
    badgeKey: "community.badge_most_active",
    bg: "group-hover:bg-[#1877F2]/5"
  },
  {
    titleKey: "community.youtube_title",
    descKey: "community.youtube_desc",
    icon: <YoutubeIcon />,
    link: "https://www.youtube.com/@SweepTrackPro",
    color: "from-[#FF0000]/20",
    border: "group-hover:border-[#FF0000]/50",
    bg: "group-hover:bg-[#FF0000]/5"
  },
  {
    titleKey: "community.instagram_title",
    descKey: "community.instagram_desc",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/sweeptrackpro/",
    color: "from-[#E1306C]/20",
    border: "group-hover:border-[#E1306C]/50",
    bg: "group-hover:bg-[#E1306C]/5"
  },
  {
    titleKey: "community.tiktok_title",
    descKey: "community.tiktok_desc",
    icon: <TiktokIcon />,
    link: "#",
    color: "from-[#00f2fe]/20",
    border: "group-hover:border-[#00f2fe]/50",
    bg: "group-hover:bg-[#00f2fe]/5"
  },
  {
    titleKey: "community.reddit_title",
    descKey: "community.reddit_desc",
    icon: <RedditIcon />,
    link: "#",
    color: "from-[#FF4500]/20",
    border: "group-hover:border-[#FF4500]/50",
    bg: "group-hover:bg-[#FF4500]/5"
  }
] as const;

export default function CommunityLinks() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  return (
    <section id="community" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-background to-background" />

      <div ref={ref} className={`relative z-10 max-w-6xl mx-auto px-6 reveal ${visible ? "visible" : ""}`}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-accent/8 mb-6">
            <Users className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-6">
            {t("community.heading_prefix")}<span className="text-accent">{t("community.heading_accent")}</span>
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
            {t("community.description")}
          </p>
        </div>

        {/* Social cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {communities.map((comm) => (
            <a
              key={comm.titleKey}
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
                  {"badgeKey" in comm && comm.badgeKey && (
                    <span className="text-[10px] uppercase tracking-wider font-bold text-white bg-accent/20 border border-accent/30 px-2 py-1 rounded-full">
                      {t(comm.badgeKey)}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-white transition-colors">
                  {t(comm.titleKey)}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-grow group-hover:text-white/80 transition-colors">
                  {t(comm.descKey)}
                </p>
                <div className="text-xs font-semibold text-white/40 uppercase tracking-widest group-hover:text-white/80 transition-colors flex items-center gap-2">
                  {t("community.connect")} <span>&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter — full width */}
        <NewsletterForm />
      </div>
    </section>
  );
}
