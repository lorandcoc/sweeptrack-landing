"use client";

import { useState } from "react";

export default function ComingSoonButton({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: hook up to actual email service (Supabase, Mailchimp, etc.)
    setSubmitted(true);
    setTimeout(() => {
      setShowEmail(false);
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  const padClass = size === "large" ? "px-8 py-4 text-lg" : "px-7 py-4 text-base";

  if (submitted) {
    return (
      <div className={`inline-flex items-center justify-center gap-2 ${padClass} rounded-2xl bg-accent/15 border border-accent/30 text-accent font-semibold ${className}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        We&apos;ll let you know!
      </div>
    );
  }

  if (showEmail) {
    return (
      <form onSubmit={handleSubmit} className={`inline-flex items-center gap-2 ${className}`}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          autoFocus
          className="px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/40 transition-colors w-[220px]"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-xl bg-accent text-[#0A0A1A] font-semibold text-sm hover:bg-accent-dim transition-colors shrink-0"
        >
          Notify Me
        </button>
      </form>
    );
  }

  return (
    <button
      onClick={() => setShowEmail(true)}
      className={`group inline-flex items-center justify-center gap-3 ${padClass} rounded-2xl bg-accent text-[#0A0A1A] font-semibold hover:bg-accent-dim transition-all cta-pulse hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
      Coming Soon &middot; Get Notified
    </button>
  );
}
