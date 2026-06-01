import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as PageShell, P as PageHero, C as CADASTRO_URL, m as miniFaq, I as InlineCta } from "./router-toPzbyKf.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as CircleCheck, L as Landmark, f as Building2, k as Gavel, S as Scale, i as FileText, z as TriangleAlert, a as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/zod.mjs";
import "../_libs/isbot.mjs";
const niveis = [{
  n: "I",
  t: "Credenciamento",
  d: "Dados básicos da empresa, sócios e contatos. Porta de entrada obrigatória do SICAF."
}, {
  n: "II",
  t: "Habilitação Jurídica",
  d: "Contrato social, atos constitutivos, procurações e documentos societários atualizados."
}, {
  n: "III",
  t: "Regularidade Fiscal e Trabalhista",
  d: "CND Federal, FGTS, CND Estadual, CND Municipal e CNDT — o nível mais comum de pendência."
}, {
  n: "IV",
  t: "Qualificação Técnica",
  d: "Atestados de capacidade técnica que comprovam experiência em objetos similares ao licitado."
}, {
  n: "V",
  t: "Qualificação Econômico-Financeira",
  d: "Balanço patrimonial, índices contábeis e demonstrações financeiras do último exercício."
}, {
  n: "VI",
  t: "Linhas de Fornecimento",
  d: "Catálogo CATMAT/CATSER dos produtos e serviços que sua empresa pode fornecer."
}];
function OQueESicaf() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { breadcrumbs: [{
    label: "O que é SICAF"
  }], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Guia Completo SICAF", title: "O que é", highlight: "SICAF?", description: "O Sistema de Cadastramento Unificado de Fornecedores é o registro nacional obrigatório que habilita sua empresa a vender para órgãos públicos federais, estaduais e municipais.", primaryCta: {
      label: "Fazer Cadastro SICAF Agora",
      href: CADASTRO_URL,
      external: true
    }, secondaryCta: {
      label: "Falar com Especialista",
      href: "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.",
      external: true
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "mx-auto max-w-3xl px-4 py-12 prose prose-lg prose-neutral", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-4", children: "Definição oficial" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-muted-foreground leading-relaxed", children: [
        "O ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "SICAF (Sistema de Cadastramento Unificado de Fornecedores)" }),
        " é mantido pelo Ministério da Gestão e da Inovação em Serviços Públicos e integra o portal ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.gov.br/compras", target: "_blank", rel: "noreferrer", className: "text-brand underline underline-offset-4", children: "Compras.gov.br" }),
        ". É o cadastro central usado por todos os órgãos do Governo Federal — e adotado por milhares de prefeituras, governos estaduais, autarquias e fundações."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-muted-foreground leading-relaxed mt-4", children: [
        "Sem SICAF ativo e regular, sua empresa ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "não consegue assinar contratos públicos" }),
        ", mesmo que vença a licitação. Por isso ele é o primeiro passo de qualquer estratégia de venda ao governo."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-brand/30 bg-brand/5 p-6 not-prose", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "Quer o passo a passo prático?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground text-base", children: [
          "Veja nosso tutorial completo com documentos, prazos, níveis I a VI e FAQ —",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cadastro-sicaf-passo-a-passo", className: "text-brand font-medium underline underline-offset-4", children: "Cadastro SICAF passo a passo 2026" }),
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-bold leading-tight text-balance", children: "Os 6 níveis do SICAF." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "O cadastro é dividido em níveis. Cada órgão exige um conjunto diferente — a CADBRASIL garante que todos estejam sempre ativos." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: niveis.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center font-display font-bold", children: n.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg", children: n.t })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: n.d })
      ] }, n.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-bold leading-tight text-balance", children: "Quem precisa do SICAF?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: [
          "Qualquer empresa que queira ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "vender produtos ou serviços para órgãos públicos" }),
          " — federais, estaduais ou municipais — precisa estar cadastrada e regular no SICAF."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-7 space-y-3", children: ["MEI e Microempresas que vendem para prefeituras", "Empresas de médio porte fornecendo para autarquias", "Indústrias e fabricantes em pregões federais", "Prestadores de serviço para o Governo Federal", "Cooperativas e associações que participam de licitações"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-success shrink-0 mt-0.5" }),
          " ",
          t
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [{
        i: Landmark,
        t: "Governo Federal",
        v: "Ministérios, INSS, Receita, IBAMA"
      }, {
        i: Building2,
        t: "Estados",
        v: "Secretarias e autarquias estaduais"
      }, {
        i: Gavel,
        t: "Municípios",
        v: "Prefeituras e órgãos municipais"
      }, {
        i: Scale,
        t: "Judiciário",
        v: "Tribunais e Ministério Público"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(c.i, { className: "h-5 w-5 text-brand" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display font-semibold", children: c.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: c.v })
      ] }, c.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-10", children: "Documentos necessários" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-4", children: ["Contrato Social ou Estatuto consolidado", "Cartão CNPJ atualizado", "RG e CPF dos sócios", "Comprovante de endereço da empresa", "Certidão Negativa Federal (CND)", "Certificado de Regularidade do FGTS", "CND Estadual e Municipal", "Certidão Negativa de Débitos Trabalhistas (CNDT)", "Balanço Patrimonial (para níveis V e VI)", "Atestados de Capacidade Técnica (se aplicável)"].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl bg-card border border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5 text-brand shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: d })
      ] }, d)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-start gap-3 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5 text-amber-600 shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Não se preocupe se faltar algo." }),
          " A CADBRASIL envia uma checklist personalizada para sua empresa e cuida de obter o que estiver pendente."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-8", children: "Perguntas rápidas sobre o SICAF." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: miniFaq.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group rounded-2xl bg-card border border-border p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer font-display font-semibold text-lg flex items-center justify-between gap-3 list-none", children: [
          q.question,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-open:rotate-90 transition" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: q.answer })
      ] }, q.question)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/faq", className: "inline-flex items-center gap-2 text-brand font-semibold hover:underline", children: [
        "Ver todas as perguntas frequentes ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCta, { title: "Faça seu cadastro SICAF agora.", subtitle: "Plataforma oficial CADBRASIL. Comece em 2 minutos e tenha sua empresa habilitada em até 24h." })
  ] });
}
export {
  OQueESicaf as component
};
