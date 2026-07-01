/** Conteúdo /sicaf-niveis — manual de atualização dos níveis SICAF */

export const sicafNiveisMeta = {
  path: "/sicaf-niveis",
  title: "Níveis do SICAF 2026 | Guia Ilustrado de Atualização I a VI — CADBRASIL",
  description:
    "Manual completo dos 6 níveis do SICAF: credenciamento, habilitação jurídica, regularidade fiscal federal e municipal, qualificação técnica e econômico-financeira. Passo a passo ilustrado para atualizar no Compras.gov.br.",
  keywords:
    "níveis sicaf, atualizar níveis sicaf, nivel 1 sicaf credenciamento, nivel 2 habilitação jurídica, nivel 3 regularidade fiscal, nivel 4 certidão estadual municipal, nivel 5 qualificação técnica, nivel 6 balanço patrimonial, sicaf niveis 2026, portal fornecedor sicaf",
  quickAnswer:
    "O SICAF possui 6 níveis: I Credenciamento, II Habilitação Jurídica, III Regularidade Fiscal Federal (consulta automática), IV Estadual/Municipal (atualização manual), V Qualificação Técnica e VI Econômico-Financeira. Acesse o menu SICAF no Portal do Fornecedor e atualize cada nível conforme o manual.",
};

export const sicafNiveisToc = [
  { id: "introducao", label: "Introdução" },
  { id: "visao-geral", label: "Visão dos 6 níveis" },
  { id: "nivel-i", label: "Nível I" },
  { id: "nivel-ii", label: "Nível II" },
  { id: "nivel-iii", label: "Nível III" },
  { id: "nivel-iv", label: "Nível IV" },
  { id: "nivel-v", label: "Nível V" },
  { id: "nivel-vi", label: "Nível VI" },
  { id: "resumo", label: "Tabela resumo" },
  { id: "recomendacoes", label: "Recomendações" },
  { id: "cadbrasil", label: "Ajuda CADBRASIL" },
  { id: "faq", label: "FAQ" },
] as const;

export const resumoInteligente = [
  "SICAF divide o cadastro do fornecedor em 6 níveis com finalidades distintas de habilitação.",
  "Nível I: dados cadastrais e credenciamento — razão social, CNPJ, CNAE, responsável legal.",
  "Nível II: habilitação jurídica — contrato social, estatuto, procurações e representantes.",
  "Nível III: regularidade fiscal federal — consulta automática (RFB, FGTS, CNDT, INSS).",
  "Nível IV: certidões estaduais e municipais — atualização manual; excluir antes de recadastrar.",
  "Nível V: qualificação técnica — conselhos, ISO, licenças e atestados de capacidade.",
  "Nível VI: qualificação econômico-financeira — balanço, DRE e índices contábeis.",
  "Cadastro atualizado em todos os níveis é pré-requisito para licitar com segurança.",
];

export const niveisResumoTabela = [
  { nivel: "I", nome: "Credenciamento", atualizacao: "Dados cadastrais" },
  { nivel: "II", nome: "Habilitação Jurídica", atualizacao: "Documentação jurídica" },
  { nivel: "III", nome: "Regularidade Fiscal Federal", atualizacao: "Consulta automática pelo Governo" },
  { nivel: "IV", nome: "Regularidade Estadual e Municipal", atualizacao: "Atualização manual das certidões" },
  { nivel: "V", nome: "Qualificação Técnica", atualizacao: "Registros, licenças, certificados e atestados" },
  { nivel: "VI", nome: "Qualificação Econômico-Financeira", atualizacao: "Balanço patrimonial e documentos contábeis" },
];

export const nivelIContent = {
  id: "nivel-i",
  numero: "I",
  titulo: "Credenciamento",
  subtitulo: "Dados cadastrais da empresa",
  objetivo: "Garantir que todos os dados básicos da empresa estejam corretos e atualizados.",
  automatico: false,
  destaque: "Porta de entrada do SICAF no Governo Federal.",
  campos: [
    "Razão Social",
    "Nome Fantasia (quando houver)",
    "CNPJ",
    "Natureza Jurídica",
    "Porte da Empresa",
    "CNAE Principal",
    "CNAEs Secundários",
    "Dados do Responsável Legal",
    "Dados de Contato",
  ],
};

export const nivelIIContent = {
  id: "nivel-ii",
  numero: "II",
  titulo: "Habilitação Jurídica",
  subtitulo: "Constituição legal do fornecedor",
  objetivo: "Comprovar a existência legal da empresa.",
  automatico: false,
  exemplos: [
    "Contrato Social",
    "Alterações Contratuais",
    "Estatuto",
    "Documentação dos Representantes Legais",
    "Procurações (quando aplicável)",
  ],
};

export const nivelIIIContent = {
  id: "nivel-iii",
  numero: "III",
  titulo: "Regularidade Fiscal Federal",
  subtitulo: "Consulta automática pelo Governo",
  objetivo: "Validar regularidade fiscal e trabalhista federal sem envio manual na maioria dos casos.",
  automatico: true,
  orgaos: [
    "Receita Federal",
    "Dívida Ativa da União",
    "FGTS",
    "Trabalhista (CNDT)",
    "INSS",
    "Outros órgãos integrados",
  ],
  alerta:
    "Caso alguma certidão não seja localizada automaticamente, verifique diretamente no órgão emissor e regularize a pendência na fonte.",
};

export const nivelIVContent = {
  id: "nivel-iv",
  numero: "IV",
  titulo: "Regularidade Fiscal Estadual e Municipal",
  subtitulo: "Atualização manual — atenção redobrada",
  objetivo: "Manter certidões estaduais e municipais válidas para habilitação em licitações.",
  automatico: false,
  passos: [
    {
      n: "1",
      titulo: "Localize a certidão vencida",
      descricao: "No menu SICAF, identifique qual certidão estadual ou municipal está com validade expirada.",
    },
    {
      n: "2",
      titulo: 'Clique em "Excluir"',
      descricao: "Nunca apenas substitua o arquivo. Primeiro exclua a certidão antiga do sistema.",
    },
    {
      n: "3",
      titulo: "Cadastre a certidão atualizada",
      descricao: "Informe código, data de vencimento e anexe o PDF da nova certidão emitida.",
    },
  ],
  camposObrigatorios: [
    { campo: "Código da Certidão", dica: "Número exato constante no documento emitido pelo órgão." },
    { campo: "Data de Vencimento", dica: "Validade conforme impresso na certidão — sem arredondar." },
    { campo: "Arquivo PDF", dica: "Anexe a certidão legível, no mesmo CNPJ da empresa." },
  ],
  checklist: [
    "A certidão pertence ao mesmo CNPJ",
    "Está dentro do prazo de validade",
    "O código foi digitado corretamente",
    "A data de vencimento corresponde ao documento",
  ],
};

export const nivelVContent = {
  id: "nivel-v",
  numero: "V",
  titulo: "Qualificação Técnica",
  subtitulo: "Capacidade para executar o objeto contratado",
  objetivo: "Demonstrar que a empresa possui capacidade técnica para executar contratos com a Administração Pública.",
  automatico: false,
  categorias: [
    {
      titulo: "Registro em Conselhos Profissionais",
      descricao: "Quando obrigatório para exercício da atividade.",
      itens: ["CREA", "CAU", "CRA", "CRC", "CRM", "OAB", "CRQ", "Outros conselhos"],
    },
    {
      titulo: "Certificações",
      descricao: "Padrões de qualidade reconhecidos.",
      itens: ["ISO 9001", "ISO 14001", "ISO 27001", "PBQP-H", "Certificações do segmento"],
    },
    {
      titulo: "Licenças",
      descricao: "Autorizações de órgãos públicos.",
      itens: [
        "Alvará de Funcionamento",
        "Licença Ambiental",
        "Vigilância Sanitária",
        "Corpo de Bombeiros",
        "Autorizações específicas",
      ],
    },
    {
      titulo: "Atestados de Capacidade Técnica",
      descricao: "Comprovação de serviços similares executados com qualidade.",
      itens: ["Atestados de clientes", "Contratos similares", "Relatórios de execução"],
    },
  ],
};

export const nivelVIContent = {
  id: "nivel-vi",
  numero: "VI",
  titulo: "Qualificação Econômico-Financeira",
  subtitulo: "Saúde financeira da empresa",
  objetivo: "Comprovar que a empresa possui saúde financeira suficiente para assumir contratos com a Administração Pública.",
  automatico: false,
  documentos: [
    "Balanço Patrimonial",
    "Demonstração do Resultado do Exercício (DRE)",
    "Índices Econômicos",
    "Patrimônio Líquido",
    "Capital Social",
    "Informações Contábeis",
  ],
  anexos: [
    "Balanço assinado",
    "Termo de Abertura",
    "Termo de Encerramento",
    "SPED Contábil (quando aplicável)",
  ],
};

export const recomendacoes = [
  "Verifique frequentemente a validade das certidões.",
  "Nunca deixe documentos vencidos no sistema.",
  "Antes de inserir nova certidão no Nível IV, exclua a anterior.",
  "Confirme sempre o código da certidão e sua data de vencimento.",
  "Mantenha o balanço patrimonial atualizado conforme o exercício contábil.",
  "Guarde todos os documentos originais em formato PDF.",
];

export const sicafNiveisFaqs = [
  {
    question: "Quantos níveis tem o SICAF?",
    answer:
      "São 6 níveis: I Credenciamento, II Habilitação Jurídica, III Regularidade Fiscal Federal, IV Estadual/Municipal, V Qualificação Técnica e VI Econômico-Financeira.",
  },
  {
    question: "O Nível III exige upload de documentos?",
    answer:
      "Na maioria dos casos, não. O Governo consulta automaticamente Receita Federal, FGTS, CNDT, INSS e outros órgãos integrados. Se não localizar, verifique no emissor.",
  },
  {
    question: "Como atualizar certidão vencida no Nível IV?",
    answer:
      "Localize a certidão vencida, clique em Excluir (não substitua direto), depois cadastre novamente com código, data de vencimento e PDF atualizado.",
  },
  {
    question: "Por que minha empresa foi desclassificada mesmo com SICAF?",
    answer:
      "Pode faltar nível exigido pelo edital, certidão vencida no IV, ou divergência de código/data no cadastro manual. Revise todos os níveis antes de licitar.",
  },
  {
    question: "Onde acesso o menu SICAF para atualizar?",
    answer:
      "No Portal do Fornecedor (Compras.gov.br), com certificado digital e-CNPJ, entre no menu SICAF e atualize cada nível conforme este manual.",
  },
  {
    question: "A CADBRASIL ajuda na atualização dos níveis?",
    answer:
      "Sim. Assistente Inteligente CADBRASIL, Central de Ajuda com vídeos e especialistas conduzem a atualização de todos os níveis com suporte passo a passo.",
  },
];

export const relatedGuides = [
  { to: "/o-que-e-sicaf-e-como-se-cadastrar", label: "O que é SICAF e como cadastrar" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Cadastro passo a passo" },
  { to: "/documentacao-sicaf", label: "Checklist de documentos" },
  { to: "/regularidade-fiscal", label: "Regularidade fiscal" },
  { to: "/emitir-crc", label: "Emitir CRC" },
  { to: "/faq/niveis-habilitacao-sicaf", label: "FAQ níveis SICAF" },
  { to: "/assistente", label: "Assistente CADBRASIL" },
];
