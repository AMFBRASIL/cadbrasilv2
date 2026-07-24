import {
  certificadoDigitalSicafFaqs,
  certificadoDigitalSicafMeta,
  certificadoDigitalSicafToc,
  comparativoA1A3,
  editorialTrust,
  errosComuns,
  glossarioCertificado,
  heroStats,
  oQueEeCnpj,
  passosObter,
  relatedGuides,
  sicafGovBr,
} from "@/data/certificadoDigitalSicaf";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  KeyRound,
  ListChecks,
  MessageCircle,
  Shield,
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

export function CertificadoDigitalSicafPage() {
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
                <KeyRound className="h-3 w-3" />
                e-CNPJ · A1 e A3 · ICP-Brasil
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                Certificado digital para o{" "}
                <span className="text-[oklch(0.82_0.08_250)]">SICAF</span>
              </h1>

              <p className="guide-hero-lead page-hero-summary mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Guia do <strong className="text-white font-semibold">e-CNPJ A1 e A3</strong> para
                autenticar no Compras.gov.br, credenciar e manter o SICAF regular com a{" "}
                <strong className="text-white font-semibold">CADBRASIL</strong>.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                Sem e-CNPJ ICP-Brasil válido, a pessoa jurídica não conclui o acesso ao portal nem
                atualiza níveis e certidões com segurança.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <CadastroLink
                  href={CADASTRO_CREDENCIAMENTO_URL}
                  className="cadastro-cta-hero inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-[oklch(0.28_0.09_260)] text-base sm:text-lg font-bold shadow-xl hover:scale-[1.02] transition"
                >
                  Cadastro SICAF agora
                  <ArrowRight className="h-5 w-5" />
                </CadastroLink>
                <WhatsAppLink
                  pageLabel="Certificado digital SICAF"
                  intent="Quero orientação sobre e-CNPJ A1/A3 e iniciar o Cadastro SICAF com a CADBRASIL."
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
          {certificadoDigitalSicafToc.map((item) => (
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
              <li className="text-foreground font-medium">Certificado digital SICAF</li>
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
              aria-label="Índice certificado digital SICAF"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nesta página</p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {certificadoDigitalSicafToc.map((item) => (
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
                  {certificadoDigitalSicafMeta.quickAnswer}
                </p>
              </div>
            </section>

            <section id="o-que-e" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-7 w-7 text-brand shrink-0" />
                O que é e-CNPJ
              </h2>
              <p className="text-muted-foreground mb-6">
                Identidade digital da empresa sob o padrão ICP-Brasil — exigida para operar no SICAF.
              </p>
              <div className="space-y-4">
                {oQueEeCnpj.map((p) => (
                  <div key={p.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold">{p.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="a1-vs-a3" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">A1 vs A3</h2>
              <p className="text-muted-foreground mb-6">
                Ambos servem para o SICAF se forem e-CNPJ ICP-Brasil. Compare formato, validade e uso.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[560px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold">Aspecto</th>
                      <th className="p-4 font-semibold">e-CNPJ A1</th>
                      <th className="p-4 font-semibold">e-CNPJ A3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparativoA1A3.map((row) => (
                      <tr key={row.aspecto} className="border-t border-border">
                        <td className="p-4 font-medium">{row.aspecto}</td>
                        <td className="p-4 text-muted-foreground">{row.a1}</td>
                        <td className="p-4 text-muted-foreground">{row.a3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                *Faixas de mercado indicativas em 2026 — confirme preço e condições na AR/AC escolhida.
              </p>
            </section>

            <section id="como-obter" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <ListChecks className="h-7 w-7 text-brand shrink-0" />
                Como obter o e-CNPJ
              </h2>
              <p className="text-muted-foreground mb-6">
                Do tipo de certificado ao teste no Compras.gov.br e ao Cadastro SICAF.
              </p>
              <ol className="space-y-3">
                {passosObter.map((passo) => (
                  <li
                    key={passo.n}
                    id={`passo-${passo.n}`}
                    className="scroll-mt-32 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row gap-4 shadow-card"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground font-bold text-sm">
                      {passo.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{passo.titulo}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{passo.descricao}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                      <Clock className="h-3.5 w-3.5" />
                      {passo.time}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="sicaf-govbr" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">SICAF e gov.br</h2>
              <p className="text-muted-foreground mb-6">
                Como o e-CNPJ se conecta ao login, credenciamento, renovação e CRC no portal federal.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {sicafGovBr.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="erros-comuns" className="scroll-mt-32 mb-14 rounded-3xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-7 w-7 text-destructive shrink-0" />
                Erros comuns
              </h2>
              <ul className="space-y-3">
                {errosComuns.map((e) => (
                  <li key={e.titulo} className="rounded-xl border border-border bg-card p-4">
                    <p className="font-semibold text-sm flex gap-2">
                      <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                      {e.titulo}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed pl-6">{e.texto}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="glossario" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Glossário</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Termos essenciais de certificado digital, ICP-Brasil e SICAF.
              </p>
              <dl className="grid sm:grid-cols-2 gap-4">
                {glossarioCertificado.map((g) => (
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
                {certificadoDigitalSicafFaqs.map((faq) => (
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
                <h2 className="text-2xl sm:text-3xl font-bold">Certificado ok? Cadastre no SICAF</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Com o e-CNPJ instalado e testado, inicie o credenciamento assistido CADBRASIL até o
                  CRC Regular.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                  <CadastroLink
                    href={CADASTRO_CREDENCIAMENTO_URL}
                    className="cadastro-cta-hero inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-brand text-brand-foreground text-base sm:text-lg font-bold shadow-glow hover:scale-[1.02] transition"
                  >
                    Cadastro SICAF agora
                    <ArrowRight className="h-5 w-5" />
                  </CadastroLink>
                  <WhatsAppLink
                    pageLabel="Certificado digital SICAF"
                    intent="Já tenho ou vou obter o e-CNPJ e quero cadastrar no SICAF com a CADBRASIL."
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
                <ul className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  {["Orientação A1/A3", "Validação de acesso", "CRC Regular"].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
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
