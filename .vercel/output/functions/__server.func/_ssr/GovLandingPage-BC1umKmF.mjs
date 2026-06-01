import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as GovNav, G as GovFooter } from "./GovNav-Cb_Jgqkz.mjs";
import { C as CADASTRO_URL, W as WhatsAppLink, i as getDefaultIntent, a as ContactSection, F as FloatingCta } from "./router-Dm0eldpK.mjs";
import { a as ArrowRight, r as MessageCircle, C as CircleCheck, g as CircleQuestionMark, j as FileText } from "../_libs/lucide-react.mjs";
const RELATED_LINKS = [
  { to: "/como-participar-de-licitacao", label: "Como participar de licitação" },
  { to: "/cadastro-fornecedor-governo", label: "Cadastro fornecedor governo" },
  { to: "/pregao-eletronico", label: "Pregão eletrônico" },
  { to: "/documentacao-licitacao", label: "Documentação para licitação" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia cadastro SICAF passo a passo" },
  { to: "/faq", label: "Central de perguntas frequentes" }
];
function GovLandingPage({ page }) {
  const related = RELATED_LINKS.filter((l) => l.to !== page.path);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "theme-gov-compras min-h-screen bg-[#f0f7f2] pb-16 sm:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GovNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "nav",
        {
          "aria-label": "Breadcrumb",
          className: "pt-[5.5rem] sm:pt-28 pb-2 mx-auto max-w-4xl px-4 text-sm text-[#0a4d2c]/70",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-[#168821] font-medium", children: "Início" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": true, children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-[#0a4d2c] font-semibold", children: page.shortTitle })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pb-12 sm:pb-16 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821] opacity-[0.97]", "aria-hidden": true }),
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-4xl px-4 text-center py-10 sm:py-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 text-xs font-semibold bg-white/15 border border-white/25 text-white px-3 py-1.5 rounded-md", children: page.eyebrow }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-white text-balance", children: [
            page.title,
            " ",
            page.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FFCD07]", children: page.highlight })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto", children: page.description }),
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
                pageLabel: page.shortTitle,
                intent: getDefaultIntent(page.path),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-6 -mt-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "rounded-lg border-2 border-[#168821]/25 bg-white px-4 py-3 text-sm text-[#0a4d2c]/80 leading-relaxed shadow-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#0a4d2c]", children: "Resposta rápida:" }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "page-hero-summary", children: page.quickAnswer })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 bg-white border-y border-[#168821]/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 space-y-10", children: [
        page.itemList && page.itemList.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "checklist-documentos", className: "scroll-mt-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-4", children: "Checklist de documentos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2 rounded-lg border border-[#168821]/20 bg-[#f0f7f2] p-5", children: page.itemList.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm text-[#0a4d2c]/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#168821] text-white font-semibold text-xs", children: i + 1 }),
            item
          ] }, item)) })
        ] }),
        page.sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: section.id, className: "scroll-mt-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-4", children: section.title }),
          section.paragraphs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[#0a4d2c]/75 leading-relaxed mb-4", children: p }, p.slice(0, 24))),
          section.bullets && section.bullets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: section.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm text-[#0a4d2c]/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-[#168821] mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
          ] }, b)) })
        ] }, section.id)),
        page.howToSteps && page.howToSteps.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "passo-a-passo", className: "scroll-mt-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-4", children: "Passo a passo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-3", children: page.howToSteps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              id: `passo-${i + 1}`,
              className: "scroll-mt-28 rounded-lg border border-[#168821]/20 bg-[#f0f7f2] p-5 flex gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#168821] text-white font-bold text-sm", children: String(i + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-[#0a4d2c]", children: step.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-[#0a4d2c]/75 leading-relaxed", children: step.text })
                ] })
              ]
            },
            step.name
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 bg-[#e8f3eb]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border-2 border-[#FFCD07]/40 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-lg", children: "Cadastre sua empresa no SICAF com a CADBRASIL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/85", children: "Habilitação em até 24h · Validação documental · Especialistas em licitações" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: CADASTRO_URL,
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold shrink-0 hover:bg-[#ffe566] transition",
            children: [
              "Iniciar cadastro",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-[#f0f7f2]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-6 w-6 text-[#168821]" }),
          "Perguntas frequentes"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: page.faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "details",
          {
            className: "group rounded-lg border border-[#168821]/20 bg-white overflow-hidden shadow-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer p-5 font-semibold text-[#0a4d2c] list-none flex items-center justify-between gap-4", children: [
                faq.question,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#168821] text-xl group-open:rotate-45 transition", children: "+" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-[#0a4d2c]/75 leading-relaxed border-t border-[#168821]/15 pt-4", children: faq.answer })
            ]
          },
          faq.question
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-white border-t border-[#168821]/15", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 rounded-lg border border-[#168821]/20 bg-[#f0f7f2] p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-lg text-[#0a4d2c] flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-[#168821]" }),
          "Continue explorando"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid sm:grid-cols-2 gap-2", children: related.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: link.to,
            className: "text-[#168821] text-sm font-medium hover:underline",
            children: [
              link.label,
              " →"
            ]
          },
          link.to
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[#f0f7f2]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GovFooter, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCta, {})
  ] });
}
export {
  GovLandingPage as G
};
