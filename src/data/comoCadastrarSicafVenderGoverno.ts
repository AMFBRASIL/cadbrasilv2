/** Conteúdo /como-cadastrar-no-sicaf-e-vender-para-o-governo — guia pilar CADBRASIL */

export const venderGovernoMeta = {
  path: "/como-cadastrar-no-sicaf-e-vender-para-o-governo",
  shortTitle: "Cadastrar no SICAF e vender ao governo",
  metaTitle:
    "Como Cadastrar no SICAF e Vender para o Governo 2026 — Guia Completo | CADBRASIL",
  metaDescription:
    "Guia inteligente para cadastrar no SICAF e vender ao governo: credenciamento, níveis I–VI, CRC, pregão eletrônico, habilitação e contratos. Passo a passo CADBRASIL com cadastro em até 24h.",
  keywords:
    "como cadastrar no sicaf e vender para o governo, cadastro sicaf vender governo, sicaf licitacao, fornecedor governo federal, credenciamento sicaf 2026, vender para o governo, habilitacao sicaf, pregão eletronico sicaf, crc sicaf, compras.gov.br cadastro",
  quickAnswer:
    "Para cadastrar no SICAF e vender ao governo: credencie a empresa no Compras.gov.br com e-CNPJ e documentos por nível, obtenha CRC regular, busque editais compatíveis, envie proposta no pregão, comprove habilitação e assine o contrato. A CADBRASIL conduz cadastro e regularização em até 24 horas.",
};

export const resumoInteligente = [
  "SICAF é o cadastro obrigatório para fornecedores que vendem ao governo federal via Compras.gov.br.",
  "Sem CRC regular e níveis de habilitação ativos, a empresa é eliminada na fase de habilitação do edital.",
  "MEI, ME, EPP, LTDA, S/A e EIRELI podem credenciar-se desde que o CNPJ esteja ativo e regular.",
  "Certificado digital e-CNPJ, CND Federal, FGTS e CNDT são bases da regularidade fiscal.",
  "Pregão eletrônico concentra a maior parte das oportunidades federais de venda ao governo.",
  "O edital define objeto, documentos, prazos e critério de julgamento — leitura técnica é essencial.",
  "Cadastro SICAF não garante contrato: exige proposta competitiva, capacidade de entrega e habilitação.",
  "Monitorar vencimento de certidões evita perda de habilitação após o primeiro credenciamento.",
];

export const jornadaPassos = [
  {
    id: "jornada-1",
    numero: "01",
    titulo: "Diagnóstico e elegibilidade",
    descricao:
      "Confirme CNPJ ativo, porte da empresa (MEI a S/A) e objetivo comercial (bens, serviços ou obras). A CADBRASIL valida elegibilidade antes de iniciar o credenciamento.",
    prazo: "1 dia",
    fase: "Preparação",
  },
  {
    id: "jornada-2",
    numero: "02",
    titulo: "Organize documentação e e-CNPJ",
    descricao:
      "Reúna contrato social, certidões fiscais/trabalhistas, comprovantes e certificado digital e-CNPJ. Checklist personalizado por nível de habilitação I a VI.",
    prazo: "1 a 3 dias",
    fase: "Documentação",
  },
  {
    id: "jornada-3",
    numero: "03",
    titulo: "Credenciamento SICAF no Compras.gov.br",
    descricao:
      "Cadastro no portal federal, preenchimento cadastral, upload documental e ativação dos níveis exigidos. Fluxo assistido CADBRASIL em até 24 horas com documentação completa.",
    prazo: "Até 24h",
    fase: "SICAF",
  },
  {
    id: "jornada-4",
    numero: "04",
    titulo: "CRC regular e níveis ativos",
    descricao:
      "Emita o Certificado de Registro Cadastral com status Regular. Verifique níveis I a VI conforme o tipo de licitação que pretende disputar.",
    prazo: "Imediato",
    fase: "Habilitação",
  },
  {
    id: "jornada-5",
    numero: "05",
    titulo: "Encontre editais alinhados ao seu CNAE",
    descricao:
      "Monitore Compras.gov.br e portais estaduais/municipais. Filtre por objeto, valor estimado, localização e modalidade compatíveis com sua operação.",
    prazo: "Contínuo",
    fase: "Oportunidades",
  },
  {
    id: "jornada-6",
    numero: "06",
    titulo: "Proposta e disputa no pregão",
    descricao:
      "Analise o edital, monte proposta com preço viável e margem real, envie no prazo e dispute lances no pregão eletrônico com SICAF regular.",
    prazo: "Por edital",
    fase: "Licitação",
  },
  {
    id: "jornada-7",
    numero: "07",
    titulo: "Habilitação, contrato e entrega",
    descricao:
      "Após vencer, comprove documentação exigida, assine o contrato ou ata de registro de preços e execute com qualidade para manter reputação no PNCP.",
    prazo: "Pós-vitória",
    fase: "Contrato",
  },
];

export const niveisSicaf = [
  { nivel: "I", nome: "Habilitação jurídica", exige: "Contrato social, cartão CNPJ, procuração quando aplicável" },
  { nivel: "II", nome: "Regularidade fiscal federal", exige: "CND Federal, FGTS, CNDT, certidões previdenciárias" },
  { nivel: "III", nome: "Regularidade fiscal estadual/municipal", exige: "CNDs estaduais e municipais do domicílio fiscal" },
  { nivel: "IV", nome: "Qualificação econômico-financeira", exige: "Balanço, índices e capital social conforme edital" },
  { nivel: "V", nome: "Qualificação técnica", exige: "Atestados de capacidade técnica e profissionais habilitados" },
  { nivel: "VI", nome: "Declarações e outros", exige: "Declarações legais, LGPD, anticorrupção e exigências específicas" },
];

export const canaisVenda = [
  {
    canal: "Pregão eletrônico",
    descricao: "Modalidade mais usada no federal para bens e serviços comuns. Disputa por lances no Compras.gov.br.",
    sicaf: "Obrigatório",
  },
  {
    canal: "Dispensa e inexigibilidade",
    descricao: "Contratações diretas em hipóteses legais (valores menores ou situações específicas da Lei 14.133/2021).",
    sicaf: "Exigido na maioria dos casos federais",
  },
  {
    canal: "Estados e municípios",
    descricao: "Portais próprios; muitos exigem SICAF ou cadastro local equivalente. Verifique o edital de cada órgão.",
    sicaf: "Frequente como referência",
  },
  {
    canal: "Ata de registro de preços",
    descricao: "Após vencer o pregão, fornecimento sob demanda por órgãos participantes durante a vigência da ata.",
    sicaf: "Obrigatório",
  },
];

export const requisitosTabela = [
  {
    requisito: "CNPJ ativo",
    necessario: "Situação regular na Receita Federal",
    dica: "Empresa inapta não credencia — regularize antes com apoio CADBRASIL",
  },
  {
    requisito: "Certificado e-CNPJ",
    necessario: "A1 ou A3 válido do representante legal",
    dica: "Sem e-CNPJ não há acesso ao Compras.gov.br",
  },
  {
    requisito: "Regularidade fiscal",
    necessario: "CND Federal, FGTS, CNDT e estaduais/municipais",
    dica: "Certidão vencida elimina na habilitação",
  },
  {
    requisito: "Níveis SICAF",
    necessario: "I a VI conforme objeto e valor do edital",
    dica: "Ative apenas o que precisa; amplie conforme cresce",
  },
  {
    requisito: "Capacidade de entrega",
    necessario: "Estoque, equipe ou parceiros para cumprir contrato",
    dica: "Proposta vencedora exige execução real, não só preço baixo",
  },
  {
    requisito: "Proposta competitiva",
    necessario: "Preço viável com margem e custos reais",
    dica: "Lance irreal pode vencer e gerar prejuízo ou sanção",
  },
];

export const comparativoJornada = {
  sozinho: [
    "Meses para entender Compras.gov.br e níveis SICAF",
    "Alto risco de indeferimento por documento incorreto",
    "Perda de edital por certidão vencida",
    "Dificuldade para manter CRC regular sozinho",
    "Curva longa até a primeira venda ao governo",
  ],
  cadbrasil: [
    "Cadastro SICAF assistido em até 24 horas",
    "Checklist validado antes do envio oficial",
    "Monitoramento de vencimentos de certidões",
    "Orientação para editais e habilitação",
    "Jornada acelerada do CNPJ ao primeiro pregão",
  ],
};

export const errosComuns = [
  "Credenciar sem ler quais níveis o edital-alvo exige",
  "Enviar certidão com data de validade expirada",
  "Participar de pregão com SICAF irregular ou CRC vencido",
  "Propor preço abaixo do custo real só para vencer",
  "Ignorar exigências de qualificação técnica no edital",
  "Não renovar certidões após o primeiro cadastro",
];

export const venderGovernoFaqs = [
  {
    question: "É possível cadastrar no SICAF e vender ao governo no mesmo mês?",
    answer:
      "Sim. Com documentação organizada e assessoria CADBRASIL, o credenciamento pode ser concluído em até 24 horas. Em seguida, basta identificar editais compatíveis e enviar propostas dentro dos prazos.",
  },
  {
    question: "SICAF é obrigatório para vender ao governo federal?",
    answer:
      "Para a grande maioria das licitações federais no Compras.gov.br, sim. O SICAF com CRC regular é requisito de habilitação. Estados e municípios podem ter cadastros próprios, mas muitos aceitam ou exigem referência ao SICAF.",
  },
  {
    question: "MEI pode cadastrar no SICAF e licitar?",
    answer:
      "Sim, desde que o CNPJ esteja ativo, o edital permita participação de MEI e a documentação (CCMEI, certidões) esteja regular. Alguns editais limitam objeto ou valor para microempreendedores.",
  },
  {
    question: "Quanto custa cadastrar no SICAF?",
    answer:
      "O credenciamento no portal federal não cobra taxa. Há custo de certificado digital e-CNPJ e, se contratar assessoria, o serviço CADBRASIL acelera o processo e reduz risco de indeferimento.",
  },
  {
    question: "Qual a diferença entre cadastro SICAF e habilitação no edital?",
    answer:
      "SICAF é o cadastro permanente do fornecedor no governo federal. Habilitação no edital é a comprovação, naquele certame específico, de que você atende todas as exigências (documentos, níveis, declarações).",
  },
  {
    question: "Preciso de todos os níveis I a VI do SICAF?",
    answer:
      "Não sempre. Ative os níveis exigidos pelo tipo de licitação que pretende disputar. Editais de maior valor ou complexidade costumam exigir níveis IV, V e VI (econômico-financeiro e técnico).",
  },
  {
    question: "Como encontrar licitações depois do cadastro?",
    answer:
      "Acesse Compras.gov.br, filtre por palavra-chave, CNAE, órgão e UF. Cadastre alertas e analise editais com objeto alinhado à sua operação. A CADBRASIL orienta fornecedores na leitura inicial.",
  },
  {
    question: "O que é CRC e por que importa para vender ao governo?",
    answer:
      "CRC (Certificado de Registro Cadastral) comprova que sua empresa está regular no SICAF. Status 'Regular' é indispensável para habilitação em licitações federais. Irregular ou vencido bloqueia participação.",
  },
  {
    question: "A CADBRASIL faz só o cadastro ou ajuda a licitar também?",
    answer:
      "A CADBRASIL é especialista em credenciamento, regularização, renovação de certidões e suporte documental. Orientamos sobre habilitação e requisitos de edital; o envio de propostas e lances fica a cargo da empresa, com nosso apoio consultivo.",
  },
];

export const itemListJornada = jornadaPassos.map((p) => p.titulo);

export const itemListRequisitos = requisitosTabela.map((r) => r.requisito);

export const howToStepsSchema = jornadaPassos.map((p) => ({
  name: p.titulo,
  text: p.descricao,
}));
