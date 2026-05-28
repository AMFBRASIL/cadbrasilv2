export const GUIA_CADASTRO_SICAF_PATH = "/guia/cadastro-sicaf-passo-passo";

export const guiaCadastroSicafMeta = {
  title: "Cadastro SICAF 2026 | Passo a Passo Completo — Guia CADBRASIL",
  description:
    "Tutorial completo para cadastro no SICAF em 2026: passo a passo, documentos por nível, certificado digital, prazos, renovação, erros comuns e como habilitar sua empresa em até 24h com a CADBRASIL.",
  keywords:
    "cadastro sicaf, como cadastrar sicaf, sicaf passo a passo, documentos sicaf, niveis sicaf, habilitacao sicaf, compras.gov.br sicaf, certificado digital sicaf, crc sicaf, regularizar sicaf, atualizar sicaf, sicaf 2026, fornecedor governo, licitacoes publicas sicaf, cadastro fornecedor federal, sicaf mei, sicaf epp, renovacao sicaf, custo sicaf",
};

export const guiaToc = [
  { id: "o-que-e", label: "O que é SICAF" },
  { id: "obrigatoriedade", label: "É obrigatório?" },
  { id: "passo-a-passo", label: "Passo a passo oficial" },
  { id: "niveis", label: "Níveis I a VI" },
  { id: "documentos", label: "Documentos" },
  { id: "certificado-digital", label: "Certificado digital" },
  { id: "custos-prazos", label: "Custos e prazos" },
  { id: "renovacao", label: "Renovação" },
  { id: "erros-comuns", label: "Erros comuns" },
  { id: "cadbrasil", label: "Cadastro com CADBRASIL" },
  { id: "faq", label: "Perguntas frequentes" },
] as const;

export const passosOficiais = [
  {
    n: "01",
    t: "Prepare o certificado digital e-CNPJ",
    d: "O acesso ao Compras.gov.br e ao fluxo de credenciamento exige certificado digital válido (e-CNPJ A1 ou A3) vinculado ao CNPJ da empresa.",
    time: "1 a 3 dias",
  },
  {
    n: "02",
    t: "Acesse o portal Compras.gov.br",
    d: "Entre em compras.gov.br com o certificado, localize o módulo de fornecedores e inicie o credenciamento no SICAF.",
    time: "15 minutos",
  },
  {
    n: "03",
    t: "Credenciamento inicial (Nível I)",
    d: "Preencha dados cadastrais da empresa, sócios, endereço, contatos e atividades econômicas (CNAE). Este é o primeiro nível obrigatório.",
    time: "30 a 60 minutos",
  },
  {
    n: "04",
    t: "Envie documentos por nível de habilitação",
    d: "Anexe contrato social, cartão CNPJ, certidões negativas e demais exigências dos níveis II a VI conforme o objeto que pretende licitar.",
    time: "1 a 5 dias",
  },
  {
    n: "05",
    t: "Valide regularidade fiscal e trabalhista",
    d: "O sistema cruza CND Federal, FGTS, CNDT e certidões estaduais/municipais. Pendências bloqueiam a habilitação.",
    time: "Variável",
  },
  {
    n: "06",
    t: "Ative linhas de fornecimento (CATMAT/CATSER)",
    d: "Cadastre produtos e serviços no catálogo quando necessário ao segmento da sua empresa e aos editais pretendidos.",
    time: "1 a 2 dias",
  },
  {
    n: "07",
    t: "Emita o CRC e confirme status Regular",
    d: "Com todos os níveis exigidos ativos, emita o Certificado de Registro Cadastral (CRC) e verifique situação Regular no painel.",
    time: "Imediato",
  },
  {
    n: "08",
    t: "Monitore vencimentos e renove certidões",
    d: "Certidões vencem (muitas em 90 ou 180 dias). SICAF irregular desclassifica sua empresa na habilitação de qualquer pregão.",
    time: "Contínuo",
  },
];

export const niveisSicaf = [
  { n: "I", t: "Credenciamento", d: "Dados básicos da empresa e porta de entrada no sistema." },
  { n: "II", t: "Habilitação jurídica", d: "Contrato social, atas, procurações e documentos societários." },
  { n: "III", t: "Regularidade fiscal e trabalhista", d: "CND Federal, FGTS, CND estadual/municipal e CNDT." },
  { n: "IV", t: "Qualificação técnica", d: "Atestados de capacidade técnica compatíveis com o objeto." },
  { n: "V", t: "Qualificação econômico-financeira", d: "Balanços, índices e demonstrações financeiras." },
  { n: "VI", t: "Linhas de fornecimento", d: "CATMAT/CATSER — catálogo de bens e serviços." },
];

export const documentosSicaf = [
  { doc: "Cartão CNPJ atualizado", niveis: "I, II", prazo: "Sempre válido" },
  { doc: "Contrato social / Estatuto + alterações", niveis: "II", prazo: "Atualizado" },
  { doc: "RG e CPF dos administradores", niveis: "I, II", prazo: "Válidos" },
  { doc: "Comprovante de endereço da sede", niveis: "I", prazo: "Até 90 dias" },
  { doc: "Certidão Negativa de Débitos (RFB)", niveis: "III", prazo: "90 a 180 dias" },
  { doc: "Certidão de Regularidade FGTS (CRF)", niveis: "III", prazo: "180 dias" },
  { doc: "CNDT — débitos trabalhistas", niveis: "III", prazo: "180 dias" },
  { doc: "CND estadual e municipal", niveis: "III", prazo: "Varia por UF/município" },
  { doc: "Balanço patrimonial (último exercício)", niveis: "V", prazo: "Exercício encerrado" },
  { doc: "Atestados de capacidade técnica", niveis: "IV", prazo: "Conforme edital" },
  { doc: "Certificado digital e-CNPJ", niveis: "Acesso", prazo: "1 a 3 anos (A1/A3)" },
];

export const errosComuns = [
  "Enviar certidão vencida ou com divergência de razão social/CNPJ.",
  "Cadastrar apenas o Nível I e tentar licitar sem níveis III, IV ou V exigidos.",
  "Ignorar pendência fiscal estadual ou municipal.",
  "Não renovar FGTS e CND Federal antes do vencimento.",
  "Usar certificado digital de pessoa física em vez de e-CNPJ.",
  "Desatualizar contrato social após alteração societária sem refletir no SICAF.",
];

export const guiaFaqs = [
  {
    question: "O SICAF é obrigatório para licitar?",
    answer:
      "Para licitações e contratos do Governo Federal, sim. Muitos estados e municípios também exigem SICAF ativo ou consultam a mesma base de regularidade do fornecedor.",
  },
  {
    question: "Quanto custa fazer o cadastro no SICAF?",
    answer:
      "O credenciamento no portal oficial é gratuito. Os custos reais costumam ser o certificado digital, tempo da equipe e eventual regularização de pendências fiscais.",
  },
  {
    question: "Quanto tempo leva o cadastro SICAF?",
    answer:
      "Sem apoio especializado, pode levar de uma a quatro semanas por pendências e retrabalho. Com a CADBRASIL e documentação completa, a habilitação pode ocorrer em até 24 horas.",
  },
  {
    question: "MEI pode se cadastrar no SICAF?",
    answer:
      "Sim. MEI, ME, EPP, LTDA, S/A e EIRELI podem se credenciar, desde que atendam aos requisitos documentais e de regularidade exigidos para cada nível.",
  },
  {
    question: "Qual a diferença entre SICAF e PNCP?",
    answer:
      "O SICAF é o cadastro/habilitação do fornecedor. O PNCP (Portal Nacional de Contratações Públicas) centraliza informações de licitações; são sistemas complementares no ecossistema de compras públicas.",
  },
  {
    question: "O que é o CRC no SICAF?",
    answer:
      "CRC é o Certificado de Registro Cadastral, comprovante de que a empresa está cadastrada e, quando aplicável, em situação regular para fornecer ao governo.",
  },
  {
    question: "Com que frequência preciso atualizar o SICAF?",
    answer:
      "Não há data fixa única: depende do vencimento de cada certidão. CND Federal e FGTS costumam vencer em 180 dias; por isso o monitoramento contínuo é essencial.",
  },
  {
    question: "Posso participar de pregão com SICAF irregular?",
    answer:
      "Não. Mesmo vencendo a disputa, a empresa é desclassificada na habilitação se houver irregularidade cadastral ou documental no momento da análise.",
  },
  {
    question: "Preciso de certificado digital para o SICAF?",
    answer:
      "Sim. O e-CNPJ é praticamente indispensável para acessar o Compras.gov.br e concluir credenciamento e manutenção do cadastro.",
  },
  {
    question: "A CADBRASIL faz o cadastro por mim?",
    answer:
      "Sim. Cuidamos do credenciamento, regularização, atualização de certidões e monitoramento com tecnologia, IA e especialistas — entrega em até 24h quando a documentação está disponível.",
  },
];

export const relatedGuides = [
  { to: "/o-que-e-sicaf", label: "O que é SICAF — guia completo" },
  { to: "/como-funciona", label: "Como funciona o processo CADBRASIL" },
  { to: "/faq/cadastro-sicaf", label: "FAQ Cadastro SICAF" },
  { to: "/beneficios", label: "Benefícios da assessoria CADBRASIL" },
  { to: "/assistente", label: "Assistente CADBRASIL com IA" },
];

export const usefulLinks = [
  { href: "https://www.gov.br/compras", label: "Compras.gov.br (oficial)" },
  { href: "https://www.gov.br/pncp", label: "PNCP — Portal Nacional de Contratações" },
  { href: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm", label: "Lei 14.133/2021" },
];
