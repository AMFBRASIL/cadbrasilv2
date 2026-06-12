export const GUIA_CADASTRO_SICAF_PATH = "/guia/cadastro-sicaf-passo-passo";
/** URL canônica principal do guia (alias comercial) */
export const CADASTRO_SICAF_PASSO_A_PASSO_PATH = "/cadastro-sicaf-passo-a-passo";

export const guiaCadastroSicafMeta = {
  title: "Cadastro SICAF 2026 | Passo a Passo Completo — Guia CADBRASIL",
  description:
    "Tutorial completo para cadastro no SICAF em 2026: passo a passo, documentos por nível, certificado digital, prazos, renovação, erros comuns e como habilitar sua empresa em até 24h com a CADBRASIL.",
  keywords:
    "cadastro sicaf, como cadastrar sicaf, sicaf passo a passo, documentos sicaf, niveis sicaf, habilitacao sicaf, compras.gov.br sicaf, certificado digital sicaf, crc sicaf, regularizar sicaf, atualizar sicaf, sicaf 2026, fornecedor governo, licitacoes publicas sicaf, cadastro fornecedor federal, sicaf mei, sicaf epp, renovacao sicaf, custo sicaf",
};

export const quemPrecisaSicaf = [
  "Empresas (LTDA, SA, EIRELI) que participam ou pretendem participar de licitações federais",
  "MEI quando o edital permitir participação",
  "ME e EPP em programas com tratamento diferenciado (LC 123/2006)",
  "Fornecedores que precisam renovar certidões ou níveis de habilitação",
  "Empresas que passam a disputar contratos públicos pela primeira vez",
];

export const guiaToc = [
  { id: "o-que-e", label: "O que é SICAF" },
  { id: "quem-precisa", label: "Quem precisa" },
  { id: "obrigatoriedade", label: "É obrigatório?" },
  { id: "passo-a-passo", label: "Passo a passo oficial" },
  { id: "niveis", label: "Níveis I a VI" },
  { id: "documentos", label: "Documentos" },
  { id: "certificado-digital", label: "Certificado digital" },
  { id: "custos-prazos", label: "Custos e prazos" },
  { id: "renovacao", label: "Renovação" },
  { id: "glossario", label: "Glossário SICAF" },
  { id: "comparativo", label: "Sozinho vs CADBRASIL" },
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
    question: "O SICAF é obrigatório para licitar no Brasil?",
    answer:
      "Para licitações e contratos do Governo Federal, sim. Muitos estados e municípios também exigem SICAF ativo ou consultam a regularidade do fornecedor no processo de habilitação.",
  },
  {
    question: "Qual a diferença entre cadastro, credenciamento e habilitação no SICAF?",
    answer:
      "Cadastro é o ato de inserir a empresa no sistema. Credenciamento é o Nível I (dados básicos). Habilitação é o conjunto de níveis II a VI exigidos conforme o edital e o objeto da contratação.",
  },
  {
    question: "Quanto custa fazer cadastro no SICAF?",
    answer:
      "O credenciamento oficial no portal do governo é gratuito. Os custos reais costumam ser certificado digital e-CNPJ, emissão/atualização de certidões e eventual assessoria especializada.",
  },
  {
    question: "Quanto tempo leva para concluir o cadastro SICAF?",
    answer:
      "Sem apoio especializado, o prazo costuma variar de 7 a 20 dias úteis. Com documentação organizada e assessoria CADBRASIL, a habilitação pode ser concluída em até 24 horas.",
  },
  {
    question: "MEI, ME e EPP podem se cadastrar no SICAF?",
    answer:
      "Sim. MEI, ME, EPP, LTDA, S/A e EIRELI podem se credenciar, desde que atendam requisitos documentais e de regularidade para os níveis exigidos.",
  },
  {
    question: "Preciso de certificado digital para cadastrar no SICAF?",
    answer:
      "Sim. Para pessoa jurídica, o certificado digital e-CNPJ (A1 ou A3) é praticamente indispensável para acessar o Compras.gov.br.",
  },
  {
    question: "O que é o CRC e quando emitir?",
    answer:
      "CRC é o Certificado de Registro Cadastral. Emita quando o cadastro estiver regular nos níveis exigidos — especialmente antes de disputar pregões que exigem comprovação de habilitação.",
  },
  {
    question: "Posso participar de licitação com SICAF irregular?",
    answer:
      "Não de forma segura. Mesmo vencendo o pregão, a empresa tende a ser desclassificada na fase de habilitação se houver pendência cadastral ou documental.",
  },
  {
    question: "Com que frequência devo atualizar o SICAF?",
    answer:
      "Não existe uma data única de renovação anual. O cadastro depende do vencimento de certidões (muitas a cada 180 dias). Monitoramento contínuo evita bloqueios.",
  },
  {
    question: "Qual a diferença entre SICAF e PNCP?",
    answer:
      "SICAF é o cadastro/habilitação do fornecedor. O PNCP centraliza informações de contratações públicas; são sistemas complementares no ecossistema de compras.",
  },
  {
    question: "Quais os erros mais comuns no cadastro SICAF?",
    answer:
      "Certidão vencida, divergência de razão social, níveis incompletos, certificado digital inválido, CNAE incompatível com o edital e ausência de renovação de certidões.",
  },
  {
    question: "A CADBRASIL faz o cadastro SICAF para minha empresa?",
    answer:
      "Sim. Fazemos credenciamento, regularização, atualização de certidões, emissão de CRC e monitoramento com IA e equipe especializada — com entrega em até 24 horas quando a documentação está completa.",
  },
  {
    question: "Cadastro SICAF passo a passo: por onde começar?",
    answer:
      "Comece validando CNPJ e certificado digital, depois acesse Compras.gov.br, conclua o Nível I e avance nos demais níveis conforme seu edital-alvo.",
  },
];

export const glossarioSicaf = [
  {
    term: "SICAF",
    def: "Sistema de Cadastramento Unificado de Fornecedores — cadastro obrigatório para fornecer ao Governo Federal.",
  },
  {
    term: "CRC",
    def: "Certificado de Registro Cadastral — comprova situação cadastral da empresa no SICAF.",
  },
  {
    term: "Compras.gov.br",
    def: "Portal oficial de compras públicas onde o credenciamento SICAF é realizado.",
  },
  {
    term: "Nível de habilitação",
    def: "Conjunto documental (I a VI) exigido conforme edital e objeto licitado.",
  },
  {
    term: "CATMAT / CATSER",
    def: "Catálogos de materiais e serviços para linhas de fornecimento (Nível VI).",
  },
  {
    term: "CND",
    def: "Certidão Negativa de Débitos — comprova regularidade fiscal perante a Receita Federal.",
  },
];

export const comparativoCadastro = [
  { aspecto: "Prazo médio", sozinho: "7 a 20 dias úteis", cadbrasil: "Até 24 horas*" },
  { aspecto: "Risco de erro", sozinho: "Alto (certidões, níveis)", cadbrasil: "Baixo (revisão especializada)" },
  { aspecto: "Monitoramento", sozinho: "Manual", cadbrasil: "IA + alertas de vencimento" },
  { aspecto: "Suporte", sozinho: "Fóruns e tutoriais", cadbrasil: "Especialistas + WhatsApp" },
];

export const relatedGuides = [
  { to: "/comprasnet", label: "Comprasnet — o que é e benefícios" },
  { to: "/cadastro-sicaf", label: "Cadastro SICAF — página comercial" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF — guia completo" },
  { to: "/como-fazer-cadastro-no-sicaf", label: "Como fazer cadastro no SICAF" },
  { to: "/emitir-crc", label: "Emitir CRC SICAF" },
  { to: "/regularidade-fiscal", label: "Regularidade fiscal SICAF" },
  { to: "/faq/cadastro-sicaf", label: "FAQ Cadastro SICAF" },
  { to: "/assistente", label: "Assistente CADBRASIL com IA" },
];

export const usefulLinks = [
  { href: "https://www.gov.br/compras", label: "Compras.gov.br (oficial)" },
  { href: "https://www.gov.br/pncp", label: "PNCP — Portal Nacional de Contratações" },
  { href: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm", label: "Lei 14.133/2021" },
];
