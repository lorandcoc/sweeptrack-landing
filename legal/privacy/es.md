# Política de Privacidad

**SweepTrack Pro** — Aplicación de seguimiento GPS para detección de metales

Fecha de entrada en vigor: 7 de abril de 2026 · Última actualización: 7 de abril de 2026

Operado por: Coc Lorand P.F.A., operando como "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Sitio web: sweeptrack.pro

---

## 1. Introducción

Esta Política de Privacidad explica cómo SweepTrack Pro ("la Aplicación") recopila, utiliza, almacena y protege su información. Nos comprometemos a proteger su privacidad y a garantizar la transparencia sobre nuestras prácticas de datos.

SweepTrack Pro está diseñado con una **arquitectura de privacidad primero**: todos los datos se almacenan localmente en su dispositivo, no operamos servidores backend y no recopilamos, transmitimos ni vendemos sus datos personales.

## 2. Responsable del Tratamiento de Datos

A efectos del Reglamento General de Protección de Datos de la UE (GDPR) y de la ley rumana de protección de datos (Ley 190/2018), el responsable del tratamiento de los datos es:

**Coc Lorand P.F.A.** (operando como Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Correo electrónico: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Datos que recopilamos

### 3.1 Datos almacenados localmente en su dispositivo

Los siguientes datos son creados por usted y se almacenan **exclusivamente en su dispositivo**. Nunca tenemos acceso a estos datos a menos que los comparta explícitamente.

**Datos de ubicación y sesión:**

- Coordenadas GPS (latitud, longitud) durante las sesiones de seguimiento activas
- Valores de velocidad, altitud, rumbo y precisión de los sensores del dispositivo
- Metadatos de la sesión: nombre, fecha, hora de inicio/fin, duración, distancia, etiquetas
- Coordenadas de la ruta con marcas de tiempo
- Nombres de lugares (obtenidos mediante geocodificación inversa)

**Registros de hallazgos y descubrimientos:**

- Tipo de hallazgo (Tesoro, Oro, Moneda, Reliquia, Joya, Basura)
- Ubicación del hallazgo (coordenadas GPS en el momento del registro)
- Metadatos opcionales: nombre, notas, profundidad, valor estimado, peso
- Archivos multimedia adjuntos: fotografías y grabaciones de audio

**Datos de la bóveda de permisos:**

- Nombres y ubicaciones de los sitios
- Nombres e información de contacto de los propietarios de las tierras
- Números de permiso, fechas de emisión, fechas de vencimiento
- Coordenadas de los límites del sitio (polígono)
- Firmas digitales (formato SVG)
- Etiquetas y notas personalizadas

**Otros datos locales:** Configuraciones de ajustes preestablecidos del detector, preferencias de la aplicación (tema, unidades, idioma, ajustes del mapa) e instantáneas del tiempo asociadas a las sesiones.

### 3.2 Datos procesados temporalmente (no almacenados)

Los siguientes datos se envían a servicios de API de terceros únicamente para la funcionalidad en tiempo real y **no son almacenados por nosotros ni por estos servicios más allá de la solicitud inmediata**:

- Coordenadas GPS aproximadas enviadas a Open-Meteo para pronósticos meteorológicos y datos de altitud
- Coordenadas GPS aproximadas enviadas a OpenStreetMap/Nominatim para la búsqueda de direcciones
- Coordenadas GPS aproximadas enviadas a Overpass API para el descubrimiento de puntos de interés históricos cercanos
- Coordenadas GPS aproximadas enviadas a Wikipedia API para la búsqueda geográfica de artículos cercanos
- Identificadores de estaciones de mareas enviados a NOAA para predicciones de mareas
- Consultas de búsqueda de ubicación enviadas a Open-Meteo Geocoding para la búsqueda de nombres de lugares

### 3.3 Datos procesados por servicios de terceros

**Google Maps SDK:** La ubicación de su dispositivo es procesada por Google Maps para la visualización del mapa. Sujeto a la [Política de Privacidad de Google](https://policies.google.com/privacy).

**Google Sign-In y Google Drive (Opcional):** Si habilita la copia de seguridad en Google Drive, la dirección de correo electrónico de su cuenta de Google se almacena localmente para identificar la cuenta autenticada. Los datos de la copia de seguridad se cargan en su propia cuenta de Google Drive. No tenemos acceso a su Google Drive.

**RevenueCat (Gestión de suscripciones):** Se utiliza un identificador de usuario de la aplicación anónimo y generado aleatoriamente para la verificación de la suscripción. No se comparte información personal. Sujeto a la [Política de Privacidad de RevenueCat](https://www.revenuecat.com/privacy).

### 3.4 Datos que NO recopilamos

- **No** recopilamos nombres, correos electrónicos, números de teléfono ni ningún identificador personal.
- **No** utilizamos SDK de analíticas, informes de errores o seguimiento del comportamiento.
- **No** utilizamos marcos publicitarios ni identificadores de publicidad.
- **No** rastreamos patrones de uso, frecuencia de sesiones o uso de funciones.
- **No** creamos perfiles de usuario ni huellas dactilares de comportamiento.
- **No** compartimos, vendemos, alquilamos ni comercializamos datos con terceros.
- **No** operamos servidores que reciban, procesen o almacenen sus datos.

## 4. Base legal para el tratamiento (GDPR)

- **Datos de GPS/sesión, registros de hallazgos, entradas de la bóveda:** Consentimiento (Art. 6(1)(a)) — usted inicia activamente estas acciones.
- **Llamadas a la API (tiempo, geocodificación):** Interés legítimo (Art. 6(1)(f)) — necesario para la funcionalidad principal.
- **Copia de seguridad en Google Drive:** Consentimiento (Art. 6(1)(a)) — usted habilita y se autentica explícitamente.
- **Verificación de suscripción:** Ejecución de un contrato (Art. 6(1)(b)) — necesario para proporcionar funciones de pago.

Puede retirar su consentimiento en cualquier momento deteniendo la actividad correspondiente o desinstalando la Aplicación.

## 5. Cómo utilizamos sus datos

Todo el tratamiento de datos se realiza **localmente en su dispositivo**. Utilizamos sus datos exclusivamente para proporcionar las funciones de la Aplicación: visualización de mapas, seguimiento de sesiones, registro de hallazgos, gestión de permisos, datos meteorológicos/mareas, exportaciones, copias de seguridad y verificación de suscripciones.

## 6. Almacenamiento y seguridad de los datos

- Los datos de las sesiones y los hallazgos se almacenan en una base de datos Room encriptada en su dispositivo.
- Los ajustes sensibles utilizan EncryptedSharedPreferences (AES-256) de Android.
- Los archivos multimedia se almacenan en el almacenamiento interno privado de la Aplicación, inaccesible para otras aplicaciones.
- La copia de seguridad en la nube de Android está **deshabilitada** (`android:allowBackup="false"`) para evitar la exposición involuntaria de datos.
- Las copias de seguridad de Google Drive utilizan las API encriptadas de Google (HTTPS/TLS) y existen exclusivamente en su cuenta.

No operamos servidores, bases de datos ni infraestructura en la nube.

## 7. Retención de datos

Los datos locales se conservan hasta que usted decida eliminarlos. Puede eliminar elementos individuales dentro de la Aplicación, borrar todos los datos a través de los ajustes de Android o desinstalar la Aplicación. Las copias de seguridad de Google Drive persisten hasta que las elimine manualmente de su cuenta.

## 8. Intercambio y divulgación de datos

No compartimos, vendemos, alquilamos ni divulgamos sus datos personales a ningún tercero. Puede optar por compartir datos a través de exportaciones (GPX, KML, CSV, JSON), tarjetas para compartir sesiones o la copia de seguridad de Google Drive, todo ello iniciado por el usuario.

## 9. Sus derechos (GDPR e internacionales)

### Derechos según el GDPR (Residentes en la UE/EEE)

- **Acceso:** sus datos son totalmente accesibles en su dispositivo.
- **Rectificación:** edite todos los registros directamente en la Aplicación.
- **Supresión:** elimine los datos mediante la eliminación en la aplicación o la desinstalación.
- **Restricción:** controle todo el tratamiento iniciando/deteniendo funciones.
- **Portabilidad de datos:** exporte a través de GPX, KML, CSV, JSON.
- **Oposición:** detenga cualquier función en cualquier momento.
- **Retirada del consentimiento:** en cualquier momento sin afectar al tratamiento anterior.

### Reino Unido (UK GDPR)

Sus derechos bajo el UK GDPR y la Ley de Protección de Datos de 2018 son equivalentes a los derechos del GDPR mencionados anteriormente. Puede ponerse en contacto con la [ICO](https://ico.org.uk).

### Australia (Privacy Act 1988)

Tiene derechos bajo los Principios de Privacidad de Australia (APPs), incluyendo el acceso y la corrección. Puede ponerse en contacto con la [OAIC](https://www.oaic.gov.au).

### Canadá (PIPEDA)

Tiene derechos bajo la PIPEDA y la legislación provincial de privacidad aplicable, incluyendo el acceso, la corrección y la retirada del consentimiento. Puede ponerse en contacto con la [Oficina del Comisionado de Privacidad de Canadá](https://www.priv.gc.ca).

### Residentes en California (CCPA/CPRA)

**No** vendemos ni compartimos ninguna información personal. No utilizamos datos para publicidad conductual de contexto cruzado. Tiene derecho a conocer, eliminar, limitar el uso de datos sensibles y el derecho a la no discriminación.

### Residentes en Brasil (LGPD)

Se aplican derechos equivalentes bajo la Lei Geral de Proteção de Dados. Puede ponerse en contacto con la [ANPD](https://www.gov.br/anpd).

### Nueva Zelanda (Privacy Act 2020)

Tiene derechos bajo la Privacy Act 2020, incluyendo el acceso y la corrección. Puede ponerse en contacto con el [Comisionado de Privacidad de NZ](https://www.privacy.org.nz).

### Otras jurisdicciones

Independientemente de su ubicación, usted tiene el control total de sus datos a través de la Aplicación. Cuando la legislación local otorgue derechos de privacidad adicionales que no puedan renunciarse por contrato, se aplicarán dichos derechos.

## 10. Privacidad de los niños

La Aplicación no está dirigida a niños menores de 16 años. No recopilamos a sabiendas información personal de niños menores de 16 años. Si cree que un niño ha utilizado la Aplicación, puede eliminar sus datos borrando los datos de la Aplicación o desinstalándola.

## 11. Explicación de los permisos

- **ACCESS_FINE_LOCATION** — GPS para el seguimiento de la ruta durante las sesiones.
- **ACCESS_BACKGROUND_LOCATION** — continuación del seguimiento cuando la pantalla está apagada.
- **CAMERA** — captura de fotos para el registro de hallazgos.
- **RECORD_AUDIO** — grabación de notas de audio para los hallazgos.
- **READ/WRITE_CALENDAR** — recordatorios de vencimiento para la bóveda de permisos.
- **INTERNET** — tiempo, geocodificación, mareas, mapas, suscripciones.
- **POST_NOTIFICATIONS** — notificación de seguimiento GPS.
- **VIBRATE** — alertas de límites para el protector de perímetro.

Puede revocar cualquier permiso en cualquier momento a través de los ajustes de Android.

## 12. Cookies y seguimiento

La Aplicación no utiliza cookies, balizas web, etiquetas de píxel, huellas dactilares del dispositivo ni ninguna otra tecnología de seguimiento.

## 13. Transferencias internacionales de datos

Dado que todos los datos se almacenan localmente en su dispositivo, no se producen transferencias internacionales de datos bajo nuestro control. Las llamadas a API de terceros pueden procesarse en las jurisdicciones donde operan dichos servicios.

## 14. Notificación de brechas de seguridad

Dado que no almacenamos sus datos en ningún servidor, no es posible que se produzca una brecha de datos por nuestra parte. Si llegamos a tener conocimiento de una vulnerabilidad en la Aplicación, publicaremos una actualización y notificaremos a los usuarios a través de la Aplicación o del sitio web.

## 15. Cambios en esta política

Es posible que actualicemos esta Política de Privacidad para reflejar cambios en la funcionalidad o en las leyes aplicables. Se revisará la fecha de "Última actualización". Los cambios sustanciales se comunicarán a través de la Aplicación o del sitio web.

## 16. Políticas de privacidad de terceros

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Contacto

**Coc Lorand P.F.A.** (operando como Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Correo electrónico: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Sitio web: [https://sweeptrack.pro](https://sweeptrack.pro)

Para consultas relacionadas con el GDPR, también puede ponerse en contacto con la ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) en [dataprotection.ro](https://www.dataprotection.ro).

---

Esta Política de Privacidad entra en vigor el 7 de abril de 2026 y se aplica a todas las versiones de SweepTrack Pro.

---