import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent, L as Link, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { o as MessageCircle, F as FileCheckCorner, c as Bot, u as ShieldCheck, k as Headphones, v as Sparkles, a as ArrowRight, X, n as Menu, P as Phone, M as Mail, e as Building2, U as User, H as Handshake, l as Layers, y as Wrench, d as Briefcase, t as Send } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-Cs2fkF7R.css";
const ORIGIN$7 = "https://cadbrasil.com.br";
const SOCIAL_PREVIEW_IMAGE$1 = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c46af53-295b-4a74-8239-56f32ba6ed77/id-preview-d78bce4c--3b6f7a39-c5c1-4555-ad8d-dccb06150a62.lovable.app-1779886304111.png";
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CADBRASIL · SICAF sem complicação" },
      { name: "description", content: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas." },
      { name: "author", content: "CADBRASIL" },
      { name: "theme-color", content: "#1a2c66" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "googlebot", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${ORIGIN$7}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "CADBRASIL · SICAF sem complicação" },
      { name: "twitter:title", content: "CADBRASIL · SICAF sem complicação" },
      { property: "og:description", content: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas." },
      { name: "twitter:description", content: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas." },
      { property: "og:image", content: SOCIAL_PREVIEW_IMAGE$1 },
      { name: "twitter:image", content: SOCIAL_PREVIEW_IMAGE$1 }
    ],
    links: [
      { rel: "canonical", href: `${ORIGIN$7}/` },
      { rel: "sitemap", href: `${ORIGIN$7}/sitemap.xml`, type: "application/xml" },
      { rel: "alternate", hrefLang: "pt-BR", href: `${ORIGIN$7}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${ORIGIN$7}/` },
      { rel: "stylesheet", href: appCss }
    ],
    scripts: [
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TRVTMS6M');`
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=AW-16460586067",
        async: true
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16460586067');
gtag('config', 'GT-KTPDP2TV');`
      },
      {
        children: `(function(w,d,t,r,u){
  var f,n,i;
  w[u]=w[u]||[],f=function(){
    var o={ti:"343231769", enableAutoSpaTracking: true};
    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad");
  },
  n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){
    var s=this.readyState;
    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null);
  },
  i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i);
})(window,document,"script","https://bat.bing.com/bat.js","uetq");`
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${ORIGIN$7}/#organization`,
              name: "CADBRASIL",
              alternateName: "CADBRASIL",
              url: ORIGIN$7,
              logo: SOCIAL_PREVIEW_IMAGE$1,
              description: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas.",
              areaServed: "BR",
              knowsAbout: ["SICAF", "Licitações públicas", "Compras.gov.br"],
              sameAs: ["https://cadastro.cadbrasil.com.br"]
            },
            {
              "@type": "WebSite",
              "@id": `${ORIGIN$7}/#website`,
              url: ORIGIN$7,
              name: "CADBRASIL",
              inLanguage: "pt-BR",
              publisher: { "@id": `${ORIGIN$7}/#organization` }
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
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const faqCategories = [
  {
    slug: "cadastro-sicaf",
    shortTitle: "Cadastro SICAF",
    title: "Perguntas sobre Cadastro SICAF",
    description: "Dúvidas comuns sobre como fazer o cadastro inicial no SICAF, documentos necessários, prazos e habilitação de níveis.",
    metaTitle: "FAQ Cadastro SICAF — Documentos, Prazos e Custos | CADBRASIL",
    metaDescription: "Tire suas dúvidas sobre cadastro SICAF: documentação necessária, prazo de habilitação, níveis disponíveis, custos e diferenças entre cadastro novo e renovação.",
    keywords: "cadastro sicaf, como cadastrar sicaf, documentos sicaf, prazo cadastro sicaf, niveis sicaf, sicaf compras gov br, sicaf MEI",
    items: [
      {
        question: "Como faço o cadastro SICAF do zero?",
        answer: "O cadastro pode ser feito diretamente no portal Compras.gov.br, mas exige conhecimento dos níveis (I a VI), validação documental e atenção às regularidades fiscal, trabalhista e econômico-financeira. Com a CADBRASIL, basta enviar seus documentos e a equipe cuida de todo o processo — entrega em até 24h."
      },
      {
        question: "Quais documentos preciso para o cadastro SICAF?",
        answer: "Os principais são: Contrato Social atualizado, Cartão CNPJ, RG e CPF dos sócios, comprovante de endereço, CND Federal, FGTS, CND Estadual, CND Municipal, CNDT, e — para níveis V e VI — Balanço Patrimonial e Atestados de Capacidade Técnica."
      },
      {
        question: "Quanto tempo leva o cadastro SICAF?",
        answer: "Com toda a documentação em mãos, a CADBRASIL entrega o SICAF habilitado em até 24 horas. Sem apoio especializado e com pendências fiscais, o processo pode se arrastar por semanas."
      },
      {
        question: "MEI pode se cadastrar no SICAF?",
        answer: "Sim. Microempreendedores Individuais podem se cadastrar normalmente. Há regras especiais de tratamento diferenciado (Lei Complementar 123/2006) que favorecem MEIs e MEs em licitações."
      },
      {
        question: "Preciso renovar o cadastro SICAF anualmente?",
        answer: "O cadastro em si não vence, mas as certidões anexadas (CND Federal, FGTS, etc.) vencem regularmente — algumas em 90 dias, outras em 180. Sem renovar essas certidões, sua empresa fica irregular no SICAF."
      },
      {
        question: "Posso fazer o cadastro SICAF sozinho?",
        answer: "Tecnicamente sim. Na prática, a maioria dos cadastros sem apoio é rejeitada na primeira tentativa por documentos errados, certidões vencidas ou erro nos níveis. A CADBRASIL garante aprovação na primeira submissão."
      }
    ]
  },
  {
    slug: "regularizacao-sicaf",
    shortTitle: "Regularização SICAF",
    title: "Perguntas sobre Regularização SICAF",
    description: "Como regularizar pendências, corrigir certidões vencidas e voltar a participar de licitações rapidamente.",
    metaTitle: "FAQ Regularização SICAF — Resolva Pendências Rápido | CADBRASIL",
    metaDescription: "Saiba como regularizar seu SICAF, corrigir certidões vencidas, resolver pendências fiscais e voltar imediatamente a participar de licitações públicas.",
    keywords: "regularizar sicaf, sicaf irregular, certidao vencida sicaf, pendencia fiscal sicaf, sicaf bloqueado, regularidade sicaf",
    items: [
      {
        question: "O que é SICAF irregular?",
        answer: "É quando uma ou mais certidões da sua empresa estão vencidas, ou existe pendência fiscal, trabalhista ou cadastral. Empresas com SICAF irregular são automaticamente desabilitadas em pregões eletrônicos e dispensas."
      },
      {
        question: "Como sei se meu SICAF está regular?",
        answer: "Você pode consultar diretamente no portal Compras.gov.br ou solicitar uma análise gratuita à CADBRASIL — em minutos enviamos o diagnóstico completo da sua situação."
      },
      {
        question: "Quanto tempo leva para regularizar o SICAF?",
        answer: "Pendências simples (CND Federal, FGTS, CNDT) são resolvidas no mesmo dia. Pendências complexas (parcelamento, débitos estaduais, atestados) levam de 24h a 5 dias úteis, dependendo do caso."
      },
      {
        question: "Posso participar de licitação com SICAF irregular?",
        answer: "Não. O portal bloqueia automaticamente sua proposta. Mesmo que envie, sua empresa será desclassificada na fase de habilitação. Por isso o monitoramento contínuo da CADBRASIL faz tanta diferença."
      },
      {
        question: "A CADBRASIL resolve pendência fiscal?",
        answer: "Não pagamos seus débitos, mas orientamos exatamente como resolver, intermediamos parcelamentos quando aplicável e regularizamos o SICAF imediatamente após o pagamento ou parcelamento."
      }
    ]
  },
  {
    slug: "atualizacao-sicaf",
    shortTitle: "Atualização SICAF",
    title: "Perguntas sobre Atualização SICAF",
    description: "Renovação automática de certidões, monitoramento de prazos e como manter o SICAF sempre ativo.",
    metaTitle: "FAQ Atualização SICAF — Renovação de Certidões | CADBRASIL",
    metaDescription: "Entenda como funciona a atualização automática do SICAF, renovação proativa de certidões e o monitoramento 24/7 oferecido pela CADBRASIL.",
    keywords: "atualizar sicaf, renovacao sicaf, certidoes vencendo, monitoramento sicaf, sicaf automatico, gestao sicaf",
    items: [
      {
        question: "Com que frequência devo atualizar o SICAF?",
        answer: "Não é uma frequência fixa: depende do vencimento de cada certidão. CND Federal e FGTS vencem em 180 dias, CND Estadual e Municipal variam, e a CNDT vence em 180 dias. A CADBRASIL monitora todas e renova antes do vencimento."
      },
      {
        question: "Como funciona a renovação automática da CADBRASIL?",
        answer: "Nossa IA monitora todas as suas certidões 24/7. A 30 dias do vencimento, iniciamos a nova emissão automaticamente. Você recebe a confirmação quando concluído — sem precisar fazer nada."
      },
      {
        question: "Preciso me preocupar com vencimento de certidões?",
        answer: "Com a CADBRASIL, não. Todo o controle é feito pelo Assistente CADBRASIL e pela nossa equipe. Você só é avisado se houver algo que exija sua aprovação (como pagamento de débito)."
      },
      {
        question: "E se uma certidão for negada na renovação?",
        answer: "O Assistente identifica a causa, classifica a pendência, abre um chamado prioritário com nossa equipe e te avisa imediatamente com o passo a passo para resolver."
      }
    ]
  },
  {
    slug: "assistente-cadbrasil",
    shortTitle: "Assistente CADBRASIL",
    title: "Perguntas sobre o Assistente CADBRASIL",
    description: "Tudo sobre o aplicativo Assistente CADBRASIL: instalação, requisitos, segurança e funcionalidades.",
    metaTitle: "FAQ Assistente CADBRASIL — Instalação e Segurança | CADBRASIL",
    metaDescription: "Dúvidas sobre o aplicativo Assistente CADBRASIL: como instalar, requisitos do sistema, segurança LGPD, AnyDesk integrado e como funciona a IA.",
    keywords: "assistente cadbrasil, software sicaf, app sicaf, anydesk sicaf, instalar assistente cadbrasil, IA sicaf",
    items: [
      {
        question: "O Assistente CADBRASIL é gratuito?",
        answer: "Sim. O aplicativo é incluído gratuitamente em todos os planos CADBRASIL. Ele é a forma mais eficiente de manter seu SICAF sempre regular."
      },
      {
        question: "Em qual sistema operacional ele roda?",
        answer: "Windows 10 ou superior e macOS 12 (Monterey) ou superior. Também temos acesso via painel web para qualquer dispositivo com navegador."
      },
      {
        question: "É seguro? Ele tem acesso aos meus dados?",
        answer: "Sim, totalmente seguro. Usamos criptografia TLS 1.3, somos conformes com a LGPD e o acesso remoto via AnyDesk só é ativado quando você autoriza explicitamente."
      },
      {
        question: "O AnyDesk vem incluso?",
        answer: "Sim. O AnyDesk é integrado ao Assistente CADBRASIL para que, em caso de necessidade, um especialista possa te dar suporte remoto seguro com um clique."
      },
      {
        question: "Posso usar o Assistente em mais de um computador?",
        answer: "Sim. Você pode instalar em quantas máquinas precisar, todas vinculadas ao mesmo CNPJ no painel CADBRASIL."
      }
    ]
  },
  {
    slug: "licitacoes-publicas",
    shortTitle: "Licitações Públicas",
    title: "Perguntas sobre Licitações Públicas",
    description: "Visão geral sobre como funcionam licitações no Brasil, Lei 14.133/2021, pregão eletrônico e papel do SICAF.",
    metaTitle: "FAQ Licitações Públicas — Lei 14.133, Pregão e SICAF | CADBRASIL",
    metaDescription: "Entenda como funcionam licitações públicas no Brasil, a Nova Lei de Licitações (14.133/2021), pregão eletrônico, dispensa e o papel central do SICAF.",
    keywords: "licitacoes publicas, lei 14133, nova lei licitacoes, pregao eletronico, dispensa licitacao, fornecedor governo, vender governo",
    items: [
      {
        question: "O que é a Lei 14.133/2021?",
        answer: "É a Nova Lei de Licitações e Contratos Administrativos, que substituiu a Lei 8.666/93. Ela moderniza as regras de compras públicas no Brasil, com foco em eficiência, transparência e digitalização."
      },
      {
        question: "O que é Pregão Eletrônico?",
        answer: "É a modalidade de licitação mais usada no Brasil para compras de bens e serviços comuns. Acontece 100% pela internet, com lances em tempo real. O SICAF é obrigatório para participar."
      },
      {
        question: "O que é Dispensa de Licitação?",
        answer: "É quando o órgão público compra diretamente, sem realizar licitação, em casos previstos em lei (valor pequeno, emergência, fornecedor exclusivo, etc.). Ainda assim, o SICAF é exigido."
      },
      {
        question: "Posso participar de licitações de qualquer estado?",
        answer: "Sim. O SICAF é nacional. Sua empresa, com cadastro ativo, pode participar de pregões em qualquer estado e município que utilize o Compras.gov.br ou plataformas integradas."
      },
      {
        question: "Microempresas têm vantagem em licitações?",
        answer: "Sim. A Lei Complementar 123/2006 garante tratamento diferenciado: empate ficto, exclusividade em licitações até R$ 80 mil, cotas reservadas e regularização tardia da documentação fiscal."
      }
    ]
  }
];
const BASE_URL = "https://cadbrasil.com.br";
const Route$8 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/o-que-e-sicaf", changefreq: "monthly", priority: "0.9" },
          { path: "/como-funciona", changefreq: "monthly", priority: "0.9" },
          { path: "/assistente", changefreq: "monthly", priority: "0.9" },
          { path: "/beneficios", changefreq: "monthly", priority: "0.8" },
          { path: "/faq", changefreq: "weekly", priority: "0.8" },
          ...faqCategories.map((c) => ({
            path: `/faq/${c.slug}`,
            changefreq: "monthly",
            priority: "0.7"
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
const links = [
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 font-display font-bold text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow", children: "C" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tracking-tight", children: [
                  "CAD",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "BRASIL" })
                ] })
              ] }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-display font-bold text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-brand-foreground", children: "C" }),
          "CAD",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "BRASIL" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "Especialistas em SICAF, regularização documental e participação em licitações públicas. Uma marca do grupo CADBRASIL." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contato@cadbrasil.com.br", className: "hover:text-foreground", children: "contato@cadbrasil.com.br" }) }),
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
function cn(...inputs) {
  return twMerge(clsx(inputs));
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
                href: "mailto:contato@cadbrasil.com.br",
                className: "flex items-center gap-3 text-muted-foreground hover:text-foreground transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-brand/10 text-brand grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-medium text-foreground", children: "E-mail" }),
                    "contato@cadbrasil.com.br"
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
            status === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-success font-medium rounded-xl bg-success/10 border border-success/20 px-4 py-3", children: "Mensagem enviada com sucesso! Nossa equipe retornará em breve no seu e-mail ou WhatsApp." }),
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
const $$splitComponentImporter$6 = () => import("./o-que-e-sicaf-C0S7oYGS.mjs");
const ORIGIN$6 = "https://cadbrasil.com.br";
const Route$7 = createFileRoute("/o-que-e-sicaf")({
  head: () => ({
    meta: [{
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
      content: `${ORIGIN$6}/o-que-e-sicaf`
    }, {
      property: "article:section",
      content: "Guias SICAF"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$6}/o-que-e-sicaf`
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
        mainEntityOfPage: `${ORIGIN$6}/o-que-e-sicaf`,
        inLanguage: "pt-BR"
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "Início",
        url: `${ORIGIN$6}/`
      }, {
        name: "O que é SICAF",
        url: `${ORIGIN$6}/o-que-e-sicaf`
      }]))
    }, {
      type: "application/ld+json",
      children: JSON.stringify(faqJsonLd(miniFaq))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
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
const $$splitComponentImporter$5 = () => import("./como-funciona-CVIhCJ9D.mjs");
const ORIGIN$5 = "https://cadbrasil.com.br";
const Route$6 = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [{
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
      content: `${ORIGIN$5}/como-funciona`
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$5}/como-funciona`
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
        url: `${ORIGIN$5}/`
      }, {
        name: "Como funciona",
        url: `${ORIGIN$5}/como-funciona`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./beneficios-Bs8MSkxL.mjs");
const ORIGIN$4 = "https://cadbrasil.com.br";
const Route$5 = createFileRoute("/beneficios")({
  head: () => ({
    meta: [{
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
      content: `${ORIGIN$4}/beneficios`
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$4}/beneficios`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "Início",
        url: `${ORIGIN$4}/`
      }, {
        name: "Benefícios",
        url: `${ORIGIN$4}/beneficios`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./assistente-DH4z30HY.mjs");
const ORIGIN$3 = "https://cadbrasil.com.br";
const Route$4 = createFileRoute("/assistente")({
  head: () => ({
    meta: [{
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
      content: `${ORIGIN$3}/assistente`
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$3}/assistente`
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
        url: `${ORIGIN$3}/`
      }, {
        name: "Assistente",
        url: `${ORIGIN$3}/assistente`
      }]))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DTMhLcSd.mjs");
const ORIGIN$2 = "https://cadbrasil.com.br";
const SOCIAL_PREVIEW_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c46af53-295b-4a74-8239-56f32ba6ed77/id-preview-d78bce4c--3b6f7a39-c5c1-4555-ad8d-dccb06150a62.lovable.app-1779886304111.png";
const Route$3 = createFileRoute("/")({
  head: () => ({
    meta: [{
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
      content: `${ORIGIN$2}/`
    }, {
      property: "og:image",
      content: SOCIAL_PREVIEW_IMAGE
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:image",
      content: SOCIAL_PREVIEW_IMAGE
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$2}/`
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
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./faq.index-BljTUptV.mjs");
const ORIGIN$1 = "https://cadbrasil.com.br";
const Route$2 = createFileRoute("/faq/")({
  head: () => ({
    meta: [{
      title: "FAQ SICAF — Perguntas Frequentes sobre Cadastro e Licitações"
    }, {
      name: "description",
      content: "Central de perguntas frequentes da CADBRASIL. Tire dúvidas sobre cadastro SICAF, regularização, atualização, Assistente CADBRASIL e licitações públicas."
    }, {
      name: "keywords",
      content: "faq sicaf, perguntas frequentes sicaf, duvidas sicaf, ajuda sicaf, sicaf cadbrasil"
    }, {
      property: "og:title",
      content: "Central de FAQ SICAF — CADBRASIL"
    }, {
      property: "og:description",
      content: "5 categorias, dezenas de respostas práticas para tudo o que envolve SICAF e licitações."
    }, {
      property: "og:url",
      content: `${ORIGIN$1}/faq`
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: `${ORIGIN$1}/faq`
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbJsonLd([{
        name: "Início",
        url: `${ORIGIN$1}/`
      }, {
        name: "FAQ",
        url: `${ORIGIN$1}/faq`
      }]))
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "FAQ SICAF — CADBRASIL",
        description: "Central de perguntas frequentes sobre SICAF e licitações públicas.",
        inLanguage: "pt-BR",
        hasPart: faqCategories.map((c) => ({
          "@type": "FAQPage",
          name: c.title,
          url: `${ORIGIN$1}/faq/${c.slug}`,
          description: c.description
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./faq._slug-CGn4XJ0N.mjs");
const $$splitNotFoundComponentImporter = () => import("./faq._slug-pHwzPye_.mjs");
const ORIGIN = "https://cadbrasil.com.br";
const Route$1 = createFileRoute("/faq/$slug")({
  loader: ({
    params
  }) => {
    const category = faqCategories.find((c) => c.slug === params.slug);
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
    return {
      meta: [{
        title: c.metaTitle
      }, {
        name: "description",
        content: c.metaDescription
      }, {
        name: "keywords",
        content: c.keywords
      }, {
        property: "og:title",
        content: c.metaTitle
      }, {
        property: "og:description",
        content: c.metaDescription
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "og:url",
        content: `${ORIGIN}/faq/${c.slug}`
      }, {
        property: "article:section",
        content: "FAQ"
      }],
      links: [{
        rel: "canonical",
        href: `${ORIGIN}/faq/${c.slug}`
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(c.items))
      }, {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([{
          name: "Início",
          url: `${ORIGIN}/`
        }, {
          name: "FAQ",
          url: `${ORIGIN}/faq`
        }, {
          name: c.shortTitle,
          url: `${ORIGIN}/faq/${c.slug}`
        }]))
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
  email: stringType().trim().email("E-mail inválido"),
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
function getMailgunConfig() {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const fromEmail = process.env.MAILGUN_FROM_EMAIL;
  const fromName = process.env.MAILGUN_FROM_NAME;
  const toEmail = process.env.MAILGUN_TO_EMAIL;
  const apiUrl = process.env.MAILGUN_API_URL ?? "https://api.mailgun.net";
  if (!apiKey || !domain || !fromEmail || !fromName || !toEmail) {
    return null;
  }
  return { apiKey, domain, fromEmail, fromName, toEmail, apiUrl };
}
async function sendContactEmail(data) {
  const config = getMailgunConfig();
  if (!config) {
    throw new Error("MAILGUN_NOT_CONFIGURED");
  }
  const tipo = contactTypeLabel(data.tipo);
  const subject = `[Site CADBRASIL] Contato: ${tipo} — ${data.nome}`;
  const body = formatContactEmailBody(data);
  const form = new FormData();
  form.append("from", `${config.fromName} <${config.fromEmail}>`);
  form.append("to", config.toEmail);
  form.append("subject", subject);
  form.append("text", body);
  form.append("h:Reply-To", `${data.nome} <${data.email}>`);
  const endpoint = `${config.apiUrl.replace(/\/$/, "")}/v3/${config.domain}/messages`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${config.apiKey}`).toString("base64")}`
    },
    body: form
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const detail = payload.message ?? `HTTP ${response.status}`;
    throw new Error(`MAILGUN_SEND_FAILED: ${detail}`);
  }
  return { id: payload.id, message: payload.message };
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
          await sendContactEmail(parsed.data);
          return Response.json({ ok: true, message: "Mensagem enviada com sucesso." });
        } catch (error) {
          console.error("[api/contact]", error);
          if (error instanceof Error && error.message === "MAILGUN_NOT_CONFIGURED") {
            return Response.json(
              { ok: false, error: "Serviço de e-mail não configurado." },
              { status: 503 }
            );
          }
          return Response.json(
            { ok: false, error: "Não foi possível enviar sua mensagem. Tente novamente em instantes." },
            { status: 502 }
          );
        }
      }
    }
  }
});
const SitemapDotxmlRoute = Route$8.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$9
});
const OQueESicafRoute = Route$7.update({
  id: "/o-que-e-sicaf",
  path: "/o-que-e-sicaf",
  getParentRoute: () => Route$9
});
const ComoFuncionaRoute = Route$6.update({
  id: "/como-funciona",
  path: "/como-funciona",
  getParentRoute: () => Route$9
});
const BeneficiosRoute = Route$5.update({
  id: "/beneficios",
  path: "/beneficios",
  getParentRoute: () => Route$9
});
const AssistenteRoute = Route$4.update({
  id: "/assistente",
  path: "/assistente",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const FaqIndexRoute = Route$2.update({
  id: "/faq/",
  path: "/faq/",
  getParentRoute: () => Route$9
});
const FaqSlugRoute = Route$1.update({
  id: "/faq/$slug",
  path: "/faq/$slug",
  getParentRoute: () => Route$9
});
const ApiContactRoute = Route.update({
  id: "/api/contact",
  path: "/api/contact",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AssistenteRoute,
  BeneficiosRoute,
  ComoFuncionaRoute,
  OQueESicafRoute,
  SitemapDotxmlRoute,
  ApiContactRoute,
  FaqSlugRoute,
  FaqIndexRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
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
  CADASTRO_URL as C,
  FloatingCta as F,
  InlineCta as I,
  Nav as N,
  PageHero as P,
  Route$1 as R,
  ContactSection as a,
  Footer as b,
  PageShell as c,
  faqCategories as f,
  miniFaq as m,
  router as r,
  steps as s
};
