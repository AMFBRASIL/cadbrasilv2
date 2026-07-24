import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  ListChecks,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import {
  comprasGovBrFaqs,
  comprasGovBrMeta,
  comprasGovBrToc,
  editorialTrust,
  errosComuns,
  glossarioComprasGov,
  heroStats,
  modulos,
  oQueE,
  passosAcesso,
  relatedGuides,
  sicafNoPortal,
  vsComprasnet,
} from "@/data/comprasGovBr";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";

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

export function ComprasGovBrPage() {
  return (
    <PageShell>
      <section className="relative pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden bg-[oklch(0.22_0.08_260)]">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand/30 blur-3xl" aria-hidden />
        <HeroWave />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-3 py-1">
                <Globe className="h-3 w-3" />
                Portal oficial · 2026
              </span>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                Compras.gov.br: tutorial completo com{" "}
                <span className="text-[oklch(0.82_0.08_250)]">SICAF</span>
              </h1>
              <p className="guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Aprenda a acessar o portal oficial, autenticar com e-CNPJ e gerenciar o cadastro de
                fornecedor. A <strong className="text-white font-semibold">CADBRASIL</strong> conduz
                até o CRC Regular.
              </p>
              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                Comprasnet é o nome legado — a operação atual do fornecedor é no Compras.gov.br.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CadastroLink
                  href={CADASTRO_CREDENCIAMENTO_URL}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[oklch(0.28_0.09_260)] font-semibold shadow-lg hover:scale-[1.02] transition"
                >
                  Cadastro SICAF agora
                  <ArrowRight className="h-4 w-4" />
                </CadastroLink>
                <WhatsAppLink
                  pageLabel="Compras.gov.br"
                  intent="Quero acessar o Compras.gov.br e cadastrar no SICAF."
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/15 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
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
          {comprasGovBrToc.map((item) => (
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
              <li className="text-foreground font-medium">Compras.gov.br</li>
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
              aria-label="Índice Compras.gov.br"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nesta página</p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {comprasGovBrToc.map((item) => (
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
                  Cadastro SICAF agora
                </CadastroLink>
              </div>
            </nav>
          </aside>

          <article className="min-w-0">
            <section id="resposta-rapida" className="scroll-mt-32 mb-14">
              <div className="rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Resposta rápida</h2>
                <p className="guide-quick-answer ai-summary text-base text-foreground leading-relaxed">
                  {comprasGovBrMeta.quickAnswer}
                </p>
              </div>
            </section>

            <section id="o-que-e" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">O que é Compras.gov.br</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {oQueE.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="modulos" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Módulos relevantes</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {modulos.map((m) => (
                  <div key={m.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card flex gap-3">
                    <Building2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">{m.titulo}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{m.texto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="como-acessar" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <ListChecks className="h-7 w-7 text-brand shrink-0" />
                Como acessar
              </h2>
              <ol className="mt-6 space-y-3">
                {passosAcesso.map((passo) => (
                  <li
                    key={passo.n}
                    id={`passo-${passo.n}`}
                    className="scroll-mt-32 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row gap-4 shadow-card"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground font-bold text-sm">
                      {passo.n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg">{passo.titulo}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{passo.descricao}</p>
                      <p className="mt-1 text-xs text-brand font-medium">{passo.time}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="sicaf" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">SICAF no portal</h2>
              <div className="space-y-3">
                {sicafNoPortal.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand" />
                      {item.titulo}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="comprasnet" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Compras.gov.br vs Comprasnet</h2>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-accent/50">
                    <tr>
                      <th className="text-left p-3 font-semibold">Aspecto</th>
                      <th className="text-left p-3 font-semibold">Legado</th>
                      <th className="text-left p-3 font-semibold">Atual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vsComprasnet.map((row) => (
                      <tr key={row.aspecto} className="border-t border-border">
                        <td className="p-3 font-medium">{row.aspecto}</td>
                        <td className="p-3 text-muted-foreground">{row.legado}</td>
                        <td className="p-3 text-muted-foreground">{row.atual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Também veja o guia{" "}
                <Link to="/comprasnet" className="text-brand hover:underline">
                  Comprasnet
                </Link>
                .
              </p>
            </section>

            <section id="erros" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Erros comuns</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {errosComuns.map((e) => (
                  <div key={e.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-brand" />
                      {e.titulo}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="glossario" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Glossário</h2>
              <dl className="grid sm:grid-cols-2 gap-4">
                {glossarioComprasGov.map((g) => (
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
                {comprasGovBrFaqs.map((faq) => (
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
                <h2 className="text-2xl sm:text-3xl font-bold">Pronto para o SICAF no Compras.gov.br?</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Inicie o credenciamento assistido e chegue ao CRC Regular com a CADBRASIL.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <CadastroLink
                    href={CADASTRO_CREDENCIAMENTO_URL}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-brand text-brand-foreground font-bold shadow-glow"
                  >
                    Cadastro SICAF 2026
                    <ArrowRight className="h-5 w-5" />
                  </CadastroLink>
                  <WhatsAppLink
                    pageLabel="Compras.gov.br"
                    intent="Quero ajuda com Compras.gov.br e Cadastro SICAF."
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border border-border bg-card font-semibold"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </WhatsAppLink>
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
