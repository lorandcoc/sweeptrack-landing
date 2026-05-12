# Privatlivspolitik

**SweepTrack Pro** — GPS-sporingsapplikation til metaldetektering

Ikrafttrædelsesdato: 12. maj 2026 · Sidst opdateret: 12. maj 2026

Drives af: Coc Lorand Adrian P.F.A., der handler som "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introduktion

Denne privatlivspolitik forklarer, hvordan SweepTrack Pro ("Appen") og websitet sweeptrack.pro ("Websitet") indsamler, bruger, gemmer og beskytter dine oplysninger. Vi er forpligtede til at beskytte dit privatliv og sikre gennemsigtighed omkring vores datapraksis.

Appen er designet med en **arkitektur, hvor privatlivet kommer først**: Alle detekteringsdata gemmes lokalt på din enhed, vi driver ingen backend-servere for Appen, og vi indsamler, overfører eller sælger ikke dine personlige detekteringsdata. Websitet drives separat og har sin egen datapraksis, beskrevet i Afsnit 4.

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

- Type af fund (Skat, Guld, Mønt, Relikvie, Smykke, Affald)
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

**Andre lokale data:** Detektor-forudindstillingskonfigurationer, app-præferencer (tema, enheder, sprog, kortindstillinger) og vejr-øjebliksbilleder knyttet til sessioner.

### 3.2 Data, der behandles midlertidigt (gemmes ikke)

Følgende data sendes til tredjeparts API'er for realtidsfunktionalitet og **gemmes ikke af os eller af disse tjenester ud over den umiddelbare anmodning**:

- Omtrentlige GPS-koordinater sendt til Open-Meteo for vejrudsigter og højdedata
- Omtrentlige GPS-koordinater sendt til OpenStreetMap/Nominatim til adresseopslag
- Omtrentlige GPS-koordinater sendt til Overpass API for nærliggende historiske POI'er
- Omtrentlige GPS-koordinater sendt til Wikipedia API til geografisk søgning af nærliggende artikler
- Tidevands-station-ID'er sendt til NOAA for tidevandsudsigter
- Lokationssøgeforespørgsler sendt til Open-Meteo Geocoding

### 3.3 Data behandlet af tredjepartstjenester

**Google Maps SDK:** Din enheds placering behandles af Google Maps til kortvisning. Underlagt [Googles privatlivspolitik](https://policies.google.com/privacy).

**Google Sign-In og Google Drive (valgfrit):** Hvis du aktiverer Google Drive-sikkerhedskopiering, gemmes din Google-kontos e-mailadresse lokalt for at identificere den autentificerede konto. Sikkerhedskopieringsdata uploades til din egen Google Drive-konto. Vi har ikke adgang til din Google Drive.

**RevenueCat (Abonnementsstyring):** En anonym, tilfældigt genereret app-bruger-identifikator bruges til abonnementsverifikation. Ingen personlige oplysninger deles. Underlagt [RevenueCats privatlivspolitik](https://www.revenuecat.com/privacy).

### 3.4 Data, som Appen IKKE indsamler

- **Appen** indsamler ikke dit navn, e-mailadresse, telefonnummer eller andre personlige identifikatorer
- **Appen** bruger ikke analyse-, fejlrapporterings- eller adfærdssporings-SDK'er
- **Appen** bruger ikke annonceframeworks eller reklame-identifikatorer
- **Appen** sporer ikke brugsmønstre, sessionsfrekvens eller funktionsanvendelse
- **Appen** opretter ikke brugerprofiler eller adfærdsmæssige fingeraftryk
- **Appen** deler, sælger, udlejer eller bytter ikke data med tredjeparter
- **Appen** driver ingen servere, der modtager, behandler eller gemmer dine detekteringsdata

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
- **API-opkald (vejr, geokodning):** Legitim interesse (Art. 6(1)(f)) — nødvendigt for grundlæggende funktionalitet
- **Google Drive-sikkerhedskopiering:** Samtykke (Art. 6(1)(a)) — du aktiverer og autentificerer udtrykkeligt
- **Abonnementsverifikation:** Kontraktopfyldelse (Art. 6(1)(b)) — nødvendigt for at levere betalte funktioner
- **Venteliste-e-mail (Website):** Samtykke (Art. 6(1)(a)) — se Afsnit 4.1

Du kan til enhver tid tilbagekalde samtykke ved at stoppe den relevante aktivitet, afinstallere Appen eller afmelde dig fra Websitets e-mails.

## 6. Sådan bruger vi dine data

Al databehandling i Appen sker **lokalt på din enhed**. Vi bruger app-data udelukkende til at levere Appens funktioner: kortvisning, sessionssporing, fundregistrering, tilladelseshåndtering, vejr-/tidevandsdata, eksport, sikkerhedskopiering og abonnementsverifikation.

Website-data (din venteliste-e-mail) bruges kun til at sende lancerings- og før-lanceringsmeddelelser beskrevet i Afsnit 4.

## 7. Dataopbevaring og sikkerhed

**App-data:**

- Sessions- og funddata gemmes i en krypteret Room-database på din enhed
- Følsomme præferencer bruger Androids EncryptedSharedPreferences (AES-256)
- Mediefiler gemmes i Appens private interne lager, utilgængeligt for andre apps
- Android-cloudsikkerhedskopiering er **deaktiveret** (`android:allowBackup="false"`) for at forhindre utilsigtet dataeksponering
- Google Drive-sikkerhedskopier bruger Googles krypterede API'er (HTTPS/TLS) og eksisterer kun på din konto

For Appen driver vi ingen servere, databaser eller cloud-infrastruktur, der gemmer dine detekteringsdata.

**Website-data:** Venteliste-e-mails opbevares i en Supabase Postgres-database hostet i EU (Irland). Forbindelser er krypterede (TLS). Adgang er begrænset til administrative formål. Udgående e-mail sendes via Resend (EU, Irland) over TLS. Se Afsnit 4.

## 8. Dataopbevaring

**App-data:** Lokale data opbevares, indtil du vælger at slette dem. Du kan slette individuelle elementer i Appen, rydde alle data via Android-indstillinger eller afinstallere Appen. Google Drive-sikkerhedskopier består, indtil du manuelt sletter dem fra din konto.

**Website-data:** Venteliste-e-mails opbevares, indtil du afmelder dig eller 12 måneder efter den offentlige lancering, alt efter hvad der indtræffer først. Derefter slettes adresserne fra Supabase-databasen.

## 9. Datadeling og videregivelse

Vi deler, sælger, udlejer eller videregiver ikke dine personlige data til nogen tredjepart. Du kan vælge at dele app-data gennem eksport (GPX, KML, CSV, JSON), sessionsdelingskort eller Google Drive-sikkerhedskopiering — alle initieret af brugeren. Websitets venteliste-data behandles kun af vores navngivne databehandlere (Supabase, Resend) til de formål, der er beskrevet i Afsnit 4.

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

Hverken Appen eller Websitet er rettet mod børn under 16 år. Vi indsamler ikke bevidst personlige oplysninger fra børn under 16 år. Hvis du tror, at et barn har brugt Appen eller Websitet, kan du slette deres data ved at rydde app-data, afinstallere eller afmelde dig ventelisten.

## 12. Tilladelser forklaret (App)

- **ACCESS_FINE_LOCATION** — GPS til rute-sporing under sessioner
- **ACCESS_BACKGROUND_LOCATION** — fortsætte sporing, når skærmen er slukket
- **CAMERA** — tage billeder til fundregistrering
- **RECORD_AUDIO** — optage lydnoter til fund
- **READ/WRITE_CALENDAR** — påmindelser om tilladelses-udløb fra boksen
- **INTERNET** — vejr, geokodning, tidevand, kort, abonnementer
- **POST_NOTIFICATIONS** — GPS-sporingsnotifikation
- **VIBRATE** — perimeter-vagt grænsealarmer

Du kan til enhver tid tilbagekalde enhver tilladelse via Android-indstillinger.

## 13. Cookies og sporing

**Appen** bruger ikke cookies, web-beacons, pixel-tags, enheds-fingeraftryk eller andre sporingsteknologier. **Websitet** sætter ingen førsteparts-cookies; se Afsnit 4.3 for fuld Website-cookie-oplysning.

## 14. Internationale dataoverførsler

**App-data:** Da alle detekteringsdata gemmes lokalt på din enhed, foregår ingen internationale dataoverførsler under vores kontrol. API-opkald til tredjeparter kan behandles i de jurisdiktioner, hvor disse tjenester opererer.

**Website-data:** Venteliste-e-mails gemmes i EU (Irland) af Supabase og behandles af Resend (EU, Irland). Hvis du tilgår Websitet uden for EU, overføres din e-mail til EU til behandling.

## 15. Underretning om databrud

**App:** Da vi ikke gemmer dine detekteringsdata på nogen server, vi driver, er et databrud, der påvirker app-data fra vores side, ikke muligt. Hvis vi bliver bekendt med en sårbarhed i Appen, udsender vi en opdatering og underretter brugerne via Appen eller websitet.

**Website:** Vores databehandlere (Supabase, Resend) opretholder deres egne protokoller for brudunderretning. I det usandsynlige tilfælde af et brud, der påvirker din venteliste-e-mail, underretter vi dig og den relevante tilsynsmyndighed (ANSPDCP) inden for 72 timer som krævet af GDPR.

## 16. Ændringer af denne politik

Vi kan opdatere denne privatlivspolitik for at afspejle ændringer i funktionalitet eller gældende love. Datoen "Sidst opdateret" vil blive revideret. Væsentlige ændringer vil blive kommunikeret via Appen eller websitet.

## 17. Tredjeparts-privatlivspolitikker

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Website-hosting + analyse)
- [Supabase](https://supabase.com/privacy) (Website-database)
- [Resend](https://resend.com/legal/privacy-policy) (Website-e-mail)

## 18. Kontakt os

**Coc Lorand Adrian P.F.A.** (der handler som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

For GDPR-relaterede forespørgsler kan du også kontakte ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) på [dataprotection.ro](https://www.dataprotection.ro).

---

Denne privatlivspolitik træder i kraft den 12. maj 2026 og gælder for alle versioner af SweepTrack Pro.
