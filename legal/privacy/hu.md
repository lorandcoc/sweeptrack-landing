# Adatvédelmi szabályzat

**SweepTrack Pro** — GPS nyomkövető alkalmazás fémkeresőzéshez

Hatálybalépés napja: 2026. május 12. · Utolsó frissítés: 2026. május 25.

Üzemeltető: Coc Lorand Adrian P.F.A., kereskedelmi neve: "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Weboldal: sweeptrack.pro

---

## 1. Bevezetés

Ez az Adatvédelmi szabályzat elmagyarázza, hogyan gyűjti, használja, tárolja és védi az Ön adatait a SweepTrack Pro („Alkalmazás") és a sweeptrack.pro weboldal („Weboldal"). Elkötelezettek vagyunk az Ön adatainak védelme és az adatkezelési gyakorlatunk átláthatósága mellett.

Az Alkalmazás **adatvédelem-központú architektúrával** készült: minden keresési adatot helyben, az Ön eszközén tárolunk, nem üzemeltetünk háttérszervereket az Alkalmazáshoz, és nem gyűjtjük, továbbítjuk vagy értékesítjük az Ön személyes keresési adatait. A Weboldal külön működik, és saját adatkezelési gyakorlattal rendelkezik, amelyet a 4. szakasz ismertet.

## 2. Adatkezelő

Az EU általános adatvédelmi rendelete (GDPR) és a román adatvédelmi törvény (190/2018. sz. törvény) értelmében az adatkezelő:

**Coc Lorand Adrian P.F.A.** (kereskedelmi neve: Loriba)
CUI: 41299288 · Reg. F24/646/2019
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Gyűjtött adatok (Android-alkalmazás)

### 3.1 Helyben, az Ön eszközén tárolt adatok

Az alábbi adatokat Ön hozza létre és **kizárólag az Ön eszközén** tárolódnak. Soha nem férünk hozzá ezekhez az adatokhoz, hacsak Ön kifejezetten meg nem osztja.

**Helymeghatározási és munkamenet-adatok:**

- GPS-koordináták (szélesség, hosszúság) az aktív nyomkövető munkamenetek során
- Sebesség, magasság, irány és pontossági értékek az eszköz érzékelőiből
- Munkamenet-metaadatok: név, dátum, kezdő-/befejezési idő, időtartam, távolság, címkék
- Útvonal-koordináták időbélyegekkel
- Helynevek (fordított geokódolással szerzett)

**Találati és felfedezési rekordok:**

- Találat típusa (Kincs, Arany, Érme, Relikvia, Ékszer, Hulladék)
- Találat helye (GPS-koordináták a rögzítés időpontjában)
- Opcionális metaadatok: név, jegyzetek, mélység, becsült érték, súly
- Médiamellékletek: fényképek és hangfelvételek

**Engedélykassza adatai:**

- Helyszínek nevei és helyei
- Földtulajdonosok nevei és kapcsolattartási információi
- Engedélyszámok, kiállítási dátumok, lejárati dátumok
- Helyszín-határkoordináták (poligon)
- Digitális aláírások (SVG formátum)
- Egyéni címkék és jegyzetek

**Egyéb helyi adatok:** Detektor-előbeállítási konfigurációk, alkalmazási beállítások (téma, mértékegységek, nyelv, térképbeállítások) és a munkamenetekhez kapcsolódó időjárás-pillanatképek.

### 3.2 Ideiglenesen feldolgozott adatok (nem tárolt)

A következő adatokat valós idejű funkcionalitás céljából harmadik féltől származó API-kra küldjük, és **mi vagy ezek a szolgáltatások nem tároljuk a közvetlen kérésen túl**:

- Hozzávetőleges GPS-koordináták az Open-Meteo-hoz időjárás-előrejelzésekhez és magassági adatokhoz
- Hozzávetőleges GPS-koordináták az OpenStreetMap/Nominatim-hoz címkereséshez
- Hozzávetőleges GPS-koordináták az Overpass API-hoz közeli történelmi POI-k felfedezéséhez
- Hozzávetőleges GPS-koordináták a Wikipedia API-hoz földrajzi cikkkereséshez a közelben
- Árapály állomás azonosítók a NOAA-nak árapály-előrejelzésekhez
- Helyszínkeresési lekérdezések az Open-Meteo Geocodinghoz

### 3.3 Harmadik fél szolgáltatásai által feldolgozott adatok

**Google Maps SDK:** Az eszköz helyét a Google Maps dolgozza fel a térkép megjelenítéséhez. Vonatkozik rá a [Google Adatvédelmi szabályzata](https://policies.google.com/privacy).

**Google Sign-In és Google Drive (opcionális):** Ha engedélyezi a Google Drive biztonsági mentését, a Google-fiókja e-mail-címét helyben tároljuk a hitelesített fiók azonosításához. A biztonsági mentési adatok az Ön saját Google Drive-fiókjába töltődnek fel. Nincs hozzáférésünk az Ön Google Drive-jához.

**RevenueCat (Előfizetés-kezelés):** Egy anonim, véletlenszerűen generált alkalmazás-felhasználó azonosítót használunk az előfizetés ellenőrzésére. Semmilyen személyes információt nem osztunk meg. Vonatkozik rá a [RevenueCat Adatvédelmi szabályzata](https://www.revenuecat.com/privacy).

**Firebase Analytics és Crashlytics (Opcionális — alapértelmezetten letiltva):** Két Google Firebase SDK be van építve az Alkalmazásba, de **mindkettő inaktív marad mindaddig, amíg Ön kifejezetten hozzá nem járul** — vagy az első indításkor megjelenő hozzájárulási kérdés, vagy a **Beállítások → Adatvédelem → Diagnosztika** menüpont segítségével. A hozzájárulás megadásáig egyetlen esemény sem kerül elküldésre, és nem töltődik fel összeomlási jelentés sem. A hozzájárulását bármikor visszavonhatja; a visszavonás a következő eseménytől lép hatályba. A hibakeresési buildek soha nem aktiválják a Crashlytics-et.

Aktiválás esetén:

- **A Firebase Analytics** nyolc aggregált eseménynevet naplóz nem-azonosító paraméterekkel: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Az események tartalma **soha** nem tartalmaz GPS-koordinátákat, címeket, találati neveket, fényképeket, hangfelvételeket, kasszaadatokat vagy más személyazonosításra alkalmas információkat — kizárólag számlálókat, időtartamokat, távolságokat, találati típust (csak a kategóriát) és funkciók azonosítóit.
- **A Firebase Crashlytics** feltölti az összeomlási stack trace-eket az eszköz modelljével, az operációs rendszer verziójával és az alkalmazás verziójával együtt, hogy segítsen a hibák diagnosztizálásában. Mielőtt bármilyen összeomlás vagy nem-fatális hiba továbbításra kerülne a Crashlytics felé, az Alkalmazás **eltávolítja a koordináta-formájú részstringeket a kivételüzenetből** (pl. `lat=`/`lon=` minták, három vagy több tizedesjeggyel rendelkező előjeles tizedes számok), így a helyi változókban tárolt GPS-pozíciók nem szivároghatnak ki a hibajelentésen keresztül. A stack-keretek (osztály, metódus, sor) megőrződnek a csoportosításhoz; a futásidejű értékek nem. Egy folyamatszintű elkapott-kivétel kezelő ugyanezt a tisztítást alkalmazza az SDK által automatikusan elkapott fatális összeomlásokra is.

Mindkét szolgáltatásra a [Google Adatvédelmi szabályzata](https://policies.google.com/privacy) és a [Firebase adatvédelmi és biztonsági tájékoztatója](https://firebase.google.com/support/privacy) vonatkozik.

### 3.4 Adatok, amelyeket az Alkalmazás NEM gyűjt

- **Az Alkalmazás** nem gyűjti az Ön nevét, e-mail-címét, telefonszámát vagy bármely más személyes azonosítóját
- **Az Alkalmazás** nem használ analitikát vagy hibajelentést, hacsak Ön kifejezetten hozzá nem járul (lásd a fenti Firebase szakaszt; alapértelmezetten letiltva, bármikor visszavonható a Beállítások → Adatvédelem → Diagnosztika menüpontban)
- **Az Alkalmazás** nem használ reklámkeretrendszereket vagy reklámazonosítókat
- **Az Alkalmazás** nem követi a használati mintákat, a munkamenet-gyakoriságot vagy a funkciók használatát
- **Az Alkalmazás** nem hoz létre felhasználói profilokat vagy viselkedési ujjlenyomatokat
- **Az Alkalmazás** nem osztja meg, nem értékesíti, nem béreli ki és nem cseréli ki az adatokat harmadik felekkel
- **Az Alkalmazás** nem üzemeltet olyan szervereket, amelyek az Ön keresési adatait fogadják, dolgozzák fel vagy tárolják

A Weboldal adatkezelési gyakorlatát külön a 4. szakasz ismerteti.

## 4. A Weboldal adatkezelési gyakorlata (sweeptrack.pro)

Ez a szakasz a sweeptrack.pro weboldalunkra specifikus adatkezelési gyakorlatot ismerteti. A 3. és 5–18. szakaszban leírt Android-alkalmazás függetlenül működik, és nem osztozik infrastruktúrán a Weboldallal.

### 4.1 E-mail-cím gyűjtése a várólistához

Amikor elküldi az e-mail-címét a Weboldalon található jelentkezési űrlapon keresztül, a következőket gyűjtjük:

- **E-mail-cím**, amelyet megad
- **Időbélyeg** a regisztrációhoz
- **IP-cím** (átmeneti) — sebességkorlátozáshoz használjuk; a kérés időtartamán túl nem tároljuk

**Cél:** Értesíteni Önt, amikor a SweepTrack Pro elindul a Google Play-en, és bevezetés előtti frissítéseket küldeni a termékről és a Founder's Lifetime ajánlatról. Nem fogjuk az Ön e-mail-címét más célokra felhasználni, nem osztjuk meg, és nem adjuk el.

**Jogalap (GDPR):** Hozzájárulás (6. cikk (1) bekezdés a) pont) — megadva az űrlap elküldésekor.

**Tárolás:** Az e-mail-címeket az EU-ban (Írország régió) tárolt Supabase Postgres adatbázisban tároljuk. A Supabase, Inc. adatfeldolgozóként jár el a standard adatfeldolgozási megállapodásuk alapján.

**E-mail kézbesítés:** A kimenő e-maileket a Resend, Inc. (EU-régió, Írország) küldi, amely az e-mail-szolgáltatási adatfeldolgozónkként jár el a standard adatfeldolgozási megállapodásuk alapján.

**Megőrzés:** Amíg le nem iratkozik, vagy 12 hónappal a SweepTrack Pro Google Play-en történő nyilvános bevezetése után, amelyik előbb bekövetkezik.

**Leiratkozás:** Válaszoljon „remove" üzenettel bármely általunk küldött e-mailre, vagy használja az e-mail-kliense által megjelenített List-Unsubscribe linket (a Gmail és az Outlook a Feladó cím mellett jeleníti meg).

**Az Ön jogai:** Hozzáférés, helyesbítés, törlés, korlátozás, hordozhatóság és a hozzájárulás visszavonásának joga. Küldjön e-mailt a [support@sweeptrack.pro](mailto:support@sweeptrack.pro) címre bármely jog gyakorlásához.

### 4.2 Weboldal-elemzés

A Weboldal a következőket használja:

- **Vercel Analytics** — adatvédelmet tiszteletben tartó elemzések, amelyek nem használnak cookie-kat, és nem tárolnak egyedi IP-címeket. Csak az aggregált oldalmegtekintéseket mérik.
- **Vercel Speed Insights** — Core Web Vitals mérés (oldal betöltési ideje, elrendezési eltolódás, interakciós késleltetések) aggregált alapon.

Mindkét eszközt a Vercel Inc. üzemelteti, és a [Vercel Adatvédelmi szabályzata](https://vercel.com/legal/privacy-policy) vonatkozik rájuk. Nem gyűjtenek személyazonosításra alkalmas információkat, és nem hoznak létre felhasználói profilokat.

### 4.3 Cookie-k

A Weboldal nem állít be elsődleges fél cookie-kat követéshez, hirdetéshez vagy profilozáshoz. A Vercel Analytics tervezésénél fogva cookie-mentes. Egy nyelvi preferencia, ha módosítja, a böngészőjének `localStorage`-jában tárolódik (nem cookie), és csak a saját böngészője olvashatja.

### 4.4 Tárhelyszolgáltatás és szerverlogok

A Weboldalt a Vercel Inc. üzemelteti. A Vercel automatikusan naplózhatja a standard kérési metaadatokat (IP-cím, user agent, kérési útvonal, időbélyeg) működési, teljesítmény- és biztonsági célokból. Ezeket a naplókat a Vercel standard szabályzatai szerint őrzik, és nem használjuk őket egyének nyomon követésére vagy profilozására.

### 4.5 Az Ön jogai a Weboldal-adatok tekintetében

Ugyanazok a GDPR, UK GDPR, ausztrál, kanadai, CCPA, LGPD és NZ Privacy Act jogok, amelyeket a 10. szakasz ismertet, egyformán vonatkoznak a Weboldal által gyűjtött adataira. Bármely jog gyakorlásához a várólista e-mail-címével kapcsolatban vegye fel a kapcsolatot a [support@sweeptrack.pro](mailto:support@sweeptrack.pro) címen. 30 napon belül válaszolunk.

## 5. Az adatkezelés jogalapja (GDPR)

- **GPS-/munkamenet-adatok, találati rekordok, kasszabejegyzések:** Hozzájárulás (6. cikk (1) bekezdés a) pont) — Ön aktívan kezdeményezi ezeket a műveleteket
- **API-hívások (időjárás, geokódolás):** Jogos érdek (6. cikk (1) bekezdés f) pont) — szükséges az alapfunkciókhoz
- **Google Drive biztonsági mentés:** Hozzájárulás (6. cikk (1) bekezdés a) pont) — kifejezetten engedélyezi és hitelesíti
- **Előfizetés-ellenőrzés:** Szerződés teljesítése (6. cikk (1) bekezdés b) pont) — szükséges a fizetős funkciók biztosításához
- **Firebase Analytics és Crashlytics (opcionális):** Hozzájárulás (6. cikk (1) bekezdés a) pont) — az első indításkor megjelenő kérdésen vagy a Beállításokon keresztül aktiválva, bármikor visszavonható
- **Várólista e-mail (Weboldal):** Hozzájárulás (6. cikk (1) bekezdés a) pont) — lásd a 4.1. szakaszt

Hozzájárulását bármikor visszavonhatja a vonatkozó tevékenység leállításával, az Alkalmazás eltávolításával vagy a Weboldal e-mailjeinek lemondásával.

## 6. Hogyan használjuk az adatait

Az Alkalmazás összes adatfeldolgozása **az Ön eszközén helyben** történik. Az Alkalmazás adatait kizárólag az Alkalmazás funkcióinak biztosításához használjuk: térkép megjelenítése, munkamenet-nyomkövetés, találatok rögzítése, engedélykezelés, időjárási/árapály adatok, exportok, biztonsági mentés és előfizetés-ellenőrzés.

A Weboldal adatait (az Ön várólista e-mail-címét) csak a 4. szakaszban leírt indítási és bevezetés előtti kommunikációk küldéséhez használjuk.

## 7. Adattárolás és biztonság

**Az Alkalmazás adatai:**

- A munkamenet- és találati adatokat titkosított Room adatbázisban tároljuk az Ön eszközén
- Az érzékeny beállítások az Android EncryptedSharedPreferences-ét használják (AES-256)
- A médiafájlokat az Alkalmazás privát belső tárhelyén tároljuk, más alkalmazások számára hozzáférhetetlenül
- Az Android felhőalapú biztonsági mentése **letiltva** (`android:allowBackup="false"`), hogy megelőzze a nem szándékos adatközzétételt
- A Google Drive biztonsági mentések a Google titkosított API-jait (HTTPS/TLS) használják, és kizárólag az Ön fiókjában léteznek

Az Alkalmazás esetében nem üzemeltetünk olyan szervereket, adatbázisokat vagy felhőinfrastruktúrát, amelyek tárolják az Ön keresési adatait.

**A Weboldal adatai:** A várólista e-mailek az EU-ban (Írország) tárolt Supabase Postgres adatbázisban tárolódnak. A kapcsolatok titkosítottak (TLS). A hozzáférés kizárólag adminisztrációs célokra korlátozott. A kimenő e-mail a Resend-en (EU, Írország) keresztül kerül elküldésre TLS-en keresztül. Lásd a 4. szakaszt.

## 8. Adatmegőrzés

**Az Alkalmazás adatai:** A helyi adatokat addig őrizzük meg, amíg Ön úgy nem dönt, hogy törli őket. Egyes elemeket törölhet az Alkalmazáson belül, törölheti az összes adatot az Android-beállításokon keresztül, vagy eltávolíthatja az Alkalmazást. A Google Drive biztonsági mentések addig maradnak fenn, amíg manuálisan nem törli őket a fiókjából.

**A Weboldal adatai:** A várólista e-mailek addig maradnak meg, amíg le nem iratkozik, vagy 12 hónappal a nyilvános bevezetés után, amelyik előbb bekövetkezik. Ezt követően a címeket törlik a Supabase adatbázisból.

## 9. Adatmegosztás és nyilvánosságra hozatal

Nem osztjuk meg, nem adjuk el, nem béreljük ki és nem hozzuk nyilvánosságra az Ön személyes adatait egyetlen harmadik féllel sem. Választhatja az Alkalmazás adatainak megosztását exportokon keresztül (GPX, KML, CSV, JSON), munkamenet-megosztási kártyákon vagy a Google Drive biztonsági mentésén — mindegyiket a felhasználó kezdeményezi. A Weboldal várólista adatait csak a megnevezett adatfeldolgozóink (Supabase, Resend) dolgozzák fel a 4. szakaszban leírt célokra.

## 10. Az Ön jogai (GDPR és nemzetközi)

### GDPR jogok (EU/EGT-lakosok)

- **Hozzáférés** — az Alkalmazás adatai teljes mértékben hozzáférhetők az eszközén; a Weboldal adatainak esetében küldjön e-mailt a [support@sweeptrack.pro](mailto:support@sweeptrack.pro) címre
- **Helyesbítés** — közvetlenül az Alkalmazásban szerkesztheti az összes bejegyzést, vagy küldjön nekünk e-mailt a Weboldal adatainak javításához
- **Törlés** — az alkalmazáson belüli törléssel vagy eltávolítással; a Weboldal adatainak esetében iratkozzon le, vagy küldjön nekünk e-mailt
- **Korlátozás** — vezérelheti az összes feldolgozást a funkciók indításával/leállításával
- **Adathordozhatóság** — exportálja az Alkalmazás adatait GPX, KML, CSV, JSON formátumban
- **Tiltakozás** — bármely funkciót bármikor leállíthat
- **Hozzájárulás visszavonása** — bármikor, anélkül, hogy a korábbi feldolgozást érintené

### Egyesült Királyság (UK GDPR)

A UK GDPR és a 2018-as Adatvédelmi törvény szerinti jogai egyenértékűek a fenti GDPR jogokkal. Kapcsolatba léphet az [ICO-val](https://ico.org.uk).

### Ausztrália (Privacy Act 1988)

Az Australian Privacy Principles (APP) szerinti jogai vannak, beleértve a hozzáférést és a helyesbítést. Kapcsolatba léphet az [OAIC-val](https://www.oaic.gov.au).

### Kanada (PIPEDA)

A PIPEDA és az alkalmazandó tartományi adatvédelmi jogszabályok szerinti jogai vannak, beleértve a hozzáférést, a helyesbítést és a hozzájárulás visszavonását. Kapcsolatba léphet [Kanada Adatvédelmi Biztosának Hivatalával](https://www.priv.gc.ca).

### Kaliforniai lakosok (CCPA/CPRA)

**Nem** értékesítünk vagy osztunk meg semmilyen személyes információt. Nem használjuk az adatokat kontextusközi viselkedési reklámozásra. Joga van tudni, törölni, korlátozni az érzékeny adatok felhasználását és a megkülönböztetésmentességhez.

### Brazil lakosok (LGPD)

Egyenértékű jogok érvényesek a Lei Geral de Proteção de Dados szerint. Kapcsolatba léphet az [ANPD-vel](https://www.gov.br/anpd).

### Új-Zéland (Privacy Act 2020)

A Privacy Act 2020 szerinti jogai vannak, beleértve a hozzáférést és a helyesbítést. Kapcsolatba léphet az [NZ Adatvédelmi Biztossal](https://www.privacy.org.nz).

### Egyéb joghatóságok

Tartózkodási helyétől függetlenül teljes körű ellenőrzéssel rendelkezik adatai felett. Ahol a helyi törvény olyan további adatvédelmi jogokat biztosít, amelyekről szerződéssel nem lehet lemondani, ezek a jogok érvényesek.

## 11. Gyermekek adatvédelme

Sem az Alkalmazás, sem a Weboldal nem 16 év alatti gyermekek számára készült. Tudatosan nem gyűjtünk személyes adatokat 16 év alatti gyermekektől. Ha úgy gondolja, hogy egy gyermek használta az Alkalmazást vagy a Weboldalt, törölheti annak adatait az Alkalmazás adatainak törlésével, eltávolításával vagy a várólistáról való leiratkozással.

## 12. Engedélyek magyarázata (Alkalmazás)

- **ACCESS_FINE_LOCATION** — GPS a munkamenetek alatti útvonal-nyomkövetéshez
- **ACCESS_BACKGROUND_LOCATION** — a nyomkövetés folytatása, amikor a képernyő ki van kapcsolva
- **CAMERA** — fotók készítése a találatok rögzítéséhez
- **RECORD_AUDIO** — hangjegyzetek rögzítése a találatokhoz
- **READ/WRITE_CALENDAR** — a kassza engedélyeinek lejárati emlékeztetőit írja az eszköz helyi naptárába. Ha az Android-eszközén engedélyezte a felhőalapú naptárszinkronizálást (például Google Calendar-szinkronizálást), ezek az emlékeztetők a naptár többi részével együtt szinkronizálódnak a fiókjába — ezt a szinkronizálást az Android-beállítások vezérlik, nem pedig az Alkalmazás
- **INTERNET** — időjárás, geokódolás, árapályok, térképek, előfizetések
- **POST_NOTIFICATIONS** — GPS-nyomkövetési értesítés
- **VIBRATE** — perimeter-őrség határriasztásai

Bármely engedélyt bármikor visszavonhatja az Android-beállításokon keresztül.

## 13. Cookie-k és nyomon követés

**Az Alkalmazás** nem használ cookie-kat, web beacon-okat, pixel címkéket, eszköz-ujjlenyomatozást vagy bármely más nyomon követési technológiát. **A Weboldal** nem állít be elsődleges fél cookie-kat; lásd a 4.3. szakaszt a Weboldal cookie-ira vonatkozó teljes közzétételért.

## 14. Nemzetközi adattovábbítások

**Az Alkalmazás adatai:** Mivel az összes keresési adatot helyben tároljuk az eszközén, az ellenőrzésünk alatt nem történik nemzetközi adattovábbítás. A harmadik felekhez intézett API-hívások feldolgozhatók azokban a joghatóságokban, ahol ezek a szolgáltatások működnek.

**A Weboldal adatai:** A várólista e-mailek az EU-ban (Írország) tárolódnak a Supabase által, és a Resend (EU, Írország) dolgozza fel. Ha az EU-n kívülről éri el a Weboldalt, az e-mail-címét feldolgozás céljából az EU-ba továbbítjuk.

## 15. Adatvédelmi incidens értesítése

**Alkalmazás:** Mivel az Ön keresési adatait nem tároljuk az általunk üzemeltetett szervereken, az Alkalmazás adatait érintő adatvédelmi incidens a mi oldalunkról nem lehetséges. Ha tudomásunkra jut egy sebezhetőség az Alkalmazásban, frissítést adunk ki, és értesítjük a felhasználókat az Alkalmazáson vagy a weboldalon keresztül.

**Weboldal:** Adatfeldolgozóink (Supabase, Resend) saját incidens-értesítési protokollokat tartanak fenn. Az Ön várólista e-mail-címét érintő incidens valószínűtlen esetén Önt és az illetékes felügyeleti hatóságot (ANSPDCP) a GDPR követelményeinek megfelelően 72 órán belül értesítjük.

## 16. A jelen szabályzat módosításai

Frissíthetjük ezt az Adatvédelmi szabályzatot a funkcionalitás vagy az alkalmazandó jogszabályok változásainak tükrözésére. Az „Utolsó frissítés" dátum felülvizsgálatra kerül. A lényeges változásokról az Alkalmazáson vagy a weboldalon keresztül értesítjük.

## 17. Harmadik felek adatvédelmi szabályzatai

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics és Crashlytics — csak opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Weboldal-tárhelyszolgáltatás + elemzés)
- [Supabase](https://supabase.com/privacy) (Weboldal-adatbázis)
- [Resend](https://resend.com/legal/privacy-policy) (Weboldal-e-mail)

## 18. Kapcsolatfelvétel

**Coc Lorand Adrian P.F.A.** (kereskedelmi neve: Loriba)
CUI: 41299288 · Reg. F24/646/2019
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
Weboldal: [https://sweeptrack.pro](https://sweeptrack.pro)

A GDPR-rel kapcsolatos megkeresések esetén kapcsolatba léphet az ANSPDCP-vel (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) a [dataprotection.ro](https://www.dataprotection.ro) címen.

---

Ez az Adatvédelmi szabályzat 2026. május 12-én lép hatályba, és a SweepTrack Pro minden verziójára vonatkozik.
