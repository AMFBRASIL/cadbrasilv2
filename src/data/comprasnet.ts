/** Conteúdo /comprasnet — guia Compras.gov.br (Comprasnet) CADBRASIL */

export const comprasnetMeta = {
  path: "/comprasnet",
  title: "Comprasnet 2026 | O que é, para que serve e benefícios — Guia CADBRASIL",
  description:
    "Guia completo sobre o Comprasnet (Compras.gov.br): o que é, para que serve, módulos, benefícios para fornecedores, integração com SICAF, pregão eletrônico e como acessar com assessoria CADBRASIL.",
  keywords:
    "comprasnet, o que é comprasnet, compras.gov.br, portal compras governo, sicaf comprasnet, pregão eletronico comprasnet, fornecedor comprasnet, cadastro comprasnet, licitações federais, compras públicas digital, comprasnet 2026, comprasnet sicaf",
  quickAnswer:
    "Comprasnet é o nome popular do portal federal de compras públicas, hoje oficialmente Compras.gov.br. Serve para órgãos publicarem licitações, fornecedores enviarem propostas no pregão eletrônico e gerenciarem o cadastro SICAF. Benefícios: transparência, disputa online, rastreabilidade e acesso nacional a editais.",
};

export const comprasnetToc = [
  { id: "o-que-e", label: "O que é Comprasnet" },
  { id: "para-que-serve", label: "Para que serve" },
  { id: "beneficios", label: "Benefícios" },
  { id: "modulos", label: "Módulos principais" },
  { id: "sicaf", label: "Comprasnet e SICAF" },
  { id: "como-acessar", label: "Como acessar" },
  { id: "quem-usa", label: "Quem usa" },
  { id: "glossario", label: "Glossário" },
  { id: "comparativo", label: "Sozinho vs CADBRASIL" },
  { id: "erros-comuns", label: "Erros comuns" },
  { id: "cadbrasil", label: "Apoio CADBRASIL" },
  { id: "faq", label: "Perguntas frequentes" },
] as const;

export const resumoInteligente = [
  "Comprasnet e Compras.gov.br referem-se ao mesmo ecossistema federal de compras públicas.",
  "Órgãos federais publicam editais, dispensas e pregões eletrônicos na plataforma.",
  "Fornecedores credenciados no SICAF participam de licitações e enviam propostas online.",
  "O portal integra cadastro de fornecedores, disputa de lances, atas e contratos.",
  "Certificado digital e-CNPJ é requisito para acesso de empresas ao ambiente logado.",
  "Transparência e rastreabilidade são pilares da Lei 14.133/2021 no ambiente digital.",
  "Estados e municípios podem usar o PNCP; o federal concentra-se no Compras.gov.br.",
  "Sem SICAF regular, a empresa não habilita na maioria dos certames federais.",
];

export const paraQueServe = [
  {
    titulo: "Publicar licitações",
    descricao:
      "Órgãos do Executivo Federal divulgam editais, anexos, esclarecimentos e atas de pregão com transparência total.",
  },
  {
    titulo: "Disputar pregões",
    descricao:
      "Fornecedores enviam propostas e lances em tempo real no pregão eletrônico, sem deslocamento físico.",
  },
  {
    titulo: "Credenciar fornecedores",
    descricao:
      "O módulo SICAF no portal centraliza cadastro, documentos, níveis de habilitação e emissão do CRC.",
  },
  {
    titulo: "Gerir contratos",
    descricao:
      "Acompanhamento de empenhos, entregas e obrigações contratuais entre administração pública e fornecedores.",
  },
];

export const beneficios = [
  {
    titulo: "Transparência total",
    descricao: "Editais, propostas vencedoras e atas ficam registrados — reduz assimetria de informação.",
    publico: "Órgãos e fornecedores",
  },
  {
    titulo: "Acesso nacional",
    descricao: "Empresa em qualquer estado pode disputar pregão federal sem custo de deslocamento.",
    publico: "Fornecedores",
  },
  {
    titulo: "Agilidade no pregão",
    descricao: "Sessões eletrônicas com lances em minutos, acelerando a contratação pública.",
    publico: "Administração pública",
  },
  {
    titulo: "Rastreabilidade",
    descricao: "Histórico de participação, habilitação e contratos vinculado ao CNPJ no ecossistema.",
    publico: "Controle e auditoria",
  },
  {
    titulo: "Integração SICAF",
    descricao: "Cadastro único evita reenvio de documentos a cada licitação federal.",
    publico: "Fornecedores",
  },
  {
    titulo: "Economia de escala",
    descricao: "Digitalização reduz papel, logística e tempo entre publicação e contratação.",
    publico: "Governo e mercado",
  },
];

export const modulosPrincipais = [
  { modulo: "SICAF", funcao: "Cadastro e habilitação de fornecedores", uso: "Credenciamento, níveis I–VI, CRC" },
  { modulo: "Pregão eletrônico", funcao: "Disputa de preços online", uso: "Lances, propostas, classificação" },
  { modulo: "Editais e publicações", funcao: "Divulgação de certames", uso: "Consulta, download, esclarecimentos" },
  { modulo: "Atas e contratos", funcao: "Registro de resultados", uso: "Ata de registro de preços, contratos" },
  { modulo: "CATMAT / CATSER", funcao: "Catálogo de bens e serviços", uso: "Linhas de fornecimento (Nível VI)" },
  { modulo: "PNCP (integração)", funcao: "Transparência nacional", uso: "Publicação cruzada de contratações" },
];

export const passosAcesso = [
  {
    n: "01",
    t: "Obtenha certificado e-CNPJ",
    d: "Certificado digital A1 ou A3 vinculado ao CNPJ da empresa — requisito para login de pessoa jurídica.",
    time: "1 a 3 dias",
  },
  {
    n: "02",
    t: "Acesse compras.gov.br",
    d: "Entre no portal oficial do Governo Federal. O endereço substitui o antigo Comprasnet em comprasgovernais.gov.br.",
    time: "5 minutos",
  },
  {
    n: "03",
    t: "Faça login com certificado",
    d: "Selecione o certificado e-CNPJ no navegador ou middleware. Verifique validade e cadeia ICP-Brasil.",
    time: "2 minutos",
  },
  {
    n: "04",
    t: "Credencie-se no SICAF",
    d: "No módulo de fornecedores, inicie ou atualize o cadastro SICAF com documentos por nível de habilitação.",
    time: "1 a 5 dias",
  },
  {
    n: "05",
    t: "Emita CRC regular",
    d: "Com níveis ativos e certidões válidas, emita o Certificado de Registro Cadastral com status Regular.",
    time: "Imediato",
  },
  {
    n: "06",
    t: "Busque editais e participe",
    d: "Filtre oportunidades, analise o edital, envie proposta no prazo e dispute lances no pregão eletrônico.",
    time: "Contínuo",
  },
];

export const quemUsa = [
  "Ministérios, autarquias e fundações do Executivo Federal",
  "Empresas fornecedoras credenciadas no SICAF (MEI a S/A)",
  "Pregoeiros e equipes de compras de órgãos federais",
  "Consultorias e assessorias em licitações públicas",
  "Auditores e órgãos de controle (transparência dos dados)",
  "Estados e municípios que consultam ou integram dados ao PNCP",
];

export const glossarioComprasnet = [
  {
    term: "Comprasnet",
    def: "Nome histórico do sistema de compras eletrônicas do governo federal, hoje evoluído para Compras.gov.br.",
  },
  {
    term: "Compras.gov.br",
    def: "Portal oficial atual do Ministério da Gestão para licitações e contratos do Executivo Federal.",
  },
  {
    term: "SICAF",
    def: "Sistema de Cadastramento Unificado de Fornecedores — módulo de cadastro dentro do ecossistema Compras.gov.br.",
  },
  {
    term: "Pregão eletrônico",
    def: "Modalidade de licitação com disputa de lances em tempo real na plataforma digital.",
  },
  {
    term: "CRC",
    def: "Certificado de Registro Cadastral — comprova situação regular do fornecedor no SICAF.",
  },
  {
    term: "PNCP",
    def: "Portal Nacional de Contratações Públicas — centraliza publicações de órgãos em todo o Brasil.",
  },
];

export const comparativoComprasnet = [
  { aspecto: "Cadastro SICAF", sozinho: "Navegação complexa, alto risco de erro", cadbrasil: "Fluxo guiado em até 24h" },
  { aspecto: "Primeiro pregão", sozinho: "Semanas estudando o portal", cadbrasil: "Orientação documental e habilitação" },
  { aspecto: "Certidões", sozinho: "Controle manual de vencimentos", cadbrasil: "Monitoramento IA + alertas" },
  { aspecto: "Suporte", sozinho: "Tutoriais genéricos", cadbrasil: "Especialistas CADBRASIL + WhatsApp" },
];

export const errosComuns = [
  "Confundir Comprasnet antigo com o portal atual Compras.gov.br",
  "Tentar licitar sem credenciamento SICAF e CRC regular",
  "Usar certificado digital vencido ou de CNPJ diferente",
  "Ignorar prazos de proposta e sessão do pregão eletrônico",
  "Não ativar níveis de habilitação exigidos pelo edital",
  "Deixar certidões vencer após o primeiro cadastro",
];

export const comprasnetFaqs = [
  {
    question: "O que é Comprasnet?",
    answer:
      "Comprasnet é o nome pelo qual o mercado ainda conhece o portal federal de compras públicas. Oficialmente, a plataforma atual é o Compras.gov.br — onde órgãos publicam licitações e fornecedores disputam pregões e gerenciam o SICAF.",
  },
  {
    question: "Comprasnet e Compras.gov.br são a mesma coisa?",
    answer:
      "Sim, na prática. Comprasnet foi a denominação do sistema legado de compras eletrônicas. O governo consolidou e modernizou o ambiente no portal Compras.gov.br, mantendo funções como SICAF, pregão eletrônico e gestão de contratos.",
  },
  {
    question: "Para que serve o Comprasnet para fornecedores?",
    answer:
      "Para credenciar a empresa no SICAF, consultar editais federais, enviar propostas, disputar lances no pregão eletrônico, acompanhar habilitação e registrar contratos com órgãos do Executivo Federal.",
  },
  {
    question: "Preciso do SICAF para usar o Comprasnet?",
    answer:
      "Para participar de licitações federais, sim. O SICAF com CRC regular é requisito de habilitação na maioria dos certames. Você pode navegar em editais públicos sem login, mas para propor e licitar é necessário cadastro ativo.",
  },
  {
    question: "Como acessar o Comprasnet?",
    answer:
      "Acesse compras.gov.br, faça login com certificado digital e-CNPJ (A1 ou A3) e utilize o módulo de fornecedores para SICAF e pregões. A CADBRASIL conduz o credenciamento completo em fluxo assistido.",
  },
  {
    question: "Comprasnet é gratuito para empresas?",
    answer:
      "O acesso ao portal e o credenciamento SICAF não cobram taxa oficial. Há custos de certificado digital e, se optar por assessoria, serviços como os da CADBRASIL agilizam cadastro e reduzem risco de indeferimento.",
  },
  {
    question: "Qual a diferença entre Comprasnet e PNCP?",
    answer:
      "Compras.gov.br (Comprasnet) é o sistema operacional do Executivo Federal para licitar e contratar. O PNCP é o portal nacional de transparência que agrega publicações de órgãos federais, estaduais e municipais.",
  },
  {
    question: "MEI pode usar o Comprasnet?",
    answer:
      "Sim, desde que possua e-CNPJ, CNPJ ativo e documentação regular. A participação em cada edital depende das regras do certame — alguns limitam objeto ou valor para MEI.",
  },
  {
    question: "A CADBRASIL ajuda com Comprasnet e SICAF?",
    answer:
      "Sim. A CADBRASIL é especialista em credenciamento SICAF no Compras.gov.br: diagnóstico documental, níveis de habilitação, emissão de CRC, monitoramento de certidões e suporte para fornecedores que querem vender ao governo.",
  },
];

export const relatedGuides = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Cadastro SICAF passo a passo" },
  { to: "/como-cadastrar-no-sicaf-e-vender-para-o-governo", label: "Cadastrar e vender ao governo" },
  { to: "/pregao-eletronico", label: "Pregão eletrônico" },
  { to: "/como-participar-de-licitacao", label: "Como participar de licitação" },
  { to: "/documentacao-sicaf", label: "Documentação SICAF" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF" },
  { to: "/faq/cadastro-sicaf", label: "FAQ Cadastro SICAF" },
];

export const usefulLinks = [
  { href: "https://www.gov.br/compras", label: "Compras.gov.br (oficial)" },
  { href: "https://www.gov.br/pncp", label: "PNCP — Portal Nacional de Contratações" },
  { href: "https://cadastro.cadbrasil.com.br", label: "Cadastro assistido CADBRASIL" },
];

export const itemListBeneficios = beneficios.map((b) => b.titulo);

export const itemListModulos = modulosPrincipais.map((m) => m.modulo);
