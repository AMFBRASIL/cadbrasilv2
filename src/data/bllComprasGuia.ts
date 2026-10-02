export const BLL_PAGE_LABEL = "Guia BLL Compras para licitantes";
export const BLL_TAXA_PERCENTUAL = 0.015;
export const BLL_TAXA_TETO = 600;
export const BLL_PLANO_TRIMESTRAL = 630;

export const bllMeta = {
  path: "/bll-compras-guia-para-licitantes",
  title: "BLL Compras: Guia Completo para Licitantes 2026 (Custos e Cadastro)",
  description:
    "Guia completo da BLL Compras: o que é, quanto custa (taxa de 1,5% com teto de R$ 600 ou plano trimestral), como se cadastrar, documentos, fases da disputa, recursos e calculadora de taxas.",
  keywords:
    "BLL Compras, BLL licitações, Bolsa de Licitações e Leilões do Brasil, como participar BLL Compras, cadastro BLL Compras, taxa BLL Compras, plano trimestral BLL, pregão eletrônico BLL, guia para licitantes",
  updatedLabel: "1º de outubro de 2026",
  published: "2026-10-01T17:30:00-03:00",
  modified: "2026-10-01T17:30:00-03:00",
  quickAnswer:
    "A BLL Compras (Bolsa de Licitações e Leilões do Brasil) é uma plataforma eletrônica privada usada por prefeituras, câmaras, autarquias e outras entidades para realizar licitações. Os órgãos usam o sistema sem custo; o fornecedor faz um cadastro próprio, assina o Termo de Adesão, envia o contrato social e escolhe entre o plano trimestral (R$ 630 a cada 90 dias) ou o cadastro gratuito com taxa por êxito de 1,5% do lote vencido, limitada a R$ 600 por lote. A validação do cadastro ocorre em até 24 horas úteis.",
  aiCitation:
    "Guia BLL Compras para licitantes — CADBrasil (cadbrasil.com.br/bll-compras-guia-para-licitantes), com base no Regulamento e nas páginas oficiais da BLL Compras consultadas em outubro de 2026.",
} as const;

export const bllToc = [
  { id: "resumo", label: "Resumo rápido" },
  { id: "o-que-e", label: "O que é a BLL Compras" },
  { id: "quanto-custa", label: "Quanto custa" },
  { id: "calculadora", label: "Calculadora de taxas" },
  { id: "cadastro", label: "Como se cadastrar" },
  { id: "documentos", label: "Documentos" },
  { id: "fases", label: "Como funciona a licitação" },
  { id: "me-epp", label: "Benefícios ME/EPP" },
  { id: "sessao", label: "Boas práticas na disputa" },
  { id: "comparativo", label: "BLL x outras plataformas" },
  { id: "erros", label: "Erros comuns" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "fontes", label: "Fontes oficiais" },
] as const;

export const bllResumo = [
  "A BLL Compras é uma plataforma privada de licitações eletrônicas; órgãos públicos a utilizam sem custo, por meio de licença de uso.",
  "O fornecedor faz cadastro próprio na BLL, assina o Termo de Adesão e envia contrato social e última alteração.",
  "Validação do cadastro em até 24 horas úteis, segundo o Regulamento da plataforma.",
  "Dois modelos de cobrança: plano trimestral de R$ 630 ou cadastro gratuito com taxa de 1,5% por lote vencido, limitada a R$ 600.",
  "Quem paga é apenas o fornecedor vencedor (no modelo por êxito); o edital de cada órgão define documentos, prazos e regras.",
  "Acompanhar mensagens e manter conexão estável é responsabilidade do licitante — perda de negócio por desconexão não é coberta.",
] as const;

export const bllOQueE = [
  "A BLL Compras — nome comercial da Bolsa de Licitações e Leilões do Brasil — é um ambiente eletrônico em que órgãos e entidades publicam editais e conduzem disputas, e fornecedores enviam propostas, dão lances e acompanham cada fase em tempo real.",
  "A plataforma atende desde prefeituras e câmaras municipais até autarquias estaduais e federais, além de processos de seleção de entidades como SESI e SENAI. Segundo a própria BLL, ela está presente em todo o território nacional.",
  "Para o órgão comprador, o uso é gratuito: ele firma uma licença de uso e cadastra seus agentes de contratação. A remuneração da plataforma vem dos fornecedores, pelo plano escolhido no cadastro.",
] as const;

export const bllPublicaOuPrivada =
  "A BLL Compras é uma plataforma privada. Isso não muda a natureza da licitação: quando um órgão público usa o sistema, prevalecem as normas de licitações e contratos da Administração Pública (Lei nº 14.133/2021) e as regras do edital, conforme o próprio Regulamento da BLL.";

export const bllModalidades = [
  "Pregão eletrônico",
  "Concorrência",
  "Dispensa eletrônica",
  "Leilão",
  "Concurso e diálogo competitivo",
  "Seleções do Sistema S (SESI/SENAI)",
] as const;

export const bllPlanos = [
  {
    nome: "Cadastro gratuito (taxa por êxito)",
    preco: "R$ 0 para se cadastrar",
    destaque: "Paga só se vencer",
    itens: [
      "1,5% sobre o valor do lote adjudicado",
      "Teto de R$ 600 por lote",
      "Aquisição: vencimento 45 dias após a adjudicação",
      "Aquisição parcelada: parcelas mensais, a primeira em 45 dias",
      "Registro de preços: parcelas mensais, a primeira em 60 dias",
    ],
  },
  {
    nome: "Plano trimestral",
    preco: "R$ 630 a cada 90 dias",
    destaque: "Custo previsível",
    itens: [
      "Participação livre nas licitações por 90 dias",
      "Valor vigente a partir de 13/07/2026",
      "Boleto com vencimento em 48 horas após a escolha",
      "Renovação automática opcional",
      "Cancelamento da renovação até 10 dias antes do vencimento",
    ],
  },
] as const;

export const bllTaxasEspeciais = [
  {
    caso: "Disputa por maior desconto ou menor taxa administrativa",
    valor: "R$ 600 (1 lote) · R$ 1.200 (2 lotes) · R$ 1.300 (3 lotes ou mais)",
  },
  { caso: "Leilão", valor: "R$ 250 fixos por processo, com vencimento em 10 dias" },
  {
    caso: "Licitação cancelada pelo órgão",
    valor: "Taxa por êxito do lote cancelado é devolvida; plano trimestral não é reembolsado",
  },
  {
    caso: "Atraso no pagamento",
    valor: "Multa de 2%, juros de 1% ao mês, negativação e desativação dos acessos",
  },
] as const;

export const bllCadastroPassos = [
  {
    title: "Acesse o cadastro da BLL",
    description:
      "Em bll.org.br, entre na área de cadastro de fornecedores e selecione o tipo de pessoa (jurídica ou física).",
  },
  {
    title: "Dados do representante legal",
    description:
      "Preencha os dados do representante legal — a autoridade máxima da empresa no sistema — e crie a senha de acesso.",
  },
  {
    title: "Dados da empresa e enquadramento",
    description:
      "Informe os dados da empresa e selecione corretamente o enquadramento (por exemplo, ME ou EPP). Finalize clicando em “Cadastre-se”.",
  },
  {
    title: "Assine o Termo de Adesão",
    description:
      "O sistema gera o Termo de Adesão. Assine digitalmente ou à mão — neste caso, imprima, assine, digitalize e anexe com cópia de documento oficial com foto.",
  },
  {
    title: "Envie os documentos",
    description:
      "Anexe o contrato social e a última alteração (autenticados). Se o representante não constar no contrato, envie procuração de um sócio com poderes para substabelecer.",
  },
  {
    title: "Aguarde a validação",
    description:
      "A BLL valida o cadastro em até 24 horas úteis, conferindo a autoridade do representante sobre a empresa.",
  },
  {
    title: "Escolha o plano",
    description:
      "Em “Configurações de Plano e Cobrança”, selecione o plano trimestral ou o cadastro gratuito com taxa por êxito.",
  },
  {
    title: "Defina o operador e participe",
    description:
      "Cadastre o usuário Operador (pode ser o próprio representante legal), encontre o edital desejado e envie sua proposta.",
  },
] as const;

export const bllDocumentosCadastro = [
  "Termo de Adesão assinado pelo representante legal",
  "Contrato social e última alteração (autenticados)",
  "Procuração, se o representante não constar no contrato social",
  "Documento oficial com foto, se a assinatura do termo for manual",
] as const;

export const bllDocumentosHabilitacao = [
  { grupo: "Habilitação jurídica", exemplo: "Ato constitutivo, documentos dos administradores" },
  { grupo: "Regularidade fiscal, social e trabalhista", exemplo: "Certidões e comprovações exigidas no edital" },
  { grupo: "Qualificação econômico-financeira", exemplo: "Balanço patrimonial e índices, quando exigidos" },
  { grupo: "Qualificação técnica", exemplo: "Atestados de capacidade técnica e registros profissionais" },
  { grupo: "Declarações", exemplo: "Modelos previstos no edital e anexos" },
] as const;

export const bllFases = [
  {
    title: "Publicação do edital",
    description:
      "O órgão publica aviso e edital na BLL e no PNCP, com objeto, critério de julgamento, prazos e exigências.",
  },
  {
    title: "Esclarecimentos e impugnação",
    description:
      "Dúvidas e impugnações podem ser apresentadas até 3 dias úteis antes da abertura (art. 164 da Lei 14.133/2021).",
  },
  {
    title: "Proposta e documentos",
    description:
      "O fornecedor cadastra proposta — e documentos, quando o edital pedir — antes da sessão. Revise preço, unidade e especificações.",
  },
  {
    title: "Disputa de lances",
    description:
      "Na sessão, os lances seguem o modo de disputa do edital: aberto, fechado ou combinado (art. 56 da Lei 14.133/2021).",
  },
  {
    title: "Negociação e julgamento",
    description:
      "O agente de contratação pode negociar com o melhor colocado e verifica a aceitabilidade da proposta.",
  },
  {
    title: "Habilitação",
    description:
      "Os documentos de habilitação do vencedor são analisados conforme o edital (arts. 62 a 70 da Lei 14.133/2021).",
  },
  {
    title: "Recursos",
    description:
      "A intenção de recorrer é manifestada na sessão; as razões são apresentadas em 3 dias úteis (art. 165 da Lei 14.133/2021).",
  },
  {
    title: "Adjudicação e homologação",
    description:
      "A autoridade competente confirma o resultado. A partir daqui, vale a regra de cobrança do plano escolhido.",
  },
] as const;

export const bllMeEpp = [
  {
    title: "Empate ficto",
    description:
      "Propostas de ME/EPP até 5% acima da melhor oferta no pregão (10% nas demais modalidades) dão direito a cobrir o lance (LC 123/2006, art. 44).",
  },
  {
    title: "Licitações exclusivas",
    description:
      "Itens de até R$ 80 mil podem ser exclusivos para ME/EPP (LC 123/2006, art. 48, I), conforme o edital.",
  },
  {
    title: "Cota reservada",
    description:
      "Em bens divisíveis, pode haver cota de até 25% do objeto para ME/EPP (LC 123/2006, art. 48, III).",
  },
  {
    title: "Regularidade fiscal tardia",
    description:
      "ME/EPP podem regularizar restrições fiscais após a declaração de vencedor, no prazo previsto em lei (LC 123/2006, art. 43).",
  },
] as const;

export const bllBoasPraticas = [
  "Mantenha internet estável e um dispositivo reserva: perda de negócio por desconexão é responsabilidade do licitante.",
  "Acompanhe o chat e as convocações do agente de contratação durante toda a sessão.",
  "Use senha pessoal e intransferível; a empresa responde por todos os lances e ações de seus usuários.",
  "Tenha os documentos de habilitação prontos e válidos antes da sessão — prazos de envio costumam ser curtos.",
  "Calcule o custo da plataforma (taxa ou plano) no preço da proposta antes de disputar.",
  "Atualize o cadastro na BLL sempre que houver alteração contratual, de sócios, representante ou endereço.",
] as const;

export const bllComparativo = {
  colunas: ["BLL Compras", "Compras.gov.br", "BEC/SP", "PNCP"],
  linhas: [
    {
      criterio: "Quem opera",
      valores: [
        "Empresa privada (Bolsa de Licitações e Leilões do Brasil)",
        "Governo Federal",
        "Governo do Estado de São Paulo",
        "Governo Federal",
      ],
    },
    {
      criterio: "Quem compra",
      valores: [
        "Prefeituras, câmaras, autarquias e entidades como SESI/SENAI",
        "Órgãos federais e entes que aderem ao sistema",
        "Órgãos e entidades do Estado de SP",
        "Portal de divulgação de todos os entes",
      ],
    },
    {
      criterio: "Cadastro do fornecedor",
      valores: ["Cadastro próprio + Termo de Adesão", "SICAF", "CAUFESP", "Não é ambiente de disputa"],
    },
    {
      criterio: "Custo para o fornecedor",
      valores: [
        "Plano trimestral ou taxa por êxito",
        "Sem cobrança oficial",
        "Cadastro sem custo",
        "Consulta gratuita",
      ],
    },
  ],
} as const;

export const bllErros = [
  "Não ler o edital e os anexos inteiros antes de enviar a proposta.",
  "Esquecer de incluir a taxa da plataforma na formação do preço.",
  "Escolher o plano sem simular o custo pelo volume de lotes esperado.",
  "Representante legal fora do contrato social sem procuração válida.",
  "Perder convocações no chat por não acompanhar a sessão.",
  "Documentos de habilitação vencidos no momento da análise.",
  "Cadastro desatualizado após alteração contratual.",
] as const;

export const bllFaqs = [
  {
    question: "A BLL Compras é gratuita?",
    answer:
      "Para órgãos públicos, sim. Para fornecedores, há dois modelos: o cadastro gratuito com taxa por êxito (1,5% do lote vencido, limitado a R$ 600 por lote) e o plano trimestral de R$ 630 a cada 90 dias. Os valores podem ser reajustados pela BLL; confira sempre a página oficial.",
  },
  {
    question: "A BLL Compras é do governo?",
    answer:
      "Não. A BLL Compras é uma plataforma privada. Quando um órgão público a utiliza, valem as normas de licitações (Lei 14.133/2021) e as regras do edital publicado por esse órgão.",
  },
  {
    question: "Quanto tempo leva para o cadastro ser liberado?",
    answer:
      "Segundo o Regulamento da BLL, o cadastro do licitante é validado e concluído em até 24 horas úteis após o envio do Termo de Adesão e do contrato social.",
  },
  {
    question: "Quem paga a taxa de 1,5%?",
    answer:
      "No modelo por êxito, apenas o fornecedor vencedor paga, sobre o valor do lote adjudicado e com teto de R$ 600 por lote. Em disputas por maior desconto ou menor taxa administrativa, a cobrança é fixa por quantidade de lotes.",
  },
  {
    question: "Vale mais a pena o plano trimestral ou a taxa por êxito?",
    answer:
      "Depende do volume. Como a taxa por lote chega ao teto de R$ 600 em lotes a partir de R$ 40 mil, quem vence mais de um lote grande por trimestre tende a economizar com o plano de R$ 630. Use a calculadora deste guia para simular o seu caso.",
  },
  {
    question: "Preciso de certificado digital para usar a BLL?",
    answer:
      "Para o cadastro, a BLL aceita o Termo de Adesão assinado digitalmente ou à mão (com documento oficial com foto). Alguns editais podem exigir assinatura digital de documentos; verifique sempre o instrumento convocatório.",
  },
  {
    question: "MEI pode participar de licitações na BLL?",
    answer:
      "Sim. A BLL informa que atende MEIs, ME/EPPs e empresas de todos os portes. Basta selecionar o enquadramento correto no cadastro para que os benefícios da LC 123/2006 sejam aplicados quando previstos no edital.",
  },
  {
    question: "Se a licitação for cancelada, recebo a taxa de volta?",
    answer:
      "No modelo por êxito, sim: o valor pago referente ao lote cancelado pelo órgão é devolvido. No plano trimestral, não há devolução em caso de cancelamento da licitação.",
  },
  {
    question: "A BLL publica as licitações no PNCP?",
    answer:
      "Licitações regidas pela Lei 14.133/2021 devem ser divulgadas no Portal Nacional de Contratações Públicas (PNCP). Consulte o PNCP e o próprio edital como fontes oficiais de publicidade.",
  },
  {
    question: "Qual o contato da BLL para fornecedores?",
    answer:
      "Segundo o site oficial, o atendimento a fornecedores é pelo telefone (41) 3097-4600 ou pelo e-mail contato@bll.org.br, de segunda a sexta, das 8h às 18h.",
  },
] as const;

export const bllFontes = [
  { label: "BLL Compras — Para Fornecedor (planos e cadastro)", url: "https://bll.org.br/para-fornecedor/" },
  { label: "BLL Compras — Perguntas frequentes do fornecedor", url: "https://bll.org.br/categorias-de-faq/fornecedor/" },
  {
    label: "Regulamento do Sistema Eletrônico de Licitações da BLL",
    url: "https://bll.org.br/wp-content/uploads/2023/07/Regulamento-BLL-2024.pdf",
  },
  { label: "Lei nº 14.133/2021 — Licitações e Contratos", url: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm" },
  { label: "Lei Complementar nº 123/2006 — ME e EPP", url: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm" },
  { label: "PNCP — Portal Nacional de Contratações Públicas", url: "https://www.gov.br/pncp/pt-br" },
] as const;

export const bllCadbrasilAjuda = [
  {
    title: "Monitor de oportunidades",
    description: "Editais da BLL e de outros portais compatíveis com o que sua empresa vende, em um só lugar.",
  },
  {
    title: "Análise de editais com IA",
    description: "Requisitos, prazos, documentos e riscos destacados antes de você decidir disputar.",
  },
  {
    title: "Gestão documental",
    description: "Documentos de habilitação organizados, conferidos e com alertas de vencimento.",
  },
  {
    title: "Especialistas em licitações",
    description: "Orientação para formar preço, montar a proposta e acompanhar cada fase.",
  },
] as const;

export const bllRelatedLinks = [
  { to: "/caufesp", label: "Assessoria CAUFESP (SP)" },
  { to: "/cadbrasil", label: "Sobre a CADBrasil" },
  { to: "/licitacoes", label: "Plataforma de licitações" },
  { to: "/pregao-eletronico", label: "Pregão eletrônico" },
  { to: "/documentacao-licitacao", label: "Documentação para licitação" },
] as const;
