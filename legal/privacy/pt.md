# Política de Privacidade

**SweepTrack Pro** — Aplicação de rastreio GPS para deteção de metais

Data de vigência: 12 de maio de 2026 · Última atualização: 25 de maio de 2026

Operado por: Coc Lorand Adrian P.F.A., operando como "Loriba"

CUI: 41299288 · Reg. F24/646/2019

Website: sweeptrack.pro

---

## 1. Introdução

Esta Política de Privacidade explica como o SweepTrack Pro ("a Aplicação") e o site sweeptrack.pro ("o Website") recolhem, utilizam, armazenam e protegem as suas informações. Estamos empenhados em proteger a sua privacidade e garantir a transparência sobre as nossas práticas de dados.

A Aplicação foi concebida com uma **arquitetura de privacidade em primeiro lugar**: todos os dados de deteção são armazenados localmente no seu dispositivo, não operamos servidores backend para a Aplicação e não recolhemos, transmitimos ou vendemos os seus dados pessoais de deteção. O Website opera separadamente e tem as suas próprias práticas de dados, descritas na Secção 4.

## 2. Responsável pelo Tratamento de Dados

Para efeitos do Regulamento Geral sobre a Proteção de Dados da UE (GDPR) e da lei romena de proteção de dados (Lei 190/2018), o responsável pelo tratamento de dados é:

**Coc Lorand Adrian P.F.A.** (operando como Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)

## 3. Dados que Recolhemos (Aplicação Android)

### 3.1 Dados armazenados localmente no seu dispositivo

Os seguintes dados são criados por si e armazenados **exclusivamente no seu dispositivo**. Nunca temos acesso a estes dados a menos que os partilhe explicitamente.

**Dados de localização e sessão:**

- Coordenadas GPS (latitude, longitude) durante as sessões de rastreio ativas
- Velocidade, altitude, direção e precisão dos sensores do dispositivo
- Metadados da sessão: nome, data, hora de início/fim, duração, distância, etiquetas
- Coordenadas do percurso com marcas temporais
- Nomes de locais (obtidos por geocodificação inversa)

**Registos de achados:**

- Tipo de achado (Tesouro, Ouro, Moeda, Relíquia, Joia, Lixo)
- Localização do achado (coordenadas GPS no momento do registo)
- Metadados opcionais: nome, notas, profundidade, valor estimado, peso
- Anexos multimédia: fotografias e gravações áudio

**Dados do cofre de permissões:**

- Nomes e localizações dos locais
- Nomes dos proprietários e informações de contacto
- Números de permissão, datas de emissão, datas de validade
- Coordenadas dos limites do local (polígono)
- Assinaturas digitais (formato SVG)
- Etiquetas e notas personalizadas

**Outros dados locais:** Configurações de predefinições do detetor, preferências da aplicação (tema, unidades, idioma, configurações do mapa) e instantâneos meteorológicos associados às sessões.

### 3.2 Dados processados temporariamente (não armazenados)

Os seguintes dados são enviados para APIs de terceiros para funcionalidade em tempo real e **não são armazenados por nós ou por estes serviços para além do pedido imediato**:

- Coordenadas GPS aproximadas enviadas para Open-Meteo para previsões meteorológicas e dados de altitude
- Coordenadas GPS aproximadas enviadas para OpenStreetMap/Nominatim para pesquisa de endereços
- Coordenadas GPS aproximadas enviadas para Overpass API para descoberta de pontos de interesse históricos próximos
- Coordenadas GPS aproximadas enviadas para Wikipedia API para pesquisa geográfica de artigos próximos
- Identificadores de estações de marés enviados para NOAA para previsões de marés
- Pesquisas de localização enviadas para Open-Meteo Geocoding

### 3.3 Dados processados por serviços de terceiros

**Google Maps SDK:** A localização do seu dispositivo é processada pelo Google Maps para a apresentação do mapa. Sujeito à [Política de Privacidade do Google](https://policies.google.com/privacy).

**Google Sign-In e Google Drive (Opcional):** Se ativar a cópia de segurança no Google Drive, o endereço de email da sua conta Google é armazenado localmente para identificar a conta autenticada. Os dados de cópia de segurança são carregados para a sua própria conta Google Drive. Não temos acesso ao seu Google Drive.

**RevenueCat (Gestão de subscrições):** Um identificador de utilizador anónimo, gerado aleatoriamente, é utilizado para verificação de subscrição. Não são partilhadas informações pessoais. Sujeito à [Política de Privacidade do RevenueCat](https://www.revenuecat.com/privacy).

**Firebase Analytics e Crashlytics (Opcional — desativados por predefinição):** Dois SDKs Google Firebase estão integrados na Aplicação, mas **ambos permanecem inativos até que opte explicitamente** através do pedido de consentimento na primeira execução ou em **Definições → Privacidade → Diagnósticos**. Até que dê o consentimento, nenhum evento é enviado e nenhum relatório de falha é carregado. Pode retirar o consentimento a qualquer momento; a revogação tem efeito a partir do evento seguinte. As compilações de depuração nunca ativam o Crashlytics.

Quando ativados:

- **Firebase Analytics** regista oito nomes de eventos agregados com parâmetros não identificadores: `session_started`, `session_ended`, `find_logged`, `paywall_shown`, `premium_purchased`, `feature_gated`, `share_card_generated`, `preset_added`. O conteúdo dos eventos **nunca inclui** coordenadas GPS, endereços, nomes de achados, fotografias, gravações áudio, dados do cofre ou qualquer outra informação de identificação pessoal — apenas contagens, durações, distâncias, tipo de achado (apenas a categoria) e identificadores de funcionalidades.
- **Firebase Crashlytics** carrega rastros de pilha de falhas juntamente com o modelo do dispositivo, a versão do sistema operativo e a versão da aplicação para nos ajudar a diagnosticar bugs. Antes que qualquer falha ou erro não fatal seja encaminhado para o Crashlytics, a Aplicação **remove da mensagem da exceção as substrings com forma de coordenadas** (por exemplo, padrões `lat=`/`lon=`, decimais com sinal contendo três ou mais casas decimais), para que as posições GPS armazenadas em variáveis locais não possam vazar através do relatório de erros. Os frames da pilha (classe, método, linha) são preservados para o agrupamento; os valores em tempo de execução não são. Um manipulador de exceções não capturadas a nível de processo aplica a mesma limpeza às falhas fatais capturadas automaticamente pelo SDK.

Ambos os serviços estão sujeitos à [Política de Privacidade do Google](https://policies.google.com/privacy) e às [divulgações de privacidade e segurança do Firebase](https://firebase.google.com/support/privacy).

### 3.4 Dados que a Aplicação NÃO Recolhe

- **A Aplicação** não recolhe o seu nome, email, número de telefone ou quaisquer identificadores pessoais
- **A Aplicação** não utiliza análises nem relatórios de falhas a menos que opte explicitamente (ver a secção Firebase acima; desativado por predefinição e revogável a qualquer momento em Definições → Privacidade → Diagnósticos)
- **A Aplicação** não utiliza estruturas publicitárias ou identificadores publicitários
- **A Aplicação** não rastreia padrões de utilização, frequência de sessões ou uso de funcionalidades
- **A Aplicação** não cria perfis de utilizador ou impressões digitais comportamentais
- **A Aplicação** não partilha, vende, aluga ou troca dados com terceiros
- **A Aplicação** não opera servidores que recebam, processem ou armazenem os seus dados de deteção

As práticas de dados do Website são cobertas separadamente na Secção 4.

## 4. Práticas de dados do Website (sweeptrack.pro)

Esta secção cobre as práticas de dados específicas do nosso site sweeptrack.pro. A Aplicação Android descrita nas Secções 3 e 5–18 opera independentemente e não partilha infraestrutura com o Website.

### 4.1 Recolha de email para a lista de espera

Quando submete o seu email através de qualquer formulário de inscrição no Website, recolhemos:

- **Endereço de email** que fornece
- **Marca temporal** do registo
- **Endereço IP** (transitório) — utilizado para limitação de taxa; não armazenado para além da duração do pedido

**Finalidade:** Notificá-lo quando o SweepTrack Pro for lançado no Google Play e enviar atualizações pré-lançamento sobre o produto e a oferta Founder's Lifetime. Não usaremos o seu email para qualquer outro fim, não o partilharemos e não o venderemos.

**Base legal (GDPR):** Consentimento (Art. 6(1)(a)) — fornecido quando submete o formulário.

**Armazenamento:** Os endereços de email são armazenados numa base de dados Supabase Postgres alojada na UE (região da Irlanda). A Supabase, Inc. atua como nosso subcontratante de dados nos termos do seu Acordo Padrão de Tratamento de Dados.

**Entrega de email:** Os emails de saída são enviados via Resend, Inc. (região UE, Irlanda) atuando como nosso subcontratante de serviços de email nos termos do seu Acordo Padrão de Tratamento de Dados.

**Conservação:** Até cancelar a subscrição, ou 12 meses após o lançamento público do SweepTrack Pro no Google Play, o que ocorrer primeiro.

**Cancelar subscrição:** Responda com "remove" a qualquer email que enviamos, ou utilize o link List-Unsubscribe que o seu cliente de email exibe (Gmail e Outlook exibem-no ao lado do endereço De).

**Os seus direitos:** Acesso, retificação, apagamento, restrição, portabilidade e direito de retirar o consentimento. Envie um email para [support@sweeptrack.pro](mailto:support@sweeptrack.pro) para exercer qualquer um destes.

### 4.2 Análises do Website

O Website utiliza:

- **Vercel Analytics** — análises respeitadoras da privacidade que não utilizam cookies e não armazenam endereços IP individuais. Mede apenas visualizações de página agregadas.
- **Vercel Speed Insights** — medição dos Core Web Vitals (tempo de carregamento da página, deslocamento de layout, atrasos de interação) numa base agregada.

Ambas as ferramentas são operadas pela Vercel Inc. e sujeitas à [Política de Privacidade da Vercel](https://vercel.com/legal/privacy-policy). Não recolhem informações de identificação pessoal e não criam perfis de utilizador.

### 4.3 Cookies

O Website não define cookies de primeira parte para rastreio, publicidade ou criação de perfis. Vercel Analytics é sem cookies por design. Uma preferência de idioma, se a alterar, é armazenada no `localStorage` do seu navegador (não é um cookie) e só é legível pelo seu próprio navegador.

### 4.4 Alojamento e registos do servidor

O Website é alojado pela Vercel Inc. A Vercel pode registar automaticamente metadados de pedidos padrão (endereço IP, user agent, caminho do pedido, marca temporal) para fins operacionais, de desempenho e de segurança. Estes registos são conservados de acordo com as políticas padrão da Vercel e não são utilizados por nós para rastreio ou criação de perfis de indivíduos.

### 4.5 Os seus direitos para dados do Website

Os mesmos direitos GDPR, UK GDPR, australianos, canadianos, CCPA, LGPD e NZ Privacy Act descritos na Secção 10 aplicam-se igualmente aos seus dados recolhidos pelo Website. Para exercer qualquer direito relativamente ao seu email da lista de espera, contacte [support@sweeptrack.pro](mailto:support@sweeptrack.pro). Responderemos no prazo de 30 dias.

## 5. Base legal para o tratamento (GDPR)

- **Dados GPS/sessão, registos de achados, entradas do cofre:** Consentimento (Art. 6(1)(a)) — inicia ativamente estas ações
- **Chamadas API (meteo, geocodificação):** Interesse legítimo (Art. 6(1)(f)) — necessário para a funcionalidade básica
- **Cópia de segurança Google Drive:** Consentimento (Art. 6(1)(a)) — ativa e autentica explicitamente
- **Verificação de subscrição:** Execução do contrato (Art. 6(1)(b)) — necessária para fornecer funcionalidades pagas
- **Firebase Analytics e Crashlytics (opcional):** Consentimento (Art. 6(1)(a)) — ativado através do pedido na primeira execução ou nas Definições, revogável a qualquer momento
- **Email da lista de espera (Website):** Consentimento (Art. 6(1)(a)) — ver Secção 4.1

Pode retirar o consentimento a qualquer momento parando a atividade relevante, desinstalando a Aplicação ou cancelando a subscrição dos emails do Website.

## 6. Como utilizamos os seus dados

Todo o processamento de dados da Aplicação ocorre **localmente no seu dispositivo**. Utilizamos os dados da Aplicação exclusivamente para fornecer as funcionalidades da Aplicação: apresentação do mapa, rastreio de sessões, registo de achados, gestão de permissões, dados meteorológicos/de marés, exportações, cópia de segurança e verificação de subscrição.

Os dados do Website (o seu email da lista de espera) são utilizados apenas para enviar as comunicações de lançamento e pré-lançamento descritas na Secção 4.

## 7. Armazenamento e segurança dos dados

**Dados da Aplicação:**

- Os dados de sessão e achados são armazenados numa base de dados Room encriptada no seu dispositivo
- As preferências sensíveis utilizam EncryptedSharedPreferences (AES-256) do Android
- Os ficheiros multimédia são armazenados no armazenamento interno privado da Aplicação, inacessível a outras aplicações
- A cópia de segurança em nuvem do Android está **desativada** (`android:allowBackup="false"`) para evitar a exposição não intencional de dados
- As cópias de segurança Google Drive utilizam as APIs encriptadas do Google (HTTPS/TLS) e existem apenas na sua conta

Para a Aplicação, não operamos servidores, bases de dados ou infraestrutura em nuvem que armazenem os seus dados de deteção.

**Dados do Website:** Os emails da lista de espera são armazenados numa base de dados Supabase Postgres alojada na UE (Irlanda). As ligações são encriptadas (TLS). O acesso é restrito a fins administrativos apenas. O email de saída é enviado via Resend (UE, Irlanda) através de TLS. Ver Secção 4.

## 8. Conservação de dados

**Dados da Aplicação:** Os dados locais são conservados até decidir eliminá-los. Pode eliminar itens individuais dentro da Aplicação, limpar todos os dados através das Definições Android ou desinstalar a Aplicação. As cópias de segurança Google Drive persistem até as eliminar manualmente da sua conta.

**Dados do Website:** Os emails da lista de espera são conservados até cancelar a subscrição, ou 12 meses após o lançamento público, o que ocorrer primeiro. Depois disso, os endereços são eliminados da base de dados Supabase.

## 9. Partilha e divulgação de dados

Não partilhamos, vendemos, alugamos nem divulgamos os seus dados pessoais a quaisquer terceiros. Pode optar por partilhar dados da Aplicação através de exportações (GPX, KML, CSV, JSON), cartões de partilha de sessão ou cópia de segurança Google Drive — todos iniciados pelo utilizador. Os dados da lista de espera do Website são processados apenas pelos nossos subcontratantes nomeados (Supabase, Resend) para os fins descritos na Secção 4.

## 10. Os seus direitos (GDPR e internacionais)

### Direitos GDPR (Residentes UE/EEE)

- **Acesso** — os seus dados da Aplicação são totalmente acessíveis no seu dispositivo; para dados do Website, envie email para [support@sweeptrack.pro](mailto:support@sweeptrack.pro)
- **Retificação** — edite todos os registos diretamente na Aplicação, ou envie-nos um email para correções de dados do Website
- **Apagamento** — elimine através da eliminação na aplicação ou desinstalação; para dados do Website, cancele a subscrição ou envie-nos um email
- **Restrição** — controle todo o processamento iniciando/parando funcionalidades
- **Portabilidade de Dados** — exporte os dados da Aplicação via GPX, KML, CSV, JSON
- **Oposição** — pare qualquer funcionalidade a qualquer momento
- **Retirada do Consentimento** — a qualquer momento sem afetar o processamento anterior

### Reino Unido (UK GDPR)

Os seus direitos ao abrigo do UK GDPR e da Data Protection Act 2018 são equivalentes aos direitos GDPR acima. Pode contactar o [ICO](https://ico.org.uk).

### Austrália (Privacy Act 1988)

Tem direitos ao abrigo dos Australian Privacy Principles (APPs), incluindo o acesso e a correção. Pode contactar o [OAIC](https://www.oaic.gov.au).

### Canadá (PIPEDA)

Tem direitos ao abrigo do PIPEDA e da legislação provincial aplicável de privacidade, incluindo o acesso, a correção e a retirada do consentimento. Pode contactar o [Gabinete do Comissário de Privacidade do Canadá](https://www.priv.gc.ca).

### Residentes da Califórnia (CCPA/CPRA)

**Não** vendemos nem partilhamos quaisquer informações pessoais. Não utilizamos dados para publicidade comportamental entre contextos. Tem direitos de saber, eliminar, limitar a utilização de dados sensíveis e de não discriminação.

### Residentes brasileiros (LGPD)

Aplicam-se direitos equivalentes ao abrigo da Lei Geral de Proteção de Dados. Pode contactar a [ANPD](https://www.gov.br/anpd).

### Nova Zelândia (Privacy Act 2020)

Tem direitos ao abrigo do Privacy Act 2020, incluindo o acesso e a correção. Pode contactar o [Comissário de Privacidade NZ](https://www.privacy.org.nz).

### Outras jurisdições

Independentemente da sua localização, tem controlo total sobre os seus dados. Onde a lei local conceder direitos adicionais de privacidade que não possam ser renunciados por contrato, esses direitos aplicam-se.

## 11. Privacidade das crianças

Nem a Aplicação nem o Website são direcionados a crianças menores de 16 anos. Não recolhemos conscientemente informações pessoais de crianças menores de 16 anos. Se acredita que uma criança utilizou a Aplicação ou o Website, pode eliminar os seus dados limpando os dados da Aplicação, desinstalando ou cancelando a subscrição da lista de espera.

## 12. Permissões explicadas (Aplicação)

- **ACCESS_FINE_LOCATION** — GPS para rastreio de percurso durante as sessões
- **ACCESS_BACKGROUND_LOCATION** — continuar o rastreio quando o ecrã está desligado
- **CAMERA** — capturar fotos para registo de achados
- **RECORD_AUDIO** — gravar notas áudio para achados
- **READ/WRITE_CALENDAR** — escreve os lembretes de validade das permissões do cofre no calendário local do seu dispositivo. Se tiver ativada a sincronização com um calendário na nuvem no Android (por exemplo, sincronização do Google Calendar), esses lembretes serão sincronizados com a sua conta juntamente com o resto do seu calendário — essa sincronização é controlada pelas suas definições Android, não pela Aplicação
- **INTERNET** — meteo, geocodificação, marés, mapas, subscrições
- **POST_NOTIFICATIONS** — notificação de rastreio GPS
- **VIBRATE** — alertas de limite do guarda perimetral

Pode revogar qualquer permissão a qualquer momento através das Definições Android.

## 13. Cookies e rastreio

**A Aplicação** não utiliza cookies, web beacons, etiquetas pixel, impressões digitais de dispositivo ou quaisquer outras tecnologias de rastreio. **O Website** não define cookies de primeira parte; ver Secção 4.3 para divulgação completa dos cookies do Website.

## 14. Transferências internacionais de dados

**Dados da Aplicação:** Uma vez que todos os dados de deteção são armazenados localmente no seu dispositivo, não ocorrem transferências internacionais de dados sob o nosso controlo. As chamadas API a terceiros podem ser processadas nas jurisdições onde esses serviços operam.

**Dados do Website:** Os emails da lista de espera são armazenados na UE (Irlanda) pela Supabase e processados pelo Resend (UE, Irlanda). Se aceder ao Website a partir de fora da UE, o seu email é transferido para a UE para processamento.

## 15. Notificação de violação de dados

**Aplicação:** Uma vez que não armazenamos os seus dados de deteção em nenhum servidor que operemos, uma violação de dados que afete os dados da Aplicação do nosso lado não é possível. Se tomarmos conhecimento de uma vulnerabilidade na Aplicação, lançaremos uma atualização e notificaremos os utilizadores através da Aplicação ou do site.

**Website:** Os nossos subcontratantes (Supabase, Resend) mantêm os seus próprios protocolos de notificação de violações. No caso improvável de uma violação que afete o seu email da lista de espera, notificá-lo-emos a si e à autoridade de controlo competente (ANSPDCP) no prazo de 72 horas, conforme exigido pelo GDPR.

## 16. Alterações a esta política

Podemos atualizar esta Política de Privacidade para refletir alterações na funcionalidade ou nas leis aplicáveis. A data "Última atualização" será revista. As alterações materiais serão comunicadas através da Aplicação ou do site.

## 17. Políticas de privacidade de terceiros

- [Google (Maps, Drive, Sign-In)](https://policies.google.com/privacy)
- [Firebase (Analytics e Crashlytics — apenas opt-in)](https://firebase.google.com/support/privacy)
- [RevenueCat](https://www.revenuecat.com/privacy)
- [Open-Meteo](https://open-meteo.com/en/terms)
- [OpenStreetMap](https://wiki.osmfoundation.org/wiki/Privacy_Policy)
- [Wikipedia](https://foundation.wikimedia.org/wiki/Privacy_policy)
- [NOAA](https://www.noaa.gov/privacy-policy)
- [Vercel](https://vercel.com/legal/privacy-policy) (Alojamento Website + análises)
- [Supabase](https://supabase.com/privacy) (Base de dados Website)
- [Resend](https://resend.com/legal/privacy-policy) (Email Website)

## 18. Contacte-nos

**Coc Lorand Adrian P.F.A.** (operando como Loriba)  
CUI: 41299288 · Reg. F24/646/2019  
Email: [support@sweeptrack.pro](mailto:support@sweeptrack.pro)  
Website: [https://sweeptrack.pro](https://sweeptrack.pro)

Para consultas relacionadas com GDPR, também pode contactar a ANSPDCP (Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal) em [dataprotection.ro](https://www.dataprotection.ro).

---

Esta Política de Privacidade entra em vigor a 12 de maio de 2026 e aplica-se a todas as versões do SweepTrack Pro.
