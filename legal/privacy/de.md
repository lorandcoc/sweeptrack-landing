## 2. Deutsch (German)

# Datenschutzerklärung

**SweepTrack Pro** — GPS-Tracking-Anwendung für die Metalldetektion

Inkrafttreten: 7. April 2026 · Letzte Aktualisierung: 7. April 2026

Betrieben von: Coc Lorand P.F.A., firmierend unter „Loriba“

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Einführung

Diese Datenschutzerklärung erläutert, wie SweepTrack Pro („die App“) Ihre Informationen sammelt, verwendet, speichert und schützt. Wir setzen uns für den Schutz Ihrer Privatsphäre ein und sorgen für Transparenz bei unseren Datenpraktiken.

SweepTrack Pro basiert auf einer **Privacy-First-Architektur**: Alle Daten werden lokal auf Ihrem Gerät gespeichert, wir betreiben keine Backend-Server und wir sammeln, übertragen oder verkaufen Ihre personenbezogenen Daten nicht.

## 2. Verantwortlicher für die Datenverarbeitung

Im Sinne der EU-Datenschutz-Grundverordnung (GDPR) und des rumänischen Datenschutzgesetzes (Gesetz 190/2018) ist der Verantwortliche für die Datenverarbeitung:

**Coc Lorand P.F.A.** (firmierend als Loriba)
CUI: 41299288 · Reg. F24/646/2019
E-Mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Daten, die wir sammeln

### 3.1 Lokal auf Ihrem Gerät gespeicherte Daten

Die folgenden Daten werden von Ihnen erstellt und **ausschließlich auf Ihrem Gerät** gespeichert. Wir haben niemals Zugriff auf diese Daten, es sei denn, Sie geben sie ausdrücklich frei.

**Standort- und Sitzungsdaten:**

* GPS-Koordinaten (Breitengrad, Längengrad) während aktiver Tracking-Sitzungen
* Geschwindigkeits-, Höhen-, Kurs- und Genauigkeitswerte von Gerätesensoren
* Sitzungs-Metadaten: Name, Datum, Start-/Endzeit, Dauer, Entfernung, Tags
* Pfadkoordinaten mit Zeitstempeln
* Ortsnamen (erhalten durch Reverse Geocoding)

**Funde und Entdeckungsaufzeichnungen:**

* Fundtyp (Schatz, Gold, Münze, Relikt, Schmuck, Müll)
* Fundort (GPS-Koordinaten zum Zeitpunkt der Protokollierung)
* Optionale Metadaten: Name, Notizen, Tiefe, geschätzter Wert, Gewicht
* Medienanhänge: Fotografien und Audioaufnahmen

**Daten im Berechtigungstresor:**

* Standortnamen und Standorte
* Namen und Kontaktinformationen von Landbesitzern
* Genehmigungsnummern, Ausstellungsdaten, Ablaufdaten
* Koordinaten der Standortgrenzen (Polygon)
* Digitale Signaturen (SVG-Format)
* Benutzerdefinierte Tags und Notizen

**Andere lokale Daten:** Konfigurationen für Detektor-Voreinstellungen, App-Präferenzen (Thema, Einheiten, Sprache, Karteneinstellungen) und mit Sitzungen verknüpfte Wetterschnappschüsse.

### 3.2 Vorübergehend verarbeitete Daten (nicht gespeichert)

Die folgenden Daten werden ausschließlich für die Echtzeit-Funktionalität an API-Dienste von Drittanbietern gesendet und **weder von uns noch von diesen Diensten über die unmittelbare Anfrage hinaus gespeichert**:

* Ungefähre GPS-Koordinaten, die an Open-Meteo für Wettervorhersagen und Höhendaten gesendet werden
* Ungefähre GPS-Koordinaten, die an OpenStreetMap/Nominatim für die Adresssuche gesendet werden
* Ungefähre GPS-Koordinaten, die an die Overpass API für die Entdeckung von nahegelegenen historischen POIs gesendet werden
* Ungefähre GPS-Koordinaten, die an die Wikipedia API für die geografische Suche nach Artikeln in der Nähe gesendet werden
* Gezeitenstations-Identifikatoren, die an NOAA für Gezeitenvorhersagen gesendet werden
* Standort-Suchanfragen, die an Open-Meteo Geocoding für die Ortsnamensuche gesendet werden

### 3.3 Von Drittanbietern verarbeitete Daten

**Google Maps SDK:** Der Standort Ihres Geräts wird von Google Maps für die Kartendarstellung verarbeitet. Unterliegt der [Datenschutzerklärung von Google](https://policies.google.com/privacy).

**Google Sign-In und Google Drive (Optional):** Wenn Sie die Sicherung in Google Drive aktivieren, wird die E-Mail-Adresse Ihres Google-Kontos lokal gespeichert, um das authentifizierte Konto zu identifizieren. Die Sicherungsdaten werden in Ihr eigenes Google Drive Konto hochgeladen. Wir haben keinen Zugriff auf Ihr Google Drive.

**RevenueCat (Abonnement-Verwaltung):** Eine anonyme, zufällig generierte App-Benutzerkennung wird für die Abonnement-Verifizierung verwendet. Es werden keine persönlichen Informationen weitergegeben. Unterliegt der [Datenschutzerklärung von RevenueCat](https://www.revenuecat.com/privacy).

### 3.4 Daten, die wir NICHT sammeln

* Wir sammeln **keinen** Namen, keine E-Mail-Adresse, keine Telefonnummer oder sonstige persönliche Identifikatoren.
* Wir verwenden **keine** SDKs für Analysen, Fehlerberichte oder Verhaltensüberwachung.
* Wir verwenden **keine** Werbe-Frameworks oder Werbe-Identifikatoren.
* Wir verfolgen **keine** Nutzungsmuster, Sitzungshäufigkeit oder Funktionsnutzung.
* Wir erstellen **keine** Benutzerprofile oder Verhaltens-Fingerabdrücke.
* Wir geben Daten **nicht** an Dritte weiter, verkaufen, vermieten oder tauschen sie nicht.
* Wir betreiben **keine** Server, die Ihre Daten empfangen, verarbeiten oder speichern.

## 4. Rechtsgrundlage für die Verarbeitung (GDPR)

* **GPS-/Sitzungsdaten, Fundaufzeichnungen, Tresoreinträge:** Einwilligung (Art. 6(1)(a)) — Sie initiieren diese Aktionen aktiv
* **API-Aufrufe (Wetter, Geocoding):** Berechtigtes Interesse (Art. 6(1)(f)) — für die Kernfunktionalität erforderlich
* **Google Drive Sicherung:** Einwilligung (Art. 6(1)(a)) — Sie aktivieren und authentifizieren sich ausdrücklich
* **Abonnement-Verifizierung:** Vertragserfüllung (Art. 6(1)(b)) — erforderlich für die Bereitstellung kostenpflichtiger Funktionen

Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die entsprechende Aktivität beenden oder die App deinstallieren.

## 5. Wie wir Ihre Daten verwenden

Die gesamte Datenverarbeitung erfolgt **lokal auf Ihrem Gerät**. Wir verwenden Ihre Daten ausschließlich zur Bereitstellung der Funktionen der App: Kartendarstellung, Sitzungsverfolgung, Fundprotokollierung, Berechtigungsverwaltung, Wetter-/Gezeitendaten, Exporte, Sicherung und Abonnement-Verifizierung.

## 6. Datenspeicherung und Sicherheit

* Sitzungs- und Funddaten werden in einer verschlüsselten Room-Datenbank auf Ihrem Gerät gespeichert
* Sensible Einstellungen verwenden Androids EncryptedSharedPreferences (AES-256)
* Mediendateien werden im privaten internen Speicher der App gespeichert, auf den andere Apps keinen Zugriff haben
* Das Android-Cloud-Backup ist **deaktiviert** (`android:allowBackup="false"`), um eine unbeabsichtigte Datenexposition zu verhindern
* Google Drive Sicherungen verwenden die verschlüsselten APIs von Google (HTTPS/TLS) und existieren ausschließlich in Ihrem Konto

Wir betreiben keine Server, Datenbanken oder Cloud-Infrastrukturen.

## 7. Vorratsspeicherung von Daten

Lokale Daten werden so lange gespeichert, bis Sie sie löschen. Sie können einzelne Elemente innerhalb der App löschen, alle Daten über die Android-Einstellungen löschen oder die App deinstallieren. Google Drive Sicherungen bleiben bestehen, bis Sie sie manuell aus Ihrem Konto löschen.

## 8. Weitergabe und Offenlegung von Daten

Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, verkaufen, vermieten oder legen sie offen. Sie können Daten über Exporte (GPX, KML, CSV, JSON), Sitzungs-Share-Cards oder die Google Drive Sicherung weitergeben — dies geschieht immer auf Initiative des Benutzers.

## 9. Ihre Rechte (GDPR und International)

### GDPR-Rechte (Einwohner der EU/des EWR)

* **Auskunft** — Ihre Daten sind auf Ihrem Gerät vollständig zugänglich
* **Berichtigung** — Bearbeiten Sie alle Datensätze direkt in der App
* **Löschung** — Löschen Sie Daten über die In-App-Löschung oder durch Deinstallation
* **Einschränkung** — Kontrollieren Sie die gesamte Verarbeitung durch Starten/Stoppen von Funktionen
* **Datenübertragbarkeit** — Export über GPX, KML, CSV, JSON
* **Widerspruch** — Beenden Sie jede Funktion zu jeder Zeit
* **Widerruf der Einwilligung** — jederzeit ohne Auswirkung auf die vorangegangene Verarbeitung

### Vereinigtes Königreich (UK GDPR)

Ihre Rechte gemäß der UK GDPR und dem Data Protection Act 2018 entsprechen den oben genannten GDPR-Rechten. Sie können das [ICO](https://ico.org.uk) kontaktieren.

### Australien (Privacy Act 1988)

Sie haben Rechte gemäß den Australian Privacy Principles (APPs), einschließlich Auskunft und Berichtigung. Sie können das [OAIC](https://www.oaic.gov.au) kontaktieren.

### Kanada (PIPEDA)

Sie haben Rechte gemäß PIPEDA und den geltenden Datenschutzgesetzen der Provinzen, einschließlich Auskunft, Berichtigung und Widerruf der Einwilligung. Sie können das [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca) kontaktieren.

### Einwohner von Kalifornien (CCPA/CPRA)

Wir verkaufen oder teilen **keine** persönlichen Informationen. Wir verwenden keine Daten für kontextübergreifende verhaltensbezogene Werbung. Sie haben das Recht auf Auskunft, Löschung, Einschränkung der Nutzung sensibler Daten und Nichtdiskriminierung.

### Einwohner von Brasilien (LGPD)

Es gelten gleichwertige Rechte gemäß dem Lei Geral de Proteção de Dados. Sie können die [ANPD](https://www.gov.br/anpd) kontaktieren.

### Neuseeland (Privacy Act 2020)

Sie haben Rechte gemäß dem Privacy Act 2020, einschließlich Auskunft und Berichtigung. Sie können den [NZ Privacy Commissioner](https://www.privacy.org.nz) kontaktieren.

### Andere Rechtsordnungen

Unabhängig von Ihrem Standort haben Sie über die App die volle Kontrolle über Ihre Daten. Wenn das lokale Recht zusätzliche Datenschutzrechte gewährt, die nicht vertraglich ausgeschlossen werden können, gelten diese Rechte.

## 10. Datenschutz für Kinder

Die App richtet sich nicht an Kinder unter 16 Jahren. Wir sammeln wissentlich keine personenbezogenen Daten von Kindern unter 16 Jahren. Wenn Sie glauben, dass ein Kind die App genutzt hat, können Sie dessen Daten durch Löschen der App-Daten oder Deinstallation entfernen.

## 11. Erläuterung der Berechtigungen

* **ACCESS_FINE_LOCATION** — GPS für die Pfadverfolgung während der Sitzungen
* **ACCESS_BACKGROUND_LOCATION** — Fortsetzung der Verfolgung bei ausgeschaltetem Bildschirm
* **CAMERA** — Aufnehmen von Fotos für die Fundprotokollierung
* **RECORD_AUDIO** — Aufnehmen von Audionotizen für Funde
* **READ/WRITE_CALENDAR** — Ablauferinnerungen für den Berechtigungstresor
* **INTERNET** — Wetter, Geocoding, Gezeiten, Karten, Abonnements
* **POST_NOTIFICATIONS** — GPS-Tracking-Benachrichtigung
* **VIBRATE** — Grenzalarme für die Perimeterbewahrung

Sie können jede Berechtigung jederzeit über die Android-Einstellungen widerrufen.

## 12. Cookies und Tracking

Die App verwendet keine Cookies, Web-Beacons, Pixel-Tags, Geräte-Fingerprinting oder sonstige Tracking-Technologien.

## 13. Internationale Datenübermittlung

Da alle Daten lokal auf Ihrem Gerät gespeichert werden, finden unter unserer Kontrolle keine internationalen Datenübermittlungen statt. API-Aufrufe von Drittanbietern können in den Rechtsordnungen verarbeitet werden, in denen diese Dienste betrieben werden.

## 14. Benachrichtigung über Datenpannen

Da wir Ihre Daten auf keinem Server speichern, ist eine Datenpanne auf unserer Seite nicht möglich. Wenn uns eine Sicherheitslücke in der App bekannt wird, werden wir ein Update herausgeben und die Benutzer über die App oder die Website informieren.

## 15. Änderungen an dieser Richtlinie

Wir können diese Datenschutzerklärung aktualisieren, um Änderungen der Funktionalität oder geltender Gesetze widerzuspiegeln. Das Datum der „letzten Aktualisierung“ wird überarbeitet. Wesentliche Änderungen werden über die App oder die Website mitgeteilt.

## 16. Datenschutzerklärungen von Drittanbietern

* [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
* [RevenueCat](https://www.revenuecat.com/privacy)
* [Open-Meteo](https://open-meteo.com/en/terms)
* [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
* [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
* [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Kontaktieren Sie uns

**Coc Lorand P.F.A.** (firmierend als Loriba)
CUI: 41299288 · Reg. F24/646/2019
E-Mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

Bei Fragen zum Datenschutz (GDPR) können Sie sich auch an die ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) unter [dataprotection.ro](https://www.dataprotection.ro) wenden.

---

Diese Datenschutzerklärung tritt am 7. April 2026 in Kraft und gilt für alle Versionen von SweepTrack Pro.

---