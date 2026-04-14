# Informativa sulla Privacy

**SweepTrack Pro** — Applicazione di monitoraggio GPS per la ricerca di metalli

Data di entrata in vigore: 7 aprile 2026 · Ultimo aggiornamento: 7 aprile 2026

Gestito da: Coc Lorand P.F.A., operante come "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Sito web: sweeptrack.pro

---

## 1. Introduzione

La presente Informativa sulla Privacy spiega come SweepTrack Pro ("l'App") raccoglie, utilizza, memorizza e protegge le informazioni dell'utente. Ci impegniamo a proteggere la vostra privacy e a garantire la trasparenza delle nostre pratiche relative ai dati.

SweepTrack Pro è progettato con un'**architettura orientata alla privacy**: tutti i dati sono memorizzati localmente sul vostro dispositivo, non gestiamo server backend e non raccogliamo, trasmettiamo o vendiamo i vostri dati personali.

## 2. Titolare del Trattamento dei Dati

Ai fini del Regolamento Generale sulla Protezione dei Dati dell'UE (GDPR) e della legge rumena sulla protezione dei dati (Legge 190/2018), il titolare del trattamento dei dati è:

**Coc Lorand P.F.A.** (operante come Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Dati che Raccogliamo

### 3.1 Dati memorizzati localmente sul vostro dispositivo

I seguenti dati sono creati da voi e memorizzati **esclusivamente sul vostro dispositivo**. Non abbiamo mai accesso a questi dati a meno che non li condividiate esplicitamente.

**Dati di posizione e sessione:**

- Coordinate GPS (latitudine, longitudine) durante le sessioni di monitoraggio attive
- Valori di velocità, altitudine, direzione e precisione dei sensori del dispositivo
- Metadati della sessione: nome, data, ora di inizio/fine, durata, distanza, tag
- Coordinate del percorso con timestamp
- Nomi dei luoghi (ottenuti tramite geocodifica inversa)

**Registri di ritrovamento e scoperta:**

- Tipo di ritrovamento (Tesoro, Oro, Moneta, Reliquia, Gioiello, Rifiuti)
- Posizione del ritrovamento (coordinate GPS al momento della registrazione)
- Metadati opzionali: nome, note, profondità, valore stimato, peso
- Allegati multimediali: fotografie e registrazioni audio

**Dati della cassaforte dei permessi:**

- Nomi e posizioni dei siti
- Nomi dei proprietari terrieri e informazioni di contatto
- Numeri di permesso, date di rilascio, date di scadenza
- Coordinate dei confini del sito (poligono)
- Firme digitali (formato SVG)
- Tag e note personalizzati

**Altri dati locali:** Configurazioni dei preset del cercametalli, preferenze dell'app (tema, unità, lingua, impostazioni della mappa) e istantanee meteo associate alle sessioni.

### 3.2 Dati elaborati temporaneamente (non memorizzati)

I seguenti dati vengono inviati a servizi API di terze parti esclusivamente per la funzionalità in tempo reale e **non vengono memorizzati da noi o da questi servizi oltre la richiesta immediata**:

- Coordinate GPS approssimative inviate a Open-Meteo per previsioni meteo e dati di altitudine
- Coordinate GPS approssimative inviate a OpenStreetMap/Nominatim per la ricerca di indirizzi
- Coordinate GPS approssimative inviate a Overpass API per la scoperta di punti di interesse storici nelle vicinanze
- Coordinate GPS approssimative inviate a Wikipedia API per la ricerca geografica di articoli nelle vicinanze
- Identificatori delle stazioni di marea inviati a NOAA per le previsioni delle maree
- Query di ricerca della posizione inviate a Open-Meteo Geocoding per la ricerca di nomi di luoghi

### 3.3 Dati elaborati da servizi di terze parti

**Google Maps SDK:** La posizione del vostro dispositivo viene elaborata da Google Maps per la visualizzazione della mappa. Soggetto all'[Informativa sulla Privacy di Google](https://policies.google.com/privacy).

**Google Sign-In e Google Drive (Opzionale):** Se abilitate il backup su Google Drive, l'indirizzo email del vostro account Google viene memorizzato localmente per identificare l'account autenticato. I dati di backup vengono caricati sul vostro account Google Drive personale. Non abbiamo accesso al vostro Google Drive.

**RevenueCat (Gestione abbonamenti):** Per la verifica dell'abbonamento viene utilizzato un identificatore utente dell'app anonimo e generato casualmente. Non viene condivisa alcuna informazione personale. Soggetto all'[Informativa sulla Privacy di RevenueCat](https://www.revenuecat.com/privacy).

### 3.4 Dati che NON raccogliamo

- **Non** raccogliamo nomi, email, numeri di telefono o altri identificatori personali.
- **Non** utilizziamo SDK di analisi, segnalazione di errori o monitoraggio del comportamento.
- **Non** utilizziamo framework pubblicitari o identificatori pubblicitari.
- **Non** monitoriamo i modelli di utilizzo, la frequenza delle sessioni o l'uso delle funzioni.
- **Non** creiamo profili utente o impronte digitali comportamentali.
- **Non** condividiamo, vendiamo, noleggiamo o scambiamo dati con terze parti.
- **Non** gestiamo server che ricevono, elaborano o memorizzano i vostri dati.

## 4. Base giuridica per il trattamento (GDPR)

- **Dati GPS/sessione, registri dei ritrovamenti, voci della cassaforte:** Consenso (Art. 6(1)(a)) — l'utente avvia attivamente queste azioni.
- **Chiamate API (meteo, geocodifica):** Legittimo interesse (Art. 6(1)(f)) — necessario per la funzionalità principale.
- **Backup su Google Drive:** Consenso (Art. 6(1)(a)) — l'utente abilita e si autentica esplicitamente.
- **Verifica dell'abbonamento:** Esecuzione di un contratto (Art. 6(1)(b)) — necessario per fornire le funzioni a pagamento.

È possibile revocare il consenso in qualsiasi momento interrompendo l'attività pertinente o disinstallando l'App.

## 5. Come utilizziamo i vostri dati

Tutto il trattamento dei dati avviene **localmente sul vostro dispositivo**. Utilizziamo i vostri dati esclusivamente per fornire le funzioni dell'App: visualizzazione della mappa, monitoraggio delle sessioni, registrazione dei ritrovamenti, gestione dei permessi, dati meteo/maree, esportazioni, backup e verifica degli abbonamenti.

## 6. Archiviazione dei dati e sicurezza

- I dati delle sessioni e dei ritrovamenti sono memorizzati in un database Room crittografato sul vostro dispositivo.
- Le impostazioni sensibili utilizzano EncryptedSharedPreferences (AES-256) di Android.
- I file multimediali sono memorizzati nell'archivio interno privato dell'App, inaccessibile ad altre applicazioni.
- Il backup sul cloud di Android è **disabilitato** (`android:allowBackup="false"`) per prevenire l'esposizione involontaria dei dati.
- I backup su Google Drive utilizzano le API crittografate di Google (HTTPS/TLS) ed esistono esclusivamente nel vostro account.

Non gestiamo server, database o infrastrutture cloud.

## 7. Conservazione dei dati

I dati locali vengono conservati finché non si sceglie di eliminarli. È possibile eliminare i singoli elementi all'interno dell'App, cancellare tutti i dati tramite le impostazioni di Android o disinstallare l'App. I backup su Google Drive permangono finché non vengono eliminati manualmente dal proprio account.

## 8. Condivisione e divulgazione dei dati

Non condividiamo, vendiamo, noleggiamo o divulghiamo i vostri dati personali a terze parti. Potete scegliere di condividere i dati tramite esportazioni (GPX, KML, CSV, JSON), schede di condivisione della sessione o il backup su Google Drive — tutte azioni avviate dall'utente.

## 9. I vostri diritti (GDPR e internazionali)

### Diritti GDPR (Residenti UE/SEE)

- **Accesso** — i vostri dati sono completamente accessibili sul vostro dispositivo.
- **Rettifica** — modificate tutti i record direttamente nell'App.
- **Cancellazione** — eliminate tramite la cancellazione in-app o la disinstallazione.
- **Limitazione** — controllate tutto il trattamento avviando/interrompendo le funzioni.
- **Portabilità dei dati** — esportazione tramite GPX, KML, CSV, JSON.
- **Opposizione** — interrompete qualsiasi funzione in qualsiasi momento.
- **Revoca del consenso** — in qualsiasi momento senza pregiudicare il trattamento precedente.

### Regno Unito (UK GDPR)

I vostri diritti ai sensi del UK GDPR e del Data Protection Act 2018 sono equivalenti ai diritti GDPR sopra menzionati. Potete contattare l'[ICO](https://ico.org.uk).

### Australia (Privacy Act 1988)

Avete diritti ai sensi degli Australian Privacy Principles (APPs), inclusi l'accesso e la correzione. Potete contattare l'[OAIC](https://www.oaic.gov.au).

### Canada (PIPEDA)

Avete diritti ai sensi della PIPEDA e della legislazione provinciale sulla privacy applicabile, inclusi l'accesso, la correzione e la revoca del consenso. Potete contattare l'[Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

### Residenti in California (CCPA/CPRA)

**Non** vendiamo né condividiamo alcuna informazione personale. Non utilizziamo i dati per la pubblicità comportamentale cross-context. Avete il diritto di conoscere, eliminare, limitare l'uso dei dati sensibili e il diritto alla non discriminazione.

### Residenti brasiliani (LGPD)

Si applicano diritti equivalenti ai sensi della Lei Geral de Proteção de Dados. Potete contattare l'[ANPD](https://www.gov.br/anpd).

### Nuova Zelanda (Privacy Act 2020)

Avete diritti ai sensi del Privacy Act 2020, inclusi l'accesso e la correzione. Potete contattare il [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Altre giurisdizioni

Indipendentemente dalla vostra posizione, avete il pieno controllo dei vostri dati tramite l'App. Laddove la legge locale conceda diritti alla privacy aggiuntivi che non possono essere rinunciati per contratto, tali diritti si applicano.

## 10. Privacy dei minori

L'App non è rivolta a minori di 16 anni. Non raccogliamo consapevolmente informazioni personali da minori di 16 anni. Se ritenete che un minore abbia utilizzato l'App, potete eliminare i suoi dati cancellando i dati dell'App o disinstallandola.

## 11. Spiegazione dei permessi

- **ACCESS_FINE_LOCATION** — GPS per il monitoraggio del percorso durante le sessioni.
- **ACCESS_BACKGROUND_LOCATION** — prosecuzione del monitoraggio quando lo schermo è spento.
- **CAMERA** — acquisizione di foto per la registrazione dei ritrovamenti.
- **RECORD_AUDIO** — registrazione di note audio per i ritrovamenti.
- **READ/WRITE_CALENDAR** — promemoria di scadenza per la cassaforte dei permessi.
- **INTERNET** — meteo, geocodifica, maree, mappe, abbonamenti.
- **POST_NOTIFICATIONS** — notifica per il monitoraggio GPS.
- **VIBRATE** — avvisi sui confini per la guardia perimetrale.

È possibile revocare qualsiasi permesso in qualsiasi momento tramite le impostazioni di Android.

## 12. Cookie e monitoraggio

L'App non utilizza cookie, web beacon, pixel tag, fingerprinting del dispositivo o altre tecnologie di monitoraggio.

## 13. Trasferimenti internazionali di dati

Poiché tutti i dati sono memorizzati localmente sul vostro dispositivo, non avvengono trasferimenti internazionali di dati sotto il nostro controllo. Le chiamate API di terze parti possono essere elaborate nelle giurisdizioni in cui operano tali servizi.

## 14. Notifica di violazione dei dati

Poiché non memorizziamo i vostri dati su alcun server, una violazione dei dati da parte nostra non è possibile. Se venissimo a conoscenza di una vulnerabilità nell'App, rilasceremo un aggiornamento e informeremo gli utenti tramite l'App o il sito web.

## 15. Modifiche alla presente informativa

Potremmo aggiornare la presente Informativa sulla Privacy per riflettere modifiche alla funzionalità o alle leggi applicabili. La data dell'"Ultimo aggiornamento" verrà revisionata. Le modifiche sostanziali saranno comunicate tramite l'App o il sito web.

## 16. Informative sulla privacy di terze parti

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Contattaci

**Coc Lorand P.F.A.** (operante come Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Sito web: [https://sweeptrack.pro](https://sweeptrack.pro)

Per richieste relative al GDPR, potete anche contattare l'ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) su [dataprotection.ro](https://www.dataprotection.ro).

---

La presente Informativa sulla Privacy è in vigore dal 7 aprile 2026 e si applica a tutte le versioni di SweepTrack Pro.

---