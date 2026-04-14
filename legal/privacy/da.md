## 11. Dansk (Danish)

# Privatlivspolitik

**SweepTrack Pro** — GPS-sporingsapplikation til metaldetektering

Ikrafttrædelsesdato: 7. april 2026 · Sidst opdateret: 7. april 2026

Drives af: Coc Lorand P.F.A., der handler som "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introduktion

Denne privatlivspolitik forklarer, hvordan SweepTrack Pro ("Appen") indsamler, bruger, gemmer og beskytter dine oplysninger. Vi er forpligtede til at beskytte dit privatliv og sikre gennemsigtighed omkring vores datapraksis.

SweepTrack Pro er designet med en **arkitektur, hvor privatlivet kommer først**: Alle data gemmes lokalt på din enhed, vi driver ingen backend-servere, og vi indsamler, overfører eller sælger ikke dine personlige data.

## 2. Dataansvarlig

I forbindelse med EU's generelle forordning om databeskyttelse (GDPR) og den rumænske databeskyttelseslov (lov 190/2018) er den dataansvarlige:

**Coc Lorand P.F.A.** (der handler som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Data vi indsamler

### 3.1 Data gemt lokalt på din enhed

Følgende data oprettes af dig og gemmes **udelukkende på din enhed**. Vi har aldrig adgang til disse data, medmindre du eksplicit deler dem.

**Lokations- og sessionsdata:**

- GPS-koordinater (breddegrad, længdegrad) under aktive sporingssessioner
- Hastigheds-, højde-, kurs- og nøjagtighedsværdier fra enhedens sensorer
- Sessionsmetadata: navn, dato, start-/sluttidspunkt, varighed, afstand, tags
- Rute-koordinater med tidsstempler
- Lokationsnavne (indhentet via omvendt geokodning)

**Fund- og opdagelsesregistre:**

- Fundtype (Skat, Guld, Mønt, Relikvie, Smykke, Skrald)
- Fundlokation (GPS-koordinater på registreringstidspunktet)
- Valgfrie metadata: navn, noter, dybde, anslået værdi, vægt
- Mediebilag: fotos og lydoptagelser

**Data i tilladelsesboksen:**

- Navne og placeringer på steder
- Navne og kontaktoplysninger på lodsejere
- Tilladelsesnumre, udstedelsesdatoer, udløbsdatoer
- Koordinater for stedets grænser (polygon)
- Digitale underskrifter (SVG-format)
- Brugerdefinerede tags og noter

**Andre lokale data:** Konfigurationer af detektorforudindstillinger, app-præferencer (tema, enheder, sprog, kortindstillinger) og vejr-snapshots tilknyttet sessioner.

### 3.2 Data behandlet midlertidigt (ikke gemt)

Følgende data sendes kun til tredjeparts API-tjenester af hensyn til realtidsfunktionalitet og **gemmes ikke af os eller disse tjenester ud over den umiddelbare anmodning**:

- Omtrentlige GPS-koordinater sendt til Open-Meteo for vejrudsigt og højdedata
- Omtrentlige GPS-koordinater sendt til OpenStreetMap/Nominatim for adressesøgning
- Omtrentlige GPS-koordinater sendt til Overpass API for opdagelse af nærliggende historiske interessepunkter
- Omtrentlige GPS-koordinater sendt til Wikipedia API for geografisk søgning efter nærliggende artikler
- Identifikatorer for tidevandsstationer sendt til NOAA for tidevandsforudsigelser
- Lokationssøgeforespørgsler sendt til Open-Meteo Geocoding for stednavnesøgning

### 3.3 Data behandlet af tredjepartstjenester

**Google Maps SDK:** Din enheds placering behandles af Google Maps med henblik på kortvisning. Underlagt [Googles privatlivspolitik](https://policies.google.com/privacy).

**Google Sign-In og Google Drive (valgfrit):** Hvis du aktiverer backup til Google Drive, gemmes e-mailadressen på din Google-konto lokalt for at identificere den autentificerede konto. Backup-data uploades til din egen Google Drive-konto. Vi har ikke adgang til dit Google Drive.

**RevenueCat (styring af abonnementer):** Et anonymt, tilfældigt genereret app-bruger-ID bruges til abonnementsvalidering. Ingen personlige oplysninger deles. Underlagt [RevenueCats privatlivspolitik](https://www.revenuecat.com/privacy).

### 3.4 Data vi IKKE indsamler

- Vi indsamler **ikke** navne, e-mails, telefonnumre eller andre personlige identifikatorer.
- Vi bruger **ikke** analyse-SDK'er, fejlrapportering eller adfærdssporing.
- Vi bruger **ikke** reklamerammer eller reklameidentifikatorer.
- Vi sporer **ikke** brugsmønstre, sessionsfrekvens eller brug af funktioner.
- Vi opretter **ikke** brugerprofiler eller adfærdsmæssige fingeraftryk.
- Vi deler, sælger, udlejer eller handler **ikke** med data med tredjepart.
- Vi driver **ikke** servere, der modtager, behandler eller gemmer dine data.

## 4. Juridisk grundlag for behandling (GDPR)

- **GPS-/sessionsdata, fundregistre, boks-indtastninger:** Samtykke (Art. 6(1)(a)) — du initierer aktivt disse handlinger.
- **API-kald (vejr, geokodning):** Legitim interesse (Art. 6(1)(f)) — nødvendig for kernefunktionalitet.
- **Google Drive Backup:** Samtykke (Art. 6(1)(a)) — du aktiverer og autentificerer eksplicit.
- **Abonnementsvalidering:** Opfyldelse af en kontrakt (Art. 6(1)(b)) — nødvendig for at levere betalte funktioner.

Du kan til enhver tid trække dit samtykke tilbage ved at stoppe den relevante aktivitet eller afinstallere Appen.

## 5. Hvordan vi bruger dine data

Al databehandling foregår **lokalt på din enhed**. Vi bruger udelukkende dine data til at levere Appens funktioner: kortvisning, sessionssporing, fundregistrering, tilladelsesstyring, vejr-/tidevandsdata, eksport, backup og abonnementsvalidering.

## 6. Datalagring og sikkerhed

- Sessions- og funddata gemmes i en krypteret Room-database på din enhed.
- Følsomme indstillinger bruger Androids EncryptedSharedPreferences (AES-256).
- Mediefiler gemmes i Appens private interne lager, som er utilgængeligt for andre apps.
- Android cloud-backup er **deaktiveret** (`android:allowBackup="false"`) for at forhindre utilsigtet eksponering af data.
- Google Drive-backups bruger Googles krypterede API'er (HTTPS/TLS) og findes udelukkende på din konto.

Vi driver ingen servere, databaser eller cloud-infrastruktur.

## 7. Opbevaring af data

Lokale data opbevares, indtil du vælger at slette dem. Du kan slette enkelte elementer i Appen, rydde alle data via Android-indstillingerne eller afinstallere Appen. Google Drive-backups bevares, indtil du manuelt sletter dem fra din konto.

## 8. Deling og videregivelse af data

Vi deler, sælger, udlejer eller videregiver ikke dine personlige data til nogen tredjepart. Du kan vælge at dele data via eksport (GPX, KML, CSV, JSON), sessionsdelingskort eller Google Drive-backup — alt sammen initieret af brugeren.

## 9. Dine rettigheder (GDPR og internationale)

### GDPR-rettigheder (EU/EØS-borgere)

- **Indsigt** — dine data er fuldt tilgængelige på din enhed.
- **Berigtigelse** — rediger alle oplysninger direkte i Appen.
- **Sletning** — slet via sletning i appen eller afinstallation.
- **Begrænsning** — kontroller al behandling ved at starte/stoppe funktioner.
- **Dataportabilitet** — eksporter via GPX, KML, CSV, JSON.
- **Indsigelse** — stop enhver funktion til enhver tid.
- **Tilbagetrækning af samtykke** — til enhver tid uden at påvirke tidligere behandling.

### Storbritannien (UK GDPR)

Dine rettigheder i henhold til UK GDPR og Data Protection Act 2018 svarer til GDPR-rettighederne ovenfor. Du kan kontakte [ICO](https://ico.org.uk).

### Australien (Privacy Act 1988)

Du har rettigheder i henhold til de australske privatlivsprincipper (APPs), herunder indsigt og berigtigelse. Du kan kontakte [OAIC](https://www.oaic.gov.au).

### Canada (PIPEDA)

Du har rettigheder i henhold til PIPEDA og gældende provinsiel lovgivning om beskyttelse af privatlivets fred, herunder indsigt, berigtigelse og tilbagetrækning af samtykke. Du kan kontakte [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

### Borgere i Californien (CCPA/CPRA)

Vi sælger eller deler **ikke** nogen personlige oplysninger. Vi bruger ikke data til adfærdsbaseret annoncering på tværs af kontekster. Du har ret til at vide, slette, begrænse brugen af følsomme data og ret til ikke-diskriminering.

### Borgere i Brasilien (LGPD)

Tilsvarende rettigheder gælder i henhold til Lei Geral de Proteção de Dados. Du kan kontakte [ANPD](https://www.gov.br/anpd).

### New Zealand (Privacy Act 2020)

Du har rettigheder i henhold til Privacy Act 2020, herunder indsigt og berigtigelse. Du kan kontakte [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Andre jurisdiktioner

Uanset hvor du befinder dig, har du fuld kontrol over dine data via Appen. Hvor lokal lovgivning giver yderligere privatlivsrettigheder, som ikke kan fraviges ved aftale, gælder disse rettigheder.

## 10. Børns privatliv

Appen henvender sig ikke til børn under 16 år. Vi indsamler ikke bevidst personlige oplysninger fra børn under 16 år. Hvis du mener, at et barn har brugt Appen, kan du slette barnets data ved at rydde app-data eller afinstallere Appen.

## 11. Forklaring af tilladelser

- **ACCESS_FINE_LOCATION** — GPS til rutesporing under sessioner.
- **ACCESS_BACKGROUND_LOCATION** — fortsættelse af sporing, når skærmen er slukket.
- **CAMERA** — optagelse af fotos til fundregistrering.
- **RECORD_AUDIO** — optagelse af lydnoter til fund.
- **READ/WRITE_CALENDAR** — påmindelser om udløb af tilladelser i boksen.
- **INTERNET** — vejr, geokodning, tidevand, kort, abonnementer.
- **POST_NOTIFICATIONS** — meddelelse om GPS-sporing.
- **VIBRATE** — grænseadvarsler til områdebeskyttelse.

Du kan til enhver tid tilbagekalde enhver tilladelse via Android-indstillingerne.

## 12. Cookies og sporing

Appen bruger ikke cookies, web beacons, pixel tags, enhedsfingeraftryk eller andre sporingsteknologier.

## 13. Internationale dataoverførsler

Da alle data gemmes lokalt på din enhed, finder ingen internationale dataoverførsler sted under vores kontrol. Tredjeparts API-kald kan blive behandlet i de jurisdiktioner, hvor disse tjenester opererer.

## 14. Underretning om databrud

Da vi ikke gemmer dine data på nogen server, er et databrud hos os ikke muligt. Hvis vi bliver opmærksomme på en sårbarhed i Appen, vil vi udsende en opdatering og underrette brugerne via Appen eller websitet.

## 15. Ændringer i denne politik

Vi kan opdatere denne privatlivspolitik for at afspejle ændringer i funktionalitet eller gældende lovgivning. Datoen for "Sidst opdateret" vil blive revideret. Væsentlige ændringer vil blive kommunikeret via Appen eller websitet.

## 16. Tredjeparts privatlivspolitikker

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Kontakt os

**Coc Lorand P.F.A.** (der handler som Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

For GDPR-relaterede spørgsmål kan du også kontakte ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) på [dataprotection.ro](https://www.dataprotection.ro).

---

Denne privatlivspolitik er trådt i kraft den 7. april 2026 og gælder for alle versioner af SweepTrack Pro.

---