import type { FaqCategory } from "./types";

const g = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia completo: cadastro SICAF passo a passo" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF" },
] as const;

export const faqPagesPart1: FaqCategory[] = [
  {
    slug: "cadastro-sicaf",
    shortTitle: "Cadastro SICAF",
    title: "Cadastro SICAF: guia completo para iniciantes",
    description:
      "Tudo sobre o primeiro credenciamento no Sistema de Cadastramento Unificado de Fornecedores: documentos, níveis, prazos e como evitar reprovação.",
    quickAnswer:
      "O cadastro SICAF é o credenciamento obrigatório para fornecedores que desejam vender ao governo federal. O portal oficial é gratuito; o processo exige certificado digital e-CNPJ, documentos societários e certidões por nível de habilitação.",
    metaTitle: "Cadastro SICAF 2026 — Documentos, Prazos e Passo a Passo | CADBRASIL",
    metaDescription:
      "Como fazer cadastro SICAF do zero: documentação, níveis I a VI, certificado digital, prazos, custos e credenciamento assistido em até 24h. FAQ especializado CADBRASIL.",
    keywords:
      "cadastro sicaf, como cadastrar sicaf, primeiro cadastro sicaf, documentos cadastro sicaf, credenciamento sicaf, sicaf compras gov br, cadastro fornecedor federal",
    relatedSlugs: ["documentos-sicaf", "certificado-digital-sicaf", "niveis-habilitacao-sicaf", "quanto-custa-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "por-que-cadastrar",
        title: "Por que fazer o cadastro SICAF?",
        paragraphs: [
          "Sem cadastro ativo no SICAF, sua empresa não habilita propostas em licitações federais no Compras.gov.br — mesmo que tenha o melhor preço. O sistema centraliza dados cadastrais, certidões e níveis de habilitação exigidos pela Lei 14.133/2021.",
          "O credenciamento é nacional: um cadastro bem feito serve para pregões em todo o Brasil que utilizem o ecossistema federal de compras.",
        ],
        bullets: [
          "Obrigatório para contratos e licitações do Executivo Federal",
          "Adotado por centenas de estados e municípios integrados",
          "Base para emissão do CRC (Certificado de Registro Cadastral)",
        ],
      },
      {
        id: "fluxo-cadastro",
        title: "Fluxo resumido do cadastro",
        paragraphs: [
          "O fluxo típico envolve: obter certificado digital e-CNPJ → reunir documentos → acessar o credenciamento → preencher dados (Nível I) → anexar certidões dos níveis exigidos → corrigir pendências → manter regularidade.",
          "A CADBRASIL valida cada documento antes do envio oficial, reduzindo indeferimento e retrabalho.",
        ],
      },
    ],
    items: [
      {
        question: "Como faço o cadastro SICAF do zero?",
        answer:
          "Acesse o Compras.gov.br com certificado e-CNPJ ou utilize o portal cadastro.cadbrasil.com.br com assessoria CADBRASIL. Envie contrato social, certidões e dados do representante legal conforme os níveis que pretende habilitar.",
      },
      {
        question: "Quais documentos preciso para o cadastro SICAF?",
        answer:
          "CNPJ ativo, contrato social, certidões negativas (federal, estadual, municipal), FGTS, INSS, CNDT, comprovantes do representante legal e certificado digital e-CNPJ. Níveis V e VI exigem balanço e atestados técnicos.",
      },
      {
        question: "Quanto tempo leva o cadastro SICAF?",
        answer:
          "Sozinho, de 7 a 20 dias úteis é comum. Com documentação completa e assessoria CADBRASIL, o credenciamento pode ser concluído em até 24 horas.",
      },
      {
        question: "MEI pode se cadastrar no SICAF?",
        answer:
          "Sim. MEIs participam de licitações compatíveis com seu porte e podem ter tratamento diferenciado previsto na Lei Complementar 123/2006.",
      },
      {
        question: "O cadastro SICAF é gratuito?",
        answer:
          "O credenciamento no portal governamental não tem taxa. Os custos reais são certificado digital, emissão de certidões e eventual assessoria especializada.",
      },
      {
        question: "Posso fazer o cadastro SICAF sozinho?",
        answer:
          "Sim, mas erros em níveis, certidões vencidas ou divergência de dados são a principal causa de reprovação. A assessoria aumenta a taxa de aprovação na primeira submissão.",
      },
    ],
  },
  {
    slug: "regularizacao-sicaf",
    shortTitle: "Regularização SICAF",
    title: "Regularização SICAF: como sair da irregularidade",
    description:
      "Entenda o que é SICAF irregular, como diagnosticar pendências e voltar a licitar com certidões válidas e níveis ativos.",
    quickAnswer:
      "SICAF irregular significa certidões vencidas, pendências fiscais ou trabalhistas ou dados cadastrais desatualizados. Enquanto irregular, a empresa é bloqueada na habilitação de pregões federais.",
    metaTitle: "Regularização SICAF — Pendências, Certidões e Desbloqueio | CADBRASIL",
    metaDescription:
      "Como regularizar SICAF irregular: certidões vencidas, CND, FGTS, CNDT e bloqueios no Compras.gov.br. Volte a licitar com suporte CADBRASIL.",
    keywords:
      "regularizar sicaf, sicaf irregular, pendencia sicaf, certidao vencida sicaf, desbloquear sicaf, regularidade fornecedor governo",
    relatedSlugs: ["atualizacao-sicaf", "renovacao-sicaf", "documentos-sicaf", "crc-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "o-que-e-irregular",
        title: "O que significa SICAF irregular?",
        paragraphs: [
          "A irregularidade não é um “status único”: pode ser CND Federal vencida, FGTS em atraso, CNDT negativa, contrato social desatualizado ou nível de habilitação incompleto para o edital.",
          "O Compras.gov.br consulta essas informações na fase de habilitação. Propostas de empresas irregulares são desclassificadas automaticamente.",
        ],
      },
      {
        id: "como-regularizar",
        title: "Passos para regularizar",
        paragraphs: [
          "Diagnóstico completo do cadastro → emissão ou pagamento para obter certidões válidas → atualização no portal → validação dos níveis exigidos → emissão do CRC em situação regular.",
        ],
        bullets: [
          "Resolver débitos ou parcelamentos antes de emitir CND",
          "Conferir razão social idêntica em todos os documentos",
          "Renovar certificado digital se estiver expirado",
        ],
      },
    ],
    items: [
      {
        question: "O que é SICAF irregular?",
        answer:
          "É quando certidões estão vencidas ou há pendência fiscal, trabalhista ou cadastral. A empresa fica impedida de se habilitar em licitações federais até a correção.",
      },
      {
        question: "Como sei se meu SICAF está regular?",
        answer:
          "Consulte o painel no Compras.gov.br ou solicite diagnóstico gratuito à CADBRASIL com relatório de certidões e níveis.",
      },
      {
        question: "Quanto tempo leva para regularizar?",
        answer:
          "Certidões simples podem ser resolvidas no mesmo dia. Casos com débitos ou parcelamentos levam de 24h a alguns dias úteis.",
      },
      {
        question: "Posso licitar com SICAF irregular?",
        answer:
          "Não. O sistema bloqueia ou desclassifica na habilitação, mesmo que você vença o pregão.",
      },
      {
        question: "A CADBRASIL paga meus débitos?",
        answer:
          "Não. Orientamos a regularização fiscal e atualizamos o cadastro assim que as certidões válidas estiverem disponíveis.",
      },
      {
        question: "Certidão vencida bloqueia todo o cadastro?",
        answer:
          "Sim, para os níveis que dependem daquela certidão. Por isso o monitoramento contínuo evita surpresas em editais.",
      },
    ],
  },
  {
    slug: "atualizacao-sicaf",
    shortTitle: "Atualização SICAF",
    title: "Atualização SICAF: manutenção contínua do cadastro",
    description:
      "Renovação proativa de certidões, alertas de vencimento e gestão do cadastro para nunca perder uma licitação por documentação expirada.",
    quickAnswer:
      "Atualizar o SICAF é manter certidões, dados societários e níveis de habilitação sempre válidos. Certidões federais e trabalhistas costumam vencer em 180 dias — sem renovação, o cadastro fica irregular.",
    metaTitle: "Atualização SICAF — Renovação de Certidões e Monitoramento | CADBRASIL",
    metaDescription:
      "Como atualizar SICAF: renovação de CND, FGTS, CNDT, alertas de vencimento e monitoramento 24/7 com Assistente CADBRASIL.",
    keywords:
      "atualizar sicaf, atualizacao sicaf, renovar certidoes sicaf, monitoramento sicaf, gestao cadastro fornecedor",
    relatedSlugs: ["renovacao-sicaf", "regularizacao-sicaf", "assistente-cadbrasil"],
    relatedGuides: [...g],
    sections: [
      {
        id: "por-que-atualizar",
        title: "Por que atualizar antes de vencer?",
        paragraphs: [
          "Muitas empresas só descobrem certidão vencida ao enviar proposta em um pregão urgente. A emissão de nova CND ou CRF pode levar horas ou dias — tempo que o edital não espera.",
          "A atualização proativa mantém o CRC válido e reduz risco de desclassificação.",
        ],
      },
      {
        id: "automatizacao",
        title: "Atualização com tecnologia CADBRASIL",
        paragraphs: [
          "O Assistente CADBRASIL monitora vencimentos, inicia renovações com antecedência e notifica sua equipe apenas quando há ação necessária (ex.: pagamento de débito).",
        ],
      },
    ],
    items: [
      {
        question: "Com que frequência devo atualizar o SICAF?",
        answer:
          "Conforme o vencimento de cada certidão — não há data única anual. CND Federal e FGTS costumam valer 180 dias.",
      },
      {
        question: "Como funciona a renovação automática?",
        answer:
          "A CADBRASIL acompanha prazos e renova certidões antes do vencimento, com confirmação ao cliente quando concluído.",
      },
      {
        question: "Preciso me preocupar com vencimentos?",
        answer:
          "Com plano CADBRASIL e Assistente, o controle é centralizado. Você é avisado apenas em casos que exigem sua decisão.",
      },
      {
        question: "E se a certidão for negada na renovação?",
        answer:
          "Identificamos a causa, abrimos chamado prioritário e orientamos a regularização fiscal ou trabalhista necessária.",
      },
      {
        question: "Atualização é a mesma coisa que renovação?",
        answer:
          "Na prática, renovação refere-se a certidões; atualização inclui também dados cadastrais e níveis de habilitação.",
      },
    ],
  },
  {
    slug: "assistente-cadbrasil",
    shortTitle: "Assistente CADBRASIL",
    title: "Assistente CADBRASIL: software para gestão do SICAF",
    description:
      "Aplicativo com IA para monitorar certidões, renovar documentos e dar suporte remoto seguro ao seu cadastro de fornecedor.",
    quickAnswer:
      "O Assistente CADBRASIL é um aplicativo gratuito para clientes que monitora vencimentos de certidões, automatiza renovações e integra suporte remoto via AnyDesk com autorização do usuário.",
    metaTitle: "Assistente CADBRASIL — App SICAF, IA e Suporte Remoto | CADBRASIL",
    metaDescription:
      "FAQ do Assistente CADBRASIL: instalação Windows/Mac, segurança LGPD, AnyDesk, monitoramento SICAF e renovação automática de certidões.",
    keywords:
      "assistente cadbrasil, software sicaf, app sicaf, monitoramento sicaf automatico, IA sicaf, anydesk cadbrasil",
    relatedSlugs: ["atualizacao-sicaf", "cadastro-sicaf"],
    sections: [
      {
        id: "funcionalidades",
        title: "O que o Assistente faz?",
        paragraphs: [
          "Centraliza alertas de vencimento, status de certidões, protocolos de renovação e comunicação com especialistas CADBRASIL — sem precisar acessar dezenas de portais governamentais manualmente.",
        ],
        bullets: [
          "Monitoramento 24/7 de certidões e níveis",
          "Renovação proativa com validação por IA",
          "Suporte remoto autorizado (AnyDesk)",
          "Painel web para qualquer dispositivo",
        ],
      },
      {
        id: "seguranca",
        title: "Segurança e privacidade",
        paragraphs: [
          "Criptografia TLS 1.3, conformidade LGPD e acesso remoto somente com clique explícito do usuário. Dados tratados apenas para gestão do cadastro SICAF contratado.",
        ],
      },
    ],
    items: [
      {
        question: "O Assistente CADBRASIL é gratuito?",
        answer: "Sim, está incluído nos planos CADBRASIL para gestão contínua do SICAF.",
      },
      {
        question: "Em qual sistema operacional roda?",
        answer: "Windows 10+ e macOS 12+. Há também painel web para navegador.",
      },
      {
        question: "É seguro?",
        answer:
          "Sim. LGPD, criptografia e acesso remoto apenas quando você autoriza.",
      },
      {
        question: "O AnyDesk vem incluso?",
        answer:
          "Sim, integrado para suporte técnico com um clique, mediante sua autorização.",
      },
      {
        question: "Posso usar em vários computadores?",
        answer: "Sim, múltiplas instalações vinculadas ao mesmo CNPJ no painel.",
      },
    ],
  },
  {
    slug: "licitacoes-publicas",
    shortTitle: "Licitações Públicas",
    title: "Licitações públicas e o papel do SICAF",
    description:
      "Como funcionam licitações no Brasil, Lei 14.133/2021, modalidades e por que o SICAF é requisito para vender ao governo.",
    quickAnswer:
      "Licitações públicas são procedimentos para o governo contratar bens e serviços com competitividade e transparência. Para o governo federal, o SICAF é o cadastro obrigatório do fornecedor habilitado.",
    metaTitle: "Licitações Públicas — Lei 14.133, Pregão e SICAF | CADBRASIL",
    metaDescription:
      "Como funcionam licitações públicas no Brasil: Nova Lei 14.133/2021, pregão eletrônico, dispensa, inexigibilidade e exigência do SICAF para fornecedores federais.",
    keywords:
      "licitacoes publicas, lei 14133, nova lei licitacoes, vender governo, fornecedor governo federal, contratos publicos",
    relatedSlugs: ["pregao-eletronico", "pncp-licitacoes", "sicaf-mei-epp"],
    relatedGuides: [...g],
    sections: [
      {
        id: "lei-14133",
        title: "Lei 14.133/2021 em resumo",
        paragraphs: [
          "Substituiu grande parte da Lei 8.666/93 e modernizou compras públicas com foco em digitalização, eficiência e integração de plataformas como Compras.gov.br e PNCP.",
        ],
      },
      {
        id: "sicaf-licitacao",
        title: "SICAF na habilitação",
        paragraphs: [
          "Na fase de habilitação, o órgão verifica se o fornecedor está regular no SICAF e se possui os níveis e documentos exigidos pelo edital. Sem isso, não há contrato.",
        ],
        bullets: [
          "Pregão eletrônico — modalidade mais comum para bens e serviços comuns",
          "Dispensa e inexigibilidade — ainda exigem cadastro quando aplicável",
          "Tratamento diferenciado para ME/EPP e MEI em diversos casos",
        ],
      },
    ],
    items: [
      {
        question: "O que é a Lei 14.133/2021?",
        answer:
          "É a Nova Lei de Licitações e Contratos Administrativos, vigente para a maior parte dos entes, com regras atualizadas de procedimentos e contratos.",
      },
      {
        question: "O que é pregão eletrônico?",
        answer:
          "Licitação 100% online com lances em tempo real; é a modalidade mais usada para compras correntes. Exige SICAF regular para fornecedores federais.",
      },
      {
        question: "O que é dispensa de licitação?",
        answer:
          "Compra direta em hipóteses legais (valor, emergência etc.). O fornecedor ainda precisa estar habilitado quando o edital exigir SICAF.",
      },
      {
        question: "Posso licitar em qualquer estado?",
        answer:
          "Com SICAF nacional, sim, em órgãos que utilizem o ecossistema federal ou aceitem o cadastro unificado.",
      },
      {
        question: "Microempresas têm vantagens?",
        answer:
          "Sim: empate ficto, cotas, exclusividade em faixas de valor e benefícios da LC 123/2006, conforme o edital.",
      },
    ],
  },
];
