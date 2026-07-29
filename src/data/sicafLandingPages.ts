import { documentacaoSicafFaqs, itemListForSchema } from "./documentacaoSicaf";

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
  /** Lista para schema ItemList (ex.: documentos) */
  itemList?: string[];
  /** Passos para schema HowTo */
  howToSteps?: { name: string; text: string }[];
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
  "/cadastro-sicaf": {
    path: "/cadastro-sicaf",
    shortTitle: "Cadastro SICAF",
    metaTitle: "Cadastro SICAF 2026 — Guia Completo para Fornecedores | CADBRASIL",
    metaDescription:
      "Cadastro SICAF completo para empresas: documentos, níveis de habilitação, certificado digital, prazo e emissão de CRC para licitações federais.",
    keywords:
      "cadastro sicaf, cadastrar no sicaf, credenciamento sicaf 2026, documentos sicaf, fornecedor governo federal, compras.gov.br",
    eyebrow: "Cadastro oficial",
    title: "Cadastro SICAF",
    highlight: "do zero ao CRC",
    description:
      "Fluxo completo para cadastrar sua empresa no SICAF com segurança jurídica, validação documental e acompanhamento até habilitação regular.",
    quickAnswer:
      "O cadastro SICAF habilita sua empresa para participar de licitações federais. Exige e-CNPJ, dados societários consistentes e certidões válidas por nível.",
    sections: [
      {
        id: "etapas-cadastro",
        title: "Etapas críticas do cadastro",
        paragraphs: [
          "O processo correto envolve credenciamento inicial, habilitação jurídica, regularidade fiscal/trabalhista e validação econômico-financeira/técnica conforme o edital.",
          "Erros de estrutura documental ou escolha incompleta de níveis costumam gerar indeferimento e atraso em oportunidades de compra pública.",
        ],
        bullets: [
          "Onboarding com checklist por CNPJ",
          "Validação por nível de habilitação",
          "Correção de pendências antes do envio oficial",
          "Emissão de CRC com cadastro regular",
        ],
      },
      {
        id: "tempo-risco",
        title: "Prazo, risco e desempenho em licitações",
        paragraphs: [
          "Empresas que tratam o SICAF como projeto estratégico reduzem perdas por inabilitação e melhoram taxa de aproveitamento em pregões.",
        ],
      },
    ],
    faqs: baseFaqs,
  },
  "/credenciamento": {
    path: "/credenciamento",
    shortTitle: "Credenciamento SICAF",
    metaTitle: "Credenciar Minha Empresa no SICAF 2026 — Credenciamento SICAF | CADBRASIL",
    metaDescription:
      "Credenciar minha empresa no SICAF: credenciamento SICAF com e-CNPJ, documentos, níveis e CRC. CADBRASIL conclui o fluxo assistido em até 24 horas.",
    keywords:
      "credenciar minha empresa no sicaf, credenciamento sicaf minha empresa, credenciamento sicaf, credenciar empresa no sicaf, cadastro fornecedor federal, habilitacao sicaf",
    eyebrow: "Credenciamento oficial",
    title: "Credenciar minha empresa",
    highlight: "no SICAF",
    description:
      "Credenciamento SICAF da sua empresa com validação documental, checklist por CNPJ e emissão de CRC em fluxo assistido pela CADBRASIL.",
    quickAnswer:
      "Credenciar minha empresa no SICAF significa habilitar o CNPJ como fornecedor federal no Compras.gov.br. Exige e-CNPJ, dados societários e certidões válidas — a CADBRASIL conduz até o CRC Regular.",
    sections: [
      {
        id: "como-funciona",
        title: "Como funciona o credenciamento SICAF da minha empresa",
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
      {
        id: "credenciamento-cadbrasil",
        title: "Credenciamento SICAF com a CADBRASIL",
        paragraphs: [
          "Se a prioridade é credenciar minha empresa no SICAF sem retrabalho, a CADBRASIL valida o checklist, conduz o portal e acompanha até o CRC Regular — em até 24h com documentação ok.",
        ],
      },
    ],
    faqs: [
      ...baseFaqs,
      {
        question: "Como credenciar minha empresa no SICAF?",
        answer:
          "Reúna e-CNPJ e documentos, acesse o Compras.gov.br ou inicie pelo portal CADBRASIL. Conduzimos o credenciamento SICAF da sua empresa até o CRC Regular.",
      },
      {
        question: "Credenciamento SICAF minha empresa — quanto tempo leva?",
        answer:
          "Com documentação completa, o fluxo assistido CADBRASIL pode ser concluído em até 24 horas.",
      },
    ],
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
  "/empresa-inapta": {
    path: "/empresa-inapta",
    shortTitle: "Empresa Inapta",
    metaTitle: "Empresa Inapta no SICAF — Como Regularizar e Voltar a Licitar | CADBRASIL",
    metaDescription:
      "Entenda o status de empresa inapta, impactos no SICAF e como regularizar situação fiscal/cadastral para retomar participação em licitações.",
    keywords:
      "empresa inapta sicaf, cnpj inapto licitacao, regularizar empresa inapta, bloquear licitacao sicaf, cnpj inapto receita",
    eyebrow: "Status crítico",
    title: "Empresa inapta",
    highlight: "como recuperar elegibilidade",
    description:
      "Diagnóstico e plano de ação para sair do status inapto, regularizar documentação e restabelecer habilitação para contratos públicos.",
    quickAnswer:
      "Empresa inapta geralmente indica irregularidade cadastral/fiscal grave no CNPJ. Sem regularização, o SICAF não mantém habilitação válida para licitações.",
    sections: [
      {
        id: "o-que-significa",
        title: "O que significa empresa inapta",
        paragraphs: [
          "Na prática, o CNPJ inapto compromete toda a cadeia de habilitação: emissão de certidões, consistência cadastral e aceitação no processo licitatório.",
          "É um problema de compliance que precisa ser tratado na origem para evitar bloqueios recorrentes.",
        ],
      },
      {
        id: "rota-regularizacao",
        title: "Rota de regularização",
        paragraphs: [
          "Mapeamos causa raiz (fiscal, societária ou trabalhista), priorizamos documentos críticos e executamos a revalidação do cadastro após normalização.",
        ],
        bullets: [
          "Diagnóstico técnico de inconsistências",
          "Regularização junto aos órgãos competentes",
          "Revisão documental para novo envio",
          "Reativação da trilha de habilitação SICAF",
        ],
      },
    ],
    faqs: [
      {
        question: "Empresa inapta pode participar de licitação?",
        answer:
          "Não de forma segura. O status inapto costuma inviabilizar certidões e comprometer a habilitação, levando à desclassificação.",
      },
      {
        question: "Quanto tempo leva para regularizar empresa inapta?",
        answer:
          "Depende da causa. Casos simples podem ser resolvidos em poucos dias; pendências estruturais exigem plano fiscal/societário mais amplo.",
      },
      {
        question: "Depois de regularizar, preciso atualizar o SICAF?",
        answer:
          "Sim. Após normalizar o CNPJ, é necessário atualizar dados e certidões no SICAF para recuperar status de habilitação.",
      },
    ],
  },
  "/emitir-crc": {
    path: "/emitir-crc",
    shortTitle: "Emitir CRC",
    metaTitle: "Emitir CRC no SICAF — Certificado de Registro Cadastral | CADBRASIL",
    metaDescription:
      "Aprenda como emitir CRC no SICAF, requisitos de regularidade e como usar o Certificado de Registro Cadastral em licitações públicas.",
    keywords:
      "emitir crc sicaf, certificado registro cadastral, crc fornecedor governo, como tirar crc, comprovante sicaf",
    eyebrow: "Comprovação de cadastro",
    title: "Emitir CRC",
    highlight: "com cadastro regular",
    description:
      "Passo a passo para emissão do Certificado de Registro Cadastral e validação da situação da empresa antes de disputar editais.",
    quickAnswer:
      "O CRC no SICAF comprova a situação cadastral da empresa. Para emitir com valor prático em licitações, os níveis e certidões devem estar atualizados.",
    sections: [
      {
        id: "crc-na-pratica",
        title: "CRC na prática",
        paragraphs: [
          "O CRC é o retrato do cadastro no momento da emissão. Se documentos vencerem depois, a empresa pode voltar a ficar irregular, mesmo com CRC antigo.",
          "Por isso, emissão de CRC e gestão contínua de certidões precisam caminhar juntas.",
        ],
      },
      {
        id: "requisitos-emissao",
        title: "Requisitos para emitir sem risco",
        paragraphs: [
          "Antes de gerar o certificado, valide níveis exigidos no edital, certidões vigentes e consistência de dados societários.",
        ],
        bullets: [
          "Níveis de habilitação compatíveis com o edital",
          "Certidões fiscais e trabalhistas válidas",
          "Dados cadastrais atualizados",
          "Conferência final antes da sessão de pregão",
        ],
      },
    ],
    faqs: [
      {
        question: "CRC substitui todos os documentos do edital?",
        answer:
          "Não necessariamente. Muitos editais ainda exigem documentos complementares além da consulta ao SICAF/CRC.",
      },
      {
        question: "Qual validade do CRC?",
        answer:
          "Ele reflete a situação do momento da emissão. A regularidade depende do vencimento contínuo das certidões.",
      },
      {
        question: "Posso emitir CRC com pendência fiscal?",
        answer:
          "Em geral, não com status regular. Pendências afetam a utilidade do certificado na habilitação.",
      },
    ],
  },
  "/regularidade-fiscal": {
    path: "/regularidade-fiscal",
    shortTitle: "Regularidade Fiscal",
    metaTitle: "Regularidade Fiscal no SICAF — CND, FGTS e CNDT em Dia | CADBRASIL",
    metaDescription:
      "Garanta regularidade fiscal no SICAF: certidões federais, FGTS, CNDT e estratégia para manter habilitação ativa em licitações.",
    keywords:
      "regularidade fiscal sicaf, cnd federal sicaf, fgts sicaf, cndt licitacao, certidoes fornecedor governo",
    eyebrow: "Compliance fiscal",
    title: "Regularidade fiscal",
    highlight: "para licitar sem bloqueio",
    description:
      "Gestão de certidões e pendências fiscais para manter sua empresa apta em pregões e contratos com o poder público.",
    quickAnswer:
      "Regularidade fiscal é requisito central de habilitação no SICAF. Sem certidões válidas (federal, FGTS, CNDT e outras), a empresa é desclassificada.",
    sections: [
      {
        id: "documentos-fiscais",
        title: "Certidões que sustentam a habilitação",
        paragraphs: [
          "A robustez do cadastro depende de um ciclo contínuo de emissão, conferência e renovação de certidões. Não é tarefa pontual, é rotina de compliance.",
        ],
        bullets: [
          "CND Federal (RFB/PGFN)",
          "CRF/FGTS",
          "CNDT",
          "Certidões estaduais e municipais (quando exigidas)",
        ],
      },
      {
        id: "gestao-continuada",
        title: "Como evitar queda de regularidade",
        paragraphs: [
          "Antecipar vencimentos e tratar pendências rapidamente evita que a empresa fique inapta no momento mais crítico: abertura de propostas e habilitação.",
        ],
      },
    ],
    faqs: [
      {
        question: "Uma certidão vencida já bloqueia licitação?",
        answer:
          "Sim, pode bloquear a habilitação conforme exigência do edital e consultas automáticas de regularidade.",
      },
      {
        question: "Com parcelamento ativo eu fico regular?",
        answer:
          "Depende da situação fiscal e da emissão das certidões correspondentes. É necessário validar caso a caso.",
      },
      {
        question: "A CADBRASIL emite as certidões para minha empresa?",
        answer:
          "Sim, no escopo contratado, com monitoramento contínuo e alerta de pendências para manter o cadastro estável.",
      },
    ],
  },
  "/como-fazer-cadastro-no-sicaf": {
    path: "/como-fazer-cadastro-no-sicaf",
    shortTitle: "Como Fazer Meu SICAF",
    metaTitle: "Como Fazer Meu SICAF 2026 — Preciso Fazer SICAF? Passo a Passo | CADBRASIL",
    metaDescription:
      "Como fazer meu SICAF e o que fazer se você precisa fazer SICAF agora: passo a passo, documentos, e-CNPJ e cadastro assistido CADBRASIL em até 24h.",
    keywords:
      "como fazer meu sicaf, preciso fazer sicaf, como fazer cadastro no sicaf, fazer sicaf agora, passo a passo sicaf, cadastro compras gov",
    eyebrow: "Guia prático",
    title: "Como fazer meu",
    highlight: "SICAF",
    description:
      "Se você precisa fazer SICAF com urgência, este guia mostra o fluxo oficial e como a CADBRASIL acelera até o CRC Regular.",
    quickAnswer:
      "Para fazer seu SICAF: e-CNPJ + documentos + Compras.gov.br (Nível I e demais níveis). Se você precisa fazer SICAF rápido, a CADBRASIL conclui o cadastro assistido em até 24 horas.",
    sections: [
      {
        id: "preciso-fazer",
        title: "Preciso fazer SICAF: por onde começar",
        paragraphs: [
          "Se a busca foi “preciso fazer SICAF”, priorize CNPJ ativo e e-CNPJ. Sem esses dois itens o cadastramento não avança no portal federal.",
          "Com a documentação em mãos, você pode seguir sozinho no Compras.gov.br ou iniciar o fluxo assistido CADBRASIL para evitar indeferimento.",
        ],
      },
      {
        id: "passo-a-passo",
        title: "Como fazer meu SICAF — passo a passo",
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
    faqs: [
      ...baseFaqs,
      {
        question: "Como fazer meu SICAF pela primeira vez?",
        answer:
          "Reúna e-CNPJ e documentos, acesse o Compras.gov.br ou o portal CADBRASIL e conclua os níveis até o CRC Regular.",
      },
      {
        question: "Preciso fazer SICAF com urgência. Dá tempo?",
        answer:
          "Com documentação completa, a CADBRASIL costuma concluir em até 24 horas. Pendências fiscais podem alongar o prazo.",
      },
    ],
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
    shortTitle: "SICAF para Empresas",
    metaTitle: "SICAF para Empresas 2026 — Como Cadastrar Empresa no SICAF | CADBRASIL",
    metaDescription:
      "SICAF para empresas: como cadastrar sua empresa no SICAF (MEI, ME, EPP, LTDA, S/A). Requisitos, e-CNPJ, documentos e cadastro assistido CADBRASIL.",
    keywords:
      "sicaf para empresas, como cadastrar empresa no sicaf, credenciar minha empresa no sicaf, empresa no compras gov, cadastro cnpj sicaf, sicaf cnpj",
    eyebrow: "Para CNPJ",
    title: "SICAF para",
    highlight: "empresas",
    description:
      "Guia de SICAF para empresas de todos os portes (MEI, ME, EPP, LTDA e S/A) com foco em habilitação correta desde o primeiro envio.",
    quickAnswer:
      "SICAF para empresas é o cadastro do CNPJ no sistema federal de fornecedores. É necessário CNPJ ativo, e-CNPJ e documentos societários/fiscais compatíveis com os níveis exigidos.",
    sections: [
      {
        id: "sicaf-empresas",
        title: "O que é SICAF para empresas",
        paragraphs: [
          "SICAF para empresas é o cadastramento do CNPJ no Sistema de Cadastramento Unificado de Fornecedores — obrigatório para licitar com o Governo Federal no Compras.gov.br.",
          "Sem SICAF regular, a empresa não conclui a habilitação em pregões federais, independentemente do porte.",
        ],
      },
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
    faqs: [
      ...baseFaqs,
      {
        question: "O que é SICAF para empresas?",
        answer:
          "É o cadastramento do CNPJ no Sistema de Cadastramento Unificado de Fornecedores, necessário para licitar com o Governo Federal.",
      },
      {
        question: "Qualquer empresa pode fazer SICAF?",
        answer:
          "Sim, com CNPJ ativo: MEI, ME, EPP, LTDA, S/A e EIRELI, desde que cumpram documentos e exigências do edital.",
      },
    ],
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
  "/como-regularizar-sicaf-empresa": {
    path: "/como-regularizar-sicaf-empresa",
    shortTitle: "Regularizar SICAF",
    metaTitle: "Como Regularizar o SICAF da Empresa 2026 — Guia Completo | CADBRASIL",
    metaDescription:
      "Aprenda como regularizar o SICAF da empresa: identificar irregularidades, corrigir certidões vencidas, reativar níveis e voltar a licitar com assessoria CADBRASIL em até 24h.",
    keywords:
      "regularizar sicaf, sicaf irregular, como regularizar sicaf empresa, desbloquear sicaf, pendencia sicaf, regularizacao sicaf 2026, sicaf inapto, corrigir sicaf, habilitacao sicaf",
    eyebrow: "Regularização SICAF",
    title: "Como regularizar o SICAF",
    highlight: "da sua empresa",
    description:
      "Diagnóstico completo de pendências, correção documental e reativação de níveis para sua empresa voltar a participar de licitações com cadastro regular.",
    quickAnswer:
      "Para regularizar o SICAF da empresa, identifique pendências no Compras.gov.br, renove certidões vencidas (CND, FGTS, CNDT), corrija divergências cadastrais e revalide os níveis de habilitação exigidos.",
    howToSteps: [
      {
        name: "Diagnosticar situação cadastral",
        text: "Acesse o Compras.gov.br com e-CNPJ e verifique status de cada nível e motivo de irregularidade.",
      },
      {
        name: "Mapear certidões vencidas ou pendentes",
        text: "Liste CND Federal, FGTS, CNDT e certidões estaduais/municipais com validade expirada.",
      },
      {
        name: "Regularizar débitos fiscais e trabalhistas",
        text: "Quite ou parcela pendências que impedem emissão de certidões negativas válidas.",
      },
      {
        name: "Atualizar documentos societários",
        text: "Alinhe contrato social, razão social e representante legal ao cadastro no portal.",
      },
      {
        name: "Reenviar documentos nos níveis afetados",
        text: "Faça upload das certidões novas nos níveis II a VI conforme exigência do sistema.",
      },
      {
        name: "Validar status Regular e emitir CRC",
        text: "Confirme situação regular no painel e emita o Certificado de Registro Cadastral.",
      },
    ],
    sections: [
      {
        id: "sinais-irregularidade",
        title: "Sinais de que seu SICAF está irregular",
        paragraphs: [
          "Empresas com SICAF irregular costumam descobrir o problema apenas na fase de habilitação de um pregão — quando já investiram tempo e recursos na disputa.",
          "Os indicadores mais comuns são certidão vencida, nível incompleto, divergência de razão social entre documentos ou bloqueio por pendência fiscal não resolvida.",
        ],
        bullets: [
          "Status diferente de Regular no painel do fornecedor",
          "CRC não disponível ou com ressalvas",
          "Certidões com validade expirada (muitas a cada 180 dias)",
          "Nível III, IV ou V incompleto para o edital pretendido",
          "Mensagens de pendência no Compras.gov.br",
        ],
      },
      {
        id: "causas-frequentes",
        title: "Principais causas de irregularidade no SICAF",
        paragraphs: [
          "A maioria das irregularidades não surge de erro grave — são falhas operacionais: esquecimento de renovação, alteração societária não refletida no cadastro ou envio incompleto de níveis.",
          "Empresas que licitam esporadicamente são as mais vulneráveis, pois não mantêm rotina de monitoramento documental.",
        ],
        bullets: [
          "CND Federal, FGTS ou CNDT vencidas",
          "Alteração de contrato social sem atualização no SICAF",
          "Cadastro apenas no Nível I sem habilitação completa",
          "Débitos fiscais estaduais ou municipais em aberto",
          "Certificado digital e-CNPJ expirado ou revogado",
        ],
      },
      {
        id: "passo-a-passo-regularizacao",
        title: "Passo a passo para regularizar o SICAF",
        paragraphs: [
          "A regularização segue uma sequência lógica: diagnóstico → correção de pendências → reenvio documental → validação de níveis → emissão de CRC.",
          "Tentar licitar antes de concluir a regularização aumenta o risco de desclassificação e mancha o histórico da empresa perante órgãos licitantes.",
        ],
        bullets: [
          "Acesso com e-CNPJ ao Compras.gov.br",
          "Levantamento de pendências por nível",
          "Emissão e upload de certidões atualizadas",
          "Correção de dados societários divergentes",
          "Validação final e emissão de CRC regular",
        ],
      },
      {
        id: "prazo-riscos",
        title: "Prazos, riscos e impacto em licitações",
        paragraphs: [
          "Sem assessoria, a regularização pode levar de 5 a 30 dias úteis, dependendo da complexidade fiscal. Com documentação organizada, a CADBRASIL conclui em até 24 horas.",
          "Participar de pregão com SICAF irregular resulta em desclassificação na habilitação, mesmo após vencer a disputa de preços.",
        ],
      },
      {
        id: "cadbrasil-regularizacao",
        title: "Regularização com a CADBRASIL",
        paragraphs: [
          "Nossa equipe faz diagnóstico automatizado com IA, corrige pendências documentais, reativa níveis e monitora vencimentos para evitar nova irregularidade.",
          "Você acompanha cada etapa pelo painel e recebe alertas antes que certidões expirem.",
        ],
        bullets: [
          "Diagnóstico completo por CNPJ",
          "Correção de certidões e níveis",
          "Entrega em até 24h com docs completos",
          "Monitoramento contínuo pós-regularização",
        ],
      },
    ],
    faqs: [
      {
        question: "Como saber se meu SICAF está irregular?",
        answer:
          "Acesse o Compras.gov.br com certificado e-CNPJ, entre no painel do fornecedor e verifique o status de cada nível. Situação diferente de Regular indica pendência.",
      },
      {
        question: "Quanto tempo leva para regularizar o SICAF?",
        answer:
          "Depende das pendências. Certidões simples podem ser resolvidas em 1 a 3 dias. Débitos fiscais complexos exigem mais tempo. Com a CADBRASIL e documentação pronta, até 24 horas.",
      },
      {
        question: "Posso licitar enquanto regularizo o SICAF?",
        answer:
          "Não é recomendado. Mesmo vencendo o pregão, a empresa tende a ser desclassificada na habilitação se o cadastro estiver irregular no momento da análise.",
      },
      {
        question: "SICAF irregular impede receber de contratos antigos?",
        answer:
          "Sim. Irregularidade cadastral pode bloquear pagamentos e renovações contratuais em órgãos que exigem fornecedor regular.",
      },
      {
        question: "Preciso refazer todo o cadastro para regularizar?",
        answer:
          "Na maioria dos casos, não. Basta corrigir os níveis pendentes e reenviar certidões válidas. Refazer do zero só ocorre em casos extremos de inconsistência cadastral.",
      },
      {
        question: "A CADBRASIL regulariza SICAF de qualquer empresa?",
        answer:
          "Sim. Atendemos MEI, ME, EPP, LTDA, S/A e EIRELI em todo o Brasil, com foco em regularização rápida e monitoramento contínuo.",
      },
      {
        question: "Quanto custa regularizar o SICAF?",
        answer:
          "O portal oficial não cobra taxa. Custos envolvem emissão de certidões, certificado digital e eventual assessoria especializada como a CADBRASIL.",
      },
      {
        question: "Regularizar SICAF resolve empresa inapta na Receita?",
        answer:
          "São problemas distintos. CNPJ inapto precisa ser regularizado na Receita Federal antes. Veja também nossa página sobre empresa inapta.",
      },
    ],
  },
  "/cadastro-sicaf-licitacao-publica": {
    path: "/cadastro-sicaf-licitacao-publica",
    shortTitle: "SICAF para Licitação",
    metaTitle: "Cadastro SICAF para Licitação Pública 2026 — Habilitação Completa | CADBRASIL",
    metaDescription:
      "Cadastro SICAF para licitação pública: requisitos de habilitação, níveis exigidos, documentos, CRC e como participar de pregões federais com a CADBRASIL.",
    keywords:
      "cadastro sicaf licitacao, sicaf licitacao publica, habilitacao licitacao sicaf, pregão sicaf, fornecedor licitacao federal, sicaf leilao publico, cadastro fornecedor governo licitacao",
    eyebrow: "Licitações públicas",
    title: "Cadastro SICAF para",
    highlight: "licitação pública",
    description:
      "Habilite sua empresa corretamente para disputar pregões, concorrências e dispensas no Governo Federal — com níveis alinhados ao edital e CRC regular.",
    quickAnswer:
      "O cadastro SICAF para licitação pública exige credenciamento no Compras.gov.br, níveis de habilitação compatíveis com o edital (I a VI), certidões válidas e CRC com status Regular.",
    sections: [
      {
        id: "por-que-sicaf-licitacao",
        title: "Por que o SICAF é obrigatório em licitações",
        paragraphs: [
          "A Lei 14.133/2021 consolidou o ecossistema de compras públicas. Para contratos do Governo Federal, o SICAF é a base de verificação de regularidade do fornecedor na fase de habilitação.",
          "Sem cadastro regular, a empresa não conclui a habilitação — independentemente de ter a melhor proposta de preço.",
        ],
        bullets: [
          "Verificação automática de regularidade fiscal",
          "Consulta de níveis de habilitação por edital",
          "Emissão de CRC como comprovante cadastral",
          "Consulta de editais federais e no PNCP",
        ],
      },
      {
        id: "niveis-edital",
        title: "Níveis de habilitação exigidos por edital",
        paragraphs: [
          "Cada edital define quais níveis são necessários conforme objeto, valor e complexidade. Cadastrar só o Nível I é erro clássico que leva à desclassificação.",
          "Antes de disputar um pregão, valide se sua empresa possui todos os níveis exigidos ativos e regulares.",
        ],
        bullets: [
          "Nível I — Credenciamento (obrigatório)",
          "Nível II — Habilitação jurídica",
          "Nível III — Regularidade fiscal e trabalhista",
          "Nível IV — Qualificação técnica",
          "Nível V — Qualificação econômico-financeira",
          "Nível VI — Linhas de fornecimento (CATMAT/CATSER)",
        ],
      },
      {
        id: "fluxo-habilitacao",
        title: "Fluxo: do cadastro SICAF à habilitação no pregão",
        paragraphs: [
          "O fluxo ideal começa semanas antes do edital: credenciamento, habilitação completa, emissão de CRC e monitoramento de vencimentos.",
          "Empresas que cadastram no SICAF apenas quando o edital abre perdem oportunidades por prazo insuficiente para regularizar pendências.",
        ],
        bullets: [
          "Credenciamento com e-CNPJ no Compras.gov.br",
          "Upload documental por nível exigido",
          "Emissão de CRC com status Regular",
          "Participação no pregão com habilitação pré-validada",
          "Manutenção contínua entre editais",
        ],
      },
      {
        id: "modalidades",
        title: "Modalidades de licitação e exigência SICAF",
        paragraphs: [
          "Pregão eletrônico, concorrência, tomada de preços, dispensa e inexigibilidade — em contratações federais, a verificação cadastral via SICAF é praticamente universal na habilitação.",
          "Estados e municípios também consultam o SICAF ou exigem cadastro equivalente em muitos processos.",
        ],
      },
      {
        id: "cadbrasil-licitacao",
        title: "CADBRASIL: cadastro SICAF pronto para licitar",
        paragraphs: [
          "Preparamos sua empresa com checklist por edital-alvo, validação documental com IA e entrega em até 24 horas quando a documentação está completa.",
          "Você disputa pregões com confiança de que a habilitação não será o ponto de falha.",
        ],
        bullets: [
          "Checklist personalizado por segmento",
          "Validação de níveis antes do pregão",
          "Monitoramento de certidões entre editais",
          "Suporte especializado em habilitação",
        ],
      },
    ],
    faqs: [
      {
        question: "Preciso de SICAF para participar de pregão eletrônico?",
        answer:
          "Para pregões federais no Compras.gov.br, sim. O SICAF regular é verificado na fase de habilitação após a disputa de preços.",
      },
      {
        question: "Quais níveis do SICAF são exigidos em licitações?",
        answer:
          "Varia por edital. Mínimo é Nível I (credenciamento). A maioria exige Nível III (fiscal/trabalhista). Objetos complexos exigem IV, V e VI.",
      },
      {
        question: "Posso me cadastrar no SICAF depois de abrir o edital?",
        answer:
          "Tecnicamente sim, mas é arriscado. Certidões, validações e correções podem levar dias ou semanas. O ideal é cadastro prévio e regular.",
      },
      {
        question: "O CRC substitui o SICAF na licitação?",
        answer:
          "Não. O CRC comprova situação cadastral no SICAF. O cadastro completo com níveis regulares continua sendo a base.",
      },
      {
        question: "MEI e ME podem licitar com SICAF?",
        answer:
          "Sim, quando o edital permitir e a empresa atender requisitos documentais. ME e EPP têm tratamento diferenciado na Lei Complementar 123/2006.",
      },
      {
        question: "SICAF serve para licitações estaduais e municipais?",
        answer:
          "Muitos entes consultam o SICAF ou exigem cadastro próprio. Ter SICAF federal regular facilita e acelera processos em outros níveis.",
      },
      {
        question: "Quanto tempo antes do pregão devo ter o SICAF pronto?",
        answer:
          "Recomendamos pelo menos 15 dias úteis de antecedência. Com a CADBRASIL e docs completos, a habilitação pode sair em até 24 horas.",
      },
      {
        question: "A CADBRASIL prepara SICAF específico para meu edital?",
        answer:
          "Sim. Analisamos o edital-alvo, identificamos níveis exigidos e preparamos documentação compatível antes da disputa.",
      },
    ],
  },
  "/documentos-necessarios-cadastro-sicaf": {
    path: "/documentos-necessarios-cadastro-sicaf",
    shortTitle: "Documentos SICAF",
    metaTitle: "Documentos Necessários para Cadastro no SICAF 2026 — Checklist | CADBRASIL",
    metaDescription:
      "Lista completa de documentos para cadastro no SICAF: por nível de habilitação, validade, certificado digital e checklist para MEI, ME, EPP e demais portes.",
    keywords:
      "documentos sicaf, documentos cadastro sicaf, checklist sicaf, documentos habilitacao sicaf, certidoes sicaf, contrato social sicaf, documentos fornecedor governo",
    eyebrow: "Checklist documental",
    title: "Documentos necessários para",
    highlight: "cadastro no SICAF",
    description:
      "Checklist completo organizado por nível de habilitação, com validade de cada certidão e orientações para evitar indeferimento no credenciamento.",
    quickAnswer:
      "Os documentos para cadastro no SICAF incluem cartão CNPJ, contrato social, certidões fiscais (CND Federal, FGTS, CNDT), comprovante de endereço, certificado e-CNPJ e documentos técnicos/financeiros conforme o nível exigido.",
    itemList: [
      "Certificado digital e-CNPJ (A1 ou A3)",
      "Cartão CNPJ atualizado",
      "Contrato social ou estatuto com alterações",
      "RG e CPF dos administradores",
      "Comprovante de endereço da sede",
      "Certidão Negativa de Débitos — RFB (CND Federal)",
      "Certificado de Regularidade FGTS (CRF)",
      "Certidão Negativa de Débitos Trabalhistas (CNDT)",
      "CND estadual e municipal",
      "Balanço patrimonial do último exercício",
      "Atestados de capacidade técnica",
      "Procuração do representante legal (se aplicável)",
    ],
    sections: [
      {
        id: "documentos-acesso",
        title: "Documentos de acesso ao portal",
        paragraphs: [
          "Antes de qualquer upload, você precisa do certificado digital e-CNPJ válido vinculado ao CNPJ da empresa. Sem ele, não há acesso ao Compras.gov.br.",
        ],
        bullets: [
          "Certificado digital e-CNPJ A1 (arquivo) ou A3 (token/cartão)",
          "Validade entre 1 e 3 anos conforme tipo",
          "Vinculado ao CNPJ correto da empresa",
        ],
      },
      {
        id: "nivel-i-ii",
        title: "Níveis I e II — Credenciamento e habilitação jurídica",
        paragraphs: [
          "O Nível I exige dados cadastrais básicos. O Nível II comprova existência jurídica regular da empresa e poderes do representante legal.",
        ],
        bullets: [
          "Cartão CNPJ emitido pela Receita Federal",
          "Contrato social ou estatuto + alterações consolidadas",
          "Atas de eleição/nomeação de administradores (S/A)",
          "RG e CPF de todos os sócios/administradores",
          "Comprovante de endereço da sede (até 90 dias)",
          "Procuração com poderes específicos (se representante não for sócio)",
        ],
      },
      {
        id: "nivel-iii",
        title: "Nível III — Regularidade fiscal e trabalhista",
        paragraphs: [
          "É o nível mais crítico para licitações. Certidões vencidas são a principal causa de irregularidade e desclassificação em pregões.",
        ],
        bullets: [
          "CND Federal (RFB/PGFN) — validade 90 a 180 dias",
          "CRF — Certificado de Regularidade FGTS — 180 dias",
          "CNDT — Certidão Negativa de Débitos Trabalhistas — 180 dias",
          "CND estadual — prazo varia por UF",
          "CND municipal — prazo varia por município",
        ],
      },
      {
        id: "nivel-iv-v-vi",
        title: "Níveis IV, V e VI — Técnico, financeiro e catálogo",
        paragraphs: [
          "Exigidos conforme objeto e valor do edital. Empresas que pretendem licitar bens ou serviços específicos precisam destes níveis ativos.",
        ],
        bullets: [
          "Nível IV: atestados de capacidade técnica compatíveis com o objeto",
          "Nível V: balanço patrimonial, DRE e índices financeiros",
          "Nível VI: cadastro em CATMAT (materiais) ou CATSER (serviços)",
        ],
      },
      {
        id: "validade-monitoramento",
        title: "Validade e monitoramento de documentos",
        paragraphs: [
          "A maioria das certidões fiscais vence em 180 dias. Sem monitoramento, a empresa fica irregular sem perceber até ser desclassificada em um pregão.",
          "A CADBRASIL monitora vencimentos automaticamente e alerta antes da expiração.",
        ],
      },
      {
        id: "cadbrasil-documentos",
        title: "Validação documental com a CADBRASIL",
        paragraphs: [
          "Nossa IA confere cada documento antes do envio oficial: validade, coerência de CNPJ/razão social e compatibilidade com níveis exigidos.",
          "Evite retrabalho e indeferimento com checklist validado por especialistas.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quais documentos são obrigatórios para cadastro no SICAF?",
        answer:
          "Mínimo: e-CNPJ, cartão CNPJ, contrato social, RG/CPF dos administradores e comprovante de endereço. Para licitar, certidões fiscais (Nível III) são praticamente sempre exigidas.",
      },
      {
        question: "Qual a validade das certidões para o SICAF?",
        answer:
          "CND Federal: 90 a 180 dias. FGTS e CNDT: 180 dias. Estadual e municipal: varia. Monitore vencimentos continuamente.",
      },
      {
        question: "MEI precisa de todos os documentos?",
        answer:
          "MEI envia documentos simplificados (CCMEI, certidões), mas ainda precisa de e-CNPJ e certidões fiscais válidas para habilitação.",
      },
      {
        question: "Contrato social desatualizado impede cadastro?",
        answer:
          "Sim. Divergência entre contrato social e dados no SICAF gera pendência ou indeferimento. Atualize antes de enviar.",
      },
      {
        question: "Preciso de balanço para cadastro inicial?",
        answer:
          "Só se o edital ou nível V exigir qualificação econômico-financeira. Cadastro básico (Níveis I a III) não exige balanço.",
      },
      {
        question: "Como enviar documentos no SICAF?",
        answer:
          "Pelo Compras.gov.br, autenticado com e-CNPJ, no módulo de fornecedores. Cada documento vai anexado ao nível correspondente.",
      },
      {
        question: "A CADBRASIL valida meus documentos antes do envio?",
        answer:
          "Sim. Conferimos validade, coerência cadastral e compatibilidade com níveis exigidos — com IA e revisão humana.",
      },
      {
        question: "Onde vejo a lista oficial de documentos?",
        answer:
          "No Compras.gov.br, na área do fornecedor, por nível de habilitação. Este guia CADBRASIL consolida a lista prática para 2026.",
      },
    ],
  },
  "/como-atualizar-certificados-sicaf": {
    path: "/como-atualizar-certificados-sicaf",
    shortTitle: "Atualizar Certificados",
    metaTitle: "Como Atualizar Certificados no SICAF 2026 — Renovação e Validade | CADBRASIL",
    metaDescription:
      "Saiba como atualizar certificados e certidões no SICAF: CND, FGTS, CNDT, prazos de validade, passo a passo no Compras.gov.br e monitoramento CADBRASIL.",
    keywords:
      "atualizar certificados sicaf, renovar certidoes sicaf, atualizar sicaf, certidao vencida sicaf, renovacao certidoes sicaf, atualizar cnd sicaf, manter sicaf regular",
    eyebrow: "Atualização documental",
    title: "Como atualizar certificados",
    highlight: "no SICAF",
    description:
      "Renove certidões fiscais e trabalhistas antes do vencimento, reenvie no portal e mantenha seu cadastro regular para não perder licitações.",
    quickAnswer:
      "Para atualizar certificados no SICAF, emita novas certidões (CND Federal, FGTS, CNDT e demais) antes do vencimento, acesse o Compras.gov.br com e-CNPJ e faça upload nos níveis correspondentes.",
    howToSteps: [
      {
        name: "Verificar vencimentos no painel",
        text: "Acesse Compras.gov.br e confira validade de cada certidão nos níveis de habilitação.",
      },
      {
        name: "Emitir novas certidões",
        text: "Gere CND Federal, CRF/FGTS, CNDT e certidões estaduais/municipais nos sites oficiais.",
      },
      {
        name: "Conferir coerência cadastral",
        text: "Valide que razão social e CNPJ nas certidões coincidem com o cadastro no SICAF.",
      },
      {
        name: "Fazer upload no nível correto",
        text: "Anexe cada certidão nova no Nível III (ou nível específico) no portal do fornecedor.",
      },
      {
        name: "Aguardar validação do sistema",
        text: "O Compras.gov.br cruza dados automaticamente. Pendências aparecem no painel.",
      },
      {
        name: "Confirmar status Regular",
        text: "Verifique situação regular e, se necessário, reemita o CRC atualizado.",
      },
    ],
    sections: [
      {
        id: "por-que-atualizar",
        title: "Por que atualizar certificados no SICAF",
        paragraphs: [
          "Certidões vencidas transformam cadastro regular em irregular instantaneamente — sem aviso prévio do sistema até a próxima consulta ou tentativa de licitação.",
          "A atualização proativa é a diferença entre empresas que licitam com consistência e as que perdem pregões por erro evitável.",
        ],
        bullets: [
          "Certidões vencidas bloqueiam habilitação em pregões",
          "Status muda de Regular para Irregular automaticamente",
          "CRC deixa de refletir situação válida",
          "Renovação tardia pode exigir regularização de débitos",
        ],
      },
      {
        id: "certidoes-principais",
        title: "Certidões que mais precisam de atualização",
        paragraphs: [
          "Cada certidão tem prazo de validade próprio. O monitoramento deve ser contínuo, não apenas antes de editais.",
        ],
        bullets: [
          "CND Federal (RFB/PGFN) — 90 a 180 dias",
          "CRF/FGTS — 180 dias",
          "CNDT (trabalhista) — 180 dias",
          "CND estadual — varia por estado",
          "CND municipal — varia por município",
          "Certificado digital e-CNPJ — 1 a 3 anos",
        ],
      },
      {
        id: "passo-atualizacao",
        title: "Passo a passo para atualizar no Compras.gov.br",
        paragraphs: [
          "O processo é manual no portal oficial: emitir certidão nova → acessar com e-CNPJ → anexar no nível → aguardar validação.",
          "Erros comuns: anexar certidão vencida, CNPJ divergente ou upload no nível errado.",
        ],
        bullets: [
          "Login com certificado e-CNPJ válido",
          "Navegar até níveis de habilitação",
          "Substituir certidões vencidas por novas",
          "Salvar e verificar status de processamento",
          "Reemitir CRC após confirmação de regularidade",
        ],
      },
      {
        id: "automacao-monitoramento",
        title: "Monitoramento automático vs atualização manual",
        paragraphs: [
          "Atualizar manualmente funciona para empresas com poucos editais. Quem licita com frequência precisa de alertas automáticos e rotina de renovação.",
          "O Assistente CADBRASIL e a plataforma digital enviam alertas com antecedência configurável.",
        ],
      },
      {
        id: "cadbrasil-atualizacao",
        title: "Atualização de certificados com a CADBRASIL",
        paragraphs: [
          "Cuidamos da emissão, validação e upload de certidões no SICAF, com monitoramento contínuo para sua empresa nunca licitar irregular.",
          "Entrega em até 24 horas quando certidões estão disponíveis para emissão.",
        ],
        bullets: [
          "Alertas de vencimento com antecedência",
          "Emissão e upload no portal oficial",
          "Validação de coerência cadastral",
          "Histórico documental rastreável",
        ],
      },
    ],
    faqs: [
      {
        question: "Com que frequência devo atualizar certificados no SICAF?",
        answer:
          "Não há data fixa única — depende do vencimento de cada certidão. CND, FGTS e CNDT costumam vencer a cada 180 dias. Monitore continuamente.",
      },
      {
        question: "O que acontece se uma certidão vencer?",
        answer:
          "O SICAF fica irregular. A empresa é desclassificada na habilitação de qualquer pregão até renovar e revalidar os níveis afetados.",
      },
      {
        question: "Posso atualizar certificados sem assessoria?",
        answer:
          "Sim, pelo Compras.gov.br. Porém erros de upload, validade ou divergência cadastral são frequentes. A CADBRASIL reduz esse risco.",
      },
      {
        question: "Preciso atualizar o CRC após renovar certidões?",
        answer:
          "Recomendado. O CRC reflete a situação cadastral no momento da emissão. Após atualizar certidões, reemita para ter comprovante atual.",
      },
      {
        question: "Certificado digital também precisa ser atualizado?",
        answer:
          "Sim. e-CNPJ vencido impede acesso ao Compras.gov.br. Renove com 30 a 60 dias de antecedência.",
      },
      {
        question: "A CADBRASIL atualiza certificados automaticamente?",
        answer:
          "Monitoramos vencimentos e executamos renovação/upload conforme plano contratado, com alertas e validação antes de cada edital.",
      },
      {
        question: "Quanto tempo leva para o sistema validar certidão nova?",
        answer:
          "Geralmente de minutos a 24 horas úteis, dependendo do cruzamento automático com bases da Receita, FGTS e Justiça do Trabalho.",
      },
      {
        question: "Atualizar certificados é diferente de regularizar SICAF?",
        answer:
          "Atualização é preventiva (renovar antes de vencer). Regularização é corretiva (corrigir cadastro já irregular). Ambos exigem certidões válidas.",
      },
    ],
  },
  "/como-participar-de-licitacao": {
    path: "/como-participar-de-licitacao",
    shortTitle: "Como participar de licitação",
    metaTitle: "Como Participar de Licitação Pública 2026 — Guia Completo | CADBRASIL",
    metaDescription:
      "Aprenda como participar de licitação pública no Brasil: SICAF, habilitação, documentos, pregão eletrônico e cadastro de fornecedor com a CADBRASIL.",
    keywords:
      "como participar de licitacao, participar licitacao publica, licitacao governo federal, sicaf licitacao, fornecedor governo, habilitacao licitacao",
    eyebrow: "Licitações públicas",
    title: "Como participar de",
    highlight: "licitação pública",
    description:
      "Guia prático para empresas que querem vender ao governo: do cadastro SICAF à habilitação no pregão, com requisitos claros e suporte CADBRASIL.",
    quickAnswer:
      "Para participar de licitação federal, mantenha o SICAF regular, certidões e níveis de habilitação em dia, leia o edital e envie proposta no portal indicado — a habilitação é verificada após a disputa.",
    howToSteps: [
      {
        name: "Regularize o CNPJ e o SICAF",
        text: "CNPJ ativo na Receita e cadastro SICAF regular são pré-requisitos. Sem isso, a empresa é desclassificada na habilitação.",
      },
      {
        name: "Identifique oportunidades",
        text: "Consulte editais no PNCP e nos portais oficiais de licitação. Filtre por objeto, região e exigências de habilitação compatíveis com seu porte.",
      },
      {
        name: "Analise o edital",
        text: "Verifique níveis SICAF exigidos, documentos, prazos, critério de julgamento e exigências técnicas antes de investir na proposta.",
      },
      {
        name: "Prepare a proposta",
        text: "Monte preço, planilhas, declarações e anexos conforme o edital. Erros formais eliminam a empresa ainda na fase de habilitação.",
      },
      {
        name: "Cadastre-se no pregão",
        text: "No pregão eletrônico, inscreva-se na sessão, envie lances dentro das regras e acompanhe fases de disputa e julgamento.",
      },
      {
        name: "Conclua a habilitação",
        text: "Se vencedora, apresente documentos de habilitação. O órgão cruza dados com SICAF e certidões — irregularidade gera desclassificação.",
      },
    ],
    sections: [
      {
        id: "requisitos-basicos",
        title: "Requisitos básicos para licitar",
        paragraphs: [
          "Empresas de qualquer porte (MEI, ME, EPP, LTDA etc.) podem participar, desde que atendam ao edital e estejam regularmente cadastradas.",
          "No âmbito federal, o SICAF concentra a verificação cadastral. Estados e municípios podem exigir cadastros próprios ou consultar bases nacionais.",
        ],
        bullets: [
          "CNPJ ativo e regular na Receita Federal",
          "SICAF regular e níveis de habilitação ativos",
          "Certificado digital e-CNPJ válido",
          "Certidões fiscais e trabalhistas dentro do prazo",
          "Capacidade técnica e financeira quando exigida",
        ],
      },
      {
        id: "sicaf-licitar",
        title: "Papel do SICAF na participação",
        paragraphs: [
          "O SICAF não substitui a leitura do edital, mas é a porta de entrada para habilitação em contratações federais.",
          "Níveis de habilitação (I a VI) devem estar completos conforme o objeto licitado — credenciamento sozinho raramente basta.",
        ],
      },
      {
        id: "erros-comuns",
        title: "Erros que impedem a participação",
        paragraphs: [
          "Cadastro feito às pressas após abertura do edital, certidão vencida no dia da habilitação e divergência entre contrato social e representante legal são causas frequentes de desclassificação.",
        ],
        bullets: [
          "SICAF irregular ou incompleto",
          "Proposta com valor abaixo do permitido ou fora do formato",
          "Documentos de habilitação desatualizados",
          "Inabilitação por impedimento legal não declarado",
        ],
      },
    ],
    faqs: [
      {
        question: "Preciso de SICAF para participar de licitação?",
        answer:
          "Para a maioria das licitações federais, sim. O cadastro SICAF regular é verificado na habilitação.",
      },
      {
        question: "MEI pode participar de licitação?",
        answer:
          "Sim, quando o edital não restringe porte e a MEI atende requisitos técnicos, fiscais e de habilitação.",
      },
      {
        question: "Quanto custa participar de uma licitação?",
        answer:
          "Não há taxa federal só para participar. Custos incluem certificado digital, certidões, tempo de equipe e eventual assessoria.",
      },
      {
        question: "Posso participar de várias licitações ao mesmo tempo?",
        answer:
          "Sim, desde que sua empresa suporte operacionalmente e mantenha SICAF e certidões regulares em todas.",
      },
      {
        question: "O que é fase de habilitação?",
        answer:
          "É quando o órgão verifica se o licitante vencedor cumpre requisitos jurídicos, fiscais, trabalhistas e técnicos do edital.",
      },
      {
        question: "A CADBRASIL ajuda em todo o processo?",
        answer:
          "Sim: cadastro SICAF, regularização, documentação, monitoramento de certidões e orientação para habilitação em pregões.",
      },
    ],
  },
  "/cadastro-fornecedor-governo": {
    path: "/cadastro-fornecedor-governo",
    shortTitle: "Cadastro fornecedor governo",
    metaTitle: "Cadastro de Fornecedor do Governo 2026 — SICAF | CADBRASIL",
    metaDescription:
      "Cadastro de fornecedor do governo federal: SICAF, níveis de habilitação, e-CNPJ, certidões e CRC. Assessoria CADBRASIL em até 24h.",
    keywords:
      "cadastro fornecedor governo, fornecedor governo federal, cadastro sicaf, compras gov fornecedor, credenciamento fornecedor publico, habilitacao fornecedor",
    eyebrow: "Fornecedor público",
    title: "Cadastro de fornecedor",
    highlight: "do governo",
    description:
      "Credencie sua empresa como fornecedora do Governo Federal com cadastro SICAF estruturado, documentação validada e acompanhamento até o CRC regular.",
    quickAnswer:
      "O cadastro de fornecedor do governo federal é feito no SICAF com certificado e-CNPJ, dados da empresa, níveis de habilitação e certidões válidas. O CRC comprova situação regular.",
    sections: [
      {
        id: "o-que-e-cadastro",
        title: "O que é o cadastro de fornecedor",
        paragraphs: [
          "É o registro oficial que permite à administração pública verificar identidade, regularidade e capacidade da empresa antes de contratar.",
          "No Governo Federal, o Sistema de Cadastramento Unificado de Fornecedores (SICAF) centraliza essa informação.",
        ],
      },
      {
        id: "portal-compras",
        title: "Portal federal e certificado digital",
        paragraphs: [
          "O acesso ao credenciamento no SICAF exige certificado digital e-CNPJ (A1 ou A3) do representante legal.",
          "Dados societários devem coincidir com Receita Federal, contrato social e procurações — divergências geram indeferimento.",
        ],
        bullets: [
          "Acesso com e-CNPJ no portal oficial",
          "Preenchimento do Nível I (credenciamento)",
          "Envio documental dos níveis II a VI conforme atuação",
          "Validação automática e manual pelo sistema",
        ],
      },
      {
        id: "niveis-habilitacao",
        title: "Níveis de habilitação do fornecedor",
        paragraphs: [
          "Cada nível agrega exigências: jurídica, fiscal, técnica, econômico-financeira e linhas de fornecimento (CATMAT/CATSER).",
          "Fornecedores que licitam com frequência mantêm todos os níveis relevantes ativos e monitorados.",
        ],
        bullets: [
          "Nível I — Credenciamento (obrigatório)",
          "Nível II — Habilitação jurídica",
          "Nível III — Regularidade fiscal e trabalhista",
          "Níveis IV a VI — Qualificação técnica, financeira e itens",
        ],
      },
      {
        id: "cadbrasil-fornecedor",
        title: "Cadastro com a CADBRASIL",
        paragraphs: [
          "Estruturamos o cadastro de fornecedor com checklist por CNPJ, validação documental e entrega em até 24 horas quando não há pendências graves.",
          "Inclui emissão de CRC, orientação sobre níveis e monitoramento para evitar bloqueios entre editais.",
        ],
      },
    ],
    faqs: [
      ...baseFaqs,
      {
        question: "Cadastro de fornecedor é o mesmo que SICAF?",
        answer:
          "No âmbito federal, o cadastro de fornecedor é realizado via SICAF. Estados podem ter cadastros próprios.",
      },
      {
        question: "Quanto tempo demora o cadastro de fornecedor?",
        answer:
          "Com documentação completa, o fluxo assistido pode ser concluído em até 24 horas. Pendências fiscais ou cadastrais estendem o prazo.",
      },
      {
        question: "Preciso renovar o cadastro de fornecedor?",
        answer:
          "Certidões e níveis exigem atualização contínua. O CRC deve ser reemitido quando a situação cadastral mudar.",
      },
    ],
  },
  "/pregao-eletronico": {
    path: "/pregao-eletronico",
    shortTitle: "Pregão eletrônico",
    metaTitle: "Pregão Eletrônico 2026 — Como Participar e Habilitação SICAF | CADBRASIL",
    metaDescription:
      "Guia de pregão eletrônico: como funciona, SICAF, lances, habilitação, documentos e cadastro de fornecedor com suporte CADBRASIL.",
    keywords:
      "pregao eletronico, como participar pregao eletronico, pregao compras gov, sicaf pregao, licitacao pregao federal, fornecedor pregao eletronico",
    eyebrow: "Modalidade licitatória",
    title: "Pregão eletrônico",
    highlight: "passo a passo",
    description:
      "Entenda como disputar pregões eletrônicos federais com SICAF regular, proposta correta e habilitação sem surpresas — com assessoria especializada.",
    quickAnswer:
      "No pregão eletrônico federal, empresas com SICAF regular enviam lances em sessão pública; após a classificação, o vencedor passa por habilitação com verificação cadastral e documentos do edital.",
    howToSteps: [
      {
        name: "Tenha SICAF e e-CNPJ válidos",
        text: "Antes do pregão, confirme cadastro regular, níveis exigidos pelo edital e certificado digital dentro da validade.",
      },
      {
        name: "Leia o edital e o termo de referência",
        text: "Objeto, especificações, prazo de entrega, critérios de julgamento e exigências de habilitação definem sua estratégia de lance.",
      },
      {
        name: "Cadastre proposta inicial",
        text: "Alguns pregões exigem proposta fechada antes dos lances. Verifique formato, anexos e valor de referência.",
      },
      {
        name: "Participe da sessão de lances",
        text: "Acesse a sala eletrônica no horário do edital. Lance dentro dos decrementos mínimos e regras de desempate.",
      },
      {
        name: "Aguarde classificação e intenção de recurso",
        text: "Após encerramento, há fase de manifestação e recursos. Mantenha documentação pronta para habilitação imediata.",
      },
      {
        name: "Apresente habilitação",
        text: "Envie documentos solicitados. O órgão valida SICAF, certidões e requisitos técnicos — irregularidade desclassifica.",
      },
    ],
    sections: [
      {
        id: "como-funciona-pregao",
        title: "Como funciona o pregão eletrônico",
        paragraphs: [
          "É modalidade para aquisição de bens e serviços comuns, com disputa de preços em ambiente eletrônico.",
          "A Lei 14.133/2021 manteve o pregão como ferramenta central de compras públicas eficientes.",
        ],
        bullets: [
          "Fase interna: planejamento e edital",
          "Sessão pública de lances",
          "Julgamento e ranking de propostas",
          "Habilitação do melhor classificado",
          "Homologação e contrato",
        ],
      },
      {
        id: "sicaf-pregao",
        title: "SICAF no pregão eletrônico",
        paragraphs: [
          "A habilitação cruza automaticamente situação cadastral no SICAF. Certidões vencidas ou níveis incompletos impedem contratação.",
          "Emitir CRC antes do pregão ajuda a antecipar pendências, mas não substitui cadastro completo e regular.",
        ],
      },
      {
        id: "dicas-praticas",
        title: "Boas práticas para vencer pregões",
        paragraphs: [
          "Empresas preparadas cadastram-se no SICAF com antecedência, simulam margem de lance e mantêm equipe treinada no portal.",
        ],
        bullets: [
          "Monitorar editais do seu segmento",
          "Validar CATMAT/CATSER no Nível VI quando aplicável",
          "Manter certidões com 30+ dias de folga",
          "Ter procuração e contrato social atualizados",
        ],
      },
    ],
    faqs: [
      {
        question: "O que é pregão eletrônico?",
        answer:
          "Modalidade de licitação em que fornecedores disputam preços em sistema eletrônico, com regras de lances e habilitação definidas no edital.",
      },
      {
        question: "Preciso de SICAF para pregão federal?",
        answer:
          "Sim. A habilitação verifica regularidade no SICAF nas contratações federais.",
      },
      {
        question: "Qual a diferença entre pregão e concorrência?",
        answer:
          "Pregão é voltado a bens e serviços comuns com disputa de lances. Concorrência atende objetos mais complexos, com regras distintas de julgamento.",
      },
      {
        question: "Posso desistir após vencer o pregão?",
        answer:
          "Desistência injustificada pode gerar sanções administrativas e impedimento de licitar. Avalie capacidade antes de lançar.",
      },
      {
        question: "Como treinar minha equipe no pregão?",
        answer:
          "Use simuladores do portal, acompanhe sessões como observador e conte com assessoria CADBRASIL para primeiros editais.",
      },
      {
        question: "A CADBRASIL acompanha pregões específicos?",
        answer:
          "Orientamos habilitação e documentação. O envio de lances é responsabilidade da empresa, com suporte consultivo quando contratado.",
      },
    ],
  },
  "/documentacao-licitacao": {
    path: "/documentacao-licitacao",
    shortTitle: "Documentação licitação",
    metaTitle: "Documentação para Licitação 2026 — Checklist SICAF e Habilitação | CADBRASIL",
    metaDescription:
      "Documentação para licitação pública: checklist completo, certidões, SICAF, procuração, habilitação jurídica e fiscal. Organize tudo com a CADBRASIL.",
    keywords:
      "documentacao licitacao, documentos licitacao publica, documentos habilitacao licitacao, certidoes licitacao, documentos sicaf, checklist licitacao",
    eyebrow: "Habilitação",
    title: "Documentação para",
    highlight: "licitação",
    description:
      "Checklist completo de documentos para habilitação em licitações: jurídicos, fiscais, trabalhistas, técnicos e cadastrais no SICAF.",
    quickAnswer:
      "A documentação para licitação inclui contrato social, procurações, certidões (CND, FGTS, CNDT), comprovações técnicas e econômico-financeiras conforme o edital, além de cadastro SICAF regular.",
    itemList: [
      "Certificado digital e-CNPJ A1 ou A3",
      "Contrato social ou estatuto consolidado",
      "Cartão CNPJ e comprovante de inscrição",
      "Documentos do representante legal e procuração",
      "Certidão negativa de débitos federais (CND)",
      "Certificado de regularidade FGTS (CRF)",
      "Certidão negativa de débitos trabalhistas (CNDT)",
      "Certidões estaduais e municipais quando exigidas",
      "Balanço patrimonial e demonstrações (Nível V)",
      "Atestados de capacidade técnica (Nível IV)",
      "Declarações do edital (menores, ME/EPP, integridade)",
      "CRC SICAF com status Regular",
    ],
    sections: [
      {
        id: "documentos-juridicos",
        title: "Documentos jurídicos e cadastrais",
        paragraphs: [
          "O órgão licitante verifica se a empresa existe legalmente, quem a representa e se há impedimentos.",
          "Divergência entre CNPJ, contrato social e SICAF é uma das principais causas de inabilitação.",
        ],
        bullets: [
          "Contrato social com última alteração",
          "Ata de eleição de administradores (S/A)",
          "Procuração com poderes específicos",
          "Declaração de cumprimento do art. 7º da Lei 14.133",
        ],
      },
      {
        id: "documentos-fiscais",
        title: "Certidões fiscais e trabalhistas",
        paragraphs: [
          "Regularidade fiscal e trabalhista é verificada no SICAF (Nível III) e pode ser exigida novamente na habilitação do edital.",
          "Prazo de validade costuma ser de 180 dias — planeje renovação com antecedência.",
        ],
      },
      {
        id: "documentos-tecnicos",
        title: "Qualificação técnica e econômico-financeira",
        paragraphs: [
          "Editais de maior complexidade exigem atestados, registros profissionais, índices contábeis e garantias.",
          "Cada edital lista documentos na seção de habilitação — use como checklist mestre.",
        ],
      },
      {
        id: "organizacao-cadbrasil",
        title: "Organize documentação com a CADBRASIL",
        paragraphs: [
          "Centralizamos emissão, validação e upload no SICAF, com alertas de vencimento e revisão antes de cada pregão.",
        ],
        bullets: [
          "Checklist por edital e por nível SICAF",
          "Validação cruzada com IA",
          "Histórico documental seguro",
          "Suporte na fase de habilitação",
        ],
      },
    ],
    faqs: [
      {
        question: "Quais documentos são obrigatórios em toda licitação?",
        answer:
          "Varia por edital. Mínimo federal inclui regularidade no SICAF; o edital detalha declarações e anexos adicionais.",
      },
      {
        question: "Documentação do SICAF substitui a do edital?",
        answer:
          "Não totalmente. O SICAF cobre base cadastral; o edital pode exigir documentos específicos na habilitação.",
      },
      {
        question: "Com que antecedência devo preparar documentos?",
        answer:
          "Idealmente semanas antes do pregão. Certidões e correções cadastrais podem levar dias.",
      },
      {
        question: "Posso enviar documentos vencidos?",
        answer:
          "Não. Documentos fora da validade levam à desclassificação ou inabilitação.",
      },
      {
        question: "ME/EPP tem documentação diferenciada?",
        answer:
          "Sim. Há declarações e regras de preferência específicas previstas em lei e no edital.",
      },
      {
        question: "A CADBRASIL guarda minha documentação?",
        answer:
          "Organizamos e validamos conforme contrato, com foco em conformidade e segurança no fluxo SICAF.",
      },
    ],
  },
  "/documentacao-sicaf": {
    path: "/documentacao-sicaf",
    shortTitle: "Documentação SICAF",
    metaTitle: "Documentação SICAF 2026 — Checklist Completo de Documentos | CADBRASIL",
    metaDescription:
      "Checklist profissional de documentação SICAF: certificado e-CNPJ, certidões, contrato social e documentos por nível I a VI. Valide tudo e inicie seu cadastro com a CADBRASIL.",
    keywords:
      "documentacao sicaf, documentos sicaf, checklist sicaf, certidoes sicaf, cadastro sicaf documentos, habilitacao sicaf, niveis sicaf documentos",
    eyebrow: "Referência documental",
    title: "Documentação completa para",
    highlight: "cadastro no SICAF",
    description:
      "Checklist profissional por nível de habilitação (I a VI), validades de certidões e pré-requisitos para credenciamento federal.",
    quickAnswer:
      "Para o SICAF são necessários e-CNPJ, dados cadastrais (Nível I), documentos jurídicos (II), certidões fiscais e trabalhistas válidas (III) e, conforme o edital, comprovações técnicas, financeiras e linhas de fornecimento (IV a VI).",
    itemList: itemListForSchema,
    sections: [
      {
        id: "niveis-habilitacao",
        title: "Documentação por nível de habilitação",
        paragraphs: [
          "O SICAF organiza a habilitação em níveis progressivos. A maioria dos fornecedores precisa concluir pelo menos os Níveis I, II e III antes de licitar com segurança.",
          "Objetos de maior complexidade ou valor exigem comprovação técnica (IV), econômico-financeira (V) e cadastro em catálogos (VI).",
        ],
      },
      {
        id: "validade-certidoes",
        title: "Validade e monitoramento",
        paragraphs: [
          "Certidões federais, FGTS e CNDT costumam ter validade entre 90 e 180 dias. O vencimento sem renovação gera irregularidade no CRC e impede habilitação em pregões.",
        ],
        bullets: [
          "Calendário de renovação com antecedência",
          "Conferência de poderes do e-CNPJ",
          "Versão consolidada do contrato social",
        ],
      },
    ],
    faqs: documentacaoSicafFaqs,
  },
};

export function getLandingPage(path: string): LandingPageData {
  const page = landingPages[path];
  if (!page) {
    throw new Error(`Landing page not found for path: ${path}`);
  }
  return page;
}
