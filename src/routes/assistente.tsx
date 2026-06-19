import { createFileRoute } from "@tanstack/react-router";
import {
  Download, Bot, RefreshCw, AlertTriangle, ShieldCheck, MonitorSmartphone,
  Headphones, Sparkles, CheckCircle2, Lock,
} from "lucide-react";
import { PageShell, PageHero, InlineCta, CADASTRO_URL, breadcrumbJsonLd } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { robotsMetaTags } from "@/lib/seo";

const ORIGIN = "https://cadbrasil.com.br";

export const Route = createFileRoute("/assistente")({
  head: () => ({
    meta: [
      ...robotsMetaTags(),
      { title: "Assistente CADBRASIL 2026 — IA para Monitorar seu SICAF" },
      { name: "description", content: "Conheça o Assistente CADBRASIL: app com IA que monitora seu SICAF 24/7, identifica pendências e renova certidões automaticamente com suporte humano." },
      { name: "keywords", content: "assistente cadbrasil, software sicaf, automação sicaf, IA licitações, gestão certidões, anydesk sicaf, atualizar sicaf automatico" },
      { property: "og:title", content: "Assistente CADBRASIL — IA para o seu SICAF" },
      { property: "og:description", content: "O jeito moderno de manter seu SICAF sempre regular. IA + especialistas + suporte remoto." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: `${ORIGIN}/assistente` },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/assistente` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Assistente CADBRASIL",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Windows, macOS",
          offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
          description: "Aplicativo com IA para monitorar, regularizar e renovar o SICAF automaticamente.",
          publisher: { "@type": "Organization", name: "CADBRASIL" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([
          { name: "Início", url: `${ORIGIN}/` },
          { name: "Assistente", url: `${ORIGIN}/assistente` },
        ])),
      },
    ],
  }),
  component: Assistente,
});

const features = [
  { i: Bot, t: "IA que analisa documentos", d: "Lê suas certidões, identifica datas e detecta inconsistências antes do envio ao portal." },
  { i: RefreshCw, t: "Renovação automática", d: "Quando uma certidão vai vencer, o Assistente já inicia a renovação sem precisar pedir." },
  { i: AlertTriangle, t: "Alertas inteligentes", d: "Notificações em tempo real por WhatsApp, e-mail e dentro do próprio app." },
  { i: Headphones, t: "Suporte via AnyDesk", d: "Compartilhamento de tela seguro e integrado para resolver tudo na hora com um especialista." },
  { i: MonitorSmartphone, t: "Acesso multiplataforma", d: "Painel web, app desktop e visualização mobile. Tudo sincronizado." },
  { i: Lock, t: "Segurança LGPD", d: "Conexão criptografada, controle de acesso por usuário e conformidade total com a LGPD." },
];

function Assistente() {
  return (
    <PageShell breadcrumbs={[{ label: "Assistente" }]}>
      <PageHero
        eyebrow="Novidade 2026"
        title="Assistente CADBRASIL."
        highlight="Seu SICAF no piloto automático."
        description="Um aplicativo leve, instalação em 1 clique. IA monitora suas certidões, renova antes de vencer e conecta você ao suporte humano via AnyDesk."
        primaryCta={{ label: "Instalar Assistente Agora", href: CADASTRO_URL, external: true }}
        secondaryCta={{
          label: "Falar com Especialista",
          whatsapp: true,
          intent: "Quero ajuda para instalar ou usar o Assistente CADBRASIL.",
        }}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> Como funciona
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-bold leading-tight text-balance">
              Instalou. Conectou. Pronto.
            </h2>
            <div className="mt-7 space-y-5">
              {[
                { n: "1", t: "Baixe o instalador", d: "Compatível com Windows e macOS. Menos de 30MB." },
                { n: "2", t: "Faça login com seu CNPJ", d: "Vinculamos automaticamente sua empresa ao painel CADBRASIL." },
                { n: "3", t: "A IA assume o controle", d: "Análise inicial completa em poucos minutos. Pendências identificadas, certidões catalogadas." },
                { n: "4", t: "Suporte sempre próximo", d: "Botão de chamada para especialista direto no app. AnyDesk integrado." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center font-bold shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-display font-semibold">{s.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <CadastroLink
              className="mt-9 inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-foreground text-background font-semibold hover:opacity-90 transition"
            >
              <Download className="h-4 w-4" /> Baixar Assistente CADBRASIL
            </CadastroLink>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-brand opacity-15 blur-3xl rounded-3xl" aria-hidden />
            <div className="relative rounded-3xl glass shadow-glow p-3">
              <div className="rounded-2xl bg-[oklch(0.18_0.04_258)] text-white overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-white/10 grid place-items-center text-xs font-bold">C</div>
                    <span className="text-xs font-semibold">Assistente CADBRASIL · v2026.1</span>
                  </div>
                  <span className="text-[10px] text-emerald-300 inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-ring" /> Sincronizado
                  </span>
                </div>
                <div className="p-4 space-y-3 text-sm">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                    <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                      <Bot className="h-3.5 w-3.5 text-emerald-300" /> Análise concluída
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-lg bg-emerald-400/10 border border-emerald-400/20 py-2">
                        <div className="text-lg font-bold text-emerald-300">14</div>
                        <div className="text-[10px] text-white/60">Válidas</div>
                      </div>
                      <div className="rounded-lg bg-amber-400/10 border border-amber-400/20 py-2">
                        <div className="text-lg font-bold text-amber-300">2</div>
                        <div className="text-[10px] text-white/60">Vencendo</div>
                      </div>
                      <div className="rounded-lg bg-white/5 border border-white/10 py-2">
                        <div className="text-lg font-bold">0</div>
                        <div className="text-[10px] text-white/60">Pendentes</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-emerald-400/10 border border-emerald-400/20 p-3 flex items-center gap-3">
                    <RefreshCw className="h-4 w-4 text-emerald-300 animate-spin" />
                    <div className="flex-1">
                      <div className="text-xs font-semibold">Renovando FGTS automaticamente</div>
                      <div className="text-[11px] text-white/60">Caixa Econômica · 62%</div>
                    </div>
                  </div>
                  <button className="w-full rounded-xl bg-white text-[oklch(0.18_0.04_258)] py-2.5 font-semibold text-xs">
                    Chamar especialista (AnyDesk)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-balance">
              Recursos que economizam horas todo mês.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.t} className="rounded-2xl bg-card border border-border p-6 shadow-card hover:-translate-y-1 transition">
                <div className="h-11 w-11 rounded-xl bg-accent text-brand grid place-items-center">
                  <f.i className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Requisitos e compatibilidade.
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-card border border-border p-6">
              <div className="font-display font-semibold mb-3">Sistema</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> Windows 10 ou superior</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> macOS 12 (Monterey) ou superior</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> Conexão com internet</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
              <div className="font-display font-semibold mb-3">Segurança</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-success" /> Conexão TLS 1.3</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-success" /> Conformidade LGPD</li>
                <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-success" /> Acesso AnyDesk autorizado pelo usuário</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <InlineCta
        title="Instale o Assistente CADBRASIL agora."
        subtitle="Em menos de 5 minutos sua empresa está conectada e protegida."
      />
    </PageShell>
  );
}
