# Informativa sulla Privacy

**SweepTrack Pro** — Applicazione di monitoraggio GPS per la ricerca di metalli

Data di entrata in vigore: 12 maggio 2026 · Ultimo aggiornamento: 3 luglio 2026

Gestito da: Coc Lorand-Adrian P.F.A., operante come "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Sito web: sweeptrack.pro

---

## 1. Introduzione

La presente Informativa sulla Privacy spiega come SweepTrack Pro ("l'App") e il sito web sweeptrack.pro ("il Sito Web") raccolgono, utilizzano, memorizzano e proteggono le informazioni dell'utente. Ci impegniamo a proteggere la vostra privacy e a garantire la trasparenza delle nostre pratiche relative ai dati.

L'App è progettata con un'**architettura orientata alla privacy**: i vostri dati di rilevamento salvati — sessioni, ritrovamenti, voci del caveau — sono memorizzati localmente sul vostro dispositivo, non li vendiamo e non li utilizziamo per profilarvi. Alcuni dati lasciano il vostro dispositivo solo per le funzioni avviate dall'utente descritte nelle Sezioni 3.2, 3.3 e 3.5: funzionalità API in tempo reale, backup opzionale, diagnostica opzionale, feedback opzionale e — se scegliete di creare o unirvi a un gruppo — la condivisione opzionale della posizione tramite Gruppo Live, che è l'intero scopo della funzionalità Radar. Il Sito Web opera separatamente e ha le proprie pratiche relative ai dati, descritte nella Sezione 4.

## 2. Titolare del Trattamento dei Dati

Ai fini del Regolamento Generale sulla Protezione dei Dati dell'UE (GDPR) e della legge rumena sulla protezione dei dati (Legge 190/2018), il titolare del trattamento dei dati è:

**Coc Lorand-Adrian P.F.A.** (operante come Loriba)  
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

- Tipo di ritrovamento (Tesoro, Oro, Moneta, Reliquia, Gioiello, Rifiuti, Non ordinato/Inserimento rapido)
- Posizione del ritrovamento (coordinate GPS al momento della registrazione)
- Metadati opzionali: nome, note, profondità, valore stimato, peso
- Allegati multimediali: fotografie, registrazioni audio e registrazioni video

**Dati del caveau dei permessi:**

- Nomi e posizioni dei siti
- Nomi dei proprietari dei terreni e informazioni di contatto
- Numeri di permesso, date di emissione, date di scadenza
- Coordinate dei limiti del sito (poligono)
- Firme digitali (formato SVG)
- Tag e note personalizzati

**Waypoint:** Marcatori sulla mappa posizionati dall'utente — coordinate, nome, categoria e note opzionali.

**Altri dati locali:** Configurazioni delle preimpostazioni del rilevatore, preferenze dell'app (tema, unità, lingua, impostazioni della mappa) e istantanee meteorologiche associate alle sessioni.

### 3.2 Dati elaborati temporaneamente (non memorizzati)

I seguenti dati vengono inviati ad API di terze parti per funzionalità in tempo reale e **non sono memorizzati da noi o da questi servizi oltre la richiesta immediata**:

- Coordinate GPS approssimative inviate a Open-Meteo per previsioni meteo e dati di altitudine
- Coordinate risolte in nomi di luoghi tramite il geocoder della piattaforma Android (fornito da Google Play Services sulla maggior parte dei dispositivi) per la geocodifica inversa — utilizzato per etichettare sessioni e ritrovamenti con un nome di luogo
- Identificatori delle stazioni di marea inviati a NOAA per le previsioni delle maree (stazioni costiere degli Stati Uniti)
- Query di ricerca della posizione inviate a Open-Meteo Geocoding per la ricerca di nomi di luoghi
- Richieste di tessere della mappa (che rivelano l'area approssimativa della mappa che state visualizzando) inviate al fornitore di tessere del tipo di mappa attivo: Esri/ArcGIS (immagini satellitari e mappe topografiche USGS), OpenStreetMap e OpenTopoMap (pacchetti mappe offline/scaricabili) e — per la sovrapposizione storica rumena "Mappa antica" — un proxy di caching che gestiamo su Cloudflare che recupera le tessere da geo-spatial.org (eHarta). La mappa di base predefinita di Google è trattata nell'ambito di Google Maps SDK nella Sezione 3.3

### 3.3 Dati elaborati da servizi di terze parti

**Google Maps SDK:** La posizione del vostro dispositivo è elaborata da Google Maps per la visualizzazione della mappa. Soggetta alla [Politica sulla Privacy di Google](https://policies.google.com/privacy).

**Google Sign-In e Google Drive (Opzionale):** Se abilitate il backup di Google Drive, l'indirizzo email del vostro account Google viene memorizzato localmente per identificare l'account autenticato. I dati di backup sono caricati nel vostro account Google Drive. Non abbiamo accesso al vostro Google Drive.

**RevenueCat (Gestione abbonamenti):** Un identificativo utente anonimo, generato casualmente, è utilizzato per la verifica dell'abbonamento. Nessuna informazione personale viene condivisa. Soggetta alla [Politica sulla Privacy di RevenueCat](https://www.revenuecat.com/privacy).

**Firebase Analytics e Crashlytics (Opzionale — disattivati per impostazione predefinita):** Due SDK Google Firebase sono integrati nell'App, ma **entrambi restano inattivi finché non optate esplicitamente** tramite la richiesta di consenso al primo avvio o da **Impostazioni → Privacy → Diagnostica**. Finché non date il consenso, nessun evento viene inviato e nessun rapporto di errore viene caricato. Potete revocare il consenso in qualsiasi momento; la revoca ha effetto dall'evento successivo. Le build di debug non attivano mai Crashlytics.

Quando attivati:

- **Firebase Analytics** registra otto nomi di eventi aggregati con parametri non identificativi: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Il contenuto degli eventi **non include mai** coordinate GPS, indirizzi, nomi di ritrovamenti, fotografie, registrazioni audio, dati del caveau o altre informazioni di identificazione personale — solo conteggi, durate, distanze, tipi di ritrovamento (solo categoria) e identificatori di funzionalità. L'evento `find_logged` riporta il tipo come categoria approssimativa (`valuable`, `find`, `trash`, `unsorted`, oppure `other` per qualsiasi tipo non riconosciuto) anziché il tipo specifico di ritrovamento, in modo che la dashboard aggregata non possa dedurre la distribuzione degli oggetti di valore registrati da un singolo utente.
- **Firebase Crashlytics** carica le tracce di stack degli arresti anomali insieme al modello del dispositivo, alla versione del sistema operativo e alla versione dell'app per aiutarci a diagnosticare i bug. Prima che un arresto anomalo o un errore non fatale venga inoltrato a Crashlytics, l'App **rimuove dal messaggio dell'eccezione le sottostringhe con forma di coordinate** (ad esempio modelli `lat=`/`lon=`, decimali con segno aventi tre o più cifre frazionarie), in modo che le posizioni GPS memorizzate nelle variabili locali non possano trapelare attraverso la segnalazione degli errori. I frame dello stack (classe, metodo, riga) sono conservati per il raggruppamento; i valori di runtime no. Un gestore di eccezioni non rilevate a livello di processo applica la stessa pulizia agli arresti anomali fatali catturati automaticamente dall'SDK.

Entrambi i servizi sono soggetti alla [Politica sulla Privacy di Google](https://policies.google.com/privacy) e alle [informative su privacy e sicurezza di Firebase](https://firebase.google.com/support/privacy).

**Feedback nell'app (Opzionale):** Se inviate un feedback tramite il modulo di feedback dell'App, l'App trasmette le informazioni che inserite — il vostro messaggio, la categoria selezionata e se si tratta di una segnalazione di bug o di un'idea per una funzionalità — insieme al modello del vostro dispositivo, alla versione di Android, alla versione dell'app e alle impostazioni locali, e, **solo se scegliete di fornirlo, il vostro indirizzo email**, a una Edge Function di Supabase che gestiamo, in modo che possiamo leggere e rispondere. Nulla viene inviato a meno che non inviate il modulo. Supabase, Inc. agisce come nostro responsabile del trattamento dei dati (regione UE). Soggetta alla [Politica sulla Privacy di Supabase](https://supabase.com/privacy).

### 3.4 Dati che l'App NON Raccoglie

- **L'App** non raccoglie il vostro nome, numero di telefono o qualsiasi identificativo personale — ad eccezione di un indirizzo email che inserite facoltativamente quando inviate un feedback nell'app (vedere Sezione 3.3)
- **L'App** non utilizza analisi o segnalazione errori a meno che non optiate esplicitamente (vedere la sezione Firebase sopra; disattivato per impostazione predefinita e revocabile in qualsiasi momento in Impostazioni → Privacy → Diagnostica)
- **L'App** non utilizza framework pubblicitari o identificativi pubblicitari
- **L'App** non traccia modelli di utilizzo, frequenza delle sessioni o utilizzo delle funzionalità
- **L'App** non crea profili utente o impronte digitali comportamentali
- **L'App** non vende, affitta o scambia i vostri dati e li condivide solo dove siete voi a iniziare l'operazione: le chiamate API in tempo reale della Sezione 3.2, il backup opzionale di Google Drive, la diagnostica Firebase opt-in, la condivisione opzionale della posizione tramite Gruppo Live (Sezione 3.5) e il feedback che scegliete di inviare (Sezione 3.3)
- **L'App** non gestisce server che memorizzano i vostri dati di rilevamento salvati (sessioni, ritrovamenti, voci del caveau) — con un'unica eccezione che controllate voi: la funzionalità opzionale Gruppo Live (Sezione 3.5) condivide la vostra posizione in tempo reale con un gruppo che create o a cui vi unite, tramite il Firebase Realtime Database di Google, mentre siete in quel gruppo. A parte il Gruppo Live, l'unico contenuto che raggiunge un server da noi gestito è il feedback che scegliete di inviare (Sezione 3.3)

Le pratiche relative ai dati del Sito Web sono trattate separatamente nella Sezione 4.

### 3.5 Condivisione della posizione tramite Gruppo Live (opzionale — la funzionalità Radar)

SweepTrack Pro include **Radar**, una funzionalità di posizionamento di gruppo in tempo reale raggiungibile dal pulsante RADAR sulla mappa principale. Rimane disattivata finché non **create o vi unite a un gruppo**. Creare (ospitare) un gruppo è una funzionalità Pro; unirsi a un gruppo è gratuito. Mentre siete in un gruppo, i seguenti dati vengono trasmessi al **Firebase Realtime Database** di Google e resi visibili, in tempo reale, agli altri membri di quello stesso gruppo:

- **Il vostro nome visualizzato** — un nome che scegliete voi; non deve necessariamente essere il vostro vero nome.
- **La vostra posizione precisa** — latitudine e longitudine GPS con precisione e direzione, aggiornate mentre siete nel gruppo (circa ogni 30 secondi nel piano gratuito, più frequentemente con un abbonamento e ogni pochi secondi durante un SOS).
- **Il vostro stato** — online, in pausa o fermo, e se avete attivato un **SOS** (inclusa la vostra posizione in quel momento).
- **Il livello della batteria del vostro dispositivo, il colore e l'icona del marcatore sulla mappa** e qualsiasi **waypoint condiviso, ping o punto base/di raduno** che create, ciascuno etichettato con il vostro nome visualizzato e le vostre coordinate.

**Chi può vederli:** solo i membri del gruppo. Chiunque disponga del codice di adesione o del QR del gruppo può unirsi e vedere la mappa in tempo reale, quindi condividete un codice solo con le persone con cui intendete condividere la vostra posizione. L'accesso è imposto da regole di sicurezza lato server; una persona deve unirsi al gruppo (diventando essa stessa visibile) prima di poter leggere le posizioni.

**Autenticazione:** il backend del gruppo utilizza **Firebase Anonymous Authentication** — un identificatore casuale per l'installazione della vostra app, non collegato al vostro nome, email, numero di telefono o account Google.

**Per quanto tempo vengono conservati:** i dati di posizione del gruppo sono transitori. Un gruppo **scade** (in genere dopo circa 12 ore; i gruppi di prova prima), dopodiché smette di accettare nuove posizioni e non può più essere raggiunto. Uscire da un gruppo elimina immediatamente la vostra voce di membro, e il gruppo viene eliminato quando l'ultimo membro lo lascia. Se un gruppo viene abbandonato senza che nessuno lo lasci, le ultime posizioni condivise prima della scadenza rimangono memorizzate nel gruppo scaduto fino alla sua eliminazione. Non conserviamo una cronologia a lungo termine dei vostri spostamenti sui nostri server e potete richiederne l'eliminazione in qualsiasi momento (Sezione 18).

L'app companion gratuita e autonoma dispone di una propria informativa più completa nell'[Informativa sulla Privacy di SweepTrack Radar](https://sweeptrack.pro/privacy-radar).

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
- **Chiamate API (meteo, geocodifica, tessere della mappa):** Interesse legittimo (Art. 6(1)(f)) — necessario per la funzionalità di base
- **Backup di Google Drive:** Consenso (Art. 6(1)(a)) — abilitate e autenticate esplicitamente
- **Verifica dell'abbonamento:** Esecuzione del contratto (Art. 6(1)(b)) — necessaria per fornire le funzionalità a pagamento
- **Firebase Analytics e Crashlytics (opzionale):** Consenso (Art. 6(1)(a)) — attivato tramite la richiesta al primo avvio o dalle Impostazioni, revocabile in qualsiasi momento
- **Condivisione della posizione tramite Gruppo Live (opzionale):** Consenso (Art. 6(1)(a)) — create attivamente o vi unite a un gruppo, con una notifica in primo piano mostrata mentre la condivisione è attiva; revocate uscendo dal gruppo o chiudendo la funzionalità
- **Feedback nell'app (opzionale):** Consenso (Art. 6(1)(a)) — inviato solo quando inviate il modulo di feedback
- **Email della lista d'attesa (Sito Web):** Consenso (Art. 6(1)(a)) — vedere Sezione 4.1

Potete revocare il consenso in qualsiasi momento interrompendo l'attività pertinente, disinstallando l'App o cancellando l'iscrizione dalle email del Sito Web.

## 6. Come utilizziamo i vostri dati

Quasi tutta l'elaborazione dei dati dell'App avviene **localmente sul vostro dispositivo**. Utilizziamo i dati dell'App per fornire le funzionalità dell'App: visualizzazione della mappa, monitoraggio delle sessioni, registrazione dei ritrovamenti, gestione dei permessi, dati meteo/maree, esportazioni, backup e verifica dell'abbonamento. I dati lasciano il vostro dispositivo solo per le funzioni avviate dall'utente nelle Sezioni 3.2 e 3.3 (API in tempo reale, backup opzionale, diagnostica opzionale, feedback opzionale).

I dati del Sito Web (la vostra email della lista d'attesa) sono utilizzati solo per inviare le comunicazioni di lancio e pre-lancio descritte nella Sezione 4.

## 7. Memorizzazione e sicurezza dei dati

**Dati dell'App:**

- I dati delle sessioni e dei ritrovamenti sono memorizzati in un database Room (SQLite) nello spazio di archiviazione privato isolato dell'App sul vostro dispositivo — protetti dal modello di isolamento delle app di Android e dalla cifratura dei dati utente a riposo del dispositivo
- Sui dispositivi supportati, le preferenze sensibili e i dati del caveau dei permessi utilizzano EncryptedSharedPreferences (AES-256) di Android, supportato dall'Android Keystore. Se il Keystore o EncryptedSharedPreferences non è disponibile su un dispositivo, l'App ricorre all'archiviazione privata dell'app (isolata) e mostra un avviso persistente nell'app che indica che questi dati non sono cifrati separatamente su quel dispositivo
- I file multimediali sono memorizzati nello storage interno privato dell'App, inaccessibile ad altre applicazioni
- Il backup cloud di Android è **disabilitato** (`android:allowBackup="false"`) per prevenire l'esposizione involontaria dei dati
- I backup di Google Drive sono trasmessi tramite HTTPS/TLS e memorizzati esclusivamente nel vostro account. Potete facoltativamente proteggere un backup con una passphrase, che cifra l'archivio (AES-256-GCM) sul vostro dispositivo prima del caricamento, in modo che non possa essere letto senza la vostra passphrase
- Il feedback opzionale nell'app che inviate viene trasmesso tramite HTTPS/TLS a una Edge Function di Supabase (regione UE)

Per l'App, non gestiamo server che memorizzano i vostri dati di rilevamento salvati. L'unica eccezione è la funzionalità opzionale Gruppo Live (Sezione 3.5), che conserva dati di posizione del gruppo transitori e a scadenza automatica nel Firebase di Google mentre siete in un gruppo.

**Dati del Sito Web:** Le email della lista d'attesa sono memorizzate in un database Supabase Postgres ospitato nell'UE (Irlanda). Le connessioni sono crittografate (TLS). L'accesso è limitato a scopi amministrativi. L'email in uscita è inviata tramite Resend (UE, Irlanda) tramite TLS. Vedere Sezione 4.

## 8. Conservazione dei dati

**Dati dell'App:** I dati locali sono conservati fino a quando non scegliete di eliminarli. Potete eliminare singoli elementi all'interno dell'App, cancellare tutti i dati tramite le Impostazioni Android o disinstallare l'App. I backup di Google Drive persistono fino a quando non li eliminate manualmente dal vostro account.

**Dati del Sito Web:** Le email della lista d'attesa sono conservate fino alla cancellazione dell'iscrizione, o 12 mesi dopo il lancio pubblico, a seconda di quale evento si verifichi per primo. Dopodiché, gli indirizzi vengono eliminati dal database Supabase.

## 9. Condivisione e divulgazione dei dati

Non vendiamo, affittiamo o scambiamo i vostri dati personali. Potete scegliere di condividere i dati dell'App tramite esportazioni (GPX, KML, CSV, JSON), carte di condivisione della sessione, backup di Google Drive o condivisione della posizione in tempo reale in un gruppo Radar (Sezione 3.5) — tutti iniziati dall'utente. Se inviate un feedback nell'app, viene elaborato per nostro conto da Supabase (vedere Sezione 3.3). I dati della lista d'attesa del Sito Web sono elaborati solo dai nostri responsabili nominati (Supabase, Resend) per gli scopi descritti nella Sezione 4.

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

Né l'App né il Sito Web sono diretti ai minori di 18 anni. L'utente previsto dell'App è un detectorista adulto; molte funzioni (caveau dei permessi, accordi con i proprietari terrieri, firme digitali, abbonamenti a pagamento) richiedono lo status legale di adulto nella maggior parte delle giurisdizioni. Non raccogliamo consapevolmente informazioni personali da minori di 18 anni. Se ritenete che un minore abbia utilizzato l'App o il Sito Web, potete eliminare i suoi dati cancellando i dati dell'App, disinstallando o cancellando l'iscrizione dalla lista d'attesa.

## 12. Autorizzazioni spiegate (App)

- **ACCESS_FINE_LOCATION** — GPS per il monitoraggio del percorso durante le sessioni
- **ACCESS_COARSE_LOCATION** — posizione approssimativa come ripiego quando il GPS preciso non è disponibile
- **FOREGROUND_SERVICE / FOREGROUND_SERVICE_LOCATION** — mantenere attivo il tracker GPS come servizio in primo piano, in modo che il monitoraggio continui con lo schermo spento durante le sessioni attive
- **CAMERA** — catturare foto per la registrazione dei ritrovamenti
- **RECORD_AUDIO** — registrare note audio per i ritrovamenti
- **READ/WRITE_CALENDAR** — scrive i promemoria di scadenza dei permessi del caveau nel calendario locale del vostro dispositivo. Se avete attivato la sincronizzazione con un calendario nel cloud in Android (ad esempio, sincronizzazione di Google Calendar), tali promemoria verranno sincronizzati con il vostro account insieme al resto del calendario — quella sincronizzazione è controllata dalle vostre impostazioni Android, non dall'App
- **INTERNET** — meteo, geocodifica, maree, mappe, abbonamenti, feedback opzionale
- **ACCESS_NETWORK_STATE** — rilevare lo stato offline prima di effettuare chiamate di rete
- **REQUEST_IGNORE_BATTERY_OPTIMIZATIONS** — impedire al sistema di terminare il tracker GPS durante le sessioni prolungate
- **POST_NOTIFICATIONS** — notifica di monitoraggio GPS
- **VIBRATE** — avvisi di limite della guardia perimetrale

Potete revocare qualsiasi autorizzazione in qualsiasi momento tramite le Impostazioni Android.

## 13. Cookie e tracciamento

**L'App** non utilizza cookie, web beacon, etichette pixel, fingerprinting del dispositivo o altre tecnologie di tracciamento. **Il Sito Web** non imposta cookie di prima parte; vedere Sezione 4.3 per la divulgazione completa dei cookie del Sito Web.

## 14. Trasferimenti internazionali di dati

**Dati dell'App:** Poiché tutti i dati di rilevamento sono memorizzati localmente sul vostro dispositivo, non si verificano trasferimenti internazionali dei vostri dati di rilevamento sotto il nostro controllo. Le chiamate API a terze parti (Sezione 3.2), il backup opzionale di Google Drive, la diagnostica Firebase opzionale, la condivisione opzionale della posizione tramite Gruppo Live (Sezione 3.5, tramite il Firebase di Google) e il feedback opzionale possono essere elaborati nelle giurisdizioni in cui operano tali servizi.

**Dati del Sito Web:** Le email della lista d'attesa sono memorizzate nell'UE (Irlanda) da Supabase ed elaborate da Resend (UE, Irlanda). Se accedete al Sito Web dall'esterno dell'UE, la vostra email viene trasferita nell'UE per l'elaborazione.

## 15. Notifica di violazione dei dati

**App:** I vostri dati di rilevamento salvati sono memorizzati sul vostro dispositivo, non su server che gestiamo, quindi non sono esposti da una violazione della nostra infrastruttura. L'unica eccezione è la funzionalità opzionale Gruppo Live (Sezione 3.5): mentre siete in un gruppo, la vostra posizione in tempo reale è conservata in modo transitorio nel Firebase di Google, con accesso limitato dalle regole lato server ai membri di quel gruppo. Se veniamo a conoscenza di una vulnerabilità nell'App, rilasceremo un aggiornamento e notificheremo gli utenti tramite l'App o il sito web. Il feedback opzionale che inviate è conservato dal nostro responsabile del trattamento Supabase secondo i suoi protocolli di notifica delle violazioni.

**Sito Web:** I nostri responsabili (Supabase, Resend) mantengono i propri protocolli di notifica delle violazioni. Nell'improbabile caso di una violazione che riguardi la vostra email della lista d'attesa, vi notificheremo voi e l'autorità di controllo competente (ANSPDCP) entro 72 ore come richiesto dal GDPR.

## 16. Modifiche a questa politica

Possiamo aggiornare questa Informativa sulla Privacy per riflettere modifiche nella funzionalità o nelle leggi applicabili. La data "Ultimo aggiornamento" sarà rivista. Le modifiche sostanziali saranno comunicate tramite l'App o il sito web.

## 17. Politiche sulla Privacy di terze parti

- [Google (Maps, Drive, Sign-In, geocoder della piattaforma)](https://policies.google.com/privacy)
- [Firebase (Analytics e Crashlytics — solo opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [OpenTopoMap](https://opentopomap.org/about)
- [Esri/ArcGIS](https://www.esri.com/en-us/privacy/overview)
- [eHarta / geo-spatial.org](https://www.geo-spatial.org)
- [Cloudflare](https://www.cloudflare.com/privacypolicy/) (proxy tessere mappe storiche)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Hosting Sito Web + analisi)
- [Supabase](https://supabase.com/privacy) (Database Sito Web + feedback nell'app)
- [Resend](https://resend.com/legal/privacy-policy) (Email Sito Web)

## 18. Contattateci

**Coc Lorand-Adrian P.F.A.** (operante come Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Sito web: [https://sweeptrack.pro](https://sweeptrack.pro)

Per domande relative al GDPR, potete anche contattare l'ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) a [dataprotection.ro](https://www.dataprotection.ro).

---

La presente Informativa sulla Privacy è in vigore dal 12 maggio 2026 e si applica a tutte le versioni di SweepTrack Pro.
