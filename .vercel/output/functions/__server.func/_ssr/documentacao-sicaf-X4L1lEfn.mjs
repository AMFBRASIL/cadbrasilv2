import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as GovNav, G as GovFooter } from "./GovNav-Bx3V8rQ9.mjs";
import { p as niveisDocumentacao, g as documentacaoSicafMeta, C as CADASTRO_URL, W as WhatsAppLink, k as getDefaultIntent, f as documentacaoSicafFaqs, a as ContactSection, F as FloatingCta } from "./router-BUf0_AlS.mjs";
import { k as FileText, a as ArrowRight, s as MessageCircle, o as Layers, i as Clock, g as CircleCheck, C as Circle, z as ShieldCheck } from "../_libs/lucide-react.mjs";
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
  { to: "/documentos-necessarios-cadastro-sicaf", label: "Documentos cadastro SICAF (guia)" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Cadastro passo a passo" },
  { to: "/regularidade-fiscal", label: "Regularidade fiscal" },
  { to: "/emitir-crc", label: "Emitir CRC" },
  { to: "/documentacao-licitacao", label: "Documentação para licitação" },
  { to: "/faq", label: "Perguntas frequentes" }
];
const totalDocs = niveisDocumentacao.reduce((n, l) => n + l.documentos.length, 0);
function CtaBand({ compact }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `rounded-xl border-2 border-[#168821]/30 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-6 sm:p-8 text-center shadow-lg ${compact ? "" : "my-10"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl sm:text-2xl font-bold text-white", children: compact ? "Pronto para validar sua documentação?" : "Valide seus documentos e inicie o SICAF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm sm:text-base text-white/90 max-w-xl mx-auto", children: "A CADBRASIL organiza o checklist, corrige pendências e conduz o credenciamento até o CRC regular." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: CADASTRO_URL,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold hover:bg-[#ffe566] transition",
              children: [
                "Fazer cadastro SICAF",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            WhatsAppLink,
            {
              pageLabel: documentacaoSicafMeta.shortTitle,
              intent: getDefaultIntent(documentacaoSicafMeta.path),
              className: "inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
                " Tirar dúvidas no WhatsApp"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function DocumentacaoSicafPage() {
  const allIds = reactExports.useMemo(
    () => niveisDocumentacao.flatMap((n) => n.documentos.map((d) => d.id)),
    []
  );
  const [checked, setChecked] = reactExports.useState(() => /* @__PURE__ */ new Set());
  const progress = checked.size;
  const progressPct = allIds.length ? Math.round(progress / allIds.length * 100) : 0;
  const toggle = (id) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-[#0a4d2c] font-semibold", children: documentacaoSicafMeta.shortTitle })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
            " Referência documental SICAF"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-white text-balance", children: [
            "Documentação completa para",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#FFCD07]", children: "cadastro no SICAF" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto", children: "Checklist profissional por nível de habilitação (I a VI), validades de certidões e pré-requisitos. Use como guia interno ou confie na CADBRASIL para conduzir todo o credenciamento." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "page-hero-summary mt-4 text-sm text-white/80 max-w-2xl mx-auto", children: "Para credenciar no SICAF você precisa de e-CNPJ, dados cadastrais (Nível I), documentos jurídicos (II), certidões fiscais e trabalhistas válidas (III) e, conforme o edital, comprovações técnicas e financeiras (IV e V) e linhas de fornecimento (VI)." }),
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
                pageLabel: documentacaoSicafMeta.shortTitle,
                intent: getDefaultIntent(documentacaoSicafMeta.path),
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
        { icon: FileText, label: `${totalDocs}+ itens`, sub: "no checklist completo" },
        { icon: Layers, label: "6 níveis", sub: "de habilitação SICAF" },
        { icon: Clock, label: "180 dias", sub: "validade típica de certidões" }
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "checklist-interativo", className: "scroll-mt-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c]", children: "Checklist por nível" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-[#0a4d2c]/75 max-w-2xl leading-relaxed", children: [
                "Marque os itens que sua empresa já possui. Itens em",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#168821]", children: "verde" }),
                " indicam documentos normalmente obrigatórios na fase correspondente."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 rounded-lg border border-[#168821]/25 bg-[#f0f7f2] px-4 py-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-[#0a4d2c]", children: [
                progress,
                " / ",
                allIds.length
              ] }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[#0a4d2c]/70", children: [
                "(",
                progressPct,
                "%)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-2 w-40 max-w-full rounded-full bg-[#168821]/20 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "h-full bg-[#168821] transition-all duration-300",
                  style: { width: `${progressPct}%` }
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: niveisDocumentacao.map((nivel) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              id: `nivel-${nivel.nivel.toLowerCase()}`,
              className: "scroll-mt-28 rounded-xl border border-[#168821]/20 overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#0a4d2c] px-5 py-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center min-w-[2.5rem] px-2 py-0.5 rounded bg-[#FFCD07] text-[#0a4d2c] text-xs font-bold", children: nivel.nivel }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: nivel.titulo })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/85", children: nivel.descricao })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-[#168821]/10 bg-white", children: nivel.documentos.map((doc) => {
                  const isChecked = checked.has(doc.id);
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => toggle(doc.id),
                      className: `w-full flex gap-3 items-start text-left px-5 py-4 transition hover:bg-[#f0f7f2]/80 ${isChecked ? "bg-[#f0f7f2]/60" : ""}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 shrink-0 text-[#168821]", children: isChecked ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5", "aria-hidden": true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-5 w-5 text-[#168821]/40", "aria-hidden": true }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "span",
                            {
                              className: `font-medium ${doc.obrigatorio ? "text-[#0a4d2c]" : "text-[#0a4d2c]/90"}`,
                              children: [
                                doc.nome,
                                doc.obrigatorio && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] uppercase tracking-wide font-bold text-[#168821]", children: "Essencial" })
                              ]
                            }
                          ),
                          doc.detalhe && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm text-[#0a4d2c]/65 mt-0.5", children: doc.detalhe }),
                          doc.validade && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-block mt-1 text-xs font-medium text-[#0a4d2c]/55 bg-[#f0f7f2] px-2 py-0.5 rounded", children: [
                            "Validade: ",
                            doc.validade
                          ] })
                        ] })
                      ]
                    }
                  ) }, doc.id);
                }) })
              ]
            },
            nivel.nivel
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "mei-porte", className: "scroll-mt-28 mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-[#0a4d2c] mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-7 w-7 text-[#168821]" }),
            "MEI, ME e EPP"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-[#168821]/20 bg-[#f0f7f2] p-5 space-y-3 text-[#0a4d2c]/80 leading-relaxed text-sm sm:text-base", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#0a4d2c]", children: "MEI:" }),
              " utiliza CCMEI em substituição a contrato social, com certidões simplificadas, mas mantém exigência de e-CNPJ e regularidade fiscal/trabalhista para habilitação."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#0a4d2c]", children: "ME e EPP:" }),
              " seguem estrutura completa de Níveis I a III; níveis IV a VI dependem do objeto e do valor estimado do edital."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[#0a4d2c]", children: "Demais portes:" }),
              " atenção redobrada a balanços auditados, atestados de maior porte e cadastro em CATMAT/CATSER quando o edital exigir."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { id: "boas-praticas", className: "scroll-mt-28 mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-[#0a4d2c] mb-4", children: "Boas práticas documentais" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-3", children: [
            "Renove certidões com 30 a 45 dias de antecedência do vencimento.",
            "Mantenha o e-CNPJ válido e com poderes alinhados ao representante no portal.",
            "Consolide alterações contratuais antes do envio — versões desatualizadas geram indeferimento.",
            "Arquive PDFs legíveis, sem cortes e com assinaturas quando exigidas.",
            "Cruze o checklist com o edital: o SICAF não substitui exigências específicas do pregão.",
            "Monitore o CRC: status irregular bloqueia habilitação mesmo com documentos em dia."
          ].map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex gap-2 text-sm text-[#0a4d2c]/80 bg-white border border-[#168821]/15 rounded-lg p-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 shrink-0 text-[#168821] mt-0.5" }),
                tip
              ]
            },
            tip
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 bg-[#f0f7f2]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-8 text-center", children: "Perguntas frequentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 max-w-3xl mx-auto", children: documentacaoSicafFaqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, { compact: true }) })
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
const SplitComponent = DocumentacaoSicafPage;
export {
  SplitComponent as component
};
