import type { FaqCategory } from "./types";

const g = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia completo: cadastro SICAF passo a passo" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF" },
] as const;

export const faqPagesPart2: FaqCategory[] = [
  {
    slug: "certificado-digital-sicaf",
    shortTitle: "Certificado Digital",
    title: "Certificado digital e-CNPJ para o SICAF",
    description:
      "Tudo sobre certificado digital A1 e A3, ICP-Brasil, custos e como usar no Compras.gov.br para credenciamento.",
    quickAnswer:
      "Pessoas jurídicas precisam de certificado digital e-CNPJ (A1 ou A3) emitido por Autoridade Certificadora credenciada na ICP-Brasil para acessar o Compras.gov.br e concluir o cadastro SICAF.",
    metaTitle: "Certificado Digital SICAF — e-CNPJ A1 e A3 | CADBRASIL",
    metaDescription:
      "Certificado digital para SICAF: diferença A1 e A3, validade, custo, como emitir e-CNPJ e usar no credenciamento Compras.gov.br.",
    keywords:
      "certificado digital sicaf, ecnpj sicaf, certificado a1 a3 sicaf, icp brasil fornecedor governo, certificado digital compras gov",
    relatedSlugs: ["cadastro-sicaf", "documentos-sicaf", "compras-gov-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "tipos",
        title: "A1 ou A3: qual escolher?",
        paragraphs: [
          "A1 fica armazenado no computador (arquivo) — prático para equipes remotas. A3 usa token ou cartão — comum em empresas com política de segurança mais rígida. Ambos são aceitos no SICAF.",
        ],
        bullets: [
          "A1: validade típica de 1 ano, renovação online",
          "A3: validade até 3 anos, exige dispositivo físico",
          "Deve estar vinculado ao CNPJ correto da empresa",
        ],
      },
      {
        id: "uso-sicaf",
        title: "Uso no credenciamento",
        paragraphs: [
          "O certificado assina declarações, autentica acesso ao portal e garante validade jurídica das informações enviadas ao governo. Certificado expirado ou de outro CNPJ impede o cadastro.",
        ],
      },
    ],
    items: [
      {
        question: "Certificado digital é obrigatório para SICAF?",
        answer: "Sim, para pessoa jurídica no credenciamento federal via Compras.gov.br.",
      },
      {
        question: "Quanto custa o e-CNPJ?",
        answer: "Varia por AC certificadora, em média R$ 200 a R$ 600/ano para A1.",
      },
      {
        question: "Posso usar certificado de sócio em vez de e-CNPJ?",
        answer: "Não para operações da empresa. O credenciamento exige e-CNPJ da pessoa jurídica.",
      },
      {
        question: "O que fazer se o certificado expirar?",
        answer: "Renove antes do vencimento. Com certificado vencido você perde acesso ao portal.",
      },
      {
        question: "A CADBRASIL emite certificado?",
        answer: "Orientamos a escolha e o processo com parceiros; a emissão é feita pela AC escolhida.",
      },
    ],
  },
  {
    slug: "niveis-habilitacao-sicaf",
    shortTitle: "Níveis SICAF",
    title: "Níveis de habilitação do SICAF (I a VI)",
    description:
      "Explicação de cada nível de cadastramento, documentos associados e como saber quais níveis seu edital exige.",
    quickAnswer:
      "O SICAF divide a habilitação em seis níveis: I credenciamento, II jurídico, III fiscal federal, IV trabalhista/previdenciário, V econômico-financeiro e VI técnico. Cada edital exige combinações diferentes.",
    metaTitle: "Níveis SICAF I a VI — Habilitação Completa | CADBRASIL",
    metaDescription:
      "Níveis de cadastramento SICAF explicados: credenciamento, jurídico, fiscal, trabalhista, econômico-financeiro e qualificação técnica. Documentos por nível.",
    keywords:
      "niveis sicaf, nivel 1 sicaf, habilitacao sicaf, qualificacao tecnica sicaf, nivel economico financeiro sicaf",
    relatedSlugs: ["cadastro-sicaf", "documentos-sicaf", "crc-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "mapa-niveis",
        title: "Mapa dos níveis",
        paragraphs: [
          "Cadastrar apenas o Nível I é um erro frequente: muitos editais exigem III e IV no mínimo; obras e serviços especializados podem pedir V e VI.",
        ],
        bullets: [
          "Nível I — dados cadastrais e credenciamento",
          "Nível II — contrato social e documentos societários",
          "Nível III — CND Federal e regularidade tributária",
          "Nível IV — FGTS, INSS e CNDT",
          "Nível V — balanços e índices financeiros",
          "Nível VI — atestados de capacidade técnica",
        ],
      },
    ],
    items: [
      {
        question: "Quantos níveis existem no SICAF?",
        answer: "Seis níveis principais de habilitação, além de linhas de fornecimento (CATMAT/CATSER) quando aplicável.",
      },
      {
        question: "Qual nível é obrigatório para todos?",
        answer: "O Nível I (credenciamento) é a porta de entrada; os demais dependem do objeto e do edital.",
      },
      {
        question: "Posso licitar só com Nível I?",
        answer: "Apenas em editais que exijam somente credenciamento básico — situação rara em contratos relevantes.",
      },
      {
        question: "Como saber quais níveis o edital exige?",
        answer: "Leia o termo de referência e a seção de habilitação. A CADBRASIL analisa editais em consultoria.",
      },
      {
        question: "Nível V exige contador?",
        answer: "Documentos contábeis devem seguir normas; muitas empresas usam contador para balanço e DRE assinados.",
      },
    ],
  },
  {
    slug: "crc-sicaf",
    shortTitle: "CRC SICAF",
    title: "CRC — Certificado de Registro Cadastral no SICAF",
    description:
      "O que é o CRC, quando emitir, como comprovar regularidade e por que compradores públicos consultam esse certificado.",
    quickAnswer:
      "O CRC (Certificado de Registro Cadastral) comprova que a empresa está cadastrada no SICAF e, quando emitido em situação regular, atesta que os níveis exigidos estão ativos sem pendências bloqueantes.",
    metaTitle: "CRC SICAF — Certificado de Registro Cadastral | CADBRASIL",
    metaDescription:
      "O que é CRC no SICAF, como emitir, validade, diferença para certidões e quando órgãos públicos exigem o certificado de registro cadastral.",
    keywords:
      "crc sicaf, certificado registro cadastral, comprovante sicaf regular, emitir crc sicaf",
    relatedSlugs: ["regularizacao-sicaf", "cadastro-sicaf", "niveis-habilitacao-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "para-que-serve",
        title: "Para que serve o CRC?",
        paragraphs: [
          "É o comprovante oficial de situação cadastral no momento da emissão. Útil em habilitações, contratos e respostas rápidas a órgãos que solicitam comprovação formal.",
        ],
      },
      {
        id: "quando-emitir",
        title: "Quando emitir",
        paragraphs: [
          "Emita após todos os níveis necessários estarem ativos e certidões válidas. Se uma certidão vencer depois, o CRC anterior não substitui a necessidade de regularidade atual.",
        ],
      },
    ],
    items: [
      {
        question: "O que é CRC no SICAF?",
        answer:
          "Certificado de Registro Cadastral que comprova cadastro e situação regular no sistema federal de fornecedores.",
      },
      {
        question: "CRC tem validade?",
        answer:
          "Reflete o momento da emissão. A regularidade depende de certidões continuamente válidas.",
      },
      {
        question: "Como emitir o CRC?",
        answer: "Pelo painel do fornecedor no Compras.gov.br, com cadastro e níveis em dia.",
      },
      {
        question: "CRC substitui certidões no edital?",
        answer: "Não. O edital pode pedir certidões específicas além da consulta ao SICAF/CRC.",
      },
    ],
  },
  {
    slug: "compras-gov-sicaf",
    shortTitle: "Compras.gov.br",
    title: "Compras.gov.br e integração com o SICAF",
    description:
      "Como o portal federal de compras utiliza o SICAF, onde credenciar fornecedor e diferença entre comprar e vender no governo.",
    quickAnswer:
      "O Compras.gov.br é o portal de licitações e gestão de contratos do governo federal. O módulo de fornecedores integra o SICAF como base de habilitação unificada.",
    metaTitle: "Compras.gov.br SICAF — Portal e Credenciamento | CADBRASIL",
    metaDescription:
      "Compras.gov.br e SICAF: como acessar, credenciar fornecedor, consultar regularidade e participar de pregões federais.",
    keywords:
      "compras.gov.br sicaf, portal compras governo, credenciamento compras gov, sicaf fornecedor federal",
    relatedSlugs: ["cadastro-sicaf", "certificado-digital-sicaf", "pregao-eletronico"],
    relatedGuides: [...g],
    sections: [
      {
        id: "portal",
        title: "O que é o Compras.gov.br",
        paragraphs: [
          "Centraliza pregões, dispensas, atas e contratos do Executivo Federal. Fornecedores habilitados no SICAF utilizam o mesmo ecossistema para enviar propostas e documentos.",
        ],
      },
    ],
    items: [
      {
        question: "SICAF e Compras.gov.br são a mesma coisa?",
        answer:
          "Não. SICAF é o cadastro/habilitação; Compras.gov.br é o portal operacional de licitações que utiliza o cadastro.",
      },
      {
        question: "Como acesso como fornecedor?",
        answer: "Com certificado e-CNPJ no ambiente de fornecedor do portal oficial.",
      },
      {
        question: "Preciso de cadastro separado por órgão?",
        answer:
          "Não para o federal unificado — um SICAF regular serve para órgãos integrados.",
      },
    ],
  },
  {
    slug: "sicaf-mei-epp",
    shortTitle: "MEI, ME e EPP",
    title: "SICAF para MEI, ME e EPP",
    description:
      "Regras especiais, documentação simplificada e vantagens em licitações para micro e pequenas empresas.",
    quickAnswer:
      "MEI, microempresas e empresas de pequeno porte podem se credenciar no SICAF com documentação compatível ao porte e usufruir de tratamento diferenciado em licitações (LC 123/2006).",
    metaTitle: "SICAF MEI e EPP — Microempresa em Licitações | CADBRASIL",
    metaDescription:
      "Cadastro SICAF para MEI, ME e EPP: documentos, vantagens em pregões, empate ficto e credenciamento com assessoria CADBRASIL.",
    keywords:
      "sicaf mei, sicaf microempresa, sicaf epp, mei licitacao governo, pequena empresa sicaf",
    relatedSlugs: ["cadastro-sicaf", "licitacoes-publicas", "pregao-eletronico"],
    relatedGuides: [...g],
    sections: [
      {
        id: "vantagens",
        title: "Vantagens para pequenos negócios",
        paragraphs: [
          "A Lei Complementar 123 garante mecanismos como empate ficto, preferência em faixas de valor e simplificações procedimentais — desde que o SICAF esteja regular.",
        ],
        bullets: [
          "MEI: documentação reduzida em diversos credenciamentos",
          "ME/EPP: cotas e exclusividade em licitações específicas",
          "Regularização tardia da documentação em alguns casos",
        ],
      },
    ],
    items: [
      {
        question: "MEI pode ter SICAF?",
        answer: "Sim, quando o edital e o objeto permitirem participação de MEI.",
      },
      {
        question: "MEI tem menos níveis?",
        answer: "Depende do edital; fiscal e trabalhista ainda são exigidos quando aplicável.",
      },
      {
        question: "O que é empate ficto?",
        answer:
          "Mecanismo que favorece ME/EPP quando empata com empresa maior — previsto na LC 123.",
      },
      {
        question: "EPP precisa de balanço?",
        answer: "Nível V pode ser exigido conforme valor e complexidade do edital.",
      },
    ],
  },
  {
    slug: "renovacao-sicaf",
    shortTitle: "Renovação SICAF",
    title: "Renovação SICAF: manter o cadastro sempre válido",
    description:
      "Processo de renovação de certidões, prazos e serviço assistido para nunca ficar irregular.",
    quickAnswer:
      "Renovar o SICAF é atualizar certidões e dados antes do vencimento. Não é um boleto anual único — cada documento tem prazo próprio (muitos em 180 dias).",
    metaTitle: "Renovação SICAF 2026 — Certidões e Prazos | CADBRASIL",
    metaDescription:
      "Como renovar SICAF: certidões, FGTS, CND Federal, prazos, renovação assistida e alertas CADBRASIL para fornecedores federais.",
    keywords:
      "renovacao sicaf, renovar sicaf, sicaf vencido, manter sicaf ativo, renovar certidoes fornecedor",
    relatedSlugs: ["atualizacao-sicaf", "regularizacao-sicaf", "quanto-custa-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "diferenca",
        title: "Renovação x atualização",
        paragraphs: [
          "Renovação foca em certidões com prazo de validade. Atualização inclui alterações societárias, endereço, CNAE e novos níveis de habilitação.",
        ],
      },
    ],
    items: [
      {
        question: "O SICAF vence todo ano?",
        answer: "O cadastro não vence; as certidões sim. Por isso a renovação é contínua.",
      },
      {
        question: "Quanto tempo leva a renovação assistida?",
        answer: "Certidões simples: mesmo dia ou 24–48h. Casos com débito dependem da regularização fiscal.",
      },
      {
        question: "Posso renovar com certidão vencida?",
        answer: "É preciso emitir nova certidão válida; enquanto vencida, o cadastro está irregular.",
      },
      {
        question: "A CADBRASIL renova automaticamente?",
        answer: "Sim, em planos com monitoramento e Assistente CADBRASIL.",
      },
    ],
  },
  {
    slug: "quanto-custa-sicaf",
    shortTitle: "Quanto custa",
    title: "Quanto custa o SICAF? Custos reais em 2026",
    description:
      "Taxa oficial gratuita, custos de certificado digital, certidões e assessoria — comparativo transparente.",
    quickAnswer:
      "O credenciamento oficial no governo é gratuito. Custos típicos: certificado digital e-CNPJ (R$ 200–600/ano), emissão de certidões e, opcionalmente, assessoria para agilizar e evitar reprovação.",
    metaTitle: "Quanto Custa o SICAF? Preços e Custos 2026 | CADBRASIL",
    metaDescription:
      "Quanto custa fazer SICAF: taxa zero no governo, preço certificado digital, certidões e comparativo DIY vs assessoria CADBRASIL em até 24h.",
    keywords:
      "quanto custa sicaf, preco sicaf, valor cadastro sicaf, sicaf e gratuito, custo certificado digital sicaf",
    relatedSlugs: ["cadastro-sicaf", "certificado-digital-sicaf", "renovacao-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "tabela-custos",
        title: "Comparativo de custos",
        paragraphs: [
          "Muitas buscas por 'quanto custa SICAF' esperam uma taxa governamental — ela não existe. O investimento está em conformidade documental e tempo da equipe.",
        ],
        bullets: [
          "Taxa oficial de credenciamento: R$ 0",
          "Certificado e-CNPJ: variável por AC",
          "Certidões: em geral gratuitas se não houver débitos",
          "Assessoria CADBRASIL: sob consulta, com entrega acelerada",
        ],
      },
    ],
    items: [
      {
        question: "O governo cobra para cadastrar no SICAF?",
        answer: "Não há taxa de credenciamento federal no portal oficial.",
      },
      {
        question: "Qual o maior custo do processo?",
        answer: "Geralmente o certificado digital e o tempo interno para reunir documentos corretos.",
      },
      {
        question: "Assessoria vale a pena?",
        answer:
          "Para quem quer licitar rápido sem retrabalho, a assessoria reduz risco de reprovação e perda de editais.",
      },
      {
        question: "Há custo para manter o SICAF?",
        answer: "Renovação de certidões e certificado digital; assessoria de monitoramento é opcional.",
      },
    ],
  },
  {
    slug: "documentos-sicaf",
    shortTitle: "Documentos SICAF",
    title: "Documentos obrigatórios para o SICAF",
    description:
      "Checklist completo de certidões, contrato social, certificado digital e documentos por nível de habilitação.",
    quickAnswer:
      "Os documentos do SICAF incluem CNPJ, contrato social, certidões negativas (federal, estadual, municipal), FGTS, INSS, CNDT, certificado e-CNPJ e, conforme o edital, balanço e atestados técnicos.",
    metaTitle: "Documentos SICAF — Checklist Completo 2026 | CADBRASIL",
    metaDescription:
      "Lista de documentos para SICAF: certidões, contrato social, e-CNPJ, FGTS, CNDT e exigências por nível I a VI. Checklist CADBRASIL.",
    keywords:
      "documentos sicaf, lista documentos sicaf, certidoes sicaf, papelada sicaf, checklist sicaf",
    relatedSlugs: ["cadastro-sicaf", "niveis-habilitacao-sicaf", "certificado-digital-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "checklist",
        title: "Checklist principal",
        paragraphs: [
          "Antes de enviar, confira validade (em dias), razão social idêntica e CNPJ em todos os arquivos. Divergências geram indeferimento automático.",
        ],
        bullets: [
          "Cartão CNPJ e contrato social atualizado",
          "CND Federal (RFB/PGFN), estadual e municipal",
          "CRF (FGTS), INSS e CNDT",
          "RG/CPF e procuração do representante legal",
          "Certificado digital e-CNPJ válido",
        ],
      },
    ],
    items: [
      {
        question: "Qual a validade das certidões?",
        answer: "CND Federal e FGTS costumam ter 180 dias; confirme na emissão.",
      },
      {
        question: "Preciso de balanço patrimonial?",
        answer: "Para Nível V e editais que exijam qualificação econômico-financeira.",
      },
      {
        question: "Atestado técnico entra em qual nível?",
        answer: "Nível VI — qualificação técnica.",
      },
      {
        question: "Documentos podem ser digitalizados?",
        answer: "Sim, em PDF conforme exigências do portal; qualidade e legibilidade importam.",
      },
    ],
  },
  {
    slug: "pncp-licitacoes",
    shortTitle: "PNCP",
    title: "PNCP e SICAF: qual a diferença?",
    description:
      "Portal Nacional de Contratações Públicas x cadastro de fornecedor — como se complementam.",
    quickAnswer:
      "O PNCP centraliza informações de licitações e contratos de todos os entes. O SICAF é o cadastro/habilitação do fornecedor federal. São sistemas complementares no ecossistema de compras públicas.",
    metaTitle: "PNCP e SICAF — Diferenças e Integração | CADBRASIL",
    metaDescription:
      "PNCP vs SICAF: o que é cada portal, obrigatoriedade para fornecedor, transparência de licitações e cadastro no governo federal.",
    keywords:
      "pncp sicaf, portal nacional contratacoes, diferenca pncp sicaf, pncp fornecedor",
    relatedSlugs: ["licitacoes-publicas", "compras-gov-sicaf", "pregao-eletronico"],
    relatedGuides: [...g],
    sections: [
      {
        id: "comparativo",
        title: "Comparativo rápido",
        paragraphs: [
          "Fornecedores buscam oportunidades no PNCP e habilitam-se via SICAF para contratar com o federal. Estados podem ter regras próprias além do cadastro federal.",
        ],
        bullets: [
          "PNCP — transparência e divulgação de contratações",
          "SICAF — qualificação cadastral do fornecedor federal",
          "Compras.gov.br — operação de pregões federais",
        ],
      },
    ],
    items: [
      {
        question: "Cadastro no PNCP substitui o SICAF?",
        answer: "Não para fornecedor federal. São finalidades diferentes.",
      },
      {
        question: "Onde publicam editais federais?",
        answer: "Compras.gov.br e informações também no PNCP.",
      },
      {
        question: "Preciso de conta no PNCP para vender?",
        answer: "Consulte o edital; a habilitação federal passa pelo SICAF.",
      },
    ],
  },
  {
    slug: "pregao-eletronico",
    shortTitle: "Pregão Eletrônico",
    title: "Pregão eletrônico e exigência do SICAF",
    description:
      "Como funciona o pregão online, fases do processo e papel do cadastro regular na habilitação.",
    quickAnswer:
      "O pregão eletrônico é a modalidade mais usada para bens e serviços comuns, realizado 100% online com lances em tempo real. Fornecedores federais precisam de SICAF regular na habilitação.",
    metaTitle: "Pregão Eletrônico e SICAF — Como Participar | CADBRASIL",
    metaDescription:
      "Pregão eletrônico: fases, SICAF obrigatório, habilitação, lances e dicas para fornecedores no Compras.gov.br.",
    keywords:
      "pregao eletronico sicaf, como participar pregao, licitacao online governo, comprasnet sicaf",
    relatedSlugs: ["licitacoes-publicas", "compras-gov-sicaf", "sicaf-mei-epp"],
    relatedGuides: [...g],
    sections: [
      {
        id: "fases",
        title: "Fases do pregão eletrônico",
        paragraphs: [
          "Publicação do edital → cadastro de proposta → sessão de lances → classificação → habilitação (SICAF e documentos) → adjudicação e contrato.",
        ],
        bullets: [
          "Proposta inicial e lances em tempo real",
          "Habilitação verifica SICAF e documentação do edital",
          "ME/EPP podem ter critérios diferenciados",
        ],
      },
    ],
    items: [
      {
        question: "Posso participar sem SICAF?",
        answer: "Não em pregões federais que exijam cadastro unificado de fornecedores.",
      },
      {
        question: "Quando o SICAF é verificado?",
        answer: "Na fase de habilitação, após a disputa de preços.",
      },
      {
        question: "Posso enviar proposta com SICAF irregular?",
        answer: "O portal pode aceitar proposta, mas a habilitação será negada.",
      },
      {
        question: "Como a CADBRASIL ajuda em pregões?",
        answer:
          "Mantemos seu cadastro regular e oferecemos consultoria para análise de editais e propostas.",
      },
    ],
  },
];
