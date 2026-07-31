/** Conteúdo /proposta — montador interativo de proposta anual CADBRASIL */

export const propostaMeta = {
  path: "/proposta",
  shortTitle: "Proposta CADBRASIL",
  metaTitle: "Monte sua Proposta CADBRASIL — SICAF + Módulos Anuais | Preço sob medida",
  metaDescription:
    "Configure sua proposta CADBRASIL: pacote base SICAF + gestor de certidões e editais por R$ 985/ano. Adicione leitor de licitações, IA, contratos, concorrentes e mais.",
  keywords:
    "proposta cadbrasil, preço sicaf anual, gestor de certidões, gestor de editais, leitor de licitações, leitura edital ia, gestão contratos licitação, impugnação, assistente sicaf",
  quickAnswer:
    "A proposta CADBRASIL começa em R$ 985/ano com SICAF gratuito, Gestor de certidões e Gestor de editais. Você adiciona módulos (leitor de licitações, IA, contratos, concorrentes, impugnação, assistente e análise completa) e o valor anual atualiza na hora.",
};

export const editorialTrust = {
  how: {
    updatedLabel: "28 jul 2026",
    readingTime: "~3 min",
  },
};

/** Pacote base — sempre incluso */
export const pacoteBase = {
  id: "base",
  titulo: "Pacote base CADBRASIL",
  precoAnual: 985,
  itens: [
    {
      id: "sicaf",
      nome: "SICAF gratuito",
      descricao:
        "Credenciamento e regularização do SICAF no Compras.gov.br com suporte CADBRASIL — o governo não cobra taxa de cadastro; a assessoria está no pacote.",
    },
    {
      id: "certidoes",
      nome: "Gestor de certidões",
      descricao:
        "Monitoramento de vencimentos (CND, FGTS, CNDT e correlatas), alertas e fila de renovação para manter o CRC Regular.",
    },
    {
      id: "editais",
      nome: "Gestor de editais",
      descricao:
        "Organização e acompanhamento de editais relevantes para o seu CNPJ, com priorização e status em um só painel.",
    },
  ],
};

export type ModuloProposta = {
  id: string;
  nome: string;
  precoAnual: number;
  resumo: string;
  explicacao: string;
  defaultOn?: boolean;
};

/** Módulos opcionais — valores anuais em BRL */
export const modulosOpcionais: ModuloProposta[] = [
  {
    id: "leitor-licitacoes",
    nome: "Leitor de licitações",
    precoAnual: 1150,
    resumo: "Busca e triagem contínua de oportunidades no mercado público.",
    explicacao:
      "Varre fontes oficiais e organiza licitações compatíveis com o perfil da sua empresa (objeto, porte, região). Reduz tempo de pesquisa manual e aumenta o volume de editais relevantes que chegam à sua equipe.",
  },
  {
    id: "leitura-edital-ia",
    nome: "Leitura de Edital com IA",
    precoAnual: 250,
    resumo: "Resumo inteligente de exigências, prazos e riscos do edital.",
    explicacao:
      "A IA destaca documentos exigidos, datas críticas, critérios de habilitação e pontos de atenção do edital — para você decidir rápido se vale participar e o que preparar antes do pregão.",
  },
  {
    id: "gestao-contratos",
    nome: "Gestão de contratos das licitações",
    precoAnual: 200,
    resumo: "Controle de contratos, atas e obrigações pós-homologação.",
    explicacao:
      "Centraliza contratos e atas de registro de preços: prazos, entregas, aditivos e alertas de vencimento — para não perder obrigação após ganhar a licitação.",
  },
  {
    id: "concorrentes",
    nome: "Leitura dos concorrentes nas licitações",
    precoAnual: 350,
    resumo: "Visão dos participantes e padrões de disputa.",
    explicacao:
      "Acompanha quem disputa os mesmos objetos, histórico de participação e sinais de competitividade — útil para precificar com mais inteligência e escolher batalhas com melhor chance.",
  },
  {
    id: "impugnacao",
    nome: "Gerador de impugnação",
    precoAnual: 190,
    resumo: "Apoio estruturado para questionar irregularidades no edital.",
    explicacao:
      "Gera base organizada para impugnação/esclarecimento com fundamentação e checklist de prazos — agiliza a resposta da equipe jurídica ou do especialista CADBRASIL.",
  },
  {
    id: "assistente-sicaf",
    nome: "Assistente do SICAF digital Online",
    precoAnual: 200,
    resumo: "Painel digital para status SICAF, pendências e próximos passos.",
    explicacao:
      "Assistente online com visão do cadastro, alertas de irregularidade e orientação do que regularizar — complemento do gestor de certidões com fluxo guiado no dia a dia.",
  },
  {
    id: "analise-completa",
    nome: "Análise completa do processo de licitação",
    precoAnual: 900,
    resumo: "Revisão ponta a ponta: edital, habilitação, riscos e estratégia.",
    explicacao:
      "Análise especializada do processo completo — do edital à estratégia de participação — com parecer de riscos, lacunas documentais e recomendações para aumentar a chance de habilitação e disputa competitiva.",
  },
];

/** Referência de mercado para contraste (pacote completo típico /ano) */
export const mercadoReferenciaAnual = 6500;

export const beneficiosProposta = [
  "Valores anuais transparentes — sem surpresa mensal escondida",
  "SICAF + certidões + editais já no pacote base",
  "Monte só o que sua empresa usa",
  "Suporte humano CADBRASIL",
  "Onboarding ágil após fechamento",
];

export const propostaFaqs = [
  {
    question: "O que já vem no valor de R$ 985/ano?",
    answer:
      "O pacote base inclui SICAF gratuito (assessoria de credenciamento/regularização), Gestor de certidões e Gestor de editais — tudo com cobrança anual.",
  },
  {
    question: "Os módulos são cobrados por mês?",
    answer:
      "Não. Todos os valores desta página são anuais. Ao marcar um módulo, o acréscimo entra no total anual da proposta.",
  },
  {
    question: "Posso começar só com o pacote base?",
    answer:
      "Sim. O pacote base (R$ 985/ano) já entrega o essencial para manter SICAF, certidões e editais sob controle. Depois você pode ampliar a proposta.",
  },
  {
    question: "Como fecho a proposta?",
    answer:
      "Monte os módulos, clique em Gerar proposta e fale no WhatsApp com o resumo e o valor. Nossa equipe confirma o escopo e o onboarding.",
  },
  {
    question: "O SICAF do governo é realmente gratuito?",
    answer:
      "Sim: o credenciamento oficial no Compras.gov.br não tem taxa governamental. O valor CADBRASIL cobre assessoria, tecnologia e gestão contínua.",
  },
];

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function calcTotalAnual(selectedIds: string[]): number {
  const extras = modulosOpcionais
    .filter((m) => selectedIds.includes(m.id))
    .reduce((sum, m) => sum + m.precoAnual, 0);
  return pacoteBase.precoAnual + extras;
}
