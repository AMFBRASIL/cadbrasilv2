import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$1, h as faqCategories, c as PageShell, P as PageHero, I as InlineCta } from "./router-apgsbpvz.mjs";
import { h as CircleQuestionMark, a as ArrowRight, t as Minus, v as Plus } from "../_libs/lucide-react.mjs";
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
function FaqCategoryPage() {
  const {
    category
  } = Route$1.useLoaderData();
  const otherCategories = faqCategories.filter((c) => c.slug !== category.slug);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { breadcrumbs: [{
    label: "FAQ",
    to: "/faq"
  }, {
    label: category.shortTitle
  }], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "FAQ · CADBRASIL", title: category.title, description: category.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4 space-y-3", children: category.items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqAccordion, { ...it, defaultOpen: i === 0 }, it.question)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold mb-8", children: "Outras categorias de FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: otherCategories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/faq/$slug", params: {
        slug: c.slug
      }, className: "group rounded-2xl bg-card border border-border p-5 hover:border-brand/40 hover:shadow-soft transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-5 w-5 text-brand" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display font-semibold", children: c.shortTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
          c.items.length,
          " perguntas"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand", children: [
          "Ver",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 group-hover:translate-x-0.5 transition" })
        ] })
      ] }, c.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCta, { title: "Pronto para regularizar?", subtitle: "Faça seu cadastro CADBRASIL ou fale com um especialista no WhatsApp." })
  ] });
}
function FaqAccordion({
  question,
  answer,
  defaultOpen = false
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen((v) => !v), className: "w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-accent transition", "aria-expanded": open, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-base sm:text-lg", children: question }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 h-8 w-8 rounded-full bg-accent grid place-items-center", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 sm:px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up", children: answer })
  ] });
}
export {
  FaqCategoryPage as component
};
