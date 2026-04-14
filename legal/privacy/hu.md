# Adatvédelmi szabályzat

**SweepTrack Pro** — GPS nyomkövető alkalmazás fémkeresőzéshez

Hatálybalépés napja: 2026. április 7. · Utolsó frissítés: 2026. április 7.

Üzemeltető: Coc Lorand P.F.A., kereskedelmi neve: "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Weboldal: sweeptrack.pro

---

## 1. Bevezetés

Ez az Adatvédelmi szabályzat elmagyarázza, hogyan gyűjti, használja, tárolja és védi az Ön adatait a SweepTrack Pro („Alkalmazás”). Elkötelezettek vagyunk az Ön adatainak védelme és az adatkezelési gyakorlatunk átláthatósága mellett.

A SweepTrack Pro **adatvédelem-központú architektúrával** készült: minden adatot helyben, az Ön eszközén tárolunk, nem üzemeltetünk háttérszervereket, és nem gyűjtjük, továbbítjuk vagy értékesítjük az Ön személyes adatait.

## 2. Adatkezelő

Az EU általános adatvédelmi rendelete (GDPR) és a román adatvédelmi törvény (190/2018. sz. törvény) értelmében az adatkezelő:

**Coc Lorand P.F.A.** (kereskedelmi neve: Loriba)
CUI: 41299288 · Reg. F24/646/2019
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Gyűjtött adatok

### 3.1 Helyben, az eszközén tárolt adatok

A következő adatokat Ön hozza létre, és azok **kizárólag az Ön eszközén** tárolódnak. Soha nem férünk hozzá ezekhez az adatokhoz, kivéve, ha Ön kifejezetten megosztja azokat.

**Hely- és munkamenetadatok:**

* GPS-koordináták (szélesség, hosszúság) az aktív nyomkövetési munkamenetek során
* Sebesség-, magasság-, irány- és pontossági értékek az eszköz érzékelőiből
* Munkamenet-metaadatok: név, dátum, kezdési/befejezési idő, időtartam, távolság, címkék
* Útvonal-koordináták időbélyegekkel
* Helyszínnevek (fordított geokódolással nyerve)

**Találati és felfedezési rekordok:**

* Találat típusa (Kincs, Arany, Érme, Relikvia, Ékszer, Szemét)
* Találat helye (GPS-koordináták a rögzítés időpontjában)
* Választható metaadatok: név, jegyzetek, mélység, becsült érték, súly
* Médiamellékletek: fényképek és hangfelvételek

**Engedélytár adatai:**

* Helyszínek nevei és koordinátái
* Földtulajdonosok nevei és elérhetőségei
* Engedélyszámok, kiállítási dátumok, lejárati dátumok
* Helyszín határkoordinátái (poligon)
* Digitális aláírások (SVG formátum)
* Egyedi címkék és jegyzetek

**Egyéb helyi adatok:** Detektorbeállítás-konfigurációk, alkalmazásbeállítások (téma, mértékegységek, nyelv, térképbeállítások) és a munkamenetekhez társított időjárási pillanatképek.

### 3.2 Ideiglenesen feldolgozott adatok (nem tárolt)

A következő adatokat kizárólag a valós idejű funkciók érdekében küldjük el harmadik féltől származó API-szolgáltatásoknak, és azokat **sem mi, sem ezek a szolgáltatások nem tárolják az adott kérésen túl**:

* Hozzávetőleges GPS-koordináták az Open-Meteo-nak az időjárás-előrejelzéshez és a magassági adatokhoz
* Hozzávetőleges GPS-koordináták az OpenStreetMap/Nominatim-nak a címkereséshez
* Hozzávetőleges GPS-koordináták az Overpass API-nak a közeli történelmi nevezetességek felfedezéséhez
* Hozzávetőleges GPS-koordináták a Wikipedia API-nak a közeli szócikkek földrajzi kereséséhez
* Árapály-állomás azonosítók a NOAA-nak az árapály-előrejelzéshez
* Helykeresési lekérdezések az Open-Meteo Geocoding-nak a helynévkereséshez

### 3.3 Harmadik fél által feldolgozott adatok

**Google Maps SDK:** Az eszköze helyzetét a Google Maps dolgozza fel a térkép megjelenítéséhez. Erre a [Google adatvédelmi irányelvei](https://policies.google.com/privacy) vonatkoznak.

**Google Bejelentkezés és Google Drive (választható):** Ha engedélyezi a Google Drive biztonsági mentést, Google-fiókjának e-mail címe helyben tárolódik a hitelesített fiók azonosítása érdekében. A biztonsági mentési adatok a saját Google Drive-fiókjába töltődnek fel. Nincs hozzáférésünk az Ön Google Drive-jához.

**RevenueCat (Előfizetés-kezelés):** Az előfizetés ellenőrzéséhez egy névtelen, véletlenszerűen generált alkalmazás-felhasználói azonosítót használunk. Személyes adatokat nem osztunk meg. Erre a [RevenueCat adatvédelmi irányelvei](https://www.revenuecat.com/privacy) vonatkoznak.

### 3.4 Adatok, amelyeket NEM gyűjtünk

* **Nem** gyűjtjük az Ön nevét, e-mail címét, telefonszámát vagy bármilyen személyes azonosítót
* **Nem** használunk analitikai, hibajelentő vagy viselkedéskövető SDK-kat
* **Nem** használunk hirdetési keretrendszereket vagy hirdetési azonosítókat
* **Nem** követjük a használati mintákat, a munkamenetek gyakoriságát vagy a funkciók használatát
* **Nem** hozunk létre felhasználói profilokat vagy viselkedési ujjlenyomatokat
* **Nem** osztunk meg, adunk el, adunk bérbe vagy kereskedünk adatokkal harmadik felekkel
* **Nem** üzemeltetünk olyan szervereket, amelyek fogadják, feldolgozzák vagy tárolják az Ön adatait

## 4. Az adatkezelés jogalapja (GDPR)

* **GPS/munkamenetadatok, találati rekordok, engedélytári bejegyzések:** Hozzájárulás (6. cikk (1) bek. a) pont) — Ön aktívan kezdeményezi ezeket a műveleteket
* **API hívások (időjárás, geokodolás):** Jogos érdek (6. cikk (1) bek. f) pont) — szükséges az alapvető funkciókhoz
* **Google Drive biztonsági mentés:** Hozzájárulás (6. cikk (1) bek. a) pont) — Ön kifejezetten engedélyezi és hitelesíti
* **Előfizetés ellenőrzése:** Szerződés teljesítése (6. cikk (1) bek. b) pont) — szükséges a fizetős funkciók biztosításához

A hozzájárulást bármikor visszavonhatja az adott tevékenység leállításával vagy az Alkalmazás eltávolításával.

## 5. Hogyan használjuk fel az adatait

Minden adatfeldolgozás **helyben, az Ön eszközén** történik. Az adatait kizárólag az Alkalmazás funkcióinak biztosítására használjuk: térképmegjelenítés, munkamenet-követés, találatok rögzítése, engedélykezelés, időjárási/árapály-adatok, exportálás, biztonsági mentés és előfizetés-ellenőrzés.

## 6. Adattárolás és biztonság

* A munkamenet- és találati adatokat egy titkosított Room adatbázisban tároljuk az Ön eszközén
* A kényes beállítások az Android EncryptedSharedPreferences (AES-256) szolgáltatását használják
* A médiafájlok az Alkalmazás privát belső tárhelyén tárolódnak, amelyhez más alkalmazások nem férhetnek hozzá
* Az Android felhőalapú biztonsági mentés **le van tiltva** (`android:allowBackup="false"`), hogy megakadályozzuk az adatok akaratlan közzétételét
* A Google Drive biztonsági mentések a Google titkosított API-jait (HTTPS/TLS) használják, és kizárólag az Ön fiókjában léteznek

Nem üzemeltetünk szervereket, adatbázisokat vagy felhőinfrastruktúrát.

## 7. Adatmegőrzés

A helyi adatok addig maradnak meg, amíg Ön úgy nem dönt, hogy törli őket. Törölhet egyes elemeket az Alkalmazáson belül, törölheti az összes adatot az Android beállításaiban, vagy eltávolíthatja az Alkalmazást. A Google Drive biztonsági mentések mindaddig megmaradnak, amíg Ön manuálisan nem törli őket a fiókjából.

## 8. Adatmegosztás és közzététel

Nem osztjuk meg, adjuk el, adjuk bérbe és nem fedjük fel személyes adatait harmadik félnek. Ön dönthet úgy, hogy adatokat oszt meg exportálás (GPX, KML, CSV, JSON), munkamenet-megosztó kártyák vagy Google Drive biztonsági ment útján — ezeket mind a felhasználó kezdeményezi.

## 9. Az Ön jogai (GDPR és nemzetközi)

### GDPR jogok (EU/EGT lakosok)

* **Hozzáférés** — adatai teljes mértékben hozzáférhetőek az eszközén
* **Helyesbítés** — minden rekordot közvetlenül az Alkalmazásban szerkeszthet
* **Törlés** — törlés az alkalmazáson belüli törléssel vagy eltávolítással
* **Korlátozás** — minden adatkezelést a funkciók elindításával/leállításával vezérelhet
* **Adathordozhatóság** — exportálás GPX, KML, CSV, JSON formátumban
* **Tiltakozás** — bármely funkciót bármikor leállíthat
* **Hozzájárulás visszavonása** — bármikor, a korábbi adatkezelés érintése nélkül

### Egyesült Királyság (UK GDPR)

Az Egyesült Királyság GDPR és a 2018. évi adatvédelmi törvény szerinti jogai megegyeznek a fenti GDPR jogokkal. Felveheti a kapcsolatot az [ICO](https://ico.org.uk)-val.

### Ausztrália (Privacy Act 1988)

Önt megilletik az ausztrál adatvédelmi alapelvek (APPs) szerinti jogok, beleértve a hozzáférést és a helyesbítést. Felveheti a kapcsolatot az [OAIC](https://www.oaic.gov.au)-val.

### Kanada (PIPEDA)

Önt megilletik a PIPEDA és a vonatkozó tartományi adatvédelmi jogszabályok szerinti jogok, beleértve a hozzáférést, a helyesbítést és a hozzájárulás visszavonását. Felveheti a kapcsolatot a [Kanadai Adatvédelmi Biztos Hivatalával](https://www.priv.gc.ca).

### Kaliforniai lakosok (CCPA/CPRA)

**Nem** adjuk el és nem osztjuk meg a személyes adatokat. Nem használunk adatokat kontextusok közötti viselkedésalapú hirdetésekhez. Önnek joga van a tájékoztatáshoz, a törléshez, a kényes adatok felhasználásának korlátozásához és a megkülönböztetésmentességhez.

### Brazil lakosok (LGPD)

A Lei Geral de Proteção de Dados szerinti egyenértékű jogok érvényesek. Felveheti a kapcsolatot az [ANPD](https://www.gov.br/anpd)-vel.

### Új-Zéland (Privacy Act 2020)

Önt megilletik a 2020. évi adatvédelmi törvény szerinti jogok, beleértve a hozzáférést és a helyesbítést. Felveheti a kapcsolatot az [Új-zélandi Adatvédelmi Biztossal](https://www.privacy.org.nz).

### Egyéb joghatóságok

Tartózkodási helyétől függetlenül teljes körűen rendelkezik adatai felett az Alkalmazáson keresztül. Ahol a helyi jog olyan további adatvédelmi jogokat biztosít, amelyekről szerződésben nem lehet lemondani, ott ezek a jogok érvényesek.

## 10. Gyermekek adatvédelme

Az Alkalmazás nem szól 16 év alatti gyermekeknek. Tudatosan nem gyűjtünk személyes adatokat 16 év alatti gyermekektől. Ha úgy gondolja, hogy egy gyermek használta az Alkalmazást, törölheti az adatait az alkalmazásadatok törlésével vagy az eltávolítással.

## 11. Engedélyek magyarázata

* **ACCESS_FINE_LOCATION** — GPS az útvonal követéséhez a munkamenetek során
* **ACCESS_BACKGROUND_LOCATION** — a követés folytatása kikapcsolt képernyő mellett
* **CAMERA** — fényképek készítése a találatok rögzítéséhez
* **RECORD_AUDIO** — hangjegyzetek rögzítése a találatokhoz
* **READ/WRITE_CALENDAR** — engedélytári lejárati emlékeztetők
* **INTERNET** — időjárás, geokodolás, árapály, térképek, előfizetések
* **POST_NOTIFICATIONS** — GPS nyomkövetési értesítés
* **VIBRATE** — határőrizeti riasztások

Bármely engedélyt bármikor visszavonhat az Android beállításaiban.

## 12. Sütik és nyomon követés

Az Alkalmazás nem használ sütiket, webjelzőket, képpontcímkéket, eszközujjlenyomat-vételt vagy bármilyen más nyomonkövetési technológiát.

## 13. Nemzetközi adattovábbítás

Mivel minden adatot helyben, az Ön eszközén tárolunk, nem történik nemzetközi adattovábbítás az ellenőrzésünk alatt. A harmadik féltől származó API hívások feldolgozása azon joghatóságokban történhet, ahol ezen szolgáltatások működnek.

## 14. Adatvédelmi incidens bejelentése

Mivel nem tároljuk adatait semmilyen szerveren, a részünkről történő adatvédelmi incidens nem lehetséges. Ha az Alkalmazásban sebezhetőségről szerzünk tudomást, frissítést adunk ki, és az Alkalmazáson vagy a weboldalon keresztül értesítjük a felhasználókat.

## 15. Az irányelvek módosítása

Frissíthetjük ezt az Adatvédelmi szabályzatot a funkciók vagy a vonatkozó jogszabályok változásainak megfelelően. Az „Utolsó frissítés” dátumát módosítjuk. A lényeges változásokról az Alkalmazáson vagy a weboldalon keresztül értesítjük.

## 16. Harmadik felek adatvédelmi irányelvei

* [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
* [RevenueCat](https://www.revenuecat.com/privacy)
* [Open-Meteo](https://open-meteo.com/en/terms)
* [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
* [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
* [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Kapcsolat

**Coc Lorand P.F.A.** (kereskedelmi neve: Loriba)
CUI: 41299288 · Reg. F24/646/2019
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
Weboldal: [https://sweeptrack.pro](https://sweeptrack.pro)

A GDPR-ral kapcsolatos megkeresésekkel az ANSPDCP-hez (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) is fordulhat a [dataprotection.ro](https://www.dataprotection.ro) oldalon.

---

Ez az Adatvédelmi szabályzat 2026. április 7-én lép hatályba, és a SweepTrack Pro minden verziójára vonatkozik.

---