## 4. Français (French)

# Politique de Confidentialité

**SweepTrack Pro** — Application de suivi GPS pour la détection de métaux

Date d'entrée en vigueur : 7 avril 2026 · Dernière mise à jour : 7 avril 2026

Exploité par : Coc Lorand P.F.A., exerçant sous le nom commercial « Loriba »

CUI : 41299288 · Reg. F24/646/2019

Site web : sweeptrack.pro

---

## 1. Introduction

Cette Politique de Confidentialité explique comment SweepTrack Pro (« l'Application ») collecte, utilise, stocke et protège vos informations. Nous nous engageons à protéger votre vie privée et à assurer la transparence de nos pratiques en matière de données.

SweepTrack Pro est conçu avec une **architecture axée sur la confidentialité** : toutes les données sont stockées localement sur votre appareil, nous n'exploitons pas de serveurs backend et nous ne collectons, ne transmettons ni ne vendons vos données personnelles.

## 2. Responsable du traitement

Aux fins du Règlement Général sur la Protection des Données de l'UE (GDPR) et de la loi roumaine sur la protection des données (Loi 190/2018), le responsable du traitement est :

**Coc Lorand P.F.A.** (exerçant sous le nom de Loriba)  
CUI : 41299288 · Reg. F24/646/2019  
E-mail : [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Données que nous collectons

### 3.1 Données stockées localement sur votre appareil

Les données suivantes sont créées par vous et stockées **exclusivement sur votre appareil**. Nous n'avons jamais accès à ces données, sauf si vous les partagez explicitement.

**Données de localisation et de session :**

- Coordonnées GPS (latitude, longitude) pendant les sessions de suivi actives
- Valeurs de vitesse, d'altitude, de cap et de précision des capteurs de l'appareil
- Métadonnées de session : nom, date, heure de début/fin, durée, distance, étiquettes
- Coordonnées du parcours avec horodatage
- Noms de lieux (obtenus par géocodage inversé)

**Enregistrements de trouvailles et découvertes :**

- Type de trouvaille (Trésor, Or, Pièce, Relique, Bijou, Déchet)
- Emplacement de la trouvaille (coordonnées GPS au moment de l'enregistrement)
- Métadonnées facultatives : nom, notes, profondeur, valeur estimée, poids
- Pièces jointes multimédias : photographies et enregistrements audio

**Données du coffre-fort de permissions :**

- Noms et emplacements des sites
- Noms et coordonnées des propriétaires fonciers
- Numéros de permis, dates d'émission, dates d'expiration
- Coordonnées des limites du site (polygone)
- Signatures numériques (format SVG)
- Étiquettes et notes personnalisées

**Autres données locales :** Configurations des préréglages du détecteur, préférences de l'application (thème, unités, langue, paramètres de la carte) et instantanés météo associés aux sessions.

### 3.2 Données traitées temporairement (non stockées)

Les données suivantes sont envoyées à des services d'API tiers uniquement pour la fonctionnalité en temps réel et **ne sont pas stockées par nous ou par ces services au-delà de la demande immédiate** :

- Coordonnées GPS approximatives envoyées à Open-Meteo pour les prévisions météorologiques et les données d'altitude
- Coordonnées GPS approximatives envoyées à OpenStreetMap/Nominatim pour la recherche d'adresses
- Coordonnées GPS approximatives envoyées à Overpass API pour la découverte de points d'intérêt historiques à proximité
- Coordonnées GPS approximatives envoyées à Wikipedia API pour la recherche géographique d'articles à proximité
- Identifiants de stations de marées envoyés à NOAA pour les prévisions de marées
- Requêtes de recherche de lieu envoyées à Open-Meteo Geocoding pour la recherche de noms de lieux

### 3.3 Données traitées par des services tiers

**Google Maps SDK :** La localisation de votre appareil est traitée par Google Maps pour l'affichage de la carte. Soumis à la [Politique de Confidentialité Google](https://policies.google.com/privacy).

**Google Sign-In et Google Drive (Optionnel) :** Si vous activez la sauvegarde dans Google Drive, l'adresse e-mail de votre compte Google est stockée localement pour identifier le compte authentifié. Les données de sauvegarde sont téléchargées sur votre propre compte Google Drive. Nous n'avons pas accès à votre Google Drive.

**RevenueCat (Gestion des abonnements) :** Un identifiant d'utilisateur d'application anonyme et généré de manière aléatoire est utilisé pour la vérification de l'abonnement. Aucune information personnelle n'est partagée. Soumis à la [Politique de Confidentialité RevenueCat](https://www.revenuecat.com/privacy).

### 3.4 Données que nous ne collectons PAS

- Nous ne collectons **aucun** nom, e-mail, numéro de téléphone ou tout autre identifiant personnel.
- Nous n'utilisons **aucun** SDK d'analyse, de rapport d'erreurs ou de suivi comportemental.
- Nous n'utilisons **aucun** cadre publicitaire ou identifiant publicitaire.
- Nous ne suivons **pas** les habitudes d'utilisation, la fréquence des sessions ou l'utilisation des fonctionnalités.
- Nous ne créons **pas** de profils d'utilisateurs ou d'empreintes comportementales.
- Nous ne partageons, ne vendons, ne louons ni n'échangeons **pas** de données avec des tiers.
- Nous n'exploitons **pas** de serveurs qui reçoivent, traitent ou stockent vos données.

## 4. Base juridique du traitement (GDPR)

- **Données GPS/session, trouvailles, coffre-fort :** Consentement (Art. 6(1)(a)) — vous initiez activement ces actions.
- **Appels API (météo, géocodage) :** Intérêt légitime (Art. 6(1)(f)) — nécessaire pour la fonctionnalité de base.
- **Sauvegarde Google Drive :** Consentement (Art. 6(1)(a)) — vous activez et vous authentifiez explicitement.
- **Vérification d'abonnement :** Exécution d'un contrat (Art. 6(1)(b)) — nécessaire pour fournir les fonctionnalités payantes.

Vous pouvez retirer votre consentement à tout moment en arrêtant l'activité concernée ou en désinstallant l'Application.

## 5. Comment nous utilisons vos données

Tout le traitement des données a lieu **localement sur votre appareil**. Nous utilisons vos données exclusivement pour fournir les fonctionnalités de l'Application : affichage de la carte, suivi de session, enregistrement des trouvailles, gestion des autorisations, données météo/marées, exportations, sauvegarde et vérification des abonnements.

## 6. Stockage et sécurité des données

- Les données de sessions et de trouvailles sont stockées dans une base de données Room cryptée sur votre appareil.
- Les paramètres sensibles utilisent EncryptedSharedPreferences (AES-256) d'Android.
- Les fichiers multimédias sont stockés dans le stockage interne privé de l'Application, inaccessible aux autres applications.
- La sauvegarde dans le cloud Android est **désactivée** (`android:allowBackup="false"`) pour empêcher l'exposition involontaire des données.
- Les sauvegardes Google Drive utilisent les API cryptées de Google (HTTPS/TLS) et existent exclusivement dans votre compte.

Nous n'exploitons pas de serveurs, de bases de données ou d'infrastructure cloud.

## 7. Conservation des données

Les données locales sont conservées jusqu'à ce que vous choisissiez de les supprimer. Vous pouvez supprimer des éléments individuels dans l'Application, effacer toutes les données via les paramètres Android ou désinstaller l'Application. Les sauvegardes Google Drive persistent jusqu'à ce que vous les supprimiez manuellement de votre compte.

## 8. Partage et divulgation des données

Nous ne partageons, ne vendons, ne louons ni ne divulguons vos données personnelles à aucun tiers. Vous pouvez choisir de partager des données via des exportations (GPX, KML, CSV, JSON), des cartes de partage de session ou la sauvegarde Google Drive — toutes ces actions étant initiées par l'utilisateur.

## 9. Vos droits (GDPR et internationaux)

### Droits GDPR (Résidents de l'UE/EEE)

- **Accès** — vos données sont entièrement accessibles sur votre appareil.
- **Rectification** — modifiez tous les enregistrements directement dans l'Application.
- **Effacement** — supprimez via la suppression in-app ou la désinstallation.
- **Restriction** — contrôlez tout le traitement en activant/désactivant les fonctionnalités.
- **Portabilité des données** — exportez via GPX, KML, CSV, JSON.
- **Opposition** — arrêtez n'importe quelle fonctionnalité à tout moment.
- **Retrait du consentement** — à tout moment sans affecter le traitement antérieur.

### Royaume-Uni (UK GDPR)

Vos droits en vertu du UK GDPR et du Data Protection Act 2018 sont équivalents aux droits GDPR mentionnés ci-dessus. Vous pouvez contacter l'[ICO](https://ico.org.uk).

### Australie (Privacy Act 1988)

Vous avez des droits en vertu des principes australiens de confidentialité (APPs), y compris l'accès et la rectification. Vous pouvez contacter l'[OAIC](https://www.oaic.gov.au).

### Canada (LPRPDE)

Vous avez des droits en vertu de la LPRPDE et de la législation provinciale applicable en matière de protection de la vie privée, y compris l'accès, la rectification et le retrait du consentement. Vous pouvez contacter le [Commissariat à la protection de la vie privée du Canada](https://www.priv.gc.ca).

### Résidents de Californie (CCPA/CPRA)

Nous ne vendons **pas** et ne partageons **pas** d'informations personnelles. Nous n'utilisons pas de données pour la publicité comportementale inter-contexte. Vous avez le droit de connaître, de supprimer, de limiter l'utilisation des données sensibles et le droit à la non-discrimination.

### Résidents brésiliens (LGPD)

Des droits équivalents s'appliquent en vertu de la Lei Geral de Proteção de Dados. Vous pouvez contacter l'[ANPD](https://www.gov.br/anpd).

### Nouvelle-Zélande (Privacy Act 2020)

Vous avez des droits en vertu du Privacy Act 2020, y compris l'accès et la rectification. Vous pouvez contacter le [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Autres juridictions

Quel que soit votre emplacement, vous avez le contrôle total de vos données via l'Application. Lorsque la loi locale accorde des droits de confidentialité supplémentaires qui ne peuvent être renoncés par contrat, ces droits s'appliquent.

## 10. Confidentialité des enfants

L'Application ne s'adresse pas aux enfants de moins de 16 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de 16 ans. Si vous pensez qu'un enfant a utilisé l'Application, vous pouvez supprimer ses données en effaçant les données de l'Application ou en la désinstallant.

## 11. Explication des autorisations

- **ACCESS_FINE_LOCATION** — GPS pour le suivi du parcours pendant les sessions.
- **ACCESS_BACKGROUND_LOCATION** — poursuite du suivi lorsque l'écran est éteint.
- **CAMERA** — capture de photos pour l'enregistrement des trouvailles.
- **RECORD_AUDIO** — enregistrement de notes audio pour les trouvailles.
- **READ/WRITE_CALENDAR** — rappels d'expiration pour le coffre-fort de permissions.
- **INTERNET** — météo, géocodage, marées, cartes, abonnements.
- **POST_NOTIFICATIONS** — notification pour le suivi GPS.
- **VIBRATE** — alertes de limites pour la garde périmétrique.

Vous pouvez révoquer n'importe quelle autorisation à tout moment via les paramètres Android.

## 12. Cookies et suivi

L'Application n'utilise pas de cookies, de balises Web, de pixels invisibles, d'empreinte numérique de l'appareil ou toute autre technologie de suivi.

## 13. Transferts internationaux de données

Comme toutes les données sont stockées localement sur votre appareil, aucun transfert international de données n'a lieu sous notre contrôle. Les appels API tiers peuvent être traités dans les juridictions où ces services opèrent.

## 14. Notification de violation de données

Comme nous ne stockons pas vos données sur un serveur, une violation de données de notre part n'est pas possible. Si nous prenons connaissance d'une vulnérabilité dans l'Application, nous publierons une mise à jour et en informerons les utilisateurs via l'Application ou le site Web.

## 15. Modifications de cette politique

Nous pouvons mettre à jour cette Politique de Confidentialité pour refléter des changements de fonctionnalité ou des lois applicables. La date de « Dernière mise à jour » sera révisée. Les modifications substantielles seront communiquées via l'Application ou le site Web.

## 16. Politiques de confidentialité de tiers

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Contactez-nous

**Coc Lorand P.F.A.** (exerçant sous le nom de Loriba)  
CUI : 41299288 · Reg. F24/646/2019  
E-mail : [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Site web : [https://sweeptrack.pro](https://sweeptrack.pro)

Pour les demandes liées au GDPR, vous pouvez également contacter l'ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) sur [dataprotection.ro](https://www.dataprotection.ro).

---

Cette Politique de Confidentialité est en vigueur depuis le 7 avril 2026 et s'applique à toutes les versions de SweepTrack Pro.

---