# Privatlivspolitik

**SweepTrack Pro** — GPS-sporingsapplikation til metaldetektering

Ikrafttrædelsesdato: 12. maj 2026 · Sidst opdateret: 4. juni 2026

Drives af: Coc Lorand Adrian P.F.A., der handler som "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introduktion

Denne privatlivspolitik forklarer, hvordan SweepTrack Pro ("Appen") og websitet sweeptrack.pro ("Websitet") indsamler, bruger, gemmer og beskytter dine oplysninger. Vi er forpligtede til at beskytte dit privatliv og sikre gennemsigtighed omkring vores datapraksis.

Appen er designet med en **arkitektur, hvor privatlivet kommer først**: Alle detekteringsdata gemmes lokalt på din enhed, vi driver ingen backend-servere, der gemmer dine detekteringsdata, og vi indsamler, overfører eller sælger ikke dine personlige detekteringsdata. En lille mængde data forlader kun din enhed til de brugerinitierede funktioner, der er beskrevet i Afsnit 3.2 og 3.3 (realtids-API-funktioner, valgfri sikkerhedskopiering, valgfri diagnostik og valgfri feedback). Websitet drives separat og har sin egen datapraksis, beskrevet i Afsnit 4.

## 2. Dataansvarlig

I forbindelse med EU's generelle forordning om databeskyttelse (GDPR) og den rumænske databeskyttelseslov (lov 190/2018) er den dataansvarlige:

**Coc Lorand Adrian P.F.A.** (der handler som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Data vi indsamler (Android-app)

### 3.1 Data, der gemmes lokalt på din enhed

Følgende data oprettes af dig og gemmes **udelukkende på din enhed**. Vi har aldrig adgang til disse data, medmindre du udtrykkeligt deler dem.

**Lokations- og sessionsdata:**

- GPS-koordinater (breddegrad, længdegrad) under aktive sporingssessioner
- Hastighed, højde, kurs og nøjagtighedsværdier fra enhedens sensorer
- Sessionsmetadata: navn, dato, start-/sluttid, varighed, distance, tags
- Rutekoordinater med tidsstempler
- Stednavne (opnået via omvendt geokodning)

**Fund- og opdagelsesregistreringer:**

- Type af fund (Skat, Guld, Mønt, Relikvie, Smykke, Affald, Usorteret/Hurtig placering)
- Fundsted (GPS-koordinater på registreringstidspunktet)
- Valgfri metadata: navn, noter, dybde, anslået værdi, vægt
- Mediefiler: fotografier og lydoptagelser

**Data fra tilladelsesboksen:**

- Stedsnavne og -placeringer
- Grundejeres navne og kontaktoplysninger
- Tilladelsesnumre, udstedelsesdatoer, udløbsdatoer
- Stedgrænsekoordinater (polygon)
- Digitale signaturer (SVG-format)
- Brugerdefinerede tags og noter

**Vejpunkter:** Brugerplacerede kortmarkører — koordinater, navn, kategori og valgfri noter.

**Andre lokale data:** Detektor-forudindstillingskonfigurationer, app-præferencer (tema, enheder, sprog, kortindstillinger) og vejr-øjebliksbilleder knyttet til sessioner.

### 3.2 Data, der behandles midlertidigt (gemmes ikke)

Følgende data sendes til tredjeparts API'er for realtidsfunktionalitet og **gemmes ikke af os eller af disse tjenester ud over den umiddelbare anmodning**:

- Omtrentlige GPS-koordinater sendt til Open-Meteo for vejrudsigter og højdedata
- Koordinater omdannet til stednavne via Androids platforms-geokoder (leveret af Google Play Services på de fleste enheder) til omvendt geokodning — bruges til at mærke sessioner og fund med et stednavn
- Omtrentlige GPS-koordinater sendt til Overpass API for nærliggende historiske POI'er
- Omtrentlige GPS-koordinater sendt til Wikipedia API til geografisk søgning af nærliggende artikler
- Tidevands-station-ID'er sendt til NOAA for tidevandsudsigter
- Lokationssøgeforespørgsler sendt til Open-Meteo Geocoding
- Kortfliseanmodninger (som afslører det omtrentlige område af kortet, du ser på) sendt til den aktive korttypes flise-leverandør: Esri/ArcGIS (satellitbilleder og USGS-topografiske kort), OpenStreetMap og OpenTopoMap (offline/downloadbare kortpakker) og — for det rumænske historiske "Gammelt kort"-overlay — en caching-proxy, vi driver på Cloudflare, der henter fliser fra geo-spatial.org (eHarta). Standard Google-kortbaggrunden er dækket under Google Maps SDK i Afsnit 3.3

### 3.3 Data behandlet af tredjepartstjenester

**Google Maps SDK:** Din enheds placering behandles af Google Maps til kortvisning. Underlagt [Googles privatlivspolitik](https://policies.google.com/privacy).

**Google Sign-In og Google Drive (valgfrit):** Hvis du aktiverer Google Drive-sikkerhedskopiering, gemmes din Google-kontos e-mailadresse lokalt for at identificere den autentificerede konto. Sikkerhedskopieringsdata uploades til din egen Google Drive-konto. Vi har ikke adgang til din Google Drive.

**RevenueCat (Abonnementsstyring):** En anonym, tilfældigt genereret app-bruger-identifikator bruges til abonnementsverifikation. Ingen personlige oplysninger deles. Underlagt [RevenueCats privatlivspolitik](https://www.revenuecat.com/privacy).

**Firebase Analytics og Crashlytics (Valgfrit — deaktiveret som standard):** To Google Firebase-SDK'er er integreret i Appen, men **begge forbliver inaktive, indtil du udtrykkeligt giver samtykke** — enten via samtykkeprompten ved første opstart eller i **Indstillinger → Privatliv → Diagnostik**. Indtil du giver samtykke, sendes der ingen hændelser, og der uploades ingen nedbrudsrapporter. Du kan til enhver tid tilbagekalde samtykket; tilbagekaldelsen træder i kraft fra næste hændelse. Debug-builds aktiverer aldrig Crashlytics.

Når de er aktiveret:

- **Firebase Analytics** logger otte aggregerede hændelsesnavne med ikke-identificerende parametre: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Hændelsernes indhold indeholder **aldrig** GPS-koordinater, adresser, fundnavne, fotos, lydoptagelser, boksdata eller andre personligt identificerbare oplysninger — kun tællere, varigheder, afstande, fundtype (kun kategorien) og funktionsidentifikatorer. Hændelsen `find_logged` rapporterer typen som en grov kategori (`valuable`, `find`, `trash`, `unsorted` eller `other` for enhver ukendt type) frem for den specifikke fundtype, så det aggregerede dashboard ikke kan udlede fordelingen af værdigenstande, en individuel bruger registrerer.
- **Firebase Crashlytics** uploader stack-spor fra nedbrud sammen med enhedsmodel, operativsystemets version og appens version for at hjælpe os med at diagnosticere fejl. Før et nedbrud eller en ikke-fatal fejl videresendes til Crashlytics, **fjerner Appen koordinatformede delstrenge fra undtagelsesbeskeden** (f.eks. `lat=`/`lon=`-mønstre, fortegnsbestemte decimaltal med tre eller flere decimaler), så GPS-positioner gemt i lokale variable ikke kan lække via fejlrapportering. Stack-rammer (klasse, metode, linje) bevares til gruppering; runtime-værdier ikke. En procesbred handler for ufangede undtagelser anvender den samme scrubning på fatale nedbrud, der opfanges automatisk af SDK'et.

Begge tjenester er underlagt [Googles privatlivspolitik](https://policies.google.com/privacy) og [Firebases privatlivs- og sikkerhedsoplysninger](https://firebase.google.com/support/privacy).

**Feedback i appen (valgfrit):** Hvis du sender feedback via Appens feedbackformular, overfører Appen de oplysninger, du indtaster — din besked, den valgte kategori og hvorvidt det er en fejlrapport eller en funktionsidé — sammen med din enhedsmodel, Android-version, appens version og sprog, og **kun hvis du vælger at angive den, din e-mailadresse**, til en Supabase Edge Function, vi driver, så vi kan læse og besvare den. Der sendes intet, medmindre du indsender formularen. Supabase, Inc. fungerer som vores databehandler (EU-regionen). Underlagt [Supabases privatlivspolitik](https://supabase.com/privacy).

### 3.4 Data, som Appen IKKE indsamler

- **Appen** indsamler ikke dit navn, telefonnummer eller andre personlige identifikatorer — bortset fra en e-mailadresse, du valgfrit indtaster, når du indsender feedback i appen (se Afsnit 3.3)
- **Appen** bruger ikke analyse eller fejlrapportering, medmindre du udtrykkeligt giver samtykke (se Firebase-afsnittet ovenfor; deaktiveret som standard og kan til enhver tid tilbagekaldes i Indstillinger → Privatliv → Diagnostik)
- **Appen** bruger ikke annonceframeworks eller reklame-identifikatorer
- **Appen** sporer ikke brugsmønstre, sessionsfrekvens eller funktionsanvendelse
- **Appen** opretter ikke brugerprofiler eller adfærdsmæssige fingeraftryk
- **Appen** sælger, udlejer eller bytter ikke dine data og deler dem kun, hvor du selv iværksætter det: realtids-API-opkaldene i Afsnit 3.2, valgfri Google Drive-sikkerhedskopiering, opt-in Firebase-diagnostik og feedback, du vælger at indsende (Afsnit 3.3)
- **Appen** driver ingen servere, der modtager, behandler eller gemmer dine detekteringsdata (lokation, fund, boksindgange, sessioner); det eneste indhold, du indtaster, som når en server, vi driver, er feedback, du vælger at indsende (Afsnit 3.3)

Websitets datapraksis dækkes separat i Afsnit 4.

## 4. Websitets datapraksis (sweeptrack.pro)

Dette afsnit dækker datapraksis, der er specifik for vores website sweeptrack.pro. Android-appen beskrevet i Afsnit 3 og 5-18 fungerer uafhængigt og deler ikke infrastruktur med Websitet.

### 4.1 E-mail-indsamling til ventelisten

Når du indsender din e-mailadresse via en tilmeldingsformular på Websitet, indsamler vi:

- **E-mailadresse**, du angiver
- **Tidsstempel** for tilmelding
- **IP-adresse** (midlertidig) — bruges til hastighedsbegrænsning; gemmes ikke ud over forespørgslens varighed

**Formål:** At underrette dig, når SweepTrack Pro lanceres på Google Play, og sende opdateringer før lanceringen om produktet og Founder's Lifetime-tilbuddet. Vi vil ikke bruge din e-mail til andre formål, ikke dele den og ikke sælge den.

**Retsgrundlag (GDPR):** Samtykke (Art. 6(1)(a)) — afgivet, når du indsender formularen.

**Opbevaring:** E-mailadresser opbevares i en Supabase Postgres-database hostet i EU (Irland-regionen). Supabase, Inc. fungerer som vores databehandler i henhold til deres standard databehandleraftale.

**E-mailafsendelse:** Udgående e-mails sendes via Resend, Inc. (EU-regionen, Irland), der fungerer som vores e-mailtjeneste-databehandler i henhold til deres standard databehandleraftale.

**Opbevaringstid:** Indtil du afmelder dig, eller 12 måneder efter den offentlige lancering af SweepTrack Pro på Google Play, alt efter hvad der indtræffer først.

**Afmelding:** Svar "remove" på enhver e-mail, vi sender, eller brug List-Unsubscribe-linket, som din e-mailklient viser (Gmail og Outlook viser det ved siden af Fra-adressen).

**Dine rettigheder:** Adgang, berigtigelse, sletning, begrænsning, portabilitet og ret til at tilbagekalde samtykke. Send en e-mail til [support@sweeptrack.pro](mailto:support@sweeptrack.pro) for at udøve en af disse.

### 4.2 Website-analyse

Websitet bruger:

- **Vercel Analytics** — privatlivsvenlig analyse, der ikke bruger cookies og ikke gemmer individuelle IP-adresser. Måler kun aggregerede sidevisninger.
- **Vercel Speed Insights** — Core Web Vitals-måling (sideindlæsningstid, layoutforskydning, interaktionsforsinkelser) på aggregeret grundlag.

Begge værktøjer drives af Vercel Inc. og er underlagt [Vercels privatlivspolitik](https://vercel.com/legal/privacy-policy). De indsamler ikke personligt identificerbare oplysninger og opretter ikke brugerprofiler.

### 4.3 Cookies

Websitet sætter ingen førsteparts-cookies til sporing, reklame eller profilering. Vercel Analytics er cookieløst af design. En sprogpræference, hvis du ændrer den, gemmes i din browsers `localStorage` (ikke en cookie) og kan kun læses af din egen browser.

### 4.4 Hosting og serverlogfiler

Websitet er hostet af Vercel Inc. Vercel kan automatisk logge standard forespørgselsmetadata (IP-adresse, user agent, forespørgselssti, tidsstempel) til operationelle, præstations- og sikkerhedsformål. Disse logfiler opbevares i henhold til Vercels standardpolitik og bruges ikke af os til sporing eller profilering af enkeltpersoner.

### 4.5 Dine rettigheder for Website-data

De samme GDPR, UK GDPR, australske, canadiske, CCPA, LGPD og NZ Privacy Act-rettigheder beskrevet i Afsnit 10 gælder ligeledes for dine data indsamlet af Websitet. For at udøve enhver rettighed vedrørende din venteliste-e-mail, kontakt [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Vi svarer inden for 30 dage.

## 5. Retsgrundlag for behandling (GDPR)

- **GPS-/sessionsdata, fundregistreringer, boksindgange:** Samtykke (Art. 6(1)(a)) — du iværksætter aktivt disse handlinger
- **API-opkald (vejr, geokodning, kortfliser):** Legitim interesse (Art. 6(1)(f)) — nødvendigt for grundlæggende funktionalitet
- **Google Drive-sikkerhedskopiering:** Samtykke (Art. 6(1)(a)) — du aktiverer og autentificerer udtrykkeligt
- **Abonnementsverifikation:** Kontraktopfyldelse (Art. 6(1)(b)) — nødvendigt for at levere betalte funktioner
- **Firebase Analytics og Crashlytics (valgfrit):** Samtykke (Art. 6(1)(a)) — aktiveret via prompten ved første opstart eller i Indstillinger, kan til enhver tid tilbagekaldes
- **Feedback i appen (valgfrit):** Samtykke (Art. 6(1)(a)) — sendes kun, når du indsender feedbackformularen
- **Venteliste-e-mail (Website):** Samtykke (Art. 6(1)(a)) — se Afsnit 4.1

Du kan til enhver tid tilbagekalde samtykke ved at stoppe den relevante aktivitet, afinstallere Appen eller afmelde dig fra Websitets e-mails.

## 6. Sådan bruger vi dine data

Næsten al databehandling i Appen sker **lokalt på din enhed**. Vi bruger app-data til at levere Appens funktioner: kortvisning, sessionssporing, fundregistrering, tilladelseshåndtering, vejr-/tidevandsdata, eksport, sikkerhedskopiering og abonnementsverifikation. Data forlader kun din enhed til de brugerinitierede funktioner i Afsnit 3.2 og 3.3 (realtids-API'er, valgfri sikkerhedskopiering, valgfri diagnostik, valgfri feedback).

Website-data (din venteliste-e-mail) bruges kun til at sende lancerings- og før-lanceringsmeddelelser beskrevet i Afsnit 4.

## 7. Dataopbevaring og sikkerhed

**App-data:**

- Sessions- og funddata gemmes i en Room-database (SQLite) i Appens sandboxede private lagring på din enhed — beskyttet af Androids app-isolationsmodel og enhedens kryptering af brugerdata i hvile
- Følsomme præferencer bruger Androids EncryptedSharedPreferences (AES-256)
- Mediefiler gemmes i Appens private interne lager, utilgængeligt for andre apps
- Android-cloudsikkerhedskopiering er **deaktiveret** (`android:allowBackup="false"`) for at forhindre utilsigtet dataeksponering
- Google Drive-sikkerhedskopier bruger Googles krypterede API'er (HTTPS/TLS) og eksisterer kun på din konto
- Valgfri feedback i appen, du indsender, overføres over HTTPS/TLS til en Supabase Edge Function (EU-regionen)

For Appen driver vi ingen servere, databaser eller cloud-infrastruktur, der gemmer dine detekteringsdata.

**Website-data:** Venteliste-e-mails opbevares i en Supabase Postgres-database hostet i EU (Irland). Forbindelser er krypterede (TLS). Adgang er begrænset til administrative formål. Udgående e-mail sendes via Resend (EU, Irland) over TLS. Se Afsnit 4.

## 8. Dataopbevaring

**App-data:** Lokale data opbevares, indtil du vælger at slette dem. Du kan slette individuelle elementer i Appen, rydde alle data via Android-indstillinger eller afinstallere Appen. Google Drive-sikkerhedskopier består, indtil du manuelt sletter dem fra din konto.

**Website-data:** Venteliste-e-mails opbevares, indtil du afmelder dig eller 12 måneder efter den offentlige lancering, alt efter hvad der indtræffer først. Derefter slettes adresserne fra Supabase-databasen.

## 9. Datadeling og videregivelse

Vi sælger, udlejer eller bytter ikke dine personlige data. Du kan vælge at dele app-data gennem eksport (GPX, KML, CSV, JSON), sessionsdelingskort eller Google Drive-sikkerhedskopiering — alle initieret af brugeren. Hvis du indsender feedback i appen, behandles den på vores vegne af Supabase (se Afsnit 3.3). Websitets venteliste-data behandles kun af vores navngivne databehandlere (Supabase, Resend) til de formål, der er beskrevet i Afsnit 4.

## 10. Dine rettigheder (GDPR og internationalt)

### GDPR-rettigheder (EU/EØS-beboere)

- **Adgang** — dine app-data er fuldt tilgængelige på din enhed; for Website-data, send e-mail til [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Berigtigelse** — rediger alle poster direkte i Appen, eller send os en e-mail for at rette Website-data
- **Sletning** — slet via in-app-sletning eller afinstallation; for Website-data, afmeld dig eller send os en e-mail
- **Begrænsning** — kontroller al behandling ved at starte/stoppe funktioner
- **Dataportabilitet** — eksporter app-data via GPX, KML, CSV, JSON
- **Indsigelse** — stop enhver funktion til enhver tid
- **Tilbagekaldelse af samtykke** — til enhver tid uden at påvirke tidligere behandling

### Storbritannien (UK GDPR)

Dine rettigheder i henhold til UK GDPR og Data Protection Act 2018 svarer til GDPR-rettighederne ovenfor. Du kan kontakte [ICO](https://ico.org.uk).

### Australien (Privacy Act 1988)

Du har rettigheder i henhold til Australian Privacy Principles (APPs), inklusive adgang og rettelse. Du kan kontakte [OAIC](https://www.oaic.gov.au).

### Canada (PIPEDA)

Du har rettigheder i henhold til PIPEDA og gældende provinsielle privatlivslovgivning, inklusive adgang, rettelse og tilbagekaldelse af samtykke. Du kan kontakte [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

### Californiske beboere (CCPA/CPRA)

Vi sælger eller deler **ikke** personlige oplysninger. Vi bruger ikke data til kontekstoverskridende adfærdsreklame. Du har ret til at vide, slette, begrænse brugen af følsomme data og ikke-diskrimination.

### Brasilianske beboere (LGPD)

Tilsvarende rettigheder i henhold til Lei Geral de Proteção de Dados gælder. Du kan kontakte [ANPD](https://www.gov.br/anpd).

### New Zealand (Privacy Act 2020)

Du har rettigheder i henhold til Privacy Act 2020, inklusive adgang og rettelse. Du kan kontakte [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Andre jurisdiktioner

Uanset din placering har du fuld kontrol over dine data. Hvor lokal lov giver yderligere privatlivsrettigheder, der ikke kan frafaldes ved kontrakt, gælder disse rettigheder.

## 11. Børns privatliv

Hverken Appen eller Websitet er rettet mod børn under 18 år. Appens tilsigtede bruger er en voksen detektorist; mange funktioner (tilladelsesboks, aftaler med grundejere, digitale underskrifter, betalte abonnementer) kræver i de fleste jurisdiktioner voksen retsstatus. Vi indsamler ikke bevidst personlige oplysninger fra børn under 18 år. Hvis du tror, at et barn har brugt Appen eller Websitet, kan du slette deres data ved at rydde app-data, afinstallere eller afmelde dig ventelisten.

## 12. Tilladelser forklaret (App)

- **ACCESS_FINE_LOCATION** — GPS til rute-sporing under sessioner
- **ACCESS_COARSE_LOCATION** — omtrentlig placering som reserve, når præcis GPS ikke er tilgængelig
- **FOREGROUND_SERVICE / FOREGROUND_SERVICE_LOCATION** — holder GPS-sporeren kørende som en forgrundstjeneste, så sporing fortsætter med skærmen slukket under aktive sessioner
- **CAMERA** — tage billeder til fundregistrering
- **RECORD_AUDIO** — optage lydnoter til fund
- **READ/WRITE_CALENDAR** — skriver påmindelser om udløb af tilladelser fra boksen i din enheds lokale kalender. Hvis du har aktiveret synkronisering med en cloud-kalender i Android (for eksempel Google Calendar-synkronisering), synkroniseres disse påmindelser til din konto sammen med resten af din kalender — den synkronisering styres af dine Android-indstillinger, ikke af Appen
- **INTERNET** — vejr, geokodning, tidevand, kort, abonnementer, valgfri feedback
- **ACCESS_NETWORK_STATE** — registrere offline-tilstand, før der foretages netværkskald
- **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS** — forhindre systemet i at lukke GPS-sporeren under lange sessioner
- **POST_NOTIFICATIONS** — GPS-sporingsnotifikation
- **VIBRATE** — perimeter-vagt grænsealarmer

Du kan til enhver tid tilbagekalde enhver tilladelse via Android-indstillinger.

## 13. Cookies og sporing

**Appen** bruger ikke cookies, web-beacons, pixel-tags, enheds-fingeraftryk eller andre sporingsteknologier. **Websitet** sætter ingen førsteparts-cookies; se Afsnit 4.3 for fuld Website-cookie-oplysning.

## 14. Internationale dataoverførsler

**App-data:** Da alle detekteringsdata gemmes lokalt på din enhed, foregår ingen internationale dataoverførsler under vores kontrol. API-opkald til tredjeparter (Afsnit 3.2), valgfri Google Drive-sikkerhedskopiering, valgfri Firebase-diagnostik og valgfri feedback kan behandles i de jurisdiktioner, hvor disse tjenester opererer.

**Website-data:** Venteliste-e-mails gemmes i EU (Irland) af Supabase og behandles af Resend (EU, Irland). Hvis du tilgår Websitet uden for EU, overføres din e-mail til EU til behandling.

## 15. Underretning om databrud

**App:** Da vi ikke gemmer dine detekteringsdata på nogen server, vi driver, er et databrud, der påvirker app-data fra vores side, ikke muligt. Hvis vi bliver bekendt med en sårbarhed i Appen, udsender vi en opdatering og underretter brugerne via Appen eller websitet. Valgfri feedback, du indsender, opbevares af vores databehandler Supabase under dennes egne protokoller for brudunderretning.

**Website:** Vores databehandlere (Supabase, Resend) opretholder deres egne protokoller for brudunderretning. I det usandsynlige tilfælde af et brud, der påvirker din venteliste-e-mail, underretter vi dig og den relevante tilsynsmyndighed (ANSPDCP) inden for 72 timer som krævet af GDPR.

## 16. Ændringer af denne politik

Vi kan opdatere denne privatlivspolitik for at afspejle ændringer i funktionalitet eller gældende love. Datoen "Sidst opdateret" vil blive revideret. Væsentlige ændringer vil blive kommunikeret via Appen eller websitet.

## 17. Tredjeparts-privatlivspolitikker

- [Google (Maps, Drive, Sign-In, platforms-geokoder)](https://policies.google.com/privacy)
- [Firebase (Analytics og Crashlytics — kun opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [OpenTopoMap](https://opentopomap.org/about)
- [Esri/ArcGIS](https://www.esri.com/en-us/privacy/overview)
- [eHarta / geo-spatial.org](https://www.geo-spatial.org)
- [Cloudflare](https://www.cloudflare.com/privacypolicy/) (proxy til historiske kortfliser)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Website-hosting + analyse)
- [Supabase](https://supabase.com/privacy) (Website-database + feedback i appen)
- [Resend](https://resend.com/legal/privacy-policy) (Website-e-mail)

## 18. Kontakt os

**Coc Lorand Adrian P.F.A.** (der handler som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

For GDPR-relaterede forespørgsler kan du også kontakte ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) på [dataprotection.ro](https://www.dataprotection.ro).

---

Denne privatlivspolitik træder i kraft den 12. maj 2026 og gælder for alle versioner af SweepTrack Pro.
