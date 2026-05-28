import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as PageShell, d as cadastroGuiaUrl, j as guiaToc, q as quemPrecisaSicaf, n as niveisCadastramento, p as passosHowTo, f as documentosChecklist, g as errosComuns, i as guiaFaqs, u as usefulLinks, W as WHATSAPP_URL, C as CADASTRO_URL, e as cn } from "./router-apgsbpvz.mjs";
import { a as ArrowRight, c as BookOpen, y as Shield, f as Building2, g as CircleCheck, o as Layers, p as ListChecks, k as FileText, F as FileCheck, i as Clock, J as TriangleAlert, h as CircleQuestionMark, E as ExternalLink, b as Award, C as ChevronDown } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/zod.mjs";
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
function GuiaCadastroSicafPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-28 pb-16 bg-gradient-brand text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-white/80 font-medium text-xs uppercase tracking-widest mb-4", children: "Guias e Tutoriais · Atualizado 2026" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6", children: "Cadastro SICAF 2026: Passo a Passo Completo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "guide-hero-lead text-lg text-white/90 mb-4 max-w-3xl mx-auto", children: [
        "Tutorial completo para cadastro no",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "SICAF" }),
        " (Sistema de Cadastramento Unificado de Fornecedores): documentos, níveis de habilitação, prazos, custos reais e como evitar indeferimento — com credenciamento assistido pela CADBRASIL em até",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "3 horas" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "guide-summary text-sm text-white/75 mb-8 max-w-2xl mx-auto", children: "Resposta direta: o SICAF é obrigatório para licitar com o governo federal. O cadastro oficial é gratuito; você investe em certificado digital e, se quiser agilidade, assessoria especializada. Este guia supera tutoriais genéricos com checklist prático, glossário e FAQ para buscadores e assistentes de IA." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-6 mb-8", children: [
        ["12+", "Documentos mapeados"],
        ["6", "Níveis explicados"],
        ["8", "Passos detalhados"],
        ["3h", "Com assessoria"]
      ].map(([n, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-sm", children: l })
      ] }, l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: cadastroGuiaUrl("guiaCadastroSicafHero"),
          className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-brand font-semibold shadow-lg hover:scale-[1.02] transition",
          children: [
            "Fazer cadastro SICAF agora",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[240px_1fr] gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: "lg:sticky lg:top-28 rounded-2xl border border-border bg-card p-5 shadow-card hidden lg:block",
          "aria-label": "Sumário do guia",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3", children: "Neste guia" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm border-l-2 border-brand/30 pl-4", children: guiaToc.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `#${item.id}`, className: "text-muted-foreground hover:text-brand transition", children: item.label }) }, item.id)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-4 bg-brand/5 border border-brand/20 rounded-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-2", children: "Credenciamento rápido" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "Validação de documentos antes do envio oficial." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: cadastroGuiaUrl("guiaCadastroSicafSidebar"),
                  className: "block w-full text-center px-4 py-2.5 rounded-xl bg-gradient-brand text-brand-foreground text-sm font-semibold",
                  children: "Iniciar cadastro"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8 text-sm text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-brand", children: "Início" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": true, children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/o-que-e-sicaf", className: "hover:text-brand", children: "Guias" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": true, children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-medium", children: "Cadastro SICAF passo a passo" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "o-que-e-sicaf", className: "scroll-mt-28 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-7 w-7 text-brand" }),
            "O que é o SICAF?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: [
            "O ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "SICAF" }),
            " é o",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Sistema de Cadastramento Unificado de Fornecedores" }),
            ", mantido no âmbito das contratações públicas federais. Ele centraliza o cadastro, a documentação de habilitação e a verificação de regularidade de empresas que desejam vender para órgãos e entidades da administração pública federal."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: [
            "Diferente de um simples formulário, o SICAF estrutura a habilitação em",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "níveis progressivos" }),
            ", cada um vinculado a conjuntos de documentos (jurídicos, fiscais, trabalhistas, econômico-financeiros e técnicos). Licitações no ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Compras.gov.br" }),
            " ",
            "consultam esse cadastro para permitir ou bloquear a participação da empresa."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 p-4 rounded-xl flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Base legal:" }),
              " o cadastro está alinhado à Lei nº 14.133/2021 (Nova Lei de Licitações) e às normas do ecossistema de compras governamentais. Manter o SICAF ativo é requisito para fornecedores federais — não opcional."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "quem-precisa", className: "scroll-mt-28 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-7 w-7 text-brand" }),
            "Quem precisa se cadastrar no SICAF?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-muted-foreground", children: quemPrecisaSicaf.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-brand shrink-0 mt-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
          ] }, item)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "niveis", className: "scroll-mt-28 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-7 w-7 text-brand" }),
            "Níveis de cadastramento do SICAF"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Entender os níveis evita surpresas na habilitação. Muitos editais exigem além do credenciamento básico — por isso mapeamos todos abaixo." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: niveisCadastramento.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-brand uppercase tracking-wide", children: n.nivel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mt-1 mb-2", children: n.titulo }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: n.descricao })
          ] }, n.nivel)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "passo-a-passo", className: "scroll-mt-28 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ListChecks, { className: "h-7 w-7 text-brand" }),
            "Passo a passo: como fazer cadastro no SICAF"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Siga esta sequência para reduzir indeferimentos. Cada passo corresponde ao schema HowTo desta página (visível para Google e mecanismos de IA)." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-6", children: passosHowTo.map((passo, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: `passo-${index + 1}`, className: "flex gap-4 scroll-mt-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-gradient-brand text-brand-foreground flex items-center justify-center font-bold shrink-0 rounded-xl", children: String(index + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold mb-1", children: passo.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: passo.text })
            ] })
          ] }, passo.name)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: cadastroGuiaUrl("guiaCadastroSicafPassoAPasso"),
              className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition",
              children: [
                "Quero ajuda em cada passo — cadastrar agora",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "documentos", className: "scroll-mt-28 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-7 w-7 text-brand" }),
            "Documentos para cadastro no SICAF (checklist 2026)"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "Use esta lista como conferência antes de enviar. Documentos fora da validade são a principal causa de reprovação." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: documentosChecklist.map((doc) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2 rounded-xl border border-border bg-card p-3 text-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { className: "h-4 w-4 text-brand shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: doc })
              ]
            },
            doc
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "custos-prazos", className: "scroll-mt-28 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-7 w-7 text-brand" }),
            "Quanto custa e quanto tempo leva?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto rounded-2xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-accent/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left font-semibold", children: "Item" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left font-semibold", children: "Sozinho" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3 text-left font-semibold text-brand", children: "Com CADBRASIL" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium text-foreground", children: "Taxa oficial SICAF" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Gratuita" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Gratuita" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium text-foreground", children: "Certificado digital e-CNPJ" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "R$ 200–600/ano (média)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Orientação na escolha A1/A3" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium text-foreground", children: "Prazo médio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "7 a 20 dias úteis" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-brand font-medium", children: "Até 3 horas*" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium text-foreground", children: "Suporte e revisão" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Por conta própria" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: "Equipe especializada + protocolo" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "* Após envio completo e válido da documentação. Prazos governamentais de análise podem variar conforme volume do sistema." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "erros-comuns", className: "scroll-mt-28 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-7 w-7 text-brand" }),
            "Erros comuns que bloqueiam o cadastro"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: errosComuns.map((erro) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-start gap-2 text-sm bg-destructive/5 border border-destructive/10 p-3 rounded-xl text-muted-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive font-bold", children: "×" }),
                erro
              ]
            },
            erro
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "faq", className: "scroll-mt-28 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-7 w-7 text-brand" }),
            "Perguntas frequentes sobre cadastro SICAF"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: guiaFaqs.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `faq-${i}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left font-semibold", children: item.question }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: [
              item.answer,
              i === guiaFaqs.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: cadastroGuiaUrl("guiaCadastroSicafFaq"),
                  className: "text-brand font-medium inline-flex items-center gap-1 hover:underline",
                  children: [
                    "Acessar portal de cadastro CADBRASIL",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
                  ]
                }
              ) })
            ] })
          ] }, item.question)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "links-uteis", className: "scroll-mt-28 mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Links úteis e conteúdo relacionado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-2", children: usefulLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: link.external ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: link.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-sm text-brand hover:underline inline-flex items-center gap-1",
              children: [
                link.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link.to, className: "text-sm text-brand hover:underline", children: link.label }) }, link.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm text-muted-foreground", children: [
            "Veja também:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/o-que-e-sicaf", className: "text-brand hover:underline", children: "guia complementar — o que é SICAF" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded-3xl bg-gradient-brand p-8 md:p-12 text-center text-brand-foreground shadow-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-12 w-12 mx-auto mb-4 text-white/90" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Comece a vender para o governo hoje" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 mb-8 max-w-2xl mx-auto", children: "Cadastre sua empresa no SICAF com assessoria CADBRASIL: validação de documentos, acompanhamento de protocolo e suporte até a liberação do credenciamento." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: cadastroGuiaUrl("guiaCadastroSicafFooter"),
                className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-brand font-semibold hover:bg-white/90 transition",
                children: [
                  "Fazer cadastro SICAF",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: WHATSAPP_URL,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/40 font-semibold hover:bg-white/10 transition",
                children: "Falar com especialista"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-xs text-white/60", children: [
            "Portal oficial de credenciamento:",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: CADASTRO_URL, className: "underline hover:text-white", children: "cadastro.cadbrasil.com.br" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
const SplitComponent = GuiaCadastroSicafPage;
export {
  SplitComponent as component
};
