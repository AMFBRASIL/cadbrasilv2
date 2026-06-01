import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Layers,
  ListChecks,
  MessageCircle,
  Shield,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import {
  comparativoCadastro,
  documentosSicaf,
  errosComuns,
  glossarioSicaf,
  guiaFaqs,
  guiaToc,
  niveisSicaf,
  passosOficiais,
  quemPrecisaSicaf,
  relatedGuides,
  usefulLinks,
} from "@/data/guiaCadastroSicaf";
import { PageShell, InlineCta, CADASTRO_URL } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

const PUBLISHED = "15 jan 2026";
const MODIFIED = "27 mai 2026";

const stats = [
  { value: "12+", label: "Documentos mapeados" },
  { value: "6", label: "Níveis explicados" },
  { value: "8", label: "Passos detalhados" },
  { value: "24h", label: "Com CADBRASIL" },
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

export function GuiaCadastroSicafPage() {
  return (
    <PageShell>
      {/* Hero — layout em duas colunas, sem texto centralizado gigante */}
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
                <Sparkles className="h-3 w-3" />
                Guias e tutoriais · 2026
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                Cadastro SICAF 2026:{" "}
                <span className="text-[oklch(0.82_0.08_250)]">passo a passo completo</span>
              </h1>

              <p className="guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Tutorial para credenciar sua empresa no{" "}
                <strong className="text-white font-semibold">SICAF</strong> — documentos, níveis de
                habilitação, certificado digital e como evitar indeferimento com a CADBRASIL.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                Resposta direta: o SICAF é obrigatório para licitar com o governo federal. O cadastro
                oficial é gratuito; o investimento está no certificado digital e na regularidade
                documental.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CADASTRO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[oklch(0.28_0.09_260)] font-semibold shadow-lg hover:scale-[1.02] transition"
                >
                  Fazer cadastro SICAF
                  <ArrowRight className="h-4 w-4" />
                </a>
                <WhatsAppLink
                  pageLabel="Guia cadastro SICAF passo a passo"
                  intent="Estou no guia passo a passo e preciso de ajuda com meu cadastro SICAF."
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

      {/* Meta + TOC mobile */}
      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-[72px] z-30 lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {guiaToc.map((item) => (
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
              <li className="text-foreground font-medium">Cadastro SICAF</li>
            </ol>
          </nav>
          <span className="hidden sm:inline text-border">|</span>
          <span>Atualizado {MODIFIED}</span>
          <span aria-hidden>·</span>
          <span>~12 min de leitura</span>
        </div>

        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          {/* Sidebar desktop */}
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
                {guiaToc.map((item) => (
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
                <p className="text-xs font-semibold text-foreground mb-2">Credenciamento rápido</p>
                <p className="text-xs text-muted-foreground mb-3">
                  Validação de documentos antes do envio oficial.
                </p>
                <a
                  href={CADASTRO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center text-sm font-semibold py-2.5 rounded-xl bg-gradient-brand text-brand-foreground"
                >
                  Iniciar cadastro
                </a>
              </div>
            </nav>
          </aside>

          <article className="min-w-0 prose-guide">
            <section id="o-que-e" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-7 w-7 text-brand shrink-0" />
                O que é o SICAF?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                O <strong className="text-foreground">SICAF (Sistema de Cadastramento Unificado de Fornecedores)</strong>{" "}
                centraliza a habilitação de empresas que vendem para o Governo Federal. Integra o{" "}
                <a
                  href="https://www.gov.br/compras"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand font-medium underline underline-offset-4"
                >
                  Compras.gov.br
                </a>{" "}
                e é adotado por centenas de órgãos estaduais e municipais.
              </p>
              <div className="mt-5 rounded-xl border border-border bg-accent/30 p-4 flex gap-3">
                <Shield className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Base legal:</strong> Lei 14.133/2021 e normas
                  do ecossistema de compras. Manter o SICAF ativo é requisito — não opcional — para
                  fornecedores federais.
                </p>
              </div>
            </section>

            <section id="quem-precisa" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Quem precisa se cadastrar?</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {quemPrecisaSicaf.map((item) => (
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

            <section id="obrigatoriedade" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">O SICAF é obrigatório?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Licitações federais", d: "Obrigatório para o Executivo Federal.", ok: true },
                  { t: "Estados e municípios", d: "Muitos exigem ou consultam o SICAF.", ok: true },
                  { t: "Dispensa e inexigibilidade", d: "Exigem regularidade cadastral.", ok: true },
                  { t: "Contratos em vigor", d: "Irregularidade pode bloquear pagamentos.", ok: false },
                ].map((item) => (
                  <div key={item.t} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <CheckCircle2
                      className={`h-5 w-5 mb-2 ${item.ok ? "text-success" : "text-brand"}`}
                    />
                    <h3 className="font-semibold">{item.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="passo-a-passo" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <ListChecks className="h-7 w-7 text-brand shrink-0" />
                Passo a passo oficial
              </h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                Fluxo no portal do governo. Cada passo abaixo corresponde ao schema HowTo desta página
                (Google e IA).
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
            </section>

            <section
              id="niveis"
              className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-accent/25 p-6 sm:p-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Layers className="h-7 w-7 text-brand shrink-0" />
                Níveis I a VI
              </h2>
              <p className="text-muted-foreground mb-6">
                Cadastrar só o Nível I é um dos erros mais comuns em licitações.
              </p>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {niveisSicaf.map((n) => (
                  <div key={n.n} className="rounded-2xl bg-card border border-border p-5">
                    <div className="h-10 w-10 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center font-bold">
                      {n.n}
                    </div>
                    <h3 className="mt-4 font-semibold">{n.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{n.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="documentos" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-7 w-7 text-brand shrink-0" />
                Documentos para cadastro
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[520px]">
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
                        <td className="p-4 text-muted-foreground">{row.niveis}</td>
                        <td className="p-4 text-muted-foreground">{row.prazo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="certificado-digital" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Certificado digital e-CNPJ</h2>
              <p className="text-muted-foreground leading-relaxed">
                O <strong className="text-foreground">e-CNPJ (A1 ou A3)</strong> é requisito para
                acessar o Compras.gov.br. A1 (arquivo) costuma ser mais prático para equipes remotas;
                A3 (token) é comum em empresas com política de segurança rígida.
              </p>
            </section>

            <section id="custos-prazos" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                <Clock className="h-7 w-7 text-brand shrink-0" />
                Custos e prazos
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[400px]">
                  <thead>
                    <tr className="bg-accent/60">
                      <th className="p-4 text-left font-semibold">Item</th>
                      <th className="p-4 text-left font-semibold">Sozinho</th>
                      <th className="p-4 text-left font-semibold text-brand">Com CADBRASIL</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">Taxa oficial</td>
                      <td className="p-4">Gratuita</td>
                      <td className="p-4">Gratuita</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">Certificado e-CNPJ</td>
                      <td className="p-4">R$ 200–600/ano</td>
                      <td className="p-4">Orientação A1/A3</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">Prazo médio</td>
                      <td className="p-4">1 a 4 semanas</td>
                      <td className="p-4 text-brand font-semibold">Até 24 horas*</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                * Com documentação completa e sem bloqueios fiscais complexos.
              </p>
            </section>

            <section id="renovacao" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Renovação e atualização</h2>
              <p className="text-muted-foreground leading-relaxed">
                As <strong className="text-foreground">certidões vencem</strong> (muitas em 180 dias).
                A CADBRASIL monitora vencimentos com IA pelo{" "}
                <Link to="/assistente" className="text-brand font-medium underline underline-offset-4">
                  Assistente CADBRASIL
                </Link>{" "}
                e na página de{" "}
                <Link to="/renovacao-sicaf" className="text-brand font-medium underline underline-offset-4">
                  renovação SICAF
                </Link>
                .
              </p>
            </section>

            <section id="glossario" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Glossário SICAF</h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                Termos essenciais para entender o cadastro passo a passo — útil para buscas em Google,
                Bing e assistentes de IA.
              </p>
              <dl className="grid sm:grid-cols-2 gap-4">
                {glossarioSicaf.map((g) => (
                  <div key={g.term} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <dt className="font-semibold text-foreground">{g.term}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.def}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="comparativo" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Cadastro sozinho vs com CADBRASIL</h2>
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
              <p className="mt-2 text-xs text-muted-foreground">
                * Prazo de 24 horas com documentação completa e sem bloqueios fiscais complexos.
              </p>
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
                    <Sparkles className="h-3.5 w-3.5" /> Tecnologia + especialistas
                  </span>
                  <h2 className="mt-4 text-2xl sm:text-3xl font-bold">Cadastro com a CADBRASIL</h2>
                  <p className="mt-4 text-white/85 max-w-2xl leading-relaxed">
                    IA valida cada documento antes da submissão. Especialistas concluem credenciamento,
                    emitem CRC e mantêm seu cadastro regular.
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm">
                    {[
                      "Checklist por CNPJ",
                      "Validação com IA",
                      "Entrega em até 24h",
                      "Monitoramento contínuo",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <Bot className="h-4 w-4 shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={CADASTRO_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-brand font-semibold"
                    >
                      Começar cadastro <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      to="/como-funciona"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/30 font-semibold"
                    >
                      Ver processo
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Perguntas frequentes</h2>
              <div className="space-y-3">
                {guiaFaqs.map((faq) => (
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
        title="Comece a vender para o governo hoje"
        subtitle="Cadastre sua empresa no SICAF com assessoria CADBRASIL — tecnologia, IA e equipe especializada."
      />
    </PageShell>
  );
}
