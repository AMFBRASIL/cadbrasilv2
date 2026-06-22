/** Conteúdo /planos — planos CADBRASIL plataforma de licitações */

export type BillingPeriod = "semestral" | "anual" | "bienal";

export const planosMeta = {
  path: "/planos",
  title: "Planos CADBRASIL 2026 | Preços Plataforma de Licitações e SICAF",
  description:
    "Compare planos CADBRASIL: SICAF, busca de licitações, gestão documental, IA, monitoramento de pregão e consultoria jurídica. Assinatura semestral, anual ou bienal.",
  keywords:
    "planos CADBRASIL, preço plataforma licitações, assinatura sicaf, software licitações preço, quanto custa CADBRASIL, planos licitações governo, gestão licitações mensalidade",
  quickAnswer:
    "A CADBRASIL oferece quatro planos — Start, Licitações, Pro e Enterprise — com assinatura semestral, anual ou bienal. Todos incluem suporte humano; planos superiores agregam IA, monitoramento de pregão e consultoria jurídica.",
};

export const planosToc = [
  { id: "comparar", label: "Comparar planos" },
  { id: "periodos", label: "Períodos de assinatura" },
  { id: "recursos", label: "Recursos por plano" },
  { id: "incluso", label: "Em todos os planos" },
  { id: "ferramentas", label: "Ferramentas" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "cadastro", label: "Começar agora" },
] as const;

export const billingLabels: Record<BillingPeriod, string> = {
  semestral: "Semestral",
  anual: "Anual",
  bienal: "Bienal",
};

export const billingMonths: Record<BillingPeriod, number> = {
  semestral: 6,
  anual: 12,
  bienal: 24,
};

/** Preço total do período (em centavos de real para evitar float) */
export const planPricing: Record<string, Record<BillingPeriod, number>> = {
  start: { semestral: 89400, anual: 154800, bienal: 268800 },
  licitacoes: { semestral: 149400, anual: 262800, bienal: 458400 },
  pro: { semestral: 239400, anual: 418800, bienal: 718800 },
  enterprise: { semestral: 0, anual: 0, bienal: 0 },
};

export const plans = [
  {
    id: "start",
    name: "Start",
    tagline: "SICAF regular sem complicação",
    description: "Ideal para quem precisa credenciar, regularizar e manter o SICAF ativo com monitoramento de certidões.",
    highlight: false,
    cta: "Começar com Start",
    ctaHref: "/licitacoes-cadastro" as const,
    customPrice: false,
  },
  {
    id: "licitacoes",
    name: "Licitações",
    tagline: "Encontre e gerencie oportunidades",
    description: "Busca qualificada, boletins, gestão documental e pipeline de licitações para vender ao governo.",
    highlight: true,
    badge: "Mais popular",
    cta: "Testar Licitações",
    ctaHref: "/licitacoes-cadastro" as const,
    customPrice: false,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "IA + pregão + jurídico",
    description: "Tudo do plano Licitações com Assistente CADBRASIL IA, monitoramento de pregão e consultoria jurídica.",
    highlight: false,
    cta: "Escolher Pro",
    ctaHref: "/licitacoes-cadastro" as const,
    customPrice: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Multi-CNPJ e assessoria dedicada",
    description: "Para consultorias e grupos com vários CNPJs, gerente de conta e SLA prioritário.",
    highlight: false,
    cta: "Falar com vendas",
    ctaHref: "/licitacoes-cadastro" as const,
    customPrice: true,
  },
] as const;

export type FeatureValue = boolean | string;

export const featureRows: {
  category: string;
  features: { id: string; label: string; values: Record<string, FeatureValue> }[];
}[] = [
  {
    category: "SICAF e cadastro",
    features: [
      { id: "sicaf", label: "Credenciamento e regularização SICAF", values: { start: true, licitacoes: true, pro: true, enterprise: true } },
      { id: "crc", label: "Emissão e monitoramento de CRC", values: { start: true, licitacoes: true, pro: true, enterprise: true } },
      { id: "certidoes", label: "Monitoramento de certidões", values: { start: true, licitacoes: true, pro: true, enterprise: true } },
      { id: "niveis", label: "Níveis de habilitação I a VI", values: { start: "Até III", licitacoes: "Até V", pro: "Completo", enterprise: "Completo" } },
    ],
  },
  {
    category: "Oportunidades",
    features: [
      { id: "boletins", label: "Boletins de licitações", values: { start: false, licitacoes: true, pro: true, enterprise: true } },
      { id: "busca", label: "Encontrar licitações (filtros avançados)", values: { start: false, licitacoes: true, pro: true, enterprise: true } },
      { id: "acompanhamentos", label: "Acompanhamentos de processos", values: { start: false, licitacoes: true, pro: true, enterprise: true } },
      { id: "estrategicas", label: "Licitações estratégicas", values: { start: false, licitacoes: false, pro: true, enterprise: true } },
    ],
  },
  {
    category: "Gestão",
    features: [
      { id: "documentos", label: "Gerenciar documentos", values: { start: "Básico", licitacoes: true, pro: true, enterprise: true } },
      { id: "pipeline", label: "Gerenciar licitações (pipeline)", values: { start: false, licitacoes: true, pro: true, enterprise: true } },
      { id: "chat", label: "Monitorar chat do pregão", values: { start: false, licitacoes: false, pro: true, enterprise: true } },
      { id: "contratos", label: "Contratos e atas de registro de preços", values: { start: false, licitacoes: false, pro: true, enterprise: true } },
    ],
  },
  {
    category: "Inteligência",
    features: [
      { id: "mercado", label: "Análise de mercado", values: { start: false, licitacoes: false, pro: true, enterprise: true } },
      { id: "concorrentes", label: "Análise de concorrentes", values: { start: false, licitacoes: false, pro: true, enterprise: true } },
      { id: "ia-edital", label: "Análise do edital (IA)", values: { start: false, licitacoes: false, pro: true, enterprise: true } },
      { id: "assistente", label: "Assistente CADBRASIL IA", values: { start: false, licitacoes: "Limitado", pro: true, enterprise: true } },
    ],
  },
  {
    category: "Suporte",
    features: [
      { id: "whatsapp", label: "Suporte WhatsApp e AnyDesk", values: { start: true, licitacoes: true, pro: true, enterprise: true } },
      { id: "juridico", label: "Consultoria jurídica", values: { start: false, licitacoes: "Básico", pro: true, enterprise: "Ilimitado" } },
      { id: "cnpjs", label: "CNPJs gerenciados", values: { start: "1", licitacoes: "1", pro: "1", enterprise: "Sob medida" } },
      { id: "gerente", label: "Gerente de conta dedicado", values: { start: false, licitacoes: false, pro: false, enterprise: true } },
    ],
  },
];

export const inclusoTodos = [
  {
    titulo: "Monitoramento e coleta",
    descricao: "Acompanhamento de fontes oficiais e alertas de licitações, alterações e resultados relevantes ao seu perfil.",
  },
  {
    titulo: "Análise e classificação",
    descricao: "Equipe especializada classifica oportunidades para reduzir ruído e focar no que sua empresa pode disputar.",
  },
  {
    titulo: "Orientação e suporte",
    descricao: "Suporte humano para cadastro, habilitação e dúvidas operacionais em todas as etapas da licitação.",
  },
];

export const ferramentasPlanos = [
  "Banco de dados de licitações",
  "Boletins diários por e-mail",
  "Gestão de documentos",
  "Gerenciamento de licitações",
  "Monitoramento de chat",
  "Análise de concorrentes",
  "Análise de mercado",
  "Consultoria jurídica",
  "Assessoria cadastral SICAF",
];

export const planosFaqs = [
  {
    question: "Quais as formas de pagamento da assinatura?",
    answer:
      "Assinaturas semestrais (6 meses), anuais (12 meses) ou bienais (24 meses) podem ser pagas via PIX, boleto ou cartão de crédito. Parcelamento conforme o plano escolhido.",
  },
  {
    question: "É possível assinar como pessoa física?",
    answer:
      "A CADBRASIL atua no segmento B2B — comercializamos para empresas (CNPJ) que vendem ao governo. MEI, ME, EPP e demais portes são bem-vindos.",
  },
  {
    question: "Posso trocar de plano depois?",
    answer:
      "Sim. Você pode fazer upgrade a qualquer momento. Downgrades são avaliados no ciclo de renovação para manter acesso aos recursos já contratados.",
  },
  {
    question: "O cadastro no SICAF junto ao governo está incluso?",
    answer:
      "O credenciamento oficial no Compras.gov.br é gratuito perante o governo. Nossos planos cobrem assessoria, tecnologia, monitoramento e suporte para manter tudo regular.",
  },
  {
    question: "Existe período de teste?",
    answer:
      "Sim. Cadastre-se em /licitacoes-cadastro para avaliação gratuita da plataforma. Nossa equipe alinha o plano ideal ao seu porte e objetivo comercial.",
  },
  {
    question: "Qual plano é ideal para começar?",
    answer:
      "Se sua prioridade é apenas SICAF, o Start resolve. Se já quer disputar licitações com busca e gestão, escolha Licitações. Para IA, pregão e jurídico, o Pro é o mais completo.",
  },
];

export function formatPlanPrice(cents: number): string {
  return (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function monthlyEquivalent(cents: number, period: BillingPeriod): string {
  const months = billingMonths[period];
  const monthly = cents / months / 100;
  return monthly.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
