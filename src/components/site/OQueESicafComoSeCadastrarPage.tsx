import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  Key,
  Layers,
  ListChecks,
  MessageCircle,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";
import {
  comparativoCadastro,
  documentosSicaf,
  errosComuns,
  glossarioSicaf,
  niveisSicaf,
  passosOficiais,
  quemPrecisaSicaf,
} from "@/data/guiaCadastroSicaf";
import {
  custosPrazos,
  obrigatoriedade,
  oQueESicafParagrafos,
  passosCadastroResumo,
  relatedGuides,
  resumoInteligente,
  sicafCadastroFaqs,
  sicafCadastroToc,
} from "@/data/oQueESicafComoSeCadastrar";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

const MODIFIED = "29 mai 2026";

const heroStats = [
  { value: "8", label: "Passos oficiais" },
  { value: "6", label: "Níveis de habilitação" },
  { value: "11+", label: "Documentos mapeados" },
  { value: "24h", label: "Com CADBRASIL" },
];

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

export function OQueESicafComoSeCadastrarPage() {
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
                <BookOpen className="h-3 w-3" />
                Guia SICAF · 2026
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                O que é SICAF e{" "}
                <span className="text-[oklch(0.82_0.08_250)]">como se cadastrar</span>
              </h1>

              <p className="guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Guia completo do <strong className="text-white font-semibold">Sistema de Cadastramento Unificado de Fornecedores</strong>{" "}
                — definição, obrigatoriedade, passo a passo no Compras.gov.br, documentos e como habilitar sua empresa.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                Resposta direta: o SICAF é obrigatório para licitar com o governo federal. O cadastro oficial é gratuito;
                você precisa de e-CNPJ, documentos por nível e CRC regular antes de disputar pregões.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CadastroLink className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[oklch(0.28_0.09_260)] font-semibold shadow-lg hover:scale-[1.02] transition">
                  Iniciar cadastro SICAF
                  <ArrowRight className="h-4 w-4" />
                </CadastroLink>
                <WhatsAppLink
                  pageLabel="O que é SICAF e como se cadastrar"
                  intent="Quero entender o SICAF e fazer meu cadastro com a CADBRASIL."
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/15 transition"
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
          {sicafCadastroToc.map((item) => (
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
                <Link to="/faq" className="hover:text-brand">
                  Guias
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">SICAF — o que é e cadastro</li>
            </ol>
          </nav>
          <span className="hidden sm:inline text-border">|</span>
          <span>Atualizado {MODIFIED}</span>
          <span aria-hidden>·</span>
          <span>~14 min de leitura</span>
        </div>

        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice do guia"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Neste guia</p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {sicafCadastroToc.map((item) => (
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
                <CadastroLink className="block w-full text-center text-sm font-semibold py-2.5 rounded-xl bg-gradient-brand text-brand-foreground">
                  Cadastrar no SICAF
                </CadastroLink>
              </div>
            </nav>
          </aside>

          <article className="min-w-0 prose-guide">
            <div className="mb-14 rounded-2xl border border-border bg-accent/30 p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand" />
                Resumo inteligente (IA e buscadores)
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {resumoInteligente.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {passosCadastroResumo.map((p) => (
                <div key={p.n} className="rounded-2xl border border-brand/20 bg-brand/5 p-4">
                  <span className="text-xs font-bold text-brand">Passo {p.n}</span>
                  <h3 className="mt-1 font-semibold text-sm">{p.t}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>

            <section id="o-que-e" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-7 w-7 text-brand shrink-0" />
                O que é SICAF?
              </h2>
              <div className="space-y-4">
                {oQueESicafParagrafos.map((p) => (
                  <div key={p.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <h3 className="font-semibold">{p.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.texto}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Veja também{" "}
                <Link to="/o-que-e-sicaf" className="text-brand font-medium underline underline-offset-4">
                  guia introdutório o que é SICAF
                </Link>{" "}
                e{" "}
                <Link to="/comprasnet" className="text-brand font-medium underline underline-offset-4">
                  Compras.gov.br (Comprasnet)
                </Link>
                .
              </p>
            </section>

            <section id="obrigatorio" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">O SICAF é obrigatório?</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {obrigatoriedade.map((item) => (
                  <div key={item.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <CheckCircle2 className="h-5 w-5 text-success mb-2" />
                    <h3 className="font-semibold">{item.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="quem-pode" className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-accent/25 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-7 w-7 text-brand shrink-0" />
                Quem pode se cadastrar no SICAF?
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {quemPrecisaSicaf.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground rounded-xl border border-border bg-card p-4">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/quem-pode-se-cadastrar-no-sicaf"
                className="inline-flex items-center gap-2 mt-4 text-sm text-brand font-semibold hover:underline"
              >
                Elegibilidade completa por porte (MEI, ME, EPP)
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section id="como-cadastrar" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <ListChecks className="h-7 w-7 text-brand shrink-0" />
                Como se cadastrar no SICAF — passo a passo
              </h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                Fluxo oficial no Compras.gov.br. Schema HowTo desta página para Google e assistentes de IA.
              </p>
              <ol className="space-y-3">
                {passosOficiais.map((step, index) => (
                  <li
                    key={step.n}
                    id={`passo-${index + 1}`}
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
              <Link
                to="/cadastro-sicaf-passo-a-passo"
                className="inline-flex items-center gap-2 mt-6 text-brand font-semibold hover:underline"
              >
                Ver guia passo a passo expandido (8 passos + glossário)
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section id="niveis" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <Layers className="h-7 w-7 text-brand shrink-0" />
                Níveis de habilitação I a VI
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {niveisSicaf.map((n) => (
                  <div key={n.n} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand font-bold text-sm">
                      {n.n}
                    </span>
                    <h3 className="mt-3 font-semibold">{n.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{n.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="documentos" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-7 w-7 text-brand shrink-0" />
                Documentos para cadastro SICAF
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[560px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold">Documento</th>
                      <th className="p-4 font-semibold">Níveis</th>
                      <th className="p-4 font-semibold">Validade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentosSicaf.map((row) => (
                      <tr key={row.doc} className="border-t border-border">
                        <td className="p-4 font-medium">{row.doc}</td>
                        <td className="p-4 text-brand">{row.niveis}</td>
                        <td className="p-4 text-muted-foreground">{row.prazo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link
                to="/documentacao-sicaf"
                className="inline-flex items-center gap-2 mt-4 text-sm text-brand font-semibold hover:underline"
              >
                Checklist interativo completo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section id="certificado" className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-card">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <Key className="h-7 w-7 text-brand shrink-0" />
                Certificado digital e-CNPJ
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para pessoa jurídica, o <strong className="text-foreground">certificado digital e-CNPJ</strong> (A1 ou A3)
                é indispensável para acessar o Compras.gov.br e concluir o credenciamento. Certificado de pessoa física
                (e-CPF) não substitui o e-CNPJ no fluxo de fornecedor.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex gap-2 rounded-xl border border-border bg-accent/30 p-4">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">A1:</strong> arquivo no computador, validade 1 ano — prático para
                    equipes remotas.
                  </span>
                </li>
                <li className="flex gap-2 rounded-xl border border-border bg-accent/30 p-4">
                  <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">A3:</strong> token ou cartão, validade até 3 anos — maior
                    segurança física.
                  </span>
                </li>
              </ul>
            </section>

            <section id="custos" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Custos e prazos reais</h2>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[480px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold">Item</th>
                      <th className="p-4 font-semibold">Custo estimado</th>
                      <th className="p-4 font-semibold">Prazo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {custosPrazos.map((row) => (
                      <tr key={row.item} className="border-t border-border">
                        <td className="p-4 text-muted-foreground">{row.item}</td>
                        <td className="p-4 font-medium">{row.valor}</td>
                        <td className="p-4 text-muted-foreground">{row.prazo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">* Com documentação completa e sem pendências fiscais estruturais.</p>
            </section>

            <section id="comparativo" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Cadastrar sozinho vs com CADBRASIL</h2>
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
                    {comparativoCadastro.map((row) => (
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

            <section id="erros" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-7 w-7 text-brand shrink-0" />
                Erros comuns no cadastro
              </h2>
              <ul className="space-y-2">
                {errosComuns.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground rounded-xl border border-border bg-card p-4">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-14">
              <h2 className="text-xl font-bold mb-4">Glossário SICAF</h2>
              <dl className="grid sm:grid-cols-2 gap-4">
                {glossarioSicaf.map((g) => (
                  <div key={g.term} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <dt className="font-semibold text-foreground">{g.term}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.def}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="faq" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Perguntas frequentes</h2>
              <div className="space-y-3">
                {sicafCadastroFaqs.map((faq) => (
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

            <section id="cadastro" className="scroll-mt-32 mb-14">
              <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/10 via-card to-card p-8 sm:p-10 text-center shadow-card">
                <h2 className="text-2xl sm:text-3xl font-bold">Pronto para se cadastrar no SICAF?</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                  Credenciamento assistido em até 24 horas. Especialistas em SICAF e licitações públicas.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <CadastroLink className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition">
                    Iniciar cadastro SICAF
                    <ArrowRight className="h-4 w-4" />
                  </CadastroLink>
                  <Link
                    to="/planos"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold hover:border-brand/40 transition"
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
