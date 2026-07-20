/** Conteúdo /servicos-documentacao — serviços CADBRASIL e gestão documental */

export const servicosDocumentacaoMeta = {
  path: "/servicos-documentacao",
  title: "Serviços CADBRASIL 2026 | Gestão de Documentos, SICAF e Licitações",
  description:
    "Conheça todos os serviços CADBRASIL: gestão documental SICAF, cadastro e regularização, certidões, níveis I a VI, CRC, licitações, pregão, IA e consultoria jurídica. Cadastre seu SICAF com especialistas.",
  keywords:
    "serviços CADBRASIL, gestão documentos sicaf, documentação licitação, regularização sicaf, credenciamento fornecedor, certidões sicaf, assessoria sicaf, gestão documental governo, cadastro sicaf cadbrasil, renovação certidões, crc sicaf, habilitação fornecedor",
  quickAnswer:
    "A CADBRASIL oferece gestão completa de documentos SICAF e licitações: credenciamento, regularização dos níveis I a VI, monitoramento de certidões, emissão de CRC, busca de editais, pregão e consultoria jurídica — com entrega em até 24 horas quando a documentação está completa.",
};

export const servicosDocumentacaoToc = [
  { id: "visao-geral", label: "Visão geral" },
  { id: "gestao-documentos", label: "Gestão de documentos" },
  { id: "servicos-sicaf", label: "Serviços SICAF" },
  { id: "documentos-gerenciados", label: "Documentos gerenciados" },
  { id: "servicos-licitacoes", label: "Licitações e pregão" },
  { id: "consultoria", label: "Consultoria e suporte" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "diferenciais", label: "Diferenciais CADBRASIL" },
  { id: "cadastro-sicaf", label: "Cadastrar SICAF" },
  { id: "faq", label: "Perguntas frequentes" },
] as const;

export const resumoInteligente = [
  "CADBRASIL centraliza gestão documental, SICAF e licitações em uma plataforma com especialistas e IA.",
  "Credenciamento SICAF assistido: Níveis I a VI, CRC e monitoramento contínuo de certidões.",
  "Arquivo digital com validade, alertas de vencimento e checklist por nível de habilitação.",
  "Regularização fiscal, jurídica, técnica e econômico-financeira para manter a empresa apta a licitar.",
  "Busca de licitações, pipeline de processos, monitoramento de pregão e consultoria jurídica.",
  "Entrega em até 24 horas quando a documentação da empresa está completa e regular.",
  "Atendimento a MEI, ME, EPP, LTDA, S/A e EIRELI em todo o Brasil.",
  "Do primeiro documento ao contrato assinado — suporte humano em cada etapa.",
];

export const heroStats = [
  { value: "20+", label: "Serviços especializados" },
  { value: "6", label: "Níveis SICAF gerenciados" },
  { value: "24h", label: "SICAF com documentação ok" },
  { value: "8k+", label: "Fornecedores atendidos" },
];

export const pilaresGestao = [
  {
    titulo: "Organização",
    descricao: "Todos os documentos SICAF e de licitação em um só lugar — com validade, status e pendências visíveis.",
  },
  {
    titulo: "Prevenção",
    descricao: "Alertas antes do vencimento de certidões evitam bloqueio do cadastro e desclassificação em pregões.",
  },
  {
    titulo: "Conformidade",
    descricao: "Checklist por nível I a VI alinhado ao Compras.gov.br e às exigências dos editais federais.",
  },
];

export const gestaoDocumentos = {
  titulo: "Gestão de documentos SICAF e licitações",
  subtitulo: "A CADBRASIL cuida de toda a documentação que sua empresa precisa para vender ao governo.",
  servicos: [
    {
      titulo: "Arquivo digital centralizado",
      descricao: "Upload, categorização e versionamento de PDFs — contrato social, certidões, atestados e balanços.",
      itens: ["Organização por nível SICAF", "Histórico de versões", "Acesso seguro por CNPJ"],
    },
    {
      titulo: "Controle de validade",
      descricao: "Monitoramento automático de vencimento de CND, FGTS, CNDT, certidões estaduais e municipais.",
      itens: ["Alertas por e-mail e WhatsApp", "Calendário de renovação", "Status verde/amarelo/vermelho"],
    },
    {
      titulo: "Checklist por edital",
      descricao: "Lista de documentos exigidos em cada licitação cruzada com o que sua empresa já possui.",
      itens: ["Gap analysis documental", "Pendências antes do pregão", "Preparação para habilitação"],
    },
    {
      titulo: "Atualização no Compras.gov.br",
      descricao: "Equipe especializada insere, exclui e recadastra certidões nos níveis corretos do SICAF.",
      itens: ["Nível IV manual (excluir + recadastrar)", "Validação de código e data", "Conferência de CNPJ"],
    },
    {
      titulo: "Emissão e renovação de certidões",
      descricao: "Orientação e acompanhamento para obter CND Federal, FGTS, CNDT, estadual e municipal.",
      itens: ["Emissão gratuita nos órgãos", "Regularização de pendências", "Acompanhamento até aprovação"],
    },
    {
      titulo: "Documentos para habilitação",
      descricao: "Preparação de dossiê completo para fase de habilitação em pregões e contratações diretas.",
      itens: ["Procurações e declarações", "Atestados de capacidade técnica", "Balanço e índices financeiros"],
    },
  ],
};

export const servicosSicaf = [
  {
    categoria: "Cadastro e credenciamento",
    icon: "shield",
    servicos: [
      "Credenciamento SICAF do zero (Nível I)",
      "Cadastro completo no Compras.gov.br",
      "Configuração de certificado digital e-CNPJ",
      "Cadastro de linhas de fornecimento (CATMAT/CATSER)",
      "Primeiro CRC com status Regular",
    ],
  },
  {
    categoria: "Regularização e níveis",
    icon: "layers",
    servicos: [
      "Regularização SICAF irregular ou pendente",
      "Atualização dos Níveis I a VI",
      "Habilitação jurídica (Nível II)",
      "Regularidade fiscal federal (Nível III)",
      "Certidões estaduais e municipais (Nível IV)",
      "Qualificação técnica (Nível V)",
      "Qualificação econômico-financeira (Nível VI)",
    ],
  },
  {
    categoria: "Manutenção e renovação",
    icon: "refresh",
    servicos: [
      "Monitoramento contínuo de certidões",
      "Renovação antes do vencimento",
      "Recuperação de empresa inapta no SICAF",
      "Correção de divergências cadastrais",
      "Emissão e reemissão de CRC",
    ],
  },
];

export const documentosGerenciados = [
  { doc: "Contrato social / Estatuto e alterações", nivel: "II", tipo: "Jurídico" },
  { doc: "Cartão CNPJ e dados cadastrais", nivel: "I", tipo: "Cadastral" },
  { doc: "Certidão Negativa de Débitos (RFB)", nivel: "III", tipo: "Fiscal federal" },
  { doc: "Certidão de Regularidade FGTS (CRF)", nivel: "III", tipo: "Trabalhista" },
  { doc: "CNDT — Certidão Negativa de Débitos Trabalhistas", nivel: "III", tipo: "Trabalhista" },
  { doc: "CND estadual e municipal", nivel: "IV", tipo: "Fiscal local" },
  { doc: "Atestados de capacidade técnica", nivel: "V", tipo: "Técnico" },
  { doc: "Registros em conselhos profissionais (CREA, CAU, CRC…)", nivel: "V", tipo: "Técnico" },
  { doc: "Licenças e alvarás (ambiental, sanitário, bombeiros)", nivel: "V", tipo: "Técnico" },
  { doc: "Certificações ISO e PBQP-H", nivel: "V", tipo: "Qualidade" },
  { doc: "Balanço patrimonial e DRE", nivel: "VI", tipo: "Financeiro" },
  { doc: "Certificado digital e-CNPJ", nivel: "Acesso", tipo: "Infraestrutura" },
  { doc: "Procurações e documentos de representantes", nivel: "II", tipo: "Jurídico" },
  { doc: "Declarações exigidas por edital", nivel: "Habilitação", tipo: "Licitação" },
];

export const servicosLicitacoes = [
  {
    titulo: "Busca e alertas de licitações",
    descricao: "Boletins segmentados por CNAE, região e palavra-chave — editais federais, estaduais e municipais.",
  },
  {
    titulo: "Pipeline de licitações",
    descricao: "Kanban com status, prazos, equipe e histórico de cada processo licitatório.",
  },
  {
    titulo: "Análise de editais com IA",
    descricao: "Assistente CADBRASIL interpreta exigências, prazos e riscos antes de você investir na proposta.",
  },
  {
    titulo: "Monitoramento de pregão eletrônico",
    descricao: "Alertas de chat, convocações, lances e esclarecimentos em tempo real.",
  },
  {
    titulo: "Preparação para habilitação",
    descricao: "Conferência documental completa antes da fase de habilitação do certame.",
  },
  {
    titulo: "Pós-licitação e contratos",
    descricao: "Acompanhamento de atas, contratos e obrigações após a homologação.",
  },
];

export const consultoriaSuporte = [
  {
    titulo: "Consultoria jurídica licitatória",
    descricao: "Impugnações, recursos, esclarecimentos de edital e conformidade com a Lei 14.133/2021.",
  },
  {
    titulo: "Assistente CADBRASIL (IA)",
    descricao: "Chat inteligente para dúvidas sobre SICAF, documentos, níveis e procedimentos no Compras.gov.br.",
  },
  {
    titulo: "Suporte humano especializado",
    descricao: "Equipe cadastral e licitatória via WhatsApp, e-mail e central de ajuda com vídeos tutoriais.",
  },
  {
    titulo: "Assessoria para consultorias",
    descricao: "Plano Enterprise com multi-CNPJ, gerente de conta e SLA prioritário para escritórios e grupos.",
  },
];

export const fluxoGestao = [
  {
    n: "01",
    titulo: "Diagnóstico documental",
    descricao: "Mapeamos o que sua empresa já possui, o que falta e quais certidões estão vencidas ou próximas do prazo.",
  },
  {
    n: "02",
    titulo: "Plano de regularização",
    descricao: "Definimos prioridades por nível SICAF e por edital-alvo — jurídico, fiscal, técnico e financeiro.",
  },
  {
    n: "03",
    titulo: "Coleta e organização",
    descricao: "Você envia os PDFs; a CADBRASIL valida formato, validade, CNPJ e consistência com o cadastro.",
  },
  {
    n: "04",
    titulo: "Atualização no SICAF",
    descricao: "Inserimos e atualizamos documentos nos níveis corretos do Compras.gov.br com conferência dupla.",
  },
  {
    n: "05",
    titulo: "Monitoramento contínuo",
    descricao: "Alertas de vencimento, renovação proativa e manutenção do CRC Regular para licitar com segurança.",
  },
];

export const diferenciais = [
  "Especialistas em SICAF e licitações — não apenas software genérico de arquivos.",
  "Integração entre documentos, SICAF e oportunidades de licitação na mesma plataforma.",
  "Entrega em até 24 horas quando a documentação base está completa.",
  "Assistente IA treinado em procedimentos reais do Compras.gov.br.",
  "Atendimento humano em português, com equipe que conhece os níveis I a VI na prática.",
  "Prevenção de desclassificação por certidão vencida ou documento incompleto.",
  "Planos do Start ao Enterprise — do SICAF essencial à operação licitatória completa.",
];

export const servicosDocumentacaoFaqs = [
  {
    question: "Quais documentos a CADBRASIL gerencia para o SICAF?",
    answer:
      "Gerenciamos toda a documentação dos níveis I a VI: contrato social, certidões fiscais e trabalhistas (federal, estadual e municipal), atestados técnicos, registros profissionais, licenças, balanços, DRE e certificado digital e-CNPJ — com controle de validade e alertas.",
  },
  {
    question: "A CADBRASIL faz o cadastro SICAF completo pela minha empresa?",
    answer:
      "Sim. Fazemos credenciamento do zero, regularização de cadastros irregulares, atualização de todos os níveis, emissão de CRC e monitoramento contínuo. Com documentação completa, o prazo pode ser de até 24 horas.",
  },
  {
    question: "Como funciona o monitoramento de certidões?",
    answer:
      "Cadastramos as datas de vencimento de cada certidão e enviamos alertas antes do prazo. Quando necessário, orientamos a emissão nos órgãos e atualizamos o SICAF — inclusive no Nível IV, com exclusão da certidão antiga antes do recadastro.",
  },
  {
    question: "Preciso ter todos os documentos prontos antes de contratar?",
    answer:
      "Não necessariamente. Fazemos o diagnóstico inicial, identificamos pendências e conduzimos a regularização junto com você — desde a emissão de certidões até a habilitação completa nos níveis exigidos.",
  },
  {
    question: "A gestão documental serve só para SICAF ou também para licitações?",
    answer:
      "Para ambos. O dossiê SICAF é a base da habilitação; cruzamos esses documentos com exigências específicas de cada edital e preparamos o pacote completo para a fase de habilitação do pregão.",
  },
  {
    question: "MEI e ME podem usar os serviços CADBRASIL?",
    answer:
      "Sim. Atendemos MEI, ME, EPP, LTDA, S/A e EIRELI. A documentação exigida varia conforme o porte e o edital — adaptamos o checklist à realidade de cada empresa.",
  },
  {
    question: "Qual a diferença entre gestão documental CADBRASIL e um armazenamento na nuvem?",
    answer:
      "Além de armazenar, validamos validade, cruzamos com níveis SICAF, atualizamos no Compras.gov.br, alertamos vencimentos e preparamos dossiês para editais — com especialistas, não apenas pastas de arquivos.",
  },
  {
    question: "Como contratar os serviços de documentação e SICAF?",
    answer:
      "Acesse cadastro.cadbrasil.com.br, escolha o plano adequado (Start para SICAF essencial, Licitações ou Pro para gestão completa) ou fale com nosso time pelo WhatsApp para um diagnóstico gratuito.",
  },
];

export const relatedGuides = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Cadastro SICAF passo a passo" },
  { to: "/sicaf-niveis", label: "Níveis do SICAF" },
  { to: "/documentacao-sicaf", label: "Checklist documentação SICAF" },
  { to: "/licitacoes", label: "Plataforma de licitações" },
  { to: "/planos", label: "Planos e preços" },
  { to: "/cadastrar-no-sicaf", label: "Cadastrar no SICAF" },
  { to: "/renovacao-sicaf", label: "Renovação SICAF" },
  { to: "/emitir-crc", label: "Emitir CRC" },
];
