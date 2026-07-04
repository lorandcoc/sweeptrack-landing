# Gizlilik Politikası

**SweepTrack Pro** — Metal Arama için GPS Takip Uygulaması

Yürürlük Tarihi: 12 Mayıs 2026 · Son Güncelleme: 3 Temmuz 2026

İşleten: "Loriba" ticari adıyla faaliyet gösteren Coc Lorand-Adrian P.F.A.

CUI: 41299288 · Reg. F24/646/2019

Web sitesi: sweeptrack.pro

---

## 1. Giriş

Bu Gizlilik Politikası, SweepTrack Pro'nun ("Uygulama") ve sweeptrack.pro web sitesinin ("Web Sitesi") bilgilerinizi nasıl topladığını, kullandığını, sakladığını ve koruduğunu açıklar. Gizliliğinizi korumayı ve veri uygulamalarımız hakkında şeffaflık sağlamayı taahhüt ediyoruz.

Uygulama, **önce gizlilik (privacy-first) mimarisi** ile tasarlanmıştır: kaydettiğiniz arama verileriniz — oturumlar, buluntular, kasa girişleri — yerel olarak cihazınızda saklanır, bunları satmıyoruz ve sizi profillemek için kullanmıyoruz. Bazı veriler cihazınızdan yalnızca Bölüm 3.2, 3.3 ve 3.5'te açıklanan, kullanıcı tarafından başlatılan işlevler için ayrılır: gerçek zamanlı API özellikleri, isteğe bağlı yedekleme, isteğe bağlı tanılama, isteğe bağlı geri bildirim ve — bir grup oluşturmayı veya bir gruba katılmayı seçerseniz — Radar özelliğinin bütün amacı olan isteğe bağlı Canlı Grup konum paylaşımı. Web Sitesi ayrı çalışır ve Bölüm 4'te açıklanan kendi veri uygulamalarına sahiptir.

## 2. Veri Sorumlusu

AB Genel Veri Koruma Yönetmeliği (GDPR) ve Romanya veri koruma yasası (Yasa 190/2018) amaçları doğrultusunda, veri sorumlusu şudur:

**Coc Lorand-Adrian P.F.A.** (Loriba olarak faaliyet gösteren)  
CUI: 41299288 · Reg. F24/646/2019  
E-posta: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Topladığımız Veriler (Android Uygulaması)

### 3.1 Cihazınızda yerel olarak saklanan veriler

Aşağıdaki veriler sizin tarafınızdan oluşturulur ve **yalnızca cihazınızda** saklanır. Açıkça paylaşmadığınız sürece bu verilere asla erişimimiz olmaz.

**Konum ve oturum verileri:**

- Aktif takip oturumları sırasında GPS koordinatları (enlem, boylam)
- Cihaz sensörlerinden hız, irtifa, rota ve doğruluk değerleri
- Oturum meta verileri: ad, tarih, başlangıç/bitiş saati, süre, mesafe, etiketler
- Zaman damgalı yol koordinatları
- Konum adları (ters geocoding ile elde edilen)

**Buluntu ve keşif kayıtları:**

- Buluntu türü (Hazine, Altın, Madeni Para, Eser, Mücevher, Çöp, Sınıflandırılmamış/Hızlı Bırakma)
- Buluntu konumu (kayıt anındaki GPS koordinatları)
- İsteğe bağlı meta veriler: ad, notlar, derinlik, tahmini değer, ağırlık
- Medya ekleri: fotoğraflar, ses kayıtları ve video kayıtları

**İzin kasası verileri:**

- Saha adları ve konumları
- Arazi sahibi adları ve iletişim bilgileri
- İzin numaraları, veriliş tarihleri, son kullanma tarihleri
- Saha sınır koordinatları (poligon)
- Dijital imzalar (SVG biçimi)
- Özel etiketler ve notlar

**Ara noktalar:** Kullanıcı tarafından yerleştirilen harita işaretçileri — koordinatlar, ad, kategori ve isteğe bağlı notlar.

**Diğer yerel veriler:** Dedektör ön ayar yapılandırmaları, uygulama tercihleri (tema, birimler, dil, harita ayarları) ve oturumlarla ilişkili hava durumu anlık görüntüleri.

### 3.2 Geçici olarak işlenen veriler (saklanmaz)

Aşağıdaki veriler gerçek zamanlı işlevsellik için üçüncü taraf API'lerine gönderilir ve **anlık istek dışında bizim veya bu hizmetler tarafından saklanmaz**:

- Hava durumu tahminleri ve irtifa verileri için Open-Meteo'ya gönderilen yaklaşık GPS koordinatları
- Ters geocoding için Android'in platform geocoder'ı (çoğu cihazda Google Play Services tarafından sağlanır) aracılığıyla yer adlarına çözümlenen koordinatlar — oturumları ve buluntuları bir yer adıyla etiketlemek için kullanılır
- Gelgit tahminleri için NOAA'ya gönderilen gelgit istasyonu tanımlayıcıları (ABD kıyı istasyonları)
- Open-Meteo Geocoding'e gönderilen konum arama sorguları
- Harita döşemesi (tile) istekleri (görüntülediğiniz haritanın yaklaşık alanını açığa çıkarır) etkin harita türünün döşeme sağlayıcısına gönderilir: Esri/ArcGIS (uydu görüntüleri ve USGS topografik haritaları), OpenStreetMap ve OpenTopoMap (çevrimdışı/indirilebilir harita paketleri) ve — Romanya tarihi "Eski Harita" katmanı için — geo-spatial.org'dan (eHarta) döşemeler getiren, Cloudflare üzerinde işlettiğimiz bir önbellekleme proxy'si. Varsayılan Google harita tabanı, Bölüm 3.3'teki Google Maps SDK kapsamındadır

### 3.3 Üçüncü taraf hizmetleri tarafından işlenen veriler

**Google Maps SDK:** Cihazınızın konumu, harita gösterimi için Google Maps tarafından işlenir. [Google Gizlilik Politikası'na](https://policies.google.com/privacy) tabidir.

**Google Sign-In ve Google Drive (isteğe bağlı):** Google Drive yedeklemesini etkinleştirirseniz, kimliği doğrulanmış hesabı tanımlamak için Google hesabınızın e-posta adresi yerel olarak saklanır. Yedekleme verileri kendi Google Drive hesabınıza yüklenir. Google Drive'ınıza erişimimiz yoktur.

**RevenueCat (Abonelik Yönetimi):** Abonelik doğrulaması için anonim, rastgele oluşturulmuş bir uygulama kullanıcı tanımlayıcısı kullanılır. Hiçbir kişisel bilgi paylaşılmaz. [RevenueCat Gizlilik Politikası'na](https://www.revenuecat.com/privacy) tabidir.

**Firebase Analytics ve Crashlytics (İsteğe Bağlı — varsayılan olarak devre dışı):** İki Google Firebase SDK'sı Uygulamaya entegre edilmiştir, ancak **ikisi de siz açıkça onay verene kadar pasif kalır** — ilk açılıştaki onay isteği veya **Ayarlar → Gizlilik → Tanılama** menüsü aracılığıyla. Onay verene kadar hiçbir olay gönderilmez ve hiçbir çökme raporu yüklenmez. Onayınızı istediğiniz zaman geri çekebilirsiniz; geri çekme bir sonraki olaydan itibaren geçerli olur. Hata ayıklama derlemeleri Crashlytics'i asla etkinleştirmez.

Etkinleştirildiğinde:

- **Firebase Analytics**, kimlik bilgisi içermeyen parametrelerle sekiz toplu olay adını kaydeder: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Olay içerikleri **asla** GPS koordinatları, adresler, buluntu adları, fotoğraflar, ses kayıtları, kasa verileri veya kişiyi tanımlamaya yarayan başka herhangi bir bilgi içermez — yalnızca sayaçlar, süreler, mesafeler, buluntu türü (yalnızca kategori) ve özellik tanımlayıcıları. `find_logged` olayı türü, belirli buluntu türü yerine kaba bir kategori olarak bildirir (`valuable`, `find`, `trash`, `unsorted` veya tanınmayan herhangi bir tür için `other`), böylece toplu gösterge paneli, bireysel bir kullanıcının kaydettiği değerli eşyaların dağılımını çıkaramaz.
- **Firebase Crashlytics**, hataları teşhis etmemize yardımcı olmak için cihaz modeli, işletim sistemi sürümü ve uygulama sürümü ile birlikte çökme yığın izlerini yükler. Herhangi bir çökme veya kritik olmayan hata Crashlytics'e iletilmeden önce, Uygulama **istisna mesajından koordinat şeklindeki alt dizeleri temizler** (örneğin `lat=`/`lon=` desenleri, üç veya daha fazla ondalık basamağa sahip işaretli ondalık sayılar), böylece yerel değişkenlerde tutulan GPS konumları hata raporlama yoluyla sızamaz. Yığın çerçeveleri (sınıf, yöntem, satır) gruplama için korunur; çalışma zamanı değerleri korunmaz. Süreç çapında bir yakalanmamış istisna işleyicisi, SDK tarafından otomatik olarak yakalanan kritik çökmelere de aynı temizliği uygular.

Her iki hizmet de [Google Gizlilik Politikası'na](https://policies.google.com/privacy) ve [Firebase gizlilik ve güvenlik açıklamalarına](https://firebase.google.com/support/privacy) tabidir.

**Uygulama içi geri bildirim (isteğe bağlı):** Uygulamanın geri bildirim formu aracılığıyla geri bildirim gönderirseniz, Uygulama girdiğiniz bilgileri — mesajınızı, seçilen kategoriyi ve bunun bir hata raporu mu yoksa bir özellik önerisi mi olduğunu — cihaz modeliniz, Android sürümünüz, uygulama sürümünüz ve yerel ayarınızla birlikte ve **yalnızca sağlamayı seçerseniz e-posta adresinizle** birlikte, okuyup yanıt verebilmemiz için işlettiğimiz bir Supabase Edge Function'a iletir. Formu göndermediğiniz sürece hiçbir şey gönderilmez. Supabase, Inc. veri işleyicimiz olarak hareket eder (AB bölgesi). [Supabase Gizlilik Politikası'na](https://supabase.com/privacy) tabidir.

### 3.4 Uygulamanın TOPLAMADIĞI Veriler

- **Uygulama** adınızı, telefon numaranızı veya herhangi bir kişisel tanımlayıcıyı toplamaz — uygulama içi geri bildirim gönderirken isteğe bağlı olarak girdiğiniz bir e-posta adresi hariç (Bölüm 3.3'e bakın)
- **Uygulama**, siz açıkça onay vermediğiniz sürece analitik veya çökme raporlaması kullanmaz (yukarıdaki Firebase bölümüne bakın; varsayılan olarak devre dışıdır ve istediğiniz zaman Ayarlar → Gizlilik → Tanılama menüsünden geri alınabilir)
- **Uygulama** reklam çerçeveleri veya reklam tanımlayıcıları kullanmaz
- **Uygulama** kullanım modellerini, oturum sıklığını veya özellik kullanımını izlemez
- **Uygulama** kullanıcı profilleri veya davranışsal parmak izleri oluşturmaz
- **Uygulama** verilerinizi satmaz, kiralamaz veya takas etmez ve yalnızca sizin başlattığınız durumlarda paylaşır: Bölüm 3.2'deki gerçek zamanlı API çağrıları, isteğe bağlı Google Drive yedeklemesi, opt-in Firebase tanılaması, isteğe bağlı Canlı Grup konum paylaşımı (Bölüm 3.5) ve göndermeyi seçtiğiniz geri bildirim (Bölüm 3.3)
- **Uygulama**, kaydettiğiniz arama verilerinizi (oturumlar, buluntular, kasa girişleri) saklayan sunucular işletmez — kontrol ettiğiniz bir istisna dışında: isteğe bağlı Canlı Grup özelliği (Bölüm 3.5), o grupta bulunduğunuz süre boyunca, Google'ın Firebase Realtime Database'i aracılığıyla canlı konumunuzu oluşturduğunuz veya katıldığınız bir grupla paylaşır. Canlı Grup dışında, işlettiğimiz bir sunucuya ulaşan tek içerik göndermeyi seçtiğiniz geri bildirimdir (Bölüm 3.3)

Web Sitesi veri uygulamaları ayrı olarak Bölüm 4'te ele alınır.

### 3.5 Canlı Grup konum paylaşımı (isteğe bağlı — Radar özelliği)

SweepTrack Pro, ana haritadaki RADAR düğmesinden erişilen canlı bir grup konumlandırma özelliği olan **Radar**'ı içerir. Bir **grup oluşturmadığınız veya bir gruba katılmadığınız** sürece kapalı kalır. Bir grup oluşturmak (barındırmak) bir Pro özelliğidir; bir gruba katılmak ücretsizdir. Bir grupta bulunduğunuz sürece, aşağıdakiler Google'ın **Firebase Realtime Database**'ine iletilir ve gerçek zamanlı olarak aynı grubun diğer üyelerine görünür kılınır:

- **Görünen adınız** — seçtiğiniz bir ad; gerçek adınız olması gerekmez.
- **Kesin konumunuz** — doğruluk ve yön ile GPS enlemi ve boylamı, grupta bulunduğunuz süre boyunca güncellenir (ücretsiz katmanda yaklaşık her 30 saniyede bir, abonelikle daha sık ve bir SOS sırasında her birkaç saniyede bir).
- **Durumunuz** — çevrimiçi, duraklatılmış veya sabit ve bir **SOS** tetikleyip tetiklemediğiniz (o andaki konumunuz dahil).
- **Cihaz pil seviyeniz, harita işaretçi renginiz ve simgeniz** ve oluşturduğunuz herhangi bir **paylaşılan ara nokta, ping veya üs/toplanma noktası**; her biri görünen adınız ve koordinatlarınızla etiketlenir.

**Bunu kimler görebilir:** yalnızca grubun üyeleri. Grubun katılım kodu veya QR'ına sahip olan herkes katılabilir ve canlı haritayı görebilir, bu nedenle bir kodu yalnızca konumunuzu paylaşmayı düşündüğünüz kişilerle paylaşın. Erişim, sunucu tarafı güvenlik kurallarıyla uygulanır; bir kişinin konumları okuyabilmesi için önce gruba katılması (kendisinin de görünür hale gelmesi) gerekir.

**Kimlik doğrulama:** grup arka ucu **Firebase Anonymous Authentication** kullanır — adınıza, e-postanıza, telefon numaranıza veya Google hesabınıza bağlı olmayan, uygulama kurulumunuz için rastgele bir tanımlayıcı.

**Ne kadar süreyle saklanır:** grup konum verileri geçicidir. Bir grup **sona erer** (genellikle yaklaşık 12 saat sonra; deneme grupları daha erken), ardından yeni konumları kabul etmeyi bırakır ve artık katılınamaz. Bir gruptan ayrılmak, üye kaydınızı hemen siler ve son üye ayrıldığında grup silinir. Bir grup, kimse ayrılmadan terk edilirse, sona ermeden önce paylaşılan son konumlar, silinene kadar sona ermiş grupta saklı kalır. Sunucularımızda hareketlerinizin uzun vadeli bir geçmişini tutmayız ve istediğiniz zaman silme talep edebilirsiniz (Bölüm 18).

Bağımsız ücretsiz yardımcı uygulamanın kendi, daha ayrıntılı açıklaması [SweepTrack Radar Gizlilik Politikası'nda](https://sweeptrack.pro/privacy-radar) bulunur.

## 4. Web Sitesi Veri Uygulamaları (sweeptrack.pro)

Bu bölüm sweeptrack.pro web sitemize özgü veri uygulamalarını kapsar. Bölüm 3 ve 5–18'de açıklanan Android Uygulaması bağımsız olarak çalışır ve Web Sitesi ile altyapı paylaşmaz.

### 4.1 Bekleme listesi için e-posta toplama

Web Sitesi'ndeki bir kayıt formu aracılığıyla e-postanızı gönderdiğinizde şunları topluyoruz:

- Sağladığınız **e-posta adresi**
- Kayıt **zaman damgası**
- **IP adresi** (geçici) — hız sınırlaması için kullanılır; isteğin süresi dışında saklanmaz

**Amaç:** SweepTrack Pro'nun Google Play'de yayınlandığında size bildirmek ve ürün ile Founder's Lifetime teklifi hakkında lansman öncesi güncellemeler göndermek. E-postanızı başka herhangi bir amaç için kullanmayacağız, paylaşmayacağız ve satmayacağız.

**Yasal dayanak (GDPR):** Onay (Madde 6(1)(a)) — formu gönderdiğinizde verilir.

**Saklama:** E-posta adresleri AB'de (İrlanda bölgesi) barındırılan bir Supabase Postgres veritabanında saklanır. Supabase, Inc. standart Veri İşleme Sözleşmeleri kapsamında veri işleyicimiz olarak hareket eder.

**E-posta teslimi:** Giden e-postalar, standart Veri İşleme Sözleşmeleri kapsamında e-posta servis işleyicimiz olarak hareket eden Resend, Inc. (AB bölgesi, İrlanda) aracılığıyla gönderilir.

**Saklama süresi:** Aboneliği iptal edene kadar veya SweepTrack Pro'nun Google Play'deki genel lansmanından 12 ay sonrasına kadar, hangisi önce olursa.

**Aboneliği iptal etme:** Gönderdiğimiz herhangi bir e-postaya "remove" yazarak yanıt verin veya e-posta istemcinizin görüntülediği List-Unsubscribe bağlantısını kullanın (Gmail ve Outlook bunu Kimden adresinin yanında gösterir).

**Haklarınız:** Erişim, düzeltme, silme, kısıtlama, taşınabilirlik ve onayı geri çekme hakkı. Bunlardan herhangi birini kullanmak için [support@sweeptrack.pro](mailto:support@sweeptrack.pro) adresine e-posta gönderin.

### 4.2 Web Sitesi Analitiği

Web Sitesi şunları kullanır:

- **Vercel Analytics** — çerez kullanmayan ve bireysel IP adreslerini saklamayan gizliliğe saygılı analitik. Yalnızca toplu sayfa görüntülemelerini ölçer.
- **Vercel Speed Insights** — Core Web Vitals ölçümü (sayfa yükleme süresi, düzen kayması, etkileşim gecikmeleri) toplu olarak.

Her iki araç da Vercel Inc. tarafından işletilir ve [Vercel'in Gizlilik Politikası'na](https://vercel.com/legal/privacy-policy) tabidir. Kişisel olarak tanımlanabilir bilgi toplamaz ve kullanıcı profilleri oluşturmazlar.

### 4.3 Çerezler

Web Sitesi, izleme, reklam veya profil oluşturma için birinci taraf çerezleri ayarlamaz. Vercel Analytics tasarım gereği çerezsizdir. Bir dil tercihi, eğer değiştirirseniz, tarayıcınızın `localStorage`'ında saklanır (çerez değildir) ve yalnızca kendi tarayıcınız tarafından okunabilir.

### 4.4 Barındırma ve sunucu günlükleri

Web Sitesi Vercel Inc. tarafından barındırılır. Vercel, operasyonel, performans ve güvenlik amaçları için standart istek meta verilerini (IP adresi, kullanıcı aracısı, istek yolu, zaman damgası) otomatik olarak günlüğe kaydedebilir. Bu günlükler Vercel'in standart politikalarına göre saklanır ve bizim tarafımızdan bireyleri izleme veya profil oluşturma için kullanılmaz.

### 4.5 Web Sitesi verileri için haklarınız

Bölüm 10'da açıklanan aynı GDPR, UK GDPR, Avustralya, Kanada, CCPA, LGPD ve NZ Privacy Act hakları, Web Sitesi tarafından toplanan verilerinize de eşit olarak uygulanır. Bekleme listesi e-postanızla ilgili herhangi bir hakkı kullanmak için [support@sweeptrack.pro](mailto:support@sweeptrack.pro) ile iletişime geçin. 30 gün içinde yanıt vereceğiz.

## 5. İşlemenin yasal dayanağı (GDPR)

- **GPS/oturum verileri, buluntu kayıtları, kasa girişleri:** Onay (Madde 6(1)(a)) — bu işlemleri aktif olarak başlatırsınız
- **API çağrıları (hava durumu, geocoding, harita döşemeleri):** Meşru menfaat (Madde 6(1)(f)) — temel işlevsellik için gereklidir
- **Google Drive yedeklemesi:** Onay (Madde 6(1)(a)) — açıkça etkinleştirir ve kimlik doğrularsınız
- **Abonelik doğrulaması:** Sözleşmenin ifası (Madde 6(1)(b)) — ücretli özellikler sağlamak için gereklidir
- **Firebase Analytics ve Crashlytics (isteğe bağlı):** Onay (Madde 6(1)(a)) — ilk açılıştaki istem veya Ayarlar üzerinden etkinleştirilir, istediğiniz zaman geri alınabilir
- **Canlı Grup konum paylaşımı (isteğe bağlı):** Onay (Madde 6(1)(a)) — bir grubu aktif olarak oluşturur veya bir gruba katılırsınız; paylaşım etkinken bir ön plan bildirimi gösterilir; gruptan ayrılarak veya özelliği kapatarak geri çekilir
- **Uygulama içi geri bildirim (isteğe bağlı):** Onay (Madde 6(1)(a)) — yalnızca geri bildirim formunu gönderdiğinizde gönderilir
- **Bekleme listesi e-postası (Web Sitesi):** Onay (Madde 6(1)(a)) — Bölüm 4.1'e bakın

İlgili etkinliği durdurarak, Uygulamayı kaldırarak veya Web Sitesi e-postalarından aboneliği iptal ederek onayınızı istediğiniz zaman geri çekebilirsiniz.

## 6. Verilerinizi nasıl kullanırız

Neredeyse tüm Uygulama veri işleme **cihazınızda yerel olarak** gerçekleşir. Uygulama verilerini yalnızca Uygulamanın özelliklerini sağlamak için kullanırız: harita gösterimi, oturum takibi, buluntu kaydı, izin yönetimi, hava durumu/gelgit verileri, dışa aktarımlar, yedekleme ve abonelik doğrulaması. Veriler cihazınızdan yalnızca Bölüm 3.2 ve 3.3'teki, kullanıcı tarafından başlatılan işlevler için ayrılır (gerçek zamanlı API'ler, isteğe bağlı yedekleme, isteğe bağlı tanılama, isteğe bağlı geri bildirim).

Web Sitesi verileri (bekleme listesi e-postanız) yalnızca Bölüm 4'te açıklanan lansman ve lansman öncesi iletişimleri göndermek için kullanılır.

## 7. Veri depolama ve güvenlik

**Uygulama verileri:**

- Oturum ve buluntu verileri, cihazınızdaki Uygulamanın yalıtılmış özel depolama alanındaki bir Room (SQLite) veritabanında saklanır — Android'in uygulama yalıtım modeli ve cihazın bekleyen kullanıcı verisi şifrelemesi tarafından korunur
- Desteklenen cihazlarda, hassas tercihler ve İzin Kasası verileri, Android Keystore ile desteklenen Android'in EncryptedSharedPreferences (AES-256) özelliğini kullanır. Bir cihazda Keystore veya EncryptedSharedPreferences kullanılamıyorsa, Uygulama uygulamaya özel (yalıtılmış) depolamaya geri döner ve bu verilerin o cihazda ayrıca şifrelenmediğine dair kalıcı bir uygulama içi uyarı gösterir
- Medya dosyaları, diğer uygulamalar tarafından erişilemeyen Uygulamanın özel dahili depolama alanında saklanır
- Android bulut yedeklemesi, istemsiz veri ifşasını önlemek için **devre dışı bırakılmıştır** (`android:allowBackup="false"`)
- Google Drive yedeklemeleri HTTPS/TLS üzerinden iletilir ve yalnızca kendi hesabınızda saklanır. Bir yedeklemeyi isteğe bağlı olarak bir parola ile koruyabilirsiniz; bu, arşivi yüklemeden önce cihazınızda şifreler (AES-256-GCM), böylece parolanız olmadan okunamaz
- Gönderdiğiniz isteğe bağlı uygulama içi geri bildirim, HTTPS/TLS üzerinden bir Supabase Edge Function'a (AB bölgesi) iletilir

Uygulama için, kaydettiğiniz arama verilerinizi saklayan herhangi bir sunucu işletmiyoruz. Tek istisna, bir grupta bulunduğunuz süre boyunca geçici, otomatik olarak sona eren grup konum verilerini Google'ın Firebase'inde tutan isteğe bağlı Canlı Grup özelliğidir (Bölüm 3.5).

**Web Sitesi verileri:** Bekleme listesi e-postaları AB'de (İrlanda) barındırılan bir Supabase Postgres veritabanında saklanır. Bağlantılar şifrelenmiştir (TLS). Erişim yalnızca yönetimsel amaçlarla kısıtlanmıştır. Giden e-posta, TLS üzerinden Resend (AB, İrlanda) aracılığıyla gönderilir. Bölüm 4'e bakın.

## 8. Veri saklama

**Uygulama verileri:** Yerel veriler, silmeyi seçene kadar saklanır. Uygulamadaki tek tek öğeleri silebilir, Android Ayarları aracılığıyla tüm verileri temizleyebilir veya Uygulamayı kaldırabilirsiniz. Google Drive yedeklemeleri, hesabınızdan manuel olarak silene kadar kalır.

**Web Sitesi verileri:** Bekleme listesi e-postaları, aboneliği iptal edene kadar veya genel lansmandan 12 ay sonrasına kadar, hangisi önce olursa, saklanır. Bundan sonra adresler Supabase veritabanından silinir.

## 9. Veri paylaşımı ve açıklama

Kişisel verilerinizi satmıyoruz, kiralamıyoruz veya takas etmiyoruz. Dışa aktarımlar (GPX, KML, CSV, JSON), oturum paylaşım kartları, Google Drive yedeklemesi veya bir Radar grubunda canlı konum paylaşımı (Bölüm 3.5) yoluyla Uygulama verilerini paylaşmayı seçebilirsiniz — tümü kullanıcı tarafından başlatılır. Uygulama içi geri bildirim gönderirseniz, bu bizim adımıza Supabase tarafından işlenir (Bölüm 3.3'e bakın). Web Sitesi bekleme listesi verileri yalnızca Bölüm 4'te açıklanan amaçlar için belirtilen işleyicilerimiz (Supabase, Resend) tarafından işlenir.

## 10. Haklarınız (GDPR ve uluslararası)

### GDPR Hakları (AB/AEA Sakinleri)

- **Erişim** — Uygulama verileriniz cihazınızda tam olarak erişilebilir; Web Sitesi verileri için [support@sweeptrack.pro](mailto:support@sweeptrack.pro) adresine e-posta gönderin
- **Düzeltme** — tüm kayıtları doğrudan Uygulamada düzenleyin veya Web Sitesi veri düzeltmeleri için bize e-posta gönderin
- **Silme** — uygulama içi silme veya kaldırma yoluyla silin; Web Sitesi verileri için aboneliği iptal edin veya bize e-posta gönderin
- **Kısıtlama** — özellikleri başlatarak/durdurarak tüm işlemeyi kontrol edin
- **Veri Taşınabilirliği** — Uygulama verilerini GPX, KML, CSV, JSON yoluyla dışa aktarın
- **İtiraz** — herhangi bir özelliği istediğiniz zaman durdurun
- **Onayı Geri Çekme** — önceki işlemeyi etkilemeden istediğiniz zaman

### Birleşik Krallık (UK GDPR)

UK GDPR ve 2018 Veri Koruma Yasası kapsamındaki haklarınız yukarıdaki GDPR haklarına eşdeğerdir. [ICO](https://ico.org.uk) ile iletişime geçebilirsiniz.

### Avustralya (Privacy Act 1988)

Erişim ve düzeltme dahil olmak üzere Avustralya Gizlilik İlkeleri (APP'ler) kapsamında haklarınız vardır. [OAIC](https://www.oaic.gov.au) ile iletişime geçebilirsiniz.

### Kanada (PIPEDA)

Erişim, düzeltme ve onay geri çekme dahil olmak üzere PIPEDA ve geçerli eyalet gizlilik mevzuatı kapsamında haklarınız vardır. [Kanada Gizlilik Komiseri Ofisi](https://www.priv.gc.ca) ile iletişime geçebilirsiniz.

### Kaliforniya Sakinleri (CCPA/CPRA)

Herhangi bir kişisel bilgiyi **satmıyor veya paylaşmıyoruz**. Verileri bağlam içermeyen davranışsal reklamcılık için kullanmıyoruz. Bilme, silme, hassas veri kullanımını sınırlama ve ayrımcılık yapılmaması haklarına sahipsiniz.

### Brezilya Sakinleri (LGPD)

Lei Geral de Proteção de Dados kapsamında eşdeğer haklar geçerlidir. [ANPD](https://www.gov.br/anpd) ile iletişime geçebilirsiniz.

### Yeni Zelanda (Privacy Act 2020)

Erişim ve düzeltme dahil olmak üzere Privacy Act 2020 kapsamında haklarınız vardır. [NZ Gizlilik Komiseri](https://www.privacy.org.nz) ile iletişime geçebilirsiniz.

### Diğer yargı bölgeleri

Konumunuzdan bağımsız olarak, verileriniz üzerinde tam kontrole sahipsiniz. Yerel yasanın sözleşmeyle feragat edilemeyen ek gizlilik hakları verdiği durumlarda, bu haklar geçerlidir.

## 11. Çocukların gizliliği

Ne Uygulama ne de Web Sitesi 18 yaşın altındaki çocuklara yöneliktir. Uygulamanın hedef kullanıcısı yetişkin bir define arayıcısıdır; birçok özellik (izin kasası, arazi sahibi sözleşmeleri, dijital imzalar, ücretli abonelikler) çoğu yetki alanında yetişkin yasal statüsü gerektirir. 18 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamayız. Bir çocuğun Uygulamayı veya Web Sitesini kullandığını düşünüyorsanız, Uygulama verilerini temizleyerek, kaldırarak veya bekleme listesi aboneliğini iptal ederek verilerini silebilirsiniz.

## 12. İzinler açıklaması (Uygulama)

- **ACCESS_FINE_LOCATION** — oturumlar sırasında yol takibi için GPS
- **ACCESS_COARSE_LOCATION** — hassas GPS kullanılamadığında yaklaşık konum yedeği
- **FOREGROUND_SERVICE / FOREGROUND_SERVICE_LOCATION** — GPS izleyicinin bir ön plan hizmeti olarak çalışmasını sağlar, böylece aktif oturumlar sırasında ekran kapalıyken takip devam eder
- **CAMERA** — buluntu kaydı için fotoğraf çekme
- **RECORD_AUDIO** — buluntular için ses notları kaydetme
- **READ/WRITE_CALENDAR** — kasa izinlerinin son kullanma tarihi hatırlatıcılarını cihazınızın yerel takvimine yazar. Android'de bir bulut takvimiyle senkronizasyonu etkinleştirdiyseniz (örneğin Google Calendar senkronizasyonu), bu hatırlatıcılar takviminizin geri kalanıyla birlikte hesabınıza senkronize edilir — bu senkronizasyonu Uygulama değil, Android ayarlarınız kontrol eder
- **INTERNET** — hava durumu, geocoding, gelgitler, haritalar, abonelikler, isteğe bağlı geri bildirim
- **ACCESS_NETWORK_STATE** — ağ çağrıları yapmadan önce çevrimdışı durumu algılama
- **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS** — sistemin uzun oturumlar sırasında GPS izleyiciyi sonlandırmasını önleme
- **POST_NOTIFICATIONS** — GPS takip bildirimi
- **VIBRATE** — çevre koruyucu sınır uyarıları

Android Ayarları aracılığıyla herhangi bir izni istediğiniz zaman iptal edebilirsiniz.

## 13. Çerezler ve izleme

**Uygulama** çerez, web işaretçisi, piksel etiketi, cihaz parmak izi veya başka herhangi bir izleme teknolojisi kullanmaz. **Web Sitesi** birinci taraf çerezleri ayarlamaz; tam Web Sitesi çerez bildirimi için Bölüm 4.3'e bakın.

## 14. Uluslararası veri aktarımları

**Uygulama verileri:** Tüm arama verileri cihazınızda yerel olarak saklandığından, kontrolümüz altında uluslararası veri aktarımları gerçekleşmez. Üçüncü taraflara yapılan API çağrıları (Bölüm 3.2), isteğe bağlı Google Drive yedeklemesi, isteğe bağlı Firebase tanılaması, isteğe bağlı Canlı Grup konum paylaşımı (Bölüm 3.5, Google'ın Firebase'i aracılığıyla) ve isteğe bağlı geri bildirim, bu hizmetlerin faaliyet gösterdiği yargı bölgelerinde işlenebilir.

**Web Sitesi verileri:** Bekleme listesi e-postaları Supabase tarafından AB'de (İrlanda) saklanır ve Resend (AB, İrlanda) tarafından işlenir. Web Sitesine AB dışından erişiyorsanız, e-postanız işleme için AB'ye aktarılır.

## 15. Veri ihlali bildirimi

**Uygulama:** Kaydettiğiniz arama verileriniz, işlettiğimiz sunucularda değil, cihazınızda saklanır, bu nedenle altyapımızın ihlaliyle ifşa edilmez. Tek istisna, isteğe bağlı Canlı Grup özelliğidir (Bölüm 3.5): bir grupta bulunduğunuz süre boyunca, canlı konumunuz Google'ın Firebase'inde geçici olarak tutulur ve sunucu tarafı kurallarla erişimi o grubun üyeleriyle sınırlandırılır. Uygulamada bir güvenlik açığından haberdar olursak, bir güncelleme yayınlayacak ve kullanıcıları Uygulama veya web sitesi aracılığıyla bilgilendireceğiz. Gönderdiğiniz isteğe bağlı geri bildirim, işleyicimiz Supabase tarafından kendi ihlal bildirim protokolleri kapsamında tutulur.

**Web Sitesi:** İşleyicilerimiz (Supabase, Resend) kendi ihlal bildirim protokollerini sürdürür. Bekleme listesi e-postanızı etkileyen bir ihlalin olası olmayan durumunda, GDPR'nin gerektirdiği şekilde 72 saat içinde sizi ve ilgili denetim makamını (ANSPDCP) bilgilendireceğiz.

## 16. Bu politikadaki değişiklikler

Bu Gizlilik Politikasını işlevsellik veya geçerli yasalardaki değişiklikleri yansıtmak için güncelleyebiliriz. "Son Güncelleme" tarihi revize edilecektir. Önemli değişiklikler Uygulama veya web sitesi aracılığıyla bildirilecektir.

## 17. Üçüncü taraf gizlilik politikaları

- [Google (Maps, Drive, Sign-In, platform geocoder)](https://policies.google.com/privacy)
- [Firebase (Analytics ve Crashlytics — yalnızca opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [OpenTopoMap](https://opentopomap.org/about)
- [Esri/ArcGIS](https://www.esri.com/en-us/privacy/overview)
- [eHarta / geo-spatial.org](https://www.geo-spatial.org)
- [Cloudflare](https://www.cloudflare.com/privacypolicy/) (tarihi harita döşeme proxy'si)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Web Sitesi barındırma + analitik)
- [Supabase](https://supabase.com/privacy) (Web Sitesi veritabanı + uygulama içi geri bildirim)
- [Resend](https://resend.com/legal/privacy-policy) (Web Sitesi e-posta)

## 18. Bize ulaşın

**Coc Lorand-Adrian P.F.A.** (Loriba olarak faaliyet gösteren)  
CUI: 41299288 · Reg. F24/646/2019  
E-posta: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Web sitesi: [https://sweeptrack.pro](https://sweeptrack.pro)

GDPR ile ilgili sorularınız için, ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) ile [dataprotection.ro](https://www.dataprotection.ro) adresinden de iletişime geçebilirsiniz.

---

Bu Gizlilik Politikası 12 Mayıs 2026 tarihinde yürürlüğe girer ve SweepTrack Pro'nun tüm sürümleri için geçerlidir.
