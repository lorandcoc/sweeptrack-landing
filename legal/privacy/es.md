# Política de Privacidad

**SweepTrack Pro** — Aplicación de seguimiento GPS para detección de metales

Fecha de entrada en vigor: 12 de mayo de 2026 · Última actualización: 12 de mayo de 2026

Operado por: Coc Lorand Adrian P.F.A., operando como "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Sitio web: sweeptrack.pro

---

## 1. Introducción

Esta Política de Privacidad explica cómo SweepTrack Pro ("la Aplicación") y el sitio web sweeptrack.pro ("el Sitio Web") recopilan, utilizan, almacenan y protegen su información. Nos comprometemos a proteger su privacidad y a garantizar la transparencia sobre nuestras prácticas de datos.

La Aplicación está diseñada con una **arquitectura de privacidad primero**: todos los datos de detección se almacenan localmente en su dispositivo, no operamos servidores backend para la Aplicación y no recopilamos, transmitimos ni vendemos sus datos personales de detección. El Sitio Web opera por separado y tiene sus propias prácticas de datos, descritas en la Sección 4.

## 2. Responsable del Tratamiento de Datos

A efectos del Reglamento General de Protección de Datos de la UE (GDPR) y de la ley rumana de protección de datos (Ley 190/2018), el responsable del tratamiento de los datos es:

**Coc Lorand Adrian P.F.A.** (operando como Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Correo electrónico: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Datos que recopilamos (Aplicación Android)

### 3.1 Datos almacenados localmente en su dispositivo

Los siguientes datos son creados por usted y se almacenan **exclusivamente en su dispositivo**. Nunca tenemos acceso a estos datos a menos que los comparta explícitamente.

**Datos de ubicación y sesión:**

- Coordenadas GPS (latitud, longitud) durante las sesiones de seguimiento activas
- Valores de velocidad, altitud, rumbo y precisión de los sensores del dispositivo
- Metadatos de la sesión: nombre, fecha, hora de inicio/fin, duración, distancia, etiquetas
- Coordenadas de la ruta con marcas de tiempo
- Nombres de ubicaciones (obtenidos mediante geocodificación inversa)

**Registros de hallazgos y descubrimientos:**

- Tipo de hallazgo (Tesoro, Oro, Moneda, Reliquia, Joya, Basura)
- Ubicación del hallazgo (coordenadas GPS en el momento del registro)
- Metadatos opcionales: nombre, notas, profundidad, valor estimado, peso
- Archivos adjuntos multimedia: fotografías y grabaciones de audio

**Datos de la bóveda de permisos:**

- Nombres y ubicaciones de los sitios
- Nombres de los propietarios e información de contacto
- Números de permiso, fechas de emisión, fechas de caducidad
- Coordenadas de los límites del sitio (polígono)
- Firmas digitales (formato SVG)
- Etiquetas y notas personalizadas

**Otros datos locales:** Configuraciones de ajustes preestablecidos del detector, preferencias de la aplicación (tema, unidades, idioma, configuración del mapa) e instantáneas meteorológicas asociadas con las sesiones.

### 3.2 Datos procesados temporalmente (no almacenados)

Los siguientes datos se envían a API de terceros para funcionalidad en tiempo real y **no son almacenados por nosotros ni por estos servicios más allá de la solicitud inmediata**:

- Coordenadas GPS aproximadas enviadas a Open-Meteo para pronósticos meteorológicos y datos de elevación
- Coordenadas GPS aproximadas enviadas a OpenStreetMap/Nominatim para búsqueda de direcciones
- Coordenadas GPS aproximadas enviadas a Overpass API para el descubrimiento de puntos de interés históricos cercanos
- Coordenadas GPS aproximadas enviadas a Wikipedia API para búsqueda geográfica de artículos cercanos
- Identificadores de estaciones de mareas enviados a NOAA para predicciones de mareas
- Consultas de búsqueda de ubicación enviadas a Open-Meteo Geocoding para búsqueda de nombres de lugares

### 3.3 Datos procesados por servicios de terceros

**Google Maps SDK:** La ubicación de su dispositivo es procesada por Google Maps para mostrar el mapa. Sujeto a la [Política de Privacidad de Google](https://policies.google.com/privacy).

**Google Sign-In y Google Drive (Opcional):** Si activa la copia de seguridad en Google Drive, la dirección de correo electrónico de su cuenta de Google se almacena localmente para identificar la cuenta autenticada. Los datos de respaldo se cargan en su propia cuenta de Google Drive. No tenemos acceso a su Google Drive.

**RevenueCat (Gestión de Suscripciones):** Se utiliza un identificador de usuario anónimo y generado aleatoriamente para la verificación de suscripciones. No se comparte información personal. Sujeto a la [Política de Privacidad de RevenueCat](https://www.revenuecat.com/privacy).

**Firebase Analytics y Crashlytics (Opcional — desactivados por defecto):** Dos SDK de Google Firebase están integrados en la Aplicación, pero **ambos permanecen inactivos hasta que usted opte explícitamente** mediante la solicitud de consentimiento en el primer arranque o desde **Ajustes → Privacidad → Diagnósticos**. Hasta que dé su consentimiento, no se envía ningún evento ni se sube ningún informe de fallos. Puede retirar el consentimiento en cualquier momento; la revocación surte efecto en el siguiente evento. Las versiones de depuración nunca activan Crashlytics.

Cuando están activados:

- **Firebase Analytics** registra ocho nombres de eventos agregados con parámetros no identificativos: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. El contenido de los eventos **nunca** incluye coordenadas GPS, direcciones, nombres de hallazgos, fotografías, grabaciones de audio, datos de la bóveda ni ninguna otra información de identificación personal — únicamente recuentos, duraciones, distancias, tipo de hallazgo (solo la categoría) e identificadores de funcionalidades.
- **Firebase Crashlytics** sube trazas de pila de los fallos junto con el modelo del dispositivo, la versión del sistema operativo y la versión de la aplicación para ayudarnos a diagnosticar errores.

Ambos servicios están sujetos a la [Política de Privacidad de Google](https://policies.google.com/privacy) y a las [divulgaciones de privacidad y seguridad de Firebase](https://firebase.google.com/support/privacy).

### 3.4 Datos que la Aplicación NO recopila

- **La Aplicación** no recopila su nombre, correo electrónico, número de teléfono ni ningún identificador personal
- **La Aplicación** no utiliza análisis ni informes de errores salvo que opte explícitamente (véase la sección de Firebase más arriba; desactivado por defecto y revocable en cualquier momento en Ajustes → Privacidad → Diagnósticos)
- **La Aplicación** no utiliza marcos publicitarios ni identificadores publicitarios
- **La Aplicación** no rastrea patrones de uso, frecuencia de sesiones ni uso de funciones
- **La Aplicación** no crea perfiles de usuario ni huellas digitales de comportamiento
- **La Aplicación** no comparte, vende, alquila ni intercambia datos con terceros
- **La Aplicación** no opera servidores que reciban, procesen o almacenen sus datos de detección

Las prácticas de datos del Sitio Web se cubren por separado en la Sección 4.

## 4. Prácticas de datos del Sitio Web (sweeptrack.pro)

Esta sección cubre las prácticas de datos específicas de nuestro sitio web sweeptrack.pro. La Aplicación Android descrita en las Secciones 3 y 5–18 opera de forma independiente y no comparte infraestructura con el Sitio Web.

### 4.1 Recopilación de correo electrónico para la lista de espera

Cuando envía su correo electrónico a través de cualquier formulario de inscripción en el Sitio Web, recopilamos:

- **Dirección de correo electrónico** que proporciona
- **Marca de tiempo** del registro
- **Dirección IP** (transitoria) — utilizada para limitar la tasa de solicitudes; no se almacena más allá de la duración de la solicitud

**Propósito:** Notificarle cuando SweepTrack Pro se lance en Google Play y enviarle actualizaciones previas al lanzamiento sobre el producto y la oferta Founder's Lifetime. No usaremos su correo electrónico con ningún otro propósito, no lo compartiremos y no lo venderemos.

**Base jurídica (GDPR):** Consentimiento (Art. 6(1)(a)) — proporcionado al enviar el formulario.

**Almacenamiento:** Las direcciones de correo electrónico se almacenan en una base de datos Supabase Postgres alojada en la UE (región de Irlanda). Supabase, Inc. actúa como nuestro encargado del tratamiento de datos conforme a su Acuerdo de Tratamiento de Datos estándar.

**Entrega de correo electrónico:** Los correos electrónicos salientes se envían a través de Resend, Inc. (región de la UE, Irlanda) actuando como nuestro encargado del servicio de correo electrónico conforme a su Acuerdo de Tratamiento de Datos estándar.

**Retención:** Hasta que se dé de baja, o 12 meses después del lanzamiento público de SweepTrack Pro en Google Play, lo que ocurra primero.

**Cancelar suscripción:** Responda con "remove" a cualquier correo electrónico que enviemos, o use el enlace List-Unsubscribe que muestra su cliente de correo (Gmail y Outlook lo muestran junto a la dirección De).

**Sus derechos:** Acceso, rectificación, supresión, restricción, portabilidad y derecho a retirar el consentimiento. Envíe un correo a [support@sweeptrack.pro](mailto:support@sweeptrack.pro) para ejercer cualquiera de estos.

### 4.2 Analítica del Sitio Web

El Sitio Web utiliza:

- **Vercel Analytics** — analíticas respetuosas con la privacidad que no usan cookies y no almacenan direcciones IP individuales. Mide solo las vistas de página agregadas.
- **Vercel Speed Insights** — medición de Core Web Vitals (tiempo de carga de página, desplazamiento del diseño, retrasos de interacción) sobre una base agregada.

Ambas herramientas son operadas por Vercel Inc. y están sujetas a la [Política de Privacidad de Vercel](https://vercel.com/legal/privacy-policy). No recopilan información de identificación personal y no crean perfiles de usuario.

### 4.3 Cookies

El Sitio Web no establece cookies de primera parte para seguimiento, publicidad o creación de perfiles. Vercel Analytics es sin cookies por diseño. Una preferencia de idioma, si la cambia, se almacena en el `localStorage` de su navegador (no es una cookie) y solo es legible por su propio navegador.

### 4.4 Alojamiento y registros del servidor

El Sitio Web está alojado por Vercel Inc. Vercel puede registrar automáticamente metadatos de solicitud estándar (dirección IP, agente de usuario, ruta de solicitud, marca de tiempo) con fines operativos, de rendimiento y de seguridad. Estos registros se conservan según las políticas estándar de Vercel y no son utilizados por nosotros para el seguimiento o la creación de perfiles de personas.

### 4.5 Sus derechos para los datos del Sitio Web

Los mismos derechos GDPR, UK GDPR, australianos, canadienses, CCPA, LGPD y Privacy Act de NZ descritos en la Sección 10 se aplican por igual a los datos recopilados por el Sitio Web. Para ejercer cualquier derecho con respecto a su correo electrónico de la lista de espera, contacte a [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Responderemos dentro de los 30 días.

## 5. Base jurídica para el tratamiento (GDPR)

- **Datos GPS/sesión, registros de hallazgos, entradas de bóveda:** Consentimiento (Art. 6(1)(a)) — usted inicia activamente estas acciones
- **Llamadas a API (clima, geocodificación):** Interés legítimo (Art. 6(1)(f)) — necesario para la funcionalidad principal
- **Copia de seguridad de Google Drive:** Consentimiento (Art. 6(1)(a)) — activa y autentica explícitamente
- **Verificación de suscripción:** Ejecución de contrato (Art. 6(1)(b)) — necesaria para proporcionar funciones de pago
- **Firebase Analytics y Crashlytics (opcional):** Consentimiento (Art. 6(1)(a)) — activado mediante la solicitud del primer arranque o desde Ajustes, revocable en cualquier momento
- **Correo electrónico de lista de espera (Sitio Web):** Consentimiento (Art. 6(1)(a)) — ver Sección 4.1

Puede retirar su consentimiento en cualquier momento deteniendo la actividad relevante, desinstalando la Aplicación o dándose de baja de los correos electrónicos del Sitio Web.

## 6. Cómo utilizamos sus datos

Todo el procesamiento de datos de la Aplicación ocurre **localmente en su dispositivo**. Usamos los datos de la Aplicación exclusivamente para proporcionar las funciones de la Aplicación: visualización de mapas, seguimiento de sesiones, registro de hallazgos, gestión de permisos, datos meteorológicos/de mareas, exportaciones, copia de seguridad y verificación de suscripción.

Los datos del Sitio Web (su correo electrónico de la lista de espera) se usan solo para enviar las comunicaciones de lanzamiento y pre-lanzamiento descritas en la Sección 4.

## 7. Almacenamiento y seguridad de los datos

**Datos de la Aplicación:**

- Los datos de sesiones y hallazgos se almacenan en una base de datos Room cifrada en su dispositivo
- Las preferencias sensibles utilizan EncryptedSharedPreferences (AES-256) de Android
- Los archivos multimedia se almacenan en el almacenamiento interno privado de la Aplicación, inaccesibles para otras aplicaciones
- La copia de seguridad en la nube de Android está **desactivada** (`android:allowBackup="false"`) para evitar la exposición no intencionada de datos
- Las copias de seguridad de Google Drive utilizan las API cifradas de Google (HTTPS/TLS) y existen exclusivamente en su cuenta

Para la Aplicación, no operamos servidores, bases de datos ni infraestructura en la nube que almacenen sus datos de detección.

**Datos del Sitio Web:** Los correos electrónicos de la lista de espera se almacenan en una base de datos Supabase Postgres alojada en la UE (Irlanda). Las conexiones están cifradas (TLS). El acceso está restringido solo a fines administrativos. El correo electrónico saliente se envía a través de Resend (UE, Irlanda) por TLS. Ver Sección 4.

## 8. Retención de datos

**Datos de la Aplicación:** Los datos locales se conservan hasta que decida eliminarlos. Puede eliminar elementos individuales dentro de la Aplicación, eliminar todos los datos a través de la Configuración de Android o desinstalar la Aplicación. Las copias de seguridad de Google Drive persisten hasta que las elimine manualmente de su cuenta.

**Datos del Sitio Web:** Los correos electrónicos de la lista de espera se conservan hasta que se dé de baja, o 12 meses después del lanzamiento público, lo que ocurra primero. Después de eso, las direcciones se eliminan de la base de datos Supabase.

## 9. Compartición y divulgación de datos

No compartimos, vendemos, alquilamos ni divulgamos sus datos personales a ningún tercero. Puede optar por compartir datos de la Aplicación a través de exportaciones (GPX, KML, CSV, JSON), tarjetas de compartición de sesiones o copia de seguridad de Google Drive — todas iniciadas por el usuario. Los datos de la lista de espera del Sitio Web son procesados solo por nuestros encargados nombrados (Supabase, Resend) para los propósitos descritos en la Sección 4.

## 10. Sus derechos (GDPR e internacionales)

### Derechos GDPR (Residentes UE/EEE)

- **Acceso** — sus datos de la Aplicación son totalmente accesibles en su dispositivo; para datos del Sitio Web, envíe correo a [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Rectificación** — edite todos los registros directamente en la Aplicación, o envíenos un correo para correcciones de datos del Sitio Web
- **Supresión** — elimine mediante eliminación en la aplicación o desinstalación; para datos del Sitio Web, dése de baja o envíenos un correo
- **Restricción** — controle todo el procesamiento iniciando/deteniendo funciones
- **Portabilidad de datos** — exporte los datos de la Aplicación mediante GPX, KML, CSV, JSON
- **Oposición** — detenga cualquier función en cualquier momento
- **Retirar el Consentimiento** — en cualquier momento sin afectar el procesamiento anterior

### Reino Unido (UK GDPR)

Sus derechos según UK GDPR y la Data Protection Act 2018 son equivalentes a los derechos GDPR mencionados anteriormente. Puede contactar a la [ICO](https://ico.org.uk).

### Australia (Privacy Act 1988)

Tiene derechos según los Australian Privacy Principles (APPs), incluido el acceso y la corrección. Puede contactar a la [OAIC](https://www.oaic.gov.au).

### Canadá (PIPEDA)

Tiene derechos según PIPEDA y la legislación provincial de privacidad aplicable, incluido el acceso, la corrección y la retirada del consentimiento. Puede contactar a la [Oficina del Comisionado de Privacidad de Canadá](https://www.priv.gc.ca).

### Residentes de California (CCPA/CPRA)

**No** vendemos ni compartimos ninguna información personal. No usamos datos para publicidad conductual cross-context. Tiene derechos a saber, eliminar, limitar el uso de datos sensibles y no discriminación.

### Residentes brasileños (LGPD)

Se aplican derechos equivalentes según Lei Geral de Proteção de Dados. Puede contactar a la [ANPD](https://www.gov.br/anpd).

### Nueva Zelanda (Privacy Act 2020)

Tiene derechos según la Privacy Act 2020, incluido el acceso y la corrección. Puede contactar al [Comisionado de Privacidad de NZ](https://www.privacy.org.nz).

### Otras jurisdicciones

Independientemente de su ubicación, tiene control total sobre sus datos. Donde la ley local otorgue derechos de privacidad adicionales que no puedan renunciarse por contrato, esos derechos se aplican.

## 11. Privacidad de los niños

Ni la Aplicación ni el Sitio Web están dirigidos a niños menores de 16 años. No recopilamos a sabiendas información personal de niños menores de 16 años. Si cree que un niño ha utilizado la Aplicación o el Sitio Web, puede eliminar sus datos borrando los datos de la Aplicación, desinstalando o cancelando la suscripción a la lista de espera.

## 12. Permisos explicados (Aplicación)

- **ACCESS_FINE_LOCATION** — GPS para el seguimiento de rutas durante las sesiones
- **ACCESS_BACKGROUND_LOCATION** — continuar el seguimiento cuando la pantalla está apagada
- **CAMERA** — capturar fotos para el registro de hallazgos
- **RECORD_AUDIO** — grabar notas de audio para hallazgos
- **READ/WRITE_CALENDAR** — escribe recordatorios de caducidad de permisos de la bóveda en el calendario local de su dispositivo. Si tiene activada la sincronización con un calendario en la nube en Android (por ejemplo, sincronización con Google Calendar), esos recordatorios se sincronizarán con su cuenta junto con el resto de su calendario — esa sincronización la controlan los ajustes de Android, no la Aplicación
- **INTERNET** — clima, geocodificación, mareas, mapas, suscripciones
- **POST_NOTIFICATIONS** — notificación de seguimiento GPS
- **VIBRATE** — alertas del límite del protector de perímetro

Puede revocar cualquier permiso en cualquier momento a través de la Configuración de Android.

## 13. Cookies y seguimiento

**La Aplicación** no utiliza cookies, balizas web, etiquetas pixel, huellas dactilares de dispositivos ni ninguna otra tecnología de seguimiento. **El Sitio Web** no establece cookies de primera parte; ver Sección 4.3 para la divulgación completa de cookies del Sitio Web.

## 14. Transferencias internacionales de datos

**Datos de la Aplicación:** Dado que todos los datos de detección se almacenan localmente en su dispositivo, no se producen transferencias internacionales de datos bajo nuestro control. Las llamadas a API de terceros pueden procesarse en las jurisdicciones donde operan esos servicios.

**Datos del Sitio Web:** Los correos electrónicos de la lista de espera se almacenan en la UE (Irlanda) por Supabase y se procesan por Resend (UE, Irlanda). Si accede al Sitio Web desde fuera de la UE, su correo electrónico se transfiere a la UE para su procesamiento.

## 15. Notificación de violación de datos

**Aplicación:** Dado que no almacenamos sus datos de detección en ningún servidor que operemos, una violación de datos que afecte los datos de la Aplicación por nuestra parte no es posible. Si tomamos conocimiento de una vulnerabilidad en la Aplicación, emitiremos una actualización y notificaremos a los usuarios a través de la Aplicación o el sitio web.

**Sitio Web:** Nuestros encargados (Supabase, Resend) mantienen sus propios protocolos de notificación de violaciones. En el caso poco probable de una violación que afecte su correo electrónico de la lista de espera, le notificaremos a usted y a la autoridad de supervisión correspondiente (ANSPDCP) dentro de las 72 horas según lo requerido por el GDPR.

## 16. Cambios en esta política

Podemos actualizar esta Política de Privacidad para reflejar cambios en la funcionalidad o leyes aplicables. La fecha de "Última actualización" se revisará. Los cambios sustanciales se comunicarán a través de la Aplicación o el sitio web.

## 17. Políticas de privacidad de terceros

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics y Crashlytics — solo opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Alojamiento del Sitio Web + analítica)
- [Supabase](https://supabase.com/privacy) (Base de datos del Sitio Web)
- [Resend](https://resend.com/legal/privacy-policy) (Correo electrónico del Sitio Web)

## 18. Contáctenos

**Coc Lorand Adrian P.F.A.** (operando como Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Correo electrónico: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Sitio web: [https://sweeptrack.pro](https://sweeptrack.pro)

Para consultas relacionadas con GDPR, también puede contactar a ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) en [dataprotection.ro](https://www.dataprotection.ro).

---

Esta Política de Privacidad entra en vigor el 12 de mayo de 2026 y se aplica a todas las versiones de SweepTrack Pro.
