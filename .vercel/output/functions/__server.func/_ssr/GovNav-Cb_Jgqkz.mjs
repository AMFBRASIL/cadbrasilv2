import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { W as WhatsAppLink, C as CADASTRO_URL } from "./router-Dm0eldpK.mjs";
import { E as ExternalLink, r as MessageCircle, X, q as Menu } from "../_libs/lucide-react.mjs";
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
                WhatsAppLink,
                {
                  intent: "Quero tirar dúvidas sobre SICAF pelo menu do site.",
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
export {
  GovFooter as G,
  GovNav as a
};
