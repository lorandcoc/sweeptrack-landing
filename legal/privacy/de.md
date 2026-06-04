# Datenschutzerklärung

**SweepTrack Pro** — GPS-Tracking-Anwendung für die Metalldetektion

Inkrafttreten: 12. Mai 2026 · Letzte Aktualisierung: 4. Juni 2026

Betrieben von: Coc Lorand Adrian P.F.A., firmierend unter „Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Einführung

Diese Datenschutzerklärung erläutert, wie SweepTrack Pro („die App") und die Website unter sweeptrack.pro („die Website") Ihre Informationen sammeln, verwenden, speichern und schützen. Wir setzen uns für den Schutz Ihrer Privatsphäre ein und sorgen für Transparenz bei unseren Datenpraktiken.

Die App basiert auf einer **Privacy-First-Architektur**: Alle Detektionsdaten werden lokal auf Ihrem Gerät gespeichert, wir betreiben keine Backend-Server, die Ihre Detektionsdaten speichern, und wir sammeln, übertragen oder verkaufen Ihre personenbezogenen Detektionsdaten nicht. Eine geringe Menge an Daten verlässt Ihr Gerät nur für die vom Nutzer initiierten Funktionen, die in den Abschnitten 3.2 und 3.3 beschrieben werden (Echtzeit-API-Funktionen, optionale Sicherung, optionale Diagnose und optionales Feedback). Die Website wird separat betrieben und hat ihre eigenen Datenpraktiken, die in Abschnitt 4 beschrieben werden.

## 2. Verantwortlicher für die Datenverarbeitung

Im Sinne der EU-Datenschutz-Grundverordnung (GDPR) und des rumänischen Datenschutzgesetzes (Gesetz 190/2018) ist der Verantwortliche für die Datenverarbeitung:

**Coc Lorand Adrian P.F.A.** (firmierend als Loriba)
CUI: 41299288 · Reg. F24/646/2019
E-Mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Daten, die wir sammeln (Android-App)

### 3.1 Lokal auf Ihrem Gerät gespeicherte Daten

Die folgenden Daten werden von Ihnen erstellt und **ausschließlich auf Ihrem Gerät** gespeichert. Wir haben niemals Zugriff auf diese Daten, es sei denn, Sie geben sie ausdrücklich frei.

**Standort- und Sitzungsdaten:**

* GPS-Koordinaten (Breitengrad, Längengrad) während aktiver Tracking-Sitzungen
* Geschwindigkeits-, Höhen-, Kurs- und Genauigkeitswerte von Gerätesensoren
* Sitzungs-Metadaten: Name, Datum, Start-/Endzeit, Dauer, Entfernung, Tags
* Pfadkoordinaten mit Zeitstempeln
* Standortnamen (über Reverse-Geocoding erhalten)

**Fund- und Entdeckungsaufzeichnungen:**

* Fundtyp (Schatz, Gold, Münze, Relikt, Schmuck, Müll, Unsortiert/Schnellablage)
* Fundort (GPS-Koordinaten zum Zeitpunkt der Protokollierung)
* Optionale Metadaten: Name, Notizen, Tiefe, geschätzter Wert, Gewicht
* Medienanhänge: Fotos und Audioaufnahmen

**Daten des Berechtigungstresors:**

* Standortnamen und Standorte
* Namen und Kontaktinformationen der Landeigentümer
* Genehmigungsnummern, Ausstellungsdaten, Ablaufdaten
* Standortgrenzkoordinaten (Polygon)
* Digitale Signaturen (SVG-Format)
* Benutzerdefinierte Tags und Notizen

**Wegpunkte:** Von Ihnen platzierte Kartenmarkierungen — Koordinaten, Name, Kategorie und optionale Notizen.

**Andere lokale Daten:** Detektor-Voreinstellungskonfigurationen, App-Präferenzen (Thema, Einheiten, Sprache, Karteneinstellungen) und mit Sitzungen verknüpfte Wetter-Snapshots.

### 3.2 Vorübergehend verarbeitete Daten (nicht gespeichert)

Die folgenden Daten werden zur Echtzeit-Funktionalität an Drittanbieter-APIs gesendet und **werden weder von uns noch von diesen Diensten über die unmittelbare Anfrage hinaus gespeichert**:

* Ungefähre GPS-Koordinaten an Open-Meteo für Wettervorhersagen und Höhendaten
* Koordinaten, die über den Plattform-Geocoder von Android (auf den meisten Geräten von Google Play Services bereitgestellt) in Ortsnamen aufgelöst werden, zum Reverse-Geocoding — verwendet, um Sitzungen und Funde mit einem Ortsnamen zu versehen
* Ungefähre GPS-Koordinaten an Overpass API zur Entdeckung nahegelegener historischer Points-of-Interest
* Ungefähre GPS-Koordinaten an Wikipedia API für die geografische Suche nach Artikeln in der Nähe
* Gezeitenstationskennungen an NOAA für Gezeitenvorhersagen
* Standortsuchanfragen an Open-Meteo Geocoding zur Namenssuche von Orten
* Kartenkachel-Anfragen (die das ungefähre Gebiet der von Ihnen angezeigten Karte verraten) an den Kachelanbieter des aktiven Kartentyps: Esri/ArcGIS (Satellitenbilder und USGS-topografische Karten), OpenStreetMap und OpenTopoMap (Offline-/herunterladbare Kartenpakete) und — für das rumänische historische „Alte Karte"-Overlay — einen von uns betriebenen Caching-Proxy auf Cloudflare, der Kacheln von geo-spatial.org (eHarta) abruft. Die standardmäßige Google-Kartenbasis ist unter Google Maps SDK in Abschnitt 3.3 abgedeckt

### 3.3 Von Drittanbieterdiensten verarbeitete Daten

**Google Maps SDK:** Der Standort Ihres Geräts wird von Google Maps zur Kartenanzeige verarbeitet. Unterliegt der [Google-Datenschutzerklärung](https://policies.google.com/privacy).

**Google Sign-In und Google Drive (Optional):** Wenn Sie Google Drive-Sicherungen aktivieren, wird die E-Mail-Adresse Ihres Google-Kontos lokal gespeichert, um das authentifizierte Konto zu identifizieren. Sicherungsdaten werden in Ihr eigenes Google Drive-Konto hochgeladen. Wir haben keinen Zugriff auf Ihr Google Drive.

**RevenueCat (Abonnementverwaltung):** Ein anonymer, zufällig generierter App-Benutzeridentifikator wird zur Abonnementverifizierung verwendet. Es werden keine persönlichen Informationen weitergegeben. Unterliegt der [Datenschutzerklärung von RevenueCat](https://www.revenuecat.com/privacy).

**Firebase Analytics und Crashlytics (Optional — standardmäßig deaktiviert):** Zwei Google-Firebase-SDKs sind in der App integriert, aber **beide bleiben inaktiv, bis Sie ausdrücklich zustimmen** — entweder über die Einwilligungsabfrage beim ersten Start oder unter **Einstellungen → Datenschutz → Diagnose**. Bis zur Zustimmung werden keine Ereignisse gesendet und keine Absturzberichte hochgeladen. Sie können Ihre Einwilligung jederzeit widerrufen; der Widerruf greift ab dem nächsten Ereignis. Debug-Builds aktivieren Crashlytics niemals.

Wenn aktiviert:

* **Firebase Analytics** protokolliert acht aggregierte Ereignisnamen mit nicht-identifizierenden Parametern: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Die Ereignis-Nutzdaten enthalten **niemals** GPS-Koordinaten, Adressen, Fundnamen, Fotos, Audioaufnahmen, Tresordaten oder andere personenbezogene Informationen — ausschließlich Zähler, Dauern, Entfernungen, Fundtypen (nur die Kategorie) und Funktions-Identifikatoren. Das `find_logged`-Ereignis meldet den Typ als grobe Kategorie (`valuable`, `find`, `trash`, `unsorted` oder `other` für jeden nicht erkannten Typ) anstelle des spezifischen Fundtyps, sodass das aggregierte Dashboard nicht auf die Verteilung der Wertgegenstände schließen kann, die ein einzelner Benutzer protokolliert.
* **Firebase Crashlytics** lädt Absturz-Stacktraces zusammen mit Gerätemodell, Betriebssystemversion und App-Version hoch, damit wir Fehler diagnostizieren können. Bevor ein Absturz oder ein nicht-fataler Fehler an Crashlytics weitergeleitet wird, **bereinigt die App koordinatenförmige Teilzeichenfolgen aus der Ausnahme-Nachricht** (z. B. `lat=`/`lon=`-Muster, vorzeichenbehaftete Dezimalzahlen mit drei oder mehr Nachkommastellen), damit GPS-Positionen, die in lokalen Variablen zwischengespeichert sind, nicht über die Fehlerberichterstattung durchsickern können. Stack-Frames (Klasse, Methode, Zeile) bleiben zur Gruppierung erhalten, Laufzeitwerte nicht. Ein prozessweiter UncaughtExceptionHandler wendet dieselbe Bereinigung auf fatale Abstürze an, die das SDK automatisch erfasst.

Beide Dienste unterliegen der [Google-Datenschutzerklärung](https://policies.google.com/privacy) und den [Firebase-Datenschutz- und Sicherheitshinweisen](https://firebase.google.com/support/privacy).

**In-App-Feedback (Optional):** Wenn Sie Feedback über das Feedback-Formular der App senden, übermittelt die App die von Ihnen eingegebenen Informationen — Ihre Nachricht, die ausgewählte Kategorie und ob es sich um einen Fehlerbericht oder eine Funktionsidee handelt — zusammen mit Ihrem Gerätemodell, der Android-Version, der App-Version und der Sprache sowie, **nur wenn Sie sich entscheiden, sie anzugeben, Ihrer E-Mail-Adresse**, an eine von uns betriebene Supabase Edge Function, damit wir sie lesen und beantworten können. Es wird nichts gesendet, es sei denn, Sie senden das Formular ab. Supabase, Inc. fungiert dabei als unser Auftragsverarbeiter (EU-Region). Unterliegt der [Datenschutzerklärung von Supabase](https://supabase.com/privacy).

### 3.4 Daten, die die App NICHT sammelt

* **Die App** sammelt nicht Ihren Namen, Ihre Telefonnummer oder andere persönliche Identifikatoren — mit Ausnahme einer E-Mail-Adresse, die Sie optional eingeben, wenn Sie In-App-Feedback senden (siehe Abschnitt 3.3)
* **Die App** verwendet keine Analyse- oder Absturzberichterstattung, es sei denn, Sie stimmen ausdrücklich zu (siehe Firebase-Abschnitt oben; standardmäßig deaktiviert, jederzeit widerrufbar unter Einstellungen → Datenschutz → Diagnose)
* **Die App** verwendet keine Werberahmen oder Werbeidentifikatoren
* **Die App** verfolgt keine Nutzungsmuster, Sitzungshäufigkeit oder Funktionsnutzung
* **Die App** erstellt keine Benutzerprofile oder Verhaltens-Fingerabdrücke
* **Die App** verkauft, vermietet oder handelt Ihre Daten nicht und teilt sie nur dort, wo Sie es initiieren: die Echtzeit-API-Aufrufe in Abschnitt 3.2, die optionale Google Drive-Sicherung, die Opt-in-Firebase-Diagnose und das Feedback, das Sie absenden (Abschnitt 3.3)
* **Die App** betreibt keine Server, die Ihre Detektionsdaten (Standort, Funde, Tresoreinträge, Sitzungen) empfangen, verarbeiten oder speichern; der einzige von Ihnen eingegebene Inhalt, der einen von uns betriebenen Server erreicht, ist das Feedback, das Sie absenden möchten (Abschnitt 3.3)

Die Datenpraktiken der Website werden separat in Abschnitt 4 behandelt.

## 4. Datenpraktiken der Website (sweeptrack.pro)

Dieser Abschnitt behandelt die Datenpraktiken, die speziell für unsere Website sweeptrack.pro gelten. Die in den Abschnitten 3 und 5–18 beschriebene Android-App wird unabhängig betrieben und teilt sich keine Infrastruktur mit der Website.

### 4.1 E-Mail-Erfassung für die Warteliste

Wenn Sie Ihre E-Mail-Adresse über ein Warteliste-Formular auf der Website übermitteln, sammeln wir:

* **E-Mail-Adresse**, die Sie angeben
* **Zeitstempel** der Anmeldung
* **IP-Adresse** (vorübergehend) — zur Ratenbegrenzung verwendet; wird nicht über die Dauer der Anfrage hinaus gespeichert

**Zweck:** Sie zu benachrichtigen, wenn SweepTrack Pro bei Google Play startet, und Sie mit Vor-Launch-Updates über das Produkt und das Founder's Lifetime-Angebot zu versorgen. Wir verwenden Ihre E-Mail-Adresse zu keinem anderen Zweck, teilen sie nicht und verkaufen sie nicht.

**Rechtsgrundlage (GDPR):** Einwilligung (Art. 6(1)(a)) — erteilt, wenn Sie das Formular absenden.

**Speicherung:** E-Mail-Adressen werden in einer in der EU (Irland-Region) gehosteten Supabase Postgres-Datenbank gespeichert. Supabase, Inc. fungiert als unser Auftragsverarbeiter gemäß ihrer Standard-Auftragsverarbeitungsvereinbarung.

**E-Mail-Zustellung:** Ausgehende E-Mails werden über Resend, Inc. (EU-Region, Irland) versendet, die als unser E-Mail-Service-Auftragsverarbeiter gemäß ihrer Standard-Auftragsverarbeitungsvereinbarung fungieren.

**Aufbewahrung:** Bis Sie sich abmelden oder 12 Monate nach der öffentlichen Markteinführung von SweepTrack Pro bei Google Play, je nachdem, was zuerst eintritt.

**Abmeldung:** Antworten Sie mit „remove" auf eine beliebige E-Mail, die wir senden, oder verwenden Sie den List-Unsubscribe-Link, den Ihr E-Mail-Client darstellt (Gmail und Outlook zeigen ihn neben der Absenderadresse an).

**Ihre Rechte:** Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit und das Recht, die Einwilligung zu widerrufen. E-Mail an [support@sweeptrack.pro](mailto:support@sweeptrack.pro), um eines dieser Rechte auszuüben.

### 4.2 Website-Analyse

Die Website verwendet:

* **Vercel Analytics** — datenschutzfreundliche Analytik, die keine Cookies verwendet und keine einzelnen IP-Adressen speichert. Misst nur aggregierte Seitenaufrufe.
* **Vercel Speed Insights** — Messung der Core Web Vitals (Seitenladezeit, Layout-Verschiebung, Interaktionsverzögerungen) auf aggregierter Basis.

Beide Tools werden von Vercel Inc. betrieben und unterliegen [Vercels Datenschutzerklärung](https://vercel.com/legal/privacy-policy). Sie sammeln keine personenbezogenen Daten und erstellen keine Benutzerprofile.

### 4.3 Cookies

Die Website setzt keine Erstanbieter-Cookies für Tracking, Werbung oder Profiling. Vercel Analytics ist von Natur aus cookieless. Eine Spracheinstellung, falls Sie sie ändern, wird im `localStorage` Ihres Browsers gespeichert (kein Cookie) und ist nur von Ihrem eigenen Browser lesbar.

### 4.4 Hosting und Server-Protokolle

Die Website wird von Vercel Inc. gehostet. Vercel kann Standard-Anfrage-Metadaten (IP-Adresse, User-Agent, Anfragepfad, Zeitstempel) für operative, leistungsbezogene und Sicherheitszwecke automatisch protokollieren. Diese Protokolle werden gemäß den Standardrichtlinien von Vercel aufbewahrt und werden von uns nicht zur Verfolgung oder Profilerstellung von Einzelpersonen verwendet.

### 4.5 Ihre Rechte für Website-Daten

Die gleichen GDPR-, UK GDPR-, australischen, kanadischen, CCPA-, LGPD- und NZ Privacy Act-Rechte, die in Abschnitt 10 beschrieben sind, gelten gleichermaßen für Ihre von der Website erfassten Daten. Um ein Recht in Bezug auf Ihre Warteliste-E-Mail auszuüben, wenden Sie sich an [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Wir werden innerhalb von 30 Tagen antworten.

## 5. Rechtsgrundlage der Verarbeitung (GDPR)

* **GPS-/Sitzungsdaten, Fundaufzeichnungen, Tresoreinträge:** Einwilligung (Art. 6(1)(a)) — Sie initiieren diese Aktionen aktiv
* **API-Aufrufe (Wetter, Geocoding, Kartenkacheln):** Berechtigtes Interesse (Art. 6(1)(f)) — notwendig für die Kernfunktionalität
* **Google Drive Sicherung:** Einwilligung (Art. 6(1)(a)) — Sie aktivieren und authentifizieren ausdrücklich
* **Abonnementverifizierung:** Vertragserfüllung (Art. 6(1)(b)) — erforderlich, um kostenpflichtige Funktionen bereitzustellen
* **Firebase Analytics und Crashlytics (optional):** Einwilligung (Art. 6(1)(a)) — über die Abfrage beim ersten Start oder in den Einstellungen aktiviert, jederzeit widerrufbar
* **In-App-Feedback (optional):** Einwilligung (Art. 6(1)(a)) — nur gesendet, wenn Sie das Feedback-Formular absenden
* **Warteliste-E-Mail (Website):** Einwilligung (Art. 6(1)(a)) — siehe Abschnitt 4.1

Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die entsprechende Aktivität stoppen, die App deinstallieren oder sich von Website-E-Mails abmelden.

## 6. Wie wir Ihre Daten verwenden

Nahezu die gesamte Datenverarbeitung der App erfolgt **lokal auf Ihrem Gerät**. Wir verwenden App-Daten zur Bereitstellung der App-Funktionen: Kartenanzeige, Sitzungstracking, Fundprotokollierung, Berechtigungsverwaltung, Wetter-/Gezeitendaten, Exporte, Sicherung und Abonnementverifizierung. Daten verlassen Ihr Gerät nur für die vom Nutzer initiierten Funktionen in den Abschnitten 3.2 und 3.3 (Echtzeit-APIs, optionale Sicherung, optionale Diagnose, optionales Feedback).

Website-Daten (Ihre Warteliste-E-Mail) werden nur zum Versand der in Abschnitt 4 beschriebenen Launch- und Pre-Launch-Kommunikation verwendet.

## 7. Datenspeicherung und Sicherheit

**App-Daten:**

* Sitzungs- und Funddaten werden in einer Room-Datenbank (SQLite) im sandboxed privaten Speicher der App auf Ihrem Gerät gespeichert — geschützt durch Androids App-Isolationsmodell und die geräteseitige Verschlüsselung der Nutzerdaten im Ruhezustand
* Sensible Einstellungen verwenden Androids EncryptedSharedPreferences (AES-256)
* Mediendateien werden im privaten internen Speicher der App gespeichert und sind für andere Apps nicht zugänglich
* Android-Cloud-Sicherung **deaktiviert** (`android:allowBackup="false"`), um unbeabsichtigte Datenexposition zu verhindern
* Google Drive-Sicherungen verwenden die verschlüsselten APIs von Google (HTTPS/TLS) und existieren ausschließlich in Ihrem Konto
* Optionales In-App-Feedback, das Sie absenden, wird über HTTPS/TLS an eine Supabase Edge Function (EU-Region) übermittelt

Für die App betreiben wir keine Server, Datenbanken oder Cloud-Infrastruktur, die Ihre Detektionsdaten speichern.

**Website-Daten:** Warteliste-E-Mails werden in einer in der EU (Irland) gehosteten Supabase Postgres-Datenbank gespeichert. Verbindungen sind verschlüsselt (TLS). Der Zugriff ist auf administrative Zwecke beschränkt. Ausgehende E-Mails werden über Resend (EU, Irland) per TLS gesendet. Siehe Abschnitt 4.

## 8. Datenaufbewahrung

**App-Daten:** Lokale Daten werden aufbewahrt, bis Sie sie löschen. Sie können einzelne Elemente innerhalb der App löschen, alle Daten über die Android-Einstellungen löschen oder die App deinstallieren. Google Drive-Sicherungen bleiben bestehen, bis Sie sie manuell aus Ihrem Konto löschen.

**Website-Daten:** Warteliste-E-Mails werden aufbewahrt, bis Sie sich abmelden, oder 12 Monate nach der öffentlichen Markteinführung, je nachdem, was zuerst eintritt. Danach werden die Adressen aus der Supabase-Datenbank gelöscht.

## 9. Datenweitergabe und Offenlegung

Wir verkaufen, vermieten oder handeln Ihre personenbezogenen Daten nicht. Sie können sich entscheiden, App-Daten über Exporte (GPX, KML, CSV, JSON), Sitzungsfreigabekarten oder Google Drive-Sicherung zu teilen — alle vom Benutzer initiiert. Wenn Sie In-App-Feedback absenden, wird es in unserem Auftrag von Supabase verarbeitet (siehe Abschnitt 3.3). Website-Warteliste-Daten werden nur von unseren benannten Auftragsverarbeitern (Supabase, Resend) für die in Abschnitt 4 beschriebenen Zwecke verarbeitet.

## 10. Ihre Rechte (GDPR und international)

### GDPR-Rechte (EU/EWR-Einwohner)

* **Auskunft** — Ihre App-Daten sind vollständig auf Ihrem Gerät zugänglich; für Website-Daten senden Sie eine E-Mail an [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
* **Berichtigung** — bearbeiten Sie alle Aufzeichnungen direkt in der App oder senden Sie uns eine E-Mail für Website-Datenkorrekturen
* **Löschung** — über die In-App-Löschung oder Deinstallation; für Website-Daten abmelden oder uns per E-Mail kontaktieren
* **Einschränkung** — Sie kontrollieren die gesamte Verarbeitung durch Starten/Stoppen von Funktionen
* **Datenübertragbarkeit** — exportieren Sie App-Daten über GPX, KML, CSV, JSON
* **Widerspruch** — stoppen Sie jede Funktion jederzeit
* **Widerruf der Einwilligung** — jederzeit, ohne die vorherige Verarbeitung zu beeinträchtigen

### Vereinigtes Königreich (UK GDPR)

Ihre Rechte gemäß UK GDPR und Data Protection Act 2018 entsprechen den oben genannten GDPR-Rechten. Sie können das [ICO](https://ico.org.uk) kontaktieren.

### Australien (Privacy Act 1988)

Sie haben Rechte gemäß den Australian Privacy Principles (APPs), einschließlich Auskunft und Berichtigung. Sie können das [OAIC](https://www.oaic.gov.au) kontaktieren.

### Kanada (PIPEDA)

Sie haben Rechte gemäß PIPEDA und den geltenden provinziellen Datenschutzgesetzen, einschließlich Auskunft, Berichtigung und Widerruf der Einwilligung. Sie können das [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca) kontaktieren.

### Einwohner Kaliforniens (CCPA/CPRA)

Wir verkaufen oder teilen **keine** personenbezogenen Daten. Wir verwenden Daten nicht für kontextübergreifende Verhaltenswerbung. Sie haben das Recht zu wissen, zu löschen, sensible Datennutzung einzuschränken und Nichtdiskriminierung.

### Brasilianische Einwohner (LGPD)

Gleichwertige Rechte gemäß Lei Geral de Proteção de Dados gelten. Sie können die [ANPD](https://www.gov.br/anpd) kontaktieren.

### Neuseeland (Privacy Act 2020)

Sie haben Rechte gemäß Privacy Act 2020, einschließlich Auskunft und Berichtigung. Sie können den [NZ Privacy Commissioner](https://www.privacy.org.nz) kontaktieren.

### Andere Gerichtsbarkeiten

Unabhängig von Ihrem Standort haben Sie die volle Kontrolle über Ihre Daten. Wo das lokale Recht zusätzliche Datenschutzrechte gewährt, die nicht vertraglich aufgegeben werden können, gelten diese Rechte.

## 11. Datenschutz von Kindern

Weder die App noch die Website richten sich an Kinder unter 18 Jahren. Der vorgesehene Nutzer der App ist ein erwachsener Sondengänger; viele Funktionen (Genehmigungstresor, Vereinbarungen mit Grundbesitzern, digitale Unterschriften, kostenpflichtige Abonnements) setzen in den meisten Rechtsordnungen den volljährigen rechtlichen Status voraus. Wir sammeln wissentlich keine personenbezogenen Daten von Kindern unter 18 Jahren. Wenn Sie glauben, dass ein Kind die App oder Website verwendet hat, können Sie dessen Daten löschen, indem Sie App-Daten löschen, die App deinstallieren oder sich von der Warteliste abmelden.

## 12. Berechtigungen erläutert (App)

* **ACCESS_FINE_LOCATION** — GPS für die Pfadverfolgung während Sitzungen
* **ACCESS_COARSE_LOCATION** — ungefährer Standort als Ausweichlösung, wenn präzises GPS nicht verfügbar ist
* **FOREGROUND_SERVICE / FOREGROUND_SERVICE_LOCATION** — hält den GPS-Tracker als Vordergrunddienst am Laufen, damit die Aufzeichnung während aktiver Sitzungen auch bei ausgeschaltetem Bildschirm fortgesetzt wird
* **CAMERA** — Fotos für die Fundprotokollierung aufnehmen
* **RECORD_AUDIO** — Audionotizen für Funde aufzeichnen
* **READ/WRITE_CALENDAR** — schreibt Erinnerungen für den Ablauf von Tresor-Berechtigungen in den lokalen Kalender Ihres Geräts. Wenn Sie unter Android die Synchronisierung mit einem Cloud-Kalender aktiviert haben (z. B. Google Calendar-Synchronisierung), werden diese Erinnerungen zusammen mit dem Rest Ihres Kalenders mit Ihrem Konto synchronisiert — diese Synchronisierung wird durch Ihre Android-Einstellungen gesteuert, nicht durch die App
* **INTERNET** — Wetter, Geocoding, Gezeiten, Karten, Abonnements, optionales Feedback
* **ACCESS_NETWORK_STATE** — Offline-Zustand erkennen, bevor Netzwerkanfragen gestellt werden
* **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS** — verhindert, dass das System den GPS-Tracker während langer Sitzungen beendet
* **POST_NOTIFICATIONS** — GPS-Tracking-Benachrichtigung
* **VIBRATE** — Grenzwarnungen des Perimeter-Guards

Sie können jede Berechtigung jederzeit über die Android-Einstellungen widerrufen.

## 13. Cookies und Tracking

**Die App** verwendet keine Cookies, Web-Beacons, Pixel-Tags, Geräte-Fingerprinting oder andere Tracking-Technologien. **Die Website** setzt keine Erstanbieter-Cookies; siehe Abschnitt 4.3 für die vollständige Offenlegung der Website-Cookies.

## 14. Internationale Datenübermittlungen

**App-Daten:** Da alle Detektionsdaten lokal auf Ihrem Gerät gespeichert werden, finden keine internationalen Datenübermittlungen unter unserer Kontrolle statt. API-Aufrufe an Drittanbieter (Abschnitt 3.2), die optionale Google Drive-Sicherung, die optionale Firebase-Diagnose und das optionale Feedback können in den Gerichtsbarkeiten verarbeitet werden, in denen diese Dienste tätig sind.

**Website-Daten:** Warteliste-E-Mails werden in der EU (Irland) von Supabase gespeichert und von Resend (EU, Irland) verarbeitet. Wenn Sie von außerhalb der EU auf die Website zugreifen, wird Ihre E-Mail-Adresse zur Verarbeitung in die EU übermittelt.

## 15. Benachrichtigung über Datenschutzverletzungen

**App:** Da wir Ihre Detektionsdaten nicht auf einem von uns betriebenen Server speichern, ist eine Datenschutzverletzung in Bezug auf App-Daten auf unserer Seite nicht möglich. Wenn wir auf eine Schwachstelle in der App aufmerksam werden, werden wir ein Update herausgeben und die Benutzer über die App oder Website benachrichtigen. Optionales Feedback, das Sie absenden, wird von unserem Auftragsverarbeiter Supabase im Rahmen seiner eigenen Benachrichtigungsprotokolle bei Datenpannen verwahrt.

**Website:** Unsere Auftragsverarbeiter (Supabase, Resend) unterhalten ihre eigenen Benachrichtigungsprotokolle bei Datenpannen. Im unwahrscheinlichen Fall einer Verletzung, die Ihre Warteliste-E-Mail betrifft, werden wir Sie und die zuständige Aufsichtsbehörde (ANSPDCP) gemäß den GDPR-Anforderungen innerhalb von 72 Stunden benachrichtigen.

## 16. Änderungen dieser Richtlinie

Wir können diese Datenschutzerklärung aktualisieren, um Änderungen der Funktionalität oder geltenden Gesetze widerzuspiegeln. Das „Letzte Aktualisierung"-Datum wird überarbeitet. Wesentliche Änderungen werden über die App oder Website mitgeteilt.

## 17. Datenschutzerklärungen Dritter

* [Google (Maps, Drive, Sign-In, Plattform-Geocoder)](https://policies.google.com/privacy)
* [Firebase (Analytics und Crashlytics — nur Opt-in)](https://firebase.google.com/support/privacy)
* [RevenueCat](https://www.revenuecat.com/privacy)
* [Open-Meteo](https://open-meteo.com/en/terms)
* [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
* [OpenTopoMap](https://opentopomap.org/about)
* [Esri/ArcGIS](https://www.esri.com/en-us/privacy/overview)
* [eHarta / geo-spatial.org](https://www.geo-spatial.org)
* [Cloudflare](https://www.cloudflare.com/privacypolicy/) (Proxy für historische Kartenkacheln)
* [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
* [NOAA](https://www.noaa.gov/privacy-policy)
* [Vercel](https://vercel.com/legal/privacy-policy) (Website-Hosting + Analyse)
* [Supabase](https://supabase.com/privacy) (Website-Datenbank + In-App-Feedback)
* [Resend](https://resend.com/legal/privacy-policy) (Website-E-Mail)

## 18. Kontakt

**Coc Lorand Adrian P.F.A.** (firmierend als Loriba)
CUI: 41299288 · Reg. F24/646/2019
E-Mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

Für GDPR-bezogene Anfragen können Sie sich auch an die ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) unter [dataprotection.ro](https://www.dataprotection.ro) wenden.

---

Diese Datenschutzerklärung ist ab dem 12. Mai 2026 wirksam und gilt für alle Versionen von SweepTrack Pro.
