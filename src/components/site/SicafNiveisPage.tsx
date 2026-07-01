import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Bot,
  Building2,
  CheckCircle2,
  Cpu,
  FileCheck,
  FileText,
  Layers,
  MapPin,
  MessageCircle,
  RefreshCw,
  Scale,
  Shield,
  Sparkles,
  Trash2,
  Upload,
  Zap,
} from "lucide-react";
import {
  nivelIContent,
  nivelIIContent,
  nivelIIIContent,
  nivelIVContent,
  nivelVContent,
  nivelVIContent,
  niveisResumoTabela,
  recomendacoes,
  relatedGuides,
  resumoInteligente,
  sicafNiveisFaqs,
  sicafNiveisToc,
} from "@/data/sicafNiveis";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

const MODIFIED = "29 mai 2026";

const levelVisual = {
  I: { icon: Building2, gradient: "from-sky-500/20 to-sky-500/5", border: "border-sky-500/35", badge: "bg-sky-600" },
  II: { icon: Scale, gradient: "from-indigo-500/20 to-indigo-500/5", border: "border-indigo-500/35", badge: "bg-indigo-600" },
  III: { icon: Shield, gradient: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/35", badge: "bg-emerald-600" },
  IV: { icon: MapPin, gradient: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/35", badge: "bg-amber-600" },
  V: { icon: Award, gradient: "from-violet-500/20 to-violet-500/5", border: "border-violet-500/35", badge: "bg-violet-600" },
  VI: { icon: BarChart3, gradient: "from-teal-500/20 to-teal-500/5", border: "border-teal-500/35", badge: "bg-teal-600" },
} as const;

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

function NiveisDiagram() {
  const items = ["I", "II", "III", "IV", "V", "VI"] as const;
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card" aria-hidden>
      <svg viewBox="0 0 400 220" className="w-full max-w-md mx-auto" role="img" aria-label="Diagrama dos 6 níveis SICAF">
        <title>6 níveis SICAF de I a VI</title>
        {items.map((n, i) => {
          const w = 60 + i * 48;
          const x = 200 - w / 2;
          const y = 20 + i * 32;
          const colors = ["#0284c7", "#4f46e5", "#059669", "#d97706", "#7c3aed", "#0d9488"];
          return (
            <g key={n}>
              <rect x={x} y={y} width={w} height={28} rx={6} fill={colors[i]} opacity={0.9} />
              <text x={200} y={y + 19} textAnchor="middle" fill="white" fontSize={13} fontWeight="bold">
                Nível {n}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="text-center text-xs text-muted-foreground mt-2">
        Cada nível complementa a habilitação do fornecedor
      </p>
    </div>
  );
}

function LevelBadge({ numero }: { numero: keyof typeof levelVisual }) {
  const v = levelVisual[numero];
  const Icon = v.icon;
  return (
    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${v.badge} text-white shadow-lg`}>
      <Icon className="h-7 w-7" aria-hidden />
    </div>
  );
}

function AutoBadge({ automatico }: { automatico: boolean }) {
  return automatico ? (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full">
      <Cpu className="h-3.5 w-3.5" />
      Consulta automática
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full">
      <Upload className="h-3.5 w-3.5" />
      Atualização manual
    </span>
  );
}

export function SicafNiveisPage() {
  return (
    <PageShell>
      <section className="relative pt-24 sm:pt-28 pb-20 sm:pb-24 overflow-hidden bg-[oklch(0.22_0.08_260)]">
        <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
        <div className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-brand/30 blur-3xl" aria-hidden />
        <HeroWave />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14 items-center">
            <div className="text-white">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/70 border border-white/20 rounded-full px-3 py-1">
                <Layers className="h-3 w-3" />
                Manual de treinamento · CADBRASIL
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                Atualização dos{" "}
                <span className="text-[oklch(0.82_0.08_250)]">Níveis do SICAF</span>
              </h1>

              <p className="guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                Guia oficial ilustrado dos <strong className="text-white font-semibold">6 níveis de cadastramento</strong>{" "}
                — do credenciamento à qualificação econômico-financeira. Passo a passo para manter sua empresa apta a
                licitar.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                Antes de atualizar, acesse o Portal do Fornecedor (Compras.gov.br) e entre no menu{" "}
                <strong className="text-white/90">SICAF</strong>. Cada nível tem procedimento específico — o IV exige
                exclusão antes de recadastrar certidões.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CadastroLink className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[oklch(0.28_0.09_260)] font-semibold shadow-lg hover:scale-[1.02] transition">
                  Atualizar meu SICAF
                  <ArrowRight className="h-4 w-4" />
                </CadastroLink>
                <Link
                  to="/assistente"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/25 text-white font-semibold hover:bg-white/15 transition"
                >
                  <Bot className="h-4 w-4" />
                  Assistente CADBRASIL
                </Link>
              </div>
            </div>

            <div className="hidden sm:block rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-5">
              <NiveisDiagram />
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-[72px] z-30 lg:hidden">
        <div className="mx-auto max-w-7xl px-4 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {sicafNiveisToc.map((item) => (
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
              <li className="text-foreground font-medium">Níveis SICAF</li>
            </ol>
          </nav>
          <span className="hidden sm:inline text-border">|</span>
          <span>Atualizado {MODIFIED}</span>
          <span aria-hidden>·</span>
          <span>~12 min de leitura</span>
        </div>

        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice dos níveis SICAF"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Neste manual</p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {sicafNiveisToc.map((item) => (
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
                  Suporte SICAF
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

            <section id="introducao" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-7 w-7 text-brand shrink-0" />
                Introdução
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4">
                O <strong className="text-foreground">Sistema de Cadastramento Unificado de Fornecedores (SICAF)</strong>{" "}
                é dividido em <strong className="text-foreground">6 níveis de cadastramento</strong>, cada um com finalidade
                específica. A atualização correta de todos os níveis é fundamental para participar de licitações e
                contratações junto ao Governo Federal.
              </p>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5 flex gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Importante:</strong> antes de iniciar qualquer atualização, acesse o{" "}
                  <strong className="text-foreground">Portal do Fornecedor</strong> e entre no menu{" "}
                  <strong className="text-foreground">SICAF</strong>. Cada nível será atualizado conforme as orientações
                  deste manual.
                </p>
              </div>
            </section>

            <section id="visao-geral" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Visão geral dos 6 níveis</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {niveisResumoTabela.map((n) => {
                  const v = levelVisual[n.nivel as keyof typeof levelVisual];
                  const Icon = v.icon;
                  return (
                    <a
                      key={n.nivel}
                      href={`#nivel-${n.nivel === "I" ? "i" : n.nivel === "II" ? "ii" : n.nivel === "III" ? "iii" : n.nivel === "IV" ? "iv" : n.nivel === "V" ? "v" : "vi"}`}
                      className={`group rounded-2xl border ${v.border} bg-gradient-to-br ${v.gradient} p-5 shadow-card hover:shadow-glow transition`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${v.badge} text-white`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground">Nível {n.nivel}</p>
                          <p className="font-semibold text-sm leading-tight group-hover:text-brand transition">{n.nome}</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{n.atualizacao}</p>
                    </a>
                  );
                })}
              </div>
              <div className="sm:hidden">
                <NiveisDiagram />
              </div>
            </section>

            {/* NÍVEL I */}
            <section
              id={nivelIContent.id}
              className={`scroll-mt-32 mb-14 rounded-3xl border ${levelVisual.I.border} bg-gradient-to-br ${levelVisual.I.gradient} p-6 sm:p-8`}
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
                <LevelBadge numero="I" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-700">Nível I</p>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">{nivelIContent.titulo}</h2>
                  <p className="text-muted-foreground mt-2">{nivelIContent.subtitulo}</p>
                  <div className="mt-3">
                    <AutoBadge automatico={nivelIContent.automatico} />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-muted-foreground leading-relaxed">{nivelIContent.destaque}</p>
              <h3 className="mt-6 font-semibold flex items-center gap-2">
                <FileText className="h-4 w-4 text-sky-600" />
                Principais informações
              </h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                {nivelIContent.campos.map((c) => (
                  <li key={c} className="flex items-center gap-2 text-sm bg-card/80 border border-border rounded-lg px-3 py-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-foreground">
                <Zap className="h-4 w-4 inline text-sky-600 mr-1" />
                Objetivo: {nivelIContent.objetivo}
              </p>
            </section>

            {/* NÍVEL II */}
            <section
              id={nivelIIContent.id}
              className={`scroll-mt-32 mb-14 rounded-3xl border ${levelVisual.II.border} bg-gradient-to-br ${levelVisual.II.gradient} p-6 sm:p-8`}
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
                <LevelBadge numero="II" />
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">Nível II</p>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">{nivelIIContent.titulo}</h2>
                  <p className="text-muted-foreground mt-2">{nivelIIContent.subtitulo}</p>
                  <div className="mt-3">
                    <AutoBadge automatico={nivelIIContent.automatico} />
                  </div>
                </div>
              </div>
              <h3 className="mt-6 font-semibold">Documentos e informações</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-3">
                {nivelIIContent.exemplos.map((e) => (
                  <div key={e} className="flex gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                    <Scale className="h-5 w-5 text-indigo-600 shrink-0" />
                    <span className="text-sm">{e}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-medium">
                <Zap className="h-4 w-4 inline text-indigo-600 mr-1" />
                Objetivo: {nivelIIContent.objetivo}
              </p>
            </section>

            {/* NÍVEL III */}
            <section
              id={nivelIIIContent.id}
              className={`scroll-mt-32 mb-14 rounded-3xl border ${levelVisual.III.border} bg-gradient-to-br ${levelVisual.III.gradient} p-6 sm:p-8`}
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
                <LevelBadge numero="III" />
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Nível III</p>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">{nivelIIIContent.titulo}</h2>
                  <p className="text-muted-foreground mt-2">{nivelIIIContent.subtitulo}</p>
                  <div className="mt-3">
                    <AutoBadge automatico={nivelIIIContent.automatico} />
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Normalmente o fornecedor <strong className="text-foreground">não precisa anexar documentos manualmente</strong>.
                  O sistema consulta automaticamente os órgãos abaixo.
                </p>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {nivelIIIContent.orgaos.map((o) => (
                  <div key={o} className="flex items-center gap-2 text-sm bg-card border border-border rounded-lg px-3 py-2.5">
                    <RefreshCw className="h-4 w-4 text-emerald-600 shrink-0" />
                    {o}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-amber-800 bg-amber-500/10 border border-amber-500/25 rounded-lg p-3">
                {nivelIIIContent.alerta}
              </p>
            </section>

            {/* NÍVEL IV */}
            <section
              id={nivelIVContent.id}
              className={`scroll-mt-32 mb-14 rounded-3xl border-2 ${levelVisual.IV.border} bg-gradient-to-br ${levelVisual.IV.gradient} p-6 sm:p-8 ring-2 ring-amber-500/10`}
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
                <LevelBadge numero="IV" />
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Nível IV — Atenção especial</p>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">{nivelIVContent.titulo}</h2>
                  <p className="text-muted-foreground mt-2">{nivelIVContent.subtitulo}</p>
                  <div className="mt-3">
                    <AutoBadge automatico={nivelIVContent.automatico} />
                  </div>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-4">
                {nivelIVContent.passos.map((passo, i) => (
                  <div
                    key={passo.n}
                    id={`nivel-iv-passo-${i + 1}`}
                    className="scroll-mt-32 relative rounded-2xl border border-amber-500/30 bg-card p-5 shadow-card text-center"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white font-bold text-lg">
                      {passo.n}
                    </div>
                    {passo.n === "2" && <Trash2 className="h-6 w-6 text-amber-600 mx-auto mt-3" />}
                    {passo.n === "3" && <Upload className="h-6 w-6 text-amber-600 mx-auto mt-3" />}
                    {passo.n === "1" && <FileCheck className="h-6 w-6 text-amber-600 mx-auto mt-3" />}
                    <h3 className="mt-3 font-semibold">{passo.titulo}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{passo.descricao}</p>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 font-semibold">Campos obrigatórios no recadastro</h3>
              <div className="mt-3 grid sm:grid-cols-3 gap-3">
                {nivelIVContent.camposObrigatorios.map((c) => (
                  <div key={c.campo} className="rounded-xl border border-border bg-card p-4">
                    <p className="font-semibold text-sm text-amber-800">{c.campo}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{c.dica}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-destructive/20 bg-destructive/5 p-5">
                <h3 className="font-semibold flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Confirme antes de salvar
                </h3>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                  {nivelIVContent.checklist.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  Informação incorreta pode impedir a habilitação em processos licitatórios.
                </p>
              </div>
            </section>

            {/* NÍVEL V */}
            <section
              id={nivelVContent.id}
              className={`scroll-mt-32 mb-14 rounded-3xl border ${levelVisual.V.border} bg-gradient-to-br ${levelVisual.V.gradient} p-6 sm:p-8`}
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
                <LevelBadge numero="V" />
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-violet-700">Nível V</p>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">{nivelVContent.titulo}</h2>
                  <p className="text-muted-foreground mt-2">{nivelVContent.subtitulo}</p>
                </div>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {nivelVContent.categorias.map((cat) => (
                  <div key={cat.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <Award className="h-6 w-6 text-violet-600 mb-2" />
                    <h3 className="font-semibold">{cat.titulo}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{cat.descricao}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {cat.itens.map((item) => (
                        <li
                          key={item}
                          className="text-[11px] font-medium bg-violet-500/10 text-violet-800 border border-violet-500/20 px-2 py-0.5 rounded-full"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-medium">
                <Zap className="h-4 w-4 inline text-violet-600 mr-1" />
                Objetivo: {nivelVContent.objetivo}
              </p>
            </section>

            {/* NÍVEL VI */}
            <section
              id={nivelVIContent.id}
              className={`scroll-mt-32 mb-14 rounded-3xl border ${levelVisual.VI.border} bg-gradient-to-br ${levelVisual.VI.gradient} p-6 sm:p-8`}
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:items-start">
                <LevelBadge numero="VI" />
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-700">Nível VI</p>
                  <h2 className="text-2xl sm:text-3xl font-bold mt-1">{nivelVIContent.titulo}</h2>
                  <p className="text-muted-foreground mt-2">{nivelVIContent.subtitulo}</p>
                </div>
              </div>
              <div className="mt-6 grid lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-teal-600" />
                    Dados solicitados
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {nivelVIContent.documentos.map((d) => (
                      <li key={d} className="flex gap-2 text-sm bg-card border border-border rounded-lg px-3 py-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold flex items-center gap-2">
                    <FileText className="h-4 w-4 text-teal-600" />
                    Anexos frequentes
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {nivelVIContent.anexos.map((d) => (
                      <li key={d} className="flex gap-2 text-sm bg-card border border-border rounded-lg px-3 py-2">
                        <Upload className="h-4 w-4 text-teal-600 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm font-medium">
                <Zap className="h-4 w-4 inline text-teal-600 mr-1" />
                Objetivo: {nivelVIContent.objetivo}
              </p>
            </section>

            <section id="resumo" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Resumo dos níveis</h2>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[520px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold">Nível</th>
                      <th className="p-4 font-semibold">Descrição</th>
                      <th className="p-4 font-semibold">Atualização</th>
                    </tr>
                  </thead>
                  <tbody>
                    {niveisResumoTabela.map((row) => {
                      const v = levelVisual[row.nivel as keyof typeof levelVisual];
                      const Icon = v.icon;
                      return (
                        <tr key={row.nivel} className="border-t border-border">
                          <td className="p-4">
                            <span className="inline-flex items-center gap-2 font-semibold">
                              <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${v.badge} text-white text-xs`}>
                                <Icon className="h-4 w-4" />
                              </span>
                              Nível {row.nivel}
                            </span>
                          </td>
                          <td className="p-4 font-medium">{row.nome}</td>
                          <td className="p-4 text-muted-foreground">{row.atualizacao}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="recomendacoes" className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-accent/25 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Recomendações importantes</h2>
              <ul className="space-y-3">
                {recomendacoes.map((r) => (
                  <li key={r} className="flex gap-3 text-sm bg-card border border-border rounded-xl p-4 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </section>

            <section id="cadbrasil" className="scroll-mt-32 mb-14">
              <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/10 via-card to-card p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow">
                    <Bot className="h-10 w-10" />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold">Conte com a CADBRASIL</h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      Utilize o <strong className="text-foreground">Assistente Inteligente CADBRASIL</strong> para conduzir
                      todo o processo passo a passo. A Central de Ajuda oferece vídeos, orientações detalhadas e suporte
                      especializado para atualizar corretamente todos os níveis.
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Manter o cadastro atualizado é essencial para licitar com segurança e conformidade.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                      <Link
                        to="/assistente"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow"
                      >
                        <Bot className="h-4 w-4" />
                        Assistente CADBRASIL
                      </Link>
                      <WhatsAppLink
                        pageLabel="Níveis SICAF"
                        intent="Tenho dúvidas sobre atualização dos níveis do SICAF."
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Falar com especialista
                      </WhatsAppLink>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Perguntas frequentes</h2>
              <div className="space-y-3">
                {sicafNiveisFaqs.map((faq) => (
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
