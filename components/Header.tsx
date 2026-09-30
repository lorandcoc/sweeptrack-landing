"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useI18n, LOCALES } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";
import { useSitePlayUrl } from "./GooglePlayButton";

/**
 * Smooth-scroll to the hash target without modifying window.location.hash.
 * Avoids polluting browser history so the system back button still leaves
 * the site instead of popping to a previous in-page anchor.
 */
function scrollToHash(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href") || "";
  const id = href.replace(/^[/#]+/, "");
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const { t } = useI18n();
  const playUrl = useSitePlayUrl();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The homepage lives at "/" in English and at "/<locale>" otherwise.
  const pathname = usePathname() || "/";
  const onHome = pathname === "/" || LOCALES.some((l) => pathname === `/${l.code}`);
  const isActive = (href: string) => (href === "/" ? onHome : pathname.startsWith(href));

  // "Home" is spelled out: many visitors don't know the logo leads home.
  const navLinks = [
    { label: t("header.nav_home"), href: "/" },
    { label: t("header.nav_features"), href: "/features" },
    { label: t("header.nav_overlays"), href: "/overlays" },
    { label: t("header.nav_radar"), href: "/radar" },
    { label: t("header.nav_pricing"), href: "/pricing" },
    { label: t("header.nav_guides"), href: "/blog" },
  ];

  useEffect(() => {
    let pending = false;

    const apply = () => {
      pending = false;
      setScrolled(window.scrollY > 20);
    };

    const onScroll = () => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on scroll or Escape so the menu doesn't trap users who
  // changed their mind. Standard a11y pattern for disclosure menus.
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050510]/95 backdrop-blur-md border-b border-white/[0.08]"
          : "bg-[#050510] border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center group" aria-label="SweepTrack Pro">
          <Image
            src="/logo.svg"
            alt="SweepTrack Pro"
            width={378}
            height={95}
            priority
            className="h-9 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={scrollToHash}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                isActive(link.href)
                  ? "bg-[var(--st-accent-faint)] text-accent"
                  : "text-muted hover:bg-white/[0.05] hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <span className="ml-2">
            <LanguageToggle />
          </span>
          <a
            href={playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 text-sm font-semibold px-4 py-2 rounded-lg bg-accent text-[#050510] whitespace-nowrap hover:bg-accent-dim transition-colors"
          >
            {t("cta.google_play")}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="xl:hidden text-muted hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-nav"
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[520px] border-t border-white/5" : "max-h-0"
        } bg-[#050510]/95 backdrop-blur-xl`}
      >
        <nav className="flex flex-col px-6 py-4 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`-mx-3 rounded-lg px-3 py-2 transition-colors ${
                isActive(link.href) ? "bg-[var(--st-accent-faint)] text-accent" : "text-muted hover:text-foreground"
              }`}
              onClick={(e) => {
                setMenuOpen(false);
                scrollToHash(e);
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-1 border-t border-white/5">
            <LanguageToggle />
          </div>
          <a
            href={playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold px-4 py-2.5 rounded-lg bg-accent text-[#050510] text-center hover:bg-accent-dim transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t("cta.google_play")}
          </a>
        </nav>
      </div>

    </header>
  );
}
