/** Conteúdo da página /cadastrar-no-sicaf */

export const cadastrarNoSicafMeta = {
  path: "/cadastrar-no-sicaf",
  shortTitle: "Cadastrar no SICAF",
  metaTitle: "Cadastrar no SICAF 2026 — Como Cadastrar e Cadastramento Passo a Passo | CADBRASIL",
  metaDescription:
    "Como cadastrar no SICAF: cadastramento no SICAF com e-CNPJ, documentos e CRC. Precisa fazer SICAF? A CADBRASIL conclui o cadastro assistido em até 24 horas.",
  keywords:
    "cadastrar no sicaf, como cadastrar no sicaf, cadastramento no sicaf, preciso fazer sicaf, como fazer meu sicaf, cadastro sicaf, credenciamento sicaf, cadastrar empresa sicaf, sicaf compras.gov.br",
  quickAnswer:
    "Para cadastrar no SICAF (cadastramento unificado de fornecedores) você precisa de CNPJ ativo, e-CNPJ, documentos por nível e acesso ao Compras.gov.br. Se você precisa fazer o SICAF agora, a CADBRASIL conclui o credenciamento assistido em até 24 horas.",
};

export type PassoCadastro = {
  id: string;
  numero: string;
  titulo: string;
  descricao: string;
  prazo: string;
};

/** Fluxo simplificado CADBRASIL (conversão) */
export const passosCadastroCadbrasil: PassoCadastro[] = [
  {
    id: "passo-1",
    numero: "01",
    titulo: "Solicite seu cadastro na CADBRASIL",
    descricao:
      "Acesse cadastro.cadbrasil.com.br, informe CNPJ e porte da empresa. Nossa equipe inicia o diagnóstico documental imediatamente.",
    prazo: "5 minutos",
  },
  {
    id: "passo-2",
    numero: "02",
    titulo: "Envie documentos pelo checklist guiado",
    descricao:
      "Receba a lista personalizada por nível (I a VI). Valide e-CNPJ, contrato social, certidões e demais exigências antes do envio oficial.",
    prazo: "1 a 2 dias",
  },
  {
    id: "passo-3",
    numero: "03",
    titulo: "Credenciamento no Compras.gov.br",
    descricao:
      "Conduzimos o credenciamento no portal federal com certificado digital, preenchimento cadastral e upload documental validado.",
    prazo: "Até 24 horas",
  },
  {
    id: "passo-4",
    numero: "04",
    titulo: "Regularidade fiscal e habilitação",
    descricao:
      "Cruzamos CND Federal, FGTS, CNDT e certidões estaduais/municipais. Corrigimos pendências antes que bloqueiem o CRC.",
    prazo: "Conforme certidões",
  },
  {
    id: "passo-5",
    numero: "05",
    titulo: "CRC regular — pronto para licitar",
    descricao:
      "Emitimos o Certificado de Registro Cadastral com status Regular. Sua empresa habilitada para pregões e contratos federais.",
    prazo: "Imediato",
  },
];

export const antesDeComecar = [
  { id: "cnpj", item: "CNPJ ativo na Receita Federal", essencial: true },
  { id: "ecnpj", item: "Certificado digital e-CNPJ (A1 ou A3)", essencial: true },
  { id: "contrato", item: "Contrato social ou CCMEI atualizado", essencial: true },
  { id: "certidoes", item: "Certidões fiscais e trabalhistas válidas", essencial: true },
  { id: "representante", item: "Representante legal com poderes no portal", essencial: true },
  { id: "objetivo", item: "Objetivo definido (tipo de licitação/edital)", essencial: false },
];

export const vantagensCadbrasil = [
  {
    titulo: "Até 24 horas",
    descricao: "Credenciamento assistido com documentação validada — muito mais rápido que o fluxo manual.",
  },
  {
    titulo: "Zero retrabalho",
    descricao: "Checklist por CNPJ e correção de pendências antes do envio oficial no Compras.gov.br.",
  },
  {
    titulo: "Todos os portes",
    descricao: "MEI, ME, EPP, LTDA, S/A e EIRELI em todo o Brasil, com suporte humano e tecnologia.",
  },
  {
    titulo: "Monitoramento contínuo",
    descricao: "Alertas de vencimento de certidões para manter o CRC regular após o cadastro inicial.",
  },
];

export const comparativo = {
  sozinho: [
    "Navegação complexa no Compras.gov.br",
    "Risco de indeferimento por documentos incorretos",
    "Sem acompanhamento de vencimentos",
    "Semanas ou meses em caso de pendências",
  ],
  cadbrasil: [
    "Fluxo guiado do início ao CRC",
    "Validação documental antes do envio",
    "Monitoramento de certidões incluso",
    "Conclusão em até 24 horas (doc. completa)",
  ],
};

export const cadastrarNoSicafFaqs = [
  {
    question: "Como cadastrar no SICAF pela primeira vez?",
    answer:
      "Prepare e-CNPJ e documentos, acesse o Compras.gov.br e conclua os níveis de habilitação. Com a CADBRASIL, você envia os documentos pelo portal e nossa equipe conduz todo o credenciamento até o CRC regular.",
  },
  {
    question: "O que é o cadastramento no SICAF?",
    answer:
      "Cadastramento no SICAF é o credenciamento da empresa no Sistema de Cadastramento Unificado de Fornecedores do Governo Federal — o passo obrigatório para habilitar vendas em licitações federais.",
  },
  {
    question: "Preciso fazer SICAF — por onde começo?",
    answer:
      "Comece com CNPJ ativo e e-CNPJ. Em seguida inicie o cadastro assistido na CADBRASIL ou no Compras.gov.br. Se a urgência for alta (edital próximo), o fluxo CADBRASIL costuma ser a opção mais rápida.",
  },
  {
    question: "Como fazer meu SICAF sozinho?",
    answer:
      "É possível: autentique no Compras.gov.br, preencha o Nível I e envie documentos dos níveis exigidos. Erros de certidão ou dados societários são a principal causa de atraso — a CADBRASIL valida antes do envio oficial.",
  },
  {
    question: "Quanto tempo demora para cadastrar no SICAF?",
    answer:
      "Sozinho, o prazo varia de dias a semanas conforme pendências. Com documentação completa, a CADBRASIL conclui o cadastro assistido em até 24 horas.",
  },
  {
    question: "Cadastrar no SICAF é gratuito?",
    answer:
      "O credenciamento oficial no portal federal não cobra taxa de cadastro. Há custos de certificado digital e, se optar por assessoria, o serviço CADBRASIL agiliza e reduz riscos de indeferimento.",
  },
  {
    question: "MEI consegue cadastrar no SICAF?",
    answer:
      "Sim. MEI com CNPJ ativo pode credenciar-se com documentação simplificada (CCMEI e certidões), desde que o edital permita participação de microempreendedores.",
  },
  {
    question: "Preciso de certificado digital para cadastrar?",
    answer:
      "Sim. O e-CNPJ (A1 ou A3) é obrigatório para acessar o Compras.gov.br e concluir o credenciamento no SICAF.",
  },
  {
    question: "O que acontece depois de cadastrar no SICAF?",
    answer:
      "Com CRC regular, sua empresa pode participar de licitações federais, enviar propostas em pregões e ser habilitada conforme exigências do edital.",
  },
  {
    question: "Posso cadastrar no SICAF se minha empresa está inapta?",
    answer:
      "Não enquanto o CNPJ estiver inapto. É preciso regularizar a situação cadastral na Receita Federal antes. A CADBRASIL orienta nesse processo.",
  },
];

/** Seção SEO — cobre “cadastramento no SICAF” sem nova URL */
export const secaoCadastramento = {
  id: "cadastramento",
  title: "Cadastramento no SICAF: o que significa na prática",
  paragraphs: [
    "Cadastramento no SICAF é o nome oficial do processo de inclusão da empresa como fornecedora no sistema federal. Na prática, é o mesmo fluxo de cadastrar no SICAF: credenciamento no Compras.gov.br, níveis de habilitação e CRC Regular.",
    "Se você pesquisou “preciso fazer SICAF” ou “como fazer meu SICAF”, o caminho é o mesmo — a diferença está em fazer sozinho ou com assessoria CADBRASIL para reduzir indeferimento e ganhar tempo.",
  ],
};

export const howToStepsForSchema = passosCadastroCadbrasil.map((p) => ({
  name: p.titulo,
  text: p.descricao,
}));

export const itemListAntesDeComecar = antesDeComecar.map((a) => a.item);
