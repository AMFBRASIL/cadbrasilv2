import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$1, f as faqCategories, c as PageShell, P as PageHero, C as CADASTRO_URL, I as InlineCta } from "./router-DhSyN6yk.mjs";
import { c as BookOpen, g as CircleQuestionMark, a as ArrowRight, r as Minus, t as Plus } from "../_libs/lucide-react.mjs";
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
function FaqCategoryRichPage({ category }) {
  const others = faqCategories.filter((c) => c.slug !== category.slug).slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { breadcrumbs: [{ label: "FAQ", to: "/faq" }, { label: category.shortTitle }], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHero,
      {
        eyebrow: "FAQ especializado · CADBRASIL · 2026",
        title: category.title,
        description: category.quickAnswer
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "faq-page-summary text-sm text-muted-foreground border-l-2 border-brand/40 pl-4", children: category.description }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-4xl px-4 py-10 space-y-14", children: [
      category.sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: section.id, className: "scroll-mt-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: section.title }),
        section.paragraphs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: p }, p.slice(0, 40))),
        section.bullets && section.bullets.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-muted-foreground", children: section.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand font-bold", children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, b)) })
      ] }, section.id)),
      category.relatedGuides && category.relatedGuides.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-brand/20 bg-brand/5 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5 text-brand" }),
          "Guias relacionados"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: category.relatedGuides.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: g.to, className: "text-brand text-sm font-medium hover:underline", children: [
          g.label,
          " →"
        ] }) }, g.to)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-4 bg-accent/20", "aria-labelledby": "faq-perguntas", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "faq-perguntas", className: "text-2xl sm:text-3xl font-bold mb-8", children: "Perguntas frequentes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: category.items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FaqAccordion, { ...it, defaultOpen: i === 0 }, it.question)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-8", children: "Outros temas no FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: others.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/faq/$slug",
          params: { slug: c.slug },
          className: "group rounded-2xl bg-card border border-border p-5 hover:border-brand/40 hover:shadow-soft transition",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-5 w-5 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display font-semibold text-sm", children: c.shortTitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground line-clamp-2", children: c.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand", children: [
              "Ler artigo",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 group-hover:translate-x-0.5 transition" })
            ] })
          ]
        },
        c.slug
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/faq", className: "text-sm font-semibold text-brand hover:underline", children: [
        "Ver todas as ",
        faqCategories.length,
        " categorias →"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-4xl px-4 pb-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: CADASTRO_URL,
        target: "_blank",
        rel: "noreferrer",
        className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition",
        children: [
          "Iniciar cadastro SICAF",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      InlineCta,
      {
        title: `Dúvidas sobre ${category.shortTitle}?`,
        subtitle: "Fale com um especialista CADBRASIL — diagnóstico e orientação em minutos."
      }
    )
  ] });
}
function FaqAccordion({
  question,
  answer,
  defaultOpen = false
}) {
  const [open, setOpen] = reactExports.useState(defaultOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        className: "w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-accent transition",
        "aria-expanded": open,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-base sm:text-lg", children: question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 h-8 w-8 rounded-full bg-accent grid place-items-center", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 sm:px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up border-t border-border pt-4", children: answer })
  ] });
}
function FaqSlugPage() {
  const {
    category
  } = Route$1.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FaqCategoryRichPage, { category });
}
export {
  FaqSlugPage as component
};
