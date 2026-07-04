# Politica de Confidențialitate

**SweepTrack Pro** — Aplicație de monitorizare GPS pentru detecția de metale

Data intrării în vigoare: 12 mai 2026 · Ultima actualizare: 3 iulie 2026

Operat de: Coc Lorand-Adrian P.F.A., activând sub denumirea comercială "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introducere

Această Politică de Confidențialitate explică modul în care SweepTrack Pro ("Aplicația") și site-ul web sweeptrack.pro ("Website-ul") colectează, utilizează, stochează și protejează informațiile dumneavoastră. Ne angajăm să vă protejăm confidențialitatea și să asigurăm transparența practicilor noastre privind datele.

Aplicația este concepută cu o **arhitectură axată pe confidențialitate**: datele de detecție pe care le salvați — sesiuni, descoperiri, intrări din seif — sunt stocate local pe dispozitivul dumneavoastră, nu le vindem și nu le folosim pentru a vă profila. Unele date părăsesc dispozitivul dumneavoastră doar pentru funcțiile inițiate de utilizator descrise în Secțiunile 3.2, 3.3 și 3.5: funcții API în timp real, backup opțional, diagnostice opționale, feedback opțional și — dacă alegeți să creați sau să vă alăturați unui grup — partajarea opțională a locației în Grup Live, care este întregul scop al funcției Radar. Website-ul funcționează separat și are propriile sale practici privind datele, descrise în Secțiunea 4.

## 2. Operatorul de Date

În scopul Regulamentului General privind Protecția Datelor al UE (GDPR) și al legii române privind protecția datelor (Legea 190/2018), operatorul de date este:

**Coc Lorand-Adrian P.F.A.** (activând sub denumirea Loriba)  
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

- Tipul descoperirii (Tezaur, Aur, Monedă, Relicvă, Bijuterie, Gunoi, Nesortat/Adăugare rapidă)
- Locația descoperirii (coordonate GPS în momentul înregistrării)
- Metadate opționale: nume, note, adâncime, valoare estimată, greutate
- Atașamente media: fotografii, înregistrări audio și înregistrări video

**Date din seiful de permisiuni:**

- Numele și locațiile siturilor
- Numele proprietarilor de terenuri și informații de contact
- Numere de permis, date de emitere, date de expirare
- Coordonatele limitelor sitului (poligon)
- Semnături digitale (format SVG)
- Etichete și note personalizate

**Puncte de reper (waypoints):** Marcaje de hartă plasate de utilizator — coordonate, nume, categorie și note opționale.

**Alte date locale:** Configurații ale presetărilor de detector, preferințe ale aplicației (temă, unități, limbă, setări hărți) și instantanee meteo asociate sesiunilor.

### 3.2 Date procesate temporar (nu sunt stocate)

Următoarele date sunt trimise către API-uri terțe pentru funcționalitate în timp real și **nu sunt stocate de noi sau de aceste servicii dincolo de cererea imediată**:

- Coordonate GPS aproximative trimise către Open-Meteo pentru prognoze meteo și date de altitudine
- Coordonate transformate în nume de locuri prin geocodificatorul de platformă Android (furnizat de Google Play Services pe majoritatea dispozitivelor) pentru geocodare inversă — folosit pentru a eticheta sesiunile și descoperirile cu un nume de loc
- Identificatori ai stațiilor de maree trimiși către NOAA pentru predicțiile mareelor (stații de coastă din S.U.A.)
- Interogări de căutare a locației trimise către Open-Meteo Geocoding pentru căutarea numelor de locuri
- Cereri de plăci de hartă (care dezvăluie zona aproximativă a hărții pe care o vizualizați) trimise către furnizorul de plăci al tipului de hartă activ: Esri/ArcGIS (imagini din satelit și hărți topografice USGS), OpenStreetMap și OpenTopoMap (pachete de hărți offline/descărcabile) și — pentru suprapunerea istorică românească „Harta Veche" — un proxy de cache pe care îl operăm pe Cloudflare, care preia plăcile de la geo-spatial.org (eHarta). Harta de bază implicită Google este acoperită la Google Maps SDK în Secțiunea 3.3

### 3.3 Date procesate de servicii terțe

**Google Maps SDK:** Locația dispozitivului dumneavoastră este procesată de Google Maps pentru afișarea hărții. Supusă [Politicii de Confidențialitate Google](https://policies.google.com/privacy).

**Google Sign-In și Google Drive (Opțional):** Dacă activați backup-ul în Google Drive, adresa de email a contului dumneavoastră Google este stocată local pentru a identifica contul autentificat. Datele de backup sunt încărcate în propriul cont Google Drive. Nu avem acces la Google Drive-ul dumneavoastră.

**RevenueCat (Gestionarea abonamentelor):** Un identificator anonim al utilizatorului aplicației, generat aleatoriu, este utilizat pentru verificarea abonamentului. Nu sunt partajate informații personale. Supus [Politicii de Confidențialitate RevenueCat](https://www.revenuecat.com/privacy).

**Firebase Analytics și Crashlytics (Opțional — dezactivate implicit):** Două SDK-uri Google Firebase sunt integrate în Aplicație, dar **ambele rămân inactive până când optați explicit** prin solicitarea de consimțământ de la prima rulare sau din **Setări → Confidențialitate → Diagnostice**. Până la momentul opt-in-ului nu se trimite niciun eveniment și nu se încarcă niciun raport de eroare. Vă puteți retrage consimțământul oricând; retragerea are efect la următorul eveniment. Versiunile de dezvoltare nu activează niciodată Crashlytics.

Când sunt activate:

- **Firebase Analytics** înregistrează opt nume de evenimente agregate cu parametri neidentificatori: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Conținutul evenimentelor **nu** include niciodată coordonate GPS, adrese, denumirile descoperirilor, fotografii, înregistrări audio, date din seif sau alte informații de identificare personală — doar contoare, durate, distanțe, tipul descoperirii (doar categoria) și identificatori de funcții. Evenimentul `find_logged` raportează tipul ca o categorie generală (`valuable`, `find`, `trash`, `unsorted` sau `other` pentru orice tip nerecunoscut) în loc de tipul specific al descoperirii, astfel încât panoul de bord agregat nu poate deduce distribuția obiectelor de valoare pe care le înregistrează un utilizator individual.
- **Firebase Crashlytics** încarcă urme de stivă ale erorilor împreună cu modelul dispozitivului, versiunea sistemului de operare și versiunea aplicației pentru a ne ajuta să diagnosticăm problemele. Înainte ca orice eroare critică sau non-fatală să fie trimisă către Crashlytics, Aplicația **elimină din mesajul excepției șirurile cu formă de coordonate** (de exemplu, modele `lat=`/`lon=`, numere zecimale cu semn având trei sau mai multe cifre fracționare), astfel încât pozițiile GPS reținute în variabile locale să nu poată scăpa prin raportarea erorilor. Cadrele stivei (clasa, metoda, linia) se păstrează pentru gruparea erorilor; valorile de la rulare nu. Un handler global de excepții necapturate aplică aceeași curățare și pentru erorile fatale capturate automat de SDK.

Ambele servicii sunt supuse [Politicii de Confidențialitate Google](https://policies.google.com/privacy) și [dezvăluirilor Firebase privind confidențialitatea și securitatea](https://firebase.google.com/support/privacy).

**Feedback în aplicație (Opțional):** Dacă trimiteți feedback prin formularul de feedback al Aplicației, Aplicația transmite informațiile pe care le introduceți — mesajul dumneavoastră, categoria selectată și dacă este un raport de eroare sau o idee de funcție — împreună cu modelul dispozitivului dumneavoastră, versiunea Android, versiunea aplicației și limba (locale), și, **doar dacă alegeți să o furnizați, adresa dumneavoastră de email**, către o funcție Supabase Edge Function pe care o operăm, astfel încât să putem citi și răspunde. Nu se trimite nimic decât dacă trimiteți formularul. Supabase, Inc. acționează ca procesator de date al nostru (regiunea UE). Supus [Politicii de Confidențialitate Supabase](https://supabase.com/privacy).

### 3.4 Date pe care Aplicația NU le colectează

- **Aplicația** nu colectează numele, numărul de telefon sau orice identificatori personali — cu excepția unei adrese de email pe care o introduceți opțional atunci când trimiteți feedback în aplicație (vezi Secțiunea 3.3)
- **Aplicația** nu folosește analize sau raportare de erori decât dacă optați explicit (vezi secțiunea Firebase de mai sus; opt-in-ul este dezactivat implicit și revocabil oricând în Setări → Confidențialitate → Diagnostice)
- **Aplicația** nu folosește cadre publicitare sau identificatori de publicitate
- **Aplicația** nu urmărește modelele de utilizare, frecvența sesiunilor sau utilizarea funcțiilor
- **Aplicația** nu creează profiluri de utilizator sau amprente comportamentale
- **Aplicația** nu vinde, închiriază sau tranzacționează datele dumneavoastră și le partajează doar acolo unde inițiați dumneavoastră acest lucru: apelurile API în timp real din Secțiunea 3.2, backup-ul opțional Google Drive, diagnosticele opționale Firebase (opt-in), partajarea opțională a locației în Grup Live (Secțiunea 3.5) și feedback-ul pe care alegeți să îl trimiteți (Secțiunea 3.3)
- **Aplicația** nu operează servere care stochează datele dumneavoastră de detecție salvate (sesiuni, descoperiri, intrări din seif) — cu o singură excepție pe care o controlați: funcția opțională Grup Live (Secțiunea 3.5) partajează locația dumneavoastră în timp real cu un grup pe care îl creați sau la care vă alăturați, prin Firebase Realtime Database de la Google, cât timp vă aflați în acel grup. În afară de Grup Live, singurul conținut care ajunge la un server pe care îl operăm este feedback-ul pe care alegeți să îl trimiteți (Secțiunea 3.3)

Practicile de date ale Website-ului sunt acoperite separat în Secțiunea 4.

### 3.5 Partajarea locației în Grup Live (opțional — funcția Radar)

SweepTrack Pro include **Radar**, o funcție de poziționare live în grup accesibilă din butonul RADAR de pe harta principală. Rămâne dezactivată până când **creați sau vă alăturați unui grup**. Crearea (găzduirea) unui grup este o funcție Pro; alăturarea la un grup este gratuită. Cât timp vă aflați într-un grup, următoarele sunt transmise către **Firebase Realtime Database** de la Google și devin vizibile, în timp real, celorlalți membri ai aceluiași grup:

- **Numele dumneavoastră afișat** — un nume pe care îl alegeți; nu trebuie să fie numele dumneavoastră real.
- **Locația dumneavoastră precisă** — latitudine și longitudine GPS cu precizie și direcție, actualizate cât timp vă aflați în grup (aproximativ la fiecare 30 de secunde în versiunea gratuită, mai frecvent cu un abonament și la fiecare câteva secunde în timpul unui SOS).
- **Statusul dumneavoastră** — online, în pauză sau staționar, și dacă ați declanșat un **SOS** (inclusiv locația dumneavoastră în acel moment).
- **Nivelul bateriei dispozitivului, culoarea și pictograma marcajului de hartă** și orice **puncte de reper, ping-uri sau punct de bază/adunare** partajate pe care le creați, fiecare etichetat cu numele dumneavoastră afișat și coordonatele.

**Cine îl poate vedea:** doar membrii grupului. Oricine deține codul de alăturare al grupului sau codul QR se poate alătura și poate vedea harta live, așa că partajați un cod doar cu persoanele cu care intenționați să vă partajați locația. Accesul este impus de reguli de securitate pe partea de server; o persoană trebuie să se alăture grupului (devenind ea însăși vizibilă) înainte de a putea citi pozițiile.

**Autentificare:** backend-ul grupului folosește **Firebase Anonymous Authentication** — un identificator aleatoriu pentru instalarea aplicației dumneavoastră, nelegat de numele, emailul, numărul de telefon sau contul dumneavoastră Google.

**Cât timp este păstrat:** datele de locație ale grupului sunt tranzitorii. Un grup **expiră** (de regulă după aproximativ 12 ore; grupurile de probă mai devreme), după care nu mai acceptă poziții noi și nu mai poate fi accesat. Părăsirea unui grup vă șterge imediat intrarea de membru, iar grupul este șters când ultimul său membru îl părăsește. Dacă un grup este abandonat fără ca cineva să îl părăsească, ultimele poziții partajate înainte de expirare rămân stocate în grupul expirat până la ștergerea acestuia. Nu păstrăm un istoric pe termen lung al deplasărilor dumneavoastră pe serverele noastre, iar puteți solicita ștergerea în orice moment (Secțiunea 18).

Aplicația însoțitoare gratuită, de sine stătătoare, are propria dezvăluire, mai amplă, în [Politica de Confidențialitate SweepTrack Radar](https://sweeptrack.pro/privacy-radar).

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
- **Apeluri API (vreme, geocodare, plăci de hartă):** Interes legitim (Art. 6(1)(f)) — necesar pentru funcționalitatea de bază
- **Backup Google Drive:** Consimțământ (Art. 6(1)(a)) — activați și autentificați în mod explicit
- **Verificarea abonamentului:** Executarea unui contract (Art. 6(1)(b)) — necesară pentru a furniza funcții plătite
- **Firebase Analytics și Crashlytics (opțional):** Consimțământ (Art. 6(1)(a)) — activate prin solicitarea de la prima rulare sau din Setări, revocabile oricând
- **Partajarea locației în Grup Live (opțional):** Consimțământ (Art. 6(1)(a)) — creați sau vă alăturați activ unui grup, cu o notificare în prim-plan afișată cât timp partajarea este activă; retrageți-l prin părăsirea grupului sau închiderea funcției
- **Feedback în aplicație (opțional):** Consimțământ (Art. 6(1)(a)) — trimis doar atunci când trimiteți formularul de feedback
- **Email lista de așteptare (Website):** Consimțământ (Art. 6(1)(a)) — vezi Secțiunea 4.1

Vă puteți retrage consimțământul în orice moment prin oprirea activității relevante, prin dezinstalarea Aplicației sau prin dezabonarea de la emailurile Website-ului.

## 6. Cum utilizăm datele dumneavoastră

Aproape toată procesarea datelor Aplicației are loc **local pe dispozitivul dumneavoastră**. Utilizăm datele Aplicației pentru a furniza funcțiile Aplicației: afișarea hărții, monitorizarea sesiunilor, înregistrarea descoperirilor, gestionarea permisiunilor, date meteo/maree, exporturi, backup și verificarea abonamentului. Datele părăsesc dispozitivul dumneavoastră doar pentru funcțiile inițiate de utilizator din Secțiunile 3.2 și 3.3 (API-uri în timp real, backup opțional, diagnostice opționale, feedback opțional).

Datele Website-ului (adresa dumneavoastră de email din lista de așteptare) sunt folosite doar pentru a trimite comunicările de lansare și pre-lansare descrise în Secțiunea 4.

## 7. Stocarea datelor și securitatea

**Datele Aplicației:**

- Datele despre sesiuni și descoperiri sunt stocate într-o bază de date Room (SQLite) în stocarea privată izolată a Aplicației pe dispozitivul dumneavoastră — protejate prin modelul de izolare a aplicațiilor Android și criptarea datelor utilizatorului la nivel de dispozitiv în stare de repaus
- Pe dispozitivele compatibile, preferințele sensibile și datele din Seiful de permisiuni folosesc EncryptedSharedPreferences (AES-256) de la Android, susținut de Android Keystore. Dacă Keystore-ul sau EncryptedSharedPreferences nu este disponibil pe un dispozitiv, Aplicația revine la stocarea privată a aplicației (izolată) și afișează un avertisment persistent în aplicație că aceste date nu sunt criptate separat pe acel dispozitiv
- Fișierele media sunt stocate în spațiul de stocare intern privat al Aplicației, inaccesibil altor aplicații
- Backup-ul în cloud Android este **dezactivat** (`android:allowBackup="false"`) pentru a preveni expunerea neintenționată a datelor
- Backup-urile Google Drive sunt transmise prin HTTPS/TLS și stocate exclusiv în propriul dumneavoastră cont. Puteți proteja opțional un backup cu o parolă-frază, care criptează arhiva (AES-256-GCM) pe dispozitivul dumneavoastră înainte de încărcare, astfel încât să nu poată fi citită fără parola-frază
- Feedback-ul opțional în aplicație pe care îl trimiteți este transmis prin HTTPS/TLS către o funcție Supabase Edge Function (regiunea UE)

Pentru Aplicație, nu operăm servere care să stocheze datele dumneavoastră de detecție salvate. Singura excepție este funcția opțională Grup Live (Secțiunea 3.5), care păstrează în Firebase de la Google date de locație de grup tranzitorii, cu auto-expirare, cât timp vă aflați într-un grup.

**Datele Website-ului:** Emailurile listei de așteptare sunt stocate într-o bază de date Supabase Postgres găzduită în UE (Irlanda). Conexiunile sunt criptate (TLS). Accesul este restricționat doar la scopuri administrative. Emailul de ieșire este trimis prin Resend (UE, Irlanda) prin TLS. Vezi Secțiunea 4.

## 8. Reținerea datelor

**Datele Aplicației:** Datele locale sunt reținute până când alegeți să le ștergeți. Puteți șterge elemente individuale în cadrul Aplicației, puteți șterge toate datele prin Setările Android sau puteți dezinstala Aplicația. Backup-urile Google Drive persistă până când le ștergeți manual din contul dumneavoastră.

**Datele Website-ului:** Adresele de email din lista de așteptare sunt reținute până când vă dezabonați sau 12 luni după lansarea publică, oricare survine prima. După aceea, adresele sunt șterse din baza de date Supabase.

## 9. Partajarea și dezvăluirea datelor

Nu vindem, închiriem sau tranzacționăm datele dumneavoastră cu caracter personal. Puteți alege să partajați datele Aplicației prin exporturi (GPX, KML, CSV, JSON), carduri de partajare a sesiunii, backup Google Drive sau partajarea locației în timp real într-un grup Radar (Secțiunea 3.5) — toate inițiate de utilizator. Dacă trimiteți feedback în aplicație, acesta este procesat în numele nostru de către Supabase (vezi Secțiunea 3.3). Datele listei de așteptare ale Website-ului sunt procesate doar de procesatorii noștri numiți (Supabase, Resend) pentru scopurile descrise în Secțiunea 4.

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
- **ACCESS_COARSE_LOCATION** — locație aproximativă ca alternativă, atunci când GPS-ul precis nu este disponibil
- **FOREGROUND_SERVICE / FOREGROUND_SERVICE_LOCATION** — menținerea în funcțiune a serviciului de monitorizare GPS ca serviciu în prim-plan, astfel încât monitorizarea să continue cu ecranul oprit în timpul sesiunilor active
- **CAMERA** — capturarea fotografiilor pentru înregistrarea descoperirilor
- **RECORD_AUDIO** — înregistrarea notelor audio pentru descoperiri
- **READ/WRITE_CALENDAR** — scrie mementouri pentru expirarea permiselor în calendarul local al dispozitivului. Dacă aveți activată sincronizarea cu calendarul în cloud în Android (de exemplu, sincronizare Google Calendar), aceste mementouri vor fi sincronizate cu contul dumneavoastră împreună cu restul calendarului — sincronizarea este controlată de setările Android, nu de Aplicație
- **INTERNET** — vreme, geocodare, maree, hărți, abonamente, feedback opțional
- **ACCESS_NETWORK_STATE** — detectarea stării offline înainte de a efectua apeluri de rețea
- **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS** — împiedicarea sistemului să oprească serviciul de monitorizare GPS în timpul sesiunilor lungi
- **POST_NOTIFICATIONS** — notificare pentru monitorizarea GPS
- **VIBRATE** — alerte pentru limitele gardei de perimetru

Puteți revoca orice permisiune în orice moment prin Setările Android.

## 13. Cookie-uri și monitorizare

**Aplicația** nu utilizează module cookie, semnalizatoare web, etichete pixel, amprentarea dispozitivului sau orice alte tehnologii de monitorizare. **Website-ul** nu setează cookie-uri de primă parte; vezi Secțiunea 4.3 pentru dezvăluirea completă a cookie-urilor Website-ului.

## 14. Transferuri internaționale de date

**Datele Aplicației:** Deoarece toate datele de detecție sunt stocate local pe dispozitivul dumneavoastră, nu au loc transferuri internaționale de date sub controlul nostru. Apelurile API către terți (Secțiunea 3.2), backup-ul opțional Google Drive, diagnosticele opționale Firebase, partajarea opțională a locației în Grup Live (Secțiunea 3.5, prin Firebase de la Google) și feedback-ul opțional pot fi procesate în jurisdicțiile în care funcționează acele servicii.

**Datele Website-ului:** Emailurile listei de așteptare sunt stocate în UE (Irlanda) de către Supabase și procesate de Resend (UE, Irlanda). Dacă accesați Website-ul din afara UE, adresa dumneavoastră de email este transferată în UE pentru procesare.

## 15. Notificarea încălcării securității datelor

**Aplicația:** Datele dumneavoastră de detecție salvate sunt stocate pe dispozitivul dumneavoastră, nu pe servere pe care le operăm, așa că nu sunt expuse de o încălcare a infrastructurii noastre. Singura excepție este funcția opțională Grup Live (Secțiunea 3.5): cât timp vă aflați într-un grup, locația dumneavoastră în timp real este păstrată tranzitoriu în Firebase de la Google, cu accesul restricționat prin reguli de securitate pe partea de server la membrii acelui grup. Dacă luăm la cunoștință o vulnerabilitate în Aplicație, vom lansa o actualizare și vom notifica utilizatorii prin intermediul Aplicației sau al site-ului web. Feedback-ul opțional pe care îl trimiteți este deținut de procesatorul nostru Supabase conform propriilor sale protocoale de notificare a încălcărilor.

**Website-ul:** Procesatorii noștri (Supabase, Resend) mențin propriile protocoale de notificare a încălcărilor. În cazul puțin probabil al unei încălcări care afectează adresa dumneavoastră de email din lista de așteptare, vă vom notifica pe dumneavoastră și autoritatea de supraveghere relevantă (ANSPDCP) în termen de 72 de ore, conform cerințelor GDPR.

## 16. Modificări ale acestei politici

Putem actualiza această Politică de Confidențialitate pentru a reflecta modificările de funcționalitate sau ale legilor aplicabile. Data „Ultimei actualizări" va fi revizuită. Modificările materiale vor fi comunicate prin intermediul Aplicației sau al site-ului web.

## 17. Politicile de confidențialitate ale terților

- [Google (Maps, Drive, Sign-In, geocodificator de platformă)](https://policies.google.com/privacy)
- [Firebase (Analytics și Crashlytics — doar opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [OpenTopoMap](https://opentopomap.org/about)
- [Esri/ArcGIS](https://www.esri.com/en-us/privacy/overview)
- [eHarta / geo-spatial.org](https://www.geo-spatial.org)
- [Cloudflare](https://www.cloudflare.com/privacypolicy/) (proxy pentru plăcile hărții istorice)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Găzduire Website + analize)
- [Supabase](https://supabase.com/privacy) (Baza de date Website + feedback în aplicație)
- [Resend](https://resend.com/legal/privacy-policy) (Email Website)

## 18. Contactați-ne

**Coc Lorand-Adrian P.F.A.** (activând sub denumirea Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

Pentru întrebări legate de GDPR, puteți contacta și ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) la [dataprotection.ro](https://www.dataprotection.ro).

---

Această Politică de Confidențialitate este în vigoare din 12 mai 2026 și se aplică tuturor versiunilor SweepTrack Pro.
