# Politica de Confidențialitate

**SweepTrack Pro** — Aplicație de monitorizare GPS pentru detecția de metale

Data intrării în vigoare: 12 mai 2026 · Ultima actualizare: 26 mai 2026

Operat de: Coc Lorand Adrian P.F.A., activând sub denumirea comercială "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introducere

Această Politică de Confidențialitate explică modul în care SweepTrack Pro ("Aplicația") și site-ul web sweeptrack.pro ("Website-ul") colectează, utilizează, stochează și protejează informațiile dumneavoastră. Ne angajăm să vă protejăm confidențialitatea și să asigurăm transparența practicilor noastre privind datele.

Aplicația este concepută cu o **arhitectură axată pe confidențialitate**: toate datele de detecție sunt stocate local pe dispozitivul dumneavoastră, nu operăm servere backend pentru Aplicație și nu colectăm, transmitem sau vindem datele dumneavoastră personale de detecție. Website-ul funcționează separat și are propriile sale practici privind datele, descrise în Secțiunea 4.

## 2. Operatorul de Date

În scopul Regulamentului General privind Protecția Datelor al UE (GDPR) și al legii române privind protecția datelor (Legea 190/2018), operatorul de date este:

**Coc Lorand Adrian P.F.A.** (activând sub denumirea Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Datele pe care le colectăm (Aplicația Android)

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

**Firebase Analytics și Crashlytics (Opțional — dezactivate implicit):** Două SDK-uri Google Firebase sunt integrate în Aplicație, dar **ambele rămân inactive până când optați explicit** prin solicitarea de consimțământ de la prima rulare sau din **Setări → Confidențialitate → Diagnostice**. Până la momentul opt-in-ului nu se trimite niciun eveniment și nu se încarcă niciun raport de eroare. Vă puteți retrage consimțământul oricând; retragerea are efect la următorul eveniment. Versiunile de dezvoltare nu activează niciodată Crashlytics.

Când sunt activate:

- **Firebase Analytics** înregistrează opt nume de evenimente agregate cu parametri neidentificatori: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Conținutul evenimentelor **nu** include niciodată coordonate GPS, adrese, denumirile descoperirilor, fotografii, înregistrări audio, date din seif sau alte informații de identificare personală — doar contoare, durate, distanțe, tipul descoperirii (doar categoria) și identificatori de funcții.
- **Firebase Crashlytics** încarcă urme de stivă ale erorilor împreună cu modelul dispozitivului, versiunea sistemului de operare și versiunea aplicației pentru a ne ajuta să diagnosticăm problemele. Înainte ca orice eroare critică sau non-fatală să fie trimisă către Crashlytics, Aplicația **elimină din mesajul excepției șirurile cu formă de coordonate** (de exemplu, modele `lat=`/`lon=`, numere zecimale cu semn având trei sau mai multe cifre fracționare), astfel încât pozițiile GPS reținute în variabile locale să nu poată scăpa prin raportarea erorilor. Cadrele stivei (clasa, metoda, linia) se păstrează pentru gruparea erorilor; valorile de la rulare nu. Un handler global de excepții necapturate aplică aceeași curățare și pentru erorile fatale capturate automat de SDK.

Ambele servicii sunt supuse [Politicii de Confidențialitate Google](https://policies.google.com/privacy) și [dezvăluirilor Firebase privind confidențialitatea și securitatea](https://firebase.google.com/support/privacy).

### 3.4 Date pe care Aplicația NU le colectează

- **Aplicația** nu colectează numele, email-ul, numărul de telefon sau orice identificatori personali
- **Aplicația** nu folosește analize sau raportare de erori decât dacă optați explicit (vezi secțiunea Firebase de mai sus; opt-in-ul este dezactivat implicit și revocabil oricând în Setări → Confidențialitate → Diagnostice)
- **Aplicația** nu folosește cadre publicitare sau identificatori de publicitate
- **Aplicația** nu urmărește modelele de utilizare, frecvența sesiunilor sau utilizarea funcțiilor
- **Aplicația** nu creează profiluri de utilizator sau amprente comportamentale
- **Aplicația** nu partajează, vinde, închiriază sau tranzacționează date cu terți
- **Aplicația** nu operează servere care primesc, procesează sau stochează datele dumneavoastră de detecție

Practicile de date ale Website-ului sunt acoperite separat în Secțiunea 4.

## 4. Practicile de date ale Website-ului (sweeptrack.pro)

Această secțiune acoperă practicile de date specifice site-ului nostru web sweeptrack.pro. Aplicația Android descrisă în Secțiunile 3 și 5–18 funcționează independent și nu partajează infrastructura cu Website-ul.

### 4.1 Colectarea adresei de email pentru lista de așteptare

Când trimiteți adresa de email printr-un formular de înscriere pe Website, colectăm:

- **Adresa de email** pe care o furnizați
- **Marcajul temporal** al înregistrării
- **Adresa IP** (tranzitorie) — folosită pentru limitarea ratei de cereri; nu este stocată dincolo de durata cererii

**Scop:** Pentru a vă notifica când SweepTrack Pro este lansat pe Google Play și pentru a trimite actualizări pre-lansare despre produs și oferta Founder's Lifetime. Nu vom folosi adresa dumneavoastră de email în niciun alt scop, nu o vom partaja și nu o vom vinde.

**Temei juridic (GDPR):** Consimțământ (Art. 6(1)(a)) — furnizat atunci când trimiteți formularul.

**Stocare:** Adresele de email sunt stocate într-o bază de date Supabase Postgres găzduită în UE (regiunea Irlanda). Supabase, Inc. acționează ca procesator de date al nostru conform Acordului standard de procesare a datelor.

**Livrarea emailurilor:** Emailurile de ieșire sunt trimise prin Resend, Inc. (regiunea UE, Irlanda) acționând ca procesator al serviciilor de email conform Acordului standard de procesare a datelor.

**Retenție:** Până când vă dezabonați sau 12 luni după lansarea publică a SweepTrack Pro pe Google Play, oricare survine prima.

**Dezabonare:** Răspundeți cu "remove" la orice email pe care îl trimitem sau utilizați linkul List-Unsubscribe pe care clientul dumneavoastră de email îl afișează (Gmail și Outlook îl afișează lângă adresa De la).

**Drepturile dumneavoastră:** Acces, rectificare, ștergere, restricționare, portabilitate și dreptul de a vă retrage consimțământul. Trimiteți un email la [support@sweeptrack.pro](mailto:support@sweeptrack.pro) pentru a exercita oricare dintre acestea.

### 4.2 Analize Website

Website-ul utilizează:

- **Vercel Analytics** — analize care respectă confidențialitatea, care nu folosesc cookie-uri și nu stochează adrese IP individuale. Măsoară doar vizualizările agregate de pagini.
- **Vercel Speed Insights** — măsurarea Core Web Vitals (timpul de încărcare a paginii, deplasarea aspectului, întârzierile de interacțiune) pe bază agregată.

Ambele instrumente sunt operate de Vercel Inc. și supuse [Politicii de Confidențialitate Vercel](https://vercel.com/legal/privacy-policy). Nu colectează informații de identificare personală și nu creează profiluri de utilizator.

### 4.3 Cookie-uri

Website-ul nu setează cookie-uri de primă parte pentru urmărire, publicitate sau profilare. Vercel Analytics este lipsit de cookie-uri prin design. O preferință de limbă, dacă o modificați, este stocată în `localStorage`-ul browser-ului dumneavoastră (nu un cookie) și este citibilă doar de propriul browser.

### 4.4 Găzduire și jurnale de server

Website-ul este găzduit de Vercel Inc. Vercel poate înregistra automat metadate de cerere standard (adresă IP, user agent, calea cererii, marcaj temporal) în scopuri operaționale, de performanță și de securitate. Aceste jurnale sunt reținute conform politicilor standard Vercel și nu sunt folosite de noi pentru urmărire sau profilarea persoanelor.

### 4.5 Drepturile dumneavoastră pentru datele Website-ului

Aceleași drepturi GDPR, UK GDPR, australiene, canadiene, CCPA, LGPD și NZ Privacy Act descrise în Secțiunea 10 se aplică în mod egal datelor colectate de Website. Pentru a exercita orice drept cu privire la adresa dumneavoastră de email din lista de așteptare, contactați [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Vom răspunde în termen de 30 de zile.

## 5. Temeiul juridic pentru procesare (GDPR)

- **Date GPS/sesiune, înregistrări descoperiri, intrări seif:** Consimțământ (Art. 6(1)(a)) — inițiați activ aceste acțiuni
- **Apeluri API (vreme, geocodare):** Interes legitim (Art. 6(1)(f)) — necesar pentru funcționalitatea de bază
- **Backup Google Drive:** Consimțământ (Art. 6(1)(a)) — activați și autentificați în mod explicit
- **Verificarea abonamentului:** Executarea unui contract (Art. 6(1)(b)) — necesară pentru a furniza funcții plătite
- **Firebase Analytics și Crashlytics (opțional):** Consimțământ (Art. 6(1)(a)) — activate prin solicitarea de la prima rulare sau din Setări, revocabile oricând
- **Email lista de așteptare (Website):** Consimțământ (Art. 6(1)(a)) — vezi Secțiunea 4.1

Vă puteți retrage consimțământul în orice moment prin oprirea activității relevante, prin dezinstalarea Aplicației sau prin dezabonarea de la emailurile Website-ului.

## 6. Cum utilizăm datele dumneavoastră

Toată procesarea datelor Aplicației are loc **local pe dispozitivul dumneavoastră**. Utilizăm datele Aplicației exclusiv pentru a furniza funcțiile Aplicației: afișarea hărții, monitorizarea sesiunilor, înregistrarea descoperirilor, gestionarea permisiunilor, date meteo/maree, exporturi, backup și verificarea abonamentului.

Datele Website-ului (adresa dumneavoastră de email din lista de așteptare) sunt folosite doar pentru a trimite comunicările de lansare și pre-lansare descrise în Secțiunea 4.

## 7. Stocarea datelor și securitatea

**Datele Aplicației:**

- Datele despre sesiuni și descoperiri sunt stocate într-o bază de date Room (SQLite) în stocarea privată izolată a Aplicației pe dispozitivul dumneavoastră — protejate prin modelul de izolare a aplicațiilor Android și criptarea datelor utilizatorului la nivel de dispozitiv în stare de repaus
- Preferințele sensibile folosesc EncryptedSharedPreferences (AES-256) de la Android
- Fișierele media sunt stocate în spațiul de stocare intern privat al Aplicației, inaccesibil altor aplicații
- Backup-ul în cloud Android este **dezactivat** (`android:allowBackup="false"`) pentru a preveni expunerea neintenționată a datelor
- Backup-urile Google Drive utilizează API-urile criptate ale Google (HTTPS/TLS) și există exclusiv în contul dumneavoastră

Pentru Aplicație, nu operăm servere, baze de date sau infrastructură cloud care să stocheze datele dumneavoastră de detecție.

**Datele Website-ului:** Emailurile listei de așteptare sunt stocate într-o bază de date Supabase Postgres găzduită în UE (Irlanda). Conexiunile sunt criptate (TLS). Accesul este restricționat doar la scopuri administrative. Emailul de ieșire este trimis prin Resend (UE, Irlanda) prin TLS. Vezi Secțiunea 4.

## 8. Reținerea datelor

**Datele Aplicației:** Datele locale sunt reținute până când alegeți să le ștergeți. Puteți șterge elemente individuale în cadrul Aplicației, puteți șterge toate datele prin Setările Android sau puteți dezinstala Aplicația. Backup-urile Google Drive persistă până când le ștergeți manual din contul dumneavoastră.

**Datele Website-ului:** Adresele de email din lista de așteptare sunt reținute până când vă dezabonați sau 12 luni după lansarea publică, oricare survine prima. După aceea, adresele sunt șterse din baza de date Supabase.

## 9. Partajarea și dezvăluirea datelor

Nu partajăm, vindem, închiriem sau dezvăluim datele dumneavoastră cu caracter personal niciunei terțe părți. Puteți alege să partajați datele Aplicației prin exporturi (GPX, KML, CSV, JSON), carduri de partajare a sesiunii sau backup Google Drive — toate inițiate de utilizator. Datele listei de așteptare ale Website-ului sunt procesate doar de procesatorii noștri numiți (Supabase, Resend) pentru scopurile descrise în Secțiunea 4.

## 10. Drepturile dumneavoastră (GDPR și internaționale)

### Drepturi GDPR (Rezidenți UE/SEE)

- **Acces** — datele Aplicației sunt complet accesibile pe dispozitivul dumneavoastră; pentru datele Website-ului, trimiteți email la [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Rectificare** — editați toate înregistrările direct în Aplicație, sau trimiteți email pentru corectarea datelor Website-ului
- **Ștergere** — ștergeți prin ștergerea în aplicație sau dezinstalare; pentru datele Website-ului, dezabonați-vă sau trimiteți email
- **Restricționare** — controlați întreaga procesare prin pornirea/oprirea funcțiilor
- **Portabilitatea datelor** — exportați datele Aplicației prin GPX, KML, CSV, JSON
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

Indiferent de locația dumneavoastră, aveți control deplin asupra datelor dumneavoastră. Acolo unde legea locală acordă drepturi de confidențialitate suplimentare care nu pot fi renunțate prin contract, acele drepturi se aplică.

## 11. Confidențialitatea copiilor

Nici Aplicația, nici Website-ul nu sunt adresate copiilor sub 18 ani. Utilizatorul vizat al Aplicației este un detectorist adult; multe funcții (permise în seif, acorduri cu proprietarii de teren, semnături digitale, abonamente plătite) necesită statutul legal de adult în majoritatea jurisdicțiilor. Nu colectăm cu bună știință informații personale de la copii sub 18 ani. Dacă credeți că un copil a folosit Aplicația sau Website-ul, puteți șterge datele acestuia prin ștergerea datelor Aplicației, dezinstalare sau dezabonare de la lista de așteptare.

## 12. Permisiuni explicate (Aplicație)

- **ACCESS_FINE_LOCATION** — GPS pentru monitorizarea traseului în timpul sesiunilor
- **ACCESS_BACKGROUND_LOCATION** — continuarea monitorizării când ecranul este oprit
- **CAMERA** — capturarea fotografiilor pentru înregistrarea descoperirilor
- **RECORD_AUDIO** — înregistrarea notelor audio pentru descoperiri
- **READ/WRITE_CALENDAR** — scrie mementouri pentru expirarea permiselor în calendarul local al dispozitivului. Dacă aveți activată sincronizarea cu calendarul în cloud în Android (de exemplu, sincronizare Google Calendar), aceste mementouri vor fi sincronizate cu contul dumneavoastră împreună cu restul calendarului — sincronizarea este controlată de setările Android, nu de Aplicație
- **INTERNET** — vreme, geocodare, maree, hărți, abonamente
- **POST_NOTIFICATIONS** — notificare pentru monitorizarea GPS
- **VIBRATE** — alerte pentru limitele gardei de perimetru

Puteți revoca orice permisiune în orice moment prin Setările Android.

## 13. Cookie-uri și monitorizare

**Aplicația** nu utilizează module cookie, semnalizatoare web, etichete pixel, amprentarea dispozitivului sau orice alte tehnologii de monitorizare. **Website-ul** nu setează cookie-uri de primă parte; vezi Secțiunea 4.3 pentru dezvăluirea completă a cookie-urilor Website-ului.

## 14. Transferuri internaționale de date

**Datele Aplicației:** Deoarece toate datele de detecție sunt stocate local pe dispozitivul dumneavoastră, nu au loc transferuri internaționale de date sub controlul nostru. Apelurile API către terți pot fi procesate în jurisdicțiile în care funcționează acele servicii.

**Datele Website-ului:** Emailurile listei de așteptare sunt stocate în UE (Irlanda) de către Supabase și procesate de Resend (UE, Irlanda). Dacă accesați Website-ul din afara UE, adresa dumneavoastră de email este transferată în UE pentru procesare.

## 15. Notificarea încălcării securității datelor

**Aplicația:** Deoarece nu stocăm datele dumneavoastră de detecție pe niciun server pe care îl operăm, o încălcare a securității care afectează datele Aplicației din partea noastră nu este posibilă. Dacă luăm la cunoștință o vulnerabilitate în Aplicație, vom lansa o actualizare și vom notifica utilizatorii prin intermediul Aplicației sau al site-ului web.

**Website-ul:** Procesatorii noștri (Supabase, Resend) mențin propriile protocoale de notificare a încălcărilor. În cazul puțin probabil al unei încălcări care afectează adresa dumneavoastră de email din lista de așteptare, vă vom notifica pe dumneavoastră și autoritatea de supraveghere relevantă (ANSPDCP) în termen de 72 de ore, conform cerințelor GDPR.

## 16. Modificări ale acestei politici

Putem actualiza această Politică de Confidențialitate pentru a reflecta modificările de funcționalitate sau ale legilor aplicabile. Data „Ultimei actualizări" va fi revizuită. Modificările materiale vor fi comunicate prin intermediul Aplicației sau al site-ului web.

## 17. Politicile de confidențialitate ale terților

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics și Crashlytics — doar opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Găzduire Website + analize)
- [Supabase](https://supabase.com/privacy) (Baza de date Website)
- [Resend](https://resend.com/legal/privacy-policy) (Email Website)

## 18. Contactați-ne

**Coc Lorand Adrian P.F.A.** (activând sub denumirea Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

Pentru întrebări legate de GDPR, puteți contacta și ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) la [dataprotection.ro](https://www.dataprotection.ro).

---

Această Politică de Confidențialitate este în vigoare din 12 mai 2026 și se aplică tuturor versiunilor SweepTrack Pro.
