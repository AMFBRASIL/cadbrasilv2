/** Conteúdo da página /documentacao-sicaf */

export type DocumentoSicaf = {
  id: string;
  nome: string;
  detalhe?: string;
  validade?: string;
  obrigatorio?: boolean;
};

export type NivelDocumentacao = {
  nivel: string;
  titulo: string;
  descricao: string;
  documentos: DocumentoSicaf[];
};

export const documentacaoSicafMeta = {
  path: "/documentacao-sicaf",
  shortTitle: "Documentação SICAF",
  metaTitle: "Documentação SICAF 2026 — Checklist Completo de Documentos | CADBRASIL",
  metaDescription:
    "Checklist profissional de documentação SICAF: certificado e-CNPJ, certidões, contrato social e documentos por nível I a VI. Valide tudo e inicie seu cadastro com a CADBRASIL.",
  keywords:
    "documentacao sicaf, documentos sicaf, checklist sicaf, certidoes sicaf, cadastro sicaf documentos, habilitacao sicaf, niveis sicaf documentos",
};

export const niveisDocumentacao: NivelDocumentacao[] = [
  {
    nivel: "Acesso",
    titulo: "Pré-requisito de acesso",
    descricao: "Sem estes itens não é possível iniciar o credenciamento no portal federal.",
    documentos: [
      {
        id: "ecnpj",
        nome: "Certificado digital e-CNPJ (A1 ou A3)",
        detalhe: "Vinculado ao CNPJ da empresa",
        validade: "1 a 3 anos",
        obrigatorio: true,
      },
      {
        id: "cnpj-ativo",
        nome: "CNPJ ativo e regular na Receita Federal",
        validade: "Situação cadastral ativa",
        obrigatorio: true,
      },
    ],
  },
  {
    nivel: "I",
    titulo: "Nível I — Credenciamento",
    descricao: "Dados cadastrais básicos da empresa. Porta de entrada obrigatória no SICAF.",
    documentos: [
      { id: "cartao-cnpj", nome: "Cartão CNPJ", validade: "Consulta atualizada", obrigatorio: true },
      {
        id: "endereco",
        nome: "Comprovante de endereço da sede",
        validade: "Até 90 dias",
        obrigatorio: true,
      },
      { id: "rg-admin", nome: "RG e CPF do representante legal", validade: "Documentos válidos", obrigatorio: true },
      { id: "email-tel", nome: "E-mail e telefone institucionais da empresa", obrigatorio: true },
    ],
  },
  {
    nivel: "II",
    titulo: "Nível II — Habilitação jurídica",
    descricao: "Comprova existência legal da empresa e poderes de quem assina pelo CNPJ.",
    documentos: [
      {
        id: "contrato-social",
        nome: "Contrato social ou estatuto + alterações consolidadas",
        detalhe: "Última alteração registrada",
        obrigatorio: true,
      },
      { id: "ata-eleicao", nome: "Ata de eleição/nomeação de administradores (S/A)", detalhe: "Quando aplicável" },
      {
        id: "procuracao",
        nome: "Procuração com poderes específicos",
        detalhe: "Se o representante não for sócio",
      },
      { id: "declaracoes-juridicas", nome: "Declarações exigidas no credenciamento (integridade, impedimentos)" },
    ],
  },
  {
    nivel: "III",
    titulo: "Nível III — Regularidade fiscal e trabalhista",
    descricao: "Principal causa de irregularidade em licitações. Monitore vencimentos com antecedência.",
    documentos: [
      {
        id: "cnd-federal",
        nome: "Certidão Negativa de Débitos — RFB/PGFN (CND Federal)",
        validade: "90 a 180 dias",
        obrigatorio: true,
      },
      {
        id: "fgts",
        nome: "Certificado de Regularidade do FGTS (CRF)",
        validade: "180 dias",
        obrigatorio: true,
      },
      {
        id: "cndt",
        nome: "Certidão Negativa de Débitos Trabalhistas (CNDT)",
        validade: "180 dias",
        obrigatorio: true,
      },
      { id: "cnd-estadual", nome: "CND estadual", validade: "Varia por UF" },
      { id: "cnd-municipal", nome: "CND municipal", validade: "Varia por município" },
    ],
  },
  {
    nivel: "IV",
    titulo: "Nível IV — Qualificação técnica",
    descricao: "Exigido quando o edital ou o objeto exige comprovação de capacidade técnica.",
    documentos: [
      {
        id: "atestados",
        nome: "Atestados de capacidade técnica",
        detalhe: "Compatíveis com o objeto licitado",
      },
      { id: "registros", nome: "Registros profissionais (CREA, CRM, etc.)", detalhe: "Conforme atividade" },
      { id: "cert-iso", nome: "Certificações ISO ou normas técnicas", detalhe: "Quando exigido no edital" },
    ],
  },
  {
    nivel: "V",
    titulo: "Nível V — Qualificação econômico-financeira",
    descricao: "Demonstra capacidade financeira para executar contratos de maior valor.",
    documentos: [
      { id: "balanco", nome: "Balanço patrimonial do último exercício", obrigatorio: true },
      { id: "dre", nome: "Demonstração do resultado do exercício (DRE)" },
      { id: "indices", nome: "Índices de liquidez e solvência", detalhe: "Quando exigido no edital" },
    ],
  },
  {
    nivel: "VI",
    titulo: "Nível VI — Linhas de fornecimento",
    descricao: "Cadastro em catálogos de materiais e serviços para licitar bens e serviços específicos.",
    documentos: [
      { id: "catmat", nome: "Cadastro CATMAT (materiais)", detalhe: "Compras públicas federais" },
      { id: "catser", nome: "Cadastro CATSER (serviços)", detalhe: "Compras públicas federais" },
    ],
  },
];

export const documentacaoSicafFaqs = [
  {
    question: "Quais documentos são obrigatórios para todo fornecedor no SICAF?",
    answer:
      "No mínimo: certificado e-CNPJ, CNPJ ativo, dados do Nível I, habilitação jurídica (Nível II) e regularidade fiscal/trabalhista (Nível III) com certidões válidas.",
  },
  {
    question: "MEI precisa de todos os documentos listados?",
    answer:
      "MEI utiliza documentação simplificada (CCMEI, certidões), mas ainda precisa de e-CNPJ e certidões fiscais/trabalhistas válidas para habilitação em licitações.",
  },
  {
    question: "Com que frequência devo renovar as certidões?",
    answer:
      "A maioria das certidões fiscais e trabalhistas vence em cerca de 180 dias. Recomenda-se monitoramento contínuo e renovação com 30 a 45 dias de antecedência.",
  },
  {
    question: "A CADBRASIL envia os documentos no SICAF por mim?",
    answer:
      "Sim. Organizamos, validamos e conduzimos o credenciamento e a manutenção documental conforme o plano contratado, com acompanhamento até o CRC regular.",
  },
  {
    question: "Posso licitar só com o Nível I?",
    answer:
      "Raramente. A maioria dos editais exige pelo menos o Nível III (regularidade fiscal). Objetos complexos exigem níveis IV, V e VI.",
  },
];

export const allDocumentIds = niveisDocumentacao.flatMap((n) => n.documentos.map((d) => d.id));

export const itemListForSchema = niveisDocumentacao.flatMap((n) =>
  n.documentos.map((d) => `${d.nome}${d.validade ? ` (${d.validade})` : ""}`),
);
