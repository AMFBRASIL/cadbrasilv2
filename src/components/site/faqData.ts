// Shared FAQ data and accordion component used by all FAQ pages.
export type FaqItem = { question: string; answer: string };

export type FaqCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    slug: "cadastro-sicaf",
    shortTitle: "Cadastro SICAF",
    title: "Perguntas sobre Cadastro SICAF",
    description:
      "Dúvidas comuns sobre como fazer o cadastro inicial no SICAF, documentos necessários, prazos e habilitação de níveis.",
    metaTitle: "FAQ Cadastro SICAF — Documentos, Prazos e Custos | CADBRASIL",
    metaDescription:
      "Tire suas dúvidas sobre cadastro SICAF: documentação necessária, prazo de habilitação, níveis disponíveis, custos e diferenças entre cadastro novo e renovação.",
    keywords:
      "cadastro sicaf, como cadastrar sicaf, documentos sicaf, prazo cadastro sicaf, niveis sicaf, sicaf compras gov br, sicaf MEI",
    items: [
      {
        question: "Como faço o cadastro SICAF do zero?",
        answer:
          "O cadastro pode ser feito diretamente no portal Compras.gov.br, mas exige conhecimento dos níveis (I a VI), validação documental e atenção às regularidades fiscal, trabalhista e econômico-financeira. Com a CADBRASIL, basta enviar seus documentos e a equipe cuida de todo o processo — entrega em até 24h.",
      },
      {
        question: "Quais documentos preciso para o cadastro SICAF?",
        answer:
          "Os principais são: Contrato Social atualizado, Cartão CNPJ, RG e CPF dos sócios, comprovante de endereço, CND Federal, FGTS, CND Estadual, CND Municipal, CNDT, e — para níveis V e VI — Balanço Patrimonial e Atestados de Capacidade Técnica.",
      },
      {
        question: "Quanto tempo leva o cadastro SICAF?",
        answer:
          "Com toda a documentação em mãos, a CADBRASIL entrega o SICAF habilitado em até 24 horas. Sem apoio especializado e com pendências fiscais, o processo pode se arrastar por semanas.",
      },
      {
        question: "MEI pode se cadastrar no SICAF?",
        answer:
          "Sim. Microempreendedores Individuais podem se cadastrar normalmente. Há regras especiais de tratamento diferenciado (Lei Complementar 123/2006) que favorecem MEIs e MEs em licitações.",
      },
      {
        question: "Preciso renovar o cadastro SICAF anualmente?",
        answer:
          "O cadastro em si não vence, mas as certidões anexadas (CND Federal, FGTS, etc.) vencem regularmente — algumas em 90 dias, outras em 180. Sem renovar essas certidões, sua empresa fica irregular no SICAF.",
      },
      {
        question: "Posso fazer o cadastro SICAF sozinho?",
        answer:
          "Tecnicamente sim. Na prática, a maioria dos cadastros sem apoio é rejeitada na primeira tentativa por documentos errados, certidões vencidas ou erro nos níveis. A CADBRASIL garante aprovação na primeira submissão.",
      },
    ],
  },
  {
    slug: "regularizacao-sicaf",
    shortTitle: "Regularização SICAF",
    title: "Perguntas sobre Regularização SICAF",
    description:
      "Como regularizar pendências, corrigir certidões vencidas e voltar a participar de licitações rapidamente.",
    metaTitle: "FAQ Regularização SICAF — Resolva Pendências Rápido | CADBRASIL",
    metaDescription:
      "Saiba como regularizar seu SICAF, corrigir certidões vencidas, resolver pendências fiscais e voltar imediatamente a participar de licitações públicas.",
    keywords:
      "regularizar sicaf, sicaf irregular, certidao vencida sicaf, pendencia fiscal sicaf, sicaf bloqueado, regularidade sicaf",
    items: [
      {
        question: "O que é SICAF irregular?",
        answer:
          "É quando uma ou mais certidões da sua empresa estão vencidas, ou existe pendência fiscal, trabalhista ou cadastral. Empresas com SICAF irregular são automaticamente desabilitadas em pregões eletrônicos e dispensas.",
      },
      {
        question: "Como sei se meu SICAF está regular?",
        answer:
          "Você pode consultar diretamente no portal Compras.gov.br ou solicitar uma análise gratuita à CADBRASIL — em minutos enviamos o diagnóstico completo da sua situação.",
      },
      {
        question: "Quanto tempo leva para regularizar o SICAF?",
        answer:
          "Pendências simples (CND Federal, FGTS, CNDT) são resolvidas no mesmo dia. Pendências complexas (parcelamento, débitos estaduais, atestados) levam de 24h a 5 dias úteis, dependendo do caso.",
      },
      {
        question: "Posso participar de licitação com SICAF irregular?",
        answer:
          "Não. O portal bloqueia automaticamente sua proposta. Mesmo que envie, sua empresa será desclassificada na fase de habilitação. Por isso o monitoramento contínuo da CADBRASIL faz tanta diferença.",
      },
      {
        question: "A CADBRASIL resolve pendência fiscal?",
        answer:
          "Não pagamos seus débitos, mas orientamos exatamente como resolver, intermediamos parcelamentos quando aplicável e regularizamos o SICAF imediatamente após o pagamento ou parcelamento.",
      },
    ],
  },
  {
    slug: "atualizacao-sicaf",
    shortTitle: "Atualização SICAF",
    title: "Perguntas sobre Atualização SICAF",
    description:
      "Renovação automática de certidões, monitoramento de prazos e como manter o SICAF sempre ativo.",
    metaTitle: "FAQ Atualização SICAF — Renovação de Certidões | CADBRASIL",
    metaDescription:
      "Entenda como funciona a atualização automática do SICAF, renovação proativa de certidões e o monitoramento 24/7 oferecido pela CADBRASIL.",
    keywords:
      "atualizar sicaf, renovacao sicaf, certidoes vencendo, monitoramento sicaf, sicaf automatico, gestao sicaf",
    items: [
      {
        question: "Com que frequência devo atualizar o SICAF?",
        answer:
          "Não é uma frequência fixa: depende do vencimento de cada certidão. CND Federal e FGTS vencem em 180 dias, CND Estadual e Municipal variam, e a CNDT vence em 180 dias. A CADBRASIL monitora todas e renova antes do vencimento.",
      },
      {
        question: "Como funciona a renovação automática da CADBRASIL?",
        answer:
          "Nossa IA monitora todas as suas certidões 24/7. A 30 dias do vencimento, iniciamos a nova emissão automaticamente. Você recebe a confirmação quando concluído — sem precisar fazer nada.",
      },
      {
        question: "Preciso me preocupar com vencimento de certidões?",
        answer:
          "Com a CADBRASIL, não. Todo o controle é feito pelo Assistente CADBRASIL e pela nossa equipe. Você só é avisado se houver algo que exija sua aprovação (como pagamento de débito).",
      },
      {
        question: "E se uma certidão for negada na renovação?",
        answer:
          "O Assistente identifica a causa, classifica a pendência, abre um chamado prioritário com nossa equipe e te avisa imediatamente com o passo a passo para resolver.",
      },
    ],
  },
  {
    slug: "assistente-cadbrasil",
    shortTitle: "Assistente CADBRASIL",
    title: "Perguntas sobre o Assistente CADBRASIL",
    description:
      "Tudo sobre o aplicativo Assistente CADBRASIL: instalação, requisitos, segurança e funcionalidades.",
    metaTitle: "FAQ Assistente CADBRASIL — Instalação e Segurança | CADBRASIL",
    metaDescription:
      "Dúvidas sobre o aplicativo Assistente CADBRASIL: como instalar, requisitos do sistema, segurança LGPD, AnyDesk integrado e como funciona a IA.",
    keywords:
      "assistente cadbrasil, software sicaf, app sicaf, anydesk sicaf, instalar assistente cadbrasil, IA sicaf",
    items: [
      {
        question: "O Assistente CADBRASIL é gratuito?",
        answer:
          "Sim. O aplicativo é incluído gratuitamente em todos os planos CADBRASIL. Ele é a forma mais eficiente de manter seu SICAF sempre regular.",
      },
      {
        question: "Em qual sistema operacional ele roda?",
        answer:
          "Windows 10 ou superior e macOS 12 (Monterey) ou superior. Também temos acesso via painel web para qualquer dispositivo com navegador.",
      },
      {
        question: "É seguro? Ele tem acesso aos meus dados?",
        answer:
          "Sim, totalmente seguro. Usamos criptografia TLS 1.3, somos conformes com a LGPD e o acesso remoto via AnyDesk só é ativado quando você autoriza explicitamente.",
      },
      {
        question: "O AnyDesk vem incluso?",
        answer:
          "Sim. O AnyDesk é integrado ao Assistente CADBRASIL para que, em caso de necessidade, um especialista possa te dar suporte remoto seguro com um clique.",
      },
      {
        question: "Posso usar o Assistente em mais de um computador?",
        answer:
          "Sim. Você pode instalar em quantas máquinas precisar, todas vinculadas ao mesmo CNPJ no painel CADBRASIL.",
      },
    ],
  },
  {
    slug: "licitacoes-publicas",
    shortTitle: "Licitações Públicas",
    title: "Perguntas sobre Licitações Públicas",
    description:
      "Visão geral sobre como funcionam licitações no Brasil, Lei 14.133/2021, pregão eletrônico e papel do SICAF.",
    metaTitle: "FAQ Licitações Públicas — Lei 14.133, Pregão e SICAF | CADBRASIL",
    metaDescription:
      "Entenda como funcionam licitações públicas no Brasil, a Nova Lei de Licitações (14.133/2021), pregão eletrônico, dispensa e o papel central do SICAF.",
    keywords:
      "licitacoes publicas, lei 14133, nova lei licitacoes, pregao eletronico, dispensa licitacao, fornecedor governo, vender governo",
    items: [
      {
        question: "O que é a Lei 14.133/2021?",
        answer:
          "É a Nova Lei de Licitações e Contratos Administrativos, que substituiu a Lei 8.666/93. Ela moderniza as regras de compras públicas no Brasil, com foco em eficiência, transparência e digitalização.",
      },
      {
        question: "O que é Pregão Eletrônico?",
        answer:
          "É a modalidade de licitação mais usada no Brasil para compras de bens e serviços comuns. Acontece 100% pela internet, com lances em tempo real. O SICAF é obrigatório para participar.",
      },
      {
        question: "O que é Dispensa de Licitação?",
        answer:
          "É quando o órgão público compra diretamente, sem realizar licitação, em casos previstos em lei (valor pequeno, emergência, fornecedor exclusivo, etc.). Ainda assim, o SICAF é exigido.",
      },
      {
        question: "Posso participar de licitações de qualquer estado?",
        answer:
          "Sim. O SICAF é nacional. Sua empresa, com cadastro ativo, pode participar de pregões em qualquer estado e município que utilize o Compras.gov.br ou plataformas integradas.",
      },
      {
        question: "Microempresas têm vantagem em licitações?",
        answer:
          "Sim. A Lei Complementar 123/2006 garante tratamento diferenciado: empate ficto, exclusividade em licitações até R$ 80 mil, cotas reservadas e regularização tardia da documentação fiscal.",
      },
    ],
  },
];
