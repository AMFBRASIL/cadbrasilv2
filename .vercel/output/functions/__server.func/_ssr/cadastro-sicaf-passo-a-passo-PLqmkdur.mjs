import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as PageShell, C as CADASTRO_URL, W as WhatsAppLink, l as guiaToc, Q as quemPrecisaSicaf, O as passosOficiais, n as niveisSicaf, f as documentosSicaf, j as glossarioSicaf, e as comparativoCadastro, g as errosComuns, k as guiaFaqs, S as relatedGuides, V as usefulLinks, I as InlineCta } from "./router-Dm0eldpK.mjs";
import { z as Sparkles, a as ArrowRight, r as MessageCircle, c as BookOpen, x as Shield, C as CircleCheck, o as ListChecks, h as Clock, n as Layers, j as FileText, I as TriangleAlert, d as Bot, E as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/zod.mjs";
const MODIFIED = "27 mai 2026";
const stats = [
  { value: "12+", label: "Documentos mapeados" },
  { value: "6", label: "Níveis explicados" },
  { value: "8", label: "Passos detalhados" },
  { value: "24h", label: "Com CADBRASIL" }
];
function HeroWave() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      className: "relative block w-full h-12 sm:h-16 text-background",
      viewBox: "0 0 1440 64",
      preserveAspectRatio: "none",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,40C672,37,768,43,864,45.3C960,48,1056,48,1152,42.7C1248,37,1344,27,1392,21.3L1440,16L1440,64L0,64Z"
        }
      )
    }
  ) });
}
function GuiaCadastroSicafPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden bg-[oklch(0.22_0.08_260)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-[0.07]", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand/30 blur-3xl",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[oklch(0.35_0.12_250)]/40 blur-3xl",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroWave, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-3 py-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
            "Guias e tutoriais · 2026"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance", children: [
            "Cadastro SICAF 2026:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.82_0.08_250)]", children: "passo a passo completo" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl", children: [
            "Tutorial para credenciar sua empresa no",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white font-semibold", children: "SICAF" }),
            " — documentos, níveis de habilitação, certificado digital e como evitar indeferimento com a CADBRASIL."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed", children: "Resposta direta: o SICAF é obrigatório para licitar com o governo federal. O cadastro oficial é gratuito; o investimento está no certificado digital e na regularidade documental." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: CADASTRO_URL,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[oklch(0.28_0.09_260)] font-semibold shadow-lg hover:scale-[1.02] transition",
                children: [
                  "Fazer cadastro SICAF",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              WhatsAppLink,
              {
                pageLabel: "Guia cadastro SICAF passo a passo",
                intent: "Estou no guia passo a passo e preciso de ajuda com meu cadastro SICAF.",
                className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/15 transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                  "Falar com especialista"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-4 sm:p-5 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl sm:text-3xl font-bold text-white tabular-nums", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs sm:text-sm text-white/70 leading-snug", children: s.label })
            ]
          },
          s.label
        )) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-card/80 backdrop-blur-sm sticky top-[72px] z-30 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 py-3 flex gap-2 overflow-x-auto scrollbar-none", children: guiaToc.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: `#${item.id}`,
        className: "shrink-0 text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-muted-foreground hover:text-brand hover:bg-brand/10 transition",
        children: item.label
      },
      item.id
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-8 sm:py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-brand", children: "Início" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": true, children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-brand", children: "Guias" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": true, children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-medium", children: "Cadastro SICAF" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-border", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Atualizado ",
          MODIFIED
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "~12 min de leitura" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            "aria-label": "Índice do guia",
            className: "sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4 border-b border-border bg-accent/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground", children: "Neste guia" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto", children: guiaToc.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `#${item.id}`,
                  className: "block text-sm py-2 px-3 rounded-lg text-muted-foreground hover:text-brand hover:bg-brand/5 transition",
                  children: item.label
                }
              ) }, item.id)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-border bg-gradient-to-b from-brand/5 to-transparent", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2", children: "Credenciamento rápido" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Validação de documentos antes do envio oficial." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: CADASTRO_URL,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "block w-full text-center text-sm font-semibold py-2.5 rounded-xl bg-gradient-brand text-brand-foreground",
                    children: "Iniciar cadastro"
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "min-w-0 prose-guide", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "o-que-e", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-7 w-7 text-brand shrink-0" }),
              "O que é o SICAF?"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed text-base sm:text-lg", children: [
              "O ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "SICAF (Sistema de Cadastramento Unificado de Fornecedores)" }),
              " ",
              "centraliza a habilitação de empresas que vendem para o Governo Federal. Integra o",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://www.gov.br/compras",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-brand font-medium underline underline-offset-4",
                  children: "Compras.gov.br"
                }
              ),
              " ",
              "e é adotado por centenas de órgãos estaduais e municipais."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl border border-border bg-accent/30 p-4 flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Base legal:" }),
                " Lei 14.133/2021 e normas do ecossistema de compras. Manter o SICAF ativo é requisito — não opcional — para fornecedores federais."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "quem-precisa", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-4", children: "Quem precisa se cadastrar?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: quemPrecisaSicaf.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex gap-2 text-sm text-muted-foreground rounded-xl border border-border bg-card p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-brand shrink-0 mt-0.5" }),
                  item
                ]
              },
              item
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "obrigatoriedade", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-4", children: "O SICAF é obrigatório?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              { t: "Licitações federais", d: "Obrigatório para o Executivo Federal.", ok: true },
              { t: "Estados e municípios", d: "Muitos exigem ou consultam o SICAF.", ok: true },
              { t: "Dispensa e inexigibilidade", d: "Exigem regularidade cadastral.", ok: true },
              { t: "Contratos em vigor", d: "Irregularidade pode bloquear pagamentos.", ok: false }
            ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CircleCheck,
                {
                  className: `h-5 w-5 mb-2 ${item.ok ? "text-success" : "text-brand"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: item.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: item.d })
            ] }, item.t)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "passo-a-passo", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "h-7 w-7 text-brand shrink-0" }),
              "Passo a passo oficial"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-3xl", children: "Fluxo no portal do governo. Cada passo abaixo corresponde ao schema HowTo desta página (Google e IA)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3", children: passosOficiais.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                id: `passo-${index + 1}`,
                className: "scroll-mt-32 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-start shadow-card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground font-bold text-sm", children: step.n }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg", children: step.t }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: step.d })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0 sm:pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
                    step.time
                  ] })
                ]
              },
              step.n
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "section",
            {
              id: "niveis",
              className: "scroll-mt-32 mb-14 rounded-3xl border border-border bg-accent/25 p-6 sm:p-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-7 w-7 text-brand shrink-0" }),
                  "Níveis I a VI"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Cadastrar só o Nível I é um dos erros mais comuns em licitações." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 xl:grid-cols-3 gap-4", children: niveisSicaf.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center font-bold", children: n.n }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: n.t }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: n.d })
                ] }, n.n)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "documentos", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-7 w-7 text-brand shrink-0" }),
              "Documentos para cadastro"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[520px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-accent/60 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-semibold", children: "Documento" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-semibold", children: "Níveis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-semibold", children: "Validade" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: documentosSicaf.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-medium", children: row.doc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-muted-foreground", children: row.niveis }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-muted-foreground", children: row.prazo })
              ] }, row.doc)) })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "certificado-digital", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-4", children: "Certificado digital e-CNPJ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
              "O ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "e-CNPJ (A1 ou A3)" }),
              " é requisito para acessar o Compras.gov.br. A1 (arquivo) costuma ser mais prático para equipes remotas; A3 (token) é comum em empresas com política de segurança rígida."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "custos-prazos", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-7 w-7 text-brand shrink-0" }),
              "Custos e prazos"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[400px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-accent/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-left font-semibold", children: "Item" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-left font-semibold", children: "Sozinho" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-left font-semibold text-brand", children: "Com CADBRASIL" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-medium text-foreground", children: "Taxa oficial" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: "Gratuita" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: "Gratuita" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-medium text-foreground", children: "Certificado e-CNPJ" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: "R$ 200–600/ano" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: "Orientação A1/A3" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-medium text-foreground", children: "Prazo médio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: "1 a 4 semanas" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-brand font-semibold", children: "Até 24 horas*" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "* Com documentação completa e sem bloqueios fiscais complexos." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "renovacao", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-4", children: "Renovação e atualização" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
              "As ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "certidões vencem" }),
              " (muitas em 180 dias). A CADBRASIL monitora vencimentos com IA pelo",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/assistente", className: "text-brand font-medium underline underline-offset-4", children: "Assistente CADBRASIL" }),
              " ",
              "e na página de",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/renovacao-sicaf", className: "text-brand font-medium underline underline-offset-4", children: "renovação SICAF" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "glossario", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-4", children: "Glossário SICAF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 max-w-3xl", children: "Termos essenciais para entender o cadastro passo a passo — útil para buscas em Google, Bing e assistentes de IA." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "grid sm:grid-cols-2 gap-4", children: glossarioSicaf.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-semibold text-foreground", children: g.term }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: g.def })
            ] }, g.term)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "comparativo", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-4", children: "Cadastro sozinho vs com CADBRASIL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm min-w-[480px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-accent/60 text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-semibold", children: "Aspecto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-semibold", children: "Por conta própria" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 font-semibold text-brand", children: "Com CADBRASIL" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: comparativoCadastro.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-medium", children: row.aspecto }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-muted-foreground", children: row.sozinho }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-brand font-medium", children: row.cadbrasil })
              ] }, row.aspecto)) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: "* Prazo de 24 horas com documentação completa e sem bloqueios fiscais complexos." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "erros-comuns", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-7 w-7 text-amber-600 shrink-0" }),
              "Erros comuns"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: errosComuns.map((err) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex gap-3 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 text-sm text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-600 font-bold shrink-0", children: "×" }),
                  err
                ]
              },
              err
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cadbrasil", className: "scroll-mt-32 mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-brand p-8 sm:p-10 text-brand-foreground shadow-glow relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-10", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold bg-white/15 px-3 py-1.5 rounded-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                " Tecnologia + especialistas"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl sm:text-3xl font-bold", children: "Cadastro com a CADBRASIL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/85 max-w-2xl leading-relaxed", children: "IA valida cada documento antes da submissão. Especialistas concluem credenciamento, emitem CRC e mantêm seu cadastro regular." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 grid sm:grid-cols-2 gap-2 text-sm", children: [
                "Checklist por CNPJ",
                "Validação com IA",
                "Entrega em até 24h",
                "Monitoramento contínuo"
              ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 shrink-0" }),
                " ",
                t
              ] }, t)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: CADASTRO_URL,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand font-semibold",
                    children: [
                      "Começar cadastro ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/como-funciona",
                    className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/30 font-semibold",
                    children: "Ver processo"
                  }
                )
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "faq", className: "scroll-mt-32 mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-6", children: "Perguntas frequentes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: guiaFaqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "details",
              {
                className: "group rounded-2xl border border-border bg-card shadow-card overflow-hidden",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer p-5 font-semibold list-none flex items-center justify-between gap-4 hover:bg-accent/50 transition", children: [
                    faq.question,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand text-xl group-open:rotate-45 transition shrink-0", children: "+" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4", children: faq.answer })
                ]
              },
              faq.question
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-8 grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-brand" }),
                "Conteúdo relacionado"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: relatedGuides.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: g.to,
                  className: "text-brand text-sm font-medium hover:underline underline-offset-4",
                  children: [
                    g.label,
                    " →"
                  ]
                }
              ) }, g.to)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-5 w-5 text-brand" }),
                "Links úteis"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: usefulLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: l.href,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "text-brand text-sm font-medium hover:underline underline-offset-4",
                  children: [
                    l.label,
                    " ↗"
                  ]
                }
              ) }, l.href)) })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      InlineCta,
      {
        title: "Comece a vender para o governo hoje",
        subtitle: "Cadastre sua empresa no SICAF com assessoria CADBRASIL — tecnologia, IA e equipe especializada."
      }
    )
  ] });
}
const SplitComponent = GuiaCadastroSicafPage;
export {
  SplitComponent as component
};
