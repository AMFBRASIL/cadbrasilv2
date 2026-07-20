import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  Bot,
  Briefcase,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileCheck,
  FileText,
  FolderOpen,
  Gavel,
  Layers,
  MessageCircle,
  RefreshCw,
  Scale,
  Search,
  Shield,
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";
import {
  consultoriaSuporte,
  diferenciais,
  documentosGerenciados,
  fluxoGestao,
  gestaoDocumentos,
  heroStats,
  pilaresGestao,
  relatedGuides,
  resumoInteligente,
  servicosDocumentacaoFaqs,
  servicosDocumentacaoToc,
  servicosLicitacoes,
  servicosSicaf,
} from "@/data/servicosDocumentacao";
import { PageShell } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

const MODIFIED = "20 jul 2026";

const sicafIcons = {
  shield: Shield,
  layers: Layers,
  refresh: RefreshCw,
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

export function ServicosDocumentacaoPage() {
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
                <FolderOpen className="h-3 w-3" />
                Serviços CADBRASIL · 2026
              </span>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
                Gestão de documentos,{" "}
                <span className="text-[oklch(0.82_0.08_250)]">SICAF e licitações</span>
              </h1>

              <p className="guide-hero-lead mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
                A CADBRASIL organiza, valida e atualiza toda a documentação da sua empresa — do credenciamento SICAF
                aos dossiês de habilitação em pregões — com{" "}
                <strong className="text-white font-semibold">especialistas e tecnologia</strong>.
              </p>

              <p className="guide-summary mt-3 text-sm text-white/65 max-w-xl leading-relaxed">
                Cadastro SICAF assistido em até 24 horas, monitoramento de certidões e plataforma completa para vender
                ao governo com segurança.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CadastroLink className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[oklch(0.28_0.09_260)] font-semibold shadow-lg hover:scale-[1.02] transition">
                  Cadastrar SICAF com CADBRASIL
                  <ArrowRight className="h-4 w-4" />
                </CadastroLink>
                <WhatsAppLink
                  pageLabel="Serviços e documentação CADBRASIL"
                  intent="Quero conhecer os serviços de gestão documental e cadastro SICAF da CADBRASIL."
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
          {servicosDocumentacaoToc.map((item) => (
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
              <li className="text-foreground font-medium">Serviços e documentação</li>
            </ol>
          </nav>
          <span className="hidden sm:inline text-border">|</span>
          <span>Atualizado {MODIFIED}</span>
        </div>

        <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 xl:gap-14 items-start">
          <aside className="hidden lg:block">
            <nav
              aria-label="Índice de serviços CADBRASIL"
              className="sticky top-28 rounded-2xl border border-border bg-card shadow-card overflow-hidden"
            >
              <div className="px-5 py-4 border-b border-border bg-accent/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Nesta página</p>
              </div>
              <ol className="p-3 space-y-0.5 max-h-[calc(100vh-12rem)] overflow-y-auto">
                {servicosDocumentacaoToc.map((item) => (
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
              <div className="p-4 border-t border-border bg-gradient-to-b from-brand/5 to-transparent space-y-2">
                <CadastroLink className="block w-full text-center text-sm font-semibold py-2.5 rounded-xl bg-gradient-brand text-brand-foreground">
                  Cadastrar SICAF
                </CadastroLink>
                <Link
                  to="/planos"
                  className="block w-full text-center text-sm font-medium py-2 rounded-xl border border-border hover:border-brand/40 transition"
                >
                  Ver planos
                </Link>
              </div>
            </nav>
          </aside>

          <article className="min-w-0 prose-guide">
            <div className="mb-14 rounded-2xl border border-border bg-accent/30 p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-brand" />
                Resumo dos serviços CADBRASIL
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

            <section id="visao-geral" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Visão geral</h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6">
                Vender ao Governo Federal exige <strong className="text-foreground">cadastro SICAF regular</strong>,{" "}
                <strong className="text-foreground">documentos válidos</strong> em cada nível de habilitação e{" "}
                <strong className="text-foreground">dossiê completo</strong> para cada edital. A CADBRASIL assume essa
                complexidade: organizamos, validamos, atualizamos no Compras.gov.br e alertamos antes de qualquer
                vencimento.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {pilaresGestao.map((p) => (
                  <div key={p.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <ClipboardList className="h-6 w-6 text-brand mb-3" />
                    <h3 className="font-semibold">{p.titulo}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.descricao}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="gestao-documentos" className="scroll-mt-32 mb-14">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">{gestaoDocumentos.titulo}</h2>
                  <p className="mt-2 text-muted-foreground">{gestaoDocumentos.subtitulo}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {gestaoDocumentos.servicos.map((s) => (
                  <div key={s.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card hover:border-brand/30 transition">
                    <h3 className="font-semibold flex items-center gap-2">
                      <FileCheck className="h-4 w-4 text-brand shrink-0" />
                      {s.titulo}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.descricao}</p>
                    <ul className="mt-3 space-y-1.5">
                      {s.itens.map((item) => (
                        <li key={item} className="flex gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section id="servicos-sicaf" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Shield className="h-7 w-7 text-brand shrink-0" />
                Serviços SICAF
              </h2>
              <p className="text-muted-foreground mb-6">
                Do credenciamento inicial à manutenção contínua — incluindo cadastro completo com a CADBRASIL.
              </p>
              <div className="space-y-6">
                {servicosSicaf.map((cat) => {
                  const Icon = sicafIcons[cat.icon as keyof typeof sicafIcons] ?? Shield;
                  return (
                    <div
                      key={cat.categoria}
                      className="rounded-2xl border border-border bg-gradient-to-br from-brand/5 to-card p-6 shadow-card"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">{cat.categoria}</h3>
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {cat.servicos.map((s) => (
                          <li key={s} className="flex gap-2 text-sm bg-card/80 border border-border rounded-lg px-3 py-2">
                            <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <CadastroLink className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow">
                  Fazer cadastro SICAF agora
                  <ArrowRight className="h-4 w-4" />
                </CadastroLink>
                <Link
                  to="/cadastro-sicaf-passo-a-passo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                >
                  Ver passo a passo
                </Link>
                <Link
                  to="/sicaf-niveis"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                >
                  Manual dos 6 níveis
                </Link>
              </div>
            </section>

            <section id="documentos-gerenciados" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Documentos que gerenciamos</h2>
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-card">
                <table className="w-full text-sm min-w-[560px]">
                  <thead className="bg-accent/60 text-left">
                    <tr>
                      <th className="p-4 font-semibold">Documento</th>
                      <th className="p-4 font-semibold">Nível SICAF</th>
                      <th className="p-4 font-semibold">Tipo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentosGerenciados.map((row) => (
                      <tr key={row.doc} className="border-t border-border">
                        <td className="p-4 font-medium">{row.doc}</td>
                        <td className="p-4">
                          <span className="inline-flex items-center rounded-full bg-brand/10 text-brand text-xs font-semibold px-2.5 py-0.5">
                            {row.nivel}
                          </span>
                        </td>
                        <td className="p-4 text-muted-foreground">{row.tipo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="servicos-licitacoes" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-2">
                <Gavel className="h-7 w-7 text-brand shrink-0" />
                Licitações e pregão
              </h2>
              <p className="text-muted-foreground mb-6">
                Além da documentação, a CADBRASIL apoia toda a operação licitatória da sua empresa.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {servicosLicitacoes.map((s) => (
                  <div key={s.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card">
                    <Briefcase className="h-5 w-5 text-brand mb-2" />
                    <h3 className="font-semibold text-sm">{s.titulo}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.descricao}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  to="/licitacoes"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                >
                  Conhecer a plataforma completa de licitações
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            <section id="consultoria" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Consultoria e suporte</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {consultoriaSuporte.map((s) => {
                  const icons = [Scale, Bot, MessageCircle, Briefcase];
                  const idx = consultoriaSuporte.indexOf(s);
                  const Icon = icons[idx] ?? MessageCircle;
                  return (
                    <div key={s.titulo} className="rounded-2xl border border-border bg-card p-5 shadow-card flex gap-4">
                      <Icon className="h-6 w-6 text-brand shrink-0" />
                      <div>
                        <h3 className="font-semibold">{s.titulo}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{s.descricao}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="como-funciona" className="scroll-mt-32 mb-14 rounded-3xl border border-border bg-accent/25 p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
                <Clock className="h-7 w-7 text-brand shrink-0" />
                Como funciona a gestão documental
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {fluxoGestao.map((passo) => (
                  <div key={passo.n} className="relative rounded-2xl border border-border bg-card p-4 text-center shadow-sm">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground font-bold text-sm">
                      {passo.n}
                    </div>
                    <h3 className="mt-3 font-semibold text-sm">{passo.titulo}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{passo.descricao}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid sm:grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-border bg-card p-4">
                  <Upload className="h-5 w-5 text-brand mx-auto mb-2" />
                  <p className="text-xs font-medium">Você envia os PDFs</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <Bell className="h-5 w-5 text-brand mx-auto mb-2" />
                  <p className="text-xs font-medium">Nós monitoramos prazos</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <Zap className="h-5 w-5 text-brand mx-auto mb-2" />
                  <p className="text-xs font-medium">SICAF atualizado e apto</p>
                </div>
              </div>
            </section>

            <section id="diferenciais" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Por que escolher a CADBRASIL</h2>
              <ul className="space-y-3">
                {diferenciais.map((d) => (
                  <li key={d} className="flex gap-3 text-sm bg-card border border-border rounded-xl p-4 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </section>

            <section id="cadastro-sicaf" className="scroll-mt-32 mb-14">
              <div className="rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/10 via-card to-card p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-brand-foreground shadow-glow">
                    <Shield className="h-10 w-10" />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold">Cadastre seu SICAF com a CADBRASIL</h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      Credenciamento completo, regularização dos níveis I a VI, gestão documental e CRC Regular — com
                      equipe especializada e entrega em até <strong className="text-foreground">24 horas</strong> quando
                      a documentação está completa.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
                      <CadastroLink className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow">
                        Iniciar cadastro SICAF
                        <ArrowRight className="h-4 w-4" />
                      </CadastroLink>
                      <Link
                        to="/licitacoes-cadastro"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                      >
                        Testar plataforma
                      </Link>
                      <WhatsAppLink
                        pageLabel="Cadastro SICAF CADBRASIL"
                        intent="Quero fazer o cadastro SICAF da minha empresa com a CADBRASIL."
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card font-semibold hover:border-brand/40 transition"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </WhatsAppLink>
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground">
                      MEI, ME, EPP, LTDA, S/A e EIRELI · Todo o Brasil ·{" "}
                      <Link to="/planos" className="text-brand hover:underline">
                        Ver planos e preços
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Perguntas frequentes</h2>
              <div className="space-y-3">
                {servicosDocumentacaoFaqs.map((faq) => (
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
