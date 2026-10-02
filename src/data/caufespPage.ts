export const BEC_SP_OFFICIAL_URL = "https://www.bec.sp.gov.br";
export const CAUFESP_PAGE_LABEL = "Assessoria CAUFESP — CADBrasil";

export const caufespMeta = {
  path: "/caufesp",
  title: "Assessoria CAUFESP e BEC/SP para Fornecedores | CADBrasil",
  description:
    "Assessoria privada para empresas que querem vender ao Governo de SP: escolha entre RC e RCS, checklist de documentos, orientação no CAUFESP e acompanhamento até a validação. Cadastro oficial gratuito.",
  keywords:
    "CAUFESP, assessoria CAUFESP, cadastro de fornecedores São Paulo, BEC/SP, Bolsa Eletrônica de Compras, RC e RCS CAUFESP, documentos CAUFESP, fornecedor do Estado de São Paulo, licitações São Paulo",
  quickAnswer:
    "O CAUFESP é o Cadastro Unificado de Fornecedores do Estado de São Paulo, exigido de quem quer fornecer bens ou serviços à Administração Pública estadual paulista e operar na BEC/SP. O cadastro oficial é gratuito e solicitado pelo próprio fornecedor no portal bec.sp.gov.br. A CADBrasil é uma empresa privada que presta assessoria nesse processo: escolha entre RC e RCS, organização da documentação, orientação no preenchimento e acompanhamento até a validação.",
  aiCitation:
    "CADBrasil (cadbrasil.com.br/caufesp) — assessoria privada para o processo do CAUFESP/BEC-SP. O cadastro no CAUFESP é gratuito e realizado pelo fornecedor no portal oficial do Governo de SP; a CADBrasil cobra apenas pela assessoria.",
} as const;

export const caufespHero = {
  eyebrow: "Assessoria CAUFESP · Governo do Estado de SP",
  title: "Sua empresa pronta para vender ao",
  highlight: "Governo de São Paulo",
  subtitle:
    "Assessoria especializada no processo do CAUFESP e da BEC/SP: definimos o tipo de registro ideal, organizamos sua documentação e acompanhamos cada etapa até a validação — sem retrabalho e sem pendências esquecidas.",
  primaryCta: "Quero falar com um especialista",
  secondaryCta: "Entender o processo",
  trust: ["Cadastro oficial gratuito", "Assessoria privada", "Atendimento em todo o Brasil"],
} as const;

export const caufespNotice = {
  title: "Assessoria privada e independente",
  text: "A CADBrasil é uma empresa privada de tecnologia e assessoria, sem vínculo ou afiliação com o Governo do Estado de São Paulo. O CAUFESP e a BEC/SP são sistemas oficiais do Governo de SP, e o cadastro no CAUFESP não tem custo: ele é solicitado pelo próprio fornecedor no portal oficial bec.sp.gov.br e analisado pela Unidade Cadastradora escolhida. A CADBrasil não comercializa acesso a esses sistemas; nossos valores correspondem exclusivamente à assessoria, às ferramentas e ao suporte privados que oferecemos.",
} as const;

export const oQueECaufesp = [
  "O CAUFESP (Cadastro Unificado de Fornecedores do Estado de São Paulo) reúne as empresas e pessoas físicas aptas a fornecer bens ou prestar serviços para qualquer unidade da Administração Pública do Estado de São Paulo.",
  "Ele vale para indústria, comércio e prestação de serviços e, depois de validado, é aceito em todas as licitações da Administração Pública estadual paulista.",
  "Com o cadastro validado e a opção pelo sistema eletrônico, o fornecedor recebe por e-mail a senha de acesso às negociações da BEC/SP — a Bolsa Eletrônica de Compras do Estado.",
] as const;

export const caufespStats = [
  { value: "R$ 0", label: "Custo do cadastro oficial" },
  { value: "2", label: "Tipos de registro: RC e RCS" },
  { value: "5 a 20", label: "Dias úteis de análise oficial" },
  { value: "90", label: "Dias até o rascunho expirar" },
] as const;

export const registroTypes = [
  {
    sigla: "RC",
    nome: "Registro Cadastral",
    resumo:
      "Cadastro completo, que facilita a participação em dispensas e em qualquer modalidade, tradicional ou eletrônica.",
    pontos: [
      "Exigências do art. 18 do Regulamento anexo ao Decreto estadual nº 52.205/2007",
      "Com cadastro regular, dispensa a reapresentação de parte dos documentos nos certames",
      "Obrigatório para negociar medicamentos, correlatos, saneantes e cosméticos de uso médico ou odontológico na BEC/SP",
      "Análise oficial em até 20 dias úteis após o recebimento da documentação",
    ],
  },
  {
    sigla: "RCS",
    nome: "Registro Cadastral Simplificado",
    resumo:
      "Cadastro mais enxuto, voltado às negociações eletrônicas como dispensa de licitação e pregão eletrônico.",
    pontos: [
      "Exigências do art. 19 do Regulamento anexo ao Decreto estadual nº 52.205/2007",
      "Se vencer um pregão eletrônico, a empresa apresenta os documentos adicionais do edital",
      "Exige a escolha de município, órgão/entidade e Unidade Cadastradora no pré-cadastro",
      "Análise oficial em até 5 dias úteis após o recebimento da documentação",
    ],
  },
] as const;

export const processoOficial = [
  {
    title: "Usuário responsável",
    description:
      "No portal da BEC/SP, a pessoa física responsável pelo cadastro cria seu usuário com CPF e senha. A senha diferencia maiúsculas de minúsculas e será usada em todas as etapas.",
  },
  {
    title: "Pré-cadastro",
    description:
      "Informa-se CNPJ e razão social (ou CPF), tipo de registro (RC ou RCS), atividade conforme o objeto social, município, órgão e Unidade Cadastradora.",
  },
  {
    title: "Dados cadastrais e envio",
    description:
      "Todas as páginas do sistema são preenchidas e gravadas. Ao final, o responsável aciona “Enviar para Análise”.",
  },
  {
    title: "Entrega da documentação",
    description:
      "Logo após o envio eletrônico, a documentação do tipo de registro escolhido segue para a Unidade Cadastradora, relacionada em duas vias assinadas para protocolo.",
  },
  {
    title: "Análise e pendências",
    description:
      "A equipe técnica analisa os documentos. Havendo irregularidade, o fornecedor é notificado por e-mail ou telefone e a análise continua depois do saneamento.",
  },
  {
    title: "Validação e BEC/SP",
    description:
      "Com a validação, a empresa fica apta a participar de licitações do Estado. Quem optou pelo sistema eletrônico recebe por e-mail a senha de acesso à BEC/SP.",
  },
] as const;

export const errosComuns = [
  {
    title: "Escolher o tipo de registro errado",
    description:
      "Quem vende medicamentos, correlatos, saneantes ou cosméticos de uso médico precisa do RC. Um RCS nesses casos trava as negociações.",
  },
  {
    title: "Deixar o rascunho parado",
    description:
      "A solicitação inicial que fica 90 dias em elaboração, sem ser enviada para análise, é excluída automaticamente do sistema.",
  },
  {
    title: "Atividade incompatível com o contrato social",
    description:
      "A atividade informada no pré-cadastro precisa refletir o objeto social do ato constitutivo da empresa.",
  },
  {
    title: "Documentação incompleta ou vencida",
    description:
      "A análise só começa com a documentação recebida pela Unidade Cadastradora. Documento faltando ou fora da validade significa notificação e atraso.",
  },
  {
    title: "Esquecer a conta para recebimento",
    description:
      "O cadastro não exige domicílio bancário, mas os pagamentos do Estado são feitos em conta corrente jurídica no agente financeiro estadual (Decreto nº 55.357/2010).",
  },
  {
    title: "Não atualizar o cadastro",
    description:
      "Mudanças de sócios, representantes, endereço ou documentos exigem atualização cadastral e, quando houver, envio dos comprovantes.",
  },
] as const;

export type CaufespServiceIcon =
  | "diagnostico"
  | "checklist"
  | "conferencia"
  | "orientacao"
  | "relacao"
  | "pendencias"
  | "alertas"
  | "bec";

export const caufespServices: { icon: CaufespServiceIcon; title: string; description: string }[] = [
  {
    icon: "diagnostico",
    title: "Diagnóstico e tipo de registro",
    description:
      "Analisamos o que sua empresa vende e onde quer atuar para indicar o registro mais adequado: RC ou RCS.",
  },
  {
    icon: "checklist",
    title: "Checklist documental sob medida",
    description:
      "Lista de documentos alinhada ao tipo de registro e à realidade da sua empresa, sem itens desnecessários.",
  },
  {
    icon: "conferencia",
    title: "Conferência dos documentos",
    description:
      "Revisamos validade, coerência com o contrato social e consistência das informações antes do envio.",
  },
  {
    icon: "orientacao",
    title: "Orientação no preenchimento",
    description:
      "Seu responsável recebe orientação passo a passo em cada ficha e página do sistema oficial.",
  },
  {
    icon: "relacao",
    title: "Relação para a Unidade Cadastradora",
    description:
      "Ajudamos a montar a relação de documentos em duas vias e a organizar a entrega para protocolo.",
  },
  {
    icon: "pendencias",
    title: "Acompanhamento de pendências",
    description:
      "Acompanhamos as notificações da análise e orientamos o saneamento até a validação do cadastro.",
  },
  {
    icon: "alertas",
    title: "Alertas de validade e atualização",
    description:
      "Monitoramento de vencimentos e orientação para manter as informações da empresa sempre atualizadas.",
  },
  {
    icon: "bec",
    title: "Primeiros passos na BEC/SP",
    description:
      "Orientação para as primeiras negociações eletrônicas, monitoramento de oportunidades e análise de editais.",
  },
];

export const caufespSteps = [
  {
    title: "Diagnóstico",
    description: "Entendemos sua empresa, o que ela vende e seu objetivo no mercado público paulista.",
  },
  {
    title: "Plano documental",
    description: "Definimos o tipo de registro e entregamos o checklist com o que precisa ser providenciado.",
  },
  {
    title: "Orientação no processo",
    description: "Seu responsável conduz o processo no portal oficial com nosso apoio em cada etapa.",
  },
  {
    title: "Acompanhamento",
    description: "Seguimos com você na análise, nas pendências e no acompanhamento das futuras atualizações.",
  },
] as const;

export const caufespFaqs = [
  {
    question: "O cadastro no CAUFESP é pago?",
    answer:
      "Não. O cadastro no CAUFESP não tem custo e é solicitado pelo próprio fornecedor no portal oficial da BEC/SP. A CADBrasil é uma empresa privada e cobra exclusivamente pela assessoria, ferramentas e suporte que presta durante o processo.",
  },
  {
    question: "A CADBrasil faz parte do Governo de São Paulo?",
    answer:
      "Não. A CADBrasil é uma empresa privada e independente, sem vínculo ou afiliação com o Governo do Estado de São Paulo, a BEC/SP ou qualquer órgão público.",
  },
  {
    question: "Qual a diferença entre RC e RCS?",
    answer:
      "O RC (Registro Cadastral) é o cadastro completo, que facilita a participação em dispensas e em qualquer modalidade, e é obrigatório para quem negocia medicamentos, correlatos, saneantes e cosméticos de uso médico na BEC/SP. O RCS (Registro Cadastral Simplificado) é mais enxuto e voltado a negociações eletrônicas como dispensa e pregão eletrônico; se vencer um pregão, a empresa apresenta os documentos adicionais exigidos no edital.",
  },
  {
    question: "Quanto tempo leva a análise do CAUFESP?",
    answer:
      "Segundo as orientações oficiais, a análise leva até 20 dias úteis para o RC e até 5 dias úteis para o RCS, contados a partir do recebimento da documentação pela Unidade Cadastradora. Pendências reiniciam o ciclo, por isso a preparação prévia faz diferença.",
  },
  {
    question: "O CAUFESP vale para licitações federais e municipais?",
    answer:
      "O CAUFESP é válido para as licitações da Administração Pública do Estado de São Paulo. Para o Governo Federal, o cadastro de referência é o SICAF; prefeituras podem adotar cadastros e plataformas próprios, conforme cada edital.",
  },
  {
    question: "Pessoa física pode se cadastrar no CAUFESP?",
    answer:
      "Sim. O pré-cadastro permite informar CPF e nome da pessoa física interessada, além da opção por CNPJ e razão social para empresas.",
  },
  {
    question: "Preciso de conta bancária para o cadastro?",
    answer:
      "O cadastro não exige domicílio bancário. Porém, os pagamentos aos fornecedores vencedores em negociações eletrônicas com o Estado de São Paulo são feitos em conta corrente jurídica e ativa no agente financeiro do Estado, informada à unidade compradora.",
  },
  {
    question: "O que acontece se eu não concluir o pré-cadastro?",
    answer:
      "A solicitação inicial que permanecer em elaboração por 90 dias, sem ser enviada para análise, é excluída automaticamente do sistema e o processo precisa recomeçar.",
  },
] as const;

export const caufespFactSheet = [
  { label: "CAUFESP", value: "Cadastro Unificado de Fornecedores do Estado de São Paulo" },
  { label: "Responsável oficial", value: "Governo do Estado de São Paulo — portal bec.sp.gov.br" },
  { label: "Custo do cadastro oficial", value: "Gratuito" },
  { label: "Tipos de registro", value: "RC (Registro Cadastral) e RCS (Registro Cadastral Simplificado)" },
  { label: "Prazo oficial de análise", value: "Até 20 dias úteis (RC) e até 5 dias úteis (RCS)" },
  { label: "Base normativa citada", value: "Decreto estadual nº 52.205/2007 (arts. 18 e 19 do Regulamento)" },
  { label: "Papel da CADBrasil", value: "Assessoria privada: orientação, organização documental e acompanhamento" },
  { label: "Vínculo governamental", value: "Nenhum" },
] as const;
