## 8. Português (Portuguese)

# Política de Privacidade

**SweepTrack Pro** — Aplicação de rastreio GPS para deteção de metais

Data de vigência: 7 de abril de 2026 · Última atualização: 7 de abril de 2026

Operado por: Coc Lorand P.F.A., operando como "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introdução

Esta Política de Privacidade explica como o SweepTrack Pro ("a Aplicação") recolhe, utiliza, armazena e protege as suas informações. Estamos empenhados em proteger a sua privacidade e garantir a transparência sobre as nossas práticas de dados.

O SweepTrack Pro foi concebido com uma **arquitetura de privacidade em primeiro lugar**: todos os dados são armazenados localmente no seu dispositivo, não operamos servidores backend e não recolhemos, transmitimos ou vendemos os seus dados pessoais.

## 2. Responsável pelo Tratamento de Dados

Para efeitos do Regulamento Geral sobre a Proteção de Dados da UE (GDPR) e da lei romena de proteção de dados (Lei 190/2018), o responsável pelo tratamento de dados é:

**Coc Lorand P.F.A.** (operando como Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Dados que Recolhemos

### 3.1 Dados armazenados localmente no seu dispositivo

Os seguintes dados são criados por si e armazenados **exclusivamente no seu dispositivo**. Nunca temos acesso a estes dados, a menos que os partilhe explicitamente.

**Dados de localização e sessão:**

- Coordenadas GPS (latitude, longitude) durante sessões de rastreio ativas
- Valores de velocidade, altitude, rumo e precisão dos sensores do dispositivo
- Metadados da sessão: nome, data, hora de início/fim, duração, distância, etiquetas
- Coordenadas do percurso com marcas de tempo
- Nomes de locais (obtidos através de geocodificação inversa)

**Registos de achados e descobertas:**

- Tipo de achado (Tesouro, Ouro, Moeda, Relíquia, Joia, Lixo)
- Localização do achado (coordenadas GPS no momento do registo)
- Metadados opcionais: nome, notas, profundidade, valor estimado, peso
- Anexos multimédia: fotografias e gravações de áudio

**Dados do cofre de permissões:**

- Nomes e localizações de sítios
- Nomes e informações de contacto de proprietários de terras
- Números de permissão, datas de emissão, datas de expiração
- Coordenadas dos limites do sítio (polígono)
- Assinaturas digitais (formato SVG)
- Etiquetas e notas personalizadas

**Outros dados locais:** Configurações de predefinições de detetores, preferências da aplicação (tema, unidades, idioma, definições de mapa) e instantâneos meteorológicos associados a sessões.

### 3.2 Dados processados temporariamente (não armazenados)

Os seguintes dados são enviados para serviços de API de terceiros apenas para fins de funcionalidade em tempo real e **não são armazenados por nós ou por estes serviços para além do pedido imediato**:

- Coordenadas GPS aproximadas enviadas para Open-Meteo para previsões meteorológicas e dados de altitude
- Coordenadas GPS aproximadas enviadas para OpenStreetMap/Nominatim para pesquisa de endereços
- Coordenadas GPS aproximadas enviadas para Overpass API para descoberta de pontos de interesse históricos próximos
- Coordenadas GPS aproximadas enviadas para Wikipedia API para pesquisa geográfica de artigos próximos
- Identificadores de estações de marés enviados para NOAA para previsões de marés
- Consultas de pesquisa de localização enviadas para Open-Meteo Geocoding para pesquisa de nomes de locais

### 3.3 Dados processados por serviços de terceiros

**Google Maps SDK:** A localização do seu dispositivo é processada pelo Google Maps para exibição de mapa. Sujeito à [Política de Privacidade da Google](https://policies.google.com/privacy).

**Google Sign-In e Google Drive (Opcional):** Se ativar o backup no Google Drive, o endereço de email da sua conta Google é armazenado localmente para identificar a conta autenticada. Os dados de backup são carregados para a sua própria conta do Google Drive. Não temos acesso ao seu Google Drive.

**RevenueCat (Gestão de subscrições):** Um identificador de utilizador da aplicação anónimo e gerado aleatoriamente é utilizado para verificação de subscrição. Nenhuma informação pessoal é partilhada. Sujeito à [Política de Privacidade da RevenueCat](https://www.revenuecat.com/privacy).

### 3.4 Dados que NÃO recolhemos

- **Não** recolhemos nomes, emails, números de telefone ou quaisquer identificadores pessoais.
- **Não** utilizamos SDKs de análise, reporte de erros ou rastreio comportamental.
- **Não** utilizamos frameworks de publicidade ou identificadores de publicidade.
- **Não** rastreamos padrões de utilização, frequência de sessões ou utilização de funcionalidades.
- **Não** criamos perfis de utilizador ou impressões digitais comportamentais.
- **Não** partilhamos, vendemos, alugamos ou comercializamos dados com terceiros.
- **Não** operamos servidores que recebam, processem ou armazenem os seus dados.

## 4. Base legal para o processamento (GDPR)

- **Dados de GPS/sessão, registos de achados, entradas no cofre:** Consentimento (Art. 6(1)(a)) — o utilizador inicia ativamente estas ações.
- **Chamadas de API (meteorologia, geocodificação):** Interesse legítimo (Art. 6(1)(f)) — necessário para a funcionalidade principal.
- **Backup do Google Drive:** Consentimento (Art. 6(1)(a)) — o utilizador ativa e autentica-se explicitamente.
- **Verificação de subscrição:** Execução de um contrato (Art. 6(1)(b)) — necessário para fornecer funcionalidades pagas.

Pode retirar o seu consentimento a qualquer momento, interrompendo a atividade relevante ou desinstalando a Aplicação.

## 5. Como utilizamos os seus dados

Todo o processamento de dados ocorre **localmente no seu dispositivo**. Utilizamos os seus dados exclusivamente para fornecer as funcionalidades da Aplicação: exibição de mapa, rastreio de sessões, registo de achados, gestão de permissões, dados meteorológicos/marés, exportações, backup e verificação de subscrições.

## 6. Armazenamento e segurança de dados

- Os dados de sessões e achados são armazenados numa base de dados Room encriptada no seu dispositivo.
- As definições sensíveis utilizam EncryptedSharedPreferences (AES-256) do Android.
- Os ficheiros multimédia são armazenados no armazenamento interno privado da Aplicação, inacessível a outras aplicações.
- O backup na nuvem do Android está **desativado** (`android:allowBackup="false"`) para evitar a exposição não intencional de dados.
- Os backups do Google Drive utilizam as APIs encriptadas da Google (HTTPS/TLS) e existem exclusivamente na sua conta.

Não operamos servidores, bases de dados ou infraestrutura na nuvem.

## 7. Retenção de dados

Os dados locais são retidos até que opte por eliminá-los. Pode eliminar itens individuais na Aplicação, limpar todos os dados através das definições do Android ou desinstalar a Aplicação. Os backups do Google Drive persistem até que os elimine manualmente da sua conta.

## 8. Partilha e divulgação de dados

Não partilhamos, vendemos, alugamos ou divulgamos os seus dados pessoais a terceiros. Pode optar por partilhar dados através de exportações (GPX, KML, CSV, JSON), cartões de partilha de sessão ou backup do Google Drive — tudo iniciado pelo utilizador.

## 9. Os seus direitos (GDPR e internacionais)

### Direitos GDPR (Residentes na UE/EEE)

- **Acesso** — os seus dados estão totalmente acessíveis no seu dispositivo.
- **Retificação** — edite todos os registos diretamente na Aplicação.
- **Apagamento** — elimine através da eliminação na aplicação ou desinstalação.
- **Limitação** — controle todo o processamento iniciando/interrompendo funcionalidades.
- **Portabilidade de dados** — exporte via GPX, KML, CSV, JSON.
- **Oposição** — interrompa qualquer funcionalidade a qualquer momento.
- **Retirada do consentimento** — a qualquer momento, sem afetar o processamento anterior.

### Reino Unido (UK GDPR)

Os seus direitos ao abrigo do UK GDPR e do Data Protection Act 2018 são equivalentes aos direitos GDPR mencionados acima. Pode contactar o [ICO](https://ico.org.uk).

### Austrália (Privacy Act 1988)

Tem direitos ao abrigo dos Princípios de Privacidade Australianos (APPs), incluindo acesso e correção. Pode contactar o [OAIC](https://www.oaic.gov.au).

### Canadá (PIPEDA)

Tem direitos ao abrigo da PIPEDA e da legislação provincial de privacidade aplicável, incluindo acesso, correção e retirada de consentimento. Pode contactar o [Office of the Privacy Commissioner of Canada](https://www.priv.gc.ca).

### Residentes na Califórnia (CCPA/CPRA)

**Não** vendemos nem partilhamos qualquer informação pessoal. Não utilizamos dados para publicidade comportamental de contexto cruzado. Tem o direito de conhecer, eliminar, limitar a utilização de dados sensíveis e o direito à não discriminação.

### Residentes brasileiros (LGPD)

Aplicam-se direitos equivalentes ao abrigo da Lei Geral de Proteção de Dados. Pode contactar a [ANPD](https://www.gov.br/anpd).

### Nova Zelândia (Privacy Act 2020)

Tem direitos ao abrigo do Privacy Act 2020, incluindo acesso e correção. Pode contactar o [NZ Privacy Commissioner](https://www.privacy.org.nz).

### Outras jurisdições

Independentemente da sua localização, tem o controlo total dos seus dados através da Aplicação. Onde a lei local concede direitos de privacidade adicionais que não podem ser renunciados por contrato, esses direitos aplicam-se.

## 10. Privacidade das crianças

A Aplicação não se dirige a crianças com menos de 16 anos. Não recolhemos conscientemente informações pessoais de crianças com menos de 16 anos. Se acredita que uma criança utilizou a Aplicação, pode eliminar os seus dados limpando os dados da Aplicação ou desinstalando-a.

## 11. Explicação das permissões

- **ACCESS_FINE_LOCATION** — GPS para rastreio de percurso durante as sessões.
- **ACCESS_BACKGROUND_LOCATION** — continuação do rastreio quando o ecrã está desligado.
- **CAMERA** — captura de fotos para registo de achados.
- **RECORD_AUDIO** — gravação de notas de áudio para achados.
- **READ/WRITE_CALENDAR** — lembretes de expiração para o cofre de permissões.
- **INTERNET** — meteorologia, geocodificação, marés, mapas, subscrições.
- **POST_NOTIFICATIONS** — notificação para rastreio GPS.
- **VIBRATE** — alertas de limites para a guarda de perímetro.

Pode revogar qualquer permissão a qualquer momento através das definições do Android.

## 12. Cookies e rastreio

A Aplicação não utiliza cookies, web beacons, pixel tags, impressões digitais do dispositivo ou quaisquer outras tecnologias de rastreio.

## 13. Transferências internacionais de dados

Uma vez que todos os dados são armazenados localmente no seu dispositivo, não ocorrem transferências internacionais de dados sob o nosso controlo. As chamadas de API de terceiros podem ser processadas nas jurisdições onde esses serviços operam.

## 14. Notificação de violação de dados

Uma vez que não armazenamos os seus dados em nenhum servidor, não é possível uma violação de dados do nosso lado. Se tivermos conhecimento de uma vulnerabilidade na Aplicação, lançaremos uma atualização e notificaremos os utilizadores através da Aplicação ou do website.

## 15. Alterações a esta política

Podemos atualizar esta Política de Privacidade para refletir alterações na funcionalidade ou nas leis aplicáveis. A data de "Última atualização" será revista. As alterações materiais serão comunicadas através da Aplicação ou do website.

## 16. Políticas de privacidade de terceiros

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)

## 17. Contacte-nos

**Coc Lorand P.F.A.** (operando como Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

Para questões relacionadas com o GDPR, pode também contactar a ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) em [dataprotection.ro](https://www.dataprotection.ro).

---

Esta Política de Privacidade está em vigor desde 7 de abril de 2026 e aplica-se a todas as versões do SweepTrack Pro.

---