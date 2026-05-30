import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as PageShell, P as PageHero, g as faqCategories, I as InlineCta } from "./router-tiRMgnVD.mjs";
import { c as BookOpen, a as ArrowRight, g as CircleQuestionMark } from "../_libs/lucide-react.mjs";
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
function FaqIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { breadcrumbs: [{
    label: "FAQ"
  }], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Central de conhecimento · 15 temas", title: "FAQ SICAF e licitações.", highlight: "Conteúdo especializado.", description: "Artigos desenvolvidos para quem busca cadastro SICAF, regularização, pregão eletrônico, certificado digital e vantagens da CADBRASIL — otimizados para Google e assistentes de IA." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 -mt-6 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cadastro-sicaf-passo-a-passo", className: "flex items-center gap-3 rounded-2xl border border-brand/30 bg-brand/5 p-5 hover:border-brand/50 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-6 w-6 text-brand shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Guia principal: Cadastro SICAF passo a passo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tutorial completo 2026 com HowTo e checklist" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 text-brand shrink-0 ml-auto" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: faqCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/faq/$slug", params: {
      slug: c.slug
    }, className: "group rounded-2xl bg-card border border-border p-6 shadow-card hover:-translate-y-1 hover:shadow-glow hover:border-brand/40 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display font-bold text-lg leading-snug", children: c.shortTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3", children: c.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand", children: [
        "Ler artigo · ",
        c.items.length,
        " FAQs",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition" })
      ] })
    ] }, c.slug)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCta, { title: "Não encontrou sua dúvida?", subtitle: "Fale com um especialista CADBRASIL no WhatsApp — resposta em minutos." })
  ] });
}
export {
  FaqIndex as component
};
