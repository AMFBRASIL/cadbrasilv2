import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as ServiceStatusBar, L as LogosBar, W as WhatIsSicaf, P as Process, R as ReadinessCalculator, D as DocumentChecklist, C as ComparisonSection, A as Assistant, B as Benefits, c as Stats, T as Testimonials, b as StartIn2Minutes, a as FinalCTA, F as Faq } from "./Faq-NjPRGWyP.mjs";
import { a as ContactSection, F as FloatingCta, W as WHATSAPP_URL, C as CADASTRO_URL, d as cn } from "./router-4dWJgXsK.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { E as ExternalLink, r as MessageCircle, X, q as Menu, f as Building2, a as ArrowRight, D as Download, y as ShieldCheck, F as FileCheck, z as Sparkles, j as FileText, C as CircleCheck, I as TriangleAlert, T as TrendingUp } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/zod.mjs";
import "../_libs/isbot.mjs";
const links = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia SICAF" },
  { to: "/como-funciona", label: "Como funciona" },
  { to: "/faq", label: "FAQ" },
  { to: "/assistente", label: "Assistente" }
];
function GovNav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed inset-x-0 top-0 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-[#FFCD07]", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/20" : ""} bg-[#0a4d2c] border-b border-[#168821]/40`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 [&_.text-brand]:text-[#b8e6c8] [&_span]:text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-md bg-white/15 text-white font-bold text-sm border border-white/20", children: "C" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-lg text-white tracking-tight", children: [
                "CAD ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 font-normal mx-1", children: "|" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#b8e6c8]", children: "BRASIL" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  className: "px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition",
                  children: l.label
                },
                l.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "https://www.gov.br/compras",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "px-3 py-2 text-sm font-medium text-white/80 hover:text-white inline-flex items-center gap-1",
                  children: [
                    "Compras.gov.br ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
                  ]
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
                  className: "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-[#0a4d2c] bg-white hover:bg-[#f0f7f2] transition",
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
                  className: "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-[#FFCD07] text-[#0a4d2c] hover:bg-[#ffe566] transition",
                  children: "Fazer Cadastro"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "lg:hidden p-2 rounded-md text-white hover:bg-white/10",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Abrir menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] }),
          open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden pb-4 border-t border-white/10 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
            links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                onClick: () => setOpen(false),
                className: "px-3 py-3 rounded-md text-white/95 hover:bg-white/10 text-sm font-medium",
                children: l.label
              },
              l.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: CADASTRO_URL,
                target: "_blank",
                rel: "noreferrer",
                className: "mt-2 text-center px-4 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-semibold",
                children: "Fazer Cadastro SICAF"
              }
            )
          ] }) })
        ] })
      }
    )
  ] });
}
function GovFloatingBadge({
  icon: Icon,
  title,
  subtitle,
  className,
  variant = "success",
  animationDelay = "0s"
}) {
  const iconBg = {
    success: "bg-[#168821]/15 text-[#168821]",
    info: "bg-[#071D41]/10 text-[#071D41]",
    warning: "bg-amber-500/15 text-amber-700"
  }[variant];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-2.5 rounded-xl border border-white/90 bg-white px-3 py-2.5 shadow-xl shadow-black/15 animate-float",
        className
      ),
      style: { animationDelay },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("h-9 w-9 shrink-0 rounded-lg grid place-items-center", iconBg), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] sm:text-xs font-bold text-[#0a4d2c] leading-tight", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[#0a4d2c]/65", children: subtitle })
        ] })
      ]
    }
  );
}
function GovHeroDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pb-8 sm:pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 bg-[#FFCD07]/20 blur-3xl rounded-[2rem] opacity-40", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-lg border-2 border-white/25 bg-white shadow-2xl overflow-visible", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#071D41] px-4 py-2.5 flex items-center justify-between rounded-t-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs font-mono text-white/85", children: "portal.cadbrasil.com.br/sicaf" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold text-[#FFCD07] flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#FFCD07] pulse-ring" }),
          "Online"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-b-lg bg-[#f0f7f2] border-t border-[#168821]/10 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-[#168821]/15 bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-md bg-[#168821] grid place-items-center text-white text-xs font-bold", children: "C" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold text-[#0a4d2c]", children: "CNPJ 12.345.678/0001-90" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-[#0a4d2c]/65", children: "Fornecedora Exemplo LTDA" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-[#168821] px-2.5 py-1 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-white/90" }),
            "Regular"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 sm:p-4 grid grid-cols-6 gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 sm:col-span-3 row-span-2 relative rounded-lg border border-[#168821]/20 bg-white p-3 sm:p-4 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold text-[#168821]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              " Análise IA em andamento"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-semibold text-[#0a4d2c] leading-snug", children: "Verificando 14 documentos no SICAF…" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2", children: [
              { l: "CND Federal", ok: true },
              { l: "FGTS", ok: true },
              { l: "CND Estadual", ok: false },
              { l: "CND Municipal", ok: true }
            ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-[#0a4d2c]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5 text-[#168821]/70" }),
                r.l
              ] }),
              r.ok ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[#168821] font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
                " Válido"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-amber-700 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5" }),
                " Vence 12d"
              ] })
            ] }, r.l)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#168821] to-transparent animate-scan top-1/2 opacity-60" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 sm:col-span-3 rounded-lg border border-[#168821]/20 bg-white p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold text-[#0a4d2c]/70 uppercase tracking-wide", children: "Níveis SICAF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-3 gap-1.5", children: ["I", "II", "III", "IV", "V", "VI"].map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-7 sm:h-8 rounded-md grid place-items-center text-[10px] sm:text-[11px] font-bold ${i < 5 ? "bg-[#168821]/15 text-[#168821] border border-[#168821]/30" : "bg-[#f0f7f2] text-[#0a4d2c]/40 border border-[#168821]/10"}`,
                children: n
              },
              n
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] text-[#0a4d2c]/60", children: "5 de 6 níveis ativos" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 sm:col-span-3 rounded-lg border border-[#168821]/20 bg-white p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold text-[#0a4d2c]/70", children: "Regularidade fiscal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-[#168821]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xl sm:text-2xl font-bold text-[#0a4d2c]", children: "98%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 rounded-full bg-[#e8f3eb] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[98%] bg-[#168821] rounded-full" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 rounded-lg border border-amber-500/35 bg-amber-50 p-2.5 sm:p-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-amber-500/20 grid place-items-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-amber-700" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-[#0a4d2c]", children: "1 pendência detectada" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] sm:text-[11px] text-[#0a4d2c]/70 truncate", children: "CND Estadual vence em 12 dias — renovação pela CADBRASIL" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GovFloatingBadge,
      {
        icon: ShieldCheck,
        title: "CRC emitido",
        subtitle: "há 2 minutos",
        className: "absolute -left-2 sm:-left-6 bottom-16 sm:bottom-20 z-10 max-w-[200px] hidden sm:flex"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      GovFloatingBadge,
      {
        icon: CircleCheck,
        title: "CND Federal validada",
        subtitle: "há 8 minutos",
        variant: "info",
        animationDelay: "0.8s",
        className: "absolute -right-2 sm:-right-6 bottom-8 sm:bottom-12 z-10 max-w-[210px] hidden sm:flex"
      }
    )
  ] });
}
function GovHero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative pt-[5.5rem] sm:pt-28 pb-16 sm:pb-28 overflow-x-clip bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.08]",
            style: {
              backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 12px,
            rgba(255,255,255,0.15) 12px,
            rgba(255,255,255,0.15) 13px
          )`
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0a4d2c]/80 via-transparent to-transparent", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 lg:gap-14 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-semibold bg-white/10 border border-white/20 px-3 py-1.5 rounded-md backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5 text-[#FFCD07]" }),
              "SICAF | COMPRASNET — 2026",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-balance", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FFCD07]", children: "SICAF | COMPRASNET" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/95", children: ", Cadastre sua empresa e participe de licitações em todo o Brasil" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl", children: [
              "Credenciamento e regularização no ecossistema de compras públicas com assessoria especializada CADBRASIL. Documentação validada, níveis de habilitação e CRC em até",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-white", children: "24 horas" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: CADASTRO_URL,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold shadow-lg hover:bg-[#ffe566] transition",
                  children: [
                    "Iniciar cadastro SICAF",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: WHATSAPP_URL,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                    " Falar com especialista"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/assistente",
                  className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-md border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                    " Assistente CADBRASIL"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-4 text-xs text-white/75", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-[#FFCD07]" }),
                " +15 anos de experiência"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { className: "h-4 w-4 text-[#FFCD07]" }),
                " +8.000 fornecedores atendidos"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GovHeroDashboard, {})
        ] }) })
      ]
    }
  );
}
function GovFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-[#0a4d2c] text-white border-t-4 border-[#FFCD07]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-xl", children: [
          "CAD ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 font-normal", children: "|" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#b8e6c8]", children: "BRASIL" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-white/75 max-w-sm leading-relaxed", children: "Especialistas em SICAF, credenciamento no Compras.gov.br e participação em licitações públicas em todo o Brasil." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#FFCD07] mb-3", children: "Serviços" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cadastro-sicaf-passo-a-passo", className: "hover:text-white", children: "Guia cadastro SICAF" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://cadastro.cadbrasil.com.br", className: "hover:text-white", children: "Cadastro online" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/como-regularizar-sicaf-empresa", className: "hover:text-white", children: "Regularização" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[#FFCD07] mb-3", children: "Portal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/como-funciona", className: "hover:text-white", children: "Como funciona" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "hover:text-white", children: "Perguntas frequentes" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.gov.br/compras", target: "_blank", rel: "noreferrer", className: "hover:text-white", children: "Compras.gov.br ↗" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 py-4 text-center text-xs text-white/60", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " CADBRASIL · Assessoria SICAF e licitações públicas"
    ] })
  ] });
}
function HomeVersao2Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "theme-gov-compras min-h-screen bg-[#f0f7f2] pb-16 sm:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GovNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GovHero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#e8f3eb] border-y border-[#168821]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceStatusBar, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogosBar, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatIsSicaf, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f0f7f2]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ReadinessCalculator, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border-y border-[#168821]/15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentChecklist, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonSection, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#e8f3eb]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Assistant, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Benefits, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StartIn2Minutes, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f0f7f2]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GovFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCta, {})
  ] });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(HomeVersao2Page, {});
}
export {
  HomePage as component
};
