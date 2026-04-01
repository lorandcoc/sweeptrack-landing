export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-accent"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <div>
              <span className="font-semibold">
                Sweep Track <span className="text-accent">Pro</span>
              </span>
              <span className="text-muted text-sm ml-2">by Loriba</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#screenshots" className="hover:text-foreground transition-colors">
              Screenshots
            </a>
            <a href="#themes" className="hover:text-foreground transition-colors">
              Themes
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Loriba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
