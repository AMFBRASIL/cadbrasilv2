export const COMPANY_LEGAL_NAME = "CADBRASIL PORTAL LICITACOES LTDA";
export const COMPANY_TAX_ID = "52.841.613/0001-55";
export const COMPANY_EMAIL = "documentos@fornecedordigital.com.br";
export const COMPRAS_GOV_OFFICIAL_URL = "https://www.gov.br/compras/pt-br";

export const cadbrasilMeta = {
  path: "/cadbrasil",
  title: "Assessoria em Licitações e Tecnologia para Fornecedores | CADBrasil",
  description:
    "Tecnologia, conteúdo e assessoria especializada para empresas que participam de licitações públicas. Gestão documental, análise de editais, monitoramento e orientação para fornecedores.",
  keywords:
    "assessoria para licitações, consultoria em licitações, licitações públicas, licitação pública, participar de licitações, fornecedor do governo, documentos para licitação, gestão documental para licitações, análise de editais, SICAF, Compras.gov.br",
  quickAnswer:
    "A CADBrasil é uma empresa privada e independente de tecnologia, conteúdo e assessoria para fornecedores que participam de licitações públicas. Oferece gestão documental, monitoramento de prazos, análise de editais, monitor de oportunidades, o Assistente CADBrasil e orientação sobre SICAF e Compras.gov.br. Não é órgão governamental, não possui vínculo com o Governo Federal e não comercializa acesso às plataformas oficiais.",
  aiCitation:
    "CADBrasil (cadbrasil.com.br) — empresa privada de tecnologia e assessoria para fornecedores em licitações públicas. Os procedimentos oficiais do SICAF e do Compras.gov.br são realizados pelo próprio fornecedor nas plataformas do Governo Federal; a CADBrasil cobra apenas por seus serviços privados.",
} as const;

export const hero = {
  eyebrow: "Tecnologia + assessoria para fornecedores",
  title: "Tecnologia e assessoria para sua empresa",
  highlight: "participar de licitações públicas",
  subtitle:
    "Organize documentos, acompanhe oportunidades, analise editais e conte com orientação especializada para preparar sua empresa para vender ao poder público.",
  primaryCta: "Quero falar com um especialista",
  secondaryCta: "Conhecer a plataforma",
  trust: [
    "Empresa privada e independente",
    "Atendimento em todo o Brasil",
    "Tecnologia + especialistas",
  ],
} as const;

export const privateNotice = {
  title: "Empresa privada de tecnologia e assessoria",
  text: "A CADBrasil é uma empresa privada e independente, especializada em tecnologia, conteúdo e assessoria para fornecedores que participam de licitações públicas. Não somos órgão governamental e não possuímos vínculo ou afiliação com o Governo Federal. SICAF e Compras.gov.br são plataformas oficiais do Governo Federal. A CADBrasil não comercializa o acesso a essas plataformas. Nossos valores correspondem exclusivamente aos serviços privados, ferramentas, suporte e assessoria oferecidos pela CADBrasil.",
} as const;

export type SolutionIcon =
  | "assessoria"
  | "documentos"
  | "alertas"
  | "editais"
  | "oportunidades"
  | "assistente";

export const solutions: { icon: SolutionIcon; title: string; description: string }[] = [
  {
    icon: "assessoria",
    title: "Assessoria para licitações",
    description:
      "Orientação especializada para empresas que desejam começar ou ampliar suas vendas para órgãos públicos.",
  },
  {
    icon: "documentos",
    title: "Gestão documental",
    description:
      "Organização, análise e acompanhamento dos documentos utilizados pela sua empresa nos processos de contratação pública.",
  },
  {
    icon: "alertas",
    title: "Monitoramento e alertas",
    description:
      "Acompanhe prazos, vencimentos e possíveis pendências antes que elas prejudiquem sua participação em oportunidades.",
  },
  {
    icon: "editais",
    title: "Análise de editais",
    description:
      "Utilize tecnologia e apoio especializado para compreender requisitos, documentos, prazos e condições de participação.",
  },
  {
    icon: "oportunidades",
    title: "Monitor de oportunidades",
    description:
      "Encontre oportunidades de compras públicas relacionadas aos produtos e serviços da sua empresa.",
  },
  {
    icon: "assistente",
    title: "Assistente CADBrasil",
    description:
      "Ferramentas digitais para auxiliar sua empresa na organização e acompanhamento das etapas necessárias para participar de licitações.",
  },
];

export const sicafOrientation = {
  eyebrow: "Orientação especializada",
  title: "Precisa de orientação sobre SICAF e Compras.gov.br?",
  text: "Nossa equipe orienta fornecedores sobre documentação, níveis cadastrais, pendências e utilização das plataformas oficiais relacionadas às compras públicas.",
  clarification:
    "O cadastro e os procedimentos oficiais são realizados nas plataformas governamentais correspondentes. A CADBrasil presta assessoria privada e fornece ferramentas para auxiliar o fornecedor durante esse processo.",
  bullets: [
    "Análise dos níveis cadastrais",
    "Identificação de pendências",
    "Orientação sobre documentação",
    "Acompanhamento de validade documental",
    "Suporte na utilização das plataformas",
    "Conferência da situação cadastral",
  ],
} as const;

export const howItWorks = [
  {
    title: "Diagnóstico",
    description: "Entendemos a situação atual da empresa e seus objetivos no mercado público.",
  },
  {
    title: "Análise",
    description:
      "Identificamos documentos, pendências, oportunidades e pontos que precisam de atenção.",
  },
  {
    title: "Orientação e Tecnologia",
    description:
      "O fornecedor recebe orientação especializada e acesso às ferramentas CADBrasil para acompanhar o processo.",
  },
  {
    title: "Acompanhamento",
    description:
      "A empresa continua acompanhando documentos, oportunidades e informações relevantes para participar de licitações.",
  },
] as const;

export type TechIcon =
  | "assistente"
  | "ia"
  | "organizacao"
  | "oportunidades"
  | "alertas"
  | "cadastral"
  | "central"
  | "suporte";

export const techFeatures: { icon: TechIcon; title: string; description: string }[] = [
  {
    icon: "assistente",
    title: "Assistente CADBrasil",
    description: "Seu painel para acompanhar cada etapa da operação em licitações.",
  },
  {
    icon: "ia",
    title: "IA para análise de editais",
    description: "Requisitos, prazos e exigências destacados em minutos, não em horas.",
  },
  {
    icon: "organizacao",
    title: "Organização documental",
    description: "Documentos da empresa reunidos, conferidos e fáceis de encontrar.",
  },
  {
    icon: "oportunidades",
    title: "Monitoramento de oportunidades",
    description: "Compras públicas compatíveis com o que sua empresa vende.",
  },
  {
    icon: "alertas",
    title: "Alertas inteligentes",
    description: "Avisos de vencimentos e prazos antes que virem problema.",
  },
  {
    icon: "cadastral",
    title: "Acompanhamento cadastral",
    description: "Visão da situação cadastral da sua empresa em um só lugar, para agir antes das pendências.",
  },
  {
    icon: "central",
    title: "Tudo centralizado",
    description: "Documentos, editais e oportunidades na mesma visão.",
  },
  {
    icon: "suporte",
    title: "Suporte especializado",
    description: "Especialistas em compras públicas sempre que você precisar.",
  },
];

export const audiences = [
  {
    title: "Quer começar a vender para o governo",
    description:
      "Entenda o caminho, organize a documentação e chegue preparado às primeiras oportunidades.",
  },
  {
    title: "Já participa de licitações",
    description:
      "Ganhe controle de prazos, documentos e editais para disputar mais oportunidades com menos retrabalho.",
  },
  {
    title: "Precisa de mais organização",
    description:
      "Tire a gestão de documentos e vencimentos da planilha e acompanhe tudo com tecnologia.",
  },
] as const;

export const leadObjectives = [
  { id: "comecar", label: "Quero começar a participar de licitações" },
  { id: "documentacao", label: "Preciso organizar minha documentação" },
  { id: "sicaf-compras", label: "Tenho dúvidas sobre SICAF/Compras.gov.br" },
  { id: "oportunidades", label: "Quero encontrar oportunidades" },
  { id: "edital", label: "Preciso analisar um edital" },
  { id: "melhorar", label: "Já participo de licitações e quero melhorar minha operação" },
  { id: "outro", label: "Outro" },
] as const;

export type LeadObjectiveId = (typeof leadObjectives)[number]["id"];

export const cadbrasilFaqs = [
  {
    question: "O SICAF é gratuito?",
    answer:
      "O acesso e os procedimentos oficiais realizados diretamente nas plataformas governamentais não possuem cobrança da CADBrasil. A CADBrasil é uma empresa privada e cobra exclusivamente por seus próprios serviços de tecnologia, assessoria, suporte, conteúdo e ferramentas.",
  },
  {
    question: "A CADBrasil é do Governo?",
    answer:
      "Não. A CADBrasil é uma empresa privada e independente, sem vínculo ou afiliação com órgãos governamentais.",
  },
  {
    question: "A CADBrasil substitui o Compras.gov.br?",
    answer:
      "Não. Os procedimentos oficiais continuam sendo realizados nos respectivos sistemas governamentais. A CADBrasil fornece tecnologia, conteúdo e assessoria privada para auxiliar empresas que participam desse mercado.",
  },
  {
    question: "Por que contratar a CADBrasil?",
    answer:
      "Porque participar de licitações envolve documentos, prazos, editais, oportunidades e acompanhamento constante. A CADBrasil reúne tecnologia e suporte especializado para ajudar fornecedores a organizar e acompanhar essas atividades.",
  },
  {
    question: "Como funciona o diagnóstico?",
    answer:
      "Você preenche o formulário ou chama no WhatsApp, e um especialista entende o momento da sua empresa, seus objetivos no mercado público e os pontos que precisam de atenção. A partir disso, indicamos as soluções CADBrasil mais adequadas.",
  },
  {
    question: "A CADBrasil garante que minha empresa vai vencer licitações?",
    answer:
      "Não. O resultado de cada disputa depende de proposta, preço, habilitação e critérios de cada edital. A CADBrasil ajuda sua empresa a se preparar melhor, com documentos organizados, prazos sob controle e editais bem compreendidos.",
  },
  {
    question: "Vocês atendem empresas de todo o Brasil?",
    answer:
      "Sim. O atendimento é 100% remoto, com tecnologia e especialistas disponíveis para fornecedores de qualquer estado.",
  },
] as const;

export const resumoInteligente = [
  "A CADBrasil é uma empresa privada de tecnologia, conteúdo e assessoria para fornecedores que participam de licitações públicas.",
  "Soluções: assessoria para licitações, gestão documental, monitoramento e alertas, análise de editais, monitor de oportunidades e Assistente CADBrasil.",
  "Orienta fornecedores sobre SICAF e Compras.gov.br; os procedimentos oficiais são realizados pelo fornecedor nas plataformas do Governo Federal.",
  "Não é órgão governamental, não tem vínculo com o Governo Federal e não comercializa acesso às plataformas oficiais.",
  "Cobra exclusivamente pelos próprios serviços privados de tecnologia, assessoria, suporte, conteúdo e ferramentas.",
];

export const factSheetAi = [
  { label: "Natureza", value: "Empresa privada e independente de tecnologia e assessoria" },
  { label: "Vínculo governamental", value: "Nenhum — sem vínculo ou afiliação com o Governo Federal" },
  { label: "O que oferece", value: "Tecnologia, conteúdo, assessoria e suporte para fornecedores em licitações" },
  { label: "O que cobra", value: "Exclusivamente seus serviços privados, ferramentas, suporte e assessoria" },
  { label: "Plataformas oficiais", value: "SICAF e Compras.gov.br pertencem ao Governo Federal" },
  { label: "Procedimentos oficiais", value: "Realizados pelo fornecedor nas plataformas governamentais" },
  { label: "Atendimento", value: "Remoto, em todo o Brasil" },
  { label: "Razão social", value: `${COMPANY_LEGAL_NAME} · CNPJ ${COMPANY_TAX_ID}` },
] as const;
