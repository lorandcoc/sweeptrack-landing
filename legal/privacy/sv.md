# Integritetspolicy

**SweepTrack Pro** — GPS-spårningsapplikation för metallsökning

Ikraftträdandedatum: 12 maj 2026 · Senast uppdaterad: 26 maj 2026

Drivs av: Coc Lorand Adrian P.F.A., som verkar under namnet "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Webbplats: sweeptrack.pro

---

## 1. Introduktion

Denna integritetspolicy förklarar hur SweepTrack Pro ("Appen") och webbplatsen sweeptrack.pro ("Webbplatsen") samlar in, använder, lagrar och skyddar din information. Vi strävar efter att skydda din integritet och säkerställa transparens kring vår datahantering.

Appen är utformad med en **integritetsfokuserad arkitektur**: all sökningsdata lagras lokalt på din enhet, vi driver inga backend-servrar för Appen och vi samlar inte in, överför eller säljer dina personliga sökningsdata. Webbplatsen drivs separat och har sin egen datahantering, beskriven i Avsnitt 4.

## 2. Personuppgiftsansvarig

I enlighet med EU:s allmänna dataskyddsförordning (GDPR) och rumänsk dataskyddslag (lag 190/2018) är personuppgiftsansvarig:

**Coc Lorand Adrian P.F.A.** (verkar som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-post: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Data vi samlar in (Android-app)

### 3.1 Data lagrad lokalt på din enhet

Följande data skapas av dig och lagras **uteslutande på din enhet**. Vi har aldrig tillgång till denna data om du inte delar den uttryckligen.

**Plats- och sessionsdata:**

- GPS-koordinater (latitud, longitud) under aktiva spårningssessioner
- Hastighets-, höjd-, kurs- och noggrannhetsvärden från enhetens sensorer
- Sessionsmetadata: namn, datum, start-/sluttid, varaktighet, distans, taggar
- Vägkoordinater med tidsstämplar
- Platsnamn (erhållna genom omvänd geokodning)

**Fynd- och upptäcktsregistreringar:**

- Fyndtyp (Skatt, Guld, Mynt, Relik, Smycke, Skräp)
- Fyndets plats (GPS-koordinater vid registreringstillfället)
- Valfri metadata: namn, anteckningar, djup, uppskattat värde, vikt
- Mediabilagor: foton och ljudinspelningar

**Data från tillståndsvalvet:**

- Platsnamn och platser
- Markägares namn och kontaktinformation
- Tillståndsnummer, utfärdandedatum, utgångsdatum
- Platsgränskoordinater (polygon)
- Digitala signaturer (SVG-format)
- Anpassade taggar och anteckningar

**Annan lokal data:** Detektorinställningar, appinställningar (tema, enheter, språk, kartinställningar) och väderögonblicksbilder kopplade till sessioner.

### 3.2 Data som behandlas tillfälligt (lagras inte)

Följande data skickas till tredjeparts-API:er för realtidsfunktionalitet och **lagras inte av oss eller dessa tjänster utöver den omedelbara begäran**:

- Ungefärliga GPS-koordinater skickade till Open-Meteo för väderprognoser och höjddata
- Ungefärliga GPS-koordinater skickade till OpenStreetMap/Nominatim för adress-sökning
- Ungefärliga GPS-koordinater skickade till Overpass API för upptäckt av närliggande historiska sevärdheter
- Ungefärliga GPS-koordinater skickade till Wikipedia API för geografisk sökning av närliggande artiklar
- Tidvattenstation-identifierare skickade till NOAA för tidvattensprognoser
- Platssökfrågor skickade till Open-Meteo Geocoding

### 3.3 Data som behandlas av tredjepartstjänster

**Google Maps SDK:** Din enhets plats behandlas av Google Maps för kartvisning. Föremål för [Googles integritetspolicy](https://policies.google.com/privacy).

**Google Sign-In och Google Drive (valfritt):** Om du aktiverar Google Drive-säkerhetskopiering lagras e-postadressen till ditt Google-konto lokalt för att identifiera det autentiserade kontot. Säkerhetskopieringsdata laddas upp till ditt eget Google Drive-konto. Vi har ingen tillgång till din Google Drive.

**RevenueCat (Abonnemangshantering):** En anonym, slumpmässigt genererad appanvändaridentifierare används för abonnemangsverifiering. Ingen personlig information delas. Föremål för [RevenueCats integritetspolicy](https://www.revenuecat.com/privacy).

**Firebase Analytics och Crashlytics (Valfritt — inaktiverat som standard):** Två Google Firebase-SDK:er är integrerade i Appen, men **båda förblir inaktiva tills du uttryckligen samtycker** via samtyckesfrågan vid första uppstart eller i **Inställningar → Integritet → Diagnostik**. Tills du ger samtycke skickas inga händelser och inga kraschrapporter laddas upp. Du kan återkalla samtycket när som helst; återkallelsen träder i kraft från nästa händelse. Felsökningsbyggen aktiverar aldrig Crashlytics.

När de är aktiverade:

- **Firebase Analytics** loggar åtta aggregerade händelsenamn med icke-identifierande parametrar: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Händelsernas innehåll innehåller **aldrig** GPS-koordinater, adresser, fyndnamn, foton, ljudinspelningar, valvdata eller någon annan personligt identifierbar information — endast räknare, varaktigheter, avstånd, fyndtyp (endast kategorin) och funktionsidentifierare.
- **Firebase Crashlytics** laddar upp stackspår från krascher tillsammans med enhetsmodell, operativsystemets version och appens version för att hjälpa oss att diagnostisera buggar. Innan en krasch eller ett icke-fatalt fel vidarebefordras till Crashlytics **tar Appen bort delsträngar med koordinatform från undantagsmeddelandet** (t.ex. `lat=`/`lon=`-mönster, signerade decimaltal med tre eller fler decimaler), så att GPS-positioner som lagrats i lokala variabler inte kan läcka genom felrapporteringen. Stack-ramar (klass, metod, rad) bevaras för gruppering; körtidsvärden inte. En processövergripande hanterare för ofångade undantag tillämpar samma rensning på fatala krascher som SDK:t fångar automatiskt.

Båda tjänsterna omfattas av [Googles integritetspolicy](https://policies.google.com/privacy) och [Firebases sekretess- och säkerhetsinformation](https://firebase.google.com/support/privacy).

### 3.4 Data som Appen INTE samlar in

- **Appen** samlar inte in ditt namn, e-postadress, telefonnummer eller andra personliga identifierare
- **Appen** använder inte analyser eller kraschrapporter om du inte uttryckligen samtycker (se Firebase-avsnittet ovan; inaktiverat som standard och kan när som helst återkallas i Inställningar → Integritet → Diagnostik)
- **Appen** använder inte annonsramverk eller reklamidentifierare
- **Appen** spårar inte användningsmönster, sessionsfrekvens eller funktionsanvändning
- **Appen** skapar inte användarprofiler eller beteendefingeravtryck
- **Appen** delar, säljer, hyr ut eller byter inte data med tredje parter
- **Appen** driver inga servrar som tar emot, behandlar eller lagrar din sökningsdata

Webbplatsens datahantering behandlas separat i Avsnitt 4.

## 4. Webbplatsens datahantering (sweeptrack.pro)

Detta avsnitt behandlar datahantering som är specifik för vår webbplats sweeptrack.pro. Android-appen som beskrivs i Avsnitt 3 och 5–18 fungerar oberoende och delar inte infrastruktur med Webbplatsen.

### 4.1 E-postinsamling för väntelistan

När du skickar din e-postadress via ett anmälningsformulär på Webbplatsen samlar vi in:

- **E-postadress** du anger
- **Tidsstämpel** för anmälan
- **IP-adress** (tillfällig) — används för hastighetsbegränsning; lagras inte utöver begärans varaktighet

**Syfte:** Att meddela dig när SweepTrack Pro lanseras på Google Play och skicka uppdateringar före lanseringen om produkten och Founder's Lifetime-erbjudandet. Vi kommer inte att använda din e-post för andra ändamål, inte dela den och inte sälja den.

**Rättslig grund (GDPR):** Samtycke (Art. 6(1)(a)) — lämnat när du skickar formuläret.

**Lagring:** E-postadresser lagras i en Supabase Postgres-databas värd i EU (Irland-regionen). Supabase, Inc. agerar som vår personuppgiftsbiträde enligt deras standardavtal för databehandling.

**E-postleverans:** Utgående e-post skickas via Resend, Inc. (EU-regionen, Irland) som agerar som vårt personuppgiftsbiträde för e-posttjänst enligt deras standardavtal för databehandling.

**Lagringstid:** Tills du avregistrerar dig, eller 12 månader efter den offentliga lanseringen av SweepTrack Pro på Google Play, beroende på vilket som inträffar först.

**Avregistrering:** Svara "remove" på alla e-postmeddelanden vi skickar, eller använd List-Unsubscribe-länken som din e-postklient visar (Gmail och Outlook visar den bredvid Från-adressen).

**Dina rättigheter:** Åtkomst, rättelse, radering, begränsning, portabilitet och rätt att återkalla samtycke. Skicka e-post till [support@sweeptrack.pro](mailto:support@sweeptrack.pro) för att utöva någon av dessa.

### 4.2 Webbplatsanalys

Webbplatsen använder:

- **Vercel Analytics** — integritetsrespekterande analys som inte använder cookies och inte lagrar individuella IP-adresser. Mäter endast aggregerade sidvisningar.
- **Vercel Speed Insights** — Core Web Vitals-mätning (sidladdningstid, layoutförskjutning, interaktionsfördröjningar) på aggregerad basis.

Båda verktygen drivs av Vercel Inc. och omfattas av [Vercels integritetspolicy](https://vercel.com/legal/privacy-policy). De samlar inte in personligt identifierbar information och skapar inte användarprofiler.

### 4.3 Cookies

Webbplatsen sätter inga förstapartscookies för spårning, reklam eller profilering. Vercel Analytics är cookielöst genom design. En språkinställning, om du ändrar den, lagras i din webbläsares `localStorage` (inte en cookie) och kan bara läsas av din egen webbläsare.

### 4.4 Hosting och serverloggar

Webbplatsen är värd hos Vercel Inc. Vercel kan automatiskt logga standard begäransmetadata (IP-adress, user agent, begäranväg, tidsstämpel) för operativa, prestanda- och säkerhetsändamål. Dessa loggar bevaras enligt Vercels standardpolicy och används inte av oss för spårning eller profilering av individer.

### 4.5 Dina rättigheter för Webbplatsdata

Samma GDPR, UK GDPR, australiensiska, kanadensiska, CCPA, LGPD och NZ Privacy Act-rättigheter som beskrivs i Avsnitt 10 gäller även för dina data som samlats in av Webbplatsen. För att utöva någon rättighet rörande din väntelist-e-post, kontakta [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Vi svarar inom 30 dagar.

## 5. Rättslig grund för behandling (GDPR)

- **GPS-/sessionsdata, fyndregistreringar, valvposter:** Samtycke (Art. 6(1)(a)) — du initierar aktivt dessa handlingar
- **API-anrop (väder, geokodning):** Berättigat intresse (Art. 6(1)(f)) — nödvändigt för grundläggande funktionalitet
- **Google Drive-säkerhetskopiering:** Samtycke (Art. 6(1)(a)) — du aktiverar och autentiserar uttryckligen
- **Abonnemangsverifiering:** Avtalsutförande (Art. 6(1)(b)) — nödvändigt för att tillhandahålla betalda funktioner
- **Firebase Analytics och Crashlytics (valfritt):** Samtycke (Art. 6(1)(a)) — aktiverat via frågan vid första uppstart eller i Inställningar, kan återkallas när som helst
- **Väntelistans e-post (Webbplats):** Samtycke (Art. 6(1)(a)) — se Avsnitt 4.1

Du kan när som helst återkalla samtycke genom att stoppa den relevanta aktiviteten, avinstallera Appen eller avregistrera dig från Webbplatsens e-postmeddelanden.

## 6. Hur vi använder dina data

All databehandling i Appen sker **lokalt på din enhet**. Vi använder appdata uteslutande för att tillhandahålla appens funktioner: kartvisning, sessionsspårning, fyndregistrering, tillståndshantering, väder-/tidvattensdata, exporter, säkerhetskopiering och abonnemangsverifiering.

Webbplatsdata (din väntelist-e-post) används endast för att skicka lanserings- och förlanseringskommunikation som beskrivs i Avsnitt 4.

## 7. Datalagring och säkerhet

**Appdata:**

- Sessions- och fynddata lagras i en Room-databas (SQLite) i Appens sandlådade privata lagring på din enhet — skyddade av Androids app-isolationsmodell och enhetens kryptering av användardata i vila
- Känsliga inställningar använder Androids EncryptedSharedPreferences (AES-256)
- Mediafiler lagras i appens privata interna lagring, otillgängliga för andra appar
- Android-molnsäkerhetskopiering är **inaktiverad** (`android:allowBackup="false"`) för att förhindra oavsiktlig dataexponering
- Google Drive-säkerhetskopior använder Googles krypterade API:er (HTTPS/TLS) och existerar endast i ditt konto

För Appen driver vi inga servrar, databaser eller molninfrastruktur som lagrar din sökningsdata.

**Webbplatsdata:** Väntelist-e-post lagras i en Supabase Postgres-databas värd i EU (Irland). Anslutningar är krypterade (TLS). Åtkomst är begränsad till administrativa ändamål. Utgående e-post skickas via Resend (EU, Irland) över TLS. Se Avsnitt 4.

## 8. Datalagring

**Appdata:** Lokal data behålls tills du väljer att radera den. Du kan radera enskilda objekt i Appen, rensa all data via Android-inställningar eller avinstallera Appen. Google Drive-säkerhetskopior kvarstår tills du manuellt raderar dem från ditt konto.

**Webbplatsdata:** Väntelist-e-post behålls tills du avregistrerar dig, eller 12 månader efter den offentliga lanseringen, beroende på vilket som inträffar först. Därefter raderas adresserna från Supabase-databasen.

## 9. Datadelning och utlämnande

Vi delar, säljer, hyr ut eller lämnar inte ut dina personuppgifter till tredje part. Du kan välja att dela appdata genom exporter (GPX, KML, CSV, JSON), sessionsdelningskort eller Google Drive-säkerhetskopior — allt initierat av användaren. Webbplatsens väntelist-data behandlas endast av våra namngivna personuppgiftsbiträden (Supabase, Resend) för de ändamål som beskrivs i Avsnitt 4.

## 10. Dina rättigheter (GDPR och internationellt)

### GDPR-rättigheter (EU/EES-invånare)

- **Åtkomst** — dina appdata är fullt tillgängliga på din enhet; för webbplatsdata, skicka e-post till [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Rättelse** — redigera alla register direkt i Appen, eller skicka e-post till oss för rättelser av webbplatsdata
- **Radering** — radera via raderning i appen eller avinstallation; för webbplatsdata, avregistrera dig eller skicka e-post till oss
- **Begränsning** — kontrollera all behandling genom att starta/stoppa funktioner
- **Dataportabilitet** — exportera appdata via GPX, KML, CSV, JSON
- **Invändning** — stoppa vilken funktion som helst när som helst
- **Återkalla samtycke** — när som helst utan att påverka tidigare behandling

### Storbritannien (UK GDPR)

Dina rättigheter under UK GDPR och Data Protection Act 2018 är likvärdiga med GDPR-rättigheterna ovan. Du kan kontakta [ICO](https://ico.org.uk).

### Australien (Privacy Act 1988)

Du har rättigheter enligt Australian Privacy Principles (APPs), inklusive åtkomst och korrigering. Du kan kontakta [OAIC](https://www.oaic.gov.au).

### Kanada (PIPEDA)

Du har rättigheter enligt PIPEDA och tillämplig provinsiell sekretesslagstiftning, inklusive åtkomst, korrigering och återkallande av samtycke. Du kan kontakta [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

### Kalifornien-invånare (CCPA/CPRA)

Vi säljer **inte** eller delar personlig information. Vi använder inte data för kontextöverskridande beteendeannonsering. Du har rätt att veta, radera, begränsa användning av känsliga data och icke-diskriminering.

### Brasilien-invånare (LGPD)

Likvärdiga rättigheter enligt Lei Geral de Proteção de Dados gäller. Du kan kontakta [ANPD](https://www.gov.br/anpd).

### Nya Zeeland (Privacy Act 2020)

Du har rättigheter enligt Privacy Act 2020, inklusive åtkomst och korrigering. Du kan kontakta [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Andra jurisdiktioner

Oavsett din plats har du full kontroll över dina data. Där lokal lag ger ytterligare integritetsrättigheter som inte kan avstås genom kontrakt, gäller dessa rättigheter.

## 11. Barns integritet

Varken Appen eller Webbplatsen är riktad till barn under 18 år. Appens avsedda användare är en vuxen detektorist; många funktioner (tillståndsvalv, avtal med markägare, digitala signaturer, betalda prenumerationer) kräver i de flesta jurisdiktioner vuxen rättslig status. Vi samlar inte medvetet in personlig information från barn under 18 år. Om du tror att ett barn har använt Appen eller Webbplatsen, kan du radera deras data genom att rensa appdata, avinstallera eller avregistrera dig från väntelistan.

## 12. Behörigheter förklarade (App)

- **ACCESS_FINE_LOCATION** — GPS för vägspårning under sessioner
- **ACCESS_COARSE_LOCATION** — ungefärlig plats som reserv när exakt GPS inte är tillgänglig
- **FOREGROUND_SERVICE / FOREGROUND_SERVICE_LOCATION** — håller GPS-spåraren igång som en förgrundstjänst så att spårningen fortsätter med skärmen avstängd under aktiva sessioner
- **CAMERA** — fånga foton för fyndregistrering
- **RECORD_AUDIO** — spela in ljudanteckningar för fynd
- **READ/WRITE_CALENDAR** — skriver påminnelser om utgångsdatum för tillstånd i valvet till din enhets lokala kalender. Om du har aktiverat synkronisering med en molnkalender i Android (till exempel Google Calendar-synkronisering) synkroniseras dessa påminnelser till ditt konto tillsammans med resten av din kalender — den synkroniseringen styrs av dina Android-inställningar, inte av Appen
- **INTERNET** — väder, geokodning, tidvatten, kartor, abonnemang
- **ACCESS_NETWORK_STATE** — upptäcka offline-läge innan nätverksanrop görs
- **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS** — förhindra att systemet stänger av GPS-spåraren under långa sessioner
- **POST_NOTIFICATIONS** — GPS-spårningsmeddelande
- **VIBRATE** — gränsmeddelanden från perimeterväktaren

Du kan återkalla vilken behörighet som helst när som helst via Android-inställningar.

## 13. Cookies och spårning

**Appen** använder inte cookies, webbsignaler, pixeletiketter, enhetsfingeravtryck eller andra spårningstekniker. **Webbplatsen** sätter inga förstapartscookies; se Avsnitt 4.3 för fullständig avslöjande av webbplatscookies.

## 14. Internationella dataöverföringar

**Appdata:** Eftersom all sökningsdata lagras lokalt på din enhet sker inga internationella dataöverföringar under vår kontroll. API-anrop till tredje parter kan behandlas i de jurisdiktioner där dessa tjänster opererar.

**Webbplatsdata:** Väntelist-e-post lagras i EU (Irland) av Supabase och behandlas av Resend (EU, Irland). Om du kommer åt Webbplatsen utanför EU överförs din e-post till EU för behandling.

## 15. Meddelande om dataintrång

**App:** Eftersom vi inte lagrar din sökningsdata på någon server som vi driver är ett dataintrång som påverkar appdata från vår sida inte möjligt. Om vi blir medvetna om en sårbarhet i Appen kommer vi att utfärda en uppdatering och meddela användarna via Appen eller webbplatsen.

**Webbplats:** Våra personuppgiftsbiträden (Supabase, Resend) upprätthåller sina egna protokoll för intrångsmeddelande. I det osannolika fallet av ett intrång som påverkar din väntelist-e-post kommer vi att meddela dig och relevant tillsynsmyndighet (ANSPDCP) inom 72 timmar enligt vad som krävs av GDPR.

## 16. Ändringar av denna policy

Vi kan uppdatera denna integritetspolicy för att återspegla förändringar i funktionalitet eller tillämpliga lagar. Datumet "Senast uppdaterad" kommer att revideras. Väsentliga ändringar kommer att kommuniceras via Appen eller webbplatsen.

## 17. Tredjepartsintegritetspolicys

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics och Crashlytics — endast opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Webbplats hosting + analys)
- [Supabase](https://supabase.com/privacy) (Webbplatsdatabas)
- [Resend](https://resend.com/legal/privacy-policy) (Webbplatsens e-post)

## 18. Kontakta oss

**Coc Lorand Adrian P.F.A.** (verkar som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-post: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Webbplats: [https://sweeptrack.pro](https://sweeptrack.pro)

För GDPR-relaterade förfrågningar kan du också kontakta ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) på [dataprotection.ro](https://www.dataprotection.ro).

---

Denna integritetspolicy träder i kraft den 12 maj 2026 och gäller för alla versioner av SweepTrack Pro.
