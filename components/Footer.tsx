export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center">
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <span className="font-semibold text-sm">
              SweepTrack <span className="text-accent">Pro</span>
            </span>
            <span className="text-muted text-xs">by Loriba</span>
          </div>

          {/* Nav + Legal */}
          <div className="flex items-center gap-5 text-xs text-muted">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#screenshots" className="hover:text-foreground transition-colors">Screenshots</a>
            <a href="#themes" className="hover:text-foreground transition-colors">Themes</a>
            <span className="w-px h-3 bg-white/10" />
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Loriba
          </p>
        </div>
      </div>
    </footer>
  );
}
