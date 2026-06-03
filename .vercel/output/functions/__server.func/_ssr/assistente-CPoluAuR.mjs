import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as PageShell, P as PageHero, C as CADASTRO_URL, I as InlineCta } from "./router-C-_jtP_6.mjs";
import { N as Sparkles, D as Download, d as Bot, R as RefreshCw, O as TriangleAlert, p as Headphones, x as MonitorSmartphone, s as Lock, h as CircleCheck, K as ShieldCheck } from "../_libs/lucide-react.mjs";
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
const features = [{
  i: Bot,
  t: "IA que analisa documentos",
  d: "Lê suas certidões, identifica datas e detecta inconsistências antes do envio ao portal."
}, {
  i: RefreshCw,
  t: "Renovação automática",
  d: "Quando uma certidão vai vencer, o Assistente já inicia a renovação sem precisar pedir."
}, {
  i: TriangleAlert,
  t: "Alertas inteligentes",
  d: "Notificações em tempo real por WhatsApp, e-mail e dentro do próprio app."
}, {
  i: Headphones,
  t: "Suporte via AnyDesk",
  d: "Compartilhamento de tela seguro e integrado para resolver tudo na hora com um especialista."
}, {
  i: MonitorSmartphone,
  t: "Acesso multiplataforma",
  d: "Painel web, app desktop e visualização mobile. Tudo sincronizado."
}, {
  i: Lock,
  t: "Segurança LGPD",
  d: "Conexão criptografada, controle de acesso por usuário e conformidade total com a LGPD."
}];
function Assistente() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { breadcrumbs: [{
    label: "Assistente"
  }], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Novidade 2026", title: "Assistente CADBRASIL.", highlight: "Seu SICAF no piloto automático.", description: "Um aplicativo leve, instalação em 1 clique. IA monitora suas certidões, renova antes de vencer e conecta você ao suporte humano via AnyDesk.", primaryCta: {
      label: "Instalar Assistente Agora",
      href: CADASTRO_URL,
      external: true
    }, secondaryCta: {
      label: "Falar com Especialista",
      whatsapp: true,
      intent: "Quero ajuda para instalar ou usar o Assistente CADBRASIL."
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Como funciona"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl sm:text-5xl font-bold leading-tight text-balance", children: "Instalou. Conectou. Pronto." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 space-y-5", children: [{
          n: "1",
          t: "Baixe o instalador",
          d: "Compatível com Windows e macOS. Menos de 30MB."
        }, {
          n: "2",
          t: "Faça login com seu CNPJ",
          d: "Vinculamos automaticamente sua empresa ao painel CADBRASIL."
        }, {
          n: "3",
          t: "A IA assume o controle",
          d: "Análise inicial completa em poucos minutos. Pendências identificadas, certidões catalogadas."
        }, {
          n: "4",
          t: "Suporte sempre próximo",
          d: "Botão de chamada para especialista direto no app. AnyDesk integrado."
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center font-bold shrink-0", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold", children: s.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: s.d })
          ] })
        ] }, s.n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: CADASTRO_URL, target: "_blank", rel: "noreferrer", className: "mt-9 inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-foreground text-background font-semibold hover:opacity-90 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Baixar Assistente CADBRASIL"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-gradient-brand opacity-15 blur-3xl rounded-3xl", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-3xl glass shadow-glow p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[oklch(0.18_0.04_258)] text-white overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-white/10 grid place-items-center text-xs font-bold", children: "C" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: "Assistente CADBRASIL · v2026.1" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-emerald-300 inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" }),
              " Sincronizado"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 border border-white/10 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-white/60 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3.5 w-3.5 text-emerald-300" }),
                " Análise concluída"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-emerald-400/10 border border-emerald-400/20 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-emerald-300", children: "14" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "Válidas" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-amber-400/10 border border-amber-400/20 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold text-amber-300", children: "2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "Vencendo" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white/5 border border-white/10 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-bold", children: "0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-white/60", children: "Pendentes" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-emerald-400/10 border border-emerald-400/20 p-3 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4 text-emerald-300 animate-spin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: "Renovando FGTS automaticamente" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white/60", children: "Caixa Econômica · 62%" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full rounded-xl bg-white text-[oklch(0.18_0.04_258)] py-2.5 font-semibold text-xs", children: "Chamar especialista (AnyDesk)" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-5xl font-bold leading-tight text-balance", children: "Recursos que economizam horas todo mês." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 shadow-card hover:-translate-y-1 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-accent text-brand grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.i, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display font-semibold text-lg", children: f.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: f.d })
      ] }, f.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-8", children: "Requisitos e compatibilidade." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold mb-3", children: "Sistema" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-success" }),
              " Windows 10 ou superior"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-success" }),
              " macOS 12 (Monterey) ou superior"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-success" }),
              " Conexão com internet"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold mb-3", children: "Segurança" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-success" }),
              " Conexão TLS 1.3"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-success" }),
              " Conformidade LGPD"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-success" }),
              " Acesso AnyDesk autorizado pelo usuário"
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InlineCta, { title: "Instale o Assistente CADBRASIL agora.", subtitle: "Em menos de 5 minutos sua empresa está conectada e protegida." })
  ] });
}
export {
  Assistente as component
};
