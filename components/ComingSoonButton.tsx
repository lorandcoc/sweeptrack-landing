"use client";

import { useState } from "react";

const SUPABASE_URL = "https://vntuabtcrllroulgqhwf.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZudHVhYnRjcmxscm91bGdxaHdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzMjYwNTIsImV4cCI6MjA4ODkwMjA1Mn0.WXVRYyUqt98tMe8g_yiFkP7puJUNyaQiQsz6SySKor4";

async function joinWaitlist(email: string): Promise<"ok" | "duplicate" | "error"> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email }),
    });
    if (res.ok) {
      // Fire-and-forget notification — never blocks the user
      fetch("/api/notify-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).catch(() => {});
      return "ok";
    }
    if (res.status === 409) return "duplicate";
    return "error";
  } catch {
    return "error";
  }
}

export default function ComingSoonButton({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "large";
}) {
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "duplicate" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "sending") return;
    setStatus("sending");
    const result = await joinWaitlist(email.trim().toLowerCase());
    setStatus(result);
    if (result === "ok" || result === "duplicate") {
      setTimeout(() => {
        setShowEmail(false);
        setStatus("idle");
        setEmail("");
      }, 4000);
    }
  };

  const padClass = size === "large" ? "px-8 py-4 text-lg" : "px-7 py-4 text-base";

  // Success state
  if (status === "ok") {
    return (
      <div className={`inline-flex items-center justify-center gap-2 ${padClass} rounded-2xl bg-accent/15 border border-accent/30 text-accent font-semibold ${className}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        You&apos;re on the list!
      </div>
    );
  }

  // Already signed up
  if (status === "duplicate") {
    return (
      <div className={`inline-flex items-center justify-center gap-2 ${padClass} rounded-2xl bg-accent/15 border border-accent/30 text-accent font-semibold ${className}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Already on the list!
      </div>
    );
  }

  // Email input form
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
          disabled={status === "sending"}
          className="px-4 py-3 rounded-xl bg-surface border border-white/10 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent/40 transition-colors w-[220px] disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-5 py-3 rounded-xl bg-accent text-[#050510] font-semibold text-sm hover:bg-accent-dim transition-colors shrink-0 disabled:opacity-50"
        >
          {status === "sending" ? "Joining..." : "Join Waitlist"}
        </button>
      </form>
    );
  }

  // Error state — show retry
  if (status === "error") {
    return (
      <button
        onClick={() => { setStatus("idle"); setShowEmail(true); }}
        className={`group inline-flex items-center justify-center gap-3 ${padClass} rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 font-semibold ${className}`}
      >
        Something went wrong — tap to retry
      </button>
    );
  }

  // Default — CTA button
  return (
    <button
      onClick={() => setShowEmail(true)}
      className={`group inline-flex items-center justify-center gap-3 ${padClass} rounded-2xl bg-accent text-[#050510] font-semibold hover:bg-accent-dim transition-all hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
      Get Notified at Launch
    </button>
  );
}
