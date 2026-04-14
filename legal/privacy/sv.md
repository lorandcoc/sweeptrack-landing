## 9. Svenska (Swedish)

# Integritetspolicy

**SweepTrack Pro** — GPS-spårningsapplikation för metallsökning

Ikraftträdandedatum: 7 april 2026 · Senast uppdaterad: 7 april 2026

Drivs av: Coc Lorand P.F.A., som verkar under namnet "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Webbplats: sweeptrack.pro

---

## 1. Introduktion

Denna integritetspolicy förklarar hur SweepTrack Pro ("Appen") samlar in, använder, lagrar och skyddar din information. Vi strävar efter att skydda din integritet och säkerställa transparens kring vår datahantering.

SweepTrack Pro är utformad med en **integritetsfokuserad arkitektur**: alla data lagras lokalt på din enhet, vi driver inga backend-servrar och vi samlar inte in, överför eller säljer dina personuppgifter.

## 2. Personuppgiftsansvarig

I enlighet med EU:s allmänna dataskyddsförordning (GDPR) och rumänsk dataskyddslag (lag 190/2018) är personuppgiftsansvarig:

**Coc Lorand P.F.A.** (verkar som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-post: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Data vi samlar in

### 3.1 Data som lagras lokalt på din enhet

Följande data skapas av dig och lagras **uteslutande på din enhet**. Vi har aldrig tillgång till dessa data såvida du inte uttryckligen delar dem.

**Plats- och sessionsdata:**

- GPS-koordinater (latitud, longitud) under aktiva spårningssessioner
- Värden för hastighet, höjd, kurs och noggrannhet från enhetens sensorer
- Sessionsmetadata: namn, datum, start-/sluttid, varaktighet, avstånd, taggar
- Ruttkoordinater med tidsstämplar
- Platsnamn (erhållna via omvänd geokodning)

**Fynd- och upptäcktsregister:**

- Fyndtyp (Skatt, Guld, Mynt, Relik, Smycke, Skräp)
- Fyndplats (GPS-koordinater vid registreringstillfället)
- Valfria metadata: namn, anteckningar, djup, uppskattat värde, vikt
- Mediebilagor: fotografier och ljudinspelningar

**Data i tillståndsvalvet:**

- Namn på platser och koordinater
- Markägarnamn och kontaktinformation
- Tillståndsnummer, utfärdandedatum, utgångsdatum
- Koordinater för platsens gränser (polygon)
- Digitala signaturer (SVG-format)
- Anpassade taggar och anteckningar

**Övriga lokala data:** Konfigurationer för detektorinställningar, app-inställningar (tema, enheter, språk, kartinställningar) och väderögonblicksbilder kopplade till sessioner.

### 3.2 Data som behandlas tillfälligt (lagras ej)

Följande data skickas till tredjeparts-API-tjänster endast för realtidsfunktionalitet och **lagras inte av oss eller dessa tjänster utöver den omedelbara förfrågan**:

- Ungefärliga GPS-koordinater skickas till Open-Meteo för väderprognoser och höjddata
- Ungefärliga GPS-koordinater skickas till OpenStreetMap/Nominatim för adressökning
- Ungefärliga GPS-koordinater skickas till Overpass API för att hitta närliggande historiska intressepunkter
- Ungefärliga GPS-koordinater skickas till Wikipedia API för geografisk sökning efter närliggande artiklar
- Identifierare för tidvattenstationer skickas till NOAA för tidvattensprognoser
- Platssökningsfrågor skickas till Open-Meteo Geocoding för sökning av ortnamn

### 3.3 Data som behandlas av tredjepartstjänster

**Google Maps SDK:** Din enhets position behandlas av Google Maps för kartvisning. Omfattas av [Googles integritetspolicy](https://policies.google.com/privacy).

**Google Sign-In och Google Drive (valfritt):** Om du aktiverar säkerhetskopiering till Google Drive lagras e-postadressen för ditt Google-konto lokalt för att identifiera det autentiserade kontot. Säkerhetskopierade data laddas upp till ditt eget Google Drive-konto. Vi har inte tillgång till din Google Drive.

**RevenueCat (prenumerationshantering):** En anonym, slumpmässigt genererad identifierare för app-användaren används för prenumerationsverifiering. Ingen personlig information delas. Omfattas av [RevenueCats integritetspolicy](https://www.revenuecat.com/privacy).

### 3.4 Data som vi INTE samlar in

- Vi samlar **inte** in namn, e-post, telefonnummer eller några personliga identifierare.
- Vi använder **inga** SDK:er för analys, felrapportering eller beteendespårning.
- Vi använder **inga** reklamramverk eller reklamidentifierare.
- Vi spårar **inte** användningsmönster, sessionsfrekvens eller funktionsanvändning.
- Vi skapar **inga** användarprofiler eller beteendebaserade digitala fingeravtryck.
- Vi delar, säljer, hyr ut eller handlar **inte** med data med tredje part.
- Vi driver **inga** servrar som tar emot, behandlar eller lagrar din data.

## 4. Rättslig grund för behandling (GDPR)

- **GPS-/sessionsdata, fyndregister, poster i valvet:** Samtycke (Art. 6(1)(a)) — du initierar aktivt dessa handlingar.
- **API-anrop (väder, geokodning):** Berättigat intresse (Art. 6(1)(f)) — nödvändigt för kärnfunktionalitet.
- **Google Drive-backup:** Samtycke (Art. 6(1)(a)) — du aktiverar och autentiserar uttryckligen.
- **Prenumerationsverifiering:** Fullgörande av avtal (Art. 6(1)(b)) — nödvändigt för att tillhandahålla betalfunktioner.

Du kan när som helst återkalla ditt samtycke genom att avbryta den relevanta aktiviteten eller avinstallera Appen.

## 5. Hur vi använder din data

All databehandling sker **lokalt på din enhet**. Vi använder din data uteslutande för att tillhandahålla Appens funktioner: kartvisning, sessionsspårning, fyndregistrering, tillståndshantering, väder-/tidvattendata, exporter, säkerhetskopiering och prenumerationsverifiering.

## 6. Datalagring och säkerhet

- Sessions- och fynddata lagras i en krypterad Room-databas på din enhet.
- Känsliga inställningar använder Androids EncryptedSharedPreferences (AES-256).
- Mediefiler lagras i Appens privata interna lagringsutrymme, oåtkomligt för andra appar.
- Androids molnbaserade säkerhetskopiering är **inaktiverad** (`android:allowBackup="false"`) för att förhindra oavsiktlig exponering av data.
- Google Drive-säkerhetskopior använder Googles krypterade API:er (HTTPS/TLS) och finns uteslutande på ditt konto.

Vi driver inga servrar, databaser eller molninfrastruktur.

## 7. Datalagringstid

Lokala data bevaras tills du väljer att radera dem. Du kan radera enskilda objekt i Appen, rensa alla data via Android-inställningarna eller avinstallera Appen. Google Drive-säkerhetskopior finns kvar tills du manuellt raderar dem från ditt konto.

## 8. Datadelning och utlämnande

Vi delar, säljer, hyr ut eller lämnar inte ut dina personuppgifter till någon tredje part. Du kan välja att dela data via exporter (GPX, KML, CSV, JSON), sessionsdelningskort eller Google Drive-säkerhetskopiering — allt initieras av användaren.

## 9. Dina rättigheter (GDPR och internationellt)

### GDPR-rättigheter (invånare i EU/EES)

- **Tillgång** — din data är fullt tillgänglig på din enhet.
- **Rättelse** — redigera alla poster direkt i Appen.
- **Radering** — radera via radering i appen eller avinstallation.
- **Begränsning** — kontrollera all behandling genom att starta/stoppa funktioner.
- **Dataportabilitet** — exportera via GPX, KML, CSV, JSON.
- **Invändning** — stoppa vilken funktion som helst när som helst.
- **Återkalla samtycke** — när som helst utan att påverka tidigare behandling.

### Storbritannien (UK GDPR)

Dina rättigheter enligt UK GDPR och Data Protection Act 2018 motsvarar GDPR-rättigheterna ovan. Du kan kontakta [ICO](https://ico.org.uk).

### Australien (Privacy Act 1988)

Du har rättigheter enligt de australiska integritetsprinciperna (APPs), inklusive tillgång och rättelse. Du kan kontakta [OAIC](https://www.oaic.gov.au).

### Kanada (PIPEDA)

Du har rättigheter enligt PIPEDA och tillämplig provinsiell integritetslagstiftning, inklusive tillgång, rättelse och återkallande av samtycke. Du kan kontakta [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

### Invånare i Kalifornien (CCPA/CPRA)

Vi säljer eller delar **inte** någon personlig information. Vi använder inte data för beteendebaserad reklam i olika sammanhang. Du har rätt till information, radering, begränsning av användning av känsliga data och rätt till icke-diskriminering.

### Invånare i Brasilien (LGPD)

Motsvarande rättigheter gäller enligt Lei Geral de Proteção de Dados. Du kan kontakta [ANPD](https://www.gov.br/anpd).

### Neuseeland (Privacy Act 2020)

Du har rättigheter enligt Privacy Act 2020, inklusive tillgång och rättelse. Du kan kontakta [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Övriga jurisdiktioner

Oavsett var du befinner dig har du full kontroll över din data via Appen. Där lokal lag ger ytterligare integritetsrättigheter som inte kan avtalas bort, gäller dessa rättigheter.

## 10. Barns integritet

Appen vänder sig inte till barn under 16 år. Vi samlar inte medvetet in personlig information från barn under 16 år. Om du tror att ett barn har använt Appen kan du radera deras data genom att rensa Appens data eller avinstallera den.

## 11. Förklaring av behörigheter

- **ACCESS_FINE_LOCATION** — GPS för ruttspårning under sessioner.
- **ACCESS_BACKGROUND_LOCATION** — fortsatt spårning när skärmen är avstängd.
- **CAMERA** — ta foton för fyndregistrering.
- **RECORD_AUDIO** — spela in ljudnoteringar för fynd.
- **READ/WRITE_CALENDAR** — påminnelser om utgångsdatum för tillståndsvalvet.
- **INTERNET** — väder, geokodning, tidvatten, kartor, prenumerationer.
- **POST_NOTIFICATIONS** — meddelande för GPS-spårning.
- **VIBRATE** — gränsvarningar för områdesbevakning.

Du kan när som helst återkalla valfri behörighet via Android-inställningarna.

## 12. Cookies och spårning

Appen använder inte cookies, webb-beacons, pixeltaggar, digitala fingeravtryck för enheter eller andra spårningstekniker.

## 13. Internationella dataöverföringar

Eftersom alla data lagras lokalt på din enhet sker inga internationella dataöverföringar under vår kontroll. Tredjeparts-API-anrop kan behandlas i de jurisdiktioner där dessa tjänster drivs.

## 14. Meddelande om dataintrång

Eftersom vi inte lagrar din data på någon server är ett dataintrång hos oss inte möjligt. Om vi blir medvetna om en sårbarhet i Appen kommer vi att utfärda en uppdatering och meddela användare via Appen eller webbplatsen.

## 15. Ändringar i denna policy

Vi kan komma att uppdatera denna integritetspolicy för att återspegla ändringar i funktionalitet eller tillämpliga lagar. Datumet för "Senast uppdaterad" kommer att revideras. Väsentliga ändringar kommer att kommuniceras via Appen eller webbplatsen.

## 16. Tredjeparts integritetspolicyer

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Kontakta oss

**Coc Lorand P.F.A.** (verkar som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-post: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Webbplats: [https://sweeptrack.pro](https://sweeptrack.pro)

För GDPR-relaterade frågor kan du också kontakta ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) på [dataprotection.ro](https://www.dataprotection.ro).

---

Denna integritetspolicy gäller från och med den 7 april 2026 och omfattar alla versioner av SweepTrack Pro.

---