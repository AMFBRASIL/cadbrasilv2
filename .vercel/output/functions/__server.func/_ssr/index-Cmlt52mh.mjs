import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Nav, a as ContactSection, b as Footer, F as FloatingCta } from "./router-tiRMgnVD.mjs";
import { a as ArrowRight, q as MessageCircle, D as Download, x as ShieldCheck, y as Sparkles, f as Building2, b as Award, h as Clock, I as Users, W as Workflow, s as MonitorSmartphone, F as FileCheckCorner, d as Bot, G as Gauge, u as Search, C as CircleCheck, R as RefreshCw, z as TriangleAlert, j as FolderSync, l as Headphones, o as Lock, B as BadgeCheck, r as Minus, t as Plus, i as FileText, T as TrendingUp } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/zod.mjs";
function HeroDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-gradient-brand opacity-20 blur-3xl rounded-[2.5rem]", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl glass shadow-glow p-3 sm:p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-2 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-400/70" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs font-mono text-muted-foreground", children: "painel.cadbrasil.com.br/sicaf" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-background border border-border overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-gradient-brand grid place-items-center text-brand-foreground text-xs font-bold", children: "C" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: "CNPJ 12.345.678/0001-90" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Fornecedora Exemplo LTDA" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[11px] font-semibold text-success bg-success/10 px-2.5 py-1 rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success pulse-ring" }),
            " Regular"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 grid grid-cols-6 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 sm:col-span-3 row-span-2 relative rounded-xl border border-border bg-gradient-to-br from-card to-accent p-4 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-brand", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
              " Análise IA em andamento"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-sm font-display font-semibold leading-tight", children: "Verificando 14 documentos no SICAF…" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2", children: [
              { l: "CND Federal", ok: true },
              { l: "FGTS", ok: true },
              { l: "CND Estadual", ok: false },
              { l: "CND Municipal", ok: true }
            ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5 text-muted-foreground" }),
                r.l
              ] }),
              r.ok ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-success font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
                " Válido"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-amber-600 font-semibold", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5" }),
                " Vence 12d"
              ] })
            ] }, r.l)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent animate-scan top-1/2" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 sm:col-span-3 rounded-xl border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground font-medium", children: "Níveis SICAF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 grid grid-cols-3 gap-1.5", children: ["I", "II", "III", "IV", "V", "VI"].map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-8 rounded-md grid place-items-center text-[11px] font-bold ${i < 5 ? "bg-success/15 text-success border border-success/30" : "bg-muted text-muted-foreground border border-border"}`,
                children: n
              },
              n
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] text-muted-foreground", children: "5 de 6 níveis ativos" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 sm:col-span-3 rounded-xl border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground font-medium", children: "Regularidade fiscal" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3.5 w-3.5 text-success" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-2xl font-display font-bold", children: "98%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-[98%] bg-gradient-success" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-amber-500/15 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-amber-600" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: "1 pendência detectada automaticamente" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "CND Estadual vence em 12 dias — renovação iniciada pela CADBRASIL." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[11px] font-semibold px-2.5 py-1.5 rounded-lg bg-foreground text-background", children: "Ver detalhes" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -left-4 sm:-left-8 bottom-10 hidden sm:flex items-center gap-2 glass rounded-2xl shadow-soft px-3 py-2 animate-float", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-success/15 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-success" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold leading-tight", children: "CRC emitido" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "há 2 minutos" })
        ] })
      ] })
    ] })
  ] });
}
const WHATSAPP_URL = "https://wa.me/551121220202";
function ServiceStatusBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-success font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-success pulse-ring" }),
      " Atendimento online agora"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
      "Tempo médio de resposta: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "3 minutos" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
      "Último SICAF regularizado: ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "há 18 minutos" })
    ] })
  ] }) });
}
function LogosBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-border bg-card/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs sm:text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "+15 anos no mercado" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline opacity-30", children: "•" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Milhares de fornecedores atendidos" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline opacity-30", children: "•" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Especialistas em licitações públicas" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline opacity-30", children: "•" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Integrado ao Compras.gov.br" })
  ] }) });
}
function WhatIsSicaf() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sicaf", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        " O que é SICAF"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold text-balance leading-[1.05]", children: [
        "O passaporte da sua empresa para ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "vender ao governo" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: "O SICAF (Sistema de Cadastramento Unificado de Fornecedores) é o registro obrigatório para qualquer empresa que queira participar de licitações públicas no Brasil. Sem ele, sua empresa simplesmente não compete." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-lg text-muted-foreground leading-relaxed", children: [
        "A CADBRASIL cuida de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "tudo" }),
        " — do cadastro inicial à renovação automática de certidões — com tecnologia, IA e atendimento humano especializado."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#cta", className: "inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow", children: [
        "Quero ser fornecedor do governo ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: [
      { i: Building2, t: "Órgãos públicos", v: "+200 mil", d: "compram via SICAF" },
      { i: Award, t: "Volume anual", v: "R$ 1 tri+", d: "em licitações no país" },
      { i: Clock, t: "Tempo médio", v: "24h", d: "para regularizar com a CADBRASIL" },
      { i: Users, t: "Clientes ativos", v: "+8.000", d: "fornecedores atendidos" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-5 shadow-card hover:shadow-soft transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { className: "h-5 w-5 text-brand" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-3xl font-display font-bold tracking-tight", children: s.v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground mt-1", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: s.d })
    ] }, s.t)) })
  ] }) });
}
function Process() {
  const steps = [
    { i: MonitorSmartphone, t: "Fale com a CADBRASIL", d: "WhatsApp, formulário ou Assistente — você escolhe. Resposta em minutos." },
    { i: FileCheckCorner, t: "Enviamos a checklist", d: "Mostramos exatamente quais documentos precisamos. Sem burocracia." },
    { i: Bot, t: "IA analisa tudo", d: "Nossa tecnologia valida cada documento, identifica pendências e prepara o cadastro." },
    { i: ShieldCheck, t: "SICAF regularizado", d: "Você recebe o CRC, todos os níveis ativos e suporte contínuo de especialistas." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "processo", className: "py-24 sm:py-32 bg-gradient-to-b from-background to-accent/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Workflow, { className: "h-3.5 w-3.5" }),
        " Como funciona"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance", children: "4 passos. Zero dor de cabeça." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Um processo desenhado para quem não tem tempo a perder. Nós cuidamos da parte chata." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl bg-card border border-border p-6 shadow-card hover:-translate-y-1 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-3 left-6 text-[10px] font-bold tracking-widest text-brand bg-background px-2 py-0.5 rounded-full border border-border", children: [
        "PASSO ",
        String(i + 1).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center text-brand-foreground shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display font-semibold text-lg", children: s.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.d })
    ] }, s.t)) })
  ] }) });
}
function ReadinessCalculator() {
  const [answers, setAnswers] = reactExports.useState({
    cadastro: "nao",
    certidoes: "nao",
    urgencia: "7d",
    experiencia: "baixa",
    volume: "1-2"
  });
  const score = reactExports.useMemo(() => {
    let base = 0;
    base += answers.cadastro === "sim" ? 25 : 0;
    base += answers.certidoes === "sim" ? 25 : 0;
    base += answers.urgencia === "24h" ? 10 : answers.urgencia === "7d" ? 20 : 25;
    base += answers.experiencia === "alta" ? 20 : answers.experiencia === "media" ? 14 : 8;
    base += answers.volume === "5+" ? 20 : answers.volume === "3-4" ? 14 : 8;
    return Math.min(100, base);
  }, [answers]);
  const readinessLabel = score >= 75 ? "Pronto para licitar" : score >= 45 ? "Precisa de ajustes" : "Risco alto sem suporte";
  const readinessHint = score >= 75 ? "Seu cenário está avançado. Podemos acelerar o fechamento em até 24h." : score >= 45 ? "Com alguns ajustes de documentação e certidões, sua empresa pode disputar editais rapidamente." : "Há pontos críticos no seu cadastro atual. Recomendamos diagnóstico com especialista.";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32 bg-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-3.5 w-3.5" }),
        " Calculadora SICAF"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance", children: "Descubra seu nível de prontidão em 1 minuto." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl", children: "Responda 5 perguntas rápidas e veja o risco atual da sua empresa para vender ao governo." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Question,
          {
            label: "Sua empresa já possui cadastro ativo no SICAF?",
            value: answers.cadastro,
            onChange: (v) => setAnswers((s) => ({ ...s, cadastro: v })),
            options: [{ value: "sim", label: "Sim" }, { value: "nao", label: "Não" }]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Question,
          {
            label: "As principais certidões estão válidas hoje?",
            value: answers.certidoes,
            onChange: (v) => setAnswers((s) => ({ ...s, certidoes: v })),
            options: [{ value: "sim", label: "Sim" }, { value: "nao", label: "Não / Não sei" }]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Question,
          {
            label: "Qual a sua urgência para começar a licitar?",
            value: answers.urgencia,
            onChange: (v) => setAnswers((s) => ({ ...s, urgencia: v })),
            options: [{ value: "24h", label: "Até 24h" }, { value: "7d", label: "Até 7 dias" }, { value: "30d", label: "Até 30 dias" }]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Question,
          {
            label: "Seu time tem experiência com habilitação em licitações?",
            value: answers.experiencia,
            onChange: (v) => setAnswers((s) => ({ ...s, experiencia: v })),
            options: [{ value: "baixa", label: "Baixa" }, { value: "media", label: "Média" }, { value: "alta", label: "Alta" }]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Question,
          {
            label: "Quantos editais/mês pretendem disputar?",
            value: answers.volume,
            onChange: (v) => setAnswers((s) => ({ ...s, volume: v })),
            options: [{ value: "1-2", label: "1 a 2" }, { value: "3-4", label: "3 a 4" }, { value: "5+", label: "5+" }]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl bg-accent border border-border p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Nível de prontidão" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-2xl font-bold", children: [
          score,
          "%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-semibold text-brand", children: readinessLabel }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: readinessHint }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `${WHATSAPP_URL}?text=${encodeURIComponent(`Quero diagnóstico SICAF. Meu score foi ${score}%.`)}`,
            target: "_blank",
            rel: "noreferrer",
            className: "mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-brand text-brand-foreground font-semibold",
            children: [
              "Receber diagnóstico no WhatsApp ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function Question({
  label,
  value,
  onChange,
  options
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 font-medium text-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onChange(opt.value),
        className: `rounded-xl border px-3 py-2 text-xs sm:text-sm transition ${value === opt.value ? "bg-brand text-brand-foreground border-brand" : "bg-background border-border hover:bg-accent"}`,
        children: opt.label
      },
      opt.value
    )) })
  ] });
}
function DocumentChecklist() {
  const docs = [
    "Contrato social atualizado",
    "Cartão CNPJ",
    "RG e CPF dos sócios",
    "Comprovante de endereço",
    "CND Federal",
    "FGTS",
    "CNDT",
    "Balanço patrimonial (quando aplicável)"
  ];
  const [checked, setChecked] = reactExports.useState(docs.map(() => false));
  const missing = checked.filter((x) => !x).length;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheckCorner, { className: "h-3.5 w-3.5" }),
        " Checklist interativo"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance", children: "Veja em segundos o que falta para seu SICAF." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Marque os documentos que você já possui. Nós cuidamos de organizar o restante e acelerar a regularização." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card border border-border p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: docs.map((doc, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 rounded-xl border border-border px-3 py-2.5 hover:bg-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "checkbox",
            checked: checked[idx],
            onChange: () => setChecked((state) => state.map((v, i) => i === idx ? !v : v)),
            className: "h-4 w-4 accent-[oklch(0.53_0.13_258)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: doc })
      ] }, doc)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-2xl bg-accent border border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: missing === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-success", children: "Checklist completa. Você está pronto para avançar." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: missing }),
          " documento(s) pendente(s). Enviamos a lista personalizada no WhatsApp."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `${WHATSAPP_URL}?text=${encodeURIComponent(`Quero minha checklist SICAF personalizada. Faltam ${missing} documentos.`)}`,
            target: "_blank",
            rel: "noreferrer",
            className: "mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand",
            children: [
              "Receber checklist personalizada ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function Benefits() {
  const items2 = [
    { i: Gauge, t: "Velocidade absurda", d: "SICAF regularizado em até 24h. Nada de esperar semanas." },
    { i: ShieldCheck, t: "Segurança jurídica", d: "Equipe que entende de licitações e protege seu CNPJ." },
    { i: Bot, t: "IA + humanos", d: "Tecnologia que valida, especialista que decide. O melhor dos dois mundos." },
    { i: RefreshCw, t: "Atualização automática", d: "Monitoramos suas certidões 24/7. Nunca mais um vencimento perdido." },
    { i: FolderSync, t: "Gestão documental", d: "Tudo organizado em um painel — acesso a qualquer momento." },
    { i: Headphones, t: "Suporte de verdade", d: "Atendimento humano via WhatsApp, telefone ou AnyDesk." }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "beneficios", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-3.5 w-3.5" }),
        " Por que CADBRASIL"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance", children: "Não somos despachantes. Somos engenharia para licitações." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: items2.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl bg-card border border-border p-7 hover:border-brand/40 hover:shadow-soft transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-2xl bg-accent text-brand group-hover:bg-gradient-brand group-hover:text-brand-foreground grid place-items-center transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(b.i, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display font-semibold text-lg", children: b.t }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: b.d })
    ] }, b.t)) })
  ] }) });
}
function Assistant() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "assistente", className: "py-24 sm:py-32 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-brand" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-white/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-14 items-center text-brand-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold bg-white/15 text-white px-3 py-1.5 rounded-full backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Novidade 2026"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance", children: "Assistente CADBRASIL — o jeito moderno de cuidar do seu SICAF." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-white/80 leading-relaxed", children: "Um aplicativo leve que se instala em minutos e conecta sua empresa diretamente aos nossos especialistas. IA analisa, identifica certidões vencidas e atualiza automaticamente — você só assiste." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-7 space-y-3", children: [
          "Instalação simples em 1 clique",
          "Processo 100% guiado, passo a passo",
          "IA identifica certidões vencidas",
          "Atualização automática do SICAF",
          "Suporte remoto via AnyDesk integrado"
        ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-white/90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-emerald-300" }),
          " ",
          t
        ] }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#cta",
              className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-brand font-semibold shadow-glow hover:bg-white/95 transition",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                " Instalar Assistente Agora"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.",
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/20 backdrop-blur hover:bg-white/20 transition",
              children: "Falar com especialista"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl glass p-3 shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[oklch(0.18_0.04_258)] text-white overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-white/10 grid place-items-center text-xs font-bold", children: "C" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: "Assistente CADBRASIL" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-emerald-300 inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" }),
              " Conectado"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 border border-white/10 p-3 flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5 text-emerald-300 shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/60", children: "Assistente" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Encontrei 3 certidões para renovar. Posso iniciar agora?" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-emerald-400/10 border border-emerald-400/20 p-3 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4 text-emerald-300 animate-spin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: "Renovando CND Federal…" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white/60", children: "Receita Federal · 38%" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-emerald-300", children: "38%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2 text-center", children: [
              { l: "Concluídas", v: "12", c: "text-emerald-300" },
              { l: "Em andamento", v: "3", c: "text-amber-300" },
              { l: "Pendentes", v: "0", c: "text-white" }
            ].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 border border-white/10 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-bold ${x.c}`, children: x.v }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: x.l })
            ] }, x.l)) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-2 glass rounded-2xl px-4 py-3 shadow-soft text-foreground animate-float", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4 text-amber-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Alerta inteligente" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "FGTS vence em 5 dias" })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function Stats() {
  const items2 = [
    { v: "+8.000", l: "fornecedores atendidos" },
    { v: "24h", l: "para regularizar" },
    { v: "+15 anos", l: "de experiência" },
    { v: "98%", l: "de satisfação" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 border-y border-border bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-6", children: items2.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl sm:text-5xl font-display font-bold tracking-tight bg-gradient-brand bg-clip-text text-transparent", children: s.v }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground", children: s.l })
  ] }, s.l)) }) });
}
function Testimonials() {
  const items2 = [
    { q: "Em 18 horas tudo estava regularizado. Entramos no pregão da prefeitura no dia seguinte.", a: "Carla M.", r: "Diretora · Construtora ML · SP", kpi: "SICAF regularizado em 18h" },
    { q: "O Assistente CADBRASIL mudou tudo. Não me preocupo mais com vencimento de certidão.", a: "Roberto S.", r: "Sócio · Tech Supply · PR", kpi: "0 certidões vencidas em 9 meses" },
    { q: "Já fechei 4 contratos com órgãos públicos depois que a CADBRASIL cuidou do meu SICAF.", a: "Patrícia L.", r: "CEO · Alimentar SP · SP", kpi: "4 contratos após regularização" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: "Depoimentos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance", children: "Quem confiou na CADBRASIL, vendeu mais." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-5", children: items2.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "rounded-2xl bg-card border border-border p-7 shadow-card flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-brand text-xl", children: "★★★★★" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-foreground leading-relaxed flex-1", children: [
        '"',
        t.q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gradient-brand text-brand-foreground grid place-items-center font-bold", children: t.a[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: t.a }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.r })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs font-semibold text-brand bg-brand/10 rounded-lg px-3 py-2", children: t.kpi })
    ] }, t.a)) })
  ] }) });
}
function ComparisonSection() {
  const rows = [
    { feature: "Tempo para regularização", cadbrasil: "Até 24h", semApoio: "1 a 4 semanas" },
    { feature: "Risco de desclassificação", cadbrasil: "Baixo (monitoramento ativo)", semApoio: "Alto (controle manual)" },
    { feature: "Renovação de certidões", cadbrasil: "Automática 24/7", semApoio: "Lembretes manuais" },
    { feature: "Acompanhamento", cadbrasil: "Painel + especialistas", semApoio: "Planilha/e-mail" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32 bg-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5" }),
        " Comparativo prático"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance", children: "Com CADBRASIL vs. sem suporte especializado." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-2xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-accent/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Critério" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4 text-brand", children: "Com CADBRASIL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-4", children: "Sem suporte" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 font-medium", children: row.feature }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-brand font-semibold", children: row.cadbrasil }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-muted-foreground", children: row.semApoio })
      ] }, row.feature)) })
    ] }) })
  ] }) });
}
function StartIn2Minutes() {
  const steps = [
    "Informe seu CNPJ e WhatsApp",
    "Receba checklist e diagnóstico inicial",
    "Envie os documentos e acompanhe no painel"
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5" }),
      " Comece em 2 minutos"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-4xl font-bold leading-tight", children: "Processo rápido para sair do zero e começar a licitar." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid sm:grid-cols-3 gap-3", children: steps.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-bold text-brand", children: [
        "PASSO ",
        idx + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: step })
    ] }, step)) })
  ] }) }) });
}
function FinalCTA() {
  const [lead, setLead] = reactExports.useState({ nome: "", whatsapp: "", cnpj: "" });
  const leadMessage = encodeURIComponent(
    `Olá! Quero iniciar meu SICAF com a CADBRASIL.
Nome: ${lead.nome || "não informado"}
WhatsApp: ${lead.whatsapp || "não informado"}
CNPJ: ${lead.cnpj || "não informado"}`
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cta", className: "py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 sm:p-16 text-brand-foreground shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-4xl sm:text-6xl font-bold leading-[1] text-balance", children: "Regularize seu SICAF hoje mesmo." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg sm:text-xl text-white/85 leading-relaxed", children: "Nossa equipe especializada e nossa tecnologia inteligente ajudam você a participar de licitações sem dores de cabeça." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 grid lg:grid-cols-[1fr_auto] gap-6 items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: lead.nome,
              onChange: (e) => setLead((s) => ({ ...s, nome: e.target.value })),
              placeholder: "Seu nome",
              className: "rounded-xl px-4 py-3 bg-white text-foreground placeholder:text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: lead.whatsapp,
              onChange: (e) => setLead((s) => ({ ...s, whatsapp: e.target.value })),
              placeholder: "WhatsApp",
              className: "rounded-xl px-4 py-3 bg-white text-foreground placeholder:text-muted-foreground"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: lead.cnpj,
              onChange: (e) => setLead((s) => ({ ...s, cnpj: e.target.value })),
              placeholder: "CNPJ",
              className: "rounded-xl px-4 py-3 bg-white text-foreground placeholder:text-muted-foreground"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://wa.me/551121220202?text=${leadMessage}`,
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white text-brand font-bold shadow-soft hover:scale-[1.02] transition",
              children: "🚀 Começar Agora"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.",
              target: "_blank",
              rel: "noreferrer",
              className: "inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 border border-white/30 text-white font-bold backdrop-blur hover:bg-white/20 transition",
              children: "💬 Atendimento Imediato"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-sm text-white/70", children: "Sem letras miúdas. Sem amarras. Pague apenas pelo serviço contratado." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5" }),
          " Dados protegidos (LGPD)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3.5 w-3.5" }),
          " Atendimento com especialistas"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
          " Sem compromisso na análise inicial"
        ] })
      ] })
    ] })
  ] }) }) });
}
const items = [
  { q: "O que é o SICAF e por que minha empresa precisa?", a: "SICAF é o Sistema de Cadastramento Unificado de Fornecedores. Ele habilita sua empresa a participar de licitações públicas em todo o Brasil. Sem cadastro ativo e regular, você fica de fora dos pregões e dispensas." },
  { q: "Quanto tempo leva o cadastro com a CADBRASIL?", a: "Na maioria dos casos, em até 24 horas com toda a documentação em mãos. Casos com pendências fiscais podem levar mais tempo — e nós resolvemos cada uma delas." },
  { q: "O que é o Assistente CADBRASIL?", a: "É um aplicativo leve que se instala no computador da sua empresa e conecta sua operação ao nosso time. Ele identifica vencimentos, renova certidões automaticamente e permite suporte remoto via AnyDesk." },
  { q: "Como funciona a renovação e atualização SICAF?", a: "Monitoramos suas certidões 24/7. Antes de qualquer vencimento, nossa IA inicia o processo e nosso time finaliza. Você é avisado quando tudo está concluído." },
  { q: "Quanto custa?", a: "Trabalhamos com planos personalizados conforme o porte e a complexidade da sua empresa. Fale conosco no WhatsApp e enviamos uma proposta clara em minutos." },
  { q: "Vocês atendem em todo o Brasil?", a: "Sim. 100% remoto, em todos os estados, com suporte via WhatsApp, telefone e AnyDesk." }
];
function Faq() {
  const [open, setOpen] = reactExports.useState(0);
  const [query, setQuery] = reactExports.useState("");
  const filteredItems = reactExports.useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return items;
    return items.filter(
      (it) => `${it.q} ${it.a}`.toLowerCase().includes(normalized)
    );
  }, [query]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-24 sm:py-32 bg-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl sm:text-5xl font-bold leading-[1.05] text-balance", children: "Perguntas frequentes." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "search",
          value: query,
          onChange: (e) => setQuery(e.target.value),
          placeholder: "Digite sua dúvida (cadastro, custos, regularização...)",
          className: "w-full rounded-2xl bg-card border border-border pl-11 pr-4 py-3 text-sm outline-none ring-0 focus:border-brand/50",
          "aria-label": "Buscar perguntas frequentes"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 space-y-3", children: [
      filteredItems.map((it, i) => {
        const isOpen = open === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setOpen(isOpen ? null : i),
              className: "w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-accent transition",
              "aria-expanded": isOpen,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-base sm:text-lg", children: it.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 h-8 w-8 rounded-full bg-accent grid place-items-center", children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
              ]
            }
          ),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 sm:px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up", children: it.a })
        ] }, it.q);
      }),
      filteredItems.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card border border-border p-6 text-sm text-muted-foreground text-center", children: "Nenhum resultado encontrado. Fale com nossa equipe no WhatsApp para um diagnóstico gratuito." })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-radial", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#assistente", className: "inline-flex items-center gap-2 text-xs font-semibold bg-card border border-border px-3 py-1.5 rounded-full shadow-card hover:shadow-soft transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success pulse-ring" }),
          "Novo: Assistente CADBRASIL 2026 com IA",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight text-balance", children: [
          "Seu SICAF",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-brand bg-clip-text text-transparent", children: "regularizado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -bottom-2 left-0 w-full", viewBox: "0 0 200 8", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 6 Q100 0 198 5", stroke: "oklch(0.68 0.17 158)", strokeWidth: "3", strokeLinecap: "round" }) })
          ] }),
          " ",
          "sem complicação."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-7 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl", children: [
          "Especialistas em ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Cadastro, Atualização e Regularização SICAF" }),
          " ",
          "com suporte completo e tecnologia inteligente. Pronto para licitar em até 24h."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://cadastro.cadbrasil.com.br", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition", children: "🚀 Fazer Cadastro SICAF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-card border border-border font-semibold hover:bg-accent transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-success" }),
            " Falar no WhatsApp"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#assistente", className: "inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-foreground text-background font-semibold hover:opacity-90 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
            " Instalar Assistente"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-success" }),
            " +15 anos de experiência"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-1.5", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-5 rounded-full bg-gradient-brand border-2 border-background" }, i)) }),
            "+8.000 fornecedores atendidos"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-fade-up", style: {
        animationDelay: "120ms"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroDashboard, {}) })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-16 sm:pb-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceStatusBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LogosBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhatIsSicaf, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReadinessCalculator, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocumentChecklist, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ComparisonSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Assistant, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Benefits, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StartIn2Minutes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCta, {})
  ] });
}
export {
  Index as component
};
