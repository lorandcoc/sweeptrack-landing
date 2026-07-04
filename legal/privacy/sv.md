# Integritetspolicy

**SweepTrack Pro** — GPS-spårningsapplikation för metallsökning

Ikraftträdandedatum: 12 maj 2026 · Senast uppdaterad: 3 juli 2026

Drivs av: Coc Lorand-Adrian P.F.A., som verkar under namnet "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Webbplats: sweeptrack.pro

---

## 1. Introduktion

Denna integritetspolicy förklarar hur SweepTrack Pro ("Appen") och webbplatsen sweeptrack.pro ("Webbplatsen") samlar in, använder, lagrar och skyddar din information. Vi strävar efter att skydda din integritet och säkerställa transparens kring vår datahantering.

Appen är utformad med en **integritetsfokuserad arkitektur**: din sparade sökningsdata — sessioner, fynd, valvposter — lagras lokalt på din enhet, vi säljer den inte och vi använder den inte för att profilera dig. Viss data lämnar din enhet enbart för de användarinitierade funktioner som beskrivs i Avsnitt 3.2, 3.3 och 3.5: realtids-API-funktioner, valfri säkerhetskopiering, valfri diagnostik, valfri feedback och — om du väljer att skapa eller gå med i en grupp — den valfria Live Group-platsdelningen som är hela syftet med Radar-funktionen. Webbplatsen drivs separat och har sin egen datahantering, beskriven i Avsnitt 4.

## 2. Personuppgiftsansvarig

I enlighet med EU:s allmänna dataskyddsförordning (GDPR) och rumänsk dataskyddslag (lag 190/2018) är personuppgiftsansvarig:

**Coc Lorand-Adrian P.F.A.** (verkar som Loriba)  
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

- Fyndtyp (Skatt, Guld, Mynt, Relik, Smycke, Skräp, Osorterat/Snabbsläpp)
- Fyndets plats (GPS-koordinater vid registreringstillfället)
- Valfri metadata: namn, anteckningar, djup, uppskattat värde, vikt
- Mediabilagor: foton, ljudinspelningar och videoinspelningar

**Data från tillståndsvalvet:**

- Platsnamn och platser
- Markägares namn och kontaktinformation
- Tillståndsnummer, utfärdandedatum, utgångsdatum
- Platsgränskoordinater (polygon)
- Digitala signaturer (SVG-format)
- Anpassade taggar och anteckningar

**Vägpunkter:** Användarplacerade kartmarkörer — koordinater, namn, kategori och valfria anteckningar.

**Annan lokal data:** Detektorinställningar, appinställningar (tema, enheter, språk, kartinställningar) och väderögonblicksbilder kopplade till sessioner.

### 3.2 Data som behandlas tillfälligt (lagras inte)

Följande data skickas till tredjeparts-API:er för realtidsfunktionalitet och **lagras inte av oss eller dessa tjänster utöver den omedelbara begäran**:

- Ungefärliga GPS-koordinater skickade till Open-Meteo för väderprognoser och höjddata
- Koordinater som översätts till platsnamn via Androids plattformsgeokodare (tillhandahållen av Google Play Services på de flesta enheter) för omvänd geokodning — används för att märka sessioner och fynd med ett platsnamn
- Tidvattenstation-identifierare skickade till NOAA för tidvattensprognoser (kuststationer i USA)
- Platssökfrågor skickade till Open-Meteo Geocoding för sökning på platsnamn
- Kartrutebegäranden (som avslöjar det ungefärliga område på kartan du tittar på) skickade till leverantören av rutor för den aktiva karttypen: Esri/ArcGIS (satellitbilder och USGS topografiska kartor), OpenStreetMap och OpenTopoMap (offline-/nedladdningsbara kartpaket) och — för det rumänska historiska "Gammal karta"-överlägget — en cachande proxy som vi driver på Cloudflare och som hämtar rutor från geo-spatial.org (eHarta). Den förvalda Google-kartans baslager omfattas av Google Maps SDK i Avsnitt 3.3

### 3.3 Data som behandlas av tredjepartstjänster

**Google Maps SDK:** Din enhets plats behandlas av Google Maps för kartvisning. Föremål för [Googles integritetspolicy](https://policies.google.com/privacy).

**Google Sign-In och Google Drive (valfritt):** Om du aktiverar Google Drive-säkerhetskopiering lagras e-postadressen till ditt Google-konto lokalt för att identifiera det autentiserade kontot. Säkerhetskopieringsdata laddas upp till ditt eget Google Drive-konto. Vi har ingen tillgång till din Google Drive.

**RevenueCat (Abonnemangshantering):** En anonym, slumpmässigt genererad appanvändaridentifierare används för abonnemangsverifiering. Ingen personlig information delas. Föremål för [RevenueCats integritetspolicy](https://www.revenuecat.com/privacy).

**Firebase Analytics och Crashlytics (Valfritt — inaktiverat som standard):** Två Google Firebase-SDK:er är integrerade i Appen, men **båda förblir inaktiva tills du uttryckligen samtycker** via samtyckesfrågan vid första uppstart eller i **Inställningar → Integritet → Diagnostik**. Tills du ger samtycke skickas inga händelser och inga kraschrapporter laddas upp. Du kan återkalla samtycket när som helst; återkallelsen träder i kraft från nästa händelse. Felsökningsbyggen aktiverar aldrig Crashlytics.

När de är aktiverade:

- **Firebase Analytics** loggar åtta aggregerade händelsenamn med icke-identifierande parametrar: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Händelsernas innehåll innehåller **aldrig** GPS-koordinater, adresser, fyndnamn, foton, ljudinspelningar, valvdata eller någon annan personligt identifierbar information — endast räknare, varaktigheter, avstånd, fyndtyper (endast kategori) och funktionsidentifierare. Händelsen `find_logged` rapporterar typen som en grov kategori (`valuable`, `find`, `trash`, `unsorted` eller `other` för en typ som inte känns igen) snarare än den specifika fyndtypen, så den aggregerade instrumentpanelen kan inte sluta sig till fördelningen av värdesaker som en enskild användare registrerar.
- **Firebase Crashlytics** laddar upp stackspår från krascher tillsammans med enhetsmodell, operativsystemets version och appens version för att hjälpa oss att diagnostisera buggar. Innan en krasch eller ett icke-fatalt fel vidarebefordras till Crashlytics **tar Appen bort delsträngar med koordinatform från undantagsmeddelandet** (t.ex. `lat=`/`lon=`-mönster, signerade decimaltal med tre eller fler decimaler), så att GPS-positioner som lagrats i lokala variabler inte kan läcka genom felrapporteringen. Stack-ramar (klass, metod, rad) bevaras för gruppering; körtidsvärden inte. En processövergripande hanterare för ofångade undantag tillämpar samma rensning på fatala krascher som SDK:t fångar automatiskt.

Båda tjänsterna omfattas av [Googles integritetspolicy](https://policies.google.com/privacy) och [Firebases sekretess- och säkerhetsinformation](https://firebase.google.com/support/privacy).

**Feedback i appen (valfritt):** Om du skickar feedback via Appens feedbackformulär överför Appen den information du anger — ditt meddelande, den valda kategorin och om det är en buggrapport eller en funktionsidé — tillsammans med din enhetsmodell, Android-version, appversion och språkinställning, samt, **endast om du väljer att ange den, din e-postadress**, till en Supabase Edge Function som vi driver, så att vi kan läsa och svara. Ingenting skickas om du inte skickar in formuläret. Supabase, Inc. agerar som vårt personuppgiftsbiträde (EU-region). Föremål för [Supabases integritetspolicy](https://supabase.com/privacy).

### 3.4 Data som Appen INTE samlar in

- **Appen** samlar inte in ditt namn, telefonnummer eller andra personliga identifierare — förutom en e-postadress som du frivilligt anger när du skickar in feedback i appen (se Avsnitt 3.3)
- **Appen** använder inte analyser eller kraschrapporter om du inte uttryckligen samtycker (se Firebase-avsnittet ovan; inaktiverat som standard och kan när som helst återkallas i Inställningar → Integritet → Diagnostik)
- **Appen** använder inte annonsramverk eller reklamidentifierare
- **Appen** spårar inte användningsmönster, sessionsfrekvens eller funktionsanvändning
- **Appen** skapar inte användarprofiler eller beteendefingeravtryck
- **Appen** säljer, hyr ut eller byter inte dina data, och delar dem endast där du själv initierar det: realtids-API-anropen i Avsnitt 3.2, valfri Google Drive-säkerhetskopiering, opt-in Firebase-diagnostik, valfri Live Group-platsdelning (Avsnitt 3.5) och feedback som du väljer att skicka in (Avsnitt 3.3)
- **Appen** driver inga servrar som lagrar din sparade sökningsdata (sessioner, fynd, valvposter) — med ett undantag som du kontrollerar: den valfria Live Group-funktionen (Avsnitt 3.5) delar din realtidsplats med en grupp som du skapar eller går med i, via Googles Firebase Realtime Database, medan du är med i den gruppen. Bortsett från Live Group är det enda innehåll som når en server som vi driver den feedback som du väljer att skicka in (Avsnitt 3.3)

Webbplatsens datahantering behandlas separat i Avsnitt 4.

### 3.5 Live Group-platsdelning (valfritt — Radar-funktionen)

SweepTrack Pro innehåller **Radar**, en funktion för gruppositionering i realtid som nås via RADAR-knappen på hemkartan. Den förblir avstängd om du inte **skapar eller går med i en grupp**. Att skapa (vara värd för) en grupp är en Pro-funktion; att gå med i en grupp är gratis. Medan du är med i en grupp överförs följande till Googles **Firebase Realtime Database** och görs synligt, i realtid, för de övriga medlemmarna i samma grupp:

- **Ditt visningsnamn** — ett namn som du väljer; det behöver inte vara ditt riktiga namn.
- **Din exakta plats** — GPS-latitud och -longitud med noggrannhet och kurs, uppdaterad medan du är med i gruppen (ungefär var 30:e sekund i gratisnivån, oftare med ett abonnemang och med några sekunders mellanrum under ett SOS).
- **Din status** — online, pausad eller stillastående, samt om du har utlöst ett **SOS** (inklusive din plats i det ögonblicket).
- **Din enhets batterinivå, kartmarkörens färg och ikon** samt eventuella **delade vägpunkter, pings eller bas-/samlingspunkt** som du skapar, var och en märkt med ditt visningsnamn och dina koordinater.

**Vem som kan se det:** endast medlemmarna i gruppen. Vem som helst med gruppens anslutningskod eller QR-kod kan gå med och se realtidskartan, så dela en kod endast med personer som du avser att dela din plats med. Åtkomst upprätthålls av säkerhetsregler på serversidan; en person måste gå med i gruppen (och bli synlig själv) innan hen kan läsa positioner.

**Autentisering:** gruppens backend använder **Firebase Anonymous Authentication** — en slumpmässig identifierare för din appinstallation, inte kopplad till ditt namn, din e-post, ditt telefonnummer eller ditt Google-konto.

**Hur länge det behålls:** gruppens platsdata är tillfällig. En grupp **löper ut** (vanligtvis efter ungefär 12 timmar; provgrupper tidigare), varefter den slutar ta emot nya positioner och inte längre kan anslutas till. Att lämna en grupp raderar din medlemspost omedelbart, och gruppen raderas när dess sista medlem lämnar. Om en grupp överges utan att någon lämnar den, förblir de sista positionerna som delades före utgången lagrade i den utgångna gruppen tills den raderas. Vi behåller ingen långsiktig historik över dina rörelser på våra servrar, och du kan begära radering när som helst (Avsnitt 18).

Den fristående gratis följeslagarappen har sin egen, mer utförliga information i [SweepTrack Radars integritetspolicy](https://sweeptrack.pro/privacy-radar).

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
- **API-anrop (väder, geokodning, kartrutor):** Berättigat intresse (Art. 6(1)(f)) — nödvändigt för grundläggande funktionalitet
- **Google Drive-säkerhetskopiering:** Samtycke (Art. 6(1)(a)) — du aktiverar och autentiserar uttryckligen
- **Abonnemangsverifiering:** Avtalsutförande (Art. 6(1)(b)) — nödvändigt för att tillhandahålla betalda funktioner
- **Firebase Analytics och Crashlytics (valfritt):** Samtycke (Art. 6(1)(a)) — aktiverat via frågan vid första uppstart eller i Inställningar, kan återkallas när som helst
- **Live Group-platsdelning (valfritt):** Samtycke (Art. 6(1)(a)) — du skapar aktivt eller går med i en grupp, med en förgrundsavisering som visas medan delningen är aktiv; återkalla genom att lämna gruppen eller stänga funktionen
- **Feedback i appen (valfritt):** Samtycke (Art. 6(1)(a)) — skickas endast när du skickar in feedbackformuläret
- **Väntelistans e-post (Webbplats):** Samtycke (Art. 6(1)(a)) — se Avsnitt 4.1

Du kan när som helst återkalla samtycke genom att stoppa den relevanta aktiviteten, avinstallera Appen eller avregistrera dig från Webbplatsens e-postmeddelanden.

## 6. Hur vi använder dina data

Nästan all databehandling i Appen sker **lokalt på din enhet**. Vi använder appdata för att tillhandahålla appens funktioner: kartvisning, sessionsspårning, fyndregistrering, tillståndshantering, väder-/tidvattensdata, exporter, säkerhetskopiering och abonnemangsverifiering. Data lämnar din enhet enbart för de användarinitierade funktionerna i Avsnitt 3.2 och 3.3 (realtids-API:er, valfri säkerhetskopiering, valfri diagnostik, valfri feedback).

Webbplatsdata (din väntelist-e-post) används endast för att skicka lanserings- och förlanseringskommunikation som beskrivs i Avsnitt 4.

## 7. Datalagring och säkerhet

**Appdata:**

- Sessions- och fynddata lagras i en Room-databas (SQLite) i Appens sandlådade privata lagring på din enhet — skyddade av Androids app-isolationsmodell och enhetens kryptering av användardata i vila
- På enheter som stöder det använder känsliga inställningar och data från tillståndsvalvet Androids EncryptedSharedPreferences (AES-256) med stöd av Android Keystore. Om Keystore eller EncryptedSharedPreferences inte är tillgängligt på en enhet faller Appen tillbaka på app-privat (sandlådad) lagring och visar en bestående varning i appen om att denna data inte är separat krypterad på den enheten
- Mediafiler lagras i appens privata interna lagring, otillgängliga för andra appar
- Android-molnsäkerhetskopiering är **inaktiverad** (`android:allowBackup="false"`) för att förhindra oavsiktlig dataexponering
- Google Drive-säkerhetskopior överförs via HTTPS/TLS och lagras enbart i ditt eget konto. Du kan valfritt skydda en säkerhetskopia med en lösenfras, som krypterar arkivet (AES-256-GCM) på din enhet före uppladdning så att det inte kan läsas utan din lösenfras
- Valfri feedback i appen som du skickar in överförs via HTTPS/TLS till en Supabase Edge Function (EU-region)

För Appen driver vi inga servrar som lagrar din sparade sökningsdata. Det enda undantaget är den valfria Live Group-funktionen (Avsnitt 3.5), som håller tillfällig, automatiskt utgående gruppplatsdata i Googles Firebase medan du är med i en grupp.

**Webbplatsdata:** Väntelist-e-post lagras i en Supabase Postgres-databas värd i EU (Irland). Anslutningar är krypterade (TLS). Åtkomst är begränsad till administrativa ändamål. Utgående e-post skickas via Resend (EU, Irland) över TLS. Se Avsnitt 4.

## 8. Datalagring

**Appdata:** Lokal data behålls tills du väljer att radera den. Du kan radera enskilda objekt i Appen, rensa all data via Android-inställningar eller avinstallera Appen. Google Drive-säkerhetskopior kvarstår tills du manuellt raderar dem från ditt konto.

**Webbplatsdata:** Väntelist-e-post behålls tills du avregistrerar dig, eller 12 månader efter den offentliga lanseringen, beroende på vilket som inträffar först. Därefter raderas adresserna från Supabase-databasen.

## 9. Datadelning och utlämnande

Vi säljer, hyr ut eller byter inte dina personuppgifter. Du kan välja att dela appdata genom exporter (GPX, KML, CSV, JSON), sessionsdelningskort, Google Drive-säkerhetskopior eller realtidsplatsdelning i en Radar-grupp (Avsnitt 3.5) — allt initierat av användaren. Om du skickar in feedback i appen behandlas den för vår räkning av Supabase (se Avsnitt 3.3). Webbplatsens väntelist-data behandlas endast av våra namngivna personuppgiftsbiträden (Supabase, Resend) för de ändamål som beskrivs i Avsnitt 4.

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
- **INTERNET** — väder, geokodning, tidvatten, kartor, abonnemang, valfri feedback
- **ACCESS_NETWORK_STATE** — upptäcka offline-läge innan nätverksanrop görs
- **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS** — förhindra att systemet stänger av GPS-spåraren under långa sessioner
- **POST_NOTIFICATIONS** — GPS-spårningsmeddelande
- **VIBRATE** — gränsmeddelanden från perimeterväktaren

Du kan återkalla vilken behörighet som helst när som helst via Android-inställningar.

## 13. Cookies och spårning

**Appen** använder inte cookies, webbsignaler, pixeletiketter, enhetsfingeravtryck eller andra spårningstekniker. **Webbplatsen** sätter inga förstapartscookies; se Avsnitt 4.3 för fullständig avslöjande av webbplatscookies.

## 14. Internationella dataöverföringar

**Appdata:** Eftersom all sökningsdata lagras lokalt på din enhet sker inga internationella dataöverföringar av din sökningsdata under vår kontroll. API-anrop till tredje parter (Avsnitt 3.2), valfri Google Drive-säkerhetskopiering, valfri Firebase-diagnostik, valfri Live Group-platsdelning (Avsnitt 3.5, via Googles Firebase) och valfri feedback kan behandlas i de jurisdiktioner där dessa tjänster opererar.

**Webbplatsdata:** Väntelist-e-post lagras i EU (Irland) av Supabase och behandlas av Resend (EU, Irland). Om du kommer åt Webbplatsen utanför EU överförs din e-post till EU för behandling.

## 15. Meddelande om dataintrång

**App:** Din sparade sökningsdata lagras på din enhet, inte på servrar som vi driver, så den exponeras inte vid ett intrång i vår infrastruktur. Det enda undantaget är den valfria Live Group-funktionen (Avsnitt 3.5): medan du är med i en grupp hålls din realtidsplats tillfälligt i Googles Firebase, åtkomstbegränsad genom regler på serversidan till medlemmarna i den gruppen. Om vi blir medvetna om en sårbarhet i Appen kommer vi att utfärda en uppdatering och meddela användarna via Appen eller webbplatsen. Valfri feedback som du skickar in hålls av vårt personuppgiftsbiträde Supabase enligt dess egna protokoll för intrångsmeddelande.

**Webbplats:** Våra personuppgiftsbiträden (Supabase, Resend) upprätthåller sina egna protokoll för intrångsmeddelande. I det osannolika fallet av ett intrång som påverkar din väntelist-e-post kommer vi att meddela dig och relevant tillsynsmyndighet (ANSPDCP) inom 72 timmar enligt vad som krävs av GDPR.

## 16. Ändringar av denna policy

Vi kan uppdatera denna integritetspolicy för att återspegla förändringar i funktionalitet eller tillämpliga lagar. Datumet "Senast uppdaterad" kommer att revideras. Väsentliga ändringar kommer att kommuniceras via Appen eller webbplatsen.

## 17. Tredjepartsintegritetspolicys

- [Google (Maps, Drive, Sign-In, plattformsgeokodare)](https://policies.google.com/privacy)
- [Firebase (Analytics och Crashlytics — endast opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [OpenTopoMap](https://opentopomap.org/about)
- [Esri/ArcGIS](https://www.esri.com/en-us/privacy/overview)
- [eHarta / geo-spatial.org](https://www.geo-spatial.org)
- [Cloudflare](https://www.cloudflare.com/privacypolicy/) (proxy för historiska kartrutor)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Webbplats hosting + analys)
- [Supabase](https://supabase.com/privacy) (Webbplatsdatabas + feedback i appen)
- [Resend](https://resend.com/legal/privacy-policy) (Webbplatsens e-post)

## 18. Kontakta oss

**Coc Lorand-Adrian P.F.A.** (verkar som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-post: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Webbplats: [https://sweeptrack.pro](https://sweeptrack.pro)

För GDPR-relaterade förfrågningar kan du också kontakta ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) på [dataprotection.ro](https://www.dataprotection.ro).

---

Denna integritetspolicy träder i kraft den 12 maj 2026 och gäller för alla versioner av SweepTrack Pro.
