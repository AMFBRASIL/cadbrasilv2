import {
  comparativoCustos,
  custosReais,
  editorialTrust,
  governoCobra,
  heroStats,
  mitosCustos,
  quantoCustaSicafFaqs,
  quantoCustaSicafMeta,
  quantoCustaSicafToc,
  relatedGuides,
  tabelaCustos,
  glossarioCustos,
} from "@/data/quantoCustaSicaf";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  CheckCircle2,
  MessageCircle,
  Scale,
  Table2,
  Wallet,
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

export function QuantoCustaSicafPage() {
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
                <Wallet className="h-3 w-3" />
                Custos SICAF · atualizado jul 2026
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                Quanto custa o <span className="text-[oklch(0.82_0.08_250)]">SICAF</span> em 2026?
              </h1>

              <p className="guide-hero-lead page-hero-summary mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Cadastro oficial no governo é{" "}
                <strong className="text-white font-semibold">gratuito (R$ 0)</strong>. Os custos reais
                são e-CNPJ, tempo da equipe e, se quiser, assessoria CADBRASIL.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                {quantoCustaSicafMeta.quickAnswer}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <CadastroLink
                  href={CADASTRO_CREDENCIAMENTO_URL}
                  className="cadastro-cta-hero inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-[oklch(0.28_0.09_260)] text-base sm:text-lg font-bold shadow-xl hover:scale-[1.02] transition"
                >
                  Iniciar credenciamento
                  <ArrowRight className="h-5 w-5" />
                </CadastroLink>
                <WhatsAppLink
                  pageLabel="Quanto custa o SICAF"
                  intent="Quero entender os custos do SICAF e iniciar com a CADBRASIL."
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/15 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar com especialista
                </WhatsAppLink>
              </div>
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
          {quantoCustaSicafToc.map((item) => (
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
              <li className="text-foreground font-medium">Quanto custa o SICAF</li>
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
              aria-label="Índice Quanto custa o SICAF"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nesta página</p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {quantoCustaSicafToc.map((item) => (
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
                  Credenciamento agora
                </CadastroLink>
              </div>
            </nav>
          </aside>

          <article className="min-w-0">
            <section id="resposta-rapida" className="scroll-mt-32 mb-14">
              <div className="rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Resposta rápida</h2>
                <p className="guide-quick-answer ai-summary text-base text-foreground leading-relaxed">
                  {quantoCustaSicafMeta.quickAnswer}
                </p>
              </div>
            </section>

            <section id="governo-cobra" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Banknote className="h-7 w-7 text-brand shrink-0" />
                O governo cobra?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Não. O credenciamento no Compras.gov.br não tem taxa federal de cadastro.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {governoCobra.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="custos-reais" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Wallet className="h-7 w-7 text-brand shrink-0" />
                Custos reais
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                O que a empresa realmente gasta — fora qualquer “taxa SICAF” inventada.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {custosReais.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card">
                    <span className="inline-flex text-[11px] font-semibold uppercase tracking-wide text-brand bg-brand/10 px-2.5 py-1 rounded-lg">
                      {item.destaque}
                    </span>
                    <h3 className="mt-3 font-semibold text-lg">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="tabela" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Table2 className="h-7 w-7 text-brand shrink-0" />
                Tabela de custos
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Comparativo lado a lado: sozinho vs com assessoria CADBRASIL.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[640px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold">Item</th>
                      <th className="p-4 font-semibold">Sozinho</th>
                      <th className="p-4 font-semibold text-brand">Com CADBRASIL</th>
                      <th className="p-4 font-semibold">Nota</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tabelaCustos.map((row) => (
                      <tr key={row.item} className="border-t border-border">
                        <td className="p-4 font-medium">{row.item}</td>
                        <td className="p-4 text-muted-foreground">{row.sozinho}</td>
                        <td className="p-4 text-brand font-medium">{row.cadbrasil}</td>
                        <td className="p-4 text-xs text-muted-foreground">{row.nota}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                * Valores de e-CNPJ são de mercado e variam por Autoridade Certificadora. Assessoria sob consulta;
                prazo típico de até 24h com documentação completa.
              </p>
            </section>

            <section id="mitos" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Mitos sobre o preço do SICAF</h2>
              <div className="space-y-3">
                {mitosCustos.map((m) => (
                  <div key={m.mito} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <p className="text-sm font-semibold text-amber-800 dark:text-amber-200 flex gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      Mito: {m.mito}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-foreground">Verdade:</strong> {m.verdade}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="comparativo" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Scale className="h-7 w-7 text-brand shrink-0" />
                CADBRASIL vs sozinho
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                A taxa do governo é a mesma (R$ 0). O que muda é tempo, risco e suporte.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[480px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold">Aspecto</th>
                      <th className="p-4 font-semibold">Por conta própria</th>
                      <th className="p-4 font-semibold text-brand">Com CADBRASIL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparativoCustos.map((row) => (
                      <tr key={row.aspecto} className="border-t border-border">
                        <td className="p-4 font-medium">{row.aspecto}</td>
                        <td className="p-4 text-muted-foreground">{row.sozinho}</td>
                        <td className="p-4 text-brand font-medium">{row.cadbrasil}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="glossario" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Glossário de custos</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Termos para não confundir gratuidade do governo com custos privados.
              </p>
              <dl className="grid sm:grid-cols-2 gap-4">
                {glossarioCustos.map((g) => (
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
                {quantoCustaSicafFaqs.map((faq) => (
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
                <h2 className="text-2xl sm:text-3xl font-bold">Pronto para cadastrar sem surpresa de taxa?</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  O governo continua em R$ 0. Comece no portal CADBRASIL e conte com validação documental até o CRC
                  Regular.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                  <CadastroLink
                    href={CADASTRO_CREDENCIAMENTO_URL}
                    className="cadastro-cta-hero inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-brand text-brand-foreground text-base sm:text-lg font-bold shadow-glow hover:scale-[1.02] transition"
                  >
                    Cadastro SICAF 2026 agora
                    <ArrowRight className="h-5 w-5" />
                  </CadastroLink>
                  <WhatsAppLink
                    pageLabel="Quanto custa o SICAF"
                    intent="Quero orçar assessoria e iniciar o Cadastro SICAF 2026."
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
