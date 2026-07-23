/** Conteúdo /renovar-sicaf — campanha renovação SICAF (SEO + IA + conversão) */

export const renovarSicafMeta = {
  path: "/renovar-sicaf",
  title: "Renovar SICAF 2026 | Certidões, CRC e Regularidade Contínua — CADBRASIL",
  description:
    "Renove o SICAF antes do vencimento: monitoramento de certidões (CND, FGTS, CNDT, estadual e municipal), atualização no Compras.gov.br e CRC Regular. Evite desclassificação em licitações com a CADBRASIL.",
  keywords:
    "renovar sicaf, renovação sicaf, renovar certidões sicaf, sicaf irregular certidão vencida, atualizar sicaf, renovação crc sicaf, monitorar certidões sicaf, renovar cnd sicaf, renovação contínua fornecedor, sicaf 2026 renovação",
  quickAnswer:
    "Renovação do SICAF não é anual fixa: ocorre conforme o vencimento de cada certidão. Sem renovação, o cadastro fica irregular e a empresa pode ser desclassificada na habilitação. A CADBRASIL monitora prazos, renova documentos e atualiza o Compras.gov.br para manter o CRC Regular.",
};

export const editorialTrust = {
  who: {
    organization: "CADBRASIL",
    role: "Especialistas em renovação e regularidade SICAF",
    experience:
      "Operamos rotinas de monitoramento de certidões e renovação no Compras.gov.br para fornecedores que licitam com frequência em todo o Brasil.",
  },
  how: {
    method:
      "Este guia combina regras práticas de validade documental com o fluxo operacional de renovação assistida da CADBRASIL — alertas, emissão, upload e conferência no SICAF.",
    updatedLabel: "23 jul 2026",
    readingTime: "~12 min de leitura",
  },
  why: {
    purpose:
      "Ajudar empresas a renovar o SICAF a tempo e não perder licitações por certidão vencida — conteúdo feito para quem precisa agir, não só para ranquear.",
  },
};

export const renovarSicafToc = [
  { id: "resposta-rapida", label: "Resposta rápida" },
  { id: "o-que-e", label: "O que é renovação" },
  { id: "quando-renovar", label: "Quando renovar" },
  { id: "riscos", label: "Riscos de não renovar" },
  { id: "certidoes", label: "Certidões e prazos" },
  { id: "como-renovar", label: "Como renovar" },
  { id: "nivel-iv", label: "Atenção Nível IV" },
  { id: "cadbrasil", label: "Renovação CADBRASIL" },
  { id: "comparativo", label: "Sozinho vs CADBRASIL" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "cta", label: "Renovar agora" },
] as const;

export const resumoInteligente = [
  "Renovação SICAF = manter certidões e níveis válidos no Compras.gov.br — não é uma data única no calendário.",
  "Certidões federais, FGTS e CNDT costumam valer 90 a 180 dias; estaduais/municipais variam por UF.",
  "SICAF irregular por documento vencido leva à desclassificação na habilitação, mesmo com proposta vencedora.",
  "Nível IV (estadual/municipal) exige exclusão da certidão antiga antes de cadastrar a nova.",
  "Monitoramento contínuo e alertas evitam urgência na véspera do pregão.",
  "CADBRASIL renova, atualiza no portal e mantém CRC Regular com especialistas e IA.",
];

export const heroStats = [
  { value: "24/7", label: "Monitoramento de vencimentos" },
  { value: "90–180d", label: "Validade típica de certidões" },
  { value: "24h", label: "Renovação assistida*" },
  { value: "0", label: "Tolerância a certidão vencida" },
];

export const oQueERenovacao = [
  {
    titulo: "Não é renovação anual fixa",
    texto:
      "Diferente de um alvará com data única, o SICAF depende do ciclo de cada documento. Cada certidão tem validade própria — quando vence, o nível correspondente pode ficar irregular.",
  },
  {
    titulo: "É manutenção contínua",
    texto:
      "Renovar significa emitir documento atualizado, conferir CNPJ/razão social, carregar no nível certo do SICAF e confirmar o CRC Regular antes de disputar editais.",
  },
  {
    titulo: "Faz parte da habilitação",
    texto:
      "Na fase de habilitação, o órgão verifica regularidade. Certidão vencida ou inconsistente é um dos motivos mais comuns de desclassificação evitável.",
  },
];

export const quandoRenovar = [
  {
    titulo: "30 a 45 dias antes do vencimento",
    descricao: "Ideal para emitir, validar e subir no SICAF sem pressa — especialmente se houver mais de um edital no mês.",
  },
  {
    titulo: "Assim que o alerta aparecer",
    descricao: "Não espere o status ficar vermelho. Amarelo já é sinal de ação: prepare a renovação.",
  },
  {
    titulo: "Antes de cada pregão crítico",
    descricao: "Checklist rápido de CND, FGTS, CNDT e certidões locais evita surpresa na habilitação.",
  },
  {
    titulo: "Após alteração societária",
    descricao: "Mudança de sócios, endereço ou razão social exige atualização cadastral além das certidões.",
  },
];

export const riscosNaoRenovar = [
  "Desclassificação na habilitação com proposta já classificada.",
  "CRC irregular ou bloqueio de níveis no painel do fornecedor.",
  "Retrabalho emergencial na véspera do pregão.",
  "Perda de confiança interna: equipe comercial sem previsibilidade de disputa.",
  "Acúmulo de pendências (várias certidões vencendo juntas).",
];

export const certidoesPrazos = [
  { doc: "CND Federal (Receita / Dívida Ativa)", validade: "90 a 180 dias", nivel: "III", tipo: "Automática / consulta" },
  { doc: "CRF — Regularidade FGTS", validade: "Até 180 dias", nivel: "III", tipo: "Automática / consulta" },
  { doc: "CNDT — Débitos Trabalhistas", validade: "Até 180 dias", nivel: "III", tipo: "Automática / consulta" },
  { doc: "CND Estadual", validade: "Varia por UF", nivel: "IV", tipo: "Manual no SICAF" },
  { doc: "CND Municipal", validade: "Varia por município", nivel: "IV", tipo: "Manual no SICAF" },
  { doc: "Documentos jurídicos (contrato social)", validade: "Enquanto vigente", nivel: "II", tipo: "Atualizar se houver alteração" },
  { doc: "Balanço / DRE", validade: "Exercício contábil", nivel: "VI", tipo: "Atualizar no ciclo anual" },
  { doc: "Atestados e registros profissionais", validade: "Conforme documento", nivel: "V", tipo: "Conferir validade" },
];

export const passosRenovacao = [
  {
    n: "01",
    titulo: "Mapeie vencimentos",
    descricao: "Liste todas as certidões ativas no SICAF e as datas de validade. Priorize o que vence em até 45 dias.",
    time: "15–30 min",
  },
  {
    n: "02",
    titulo: "Emita documentos atualizados",
    descricao: "Gere CND, FGTS, CNDT e certidões estaduais/municipais nos órgãos oficiais — confira CNPJ e razão social.",
    time: "Imediato a 48h",
  },
  {
    n: "03",
    titulo: "Atualize no Compras.gov.br",
    descricao: "No menu SICAF, atualize o nível correspondente. No Nível IV: exclua a certidão antiga antes de cadastrar a nova.",
    time: "30–90 min",
  },
  {
    n: "04",
    titulo: "Confira código, data e PDF",
    descricao: "Informe o código da certidão, a data de vencimento exatamente como no documento e anexe o PDF correto.",
    time: "10 min",
  },
  {
    n: "05",
    titulo: "Emita / valide o CRC",
    descricao: "Confirme status Regular nos níveis exigidos e emita o CRC se necessário antes do próximo edital.",
    time: "Imediato",
  },
  {
    n: "06",
    titulo: "Agende o próximo ciclo",
    descricao: "Cadastre alertas (calendário, painel CADBRASIL ou WhatsApp) para não depender da memória da equipe.",
    time: "Contínuo",
  },
];

export const nivelIvDestaque = {
  titulo: "Nível IV — nunca só “substitua” o arquivo",
  passos: [
    "Localize a certidão vencida no SICAF",
    "Clique em Excluir (obrigatório)",
    "Cadastre novamente com código, vencimento e PDF novo",
  ],
  checklist: [
    "CNPJ da certidão = CNPJ do cadastro",
    "Documento dentro da validade",
    "Código digitado sem erro",
    "Data de vencimento idêntica ao PDF",
  ],
};

export const renovacaoCadbrasil = [
  {
    titulo: "Monitoramento de vencimentos",
    descricao: "Alertas antes do prazo — você não depende de planilha esquecida.",
  },
  {
    titulo: "Emissão e atualização no portal",
    descricao: "Orientamos a emissão e atualizamos os níveis corretos no Compras.gov.br.",
  },
  {
    titulo: "Conferência humana + IA",
    descricao: "Validação de CNPJ, datas e consistência antes de gravar no SICAF.",
  },
  {
    titulo: "CRC Regular contínuo",
    descricao: "Manutenção da habilitação para disputar editais sem surpresa na habilitação.",
  },
];

export const comparativoRenovacao = [
  { aspecto: "Lembrete de vencimento", sozinho: "Manual / planilha", cadbrasil: "Alertas automáticos" },
  { aspecto: "Atualização no SICAF", sozinho: "Equipe interna", cadbrasil: "Especialistas + conferência" },
  { aspecto: "Risco Nível IV", sozinho: "Alto (erro de exclusão/código)", cadbrasil: "Baixo (procedimento padronizado)" },
  { aspecto: "Urgência pré-pregão", sozinho: "Frequente", cadbrasil: "Prevenida com ciclo contínuo" },
  { aspecto: "Prazo assistido*", sozinho: "Variável", cadbrasil: "Até 24h com docs prontos" },
];

export const renovarSicafFaqs = [
  {
    question: "A renovação do SICAF é anual?",
    answer:
      "Não. Não existe uma única data de renovação anual. O cadastro permanece regular enquanto as certidões e documentos dos níveis exigidos estiverem válidos. Cada documento tem seu próprio prazo.",
  },
  {
    question: "O que acontece se uma certidão vencer no SICAF?",
    answer:
      "O nível correspondente pode ficar irregular e o CRC deixa de refletir regularidade completa. Em licitações, isso costuma resultar em desclassificação na fase de habilitação.",
  },
  {
    question: "Quais certidões preciso renovar com mais frequência?",
    answer:
      "CND Federal, FGTS e CNDT (Nível III) e certidões estaduais/municipais (Nível IV). As do Nível IV exigem atualização manual no portal.",
  },
  {
    question: "Como renovar certidão estadual ou municipal no Nível IV?",
    answer:
      "Exclua a certidão vencida, depois cadastre a nova informando código, data de validade e PDF. Não apenas substitua o arquivo sem excluir a anterior.",
  },
  {
    question: "Quanto tempo antes do vencimento devo renovar?",
    answer:
      "O ideal é iniciar 30 a 45 dias antes. Assim há margem para emissão, conferência e upload no Compras.gov.br sem urgência.",
  },
  {
    question: "A CADBRASIL faz a renovação por mim?",
    answer:
      "Sim. Monitoramos vencimentos, orientamos emissão, atualizamos o SICAF e mantemos o ciclo de regularidade — com suporte humano e alertas.",
  },
  {
    question: "Renovação é a mesma coisa que regularização?",
    answer:
      "São próximas, mas diferentes. Renovação é manutenção preventiva de documentos válidos. Regularização trata cadastro já irregular ou com pendências acumuladas.",
  },
  {
    question: "Preciso de e-CNPJ para renovar?",
    answer:
      "Sim. O acesso ao Compras.gov.br como pessoa jurídica usa certificado digital e-CNPJ para atualizar o SICAF.",
  },
  {
    question: "Quanto custa renovar o SICAF no governo?",
    answer:
      "O portal oficial não cobra taxa de renovação. Custos reais: tempo interno, eventual assessoria e manutenção do certificado digital.",
  },
  {
    question: "Como começar a renovação com a CADBRASIL?",
    answer:
      "Inicie pelo portal de cadastro ou WhatsApp. Fazemos diagnóstico dos vencimentos e priorizamos o que está crítico para seus próximos editais.",
  },
];

export const relatedGuides = [
  { to: "/renovacao-sicaf", label: "Renovação SICAF — visão geral" },
  { to: "/sicaf-niveis", label: "Manual dos 6 níveis" },
  { to: "/como-atualizar-certificados-sicaf", label: "Atualizar certificados SICAF" },
  { to: "/regularidade-fiscal", label: "Regularidade fiscal" },
  { to: "/servicos-documentacao", label: "Gestão documental" },
  { to: "/o-que-e-sicaf-e-como-se-cadastrar", label: "O que é SICAF e como cadastrar" },
  { to: "/emitir-crc", label: "Emitir CRC" },
  { to: "/planos", label: "Planos CADBRASIL" },
];
