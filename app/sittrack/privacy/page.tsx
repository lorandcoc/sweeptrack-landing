import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SitTrack — Politica de confidențialitate",
  description:
    "Politica de confidențialitate SitTrack. Toate datele rămân pe telefonul tău — aplicația nu are conturi, nu trimite datele tale personale sau locația către niciun server.",
  robots: { index: true, follow: false },
};

/**
 * Standalone privacy policy for the SitTrack Android app
 * (com.sittrack.native). Self-contained on purpose: SitTrack is a separate
 * app from SweepTrack Pro, so this page deliberately does not reuse the
 * SweepTrack LegalPage/i18n machinery — Romanian is the app's primary
 * language, with an English summary below.
 */
export default function SitTrackPrivacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-[15px] leading-7 text-neutral-200">
      <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500">
        SitTrack · aplicație Android · de Loriba
      </p>
      <h1 className="mb-1 text-3xl font-bold text-white">
        Politica de confidențialitate
      </h1>
      <p className="mb-10 text-sm text-neutral-400">
        Ultima actualizare: 3 iulie 2026
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        Pe scurt
      </h2>
      <p className="mb-4">
        SitTrack este o aplicație gratuită, fără reclame și fără conturi.
        <strong className="text-white">
          {" "}
          Toate datele tale rămân pe telefonul tău.
        </strong>{" "}
        Aplicația nu trimite locația, descoperirile, rapoartele sau datele tale
        personale către serverele noastre — nu avem servere care să le
        primească.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        Ce date prelucrează aplicația (doar pe dispozitiv)
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6">
        <li>
          <strong className="text-white">Locația</strong> — folosită pentru
          hartă, verificările „pot să caut aici?" și alarma de proximitate
          (inclusiv în fundal, dacă activezi monitorizarea). Este procesată
          exclusiv pe telefon. SitTrack nu îți înregistrează traseul.
        </li>
        <li>
          <strong className="text-white">Datele din rapoartele DJC</strong> —
          nume, CNP, adresă, telefon, email, plus detaliile descoperirii. Se
          salvează doar local și se tipăresc doar în PDF-urile generate de
          tine, pe telefonul tău. Tu decizi cui le trimiți.
        </li>
        <li>
          <strong className="text-white">
            Descoperiri, spoturi, măsurători, istoric alarme/verificări
          </strong>{" "}
          — stocate într-o bază de date locală. Copiile de rezervă se fac doar
          la cererea ta, într-un fișier ales de tine.
        </li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        Ce descarcă aplicația de pe internet
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6">
        <li>
          Seturi de date publice: Repertoriul Arheologic Național (RAN/INP),
          ariile Natura 2000 (EEA) și zone protejate din OpenStreetMap.
          Descărcarea nu transmite date personale.
        </li>
        <li>
          Hărțile Google Maps și stratul istoric eHarta — furnizorii de hărți
          își aplică propriile politici (
          <a
            href="https://policies.google.com/privacy"
            className="text-emerald-400 underline"
          >
            Google
          </a>
          ).
        </li>
      </ul>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        Diagnostic — doar dacă îl activezi tu
      </h2>
      <p className="mb-4">
        Raportarea erorilor (crash reporting) și contorul anonim de utilizare
        sunt <strong className="text-white">dezactivate implicit</strong>. Dacă
        le pornești din Meniu → Confidențialitate, rapoartele de eroare nu
        conțin datele tale personale, locația sau conținutul rapoartelor. Le
        poți opri oricând.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        Ștergerea datelor
      </h2>
      <p className="mb-4">
        Poți șterge orice element din aplicație (rapoarte, descoperiri,
        istoric) sau totul dintr-o dată: Setări Android → Aplicații → SitTrack
        → Șterge datele, ori pur și simplu dezinstalează aplicația. Nu există
        nicio copie pe server care să trebuiască ștearsă.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">Contact</h2>
      <p className="mb-4">
        Întrebări despre confidențialitate:{" "}
        <a
          href="mailto:lorand.83@gmail.com"
          className="text-emerald-400 underline"
        >
          lorand.83@gmail.com
        </a>
      </p>

      <hr className="my-10 border-neutral-800" />

      <h2 className="mb-3 text-xl font-semibold text-white">
        English summary
      </h2>
      <p className="mb-4 text-neutral-300">
        SitTrack is a free Android app with no ads and no accounts.{" "}
        <strong className="text-white">
          All your data stays on your device
        </strong>
        : location (including optional background location for the proximity
        alarm) is processed on-device and never transmitted; personal details
        entered for legal find reports (name, ID number, address, contact) are
        stored locally and printed only into PDFs you generate and share
        yourself. The app downloads public heritage datasets (RAN, Natura
        2000, OSM) and map tiles (Google Maps, eHarta); those downloads carry
        no personal data. Crash reporting and anonymous usage counting are{" "}
        <strong className="text-white">off by default</strong> and opt-in. To
        delete everything, clear the app&apos;s data or uninstall it — there is
        no server-side copy. Contact:{" "}
        <a
          href="mailto:lorand.83@gmail.com"
          className="text-emerald-400 underline"
        >
          lorand.83@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
