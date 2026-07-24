import {
  causasIrregularidade,
  certidoesTabela,
  comoDiagnosticar,
  editorialTrust,
  glossarioSicafIrregular,
  heroStats,
  oQueEIrregular,
  passosRegularizacao,
  regularizacaoCadbrasil,
  relatedGuides,
  riscosIrregularidade,
  sicafIrregularFaqs,
  sicafIrregularMeta,
  sicafIrregularToc,
} from "@/data/sicafIrregular";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileWarning,
  ListChecks,
  MessageCircle,
  Search,
  Shield,
  ShieldAlert,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

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

const heroBeneficios = [
  "Diagnóstico de pendências",
  "Atualização no Compras.gov.br",
  "CRC Regular",
];

export function SicafIrregularPage() {
  return (
    <PageShell>
      <section className="relative pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden bg-[oklch(0.22_0.08_260)]">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand/30 blur-3xl" aria-hidden />
        <div
          className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[oklch(0.35_0.12_250)]/40 blur-3xl"
          aria-hidden
        />
        <HeroWave />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-3 py-1">
                <ShieldAlert className="h-3 w-3" />
                SICAF irregular · regularização 2026
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                SICAF <span className="text-[oklch(0.82_0.08_250)]">irregular</span> ou pendente?
                Regularize e volte a licitar
              </h1>

              <p className="guide-hero-lead page-hero-summary mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Diagnóstico de causas (certidão vencida, débitos, inconsistência), atualização no
                Compras.gov.br e{" "}
                <strong className="text-white font-semibold">CRC Regular</strong> — com a CADBRASIL.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                {sicafIrregularMeta.quickAnswer}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <CadastroLink
                  href={CADASTRO_CREDENCIAMENTO_URL}
                  className="cadastro-cta-hero inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-[oklch(0.28_0.09_260)] text-base sm:text-lg font-bold shadow-xl hover:scale-[1.02] transition"
                >
                  Regularizar SICAF agora
                  <ArrowRight className="h-5 w-5" />
                </CadastroLink>
                <WhatsAppLink
                  pageLabel={sicafIrregularMeta.shortTitle}
                  intent="Meu SICAF está irregular ou pendente. Quero regularizar com a CADBRASIL."
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/15 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar com especialista
                </WhatsAppLink>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/80">
                {heroBeneficios.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[oklch(0.82_0.08_250)] shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-4 sm:p-5 text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{s.value}</div>
                  <div className="mt-1 text-xs sm:text-sm text-white/70 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-[72px] z-30 lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {sicafIrregularToc.map((item) => (
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
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground mb-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-brand">
                  Início
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">{sicafIrregularMeta.shortTitle}</li>
            </ol>
          </nav>
          <span className="hidden sm:inline text-border">|</span>
          <span>Atualizado {editorialTrust.how.updatedLabel}</span>
          <span aria-hidden>·</span>
          <span>{editorialTrust.how.readingTime}</span>
        </div>

        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice SICAF irregular"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nesta página</p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {sicafIrregularToc.map((item) => (
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
              <div className="p-4 border-t border-border">
                <CadastroLink
                  href={CADASTRO_CREDENCIAMENTO_URL}
                  className="block w-full text-center text-sm font-bold py-3 rounded-xl bg-gradient-brand text-brand-foreground"
                >
                  Regularizar agora
                </CadastroLink>
              </div>
            </nav>
          </aside>

          <article className="min-w-0">
            <section id="resposta-rapida" className="scroll-mt-32 mb-14">
              <div className="rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Resposta rápida</h2>
                <p className="guide-quick-answer ai-summary text-base text-foreground leading-relaxed">
                  {sicafIrregularMeta.quickAnswer}
                </p>
              </div>
            </section>

            <section id="o-que-e" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <ShieldAlert className="h-7 w-7 text-brand shrink-0" />
                O que é SICAF irregular?
              </h2>
              <div className="space-y-4">
                {oQueEIrregular.map((p) => (
                  <div key={p.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold">{p.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="causas" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Causas de irregularidade</h2>
              <p className="text-muted-foreground mb-6">
                Certidão vencida, débitos e inconsistências cadastrais são as mais comuns.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {causasIrregularidade.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card flex gap-3">
                    <FileWarning className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{item.titulo}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="diagnostico" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Search className="h-7 w-7 text-brand shrink-0" />
                Como diagnosticar
              </h2>
              <p className="text-muted-foreground mb-6">Quatro passos no Compras.gov.br antes de qualquer upload.</p>
              <ol className="space-y-3">
                {comoDiagnosticar.map((passo) => (
                  <li
                    key={passo.n}
                    className="rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row gap-4 shadow-card"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground font-bold text-sm">
                      {passo.n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg">{passo.titulo}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{passo.descricao}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="riscos" className="scroll-mt-32 mb-14 rounded-3xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-7 w-7 text-destructive shrink-0" />
                Riscos de permanecer irregular
              </h2>
              <ul className="space-y-2">
                {riscosIrregularidade.map((r) => (
                  <li
                    key={r}
                    className="flex gap-2 text-sm text-muted-foreground bg-card border border-border rounded-xl p-4"
                  >
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            <section id="como-regularizar" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <ListChecks className="h-7 w-7 text-brand shrink-0" />
                Como regularizar — passo a passo
              </h2>
              <p className="text-muted-foreground mb-6">
                Do diagnóstico ao monitoramento — fluxo para sair do SICAF irregular.
              </p>
              <ol className="space-y-3">
                {passosRegularizacao.map((step, index) => (
                  <li
                    key={step.n}
                    id={`passo-${index + 1}`}
                    className="scroll-mt-32 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row gap-4 shadow-card"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground font-bold text-sm">
                      {step.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{step.titulo}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.descricao}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      <Clock className="h-3.5 w-3.5" />
                      {step.time}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <CadastroLink
                  href={CADASTRO_CREDENCIAMENTO_URL}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow"
                >
                  Iniciar regularização
                  <ArrowRight className="h-4 w-4" />
                </CadastroLink>
              </div>
            </section>

            <section id="certidoes" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Certidões e validade típica</h2>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[560px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold">Documento</th>
                      <th className="p-4 font-semibold">Validade</th>
                      <th className="p-4 font-semibold">Nível</th>
                      <th className="p-4 font-semibold">Ação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {certidoesTabela.map((row) => (
                      <tr key={row.doc} className="border-t border-border">
                        <td className="p-4 font-medium">{row.doc}</td>
                        <td className="p-4 text-muted-foreground">{row.validade}</td>
                        <td className="p-4">
                          <span className="text-xs font-semibold bg-brand/10 text-brand px-2 py-0.5 rounded-full">
                            {row.nivel}
                          </span>
                        </td>
                        <td className="p-4 text-muted-foreground text-xs">{row.acao}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="cadbrasil" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Regularização com a CADBRASIL</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {regularizacaoCadbrasil.map((s) => (
                  <div key={s.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card flex gap-4">
                    <Shield className="h-6 w-6 text-brand shrink-0" />
                    <div>
                      <h3 className="font-semibold">{s.titulo}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="glossario" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Glossário</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Termos essenciais para entender SICAF irregular, pendente e certidão vencida.
              </p>
              <dl className="grid sm:grid-cols-2 gap-4">
                {glossarioSicafIrregular.map((g) => (
                  <div key={g.term} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <dt className="font-semibold text-brand">{g.term}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.def}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="faq" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Perguntas frequentes</h2>
              <div className="space-y-3">
                {sicafIrregularFaqs.map((faq) => (
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

            <section id="cta" className="scroll-mt-32 mb-14">
              <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/10 via-card to-card p-8 sm:p-10 text-center shadow-card">
                <h2 className="text-2xl sm:text-3xl font-bold">Pronto para regularizar seu SICAF?</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Acesse o portal de credenciamento e inicie agora — diagnóstico, atualização e CRC
                  Regular com a CADBRASIL.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                  <CadastroLink
                    href={CADASTRO_CREDENCIAMENTO_URL}
                    className="cadastro-cta-hero inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-brand text-brand-foreground text-base sm:text-lg font-bold shadow-glow hover:scale-[1.02] transition"
                  >
                    Regularizar SICAF agora
                    <ArrowRight className="h-5 w-5" />
                  </CadastroLink>
                  <WhatsAppLink
                    pageLabel={sicafIrregularMeta.shortTitle}
                    intent="Quero ajuda para regularizar meu SICAF irregular."
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </WhatsAppLink>
                  <Link
                    to="/planos"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                  >
                    Ver planos
                  </Link>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold mb-4">Guias relacionados</h2>
              <ul className="flex flex-wrap gap-2">
                {relatedGuides.map((g) => (
                  <li key={g.to}>
                    <Link
                      to={g.to}
                      className="inline-block text-sm px-3 py-1.5 rounded-full border border-border bg-accent/50 hover:border-brand/40 hover:text-brand transition"
                    >
                      {g.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </div>
    </PageShell>
  );
}
