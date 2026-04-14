## 6. Polski (Polish)

# Polityka Prywatności

**SweepTrack Pro** — aplikacja do śledzenia GPS dla pasjonatów poszukiwania metali

Data wejścia w życie: 7 kwietnia 2026 r. · Ostatnia aktualizacja: 7 kwietnia 2026 r.

Operator: Coc Lorand P.F.A., działający pod nazwą handlową „Loriba”

CUI: 41299288 · Reg. F24/646/2019

Strona internetowa: sweeptrack.pro

---

## 1. Wstęp

Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób SweepTrack Pro („Aplikacja”) gromadzi, wykorzystuje, przechowuje i chroni dane użytkownika. Zobowiązujemy się do ochrony prywatności i zapewnienia przejrzystości naszych praktyk dotyczących danych.

SweepTrack Pro został zaprojektowany w oparciu o **architekturę kładącą nacisk na prywatność (privacy-first)**: wszystkie dane są przechowywane lokalnie na urządzeniu użytkownika, nie obsługujemy serwerów zaplecza (backend) i nie zbieramy, nie przesyłamy ani nie sprzedajemy danych osobowych użytkownika.

## 2. Administrator danych

Dla celów Ogólnego Rozporządzenia o Ochronie Danych UE (GDPR) oraz rumuńskiego prawa o ochronie danych (ustawa 190/2018), administratorem danych jest:

**Coc Lorand P.F.A.** (działający jako Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Dane, które gromadzimy

### 3.1 Dane przechowywane lokalnie na urządzeniu użytkownika

Następujące dane są tworzone przez użytkownika i przechowywane **wyłącznie na jego urządzeniu**. Nigdy nie mamy dostępu do tych danych, chyba że użytkownik wyraźnie je udostępni.

**Dane dotyczące lokalizacji i sesji:**

- Współrzędne GPS (szerokość, długość geograficzna) podczas aktywnych sesji śledzenia
- Wartości prędkości, wysokości, kursu i dokładności z czujników urządzenia
- Metadane sesji: nazwa, data, godzina rozpoczęcia/zakończenia, czas trwania, dystans, tagi
- Współrzędne trasy ze znacznikami czasu
- Nazwy miejsc (uzyskane poprzez geokodowanie odwrotne)

**Rejestry znalezisk i odkryć:**

- Typ znaleziska (Skarb, Złoto, Moneta, Relikt, Biżuteria, Śmieci)
- Lokalizacja znaleziska (współrzędne GPS w momencie rejestracji)
- Opcjonalne metadane: nazwa, notatki, głębokość, szacunkowa wartość, waga
- Załączniki multimedialne: zdjęcia i nagrania audio

**Dane ze skarbca pozwoleń:**

- Nazwy i lokalizacje miejsc (sitów)
- Nazwiska właścicieli gruntów i dane kontaktowe
- Numery pozwoleń, daty wydania, daty wygaśnięcia
- Współrzędne granic miejsca (poligon)
- Podpisy cyfrowe (format SVG)
- Niestandardowe tagi i notatki

**Inne dane lokalne:** Konfiguracje ustawień wykrywaczy, preferencje aplikacji (motyw, jednostki, język, ustawienia mapy) oraz migawki pogodowe powiązane z sesjami.

### 3.2 Dane przetwarzane tymczasowo (nieprzechowywane)

Następujące dane są wysyłane do zewnętrznych usług API wyłącznie w celu zapewnienia funkcjonalności w czasie rzeczywistym i **nie są przechowywane przez nas ani przez te usługi poza czasem niezbędnym do obsługi żądania**:

- Przybliżone współrzędne GPS wysyłane do Open-Meteo w celu uzyskania prognoz pogody i danych o wysokości
- Przybliżone współrzędne GPS wysyłane do OpenStreetMap/Nominatim w celu wyszukiwania adresów
- Przybliżone współrzędne GPS wysyłane do Overpass API w celu odkrywania pobliskich historycznych punktów zainteresowania (POI)
- Przybliżone współrzędne GPS wysyłane do Wikipedia API w celu wyszukiwania artykułów w pobliżu
- Identyfikatory stacji przypływów wysyłane do NOAA w celu przewidywania przypływów
- Zapytania dotyczące wyszukiwania lokalizacji wysyłane do Open-Meteo Geocoding w celu wyszukiwania nazw miejscowości

### 3.3 Dane przetwarzane przez usługi zewnętrzne

**Google Maps SDK:** Lokalizacja urządzenia jest przetwarzana przez Google Maps w celu wyświetlania mapy. Podlega [Polityce Prywatności Google](https://policies.google.com/privacy).

**Google Sign-In i Google Drive (opcjonalnie):** Jeśli użytkownik włączy kopię zapasową w Google Drive, adres e-mail konta Google jest przechowywany lokalnie w celu identyfikacji uwierzytelnionego konta. Dane kopii zapasowej są przesyłane na osobiste konto Google Drive użytkownika. Nie mamy dostępu do dysku Google Drive użytkownika.

**RevenueCat (zarządzanie subskrypcjami):** Anonimowy, losowo wygenerowany identyfikator użytkownika aplikacji jest używany do weryfikacji subskrypcji. Żadne dane osobowe nie są udostępniane. Podlega [Polityce Prywatności RevenueCat](https://www.revenuecat.com/privacy).

### 3.4 Dane, których NIE gromadzimy

- **Nie** zbieramy nazwisk, adresów e-mail, numerów telefonów ani żadnych osobistych identyfikatorów.
- **Nie** używamy pakietów SDK do analityki, raportowania błędów ani śledzenia zachowań.
- **Nie** używamy systemów reklamowych ani identyfikatorów reklamowych.
- **Nie** śledzimy wzorców użytkowania, częstotliwości sesji ani wykorzystania funkcji.
- **Nie** tworzymy profili użytkowników ani cyfrowych odcisków palców zachowań.
- **Nie** udostępniamy, nie sprzedajemy, nie wynajmujemy ani nie handlujemy danymi z podmiotami trzecimi.
- **Nie** obsługujemy serwerów, które odbierają, przetwarzają lub przechowują dane użytkownika.

## 4. Podstawa prawna przetwarzania (GDPR)

- **Dane GPS/sesji, rejestry znalezisk, wpisy w skarbcu:** Zgoda (art. 6 ust. 1 lit. a) — użytkownik aktywnie inicjuje te działania.
- **Wywołania API (pogoda, geokodowanie):** Prawnie uzasadniony interes (art. 6 ust. 1 lit. f) — niezbędne do zapewnienia podstawowej funkcjonalności.
- **Kopia zapasowa Google Drive:** Zgoda (art. 6 ust. 1 lit. a) — użytkownik wyraźnie włącza funkcję i uwierzytelnia się.
- **Weryfikacja subskrypcji:** Wykonanie umowy (art. 6 ust. 1 lit. b) — niezbędne do świadczenia płatnych funkcji.

Użytkownik może wycofać zgodę w dowolnym momencie, przerywając odpowiednią czynność lub odinstalowując Aplikację.

## 5. Jak wykorzystujemy dane użytkownika

Wszelkie przetwarzanie danych odbywa się **lokalnie na urządzeniu użytkownika**. Wykorzystujemy dane wyłącznie w celu świadczenia funkcji Aplikacji: wyświetlania mapy, śledzenia sesji, rejestrowania znalezisk, zarządzania pozwoleniami, danych pogodowych/przypływów, eksportu danych, kopii zapasowej i weryfikacji subskrypcji.

## 6. Przechowywanie danych i bezpieczeństwo

- Dane sesji i znalezisk są przechowywane w zaszyfrowanej bazie danych Room na urządzeniu użytkownika.
- Wrażliwe ustawienia wykorzystują mechanizm EncryptedSharedPreferences (AES-256) systemu Android.
- Pliki multimedialne są przechowywane w prywatnej pamięci wewnętrznej Aplikacji, niedostępnej dla innych aplikacji.
- Kopia zapasowa w chmurze Android jest **wyłączona** (`android:allowBackup="false"`), aby zapobiec niezamierzonemu ujawnieniu danych.
- Kopia zapasowa Google Drive wykorzystuje zaszyfrowane interfejsy API firmy Google (HTTPS/TLS) i znajduje się wyłącznie na koncie użytkownika.

Nie obsługujemy serwerów, baz danych ani infrastruktury chmurowej.

## 7. Przechowywanie danych (retencja)

Dane lokalne są przechowywane do czasu, aż użytkownik zdecyduje się je usunąć. Można usuwać poszczególne elementy w Aplikacji, wyczyścić wszystkie dane w ustawieniach systemu Android lub odinstalować Aplikację. Kopie zapasowe w Google Drive istnieją do momentu ich ręcznego usunięcia z konta.

## 8. Udostępnianie i ujawnianie danych

Nie udostępniamy, nie sprzedajemy, nie wynajmujemy ani nie ujawniamy danych osobowych użytkownika żadnym podmiotom trzecim. Użytkownik może zdecydować się na udostępnienie danych poprzez eksport (GPX, KML, CSV, JSON), karty udostępniania sesji lub kopię zapasową w Google Drive — wszystko z inicjatywy użytkownika.

## 9. Prawa użytkownika (GDPR i międzynarodowe)

### Prawa GDPR (mieszkańcy UE/EOG)

- **Dostęp** — dane są w pełni dostępne na urządzeniu użytkownika.
- **Sprostowanie** — wszystkie rekordy można edytować bezpośrednio w Aplikacji.
- **Usunięcie** — usuwanie poprzez funkcje w aplikacji lub odinstalowanie.
- **Ograniczenie** — użytkownik kontroluje przetwarzanie poprzez włączanie/wyłączanie funkcji.
- **Przenoszenie danych** — eksport do formatów GPX, KML, CSV, JSON.
- **Sprzeciw** — zatrzymanie dowolnej funkcji w dowolnym momencie.
- **Wycofanie zgody** — w dowolnym momencie bez wpływu na wcześniejsze przetwarzanie.

### Wielka Brytania (UK GDPR)

Prawa użytkownika na mocy UK GDPR oraz Data Protection Act 2018 są równoważne z prawami GDPR wymienionymi powyżej. Można skontaktować się z [ICO](https://ico.org.uk).

### Australia (Privacy Act 1988)

Użytkownikowi przysługują prawa wynikające z australijskich zasad prywatności (APPs), w tym prawo do dostępu i poprawiania danych. Można skontaktować się z [OAIC](https://www.oaic.gov.au).

### Kanada (PIPEDA)

Użytkownikowi przysługują prawa wynikające z PIPEDA oraz obowiązujących prowincjonalnych przepisów o ochronie prywatności, w tym prawo do dostępu, poprawiania i wycofania zgody. Można skontaktować się z [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

### Mieszkańcy Kalifornii (CCPA/CPRA)

**Nie** sprzedajemy ani nie udostępniamy żadnych danych osobowych. Nie wykorzystujemy danych do reklamy behawioralnej w różnych kontekstach. Użytkownik ma prawo do uzyskania informacji, usunięcia danych, ograniczenia wykorzystania danych wrażliwych oraz prawo do niedyskryminacji.

### Mieszkańcy Brazylii (LGPD)

Obowiązują równoważne prawa na mocy Lei Geral de Proteção de Dados. Można skontaktować się z [ANPD](https://www.gov.br/anpd).

### Nowa Zelandia (Privacy Act 2020)

Użytkownikowi przysługują prawa na mocy Privacy Act 2020, w tym prawo do dostępu i poprawiania danych. Można skontaktować się z [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Inne jurysdykcje

Niezależnie od lokalizacji, użytkownik ma pełną kontrolę nad swoimi danymi za pośrednictwem Aplikacji. W przypadkach, gdy prawo lokalne przyznaje dodatkowe prawa do prywatności, których nie można zrzec się w drodze umowy, prawa te mają zastosowanie.

## 10. Prywatność dzieci

Aplikacja nie jest skierowana do dzieci poniżej 16 roku życia. Nie zbieramy świadomie danych osobowych od dzieci poniżej 16 roku życia. Jeśli uważasz, że dziecko korzystało z Aplikacji, możesz usunąć jego dane, czyszcząc dane Aplikacji lub ją odinstalowując.

## 11. Objaśnienie uprawnień

- **ACCESS_FINE_LOCATION** — GPS do śledzenia trasy podczas sesji.
- **ACCESS_BACKGROUND_LOCATION** — kontynuacja śledzenia przy wyłączonym ekranie.
- **CAMERA** — robienie zdjęć w celu rejestracji znalezisk.
- **RECORD_AUDIO** — nagrywanie notatek głosowych do znalezisk.
- **READ/WRITE_CALENDAR** — przypomnienia o wygaśnięciu pozwoleń ze skarbca.
- **INTERNET** — pogoda, geokodowanie, przypływy, mapy, subskrypcje.
- **POST_NOTIFICATIONS** — powiadomienie o śledzeniu GPS.
- **VIBRATE** — alerty o granicach dla strażnika obwodu.

Użytkownik może cofnąć dowolne uprawnienie w dowolnym momencie w ustawieniach systemu Android.

## 12. Pliki cookie i śledzenie

Aplikacja nie używa plików cookie, sygnalizatorów WWW, tagów pikselowych, odcisków palców urządzeń ani żadnych innych technologii śledzenia.

## 13. Międzynarodowe przekazywanie danych

Ponieważ wszystkie dane są przechowywane lokalnie na urządzeniu użytkownika, pod naszą kontrolą nie dochodzi do międzynarodowego przekazywania danych. Wywołania API podmiotów trzecich mogą być przetwarzane w jurysdykcjach, w których działają te usługi.

## 14. Powiadomienie o naruszeniu danych

Ponieważ nie przechowujemy danych użytkownika na żadnym serwerze, naruszenie bezpieczeństwa danych po naszej stronie nie jest możliwe. Jeśli dowiemy się o luce w zabezpieczeniach Aplikacji, wydamy aktualizację i powiadomimy użytkowników za pośrednictwem Aplikacji lub strony internetowej.

## 15. Zmiany w niniejszej polityce

Możemy aktualizować niniejszą Politykę Prywatności, aby odzwierciedlić zmiany w funkcjonalności lub obowiązujących przepisach prawa. Data „Ostatniej aktualizacji” zostanie zmieniona. Istotne zmiany będą komunikowane za pośrednictwem Aplikacji lub strony internetowej.

## 16. Polityki prywatności podmiotów trzecich

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Kontakt

**Coc Lorand P.F.A.** (działający jako Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Strona internetowa: [https://sweeptrack.pro](https://sweeptrack.pro)

W sprawach związanych z GDPR można również skontaktować się z ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) pod adresem [dataprotection.ro](https://www.dataprotection.ro).

---

Niniejsza Polityka Prywatności obowiązuje od 7 kwietnia 2026 r. i dotyczy wszystkich wersji SweepTrack Pro.

---