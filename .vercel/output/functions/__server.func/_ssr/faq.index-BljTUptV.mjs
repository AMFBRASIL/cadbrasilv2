import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as PageShell, P as PageHero, f as faqCategories, I as InlineCta } from "./router-NQo8MWL3.mjs";
import { f as CircleQuestionMark, a as ArrowRight } from "../_libs/lucide-react.mjs";
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Central de ajuda", title: "Perguntas frequentes.", highlight: "Tudo sobre SICAF.", description: "Organizamos as dúvidas mais comuns em categorias temáticas. Escolha o tema abaixo ou fale com um especialista a qualquer momento." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: faqCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/faq/$slug", params: {
      slug: c.slug
    }, className: "group rounded-2xl bg-card border border-border p-7 shadow-card hover:-translate-y-1 hover:shadow-glow hover:border-brand/40 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 font-display font-bold text-xl", children: c.shortTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: c.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand", children: [
        "Ver ",
        c.items.length,
        " perguntas",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition" })
      ] })
    ] }, c.slug)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCta, { title: "Não encontrou sua dúvida?", subtitle: "Fale com um especialista CADBRASIL no WhatsApp — resposta em minutos." })
  ] });
}
export {
  FaqIndex as component
};
