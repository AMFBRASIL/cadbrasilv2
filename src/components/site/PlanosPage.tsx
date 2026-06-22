import { Link } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CreditCard,
  Crown,
  MessageCircle,
  Minus,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import {
  billingLabels,
  billingMonths,
  type BillingPeriod,
  featureRows,
  ferramentasPlanos,
  formatPlanPrice,
  inclusoTodos,
  monthlyEquivalent,
  planPricing,
  planosFaqs,
  planosToc,
  plans,
} from "@/data/planos";
import { PageShell } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

const MODIFIED = "29 mai 2026";

const periods: BillingPeriod[] = ["semestral", "anual", "bienal"];

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

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-4 w-4 text-success mx-auto" aria-label="Incluso" />;
  }
  if (value === false) {
    return <Minus className="h-4 w-4 text-muted-foreground/40 mx-auto" aria-label="Não incluso" />;
  }
  return <span className="text-xs font-medium text-brand">{value}</span>;
}

export function PlanosPage() {
  const [period, setPeriod] = useState<BillingPeriod>("anual");

  return (
    <PageShell>
      <section className="relative pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden bg-[oklch(0.22_0.08_260)]">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand/30 blur-3xl" aria-hidden />
        <HeroWave />

        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-3 py-1">
            <CreditCard className="h-3 w-3" />
            Planos e preços · 2026
          </span>
          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-white text-balance max-w-4xl mx-auto">
            Encontre o plano ideal para{" "}
            <span className="text-[oklch(0.82_0.08_250)]">vender ao governo</span>
          </h1>
          <p className="guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Quatro planos com assinatura <strong className="text-white">semestral, anual ou bienal</strong> — do SICAF
            essencial à plataforma completa com IA e consultoria jurídica.
          </p>
        </div>
      </section>

      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-[72px] z-30 lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {planosToc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-muted-foreground hover:text-brand hover:bg-brand/10 transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mb-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-brand">
                  Início
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link to="/licitacoes" className="hover:text-brand">
                  Licitações
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">Planos</li>
            </ol>
          </nav>
          <span className="hidden sm:inline text-border">|</span>
          <span>Atualizado {MODIFIED}</span>
        </div>

        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice de planos"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nesta página</p>
              </div>
              <ol className="p-3 space-y-0.5">
                {planosToc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-sm py-2 px-3 rounded-lg text-muted-foreground hover:text-brand hover:bg-brand/5 transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="p-4 border-t border-border bg-gradient-to-b from-brand/5 to-transparent">
                <Link
                  to="/licitacoes-cadastro"
                  className="block w-full text-center text-sm font-semibold py-2.5 rounded-xl bg-gradient-brand text-brand-foreground"
                >
                  Teste gratuito
                </Link>
              </div>
            </nav>
          </aside>

          <article className="min-w-0">
            <section id="periodos" className="scroll-mt-32 mb-10 flex flex-col items-center">
              <div
                className="inline-flex rounded-2xl border border-border bg-card p-1 shadow-card"
                role="tablist"
                aria-label="Período de assinatura"
              >
                {periods.map((p) => (
                  <button
                    key={p}
                    type="button"
                    role="tab"
                    aria-selected={period === p}
                    onClick={() => setPeriod(p)}
                    className={`px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition ${
                      period === p
                        ? "bg-gradient-brand text-brand-foreground shadow-glow"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {billingLabels[p]}
                    {p === "anual" && (
                      <span className="ml-1.5 text-[10px] font-bold uppercase opacity-80">−12%</span>
                    )}
                    {p === "bienal" && (
                      <span className="ml-1.5 text-[10px] font-bold uppercase opacity-80">−25%</span>
                    )}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                Pagamento via PIX, boleto ou cartão · {billingMonths[period]} meses de acesso
              </p>
            </section>

            <section id="comparar" className="scroll-mt-32 mb-14">
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {plans.map((plan) => {
                  const priceCents = planPricing[plan.id]?.[period] ?? 0;
                  const topFeatures = featureRows
                    .flatMap((g) => g.features)
                    .filter((f) => f.values[plan.id] === true || typeof f.values[plan.id] === "string")
                    .slice(0, 8);

                  return (
                    <div
                      key={plan.id}
                      className={`relative rounded-2xl border p-5 sm:p-6 flex flex-col shadow-card transition hover:shadow-glow ${
                        plan.highlight
                          ? "border-brand bg-gradient-to-b from-brand/10 to-card ring-2 ring-brand/30"
                          : "border-border bg-card"
                      }`}
                    >
                      {"badge" in plan && plan.badge && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-gradient-brand text-brand-foreground px-3 py-1 rounded-full shadow-glow">
                          <Star className="h-3 w-3" />
                          {plan.badge}
                        </span>
                      )}

                      <div className="flex items-center gap-2 mb-1">
                        {plan.id === "enterprise" ? (
                          <Crown className="h-5 w-5 text-brand" />
                        ) : (
                          <Zap className="h-5 w-5 text-brand" />
                        )}
                        <h2 className="text-xl font-bold">{plan.name}</h2>
                      </div>
                      <p className="text-sm font-medium text-brand">{plan.tagline}</p>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">{plan.description}</p>

                      <div className="mt-5 py-4 border-y border-border">
                        {plan.customPrice ? (
                          <p className="text-2xl font-bold">Sob consulta</p>
                        ) : (
                          <>
                            <p className="text-2xl sm:text-3xl font-bold tabular-nums">
                              {formatPlanPrice(priceCents)}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              total {billingLabels[period].toLowerCase()} ·{" "}
                              <span className="text-foreground font-medium">
                                {monthlyEquivalent(priceCents, period)}/mês
                              </span>
                            </p>
                          </>
                        )}
                      </div>

                      <ul className="mt-4 space-y-2 mb-6">
                        {topFeatures.map((f) => (
                          <li key={f.id} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" />
                            <span>
                              {f.label}
                              {typeof f.values[plan.id] === "string" && (
                                <span className="text-brand font-medium"> ({f.values[plan.id]})</span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={plan.ctaHref}
                        className={`mt-auto w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition ${
                          plan.highlight
                            ? "bg-gradient-brand text-brand-foreground shadow-glow hover:scale-[1.02]"
                            : "border border-border bg-accent/50 hover:border-brand/40 hover:text-brand"
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="recursos" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Comparativo completo de recursos</h2>
              <p className="text-muted-foreground mb-6">Veja o que cada plano inclui — igual às melhores plataformas do mercado.</p>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[720px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold min-w-[200px]">Recurso</th>
                      {plans.map((p) => (
                        <th key={p.id} className="p-4 font-semibold text-center min-w-[100px]">
                          {p.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureRows.map((group) => (
                      <Fragment key={group.category}>
                        <tr className="border-t border-border bg-accent/30">
                          <td colSpan={5} className="p-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            {group.category}
                          </td>
                        </tr>
                        {group.features.map((f) => (
                          <tr key={f.id} className="border-t border-border">
                            <td className="p-4 text-muted-foreground">{f.label}</td>
                            {plans.map((p) => (
                              <td key={p.id} className="p-4 text-center">
                                <FeatureCell value={f.values[p.id]} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="incluso" className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-accent/25 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Em todos os planos você conta com</h2>
              <p className="text-muted-foreground mb-6">A excelência CADBRASIL em monitoramento, análise e suporte humano.</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {inclusoTodos.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <Sparkles className="h-5 w-5 text-brand mb-2" />
                    <h3 className="font-semibold">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="ferramentas" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ferramentas da plataforma</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ferramentasPlanos.map((nome) => (
                  <div
                    key={nome}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm shadow-card"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    {nome}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Disponibilidade por ferramenta varia conforme o plano — veja o comparativo acima ou{" "}
                <Link to="/licitacoes" className="text-brand font-medium underline underline-offset-4">
                  conheça a plataforma
                </Link>
                .
              </p>
            </section>

            <section id="faq" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Perguntas frequentes</h2>
              <div className="space-y-3">
                {planosFaqs.map((faq) => (
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
            </section>

            <section id="cadastro" className="scroll-mt-32 mb-8">
              <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/10 via-card to-card p-8 sm:p-10 text-center shadow-card">
                <h2 className="text-2xl sm:text-3xl font-bold">+8 mil fornecedores confiam na CADBRASIL</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Cadastre-se gratuitamente e nossa equipe indica o plano ideal para o seu CNPJ e objetivo comercial.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/licitacoes-cadastro"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition"
                  >
                    Cadastre-se gratuitamente
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <WhatsAppLink
                    pageLabel="Planos CADBRASIL"
                    intent="Quero saber qual plano CADBRASIL é ideal para minha empresa."
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Falar com vendas
                  </WhatsAppLink>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </PageShell>
  );
}
