/** Conteúdo /o-que-e-sicaf-e-como-se-cadastrar — guia pilar SICAF + cadastro */

export const sicafCadastroMeta = {
  path: "/o-que-e-sicaf-e-como-se-cadastrar",
  title: "O que é SICAF e Como se Cadastrar 2026 | Guia Completo CADBRASIL",
  description:
    "Entenda o que é o SICAF, por que é obrigatório, quem pode se cadastrar e o passo a passo completo para credenciar sua empresa no Compras.gov.br — documentos, níveis I a VI, CRC e prazos.",
  keywords:
    "o que é sicaf, como se cadastrar no sicaf, cadastro sicaf passo a passo, sicaf compras gov br, credenciamento sicaf, habilitação fornecedor, crc sicaf, certificado digital sicaf, sicaf 2026, fornecedor governo federal",
  quickAnswer:
    "O SICAF (Sistema de Cadastramento Unificado de Fornecedores) é o cadastro obrigatório para vender ao Governo Federal. Para se cadastrar: certificado e-CNPJ, acesso ao Compras.gov.br, Nível I (credenciamento) e níveis II a VI conforme o edital — com CRC regular antes de licitar.",
};

export const sicafCadastroToc = [
  { id: "o-que-e", label: "O que é SICAF" },
  { id: "obrigatorio", label: "É obrigatório?" },
  { id: "quem-pode", label: "Quem pode cadastrar" },
  { id: "como-cadastrar", label: "Como se cadastrar" },
  { id: "niveis", label: "Níveis I a VI" },
  { id: "documentos", label: "Documentos" },
  { id: "certificado", label: "Certificado digital" },
  { id: "custos", label: "Custos e prazos" },
  { id: "comparativo", label: "Sozinho vs CADBRASIL" },
  { id: "erros", label: "Erros comuns" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "cadastro", label: "Cadastrar agora" },
] as const;

export const resumoInteligente = [
  "SICAF é o cadastro unificado de fornecedores do Governo Federal — obrigatório para licitar no Compras.gov.br.",
  "Credenciamento oficial no portal é gratuito; o investimento está no certificado digital e na regularidade documental.",
  "Níveis I a VI definem a habilitação: jurídica, fiscal, técnica, econômico-financeira e linhas de fornecimento.",
  "Sem CRC regular, a empresa é desclassificada na habilitação — mesmo com proposta vencedora no pregão.",
  "MEI, ME, EPP, LTDA, S/A e EIRELI podem se cadastrar com CNPJ ativo e documentos válidos.",
  "Certificado digital e-CNPJ (A1 ou A3) é requisito para acessar o Compras.gov.br como pessoa jurídica.",
  "Certidões fiscais e trabalhistas vencem — monitoramento contínuo evita bloqueio do cadastro.",
  "Com assessoria CADBRASIL, credenciamento e regularização podem ser concluídos em até 24 horas.",
];

export const oQueESicafParagrafos = [
  {
    titulo: "Definição oficial",
    texto:
      "O SICAF (Sistema de Cadastramento Unificado de Fornecedores) centraliza o cadastro e a habilitação de empresas que desejam contratar com a administração pública federal. Ele substitui credenciamentos fragmentados e permite que órgãos verifiquem a regularidade do fornecedor em tempo real.",
  },
  {
    titulo: "Onde fica",
    texto:
      "O credenciamento é feito no portal Compras.gov.br (antigo Comprasnet). O mercado ainda usa os dois nomes, mas a plataforma oficial atual é o Compras.gov.br.",
  },
  {
    titulo: "Para que serve",
    texto:
      "Validar dados cadastrais, documentos societários, regularidade fiscal e trabalhista, qualificação técnica e capacidade econômico-financeira — tudo vinculado ao CNPJ da empresa licitante.",
  },
];

export const obrigatoriedade = [
  {
    titulo: "Licitações federais",
    descricao: "Obrigatório para participar de pregões, concorrências e dispensas do Executivo Federal.",
  },
  {
    titulo: "Estados e municípios",
    descricao: "Muitos entes consultam o SICAF ou exigem regularidade equivalente na habilitação.",
  },
  {
    titulo: "Habilitação pós-disputa",
    descricao: "Mesmo vencendo o pregão, pendência cadastral leva à desclassificação na fase de habilitação.",
  },
];

export const custosPrazos = [
  { item: "Taxa de credenciamento SICAF (governo)", valor: "Gratuito", prazo: "—" },
  { item: "Certificado digital e-CNPJ A1", valor: "R$ 150 a R$ 350/ano", prazo: "1 a 3 dias úteis" },
  { item: "Certificado digital e-CNPJ A3", valor: "R$ 300 a R$ 600 (token/cartão)", prazo: "3 a 7 dias úteis" },
  { item: "Emissão de certidões (CND, FGTS, CNDT)", valor: "Gratuito (emissão oficial)", prazo: "Imediato a 48h" },
  { item: "Cadastro por conta própria", valor: "Tempo interno da equipe", prazo: "7 a 20 dias úteis" },
  { item: "Com assessoria CADBRASIL", valor: "Conforme plano contratado", prazo: "Até 24 horas*" },
];

export const passosCadastroResumo = [
  { n: "1", t: "Valide CNPJ e certificado e-CNPJ", d: "CNPJ ativo na Receita e certificado digital válido vinculado à empresa." },
  { n: "2", t: "Acesse o Compras.gov.br", d: "Entre com o certificado e localize o módulo de credenciamento de fornecedores." },
  { n: "3", t: "Conclua o Nível I", d: "Preencha dados cadastrais, sócios, endereço e CNAE — credenciamento inicial." },
  { n: "4", t: "Envie documentos dos níveis exigidos", d: "Anexe contrato social, certidões e atestados conforme edital-alvo." },
  { n: "5", t: "Emita o CRC Regular", d: "Com níveis ativos, gere o Certificado de Registro Cadastral e confirme status." },
  { n: "6", t: "Monitore vencimentos", d: "Renove certidões antes do prazo para manter habilitação em licitações." },
];

export const sicafCadastroFaqs = [
  {
    question: "O que é SICAF em termos simples?",
    answer:
      "É o \"RG da sua empresa\" perante o Governo Federal para licitações. Sem SICAF regular, você não habilita para vender ao governo na maioria dos certames federais.",
  },
  {
    question: "Como me cadastrar no SICAF pela primeira vez?",
    answer:
      "Obtenha certificado e-CNPJ, acesse Compras.gov.br, complete o Nível I e avance nos níveis II a VI exigidos pelo tipo de licitação que pretende disputar. Emita o CRC quando estiver regular.",
  },
  {
    question: "Quanto tempo demora o cadastro?",
    answer:
      "Sozinho, de 7 a 20 dias úteis conforme pendências. Com documentação organizada e CADBRASIL, até 24 horas.",
  },
  {
    question: "Preciso pagar ao governo para cadastrar?",
    answer:
      "Não. O credenciamento oficial é gratuito. Custos reais: certificado digital, certidões (emissão gratuita) e eventual assessoria.",
  },
  {
    question: "MEI pode se cadastrar no SICAF?",
    answer:
      "Sim, quando o edital permitir participação de MEI e a empresa atender requisitos documentais e de regularidade.",
  },
  {
    question: "Qual a diferença entre SICAF e CRC?",
    answer:
      "SICAF é o sistema/cadastro. CRC é o certificado que comprova que sua empresa está regular no SICAF nos níveis exigidos.",
  },
  {
    question: "Posso licitar com SICAF irregular?",
    answer:
      "Não de forma segura. A habilitação verifica pendências — irregularidade leva à desclassificação mesmo após vencer o pregão.",
  },
  {
    question: "A CADBRASIL faz o cadastro por mim?",
    answer:
      "Sim. Credenciamento, regularização, renovação de certidões, emissão de CRC e monitoramento contínuo com especialistas e IA.",
  },
];

export const relatedGuides = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia passo a passo detalhado" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF — visão geral" },
  { to: "/cadastrar-no-sicaf", label: "Cadastrar no SICAF com CADBRASIL" },
  { to: "/quem-pode-se-cadastrar-no-sicaf", label: "Quem pode se cadastrar" },
  { to: "/documentacao-sicaf", label: "Checklist de documentos" },
  { to: "/emitir-crc", label: "Emitir CRC" },
  { to: "/comprasnet", label: "Compras.gov.br / Comprasnet" },
  { to: "/planos", label: "Planos CADBRASIL" },
  { to: "/faq/cadastro-sicaf", label: "FAQ cadastro SICAF" },
];
