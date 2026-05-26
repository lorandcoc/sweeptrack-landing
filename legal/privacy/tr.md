# Gizlilik Politikası

**SweepTrack Pro** — Metal Arama için GPS Takip Uygulaması

Yürürlük Tarihi: 12 Mayıs 2026 · Son Güncelleme: 26 Mayıs 2026

İşleten: "Loriba" ticari adıyla faaliyet gösteren Coc Lorand Adrian P.F.A.

CUI: 41299288 · Reg. F24/646/2019

Web sitesi: sweeptrack.pro

---

## 1. Giriş

Bu Gizlilik Politikası, SweepTrack Pro'nun ("Uygulama") ve sweeptrack.pro web sitesinin ("Web Sitesi") bilgilerinizi nasıl topladığını, kullandığını, sakladığını ve koruduğunu açıklar. Gizliliğinizi korumayı ve veri uygulamalarımız hakkında şeffaflık sağlamayı taahhüt ediyoruz.

Uygulama, **önce gizlilik (privacy-first) mimarisi** ile tasarlanmıştır: tüm arama verileri yerel olarak cihazınızda saklanır, Uygulama için arka uç sunucuları işletmiyoruz ve kişisel arama verilerinizi toplamıyoruz, iletmiyoruz veya satmıyoruz. Web Sitesi ayrı çalışır ve Bölüm 4'te açıklanan kendi veri uygulamalarına sahiptir.

## 2. Veri Sorumlusu

AB Genel Veri Koruma Yönetmeliği (GDPR) ve Romanya veri koruma yasası (Yasa 190/2018) amaçları doğrultusunda, veri sorumlusu şudur:

**Coc Lorand Adrian P.F.A.** (Loriba olarak faaliyet gösteren)  
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

- Buluntu türü (Hazine, Altın, Madeni Para, Eser, Mücevher, Çöp)
- Buluntu konumu (kayıt anındaki GPS koordinatları)
- İsteğe bağlı meta veriler: ad, notlar, derinlik, tahmini değer, ağırlık
- Medya ekleri: fotoğraflar ve ses kayıtları

**İzin kasası verileri:**

- Saha adları ve konumları
- Arazi sahibi adları ve iletişim bilgileri
- İzin numaraları, veriliş tarihleri, son kullanma tarihleri
- Saha sınır koordinatları (poligon)
- Dijital imzalar (SVG biçimi)
- Özel etiketler ve notlar

**Diğer yerel veriler:** Dedektör ön ayar yapılandırmaları, uygulama tercihleri (tema, birimler, dil, harita ayarları) ve oturumlarla ilişkili hava durumu anlık görüntüleri.

### 3.2 Geçici olarak işlenen veriler (saklanmaz)

Aşağıdaki veriler gerçek zamanlı işlevsellik için üçüncü taraf API'lerine gönderilir ve **anlık istek dışında bizim veya bu hizmetler tarafından saklanmaz**:

- Hava durumu tahminleri ve irtifa verileri için Open-Meteo'ya gönderilen yaklaşık GPS koordinatları
- Adres aramaları için OpenStreetMap/Nominatim'e gönderilen yaklaşık GPS koordinatları
- Yakındaki tarihi POI keşifleri için Overpass API'ye gönderilen yaklaşık GPS koordinatları
- Yakındaki makale coğrafi araması için Wikipedia API'ye gönderilen yaklaşık GPS koordinatları
- Gelgit tahminleri için NOAA'ya gönderilen gelgit istasyonu tanımlayıcıları
- Open-Meteo Geocoding'e gönderilen konum arama sorguları

### 3.3 Üçüncü taraf hizmetleri tarafından işlenen veriler

**Google Maps SDK:** Cihazınızın konumu, harita gösterimi için Google Maps tarafından işlenir. [Google Gizlilik Politikası'na](https://policies.google.com/privacy) tabidir.

**Google Sign-In ve Google Drive (isteğe bağlı):** Google Drive yedeklemesini etkinleştirirseniz, kimliği doğrulanmış hesabı tanımlamak için Google hesabınızın e-posta adresi yerel olarak saklanır. Yedekleme verileri kendi Google Drive hesabınıza yüklenir. Google Drive'ınıza erişimimiz yoktur.

**RevenueCat (Abonelik Yönetimi):** Abonelik doğrulaması için anonim, rastgele oluşturulmuş bir uygulama kullanıcı tanımlayıcısı kullanılır. Hiçbir kişisel bilgi paylaşılmaz. [RevenueCat Gizlilik Politikası'na](https://www.revenuecat.com/privacy) tabidir.

**Firebase Analytics ve Crashlytics (İsteğe Bağlı — varsayılan olarak devre dışı):** İki Google Firebase SDK'sı Uygulamaya entegre edilmiştir, ancak **ikisi de siz açıkça onay verene kadar pasif kalır** — ilk açılıştaki onay isteği veya **Ayarlar → Gizlilik → Tanılama** menüsü aracılığıyla. Onay verene kadar hiçbir olay gönderilmez ve hiçbir çökme raporu yüklenmez. Onayınızı istediğiniz zaman geri çekebilirsiniz; geri çekme bir sonraki olaydan itibaren geçerli olur. Hata ayıklama derlemeleri Crashlytics'i asla etkinleştirmez.

Etkinleştirildiğinde:

- **Firebase Analytics**, kimlik bilgisi içermeyen parametrelerle sekiz toplu olay adını kaydeder: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Olay içerikleri **asla** GPS koordinatları, adresler, buluntu adları, fotoğraflar, ses kayıtları, kasa verileri veya kişiyi tanımlamaya yarayan başka herhangi bir bilgi içermez — yalnızca sayaçlar, süreler, mesafeler, buluntu türü (yalnızca kategori) ve özellik tanımlayıcıları.
- **Firebase Crashlytics**, hataları teşhis etmemize yardımcı olmak için cihaz modeli, işletim sistemi sürümü ve uygulama sürümü ile birlikte çökme yığın izlerini yükler. Herhangi bir çökme veya kritik olmayan hata Crashlytics'e iletilmeden önce, Uygulama **istisna mesajından koordinat şeklindeki alt dizeleri temizler** (örneğin `lat=`/`lon=` desenleri, üç veya daha fazla ondalık basamağa sahip işaretli ondalık sayılar), böylece yerel değişkenlerde tutulan GPS konumları hata raporlama yoluyla sızamaz. Yığın çerçeveleri (sınıf, yöntem, satır) gruplama için korunur; çalışma zamanı değerleri korunmaz. Süreç çapında bir yakalanmamış istisna işleyicisi, SDK tarafından otomatik olarak yakalanan kritik çökmelere de aynı temizliği uygular.

Her iki hizmet de [Google Gizlilik Politikası'na](https://policies.google.com/privacy) ve [Firebase gizlilik ve güvenlik açıklamalarına](https://firebase.google.com/support/privacy) tabidir.

### 3.4 Uygulamanın TOPLAMADIĞI Veriler

- **Uygulama** adınızı, e-postanızı, telefon numaranızı veya herhangi bir kişisel tanımlayıcıyı toplamaz
- **Uygulama**, siz açıkça onay vermediğiniz sürece analitik veya çökme raporlaması kullanmaz (yukarıdaki Firebase bölümüne bakın; varsayılan olarak devre dışıdır ve istediğiniz zaman Ayarlar → Gizlilik → Tanılama menüsünden geri alınabilir)
- **Uygulama** reklam çerçeveleri veya reklam tanımlayıcıları kullanmaz
- **Uygulama** kullanım modellerini, oturum sıklığını veya özellik kullanımını izlemez
- **Uygulama** kullanıcı profilleri veya davranışsal parmak izleri oluşturmaz
- **Uygulama** üçüncü taraflarla veri paylaşmaz, satmaz, kiralamaz veya takas etmez
- **Uygulama** arama verilerinizi alan, işleyen veya saklayan sunucular işletmez

Web Sitesi veri uygulamaları ayrı olarak Bölüm 4'te ele alınır.

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
- **API çağrıları (hava durumu, geocoding):** Meşru menfaat (Madde 6(1)(f)) — temel işlevsellik için gereklidir
- **Google Drive yedeklemesi:** Onay (Madde 6(1)(a)) — açıkça etkinleştirir ve kimlik doğrularsınız
- **Abonelik doğrulaması:** Sözleşmenin ifası (Madde 6(1)(b)) — ücretli özellikler sağlamak için gereklidir
- **Firebase Analytics ve Crashlytics (isteğe bağlı):** Onay (Madde 6(1)(a)) — ilk açılıştaki istem veya Ayarlar üzerinden etkinleştirilir, istediğiniz zaman geri alınabilir
- **Bekleme listesi e-postası (Web Sitesi):** Onay (Madde 6(1)(a)) — Bölüm 4.1'e bakın

İlgili etkinliği durdurarak, Uygulamayı kaldırarak veya Web Sitesi e-postalarından aboneliği iptal ederek onayınızı istediğiniz zaman geri çekebilirsiniz.

## 6. Verilerinizi nasıl kullanırız

Tüm Uygulama veri işleme **cihazınızda yerel olarak** gerçekleşir. Uygulama verilerini yalnızca Uygulamanın özelliklerini sağlamak için kullanırız: harita gösterimi, oturum takibi, buluntu kaydı, izin yönetimi, hava durumu/gelgit verileri, dışa aktarımlar, yedekleme ve abonelik doğrulaması.

Web Sitesi verileri (bekleme listesi e-postanız) yalnızca Bölüm 4'te açıklanan lansman ve lansman öncesi iletişimleri göndermek için kullanılır.

## 7. Veri depolama ve güvenlik

**Uygulama verileri:**

- Oturum ve buluntu verileri, cihazınızdaki Uygulamanın yalıtılmış özel depolama alanındaki bir Room (SQLite) veritabanında saklanır — Android'in uygulama yalıtım modeli ve cihazın bekleyen kullanıcı verisi şifrelemesi tarafından korunur
- Hassas tercihler Android'in EncryptedSharedPreferences (AES-256) özelliğini kullanır
- Medya dosyaları, diğer uygulamalar tarafından erişilemeyen Uygulamanın özel dahili depolama alanında saklanır
- Android bulut yedeklemesi, istemsiz veri ifşasını önlemek için **devre dışı bırakılmıştır** (`android:allowBackup="false"`)
- Google Drive yedeklemeleri Google'ın şifrelenmiş API'lerini (HTTPS/TLS) kullanır ve yalnızca hesabınızda bulunur

Uygulama için arama verilerinizi depolayan herhangi bir sunucu, veritabanı veya bulut altyapısı işletmiyoruz.

**Web Sitesi verileri:** Bekleme listesi e-postaları AB'de (İrlanda) barındırılan bir Supabase Postgres veritabanında saklanır. Bağlantılar şifrelenmiştir (TLS). Erişim yalnızca yönetimsel amaçlarla kısıtlanmıştır. Giden e-posta, TLS üzerinden Resend (AB, İrlanda) aracılığıyla gönderilir. Bölüm 4'e bakın.

## 8. Veri saklama

**Uygulama verileri:** Yerel veriler, silmeyi seçene kadar saklanır. Uygulamadaki tek tek öğeleri silebilir, Android Ayarları aracılığıyla tüm verileri temizleyebilir veya Uygulamayı kaldırabilirsiniz. Google Drive yedeklemeleri, hesabınızdan manuel olarak silene kadar kalır.

**Web Sitesi verileri:** Bekleme listesi e-postaları, aboneliği iptal edene kadar veya genel lansmandan 12 ay sonrasına kadar, hangisi önce olursa, saklanır. Bundan sonra adresler Supabase veritabanından silinir.

## 9. Veri paylaşımı ve açıklama

Kişisel verilerinizi herhangi bir üçüncü tarafla paylaşmıyoruz, satmıyoruz, kiralamıyoruz veya açıklamıyoruz. Dışa aktarımlar (GPX, KML, CSV, JSON), oturum paylaşım kartları veya Google Drive yedeklemesi yoluyla Uygulama verilerini paylaşmayı seçebilirsiniz — tümü kullanıcı tarafından başlatılır. Web Sitesi bekleme listesi verileri yalnızca Bölüm 4'te açıklanan amaçlar için belirtilen işleyicilerimiz (Supabase, Resend) tarafından işlenir.

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
- **ACCESS_BACKGROUND_LOCATION** — ekran kapalıyken takibe devam etme
- **CAMERA** — buluntu kaydı için fotoğraf çekme
- **RECORD_AUDIO** — buluntular için ses notları kaydetme
- **READ/WRITE_CALENDAR** — kasa izinlerinin son kullanma tarihi hatırlatıcılarını cihazınızın yerel takvimine yazar. Android'de bir bulut takvimiyle senkronizasyonu etkinleştirdiyseniz (örneğin Google Calendar senkronizasyonu), bu hatırlatıcılar takviminizin geri kalanıyla birlikte hesabınıza senkronize edilir — bu senkronizasyonu Uygulama değil, Android ayarlarınız kontrol eder
- **INTERNET** — hava durumu, geocoding, gelgitler, haritalar, abonelikler
- **POST_NOTIFICATIONS** — GPS takip bildirimi
- **VIBRATE** — çevre koruyucu sınır uyarıları

Android Ayarları aracılığıyla herhangi bir izni istediğiniz zaman iptal edebilirsiniz.

## 13. Çerezler ve izleme

**Uygulama** çerez, web işaretçisi, piksel etiketi, cihaz parmak izi veya başka herhangi bir izleme teknolojisi kullanmaz. **Web Sitesi** birinci taraf çerezleri ayarlamaz; tam Web Sitesi çerez bildirimi için Bölüm 4.3'e bakın.

## 14. Uluslararası veri aktarımları

**Uygulama verileri:** Tüm arama verileri cihazınızda yerel olarak saklandığından, kontrolümüz altında uluslararası veri aktarımları gerçekleşmez. Üçüncü taraflara yapılan API çağrıları, bu hizmetlerin faaliyet gösterdiği yargı bölgelerinde işlenebilir.

**Web Sitesi verileri:** Bekleme listesi e-postaları Supabase tarafından AB'de (İrlanda) saklanır ve Resend (AB, İrlanda) tarafından işlenir. Web Sitesine AB dışından erişiyorsanız, e-postanız işleme için AB'ye aktarılır.

## 15. Veri ihlali bildirimi

**Uygulama:** Arama verilerinizi işlettiğimiz herhangi bir sunucuda saklamadığımız için, tarafımızdan Uygulama verilerini etkileyen bir veri ihlali mümkün değildir. Uygulamada bir güvenlik açığından haberdar olursak, bir güncelleme yayınlayacak ve kullanıcıları Uygulama veya web sitesi aracılığıyla bilgilendireceğiz.

**Web Sitesi:** İşleyicilerimiz (Supabase, Resend) kendi ihlal bildirim protokollerini sürdürür. Bekleme listesi e-postanızı etkileyen bir ihlalin olası olmayan durumunda, GDPR'nin gerektirdiği şekilde 72 saat içinde sizi ve ilgili denetim makamını (ANSPDCP) bilgilendireceğiz.

## 16. Bu politikadaki değişiklikler

Bu Gizlilik Politikasını işlevsellik veya geçerli yasalardaki değişiklikleri yansıtmak için güncelleyebiliriz. "Son Güncelleme" tarihi revize edilecektir. Önemli değişiklikler Uygulama veya web sitesi aracılığıyla bildirilecektir.

## 17. Üçüncü taraf gizlilik politikaları

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics ve Crashlytics — yalnızca opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Web Sitesi barındırma + analitik)
- [Supabase](https://supabase.com/privacy) (Web Sitesi veritabanı)
- [Resend](https://resend.com/legal/privacy-policy) (Web Sitesi e-posta)

## 18. Bize ulaşın

**Coc Lorand Adrian P.F.A.** (Loriba olarak faaliyet gösteren)  
CUI: 41299288 · Reg. F24/646/2019  
E-posta: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Web sitesi: [https://sweeptrack.pro](https://sweeptrack.pro)

GDPR ile ilgili sorularınız için, ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) ile [dataprotection.ro](https://www.dataprotection.ro) adresinden de iletişime geçebilirsiniz.

---

Bu Gizlilik Politikası 12 Mayıs 2026 tarihinde yürürlüğe girer ve SweepTrack Pro'nun tüm sürümleri için geçerlidir.
