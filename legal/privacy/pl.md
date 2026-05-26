# Polityka Prywatności

**SweepTrack Pro** — aplikacja do śledzenia GPS dla pasjonatów poszukiwania metali

Data wejścia w życie: 12 maja 2026 r. · Ostatnia aktualizacja: 26 maja 2026 r.

Operator: Coc Lorand Adrian P.F.A., działający pod nazwą handlową „Loriba"

CUI: 41299288 · Reg. F24/646/2019

Strona internetowa: sweeptrack.pro

---

## 1. Wstęp

Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób SweepTrack Pro („Aplikacja") oraz strona internetowa sweeptrack.pro („Strona Internetowa") gromadzą, wykorzystują, przechowują i chronią dane użytkownika. Zobowiązujemy się do ochrony prywatności i zapewnienia przejrzystości naszych praktyk dotyczących danych.

Aplikacja została zaprojektowana w oparciu o **architekturę kładącą nacisk na prywatność (privacy-first)**: wszystkie dane poszukiwawcze są przechowywane lokalnie na urządzeniu użytkownika, nie obsługujemy serwerów zaplecza (backend) dla Aplikacji i nie zbieramy, nie przesyłamy ani nie sprzedajemy danych osobowych poszukiwawczych użytkownika. Strona Internetowa działa oddzielnie i ma własne praktyki dotyczące danych, opisane w Sekcji 4.

## 2. Administrator danych

Dla celów Ogólnego Rozporządzenia o Ochronie Danych UE (GDPR) oraz rumuńskiego prawa o ochronie danych (ustawa 190/2018), administratorem danych jest:

**Coc Lorand Adrian P.F.A.** (działający jako Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Dane, które gromadzimy (Aplikacja Android)

### 3.1 Dane przechowywane lokalnie na urządzeniu użytkownika

Następujące dane są tworzone przez użytkownika i przechowywane **wyłącznie na urządzeniu użytkownika**. Nigdy nie mamy dostępu do tych danych, chyba że użytkownik udostępni je w sposób wyraźny.

**Dane lokalizacji i sesji:**

- Współrzędne GPS (szerokość, długość geograficzna) podczas aktywnych sesji śledzenia
- Wartości prędkości, wysokości, kursu i dokładności z czujników urządzenia
- Metadane sesji: nazwa, data, czas rozpoczęcia/zakończenia, czas trwania, dystans, tagi
- Współrzędne trasy ze znacznikami czasu
- Nazwy lokalizacji (uzyskane przez geokodowanie odwrotne)

**Zapisy znalezisk i odkryć:**

- Typ znaleziska (Skarb, Złoto, Moneta, Relikt, Biżuteria, Śmieci)
- Lokalizacja znaleziska (współrzędne GPS w momencie rejestracji)
- Opcjonalne metadane: nazwa, notatki, głębokość, szacowana wartość, waga
- Załączniki multimedialne: zdjęcia i nagrania dźwiękowe

**Dane sejfu pozwoleń:**

- Nazwy i lokalizacje miejsc
- Nazwiska właścicieli gruntów i informacje kontaktowe
- Numery pozwoleń, daty wydania, daty wygaśnięcia
- Współrzędne granic miejsca (wielokąt)
- Podpisy cyfrowe (format SVG)
- Niestandardowe tagi i notatki

**Inne dane lokalne:** Konfiguracje ustawień wstępnych detektora, preferencje aplikacji (motyw, jednostki, język, ustawienia mapy) oraz migawki pogodowe powiązane z sesjami.

### 3.2 Dane przetwarzane tymczasowo (nieprzechowywane)

Następujące dane są wysyłane do interfejsów API stron trzecich w celu zapewnienia funkcjonalności w czasie rzeczywistym i **nie są przechowywane przez nas ani przez te usługi poza okresem natychmiastowego żądania**:

- Przybliżone współrzędne GPS wysyłane do Open-Meteo dla prognoz pogody i danych o wysokości
- Przybliżone współrzędne GPS wysyłane do OpenStreetMap/Nominatim dla wyszukiwania adresów
- Przybliżone współrzędne GPS wysyłane do Overpass API dla wykrywania pobliskich historycznych POI
- Przybliżone współrzędne GPS wysyłane do Wikipedia API dla geograficznego wyszukiwania artykułów w pobliżu
- Identyfikatory stacji pływów wysyłane do NOAA dla prognoz pływów
- Zapytania wyszukiwania lokalizacji wysyłane do Open-Meteo Geocoding

### 3.3 Dane przetwarzane przez usługi stron trzecich

**Google Maps SDK:** Lokalizacja urządzenia jest przetwarzana przez Google Maps do wyświetlania mapy. Podlega [Polityce Prywatności Google](https://policies.google.com/privacy).

**Google Sign-In i Google Drive (opcjonalnie):** Jeśli włączysz kopię zapasową Google Drive, adres e-mail konta Google jest przechowywany lokalnie w celu identyfikacji uwierzytelnionego konta. Dane kopii zapasowej są przesyłane do Twojego własnego konta Google Drive. Nie mamy dostępu do Twojego Google Drive.

**RevenueCat (Zarządzanie subskrypcjami):** Anonimowy, losowo generowany identyfikator użytkownika aplikacji jest używany do weryfikacji subskrypcji. Żadne informacje osobiste nie są udostępniane. Podlega [Polityce Prywatności RevenueCat](https://www.revenuecat.com/privacy).

**Firebase Analytics i Crashlytics (Opcjonalnie — domyślnie wyłączone):** Dwa SDK Google Firebase są zintegrowane z Aplikacją, ale **oba pozostają nieaktywne, dopóki nie wyrazisz wyraźnej zgody** — poprzez prośbę o zgodę przy pierwszym uruchomieniu lub w **Ustawieniach → Prywatność → Diagnostyka**. Dopóki nie wyrazisz zgody, żadne zdarzenia nie są wysyłane i żadne raporty awarii nie są przesyłane. Możesz wycofać zgodę w dowolnym momencie; cofnięcie zaczyna obowiązywać od następnego zdarzenia. Wersje deweloperskie nigdy nie aktywują Crashlytics.

Gdy są włączone:

- **Firebase Analytics** rejestruje osiem zagregowanych nazw zdarzeń z nieidentyfikującymi parametrami: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Zawartość zdarzeń **nigdy nie obejmuje** współrzędnych GPS, adresów, nazw znalezisk, zdjęć, nagrań audio, danych sejfu ani żadnych innych informacji umożliwiających identyfikację osób — wyłącznie liczniki, czasy trwania, odległości, typ znaleziska (sama kategoria) oraz identyfikatory funkcji.
- **Firebase Crashlytics** przesyła ślady stosu awarii wraz z modelem urządzenia, wersją systemu operacyjnego i wersją aplikacji, aby pomóc nam diagnozować błędy. Zanim jakakolwiek awaria lub błąd niekrytyczny zostanie przesłany do Crashlytics, Aplikacja **usuwa z komunikatu wyjątku podciągi w kształcie współrzędnych** (np. wzorce `lat=`/`lon=`, liczby dziesiętne ze znakiem z trzema lub większą liczbą cyfr po przecinku), tak aby pozycje GPS przechowywane w zmiennych lokalnych nie mogły przeciec przez raportowanie błędów. Ramki stosu (klasa, metoda, linia) są zachowywane do grupowania; wartości czasu wykonania nie. Procesowy handler nieprzechwyconych wyjątków stosuje to samo czyszczenie do krytycznych awarii rejestrowanych automatycznie przez SDK.

Obie usługi podlegają [Polityce Prywatności Google](https://policies.google.com/privacy) oraz [informacjom o prywatności i bezpieczeństwie Firebase](https://firebase.google.com/support/privacy).

### 3.4 Dane, których Aplikacja NIE gromadzi

- **Aplikacja** nie gromadzi Twojego imienia, e-maila, numeru telefonu ani żadnych identyfikatorów osobistych
- **Aplikacja** nie wykorzystuje analiz ani raportowania błędów, chyba że wyrazisz wyraźną zgodę (patrz sekcja Firebase powyżej; domyślnie wyłączone i odwoływalne w dowolnym momencie w Ustawieniach → Prywatność → Diagnostyka)
- **Aplikacja** nie wykorzystuje frameworków reklamowych ani identyfikatorów reklamowych
- **Aplikacja** nie śledzi wzorców użytkowania, częstotliwości sesji ani wykorzystania funkcji
- **Aplikacja** nie tworzy profili użytkowników ani odcisków behawioralnych
- **Aplikacja** nie udostępnia, nie sprzedaje, nie wynajmuje ani nie wymienia danych z osobami trzecimi
- **Aplikacja** nie obsługuje serwerów, które otrzymują, przetwarzają lub przechowują Twoje dane poszukiwawcze

Praktyki dotyczące danych Strony Internetowej są omówione oddzielnie w Sekcji 4.

## 4. Praktyki dotyczące danych Strony Internetowej (sweeptrack.pro)

Niniejsza sekcja obejmuje praktyki dotyczące danych specyficzne dla naszej strony internetowej sweeptrack.pro. Aplikacja Android opisana w Sekcjach 3 oraz 5–18 działa niezależnie i nie współdzieli infrastruktury ze Stroną Internetową.

### 4.1 Gromadzenie adresów e-mail dla listy oczekujących

Gdy wysyłasz swój adres e-mail za pośrednictwem formularza zapisu na Stronie Internetowej, gromadzimy:

- **Adres e-mail**, który podasz
- **Znacznik czasu** zapisu
- **Adres IP** (przejściowy) — używany do ograniczania częstotliwości; nieprzechowywany poza czasem trwania żądania

**Cel:** Powiadomienie Cię, gdy SweepTrack Pro zostanie uruchomione w Google Play oraz wysyłanie aktualizacji przedpremierowych o produkcie i ofercie Founder's Lifetime. Nie będziemy używać Twojego adresu e-mail do żadnych innych celów, nie udostępnimy go ani nie sprzedamy.

**Podstawa prawna (GDPR):** Zgoda (Art. 6(1)(a)) — udzielona przy wysłaniu formularza.

**Przechowywanie:** Adresy e-mail są przechowywane w bazie danych Supabase Postgres hostowanej w UE (region Irlandia). Supabase, Inc. działa jako nasz podmiot przetwarzający dane zgodnie z ich standardową Umową o Przetwarzaniu Danych.

**Dostarczanie e-maili:** E-maile wychodzące są wysyłane za pośrednictwem Resend, Inc. (region UE, Irlandia), działającego jako nasz podmiot przetwarzający usługi e-mail zgodnie z ich standardową Umową o Przetwarzaniu Danych.

**Okres przechowywania:** Do momentu wypisania się lub 12 miesięcy po publicznym uruchomieniu SweepTrack Pro w Google Play, w zależności od tego, co nastąpi wcześniej.

**Wypisanie się:** Odpowiedz „remove" na dowolny e-mail, który wyślemy, lub użyj linku List-Unsubscribe, który Twój klient pocztowy wyświetla (Gmail i Outlook pokazują go obok adresu Od).

**Twoje prawa:** Dostęp, sprostowanie, usunięcie, ograniczenie, przenoszenie i prawo do wycofania zgody. Wyślij e-mail na adres [support@sweeptrack.pro](mailto:support@sweeptrack.pro), aby skorzystać z któregokolwiek z tych praw.

### 4.2 Analityka Strony Internetowej

Strona Internetowa korzysta z:

- **Vercel Analytics** — analiza przyjazna prywatności, która nie używa plików cookie i nie przechowuje indywidualnych adresów IP. Mierzy tylko zagregowane wyświetlenia stron.
- **Vercel Speed Insights** — pomiar Core Web Vitals (czas ładowania strony, przesunięcie układu, opóźnienia interakcji) na zasadzie zagregowanej.

Oba narzędzia są obsługiwane przez Vercel Inc. i podlegają [Polityce Prywatności Vercel](https://vercel.com/legal/privacy-policy). Nie gromadzą informacji osobistych i nie tworzą profili użytkowników.

### 4.3 Pliki cookie

Strona Internetowa nie ustawia plików cookie pierwszej strony do śledzenia, reklamy lub profilowania. Vercel Analytics jest bezcookie z założenia. Preferencja językowa, jeśli ją zmienisz, jest przechowywana w `localStorage` Twojej przeglądarki (nie jest to plik cookie) i jest odczytywalna tylko przez Twoją przeglądarkę.

### 4.4 Hosting i logi serwera

Strona Internetowa jest hostowana przez Vercel Inc. Vercel może automatycznie rejestrować standardowe metadane żądań (adres IP, user agent, ścieżkę żądania, znacznik czasu) w celach operacyjnych, wydajnościowych i bezpieczeństwa. Te logi są przechowywane zgodnie ze standardowymi politykami Vercel i nie są używane przez nas do śledzenia ani profilowania osób.

### 4.5 Twoje prawa dla danych Strony Internetowej

Te same prawa GDPR, UK GDPR, australijskie, kanadyjskie, CCPA, LGPD i NZ Privacy Act opisane w Sekcji 10 mają zastosowanie również do danych zebranych przez Stronę Internetową. Aby skorzystać z dowolnego prawa w odniesieniu do Twojego adresu e-mail z listy oczekujących, skontaktuj się z [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Odpowiemy w ciągu 30 dni.

## 5. Podstawa prawna przetwarzania (GDPR)

- **Dane GPS/sesji, zapisy znalezisk, wpisy sejfu:** Zgoda (Art. 6(1)(a)) — aktywnie inicjujesz te działania
- **Wywołania API (pogoda, geokodowanie):** Prawnie uzasadniony interes (Art. 6(1)(f)) — niezbędne dla podstawowej funkcjonalności
- **Kopia zapasowa Google Drive:** Zgoda (Art. 6(1)(a)) — aktywujesz i uwierzytelniasz wyraźnie
- **Weryfikacja subskrypcji:** Wykonanie umowy (Art. 6(1)(b)) — niezbędne do świadczenia płatnych funkcji
- **Firebase Analytics i Crashlytics (opcjonalnie):** Zgoda (Art. 6(1)(a)) — aktywowane poprzez prośbę przy pierwszym uruchomieniu lub w Ustawieniach, odwoływalne w dowolnym momencie
- **E-mail listy oczekujących (Strona Internetowa):** Zgoda (Art. 6(1)(a)) — patrz Sekcja 4.1

Możesz wycofać zgodę w dowolnym momencie, zatrzymując odpowiednią aktywność, odinstalowując Aplikację lub wypisując się z e-maili Strony Internetowej.

## 6. Jak wykorzystujemy Twoje dane

Całe przetwarzanie danych Aplikacji odbywa się **lokalnie na Twoim urządzeniu**. Używamy danych Aplikacji wyłącznie do zapewnienia funkcji Aplikacji: wyświetlanie mapy, śledzenie sesji, rejestrowanie znalezisk, zarządzanie pozwoleniami, dane pogodowe/pływów, eksporty, kopie zapasowe i weryfikacja subskrypcji.

Dane Strony Internetowej (Twój adres e-mail z listy oczekujących) są używane tylko do wysyłania komunikatów dotyczących premiery i przed premierą, jak opisano w Sekcji 4.

## 7. Przechowywanie i bezpieczeństwo danych

**Dane Aplikacji:**

- Dane sesji i znalezisk są przechowywane w bazie danych Room (SQLite) w odizolowanej prywatnej pamięci Aplikacji na Twoim urządzeniu — chronione przez model izolacji aplikacji Androida i szyfrowanie danych użytkownika urządzenia w spoczynku
- Wrażliwe preferencje wykorzystują EncryptedSharedPreferences (AES-256) Androida
- Pliki multimedialne są przechowywane w prywatnej pamięci wewnętrznej Aplikacji, niedostępnej dla innych aplikacji
- Kopia zapasowa w chmurze Androida jest **wyłączona** (`android:allowBackup="false"`), aby zapobiec niezamierzonemu ujawnieniu danych
- Kopie zapasowe Google Drive korzystają z zaszyfrowanych API Google (HTTPS/TLS) i istnieją wyłącznie na Twoim koncie

Dla Aplikacji nie obsługujemy żadnych serwerów, baz danych ani infrastruktury w chmurze, które przechowują Twoje dane poszukiwawcze.

**Dane Strony Internetowej:** E-maile listy oczekujących są przechowywane w bazie danych Supabase Postgres hostowanej w UE (Irlandia). Połączenia są szyfrowane (TLS). Dostęp jest ograniczony wyłącznie do celów administracyjnych. E-mail wychodzący jest wysyłany przez Resend (UE, Irlandia) za pośrednictwem TLS. Patrz Sekcja 4.

## 8. Okres przechowywania danych

**Dane Aplikacji:** Dane lokalne są przechowywane, dopóki nie zdecydujesz się ich usunąć. Możesz usunąć poszczególne elementy w Aplikacji, wyczyścić wszystkie dane za pośrednictwem ustawień Androida lub odinstalować Aplikację. Kopie zapasowe Google Drive pozostają, dopóki nie usuniesz ich ręcznie ze swojego konta.

**Dane Strony Internetowej:** E-maile listy oczekujących są przechowywane do momentu wypisania się lub 12 miesięcy po publicznym uruchomieniu, w zależności od tego, co nastąpi wcześniej. Następnie adresy są usuwane z bazy danych Supabase.

## 9. Udostępnianie i ujawnianie danych

Nie udostępniamy, nie sprzedajemy, nie wynajmujemy ani nie ujawniamy Twoich danych osobowych żadnym osobom trzecim. Możesz wybrać udostępnienie danych Aplikacji poprzez eksporty (GPX, KML, CSV, JSON), karty udostępniania sesji lub kopię zapasową Google Drive — wszystkie inicjowane przez użytkownika. Dane listy oczekujących Strony Internetowej są przetwarzane wyłącznie przez naszych wskazanych podmiotów przetwarzających (Supabase, Resend) w celach opisanych w Sekcji 4.

## 10. Twoje prawa (GDPR i międzynarodowe)

### Prawa GDPR (Mieszkańcy UE/EOG)

- **Dostęp** — Twoje dane Aplikacji są w pełni dostępne na Twoim urządzeniu; dla danych Strony Internetowej wyślij e-mail na adres [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Sprostowanie** — edytuj wszystkie rekordy bezpośrednio w Aplikacji lub wyślij nam e-mail w celu korekty danych Strony Internetowej
- **Usunięcie** — usuń poprzez usunięcie w aplikacji lub odinstalowanie; dla danych Strony Internetowej wypisz się lub wyślij nam e-mail
- **Ograniczenie** — kontroluj całe przetwarzanie, uruchamiając/zatrzymując funkcje
- **Przenoszenie danych** — eksportuj dane Aplikacji przez GPX, KML, CSV, JSON
- **Sprzeciw** — zatrzymaj dowolną funkcję w dowolnym momencie
- **Wycofanie zgody** — w dowolnym momencie bez wpływu na wcześniejsze przetwarzanie

### Wielka Brytania (UK GDPR)

Twoje prawa zgodnie z UK GDPR i ustawą o ochronie danych z 2018 r. są równoważne z powyższymi prawami GDPR. Możesz skontaktować się z [ICO](https://ico.org.uk).

### Australia (Privacy Act 1988)

Masz prawa zgodnie z Australian Privacy Principles (APPs), w tym dostęp i sprostowanie. Możesz skontaktować się z [OAIC](https://www.oaic.gov.au).

### Kanada (PIPEDA)

Masz prawa zgodnie z PIPEDA i obowiązującym prowincjonalnym ustawodawstwem dotyczącym prywatności, w tym dostęp, sprostowanie i wycofanie zgody. Możesz skontaktować się z [Biurem Komisarza ds. Prywatności Kanady](https://www.priv.gc.ca).

### Mieszkańcy Kalifornii (CCPA/CPRA)

**Nie** sprzedajemy ani nie udostępniamy żadnych informacji osobistych. Nie używamy danych do reklamy behawioralnej między kontekstami. Masz prawa do wiedzy, usunięcia, ograniczenia wykorzystania wrażliwych danych i niedyskryminacji.

### Mieszkańcy Brazylii (LGPD)

Mają zastosowanie równoważne prawa zgodnie z Lei Geral de Proteção de Dados. Możesz skontaktować się z [ANPD](https://www.gov.br/anpd).

### Nowa Zelandia (Privacy Act 2020)

Masz prawa zgodnie z Privacy Act 2020, w tym dostęp i sprostowanie. Możesz skontaktować się z [Komisarzem ds. Prywatności NZ](https://www.privacy.org.nz).

### Inne jurysdykcje

Niezależnie od lokalizacji masz pełną kontrolę nad swoimi danymi. Tam, gdzie prawo lokalne przyznaje dodatkowe prawa dotyczące prywatności, których nie można zrzec się w drodze umowy, te prawa mają zastosowanie.

## 11. Prywatność dzieci

Ani Aplikacja, ani Strona Internetowa nie są skierowane do dzieci poniżej 18 roku życia. Docelowym użytkownikiem Aplikacji jest dorosły poszukiwacz z wykrywaczem metali; wiele funkcji (sejf na pozwolenia, umowy z właścicielami gruntów, podpisy cyfrowe, płatne subskrypcje) wymaga w większości jurysdykcji statusu prawnego osoby dorosłej. Świadomie nie gromadzimy informacji osobistych od dzieci poniżej 18 roku życia. Jeśli uważasz, że dziecko korzystało z Aplikacji lub Strony Internetowej, możesz usunąć jego dane, czyszcząc dane Aplikacji, odinstalowując lub wypisując się z listy oczekujących.

## 12. Wyjaśnienie uprawnień (Aplikacja)

- **ACCESS_FINE_LOCATION** — GPS do śledzenia trasy podczas sesji
- **ACCESS_BACKGROUND_LOCATION** — kontynuowanie śledzenia, gdy ekran jest wyłączony
- **CAMERA** — robienie zdjęć dla rejestrowania znalezisk
- **RECORD_AUDIO** — nagrywanie notatek audio dla znalezisk
- **READ/WRITE_CALENDAR** — zapisuje przypomnienia o wygaśnięciu pozwoleń sejfu w lokalnym kalendarzu Twojego urządzenia. Jeśli masz włączoną synchronizację z kalendarzem w chmurze w Androidzie (na przykład synchronizację Google Calendar), te przypomnienia zostaną zsynchronizowane z Twoim kontem wraz z resztą kalendarza — synchronizacja ta jest kontrolowana przez ustawienia Androida, a nie przez Aplikację
- **INTERNET** — pogoda, geokodowanie, pływy, mapy, subskrypcje
- **POST_NOTIFICATIONS** — powiadomienie o śledzeniu GPS
- **VIBRATE** — alerty granicy strażnika perymetru

Możesz cofnąć dowolne uprawnienie w dowolnym momencie za pośrednictwem ustawień Androida.

## 13. Pliki cookie i śledzenie

**Aplikacja** nie wykorzystuje plików cookie, web beacons, znaczników pikselowych, odcisków palców urządzenia ani żadnych innych technologii śledzenia. **Strona Internetowa** nie ustawia plików cookie pierwszej strony; patrz Sekcja 4.3, aby uzyskać pełne ujawnienie plików cookie Strony Internetowej.

## 14. Międzynarodowe transfery danych

**Dane Aplikacji:** Ponieważ wszystkie dane poszukiwawcze są przechowywane lokalnie na Twoim urządzeniu, nie odbywają się międzynarodowe transfery danych pod naszą kontrolą. Wywołania API stron trzecich mogą być przetwarzane w jurysdykcjach, w których te usługi działają.

**Dane Strony Internetowej:** E-maile listy oczekujących są przechowywane w UE (Irlandia) przez Supabase i przetwarzane przez Resend (UE, Irlandia). Jeśli uzyskujesz dostęp do Strony Internetowej spoza UE, Twój e-mail jest przesyłany do UE w celu przetwarzania.

## 15. Powiadomienie o naruszeniu danych

**Aplikacja:** Ponieważ nie przechowujemy Twoich danych poszukiwawczych na żadnym serwerze, który obsługujemy, naruszenie danych wpływające na dane Aplikacji z naszej strony nie jest możliwe. Jeśli dowiemy się o luce w Aplikacji, wydamy aktualizację i powiadomimy użytkowników za pośrednictwem Aplikacji lub strony internetowej.

**Strona Internetowa:** Nasi podmiotowie przetwarzający (Supabase, Resend) utrzymują własne protokoły powiadamiania o naruszeniach. W mało prawdopodobnym przypadku naruszenia wpływającego na Twój adres e-mail z listy oczekujących powiadomimy Cię oraz odpowiedni organ nadzorczy (ANSPDCP) w ciągu 72 godzin, zgodnie z wymaganiami GDPR.

## 16. Zmiany w tej polityce

Możemy aktualizować niniejszą Politykę Prywatności, aby odzwierciedlić zmiany funkcjonalności lub obowiązujących przepisów. Data „Ostatnia aktualizacja" zostanie zaktualizowana. Istotne zmiany będą komunikowane za pośrednictwem Aplikacji lub strony internetowej.

## 17. Polityki prywatności stron trzecich

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics i Crashlytics — tylko za zgodą)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Hosting Strony Internetowej + analityka)
- [Supabase](https://supabase.com/privacy) (Baza danych Strony Internetowej)
- [Resend](https://resend.com/legal/privacy-policy) (E-mail Strony Internetowej)

## 18. Skontaktuj się z nami

**Coc Lorand Adrian P.F.A.** (działający jako Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
E-mail: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Strona internetowa: [https://sweeptrack.pro](https://sweeptrack.pro)

W sprawie zapytań związanych z GDPR możesz również skontaktować się z ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) pod adresem [dataprotection.ro](https://www.dataprotection.ro).

---

Niniejsza Polityka Prywatności obowiązuje od 12 maja 2026 r. i ma zastosowanie do wszystkich wersji SweepTrack Pro.
