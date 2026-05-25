# Politique de Confidentialité

**SweepTrack Pro** — Application de suivi GPS pour la détection de métaux

Date d'entrée en vigueur : 12 mai 2026 · Dernière mise à jour : 25 mai 2026

Exploité par : Coc Lorand Adrian P.F.A., exerçant sous le nom commercial « Loriba »

CUI : 41299288 · Reg. F24/646/2019

Site web : sweeptrack.pro

---

## 1. Introduction

Cette Politique de Confidentialité explique comment SweepTrack Pro (« l'Application ») et le site web sweeptrack.pro (« le Site Web ») collectent, utilisent, stockent et protègent vos informations. Nous nous engageons à protéger votre vie privée et à assurer la transparence de nos pratiques en matière de données.

L'Application est conçue avec une **architecture axée sur la confidentialité** : toutes les données de détection sont stockées localement sur votre appareil, nous n'exploitons pas de serveurs backend pour l'Application et nous ne collectons, ne transmettons ni ne vendons vos données personnelles de détection. Le Site Web fonctionne séparément et a ses propres pratiques en matière de données, décrites à la Section 4.

## 2. Responsable du traitement

Aux fins du Règlement Général sur la Protection des Données de l'UE (GDPR) et de la loi roumaine sur la protection des données (Loi 190/2018), le responsable du traitement est :

**Coc Lorand Adrian P.F.A.** (exerçant sous le nom de Loriba)  
CUI : 41299288 · Reg. F24/646/2019  
E-mail : [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Données que nous collectons (Application Android)

### 3.1 Données stockées localement sur votre appareil

Les données suivantes sont créées par vous et stockées **exclusivement sur votre appareil**. Nous n'avons jamais accès à ces données sauf si vous les partagez explicitement.

**Données de localisation et de session :**

- Coordonnées GPS (latitude, longitude) pendant les sessions de suivi actives
- Vitesse, altitude, cap et précision des capteurs de l'appareil
- Métadonnées de session : nom, date, heure de début/fin, durée, distance, balises
- Coordonnées du parcours avec horodatages
- Noms de lieux (obtenus par géocodage inverse)

**Enregistrements de trouvailles :**

- Type de trouvaille (Trésor, Or, Pièce, Relique, Bijou, Déchet)
- Emplacement de la trouvaille (coordonnées GPS au moment de l'enregistrement)
- Métadonnées facultatives : nom, notes, profondeur, valeur estimée, poids
- Pièces jointes multimédias : photos et enregistrements audio

**Données du coffre-fort des autorisations :**

- Noms et emplacements des sites
- Noms des propriétaires fonciers et informations de contact
- Numéros de permis, dates d'émission, dates d'expiration
- Coordonnées des limites du site (polygone)
- Signatures numériques (format SVG)
- Balises et notes personnalisées

**Autres données locales :** configurations de préréglages de détecteur, préférences de l'application (thème, unités, langue, paramètres de carte) et instantanés météo associés aux sessions.

### 3.2 Données traitées temporairement (non stockées)

Les données suivantes sont envoyées à des API tierces pour la fonctionnalité en temps réel et **ne sont pas stockées par nous ou par ces services au-delà de la requête immédiate** :

- Coordonnées GPS approximatives envoyées à Open-Meteo pour les prévisions météo et les données d'altitude
- Coordonnées GPS approximatives envoyées à OpenStreetMap/Nominatim pour la recherche d'adresses
- Coordonnées GPS approximatives envoyées à Overpass API pour la découverte de points d'intérêt historiques à proximité
- Coordonnées GPS approximatives envoyées à Wikipedia API pour la recherche géographique d'articles à proximité
- Identifiants de stations de marée envoyés à NOAA pour les prédictions de marées
- Requêtes de recherche de lieu envoyées à Open-Meteo Geocoding

### 3.3 Données traitées par des services tiers

**Google Maps SDK :** la localisation de votre appareil est traitée par Google Maps pour l'affichage de la carte. Soumise à la [Politique de Confidentialité de Google](https://policies.google.com/privacy).

**Google Sign-In et Google Drive (optionnel) :** si vous activez la sauvegarde Google Drive, l'adresse e-mail de votre compte Google est stockée localement pour identifier le compte authentifié. Les données de sauvegarde sont téléchargées dans votre propre compte Google Drive. Nous n'avons pas accès à votre Google Drive.

**RevenueCat (gestion des abonnements) :** un identifiant d'utilisateur d'application anonyme, généré aléatoirement, est utilisé pour la vérification des abonnements. Aucune information personnelle n'est partagée. Soumise à la [Politique de Confidentialité de RevenueCat](https://www.revenuecat.com/privacy).

**Firebase Analytics et Crashlytics (optionnel — désactivés par défaut) :** deux SDK Google Firebase sont intégrés à l'Application, mais **tous deux restent inactifs tant que vous n'avez pas explicitement opté** via la demande de consentement au premier lancement ou depuis **Paramètres → Confidentialité → Diagnostics**. Tant que vous n'avez pas donné votre consentement, aucun événement n'est envoyé et aucun rapport de plantage n'est téléversé. Vous pouvez retirer votre consentement à tout moment ; la révocation prend effet dès l'événement suivant. Les versions de débogage n'activent jamais Crashlytics.

Lorsqu'ils sont activés :

- **Firebase Analytics** enregistre huit noms d'événements agrégés avec des paramètres non identifiants : `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. Le contenu des événements **ne contient jamais** de coordonnées GPS, d'adresses, de noms de trouvailles, de photos, d'enregistrements audio, de données du coffre-fort, ni aucune autre information identifiante — uniquement des compteurs, durées, distances, types de trouvailles (la catégorie seule) et identifiants de fonctionnalités.
- **Firebase Crashlytics** téléverse les traces de pile des plantages avec le modèle de l'appareil, la version du système d'exploitation et la version de l'application pour nous aider à diagnostiquer les bugs. Avant qu'un plantage ou une erreur non fatale ne soit transmis à Crashlytics, l'Application **supprime du message d'exception les sous-chaînes ayant la forme de coordonnées** (par exemple, motifs `lat=`/`lon=`, décimales signées comportant trois chiffres décimaux ou plus), afin que les positions GPS mises en cache dans des variables locales ne puissent pas fuir via le rapport d'erreurs. Les cadres de pile (classe, méthode, ligne) sont conservés pour le regroupement ; les valeurs d'exécution ne le sont pas. Un gestionnaire d'exceptions non capturées au niveau du processus applique le même filtrage aux plantages fatals capturés automatiquement par le SDK.

Les deux services sont soumis à la [Politique de Confidentialité de Google](https://policies.google.com/privacy) et aux [informations de confidentialité et de sécurité de Firebase](https://firebase.google.com/support/privacy).

### 3.4 Données que l'Application NE collecte PAS

- **L'Application** ne collecte ni votre nom, ni votre e-mail, ni votre numéro de téléphone, ni tout autre identifiant personnel
- **L'Application** n'utilise pas d'analyses ni de rapports de plantage à moins que vous n'optiez explicitement (voir la section Firebase ci-dessus ; désactivé par défaut et révocable à tout moment dans Paramètres → Confidentialité → Diagnostics)
- **L'Application** n'utilise pas de cadres publicitaires ou d'identifiants publicitaires
- **L'Application** ne suit pas les modèles d'utilisation, la fréquence des sessions ou l'utilisation des fonctionnalités
- **L'Application** ne crée pas de profils d'utilisateur ou d'empreintes comportementales
- **L'Application** ne partage, ne vend, ne loue ni n'échange aucune donnée avec des tiers
- **L'Application** n'exploite aucun serveur qui reçoit, traite ou stocke vos données de détection

Les pratiques de données du Site Web sont couvertes séparément à la Section 4.

## 4. Pratiques de données du Site Web (sweeptrack.pro)

Cette section couvre les pratiques de données spécifiques à notre site web sweeptrack.pro. L'Application Android décrite aux Sections 3 et 5–18 fonctionne indépendamment et ne partage pas d'infrastructure avec le Site Web.

### 4.1 Collecte d'e-mail pour la liste d'attente

Lorsque vous soumettez votre e-mail via un formulaire d'inscription sur le Site Web, nous collectons :

- **Adresse e-mail** que vous fournissez
- **Horodatage** de l'inscription
- **Adresse IP** (transitoire) — utilisée pour la limitation du débit ; non stockée au-delà de la durée de la requête

**Objectif :** vous notifier lorsque SweepTrack Pro sera lancé sur Google Play et vous envoyer des mises à jour pré-lancement sur le produit et l'offre Founder's Lifetime. Nous n'utiliserons pas votre e-mail à d'autres fins, ne le partagerons pas et ne le vendrons pas.

**Base légale (GDPR) :** Consentement (Art. 6(1)(a)) — fourni lorsque vous soumettez le formulaire.

**Stockage :** les adresses e-mail sont stockées dans une base de données Supabase Postgres hébergée dans l'UE (région Irlande). Supabase, Inc. agit en tant que sous-traitant de données conformément à leur Accord de Traitement de Données standard.

**Livraison des e-mails :** les e-mails sortants sont envoyés via Resend, Inc. (région UE, Irlande) agissant comme notre sous-traitant de services e-mail conformément à leur Accord de Traitement de Données standard.

**Conservation :** jusqu'à votre désabonnement ou 12 mois après le lancement public de SweepTrack Pro sur Google Play, selon la première éventualité.

**Désabonnement :** répondez « remove » à tout e-mail que nous envoyons, ou utilisez le lien List-Unsubscribe que votre client de messagerie affiche (Gmail et Outlook l'affichent à côté de l'adresse De).

**Vos droits :** accès, rectification, effacement, restriction, portabilité et droit de retirer votre consentement. Envoyez un e-mail à [support@sweeptrack.pro](mailto:support@sweeptrack.pro) pour exercer l'un de ces droits.

### 4.2 Analyses du Site Web

Le Site Web utilise :

- **Vercel Analytics** — analyses respectueuses de la vie privée qui n'utilisent pas de cookies et ne stockent pas d'adresses IP individuelles. Mesure uniquement les vues de page agrégées.
- **Vercel Speed Insights** — mesure des Core Web Vitals (temps de chargement, décalage de mise en page, retards d'interaction) sur une base agrégée.

Les deux outils sont exploités par Vercel Inc. et soumis à la [Politique de Confidentialité de Vercel](https://vercel.com/legal/privacy-policy). Ils ne collectent pas d'informations d'identification personnelle et ne créent pas de profils d'utilisateur.

### 4.3 Cookies

Le Site Web ne définit pas de cookies de première partie pour le suivi, la publicité ou le profilage. Vercel Analytics est sans cookies par conception. Une préférence de langue, si vous la modifiez, est stockée dans le `localStorage` de votre navigateur (pas un cookie) et n'est lisible que par votre propre navigateur.

### 4.4 Hébergement et journaux du serveur

Le Site Web est hébergé par Vercel Inc. Vercel peut enregistrer automatiquement des métadonnées de requête standard (adresse IP, user agent, chemin de requête, horodatage) à des fins opérationnelles, de performance et de sécurité. Ces journaux sont conservés selon les politiques standard de Vercel et ne sont pas utilisés par nous pour le suivi ou le profilage d'individus.

### 4.5 Vos droits pour les données du Site Web

Les mêmes droits GDPR, UK GDPR, australiens, canadiens, CCPA, LGPD et NZ Privacy Act décrits à la Section 10 s'appliquent également à vos données collectées par le Site Web. Pour exercer un droit concernant votre e-mail de la liste d'attente, contactez [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Nous répondrons dans les 30 jours.

## 5. Base légale du traitement (GDPR)

- **Données GPS/session, enregistrements de trouvailles, entrées du coffre-fort :** consentement (Art. 6(1)(a)) — vous initiez activement ces actions
- **Appels API (météo, géocodage) :** intérêt légitime (Art. 6(1)(f)) — nécessaire pour la fonctionnalité de base
- **Sauvegarde Google Drive :** consentement (Art. 6(1)(a)) — vous activez et vous authentifiez explicitement
- **Vérification de l'abonnement :** exécution du contrat (Art. 6(1)(b)) — nécessaire pour fournir les fonctionnalités payantes
- **Firebase Analytics et Crashlytics (optionnel) :** consentement (Art. 6(1)(a)) — activé via la demande au premier lancement ou depuis les Paramètres, révocable à tout moment
- **E-mail de la liste d'attente (Site Web) :** consentement (Art. 6(1)(a)) — voir Section 4.1

Vous pouvez retirer votre consentement à tout moment en arrêtant l'activité concernée, en désinstallant l'Application ou en vous désabonnant des e-mails du Site Web.

## 6. Comment nous utilisons vos données

Tout le traitement des données de l'Application se fait **localement sur votre appareil**. Nous utilisons les données de l'Application exclusivement pour fournir les fonctionnalités de l'Application : affichage de la carte, suivi des sessions, enregistrement des trouvailles, gestion des autorisations, données météo/marées, exportations, sauvegarde et vérification de l'abonnement.

Les données du Site Web (votre e-mail de la liste d'attente) ne sont utilisées que pour envoyer les communications de lancement et de pré-lancement décrites à la Section 4.

## 7. Stockage et sécurité des données

**Données de l'Application :**

- Les données de session et de trouvailles sont stockées dans une base de données Room chiffrée sur votre appareil
- Les préférences sensibles utilisent EncryptedSharedPreferences (AES-256) d'Android
- Les fichiers multimédias sont stockés dans le stockage interne privé de l'Application, inaccessible aux autres applications
- La sauvegarde cloud Android est **désactivée** (`android:allowBackup="false"`) pour éviter une exposition involontaire des données
- Les sauvegardes Google Drive utilisent les API chiffrées de Google (HTTPS/TLS) et n'existent que dans votre compte

Pour l'Application, nous n'exploitons aucun serveur, base de données ou infrastructure cloud qui stocke vos données de détection.

**Données du Site Web :** les e-mails de la liste d'attente sont stockés dans une base de données Supabase Postgres hébergée dans l'UE (Irlande). Les connexions sont chiffrées (TLS). L'accès est restreint à des fins administratives uniquement. L'e-mail sortant est envoyé via Resend (UE, Irlande) par TLS. Voir Section 4.

## 8. Conservation des données

**Données de l'Application :** les données locales sont conservées jusqu'à ce que vous choisissiez de les supprimer. Vous pouvez supprimer des éléments individuels dans l'Application, effacer toutes les données via les Paramètres Android ou désinstaller l'Application. Les sauvegardes Google Drive persistent jusqu'à ce que vous les supprimiez manuellement de votre compte.

**Données du Site Web :** les e-mails de la liste d'attente sont conservés jusqu'à votre désabonnement, ou 12 mois après le lancement public, selon la première éventualité. Après cela, les adresses sont supprimées de la base de données Supabase.

## 9. Partage et divulgation des données

Nous ne partageons, ne vendons, ne louons ni ne divulguons vos données personnelles à un tiers. Vous pouvez choisir de partager les données de l'Application via des exportations (GPX, KML, CSV, JSON), des cartes de partage de session ou la sauvegarde Google Drive — toutes initiées par l'utilisateur. Les données de la liste d'attente du Site Web sont traitées uniquement par nos sous-traitants nommés (Supabase, Resend) aux fins décrites à la Section 4.

## 10. Vos droits (GDPR et internationaux)

### Droits GDPR (Résidents UE/EEE)

- **Accès** — vos données d'Application sont entièrement accessibles sur votre appareil ; pour les données du Site Web, envoyez un e-mail à [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Rectification** — modifiez tous les enregistrements directement dans l'Application, ou envoyez-nous un e-mail pour les corrections de données du Site Web
- **Effacement** — supprimez via la suppression dans l'application ou la désinstallation ; pour les données du Site Web, désabonnez-vous ou envoyez-nous un e-mail
- **Restriction** — contrôlez tout traitement en démarrant/arrêtant les fonctionnalités
- **Portabilité des données** — exportez les données de l'Application via GPX, KML, CSV, JSON
- **Opposition** — arrêtez toute fonctionnalité à tout moment
- **Retrait du Consentement** — à tout moment sans affecter le traitement antérieur

### Royaume-Uni (UK GDPR)

Vos droits en vertu du UK GDPR et du Data Protection Act 2018 sont équivalents aux droits GDPR ci-dessus. Vous pouvez contacter l'[ICO](https://ico.org.uk).

### Australie (Privacy Act 1988)

Vous avez des droits en vertu des Australian Privacy Principles (APPs), y compris l'accès et la correction. Vous pouvez contacter l'[OAIC](https://www.oaic.gov.au).

### Canada (PIPEDA)

Vous avez des droits en vertu de PIPEDA et de la législation provinciale applicable en matière de vie privée, y compris l'accès, la correction et le retrait du consentement. Vous pouvez contacter le [Commissariat à la protection de la vie privée du Canada](https://www.priv.gc.ca).

### Résidents de Californie (CCPA/CPRA)

Nous **ne** vendons ni ne partageons aucune information personnelle. Nous n'utilisons pas les données pour la publicité comportementale inter-contextes. Vous avez des droits de savoir, de supprimer, de limiter l'utilisation de données sensibles et de non-discrimination.

### Résidents brésiliens (LGPD)

Des droits équivalents en vertu de Lei Geral de Proteção de Dados s'appliquent. Vous pouvez contacter l'[ANPD](https://www.gov.br/anpd).

### Nouvelle-Zélande (Privacy Act 2020)

Vous avez des droits en vertu du Privacy Act 2020, y compris l'accès et la correction. Vous pouvez contacter le [Commissaire à la vie privée de NZ](https://www.privacy.org.nz).

### Autres juridictions

Quel que soit votre emplacement, vous avez le contrôle total de vos données. Là où la loi locale accorde des droits supplémentaires en matière de vie privée qui ne peuvent être abandonnés par contrat, ces droits s'appliquent.

## 11. Confidentialité des enfants

Ni l'Application ni le Site Web ne sont destinés aux enfants de moins de 16 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 16 ans. Si vous pensez qu'un enfant a utilisé l'Application ou le Site Web, vous pouvez supprimer ses données en effaçant les données de l'Application, en désinstallant ou en vous désabonnant de la liste d'attente.

## 12. Autorisations expliquées (Application)

- **ACCESS_FINE_LOCATION** — GPS pour le suivi de parcours pendant les sessions
- **ACCESS_BACKGROUND_LOCATION** — continuer le suivi lorsque l'écran est éteint
- **CAMERA** — capturer des photos pour l'enregistrement de trouvailles
- **RECORD_AUDIO** — enregistrer des notes audio pour les trouvailles
- **READ/WRITE_CALENDAR** — écrit les rappels d'expiration des permis du coffre-fort dans le calendrier local de votre appareil. Si vous avez activé la synchronisation avec un calendrier dans le cloud sur Android (par exemple, synchronisation Google Calendar), ces rappels seront synchronisés avec votre compte avec le reste de votre calendrier — cette synchronisation est contrôlée par vos paramètres Android, pas par l'Application
- **INTERNET** — météo, géocodage, marées, cartes, abonnements
- **POST_NOTIFICATIONS** — notification de suivi GPS
- **VIBRATE** — alertes de limite du garde-périmètre

Vous pouvez révoquer toute autorisation à tout moment via les Paramètres Android.

## 13. Cookies et suivi

**L'Application** n'utilise pas de cookies, de balises web, d'étiquettes pixel, d'empreintes digitales d'appareil ou toute autre technologie de suivi. **Le Site Web** ne définit pas de cookies de première partie ; voir Section 4.3 pour la divulgation complète des cookies du Site Web.

## 14. Transferts internationaux de données

**Données de l'Application :** étant donné que toutes les données de détection sont stockées localement sur votre appareil, aucun transfert international de données ne se produit sous notre contrôle. Les appels API vers des tiers peuvent être traités dans les juridictions où ces services opèrent.

**Données du Site Web :** les e-mails de la liste d'attente sont stockés dans l'UE (Irlande) par Supabase et traités par Resend (UE, Irlande). Si vous accédez au Site Web depuis l'extérieur de l'UE, votre e-mail est transféré vers l'UE pour traitement.

## 15. Notification de violation de données

**Application :** étant donné que nous ne stockons pas vos données de détection sur un serveur que nous exploitons, une violation de données affectant les données de l'Application de notre côté n'est pas possible. Si nous prenons connaissance d'une vulnérabilité dans l'Application, nous publierons une mise à jour et notifierons les utilisateurs via l'Application ou le site web.

**Site Web :** nos sous-traitants (Supabase, Resend) maintiennent leurs propres protocoles de notification de violation. Dans le cas peu probable d'une violation affectant votre e-mail de la liste d'attente, nous vous notifierons ainsi que l'autorité de contrôle compétente (ANSPDCP) dans les 72 heures comme l'exige le GDPR.

## 16. Modifications de cette politique

Nous pouvons mettre à jour cette Politique de Confidentialité pour refléter les changements de fonctionnalité ou les lois applicables. La date de « Dernière mise à jour » sera révisée. Les modifications substantielles seront communiquées via l'Application ou le site web.

## 17. Politiques de confidentialité tierces

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics et Crashlytics — opt-in uniquement)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Hébergement Site Web + analyses)
- [Supabase](https://supabase.com/privacy) (Base de données Site Web)
- [Resend](https://resend.com/legal/privacy-policy) (E-mail Site Web)

## 18. Nous contacter

**Coc Lorand Adrian P.F.A.** (exerçant sous le nom de Loriba)  
CUI : 41299288 · Reg. F24/646/2019  
E-mail : [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Site web : [https://sweeptrack.pro](https://sweeptrack.pro)

Pour les demandes liées au GDPR, vous pouvez également contacter ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) à [dataprotection.ro](https://www.dataprotection.ro).

---

Cette Politique de Confidentialité entre en vigueur le 12 mai 2026 et s'applique à toutes les versions de SweepTrack Pro.
