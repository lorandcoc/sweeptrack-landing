"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: t("header.nav_features"), href: "/#features" },
    { label: t("header.nav_screenshots"), href: "/#screenshots" },
    { label: t("header.nav_pricing"), href: "/#pricing" },
    { label: t("header.nav_faq"), href: "/#faq" },
    { label: t("header.nav_guides"), href: "/blog" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050510]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
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
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="/#download"
            className="text-sm font-semibold px-5 py-2 rounded-xl bg-accent text-[#050510] hover:bg-accent-dim transition-all hover:scale-[1.03] active:scale-[0.97]"
          >
            {t("comingsoon.button")}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-muted hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] border-t border-white/5" : "max-h-0"
        } bg-[#050510]/95 backdrop-blur-xl`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-1 border-t border-white/5">
            <LanguageToggle />
          </div>
          <a
            href="/#download"
            className="font-semibold px-4 py-2.5 rounded-xl bg-accent text-[#050510] text-center hover:bg-accent-dim transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {t("comingsoon.button")}
          </a>
        </nav>
      </div>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}
