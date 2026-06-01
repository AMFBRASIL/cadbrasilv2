import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { H as redirect, G as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { r as MessageCircle, i as FileCheckCorner, d as Bot, y as ShieldCheck, m as Headphones, z as Sparkles, a as ArrowRight, X, q as Menu, P as Phone, M as Mail, f as Building2, U as User, H as Handshake, n as Layers, K as Wrench, e as Briefcase, w as Send } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, e as enumType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
const GTM_ID = "GTM-TRVTMS6M";
const GTAG_AW_ID = "AW-16460586067";
const GTAG_GA_ID = "GT-KTPDP2TV";
const BING_UET_ID = "343231769";
const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
const GTAG_INIT_SCRIPT = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GTAG_AW_ID}');
gtag('config', '${GTAG_GA_ID}');`;
const BING_UET_SCRIPT = `(function(w,d,t,r,u){
  var f,n,i;
  w[u]=w[u]||[],f=function(){
    var o={ti:"${BING_UET_ID}", enableAutoSpaTracking: true};
    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad");
  },
  n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){
    var s=this.readyState;
    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null);
  },
  i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i);
})(window,document,"script","https://bat.bing.com/bat.js","uetq");`;
function pushSpaPageView(pathname) {
  if (typeof window === "undefined") return;
  const pageLocation = window.location.href;
  const pageTitle = document.title;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "page_view",
    page_path: pathname,
    page_location: pageLocation,
    page_title: pageTitle
  });
  const gtag = window.gtag;
  if (typeof gtag === "function") {
    gtag("event", "page_view", {
      page_path: pathname,
      page_location: pageLocation,
      page_title: pageTitle
    });
  }
}
function AnalyticsPageView() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirst = reactExports.useRef(true);
  reactExports.useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    pushSpaPageView(pathname);
  }, [pathname]);
  return null;
}
const SITE_ORIGIN = "https://cadbrasil.com.br";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c46af53-295b-4a74-8239-56f32ba6ed77/id-preview-d78bce4c--3b6f7a39-c5c1-4555-ad8d-dccb06150a62.lovable.app-1779886304111.png";
const ROBOTS_INDEX = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
function robotsMetaTags() {
  return [
    { name: "robots", content: ROBOTS_INDEX },
    { name: "googlebot", content: ROBOTS_INDEX }
  ];
}
const SEO_PUBLISHED = "2026-01-15T08:00:00-03:00";
const SEO_MODIFIED = "2026-05-28T12:00:00-03:00";
const appCss = "/assets/styles-DfxODxxh.css";
const BRAND_THEME_COLOR = "#1a2c66";
const DEFAULT_TITLE = "CADBRASIL - Cadastro SICAF e Consultoria em Licitações";
const DEFAULT_DESCRIPTION = "Cadastre sua empresa no SICAF em até 24 horas. Especialistas em cadastramento, regularização e consultoria em licitações públicas.";
function NotFoundComponent() {
  reactExports.useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace("/");
    }, 50);
    return () => window.clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página não encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Redirecionando para a página inicial..." })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "Não foi possível carregar esta página" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Ocorreu um erro temporário. Atualize a página ou volte para o início." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Tentar novamente"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Ir para o início"
        }
      )
    ] })
  ] }) });
}
const Route$u = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: "CADBRASIL" },
      { name: "language", content: "pt-BR" },
      { name: "geo.region", content: "BR" },
      { name: "theme-color", content: BRAND_THEME_COLOR },
      { name: "msapplication-TileColor", content: BRAND_THEME_COLOR },
      ...robotsMetaTags(),
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/` },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@cadbrasil" },
      { name: "twitter:title", content: "CADBRASIL - Cadastro SICAF" },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE }
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: `${SITE_ORIGIN}/` },
      { rel: "sitemap", href: `${SITE_ORIGIN}/sitemap.xml`, type: "application/xml" },
      { rel: "alternate", hrefLang: "pt-BR", href: `${SITE_ORIGIN}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_ORIGIN}/` },
      { rel: "stylesheet", href: appCss }
    ],
    scripts: [
      { children: GTM_SCRIPT },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GTAG_AW_ID}`,
        async: true
      },
      { children: GTAG_INIT_SCRIPT },
      { children: BING_UET_SCRIPT },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_ORIGIN}/#organization`,
              name: "CADBRASIL",
              alternateName: "CADBRASIL",
              url: SITE_ORIGIN,
              logo: OG_IMAGE,
              description: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas.",
              areaServed: "BR",
              knowsAbout: ["SICAF", "Licitações públicas", "Compras.gov.br"],
              sameAs: ["https://cadastro.cadbrasil.com.br"]
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_ORIGIN}/#website`,
              url: SITE_ORIGIN,
              name: "CADBRASIL",
              inLanguage: "pt-BR",
              publisher: { "@id": `${SITE_ORIGIN}/#organization` }
            }
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("noscript", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`,
          height: "0",
          width: "0",
          style: { display: "none", visibility: "hidden" },
          title: "Google Tag Manager"
        }
      ) }),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$u.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnalyticsPageView, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
const Route$t = createFileRoute("/versao2")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  }
});
const g$1 = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia completo: cadastro SICAF passo a passo" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF" }
];
const faqPagesPart1 = [
  {
    slug: "cadastro-sicaf",
    shortTitle: "Cadastro SICAF",
    title: "Cadastro SICAF: guia completo para iniciantes",
    description: "Tudo sobre o primeiro credenciamento no Sistema de Cadastramento Unificado de Fornecedores: documentos, níveis, prazos e como evitar reprovação.",
    quickAnswer: "O cadastro SICAF é o credenciamento obrigatório para fornecedores que desejam vender ao governo federal. O portal oficial é gratuito; o processo exige certificado digital e-CNPJ, documentos societários e certidões por nível de habilitação.",
    metaTitle: "Cadastro SICAF 2026 — Documentos, Prazos e Passo a Passo | CADBRASIL",
    metaDescription: "Como fazer cadastro SICAF do zero: documentação, níveis I a VI, certificado digital, prazos, custos e credenciamento assistido em até 24h. FAQ especializado CADBRASIL.",
    keywords: "cadastro sicaf, como cadastrar sicaf, primeiro cadastro sicaf, documentos cadastro sicaf, credenciamento sicaf, sicaf compras gov br, cadastro fornecedor federal",
    relatedSlugs: ["documentos-sicaf", "certificado-digital-sicaf", "niveis-habilitacao-sicaf", "quanto-custa-sicaf"],
    relatedGuides: [...g$1],
    sections: [
      {
        id: "por-que-cadastrar",
        title: "Por que fazer o cadastro SICAF?",
        paragraphs: [
          "Sem cadastro ativo no SICAF, sua empresa não habilita propostas em licitações federais no Compras.gov.br — mesmo que tenha o melhor preço. O sistema centraliza dados cadastrais, certidões e níveis de habilitação exigidos pela Lei 14.133/2021.",
          "O credenciamento é nacional: um cadastro bem feito serve para pregões em todo o Brasil que utilizem o ecossistema federal de compras."
        ],
        bullets: [
          "Obrigatório para contratos e licitações do Executivo Federal",
          "Adotado por centenas de estados e municípios integrados",
          "Base para emissão do CRC (Certificado de Registro Cadastral)"
        ]
      },
      {
        id: "fluxo-cadastro",
        title: "Fluxo resumido do cadastro",
        paragraphs: [
          "O fluxo típico envolve: obter certificado digital e-CNPJ → reunir documentos → acessar o credenciamento → preencher dados (Nível I) → anexar certidões dos níveis exigidos → corrigir pendências → manter regularidade.",
          "A CADBRASIL valida cada documento antes do envio oficial, reduzindo indeferimento e retrabalho."
        ]
      }
    ],
    items: [
      {
        question: "Como faço o cadastro SICAF do zero?",
        answer: "Acesse o Compras.gov.br com certificado e-CNPJ ou utilize o portal cadastro.cadbrasil.com.br com assessoria CADBRASIL. Envie contrato social, certidões e dados do representante legal conforme os níveis que pretende habilitar."
      },
      {
        question: "Quais documentos preciso para o cadastro SICAF?",
        answer: "CNPJ ativo, contrato social, certidões negativas (federal, estadual, municipal), FGTS, INSS, CNDT, comprovantes do representante legal e certificado digital e-CNPJ. Níveis V e VI exigem balanço e atestados técnicos."
      },
      {
        question: "Quanto tempo leva o cadastro SICAF?",
        answer: "Sozinho, de 7 a 20 dias úteis é comum. Com documentação completa e assessoria CADBRASIL, o credenciamento pode ser concluído em até 24 horas."
      },
      {
        question: "MEI pode se cadastrar no SICAF?",
        answer: "Sim. MEIs participam de licitações compatíveis com seu porte e podem ter tratamento diferenciado previsto na Lei Complementar 123/2006."
      },
      {
        question: "O cadastro SICAF é gratuito?",
        answer: "O credenciamento no portal governamental não tem taxa. Os custos reais são certificado digital, emissão de certidões e eventual assessoria especializada."
      },
      {
        question: "Posso fazer o cadastro SICAF sozinho?",
        answer: "Sim, mas erros em níveis, certidões vencidas ou divergência de dados são a principal causa de reprovação. A assessoria aumenta a taxa de aprovação na primeira submissão."
      }
    ]
  },
  {
    slug: "regularizacao-sicaf",
    shortTitle: "Regularização SICAF",
    title: "Regularização SICAF: como sair da irregularidade",
    description: "Entenda o que é SICAF irregular, como diagnosticar pendências e voltar a licitar com certidões válidas e níveis ativos.",
    quickAnswer: "SICAF irregular significa certidões vencidas, pendências fiscais ou trabalhistas ou dados cadastrais desatualizados. Enquanto irregular, a empresa é bloqueada na habilitação de pregões federais.",
    metaTitle: "Regularização SICAF — Pendências, Certidões e Desbloqueio | CADBRASIL",
    metaDescription: "Como regularizar SICAF irregular: certidões vencidas, CND, FGTS, CNDT e bloqueios no Compras.gov.br. Volte a licitar com suporte CADBRASIL.",
    keywords: "regularizar sicaf, sicaf irregular, pendencia sicaf, certidao vencida sicaf, desbloquear sicaf, regularidade fornecedor governo",
    relatedSlugs: ["atualizacao-sicaf", "renovacao-sicaf", "documentos-sicaf", "crc-sicaf"],
    relatedGuides: [...g$1],
    sections: [
      {
        id: "o-que-e-irregular",
        title: "O que significa SICAF irregular?",
        paragraphs: [
          "A irregularidade não é um “status único”: pode ser CND Federal vencida, FGTS em atraso, CNDT negativa, contrato social desatualizado ou nível de habilitação incompleto para o edital.",
          "O Compras.gov.br consulta essas informações na fase de habilitação. Propostas de empresas irregulares são desclassificadas automaticamente."
        ]
      },
      {
        id: "como-regularizar",
        title: "Passos para regularizar",
        paragraphs: [
          "Diagnóstico completo do cadastro → emissão ou pagamento para obter certidões válidas → atualização no portal → validação dos níveis exigidos → emissão do CRC em situação regular."
        ],
        bullets: [
          "Resolver débitos ou parcelamentos antes de emitir CND",
          "Conferir razão social idêntica em todos os documentos",
          "Renovar certificado digital se estiver expirado"
        ]
      }
    ],
    items: [
      {
        question: "O que é SICAF irregular?",
        answer: "É quando certidões estão vencidas ou há pendência fiscal, trabalhista ou cadastral. A empresa fica impedida de se habilitar em licitações federais até a correção."
      },
      {
        question: "Como sei se meu SICAF está regular?",
        answer: "Consulte o painel no Compras.gov.br ou solicite diagnóstico gratuito à CADBRASIL com relatório de certidões e níveis."
      },
      {
        question: "Quanto tempo leva para regularizar?",
        answer: "Certidões simples podem ser resolvidas no mesmo dia. Casos com débitos ou parcelamentos levam de 24h a alguns dias úteis."
      },
      {
        question: "Posso licitar com SICAF irregular?",
        answer: "Não. O sistema bloqueia ou desclassifica na habilitação, mesmo que você vença o pregão."
      },
      {
        question: "A CADBRASIL paga meus débitos?",
        answer: "Não. Orientamos a regularização fiscal e atualizamos o cadastro assim que as certidões válidas estiverem disponíveis."
      },
      {
        question: "Certidão vencida bloqueia todo o cadastro?",
        answer: "Sim, para os níveis que dependem daquela certidão. Por isso o monitoramento contínuo evita surpresas em editais."
      }
    ]
  },
  {
    slug: "atualizacao-sicaf",
    shortTitle: "Atualização SICAF",
    title: "Atualização SICAF: manutenção contínua do cadastro",
    description: "Renovação proativa de certidões, alertas de vencimento e gestão do cadastro para nunca perder uma licitação por documentação expirada.",
    quickAnswer: "Atualizar o SICAF é manter certidões, dados societários e níveis de habilitação sempre válidos. Certidões federais e trabalhistas costumam vencer em 180 dias — sem renovação, o cadastro fica irregular.",
    metaTitle: "Atualização SICAF — Renovação de Certidões e Monitoramento | CADBRASIL",
    metaDescription: "Como atualizar SICAF: renovação de CND, FGTS, CNDT, alertas de vencimento e monitoramento 24/7 com Assistente CADBRASIL.",
    keywords: "atualizar sicaf, atualizacao sicaf, renovar certidoes sicaf, monitoramento sicaf, gestao cadastro fornecedor",
    relatedSlugs: ["renovacao-sicaf", "regularizacao-sicaf", "assistente-cadbrasil"],
    relatedGuides: [...g$1],
    sections: [
      {
        id: "por-que-atualizar",
        title: "Por que atualizar antes de vencer?",
        paragraphs: [
          "Muitas empresas só descobrem certidão vencida ao enviar proposta em um pregão urgente. A emissão de nova CND ou CRF pode levar horas ou dias — tempo que o edital não espera.",
          "A atualização proativa mantém o CRC válido e reduz risco de desclassificação."
        ]
      },
      {
        id: "automatizacao",
        title: "Atualização com tecnologia CADBRASIL",
        paragraphs: [
          "O Assistente CADBRASIL monitora vencimentos, inicia renovações com antecedência e notifica sua equipe apenas quando há ação necessária (ex.: pagamento de débito)."
        ]
      }
    ],
    items: [
      {
        question: "Com que frequência devo atualizar o SICAF?",
        answer: "Conforme o vencimento de cada certidão — não há data única anual. CND Federal e FGTS costumam valer 180 dias."
      },
      {
        question: "Como funciona a renovação automática?",
        answer: "A CADBRASIL acompanha prazos e renova certidões antes do vencimento, com confirmação ao cliente quando concluído."
      },
      {
        question: "Preciso me preocupar com vencimentos?",
        answer: "Com plano CADBRASIL e Assistente, o controle é centralizado. Você é avisado apenas em casos que exigem sua decisão."
      },
      {
        question: "E se a certidão for negada na renovação?",
        answer: "Identificamos a causa, abrimos chamado prioritário e orientamos a regularização fiscal ou trabalhista necessária."
      },
      {
        question: "Atualização é a mesma coisa que renovação?",
        answer: "Na prática, renovação refere-se a certidões; atualização inclui também dados cadastrais e níveis de habilitação."
      }
    ]
  },
  {
    slug: "assistente-cadbrasil",
    shortTitle: "Assistente CADBRASIL",
    title: "Assistente CADBRASIL: software para gestão do SICAF",
    description: "Aplicativo com IA para monitorar certidões, renovar documentos e dar suporte remoto seguro ao seu cadastro de fornecedor.",
    quickAnswer: "O Assistente CADBRASIL é um aplicativo gratuito para clientes que monitora vencimentos de certidões, automatiza renovações e integra suporte remoto via AnyDesk com autorização do usuário.",
    metaTitle: "Assistente CADBRASIL — App SICAF, IA e Suporte Remoto | CADBRASIL",
    metaDescription: "FAQ do Assistente CADBRASIL: instalação Windows/Mac, segurança LGPD, AnyDesk, monitoramento SICAF e renovação automática de certidões.",
    keywords: "assistente cadbrasil, software sicaf, app sicaf, monitoramento sicaf automatico, IA sicaf, anydesk cadbrasil",
    relatedSlugs: ["atualizacao-sicaf", "cadastro-sicaf"],
    sections: [
      {
        id: "funcionalidades",
        title: "O que o Assistente faz?",
        paragraphs: [
          "Centraliza alertas de vencimento, status de certidões, protocolos de renovação e comunicação com especialistas CADBRASIL — sem precisar acessar dezenas de portais governamentais manualmente."
        ],
        bullets: [
          "Monitoramento 24/7 de certidões e níveis",
          "Renovação proativa com validação por IA",
          "Suporte remoto autorizado (AnyDesk)",
          "Painel web para qualquer dispositivo"
        ]
      },
      {
        id: "seguranca",
        title: "Segurança e privacidade",
        paragraphs: [
          "Criptografia TLS 1.3, conformidade LGPD e acesso remoto somente com clique explícito do usuário. Dados tratados apenas para gestão do cadastro SICAF contratado."
        ]
      }
    ],
    items: [
      {
        question: "O Assistente CADBRASIL é gratuito?",
        answer: "Sim, está incluído nos planos CADBRASIL para gestão contínua do SICAF."
      },
      {
        question: "Em qual sistema operacional roda?",
        answer: "Windows 10+ e macOS 12+. Há também painel web para navegador."
      },
      {
        question: "É seguro?",
        answer: "Sim. LGPD, criptografia e acesso remoto apenas quando você autoriza."
      },
      {
        question: "O AnyDesk vem incluso?",
        answer: "Sim, integrado para suporte técnico com um clique, mediante sua autorização."
      },
      {
        question: "Posso usar em vários computadores?",
        answer: "Sim, múltiplas instalações vinculadas ao mesmo CNPJ no painel."
      }
    ]
  },
  {
    slug: "licitacoes-publicas",
    shortTitle: "Licitações Públicas",
    title: "Licitações públicas e o papel do SICAF",
    description: "Como funcionam licitações no Brasil, Lei 14.133/2021, modalidades e por que o SICAF é requisito para vender ao governo.",
    quickAnswer: "Licitações públicas são procedimentos para o governo contratar bens e serviços com competitividade e transparência. Para o governo federal, o SICAF é o cadastro obrigatório do fornecedor habilitado.",
    metaTitle: "Licitações Públicas — Lei 14.133, Pregão e SICAF | CADBRASIL",
    metaDescription: "Como funcionam licitações públicas no Brasil: Nova Lei 14.133/2021, pregão eletrônico, dispensa, inexigibilidade e exigência do SICAF para fornecedores federais.",
    keywords: "licitacoes publicas, lei 14133, nova lei licitacoes, vender governo, fornecedor governo federal, contratos publicos",
    relatedSlugs: ["pregao-eletronico", "pncp-licitacoes", "sicaf-mei-epp"],
    relatedGuides: [...g$1],
    sections: [
      {
        id: "lei-14133",
        title: "Lei 14.133/2021 em resumo",
        paragraphs: [
          "Substituiu grande parte da Lei 8.666/93 e modernizou compras públicas com foco em digitalização, eficiência e integração de plataformas como Compras.gov.br e PNCP."
        ]
      },
      {
        id: "sicaf-licitacao",
        title: "SICAF na habilitação",
        paragraphs: [
          "Na fase de habilitação, o órgão verifica se o fornecedor está regular no SICAF e se possui os níveis e documentos exigidos pelo edital. Sem isso, não há contrato."
        ],
        bullets: [
          "Pregão eletrônico — modalidade mais comum para bens e serviços comuns",
          "Dispensa e inexigibilidade — ainda exigem cadastro quando aplicável",
          "Tratamento diferenciado para ME/EPP e MEI em diversos casos"
        ]
      }
    ],
    items: [
      {
        question: "O que é a Lei 14.133/2021?",
        answer: "É a Nova Lei de Licitações e Contratos Administrativos, vigente para a maior parte dos entes, com regras atualizadas de procedimentos e contratos."
      },
      {
        question: "O que é pregão eletrônico?",
        answer: "Licitação 100% online com lances em tempo real; é a modalidade mais usada para compras correntes. Exige SICAF regular para fornecedores federais."
      },
      {
        question: "O que é dispensa de licitação?",
        answer: "Compra direta em hipóteses legais (valor, emergência etc.). O fornecedor ainda precisa estar habilitado quando o edital exigir SICAF."
      },
      {
        question: "Posso licitar em qualquer estado?",
        answer: "Com SICAF nacional, sim, em órgãos que utilizem o ecossistema federal ou aceitem o cadastro unificado."
      },
      {
        question: "Microempresas têm vantagens?",
        answer: "Sim: empate ficto, cotas, exclusividade em faixas de valor e benefícios da LC 123/2006, conforme o edital."
      }
    ]
  }
];
const g = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia completo: cadastro SICAF passo a passo" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF" }
];
const faqPagesPart2 = [
  {
    slug: "certificado-digital-sicaf",
    shortTitle: "Certificado Digital",
    title: "Certificado digital e-CNPJ para o SICAF",
    description: "Tudo sobre certificado digital A1 e A3, ICP-Brasil, custos e como usar no Compras.gov.br para credenciamento.",
    quickAnswer: "Pessoas jurídicas precisam de certificado digital e-CNPJ (A1 ou A3) emitido por Autoridade Certificadora credenciada na ICP-Brasil para acessar o Compras.gov.br e concluir o cadastro SICAF.",
    metaTitle: "Certificado Digital SICAF — e-CNPJ A1 e A3 | CADBRASIL",
    metaDescription: "Certificado digital para SICAF: diferença A1 e A3, validade, custo, como emitir e-CNPJ e usar no credenciamento Compras.gov.br.",
    keywords: "certificado digital sicaf, ecnpj sicaf, certificado a1 a3 sicaf, icp brasil fornecedor governo, certificado digital compras gov",
    relatedSlugs: ["cadastro-sicaf", "documentos-sicaf", "compras-gov-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "tipos",
        title: "A1 ou A3: qual escolher?",
        paragraphs: [
          "A1 fica armazenado no computador (arquivo) — prático para equipes remotas. A3 usa token ou cartão — comum em empresas com política de segurança mais rígida. Ambos são aceitos no SICAF."
        ],
        bullets: [
          "A1: validade típica de 1 ano, renovação online",
          "A3: validade até 3 anos, exige dispositivo físico",
          "Deve estar vinculado ao CNPJ correto da empresa"
        ]
      },
      {
        id: "uso-sicaf",
        title: "Uso no credenciamento",
        paragraphs: [
          "O certificado assina declarações, autentica acesso ao portal e garante validade jurídica das informações enviadas ao governo. Certificado expirado ou de outro CNPJ impede o cadastro."
        ]
      }
    ],
    items: [
      {
        question: "Certificado digital é obrigatório para SICAF?",
        answer: "Sim, para pessoa jurídica no credenciamento federal via Compras.gov.br."
      },
      {
        question: "Quanto custa o e-CNPJ?",
        answer: "Varia por AC certificadora, em média R$ 200 a R$ 600/ano para A1."
      },
      {
        question: "Posso usar certificado de sócio em vez de e-CNPJ?",
        answer: "Não para operações da empresa. O credenciamento exige e-CNPJ da pessoa jurídica."
      },
      {
        question: "O que fazer se o certificado expirar?",
        answer: "Renove antes do vencimento. Com certificado vencido você perde acesso ao portal."
      },
      {
        question: "A CADBRASIL emite certificado?",
        answer: "Orientamos a escolha e o processo com parceiros; a emissão é feita pela AC escolhida."
      }
    ]
  },
  {
    slug: "niveis-habilitacao-sicaf",
    shortTitle: "Níveis SICAF",
    title: "Níveis de habilitação do SICAF (I a VI)",
    description: "Explicação de cada nível de cadastramento, documentos associados e como saber quais níveis seu edital exige.",
    quickAnswer: "O SICAF divide a habilitação em seis níveis: I credenciamento, II jurídico, III fiscal federal, IV trabalhista/previdenciário, V econômico-financeiro e VI técnico. Cada edital exige combinações diferentes.",
    metaTitle: "Níveis SICAF I a VI — Habilitação Completa | CADBRASIL",
    metaDescription: "Níveis de cadastramento SICAF explicados: credenciamento, jurídico, fiscal, trabalhista, econômico-financeiro e qualificação técnica. Documentos por nível.",
    keywords: "niveis sicaf, nivel 1 sicaf, habilitacao sicaf, qualificacao tecnica sicaf, nivel economico financeiro sicaf",
    relatedSlugs: ["cadastro-sicaf", "documentos-sicaf", "crc-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "mapa-niveis",
        title: "Mapa dos níveis",
        paragraphs: [
          "Cadastrar apenas o Nível I é um erro frequente: muitos editais exigem III e IV no mínimo; obras e serviços especializados podem pedir V e VI."
        ],
        bullets: [
          "Nível I — dados cadastrais e credenciamento",
          "Nível II — contrato social e documentos societários",
          "Nível III — CND Federal e regularidade tributária",
          "Nível IV — FGTS, INSS e CNDT",
          "Nível V — balanços e índices financeiros",
          "Nível VI — atestados de capacidade técnica"
        ]
      }
    ],
    items: [
      {
        question: "Quantos níveis existem no SICAF?",
        answer: "Seis níveis principais de habilitação, além de linhas de fornecimento (CATMAT/CATSER) quando aplicável."
      },
      {
        question: "Qual nível é obrigatório para todos?",
        answer: "O Nível I (credenciamento) é a porta de entrada; os demais dependem do objeto e do edital."
      },
      {
        question: "Posso licitar só com Nível I?",
        answer: "Apenas em editais que exijam somente credenciamento básico — situação rara em contratos relevantes."
      },
      {
        question: "Como saber quais níveis o edital exige?",
        answer: "Leia o termo de referência e a seção de habilitação. A CADBRASIL analisa editais em consultoria."
      },
      {
        question: "Nível V exige contador?",
        answer: "Documentos contábeis devem seguir normas; muitas empresas usam contador para balanço e DRE assinados."
      }
    ]
  },
  {
    slug: "crc-sicaf",
    shortTitle: "CRC SICAF",
    title: "CRC — Certificado de Registro Cadastral no SICAF",
    description: "O que é o CRC, quando emitir, como comprovar regularidade e por que compradores públicos consultam esse certificado.",
    quickAnswer: "O CRC (Certificado de Registro Cadastral) comprova que a empresa está cadastrada no SICAF e, quando emitido em situação regular, atesta que os níveis exigidos estão ativos sem pendências bloqueantes.",
    metaTitle: "CRC SICAF — Certificado de Registro Cadastral | CADBRASIL",
    metaDescription: "O que é CRC no SICAF, como emitir, validade, diferença para certidões e quando órgãos públicos exigem o certificado de registro cadastral.",
    keywords: "crc sicaf, certificado registro cadastral, comprovante sicaf regular, emitir crc sicaf",
    relatedSlugs: ["regularizacao-sicaf", "cadastro-sicaf", "niveis-habilitacao-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "para-que-serve",
        title: "Para que serve o CRC?",
        paragraphs: [
          "É o comprovante oficial de situação cadastral no momento da emissão. Útil em habilitações, contratos e respostas rápidas a órgãos que solicitam comprovação formal."
        ]
      },
      {
        id: "quando-emitir",
        title: "Quando emitir",
        paragraphs: [
          "Emita após todos os níveis necessários estarem ativos e certidões válidas. Se uma certidão vencer depois, o CRC anterior não substitui a necessidade de regularidade atual."
        ]
      }
    ],
    items: [
      {
        question: "O que é CRC no SICAF?",
        answer: "Certificado de Registro Cadastral que comprova cadastro e situação regular no sistema federal de fornecedores."
      },
      {
        question: "CRC tem validade?",
        answer: "Reflete o momento da emissão. A regularidade depende de certidões continuamente válidas."
      },
      {
        question: "Como emitir o CRC?",
        answer: "Pelo painel do fornecedor no Compras.gov.br, com cadastro e níveis em dia."
      },
      {
        question: "CRC substitui certidões no edital?",
        answer: "Não. O edital pode pedir certidões específicas além da consulta ao SICAF/CRC."
      }
    ]
  },
  {
    slug: "compras-gov-sicaf",
    shortTitle: "Compras.gov.br",
    title: "Compras.gov.br e integração com o SICAF",
    description: "Como o portal federal de compras utiliza o SICAF, onde credenciar fornecedor e diferença entre comprar e vender no governo.",
    quickAnswer: "O Compras.gov.br é o portal de licitações e gestão de contratos do governo federal. O módulo de fornecedores integra o SICAF como base de habilitação unificada.",
    metaTitle: "Compras.gov.br SICAF — Portal e Credenciamento | CADBRASIL",
    metaDescription: "Compras.gov.br e SICAF: como acessar, credenciar fornecedor, consultar regularidade e participar de pregões federais.",
    keywords: "compras.gov.br sicaf, portal compras governo, credenciamento compras gov, sicaf fornecedor federal",
    relatedSlugs: ["cadastro-sicaf", "certificado-digital-sicaf", "pregao-eletronico"],
    relatedGuides: [...g],
    sections: [
      {
        id: "portal",
        title: "O que é o Compras.gov.br",
        paragraphs: [
          "Centraliza pregões, dispensas, atas e contratos do Executivo Federal. Fornecedores habilitados no SICAF utilizam o mesmo ecossistema para enviar propostas e documentos."
        ]
      }
    ],
    items: [
      {
        question: "SICAF e Compras.gov.br são a mesma coisa?",
        answer: "Não. SICAF é o cadastro/habilitação; Compras.gov.br é o portal operacional de licitações que utiliza o cadastro."
      },
      {
        question: "Como acesso como fornecedor?",
        answer: "Com certificado e-CNPJ no ambiente de fornecedor do portal oficial."
      },
      {
        question: "Preciso de cadastro separado por órgão?",
        answer: "Não para o federal unificado — um SICAF regular serve para órgãos integrados."
      }
    ]
  },
  {
    slug: "sicaf-mei-epp",
    shortTitle: "MEI, ME e EPP",
    title: "SICAF para MEI, ME e EPP",
    description: "Regras especiais, documentação simplificada e vantagens em licitações para micro e pequenas empresas.",
    quickAnswer: "MEI, microempresas e empresas de pequeno porte podem se credenciar no SICAF com documentação compatível ao porte e usufruir de tratamento diferenciado em licitações (LC 123/2006).",
    metaTitle: "SICAF MEI e EPP — Microempresa em Licitações | CADBRASIL",
    metaDescription: "Cadastro SICAF para MEI, ME e EPP: documentos, vantagens em pregões, empate ficto e credenciamento com assessoria CADBRASIL.",
    keywords: "sicaf mei, sicaf microempresa, sicaf epp, mei licitacao governo, pequena empresa sicaf",
    relatedSlugs: ["cadastro-sicaf", "licitacoes-publicas", "pregao-eletronico"],
    relatedGuides: [...g],
    sections: [
      {
        id: "vantagens",
        title: "Vantagens para pequenos negócios",
        paragraphs: [
          "A Lei Complementar 123 garante mecanismos como empate ficto, preferência em faixas de valor e simplificações procedimentais — desde que o SICAF esteja regular."
        ],
        bullets: [
          "MEI: documentação reduzida em diversos credenciamentos",
          "ME/EPP: cotas e exclusividade em licitações específicas",
          "Regularização tardia da documentação em alguns casos"
        ]
      }
    ],
    items: [
      {
        question: "MEI pode ter SICAF?",
        answer: "Sim, quando o edital e o objeto permitirem participação de MEI."
      },
      {
        question: "MEI tem menos níveis?",
        answer: "Depende do edital; fiscal e trabalhista ainda são exigidos quando aplicável."
      },
      {
        question: "O que é empate ficto?",
        answer: "Mecanismo que favorece ME/EPP quando empata com empresa maior — previsto na LC 123."
      },
      {
        question: "EPP precisa de balanço?",
        answer: "Nível V pode ser exigido conforme valor e complexidade do edital."
      }
    ]
  },
  {
    slug: "renovacao-sicaf",
    shortTitle: "Renovação SICAF",
    title: "Renovação SICAF: manter o cadastro sempre válido",
    description: "Processo de renovação de certidões, prazos e serviço assistido para nunca ficar irregular.",
    quickAnswer: "Renovar o SICAF é atualizar certidões e dados antes do vencimento. Não é um boleto anual único — cada documento tem prazo próprio (muitos em 180 dias).",
    metaTitle: "Renovação SICAF 2026 — Certidões e Prazos | CADBRASIL",
    metaDescription: "Como renovar SICAF: certidões, FGTS, CND Federal, prazos, renovação assistida e alertas CADBRASIL para fornecedores federais.",
    keywords: "renovacao sicaf, renovar sicaf, sicaf vencido, manter sicaf ativo, renovar certidoes fornecedor",
    relatedSlugs: ["atualizacao-sicaf", "regularizacao-sicaf", "quanto-custa-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "diferenca",
        title: "Renovação x atualização",
        paragraphs: [
          "Renovação foca em certidões com prazo de validade. Atualização inclui alterações societárias, endereço, CNAE e novos níveis de habilitação."
        ]
      }
    ],
    items: [
      {
        question: "O SICAF vence todo ano?",
        answer: "O cadastro não vence; as certidões sim. Por isso a renovação é contínua."
      },
      {
        question: "Quanto tempo leva a renovação assistida?",
        answer: "Certidões simples: mesmo dia ou 24–48h. Casos com débito dependem da regularização fiscal."
      },
      {
        question: "Posso renovar com certidão vencida?",
        answer: "É preciso emitir nova certidão válida; enquanto vencida, o cadastro está irregular."
      },
      {
        question: "A CADBRASIL renova automaticamente?",
        answer: "Sim, em planos com monitoramento e Assistente CADBRASIL."
      }
    ]
  },
  {
    slug: "quanto-custa-sicaf",
    shortTitle: "Quanto custa",
    title: "Quanto custa o SICAF? Custos reais em 2026",
    description: "Taxa oficial gratuita, custos de certificado digital, certidões e assessoria — comparativo transparente.",
    quickAnswer: "O credenciamento oficial no governo é gratuito. Custos típicos: certificado digital e-CNPJ (R$ 200–600/ano), emissão de certidões e, opcionalmente, assessoria para agilizar e evitar reprovação.",
    metaTitle: "Quanto Custa o SICAF? Preços e Custos 2026 | CADBRASIL",
    metaDescription: "Quanto custa fazer SICAF: taxa zero no governo, preço certificado digital, certidões e comparativo DIY vs assessoria CADBRASIL em até 24h.",
    keywords: "quanto custa sicaf, preco sicaf, valor cadastro sicaf, sicaf e gratuito, custo certificado digital sicaf",
    relatedSlugs: ["cadastro-sicaf", "certificado-digital-sicaf", "renovacao-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "tabela-custos",
        title: "Comparativo de custos",
        paragraphs: [
          "Muitas buscas por 'quanto custa SICAF' esperam uma taxa governamental — ela não existe. O investimento está em conformidade documental e tempo da equipe."
        ],
        bullets: [
          "Taxa oficial de credenciamento: R$ 0",
          "Certificado e-CNPJ: variável por AC",
          "Certidões: em geral gratuitas se não houver débitos",
          "Assessoria CADBRASIL: sob consulta, com entrega acelerada"
        ]
      }
    ],
    items: [
      {
        question: "O governo cobra para cadastrar no SICAF?",
        answer: "Não há taxa de credenciamento federal no portal oficial."
      },
      {
        question: "Qual o maior custo do processo?",
        answer: "Geralmente o certificado digital e o tempo interno para reunir documentos corretos."
      },
      {
        question: "Assessoria vale a pena?",
        answer: "Para quem quer licitar rápido sem retrabalho, a assessoria reduz risco de reprovação e perda de editais."
      },
      {
        question: "Há custo para manter o SICAF?",
        answer: "Renovação de certidões e certificado digital; assessoria de monitoramento é opcional."
      }
    ]
  },
  {
    slug: "documentos-sicaf",
    shortTitle: "Documentos SICAF",
    title: "Documentos obrigatórios para o SICAF",
    description: "Checklist completo de certidões, contrato social, certificado digital e documentos por nível de habilitação.",
    quickAnswer: "Os documentos do SICAF incluem CNPJ, contrato social, certidões negativas (federal, estadual, municipal), FGTS, INSS, CNDT, certificado e-CNPJ e, conforme o edital, balanço e atestados técnicos.",
    metaTitle: "Documentos SICAF — Checklist Completo 2026 | CADBRASIL",
    metaDescription: "Lista de documentos para SICAF: certidões, contrato social, e-CNPJ, FGTS, CNDT e exigências por nível I a VI. Checklist CADBRASIL.",
    keywords: "documentos sicaf, lista documentos sicaf, certidoes sicaf, papelada sicaf, checklist sicaf",
    relatedSlugs: ["cadastro-sicaf", "niveis-habilitacao-sicaf", "certificado-digital-sicaf"],
    relatedGuides: [...g],
    sections: [
      {
        id: "checklist",
        title: "Checklist principal",
        paragraphs: [
          "Antes de enviar, confira validade (em dias), razão social idêntica e CNPJ em todos os arquivos. Divergências geram indeferimento automático."
        ],
        bullets: [
          "Cartão CNPJ e contrato social atualizado",
          "CND Federal (RFB/PGFN), estadual e municipal",
          "CRF (FGTS), INSS e CNDT",
          "RG/CPF e procuração do representante legal",
          "Certificado digital e-CNPJ válido"
        ]
      }
    ],
    items: [
      {
        question: "Qual a validade das certidões?",
        answer: "CND Federal e FGTS costumam ter 180 dias; confirme na emissão."
      },
      {
        question: "Preciso de balanço patrimonial?",
        answer: "Para Nível V e editais que exijam qualificação econômico-financeira."
      },
      {
        question: "Atestado técnico entra em qual nível?",
        answer: "Nível VI — qualificação técnica."
      },
      {
        question: "Documentos podem ser digitalizados?",
        answer: "Sim, em PDF conforme exigências do portal; qualidade e legibilidade importam."
      }
    ]
  },
  {
    slug: "pncp-licitacoes",
    shortTitle: "PNCP",
    title: "PNCP e SICAF: qual a diferença?",
    description: "Portal Nacional de Contratações Públicas x cadastro de fornecedor — como se complementam.",
    quickAnswer: "O PNCP centraliza informações de licitações e contratos de todos os entes. O SICAF é o cadastro/habilitação do fornecedor federal. São sistemas complementares no ecossistema de compras públicas.",
    metaTitle: "PNCP e SICAF — Diferenças e Integração | CADBRASIL",
    metaDescription: "PNCP vs SICAF: o que é cada portal, obrigatoriedade para fornecedor, transparência de licitações e cadastro no governo federal.",
    keywords: "pncp sicaf, portal nacional contratacoes, diferenca pncp sicaf, pncp fornecedor",
    relatedSlugs: ["licitacoes-publicas", "compras-gov-sicaf", "pregao-eletronico"],
    relatedGuides: [...g],
    sections: [
      {
        id: "comparativo",
        title: "Comparativo rápido",
        paragraphs: [
          "Fornecedores buscam oportunidades no PNCP e habilitam-se via SICAF para contratar com o federal. Estados podem ter regras próprias além do cadastro federal."
        ],
        bullets: [
          "PNCP — transparência e divulgação de contratações",
          "SICAF — qualificação cadastral do fornecedor federal",
          "Compras.gov.br — operação de pregões federais"
        ]
      }
    ],
    items: [
      {
        question: "Cadastro no PNCP substitui o SICAF?",
        answer: "Não para fornecedor federal. São finalidades diferentes."
      },
      {
        question: "Onde publicam editais federais?",
        answer: "Compras.gov.br e informações também no PNCP."
      },
      {
        question: "Preciso de conta no PNCP para vender?",
        answer: "Consulte o edital; a habilitação federal passa pelo SICAF."
      }
    ]
  },
  {
    slug: "pregao-eletronico",
    shortTitle: "Pregão Eletrônico",
    title: "Pregão eletrônico e exigência do SICAF",
    description: "Como funciona o pregão online, fases do processo e papel do cadastro regular na habilitação.",
    quickAnswer: "O pregão eletrônico é a modalidade mais usada para bens e serviços comuns, realizado 100% online com lances em tempo real. Fornecedores federais precisam de SICAF regular na habilitação.",
    metaTitle: "Pregão Eletrônico e SICAF — Como Participar | CADBRASIL",
    metaDescription: "Pregão eletrônico: fases, SICAF obrigatório, habilitação, lances e dicas para fornecedores no Compras.gov.br.",
    keywords: "pregao eletronico sicaf, como participar pregao, licitacao online governo, comprasnet sicaf",
    relatedSlugs: ["licitacoes-publicas", "compras-gov-sicaf", "sicaf-mei-epp"],
    relatedGuides: [...g],
    sections: [
      {
        id: "fases",
        title: "Fases do pregão eletrônico",
        paragraphs: [
          "Publicação do edital → cadastro de proposta → sessão de lances → classificação → habilitação (SICAF e documentos) → adjudicação e contrato."
        ],
        bullets: [
          "Proposta inicial e lances em tempo real",
          "Habilitação verifica SICAF e documentação do edital",
          "ME/EPP podem ter critérios diferenciados"
        ]
      }
    ],
    items: [
      {
        question: "Posso participar sem SICAF?",
        answer: "Não em pregões federais que exijam cadastro unificado de fornecedores."
      },
      {
        question: "Quando o SICAF é verificado?",
        answer: "Na fase de habilitação, após a disputa de preços."
      },
      {
        question: "Posso enviar proposta com SICAF irregular?",
        answer: "O portal pode aceitar proposta, mas a habilitação será negada."
      },
      {
        question: "Como a CADBRASIL ajuda em pregões?",
        answer: "Mantemos seu cadastro regular e oferecemos consultoria para análise de editais e propostas."
      }
    ]
  }
];
const faqCategories = [...faqPagesPart1, ...faqPagesPart2];
function getFaqCategory(slug) {
  return faqCategories.find((c) => c.slug === slug);
}
const BASE_URL = "https://cadbrasil.com.br";
const Route$s = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/cadastro-sicaf-passo-a-passo", changefreq: "weekly", priority: "0.98" },
          { path: "/como-regularizar-sicaf-empresa", changefreq: "weekly", priority: "0.94" },
          { path: "/cadastro-sicaf-licitacao-publica", changefreq: "weekly", priority: "0.94" },
          { path: "/documentos-necessarios-cadastro-sicaf", changefreq: "weekly", priority: "0.94" },
          { path: "/como-atualizar-certificados-sicaf", changefreq: "weekly", priority: "0.94" },
          { path: "/cadastro-sicaf", changefreq: "weekly", priority: "0.92" },
          { path: "/credenciamento", changefreq: "weekly", priority: "0.9" },
          { path: "/renovacao-sicaf", changefreq: "weekly", priority: "0.9" },
          { path: "/empresa-inapta", changefreq: "weekly", priority: "0.86" },
          { path: "/emitir-crc", changefreq: "weekly", priority: "0.9" },
          { path: "/regularidade-fiscal", changefreq: "weekly", priority: "0.9" },
          { path: "/como-fazer-cadastro-no-sicaf", changefreq: "weekly", priority: "0.9" },
          { path: "/plataforma-digital", changefreq: "weekly", priority: "0.85" },
          { path: "/como-cadastrar-empresa-sicaf", changefreq: "weekly", priority: "0.9" },
          { path: "/autoatendimento-sicaf", changefreq: "weekly", priority: "0.85" },
          { path: "/sicaf-digital", changefreq: "weekly", priority: "0.88" },
          { path: "/sicaf-cadastro-unificado-de-fornecedores", changefreq: "weekly", priority: "0.88" },
          { path: "/credenciamento-sicaf-digital", changefreq: "weekly", priority: "0.88" },
          { path: "/o-que-e-sicaf", changefreq: "monthly", priority: "0.9" },
          { path: "/como-funciona", changefreq: "monthly", priority: "0.9" },
          { path: "/assistente", changefreq: "monthly", priority: "0.9" },
          { path: "/beneficios", changefreq: "monthly", priority: "0.8" },
          { path: "/faq", changefreq: "weekly", priority: "0.85" },
          ...faqCategories.map((c) => ({
            path: `/faq/${c.slug}`,
            changefreq: "weekly",
            priority: "0.8"
          }))
        ];
        const nowIso = (/* @__PURE__ */ new Date()).toISOString();
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            `    <lastmod>${nowIso}</lastmod>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const baseFaqs = [
  {
    question: "O SICAF é obrigatório para vender ao governo?",
    answer: "Para licitações federais, sim. Sem SICAF regular, a empresa não conclui a fase de habilitação em pregões no ecossistema Compras.gov.br."
  },
  {
    question: "Quanto tempo leva para concluir o processo?",
    answer: "Com documentação completa e sem pendências fiscais complexas, o fluxo assistido pela CADBRASIL pode ser concluído em até 24 horas."
  },
  {
    question: "A CADBRASIL cuida só do cadastro inicial?",
    answer: "Não. Também fazemos regularização, atualização de certidões, renovação contínua e monitoramento automático para evitar bloqueios."
  }
];
const landingPages = {
  "/cadastro-sicaf": {
    path: "/cadastro-sicaf",
    shortTitle: "Cadastro SICAF",
    metaTitle: "Cadastro SICAF 2026 — Guia Completo para Fornecedores | CADBRASIL",
    metaDescription: "Cadastro SICAF completo para empresas: documentos, níveis de habilitação, certificado digital, prazo e emissão de CRC para licitações federais.",
    keywords: "cadastro sicaf, cadastrar no sicaf, credenciamento sicaf 2026, documentos sicaf, fornecedor governo federal, compras.gov.br",
    eyebrow: "Cadastro oficial",
    title: "Cadastro SICAF",
    highlight: "do zero ao CRC",
    description: "Fluxo completo para cadastrar sua empresa no SICAF com segurança jurídica, validação documental e acompanhamento até habilitação regular.",
    quickAnswer: "O cadastro SICAF habilita sua empresa para participar de licitações federais. Exige e-CNPJ, dados societários consistentes e certidões válidas por nível.",
    sections: [
      {
        id: "etapas-cadastro",
        title: "Etapas críticas do cadastro",
        paragraphs: [
          "O processo correto envolve credenciamento inicial, habilitação jurídica, regularidade fiscal/trabalhista e validação econômico-financeira/técnica conforme o edital.",
          "Erros de estrutura documental ou escolha incompleta de níveis costumam gerar indeferimento e atraso em oportunidades de compra pública."
        ],
        bullets: [
          "Onboarding com checklist por CNPJ",
          "Validação por nível de habilitação",
          "Correção de pendências antes do envio oficial",
          "Emissão de CRC com cadastro regular"
        ]
      },
      {
        id: "tempo-risco",
        title: "Prazo, risco e desempenho em licitações",
        paragraphs: [
          "Empresas que tratam o SICAF como projeto estratégico reduzem perdas por inabilitação e melhoram taxa de aproveitamento em pregões."
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/credenciamento": {
    path: "/credenciamento",
    shortTitle: "Credenciamento SICAF",
    metaTitle: "Credenciamento SICAF 2026 — Cadastro de Fornecedor Federal | CADBRASIL",
    metaDescription: "Guia completo de credenciamento SICAF para fornecedores: documentos, certificado digital, níveis de habilitação e prazo de liberação.",
    keywords: "credenciamento sicaf, credenciar empresa no sicaf, cadastro fornecedor federal, compras gov credenciamento, habilitacao sicaf",
    eyebrow: "Credenciamento oficial",
    title: "Credenciamento SICAF",
    highlight: "rápido e seguro",
    description: "Estruturamos o credenciamento da sua empresa no SICAF com validação documental, checklist por CNPJ e emissão de CRC em fluxo assistido.",
    quickAnswer: "Credenciamento SICAF é o processo de habilitar sua empresa como fornecedora no sistema federal. Exige e-CNPJ, dados societários e certidões válidas.",
    sections: [
      {
        id: "como-funciona",
        title: "Como funciona o credenciamento",
        paragraphs: [
          "O credenciamento começa no Compras.gov.br com autenticação por certificado digital e-CNPJ, seguido pelo preenchimento do Nível I e envio dos documentos dos demais níveis exigidos.",
          "Empresas com divergência de dados cadastrais, certidões vencidas ou classificação incompleta de níveis tendem a ser desclassificadas em editais relevantes."
        ]
      },
      {
        id: "o-que-e-necessario",
        title: "O que sua empresa precisa ter",
        paragraphs: [
          "A base mínima inclui CNPJ ativo, contrato social atualizado, representante legal válido e certidões fiscais/trabalhistas dentro do prazo."
        ],
        bullets: [
          "Certificado digital e-CNPJ A1 ou A3",
          "CND Federal, FGTS e CNDT válidas",
          "Contrato social sem desatualização",
          "Níveis de habilitação alinhados ao edital-alvo"
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/renovacao-sicaf": {
    path: "/renovacao-sicaf",
    shortTitle: "Renovação SICAF",
    metaTitle: "Renovação SICAF — Certidões e Regularidade Contínua | CADBRASIL",
    metaDescription: "Renove seu SICAF com antecedência: certidões, regularização fiscal e monitoramento para não perder licitações por vencimento.",
    keywords: "renovacao sicaf, renovar sicaf, certidoes vencidas sicaf, atualizar cadastro sicaf, regularidade fornecedor governo",
    eyebrow: "Renovação contínua",
    title: "Renovação SICAF",
    highlight: "sem riscos de bloqueio",
    description: "Renovamos certidões e mantemos seu cadastro regular com monitoramento proativo para sua empresa não perder oportunidades por documentação vencida.",
    quickAnswer: "A renovação SICAF não é anual fixa; ela ocorre conforme o vencimento de cada certidão. Sem renovação, o cadastro fica irregular.",
    sections: [
      {
        id: "por-que-renovar",
        title: "Por que renovar antes do vencimento",
        paragraphs: [
          "A maioria das perdas em licitações acontece por descuido operacional: certidão vence, proposta é enviada e a habilitação reprova na etapa final.",
          "Renovar com antecedência evita urgência, retrabalho e exposição da equipe a riscos de desclassificação por detalhes documentais."
        ]
      },
      {
        id: "renovacao-cadbrasil",
        title: "Renovação com tecnologia CADBRASIL",
        paragraphs: [
          "Usamos monitoramento automatizado de vencimentos e fila de renovação por prioridade de edital para manter sua empresa apta durante todo o mês."
        ],
        bullets: [
          "Alertas por vencimento e pendência",
          "Validação automática + revisão humana",
          "Painel com status de cada certidão"
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/empresa-inapta": {
    path: "/empresa-inapta",
    shortTitle: "Empresa Inapta",
    metaTitle: "Empresa Inapta no SICAF — Como Regularizar e Voltar a Licitar | CADBRASIL",
    metaDescription: "Entenda o status de empresa inapta, impactos no SICAF e como regularizar situação fiscal/cadastral para retomar participação em licitações.",
    keywords: "empresa inapta sicaf, cnpj inapto licitacao, regularizar empresa inapta, bloquear licitacao sicaf, cnpj inapto receita",
    eyebrow: "Status crítico",
    title: "Empresa inapta",
    highlight: "como recuperar elegibilidade",
    description: "Diagnóstico e plano de ação para sair do status inapto, regularizar documentação e restabelecer habilitação para contratos públicos.",
    quickAnswer: "Empresa inapta geralmente indica irregularidade cadastral/fiscal grave no CNPJ. Sem regularização, o SICAF não mantém habilitação válida para licitações.",
    sections: [
      {
        id: "o-que-significa",
        title: "O que significa empresa inapta",
        paragraphs: [
          "Na prática, o CNPJ inapto compromete toda a cadeia de habilitação: emissão de certidões, consistência cadastral e aceitação no processo licitatório.",
          "É um problema de compliance que precisa ser tratado na origem para evitar bloqueios recorrentes."
        ]
      },
      {
        id: "rota-regularizacao",
        title: "Rota de regularização",
        paragraphs: [
          "Mapeamos causa raiz (fiscal, societária ou trabalhista), priorizamos documentos críticos e executamos a revalidação do cadastro após normalização."
        ],
        bullets: [
          "Diagnóstico técnico de inconsistências",
          "Regularização junto aos órgãos competentes",
          "Revisão documental para novo envio",
          "Reativação da trilha de habilitação SICAF"
        ]
      }
    ],
    faqs: [
      {
        question: "Empresa inapta pode participar de licitação?",
        answer: "Não de forma segura. O status inapto costuma inviabilizar certidões e comprometer a habilitação, levando à desclassificação."
      },
      {
        question: "Quanto tempo leva para regularizar empresa inapta?",
        answer: "Depende da causa. Casos simples podem ser resolvidos em poucos dias; pendências estruturais exigem plano fiscal/societário mais amplo."
      },
      {
        question: "Depois de regularizar, preciso atualizar o SICAF?",
        answer: "Sim. Após normalizar o CNPJ, é necessário atualizar dados e certidões no SICAF para recuperar status de habilitação."
      }
    ]
  },
  "/emitir-crc": {
    path: "/emitir-crc",
    shortTitle: "Emitir CRC",
    metaTitle: "Emitir CRC no SICAF — Certificado de Registro Cadastral | CADBRASIL",
    metaDescription: "Aprenda como emitir CRC no SICAF, requisitos de regularidade e como usar o Certificado de Registro Cadastral em licitações públicas.",
    keywords: "emitir crc sicaf, certificado registro cadastral, crc fornecedor governo, como tirar crc, comprovante sicaf",
    eyebrow: "Comprovação de cadastro",
    title: "Emitir CRC",
    highlight: "com cadastro regular",
    description: "Passo a passo para emissão do Certificado de Registro Cadastral e validação da situação da empresa antes de disputar editais.",
    quickAnswer: "O CRC no SICAF comprova a situação cadastral da empresa. Para emitir com valor prático em licitações, os níveis e certidões devem estar atualizados.",
    sections: [
      {
        id: "crc-na-pratica",
        title: "CRC na prática",
        paragraphs: [
          "O CRC é o retrato do cadastro no momento da emissão. Se documentos vencerem depois, a empresa pode voltar a ficar irregular, mesmo com CRC antigo.",
          "Por isso, emissão de CRC e gestão contínua de certidões precisam caminhar juntas."
        ]
      },
      {
        id: "requisitos-emissao",
        title: "Requisitos para emitir sem risco",
        paragraphs: [
          "Antes de gerar o certificado, valide níveis exigidos no edital, certidões vigentes e consistência de dados societários."
        ],
        bullets: [
          "Níveis de habilitação compatíveis com o edital",
          "Certidões fiscais e trabalhistas válidas",
          "Dados cadastrais atualizados",
          "Conferência final antes da sessão de pregão"
        ]
      }
    ],
    faqs: [
      {
        question: "CRC substitui todos os documentos do edital?",
        answer: "Não necessariamente. Muitos editais ainda exigem documentos complementares além da consulta ao SICAF/CRC."
      },
      {
        question: "Qual validade do CRC?",
        answer: "Ele reflete a situação do momento da emissão. A regularidade depende do vencimento contínuo das certidões."
      },
      {
        question: "Posso emitir CRC com pendência fiscal?",
        answer: "Em geral, não com status regular. Pendências afetam a utilidade do certificado na habilitação."
      }
    ]
  },
  "/regularidade-fiscal": {
    path: "/regularidade-fiscal",
    shortTitle: "Regularidade Fiscal",
    metaTitle: "Regularidade Fiscal no SICAF — CND, FGTS e CNDT em Dia | CADBRASIL",
    metaDescription: "Garanta regularidade fiscal no SICAF: certidões federais, FGTS, CNDT e estratégia para manter habilitação ativa em licitações.",
    keywords: "regularidade fiscal sicaf, cnd federal sicaf, fgts sicaf, cndt licitacao, certidoes fornecedor governo",
    eyebrow: "Compliance fiscal",
    title: "Regularidade fiscal",
    highlight: "para licitar sem bloqueio",
    description: "Gestão de certidões e pendências fiscais para manter sua empresa apta em pregões e contratos com o poder público.",
    quickAnswer: "Regularidade fiscal é requisito central de habilitação no SICAF. Sem certidões válidas (federal, FGTS, CNDT e outras), a empresa é desclassificada.",
    sections: [
      {
        id: "documentos-fiscais",
        title: "Certidões que sustentam a habilitação",
        paragraphs: [
          "A robustez do cadastro depende de um ciclo contínuo de emissão, conferência e renovação de certidões. Não é tarefa pontual, é rotina de compliance."
        ],
        bullets: [
          "CND Federal (RFB/PGFN)",
          "CRF/FGTS",
          "CNDT",
          "Certidões estaduais e municipais (quando exigidas)"
        ]
      },
      {
        id: "gestao-continuada",
        title: "Como evitar queda de regularidade",
        paragraphs: [
          "Antecipar vencimentos e tratar pendências rapidamente evita que a empresa fique inapta no momento mais crítico: abertura de propostas e habilitação."
        ]
      }
    ],
    faqs: [
      {
        question: "Uma certidão vencida já bloqueia licitação?",
        answer: "Sim, pode bloquear a habilitação conforme exigência do edital e consultas automáticas de regularidade."
      },
      {
        question: "Com parcelamento ativo eu fico regular?",
        answer: "Depende da situação fiscal e da emissão das certidões correspondentes. É necessário validar caso a caso."
      },
      {
        question: "A CADBRASIL emite as certidões para minha empresa?",
        answer: "Sim, no escopo contratado, com monitoramento contínuo e alerta de pendências para manter o cadastro estável."
      }
    ]
  },
  "/como-fazer-cadastro-no-sicaf": {
    path: "/como-fazer-cadastro-no-sicaf",
    shortTitle: "Como Fazer Cadastro",
    metaTitle: "Como Fazer Cadastro no SICAF — Passo a Passo Atualizado | CADBRASIL",
    metaDescription: "Aprenda como fazer cadastro no SICAF com processo oficial, documentos por nível, prazos e erros comuns que travam a habilitação.",
    keywords: "como fazer cadastro no sicaf, passo a passo sicaf, cadastro compras gov, documentos sicaf 2026, habilitacao fornecedor",
    eyebrow: "Guia prático",
    title: "Como fazer cadastro",
    highlight: "no SICAF",
    description: "Conteúdo orientado para ação com o fluxo oficial, documentação necessária e recomendações para concluir o cadastro sem indeferimento.",
    quickAnswer: "Para fazer cadastro no SICAF, acesse o Compras.gov.br com e-CNPJ, preencha o Nível I e envie os documentos dos níveis de habilitação exigidos.",
    sections: [
      {
        id: "passo-a-passo",
        title: "Passo a passo resumido",
        paragraphs: [
          "Prepare certificado digital, valide dados societários, separe certidões e preencha o cadastro inicial. Em seguida, conclua níveis jurídicos, fiscais, trabalhistas e técnicos conforme o edital."
        ],
        bullets: [
          "Acesso com e-CNPJ no portal oficial",
          "Preenchimento do credenciamento inicial",
          "Upload documental por nível",
          "Correção de pendências e emissão de CRC"
        ]
      },
      {
        id: "erros-criticos",
        title: "Erros que mais derrubam aprovação",
        paragraphs: [
          "As falhas recorrentes são certidão vencida, ausência de nível exigido e divergência de razão social entre documentos."
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/plataforma-digital": {
    path: "/plataforma-digital",
    shortTitle: "Plataforma Digital",
    metaTitle: "Plataforma Digital SICAF — Gestão Inteligente de Cadastro | CADBRASIL",
    metaDescription: "Conheça a plataforma digital da CADBRASIL para gerir cadastro SICAF, certidões, renovação e status de habilitação em tempo real.",
    keywords: "plataforma digital sicaf, sistema de gestao sicaf, dashboard sicaf, monitoramento certidoes, cadbrasil plataforma",
    eyebrow: "Tecnologia CADBRASIL",
    title: "Plataforma digital",
    highlight: "para gestão SICAF",
    description: "Centralize certidões, status de níveis, protocolos e pendências em um único painel com automação e suporte especializado.",
    quickAnswer: "A plataforma digital CADBRASIL reúne cadastro, renovação, monitoramento e suporte do SICAF em ambiente único para reduzir falhas operacionais.",
    sections: [
      {
        id: "visao-geral",
        title: "O que a plataforma entrega",
        paragraphs: [
          "A equipe ganha previsibilidade: tudo o que está válido, vencendo ou pendente fica visível em um painel único, com histórico e próximos passos recomendados."
        ],
        bullets: [
          "Painel com certidões por validade",
          "Status de níveis I a VI",
          "Alertas e priorização por edital",
          "Integração com suporte humano"
        ]
      },
      {
        id: "beneficio-negocio",
        title: "Benefício para operação e vendas",
        paragraphs: [
          "Com governança documental contínua, sua empresa reduz desclassificações por erro básico e aumenta taxa de aproveitamento de oportunidades."
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/como-cadastrar-empresa-sicaf": {
    path: "/como-cadastrar-empresa-sicaf",
    shortTitle: "Cadastrar Empresa",
    metaTitle: "Como Cadastrar Empresa no SICAF — Guia para Fornecedores | CADBRASIL",
    metaDescription: "Veja como cadastrar sua empresa no SICAF com segurança: requisitos jurídicos, fiscais e técnicos para licitar no governo federal.",
    keywords: "como cadastrar empresa no sicaf, empresa no compras gov, credenciamento fornecedor empresa, cadastro cnpj sicaf",
    eyebrow: "Para CNPJ",
    title: "Como cadastrar sua",
    highlight: "empresa no SICAF",
    description: "Guia para empresas de todos os portes (MEI, ME, EPP, LTDA e S/A) com foco em habilitação correta desde o primeiro envio.",
    quickAnswer: "Para cadastrar empresa no SICAF, é necessário CNPJ ativo, e-CNPJ válido e documentos societários/fiscais compatíveis com os níveis exigidos.",
    sections: [
      {
        id: "porte-empresa",
        title: "Empresas que podem se cadastrar",
        paragraphs: [
          "MEI, ME, EPP e empresas de médio/grande porte podem se credenciar, desde que cumpram requisitos do edital e mantenham regularidade documental."
        ]
      },
      {
        id: "conformidade",
        title: "Conformidade antes de enviar",
        paragraphs: [
          "A recomendação é validar coerência de CNAE, contrato social e certidões para evitar retrabalho e bloqueio no momento de habilitação."
        ],
        bullets: [
          "Dados cadastrais e societários consistentes",
          "Certidões válidas e sem divergência de CNPJ",
          "Representante legal com poderes atualizados"
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/autoatendimento-sicaf": {
    path: "/autoatendimento-sicaf",
    shortTitle: "Autoatendimento SICAF",
    metaTitle: "Autoatendimento SICAF — Fluxo Guiado e Suporte Especializado | CADBRASIL",
    metaDescription: "Autoatendimento SICAF com checklist inteligente, validação automática e suporte humano para acelerar cadastro e regularização.",
    keywords: "autoatendimento sicaf, self service sicaf, cadastro sicaf online, checklist sicaf automatico, suporte sicaf",
    eyebrow: "Self-service assistido",
    title: "Autoatendimento SICAF",
    highlight: "com segurança",
    description: "Você avança no próprio ritmo com fluxo guiado, validação por IA e possibilidade de acionar especialista quando necessário.",
    quickAnswer: "O autoatendimento SICAF da CADBRASIL combina autonomia do cliente com validações automáticas e apoio técnico para evitar erros críticos.",
    sections: [
      {
        id: "modelo",
        title: "Como funciona o autoatendimento",
        paragraphs: [
          "O sistema apresenta as etapas por prioridade, valida arquivos enviados e destaca inconsistências antes da submissão oficial."
        ]
      },
      {
        id: "quando-acionar-time",
        title: "Quando acionar especialista",
        paragraphs: [
          "Sempre que houver pendência fiscal, dúvidas sobre níveis ou exigências técnicas de edital, o atendimento humano entra para destravar rapidamente."
        ],
        bullets: [
          "Pendências fiscais/trabalhistas",
          "Editais com exigência complexa",
          "Divergência societária/documental"
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/sicaf-digital": {
    path: "/sicaf-digital",
    shortTitle: "SICAF Digital",
    metaTitle: "SICAF Digital — Cadastro e Regularização Online | CADBRASIL",
    metaDescription: "SICAF Digital com processo 100% online: cadastro, atualização e regularização com monitoramento inteligente e suporte especializado.",
    keywords: "sicaf digital, sicaf online, cadastro sicaf digital, regularizacao sicaf online, plataforma sicaf",
    eyebrow: "Operação 100% online",
    title: "SICAF Digital",
    highlight: "de ponta a ponta",
    description: "Do cadastro inicial à renovação contínua, tudo acontece em ambiente digital com rastreabilidade de documentos e status.",
    quickAnswer: "SICAF Digital é a gestão do cadastro de fornecedor em fluxo online, com validação documental e controle de regularidade em tempo real.",
    sections: [
      {
        id: "digitalizacao",
        title: "Digitalização com controle",
        paragraphs: [
          "Digitalizar sem processo gera caos. No SICAF Digital da CADBRASIL, cada documento entra com metadados, validade e vínculo com nível de habilitação."
        ]
      },
      {
        id: "performance",
        title: "Impacto na performance de licitação",
        paragraphs: [
          "Com dados organizados e atualizados, sua equipe reduz tempo de resposta a editais e minimiza risco de inabilitação por falha operacional."
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/sicaf-cadastro-unificado-de-fornecedores": {
    path: "/sicaf-cadastro-unificado-de-fornecedores",
    shortTitle: "Cadastro Unificado",
    metaTitle: "SICAF Cadastro Unificado de Fornecedores — Guia Completo | CADBRASIL",
    metaDescription: "Entenda o SICAF (Cadastro Unificado de Fornecedores), níveis de habilitação e como manter sua empresa regular para licitações públicas.",
    keywords: "sicaf cadastro unificado de fornecedores, sistema de cadastramento unificado, fornecedor governo federal, habilitacao sicaf",
    eyebrow: "Conceito oficial",
    title: "SICAF: cadastro unificado",
    highlight: "de fornecedores",
    description: "Página de referência para explicar o que é o SICAF, por que ele existe e como funciona na prática para fornecedores públicos.",
    quickAnswer: "SICAF é o Sistema de Cadastramento Unificado de Fornecedores do governo federal, usado para habilitar empresas em licitações e contratos públicos.",
    sections: [
      {
        id: "definicao",
        title: "O que é o SICAF",
        paragraphs: [
          "É a base unificada de cadastro e habilitação de fornecedores. Centraliza informações jurídicas, fiscais, trabalhistas, econômico-financeiras e técnicas."
        ]
      },
      {
        id: "na-pratica",
        title: "Como isso afeta sua empresa",
        paragraphs: [
          "Sem regularidade no SICAF, a empresa perde competitividade e pode ser desclassificada em fases decisivas de contratação pública."
        ],
        bullets: [
          "Habilitação mais rápida em editais",
          "Menos retrabalho documental",
          "Mais previsibilidade de compliance"
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/credenciamento-sicaf-digital": {
    path: "/credenciamento-sicaf-digital",
    shortTitle: "Credenciamento Digital",
    metaTitle: "Credenciamento SICAF Digital — Processo Online Assistido | CADBRASIL",
    metaDescription: "Credenciamento SICAF Digital com validação de documentos, monitoramento de pendências e acompanhamento especializado até o CRC.",
    keywords: "credenciamento sicaf digital, credenciamento online sicaf, cadastro fornecedor digital, crc sicaf digital",
    eyebrow: "Credenciamento online",
    title: "Credenciamento SICAF",
    highlight: "digital assistido",
    description: "Fluxo digital com checklist inteligente e acompanhamento técnico para concluir o credenciamento com velocidade e governança.",
    quickAnswer: "O credenciamento SICAF Digital permite cadastrar e habilitar fornecedores em processo online, com controle documental e suporte especializado.",
    sections: [
      {
        id: "processo-digital",
        title: "Processo digital em etapas",
        paragraphs: [
          "A jornada inclui onboarding, conferência documental, validação de níveis, envio no portal e acompanhamento até emissão do CRC."
        ]
      },
      {
        id: "governanca",
        title: "Governança e rastreabilidade",
        paragraphs: [
          "Cada atualização fica registrada com histórico de envio e pendência, facilitando auditoria interna e resposta rápida a exigências de edital."
        ]
      }
    ],
    faqs: baseFaqs
  },
  "/como-regularizar-sicaf-empresa": {
    path: "/como-regularizar-sicaf-empresa",
    shortTitle: "Regularizar SICAF",
    metaTitle: "Como Regularizar o SICAF da Empresa 2026 — Guia Completo | CADBRASIL",
    metaDescription: "Aprenda como regularizar o SICAF da empresa: identificar irregularidades, corrigir certidões vencidas, reativar níveis e voltar a licitar com assessoria CADBRASIL em até 24h.",
    keywords: "regularizar sicaf, sicaf irregular, como regularizar sicaf empresa, desbloquear sicaf, pendencia sicaf, regularizacao sicaf 2026, sicaf inapto, corrigir sicaf, habilitacao sicaf",
    eyebrow: "Regularização SICAF",
    title: "Como regularizar o SICAF",
    highlight: "da sua empresa",
    description: "Diagnóstico completo de pendências, correção documental e reativação de níveis para sua empresa voltar a participar de licitações com cadastro regular.",
    quickAnswer: "Para regularizar o SICAF da empresa, identifique pendências no Compras.gov.br, renove certidões vencidas (CND, FGTS, CNDT), corrija divergências cadastrais e revalide os níveis de habilitação exigidos.",
    howToSteps: [
      {
        name: "Diagnosticar situação cadastral",
        text: "Acesse o Compras.gov.br com e-CNPJ e verifique status de cada nível e motivo de irregularidade."
      },
      {
        name: "Mapear certidões vencidas ou pendentes",
        text: "Liste CND Federal, FGTS, CNDT e certidões estaduais/municipais com validade expirada."
      },
      {
        name: "Regularizar débitos fiscais e trabalhistas",
        text: "Quite ou parcela pendências que impedem emissão de certidões negativas válidas."
      },
      {
        name: "Atualizar documentos societários",
        text: "Alinhe contrato social, razão social e representante legal ao cadastro no portal."
      },
      {
        name: "Reenviar documentos nos níveis afetados",
        text: "Faça upload das certidões novas nos níveis II a VI conforme exigência do sistema."
      },
      {
        name: "Validar status Regular e emitir CRC",
        text: "Confirme situação regular no painel e emita o Certificado de Registro Cadastral."
      }
    ],
    sections: [
      {
        id: "sinais-irregularidade",
        title: "Sinais de que seu SICAF está irregular",
        paragraphs: [
          "Empresas com SICAF irregular costumam descobrir o problema apenas na fase de habilitação de um pregão — quando já investiram tempo e recursos na disputa.",
          "Os indicadores mais comuns são certidão vencida, nível incompleto, divergência de razão social entre documentos ou bloqueio por pendência fiscal não resolvida."
        ],
        bullets: [
          "Status diferente de Regular no painel do fornecedor",
          "CRC não disponível ou com ressalvas",
          "Certidões com validade expirada (muitas a cada 180 dias)",
          "Nível III, IV ou V incompleto para o edital pretendido",
          "Mensagens de pendência no Compras.gov.br"
        ]
      },
      {
        id: "causas-frequentes",
        title: "Principais causas de irregularidade no SICAF",
        paragraphs: [
          "A maioria das irregularidades não surge de erro grave — são falhas operacionais: esquecimento de renovação, alteração societária não refletida no cadastro ou envio incompleto de níveis.",
          "Empresas que licitam esporadicamente são as mais vulneráveis, pois não mantêm rotina de monitoramento documental."
        ],
        bullets: [
          "CND Federal, FGTS ou CNDT vencidas",
          "Alteração de contrato social sem atualização no SICAF",
          "Cadastro apenas no Nível I sem habilitação completa",
          "Débitos fiscais estaduais ou municipais em aberto",
          "Certificado digital e-CNPJ expirado ou revogado"
        ]
      },
      {
        id: "passo-a-passo-regularizacao",
        title: "Passo a passo para regularizar o SICAF",
        paragraphs: [
          "A regularização segue uma sequência lógica: diagnóstico → correção de pendências → reenvio documental → validação de níveis → emissão de CRC.",
          "Tentar licitar antes de concluir a regularização aumenta o risco de desclassificação e mancha o histórico da empresa perante órgãos licitantes."
        ],
        bullets: [
          "Acesso com e-CNPJ ao Compras.gov.br",
          "Levantamento de pendências por nível",
          "Emissão e upload de certidões atualizadas",
          "Correção de dados societários divergentes",
          "Validação final e emissão de CRC regular"
        ]
      },
      {
        id: "prazo-riscos",
        title: "Prazos, riscos e impacto em licitações",
        paragraphs: [
          "Sem assessoria, a regularização pode levar de 5 a 30 dias úteis, dependendo da complexidade fiscal. Com documentação organizada, a CADBRASIL conclui em até 24 horas.",
          "Participar de pregão com SICAF irregular resulta em desclassificação na habilitação, mesmo após vencer a disputa de preços."
        ]
      },
      {
        id: "cadbrasil-regularizacao",
        title: "Regularização com a CADBRASIL",
        paragraphs: [
          "Nossa equipe faz diagnóstico automatizado com IA, corrige pendências documentais, reativa níveis e monitora vencimentos para evitar nova irregularidade.",
          "Você acompanha cada etapa pelo painel e recebe alertas antes que certidões expirem."
        ],
        bullets: [
          "Diagnóstico completo por CNPJ",
          "Correção de certidões e níveis",
          "Entrega em até 24h com docs completos",
          "Monitoramento contínuo pós-regularização"
        ]
      }
    ],
    faqs: [
      {
        question: "Como saber se meu SICAF está irregular?",
        answer: "Acesse o Compras.gov.br com certificado e-CNPJ, entre no painel do fornecedor e verifique o status de cada nível. Situação diferente de Regular indica pendência."
      },
      {
        question: "Quanto tempo leva para regularizar o SICAF?",
        answer: "Depende das pendências. Certidões simples podem ser resolvidas em 1 a 3 dias. Débitos fiscais complexos exigem mais tempo. Com a CADBRASIL e documentação pronta, até 24 horas."
      },
      {
        question: "Posso licitar enquanto regularizo o SICAF?",
        answer: "Não é recomendado. Mesmo vencendo o pregão, a empresa tende a ser desclassificada na habilitação se o cadastro estiver irregular no momento da análise."
      },
      {
        question: "SICAF irregular impede receber de contratos antigos?",
        answer: "Sim. Irregularidade cadastral pode bloquear pagamentos e renovações contratuais em órgãos que exigem fornecedor regular."
      },
      {
        question: "Preciso refazer todo o cadastro para regularizar?",
        answer: "Na maioria dos casos, não. Basta corrigir os níveis pendentes e reenviar certidões válidas. Refazer do zero só ocorre em casos extremos de inconsistência cadastral."
      },
      {
        question: "A CADBRASIL regulariza SICAF de qualquer empresa?",
        answer: "Sim. Atendemos MEI, ME, EPP, LTDA, S/A e EIRELI em todo o Brasil, com foco em regularização rápida e monitoramento contínuo."
      },
      {
        question: "Quanto custa regularizar o SICAF?",
        answer: "O portal oficial não cobra taxa. Custos envolvem emissão de certidões, certificado digital e eventual assessoria especializada como a CADBRASIL."
      },
      {
        question: "Regularizar SICAF resolve empresa inapta na Receita?",
        answer: "São problemas distintos. CNPJ inapto precisa ser regularizado na Receita Federal antes. Veja também nossa página sobre empresa inapta."
      }
    ]
  },
  "/cadastro-sicaf-licitacao-publica": {
    path: "/cadastro-sicaf-licitacao-publica",
    shortTitle: "SICAF para Licitação",
    metaTitle: "Cadastro SICAF para Licitação Pública 2026 — Habilitação Completa | CADBRASIL",
    metaDescription: "Cadastro SICAF para licitação pública: requisitos de habilitação, níveis exigidos, documentos, CRC e como participar de pregões federais com a CADBRASIL.",
    keywords: "cadastro sicaf licitacao, sicaf licitacao publica, habilitacao licitacao sicaf, pregão sicaf, fornecedor licitacao federal, sicaf leilao publico, cadastro fornecedor governo licitacao",
    eyebrow: "Licitações públicas",
    title: "Cadastro SICAF para",
    highlight: "licitação pública",
    description: "Habilite sua empresa corretamente para disputar pregões, concorrências e dispensas no Governo Federal — com níveis alinhados ao edital e CRC regular.",
    quickAnswer: "O cadastro SICAF para licitação pública exige credenciamento no Compras.gov.br, níveis de habilitação compatíveis com o edital (I a VI), certidões válidas e CRC com status Regular.",
    sections: [
      {
        id: "por-que-sicaf-licitacao",
        title: "Por que o SICAF é obrigatório em licitações",
        paragraphs: [
          "A Lei 14.133/2021 consolidou o ecossistema de compras públicas. Para contratos do Governo Federal, o SICAF é a base de verificação de regularidade do fornecedor na fase de habilitação.",
          "Sem cadastro regular, a empresa não conclui a habilitação — independentemente de ter a melhor proposta de preço."
        ],
        bullets: [
          "Verificação automática de regularidade fiscal",
          "Consulta de níveis de habilitação por edital",
          "Emissão de CRC como comprovante cadastral",
          "Integração com Compras.gov.br e PNCP"
        ]
      },
      {
        id: "niveis-edital",
        title: "Níveis de habilitação exigidos por edital",
        paragraphs: [
          "Cada edital define quais níveis são necessários conforme objeto, valor e complexidade. Cadastrar só o Nível I é erro clássico que leva à desclassificação.",
          "Antes de disputar um pregão, valide se sua empresa possui todos os níveis exigidos ativos e regulares."
        ],
        bullets: [
          "Nível I — Credenciamento (obrigatório)",
          "Nível II — Habilitação jurídica",
          "Nível III — Regularidade fiscal e trabalhista",
          "Nível IV — Qualificação técnica",
          "Nível V — Qualificação econômico-financeira",
          "Nível VI — Linhas de fornecimento (CATMAT/CATSER)"
        ]
      },
      {
        id: "fluxo-habilitacao",
        title: "Fluxo: do cadastro SICAF à habilitação no pregão",
        paragraphs: [
          "O fluxo ideal começa semanas antes do edital: credenciamento, habilitação completa, emissão de CRC e monitoramento de vencimentos.",
          "Empresas que cadastram no SICAF apenas quando o edital abre perdem oportunidades por prazo insuficiente para regularizar pendências."
        ],
        bullets: [
          "Credenciamento com e-CNPJ no Compras.gov.br",
          "Upload documental por nível exigido",
          "Emissão de CRC com status Regular",
          "Participação no pregão com habilitação pré-validada",
          "Manutenção contínua entre editais"
        ]
      },
      {
        id: "modalidades",
        title: "Modalidades de licitação e exigência SICAF",
        paragraphs: [
          "Pregão eletrônico, concorrência, tomada de preços, dispensa e inexigibilidade — em contratações federais, a verificação cadastral via SICAF é praticamente universal na habilitação.",
          "Estados e municípios também consultam o SICAF ou exigem cadastro equivalente em muitos processos."
        ]
      },
      {
        id: "cadbrasil-licitacao",
        title: "CADBRASIL: cadastro SICAF pronto para licitar",
        paragraphs: [
          "Preparamos sua empresa com checklist por edital-alvo, validação documental com IA e entrega em até 24 horas quando a documentação está completa.",
          "Você disputa pregões com confiança de que a habilitação não será o ponto de falha."
        ],
        bullets: [
          "Checklist personalizado por segmento",
          "Validação de níveis antes do pregão",
          "Monitoramento de certidões entre editais",
          "Suporte especializado em habilitação"
        ]
      }
    ],
    faqs: [
      {
        question: "Preciso de SICAF para participar de pregão eletrônico?",
        answer: "Para pregões federais no Compras.gov.br, sim. O SICAF regular é verificado na fase de habilitação após a disputa de preços."
      },
      {
        question: "Quais níveis do SICAF são exigidos em licitações?",
        answer: "Varia por edital. Mínimo é Nível I (credenciamento). A maioria exige Nível III (fiscal/trabalhista). Objetos complexos exigem IV, V e VI."
      },
      {
        question: "Posso me cadastrar no SICAF depois de abrir o edital?",
        answer: "Tecnicamente sim, mas é arriscado. Certidões, validações e correções podem levar dias ou semanas. O ideal é cadastro prévio e regular."
      },
      {
        question: "O CRC substitui o SICAF na licitação?",
        answer: "Não. O CRC comprova situação cadastral no SICAF. O cadastro completo com níveis regulares continua sendo a base."
      },
      {
        question: "MEI e ME podem licitar com SICAF?",
        answer: "Sim, quando o edital permitir e a empresa atender requisitos documentais. ME e EPP têm tratamento diferenciado na Lei Complementar 123/2006."
      },
      {
        question: "SICAF serve para licitações estaduais e municipais?",
        answer: "Muitos entes consultam o SICAF ou exigem cadastro próprio. Ter SICAF federal regular facilita e acelera processos em outros níveis."
      },
      {
        question: "Quanto tempo antes do pregão devo ter o SICAF pronto?",
        answer: "Recomendamos pelo menos 15 dias úteis de antecedência. Com a CADBRASIL e docs completos, a habilitação pode sair em até 24 horas."
      },
      {
        question: "A CADBRASIL prepara SICAF específico para meu edital?",
        answer: "Sim. Analisamos o edital-alvo, identificamos níveis exigidos e preparamos documentação compatível antes da disputa."
      }
    ]
  },
  "/documentos-necessarios-cadastro-sicaf": {
    path: "/documentos-necessarios-cadastro-sicaf",
    shortTitle: "Documentos SICAF",
    metaTitle: "Documentos Necessários para Cadastro no SICAF 2026 — Checklist | CADBRASIL",
    metaDescription: "Lista completa de documentos para cadastro no SICAF: por nível de habilitação, validade, certificado digital e checklist para MEI, ME, EPP e demais portes.",
    keywords: "documentos sicaf, documentos cadastro sicaf, checklist sicaf, documentos habilitacao sicaf, certidoes sicaf, contrato social sicaf, documentos fornecedor governo",
    eyebrow: "Checklist documental",
    title: "Documentos necessários para",
    highlight: "cadastro no SICAF",
    description: "Checklist completo organizado por nível de habilitação, com validade de cada certidão e orientações para evitar indeferimento no credenciamento.",
    quickAnswer: "Os documentos para cadastro no SICAF incluem cartão CNPJ, contrato social, certidões fiscais (CND Federal, FGTS, CNDT), comprovante de endereço, certificado e-CNPJ e documentos técnicos/financeiros conforme o nível exigido.",
    itemList: [
      "Certificado digital e-CNPJ (A1 ou A3)",
      "Cartão CNPJ atualizado",
      "Contrato social ou estatuto com alterações",
      "RG e CPF dos administradores",
      "Comprovante de endereço da sede",
      "Certidão Negativa de Débitos — RFB (CND Federal)",
      "Certificado de Regularidade FGTS (CRF)",
      "Certidão Negativa de Débitos Trabalhistas (CNDT)",
      "CND estadual e municipal",
      "Balanço patrimonial do último exercício",
      "Atestados de capacidade técnica",
      "Procuração do representante legal (se aplicável)"
    ],
    sections: [
      {
        id: "documentos-acesso",
        title: "Documentos de acesso ao portal",
        paragraphs: [
          "Antes de qualquer upload, você precisa do certificado digital e-CNPJ válido vinculado ao CNPJ da empresa. Sem ele, não há acesso ao Compras.gov.br."
        ],
        bullets: [
          "Certificado digital e-CNPJ A1 (arquivo) ou A3 (token/cartão)",
          "Validade entre 1 e 3 anos conforme tipo",
          "Vinculado ao CNPJ correto da empresa"
        ]
      },
      {
        id: "nivel-i-ii",
        title: "Níveis I e II — Credenciamento e habilitação jurídica",
        paragraphs: [
          "O Nível I exige dados cadastrais básicos. O Nível II comprova existência jurídica regular da empresa e poderes do representante legal."
        ],
        bullets: [
          "Cartão CNPJ emitido pela Receita Federal",
          "Contrato social ou estatuto + alterações consolidadas",
          "Atas de eleição/nomeação de administradores (S/A)",
          "RG e CPF de todos os sócios/administradores",
          "Comprovante de endereço da sede (até 90 dias)",
          "Procuração com poderes específicos (se representante não for sócio)"
        ]
      },
      {
        id: "nivel-iii",
        title: "Nível III — Regularidade fiscal e trabalhista",
        paragraphs: [
          "É o nível mais crítico para licitações. Certidões vencidas são a principal causa de irregularidade e desclassificação em pregões."
        ],
        bullets: [
          "CND Federal (RFB/PGFN) — validade 90 a 180 dias",
          "CRF — Certificado de Regularidade FGTS — 180 dias",
          "CNDT — Certidão Negativa de Débitos Trabalhistas — 180 dias",
          "CND estadual — prazo varia por UF",
          "CND municipal — prazo varia por município"
        ]
      },
      {
        id: "nivel-iv-v-vi",
        title: "Níveis IV, V e VI — Técnico, financeiro e catálogo",
        paragraphs: [
          "Exigidos conforme objeto e valor do edital. Empresas que pretendem licitar bens ou serviços específicos precisam destes níveis ativos."
        ],
        bullets: [
          "Nível IV: atestados de capacidade técnica compatíveis com o objeto",
          "Nível V: balanço patrimonial, DRE e índices financeiros",
          "Nível VI: cadastro em CATMAT (materiais) ou CATSER (serviços)"
        ]
      },
      {
        id: "validade-monitoramento",
        title: "Validade e monitoramento de documentos",
        paragraphs: [
          "A maioria das certidões fiscais vence em 180 dias. Sem monitoramento, a empresa fica irregular sem perceber até ser desclassificada em um pregão.",
          "A CADBRASIL monitora vencimentos automaticamente e alerta antes da expiração."
        ]
      },
      {
        id: "cadbrasil-documentos",
        title: "Validação documental com a CADBRASIL",
        paragraphs: [
          "Nossa IA confere cada documento antes do envio oficial: validade, coerência de CNPJ/razão social e compatibilidade com níveis exigidos.",
          "Evite retrabalho e indeferimento com checklist validado por especialistas."
        ]
      }
    ],
    faqs: [
      {
        question: "Quais documentos são obrigatórios para cadastro no SICAF?",
        answer: "Mínimo: e-CNPJ, cartão CNPJ, contrato social, RG/CPF dos administradores e comprovante de endereço. Para licitar, certidões fiscais (Nível III) são praticamente sempre exigidas."
      },
      {
        question: "Qual a validade das certidões para o SICAF?",
        answer: "CND Federal: 90 a 180 dias. FGTS e CNDT: 180 dias. Estadual e municipal: varia. Monitore vencimentos continuamente."
      },
      {
        question: "MEI precisa de todos os documentos?",
        answer: "MEI envia documentos simplificados (CCMEI, certidões), mas ainda precisa de e-CNPJ e certidões fiscais válidas para habilitação."
      },
      {
        question: "Contrato social desatualizado impede cadastro?",
        answer: "Sim. Divergência entre contrato social e dados no SICAF gera pendência ou indeferimento. Atualize antes de enviar."
      },
      {
        question: "Preciso de balanço para cadastro inicial?",
        answer: "Só se o edital ou nível V exigir qualificação econômico-financeira. Cadastro básico (Níveis I a III) não exige balanço."
      },
      {
        question: "Como enviar documentos no SICAF?",
        answer: "Pelo Compras.gov.br, autenticado com e-CNPJ, no módulo de fornecedores. Cada documento vai anexado ao nível correspondente."
      },
      {
        question: "A CADBRASIL valida meus documentos antes do envio?",
        answer: "Sim. Conferimos validade, coerência cadastral e compatibilidade com níveis exigidos — com IA e revisão humana."
      },
      {
        question: "Onde vejo a lista oficial de documentos?",
        answer: "No Compras.gov.br, na área do fornecedor, por nível de habilitação. Este guia CADBRASIL consolida a lista prática para 2026."
      }
    ]
  },
  "/como-atualizar-certificados-sicaf": {
    path: "/como-atualizar-certificados-sicaf",
    shortTitle: "Atualizar Certificados",
    metaTitle: "Como Atualizar Certificados no SICAF 2026 — Renovação e Validade | CADBRASIL",
    metaDescription: "Saiba como atualizar certificados e certidões no SICAF: CND, FGTS, CNDT, prazos de validade, passo a passo no Compras.gov.br e monitoramento CADBRASIL.",
    keywords: "atualizar certificados sicaf, renovar certidoes sicaf, atualizar sicaf, certidao vencida sicaf, renovacao certidoes sicaf, atualizar cnd sicaf, manter sicaf regular",
    eyebrow: "Atualização documental",
    title: "Como atualizar certificados",
    highlight: "no SICAF",
    description: "Renove certidões fiscais e trabalhistas antes do vencimento, reenvie no portal e mantenha seu cadastro regular para não perder licitações.",
    quickAnswer: "Para atualizar certificados no SICAF, emita novas certidões (CND Federal, FGTS, CNDT e demais) antes do vencimento, acesse o Compras.gov.br com e-CNPJ e faça upload nos níveis correspondentes.",
    howToSteps: [
      {
        name: "Verificar vencimentos no painel",
        text: "Acesse Compras.gov.br e confira validade de cada certidão nos níveis de habilitação."
      },
      {
        name: "Emitir novas certidões",
        text: "Gere CND Federal, CRF/FGTS, CNDT e certidões estaduais/municipais nos sites oficiais."
      },
      {
        name: "Conferir coerência cadastral",
        text: "Valide que razão social e CNPJ nas certidões coincidem com o cadastro no SICAF."
      },
      {
        name: "Fazer upload no nível correto",
        text: "Anexe cada certidão nova no Nível III (ou nível específico) no portal do fornecedor."
      },
      {
        name: "Aguardar validação do sistema",
        text: "O Compras.gov.br cruza dados automaticamente. Pendências aparecem no painel."
      },
      {
        name: "Confirmar status Regular",
        text: "Verifique situação regular e, se necessário, reemita o CRC atualizado."
      }
    ],
    sections: [
      {
        id: "por-que-atualizar",
        title: "Por que atualizar certificados no SICAF",
        paragraphs: [
          "Certidões vencidas transformam cadastro regular em irregular instantaneamente — sem aviso prévio do sistema até a próxima consulta ou tentativa de licitação.",
          "A atualização proativa é a diferença entre empresas que licitam com consistência e as que perdem pregões por erro evitável."
        ],
        bullets: [
          "Certidões vencidas bloqueiam habilitação em pregões",
          "Status muda de Regular para Irregular automaticamente",
          "CRC deixa de refletir situação válida",
          "Renovação tardia pode exigir regularização de débitos"
        ]
      },
      {
        id: "certidoes-principais",
        title: "Certidões que mais precisam de atualização",
        paragraphs: [
          "Cada certidão tem prazo de validade próprio. O monitoramento deve ser contínuo, não apenas antes de editais."
        ],
        bullets: [
          "CND Federal (RFB/PGFN) — 90 a 180 dias",
          "CRF/FGTS — 180 dias",
          "CNDT (trabalhista) — 180 dias",
          "CND estadual — varia por estado",
          "CND municipal — varia por município",
          "Certificado digital e-CNPJ — 1 a 3 anos"
        ]
      },
      {
        id: "passo-atualizacao",
        title: "Passo a passo para atualizar no Compras.gov.br",
        paragraphs: [
          "O processo é manual no portal oficial: emitir certidão nova → acessar com e-CNPJ → anexar no nível → aguardar validação.",
          "Erros comuns: anexar certidão vencida, CNPJ divergente ou upload no nível errado."
        ],
        bullets: [
          "Login com certificado e-CNPJ válido",
          "Navegar até níveis de habilitação",
          "Substituir certidões vencidas por novas",
          "Salvar e verificar status de processamento",
          "Reemitir CRC após confirmação de regularidade"
        ]
      },
      {
        id: "automacao-monitoramento",
        title: "Monitoramento automático vs atualização manual",
        paragraphs: [
          "Atualizar manualmente funciona para empresas com poucos editais. Quem licita com frequência precisa de alertas automáticos e rotina de renovação.",
          "O Assistente CADBRASIL e a plataforma digital enviam alertas com antecedência configurável."
        ]
      },
      {
        id: "cadbrasil-atualizacao",
        title: "Atualização de certificados com a CADBRASIL",
        paragraphs: [
          "Cuidamos da emissão, validação e upload de certidões no SICAF, com monitoramento contínuo para sua empresa nunca licitar irregular.",
          "Entrega em até 24 horas quando certidões estão disponíveis para emissão."
        ],
        bullets: [
          "Alertas de vencimento com antecedência",
          "Emissão e upload no portal oficial",
          "Validação de coerência cadastral",
          "Histórico documental rastreável"
        ]
      }
    ],
    faqs: [
      {
        question: "Com que frequência devo atualizar certificados no SICAF?",
        answer: "Não há data fixa única — depende do vencimento de cada certidão. CND, FGTS e CNDT costumam vencer a cada 180 dias. Monitore continuamente."
      },
      {
        question: "O que acontece se uma certidão vencer?",
        answer: "O SICAF fica irregular. A empresa é desclassificada na habilitação de qualquer pregão até renovar e revalidar os níveis afetados."
      },
      {
        question: "Posso atualizar certificados sem assessoria?",
        answer: "Sim, pelo Compras.gov.br. Porém erros de upload, validade ou divergência cadastral são frequentes. A CADBRASIL reduz esse risco."
      },
      {
        question: "Preciso atualizar o CRC após renovar certidões?",
        answer: "Recomendado. O CRC reflete a situação cadastral no momento da emissão. Após atualizar certidões, reemita para ter comprovante atual."
      },
      {
        question: "Certificado digital também precisa ser atualizado?",
        answer: "Sim. e-CNPJ vencido impede acesso ao Compras.gov.br. Renove com 30 a 60 dias de antecedência."
      },
      {
        question: "A CADBRASIL atualiza certificados automaticamente?",
        answer: "Monitoramos vencimentos e executamos renovação/upload conforme plano contratado, com alertas e validação antes de cada edital."
      },
      {
        question: "Quanto tempo leva para o sistema validar certidão nova?",
        answer: "Geralmente de minutos a 24 horas úteis, dependendo do cruzamento automático com bases da Receita, FGTS e Justiça do Trabalho."
      },
      {
        question: "Atualizar certificados é diferente de regularizar SICAF?",
        answer: "Atualização é preventiva (renovar antes de vencer). Regularização é corretiva (corrigir cadastro já irregular). Ambos exigem certidões válidas."
      }
    ]
  }
};
function getLandingPage(path) {
  const page2 = landingPages[path];
  if (!page2) {
    throw new Error(`Landing page not found for path: ${path}`);
  }
  return page2;
}
const page$g = getLandingPage("/sicaf-digital");
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function BrandWordmark({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: cn("inline-flex items-baseline tracking-tight", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CAD" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1.5 font-normal text-muted-foreground/75 select-none", "aria-hidden": true, children: "|" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "BRASIL" })
  ] });
}
function BrandLogo({ showIcon = true, className, asLink = false }) {
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    showIcon && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow text-sm font-bold",
        "aria-hidden": true,
        children: "C"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BrandWordmark, {})
  ] });
  const classes = cn("flex items-center gap-2 font-display font-bold text-lg", className);
  if (asLink) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: classes, "aria-label": "CADBRASIL — início", children: content });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: classes, children: content });
}
const links = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia SICAF" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/assistente", label: "Assistente" },
  { to: "/beneficios", label: "Benefícios" },
  { to: "/faq", label: "FAQ" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass shadow-soft" : "bg-transparent"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BrandLogo, { asLink: true }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
                links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: l.to,
                    activeProps: { className: "text-foreground bg-accent" },
                    className: "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition",
                    children: l.label
                  },
                  l.to
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contato",
                    className: "px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition",
                    children: "Contato"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: WHATSAPP_URL,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-foreground border border-border hover:bg-accent transition",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                      " WhatsApp"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: CADASTRO_URL,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-brand text-brand-foreground shadow-glow hover:opacity-95 transition",
                    children: "Fazer Cadastro"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "lg:hidden p-2 rounded-lg hover:bg-accent",
                  onClick: () => setOpen((v) => !v),
                  "aria-label": "Abrir menu",
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-2 glass shadow-soft rounded-2xl p-4 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "px-3 py-3 rounded-lg hover:bg-accent text-sm font-medium",
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contato",
              onClick: () => setOpen(false),
              className: "px-3 py-3 rounded-lg hover:bg-accent text-sm font-medium",
              children: "Contato"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: CADASTRO_URL,
              target: "_blank",
              rel: "noreferrer",
              onClick: () => setOpen(false),
              className: "mt-2 text-center px-4 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold",
              children: "Fazer Cadastro SICAF"
            }
          )
        ] }) })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-card/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BrandLogo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "Especialistas em SICAF, regularização documental e participação em licitações públicas. Uma marca do grupo CADBRASIL." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/cadastro-sicaf-passo-a-passo", className: "hover:text-foreground", children: "Guia Cadastro SICAF" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cta", className: "hover:text-foreground", children: "Cadastro SICAF" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cta", className: "hover:text-foreground", children: "Regularização SICAF" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cta", className: "hover:text-foreground", children: "Atualização SICAF" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cta", className: "hover:text-foreground", children: "Renovação de certidões" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#assistente", className: "hover:text-foreground", children: "Assistente CADBRASIL" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Contato" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", className: "hover:text-foreground", children: "Formulário de contato" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.", className: "hover:text-foreground", children: "WhatsApp" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:documentos@fornecedordigital.com.br", className: "hover:text-foreground", children: "documentos@fornecedordigital.com.br" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Atendimento Seg–Sex · 8h às 18h" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Brasil · 100% remoto" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " CADBRASIL · Uma marca CADBRASIL. Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Política de Privacidade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "LGPD" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Termos" })
      ] })
    ] }) })
  ] });
}
function FloatingCta() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.",
        target: "_blank",
        rel: "noreferrer",
        "aria-label": "Falar no WhatsApp",
        className: "fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 h-14 w-14 rounded-full bg-success text-success-foreground grid place-items-center shadow-glow pulse-ring hover:scale-105 transition",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-background/95 backdrop-blur border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.",
          target: "_blank",
          rel: "noreferrer",
          className: "text-center px-4 py-3 rounded-xl bg-success text-success-foreground font-semibold text-sm",
          children: "WhatsApp"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#cta",
          className: "text-center px-4 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold text-sm",
          children: "Fazer Cadastro"
        }
      )
    ] }) })
  ] });
}
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const WHATSAPP_NUMBER = "551121220202";
const CONTACT_TYPE_UI = [
  { id: "cliente", label: "Cliente / SICAF", icon: User, description: "Cadastro, regularização e suporte" },
  { id: "parceria", label: "Parcerias", icon: Handshake, description: "Comercial, integrações e revenda" },
  { id: "projeto", label: "Projetos", icon: Layers, description: "Demandas customizadas e escopo técnico" },
  { id: "servico", label: "Serviços", icon: Wrench, description: "Consultoria e operação assistida" },
  { id: "trabalho", label: "Trabalhe conosco", icon: Briefcase, description: "Vagas e oportunidades" },
  { id: "outro", label: "Outros assuntos", icon: MessageCircle, description: "Dúvidas gerais" }
];
const initialForm = {
  nome: "",
  email: "",
  telefone: "",
  empresa: "",
  tipo: "cliente",
  mensagem: ""
};
function ContactSection() {
  const [form, setForm] = reactExports.useState(initialForm);
  const [status, setStatus] = reactExports.useState("idle");
  const [errorMessage, setErrorMessage] = reactExports.useState("");
  const [successEmail, setSuccessEmail] = reactExports.useState("");
  const update = (key, value) => {
    setForm((s) => ({ ...s, [key]: value }));
    if (status !== "loading") {
      setStatus("idle");
      setErrorMessage("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: "" })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Falha ao enviar mensagem");
      }
      setStatus("success");
      setErrorMessage("");
      const sentTo = data.clientEmail ?? form.email.trim();
      setSuccessEmail(sentTo);
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Não foi possível enviar. Tente novamente."
      );
    }
  };
  const isValid = form.nome.trim().length >= 2 && form.email.includes("@") && form.telefone.trim().length >= 8 && form.mensagem.trim().length >= 10;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contato", className: "py-24 sm:py-32 bg-accent/30 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        " Fale conosco"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance", children: "Entre em contato com a CADBRASIL." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground leading-relaxed", children: "Clientes, parcerias, projetos, serviços, vagas ou qualquer outro assunto — nossa equipe responde em minutos." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg", children: "Canais diretos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `https://wa.me/${WHATSAPP_NUMBER}`,
                target: "_blank",
                rel: "noreferrer",
                className: "flex items-center gap-3 text-muted-foreground hover:text-foreground transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-success/10 text-success grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-foreground", children: "WhatsApp" }),
                    "(11) 2122-0202"
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:documentos@fornecedordigital.com.br",
                className: "flex items-center gap-3 text-muted-foreground hover:text-foreground transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-brand/10 text-brand grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-foreground", children: "E-mail" }),
                    "documentos@fornecedordigital.com.br"
                  ] })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-accent grid place-items-center text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-foreground", children: "Atendimento" }),
                "Seg–Sex · 8h às 18h · Brasil"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground px-1", children: "O formulário envia sua mensagem por e-mail para nossa equipe. Resposta média em até 3 minutos em horário comercial." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `https://wa.me/${WHATSAPP_NUMBER}`,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline px-1",
            children: [
              "Prefere WhatsApp? Fale agora ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-card space-y-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("fieldset", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "text-sm font-semibold text-foreground mb-3", children: "Motivo do contato" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-2", children: CONTACT_TYPE_UI.map((type) => {
                const Icon = type.icon;
                const active = form.tipo === type.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => update("tipo", type.id),
                    className: `rounded-xl border p-3 text-left transition ${active ? "border-brand bg-brand/10 ring-1 ring-brand/30" : "border-border hover:bg-accent"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-4 w-4 mt-0.5 shrink-0 ${active ? "text-brand" : "text-muted-foreground"}` }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-semibold", children: type.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground mt-0.5", children: type.description })
                      ] })
                    ] })
                  },
                  type.id
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contato-nome", children: "Nome completo *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contato-nome",
                    value: form.nome,
                    onChange: (e) => update("nome", e.target.value),
                    placeholder: "Seu nome",
                    required: true,
                    className: "rounded-xl h-11"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contato-email", children: "E-mail *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contato-email",
                    type: "email",
                    value: form.email,
                    onChange: (e) => update("email", e.target.value),
                    placeholder: "seu@email.com",
                    required: true,
                    className: "rounded-xl h-11"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contato-telefone", children: "WhatsApp / Telefone *" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contato-telefone",
                    type: "tel",
                    value: form.telefone,
                    onChange: (e) => update("telefone", e.target.value),
                    placeholder: "(11) 99999-9999",
                    required: true,
                    className: "rounded-xl h-11"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contato-empresa", children: "Empresa (opcional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "contato-empresa",
                    value: form.empresa,
                    onChange: (e) => update("empresa", e.target.value),
                    placeholder: "Razão social ou CNPJ",
                    className: "rounded-xl h-11"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contato-mensagem", children: "Mensagem *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "contato-mensagem",
                  value: form.mensagem,
                  onChange: (e) => update("mensagem", e.target.value),
                  placeholder: "Conte um pouco sobre sua necessidade, prazo e objetivo...",
                  required: true,
                  rows: 5,
                  className: "rounded-xl resize-y min-h-[120px]"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "submit",
                  disabled: !isValid || status === "loading",
                  className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }),
                    status === "loading" ? "Enviando..." : "Enviar mensagem",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Seus dados são usados apenas para retorno do contato (LGPD)." })
            ] }),
            status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-success font-medium rounded-xl bg-success/10 border border-success/20 px-4 py-3", children: [
              "Mensagem enviada com sucesso! Enviamos uma cópia de confirmação para",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: successEmail }),
              ". Verifique também a caixa de spam. Nossa equipe retornará em breve."
            ] }),
            status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive font-medium rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3", children: errorMessage })
          ]
        }
      )
    ] })
  ] }) });
}
const CADASTRO_URL = "https://cadastro.cadbrasil.com.br";
const WHATSAPP_URL = "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.";
function PageShell({
  children,
  breadcrumbs
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-16 sm:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-28 sm:pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "nav",
        {
          "aria-label": "Breadcrumb",
          className: "mx-auto max-w-7xl px-4 text-sm text-muted-foreground",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Início" }) }),
            breadcrumbs.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "/" }),
              b.to && i < breadcrumbs.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: b.to, className: "hover:text-foreground", children: b.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: b.label })
            ] }, i))
          ] })
        }
      ) }),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCta, {})
  ] });
}
function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-radial", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        " ",
        eyebrow
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl sm:text-6xl font-bold leading-[1.02] tracking-tight text-balance", children: [
        title,
        " ",
        highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-brand bg-clip-text text-transparent", children: highlight })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto", children: description }),
      (primaryCta || secondaryCta) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3 justify-center", children: [
        primaryCta && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: primaryCta.href,
            target: primaryCta.external ? "_blank" : void 0,
            rel: primaryCta.external ? "noreferrer" : void 0,
            className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition",
            children: [
              primaryCta.label,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        secondaryCta && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: secondaryCta.href,
            target: secondaryCta.external ? "_blank" : void 0,
            rel: secondaryCta.external ? "noreferrer" : void 0,
            className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-card border border-border font-semibold hover:bg-accent transition",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-success" }),
              " ",
              secondaryCta.label
            ]
          }
        )
      ] })
    ] })
  ] });
}
function InlineCta({
  title = "Pronto para regularizar seu SICAF?",
  subtitle = "Faça seu cadastro agora ou fale com um especialista no WhatsApp."
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const contextual = (() => {
    if (pathname.includes("beneficios")) {
      return {
        primary: "Quero reduzir risco fiscal",
        secondary: "Comparar meu cenário no WhatsApp"
      };
    }
    if (pathname.includes("assistente")) {
      return {
        primary: "Quero monitoramento automático",
        secondary: "Ver instalação guiada"
      };
    }
    if (pathname.includes("faq")) {
      return {
        primary: "Falar com especialista agora",
        secondary: "Receber checklist por WhatsApp"
      };
    }
    if (pathname.includes("como-funciona")) {
      return {
        primary: "Iniciar meu processo em 24h",
        secondary: "Tirar dúvidas sobre etapas"
      };
    }
    return {
      primary: "🚀 Fazer Cadastro",
      secondary: "💬 WhatsApp"
    };
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-brand p-8 sm:p-12 text-brand-foreground shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-[1fr_auto] gap-6 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-4xl font-bold leading-tight text-balance", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-white/85", children: subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: CADASTRO_URL,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white text-brand font-bold shadow-soft hover:scale-[1.02] transition whitespace-nowrap",
            children: contextual.primary
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: WHATSAPP_URL,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/30 text-white font-bold backdrop-blur hover:bg-white/20 transition whitespace-nowrap",
            children: contextual.secondary
          }
        )
      ] })
    ] })
  ] }) }) });
}
function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
}
function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer }
    }))
  };
}
function buildLandingHead(page2) {
  const canonical = `${SITE_ORIGIN}${page2.path}`;
  const scripts = [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page2.metaTitle,
        description: page2.metaDescription,
        image: OG_IMAGE,
        author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
        publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
        mainEntityOfPage: canonical,
        inLanguage: "pt-BR",
        datePublished: SEO_PUBLISHED,
        dateModified: SEO_MODIFIED,
        keywords: page2.keywords
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: page2.shortTitle,
        description: page2.metaDescription,
        provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
        areaServed: { "@type": "Country", name: "Brasil" },
        serviceType: "Cadastro e regularização SICAF",
        url: canonical
      })
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(
        breadcrumbJsonLd([
          { name: "Início", url: `${SITE_ORIGIN}/` },
          { name: page2.shortTitle, url: canonical }
        ])
      )
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(faqJsonLd(page2.faqs))
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: page2.metaTitle,
        description: page2.metaDescription,
        url: canonical,
        inLanguage: "pt-BR",
        datePublished: SEO_PUBLISHED,
        dateModified: SEO_MODIFIED,
        about: { "@type": "Thing", name: page2.shortTitle, description: page2.quickAnswer },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", ".page-hero-summary"]
        }
      })
    }
  ];
  if (page2.howToSteps?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: page2.metaTitle,
        description: page2.metaDescription,
        inLanguage: "pt-BR",
        step: page2.howToSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
          url: `${canonical}#passo-${i + 1}`
        }))
      })
    });
  }
  if (page2.itemList?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Documentos — ${page2.shortTitle}`,
        numberOfItems: page2.itemList.length,
        itemListElement: page2.itemList.map((name, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name
        }))
      })
    });
  }
  return {
    meta: [
      { title: page2.metaTitle },
      { name: "description", content: page2.metaDescription },
      { name: "keywords", content: page2.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: page2.metaTitle },
      { property: "og:description", content: page2.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "SICAF e Licitações" },
      { property: "article:tag", content: page2.shortTitle },
      { property: "article:tag", content: "SICAF" },
      { property: "article:tag", content: "Licitações públicas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page2.metaTitle },
      { name: "twitter:description", content: page2.metaDescription },
      { name: "twitter:image", content: OG_IMAGE }
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "pt-BR", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical }
    ],
    scripts
  };
}
const $$splitComponentImporter$q = () => import("./sicaf-digital-CiHHtiwL.mjs");
const Route$r = createFileRoute("/sicaf-digital")({
  head: () => buildLandingHead(page$g),
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const page$f = getLandingPage("/sicaf-cadastro-unificado-de-fornecedores");
const $$splitComponentImporter$p = () => import("./sicaf-cadastro-unificado-de-fornecedores-BjkYrfQW.mjs");
const Route$q = createFileRoute("/sicaf-cadastro-unificado-de-fornecedores")({
  head: () => buildLandingHead(page$f),
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const page$e = getLandingPage("/renovacao-sicaf");
const $$splitComponentImporter$o = () => import("./renovacao-sicaf-Do7aA7Tg.mjs");
const Route$p = createFileRoute("/renovacao-sicaf")({
  head: () => buildLandingHead(page$e),
  component: lazyRouteComponent($$splitComponentImporter$o, "component")
});
const page$d = getLandingPage("/regularidade-fiscal");
const $$splitComponentImporter$n = () => import("./regularidade-fiscal-DojHAqxF.mjs");
const Route$o = createFileRoute("/regularidade-fiscal")({
  head: () => buildLandingHead(page$d),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const page$c = getLandingPage("/plataforma-digital");
const $$splitComponentImporter$m = () => import("./plataforma-digital-CU6EjWAZ.mjs");
const Route$n = createFileRoute("/plataforma-digital")({
  head: () => buildLandingHead(page$c),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const miniFaq = [{
  question: "SICAF é obrigatório?",
  answer: "Sim. Sem cadastro ativo no SICAF a empresa não pode participar de licitações públicas federais e de boa parte dos pregões estaduais e municipais."
}, {
  question: "Quais empresas podem se cadastrar no SICAF?",
  answer: "Qualquer pessoa jurídica regularmente constituída no Brasil — MEI, ME, EPP, LTDA, S/A, EIRELI — desde que possua CNPJ ativo e regularidade fiscal."
}, {
  question: "O SICAF tem custo para o fornecedor?",
  answer: "O cadastro no SICAF junto ao governo é gratuito. O que tem custo é a estrutura, o tempo e o conhecimento técnico para mantê-lo regular — é aí que entra a CADBRASIL."
}, {
  question: "Quanto tempo leva para fazer o SICAF?",
  answer: "Com a CADBRASIL, em até 24 horas com a documentação em mãos. Sem apoio especializado, pode levar semanas devido a pendências fiscais e níveis de habilitação."
}];
const $$splitComponentImporter$l = () => import("./o-que-e-sicaf-qtM2mXri.mjs");
const ORIGIN$4 = "https://cadbrasil.com.br";
const Route$m = createFileRoute("/o-que-e-sicaf")({
  head: () => ({
    meta: [...robotsMetaTags(), {
      title: "O que é SICAF? Guia Completo do Cadastro de Fornecedores"
    }, {
      name: "description",
      content: "Entenda o que é o SICAF, como funciona, níveis de habilitação e por que ele é obrigatório para vender ao governo. Saiba como regularizar com a CADBRASIL."
    }, {
      name: "keywords",
      content: "o que é sicaf, sistema cadastramento unificado fornecedores, sicaf compras gov br, cadastro sicaf, níveis sicaf, habilitação licitação, fornecedor governo federal"
    }, {
      property: "og:title",
      content: "O que é SICAF? Guia Completo — CADBRASIL"
    }, {
      property: "og:description",
      content: "Tudo sobre o SICAF: definição, níveis, obrigatoriedade, processo e como regularizar com a CADBRASIL em até 24h."
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: `${ORIGIN$4}/o-que-e-sicaf`
    }, {
      property: "article:section",
      content: "Guias SICAF"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$4}/o-que-e-sicaf`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "O que é SICAF? Guia Completo do Cadastro de Fornecedores",
        description: "Guia definitivo sobre o Sistema de Cadastramento Unificado de Fornecedores (SICAF).",
        author: {
          "@type": "Organization",
          name: "CADBRASIL"
        },
        publisher: {
          "@type": "Organization",
          name: "CADBRASIL"
        },
        mainEntityOfPage: `${ORIGIN$4}/o-que-e-sicaf`,
        inLanguage: "pt-BR"
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "Início",
        url: `${ORIGIN$4}/`
      }, {
        name: "O que é SICAF",
        url: `${ORIGIN$4}/o-que-e-sicaf`
      }]))
    }, {
      type: "application/ld+json",
      children: JSON.stringify(faqJsonLd(miniFaq))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./layout-classico-r3hqKtxj.mjs");
const Route$l = createFileRoute("/layout-classico")({
  head: () => ({
    meta: [{
      name: "robots",
      content: "noindex, follow"
    }, {
      name: "googlebot",
      content: "noindex, follow"
    }, {
      title: "CADBRASIL — Layout clássico (arquivo)"
    }],
    links: [{
      rel: "canonical",
      href: `${SITE_ORIGIN}/layout-classico`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const page$b = getLandingPage("/empresa-inapta");
const $$splitComponentImporter$j = () => import("./empresa-inapta-HTfKqztz.mjs");
const Route$k = createFileRoute("/empresa-inapta")({
  head: () => buildLandingHead(page$b),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const page$a = getLandingPage("/emitir-crc");
const $$splitComponentImporter$i = () => import("./emitir-crc-BG_4qcsc.mjs");
const Route$j = createFileRoute("/emitir-crc")({
  head: () => buildLandingHead(page$a),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const page$9 = getLandingPage("/documentos-necessarios-cadastro-sicaf");
const $$splitComponentImporter$h = () => import("./documentos-necessarios-cadastro-sicaf-aDq8zAcG.mjs");
const Route$i = createFileRoute("/documentos-necessarios-cadastro-sicaf")({
  head: () => buildLandingHead(page$9),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const page$8 = getLandingPage("/credenciamento-sicaf-digital");
const $$splitComponentImporter$g = () => import("./credenciamento-sicaf-digital-DQMo_Rqy.mjs");
const Route$h = createFileRoute("/credenciamento-sicaf-digital")({
  head: () => buildLandingHead(page$8),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const page$7 = getLandingPage("/credenciamento");
const $$splitComponentImporter$f = () => import("./credenciamento-DQ2MqBk2.mjs");
const Route$g = createFileRoute("/credenciamento")({
  head: () => buildLandingHead(page$7),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const page$6 = getLandingPage("/como-regularizar-sicaf-empresa");
const $$splitComponentImporter$e = () => import("./como-regularizar-sicaf-empresa-D0xB88lU.mjs");
const Route$f = createFileRoute("/como-regularizar-sicaf-empresa")({
  head: () => buildLandingHead(page$6),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const steps = [{
  n: "01",
  i: MessageCircle,
  t: "Contato inicial",
  d: "Fale com a CADBRASIL via WhatsApp, formulário no site ou pelo Assistente CADBRASIL. Em minutos um especialista atende e entende seu cenário.",
  time: "5 minutos"
}, {
  n: "02",
  i: FileCheckCorner,
  t: "Checklist personalizada",
  d: "Enviamos uma lista clara e objetiva dos documentos necessários para o porte e atividade da sua empresa. Nada de pedido genérico.",
  time: "Mesmo dia"
}, {
  n: "03",
  i: Bot,
  t: "Análise por IA + revisão humana",
  d: "Nossa tecnologia valida cada documento, identifica certidões vencidas e pendências fiscais. Em seguida, um especialista revisa caso a caso.",
  time: "2 a 6 horas"
}, {
  n: "04",
  i: ShieldCheck,
  t: "Cadastro e habilitação",
  d: "Realizamos o cadastro no SICAF, ativamos os níveis necessários, emitimos o CRC e entregamos tudo no seu painel CADBRASIL.",
  time: "Até 24h"
}, {
  n: "05",
  i: Headphones,
  t: "Suporte contínuo",
  d: "Monitoramos automaticamente vencimentos de certidões. Antes de qualquer prazo, renovamos. Suporte humano por WhatsApp e AnyDesk.",
  time: "Permanente"
}];
const $$splitComponentImporter$d = () => import("./como-funciona-jIB8mUy9.mjs");
const ORIGIN$3 = "https://cadbrasil.com.br";
const Route$e = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [...robotsMetaTags(), {
      title: "Como Funciona o Processo SICAF com a CADBRASIL — Passo a Passo"
    }, {
      name: "description",
      content: "Veja como funciona o processo CADBRASIL para Cadastro, Regularização e Atualização SICAF: 5 passos simples, com IA, especialistas e suporte contínuo. Pronto em até 24h."
    }, {
      name: "keywords",
      content: "como fazer sicaf, processo sicaf, passo a passo sicaf, consultoria sicaf, regularizar sicaf rapido, cadastro sicaf compras.gov.br"
    }, {
      property: "og:title",
      content: "Como Funciona o SICAF com a CADBRASIL"
    }, {
      property: "og:description",
      content: "Processo simples em 5 passos. IA + especialistas. SICAF pronto em até 24h."
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: `${ORIGIN$3}/como-funciona`
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$3}/como-funciona`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Como cadastrar e regularizar o SICAF com a CADBRASIL",
        description: "Processo em 5 passos para ter o SICAF ativo e regular em até 24 horas.",
        totalTime: "PT24H",
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.t,
          text: s.d
        }))
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "Início",
        url: `${ORIGIN$3}/`
      }, {
        name: "Como funciona",
        url: `${ORIGIN$3}/como-funciona`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const page$5 = getLandingPage("/como-fazer-cadastro-no-sicaf");
const $$splitComponentImporter$c = () => import("./como-fazer-cadastro-no-sicaf-B1og3DdN.mjs");
const Route$d = createFileRoute("/como-fazer-cadastro-no-sicaf")({
  head: () => buildLandingHead(page$5),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const page$4 = getLandingPage("/como-cadastrar-empresa-sicaf");
const $$splitComponentImporter$b = () => import("./como-cadastrar-empresa-sicaf-DnE_aZeH.mjs");
const Route$c = createFileRoute("/como-cadastrar-empresa-sicaf")({
  head: () => buildLandingHead(page$4),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const page$3 = getLandingPage("/como-atualizar-certificados-sicaf");
const $$splitComponentImporter$a = () => import("./como-atualizar-certificados-sicaf-cBN8kWDm.mjs");
const Route$b = createFileRoute("/como-atualizar-certificados-sicaf")({
  head: () => buildLandingHead(page$3),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const CADASTRO_SICAF_PASSO_A_PASSO_PATH = "/cadastro-sicaf-passo-a-passo";
const guiaCadastroSicafMeta = {
  title: "Cadastro SICAF 2026 | Passo a Passo Completo — Guia CADBRASIL",
  description: "Tutorial completo para cadastro no SICAF em 2026: passo a passo, documentos por nível, certificado digital, prazos, renovação, erros comuns e como habilitar sua empresa em até 24h com a CADBRASIL.",
  keywords: "cadastro sicaf, como cadastrar sicaf, sicaf passo a passo, documentos sicaf, niveis sicaf, habilitacao sicaf, compras.gov.br sicaf, certificado digital sicaf, crc sicaf, regularizar sicaf, atualizar sicaf, sicaf 2026, fornecedor governo, licitacoes publicas sicaf, cadastro fornecedor federal, sicaf mei, sicaf epp, renovacao sicaf, custo sicaf"
};
const quemPrecisaSicaf = [
  "Empresas (LTDA, SA, EIRELI) que participam ou pretendem participar de licitações federais",
  "MEI quando o edital permitir participação",
  "ME e EPP em programas com tratamento diferenciado (LC 123/2006)",
  "Fornecedores que precisam renovar certidões ou níveis de habilitação",
  "Empresas que passam a disputar contratos públicos pela primeira vez"
];
const guiaToc = [
  { id: "o-que-e", label: "O que é SICAF" },
  { id: "quem-precisa", label: "Quem precisa" },
  { id: "obrigatoriedade", label: "É obrigatório?" },
  { id: "passo-a-passo", label: "Passo a passo oficial" },
  { id: "niveis", label: "Níveis I a VI" },
  { id: "documentos", label: "Documentos" },
  { id: "certificado-digital", label: "Certificado digital" },
  { id: "custos-prazos", label: "Custos e prazos" },
  { id: "renovacao", label: "Renovação" },
  { id: "glossario", label: "Glossário SICAF" },
  { id: "comparativo", label: "Sozinho vs CADBRASIL" },
  { id: "erros-comuns", label: "Erros comuns" },
  { id: "cadbrasil", label: "Cadastro com CADBRASIL" },
  { id: "faq", label: "Perguntas frequentes" }
];
const passosOficiais = [
  {
    n: "01",
    t: "Prepare o certificado digital e-CNPJ",
    d: "O acesso ao Compras.gov.br e ao fluxo de credenciamento exige certificado digital válido (e-CNPJ A1 ou A3) vinculado ao CNPJ da empresa.",
    time: "1 a 3 dias"
  },
  {
    n: "02",
    t: "Acesse o portal Compras.gov.br",
    d: "Entre em compras.gov.br com o certificado, localize o módulo de fornecedores e inicie o credenciamento no SICAF.",
    time: "15 minutos"
  },
  {
    n: "03",
    t: "Credenciamento inicial (Nível I)",
    d: "Preencha dados cadastrais da empresa, sócios, endereço, contatos e atividades econômicas (CNAE). Este é o primeiro nível obrigatório.",
    time: "30 a 60 minutos"
  },
  {
    n: "04",
    t: "Envie documentos por nível de habilitação",
    d: "Anexe contrato social, cartão CNPJ, certidões negativas e demais exigências dos níveis II a VI conforme o objeto que pretende licitar.",
    time: "1 a 5 dias"
  },
  {
    n: "05",
    t: "Valide regularidade fiscal e trabalhista",
    d: "O sistema cruza CND Federal, FGTS, CNDT e certidões estaduais/municipais. Pendências bloqueiam a habilitação.",
    time: "Variável"
  },
  {
    n: "06",
    t: "Ative linhas de fornecimento (CATMAT/CATSER)",
    d: "Cadastre produtos e serviços no catálogo quando necessário ao segmento da sua empresa e aos editais pretendidos.",
    time: "1 a 2 dias"
  },
  {
    n: "07",
    t: "Emita o CRC e confirme status Regular",
    d: "Com todos os níveis exigidos ativos, emita o Certificado de Registro Cadastral (CRC) e verifique situação Regular no painel.",
    time: "Imediato"
  },
  {
    n: "08",
    t: "Monitore vencimentos e renove certidões",
    d: "Certidões vencem (muitas em 90 ou 180 dias). SICAF irregular desclassifica sua empresa na habilitação de qualquer pregão.",
    time: "Contínuo"
  }
];
const niveisSicaf = [
  { n: "I", t: "Credenciamento", d: "Dados básicos da empresa e porta de entrada no sistema." },
  { n: "II", t: "Habilitação jurídica", d: "Contrato social, atas, procurações e documentos societários." },
  { n: "III", t: "Regularidade fiscal e trabalhista", d: "CND Federal, FGTS, CND estadual/municipal e CNDT." },
  { n: "IV", t: "Qualificação técnica", d: "Atestados de capacidade técnica compatíveis com o objeto." },
  { n: "V", t: "Qualificação econômico-financeira", d: "Balanços, índices e demonstrações financeiras." },
  { n: "VI", t: "Linhas de fornecimento", d: "CATMAT/CATSER — catálogo de bens e serviços." }
];
const documentosSicaf = [
  { doc: "Cartão CNPJ atualizado", niveis: "I, II", prazo: "Sempre válido" },
  { doc: "Contrato social / Estatuto + alterações", niveis: "II", prazo: "Atualizado" },
  { doc: "RG e CPF dos administradores", niveis: "I, II", prazo: "Válidos" },
  { doc: "Comprovante de endereço da sede", niveis: "I", prazo: "Até 90 dias" },
  { doc: "Certidão Negativa de Débitos (RFB)", niveis: "III", prazo: "90 a 180 dias" },
  { doc: "Certidão de Regularidade FGTS (CRF)", niveis: "III", prazo: "180 dias" },
  { doc: "CNDT — débitos trabalhistas", niveis: "III", prazo: "180 dias" },
  { doc: "CND estadual e municipal", niveis: "III", prazo: "Varia por UF/município" },
  { doc: "Balanço patrimonial (último exercício)", niveis: "V", prazo: "Exercício encerrado" },
  { doc: "Atestados de capacidade técnica", niveis: "IV", prazo: "Conforme edital" },
  { doc: "Certificado digital e-CNPJ", niveis: "Acesso", prazo: "1 a 3 anos (A1/A3)" }
];
const errosComuns = [
  "Enviar certidão vencida ou com divergência de razão social/CNPJ.",
  "Cadastrar apenas o Nível I e tentar licitar sem níveis III, IV ou V exigidos.",
  "Ignorar pendência fiscal estadual ou municipal.",
  "Não renovar FGTS e CND Federal antes do vencimento.",
  "Usar certificado digital de pessoa física em vez de e-CNPJ.",
  "Desatualizar contrato social após alteração societária sem refletir no SICAF."
];
const guiaFaqs = [
  {
    question: "O SICAF é obrigatório para licitar no Brasil?",
    answer: "Para licitações e contratos do Governo Federal, sim. Muitos estados e municípios também exigem SICAF ativo ou consultam a regularidade do fornecedor no processo de habilitação."
  },
  {
    question: "Qual a diferença entre cadastro, credenciamento e habilitação no SICAF?",
    answer: "Cadastro é o ato de inserir a empresa no sistema. Credenciamento é o Nível I (dados básicos). Habilitação é o conjunto de níveis II a VI exigidos conforme o edital e o objeto da contratação."
  },
  {
    question: "Quanto custa fazer cadastro no SICAF?",
    answer: "O credenciamento oficial no portal do governo é gratuito. Os custos reais costumam ser certificado digital e-CNPJ, emissão/atualização de certidões e eventual assessoria especializada."
  },
  {
    question: "Quanto tempo leva para concluir o cadastro SICAF?",
    answer: "Sem apoio especializado, o prazo costuma variar de 7 a 20 dias úteis. Com documentação organizada e assessoria CADBRASIL, a habilitação pode ser concluída em até 24 horas."
  },
  {
    question: "MEI, ME e EPP podem se cadastrar no SICAF?",
    answer: "Sim. MEI, ME, EPP, LTDA, S/A e EIRELI podem se credenciar, desde que atendam requisitos documentais e de regularidade para os níveis exigidos."
  },
  {
    question: "Preciso de certificado digital para cadastrar no SICAF?",
    answer: "Sim. Para pessoa jurídica, o certificado digital e-CNPJ (A1 ou A3) é praticamente indispensável para acessar o Compras.gov.br."
  },
  {
    question: "O que é o CRC e quando emitir?",
    answer: "CRC é o Certificado de Registro Cadastral. Emita quando o cadastro estiver regular nos níveis exigidos — especialmente antes de disputar pregões que exigem comprovação de habilitação."
  },
  {
    question: "Posso participar de licitação com SICAF irregular?",
    answer: "Não de forma segura. Mesmo vencendo o pregão, a empresa tende a ser desclassificada na fase de habilitação se houver pendência cadastral ou documental."
  },
  {
    question: "Com que frequência devo atualizar o SICAF?",
    answer: "Não existe uma data única de renovação anual. O cadastro depende do vencimento de certidões (muitas a cada 180 dias). Monitoramento contínuo evita bloqueios."
  },
  {
    question: "Qual a diferença entre SICAF e PNCP?",
    answer: "SICAF é o cadastro/habilitação do fornecedor. O PNCP centraliza informações de contratações públicas; são sistemas complementares no ecossistema de compras."
  },
  {
    question: "Quais os erros mais comuns no cadastro SICAF?",
    answer: "Certidão vencida, divergência de razão social, níveis incompletos, certificado digital inválido, CNAE incompatível com o edital e ausência de renovação de certidões."
  },
  {
    question: "A CADBRASIL faz o cadastro SICAF para minha empresa?",
    answer: "Sim. Fazemos credenciamento, regularização, atualização de certidões, emissão de CRC e monitoramento com IA e equipe especializada — com entrega em até 24 horas quando a documentação está completa."
  },
  {
    question: "Cadastro SICAF passo a passo: por onde começar?",
    answer: "Comece validando CNPJ e certificado digital, depois acesse Compras.gov.br, conclua o Nível I e avance nos demais níveis conforme seu edital-alvo."
  }
];
const glossarioSicaf = [
  {
    term: "SICAF",
    def: "Sistema de Cadastramento Unificado de Fornecedores — cadastro obrigatório para fornecer ao Governo Federal."
  },
  {
    term: "CRC",
    def: "Certificado de Registro Cadastral — comprova situação cadastral da empresa no SICAF."
  },
  {
    term: "Compras.gov.br",
    def: "Portal oficial de compras públicas onde o credenciamento SICAF é realizado."
  },
  {
    term: "Nível de habilitação",
    def: "Conjunto documental (I a VI) exigido conforme edital e objeto licitado."
  },
  {
    term: "CATMAT / CATSER",
    def: "Catálogos de materiais e serviços para linhas de fornecimento (Nível VI)."
  },
  {
    term: "CND",
    def: "Certidão Negativa de Débitos — comprova regularidade fiscal perante a Receita Federal."
  }
];
const comparativoCadastro = [
  { aspecto: "Prazo médio", sozinho: "7 a 20 dias úteis", cadbrasil: "Até 24 horas*" },
  { aspecto: "Risco de erro", sozinho: "Alto (certidões, níveis)", cadbrasil: "Baixo (revisão especializada)" },
  { aspecto: "Monitoramento", sozinho: "Manual", cadbrasil: "IA + alertas de vencimento" },
  { aspecto: "Suporte", sozinho: "Fóruns e tutoriais", cadbrasil: "Especialistas + WhatsApp" }
];
const relatedGuides = [
  { to: "/cadastro-sicaf", label: "Cadastro SICAF — página comercial" },
  { to: "/o-que-e-sicaf", label: "O que é SICAF — guia completo" },
  { to: "/como-fazer-cadastro-no-sicaf", label: "Como fazer cadastro no SICAF" },
  { to: "/emitir-crc", label: "Emitir CRC SICAF" },
  { to: "/regularidade-fiscal", label: "Regularidade fiscal SICAF" },
  { to: "/faq/cadastro-sicaf", label: "FAQ Cadastro SICAF" },
  { to: "/assistente", label: "Assistente CADBRASIL com IA" }
];
const usefulLinks = [
  { href: "https://www.gov.br/compras", label: "Compras.gov.br (oficial)" },
  { href: "https://www.gov.br/pncp", label: "PNCP — Portal Nacional de Contratações" },
  { href: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm", label: "Lei 14.133/2021" }
];
function buildGuiaHead(canonicalPath = CADASTRO_SICAF_PASSO_A_PASSO_PATH) {
  const canonical = `${SITE_ORIGIN}${canonicalPath}`;
  const howToSteps = passosOficiais.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.t,
    text: s.d,
    url: `${canonical}#passo-${i + 1}`
  }));
  return {
    meta: [
      { title: guiaCadastroSicafMeta.title },
      { name: "description", content: guiaCadastroSicafMeta.description },
      { name: "keywords", content: guiaCadastroSicafMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: guiaCadastroSicafMeta.title },
      { property: "og:description", content: guiaCadastroSicafMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Guias SICAF" },
      { property: "article:tag", content: "cadastro sicaf passo a passo" },
      { property: "article:tag", content: "tutorial sicaf 2026" },
      { property: "article:tag", content: "licitações públicas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: guiaCadastroSicafMeta.title },
      { name: "twitter:description", content: guiaCadastroSicafMeta.description },
      { name: "twitter:image", content: OG_IMAGE }
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "pt-BR", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Cadastro SICAF 2026: passo a passo completo para fornecedores",
          description: guiaCadastroSicafMeta.description,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "Guias e Tutoriais SICAF",
          keywords: guiaCadastroSicafMeta.keywords,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como fazer cadastro no SICAF passo a passo",
          description: guiaCadastroSicafMeta.description,
          image: OG_IMAGE,
          totalTime: "P14D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description: "Credenciamento oficial gratuito; custos de certificado digital e assessoria podem aplicar-se."
          },
          supply: documentosSicaf.slice(0, 6).map((item) => ({
            "@type": "HowToSupply",
            name: item.doc
          })),
          tool: [
            { "@type": "HowToTool", name: "Certificado digital e-CNPJ" },
            { "@type": "HowToTool", name: "Portal Compras.gov.br" }
          ],
          inLanguage: "pt-BR",
          step: howToSteps
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Guias", url: `${SITE_ORIGIN}/faq` },
            { name: "Cadastro SICAF passo a passo", url: canonical }
          ])
        )
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(guiaFaqs))
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Documentos para cadastro SICAF",
          numberOfItems: documentosSicaf.length,
          itemListElement: documentosSicaf.map((row, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: row.doc
          }))
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Glossário SICAF",
          hasDefinedTerm: glossarioSicaf.map((g2) => ({
            "@type": "DefinedTerm",
            name: g2.term,
            description: g2.def
          }))
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: guiaCadastroSicafMeta.title,
          description: guiaCadastroSicafMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Cadastro SICAF passo a passo",
            description: "Guia completo para credenciar empresa no SICAF com documentos, níveis, certificado digital, prazos e assessoria CADBRASIL."
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".guide-hero-lead", ".guide-summary"]
          }
        })
      }
    ]
  };
}
const $$splitComponentImporter$9 = () => import("./cadastro-sicaf-passo-a-passo-D2lb7eEZ.mjs");
const Route$a = createFileRoute("/cadastro-sicaf-passo-a-passo")({
  head: () => buildGuiaHead(),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const page$2 = getLandingPage("/cadastro-sicaf-licitacao-publica");
const $$splitComponentImporter$8 = () => import("./cadastro-sicaf-licitacao-publica-h9FSEUuQ.mjs");
const Route$9 = createFileRoute("/cadastro-sicaf-licitacao-publica")({
  head: () => buildLandingHead(page$2),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const page$1 = getLandingPage("/cadastro-sicaf");
const $$splitComponentImporter$7 = () => import("./cadastro-sicaf-DGgwTP__.mjs");
const Route$8 = createFileRoute("/cadastro-sicaf")({
  head: () => buildLandingHead(page$1),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./beneficios-CFEjf7BW.mjs");
const ORIGIN$2 = "https://cadbrasil.com.br";
const Route$7 = createFileRoute("/beneficios")({
  head: () => ({
    meta: [...robotsMetaTags(), {
      title: "Benefícios CADBRASIL — Por Que Empresas Escolhem Nosso SICAF"
    }, {
      name: "description",
      content: "Velocidade, segurança jurídica, tecnologia com IA, suporte humano especializado e gestão contínua de certidões. Veja por que +8.000 fornecedores confiam na CADBRASIL."
    }, {
      name: "keywords",
      content: "beneficios sicaf, vantagens cadbrasil, melhor consultoria sicaf, suporte sicaf, gestao certidoes, regularidade fiscal automatica"
    }, {
      property: "og:title",
      content: "Benefícios CADBRASIL · SICAF sem dor de cabeça"
    }, {
      property: "og:description",
      content: "Por que +8.000 fornecedores escolheram a CADBRASIL para cuidar do SICAF."
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: `${ORIGIN$2}/beneficios`
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$2}/beneficios`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "Início",
        url: `${ORIGIN$2}/`
      }, {
        name: "Benefícios",
        url: `${ORIGIN$2}/beneficios`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const page = getLandingPage("/autoatendimento-sicaf");
const $$splitComponentImporter$5 = () => import("./autoatendimento-sicaf-BpZeHgMO.mjs");
const Route$6 = createFileRoute("/autoatendimento-sicaf")({
  head: () => buildLandingHead(page),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./assistente-Du0iJipr.mjs");
const ORIGIN$1 = "https://cadbrasil.com.br";
const Route$5 = createFileRoute("/assistente")({
  head: () => ({
    meta: [...robotsMetaTags(), {
      title: "Assistente CADBRASIL 2026 — IA para Monitorar seu SICAF"
    }, {
      name: "description",
      content: "Conheça o Assistente CADBRASIL: app com IA que monitora seu SICAF 24/7, identifica pendências e renova certidões automaticamente com suporte humano."
    }, {
      name: "keywords",
      content: "assistente cadbrasil, software sicaf, automação sicaf, IA licitações, gestão certidões, anydesk sicaf, atualizar sicaf automatico"
    }, {
      property: "og:title",
      content: "Assistente CADBRASIL — IA para o seu SICAF"
    }, {
      property: "og:description",
      content: "O jeito moderno de manter seu SICAF sempre regular. IA + especialistas + suporte remoto."
    }, {
      property: "og:type",
      content: "product"
    }, {
      property: "og:url",
      content: `${ORIGIN$1}/assistente`
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$1}/assistente`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Assistente CADBRASIL",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows, macOS",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BRL"
        },
        description: "Aplicativo com IA para monitorar, regularizar e renovar o SICAF automaticamente.",
        publisher: {
          "@type": "Organization",
          name: "CADBRASIL"
        }
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "Início",
        url: `${ORIGIN$1}/`
      }, {
        name: "Assistente",
        url: `${ORIGIN$1}/assistente`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-B0_SckJ8.mjs");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [...robotsMetaTags(), {
      title: "CADBRASIL · Cadastro e Regularização SICAF em até 24h"
    }, {
      name: "description",
      content: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas. Tecnologia, IA e atendimento humano. Marca CADBRASIL."
    }, {
      name: "keywords",
      content: "cadastro sicaf, atualizar sicaf, regularizar sicaf, consultoria sicaf, cadastro compras.gov.br, fornecedor governo, licitações públicas, emitir CRC sicaf, regularidade fiscal sicaf"
    }, {
      property: "og:title",
      content: "CADBRASIL · Seu SICAF Regularizado Sem Complicação"
    }, {
      property: "og:description",
      content: "Cadastro, regularização e atualização SICAF em até 24h. Especialistas em licitações públicas."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: `${SITE_ORIGIN}/`
    }, {
      property: "og:image",
      content: OG_IMAGE
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:image",
      content: OG_IMAGE
    }],
    links: [{
      rel: "canonical",
      href: `${SITE_ORIGIN}/`
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "CADBRASIL",
        brand: "CADBRASIL",
        description: "Especialistas em SICAF: cadastro, regularização, atualização e suporte completo para licitações públicas.",
        areaServed: "BR",
        serviceType: ["Cadastro SICAF", "Regularização SICAF", "Atualização SICAF", "Renovação SICAF"]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./faq.index-Ts7bb66b.mjs");
const ORIGIN = "https://cadbrasil.com.br";
const Route$3 = createFileRoute("/faq/")({
  head: () => ({
    meta: [...robotsMetaTags(), {
      title: "FAQ SICAF 2026 — 15 Guias sobre Cadastro, Licitações e CADBRASIL"
    }, {
      name: "description",
      content: "Central com 15 artigos especializados: cadastro SICAF, regularização, certificado digital, níveis, CRC, pregão eletrônico, PNCP, MEI/EPP, custos e mais. Conteúdo otimizado para Google e IA."
    }, {
      name: "keywords",
      content: "faq sicaf, perguntas sicaf, guia sicaf, cadastro sicaf duvidas, licitacoes publicas faq, cadbrasil ajuda, sicaf 2026"
    }, {
      property: "og:title",
      content: "FAQ SICAF — 15 temas especializados | CADBRASIL"
    }, {
      property: "og:description",
      content: "Artigos completos sobre SICAF, licitações e serviços CADBRASIL — SEO e respostas para assistentes de IA."
    }, {
      property: "og:url",
      content: `${ORIGIN}/faq`
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN}/faq`
    }, {
      rel: "alternate",
      hrefLang: "pt-BR",
      href: `${ORIGIN}/faq`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "Início",
        url: `${ORIGIN}/`
      }, {
        name: "FAQ",
        url: `${ORIGIN}/faq`
      }]))
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "FAQ SICAF — CADBRASIL",
        description: "15 guias especializados sobre cadastro SICAF, licitações públicas e serviços CADBRASIL.",
        url: `${ORIGIN}/faq`,
        inLanguage: "pt-BR",
        hasPart: faqCategories.map((c) => ({
          "@type": "Article",
          name: c.title,
          url: `${ORIGIN}/faq/${c.slug}`,
          description: c.description
        }))
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify(faqJsonLd(faqCategories.flatMap((c) => c.items.slice(0, 2)).slice(0, 12)))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./cadastro-sicaf-passo-passo-BpBrV1BQ.mjs");
const Route$2 = createFileRoute("/guia/cadastro-sicaf-passo-passo")({
  beforeLoad: () => {
    throw redirect({
      to: "/cadastro-sicaf-passo-a-passo",
      replace: true
    });
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./faq._slug-D54Fnj4w.mjs");
const $$splitNotFoundComponentImporter = () => import("./faq._slug-DcuIQ5bV.mjs");
const Route$1 = createFileRoute("/faq/$slug")({
  loader: ({
    params
  }) => {
    const category = getFaqCategory(params.slug);
    if (!category) throw notFound();
    return {
      category
    };
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: [{
        title: "FAQ — CADBRASIL"
      }]
    };
    const c = loaderData.category;
    const canonical = `${SITE_ORIGIN}/faq/${c.slug}`;
    return {
      meta: [...robotsMetaTags(), {
        title: c.metaTitle
      }, {
        name: "description",
        content: c.metaDescription
      }, {
        name: "keywords",
        content: c.keywords
      }, {
        name: "author",
        content: "CADBRASIL"
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:locale",
        content: "pt_BR"
      }, {
        property: "og:site_name",
        content: "CADBRASIL"
      }, {
        property: "og:title",
        content: c.metaTitle
      }, {
        property: "og:description",
        content: c.metaDescription
      }, {
        property: "og:url",
        content: canonical
      }, {
        property: "og:image",
        content: OG_IMAGE
      }, {
        property: "article:published_time",
        content: SEO_PUBLISHED
      }, {
        property: "article:modified_time",
        content: SEO_MODIFIED
      }, {
        property: "article:section",
        content: "FAQ SICAF"
      }, {
        property: "article:tag",
        content: "SICAF"
      }, {
        property: "article:tag",
        content: c.shortTitle
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: c.metaTitle
      }, {
        name: "twitter:description",
        content: c.metaDescription
      }, {
        name: "twitter:image",
        content: OG_IMAGE
      }],
      links: [{
        rel: "canonical",
        href: canonical
      }, {
        rel: "alternate",
        hrefLang: "pt-BR",
        href: canonical
      }, {
        rel: "alternate",
        hrefLang: "x-default",
        href: canonical
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: c.title,
          description: c.metaDescription,
          image: OG_IMAGE,
          author: {
            "@type": "Organization",
            name: "CADBRASIL",
            url: SITE_ORIGIN
          },
          publisher: {
            "@type": "Organization",
            name: "CADBRASIL",
            url: SITE_ORIGIN
          },
          mainEntityOfPage: canonical,
          articleSection: "FAQ SICAF",
          keywords: c.keywords,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED
        })
      }, {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(c.items))
      }, {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([{
          name: "Início",
          url: `${SITE_ORIGIN}/`
        }, {
          name: "FAQ",
          url: `${SITE_ORIGIN}/faq`
        }, {
          name: c.shortTitle,
          url: canonical
        }]))
      }, {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: c.metaTitle,
          description: c.metaDescription,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: c.shortTitle,
            description: c.quickAnswer
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".faq-page-summary"]
          }
        })
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const CONTACT_TYPES = [
  { id: "cliente", label: "Cliente / SICAF" },
  { id: "parceria", label: "Parcerias" },
  { id: "projeto", label: "Projetos" },
  { id: "servico", label: "Serviços" },
  { id: "trabalho", label: "Trabalhe conosco" },
  { id: "outro", label: "Outros assuntos" }
];
const contactPayloadSchema = objectType({
  nome: stringType().trim().min(2, "Informe seu nome"),
  email: stringType().trim().email("E-mail inválido").transform((v) => v.toLowerCase()),
  telefone: stringType().trim().min(8, "Informe um telefone válido"),
  empresa: stringType().trim().optional(),
  tipo: enumType(["cliente", "parceria", "projeto", "servico", "trabalho", "outro"]),
  mensagem: stringType().trim().min(10, "Mensagem muito curta"),
  website: stringType().max(0).optional()
});
function contactTypeLabel(tipo) {
  return CONTACT_TYPES.find((t) => t.id === tipo)?.label ?? tipo;
}
function formatContactEmailBody(data) {
  const tipo = contactTypeLabel(data.tipo);
  return [
    "Novo contato recebido pelo site CADBRASIL",
    "",
    `Motivo: ${tipo}`,
    `Nome: ${data.nome}`,
    `E-mail: ${data.email}`,
    `Telefone/WhatsApp: ${data.telefone}`,
    data.empresa ? `Empresa: ${data.empresa}` : null,
    "",
    "Mensagem:",
    data.mensagem,
    "",
    "---",
    `Enviado em: ${(/* @__PURE__ */ new Date()).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`
  ].filter(Boolean).join("\n");
}
function formatClientConfirmationBody(data) {
  const tipo = contactTypeLabel(data.tipo);
  return [
    `Olá, ${data.nome}!`,
    "",
    "Recebemos sua mensagem pelo site da CADBRASIL com sucesso.",
    "Nossa equipe já foi notificada e retornará em breve no e-mail ou WhatsApp informado.",
    "",
    "Resumo do seu contato:",
    `Motivo: ${tipo}`,
    data.empresa ? `Empresa: ${data.empresa}` : null,
    `Telefone/WhatsApp: ${data.telefone}`,
    "",
    "Sua mensagem:",
    data.mensagem,
    "",
    "---",
    "CADBRASIL · Especialistas em SICAF",
    "https://cadbrasil.com.br",
    "documentos@fornecedordigital.com.br"
  ].filter(Boolean).join("\n");
}
function formatClientConfirmationHtml(data) {
  const tipo = contactTypeLabel(data.tipo);
  const empresa = data.empresa ? `<p><strong>Empresa:</strong> ${escapeHtml(data.empresa)}</p>` : "";
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1a2c66;max-width:560px">
      <p>Olá, <strong>${escapeHtml(data.nome)}</strong>!</p>
      <p>Recebemos sua mensagem pelo site da <strong>CADBRASIL</strong> com sucesso.</p>
      <p>Nossa equipe já foi notificada e retornará em breve no e-mail ou WhatsApp informado.</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0" />
      <p><strong>Resumo do seu contato</strong></p>
      <p><strong>Motivo:</strong> ${escapeHtml(tipo)}</p>
      ${empresa}
      <p><strong>Telefone/WhatsApp:</strong> ${escapeHtml(data.telefone)}</p>
      <p><strong>Sua mensagem:</strong></p>
      <p style="background:#f4f6fb;padding:12px;border-radius:8px">${escapeHtml(data.mensagem)}</p>
      <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0" />
      <p style="font-size:12px;color:#6b7280">
        CADBRASIL · Especialistas em SICAF<br />
        <a href="https://cadbrasil.com.br">cadbrasil.com.br</a>
      </p>
    </div>
  `.trim();
}
function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
const CONTACT_INBOX_EMAIL = "documentos@fornecedordigital.com.br";
function getMailgunConfig() {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const fromEmail = process.env.MAILGUN_FROM_EMAIL;
  const fromName = process.env.MAILGUN_FROM_NAME;
  const toEmail = process.env.MAILGUN_TO_EMAIL?.trim() || CONTACT_INBOX_EMAIL;
  const apiUrl = process.env.MAILGUN_API_URL ?? "https://api.mailgun.net";
  if (!apiKey || !domain || !fromEmail || !fromName) {
    return null;
  }
  return { apiKey, domain, fromEmail, fromName, toEmail, apiUrl };
}
function formatRecipient(name, email) {
  const safeName = name.replace(/[<>"]/g, "").trim();
  const safeEmail = email.trim().toLowerCase();
  return safeName ? `${safeName} <${safeEmail}>` : safeEmail;
}
async function sendMailgunMessage(config, options) {
  const body = new URLSearchParams();
  body.set("from", `${config.fromName} <${config.fromEmail}>`);
  body.set("to", options.to);
  body.set("subject", options.subject);
  body.set("text", options.text);
  if (options.html) {
    body.set("html", options.html);
  }
  if (options.replyTo) {
    body.set("h:Reply-To", options.replyTo);
  }
  const endpoint = `${config.apiUrl.replace(/\/$/, "")}/v3/${config.domain}/messages`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${config.apiKey}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body.toString()
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = payload.message ?? `HTTP ${response.status}`;
    throw new Error(`MAILGUN_SEND_FAILED: ${detail}`);
  }
  return { id: payload.id, message: payload.message };
}
async function sendContactEmail(data) {
  const config = getMailgunConfig();
  if (!config) {
    throw new Error("MAILGUN_NOT_CONFIGURED");
  }
  const clientEmail = data.email.trim().toLowerCase();
  const tipo = contactTypeLabel(data.tipo);
  const teamSubject = `[Site CADBRASIL] Contato: ${tipo} — ${data.nome}`;
  const teamBody = formatContactEmailBody(data);
  const clientSubject = "Recebemos sua mensagem — CADBRASIL";
  const clientText = formatClientConfirmationBody(data);
  const clientHtml = formatClientConfirmationHtml(data);
  const [teamResult, clientResult] = await Promise.all([
    sendMailgunMessage(config, {
      to: config.toEmail,
      subject: teamSubject,
      text: teamBody,
      replyTo: formatRecipient(data.nome, clientEmail)
    }),
    sendMailgunMessage(config, {
      to: formatRecipient(data.nome, clientEmail),
      subject: clientSubject,
      text: clientText,
      html: clientHtml
    })
  ]);
  return {
    team: teamResult,
    client: clientResult,
    clientEmail
  };
}
const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const json = await request.json();
          const parsed = contactPayloadSchema.safeParse(json);
          if (!parsed.success) {
            return Response.json(
              {
                ok: false,
                error: "Dados inválidos",
                details: parsed.error.flatten().fieldErrors
              },
              { status: 400 }
            );
          }
          if (parsed.data.website) {
            return Response.json({ ok: true });
          }
          const result = await sendContactEmail(parsed.data);
          return Response.json({
            ok: true,
            message: "Mensagem enviada com sucesso.",
            clientEmail: result.clientEmail
          });
        } catch (error) {
          console.error("[api/contact]", error);
          if (error instanceof Error && error.message === "MAILGUN_NOT_CONFIGURED") {
            return Response.json(
              { ok: false, error: "Serviço de e-mail não configurado." },
              { status: 503 }
            );
          }
          const detail = error instanceof Error && error.message.includes("MAILGUN_SEND_FAILED") ? error.message.replace("MAILGUN_SEND_FAILED: ", "") : null;
          return Response.json(
            {
              ok: false,
              error: detail ? `Falha ao enviar e-mail: ${detail}` : "Não foi possível enviar sua mensagem. Tente novamente em instantes."
            },
            { status: 502 }
          );
        }
      }
    }
  }
});
const Versao2Route = Route$t.update({
  id: "/versao2",
  path: "/versao2",
  getParentRoute: () => Route$u
});
const SitemapDotxmlRoute = Route$s.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$u
});
const SicafDigitalRoute = Route$r.update({
  id: "/sicaf-digital",
  path: "/sicaf-digital",
  getParentRoute: () => Route$u
});
const SicafCadastroUnificadoDeFornecedoresRoute = Route$q.update({
  id: "/sicaf-cadastro-unificado-de-fornecedores",
  path: "/sicaf-cadastro-unificado-de-fornecedores",
  getParentRoute: () => Route$u
});
const RenovacaoSicafRoute = Route$p.update({
  id: "/renovacao-sicaf",
  path: "/renovacao-sicaf",
  getParentRoute: () => Route$u
});
const RegularidadeFiscalRoute = Route$o.update({
  id: "/regularidade-fiscal",
  path: "/regularidade-fiscal",
  getParentRoute: () => Route$u
});
const PlataformaDigitalRoute = Route$n.update({
  id: "/plataforma-digital",
  path: "/plataforma-digital",
  getParentRoute: () => Route$u
});
const OQueESicafRoute = Route$m.update({
  id: "/o-que-e-sicaf",
  path: "/o-que-e-sicaf",
  getParentRoute: () => Route$u
});
const LayoutClassicoRoute = Route$l.update({
  id: "/layout-classico",
  path: "/layout-classico",
  getParentRoute: () => Route$u
});
const EmpresaInaptaRoute = Route$k.update({
  id: "/empresa-inapta",
  path: "/empresa-inapta",
  getParentRoute: () => Route$u
});
const EmitirCrcRoute = Route$j.update({
  id: "/emitir-crc",
  path: "/emitir-crc",
  getParentRoute: () => Route$u
});
const DocumentosNecessariosCadastroSicafRoute = Route$i.update({
  id: "/documentos-necessarios-cadastro-sicaf",
  path: "/documentos-necessarios-cadastro-sicaf",
  getParentRoute: () => Route$u
});
const CredenciamentoSicafDigitalRoute = Route$h.update({
  id: "/credenciamento-sicaf-digital",
  path: "/credenciamento-sicaf-digital",
  getParentRoute: () => Route$u
});
const CredenciamentoRoute = Route$g.update({
  id: "/credenciamento",
  path: "/credenciamento",
  getParentRoute: () => Route$u
});
const ComoRegularizarSicafEmpresaRoute = Route$f.update({
  id: "/como-regularizar-sicaf-empresa",
  path: "/como-regularizar-sicaf-empresa",
  getParentRoute: () => Route$u
});
const ComoFuncionaRoute = Route$e.update({
  id: "/como-funciona",
  path: "/como-funciona",
  getParentRoute: () => Route$u
});
const ComoFazerCadastroNoSicafRoute = Route$d.update({
  id: "/como-fazer-cadastro-no-sicaf",
  path: "/como-fazer-cadastro-no-sicaf",
  getParentRoute: () => Route$u
});
const ComoCadastrarEmpresaSicafRoute = Route$c.update({
  id: "/como-cadastrar-empresa-sicaf",
  path: "/como-cadastrar-empresa-sicaf",
  getParentRoute: () => Route$u
});
const ComoAtualizarCertificadosSicafRoute = Route$b.update({
  id: "/como-atualizar-certificados-sicaf",
  path: "/como-atualizar-certificados-sicaf",
  getParentRoute: () => Route$u
});
const CadastroSicafPassoAPassoRoute = Route$a.update({
  id: "/cadastro-sicaf-passo-a-passo",
  path: "/cadastro-sicaf-passo-a-passo",
  getParentRoute: () => Route$u
});
const CadastroSicafLicitacaoPublicaRoute = Route$9.update({
  id: "/cadastro-sicaf-licitacao-publica",
  path: "/cadastro-sicaf-licitacao-publica",
  getParentRoute: () => Route$u
});
const CadastroSicafRoute = Route$8.update({
  id: "/cadastro-sicaf",
  path: "/cadastro-sicaf",
  getParentRoute: () => Route$u
});
const BeneficiosRoute = Route$7.update({
  id: "/beneficios",
  path: "/beneficios",
  getParentRoute: () => Route$u
});
const AutoatendimentoSicafRoute = Route$6.update({
  id: "/autoatendimento-sicaf",
  path: "/autoatendimento-sicaf",
  getParentRoute: () => Route$u
});
const AssistenteRoute = Route$5.update({
  id: "/assistente",
  path: "/assistente",
  getParentRoute: () => Route$u
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$u
});
const FaqIndexRoute = Route$3.update({
  id: "/faq/",
  path: "/faq/",
  getParentRoute: () => Route$u
});
const GuiaCadastroSicafPassoPassoRoute = Route$2.update({
  id: "/guia/cadastro-sicaf-passo-passo",
  path: "/guia/cadastro-sicaf-passo-passo",
  getParentRoute: () => Route$u
});
const FaqSlugRoute = Route$1.update({
  id: "/faq/$slug",
  path: "/faq/$slug",
  getParentRoute: () => Route$u
});
const ApiContactRoute = Route.update({
  id: "/api/contact",
  path: "/api/contact",
  getParentRoute: () => Route$u
});
const rootRouteChildren = {
  IndexRoute,
  AssistenteRoute,
  AutoatendimentoSicafRoute,
  BeneficiosRoute,
  CadastroSicafRoute,
  CadastroSicafLicitacaoPublicaRoute,
  CadastroSicafPassoAPassoRoute,
  ComoAtualizarCertificadosSicafRoute,
  ComoCadastrarEmpresaSicafRoute,
  ComoFazerCadastroNoSicafRoute,
  ComoFuncionaRoute,
  ComoRegularizarSicafEmpresaRoute,
  CredenciamentoRoute,
  CredenciamentoSicafDigitalRoute,
  DocumentosNecessariosCadastroSicafRoute,
  EmitirCrcRoute,
  EmpresaInaptaRoute,
  LayoutClassicoRoute,
  OQueESicafRoute,
  PlataformaDigitalRoute,
  RegularidadeFiscalRoute,
  RenovacaoSicafRoute,
  SicafCadastroUnificadoDeFornecedoresRoute,
  SicafDigitalRoute,
  SitemapDotxmlRoute,
  Versao2Route,
  ApiContactRoute,
  FaqSlugRoute,
  GuiaCadastroSicafPassoPassoRoute,
  FaqIndexRoute
};
const routeTree = Route$u._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  page$3 as A,
  page$2 as B,
  CADASTRO_URL as C,
  page$1 as D,
  page as E,
  FloatingCta as F,
  passosOficiais as G,
  quemPrecisaSicaf as H,
  InlineCta as I,
  relatedGuides as J,
  router as K,
  steps as L,
  usefulLinks as M,
  Nav as N,
  PageHero as P,
  Route$1 as R,
  WHATSAPP_URL as W,
  ContactSection as a,
  Footer as b,
  PageShell as c,
  cn as d,
  comparativoCadastro as e,
  documentosSicaf as f,
  errosComuns as g,
  faqCategories as h,
  glossarioSicaf as i,
  guiaFaqs as j,
  guiaToc as k,
  page$f as l,
  miniFaq as m,
  niveisSicaf as n,
  page$e as o,
  page$g as p,
  page$d as q,
  page$c as r,
  page$b as s,
  page$a as t,
  page$9 as u,
  page$8 as v,
  page$7 as w,
  page$6 as x,
  page$5 as y,
  page$4 as z
};
