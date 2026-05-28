export type LandingFaq = { question: string; answer: string };

export type LandingSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LandingPageData = {
  path: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  quickAnswer: string;
  sections: LandingSection[];
  faqs: LandingFaq[];
};

const baseFaqs: LandingFaq[] = [
  {
    question: "O SICAF é obrigatório para vender ao governo?",
    answer:
      "Para licitações federais, sim. Sem SICAF regular, a empresa não conclui a fase de habilitação em pregões no ecossistema Compras.gov.br.",
  },
  {
    question: "Quanto tempo leva para concluir o processo?",
    answer:
      "Com documentação completa e sem pendências fiscais complexas, o fluxo assistido pela CADBRASIL pode ser concluído em até 24 horas.",
  },
  {
    question: "A CADBRASIL cuida só do cadastro inicial?",
    answer:
      "Não. Também fazemos regularização, atualização de certidões, renovação contínua e monitoramento automático para evitar bloqueios.",
  },
];

export const landingPages: Record<string, LandingPageData> = {
  "/credenciamento": {
    path: "/credenciamento",
    shortTitle: "Credenciamento SICAF",
    metaTitle: "Credenciamento SICAF 2026 — Cadastro de Fornecedor Federal | CADBRASIL",
    metaDescription:
      "Guia completo de credenciamento SICAF para fornecedores: documentos, certificado digital, níveis de habilitação e prazo de liberação.",
    keywords:
      "credenciamento sicaf, credenciar empresa no sicaf, cadastro fornecedor federal, compras gov credenciamento, habilitacao sicaf",
    eyebrow: "Credenciamento oficial",
    title: "Credenciamento SICAF",
    highlight: "rápido e seguro",
    description:
      "Estruturamos o credenciamento da sua empresa no SICAF com validação documental, checklist por CNPJ e emissão de CRC em fluxo assistido.",
    quickAnswer:
      "Credenciamento SICAF é o processo de habilitar sua empresa como fornecedora no sistema federal. Exige e-CNPJ, dados societários e certidões válidas.",
    sections: [
      {
        id: "como-funciona",
        title: "Como funciona o credenciamento",
        paragraphs: [
          "O credenciamento começa no Compras.gov.br com autenticação por certificado digital e-CNPJ, seguido pelo preenchimento do Nível I e envio dos documentos dos demais níveis exigidos.",
          "Empresas com divergência de dados cadastrais, certidões vencidas ou classificação incompleta de níveis tendem a ser desclassificadas em editais relevantes.",
        ],
      },
      {
        id: "o-que-e-necessario",
        title: "O que sua empresa precisa ter",
        paragraphs: [
          "A base mínima inclui CNPJ ativo, contrato social atualizado, representante legal válido e certidões fiscais/trabalhistas dentro do prazo.",
        ],
        bullets: [
          "Certificado digital e-CNPJ A1 ou A3",
          "CND Federal, FGTS e CNDT válidas",
          "Contrato social sem desatualização",
          "Níveis de habilitação alinhados ao edital-alvo",
        ],
      },
    ],
    faqs: baseFaqs,
  },
  "/renovacao-sicaf": {
    path: "/renovacao-sicaf",
    shortTitle: "Renovação SICAF",
    metaTitle: "Renovação SICAF — Certidões e Regularidade Contínua | CADBRASIL",
    metaDescription:
      "Renove seu SICAF com antecedência: certidões, regularização fiscal e monitoramento para não perder licitações por vencimento.",
    keywords:
      "renovacao sicaf, renovar sicaf, certidoes vencidas sicaf, atualizar cadastro sicaf, regularidade fornecedor governo",
    eyebrow: "Renovação contínua",
    title: "Renovação SICAF",
    highlight: "sem riscos de bloqueio",
    description:
      "Renovamos certidões e mantemos seu cadastro regular com monitoramento proativo para sua empresa não perder oportunidades por documentação vencida.",
    quickAnswer:
      "A renovação SICAF não é anual fixa; ela ocorre conforme o vencimento de cada certidão. Sem renovação, o cadastro fica irregular.",
    sections: [
      {
        id: "por-que-renovar",
        title: "Por que renovar antes do vencimento",
        paragraphs: [
          "A maioria das perdas em licitações acontece por descuido operacional: certidão vence, proposta é enviada e a habilitação reprova na etapa final.",
          "Renovar com antecedência evita urgência, retrabalho e exposição da equipe a riscos de desclassificação por detalhes documentais.",
        ],
      },
      {
        id: "renovacao-cadbrasil",
        title: "Renovação com tecnologia CADBRASIL",
        paragraphs: [
          "Usamos monitoramento automatizado de vencimentos e fila de renovação por prioridade de edital para manter sua empresa apta durante todo o mês.",
        ],
        bullets: [
          "Alertas por vencimento e pendência",
          "Validação automática + revisão humana",
          "Painel com status de cada certidão",
        ],
      },
    ],
    faqs: baseFaqs,
  },
  "/como-fazer-cadastro-no-sicaf": {
    path: "/como-fazer-cadastro-no-sicaf",
    shortTitle: "Como Fazer Cadastro",
    metaTitle: "Como Fazer Cadastro no SICAF — Passo a Passo Atualizado | CADBRASIL",
    metaDescription:
      "Aprenda como fazer cadastro no SICAF com processo oficial, documentos por nível, prazos e erros comuns que travam a habilitação.",
    keywords:
      "como fazer cadastro no sicaf, passo a passo sicaf, cadastro compras gov, documentos sicaf 2026, habilitacao fornecedor",
    eyebrow: "Guia prático",
    title: "Como fazer cadastro",
    highlight: "no SICAF",
    description:
      "Conteúdo orientado para ação com o fluxo oficial, documentação necessária e recomendações para concluir o cadastro sem indeferimento.",
    quickAnswer:
      "Para fazer cadastro no SICAF, acesse o Compras.gov.br com e-CNPJ, preencha o Nível I e envie os documentos dos níveis de habilitação exigidos.",
    sections: [
      {
        id: "passo-a-passo",
        title: "Passo a passo resumido",
        paragraphs: [
          "Prepare certificado digital, valide dados societários, separe certidões e preencha o cadastro inicial. Em seguida, conclua níveis jurídicos, fiscais, trabalhistas e técnicos conforme o edital.",
        ],
        bullets: [
          "Acesso com e-CNPJ no portal oficial",
          "Preenchimento do credenciamento inicial",
          "Upload documental por nível",
          "Correção de pendências e emissão de CRC",
        ],
      },
      {
        id: "erros-criticos",
        title: "Erros que mais derrubam aprovação",
        paragraphs: [
          "As falhas recorrentes são certidão vencida, ausência de nível exigido e divergência de razão social entre documentos.",
        ],
      },
    ],
    faqs: baseFaqs,
  },
  "/plataforma-digital": {
    path: "/plataforma-digital",
    shortTitle: "Plataforma Digital",
    metaTitle: "Plataforma Digital SICAF — Gestão Inteligente de Cadastro | CADBRASIL",
    metaDescription:
      "Conheça a plataforma digital da CADBRASIL para gerir cadastro SICAF, certidões, renovação e status de habilitação em tempo real.",
    keywords:
      "plataforma digital sicaf, sistema de gestao sicaf, dashboard sicaf, monitoramento certidoes, cadbrasil plataforma",
    eyebrow: "Tecnologia CADBRASIL",
    title: "Plataforma digital",
    highlight: "para gestão SICAF",
    description:
      "Centralize certidões, status de níveis, protocolos e pendências em um único painel com automação e suporte especializado.",
    quickAnswer:
      "A plataforma digital CADBRASIL reúne cadastro, renovação, monitoramento e suporte do SICAF em ambiente único para reduzir falhas operacionais.",
    sections: [
      {
        id: "visao-geral",
        title: "O que a plataforma entrega",
        paragraphs: [
          "A equipe ganha previsibilidade: tudo o que está válido, vencendo ou pendente fica visível em um painel único, com histórico e próximos passos recomendados.",
        ],
        bullets: [
          "Painel com certidões por validade",
          "Status de níveis I a VI",
          "Alertas e priorização por edital",
          "Integração com suporte humano",
        ],
      },
      {
        id: "beneficio-negocio",
        title: "Benefício para operação e vendas",
        paragraphs: [
          "Com governança documental contínua, sua empresa reduz desclassificações por erro básico e aumenta taxa de aproveitamento de oportunidades.",
        ],
      },
    ],
    faqs: baseFaqs,
  },
  "/como-cadastrar-empresa-sicaf": {
    path: "/como-cadastrar-empresa-sicaf",
    shortTitle: "Cadastrar Empresa",
    metaTitle: "Como Cadastrar Empresa no SICAF — Guia para Fornecedores | CADBRASIL",
    metaDescription:
      "Veja como cadastrar sua empresa no SICAF com segurança: requisitos jurídicos, fiscais e técnicos para licitar no governo federal.",
    keywords:
      "como cadastrar empresa no sicaf, empresa no compras gov, credenciamento fornecedor empresa, cadastro cnpj sicaf",
    eyebrow: "Para CNPJ",
    title: "Como cadastrar sua",
    highlight: "empresa no SICAF",
    description:
      "Guia para empresas de todos os portes (MEI, ME, EPP, LTDA e S/A) com foco em habilitação correta desde o primeiro envio.",
    quickAnswer:
      "Para cadastrar empresa no SICAF, é necessário CNPJ ativo, e-CNPJ válido e documentos societários/fiscais compatíveis com os níveis exigidos.",
    sections: [
      {
        id: "porte-empresa",
        title: "Empresas que podem se cadastrar",
        paragraphs: [
          "MEI, ME, EPP e empresas de médio/grande porte podem se credenciar, desde que cumpram requisitos do edital e mantenham regularidade documental.",
        ],
      },
      {
        id: "conformidade",
        title: "Conformidade antes de enviar",
        paragraphs: [
          "A recomendação é validar coerência de CNAE, contrato social e certidões para evitar retrabalho e bloqueio no momento de habilitação.",
        ],
        bullets: [
          "Dados cadastrais e societários consistentes",
          "Certidões válidas e sem divergência de CNPJ",
          "Representante legal com poderes atualizados",
        ],
      },
    ],
    faqs: baseFaqs,
  },
  "/autoatendimento-sicaf": {
    path: "/autoatendimento-sicaf",
    shortTitle: "Autoatendimento SICAF",
    metaTitle: "Autoatendimento SICAF — Fluxo Guiado e Suporte Especializado | CADBRASIL",
    metaDescription:
      "Autoatendimento SICAF com checklist inteligente, validação automática e suporte humano para acelerar cadastro e regularização.",
    keywords:
      "autoatendimento sicaf, self service sicaf, cadastro sicaf online, checklist sicaf automatico, suporte sicaf",
    eyebrow: "Self-service assistido",
    title: "Autoatendimento SICAF",
    highlight: "com segurança",
    description:
      "Você avança no próprio ritmo com fluxo guiado, validação por IA e possibilidade de acionar especialista quando necessário.",
    quickAnswer:
      "O autoatendimento SICAF da CADBRASIL combina autonomia do cliente com validações automáticas e apoio técnico para evitar erros críticos.",
    sections: [
      {
        id: "modelo",
        title: "Como funciona o autoatendimento",
        paragraphs: [
          "O sistema apresenta as etapas por prioridade, valida arquivos enviados e destaca inconsistências antes da submissão oficial.",
        ],
      },
      {
        id: "quando-acionar-time",
        title: "Quando acionar especialista",
        paragraphs: [
          "Sempre que houver pendência fiscal, dúvidas sobre níveis ou exigências técnicas de edital, o atendimento humano entra para destravar rapidamente.",
        ],
        bullets: [
          "Pendências fiscais/trabalhistas",
          "Editais com exigência complexa",
          "Divergência societária/documental",
        ],
      },
    ],
    faqs: baseFaqs,
  },
  "/sicaf-digital": {
    path: "/sicaf-digital",
    shortTitle: "SICAF Digital",
    metaTitle: "SICAF Digital — Cadastro e Regularização Online | CADBRASIL",
    metaDescription:
      "SICAF Digital com processo 100% online: cadastro, atualização e regularização com monitoramento inteligente e suporte especializado.",
    keywords:
      "sicaf digital, sicaf online, cadastro sicaf digital, regularizacao sicaf online, plataforma sicaf",
    eyebrow: "Operação 100% online",
    title: "SICAF Digital",
    highlight: "de ponta a ponta",
    description:
      "Do cadastro inicial à renovação contínua, tudo acontece em ambiente digital com rastreabilidade de documentos e status.",
    quickAnswer:
      "SICAF Digital é a gestão do cadastro de fornecedor em fluxo online, com validação documental e controle de regularidade em tempo real.",
    sections: [
      {
        id: "digitalizacao",
        title: "Digitalização com controle",
        paragraphs: [
          "Digitalizar sem processo gera caos. No SICAF Digital da CADBRASIL, cada documento entra com metadados, validade e vínculo com nível de habilitação.",
        ],
      },
      {
        id: "performance",
        title: "Impacto na performance de licitação",
        paragraphs: [
          "Com dados organizados e atualizados, sua equipe reduz tempo de resposta a editais e minimiza risco de inabilitação por falha operacional.",
        ],
      },
    ],
    faqs: baseFaqs,
  },
  "/sicaf-cadastro-unificado-de-fornecedores": {
    path: "/sicaf-cadastro-unificado-de-fornecedores",
    shortTitle: "Cadastro Unificado",
    metaTitle: "SICAF Cadastro Unificado de Fornecedores — Guia Completo | CADBRASIL",
    metaDescription:
      "Entenda o SICAF (Cadastro Unificado de Fornecedores), níveis de habilitação e como manter sua empresa regular para licitações públicas.",
    keywords:
      "sicaf cadastro unificado de fornecedores, sistema de cadastramento unificado, fornecedor governo federal, habilitacao sicaf",
    eyebrow: "Conceito oficial",
    title: "SICAF: cadastro unificado",
    highlight: "de fornecedores",
    description:
      "Página de referência para explicar o que é o SICAF, por que ele existe e como funciona na prática para fornecedores públicos.",
    quickAnswer:
      "SICAF é o Sistema de Cadastramento Unificado de Fornecedores do governo federal, usado para habilitar empresas em licitações e contratos públicos.",
    sections: [
      {
        id: "definicao",
        title: "O que é o SICAF",
        paragraphs: [
          "É a base unificada de cadastro e habilitação de fornecedores. Centraliza informações jurídicas, fiscais, trabalhistas, econômico-financeiras e técnicas.",
        ],
      },
      {
        id: "na-pratica",
        title: "Como isso afeta sua empresa",
        paragraphs: [
          "Sem regularidade no SICAF, a empresa perde competitividade e pode ser desclassificada em fases decisivas de contratação pública.",
        ],
        bullets: [
          "Habilitação mais rápida em editais",
          "Menos retrabalho documental",
          "Mais previsibilidade de compliance",
        ],
      },
    ],
    faqs: baseFaqs,
  },
  "/credenciamento-sicaf-digital": {
    path: "/credenciamento-sicaf-digital",
    shortTitle: "Credenciamento Digital",
    metaTitle: "Credenciamento SICAF Digital — Processo Online Assistido | CADBRASIL",
    metaDescription:
      "Credenciamento SICAF Digital com validação de documentos, monitoramento de pendências e acompanhamento especializado até o CRC.",
    keywords:
      "credenciamento sicaf digital, credenciamento online sicaf, cadastro fornecedor digital, crc sicaf digital",
    eyebrow: "Credenciamento online",
    title: "Credenciamento SICAF",
    highlight: "digital assistido",
    description:
      "Fluxo digital com checklist inteligente e acompanhamento técnico para concluir o credenciamento com velocidade e governança.",
    quickAnswer:
      "O credenciamento SICAF Digital permite cadastrar e habilitar fornecedores em processo online, com controle documental e suporte especializado.",
    sections: [
      {
        id: "processo-digital",
        title: "Processo digital em etapas",
        paragraphs: [
          "A jornada inclui onboarding, conferência documental, validação de níveis, envio no portal e acompanhamento até emissão do CRC.",
        ],
      },
      {
        id: "governanca",
        title: "Governança e rastreabilidade",
        paragraphs: [
          "Cada atualização fica registrada com histórico de envio e pendência, facilitando auditoria interna e resposta rápida a exigências de edital.",
        ],
      },
    ],
    faqs: baseFaqs,
  },
};

export function getLandingPage(path: string): LandingPageData {
  const page = landingPages[path];
  if (!page) {
    throw new Error(`Landing page not found for path: ${path}`);
  }
  return page;
}
