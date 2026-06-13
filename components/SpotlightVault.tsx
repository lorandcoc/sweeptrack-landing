"use client";

import { useReveal } from "./useReveal";
import { useI18n, type TranslationKey } from "@/lib/i18n";

/*
 * Permission Vault spotlight — the signing ceremony.
 * A bright A4 permission letter settles onto the dark stage, the landowner's
 * signature draws itself, an APPROVED stamp thumps down, and two field chips
 * confirm the result. Plays once per visit (useReveal unobserves after the
 * first intersection). All animation lives in svx-* CSS classes.
 */

/* New key — reported to the integrator with its English value ("Exhibit A").
   Widened through string so the file type-checks before the key lands in en.json. */
const EXHIBIT_KEY = "spotlight.vault_demo_exhibit" as string as TranslationKey;

const BULLET_KEYS = [
  "spotlight.vault_b1",
  "spotlight.vault_b2",
  "spotlight.vault_b3",
  "spotlight.vault_b4",
] as const;

/** Faint grey "text line" placeholder on the paper. Decorative only. */
function Bar({ w, h = 5 }: { w: string; h?: number }) {
  return (
    <div
      className="rounded-full bg-[rgba(21,32,58,0.14)]"
      style={{ width: w, height: h }}
      aria-hidden="true"
    />
  );
}

export default function SpotlightVault() {
  const { t } = useI18n();
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-10 items-center reveal ${visible ? "visible svx-play" : ""}`}
    >
      {/* ── Copy — first in DOM (mobile first), right column on desktop ── */}
      <div className="md:order-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
          {t("spotlight.vault_kicker")}
        </p>
        <h3 className="font-display text-2xl md:text-3xl leading-tight mb-4 [text-wrap:balance]">
          {t("spotlight.vault_title")}
        </h3>
        <p className="text-muted text-base leading-relaxed mb-7 max-w-prose">
          {t("spotlight.vault_desc")}
        </p>
        <ul className="space-y-3.5">
          {BULLET_KEYS.map((k) => (
            <li key={k} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <span className="text-sm md:text-[15px] leading-relaxed text-white/85">{t(k)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Demo — left column on desktop ── */}
      <div className="md:order-1">
        <div className="svx-stage px-6 py-12 sm:px-10 sm:py-14">
          {/* Live demo badge */}
          <span className="st-hud absolute left-4 top-4 z-10">
            <span className="st-hud__dot" />
            <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {t("spotlight.demo_badge")}
            </span>
          </span>

          {/* The A4 letter — the one bright object on the page */}
          <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[330px]">
            <div className="svx-doc svx-paper relative w-full aspect-[210/297] overflow-hidden">
              <div className="flex h-full flex-col p-[7%]">
                {/* Letterhead */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] bg-[#00CC55]">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#06250F" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                      </svg>
                    </span>
                    <div className="space-y-1">
                      <Bar w="64px" h={5} />
                      <Bar w="40px" h={4} />
                    </div>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.08em] text-[rgba(21,32,58,0.5)]">
                    12.06.2026
                  </span>
                </div>

                {/* Addressee */}
                <div className="mt-[6%] space-y-1.5">
                  <Bar w="46%" />
                  <Bar w="34%" />
                  <Bar w="40%" />
                </div>

                {/* Body copy lines */}
                <div className="mt-[5%] space-y-1.5">
                  <Bar w="100%" />
                  <Bar w="96%" />
                  <Bar w="62%" />
                </div>

                {/* Map exhibit — satellite thumbnail with the agreed boundary */}
                <div className="mt-[5%]">
                  <div className="overflow-hidden rounded-md border border-[rgba(21,32,58,0.18)]">
                    <svg viewBox="0 0 200 96" className="block w-full h-auto" aria-hidden="true">
                      <rect width="200" height="96" fill="#101B13" />
                      <rect x="0" y="0" width="92" height="54" fill="#16281A" />
                      <rect x="96" y="18" width="104" height="78" fill="#13231C" />
                      <rect x="18" y="58" width="72" height="38" fill="#1A2E1E" />
                      <path d="M0 70 L200 52" stroke="rgba(220,220,200,0.16)" strokeWidth="2.4" />
                      <path d="M118 0 L134 96" stroke="rgba(220,220,200,0.09)" strokeWidth="1.4" />
                      <polygon
                        points="44,18 128,12 162,40 126,78 58,74 30,46"
                        fill="rgba(0,255,106,0.13)"
                        stroke="#00E866"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      {[
                        [44, 18],
                        [128, 12],
                        [162, 40],
                        [126, 78],
                        [58, 74],
                        [30, 46],
                      ].map(([x, y]) => (
                        <rect key={`${x}-${y}`} x={x - 1.6} y={y - 1.6} width="3.2" height="3.2" fill="#00FF6A" />
                      ))}
                      <circle cx="95" cy="45" r="2.8" fill="#00FF6A" />
                      <circle cx="95" cy="45" r="6.5" fill="none" stroke="rgba(0,255,106,0.4)" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(21,32,58,0.55)]">
                    <span>{t(EXHIBIT_KEY)}</span>
                    <span>47°41′N 23°35′E</span>
                  </div>
                </div>

                {/* Closing lines */}
                <div className="mt-[5%] space-y-1.5">
                  <Bar w="92%" />
                  <Bar w="54%" />
                </div>

                {/* Signature block + stamp */}
                <div className="relative mt-auto pt-[5%]">
                  <span className="svx-stamp">{t("spotlight.vault_demo_status")}</span>
                  <svg viewBox="0 0 200 56" className="block h-auto w-[72%]" fill="none" aria-hidden="true">
                    <path
                      className="svx-sig"
                      pathLength={1}
                      d="M10 38 C14 16 30 8 33 20 C36 31 22 42 17 36 C13 31 26 26 40 28 C52 30 55 18 63 20 C69 22 67 32 75 30 C83 28 84 18 92 21 C98 23 97 31 105 29 C114 26 117 17 126 21 C132 24 131 32 140 29 C151 25 160 22 172 26 M28 46 C70 40 128 40 188 35"
                      stroke="#1B2A4A"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="h-px w-[78%] bg-[rgba(21,32,58,0.35)]" />
                  <div className="mt-1.5 h-[5px] w-[34%] rounded-full bg-[rgba(21,32,58,0.14)]" />
                </div>
              </div>

              {/* Encrypted-at-rest hint */}
              <svg
                className="absolute bottom-3 right-3 opacity-35"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#15203A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
                <circle cx="12" cy="16" r="1" />
              </svg>
            </div>
          </div>

          {/* Result chips */}
          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="svx-chip svx-chip--sign">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              </svg>
              {t("spotlight.vault_demo_sign")}
            </span>
            <span className="svx-chip svx-chip--expiry">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 01-3.46 0" />
              </svg>
              {t("spotlight.vault_demo_expiry")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
