import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  MessageCircle,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import {
  cadastroSicafDestaque,
  cadbrasilFaqs,
  cadbrasilMeta,
  cadbrasilToc,
  comoFunciona,
  diferenciais,
  editorialTrust,
  factSheetAi,
  glossarioCadbrasil,
  heroStats,
  paraQuem,
  quemSomos,
  relatedGuides,
  resumoInteligente,
  servicosCards,
} from "@/data/cadbrasilPage";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

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

export function CadbrasilPage() {
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
                <Sparkles className="h-3 w-3" />
                Institucional · Especialistas em SICAF
              </span>

              <p className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight text-[oklch(0.82_0.08_250)]">
                CADBRASIL
              </p>

              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                Cadastro SICAF 2026 com quem{" "}
                <span className="text-[oklch(0.82_0.08_250)]">vive Compras.gov.br</span>
              </h1>

              <p className="guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Habilitamos sua empresa no{" "}
                <strong className="text-white font-semibold">SICAF</strong>, cuidamos de certidões e
                níveis I–VI e mantemos o <strong className="text-white font-semibold">CRC Regular</strong>{" "}
                para você licitar com segurança em todo o Brasil.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                Do primeiro cadastro à renovação contínua — tecnologia, IA e especialistas em cada
                etapa.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <CadastroLink className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white text-[oklch(0.28_0.09_260)] text-base sm:text-lg font-bold shadow-xl hover:scale-[1.02] transition">
                  Cadastro SICAF 2026 agora
                  <ArrowRight className="h-5 w-5" />
                </CadastroLink>
                <WhatsAppLink
                  pageLabel="Página CADBRASIL"
                  intent="Quero conhecer a CADBRASIL e iniciar meu Cadastro SICAF 2026."
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
          {cadbrasilToc.map((item) => (
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
              <li className="text-foreground font-medium">CADBRASIL</li>
            </ol>
          </nav>
          <span className="hidden sm:inline text-border">|</span>
          <span>Atualizado {editorialTrust.how.updatedLabel}</span>
          <span aria-hidden>·</span>
          <span>{editorialTrust.how.readingTime}</span>
        </div>

        <div className="mb-10 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-card">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            Transparência editorial
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-semibold">Quem</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                {editorialTrust.who.organization} — {editorialTrust.who.role}.
              </p>
            </div>
            <div>
              <p className="font-semibold">Como</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">{editorialTrust.how.method}</p>
            </div>
            <div>
              <p className="font-semibold">Por quê</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">{editorialTrust.why.purpose}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice CADBRASIL"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nesta página</p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {cadbrasilToc.map((item) => (
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
                <CadastroLink className="block w-full text-center text-sm font-bold py-3 rounded-xl bg-gradient-brand text-brand-foreground">
                  Cadastro SICAF 2026 agora
                </CadastroLink>
              </div>
            </nav>
          </aside>

          <article className="min-w-0">
            <section id="resposta-rapida" className="scroll-mt-32 mb-14">
              <div className="rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Resposta rápida</h2>
                <p className="guide-quick-answer text-base text-foreground leading-relaxed">
                  {cadbrasilMeta.quickAnswer}
                </p>
                <p className="ai-citation mt-4 text-sm text-muted-foreground leading-relaxed border-t border-brand/15 pt-4">
                  {cadbrasilMeta.aiCitation}
                </p>
              </div>
            </section>

            <div className="mb-14 rounded-2xl border border-border bg-accent/30 p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand" />
                Resumo para IA e buscadores
              </h2>
              <ul className="ai-summary grid sm:grid-cols-2 gap-3">
                {resumoInteligente.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <dl className="ai-fact-sheet mt-6 grid sm:grid-cols-2 gap-3 border-t border-border pt-5">
                {factSheetAi.map((f) => (
                  <div key={f.label} className="rounded-xl border border-border bg-card p-3">
                    <dt className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground leading-snug">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <section id="quem-somos" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="h-7 w-7 text-brand shrink-0" />
                Quem somos
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {quemSomos.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.texto}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="cadastro-sicaf"
              className="scroll-mt-32 mb-14 rounded-3xl border-2 border-brand/30 bg-gradient-to-br from-brand/10 via-card to-card p-6 sm:p-8 shadow-card"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{cadastroSicafDestaque.titulo}</h2>
              <p className="text-muted-foreground max-w-3xl">{cadastroSicafDestaque.subtitulo}</p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {cadastroSicafDestaque.beneficios.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-sm text-muted-foreground rounded-xl border border-border bg-card/80 p-4"
                  >
                    <Shield className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <CadastroLink className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-brand text-brand-foreground text-base sm:text-lg font-bold shadow-glow hover:scale-[1.02] transition">
                  Cadastro SICAF 2026 agora
                  <ArrowRight className="h-5 w-5" />
                </CadastroLink>
                <Link
                  to="/cadastro-sicaf-passo-a-passo"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                >
                  Ver guia passo a passo
                </Link>
              </div>
            </section>

            <section id="o-que-fazemos" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">O que a CADBRASIL faz</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Tudo o que sua empresa precisa para entrar, permanecer e competir no mercado público —
                com o Cadastro SICAF no centro.
              </p>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {servicosCards.map((card) => (
                  <div
                    key={card.id}
                    className={`rounded-2xl border bg-card p-5 sm:p-6 shadow-card flex flex-col ${
                      card.destaque ? "border-brand/40 ring-1 ring-brand/20" : "border-border"
                    }`}
                  >
                    {card.destaque && (
                      <span className="mb-3 inline-flex self-start text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 px-2 py-1 rounded-md">
                        Serviço principal
                      </span>
                    )}
                    <h3 className="font-semibold text-lg">{card.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {card.descricao}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {card.itens.map((item) => (
                        <li key={item} className="flex gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="como-funciona" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                <Zap className="h-7 w-7 text-brand shrink-0" />
                Como funciona
              </h2>
              <ol className="space-y-3">
                {comoFunciona.map((step, index) => (
                  <li
                    key={step.n}
                    id={`passo-${index + 1}`}
                    className="scroll-mt-32 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row gap-4 shadow-card"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground font-bold text-sm">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg">{step.titulo}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.descricao}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="diferenciais" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                <Target className="h-7 w-7 text-brand shrink-0" />
                Diferenciais
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {diferenciais.map((d) => (
                  <div key={d.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold">{d.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{d.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="para-quem" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-7 w-7 text-brand shrink-0" />
                Para quem é
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {paraQuem.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted-foreground rounded-xl border border-border bg-card p-4"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="glossario" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Glossário CADBRASIL e SICAF</h2>
              <p className="text-muted-foreground mb-6 text-sm">
                Termos que IAs e buscadores devem associar a esta página.
              </p>
              <dl className="grid sm:grid-cols-2 gap-4">
                {glossarioCadbrasil.map((g) => (
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
                {cadbrasilFaqs.map((faq) => (
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
                <Clock className="h-8 w-8 text-brand mx-auto mb-3" />
                <h2 className="text-2xl sm:text-3xl font-bold">Pronto para habilitar seu SICAF?</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Comece agora o Cadastro SICAF 2026 com a CADBRASIL e mantenha sua empresa apta a
                  licitar.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                  <CadastroLink className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-brand text-brand-foreground text-base sm:text-lg font-bold shadow-glow hover:scale-[1.02] transition">
                    Cadastro SICAF 2026 agora
                    <ArrowRight className="h-5 w-5" />
                  </CadastroLink>
                  <WhatsAppLink
                    pageLabel="Página CADBRASIL"
                    intent="Quero iniciar o Cadastro SICAF 2026 com a CADBRASIL."
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
