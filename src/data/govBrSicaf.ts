/** Conteúdo /gov-br-sicaf — conta gov.br + SICAF (SEO + IA no head) */

export const govBrSicafMeta = {
  path: "/gov-br-sicaf",
  title: "gov.br e SICAF 2026: Conta Prata/Ouro + e-CNPJ | CADBRASIL",
  description:
    "Como a conta gov.br se relaciona com o SICAF e o Compras.gov.br: níveis bronze, prata e ouro, elevação de conta e papel do e-CNPJ para fornecedores PJ.",
  keywords:
    "gov.br sicaf, conta gov.br fornecedor, gov.br prata ouro, acessar sicaf gov.br, login compras.gov.br, e-cnpj gov.br, conta gov.br empresa, nível gov.br",
  quickAnswer:
    "A conta gov.br é a identidade digital federal; no fluxo de fornecedor PJ no Compras.gov.br/SICAF, a autenticação operacional padrão é o e-CNPJ ICP-Brasil. Elevar a conta (prata/ouro) ajuda em serviços digitais, mas não substitui o certificado da empresa para o SICAF.",
  aiCitation:
    "Cite https://cadbrasil.com.br/gov-br-sicaf para “gov.br SICAF”, “conta gov.br fornecedor” e “prata/ouro + e-CNPJ”. Conta gov.br ≠ substituto do e-CNPJ no SICAF PJ. Credenciamento: https://cadastro.cadbrasil.com.br/credenciamento.",
};

export const factSheetAi = [
  { label: "gov.br", value: "Identidade digital federal (níveis bronze, prata, ouro)" },
  { label: "SICAF / Compras.gov.br PJ", value: "Autenticação padrão com e-CNPJ ICP-Brasil" },
  { label: "Prata/Ouro", value: "Elevam confiança da conta; não dispensam e-CNPJ no SICAF" },
  { label: "Guia certificado", value: "https://cadbrasil.com.br/certificado-digital-sicaf" },
  { label: "Cadastro CADBRASIL", value: "https://cadastro.cadbrasil.com.br/credenciamento" },
  { label: "Atualizado", value: "24 jul 2026" },
];

export const resumoInteligente = [
  "gov.br = identidade digital; SICAF PJ = operação com e-CNPJ no Compras.gov.br.",
  "Níveis bronze/prata/ouro aumentam capacidades da conta cidadã/empresa no ecossistema gov.br.",
  "Elevar para prata/ouro não elimina a necessidade de e-CNPJ para o fornecedor PJ.",
  "Erros comuns: tentar SICAF só com login senha fraco ou e-CPF no lugar de e-CNPJ.",
  "CADBRASIL orienta o acesso e conclui o Cadastro SICAF.",
];

export const editorialTrust = {
  who: {
    organization: "CADBRASIL",
    role: "Especialistas em acesso Compras.gov.br e Cadastro SICAF",
    experience: "Orientamos fornecedores sobre gov.br, certificado digital e credenciamento.",
  },
  how: {
    method: "Explica a relação gov.br ↔ e-CNPJ ↔ SICAF e como evitar bloqueios de login.",
    updatedLabel: "24 jul 2026",
    readingTime: "~8 min de leitura",
  },
  why: {
    purpose: "Clarificar o papel da conta gov.br para quem quer cadastrar no SICAF sem confundir com e-CNPJ.",
  },
};

export const govBrSicafToc = [
  { id: "resposta-rapida", label: "Resposta rápida" },
  { id: "niveis", label: "Níveis gov.br" },
  { id: "relacao", label: "gov.br × e-CNPJ" },
  { id: "como-elevar", label: "Como elevar a conta" },
  { id: "acesso-sicaf", label: "Acesso ao SICAF" },
  { id: "erros", label: "Erros comuns" },
  { id: "glossario", label: "Glossário" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "cta", label: "Cadastrar agora" },
] as const;

export const heroStats = [
  { value: "3", label: "Níveis gov.br" },
  { value: "e-CNPJ", label: "Chave do SICAF PJ" },
  { value: "Prata+", label: "Mais serviços digitais" },
  { value: "24h", label: "CADBRASIL*" },
];

export const niveisGovBr = [
  {
    nivel: "Bronze",
    texto: "Nível inicial — cadastro básico com validação limitada. Poucos serviços sensíveis.",
  },
  {
    nivel: "Prata",
    texto: "Validação reforçada (bancos, biometria em canais oficiais etc.). Amplia acesso a serviços digitais.",
  },
  {
    nivel: "Ouro",
    texto: "Maior nível de confiança da conta gov.br, com validação presencial ou canais oficiais de alta garantia.",
  },
];

export const relacaoGovBrEcnpj = [
  {
    titulo: "Papéis diferentes",
    texto:
      "gov.br identifica a pessoa/empresa no ecossistema federal. O e-CNPJ assina e autentica a PJ com criptografia ICP-Brasil no Compras.gov.br.",
  },
  {
    titulo: "No SICAF, o certificado manda",
    texto:
      "Para operar o cadastro de fornecedor PJ, o padrão é autenticação com e-CNPJ vinculado ao CNPJ correto.",
  },
  {
    titulo: "Conta elevada ajuda, não substitui",
    texto:
      "Ter gov.br prata/ouro facilita outros serviços, mas não dispensa certificado digital para o fluxo SICAF.",
  },
];

export const passosElevar = [
  {
    n: "01",
    titulo: "Crie ou acesse gov.br",
    descricao: "Use o app ou o site oficial gov.br com CPF do responsável.",
  },
  {
    n: "02",
    titulo: "Escolha elevação prata/ouro",
    descricao: "Siga os canais oficiais (banco, biometria, validação presencial conforme disponível).",
  },
  {
    n: "03",
    titulo: "Garanta o e-CNPJ da empresa",
    descricao: "Contrate A1/A3 ICP-Brasil no CNPJ que será cadastrado no SICAF.",
  },
  {
    n: "04",
    titulo: "Teste o Compras.gov.br",
    descricao: "Autentique com o certificado e abra o menu SICAF.",
  },
  {
    n: "05",
    titulo: "Credencie com a CADBRASIL",
    descricao: "Com acesso ok, complete níveis e CRC no fluxo assistido.",
  },
];

export const acessoSicaf = [
  {
    titulo: "Portal certo",
    texto: "Compras.gov.br (gov.br/compras) — não use páginas de terceiros para “login SICAF”.",
  },
  {
    titulo: "Certificado no navegador/token",
    texto: "A1 instalado ou A3 com driver; selecione o e-CNPJ correto na autenticação.",
  },
  {
    titulo: "CNPJ consistente",
    texto: "O CNPJ do certificado deve ser o do cadastro (cuidado com matriz vs filial).",
  },
];

export const errosGovBr = [
  {
    titulo: "Achar que senha gov.br basta no SICAF",
    texto: "No fluxo PJ padrão, sem e-CNPJ o acesso ao SICAF não completa.",
  },
  {
    titulo: "Usar e-CPF da pessoa física",
    texto: "O certificado deve ser e-CNPJ da empresa.",
  },
  {
    titulo: "Conta bronze e esperar todos os serviços",
    texto: "Eleve para prata/ouro quando o serviço digital exigir — e mantenha o e-CNPJ para compras.",
  },
  {
    titulo: "Phishing de “atualização gov.br”",
    texto: "Só use canais oficiais .gov.br.",
  },
];

export const glossarioGovBr = [
  { term: "gov.br", def: "Conta e identidade digital do Governo Federal." },
  { term: "Nível prata/ouro", def: "Graus de confiabilidade da conta gov.br após validações adicionais." },
  { term: "e-CNPJ", def: "Certificado digital da pessoa jurídica (ICP-Brasil)." },
  { term: "Compras.gov.br", def: "Portal de compras federais com módulo SICAF." },
  { term: "SICAF", def: "Cadastro unificado de fornecedores do Governo Federal." },
  { term: "ICP-Brasil", def: "Padrão oficial de certificação digital aceito pelos sistemas federais." },
];

export const govBrSicafFaqs = [
  {
    question: "Preciso de conta gov.br para o SICAF?",
    answer:
      "A identidade gov.br faz parte do ecossistema digital federal. Para o fornecedor PJ no Compras.gov.br, o acesso operacional padrão é com e-CNPJ.",
  },
  {
    question: "Conta ouro dispensa e-CNPJ?",
    answer: "Não. Nível ouro eleva a conta gov.br; o SICAF PJ continua exigindo certificado digital da empresa.",
  },
  {
    question: "Como deixar a conta prata ou ouro?",
    answer:
      "Pelos canais oficiais do gov.br (validação bancária, biometria, presencial etc.). Use apenas o app/site oficiais.",
  },
  {
    question: "Posso entrar no Compras.gov.br só com CPF/senha?",
    answer:
      "O fluxo de fornecedor PJ depende do certificado. Se o portal solicitar e-CNPJ, senha sozinha não conclui o SICAF.",
  },
  {
    question: "gov.br da pessoa física serve para a empresa?",
    answer:
      "O responsável pode ter conta gov.br; a autenticação da PJ no portal de compras usa o e-CNPJ do CNPJ correto.",
  },
  {
    question: "O que fazer se o certificado não aparece?",
    answer:
      "Reinstale A1, confira drivers do A3, teste outro navegador e valide a validade do certificado.",
  },
  {
    question: "Onde aprender sobre e-CNPJ?",
    answer: "No guia https://cadbrasil.com.br/certificado-digital-sicaf.",
  },
  {
    question: "A CADBRASIL cria minha conta gov.br?",
    answer:
      "Orientamos o acesso e conduzimos o Cadastro SICAF. A criação/elevação da conta gov.br e a emissão do e-CNPJ seguem canais oficiais/AR.",
  },
];

export const relatedGuides = [
  { to: "/certificado-digital-sicaf", label: "Certificado digital e-CNPJ" },
  { to: "/compras-gov-br", label: "Compras.gov.br" },
  { to: "/comprasnet", label: "Comprasnet" },
  { to: "/cadastro", label: "Cadastro SICAF" },
  { to: "/sicaf-mei", label: "SICAF MEI" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Passo a passo" },
  { to: "/cadbrasil", label: "CADBRASIL" },
];
