import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as PageShell, P as PageHero, W as WHATSAPP_URL, C as CADASTRO_URL, I as InlineCta } from "./router-B3nkt1d_.mjs";
import { C as CircleCheck, g as CircleQuestionMark, i as FileText, a as ArrowRight } from "../_libs/lucide-react.mjs";
function SicafLandingPage({ page }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { breadcrumbs: [{ label: page.shortTitle }], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: page.eyebrow,
        title: page.title,
        highlight: page.highlight,
        description: page.description,
        primaryCta: { label: "Iniciar cadastro SICAF", href: CADASTRO_URL, external: true },
        secondaryCta: { label: "Falar com especialista", href: WHATSAPP_URL, external: true }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "rounded-xl border border-brand/20 bg-brand/5 px-4 py-3 text-sm text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Resposta rápida:" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "page-hero-summary", children: page.quickAnswer })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4 space-y-10", children: page.sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: section.id, className: "scroll-mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-4", children: section.title }),
      section.paragraphs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: p }, p.slice(0, 20))),
      section.bullets && section.bullets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: section.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-success mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
      ] }, b)) })
    ] }, section.id)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-6 w-6 text-brand" }),
        "Perguntas frequentes"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: page.faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "details",
        {
          className: "group rounded-2xl border border-border bg-card overflow-hidden shadow-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer p-5 font-semibold list-none flex items-center justify-between gap-4", children: [
              faq.question,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand text-xl group-open:rotate-45 transition", children: "+" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4", children: faq.answer })
          ]
        },
        faq.question
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4 rounded-2xl border border-border bg-card p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-lg flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-brand" }),
        "Continue explorando"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid sm:grid-cols-2 gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cadastro-sicaf-passo-a-passo", className: "text-brand text-sm font-medium hover:underline", children: "Guia completo: cadastro SICAF passo a passo →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faq", className: "text-brand text-sm font-medium hover:underline", children: "Central FAQ com temas especializados →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/como-funciona", className: "text-brand text-sm font-medium hover:underline", children: "Como funciona o processo CADBRASIL →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/assistente", className: "text-brand text-sm font-medium hover:underline", children: "Assistente CADBRASIL com IA →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: CADASTRO_URL,
          target: "_blank",
          rel: "noreferrer",
          className: "mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-brand text-brand-foreground font-semibold",
          children: [
            "Começar agora",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCta, {})
  ] });
}
export {
  SicafLandingPage as S
};
