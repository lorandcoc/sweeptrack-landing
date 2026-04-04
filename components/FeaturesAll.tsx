"use client";

import { useRef, useEffect, useState } from "react";
import { useReveal } from "./useReveal";

/* ─── FEATURED FEATURES (large bento cards) ─── */

function FeaturedGPS() {
  const [activeMap, setActiveMap] = useState(0);
  const maps = ["Satellite", "Terrain", "Topographic", "Street"];
  const mapColors = [
    ["#0A2010", "#0D2A15", "#112A14"],
    ["#1A1508", "#1C1A08", "#0E1505"],
    ["#0D1520", "#0A1218", "#12202E"],
    ["#141414", "#181818", "#111111"],
  ];
  const mapAccents = ["#00FF6A", "#00DDFF", "#FFB000", "#B44AFF"];

  useEffect(() => {
    const t = setInterval(() => setActiveMap((p) => (p + 1) % 4), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="featured-card rotating-border rounded-2xl p-6 bg-surface relative overflow-hidden group h-full flex flex-col">
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-20 transition-all duration-700"
        style={{ background: mapAccents[activeMap] }} />
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 000 20" /><path d="M2 12h20" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">GPS Tracking</h3>
              <p className="text-muted text-xs">4 map types · Real-time HUD</p>
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent/80 bg-accent/10 px-2.5 py-1 rounded-full">Core</span>
        </div>

        {/* Animated map */}
        <div className="rounded-xl overflow-hidden border border-white/8 flex-1 min-h-[140px] relative transition-all duration-700"
          style={{ background: `linear-gradient(135deg, ${mapColors[activeMap][0]}, ${mapColors[activeMap][1]}, ${mapColors[activeMap][2]})` }}>
          {/* Grid */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          {/* Track path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 160" preserveAspectRatio="none">
            <defs>
              <filter id="glow-gps"><feGaussianBlur stdDeviation="2" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>
            <polyline points="30,130 30,80 60,80 60,40 100,40 100,80 140,80 140,40 180,40 180,100 220,100 220,50 260,50"
              fill="none" stroke={mapAccents[activeMap]} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              filter="url(#glow-gps)" opacity="0.85" />
            <circle cx="260" cy="50" r="5" fill={mapAccents[activeMap]} opacity="0.9">
              <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
          {/* HUD overlay */}
          <div className="absolute bottom-2 left-2 right-2 flex gap-2">
            {["2.4km", "1h12m", "3.2km/h"].map((v, i) => (
              <div key={i} className="flex-1 bg-black/60 rounded-lg px-2 py-1 text-center">
                <div className="text-[11px] font-bold" style={{ color: mapAccents[activeMap] }}>{v}</div>
                <div className="text-[8px] text-white/40 uppercase tracking-wider">{["Dist", "Time", "Speed"][i]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Map type switcher */}
        <div className="flex gap-2 mt-4">
          {maps.map((m, i) => (
            <button key={m} onClick={() => setActiveMap(i)}
              className="flex-1 text-[10px] font-semibold uppercase tracking-wider py-1.5 rounded-lg transition-all duration-300"
              style={{
                background: activeMap === i ? `${mapAccents[i]}20` : "rgba(255,255,255,0.04)",
                color: activeMap === i ? mapAccents[i] : "rgba(255,255,255,0.35)",
                border: `1px solid ${activeMap === i ? mapAccents[i] + "50" : "rgba(255,255,255,0.06)"}`,
              }}>
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedCloudBackup() {
  const [synced, setSynced] = useState(false);
  const [progress, setProgress] = useState(0);
  const [syncing, setSyncing] = useState(false);

  const triggerSync = () => {
    if (syncing || synced) return;
    setSyncing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setSyncing(false);
          setSynced(true);
          setTimeout(() => { setSynced(false); setProgress(0); }, 3000);
          return 100;
        }
        return p + 4;
      });
    }, 60);
  };

  useEffect(() => {
    const t = setTimeout(() => triggerSync(), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="featured-card rounded-2xl p-6 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/5">
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 bg-[#4285F4]" />
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M12 8v8M8 12l4-4 4 4" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">Cloud Backup</h3>
            <p className="text-muted text-xs">Google Drive · Auto-sync</p>
          </div>
        </div>

        {/* Drive items */}
        <div className="space-y-2 flex-1">
          {[
            { label: "Sessions (247)", icon: "📍", size: "18.4 MB", done: true },
            { label: "Presets (10)", icon: "🎛️", size: "0.3 MB", done: true },
            { label: "Permissions (12)", icon: "📋", size: "1.1 MB", done: synced || progress > 60 },
            { label: "Finds Gallery", icon: "🖼️", size: "234 MB", done: synced },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-black/30 border border-white/5">
              <span className="text-base">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-white/80 truncate">{item.label}</span>
                  <span className="text-[10px] text-muted ml-2 shrink-0">{item.size}</span>
                </div>
                {!item.done && syncing && i === 3 && (
                  <div className="mt-1 h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#4285F4] rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
                  </div>
                )}
              </div>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${item.done ? "bg-green-500/20" : "bg-white/5"}`}>
                {item.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00FF6A" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg>}
              </div>
            </div>
          ))}
        </div>

        <button onClick={triggerSync}
          className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
          style={{
            background: synced ? "rgba(0,255,106,0.12)" : syncing ? "rgba(66,133,244,0.12)" : "rgba(66,133,244,0.15)",
            color: synced ? "#00FF6A" : "#4285F4",
            border: `1px solid ${synced ? "rgba(0,255,106,0.3)" : "rgba(66,133,244,0.3)"}`,
          }}>
          {synced ? "✓ All backed up" : syncing ? `Syncing… ${progress}%` : "Sync to Drive"}
        </button>
      </div>
    </div>
  );
}

function FeaturedTracksOverlay() {
  const [activeTracks, setActiveTracks] = useState([0, 1, 2]);
  const tracks = [
    { color: "#00FF6A", label: "Today", path: "M30,140 L30,80 L60,80 L60,40 L100,40 L100,90" },
    { color: "#00DDFF", label: "Apr 3", path: "M100,90 L140,90 L140,40 L180,40 L180,110" },
    { color: "#FFB000", label: "Mar 28", path: "M40,120 L80,120 L80,60 L120,60 L160,60 L200,60" },
    { color: "#FF6B4A", label: "Mar 22", path: "M50,100 L90,100 L90,50 L130,50 L170,50 L210,50 L250,50" },
    { color: "#B44AFF", label: "Mar 15", path: "M30,60 L70,60 L70,110 L110,110 L150,110 L190,110" },
    { color: "#FF22BB", label: "Mar 9", path: "M60,150 L100,150 L100,90 L140,90 L180,90 L220,90" },
    { color: "#BBDD00", label: "Mar 1", path: "M20,100 L60,100 L100,70 L140,70 L180,100 L220,100 L260,130" },
  ];

  return (
    <div className="featured-card rounded-2xl p-6 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/5">
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#00DDFF]/10 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00DDFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3l18 18M9 9l6 6M3 9h6M3 15h12" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">Track Overlay</h3>
            <p className="text-muted text-xs">Up to 7 past tracks simultaneously</p>
          </div>
        </div>

        {/* Map with overlaid tracks */}
        <div className="rounded-xl overflow-hidden border border-white/8 flex-1 min-h-[140px] relative bg-[#0A1520]">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 290 165" preserveAspectRatio="none">
            {tracks.map((track, i) =>
              activeTracks.includes(i) ? (
                <path key={i} d={track.path} fill="none" stroke={track.color} strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" opacity="0.75" />
              ) : null
            )}
          </svg>
          <div className="absolute top-2 right-2 bg-black/60 rounded-lg px-2 py-1">
            <span className="text-[10px] text-white/60">Uncovered area visible</span>
          </div>
        </div>

        {/* Track toggles */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tracks.map((track, i) => (
            <button key={i}
              onClick={() => setActiveTracks(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i])}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-200"
              style={{
                background: activeTracks.includes(i) ? `${track.color}18` : "rgba(255,255,255,0.04)",
                color: activeTracks.includes(i) ? track.color : "rgba(255,255,255,0.3)",
                border: `1px solid ${activeTracks.includes(i) ? track.color + "40" : "rgba(255,255,255,0.06)"}`,
              }}>
              <span className="w-2 h-2 rounded-full" style={{ background: activeTracks.includes(i) ? track.color : "rgba(255,255,255,0.2)" }} />
              {track.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedPerimeterGuard() {
  const [active, setActive] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => setPulse(p => !p), 1800);
    return () => clearInterval(t);
  }, [active]);

  return (
    <div className="featured-card rounded-2xl p-6 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/5">
      <div className={`absolute inset-0 transition-opacity duration-1000 ${pulse && active ? "opacity-100" : "opacity-0"}`}
        style={{ background: "radial-gradient(ellipse at center, rgba(255,107,74,0.06) 0%, transparent 70%)" }} />
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#FF6B4A]/15 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">Perimeter Guard</h3>
            <p className="text-muted text-xs">Vibrates + alerts at boundary</p>
          </div>
        </div>

        {/* Perimeter visualization */}
        <div className="rounded-xl overflow-hidden border border-white/8 flex-1 min-h-[140px] relative bg-[#0A1010]">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 290 150" preserveAspectRatio="none">
            {/* Perimeter boundary */}
            <polygon points="50,20 240,15 260,130 30,135"
              fill="rgba(255,107,74,0.06)" stroke="#FF6B4A" strokeWidth="1.5"
              strokeDasharray="6 4" opacity="0.8" />
            {/* Safe zone fill pulse */}
            {active && (
              <polygon points="50,20 240,15 260,130 30,135"
                fill={pulse ? "rgba(255,107,74,0.08)" : "rgba(255,107,74,0.02)"}
                stroke="none" style={{ transition: "fill 1s ease" }} />
            )}
            {/* Detector position — near boundary */}
            <circle cx="235" cy="50" r="6" fill="#FF6B4A" opacity="0.9">
              {active && <animate attributeName="r" values="6;10;6" dur="1.8s" repeatCount="indefinite" />}
              {active && <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.8s" repeatCount="indefinite" />}
            </circle>
            <circle cx="235" cy="50" r="3" fill="white" opacity="0.9" />
            {/* Track path inside */}
            <polyline points="80,100 80,60 120,60 160,60 200,60 235,50"
              fill="none" stroke="#00FF6A" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          </svg>
          <div className={`absolute top-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-500 ${pulse && active ? "bg-red-500/20 text-red-400" : "bg-[#FF6B4A]/15 text-[#FF6B4A]"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${pulse && active ? "bg-red-400 animate-pulse" : "bg-[#FF6B4A]"}`} />
            {pulse && active ? "BOUNDARY WARNING" : "GUARD ACTIVE"}
          </div>
        </div>

        <p className="text-muted text-xs mt-4 leading-relaxed">
          Draw any boundary polygon on the map. Get haptic vibration alerts when approaching and audio signal when outside.
        </p>
      </div>
    </div>
  );
}

function FeaturedPermissionManager() {
  const sites = [
    { name: "Thornfield Farm", status: "approved", expiry: "Jun 2026", boundary: true, letter: true },
    { name: "Meadow Creek Estate", status: "pending", expiry: "-", boundary: false, letter: true },
    { name: "Old Mill Site", status: "approved", expiry: "Sep 2025", boundary: true, letter: true },
    { name: "Ridgefield Commons", status: "expiring", expiry: "Apr 2026", boundary: true, letter: false },
  ];
  const statusColor = { approved: "#00FF6A", pending: "#FFB000", expiring: "#FF6B4A" } as Record<string, string>;
  const statusLabel = { approved: "Active", pending: "Pending", expiring: "Expiring" } as Record<string, string>;

  return (
    <div className="featured-card rounded-2xl p-6 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/5">
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 bg-accent" />
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00FF6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">Permission Manager</h3>
            <p className="text-muted text-xs">Boundary · Calendar · PDF letter</p>
          </div>
        </div>

        <div className="space-y-2 flex-1">
          {sites.map((site, i) => (
            <div key={i} className="px-3 py-2.5 rounded-xl bg-black/30 border border-white/5 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: statusColor[site.status], boxShadow: `0 0 6px ${statusColor[site.status]}60` }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/85 truncate">{site.name}</span>
                  <span className="text-[10px] font-bold ml-2 shrink-0" style={{ color: statusColor[site.status] }}>
                    {statusLabel[site.status]}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-[10px] text-muted">Exp: {site.expiry}</span>
                  {site.boundary && <span className="text-[10px] text-white/30">📍 Boundary</span>}
                  {site.letter && <span className="text-[10px] text-white/30">📄 PDF</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <div className="flex-1 py-2 rounded-xl bg-accent/10 border border-accent/20 text-center text-xs font-semibold text-accent">
            + Add Site
          </div>
          <div className="flex-1 py-2 rounded-xl bg-white/5 border border-white/8 text-center text-xs font-semibold text-muted">
            Export PDF
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedOldMap() {
  const [opacity, setOpacity] = useState(65);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    if (!animating) return;
    let dir = 1;
    const interval = setInterval(() => {
      setOpacity(p => {
        const next = p + dir * 1.5;
        if (next >= 90) dir = -1;
        if (next <= 30) dir = 1;
        return Math.max(30, Math.min(90, next));
      });
    }, 50);
    return () => clearInterval(interval);
  }, [animating]);

  return (
    <div className="featured-card rounded-2xl p-6 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/5">
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#FFB000]/10 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFB000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">U.S. Old Map Overlay</h3>
            <p className="text-muted text-xs">USGS Historical Topographic Collection</p>
          </div>
        </div>

        {/* Map comparison visualization */}
        <div className="rounded-xl overflow-hidden border border-white/8 flex-1 min-h-[140px] relative bg-[#0A1520]">
          {/* Modern map base */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0d1c2e, #0a1520, #0e2030)" }}>
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          </div>
          {/* Historical overlay (sepia-toned) */}
          <div className="absolute inset-0 transition-opacity duration-200"
            style={{ opacity: opacity / 100, background: "linear-gradient(135deg, #3d2b00, #5a3e00, #3d2b00)" }}>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 290 150" preserveAspectRatio="none">
              {/* Old contour lines */}
              <path d="M20,30 Q80,20 140,35 Q200,50 270,30" fill="none" stroke="#c8960c" strokeWidth="1" opacity="0.5" />
              <path d="M10,60 Q70,45 130,65 Q190,85 270,60" fill="none" stroke="#c8960c" strokeWidth="1" opacity="0.5" />
              <path d="M10,90 Q70,75 130,95 Q190,115 270,90" fill="none" stroke="#c8960c" strokeWidth="1" opacity="0.5" />
              <path d="M10,120 Q70,105 130,125 Q190,145 270,120" fill="none" stroke="#c8960c" strokeWidth="1" opacity="0.4" />
              {/* Old road */}
              <path d="M30,75 L260,75" stroke="#8B6914" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
              {/* Old building markers */}
              {[[80, 50], [150, 45], [200, 70], [120, 90]].map(([x, y], i) => (
                <rect key={i} x={x - 4} y={y - 4} width="8" height="8" fill="none" stroke="#c8960c" strokeWidth="1" opacity="0.7" />
              ))}
              <text x="55" y="140" fontSize="8" fill="#c8960c" opacity="0.7" fontFamily="serif">USGS 1892</text>
            </svg>
          </div>
          {/* Separator line */}
          <div className="absolute top-0 bottom-0" style={{ left: "50%", width: "2px", background: "rgba(255,176,0,0.5)", boxShadow: "0 0 8px rgba(255,176,0,0.5)" }} />
          <div className="absolute top-2 left-2 text-[10px] bg-black/60 px-2 py-0.5 rounded text-white/60">Modern</div>
          <div className="absolute top-2 right-2 text-[10px] bg-black/60 px-2 py-0.5 rounded text-[#FFB000]">Historic</div>
        </div>

        {/* Opacity slider */}
        <div className="mt-4">
          <div className="flex justify-between text-[10px] text-muted mb-1.5">
            <span>Historical overlay opacity</span>
            <span className="text-[#FFB000] font-semibold">{Math.round(opacity)}%</span>
          </div>
          <input type="range" min={0} max={100} value={opacity}
            onChange={e => { setAnimating(false); setOpacity(Number(e.target.value)); }}
            className="w-full accent-[#FFB000] h-1.5 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

function FeaturedOfflineMaps() {
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const mapTypes = ["Satellite", "Terrain", "Topographic", "Street"];
  const [selectedType, setSelectedType] = useState(0);

  const startDownload = () => {
    if (downloading || done) return;
    setDownloading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setDownloading(false);
          setDone(true);
          setTimeout(() => { setDone(false); setProgress(0); }, 3500);
          return 100;
        }
        return p + 3;
      });
    }, 60);
  };

  useEffect(() => {
    const t = setTimeout(() => startDownload(), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="featured-card rounded-2xl p-6 bg-surface relative overflow-hidden group h-full flex flex-col border border-white/5">
      <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl opacity-10 bg-[#00DDFF]" />
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#00DDFF]/10 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00DDFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 19H9a7 7 0 110-14h8.5" /><path d="M21 12h-4M21 12l-3-3M21 12l-3 3" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">Offline Maps</h3>
            <p className="text-muted text-xs">4 map types · No cell needed</p>
          </div>
        </div>

        {/* Map type selector */}
        <div className="grid grid-cols-4 gap-1.5 mb-4">
          {mapTypes.map((t, i) => (
            <button key={t} onClick={() => setSelectedType(i)}
              className="py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition-all"
              style={{
                background: selectedType === i ? "rgba(0,221,255,0.15)" : "rgba(255,255,255,0.04)",
                color: selectedType === i ? "#00DDFF" : "rgba(255,255,255,0.35)",
                border: `1px solid ${selectedType === i ? "rgba(0,221,255,0.4)" : "rgba(255,255,255,0.06)"}`,
              }}>{t}</button>
          ))}
        </div>

        {/* Area selection visual */}
        <div className="rounded-xl border border-white/8 flex-1 min-h-[100px] relative overflow-hidden bg-[#0A1520]">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          {/* Selected area */}
          <div className="absolute bg-[#00DDFF]/15 border-2 border-dashed border-[#00DDFF]/50 rounded-lg"
            style={{ top: "20%", left: "20%", width: "60%", height: "60%" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[#00DDFF] text-xs font-bold">148 MB</div>
                <div className="text-white/40 text-[9px]">~12km²</div>
              </div>
            </div>
          </div>
          {/* Corners */}
          {[["top-[18%] left-[18%]", "top-left"], ["top-[18%] right-[18%]", "top-right"],
            ["bottom-[18%] left-[18%]", "bottom-left"], ["bottom-[18%] right-[18%]", "bottom-right"]].map(([pos], i) => (
              <div key={i} className={`absolute w-3 h-3 bg-[#00DDFF] rounded-sm ${pos}`} />
            ))}
        </div>

        {/* Download progress */}
        <div className="mt-4">
          {(downloading || done) && (
            <div className="mb-3">
              <div className="flex justify-between text-[10px] text-muted mb-1">
                <span>{done ? "Downloaded!" : "Downloading tiles…"}</span>
                <span className="text-[#00DDFF] font-semibold">{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#00DDFF] rounded-full transition-all duration-100" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}
          <button onClick={startDownload}
            className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
            style={{
              background: done ? "rgba(0,255,106,0.12)" : "rgba(0,221,255,0.12)",
              color: done ? "#00FF6A" : "#00DDFF",
              border: `1px solid ${done ? "rgba(0,255,106,0.3)" : "rgba(0,221,255,0.3)"}`,
            }}>
            {done ? "✓ Ready offline" : downloading ? "Downloading…" : "Download Area"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── SECONDARY FEATURE CARDS ─── */

const secondaryFeatures = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2" /></svg>,
    title: "Log Finds with Media",
    description: "Log finds with photo, video, and audio notes. Full find details — name, value, weight, type.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
    title: "Quick Pin Drop",
    description: "One-tap find logging. Drop a pin instantly, add details later when you have time.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    title: "Road Back Indicator",
    description: "Dotted straight line to your session start with live distance readout. Never get lost.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>,
    title: "Sessions Comparison",
    description: "Overlay up to 4 sessions or use split view side-by-side to track progress.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>,
    title: "10 Detector Presets",
    description: "Keep 10 configurations ready with QR code sharing, import & export. One tap to switch.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>,
    title: "Export / Import Tracks",
    description: "Individual or batch export of paths. GPX, KML, CSV. Full Google Earth support.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>,
    title: "Night Vision Mode",
    description: "Full red-light display for late dusk and early dawn detecting. Eyes stay adapted.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49M20.49 3.51a12 12 0 010 16.97M3.51 20.49a12 12 0 010-16.97" /></svg>,
    title: "On-Screen Compass",
    description: "Live magnetic compass overlay. Know your heading without taking your eyes off the ground.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
    title: "On-Screen Ruler",
    description: "10cm / 4in ruler displayed on screen. Useful for measuring finds in the field.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 19M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6" /><line x1="2" y1="20" x2="2.01" y2="20" /></svg>,
    title: "Detecting Forecast",
    description: "Weather-based hunt score. Soil moisture, temp, wind — all into one go/no-go indicator.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 19h20L12 2z" /><line x1="12" y1="9" x2="12" y2="13" /><circle cx="12" cy="16" r="0.5" fill="currentColor" /></svg>,
    title: "Tide Table",
    description: "Built-in tidal data for beach hunters. Know when to hit the low tide gold zones.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
    title: "Coin Caliper",
    description: "Put a coin on screen, adjust slider until the app identifies it by diameter. Works on dirty or corroded coins.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    title: "Nearby Sites",
    description: "Historical landmarks, old settlements, and notable sites around your current position.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><rect x="7" y="7" width="3" height="9" rx="1" fill="currentColor" opacity="0.3" /><rect x="14" y="5" width="3" height="11" rx="1" fill="currentColor" opacity="0.5" /></svg>,
    title: "Heatmap",
    description: "Rainbow gradient density overlay showing exactly where you've covered ground and where gaps remain.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.2" /></svg>,
    title: "Session History & Stats",
    description: "Per-session and overall career stats. Distance, finds, duration, averages, and personal bests.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
    title: "Tutorials & Community",
    description: "In-app guides, help centre, and direct links to the SweepTrack community on the website.",
  },
];

/* ─── Section helpers ─── */

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function StaggerCard({ children, index }: { children: React.ReactNode; index: number }) {
  const { ref, visible } = useReveal(0.05);
  return (
    <div ref={ref} className={`stagger-card ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${(index % 5) * 60}ms` : "0ms" }}>
      {children}
    </div>
  );
}

/* ─── Main export ─── */

export default function FeaturesAll() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <RevealSection>
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">Complete Feature Set</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for the{" "}
              <span className="text-accent">Field. Not a Desk.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Every feature was designed in response to real detecting problems. No filler. No bloat. If it&apos;s here, a detectorist asked for it.
            </p>
          </div>
        </RevealSection>

        {/* ── FEATURED: Row 1 — GPS (large) + Cloud Backup ── */}
        <RevealSection>
          <div className="grid md:grid-cols-5 gap-5 mb-5">
            <div className="md:col-span-3 min-h-[360px]"><FeaturedGPS /></div>
            <div className="md:col-span-2 min-h-[360px]"><FeaturedCloudBackup /></div>
          </div>
        </RevealSection>

        {/* ── FEATURED: Row 2 — Track Overlay + Perimeter Guard ── */}
        <RevealSection>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="min-h-[340px]"><FeaturedTracksOverlay /></div>
            <div className="min-h-[340px]"><FeaturedPerimeterGuard /></div>
          </div>
        </RevealSection>

        {/* ── FEATURED: Row 3 — Permission Manager + Old Map + Offline Maps ── */}
        <RevealSection>
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            <div className="min-h-[360px]"><FeaturedPermissionManager /></div>
            <div className="min-h-[360px]"><FeaturedOldMap /></div>
            <div className="min-h-[360px]"><FeaturedOfflineMaps /></div>
          </div>
        </RevealSection>

        {/* ── Secondary features: compact grid ── */}
        <RevealSection>
          <div className="text-center mb-10">
            <p className="text-muted text-sm uppercase tracking-widest font-semibold">And much more</p>
            <h3 className="text-xl font-bold mt-2">Every tool a detectorist needs</h3>
          </div>
        </RevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {secondaryFeatures.map((feature, i) => (
            <StaggerCard key={feature.title} index={i}>
              <div className="h-full px-4 py-4 rounded-xl bg-surface/50 border border-white/[0.05] hover:border-accent/20 hover:bg-surface/80 transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/8 flex items-center justify-center text-accent shrink-0 mt-0.5 group-hover:bg-accent/15 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1 text-white/90 group-hover:text-white transition-colors">{feature.title}</h3>
                    <p className="text-muted text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </StaggerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
