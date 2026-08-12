# Politica de Confidentialitate

**SweepTrack RO** — Aplicatie GPS de Urmarire pentru Detectie Metalica
**Data Intrarii in Vigoare:** 7 Aprilie 2026
**Ultima Actualizare:** 26 Iulie 2026
**Operat de:** Coc Lorand-Adrian P.F.A., sub denumirea comerciala "Loriba" ("noi", "al nostru")
**CUI:** 41299288
**Reg.:** F24/646/2019
**Website:** sweeptrack.pro

---

## 1. Introducere

Aceasta Politica de Confidentialitate explica modul in care SweepTrack RO ("Aplicatia") colecteaza, utilizeaza, stocheaza si protejeaza informatiile dumneavoastra. Suntem angajati sa va protejam confidentialitatea si sa asiguram transparenta cu privire la practicile noastre de date.

SweepTrack RO este proiectat cu o **arhitectura bazata pe confidentialitate**: datele de sesiuni, descoperiri, seif si media sunt stocate in principal pe dispozitivul dumneavoastra, nu operam servere backend care sa detina aceste date de baza stocate si nu vindem si nu partajam datele cu terti in scopuri de marketing. Functii optionale — telemetrie de diagnostic (dezactivata implicit; alegeti la prima lansare), backup Google Drive, functia live de grup **Radar** (care partajeaza locatia dumneavoastra live cu ceilalti membri ai unui grup in care alegeti sa intrati), trimitere de feedback in aplicatie si memento-uri in calendar pentru expirarea permiselor — transmit date limitate catre servicii terte doar prin actiunea dumneavoastra explicita. Fiecare este detaliata in §3.3 si §4.

---

## 2. Operator de Date

In sensul Regulamentului General privind Protectia Datelor (GDPR) al UE si al legislatiei romanesti de protectie a datelor (Legea 190/2018), operatorul de date este:

**Coc Lorand-Adrian P.F.A.** (sub denumirea comerciala Loriba)
CUI: 41299288 · Reg. F24/646/2019
Sediul social: Com. Băiuț nr. 90, Băiuț 437025, Maramureș, Romania
Email: support@sweeptrack.pro
Website: https://sweeptrack.pro

---

## 3. Datele pe Care le Colectam

### 3.1 Date Stocate Local pe Dispozitivul Dumneavoastra

Urmatoarele date sunt create de dumneavoastra si stocate **exclusiv pe dispozitivul dumneavoastra**. Nu avem niciodata acces la aceste date decat daca le distribuiti in mod explicit.

**Date de Localizare si Sesiuni:**
- Coordonate GPS (latitudine, longitudine) in timpul sesiunilor active de urmarire
- Citiri de viteza, altitudine, directie si precizie de la senzorii dispozitivului
- Metadate ale sesiunilor: nume, data, ora de inceput/sfarsit, durata, distanta, etichete
- Coordonate ale traseului cu marcaje temporale
- Nume de locatii (obtinute prin geocodare inversa)

**Inregistrari de Descoperiri:**
- Tip descoperire (Comoara, Aur, Moneda, Relicva, Bijuterie, Gunoi)
- Locatia descoperirii (coordonate GPS la momentul inregistrarii)
- Metadate optionale: nume, note, adancime, valoare estimata, greutate
- Atasamente media: fotografii (JPG/PNG), inregistrari video (MP4), inregistrari audio (WAV/MP3)

**Repere / Marcaje pe Harta:**
- Repere pe care le creati prin apasare lunga pe harta (de ex. pentru a marca un reper de pe o harta veche pe care doriti sa il revizitati)
- Locatia reperului (coordonate GPS ale marcajului)
- Metadate optionale: nume, note, categorie si acuratetea GPS inregistrata cand a fost plasat marcajul

**Date din Seiful de Permisiuni:**
- Nume si locatii de situri
- Nume si informatii de contact ale proprietarilor (telefon, email)
- Numere de permise, date de emitere, date de expirare
- Coordonate ale granitelor sitului (poligon)
- Semnaturi digitale (format SVG)
- Etichete si note personalizate

**Date de Presetari Detectoare:**
- Modelul si producatorul detectorului selectat
- Modelul de detector ales si notitele personale atasate acestuia

**Preferinte ale Aplicatiei:**
- Tema de afisare, unitati de masura, preferinta de limba
- Setari harta, culoarea si grosimea traseului
- Progres provocari/realizari

**Instantanee Meteo:**
- Date de temperatura, umiditate, vant, precipitatii capturate la inceputul/sfarsitul sesiunii
- Asociate cu sesiuni specifice, stocate local

### 3.2 Date Procesate Temporar (Nestocate)

Urmatoarele date sunt trimise catre API-uri terte pentru functionalitate in timp real si **nu sunt stocate de noi sau de aceste servicii dincolo de cererea imediata**:

- **Coordonate GPS aproximative** trimise catre Open-Meteo pentru prognoze meteo si date de altitudine
- **Interogari de cautare a locatiilor** trimise catre Open-Meteo Geocoding pentru cautarea numelor de locuri
- **Sincronizarea registrului de zone protejate (nu se trimit date de utilizator):** stratul de zone protejate al Aplicatiei (RAN / Natura 2000) descarca aproximativ lunar geometria publica a registrului de situri arheologice de la serviciul ArcGIS public al Institutului National al Patrimoniului, la `eism.geo-spatial.ro`. Este o sincronizare exclusiv de descarcare a unor date publice — cererea nu contine locatie, identificatori sau alte date de utilizator.

Geocodarea inversa (transformarea coordonatelor intr-un nume de locatie) foloseste serviciul Geocoder integrat in sistemul Android al dispozitivului dumneavoastra, nu un API tert de geocodare.

### 3.3 Date Procesate de Servicii Terte

**Google Maps SDK:**
- Locatia dispozitivului dumneavoastra este procesata de Google Maps pentru afisarea hartii
- Supus [Politicii de Confidentialitate Google](https://policies.google.com/privacy)

**Google Sign-In si Google Drive (Optional):**
- Daca alegeti sa activati backup-ul Google Drive, adresa de email a contului dumneavoastra Google este stocata local pentru a identifica contul autentificat
- Datele de backup sunt incarcate in **propriul dumneavoastra cont Google Drive** intr-un folder numit "SweepTrack Backups"
- Nu avem acces la Google Drive-ul sau contul dumneavoastra Google
- Supus [Politicii de Confidentialitate Google](https://policies.google.com/privacy)

**RevenueCat (Gestionarea Abonamentelor):**
- Pentru verificarea abonamentului, Aplicatia trimite catre RevenueCat un identificator stabil al dispozitivului: ID-ul Android SSAID (`Settings.Secure.ANDROID_ID`), transmis sub forma `device:<identificator>`. Acest identificator este specific perechii dispozitiv + aplicatie, se reseteaza la revenirea la setarile din fabrica si **nu** este ID-ul de publicitate Android.
- Este necesar pentru ca abonamentul, perioada de proba si accesul acordat sa ramana legate de acelasi dispozitiv dupa reinstalarea aplicatiei sau stergerea datelor — altfel achizitia dumneavoastra s-ar pierde.
- Nicio informatie personala (nume, email, locatie) nu este partajata cu RevenueCat
- Supus [Politicii de Confidentialitate RevenueCat](https://www.revenuecat.com/privacy)

**Contor de utilizare pentru nivelul gratuit (Firebase):**
- Pentru aplicarea corecta a limitei lunare de sesiuni din nivelul gratuit, Aplicatia pastreaza un contor lunar al sesiunilor pornite — un singur numar intreg pe luna — legat de identificatorul de dispozitiv descris mai sus, intr-o baza de date Firebase operata de noi
- Contorul nu contine locatie, trasee, descoperiri, durate sau alt continut si nu este folosit pentru profilare, analiza sau marketing — exclusiv pentru ca limita nivelului gratuit sa nu poata fi ocolita prin stergerea datelor aplicatiei
- Utilizatorii Premium si cei cu acces nelimitat nu trimit acest contor
- Supus [Politicii de Confidentialitate Google](https://policies.google.com/privacy) (Firebase)

**Firebase Analytics + Crashlytics (Telemetrie de Diagnostic Optionala — opt-in, dezactivata implicit):**
- Aplicatia integreaza Google Firebase Analytics si Firebase Crashlytics pentru raportare optionala, anonima, de diagnostic si erori. **Ambele sunt dezactivate implicit.** Nicio data de diagnostic, eroare sau utilizare nu este colectata, transmisa sau stocata decat daca optati explicit.
- Optati prin ecranul de consimtamant pentru diagnostic din aplicatie sau prin Setari → Diagnostic, si va puteti retrage consimtamantul oricand din acelasi ecran (ceea ce opreste colectarea ulterioara).
- Cand este activata, Aplicatia trimite evenimente anonime de utilizare (de ex. ce ecrane/functii sunt folosite) si rapoarte de eroare. Inainte de transmitere, datele de eroare sunt curatate pentru a elimina coordonatele GPS precise, adresele de email si identificatori similari.
- Aceste date sunt procesate de Google Firebase. Evenimentele Firebase Analytics sunt pastrate de Google pana la 14 luni; inregistrarile de erori Firebase Crashlytics de obicei 90 de zile. Supus [Politicii de Confidentialitate Google](https://policies.google.com/privacy).

**Partajare Live in Grup "Radar" (Optional — opt-in prin crearea sau intrarea intr-un grup):**
- SweepTrack RO include o functie optionala de grup live **Radar** care permite unui grup de detectoristi sa se vada reciproc pe harta in timp real. Este **complet dezactivata pana cand creati sau intrati activ intr-un grup** folosind un cod scurt de grup. Daca nu creati si nu intrati niciodata intr-un grup, **niciuna** dintre datele de mai jos nu este transmisa vreodata.
- Cat timp sunteti activ intr-un grup, Aplicatia partajeaza urmatoarele **cu ceilalti membri ai aceluiasi grup**, in timp real, printr-o baza de date **Google Firebase Realtime Database pe care o operam**:
  - **Locatia dumneavoastra GPS live precisa** (latitudine, longitudine, acuratete si directie) cat timp sunteti in grup
  - Un **nume afisat** pe care il introduceti pentru grup (il alegeti dumneavoastra — poate fi un pseudonim; pana la 24 de caractere)
  - **Nivelul aproximativ al bateriei** dispozitivului (procent), starea dumneavoastra online/stationar/pauza si un **semnal optional SOS/ajutor** pe care il puteti activa
  - O culoare/un simbol de avatar pe care le alegeti
  - Orice **repere partajate si un punct de "baza" partajat** (de ex. unde ati parcat) pe care alegeti sa le plasati — fiecare purtand locatia sa GPS si numele dumneavoastra afisat
- Aceste date sunt legate de un **identificator anonim, generat aleatoriu** (Firebase Anonymous Authentication). Nu il legam de numele real, adresa de email sau vreun cont si nu il folosim pentru profilare, analiza sau marketing.
- **Cine le poate vedea:** doar membrii care detin acelasi cod de grup; citirile sunt limitate la lista de membri a grupului.
- **Retentia este efemera:** locatia dumneavoastra live inceteaza sa fie partajata in momentul in care parasiti grupul sau intrati offline, intrarea dumneavoastra de membru este apoi eliminata, iar intregul continut al unui grup (membri, repere, baza) este sters odata ce ultimul membru a plecat.
- **Gratuit pentru a intra intr-un grup, premium pentru a crea unul** — si optional in orice caz.
- Aceste date sunt procesate de Google Firebase (Realtime Database + Anonymous Authentication). Supus [Politicii de Confidentialitate Google](https://policies.google.com/privacy).

**Google Calendar Provider (Optional):**
- Cand setati o data de expirare a permisului intr-o intrare din Seiful de Permisiuni, Aplicatia scrie un eveniment de memento in calendarul principal al dispozitivului prin Calendar Provider-ul Android
- Daca contul de calendar se sincronizeaza in cloud (de ex., un cont Gmail sincronizat cu Google Calendar), memento-ul se sincronizeaza in acel cloud
- Titlul memento-ului include numele sitului introdus pentru intrarea din seif
- Puteti dezactiva aceasta functie nepermitand WRITE_CALENDAR, alegand un cont de calendar doar local sau stergand memento-ul din calendar

**Supabase (Doar Trimitere Feedback):**
- Cand trimiteti feedback prin Setari → Feedback, textul mesajului si campul optional de contact pe care il furnizati sunt trimise catre o functie edge Supabase pe care o operam
- Declansat doar de dumneavoastra apasand activ Trimite — niciodata in fundal
- Mesajul este livrat in inbox-ul nostru privat si nu este facut public
- Functia edge poate stoca un hash cu salt al adresei IP si user-agent-ului pentru prevenirea abuzului/rate limiting pe termen scurt; nu este folosit pentru marketing sau profilare
- Supus [Politicii de Confidentialitate Supabase](https://supabase.com/privacy)

### 3.4 Date pe Care NU le Colectam

Dorim sa fim expliciti cu privire la ceea ce **nu** colectam niciodata:
- **Nu** colectam numele, adresa de email sau numarul de telefon — cu exceptia: (a) email-ului Google asociat backup-ului Drive daca il activati voluntar, (b) campului optional de contact pe care il puteti furniza la trimiterea feedback-ului in aplicatie si (c) **numelui afisat pe care alegeti sa il introduceti cand creati sau intrati intr-un grup live Radar**, care este partajat cu ceilalti membri ai acelui grup (vezi §3.3)
- **Nu** utilizam cadre publicitare, identificatori publicitari, AdMob, echivalente IDFA sau orice urmarire condusa de monetizare
- **Nu** cream profiluri de utilizator, amprente comportamentale sau semnaturi de urmarire intre aplicatii
- **Nu** partajam, vindem, inchiriem sau comercializam datele cu terti in scopuri de marketing
- **Nu** operam servere care stocheaza datele de baza salvate ale Aplicatiei (sesiunile inregistrate, datele de descoperiri, fotografii, audio, video, intrari din seif, scrisori de permisiuni sau presetari detector). Doua fluxuri opt-in sunt operate pe server: (a) feedback-ul optional din aplicatie, care primeste doar mesajul/datele de contact/metadatele de dispozitiv pe care alegeti sa le trimiteti; si (b) functia optionala live de grup **Radar**, care transmite locatia dumneavoastra live si numele afisat ales catre o baza de date Firebase Realtime Database **doar cat timp sunteti activ intr-un grup**, o partajeaza exclusiv cu membrii acelui grup si o sterge cand grupul se goleste (vezi §3.3)
- Chiar si cand telemetria de diagnostic este activata (§3.3), evenimentele trimise contin doar numele actiunilor din aplicatie ("session_started", "feature_gated" etc.) — fara date de localizare, continut al descoperirilor, continut al seifului sau identificatori personali
- Telemetria de diagnostic este **dezactivata implicit**; alegeti la prima lansare si puteti retrage oricand din Setari → Diagnostic

---

## 4. Baza Legala pentru Prelucrare (GDPR)

In baza GDPR, prelucram datele pe urmatoarele baze legale:

| Date | Baza Legala | Justificare |
|------|-------------|-------------|
| Date GPS/sesiuni | Consimtamant (Art. 6(1)(a)) | Initiati activ sesiunile de urmarire |
| Inregistrari descoperiri si media | Consimtamant (Art. 6(1)(a)) | Creati voluntar intrarile de descoperiri |
| Intrari in seif | Consimtamant (Art. 6(1)(a)) | Introduceti voluntar datele de permisiuni |
| Apeluri API (meteo, geocodare) | Interes legitim (Art. 6(1)(f)) | Necesare pentru functionalitatea de baza a Aplicatiei |
| Backup Google Drive | Consimtamant (Art. 6(1)(a)) | Activati si autentificati explicit |
| Verificare abonament | Executarea contractului (Art. 6(1)(b)) | Necesar pentru furnizarea functiilor platite |
| Telemetrie de diagnostic (Firebase Analytics + Crashlytics) | Consimtamant (Art. 6(1)(a)) | Trimisa doar daca acceptati prin ecranul de consimtamant sau Setari → Diagnostic |
| Memento-uri calendar pentru expirari de permise | Consimtamant (Art. 6(1)(a)) | Acordati WRITE_CALENDAR si creati o intrare in seif cu data de expirare |
| Trimitere feedback (Supabase) | Consimtamant (Art. 6(1)(a)) | Trimiteti activ feedback prin Setari → Feedback |
| Partajare live in grup Radar (Firebase RTDB) | Consimtamant (Art. 6(1)(a)) | Creati sau intrati activ intr-un grup; partajarea se opreste cand parasiti grupul |

Puteti retrage consimtamantul in orice moment prin oprirea activitatii relevante (de ex., oprirea unei sesiuni, stergerea intrarilor din seif, dezactivarea backup-ului Drive) sau prin dezinstalarea Aplicatiei.

---

## 5. Cum Utilizam Datele Dumneavoastra

Toata prelucrarea datelor are loc **local pe dispozitivul dumneavoastra**. Utilizam datele dumneavoastra exclusiv pentru:

- Afisarea traseului urmarit pe harta in timp real
- Calcularea statisticilor sesiunii (distanta, viteza, altitudine, durata)
- Stocarea si afisarea jurnalului de descoperiri cu media
- Gestionarea intrarilor din seiful de permisiuni si memento-urile de expirare
- Aplicarea setarilor presetarilor de detector
- Afisarea conditiilor meteo relevante pentru locatia dumneavoastra
- Afisarea punctelor de interes istorice din apropiere
- Generarea exporturilor de sesiuni (GPX, KML, CSV, JSON) la cererea dumneavoastra
- Crearea cardurilor de sesiune si codurilor QR partajabile la cererea dumneavoastra
- Crearea backup-ului datelor in Google Drive cand activati explicit aceasta functie
- Verificarea starii abonamentului pentru deblocarea functiilor premium
- Trimiterea evenimentelor anonime de diagnostic si rapoarte de erori catre Firebase daca acceptati prin ecranul de consimtamant sau Setari → Diagnostic (dezactivat implicit)
- Livrarea feedback-ului trimis de dumneavoastra catre inbox-ul nostru privat prin Supabase, doar cand apasati activ Trimite

---

## 6. Stocarea si Securitatea Datelor

### 6.1 Stocare Locala
- Datele de sesiuni, descoperiri, coordonate si presetari de detectoare sunt stocate intr-o baza de date Room (SQLite) aflata in sandbox-ul privat al Aplicatiei. Android izoleaza acest director la nivelul sistemului de operare, deci fisierul este inaccesibil altor aplicatii pe un dispozitiv nerootat. Fisierul bazei de date in sine nu este criptat separat in repaus.
- Datele din Seiful de Permisiuni (nume si contacte de proprietari, numere de permise, semnaturi si note despre situri) sunt stocate in EncryptedSharedPreferences protejate de Android Keystore cand dispozitivul suporta acest lucru. Daca Android Keystore sau EncryptedSharedPreferences nu este disponibil, Aplicatia poate reveni la app-private plaintext SharedPreferences si afiseaza un avertisment persistent in aplicatie ca datele din seif nu sunt criptate pe acel dispozitiv.
- Preferinte sensibile precum email-ul contului Google Drive folosit pentru backup sunt stocate de asemenea prin EncryptedSharedPreferences cu un alias de cheie dedicat.
- Backup-urile in Drive pot fi criptate optional cu o parola inainte de incarcare (Setari → Backup Drive → Cripteaza backup-urile) — vezi §6.2.
- Fisierele media (fotografii, audio, video) sunt stocate in stocarea interna privata a Aplicatiei, inaccesibila altor aplicatii fara root. Acestea nu sunt criptate separat in repaus.
- Backup-ul Android in cloud a fost **dezactivat** (`android:allowBackup="false"`), iar regulile Android 12+ de extragere a datelor blocheaza atat caile de cloud-backup, cat si de transfer intre dispozitive, pentru a preveni expunerea neintentionata a datelor.

### 6.2 Backup Google Drive (Optional)
- Fisierele de backup sunt arhive JSON continand sesiunile, descoperirile, reperele/marcajele pe harta, presetarile de detector, preferintele si metadatele dumneavoastra
- Incarcate in Google Drive-ul personal prin API-urile criptate Google (HTTPS/TLS)
- Nu retinem copii — backup-urile exista exclusiv in Google Drive-ul dumneavoastra
- Puteti sterge backup-urile in orice moment din Google Drive

### 6.3 Fara Stocare pe Server a Datelor de Baza ale Aplicatiei
Cu exceptia functiei Supabase edge folosita exclusiv pentru receptionarea mesajelor de feedback in-app pe care le trimiteti activ (vezi Sectiunea 3.3) si a bazei de date Firebase Realtime care sustine partajarea live optionala in grup Radar cat timp sunteti intr-un grup (vezi Sectiunea 3.3), nu operam servere, baze de date sau infrastructura cloud care stocheaza datele de baza ale Aplicatiei, precum sesiuni, trasee GPS, descoperiri, repere/marcaje pe harta, media, intrari din seif, scrisori de permisiune sau presetari detector. Datele de baza parasesc dispozitivul doar cand:
- Cand apasati activ Trimite in formularul de Feedback in-app (doar mesajul + campul optional de contact)
- Cand initiati explicit un backup Google Drive
- Cand exportati sau distribuiti explicit un fisier de sesiune
- Cand Aplicatia efectueaza apeluri API catre servicii terte (meteo, cautare de locatii) folosind doar coordonate aproximative sau textul de cautare pe care il introduceti

---

## 7. Retentia Datelor

### 7.1 Date Locale
Datele sunt retinute pe dispozitivul dumneavoastra pe termen nedeterminat pana cand alegeti sa le stergeti. Puteti:
- Sterge sesiuni, descoperiri sau intrari din seif individuale din cadrul Aplicatiei
- Sterge toate datele Aplicatiei prin Setari Android > Aplicatii > SweepTrack RO > Sterge Date
- Dezinstala Aplicatia pentru a elimina permanent toate datele locale

### 7.2 Backup-uri Google Drive
Backup-urile persista in Google Drive-ul dumneavoastra pana cand le stergeti manual. Nu avem capacitatea de a accesa sau sterge backup-urile din Drive.

### 7.3 Retentia Datelor de catre Terti
- Cererile API catre Open-Meteo si catre registrul ArcGIS public al Institutului National al Patrimoniului (`eism.geo-spatial.ro`) sunt fara stare si nu sunt inregistrate de noi
- Aceste servicii au propriile politici de retentie; va recomandam sa le consultati politicile de confidentialitate
- RevenueCat retine inregistrari anonime de abonament conform politicii lor de confidentialitate
- Daca acceptati diagnosticul, evenimentele Firebase Analytics sunt retinute de Google conform politicilor sale (pana la 14 luni pentru evenimente Analytics implicite); Firebase Crashlytics retine inregistrari de erori conform politicilor Google (in mod tipic 90 de zile pentru datele de eroare implicite)
- Feedback-ul trimis prin formularul din aplicatie este retinut de noi in inbox-ul nostru privat pana cand mesajul este abordat; puteti solicita stergerea la support@sweeptrack.pro

---

## 8. Partajarea si Dezvaluirea Datelor

### 8.1 Nu Partajam Datele Dumneavoastra
Nu partajam, vindem, inchiriem, licientiam sau dezvaluim datele dumneavoastra personale niciunui tert in niciun scop.

### 8.2 Partajare Initiata de Utilizator
Puteti alege sa distribuiti datele dumneavoastra prin:
- Exportarea sesiunilor ca fisiere GPX, KML, CSV sau JSON prin meniul de partajare al sistemului
- Generarea codurilor QR continand coordonate de traseu
- Crearea cardurilor sumare de sesiune partajabile
- Crearea backup-ului in propriul cont Google Drive

In toate cazurile, partajarea este initiata de dumneavoastra si controlati cine primeste datele.

### 8.3 Cerinte Legale
Putem fi obligati sa dezvaluim informatii daca suntem constransi prin lege, ordin judecatoresc sau cerere guvernamentala. Cu toate acestea, deoarece nu detinem datele dumneavoastra (sunt stocate local pe dispozitiv), nu avem nimic de dezvaluit in practica.

---

## 9. Drepturile Dumneavoastra (GDPR si International)

### 9.1 Drepturi GDPR (Rezidenti UE/SEE)
In baza GDPR, aveti dreptul la:

- **Acces** — Solicitati o copie a datelor (datele sunt deja pe deplin accesibile pe dispozitiv)
- **Rectificare** — Corectati datele inexacte (puteti edita toate inregistrarile direct in Aplicatie)
- **Stergere ("Dreptul de a fi Uitat")** — Stergeti datele (disponibil prin stergere in aplicatie sau dezinstalare)
- **Restrictionarea Prelucrarii** — Limitati modul de utilizare a datelor (controlati toata prelucrarea prin pornirea/oprirea functiilor)
- **Portabilitatea Datelor** — Primiti datele intr-un format lizibil automat (disponibil prin export GPX, KML, CSV, JSON)
- **Opozitie** — Va opuneti prelucrarii datelor (puteti opri orice functie in orice moment)
- **Retragerea Consimtamantului** — Retrageti consimtamantul in orice moment fara a afecta legalitatea prelucrarii anterioare

Deoarece toate datele sunt stocate local pe dispozitivul dumneavoastra si nu avem acces la ele, puteti exercita toate aceste drepturi direct fara a ne contacta.

### 9.2 Regatul Unit (UK GDPR)
Daca sunteti rezident al Regatului Unit, drepturile dumneavoastra conform UK GDPR si Data Protection Act 2018 sunt echivalente cu cele descrise in Sectiunea 9.1. Puteti depune o plangere la Information Commissioner's Office (ICO) la https://ico.org.uk.

### 9.3 Australia (Privacy Act 1988)
Daca sunteti rezident al Australiei, aveti drepturi conform Australian Privacy Principles (APPs) din Privacy Act 1988, inclusiv dreptul de acces si corectare. Puteti depune o plangere la Office of the Australian Information Commissioner (OAIC) la https://www.oaic.gov.au.

### 9.4 Canada (PIPEDA)
Daca sunteti rezident al Canadei, aveti drepturi conform Personal Information Protection and Electronic Documents Act (PIPEDA) si legislatiei provinciale aplicabile, inclusiv dreptul de acces, corectare si retragere a consimtamantului. Puteti depune o plangere la Office of the Privacy Commissioner of Canada la https://www.priv.gc.ca.

### 9.5 Rezidenti California (CCPA/CPRA)
Daca sunteti rezident in California, aveti dreptul sa:
- Stiti ce informatii personale sunt colectate (descrise in Sectiunea 3)
- Solicitati stergerea informatiilor personale
- Refuzati vanzarea sau partajarea informatiilor personale — **nu vindem si nu partajam nicio informatie personala**
- Limitati utilizarea informatiilor personale sensibile
- Non-discriminare pentru exercitarea drepturilor

Nu utilizam informatiile dumneavoastra pentru publicitate comportamentala contextuala.

### 9.6 Rezidenti Brazilia (LGPD)
Daca sunteti rezident in Brazilia, aveti drepturi echivalente in baza Lei Geral de Protecao de Dados (LGPD), inclusiv acces, corectare, stergere, portabilitate, anonimizare si informatii despre partajare. Puteti contacta Autoridade Nacional de Protecao de Dados (ANPD) la https://www.gov.br/anpd.

### 9.7 Noua Zeelanda (Privacy Act 2020)
Daca sunteti rezident al Noii Zeelande, aveti drepturi conform Privacy Act 2020, inclusiv dreptul de acces si corectare. Puteti contacta Office of the Privacy Commissioner la https://www.privacy.org.nz.

### 9.8 Alte Jurisdictii
Indiferent de locatia dumneavoastra, aveti control deplin asupra datelor prin instrumentele integrate in Aplicatie. Daca jurisdictia dumneavoastra acorda drepturi suplimentare de confidentialitate care nu pot fi renuntate prin contract, le vom respecta in masura aplicabila.
Deoarece toate datele sunt stocate local pe dispozitivul dumneavoastra, puteti exercita practic toate drepturile de confidentialitate fara a ne contacta.

---

## 10. Confidentialitatea Copiilor

Aplicatia nu este destinata copiilor sub 18 ani. Nu colectam cu buna stiinta informatii personale de la copii sub 18 ani.

Daca sunteti parinte sau tutore si considerati ca copilul dumneavoastra a utilizat Aplicatia si a furnizat informatii personale, va rugam sa ne contactati la support@sweeptrack.pro. Deoarece toate datele sunt stocate local pe dispozitivul copilului, le puteti sterge prin stergerea datelor Aplicatiei sau dezinstalarea acesteia.

---

## 11. Permisiuni Explicate

Aplicatia solicita urmatoarele permisiuni Android. Fiecare este utilizata exclusiv in scopul declarat:

| Permisiune | Scop | Cand Este Utilizata |
|------------|------|---------------------|
| ACCESS_FINE_LOCATION | GPS de inalta precizie pentru urmarirea traseului | In timpul sesiunilor active si centrarea hartii |
| ACCESS_COARSE_LOCATION | Localizare aproximativa de rezerva | Cand localizarea precisa nu este disponibila |
| CAMERA | Captura foto pentru jurnalizarea descoperirilor | Cand apasati butonul foto in loggerul de descoperiri |
| RECORD_AUDIO | Inregistrare note audio pentru descoperiri | Cand apasati butonul audio in loggerul de descoperiri |
| READ_CALENDAR | Citire calendar pentru memento-uri seif permisiuni | La verificarea memento-urilor existente |
| WRITE_CALENDAR | Adaugare memento-uri de expirare permise | Cand creati o intrare in seif cu data de expirare |
| INTERNET | Meteo, geocodare, harti, abonamente, partajare in grup Radar, sincronizarea registrului de zone protejate | Cand aceste functii sunt utilizate activ |
| ACCESS_NETWORK_STATE | Detectarea starii offline inainte de apeluri de retea | In timpul meteo, geocodare, harti, feedback, abonamente si backup |
| FOREGROUND_SERVICE | Rularea urmaritorului GPS ca serviciu foreground | In timpul sesiunilor active |
| POST_NOTIFICATIONS | Notificare de urmarire GPS | In timpul sesiunilor active |
| VIBRATE | Alerte de granita gard perimetral | Cand gardul este activ si va apropiati de granita |
| FOREGROUND_SERVICE_LOCATION | Mentinerea GPS-ului activ in timpul urmaririi | In timpul sesiunilor active |
| REQUEST_IGNORE_BATTERY_OPTIMIZATIONS | Prevenirea opririi GPS-ului de catre sistem | Solicitat o data pentru urmarire fiabila in fundal |

Puteti revoca orice permisiune in orice moment prin Setarile Android. Revocarea permisiunilor de localizare va dezactiva urmarirea GPS. Revocarea permisiunilor de camera/audio va dezactiva captura media in loggerul de descoperiri.

---

## 12. Cookie-uri si Tehnologii de Urmarire

Aplicatia nu utilizeaza cookie-uri, web beacons, pixel tags, token-uri de stocare locala, amprentare a dispozitivului sau orice alte tehnologii de urmarire.

---

## 13. Transferuri Internationale de Date

Majoritatea datelor sunt stocate local pe dispozitivul dumneavoastra si nu parasesc niciodata dispozitivul sub controlul nostru. Cand utilizati servicii terte (Google Maps, Open-Meteo etc.), cand acceptati telemetria Firebase sau cand trimiteti feedback in aplicatie, datele pot fi procesate in jurisdictiile unde opereaza acele servicii — in principal Statele Unite si Uniunea Europeana. Aceste transferuri sunt guvernate de politica de confidentialitate a fiecarui serviciu si de mecanismele aplicabile de protectie a datelor, inclusiv Clauze Contractuale Standard acolo unde sunt necesare pentru transferuri in afara SEE.

---

## 14. Notificarea Incidentelor de Securitate

Deoarece nu stocam datele de baza ale Aplicatiei pe serverele noastre, o incalcare a sistemelor noastre nu ar expune sesiuni, trasee, descoperiri, media, intrari din seif, scrisori de permisiune sau presetari detector. Daca devenim constienti de o incalcare care afecteaza feedback-ul trimis sau de o vulnerabilitate in Aplicatie care ar putea expune datele locale, vom:
- Emite o actualizare a Aplicatiei pentru a remedia vulnerabilitatea cat mai rapid posibil
- Notifica utilizatorii afectati prin Aplicatie sau website-ul nostru
- Respecta legile aplicabile de notificare a incidentelor (Articolele GDPR 33/34, acolo unde este aplicabil)

---

## 15. Modificari ale Acestei Politici

Putem actualiza aceasta Politica de Confidentialitate pentru a reflecta modificari ale functionalitatii Aplicatiei sau legilor aplicabile. Cand facem acest lucru:
- Data "Ultima Actualizare" de la inceput va fi revizuita
- Modificarile semnificative vor fi comunicate prin Aplicatie sau website-ul nostru
- Utilizarea continua a Aplicatiei dupa modificari constituie acceptare

Va incurajam sa consultati periodic aceasta Politica de Confidentialitate.

---

## 16. Politicile de Confidentialitate ale Serviciilor Terte

Pentru referinta dumneavoastra, politicile de confidentialitate ale serviciilor terte utilizate de Aplicatie:

- Google (Maps, Drive, Sign-In): https://policies.google.com/privacy
- Firebase (Analytics, Crashlytics): https://firebase.google.com/support/privacy
- RevenueCat: https://www.revenuecat.com/privacy
- Supabase: https://supabase.com/privacy
- Open-Meteo: https://open-meteo.com/en/terms (date deschise, fara urmarire)
- OpenStreetMap: https://wiki.osmfoundation.org/wiki/Privacy_Policy
- Institutul National al Patrimoniului (registrul public RAN via eism.geo-spatial.ro): date publice, nu se transmit date de utilizator

---

## 17. Contactati-ne

Daca aveti intrebari despre aceasta Politica de Confidentialitate sau doriti sa va exercitati drepturile de confidentialitate, va rugam sa contactati:

**Coc Lorand-Adrian P.F.A.** (sub denumirea comerciala Loriba)
CUI: 41299288 · Reg. F24/646/2019
Sediul social: Com. Băiuț nr. 90, Băiuț 437025, Maramureș, Romania
Email: support@sweeptrack.pro
Website: https://sweeptrack.pro

Pentru intrebari legate de GDPR, puteti contacta si Autoritatea de Protectie a Datelor din tara dumneavoastra. In Romania, aceasta este ANSPDCP (Autoritatea Nationala de Supraveghere a Prelucrarii Datelor cu Caracter Personal) la https://www.dataprotection.ro.

---

*Aceasta Politica de Confidentialitate este in vigoare de la data mentionata mai sus si se aplica tuturor versiunilor SweepTrack RO.*
