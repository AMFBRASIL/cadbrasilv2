export const leadSources = {
  cadbrasil: {
    label: "Landing /cadbrasil (assessoria e tecnologia)",
    objectives: [
      { id: "comecar", label: "Quero começar a participar de licitações" },
      { id: "documentacao", label: "Preciso organizar minha documentação" },
      { id: "sicaf-compras", label: "Tenho dúvidas sobre SICAF/Compras.gov.br" },
      { id: "oportunidades", label: "Quero encontrar oportunidades" },
      { id: "edital", label: "Preciso analisar um edital" },
      { id: "melhorar", label: "Já participo de licitações e quero melhorar minha operação" },
      { id: "outro", label: "Outro" },
    ],
  },
  caufesp: {
    label: "Assessoria CAUFESP (/caufesp)",
    objectives: [
      { id: "orientacao-caufesp", label: "Quero orientação sobre o processo do CAUFESP" },
      { id: "rc-rcs", label: "Tenho dúvidas entre RC e RCS" },
      { id: "documentacao", label: "Preciso organizar a documentação" },
      { id: "pendencias", label: "Meu processo tem pendências" },
      { id: "atualizacao", label: "Preciso atualizar as informações da empresa" },
      { id: "bec-sp", label: "Quero começar a vender na BEC/SP" },
      { id: "outro", label: "Outro" },
    ],
  },
  bll: {
    label: "Guia BLL Compras (/bll-compras-guia-para-licitantes)",
    objectives: [
      { id: "comecar-bll", label: "Quero começar a participar de licitações na BLL" },
      { id: "edital-bll", label: "Preciso analisar um edital da BLL" },
      { id: "documentacao", label: "Quero organizar minha documentação de habilitação" },
      { id: "oportunidades", label: "Quero encontrar oportunidades na BLL e em outros portais" },
      { id: "melhorar", label: "Já participo e quero melhorar meus resultados" },
      { id: "outro", label: "Outro" },
    ],
  },
} as const;

export type LeadSource = keyof typeof leadSources;

export const LEAD_SOURCE_IDS = Object.keys(leadSources) as [LeadSource, ...LeadSource[]];

export function getLeadObjectives(source: LeadSource): readonly { id: string; label: string }[] {
  return leadSources[source].objectives;
}

export function leadObjectiveLabel(source: LeadSource, id: string) {
  return getLeadObjectives(source).find((o) => o.id === id)?.label ?? id;
}
