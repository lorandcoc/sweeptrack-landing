## 1. Română (Romanian)

# Politica de Confidențialitate

**SweepTrack Pro** — Aplicație de monitorizare GPS pentru detecția de metale

Data intrării în vigoare: 7 aprilie 2026 · Ultima actualizare: 7 aprilie 2026

Operat de: Coc Lorand P.F.A., activând sub denumirea comercială "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introducere

Această Politică de Confidențialitate explică modul în care SweepTrack Pro („Aplicația”) colectează, utilizează, stochează și protejează informațiile dumneavoastră. Ne angajăm să vă protejăm confidențialitatea și să asigurăm transparența practicilor noastre privind datele.

SweepTrack Pro este conceput cu o **arhitectură axată pe confidențialitate**: toate datele sunt stocate local pe dispozitivul dumneavoastră, nu operăm servere backend și nu colectăm, transmitem sau vindem datele dumneavoastră cu caracter personal.

## 2. Operatorul de Date

În scopul Regulamentului General privind Protecția Datelor al UE (GDPR) și al legii române privind protecția datelor (Legea 190/2018), operatorul de date este:

**Coc Lorand P.F.A.** (activând sub denumirea Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Datele pe care le colectăm

### 3.1 Date stocate local pe dispozitivul dumneavoastră

Următoarele date sunt create de dumneavoastră și stocate **exclusiv pe dispozitivul dumneavoastră**. Nu avem niciodată acces la aceste date decât dacă le partajați în mod explicit.

**Date de locație și sesiune:**

- Coordonate GPS (latitudine, longitudine) în timpul sesiunilor de monitorizare active
- Viteza, altitudinea, direcția și precizia citirilor de la senzorii dispozitivului
- Metadate ale sesiunii: nume, dată, ora de început/sfârșit, durată, distanță, etichete
- Coordonatele traseului cu amprente temporale
- Numele locațiilor (obținute prin geocodare inversă)

**Înregistrări ale descoperirilor:**

- Tipul descoperirii (Tezaur, Aur, Monedă, Relicvă, Bijuterie, Gunoi)
- Locația descoperirii (coordonate GPS în momentul înregistrării)
- Metadate opționale: nume, note, adâncime, valoare estimată, greutate
- Atașamente media: fotografii și înregistrări audio

**Date din seiful de permisiuni:**

- Numele și locațiile siturilor
- Numele proprietarilor de terenuri și informații de contact
- Numere de permis, date de emitere, date de expirare
- Coordonatele limitelor sitului (poligon)
- Semnături digitale (format SVG)
- Etichete și note personalizate

**Alte date locale:** Configurații ale presetărilor de detector, preferințe ale aplicației (temă, unități, limbă, setări hărți) și instantanee meteo asociate sesiunilor.

### 3.2 Date procesate temporar (nu sunt stocate)

Următoarele date sunt trimise către API-uri terțe pentru funcționalitate în timp real și **nu sunt stocate de noi sau de aceste servicii dincolo de cererea imediată**:

- Coordonate GPS aproximative trimise către Open-Meteo pentru prognoze meteo și date de altitudine
- Coordonate GPS aproximative trimise către OpenStreetMap/Nominatim pentru căutarea adreselor
- Coordonate GPS aproximative trimise către Overpass API pentru descoperirea punctelor de interes istorice din apropiere
- Coordonate GPS aproximative trimise către Wikipedia API pentru căutarea geografică a articolelor din apropiere
- Identificatori ai stațiilor de maree trimiși către NOAA pentru predicțiile mareelor
- Interogări de căutare a locației trimise către Open-Meteo Geocoding pentru căutarea numelor de locuri

### 3.3 Date procesate de servicii terțe

**Google Maps SDK:** Locația dispozitivului dumneavoastră este procesată de Google Maps pentru afișarea hărții. Supusă [Politicii de Confidențialitate Google](https://policies.google.com/privacy).

**Google Sign-In și Google Drive (Opțional):** Dacă activați backup-ul în Google Drive, adresa de email a contului dumneavoastră Google este stocată local pentru a identifica contul autentificat. Datele de backup sunt încărcate în propriul cont Google Drive. Nu avem acces la Google Drive-ul dumneavoastră.

**RevenueCat (Gestionarea abonamentelor):** Un identificator anonim al utilizatorului aplicației, generat aleatoriu, este utilizat pentru verificarea abonamentului. Nu sunt partajate informații personale. Supus [Politicii de Confidențialitate RevenueCat](https://www.revenuecat.com/privacy).

### 3.4 Date pe care NU le colectăm

- **Nu** colectăm numele, email-ul, numărul de telefon sau orice identificatori personali
- **Nu** folosim analize, raportarea erorilor sau SDK-uri de monitorizare a comportamentului
- **Nu** folosim cadre publicitare sau identificatori de publicitate
- **Nu** urmărim modelele de utilizare, frecvența sesiunilor sau utilizarea funcțiilor
- **Nu** creăm profiluri de utilizator sau amprente comportamentale
- **Nu** partajăm, vindem, închiriem sau tranzacționăm date cu terți
- **Nu** operăm servere care primesc, procesează sau stochează datele dumneavoastră

## 4. Temeiul juridic pentru procesare (GDPR)

- **Date GPS/sesiune, înregistrări descoperiri, intrări seif:** Consimțământ (Art. 6(1)(a)) — inițiați activ aceste acțiuni
- **Apeluri API (vreme, geocodare):** Interes legitim (Art. 6(1)(f)) — necesar pentru funcționalitatea de bază
- **Backup Google Drive:** Consimțământ (Art. 6(1)(a)) — activați și autentificați în mod explicit
- **Verificarea abonamentului:** Executarea unui contract (Art. 6(1)(b)) — necesară pentru a furniza funcții plătite

Vă puteți retrage consimțământul în orice moment prin oprirea activității relevante sau prin dezinstalarea Aplicației.

## 5. Cum utilizăm datele dumneavoastră

Toată procesarea datelor are loc **local pe dispozitivul dumneavoastră**. Utilizăm datele dumneavoastră exclusiv pentru a furniza funcțiile Aplicației: afișarea hărții, monitorizarea sesiunilor, înregistrarea descoperirilor, gestionarea permisiunilor, date meteo/maree, exporturi, backup și verificarea abonamentului.

## 6. Stocarea datelor și securitatea

- Datele despre sesiuni și descoperiri sunt stocate într-o bază de date Room criptată pe dispozitivul dumneavoastră
- Preferințele sensibile folosesc EncryptedSharedPreferences (AES-256) de la Android
- Fișierele media sunt stocate în spațiul de stocare intern privat al Aplicației, inaccesibil altor aplicații
- Backup-ul în cloud Android este **dezactivat** (`android:allowBackup="false"`) pentru a preveni expunerea neintenționată a datelor
- Backup-urile Google Drive utilizează API-urile criptate ale Google (HTTPS/TLS) și există exclusiv în contul dumneavoastră

Nu operăm servere, baze de date sau infrastructură cloud.

## 7. Reținerea datelor

Datele locale sunt reținute până când alegeți să le ștergeți. Puteți șterge elemente individuale în cadrul Aplicației, puteți șterge toate datele prin Setările Android sau puteți dezinstala Aplicația. Backup-urile Google Drive persistă până când le ștergeți manual din contul dumneavoastră.

## 8. Partajarea și dezvăluirea datelor

Nu partajăm, vindem, închiriem sau dezvăluim datele dumneavoastră cu caracter personal niciunei terțe părți. Puteți alege să partajați date prin exporturi (GPX, KML, CSV, JSON), carduri de partajare a sesiunii sau backup Google Drive — toate inițiate de utilizator.

## 9. Drepturile dumneavoastră (GDPR și internaționale)

### Drepturi GDPR (Rezidenți UE/SEE)

- **Acces** — datele dumneavoastră sunt complet accesibile pe dispozitivul dumneavoastră
- **Rectificare** — editați toate înregistrările direct în Aplicație
- **Ștergere** — ștergeți prin ștergerea în aplicație sau dezinstalare
- **Restricționare** — controlați întreaga procesare prin pornirea/oprirea funcțiilor
- **Portabilitatea datelor** — exportați prin GPX, KML, CSV, JSON
- **Opoziție** — opriți orice funcție în orice moment
- **Retragerea consimțământului** — în orice moment, fără a afecta procesarea anterioară

### Regatul Unit (UK GDPR)

Drepturile dumneavoastră conform UK GDPR și Legii privind protecția datelor din 2018 sunt echivalente cu drepturile GDPR de mai sus. Puteți contacta [ICO](https://ico.org.uk).

### Australia (Privacy Act 1988)

Aveți drepturi conform Principiilor Australiene de Confidențialitate (APPs), inclusiv accesul și corectarea. Puteți contacta [OAIC](https://www.oaic.gov.au).

### Canada (PIPEDA)

Aveți drepturi conform PIPEDA și legislației provinciale aplicabile privind confidențialitatea, inclusiv accesul, corectarea și retragerea consimțământului. Puteți contacta [Biroul Comisarului pentru Confidențialitate din Canada](https://www.priv.gc.ca).

### Rezidenți din California (CCPA/CPRA)

**Nu** vindem și nu partajăm nicio informație personală. Nu folosim date pentru publicitate comportamentală cross-context. Aveți dreptul de a cunoaște, de a șterge, de a limita utilizarea datelor sensibile și dreptul la nediscriminare.

### Rezidenți brazilieni (LGPD)

Se aplică drepturi echivalente conform Lei Geral de Proteção de Dados. Puteți contacta [ANPD](https://www.gov.br/anpd).

### Noua Zeelandă (Privacy Act 2020)

Aveți drepturi conform Privacy Act 2020, inclusiv accesul și corectarea. Puteți contacta [Comisarul pentru Confidențialitate din NZ](https://www.privacy.org.nz).

### Alte jurisdicții

Indiferent de locația dumneavoastră, aveți control deplin asupra datelor dumneavoastră prin intermediul Aplicației. Acolo unde legea locală acordă drepturi de confidențialitate suplimentare care nu pot fi renunțate prin contract, acele drepturi se aplică.

## 10. Confidențialitatea copiilor

Aplicația nu este adresată copiilor sub 16 ani. Nu colectăm cu bună știință informații personale de la copii sub 16 ani. Dacă credeți că un copil a folosit Aplicația, puteți șterge datele acestuia prin ștergerea datelor Aplicației sau dezinstalare.

## 11. Permisiuni explicate

- **ACCESS_FINE_LOCATION** — GPS pentru monitorizarea traseului în timpul sesiunilor
- **ACCESS_BACKGROUND_LOCATION** — continuarea monitorizării când ecranul este oprit
- **CAMERA** — capturarea fotografiilor pentru înregistrarea descoperirilor
- **RECORD_AUDIO** — înregistrarea notelor audio pentru descoperiri
- **READ/WRITE_CALENDAR** — mementouri pentru expirarea permiselor din seif
- **INTERNET** — vreme, geocodare, maree, hărți, abonamente
- **POST_NOTIFICATIONS** — notificare pentru monitorizarea GPS
- **VIBRATE** — alerte pentru limitele gardei de perimetru

Puteți revoca orice permisiune în orice moment prin Setările Android.

## 12. Cookie-uri și monitorizare

Aplicația nu utilizează module cookie, semnalizatoare web, etichete pixel, amprentarea dispozitivului sau orice alte tehnologii de monitorizare.

## 13. Transferuri internaționale de date

Deoarece toate datele sunt stocate local pe dispozitivul dumneavoastră, nu au loc transferuri internaționale de date sub controlul nostru. Apelurile API către terți pot fi procesate în jurisdicțiile în care funcționează acele servicii.

## 14. Notificarea încălcării securității datelor

Deoarece nu stocăm datele dumneavoastră pe niciun server, o încălcare a securității datelor din partea noastră nu este posibilă. Dacă luăm la cunoștință o vulnerabilitate în Aplicație, vom lansa o actualizare și vom notifica utilizatorii prin intermediul Aplicației sau al site-ului web.

## 15. Modificări ale acestei politici

Putem actualiza această Politică de Confidențialitate pentru a reflecta modificările de funcționalitate sau ale legilor aplicabile. Data „Ultimei actualizări” va fi revizuită. Modificările materiale vor fi comunicate prin intermediul Aplicației sau al site-ului web.

## 16. Politicile de confidențialitate ale terților

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Contactați-ne

**Coc Lorand P.F.A.** (activând sub denumirea Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

Pentru întrebări legate de GDPR, puteți contacta și ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) la [dataprotection.ro](https://www.dataprotection.ro).

---

Această Politică de Confidențialitate este în vigoare din 7 aprilie 2026 și se aplică tuturor versiunilor SweepTrack Pro.

---