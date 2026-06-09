/** Conteúdo /como-participar-de-licitacao-resumo — guia resumido CADBRASIL */

export const licitacaoResumoMeta = {
  path: "/como-participar-de-licitacao-resumo",
  shortTitle: "Como participar de licitação (resumo)",
  metaTitle:
    "Como Participar de Licitação — Resumo Prático 2026 | Passo a Passo CADBRASIL",
  metaDescription:
    "Resumo inteligente de como participar de licitação pública: requisitos, SICAF, edital, pregão, habilitação e contrato. Guia CADBRASIL com passo a passo e cadastro assistido.",
  keywords:
    "como participar de licitacao, licitacao passo a passo, licitacao governo resumo, sicaf licitacao, pregão eletronico, habilitacao licitacao, vender para o governo, cadastro sicaf licitacao",
  quickAnswer:
    "Para participar de licitação pública: regularize documentos e cadastro SICAF, encontre editais no Compras.gov.br, analise o edital, envie proposta viável, dispute lances no pregão, comprove habilitação e assine o contrato. A CADBRASIL conduz o cadastro SICAF em até 24 horas.",
};

export const resumoInteligente = [
  "Licitação pública é o processo competitivo pelo qual o governo compra bens e serviços com transparência.",
  "MEI, ME, EPP e empresas de maior porte podem participar, desde que cumpram o edital.",
  "Regularidade fiscal (CND, FGTS, CNDT) e cadastro SICAF são bases da habilitação federal.",
  "O edital define objeto, prazos, documentos e critério de julgamento — leitura atenta é obrigatória.",
  "Pregão eletrônico concentra a maioria das disputas federais no Compras.gov.br.",
  "Perder prazo ou apresentar certidão vencida elimina a empresa na habilitação.",
  "Proposta vencedora equilibra preço realista com capacidade de entrega.",
];

export const passosLicitacao = [
  {
    id: "passo-1",
    numero: "01",
    titulo: "Regularize a documentação",
    descricao:
      "Organize certidões fiscais, trabalhistas e previdenciárias, contrato social, e-CNPJ e atestados de capacidade técnica quando exigidos. A CADBRASIL valida tudo antes do credenciamento.",
    prazo: "1 a 5 dias",
  },
  {
    id: "passo-2",
    numero: "02",
    titulo: "Cadastre-se no SICAF",
    descricao:
      "Para licitações federais, o SICAF é obrigatório. Credenciamento no Compras.gov.br com níveis de habilitação e CRC regular. Com a CADBRASIL, em até 24 horas com documentação completa.",
    prazo: "Até 24h",
  },
  {
    id: "passo-3",
    numero: "03",
    titulo: "Encontre editais compatíveis",
    descricao:
      "Busque oportunidades no Compras.gov.br e portais estaduais/municipais. Filtre por objeto, valor, localização e modalidade alinhados ao seu CNAE.",
    prazo: "Contínuo",
  },
  {
    id: "passo-4",
    numero: "04",
    titulo: "Analise o edital e monte a proposta",
    descricao:
      "Leia objeto, habilitação, critérios de julgamento e prazos. Elabore planilha de custos realista — lance inexequível gera desclassificação.",
    prazo: "Conforme edital",
  },
  {
    id: "passo-5",
    numero: "05",
    titulo: "Participe da disputa e habilitação",
    descricao:
      "No pregão eletrônico, envie proposta e dispute lances no horário marcado. O vencedor comprova documentação; seguem adjudicação, homologação e contrato.",
    prazo: "Dia do pregão",
  },
];

export const requisitosTabela = [
  {
    requisito: "Regularidade fiscal e trabalhista",
    necessario: "CND Federal, estadual/municipal, FGTS e CNDT válidas",
    dica: "Monitore vencimentos com 30 a 45 dias de antecedência.",
  },
  {
    requisito: "Capacidade técnica",
    necessario: "Atestado de Capacidade Técnica (ATC) compatível com o objeto",
    dica: "Guarde atestados de contratos anteriores similares ao edital.",
  },
  {
    requisito: "Capacidade econômico-financeira",
    necessario: "Balanço, DRE ou índices quando exigidos no edital",
    dica: "MEI pode precisar de balanço de abertura conforme o certame.",
  },
  {
    requisito: "Cadastro SICAF",
    necessario: "Credenciamento federal com CRC regular no Compras.gov.br",
    dica: "A CADBRASIL conduz credenciamento e renovação documental.",
  },
  {
    requisito: "MEI e ME/EPP",
    necessario: "Tratamento diferenciado LC 123/2006: cotas, exclusividade e empate ficto",
    dica: "Verifique se o edital permite participação do seu porte.",
  },
];

export const modalidades = [
  {
    nome: "Pregão eletrônico",
    uso: "Bens e serviços comuns — disputa de lances online no Compras.gov.br.",
  },
  {
    nome: "Pregão presencial",
    uso: "Mesma lógica do pregão, com sessão presencial de lances.",
  },
  {
    nome: "Concorrência",
    uso: "Contratos de maior valor ou maior complexidade técnica.",
  },
  {
    nome: "Leilão",
    uso: "Venda de bens públicos — lances crescentes pelo maior valor.",
  },
  {
    nome: "Concurso",
    uso: "Seleção de trabalhos técnicos, artísticos ou científicos.",
  },
  {
    nome: "Diálogo competitivo",
    uso: "Soluções inovadoras com diálogo prévio entre administração e mercado.",
  },
];

export const fasesCertame = [
  { fase: "Publicação do edital", descricao: "Divulgação das regras, prazos e exigências." },
  { fase: "Propostas e lances", descricao: "Envio de proposta e disputa pelo menor preço (pregão)." },
  { fase: "Habilitação", descricao: "Vencedor comprova documentação; inabilitação chama 2º colocado." },
  { fase: "Adjudicação e homologação", descricao: "Atribuição do objeto e confirmação pelo órgão." },
  { fase: "Contrato", descricao: "Assinatura e execução conforme edital e Lei 14.133/2021." },
];

export const errosFatais = [
  "Certidão vencida no dia da habilitação",
  "Proposta enviada fora do prazo do edital",
  "Lance abaixo do custo real (inexequibilidade)",
  "SICAF irregular ou CRC com pendências",
  "Ignorar exigências específicas do edital",
  "Não comparecer à sessão de lances no horário marcado",
];

export const licitacaoResumoFaqs = [
  {
    question: "O que é licitação pública?",
    answer:
      "É o procedimento administrativo pelo qual órgãos públicos contratam fornecedores de forma competitiva, transparente e conforme a Lei 14.133/2021, buscando melhor custo-benefício.",
  },
  {
    question: "Qualquer empresa pode participar de licitação?",
    answer:
      "Sim, desde que cumpra requisitos do edital: CNPJ ativo, regularidade fiscal, capacidade técnica/econômica quando exigida e cadastro nos sistemas necessários (SICAF para federal).",
  },
  {
    question: "MEI pode participar de licitação?",
    answer:
      "Sim, com benefícios da LC 123/2006: licitações exclusivas até determinado valor, cotas reservadas e empate ficto, desde que mantenha regularidade e respeite limites do MEI.",
  },
  {
    question: "Preciso do SICAF para licitar?",
    answer:
      "Para licitações federais, sim. O SICAF com CRC regular é base da habilitação no Compras.gov.br. A CADBRASIL realiza credenciamento assistido em até 24 horas.",
  },
  {
    question: "Onde encontrar licitações?",
    answer:
      "Portais oficiais: Compras.gov.br (federal), portais estaduais e municipais. Filtre por objeto e região compatíveis com seu negócio.",
  },
  {
    question: "Qual o papel do edital?",
    answer:
      "O edital é a regra do certame: define objeto, prazos, documentos, critérios de julgamento e condições de execução. Descumprimento gera desclassificação.",
  },
  {
    question: "Como a CADBRASIL ajuda quem quer licitar?",
    answer:
      "Conduzimos cadastro SICAF, validação documental, regularização fiscal e monitoramento de certidões — etapas que bloqueiam habilitação quando estão irregulares.",
  },
];

export const howToStepsSchema = passosLicitacao.map((p) => ({
  name: p.titulo,
  text: p.descricao,
}));

export const itemListResumo = resumoInteligente;
