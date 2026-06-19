import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  Layers,
  ListChecks,
  MessageCircle,
  Monitor,
  Shield,
  Sparkles,
  AlertTriangle,
  Zap,
} from "lucide-react";
import {
  beneficios,
  comparativoComprasnet,
  comprasnetFaqs,
  comprasnetToc,
  errosComuns,
  glossarioComprasnet,
  modulosPrincipais,
  paraQueServe,
  passosAcesso,
  quemUsa,
  relatedGuides,
  resumoInteligente,
  usefulLinks,
} from "@/data/comprasnet";
import { PageShell, InlineCta, CADASTRO_URL } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

const MODIFIED = "29 mai 2026";

const stats = [
  { value: "6+", label: "Módulos principais" },
  { value: "200k+", label: "Órgãos no ecossistema" },
  { value: "24h", label: "SICAF com CADBRASIL" },
  { value: "100%", label: "Pregão digital federal" },
];

function HeroWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none" aria-hidden>
      <svg
        className="relative block w-full h-12 sm:h-16 text-background"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,40C672,37,768,43,864,45.3C960,48,1056,48,1152,42.7C1248,37,1344,27,1392,21.3L1440,16L1440,64L0,64Z"
        />
      </svg>
    </div>
  );
}

export function ComprasnetPage() {
  return (
    <PageShell>
      <section className="relative pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden bg-[oklch(0.22_0.08_260)]">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
        <div
          className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand/30 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[oklch(0.35_0.12_250)]/40 blur-3xl"
          aria-hidden
        />
        <HeroWave />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-3 py-1">
                <Monitor className="h-3 w-3" />
                Compras públicas · 2026
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                Comprasnet:{" "}
                <span className="text-[oklch(0.82_0.08_250)]">o que é e para que serve</span>
              </h1>

              <p className="guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Guia completo sobre o{" "}
                <strong className="text-white font-semibold">Comprasnet</strong> — portal federal de
                compras públicas hoje em{" "}
                <strong className="text-white font-semibold">Compras.gov.br</strong>, integrado ao
                SICAF, pregão eletrônico e licitações.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                {resumoInteligente[0]} {resumoInteligente[2]}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CadastroLink
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[oklch(0.28_0.09_260)] font-semibold shadow-lg hover:scale-[1.02] transition"
                >
                  Credenciar no SICAF
                  <ArrowRight className="h-4 w-4" />
                </CadastroLink>
                <WhatsAppLink
                  pageLabel="Guia Comprasnet"
                  intent="Quero entender o Comprasnet e credenciar minha empresa no SICAF."
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/15 transition"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar com especialista
                </WhatsAppLink>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
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
          {comprasnetToc.map((item) => (
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
              <li className="text-foreground font-medium">Comprasnet</li>
            </ol>
          </nav>
          <span className="hidden sm:inline text-border">|</span>
          <span>Atualizado {MODIFIED}</span>
          <span aria-hidden>·</span>
          <span>~10 min de leitura</span>
        </div>

        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice do guia"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Neste guia
                </p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {comprasnetToc.map((item) => (
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
                <p className="text-xs font-semibold text-foreground mb-2">SICAF no Compras.gov.br</p>
                <p className="text-xs text-muted-foreground mb-3">
                  Credenciamento assistido em até 24 horas.
                </p>
                <CadastroLink
                  className="block w-full text-center text-sm font-semibold py-2.5 rounded-xl bg-gradient-brand text-brand-foreground"
                >
                  Iniciar cadastro
                </CadastroLink>
              </div>
            </nav>
          </aside>

          <article className="min-w-0 prose-guide">
            <div className="comprasnet-resumo mb-14 rounded-2xl border border-border bg-accent/30 p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-brand" />
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

            <section id="o-que-e" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-7 w-7 text-brand shrink-0" />
                O que é Comprasnet?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                <strong className="text-foreground">Comprasnet</strong> é o nome histórico do sistema de
                compras eletrônicas do Governo Federal brasileiro. Hoje, a plataforma oficial e
                modernizada é o{" "}
                <a
                  href="https://www.gov.br/compras"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand font-medium underline underline-offset-4"
                >
                  Compras.gov.br
                </a>
                , mantido pelo Ministério da Gestão e da Inovação em Serviços Públicos.
              </p>
              <div className="mt-5 rounded-xl border border-border bg-accent/30 p-4 flex gap-3">
                <Shield className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Para fornecedores:</strong> quando o mercado fala
                  em &quot;credenciar no Comprasnet&quot;, na prática significa cadastrar-se no{" "}
                  <strong className="text-foreground">SICAF</strong> dentro do Compras.gov.br para
                  participar de licitações federais.
                </p>
              </div>
            </section>

            <section id="para-que-serve" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Para que serve o Comprasnet?</h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                O portal conecta administração pública e fornecedores em um ambiente digital único para
                todo o ciclo de compras — da publicação do edital à execução contratual.
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

            <section id="beneficios" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Benefícios do Comprasnet</h2>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {beneficios.map((b) => (
                  <div key={b.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <CheckCircle2 className="h-5 w-5 text-success mb-2" />
                    <h3 className="font-semibold">{b.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.descricao}</p>
                    <p className="mt-3 text-xs font-medium text-brand">{b.publico}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="modulos"
              className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-accent/25 p-6 sm:p-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Layers className="h-7 w-7 text-brand shrink-0" />
                Módulos principais
              </h2>
              <p className="text-muted-foreground mb-6">
                O ecossistema Compras.gov.br reúne funcionalidades que o mercado ainda agrupa sob o nome
                Comprasnet.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[560px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold">Módulo</th>
                      <th className="p-4 font-semibold">Função</th>
                      <th className="p-4 font-semibold">Uso prático</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modulosPrincipais.map((row) => (
                      <tr key={row.modulo} className="border-t border-border">
                        <td className="p-4 font-medium text-brand">{row.modulo}</td>
                        <td className="p-4 text-muted-foreground">{row.funcao}</td>
                        <td className="p-4 text-muted-foreground">{row.uso}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="sicaf" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comprasnet e SICAF</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O <strong className="text-foreground">SICAF</strong> é o coração do cadastro de
                fornecedores dentro do Compras.gov.br. Sem credenciamento ativo e{" "}
                <Link to="/emitir-crc" className="text-brand font-medium underline underline-offset-4">
                  CRC regular
                </Link>
                , a empresa não habilita em licitações federais — mesmo com proposta vencedora.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Credenciamento com certificado e-CNPJ no portal",
                  "Níveis de habilitação I a VI conforme edital",
                  "Cruzamento automático de certidões fiscais",
                  "Emissão de CRC e monitoramento de status",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-muted-foreground rounded-xl border border-border bg-card p-4"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Veja o{" "}
                <Link
                  to="/cadastro-sicaf-passo-a-passo"
                  className="text-brand font-medium underline underline-offset-4"
                >
                  guia passo a passo de cadastro SICAF
                </Link>{" "}
                ou o fluxo{" "}
                <Link
                  to="/como-cadastrar-no-sicaf-e-vender-para-o-governo"
                  className="text-brand font-medium underline underline-offset-4"
                >
                  cadastrar e vender ao governo
                </Link>
                .
              </p>
            </section>

            <section id="como-acessar" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <ListChecks className="h-7 w-7 text-brand shrink-0" />
                Como acessar o Comprasnet
              </h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                Passo a passo para fornecedores — schema HowTo desta página para Google e assistentes de
                IA.
              </p>
              <ol className="space-y-3">
                {passosAcesso.map((step, index) => (
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
            </section>

            <section id="quem-usa" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Quem usa o Comprasnet?</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {quemUsa.map((item) => (
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Glossário Comprasnet</h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                Termos essenciais para buscas em Google, Bing e assistentes de IA sobre compras
                públicas federais.
              </p>
              <dl className="grid sm:grid-cols-2 gap-4">
                {glossarioComprasnet.map((g) => (
                  <div key={g.term} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <dt className="font-semibold text-foreground">{g.term}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.def}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="comparativo" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Comprasnet sozinho vs com CADBRASIL</h2>
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
                    {comparativoComprasnet.map((row) => (
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

            <section id="erros-comuns" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-7 w-7 text-amber-600 shrink-0" />
                Erros comuns
              </h2>
              <ul className="space-y-2">
                {errosComuns.map((err) => (
                  <li
                    key={err}
                    className="flex gap-3 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 text-sm text-muted-foreground"
                  >
                    <span className="text-amber-600 font-bold shrink-0">×</span>
                    {err}
                  </li>
                ))}
              </ul>
            </section>

            <section id="cadbrasil" className="scroll-mt-32 mb-14">
              <div className="rounded-3xl bg-gradient-brand p-8 sm:p-10 text-brand-foreground shadow-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold bg-white/15 px-3 py-1.5 rounded-full">
                    <Sparkles className="h-3.5 w-3.5" /> Especialistas em Compras.gov.br
                  </span>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-bold">
                    SICAF no Comprasnet com a CADBRASIL
                  </h2>
                  <p className="mt-4 text-white/85 max-w-2xl leading-relaxed">
                    Credenciamento assistido no Compras.gov.br, validação documental com IA, emissão de
                    CRC e monitoramento contínuo para sua empresa vender ao governo.
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
                    {[
                      "Cadastro em até 24h",
                      "Checklist por CNPJ",
                      "Níveis I a VI",
                      "Alertas de certidões",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <Bot className="h-4 w-4 shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <CadastroLink
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand font-semibold"
                    >
                      Começar cadastro <ArrowRight className="h-4 w-4" />
                    </CadastroLink>
                    <Link
                      to="/pregao-eletronico"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/30 font-semibold"
                    >
                      Pregão eletrônico
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Perguntas frequentes</h2>
              <div className="space-y-3">
                {comprasnetFaqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-border bg-card shadow-card overflow-hidden"
                  >
                    <summary className="cursor-pointer p-5 font-semibold list-none flex items-center justify-between gap-4 hover:bg-accent/50 transition">
                      {faq.question}
                      <span className="text-brand text-xl group-open:rotate-45 transition shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-8 grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-brand" />
                  Conteúdo relacionado
                </h2>
                <ul className="space-y-2">
                  {relatedGuides.map((g) => (
                    <li key={g.to}>
                      <Link
                        to={g.to}
                        className="text-brand text-sm font-medium hover:underline underline-offset-4"
                      >
                        {g.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-brand" />
                  Links úteis
                </h2>
                <ul className="space-y-2">
                  {usefulLinks.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-brand text-sm font-medium hover:underline underline-offset-4"
                      >
                        {l.label} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </article>
        </div>
      </div>

      <InlineCta
        title="Credencie sua empresa no Compras.gov.br"
        subtitle="Cadastro SICAF assistido pela CADBRASIL — do Comprasnet ao primeiro pregão, com tecnologia e especialistas."
      />
    </PageShell>
  );
}
