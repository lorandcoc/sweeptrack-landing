# Informativa sulla Privacy

**SweepTrack Pro** — Applicazione di monitoraggio GPS per la ricerca di metalli

Data di entrata in vigore: 12 maggio 2026 · Ultimo aggiornamento: 12 maggio 2026

Gestito da: Coc Lorand Adrian P.F.A., operante come "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Sito web: sweeptrack.pro

---

## 1. Introduzione

La presente Informativa sulla Privacy spiega come SweepTrack Pro ("l'App") e il sito web sweeptrack.pro ("il Sito Web") raccolgono, utilizzano, memorizzano e proteggono le informazioni dell'utente. Ci impegniamo a proteggere la vostra privacy e a garantire la trasparenza delle nostre pratiche relative ai dati.

L'App è progettata con un'**architettura orientata alla privacy**: tutti i dati di rilevamento sono memorizzati localmente sul vostro dispositivo, non gestiamo server backend per l'App e non raccogliamo, trasmettiamo o vendiamo i vostri dati personali di rilevamento. Il Sito Web opera separatamente e ha le proprie pratiche relative ai dati, descritte nella Sezione 4.

## 2. Titolare del Trattamento dei Dati

Ai fini del Regolamento Generale sulla Protezione dei Dati dell'UE (GDPR) e della legge rumena sulla protezione dei dati (Legge 190/2018), il titolare del trattamento dei dati è:

**Coc Lorand Adrian P.F.A.** (operante come Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Dati che Raccogliamo (App Android)

### 3.1 Dati memorizzati localmente sul vostro dispositivo

I seguenti dati sono creati da voi e memorizzati **esclusivamente sul vostro dispositivo**. Non abbiamo mai accesso a questi dati a meno che non li condividiate esplicitamente.

**Dati di posizione e sessione:**

- Coordinate GPS (latitudine, longitudine) durante le sessioni di monitoraggio attive
- Velocità, altitudine, direzione e precisione dei sensori del dispositivo
- Metadati della sessione: nome, data, ora di inizio/fine, durata, distanza, tag
- Coordinate del percorso con timestamp
- Nomi delle località (ottenuti tramite geocodifica inversa)

**Registrazioni di ritrovamenti:**

- Tipo di ritrovamento (Tesoro, Oro, Moneta, Reliquia, Gioiello, Rifiuti)
- Posizione del ritrovamento (coordinate GPS al momento della registrazione)
- Metadati opzionali: nome, note, profondità, valore stimato, peso
- Allegati multimediali: fotografie e registrazioni audio

**Dati del caveau dei permessi:**

- Nomi e posizioni dei siti
- Nomi dei proprietari dei terreni e informazioni di contatto
- Numeri di permesso, date di emissione, date di scadenza
- Coordinate dei limiti del sito (poligono)
- Firme digitali (formato SVG)
- Tag e note personalizzati

**Altri dati locali:** Configurazioni delle preimpostazioni del rilevatore, preferenze dell'app (tema, unità, lingua, impostazioni della mappa) e istantanee meteorologiche associate alle sessioni.

### 3.2 Dati elaborati temporaneamente (non memorizzati)

I seguenti dati vengono inviati ad API di terze parti per funzionalità in tempo reale e **non sono memorizzati da noi o da questi servizi oltre la richiesta immediata**:

- Coordinate GPS approssimative inviate a Open-Meteo per previsioni meteo e dati di altitudine
- Coordinate GPS approssimative inviate a OpenStreetMap/Nominatim per la ricerca di indirizzi
- Coordinate GPS approssimative inviate a Overpass API per la scoperta di punti di interesse storici nelle vicinanze
- Coordinate GPS approssimative inviate a Wikipedia API per la ricerca geografica di articoli nelle vicinanze
- Identificatori delle stazioni di marea inviati a NOAA per le previsioni delle maree
- Query di ricerca della posizione inviate a Open-Meteo Geocoding

### 3.3 Dati elaborati da servizi di terze parti

**Google Maps SDK:** La posizione del vostro dispositivo è elaborata da Google Maps per la visualizzazione della mappa. Soggetta alla [Politica sulla Privacy di Google](https://policies.google.com/privacy).

**Google Sign-In e Google Drive (Opzionale):** Se abilitate il backup di Google Drive, l'indirizzo email del vostro account Google viene memorizzato localmente per identificare l'account autenticato. I dati di backup sono caricati nel vostro account Google Drive. Non abbiamo accesso al vostro Google Drive.

**RevenueCat (Gestione abbonamenti):** Un identificativo utente anonimo, generato casualmente, è utilizzato per la verifica dell'abbonamento. Nessuna informazione personale viene condivisa. Soggetta alla [Politica sulla Privacy di RevenueCat](https://www.revenuecat.com/privacy).

**Firebase Analytics e Crashlytics (Opzionale — disattivati per impostazione predefinita):** Due SDK Google Firebase sono integrati nell'App, ma **entrambi restano inattivi finché non optate esplicitamente** tramite la richiesta di consenso al primo avvio o da **Impostazioni → Privacy → Diagnostica**. Finché non date il consenso, nessun evento viene inviato e nessun rapporto di errore viene caricato. Potete revocare il consenso in qualsiasi momento; la revoca ha effetto dall'evento successivo. Le build di debug non attivano mai Crashlytics.

Quando attivati:

- **Firebase Analytics** registra otto nomi di eventi aggregati con parametri non identificativi: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Il contenuto degli eventi **non include mai** coordinate GPS, indirizzi, nomi di ritrovamenti, fotografie, registrazioni audio, dati del caveau o altre informazioni di identificazione personale — solo conteggi, durate, distanze, tipo di ritrovamento (la sola categoria) e identificatori di funzionalità.
- **Firebase Crashlytics** carica le tracce di stack degli arresti anomali insieme al modello del dispositivo, alla versione del sistema operativo e alla versione dell'app per aiutarci a diagnosticare i bug.

Entrambi i servizi sono soggetti alla [Politica sulla Privacy di Google](https://policies.google.com/privacy) e alle [informative su privacy e sicurezza di Firebase](https://firebase.google.com/support/privacy).

### 3.4 Dati che l'App NON Raccoglie

- **L'App** non raccoglie il vostro nome, email, numero di telefono o qualsiasi identificativo personale
- **L'App** non utilizza analisi o segnalazione errori a meno che non optiate esplicitamente (vedere la sezione Firebase sopra; disattivato per impostazione predefinita e revocabile in qualsiasi momento in Impostazioni → Privacy → Diagnostica)
- **L'App** non utilizza framework pubblicitari o identificativi pubblicitari
- **L'App** non traccia modelli di utilizzo, frequenza delle sessioni o utilizzo delle funzionalità
- **L'App** non crea profili utente o impronte digitali comportamentali
- **L'App** non condivide, vende, affitta o scambia dati con terze parti
- **L'App** non gestisce server che ricevono, elaborano o memorizzano i vostri dati di rilevamento

Le pratiche relative ai dati del Sito Web sono trattate separatamente nella Sezione 4.

## 4. Pratiche relative ai dati del Sito Web (sweeptrack.pro)

Questa sezione tratta le pratiche relative ai dati specifiche del nostro sito web sweeptrack.pro. L'App Android descritta nelle Sezioni 3 e 5–18 opera in modo indipendente e non condivide l'infrastruttura con il Sito Web.

### 4.1 Raccolta di email per la lista d'attesa

Quando inviate la vostra email tramite un modulo di iscrizione sul Sito Web, raccogliamo:

- **Indirizzo email** che fornite
- **Timestamp** dell'iscrizione
- **Indirizzo IP** (transitorio) — utilizzato per la limitazione del tasso; non memorizzato oltre la durata della richiesta

**Scopo:** Notificarvi quando SweepTrack Pro sarà lanciato su Google Play e inviarvi aggiornamenti pre-lancio sul prodotto e sull'offerta Founder's Lifetime. Non utilizzeremo la vostra email per altri scopi, non la condivideremo e non la venderemo.

**Base giuridica (GDPR):** Consenso (Art. 6(1)(a)) — fornito quando inviate il modulo.

**Memorizzazione:** Gli indirizzi email sono memorizzati in un database Supabase Postgres ospitato nell'UE (regione Irlanda). Supabase, Inc. agisce come nostro responsabile del trattamento dei dati ai sensi del loro Accordo Standard sul Trattamento dei Dati.

**Consegna delle email:** Le email in uscita sono inviate tramite Resend, Inc. (regione UE, Irlanda) che agisce come nostro responsabile del servizio email ai sensi del loro Accordo Standard sul Trattamento dei Dati.

**Conservazione:** Fino alla cancellazione dell'iscrizione, o 12 mesi dopo il lancio pubblico di SweepTrack Pro su Google Play, a seconda di quale evento si verifichi per primo.

**Cancellazione:** Rispondete con "remove" a qualsiasi email che vi inviamo, o utilizzate il link List-Unsubscribe che il vostro client di posta visualizza (Gmail e Outlook lo mostrano accanto all'indirizzo Mittente).

**I vostri diritti:** Accesso, rettifica, cancellazione, limitazione, portabilità e diritto di revocare il consenso. Inviate un'email a [support@sweeptrack.pro](mailto:support@sweeptrack.pro) per esercitare uno di questi diritti.

### 4.2 Analisi del Sito Web

Il Sito Web utilizza:

- **Vercel Analytics** — analisi rispettose della privacy che non utilizzano cookie e non memorizzano indirizzi IP individuali. Misurano solo visualizzazioni di pagina aggregate.
- **Vercel Speed Insights** — misurazione dei Core Web Vitals (tempo di caricamento della pagina, spostamento del layout, ritardi di interazione) su base aggregata.

Entrambi gli strumenti sono gestiti da Vercel Inc. e soggetti alla [Politica sulla Privacy di Vercel](https://vercel.com/legal/privacy-policy). Non raccolgono informazioni di identificazione personale e non creano profili utente.

### 4.3 Cookie

Il Sito Web non imposta cookie di prima parte per il tracciamento, la pubblicità o la profilazione. Vercel Analytics è privo di cookie per progettazione. Una preferenza di lingua, se la modificate, è memorizzata nel `localStorage` del vostro browser (non un cookie) ed è leggibile solo dal vostro browser.

### 4.4 Hosting e log del server

Il Sito Web è ospitato da Vercel Inc. Vercel può registrare automaticamente i metadati di richiesta standard (indirizzo IP, user agent, percorso della richiesta, timestamp) per scopi operativi, di prestazioni e di sicurezza. Questi log sono conservati secondo le politiche standard di Vercel e non sono utilizzati da noi per il tracciamento o la profilazione degli individui.

### 4.5 I vostri diritti per i dati del Sito Web

Gli stessi diritti GDPR, UK GDPR, australiani, canadesi, CCPA, LGPD e NZ Privacy Act descritti nella Sezione 10 si applicano allo stesso modo ai vostri dati raccolti dal Sito Web. Per esercitare un diritto relativo alla vostra email della lista d'attesa, contattate [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Risponderemo entro 30 giorni.

## 5. Base giuridica del trattamento (GDPR)

- **Dati GPS/sessione, registrazioni di ritrovamenti, voci del caveau:** Consenso (Art. 6(1)(a)) — iniziate attivamente queste azioni
- **Chiamate API (meteo, geocodifica):** Interesse legittimo (Art. 6(1)(f)) — necessario per la funzionalità di base
- **Backup di Google Drive:** Consenso (Art. 6(1)(a)) — abilitate e autenticate esplicitamente
- **Verifica dell'abbonamento:** Esecuzione del contratto (Art. 6(1)(b)) — necessaria per fornire le funzionalità a pagamento
- **Firebase Analytics e Crashlytics (opzionale):** Consenso (Art. 6(1)(a)) — attivato tramite la richiesta al primo avvio o dalle Impostazioni, revocabile in qualsiasi momento
- **Email della lista d'attesa (Sito Web):** Consenso (Art. 6(1)(a)) — vedere Sezione 4.1

Potete revocare il consenso in qualsiasi momento interrompendo l'attività pertinente, disinstallando l'App o cancellando l'iscrizione dalle email del Sito Web.

## 6. Come utilizziamo i vostri dati

Tutta l'elaborazione dei dati dell'App avviene **localmente sul vostro dispositivo**. Utilizziamo i dati dell'App esclusivamente per fornire le funzionalità dell'App: visualizzazione della mappa, monitoraggio delle sessioni, registrazione dei ritrovamenti, gestione dei permessi, dati meteo/maree, esportazioni, backup e verifica dell'abbonamento.

I dati del Sito Web (la vostra email della lista d'attesa) sono utilizzati solo per inviare le comunicazioni di lancio e pre-lancio descritte nella Sezione 4.

## 7. Memorizzazione e sicurezza dei dati

**Dati dell'App:**

- I dati delle sessioni e dei ritrovamenti sono memorizzati in un database Room crittografato sul vostro dispositivo
- Le preferenze sensibili utilizzano EncryptedSharedPreferences (AES-256) di Android
- I file multimediali sono memorizzati nello storage interno privato dell'App, inaccessibile ad altre applicazioni
- Il backup cloud di Android è **disabilitato** (`android:allowBackup="false"`) per prevenire l'esposizione involontaria dei dati
- I backup di Google Drive utilizzano le API crittografate di Google (HTTPS/TLS) ed esistono solo nel vostro account

Per l'App, non gestiamo server, database o infrastruttura cloud che memorizzano i vostri dati di rilevamento.

**Dati del Sito Web:** Le email della lista d'attesa sono memorizzate in un database Supabase Postgres ospitato nell'UE (Irlanda). Le connessioni sono crittografate (TLS). L'accesso è limitato a scopi amministrativi. L'email in uscita è inviata tramite Resend (UE, Irlanda) tramite TLS. Vedere Sezione 4.

## 8. Conservazione dei dati

**Dati dell'App:** I dati locali sono conservati fino a quando non scegliete di eliminarli. Potete eliminare singoli elementi all'interno dell'App, cancellare tutti i dati tramite le Impostazioni Android o disinstallare l'App. I backup di Google Drive persistono fino a quando non li eliminate manualmente dal vostro account.

**Dati del Sito Web:** Le email della lista d'attesa sono conservate fino alla cancellazione dell'iscrizione, o 12 mesi dopo il lancio pubblico, a seconda di quale evento si verifichi per primo. Dopodiché, gli indirizzi vengono eliminati dal database Supabase.

## 9. Condivisione e divulgazione dei dati

Non condividiamo, vendiamo, affittiamo o divulghiamo i vostri dati personali a terze parti. Potete scegliere di condividere i dati dell'App tramite esportazioni (GPX, KML, CSV, JSON), carte di condivisione della sessione o backup di Google Drive — tutti iniziati dall'utente. I dati della lista d'attesa del Sito Web sono elaborati solo dai nostri responsabili nominati (Supabase, Resend) per gli scopi descritti nella Sezione 4.

## 10. I vostri diritti (GDPR e internazionali)

### Diritti GDPR (Residenti UE/SEE)

- **Accesso** — i vostri dati dell'App sono completamente accessibili sul vostro dispositivo; per i dati del Sito Web, inviate un'email a [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Rettifica** — modificate tutti i record direttamente nell'App, o inviateci un'email per correzioni dei dati del Sito Web
- **Cancellazione** — eliminate tramite cancellazione nell'app o disinstallazione; per i dati del Sito Web, cancellate l'iscrizione o inviateci un'email
- **Limitazione** — controllate tutto il trattamento avviando/interrompendo le funzionalità
- **Portabilità dei dati** — esportate i dati dell'App tramite GPX, KML, CSV, JSON
- **Opposizione** — interrompete qualsiasi funzionalità in qualsiasi momento
- **Revoca del Consenso** — in qualsiasi momento senza pregiudicare il trattamento precedente

### Regno Unito (UK GDPR)

I vostri diritti ai sensi dell'UK GDPR e del Data Protection Act 2018 sono equivalenti ai diritti GDPR sopra elencati. Potete contattare l'[ICO](https://ico.org.uk).

### Australia (Privacy Act 1988)

Avete diritti ai sensi degli Australian Privacy Principles (APPs), inclusi l'accesso e la correzione. Potete contattare l'[OAIC](https://www.oaic.gov.au).

### Canada (PIPEDA)

Avete diritti ai sensi del PIPEDA e della legislazione provinciale applicabile in materia di privacy, inclusi l'accesso, la correzione e la revoca del consenso. Potete contattare l'[Ufficio del Commissario per la Privacy del Canada](https://www.priv.gc.ca).

### Residenti della California (CCPA/CPRA)

**Non** vendiamo né condividiamo informazioni personali. Non utilizziamo i dati per la pubblicità comportamentale tra contesti. Avete diritti di conoscere, eliminare, limitare l'uso dei dati sensibili e di non discriminazione.

### Residenti brasiliani (LGPD)

Si applicano diritti equivalenti ai sensi della Lei Geral de Proteção de Dados. Potete contattare l'[ANPD](https://www.gov.br/anpd).

### Nuova Zelanda (Privacy Act 2020)

Avete diritti ai sensi del Privacy Act 2020, inclusi l'accesso e la correzione. Potete contattare il [Commissario per la Privacy NZ](https://www.privacy.org.nz).

### Altre giurisdizioni

Indipendentemente dalla vostra posizione, avete il pieno controllo sui vostri dati. Dove la legge locale concede ulteriori diritti sulla privacy che non possono essere rinunciati per contratto, tali diritti si applicano.

## 11. Privacy dei minori

Né l'App né il Sito Web sono diretti ai minori di 16 anni. Non raccogliamo consapevolmente informazioni personali da minori di 16 anni. Se ritenete che un minore abbia utilizzato l'App o il Sito Web, potete eliminare i suoi dati cancellando i dati dell'App, disinstallando o cancellando l'iscrizione dalla lista d'attesa.

## 12. Autorizzazioni spiegate (App)

- **ACCESS_FINE_LOCATION** — GPS per il monitoraggio del percorso durante le sessioni
- **ACCESS_BACKGROUND_LOCATION** — continuare il monitoraggio quando lo schermo è spento
- **CAMERA** — catturare foto per la registrazione dei ritrovamenti
- **RECORD_AUDIO** — registrare note audio per i ritrovamenti
- **READ/WRITE_CALENDAR** — scrive i promemoria di scadenza dei permessi del caveau nel calendario locale del vostro dispositivo. Se avete attivato la sincronizzazione con un calendario nel cloud in Android (ad esempio, sincronizzazione di Google Calendar), tali promemoria verranno sincronizzati con il vostro account insieme al resto del calendario — quella sincronizzazione è controllata dalle vostre impostazioni Android, non dall'App
- **INTERNET** — meteo, geocodifica, maree, mappe, abbonamenti
- **POST_NOTIFICATIONS** — notifica di monitoraggio GPS
- **VIBRATE** — avvisi di limite della guardia perimetrale

Potete revocare qualsiasi autorizzazione in qualsiasi momento tramite le Impostazioni Android.

## 13. Cookie e tracciamento

**L'App** non utilizza cookie, web beacon, etichette pixel, fingerprinting del dispositivo o altre tecnologie di tracciamento. **Il Sito Web** non imposta cookie di prima parte; vedere Sezione 4.3 per la divulgazione completa dei cookie del Sito Web.

## 14. Trasferimenti internazionali di dati

**Dati dell'App:** Poiché tutti i dati di rilevamento sono memorizzati localmente sul vostro dispositivo, non si verificano trasferimenti internazionali di dati sotto il nostro controllo. Le chiamate API a terze parti possono essere elaborate nelle giurisdizioni in cui operano tali servizi.

**Dati del Sito Web:** Le email della lista d'attesa sono memorizzate nell'UE (Irlanda) da Supabase ed elaborate da Resend (UE, Irlanda). Se accedete al Sito Web dall'esterno dell'UE, la vostra email viene trasferita nell'UE per l'elaborazione.

## 15. Notifica di violazione dei dati

**App:** Poiché non memorizziamo i vostri dati di rilevamento su nessun server che gestiamo, una violazione dei dati che riguarda i dati dell'App da parte nostra non è possibile. Se veniamo a conoscenza di una vulnerabilità nell'App, rilasceremo un aggiornamento e notificheremo gli utenti tramite l'App o il sito web.

**Sito Web:** I nostri responsabili (Supabase, Resend) mantengono i propri protocolli di notifica delle violazioni. Nell'improbabile caso di una violazione che riguardi la vostra email della lista d'attesa, vi notificheremo voi e l'autorità di controllo competente (ANSPDCP) entro 72 ore come richiesto dal GDPR.

## 16. Modifiche a questa politica

Possiamo aggiornare questa Informativa sulla Privacy per riflettere modifiche nella funzionalità o nelle leggi applicabili. La data "Ultimo aggiornamento" sarà rivista. Le modifiche sostanziali saranno comunicate tramite l'App o il sito web.

## 17. Politiche sulla Privacy di terze parti

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics e Crashlytics — solo opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Hosting Sito Web + analisi)
- [Supabase](https://supabase.com/privacy) (Database Sito Web)
- [Resend](https://resend.com/legal/privacy-policy) (Email Sito Web)

## 18. Contattateci

**Coc Lorand Adrian P.F.A.** (operante come Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Sito web: [https://sweeptrack.pro](https://sweeptrack.pro)

Per domande relative al GDPR, potete anche contattare l'ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) a [dataprotection.ro](https://www.dataprotection.ro).

---

La presente Informativa sulla Privacy è in vigore dal 12 maggio 2026 e si applica a tutte le versioni di SweepTrack Pro.
