# Privacybeleid

**SweepTrack Pro** — GPS-tracking-applicatie voor metaaldetectie

Ingangsdatum: 12 mei 2026 · Laatst bijgewerkt: 3 juli 2026

Geëxploiteerd door: Coc Lorand-Adrian P.F.A., handelend onder de naam "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Inleiding

Dit Privacybeleid legt uit hoe SweepTrack Pro ("de App") en de website sweeptrack.pro ("de Website") uw informatie verzamelen, gebruiken, opslaan en beschermen. Wij doen er alles aan om uw privacy te beschermen en transparantie te bieden over onze gegevenspraktijken.

De App is ontworpen met een **privacy-first architectuur**: uw opgeslagen detectiegegevens — sessies, vondsten, kluisitems — worden lokaal op uw apparaat opgeslagen, wij verkopen ze niet en wij gebruiken ze niet om u te profileren. Bepaalde gegevens verlaten uw apparaat uitsluitend voor de door de gebruiker geïnitieerde functies beschreven in Secties 3.2, 3.3 en 3.5: realtime API-functies, optionele back-up, optionele diagnostiek, optionele feedback en — als u ervoor kiest een groep aan te maken of eraan deel te nemen — het optioneel delen van live groepslocatie dat het hele doel van de Radar-functie vormt. De Website werkt apart en heeft zijn eigen gegevenspraktijken, beschreven in Sectie 4.

## 2. Verwerkingsverantwoordelijke

Voor de doeleinden van de Algemene Verordening Gegevensbescherming van de EU (AVG/GDPR) en de Roemeense wet op de gegevensbescherming (Wet 190/2018), is de verwerkingsverantwoordelijke:

**Coc Lorand-Adrian P.F.A.** (handelend onder de naam Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Gegevens die wij verzamelen (Android-App)

### 3.1 Lokaal op uw apparaat opgeslagen gegevens

De volgende gegevens worden door u aangemaakt en **uitsluitend op uw apparaat** opgeslagen. Wij hebben nooit toegang tot deze gegevens tenzij u ze expliciet deelt.

**Locatie- en sessiegegevens:**

- GPS-coördinaten (breedtegraad, lengtegraad) tijdens actieve trackingsessies
- Snelheid, hoogte, koers en nauwkeurigheid van apparaatsensoren
- Sessiemetadata: naam, datum, begin-/eindtijd, duur, afstand, tags
- Padcoördinaten met tijdstempels
- Locatienamen (verkregen via omgekeerde geocodering)

**Vondst- en ontdekkingsgegevens:**

- Type vondst (Schat, Goud, Munt, Relict, Sieraad, Afval, Ongesorteerd/Snelle invoer)
- Locatie van de vondst (GPS-coördinaten op het moment van registratie)
- Optionele metadata: naam, notities, diepte, geschatte waarde, gewicht
- Mediabijlagen: foto's, audio-opnamen en video-opnamen

**Gegevens van de toestemmingenkluis:**

- Site-namen en locaties
- Namen van landeigenaren en contactgegevens
- Vergunningsnummers, uitgiftedatums, vervaldatums
- Grenscoördinaten van de site (polygoon)
- Digitale handtekeningen (SVG-formaat)
- Aangepaste tags en notities

**Routepunten (waypoints):** Door de gebruiker geplaatste kaartmarkeringen — coördinaten, naam, categorie en optionele notities.

**Andere lokale gegevens:** Detectorpreset-configuraties, app-voorkeuren (thema, eenheden, taal, kaartinstellingen) en weersmomentopnamen die aan sessies zijn gekoppeld.

### 3.2 Tijdelijk verwerkte gegevens (niet opgeslagen)

De volgende gegevens worden naar API's van derden verzonden voor realtime functionaliteit en **worden door ons of deze diensten niet opgeslagen na het directe verzoek**:

- Geschatte GPS-coördinaten verzonden naar Open-Meteo voor weersvoorspellingen en hoogtegegevens
- Coördinaten omgezet naar plaatsnamen via de platform-geocoder van Android (op de meeste apparaten geleverd door Google Play Services) voor omgekeerde geocodering — gebruikt om sessies en vondsten van een plaatsnaam te voorzien
- Identifiers van getijdestations verzonden naar NOAA voor getijvoorspellingen (kuststations in de VS)
- Locatiezoekopdrachten verzonden naar Open-Meteo Geocoding
- Aanvragen van kaarttegels (die het globale gebied van de kaart die u bekijkt prijsgeven) verzonden naar de tegelprovider van het actieve kaarttype: Esri/ArcGIS (satellietbeelden en USGS-topografische kaarten), OpenStreetMap en OpenTopoMap (offline/downloadbare kaartpakketten), en — voor de Roemeense historische "Oude kaart"-overlay — een caching-proxy die wij op Cloudflare beheren en die tegels ophaalt van geo-spatial.org (eHarta). De standaard Google-kaartbasis valt onder Google Maps SDK in Sectie 3.3

### 3.3 Door derden verwerkte gegevens

**Google Maps SDK:** De locatie van uw apparaat wordt verwerkt door Google Maps voor kaartweergave. Onderworpen aan het [Privacybeleid van Google](https://policies.google.com/privacy).

**Google Sign-In en Google Drive (optioneel):** Als u Google Drive-back-up inschakelt, wordt het e-mailadres van uw Google-account lokaal opgeslagen om het geverifieerde account te identificeren. Back-upgegevens worden geüpload naar uw eigen Google Drive-account. Wij hebben geen toegang tot uw Google Drive.

**RevenueCat (Abonnementsbeheer):** Een anonieme, willekeurig gegenereerde app-gebruikersidentifier wordt gebruikt voor abonnementsverificatie. Er wordt geen persoonlijke informatie gedeeld. Onderworpen aan het [Privacybeleid van RevenueCat](https://www.revenuecat.com/privacy).

**Firebase Analytics en Crashlytics (Optioneel — standaard uitgeschakeld):** Twee Google Firebase-SDK's zijn in de App geïntegreerd, maar **beide blijven inactief totdat u uitdrukkelijk toestemming geeft** via het toestemmingsverzoek bij de eerste start of in **Instellingen → Privacy → Diagnostiek**. Tot u toestemming geeft, wordt er geen enkele gebeurtenis verzonden en geen enkel crashrapport geüpload. U kunt uw toestemming op elk moment intrekken; de intrekking is van kracht vanaf de volgende gebeurtenis. Debug-builds activeren Crashlytics nooit.

Wanneer ingeschakeld:

- **Firebase Analytics** registreert acht geaggregeerde gebeurtenisnamen met niet-identificerende parameters: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. De inhoud van de gebeurtenissen bevat **nooit** GPS-coördinaten, adressen, vondstnamen, foto's, audio-opnames, kluisgegevens of andere persoonlijk identificeerbare informatie — uitsluitend tellingen, tijdsduren, afstanden, vondsttype (alleen de categorie) en functie-identifiers. De gebeurtenis `find_logged` rapporteert het type als een grove categorie (`valuable`, `find`, `trash`, `unsorted` of `other` voor elk niet-herkend type) in plaats van het specifieke vondsttype, zodat het geaggregeerde dashboard de verdeling van waardevolle vondsten die een individuele gebruiker registreert niet kan afleiden.
- **Firebase Crashlytics** uploadt stack traces van crashes samen met het apparaatmodel, de besturingssysteemversie en de app-versie om ons te helpen bugs te diagnosticeren. Voordat een crash of niet-fatale fout naar Crashlytics wordt doorgestuurd, **verwijdert de App uit het uitzonderingsbericht alle subtekenreeksen met coördinaatvorm** (bijvoorbeeld `lat=`/`lon=`-patronen, getekende decimale getallen met drie of meer cijfers achter de komma), zodat GPS-posities die in lokale variabelen zijn opgeslagen niet via de foutrapportage kunnen weglekken. Stackframes (klasse, methode, regel) blijven behouden voor groepering; runtime-waarden niet. Een procesbrede uncaught-exception-handler past dezelfde scrub-bewerking toe op fatale crashes die de SDK automatisch vastlegt.

Beide diensten zijn onderworpen aan het [Privacybeleid van Google](https://policies.google.com/privacy) en de [privacy- en veiligheidsverklaringen van Firebase](https://firebase.google.com/support/privacy).

**In-app feedback (optioneel):** Als u feedback verzendt via het feedbackformulier van de App, verzendt de App de informatie die u invoert — uw bericht, de geselecteerde categorie en of het een bugmelding of een functie-idee betreft — samen met uw apparaatmodel, Android-versie, app-versie en taal, en, **uitsluitend als u ervoor kiest dit te verstrekken, uw e-mailadres**, naar een Supabase Edge Function die wij beheren, zodat wij deze kunnen lezen en erop kunnen reageren. Er wordt niets verzonden tenzij u het formulier indient. Supabase, Inc. treedt op als onze gegevensverwerker (EU-regio). Onderworpen aan het [Privacybeleid van Supabase](https://supabase.com/privacy).

### 3.4 Gegevens die de App NIET verzamelt

- **De App** verzamelt niet uw naam, telefoonnummer of andere persoonlijke identifiers — behalve een e-mailadres dat u optioneel invoert bij het indienen van in-app feedback (zie Sectie 3.3)
- **De App** gebruikt geen analytics of crashrapportage tenzij u uitdrukkelijk opt-in geeft (zie de Firebase-sectie hierboven; standaard uitgeschakeld en op elk moment intrekbaar in Instellingen → Privacy → Diagnostiek)
- **De App** gebruikt geen advertentieframeworks of reclame-identifiers
- **De App** volgt geen gebruikspatronen, sessiefrequentie of functiegebruik
- **De App** maakt geen gebruikersprofielen of gedragsvingerafdrukken
- **De App** verkoopt, verhuurt of ruilt uw gegevens niet en deelt deze uitsluitend wanneer u dit zelf initieert: de realtime API-oproepen in Sectie 3.2, optionele Google Drive-back-up, opt-in Firebase-diagnostiek, het optioneel delen van live groepslocatie (Sectie 3.5) en feedback die u verkiest in te dienen (Sectie 3.3)
- **De App** beheert geen servers die uw opgeslagen detectiegegevens (sessies, vondsten, kluisitems) opslaan — op één uitzondering na die u zelf beheert: de optionele Live Group-functie (Sectie 3.5) deelt uw live locatie met een groep die u aanmaakt of waaraan u deelneemt, via de Firebase Realtime Database van Google, terwijl u in die groep zit. Afgezien van Live Group is de enige inhoud die een server bereikt die wij beheren, feedback die u verkiest in te dienen (Sectie 3.3)

De gegevenspraktijken van de Website worden apart behandeld in Sectie 4.

### 3.5 Delen van live groepslocatie (optioneel — de Radar-functie)

SweepTrack Pro bevat **Radar**, een functie voor live groepspositionering die bereikbaar is via de RADAR-knop op de startkaart. Deze blijft uitgeschakeld tenzij u **een groep aanmaakt of aan een groep deelneemt**. Het aanmaken (hosten) van een groep is een Pro-functie; deelnemen aan een groep is gratis. Terwijl u in een groep zit, wordt het volgende verzonden naar de **Firebase Realtime Database** van Google en in realtime zichtbaar gemaakt voor de andere leden van diezelfde groep:

- **Uw weergavenaam** — een naam die u kiest; deze hoeft niet uw echte naam te zijn.
- **Uw nauwkeurige locatie** — GPS-breedtegraad en -lengtegraad met nauwkeurigheid en koers, bijgewerkt terwijl u in de groep zit (ongeveer elke 30 seconden op het gratis niveau, vaker met een abonnement, en om de paar seconden tijdens een SOS).
- **Uw status** — online, gepauzeerd of stationair, en of u een **SOS** heeft geactiveerd (inclusief uw locatie op dat moment).
- **Het batterijniveau van uw apparaat, de kleur en het pictogram van uw kaartmarkering**, en alle **gedeelde routepunten, pings of basis-/verzamelpunten** die u aanmaakt, elk voorzien van uw weergavenaam en coördinaten.

**Wie het kan zien:** uitsluitend leden van de groep. Iedereen met de toetredingscode of QR van de groep kan deelnemen en de live kaart bekijken, dus deel een code alleen met mensen met wie u uw locatie wilt delen. De toegang wordt afgedwongen door beveiligingsregels aan de serverzijde; iemand moet aan de groep deelnemen (waardoor die zelf zichtbaar wordt) voordat die posities kan lezen.

**Authenticatie:** de backend van de groep gebruikt **Firebase Anonymous Authentication** — een willekeurige identifier voor uw app-installatie, niet gekoppeld aan uw naam, e-mailadres, telefoonnummer of Google-account.

**Hoe lang het wordt bewaard:** groepslocatiegegevens zijn kortstondig. Een groep **verloopt** (doorgaans na ongeveer 12 uur; proefgroepen eerder), waarna deze geen nieuwe posities meer accepteert en er niet meer aan kan worden deelgenomen. Het verlaten van een groep verwijdert uw lidmaatschapsvermelding onmiddellijk, en de groep wordt verwijderd wanneer het laatste lid vertrekt. Als een groep wordt verlaten zonder dat iemand vertrekt, blijven de laatste posities die vóór het verlopen zijn gedeeld opgeslagen in de verlopen groep totdat deze wordt verwijderd. Wij bewaren geen langdurige geschiedenis van uw bewegingen op onze servers, en u kunt op elk moment om verwijdering verzoeken (Sectie 18).

De op zichzelf staande gratis begeleidende app heeft zijn eigen, uitgebreidere toelichting in het [Privacybeleid van SweepTrack Radar](https://sweeptrack.pro/privacy-radar).

## 4. Gegevenspraktijken van de Website (sweeptrack.pro)

Deze sectie behandelt de gegevenspraktijken specifiek voor onze website sweeptrack.pro. De Android-App beschreven in Secties 3 en 5–18 werkt onafhankelijk en deelt geen infrastructuur met de Website.

### 4.1 E-mailadres-verzameling voor de wachtlijst

Wanneer u uw e-mailadres indient via een aanmeldingsformulier op de Website, verzamelen wij:

- **E-mailadres** dat u opgeeft
- **Tijdstempel** van de inschrijving
- **IP-adres** (tijdelijk) — gebruikt voor snelheidsbeperking; niet opgeslagen na de duur van het verzoek

**Doel:** U op de hoogte stellen wanneer SweepTrack Pro op Google Play wordt gelanceerd en u pre-launch-updates sturen over het product en de Founder's Lifetime-aanbieding. Wij zullen uw e-mailadres niet voor andere doeleinden gebruiken, niet delen en niet verkopen.

**Rechtsgrondslag (GDPR):** Toestemming (Art. 6(1)(a)) — verstrekt wanneer u het formulier indient.

**Opslag:** E-mailadressen worden opgeslagen in een Supabase Postgres-database gehost in de EU (regio Ierland). Supabase, Inc. treedt op als onze gegevensverwerker volgens hun standaard gegevensverwerkingsovereenkomst.

**E-mailbezorging:** Uitgaande e-mails worden verzonden via Resend, Inc. (EU-regio, Ierland) die optreden als onze e-maildienstverwerker volgens hun standaard gegevensverwerkingsovereenkomst.

**Bewaring:** Tot u zich uitschrijft, of 12 maanden na de openbare lancering van SweepTrack Pro op Google Play, afhankelijk van wat eerst plaatsvindt.

**Uitschrijven:** Antwoord met "remove" op een e-mail die wij verzenden, of gebruik de List-Unsubscribe-link die uw e-mailclient weergeeft (Gmail en Outlook tonen deze naast het Van-adres).

**Uw rechten:** Toegang, rectificatie, wissing, beperking, overdraagbaarheid en het recht om toestemming in te trekken. Stuur een e-mail naar [support@sweeptrack.pro](mailto:support@sweeptrack.pro) om een van deze rechten uit te oefenen.

### 4.2 Website-analytics

De Website gebruikt:

- **Vercel Analytics** — privacy-vriendelijke analytics die geen cookies gebruiken en geen individuele IP-adressen opslaan. Meet alleen geaggregeerde paginaweergaven.
- **Vercel Speed Insights** — Core Web Vitals-meting (paginalaadtijd, layout-verschuiving, interactievertragingen) op geaggregeerde basis.

Beide tools worden beheerd door Vercel Inc. en zijn onderworpen aan het [Privacybeleid van Vercel](https://vercel.com/legal/privacy-policy). Ze verzamelen geen persoonlijk identificeerbare informatie en maken geen gebruikersprofielen.

### 4.3 Cookies

De Website plaatst geen first-party cookies voor tracking, reclame of profilering. Vercel Analytics is cookieloos van ontwerp. Een taalvoorkeur, als u deze wijzigt, wordt opgeslagen in de `localStorage` van uw browser (geen cookie) en is alleen leesbaar door uw eigen browser.

### 4.4 Hosting en serverlogs

De Website wordt gehost door Vercel Inc. Vercel kan automatisch standaard verzoekmetadata (IP-adres, user agent, verzoekpad, tijdstempel) loggen voor operationele, prestatie- en beveiligingsdoeleinden. Deze logs worden bewaard volgens het standaardbeleid van Vercel en worden door ons niet gebruikt voor tracking of profilering van individuen.

### 4.5 Uw rechten voor Website-gegevens

Dezelfde GDPR, UK GDPR, Australische, Canadese, CCPA, LGPD en NZ Privacy Act-rechten beschreven in Sectie 10 zijn evenzeer van toepassing op uw door de Website verzamelde gegevens. Om een recht uit te oefenen met betrekking tot uw wachtlijst-e-mail, neem contact op met [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Wij reageren binnen 30 dagen.

## 5. Rechtsgrondslag voor verwerking (GDPR)

- **GPS-/sessiegegevens, vondstregistraties, kluisitems:** Toestemming (Art. 6(1)(a)) — u initieert deze acties actief
- **API-oproepen (weer, geocodering, kaarttegels):** Gerechtvaardigd belang (Art. 6(1)(f)) — noodzakelijk voor kernfunctionaliteit
- **Google Drive-back-up:** Toestemming (Art. 6(1)(a)) — u activeert en authenticeert expliciet
- **Abonnementsverificatie:** Uitvoering van overeenkomst (Art. 6(1)(b)) — noodzakelijk om betaalde functies te bieden
- **Firebase Analytics en Crashlytics (optioneel):** Toestemming (Art. 6(1)(a)) — geactiveerd via het verzoek bij de eerste start of in de Instellingen, op elk moment intrekbaar
- **Delen van live groepslocatie (optioneel):** Toestemming (Art. 6(1)(a)) — u maakt actief een groep aan of neemt er actief aan deel, waarbij een voorgrondmelding wordt getoond terwijl het delen actief is; intrekken door de groep te verlaten of de functie te sluiten
- **In-app feedback (optioneel):** Toestemming (Art. 6(1)(a)) — uitsluitend verzonden wanneer u het feedbackformulier indient
- **Wachtlijst-e-mail (Website):** Toestemming (Art. 6(1)(a)) — zie Sectie 4.1

U kunt uw toestemming op elk moment intrekken door de relevante activiteit te stoppen, de App te verwijderen of zich af te melden voor Website-e-mails.

## 6. Hoe wij uw gegevens gebruiken

Vrijwel alle gegevensverwerking van de App vindt **lokaal op uw apparaat** plaats. Wij gebruiken App-gegevens om de functies van de App te bieden: kaartweergave, sessietracking, vondstregistratie, toestemmingenbeheer, weer-/getijgegevens, exports, back-up en abonnementsverificatie. Gegevens verlaten uw apparaat uitsluitend voor de door de gebruiker geïnitieerde functies in Secties 3.2 en 3.3 (realtime API's, optionele back-up, optionele diagnostiek, optionele feedback).

Website-gegevens (uw wachtlijst-e-mail) worden alleen gebruikt om de lancerings- en pre-launch-communicatie te verzenden die in Sectie 4 wordt beschreven.

## 7. Gegevensopslag en -beveiliging

**App-gegevens:**

- Sessie- en vondstgegevens worden opgeslagen in een Room-database (SQLite) in de afgeschermde privé-opslag van de App op uw apparaat — beschermd door Androids app-isolatiemodel en de versleuteling van gebruikersgegevens in rust van het apparaat
- Op ondersteunde apparaten gebruiken gevoelige voorkeuren en gegevens van de toestemmingenkluis Androids EncryptedSharedPreferences (AES-256), ondersteund door de Android Keystore. Als de Keystore of EncryptedSharedPreferences op een apparaat niet beschikbaar is, valt de App terug op app-privé (afgeschermde) opslag en toont een blijvende waarschuwing in de App dat deze gegevens op dat apparaat niet afzonderlijk zijn versleuteld
- Mediabestanden worden opgeslagen in de privé interne opslag van de App, ontoegankelijk voor andere apps
- Android-cloudback-up is **uitgeschakeld** (`android:allowBackup="false"`) om onbedoelde gegevensblootstelling te voorkomen
- Google Drive-back-ups worden via HTTPS/TLS verzonden en bestaan uitsluitend in uw eigen account. U kunt een back-up optioneel beschermen met een wachtwoordzin, die het archief (AES-256-GCM) op uw apparaat versleutelt vóór het uploaden, zodat het niet gelezen kan worden zonder uw wachtwoordzin
- Optionele in-app feedback die u indient, wordt via HTTPS/TLS verzonden naar een Supabase Edge Function (EU-regio)

Voor de App beheren wij geen servers die uw opgeslagen detectiegegevens opslaan. De enige uitzondering is de optionele Live Group-functie (Sectie 3.5), die kortstondige, automatisch verlopende groepslocatiegegevens in de Firebase van Google bewaart terwijl u in een groep zit.

**Website-gegevens:** Wachtlijst-e-mails worden opgeslagen in een Supabase Postgres-database gehost in de EU (Ierland). Verbindingen zijn versleuteld (TLS). Toegang is beperkt tot administratieve doeleinden. Uitgaande e-mail wordt verzonden via Resend (EU, Ierland) via TLS. Zie Sectie 4.

## 8. Gegevensbewaring

**App-gegevens:** Lokale gegevens worden bewaard totdat u ervoor kiest ze te verwijderen. U kunt afzonderlijke items in de App verwijderen, alle gegevens via Android-instellingen wissen of de App verwijderen. Google Drive-back-ups blijven bestaan totdat u ze handmatig uit uw account verwijdert.

**Website-gegevens:** Wachtlijst-e-mails worden bewaard tot u zich uitschrijft, of 12 maanden na de openbare lancering, afhankelijk van wat eerst plaatsvindt. Daarna worden de adressen verwijderd uit de Supabase-database.

## 9. Gegevensdeling en openbaarmaking

Wij verkopen, verhuren of ruilen uw persoonlijke gegevens niet. U kunt ervoor kiezen App-gegevens te delen via exports (GPX, KML, CSV, JSON), sessie-share-kaarten, Google Drive-back-up of het delen van live locatie in een Radar-groep (Sectie 3.5) — allemaal door de gebruiker geïnitieerd. Als u in-app feedback indient, wordt deze namens ons verwerkt door Supabase (zie Sectie 3.3). Wachtlijst-gegevens van de Website worden alleen verwerkt door onze genoemde verwerkers (Supabase, Resend) voor de doeleinden beschreven in Sectie 4.

## 10. Uw rechten (GDPR en internationaal)

### GDPR-rechten (EU/EER-inwoners)

- **Toegang** — uw App-gegevens zijn volledig toegankelijk op uw apparaat; voor Website-gegevens, stuur een e-mail naar [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Rectificatie** — bewerk alle records direct in de App, of stuur ons een e-mail voor correcties van Website-gegevens
- **Wissing** — verwijder via in-app verwijdering of deïnstallatie; voor Website-gegevens, schrijf u uit of stuur ons een e-mail
- **Beperking** — controleer alle verwerking door functies te starten/stoppen
- **Gegevensoverdraagbaarheid** — exporteer App-gegevens via GPX, KML, CSV, JSON
- **Bezwaar** — stop elke functie op elk moment
- **Intrekking van toestemming** — op elk moment zonder eerdere verwerking aan te tasten

### Verenigd Koninkrijk (UK GDPR)

Uw rechten onder UK GDPR en de Data Protection Act 2018 zijn gelijkwaardig aan de bovenstaande GDPR-rechten. U kunt contact opnemen met de [ICO](https://ico.org.uk).

### Australië (Privacy Act 1988)

U heeft rechten onder de Australian Privacy Principles (APP's), inclusief toegang en correctie. U kunt contact opnemen met de [OAIC](https://www.oaic.gov.au).

### Canada (PIPEDA)

U heeft rechten onder PIPEDA en de toepasselijke provinciale privacywetgeving, inclusief toegang, correctie en intrekking van toestemming. U kunt contact opnemen met het [Bureau van de Commissaris voor Privacy van Canada](https://www.priv.gc.ca).

### Inwoners van Californië (CCPA/CPRA)

Wij verkopen of delen **geen** persoonlijke informatie. Wij gebruiken geen gegevens voor cross-context gedragsreclame. U heeft het recht om te weten, te verwijderen, gebruik van gevoelige gegevens te beperken en niet-discriminatie.

### Braziliaanse inwoners (LGPD)

Gelijkwaardige rechten onder Lei Geral de Proteção de Dados zijn van toepassing. U kunt contact opnemen met de [ANPD](https://www.gov.br/anpd).

### Nieuw-Zeeland (Privacy Act 2020)

U heeft rechten onder Privacy Act 2020, inclusief toegang en correctie. U kunt contact opnemen met de [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Andere jurisdicties

Ongeacht uw locatie heeft u volledige controle over uw gegevens. Waar de lokale wet aanvullende privacyrechten verleent die niet door contract kunnen worden afgestaan, gelden die rechten.

## 11. Privacy van kinderen

Noch de App noch de Website is gericht op kinderen onder de 18 jaar. De beoogde gebruiker van de App is een volwassen detectorist; veel functies (vergunningen-kluis, overeenkomsten met grondeigenaren, digitale handtekeningen, betaalde abonnementen) vereisen in de meeste rechtsgebieden de wettelijke volwassen status. Wij verzamelen niet willens en wetens persoonlijke informatie van kinderen onder de 18 jaar. Als u denkt dat een kind de App of Website heeft gebruikt, kunt u hun gegevens verwijderen door App-gegevens te wissen, te deïnstalleren of zich uit te schrijven van de wachtlijst.

## 12. Toestemmingen uitgelegd (App)

- **ACCESS_FINE_LOCATION** — GPS voor padtracking tijdens sessies
- **ACCESS_COARSE_LOCATION** — benaderende locatie als fallback wanneer nauwkeurige GPS niet beschikbaar is
- **FOREGROUND_SERVICE / FOREGROUND_SERVICE_LOCATION** — houden de GPS-tracker als voorgrondservice actief zodat tracking doorloopt met het scherm uit tijdens actieve sessies
- **CAMERA** — foto's vastleggen voor vondstregistratie
- **RECORD_AUDIO** — audio-notities opnemen voor vondsten
- **READ/WRITE_CALENDAR** — schrijft herinneringen voor de vergunningenvervaldatum van de kluis naar de lokale agenda van uw apparaat. Als u in Android synchronisatie met een cloudagenda hebt ingeschakeld (bijvoorbeeld Google Calendar-synchronisatie), worden deze herinneringen samen met de rest van uw agenda gesynchroniseerd met uw account — die synchronisatie wordt geregeld door uw Android-instellingen, niet door de App
- **INTERNET** — weer, geocodering, getijden, kaarten, abonnementen, optionele feedback
- **ACCESS_NETWORK_STATE** — offline-status detecteren voordat netwerkoproepen worden gedaan
- **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS** — voorkomen dat het systeem de GPS-tracker beëindigt tijdens lange sessies
- **POST_NOTIFICATIONS** — GPS-trackingmelding
- **VIBRATE** — grenswaarschuwingen van de perimeterbewaking

U kunt elke toestemming op elk moment intrekken via de Android-instellingen.

## 13. Cookies en tracking

**De App** gebruikt geen cookies, webbeacons, pixel-tags, apparaatvingerafdrukken of andere trackingtechnologieën. **De Website** plaatst geen first-party cookies; zie Sectie 4.3 voor volledige Website-cookie-openbaarmaking.

## 14. Internationale gegevensoverdrachten

**App-gegevens:** Aangezien alle detectiegegevens lokaal op uw apparaat worden opgeslagen, vinden er geen internationale gegevensoverdrachten van uw detectiegegevens plaats onder onze controle. API-oproepen naar derden (Sectie 3.2), optionele Google Drive-back-up, optionele Firebase-diagnostiek, het optioneel delen van live groepslocatie (Sectie 3.5, via de Firebase van Google) en optionele feedback kunnen worden verwerkt in de jurisdicties waar die diensten opereren.

**Website-gegevens:** Wachtlijst-e-mails worden opgeslagen in de EU (Ierland) door Supabase en verwerkt door Resend (EU, Ierland). Als u de Website buiten de EU bezoekt, wordt uw e-mailadres voor verwerking naar de EU overgedragen.

## 15. Kennisgeving van gegevenslekken

**App:** Uw opgeslagen detectiegegevens worden op uw apparaat opgeslagen, niet op servers die wij beheren, waardoor ze niet worden blootgesteld door een lek in onze infrastructuur. De enige uitzondering is de optionele Live Group-functie (Sectie 3.5): terwijl u in een groep zit, wordt uw live locatie kortstondig bewaard in de Firebase van Google, met toegang die via regels aan de serverzijde is beperkt tot de leden van die groep. Als wij op de hoogte raken van een kwetsbaarheid in de App, brengen wij een update uit en informeren wij gebruikers via de App of website. Optionele feedback die u indient, wordt bewaard door onze verwerker Supabase onder diens eigen meldingsprotocollen voor gegevenslekken.

**Website:** Onze verwerkers (Supabase, Resend) hanteren hun eigen meldingsprotocollen voor gegevenslekken. In het onwaarschijnlijke geval van een lek dat uw wachtlijst-e-mail beïnvloedt, zullen wij u en de relevante toezichthoudende autoriteit (ANSPDCP) binnen 72 uur informeren zoals vereist door de GDPR.

## 16. Wijzigingen in dit beleid

Wij kunnen dit Privacybeleid bijwerken om wijzigingen in functionaliteit of toepasselijke wetten te weerspiegelen. De datum "Laatst bijgewerkt" wordt herzien. Materiële wijzigingen worden gecommuniceerd via de App of website.

## 17. Privacybeleid van derden

- [Google (Maps, Drive, Sign-In, platform-geocoder)](https://policies.google.com/privacy)
- [Firebase (Analytics en Crashlytics — alleen opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [OpenTopoMap](https://opentopomap.org/about)
- [Esri/ArcGIS](https://www.esri.com/en-us/privacy/overview)
- [eHarta / geo-spatial.org](https://www.geo-spatial.org)
- [Cloudflare](https://www.cloudflare.com/privacypolicy/) (proxy voor historische-kaarttegels)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Website-hosting + analytics)
- [Supabase](https://supabase.com/privacy) (Website-database + in-app feedback)
- [Resend](https://resend.com/legal/privacy-policy) (Website-e-mail)

## 18. Contact

**Coc Lorand-Adrian P.F.A.** (handelend onder de naam Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

Voor GDPR-gerelateerde vragen kunt u ook contact opnemen met ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) op [dataprotection.ro](https://www.dataprotection.ro).

---

Dit Privacybeleid is van kracht vanaf 12 mei 2026 en is van toepassing op alle versies van SweepTrack Pro.
