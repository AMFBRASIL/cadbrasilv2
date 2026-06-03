/** Conteúdo da página /quem-pode-se-cadastrar-no-sicaf */

export const quemPodeMeta = {
  path: "/quem-pode-se-cadastrar-no-sicaf",
  shortTitle: "Quem pode se cadastrar no SICAF",
  metaTitle: "Quem Pode Se Cadastrar no SICAF 2026 — MEI, ME, EPP e Demais Portes | CADBRASIL",
  metaDescription:
    "Descubra quem pode se cadastrar no SICAF: MEI, ME, EPP, LTDA, S/A e EIRELI. Requisitos, documentação por porte, quem não pode e como iniciar o credenciamento com a CADBRASIL.",
  keywords:
    "quem pode se cadastrar no sicaf, sicaf mei, sicaf epp, sicaf microempresa, cadastro sicaf quem pode, fornecedor governo requisitos, sicaf ltda, sicaf sa, elegibilidade sicaf, credenciamento sicaf porte",
  quickAnswer:
    "Podem se cadastrar no SICAF todas as pessoas jurídicas com CNPJ ativo e regular no Brasil — MEI, ME, EPP, LTDA, S/A e EIRELI — desde que possuam certificado e-CNPJ, regularidade fiscal e documentação compatível com os níveis de habilitação exigidos.",
};

export type PerfilEmpresa = {
  id: string;
  sigla: string;
  nome: string;
  podeCadastrar: boolean;
  resumo: string;
  documentacao: string;
  vantagens: string[];
  atencao?: string;
};

export const perfisEmpresa: PerfilEmpresa[] = [
  {
    id: "mei",
    sigla: "MEI",
    nome: "Microempreendedor Individual",
    podeCadastrar: true,
    resumo:
      "MEI com CNPJ ativo pode credenciar-se no SICAF quando o edital e o objeto licitado permitirem participação de microempreendedores.",
    documentacao: "CCMEI, e-CNPJ, certidões fiscais e trabalhistas (estrutura simplificada).",
    vantagens: [
      "Documentação reduzida em diversos credenciamentos",
      "Acesso a licitações compatíveis com o porte MEI",
      "Tratamento diferenciado quando previsto no edital (LC 123/2006)",
    ],
    atencao: "Alguns editais restringem participação de MEI por valor ou objeto.",
  },
  {
    id: "me",
    sigla: "ME",
    nome: "Microempresa",
    podeCadastrar: true,
    resumo:
      "Microempresas enquadradas na LC 123/2006 podem se cadastrar e usufruir de benefícios como cotas exclusivas e empate ficto em pregões.",
    documentacao: "Contrato social, certidões completas (Níveis I a III), e-CNPJ.",
    vantagens: [
      "Cotas reservadas a ME/EPP em licitações específicas",
      "Empate ficto com empresas de maior porte",
      "Documentação proporcional ao porte",
    ],
  },
  {
    id: "epp",
    sigla: "EPP",
    nome: "Empresa de Pequeno Porte",
    podeCadastrar: true,
    resumo:
      "EPPs participam plenamente do ecossistema de compras públicas federais com cadastro SICAF regular e níveis de habilitação adequados ao edital.",
    documentacao: "Documentação jurídica e fiscal completa; balanços podem ser exigidos conforme edital.",
    vantagens: [
      "Tratamento favorecido na LC 123/2006",
      "Habilitação para objetos de maior valor que MEI",
      "Acesso a pregões federais e contratos de médio porte",
    ],
  },
  {
    id: "ltda",
    sigla: "LTDA",
    nome: "Sociedade Limitada",
    podeCadastrar: true,
    resumo:
      "LTDAs de qualquer porte — micro, pequena, média ou grande — podem credenciar-se desde que o CNPJ esteja ativo e a documentação esteja em dia.",
    documentacao: "Contrato social consolidado, certidões, representante legal com e-CNPJ.",
    vantagens: [
      "Estrutura societária mais comum entre fornecedores",
      "Sem limite de faturamento para credenciamento",
      "Habilitação completa nos níveis I a VI conforme necessidade",
    ],
  },
  {
    id: "sa",
    sigla: "S/A",
    nome: "Sociedade Anônima",
    podeCadastrar: true,
    resumo:
      "Sociedades anônimas, inclusive capital aberto, podem se cadastrar no SICAF para contratos federais de qualquer valor.",
    documentacao: "Estatuto social, atas de eleição de administradores, certidões e balanços auditados quando exigidos.",
    vantagens: [
      "Capacidade para grandes contratos públicos",
      "Comprovação econômico-financeira robusta (Nível V)",
      "Cadastro em múltiplas linhas de fornecimento (CATMAT/CATSER)",
    ],
  },
  {
    id: "eireli",
    sigla: "EIRELI",
    nome: "Empresa Individual de Responsabilidade Limitada",
    podeCadastrar: true,
    resumo:
      "EIRELIs com CNPJ regular podem credenciar-se normalmente, seguindo os mesmos níveis de habilitação aplicáveis a LTDAs.",
    documentacao: "Contrato social unipessoal, certidões fiscais/trabalhistas, e-CNPJ.",
    vantagens: [
      "Processo idêntico ao de LTDA unipessoal",
      "Ideal para empresários individuais com CNPJ próprio",
      "Credenciamento federal sem restrição de porte",
    ],
  },
];

export const requisitosMinimos = [
  {
    id: "cnpj",
    titulo: "CNPJ ativo e regular",
    descricao: "Situação cadastral ativa na Receita Federal, sem pendências que impeçam operação.",
  },
  {
    id: "ecnpj",
    titulo: "Certificado digital e-CNPJ",
    descricao: "A1 ou A3 válido, vinculado ao CNPJ da empresa, para acesso ao Compras.gov.br.",
  },
  {
    id: "representante",
    titulo: "Representante legal identificado",
    descricao: "Sócio, administrador ou procurador com poderes para assinar pelo CNPJ no portal.",
  },
  {
    id: "fiscal",
    titulo: "Regularidade fiscal e trabalhista",
    descricao: "CND Federal, FGTS e CNDT válidas — base do Nível III de habilitação.",
  },
  {
    id: "juridica",
    titulo: "Documentação jurídica consistente",
    descricao: "Contrato social, estatuto ou CCMEI alinhado ao cadastro na Receita.",
  },
];

export const quemNaoPode = [
  {
    titulo: "CNPJ baixado, suspenso ou inapto",
    descricao: "Empresas com situação cadastral irregular na Receita Federal não concluem o credenciamento.",
  },
  {
    titulo: "Pessoa física sem CNPJ",
    descricao: "O SICAF credencia exclusivamente pessoas jurídicas. PF precisa constituir empresa antes.",
  },
  {
    titulo: "Empresa com impedimento legal",
    descricao: "Sócios ou administradores impedidos de contratar com a Administração Pública bloqueiam habilitação.",
  },
  {
    titulo: "Fornecedor com débitos não regularizados",
    descricao: "Pendências fiscais, trabalhistas ou previdenciárias sem solução impedem Nível III e CRC regular.",
  },
];

export const passosElegibilidade = [
  {
    n: "1",
    titulo: "Confirme seu porte e natureza jurídica",
    texto: "MEI, ME, EPP, LTDA, S/A ou EIRELI — todos podem credenciar-se se o CNPJ estiver ativo.",
  },
  {
    n: "2",
    titulo: "Verifique regularidade cadastral e fiscal",
    texto: "Consulte situação do CNPJ e disponibilidade de certidões antes de iniciar o processo.",
  },
  {
    n: "3",
    titulo: "Inicie o credenciamento com apoio especializado",
    texto: "A CADBRASIL valida elegibilidade, organiza documentos e conduz o cadastro até o CRC regular.",
  },
];

export const quemPodeFaqs = [
  {
    question: "MEI pode se cadastrar no SICAF?",
    answer:
      "Sim. MEI com CNPJ ativo pode credenciar-se no SICAF quando o edital permitir participação de microempreendedores. A documentação é simplificada (CCMEI e certidões), mas o e-CNPJ continua obrigatório.",
  },
  {
    question: "Autônomo sem CNPJ pode se cadastrar?",
    answer:
      "Não diretamente. O SICAF exige pessoa jurídica. Autônomos precisam abrir MEI ou constituir empresa (LTDA, EIRELI etc.) antes do credenciamento.",
  },
  {
    question: "Empresa de grande porte também usa SICAF?",
    answer:
      "Sim. LTDAs e S/A de médio e grande porte utilizam o mesmo sistema, com níveis adicionais de habilitação técnica (IV), econômico-financeira (V) e linhas de fornecimento (VI).",
  },
  {
    question: "ME e EPP têm vantagens no SICAF?",
    answer:
      "O cadastro é o mesmo para todos os portes, mas ME e EPP usufruem de tratamento diferenciado em licitações — cotas exclusivas, empate ficto e simplificações previstas na LC 123/2006.",
  },
  {
    question: "Empresa inapta na Receita pode se cadastrar?",
    answer:
      "Não. É necessário regularizar o CNPJ antes. A CADBRASIL orienta empresas inaptas no processo de recuperação cadastral e posterior credenciamento SICAF.",
  },
  {
    question: "Quanto tempo leva para MEI ou ME concluir o cadastro?",
    answer:
      "Com documentação completa, o fluxo assistido pela CADBRASIL pode ser concluído em até 24 horas. Pendências fiscais ou documentais podem estender o prazo.",
  },
  {
    question: "Preciso estar em todo o Brasil para me cadastrar?",
    answer:
      "Não. Qualquer empresa brasileira com CNPJ ativo pode se credenciar no SICAF federal, independentemente do estado ou município de sede.",
  },
];

/** Lista para schema ItemList e crawlers de IA */
export const elegiveisItemList = perfisEmpresa
  .filter((p) => p.podeCadastrar)
  .map((p) => `${p.sigla} — ${p.nome}`);

export const definedTermsPorte = perfisEmpresa.map((p) => ({
  term: p.sigla,
  def: p.resumo,
}));
