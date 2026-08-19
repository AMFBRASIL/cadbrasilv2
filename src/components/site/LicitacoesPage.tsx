import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Briefcase,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Gavel,
  Layers,
  ListChecks,
  MessageCircle,
  Scale,
  Search,
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import {
  comparativoLicitacoes,
  editorialTrust,
  etapasProcesso,
  factSheetAi,
  ferramentas,
  ferramentasIa,
  fontesOficiais,
  glossarioLicitacoes,
  juridicoBeneficios,
  licitacoesFaqs,
  licitacoesMeta,
  licitacoesToc,
  paraQueServe,
  pilares,
  relatedGuides,
  resumoInteligente,
  statsMercado,
} from "@/data/licitacoes";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";

const heroStats = [
  { value: "12+", label: "Ferramentas integradas" },
  { value: "6", label: "Etapas do processo" },
  { value: "8k+", label: "Fornecedores atendidos" },
  { value: "24h", label: "SICAF com CADBRASIL" },
];

function IniciarLicitacaoButton({ className }: { className: string }) {
  return (
    <CadastroLink href={CADASTRO_CREDENCIAMENTO_URL} className={className}>
      Iniciar Minha Licitação
      <ArrowRight className="h-4 w-4" />
    </CadastroLink>
  );
}

const ferramentaIcons: Record<string, typeof Search> = {
  Oportunidades: Search,
  Busca: Search,
  Documentos: FileText,
  Gestão: Briefcase,
  Pregão: Gavel,
  Inteligência: BarChart3,
  SICAF: Shield,
  IA: Bot,
  Jurídico: Scale,
  "Pós-licitação": FileText,
  Estratégia: Target,
};

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

export function LicitacoesPage() {
  return (
    <PageShell>
      <section className="relative pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden bg-[oklch(0.22_0.08_260)]">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[oklch(0.35_0.12_250)]/40 blur-3xl" aria-hidden />
        <HeroWave />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-3 py-1">
                <Gavel className="h-3 w-3" />
                Plataforma de licitações · 2026
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                Plataforma de licitação para{" "}
                <span className="text-[oklch(0.82_0.08_250)]">fornecedores do governo</span>
              </h1>

              <p className="guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Comece pelo diagnóstico da sua empresa. Em poucos minutos avaliamos SICAF, certificado digital
                e o melhor caminho para participar de licitações — com{" "}
                <strong className="text-white font-semibold">IA</strong>, documentos e suporte da{" "}
                <strong className="text-white font-semibold">CADBRASIL</strong>.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                Do edital ao contrato: triagem inicial, credenciamento SICAF e operação completa para MEI, ME,
                EPP e demais portes que querem vender ao governo.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <IniciarLicitacaoButton className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[oklch(0.28_0.09_260)] font-semibold shadow-lg hover:scale-[1.02] transition" />
                <WhatsAppLink
                  pageLabel="Plataforma de licitações CADBRASIL"
                  intent="Quero iniciar minha licitação e passar pela triagem de credenciamento."
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/15 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar com especialista
                </WhatsAppLink>
              </div>
              <p className="mt-3 text-xs text-white/55">
                Você será direcionado à triagem de credenciamento da CADBRASIL.
              </p>
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
          {licitacoesToc.map((item) => (
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
              <li className="text-foreground font-medium">Plataforma de licitações</li>
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
              <p className="font-semibold text-foreground">Quem</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">
                {editorialTrust.who.organization} — {editorialTrust.who.role}. {editorialTrust.who.experience}
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Como</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">{editorialTrust.how.method}</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Por quê</p>
              <p className="mt-1 text-muted-foreground leading-relaxed">{editorialTrust.why.purpose}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice da plataforma"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nesta página</p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {licitacoesToc.map((item) => (
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
                <p className="text-xs font-semibold text-foreground mb-2">Começar agora</p>
                <IniciarLicitacaoButton className="flex w-full items-center justify-center gap-2 text-center text-sm font-semibold py-2.5 rounded-xl bg-gradient-brand text-brand-foreground" />
              </div>
            </nav>
          </aside>

          <article className="min-w-0 prose-guide">
            <section id="resposta-rapida" className="scroll-mt-32 mb-14">
              <div className="rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3">Resposta rápida</h2>
                <p className="guide-quick-answer ai-summary text-base text-foreground leading-relaxed">
                  {licitacoesMeta.quickAnswer}
                </p>
              </div>
            </section>

            <section id="ficha-ia" className="scroll-mt-32 mb-14">
              <h2 className="text-lg font-bold mb-4">Ficha para sistemas de IA</h2>
              <dl className="grid sm:grid-cols-2 gap-3">
                {factSheetAi.map((f) => (
                  <div
                    key={f.label}
                    className="rounded-xl border border-border bg-card p-4 shadow-card"
                  >
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground leading-relaxed">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <div className="mb-14 rounded-2xl border border-border bg-accent/30 p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand" />
                Resumo inteligente (IA e buscadores)
              </h2>
              <ul className="ai-summary grid sm:grid-cols-2 gap-3">
                {resumoInteligente.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14 grid sm:grid-cols-3 gap-4">
              {pilares.map((p) => (
                <div key={p.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card text-center">
                  <Users className="h-6 w-6 text-brand mx-auto mb-2" />
                  <h3 className="font-semibold">{p.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.descricao}</p>
                </div>
              ))}
            </div>

            <section id="o-que-e" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-7 w-7 text-brand shrink-0" />
                O que é a plataforma CADBRASIL?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                A <strong className="text-foreground">CADBRASIL</strong> é uma plataforma de licitações para
                fornecedores que querem <strong className="text-foreground">vender ao governo</strong> com método,
                tecnologia e suporte especializado. Unimos busca de editais, gestão documental, credenciamento{" "}
                <Link
                  to="/o-que-e-sicaf-e-como-se-cadastrar"
                  className="text-brand font-medium underline underline-offset-4"
                >
                  SICAF
                </Link>
                , monitoramento de pregões e consultoria jurídica — do primeiro edital à assinatura do contrato.
              </p>
            </section>

            <section id="para-que-serve" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Para que serve?</h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                Simplificamos o processo desde a descoberta da oportunidade até a execução contratual — como as
                melhores plataformas do mercado, com foco em resultado para o fornecedor brasileiro.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {paraQueServe.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <Zap className="h-5 w-5 text-brand mb-2" />
                    <h3 className="font-semibold">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="ferramentas" className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-accent/25 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Layers className="h-7 w-7 text-brand shrink-0" />
                Ferramentas da plataforma
              </h2>
              <p className="text-muted-foreground mb-6">
                Tudo que você precisa para encontrar, disputar e ganhar licitações — em um ecossistema integrado.
              </p>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {ferramentas.map((f) => {
                  const Icon = ferramentaIcons[f.tag] ?? Briefcase;
                  return (
                    <div key={f.nome} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <Icon className="h-5 w-5 text-brand" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand/80 bg-brand/10 px-2 py-0.5 rounded-full">
                          {f.tag}
                        </span>
                      </div>
                      <h3 className="font-semibold">{f.nome}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.descricao}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="ia" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <Bot className="h-7 w-7 text-brand shrink-0" />
                IA especializada para licitantes
              </h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                Inteligência artificial treinada por especialistas em licitações e SICAF — conectada ao seu histórico,
                documentos e oportunidades. Conheça também o{" "}
                <Link to="/assistente" className="text-brand font-medium underline underline-offset-4">
                  Assistente CADBRASIL
                </Link>
                .
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {ferramentasIa.map((f) => (
                  <div key={f.nome} className="rounded-2xl border border-brand/20 bg-brand/5 p-5">
                    <Sparkles className="h-5 w-5 text-brand mb-2" />
                    <h3 className="font-semibold">{f.nome}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="etapas" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <ListChecks className="h-7 w-7 text-brand shrink-0" />
                Acompanhamos você em cada etapa
              </h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                Seu guia durante todo o processo de licitação — do entendimento do mercado ao contrato assinado.
              </p>
              <ol className="space-y-3">
                {etapasProcesso.map((step, index) => (
                  <li
                    key={step.n}
                    id={`etapa-${index + 1}`}
                    className="scroll-mt-32 rounded-2xl border border-border bg-card p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-start shadow-card"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground font-bold text-sm">
                      {step.n}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-lg">{step.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground shrink-0 sm:pt-1">
                      <Clock className="h-3.5 w-3.5" />
                      {step.time}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="sicaf" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">SICAF e assessoria cadastral</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sem <strong className="text-foreground">SICAF regular</strong>, nenhuma plataforma de licitações
                resolve sua operação. A CADBRASIL credencia sua empresa no Compras.gov.br, ativa níveis I a VI e
                monitora certidões — em até 24 horas com documentação organizada.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-4">
                {[
                  "Credenciamento SICAF e emissão de CRC",
                  "Certificado digital e-CNPJ orientado",
                  "Regularidade fiscal e trabalhista",
                  "Renovação automática de certidões",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground rounded-xl border border-border bg-card p-4">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <CadastroLink
                href={CADASTRO_CREDENCIAMENTO_URL}
                className="inline-flex items-center gap-2 text-brand font-semibold hover:underline"
              >
                Iniciar Minha Licitação
                <ArrowRight className="h-4 w-4" />
              </CadastroLink>
            </section>

            <section id="juridico" className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <Scale className="h-7 w-7 text-brand shrink-0" />
                Consultoria jurídica especializada
              </h2>
              <p className="text-muted-foreground mb-6">
                Elimine dúvidas e evite erros. Orientação precisa para tomar decisões corretas em momentos críticos —
                impugnações, recursos e conformidade com a Lei 14.133/2021.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {juridicoBeneficios.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="numeros" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">O mercado de licitações em escala</h2>
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {statsMercado.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center shadow-card">
                    <div className="text-2xl font-bold text-brand tabular-nums">{s.value}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="comparativo" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Operar sozinho vs com CADBRASIL</h2>
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
                    {comparativoLicitacoes.map((row) => (
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Glossário de licitações</h2>
              <dl className="grid sm:grid-cols-2 gap-4">
                {glossarioLicitacoes.map((g) => (
                  <div key={g.term} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <dt className="font-semibold text-foreground">{g.term}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.def}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="fontes" className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-accent/20 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Fontes oficiais e referências</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Os procedimentos oficiais de compras públicas estão nos portais do governo. A CADBRASIL organiza a
                operação do fornecedor — não substitui normas, editais nem manuais oficiais.
              </p>
              <ul className="space-y-3">
                {fontesOficiais.map((f) => (
                  <li key={f.href}>
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-3 rounded-xl border border-border bg-card p-4 hover:border-brand/40 transition"
                    >
                      <ExternalLink className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <span>
                        <span className="font-semibold text-sm text-foreground">{f.label}</span>
                        <span className="block text-xs text-muted-foreground mt-1">{f.nota}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="cadastro" className="scroll-mt-32 mb-14">
              <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/10 via-card to-card p-8 sm:p-10 text-center shadow-card">
                <h2 className="text-2xl sm:text-3xl font-bold">Inicie sua licitação com triagem assistida</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Clique em iniciar para o diagnóstico de credenciamento. Avaliamos perfil, SICAF e certificado
                  digital e encaminhamos sua empresa ao próximo passo.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <IniciarLicitacaoButton className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition" />
                  <WhatsAppLink
                    pageLabel="Plataforma de licitações CADBRASIL"
                    intent="Quero iniciar minha licitação pela página /licitacoes."
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Falar com especialista
                  </WhatsAppLink>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Perguntas frequentes</h2>
              <div className="space-y-3">
                {licitacoesFaqs.map((faq, index) => (
                  <details
                    key={faq.question}
                    id={`faq-${index + 1}`}
                    className="group rounded-2xl border border-border bg-card shadow-card"
                  >
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
