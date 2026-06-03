import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as GovNav, G as GovFooter } from "./GovNav-DAXOE4Us.mjs";
import { f as cadastrarNoSicafMeta, C as CADASTRO_URL, W as WhatsAppLink, o as getDefaultIntent, Z as passosCadastroCadbrasil, d as antesDeComecar, aa as vantagensCadbrasil, h as comparativo, e as cadastrarNoSicafFaqs, a as ContactSection, F as FloatingCta } from "./router-BUzfRi7u.mjs";
import { z as Rocket, a as ArrowRight, v as MessageCircle, k as Clock, F as FileCheck, K as Shield, h as CircleCheck, Y as X } from "../_libs/lucide-react.mjs";
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
const RELATED = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia passo a passo completo" },
  { to: "/quem-pode-se-cadastrar-no-sicaf", label: "Quem pode se cadastrar" },
  { to: "/documentacao-sicaf", label: "Documentação necessária" },
  { to: "/credenciamento", label: "Credenciamento SICAF" },
  { to: "/emitir-crc", label: "Emitir CRC" },
  { to: "/faq/cadastro-sicaf", label: "FAQ cadastro" }
];
function CtaBand({ title, compact }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-xl border-2 border-[#168821]/30 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-6 sm:p-8 text-center shadow-lg ${compact ? "" : "my-10"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-bold text-white", children: title ?? "Cadastre sua empresa no SICAF agora" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm sm:text-base text-white/90 max-w-xl mx-auto", children: "Inicie em minutos no portal CADBRASIL. Credenciamento assistido, documentação validada e CRC regular em até 24 horas." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: CADASTRO_URL,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold hover:bg-[#ffe566] transition shadow-md",
              children: [
                "Cadastrar no SICAF — CADBRASIL",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            WhatsAppLink,
            {
              pageLabel: cadastrarNoSicafMeta.shortTitle,
              intent: getDefaultIntent(cadastrarNoSicafMeta.path),
              className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                " Tirar dúvidas"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function CadastrarNoSicafPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "theme-gov-compras min-h-screen bg-[#f0f7f2] pb-16 sm:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GovNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "nav",
        {
          "aria-label": "Breadcrumb",
          className: "pt-[5.5rem] sm:pt-28 pb-2 mx-auto max-w-5xl px-4 text-sm text-[#0a4d2c]/70",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#168821] font-medium", children: "Início" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": true, children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-[#0a4d2c] font-semibold", children: cadastrarNoSicafMeta.shortTitle })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pb-12 sm:pb-16 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821] opacity-[0.97]",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-[0.06]",
            style: {
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.2) 12px, rgba(255,255,255,0.2) 13px)`
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl px-4 text-center py-10 sm:py-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold bg-white/15 border border-white/25 text-white px-3 py-1.5 rounded-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-3.5 w-3.5" }),
            " Cadastro SICAF 2026"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-white text-balance", children: [
            "Como ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FFCD07]", children: "cadastrar no SICAF" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto", children: "Passo a passo intuitivo para credenciar sua empresa no Sistema de Cadastramento Unificado de Fornecedores — com assessoria CADBRASIL do início ao CRC regular." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "page-hero-summary ai-summary mt-4 text-sm text-white/85 max-w-2xl mx-auto leading-relaxed", children: cadastrarNoSicafMeta.quickAnswer }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: CADASTRO_URL,
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold shadow-lg hover:bg-[#ffe566] transition",
                children: [
                  "Iniciar cadastro na CADBRASIL",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              WhatsAppLink,
              {
                pageLabel: cadastrarNoSicafMeta.shortTitle,
                intent: getDefaultIntent(cadastrarNoSicafMeta.path),
                className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                  " Falar com especialista"
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-6 -mt-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4 grid sm:grid-cols-3 gap-3", children: [
        { icon: Clock, label: "Até 24 horas", sub: "com documentação completa" },
        { icon: FileCheck, label: "5 passos", sub: "fluxo guiado CADBRASIL" },
        { icon: Shield, label: "CRC regular", sub: "habilitado para licitar" }
      ].map(({ icon: Icon, label, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-3 rounded-lg border border-[#168821]/20 bg-white px-4 py-3 shadow-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#168821]/15 text-[#168821]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#0a4d2c]", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[#0a4d2c]/65", children: sub })
            ] })
          ]
        },
        label
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-white border-y border-[#168821]/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "passo-a-passo", className: "scroll-mt-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-2 text-center", children: "Passo a passo para cadastrar no SICAF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[#0a4d2c]/75 mb-10 max-w-2xl mx-auto", children: "Fluxo assistido pela CADBRASIL — do primeiro clique ao CRC regular." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-4", children: passosCadastroCadbrasil.map((passo) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              id: passo.id,
              className: "scroll-mt-28 flex gap-4 sm:gap-6 rounded-xl border border-[#168821]/20 bg-[#f0f7f2] p-5 sm:p-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#168821] text-white font-bold text-lg", children: passo.numero }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-[#0a4d2c] text-lg", children: passo.titulo }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-[#168821] bg-white border border-[#168821]/25 px-2 py-0.5 rounded", children: passo.prazo })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-[#0a4d2c]/75 leading-relaxed", children: passo.descricao }),
                  passo.numero === "01" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: CADASTRO_URL,
                      target: "_blank",
                      rel: "noreferrer",
                      className: "mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#168821] hover:text-[#0a4d2c] transition",
                      children: [
                        "Acessar cadastro.cadbrasil.com.br",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                      ]
                    }
                  )
                ] })
              ]
            },
            passo.id
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, { title: "Pronto para o passo 1? Cadastre-se na CADBRASIL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "antes-de-comecar", className: "scroll-mt-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[#0a4d2c] mb-4", children: "Antes de cadastrar, tenha em mãos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: antesDeComecar.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex gap-3 rounded-lg border border-[#168821]/15 bg-white px-4 py-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 shrink-0 text-[#168821] mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-[#0a4d2c]/85", children: [
                    item.item,
                    item.essencial && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] uppercase font-bold text-[#168821]", children: "Obrigatório" })
                  ] })
                ]
              },
              item.id
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/documentacao-sicaf",
                className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#168821] hover:underline",
                children: [
                  "Ver checklist completo de documentos",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "vantagens", className: "scroll-mt-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-bold text-[#0a4d2c] mb-4", children: "Por que cadastrar com a CADBRASIL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: vantagensCadbrasil.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "rounded-lg border border-[#168821]/15 bg-white p-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-[#168821]", children: v.titulo }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-[#0a4d2c]/75 leading-relaxed", children: v.descricao })
                ]
              },
              v.titulo
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "comparativo", className: "scroll-mt-28 mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-[#0a4d2c] mb-6 text-center", children: "Sozinho vs. com a CADBRASIL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-red-200/80 bg-red-50/40 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-[#0a4d2c] mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 text-red-600" }),
                " Cadastrar sozinho"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: comparativo.sozinho.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm text-[#0a4d2c]/75", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4 shrink-0 text-red-500 mt-0.5" }),
                item
              ] }, item)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-[#168821]/40 bg-[#f0f7f2] p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-[#0a4d2c] mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-[#168821]" }),
                " Com a CADBRASIL"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: comparativo.cadbrasil.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm text-[#0a4d2c]/85", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#168821] mt-0.5" }),
                item
              ] }, item)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: CADASTRO_URL,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "mt-5 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#168821] text-white font-semibold hover:bg-[#0f6b38] transition",
                  children: [
                    "Cadastrar agora",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-[#f0f7f2]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-8 text-center", children: "Perguntas frequentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-w-3xl mx-auto", children: cadastrarNoSicafFaqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "details",
          {
            className: "group rounded-lg border border-[#168821]/20 bg-white overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer list-none px-5 py-4 font-semibold text-[#0a4d2c] hover:bg-[#f0f7f2]/50 transition flex justify-between gap-2", children: [
                faq.question,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#168821] group-open:rotate-45 transition-transform text-xl leading-none", children: "+" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-5 pb-4 text-sm text-[#0a4d2c]/75 leading-relaxed", children: faq.answer })
            ]
          },
          faq.question
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, { compact: true, title: "Cadastre no SICAF hoje — comece em 5 minutos" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-white border-t border-[#168821]/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-[#0a4d2c] mb-4", children: "Continue explorando" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap gap-2", children: RELATED.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            className: "inline-block text-sm font-medium text-[#168821] hover:text-[#0a4d2c] bg-[#f0f7f2] hover:bg-[#168821]/10 border border-[#168821]/20 px-3 py-2 rounded-md transition",
            children: l.label
          }
        ) }, l.to)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GovFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCta, {})
  ] });
}
const SplitComponent = CadastrarNoSicafPage;
export {
  SplitComponent as component
};
