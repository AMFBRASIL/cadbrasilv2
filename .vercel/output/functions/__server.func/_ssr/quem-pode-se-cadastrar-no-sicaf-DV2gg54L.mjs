import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as GovNav, G as GovFooter } from "./GovNav-DioiB-qr.mjs";
import { a4 as quemPodeMeta, C as CADASTRO_URL, W as WhatsAppLink, p as getDefaultIntent, a1 as perfisEmpresa, a7 as requisitosMinimos, a2 as quemNaoPode, $ as passosElegibilidade, a3 as quemPodeFaqs, a as ContactSection, b as FloatingCta } from "./router-BXLSSgYo.mjs";
import { V as Users, a as ArrowRight, v as MessageCircle, f as Building2, t as MapPin, k as Clock, h as CircleCheck, j as CircleX, C as ChevronDown } from "../_libs/lucide-react.mjs";
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
  { to: "/cadastrar-no-sicaf", label: "Cadastrar no SICAF" },
  { to: "/cadastro-sicaf", label: "Cadastro SICAF" },
  { to: "/como-cadastrar-empresa-sicaf", label: "Como cadastrar empresa" },
  { to: "/documentacao-sicaf", label: "Documentação SICAF" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia passo a passo" },
  { to: "/faq/sicaf-mei-epp", label: "FAQ MEI e EPP" },
  { to: "/empresa-inapta", label: "Empresa inapta" }
];
function CtaBand({ title, compact }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-xl border-2 border-[#168821]/30 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-6 sm:p-8 text-center shadow-lg ${compact ? "" : "my-10"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-bold text-white", children: title ?? "Sua empresa pode se cadastrar — comece agora" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm sm:text-base text-white/90 max-w-xl mx-auto", children: "A CADBRASIL atende MEI, ME, EPP, LTDA, S/A e EIRELI em todo o Brasil. Credenciamento assistido em até 24 horas com documentação validada." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: CADASTRO_URL,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold hover:bg-[#ffe566] transition",
              children: [
                "Fazer cadastro na CADBRASIL",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            WhatsAppLink,
            {
              pageLabel: quemPodeMeta.shortTitle,
              intent: getDefaultIntent(quemPodeMeta.path),
              className: "inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                " Consultar elegibilidade"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function QuemPodeSeCadastrarSicafPage() {
  const [expanded, setExpanded] = reactExports.useState("mei");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "theme-gov-compras min-h-screen bg-[#f0f7f2] pb-16 sm:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GovNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "nav",
        {
          "aria-label": "Breadcrumb",
          className: "pt-[6.75rem] sm:pt-32 pb-2 mx-auto max-w-5xl px-4 text-sm text-[#0a4d2c]/70",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#168821] font-medium", children: "Início" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": true, children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-[#0a4d2c] font-semibold", children: quemPodeMeta.shortTitle })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5" }),
            " Elegibilidade SICAF"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-white text-balance", children: [
            "Quem pode se cadastrar no",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FFCD07]", children: "SICAF" }),
            "?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto", children: "Guia claro por porte e natureza jurídica: MEI, ME, EPP, LTDA, S/A e EIRELI. Entenda requisitos, exceções e como iniciar seu credenciamento com a CADBRASIL." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "page-hero-summary ai-summary mt-4 text-sm text-white/85 max-w-2xl mx-auto leading-relaxed", children: quemPodeMeta.quickAnswer }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 justify-center", children: [
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
              WhatsAppLink,
              {
                pageLabel: quemPodeMeta.shortTitle,
                intent: getDefaultIntent(quemPodeMeta.path),
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
        { icon: Building2, label: "6 perfis", sub: "MEI a S/A — todos elegíveis" },
        { icon: MapPin, label: "Todo o Brasil", sub: "Qualquer UF ou município" },
        { icon: Clock, label: "Até 24h", sub: "Com assessoria CADBRASIL" }
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "perfis-empresa", className: "scroll-mt-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-2", children: "Por tipo de empresa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#0a4d2c]/75 mb-8 max-w-2xl leading-relaxed", children: "Selecione o perfil da sua empresa para ver documentação, vantagens e pontos de atenção no credenciamento SICAF." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3", children: perfisEmpresa.map((perfil) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setExpanded(expanded === perfil.id ? null : perfil.id),
              className: `text-left rounded-xl border-2 p-4 transition shadow-sm hover:shadow-md ${expanded === perfil.id ? "border-[#168821] bg-[#f0f7f2]" : "border-[#168821]/20 bg-white hover:border-[#168821]/50"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block text-xs font-bold uppercase tracking-wide text-[#168821] bg-[#168821]/10 px-2 py-0.5 rounded", children: perfil.sigla }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-semibold text-[#0a4d2c] text-sm leading-snug", children: perfil.nome })
                  ] }),
                  perfil.podeCadastrar ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 shrink-0 text-[#168821]", "aria-label": "Pode cadastrar" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5 shrink-0 text-red-500", "aria-label": "Não pode cadastrar" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronDown,
                  {
                    className: `h-4 w-4 mt-2 text-[#0a4d2c]/50 transition-transform ${expanded === perfil.id ? "rotate-180" : ""}`
                  }
                )
              ]
            },
            perfil.id
          )) }),
          expanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-[#168821]/25 bg-[#f0f7f2] p-5 sm:p-6 animate-in fade-in duration-200", children: (() => {
            const perfil = perfisEmpresa.find((p) => p.id === expanded);
            if (!perfil) return null;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-[#0a4d2c]", children: [
                perfil.sigla,
                " — ",
                perfil.nome
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[#0a4d2c]/80 leading-relaxed", children: perfil.resumo }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#0a4d2c]", children: "Documentação:" }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0a4d2c]/75", children: perfil.documentacao })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: perfil.vantagens.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm text-[#0a4d2c]/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#168821] mt-0.5" }),
                v
              ] }, v)) }),
              perfil.atencao && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Atenção:" }),
                " ",
                perfil.atencao
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: CADASTRO_URL,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#168821] text-white text-sm font-semibold hover:bg-[#0f6b38] transition",
                  children: [
                    "Cadastrar ",
                    perfil.sigla,
                    " na CADBRASIL",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                  ]
                }
              ) })
            ] });
          })() })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, { title: "MEI, ME ou EPP? A CADBRASIL orienta seu porte" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "requisitos-minimos", className: "scroll-mt-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl sm:text-2xl font-bold text-[#0a4d2c] mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6 text-[#168821]" }),
              "Requisitos mínimos"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: requisitosMinimos.map((req) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "rounded-lg border border-[#168821]/15 bg-white p-4 flex gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 shrink-0 text-[#168821] mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-[#0a4d2c]", children: req.titulo }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#0a4d2c]/70 mt-0.5", children: req.descricao })
                  ] })
                ]
              },
              req.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "quem-nao-pode", className: "scroll-mt-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl sm:text-2xl font-bold text-[#0a4d2c] mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-6 w-6 text-red-600" }),
              "Quem não pode (ainda)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: quemNaoPode.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "rounded-lg border border-red-200/60 bg-red-50/50 p-4 flex gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5 shrink-0 text-red-600 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-[#0a4d2c]", children: item.titulo }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[#0a4d2c]/70 mt-0.5", children: item.descricao })
                  ] })
                ]
              },
              item.titulo
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-[#0a4d2c]/70", children: [
              "Empresa inapta ou com pendências?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/empresa-inapta", className: "text-[#168821] font-medium hover:underline", children: "Veja como regularizar" }),
              " ",
              "antes do cadastro SICAF."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "como-verificar", className: "scroll-mt-28 mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-[#0a4d2c] mb-6 text-center", children: "Como verificar se sua empresa pode se cadastrar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid sm:grid-cols-3 gap-4", children: passosElegibilidade.map((passo) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "rounded-xl border border-[#168821]/20 bg-white p-5 text-center shadow-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#168821] text-white font-bold text-lg", children: passo.n }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-bold text-[#0a4d2c]", children: passo.titulo }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-[#0a4d2c]/75 leading-relaxed", children: passo.texto })
              ]
            },
            passo.n
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-[#f0f7f2]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-8 text-center", children: "Perguntas frequentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-w-3xl mx-auto", children: quemPodeFaqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, { compact: true, title: "Confirme sua elegibilidade e cadastre-se hoje" }) })
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
const SplitComponent = QuemPodeSeCadastrarSicafPage;
export {
  SplitComponent as component
};
