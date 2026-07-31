import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Lock,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  beneficiosProposta,
  calcTotalAnual,
  formatBRL,
  mercadoReferenciaAnual,
  modulosOpcionais,
  pacoteBase,
  propostaFaqs,
  propostaMeta,
} from "@/data/proposta";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { Checkbox } from "@/components/ui/checkbox";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { WHATSAPP_NUMBER, buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

function HeroWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" aria-hidden>
      <svg className="relative block w-full h-12 sm:h-16 text-background" viewBox="0 0 1440 64" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,40C672,37,768,43,864,45.3C960,48,1056,48,1152,42.7C1248,37,1344,27,1392,21.3L1440,16L1440,64L0,64Z"
        />
      </svg>
    </div>
  );
}

function SummaryCard({
  selected,
  total,
  economia,
  empresa,
  email,
  onGerar,
}: {
  selected: string[];
  total: number;
  economia: number;
  empresa: string;
  email: string;
  onGerar: () => void;
}) {
  const extras = modulosOpcionais.filter((m) => selected.includes(m.id));
  const canGerar = empresa.trim().length > 1 && email.includes("@");

  return (
    <aside className="rounded-2xl border border-white/10 bg-[oklch(0.2_0.05_260)] p-6 shadow-2xl lg:sticky lg:top-28">
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[oklch(0.82_0.08_250)]">
        <Sparkles className="h-3.5 w-3.5" />
        Sua proposta
      </p>

      <p className="mt-5 text-xs text-white/50 line-through decoration-white/40">
        Mercado (pacote completo típico) {formatBRL(mercadoReferenciaAnual)}/ano
      </p>
      <p className="mt-1 text-sm text-white/70">Sua configuração</p>
      <p className="mt-1 text-4xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
        {formatBRL(total)}
        <span className="text-base font-medium text-white/55">/ano</span>
      </p>
      <p className="mt-2 text-sm text-[oklch(0.78_0.12_150)]">
        {extras.length + pacoteBase.itens.length} recursos · economia de{" "}
        <strong>{formatBRL(Math.max(economia, 0))}/ano</strong>
      </p>

      <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
        <li className="flex gap-2 text-sm text-white/85">
          <Check className="h-4 w-4 shrink-0 text-[oklch(0.78_0.12_150)] mt-0.5" />
          Pacote base — {formatBRL(pacoteBase.precoAnual)}/ano
        </li>
        {extras.map((m) => (
          <li key={m.id} className="flex gap-2 text-sm text-white/85">
            <Check className="h-4 w-4 shrink-0 text-[oklch(0.78_0.12_150)] mt-0.5" />
            {m.nome} — +{formatBRL(m.precoAnual)}
          </li>
        ))}
      </ul>

      <ul className="mt-5 space-y-2">
        {beneficiosProposta.map((b) => (
          <li key={b} className="flex gap-2 text-xs text-white/65">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[oklch(0.82_0.08_250)] mt-0.5" />
            {b}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onGerar}
        disabled={!canGerar}
        className={cn(
          "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition",
          canGerar
            ? "bg-gradient-to-r from-[oklch(0.55_0.14_250)] to-[oklch(0.45_0.12_250)] text-white shadow-lg hover:scale-[1.01]"
            : "bg-white/10 text-white/40 cursor-not-allowed",
        )}
      >
        <Sparkles className="h-4 w-4" />
        Gerar proposta
      </button>
      <p className="mt-2 text-center text-[11px] text-white/45">
        {canGerar
          ? "Abre o WhatsApp com o resumo da sua configuração."
          : "Preencha empresa e e-mail para gerar."}
      </p>

      <CadastroLink
        href={CADASTRO_CREDENCIAMENTO_URL}
        className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
      >
        Já quero cadastrar no SICAF
        <ArrowRight className="h-4 w-4" />
      </CadastroLink>
    </aside>
  );
}

export function PropostaPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [empresa, setEmpresa] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  const total = useMemo(() => calcTotalAnual(selected), [selected]);
  const economia = mercadoReferenciaAnual - total;

  function toggleModulo(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function gerarProposta() {
    const extras = modulosOpcionais.filter((m) => selected.includes(m.id));
    const detail = [
      `Empresa/Marca: ${empresa.trim()}`,
      nome.trim() ? `Contato: ${nome.trim()}` : null,
      `E-mail: ${email.trim()}`,
      whatsapp.trim() ? `WhatsApp informado: ${whatsapp.trim()}` : null,
      ``,
      `Pacote base (${formatBRL(pacoteBase.precoAnual)}/ano): SICAF gratuito + Gestor de certidões + Gestor de editais`,
      extras.length
        ? `Módulos adicionais:\n${extras.map((m) => `- ${m.nome} (+${formatBRL(m.precoAnual)}/ano)`).join("\n")}`
        : `Módulos adicionais: nenhum`,
      ``,
      `Total anual estimado: ${formatBRL(total)}`,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const url = buildWhatsAppUrl({
      pageLabel: propostaMeta.shortTitle,
      intent: "Quero fechar a proposta CADBRASIL montada em /proposta.",
      detail,
      pathname: "/proposta",
    });
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <PageShell>
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[oklch(0.22_0.08_260)]">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand/30 blur-3xl" aria-hidden />
        <HeroWave />

        <div className="relative mx-auto max-w-7xl px-4 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-3 py-1">
            <Zap className="h-3 w-3" />
            Briefing inteligente · 2 minutos
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-white text-balance">
            Monte sua <span className="text-[oklch(0.82_0.08_250)]">proposta</span> personalizada
          </h1>
          <p className="guide-hero-lead mt-4 text-base sm:text-lg text-white/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Configure os módulos que sua empresa precisa. Pacote base{" "}
            <strong className="text-white">{formatBRL(pacoteBase.precoAnual)}/ano</strong> — e o
            total sobe só quando você adiciona recursos.
          </p>
          <p className="guide-summary mt-2 text-sm text-white/55 max-w-xl mx-auto lg:mx-0">
            {propostaMeta.quickAnswer}
          </p>
        </div>
      </section>

      <section className="relative bg-[oklch(0.16_0.04_260)] py-10 sm:py-14 -mt-2">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-10 items-start">
            <div className="space-y-6">
              {/* 1. Dados */}
              <div className="rounded-2xl border border-white/10 bg-[oklch(0.2_0.05_260)] p-6 sm:p-8">
                <h2 className="text-lg font-bold text-white">1. Dados da empresa</h2>
                <p className="mt-1 text-sm text-white/55">Usamos para personalizar o envio da proposta.</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-semibold text-white/70">Empresa / Marca *</span>
                    <input
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Ex.: Acme Fornecedora LTDA"
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-[oklch(0.65_0.1_250)]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-white/70">E-mail *</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="voce@empresa.com"
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-[oklch(0.65_0.1_250)]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-white/70">Seu nome</span>
                    <input
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Como podemos te chamar?"
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-[oklch(0.65_0.1_250)]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-white/70">WhatsApp (opcional)</span>
                    <input
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+55 11 90000-0000"
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-[oklch(0.65_0.1_250)]"
                    />
                  </label>
                </div>
              </div>

              {/* 2. Pacote base */}
              <div className="rounded-2xl border border-[oklch(0.65_0.1_250)]/35 bg-[oklch(0.2_0.05_260)] p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Lock className="h-4 w-4 text-[oklch(0.82_0.08_250)]" />
                      2. Pacote base (incluso)
                    </h2>
                    <p className="mt-1 text-sm text-white/55">
                      Já entra na proposta — não dá para remover.
                    </p>
                  </div>
                  <p className="text-xl font-bold text-white tabular-nums">
                    {formatBRL(pacoteBase.precoAnual)}
                    <span className="text-sm font-medium text-white/50">/ano</span>
                  </p>
                </div>
                <ul className="mt-6 space-y-3">
                  {pacoteBase.itens.map((item) => (
                    <li
                      key={item.id}
                      className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[oklch(0.55_0.14_250)] text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <p className="font-semibold text-white">{item.nome}</p>
                        <p className="mt-1 text-sm text-white/55 leading-relaxed">{item.descricao}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Módulos */}
              <div className="rounded-2xl border border-white/10 bg-[oklch(0.2_0.05_260)] p-6 sm:p-8">
                <h2 className="text-lg font-bold text-white">3. Recursos adicionais</h2>
                <p className="mt-1 text-sm text-white/55">
                  Marque o que precisa — o preço anual sobe na hora.
                </p>
                <ul className="mt-6 space-y-3">
                  {modulosOpcionais.map((m) => {
                    const on = selected.includes(m.id);
                    const open = expanded === m.id;
                    return (
                      <li
                        key={m.id}
                        className={cn(
                          "rounded-xl border p-4 transition",
                          on
                            ? "border-[oklch(0.65_0.1_250)]/50 bg-[oklch(0.55_0.14_250)]/10"
                            : "border-white/10 bg-white/[0.03]",
                        )}
                      >
                        <div className="flex gap-3 items-start">
                          <Checkbox
                            id={`mod-${m.id}`}
                            checked={on}
                            onCheckedChange={() => toggleModulo(m.id)}
                            className="mt-1 h-5 w-5 border-white/40 data-[state=checked]:bg-[oklch(0.55_0.14_250)] data-[state=checked]:border-[oklch(0.55_0.14_250)]"
                          />
                          <div className="flex-1 min-w-0">
                            <label
                              htmlFor={`mod-${m.id}`}
                              className="flex flex-wrap items-baseline justify-between gap-2 cursor-pointer"
                            >
                              <span className="font-semibold text-white">{m.nome}</span>
                              <span className="text-sm font-bold text-[oklch(0.82_0.08_250)] tabular-nums">
                                +{formatBRL(m.precoAnual)}
                                <span className="font-medium text-white/45">/ano</span>
                              </span>
                            </label>
                            <p className="mt-1 text-sm text-white/55">{m.resumo}</p>
                            <button
                              type="button"
                              onClick={() => setExpanded(open ? null : m.id)}
                              className="mt-2 text-xs font-semibold text-[oklch(0.82_0.08_250)] hover:underline"
                            >
                              {open ? "Ocultar detalhes" : "Por que esse módulo?"}
                            </button>
                            {open && (
                              <p className="mt-2 text-sm text-white/70 leading-relaxed border-t border-white/10 pt-2">
                                {m.explicacao}
                              </p>
                            )}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <SummaryCard
              selected={selected}
              total={total}
              economia={economia}
              empresa={empresa}
              email={email}
              onGerar={gerarProposta}
            />
          </div>

          {/* Mobile sticky bar */}
          <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-[oklch(0.16_0.04_260)]/95 backdrop-blur-md p-3 safe-pb">
            <div className="mx-auto max-w-7xl flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-white/55">Total anual</p>
                <p className="text-xl font-bold text-white tabular-nums">{formatBRL(total)}</p>
              </div>
              <button
                type="button"
                onClick={gerarProposta}
                disabled={empresa.trim().length < 2 || !email.includes("@")}
                className="inline-flex items-center gap-2 rounded-xl bg-[oklch(0.55_0.14_250)] px-5 py-3 text-sm font-bold text-white disabled:opacity-40"
              >
                Gerar proposta
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold mb-6">Perguntas frequentes</h2>
          <div className="space-y-3">
            {propostaFaqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-border bg-card shadow-card">
                <summary className="cursor-pointer list-none p-5 font-semibold flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-brand group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <WhatsAppLink
              pageLabel={propostaMeta.shortTitle}
              intent={`Quero ajuda para montar minha proposta CADBRASIL. Total estimado na página: ${formatBRL(total)}/ano.`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </WhatsAppLink>
            <Link
              to="/planos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold hover:border-brand/40"
            >
              Ver planos prontos
            </Link>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            WhatsApp comercial: {WHATSAPP_NUMBER.replace(/^55/, "+55 ")}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
