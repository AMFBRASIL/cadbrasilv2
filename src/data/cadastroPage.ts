/** Conteúdo da página /cadastro — landing de conversão SICAF */

export const cadastroPageMeta = {
  path: "/cadastro",
  shortTitle: "Cadastro SICAF",
  metaTitle: "Cadastro SICAF 2026 — Faça Seu Cadastro Online em até 24h | CADBRASIL",
  metaDescription:
    "Cadastro SICAF online com a CADBRASIL: credenciamento assistido, documentação validada, CRC regular e habilitação para licitações federais. MEI, ME, EPP e demais portes. Inicie agora.",
  keywords:
    "cadastro sicaf, cadastro sicaf online, fazer cadastro sicaf, cadastrar empresa sicaf, credenciamento sicaf 2026, cadastro fornecedor governo, sicaf cadbrasil, habilitacao sicaf",
  quickAnswer:
    "O cadastro SICAF habilita sua empresa para licitar com o governo federal. Com a CADBRASIL você inicia em minutos em cadastro.cadbrasil.com.br e conclui o credenciamento assistido em até 24 horas, com CRC regular.",
};

export const heroBeneficios = [
  "Credenciamento em até 24 horas",
  "MEI, ME, EPP, LTDA, S/A e EIRELI",
  "Checklist e validação documental",
  "Suporte humano + tecnologia",
];

export const incluiNoCadastro = [
  {
    titulo: "Diagnóstico do CNPJ",
    descricao: "Análise de elegibilidade, porte e níveis de habilitação necessários para seu objetivo.",
  },
  {
    titulo: "Checklist personalizado",
    descricao: "Lista de documentos por nível I a VI, com validade e prioridade de envio.",
  },
  {
    titulo: "Credenciamento no Compras.gov.br",
    descricao: "Condução do processo oficial com certificado e-CNPJ e upload documental validado.",
  },
  {
    titulo: "Regularidade fiscal",
    descricao: "Conferência de CND, FGTS, CNDT e certidões estaduais/municipais.",
  },
  {
    titulo: "Emissão do CRC",
    descricao: "Certificado de Registro Cadastral com status Regular para habilitação em pregões.",
  },
  {
    titulo: "Monitoramento pós-cadastro",
    descricao: "Alertas de vencimento de certidões para manter o SICAF ativo (conforme plano).",
  },
];

export const passosRapidos = [
  { n: "1", titulo: "Clique em Cadastrar", texto: "Acesse cadastro.cadbrasil.com.br e informe os dados da empresa." },
  { n: "2", titulo: "Envie os documentos", texto: "Checklist guiado por nível — nossa equipe valida antes do envio oficial." },
  { n: "3", titulo: "Receba o CRC regular", texto: "Empresa habilitada para participar de licitações federais." },
];

export const cadastroPageFaqs = [
  {
    question: "Como faço o cadastro SICAF pela CADBRASIL?",
    answer:
      "Clique em Cadastrar nesta página, acesse cadastro.cadbrasil.com.br, preencha os dados do CNPJ e envie a documentação pelo checklist. Nossa equipe conduz o credenciamento até o CRC regular.",
  },
  {
    question: "Quanto tempo leva o cadastro SICAF?",
    answer:
      "Com documentação completa, o fluxo assistido pode ser concluído em até 24 horas. Pendências fiscais ou documentais podem estender o prazo.",
  },
  {
    question: "Quem pode fazer cadastro SICAF?",
    answer:
      "Qualquer pessoa jurídica com CNPJ ativo: MEI, ME, EPP, LTDA, S/A e EIRELI, desde que possua e-CNPJ e regularidade fiscal.",
  },
  {
    question: "O cadastro SICAF é gratuito no governo?",
    answer:
      "O credenciamento oficial no portal federal não cobra taxa. A assessoria CADBRASIL agiliza o processo e reduz riscos de indeferimento.",
  },
  {
    question: "Preciso de certificado digital?",
    answer:
      "Sim. O certificado e-CNPJ (A1 ou A3) é obrigatório para acessar o Compras.gov.br e concluir o credenciamento.",
  },
  {
    question: "Depois do cadastro posso licitar imediatamente?",
    answer:
      "Com CRC regular e níveis de habilitação exigidos pelo edital ativos, sua empresa pode participar de pregões e contratos federais.",
  },
];

export const itemListBeneficios = incluiNoCadastro.map((i) => i.titulo);
