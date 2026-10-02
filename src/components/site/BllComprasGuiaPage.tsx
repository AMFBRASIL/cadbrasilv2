"use client";

import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileText,
  Info,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { BllFeeCalculator } from "@/components/site/bll/BllFeeCalculator";
import { FaqList } from "@/components/site/cadbrasil/FaqList";
import { LandingFloatingCta } from "@/components/site/cadbrasil/LandingFloatingCta";
import { LandingFooter } from "@/components/site/cadbrasil/LandingFooter";
import { LandingHeader } from "@/components/site/cadbrasil/LandingHeader";
import { LeadForm } from "@/components/site/cadbrasil/LeadForm";
import { SectionHeading } from "@/components/site/cadbrasil/SectionHeading";
import { LEAD_FORM_ANCHOR, btnPrimary, btnSecondary } from "@/components/site/cadbrasil/styles";
import {
  BLL_PAGE_LABEL,
  bllBoasPraticas,
  bllCadastroPassos,
  bllCadbrasilAjuda,
  bllComparativo,
  bllDocumentosCadastro,
  bllDocumentosHabilitacao,
  bllErros,
  bllFaqs,
  bllFases,
  bllFontes,
  bllMeEpp,
  bllMeta,
  bllModalidades,
  bllOQueE,
  bllPlanos,
  bllPublicaOuPrivada,
  bllRelatedLinks,
  bllResumo,
  bllTaxasEspeciais,
  bllToc,
} from "@/data/bllComprasGuia";

const heroStats = [
  { value: "1,5%", label: "Taxa por lote vencido" },
  { value: "R$ 600", label: "Teto da taxa por lote" },
  { value: "R$ 630", label: "Plano trimestral" },
  { value: "24h", label: "Validação (dias úteis)" },
];

const navLinks = [
  { href: "#quanto-custa", label: "Custos" },
  { href: "#cadastro", label: "Cadastro" },
  { href: "#fases", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

const officialNote = (
  <>
    Este guia é independente. A CADBrasil não tem vínculo com a BLL Compras. Regras e valores oficiais:{" "}
    <a
      href="https://bll.org.br/para-fornecedor/"
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-brand hover:underline"
    >
      bll.org.br
    </a>
    .
  </>
);

export function BllComprasGuiaPage() {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <LandingHeader links={navLinks} />

      <main>
        <Hero />

        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-brand">
                    Início
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-medium text-foreground">Guia BLL Compras</li>
              </ol>
            </nav>
            <span className="hidden text-border sm:inline">|</span>
            <span>Atualizado em {bllMeta.updatedLabel}</span>
            <span className="hidden text-border sm:inline">|</span>
            <span>Leitura de 12 min</span>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[250px_minmax(0,1fr)] xl:gap-14">
            <TocAside />
            <article className="min-w-0 space-y-16">
              <ResumoSection />
              <OQueESection />
              <CustosSection />
              <CalculadoraSection />
              <CadastroSection />
              <DocumentosSection />
              <FasesSection />
              <MeEppSection />
              <SessaoSection />
              <ComparativoSection />
              <ErrosSection />
              <FaqSection />
              <FontesSection />
            </article>
          </div>
        </div>

        <LeadSection />
        <SeoAiBlock />
      </main>

      <LandingFooter
        pageLabel={BLL_PAGE_LABEL}
        officialTitle="Sobre este guia"
        officialNote={officialNote}
        relatedLinks={[...bllRelatedLinks]}
      />
      <LandingFloatingCta pageLabel={BLL_PAGE_LABEL} intent="Quero ajuda para participar de licitações na BLL" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.22_0.08_260)] pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" aria-hidden />
      <div
        className="absolute -top-40 right-0 h-[32rem] w-[48rem] rounded-full bg-[oklch(0.42_0.16_258/0.45)] blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.3fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[oklch(0.82_0.08_250)]">
            <BookOpen className="h-3.5 w-3.5" /> Guia para licitantes · 2026
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.4rem]">
            BLL Compras:{" "}
            <span className="bg-gradient-to-r from-[oklch(0.82_0.1_250)] to-[oklch(0.9_0.08_200)] bg-clip-text text-transparent">
              guia completo para licitantes
            </span>
          </h1>
          <p className="guide-hero-lead mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            O que é a BLL, quanto custa de verdade, como se cadastrar, quais documentos enviar e como disputar com
            segurança — com base no regulamento oficial e com calculadora de taxas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#calculadora" className={`${btnPrimary} text-sm`}>
              Simular minhas taxas <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={LEAD_FORM_ANCHOR}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Falar com um especialista
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {heroStats.map((s) => (
            <div key={s.label} className="rounded-3xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-xl sm:p-6">
              <div className="font-display text-3xl font-bold text-white tabular-nums">{s.value}</div>
              <div className="mt-1.5 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TocAside() {
  return (
    <aside className="hidden self-stretch lg:block">
      <nav
        aria-label="Índice do guia"
        className="sticky top-24 overflow-hidden rounded-3xl border border-border bg-card shadow-card"
      >
        <p className="border-b border-border bg-accent/40 px-5 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Neste guia
        </p>
        <ol className="max-h-[calc(100vh-16rem)] space-y-0.5 overflow-y-auto p-3">
          {bllToc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-brand/5 hover:text-brand"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
        <div className="border-t border-border p-4">
          <a href={LEAD_FORM_ANCHOR} className={`${btnPrimary} w-full px-4 py-2.5 text-sm`}>
            Falar com especialista
          </a>
        </div>
      </nav>
    </aside>
  );
}

function GuideSection({
  id,
  title,
  lead,
  children,
}: {
  id: string;
  title: string;
  lead?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold leading-tight text-balance sm:text-3xl">{title}</h2>
      {lead && <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{lead}</p>}
      <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-foreground/85">{children}</div>
    </section>
  );
}

function InlineCta({ title, intent }: { title: string; intent: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-brand/25 bg-gradient-to-r from-brand/10 to-transparent p-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-semibold text-foreground">{title}</p>
      <div className="flex shrink-0 flex-wrap gap-2">
        <a href={LEAD_FORM_ANCHOR} className={`${btnPrimary} px-5 py-2.5 text-sm`}>
          Falar com especialista
        </a>
        <WhatsAppLink intent={intent} pageLabel={BLL_PAGE_LABEL} className={`${btnSecondary} px-4 py-2.5 text-sm`}>
          <MessageCircle className="h-4 w-4 text-success" /> WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ResumoSection() {
  return (
    <section id="resumo" className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand">
        <Zap className="h-4 w-4" /> Resumo rápido
      </p>
      <p className="guide-quick-answer mt-4 text-lg leading-relaxed text-foreground">{bllMeta.quickAnswer}</p>
      <div className="mt-6">
        <CheckList items={bllResumo} />
      </div>
    </section>
  );
}

function OQueESection() {
  return (
    <GuideSection id="o-que-e" title="O que é a BLL Compras e como ela funciona">
      {bllOQueE.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <div className="flex gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-5">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
        <p className="text-[15px]">
          <strong>A BLL é pública ou privada?</strong> {bllPublicaOuPrivada}
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-foreground">Modalidades e processos na plataforma</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {bllModalidades.map((m) => (
            <span key={m} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium">
              {m}
            </span>
          ))}
        </div>
      </div>
    </GuideSection>
  );
}

function CustosSection() {
  return (
    <GuideSection
      id="quanto-custa"
      title="Quanto custa participar da BLL Compras"
      lead="Órgãos públicos não pagam. O fornecedor escolhe um dos dois modelos de cobrança no próprio sistema."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {bllPlanos.map((p) => (
          <article key={p.nome} className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {p.destaque}
            </span>
            <h3 className="mt-4 text-xl font-bold">{p.nome}</h3>
            <p className="mt-1 font-display text-2xl font-bold text-brand">{p.preco}</p>
            <ul className="mt-5 space-y-2.5 text-[15px]">
              {p.itens.map((i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                  {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="overflow-hidden rounded-3xl border border-border">
        <table className="w-full text-left text-[15px]">
          <caption className="bg-accent/40 px-5 py-3 text-left text-sm font-semibold">
            Situações com regras específicas de cobrança
          </caption>
          <tbody className="divide-y divide-border">
            {bllTaxasEspeciais.map((t) => (
              <tr key={t.caso} className="align-top">
                <th scope="row" className="w-2/5 px-5 py-4 font-semibold">
                  {t.caso}
                </th>
                <td className="px-5 py-4 text-muted-foreground">{t.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted-foreground">
        A BLL pode reajustar os valores a qualquer momento, publicando nova tabela no Regulamento. Confira sempre a
        página oficial antes de escolher o plano.
      </p>
    </GuideSection>
  );
}

function CalculadoraSection() {
  return (
    <GuideSection
      id="calculadora"
      title="Calculadora: taxa por êxito ou plano trimestral?"
      lead="A taxa de 1,5% atinge o teto de R$ 600 em lotes a partir de R$ 40 mil. Simule o seu volume e veja qual modelo compensa."
    >
      <BllFeeCalculator />
    </GuideSection>
  );
}

function CadastroSection() {
  return (
    <GuideSection
      id="cadastro"
      title="Como se cadastrar na BLL Compras: passo a passo"
      lead="O cadastro é feito pelo representante legal da empresa e fica válido por tempo indeterminado."
    >
      <ol className="grid gap-4 sm:grid-cols-2">
        {bllCadastroPassos.map((s, i) => (
          <li key={s.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand font-display font-bold text-brand-foreground">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-[15px] text-muted-foreground">{s.description}</p>
          </li>
        ))}
      </ol>
      <InlineCta
        title="Quer começar na BLL com a documentação e o preço certos desde o primeiro edital?"
        intent="Quero ajuda para começar a participar de licitações na BLL."
      />
    </GuideSection>
  );
}

function DocumentosSection() {
  return (
    <GuideSection
      id="documentos"
      title="Documentos: cadastro na BLL x habilitação no edital"
      lead="São duas coisas diferentes. O cadastro libera o acesso à plataforma; a habilitação é exigida por cada edital."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <FileText className="h-5 w-5 text-brand" /> Para o cadastro na BLL
          </h3>
          <div className="mt-4 text-[15px]">
            <CheckList items={bllDocumentosCadastro} />
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            <FileText className="h-5 w-5 text-brand" /> Para a habilitação (edital)
          </h3>
          <ul className="mt-4 space-y-3 text-[15px]">
            {bllDocumentosHabilitacao.map((d) => (
              <li key={d.grupo}>
                <strong className="text-foreground">{d.grupo}</strong>
                <span className="block text-muted-foreground">{d.exemplo}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p>
        Nunca reaproveite documentos só porque foram aceitos em outro processo: compare requisito, validade, formato e
        momento de apresentação no edital atual. A base legal da habilitação está nos arts. 62 a 70 da Lei nº
        14.133/2021.
      </p>
    </GuideSection>
  );
}

function FasesSection() {
  return (
    <GuideSection id="fases" title="Como funciona uma licitação na BLL Compras">
      <ol className="relative space-y-4 border-l-2 border-brand/20 pl-8">
        {bllFases.map((f, i) => (
          <li key={f.title} className="relative">
            <span className="absolute -left-[45px] grid h-8 w-8 place-items-center rounded-full bg-gradient-brand text-xs font-bold text-brand-foreground shadow-glow">
              {i + 1}
            </span>
            <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-1 text-[15px] text-muted-foreground">{f.description}</p>
          </li>
        ))}
      </ol>
    </GuideSection>
  );
}

function MeEppSection() {
  return (
    <GuideSection
      id="me-epp"
      title="Benefícios para ME e EPP na BLL"
      lead="Selecionar o enquadramento correto no cadastro garante a aplicação do tratamento diferenciado previsto em lei, quando o edital prevê."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {bllMeEpp.map((b) => (
          <div key={b.title} className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-semibold text-foreground">{b.title}</h3>
            <p className="mt-1.5 text-[15px] text-muted-foreground">{b.description}</p>
          </div>
        ))}
      </div>
    </GuideSection>
  );
}

function SessaoSection() {
  return (
    <GuideSection
      id="sessao"
      title="Boas práticas durante a disputa"
      lead="Pelo Regulamento da BLL, o licitante responde por suas senhas, lances e pela perda de negócio por desconexão ou por não acompanhar as mensagens do sistema."
    >
      <CheckList items={bllBoasPraticas} />
    </GuideSection>
  );
}

function ComparativoSection() {
  return (
    <GuideSection id="comparativo" title="BLL Compras x Compras.gov.br x BEC/SP x PNCP">
      <div className="-mx-4 overflow-x-auto px-4">
        <table className="w-full min-w-[720px] overflow-hidden rounded-3xl border border-border text-left text-sm">
          <thead className="bg-accent/50">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                Critério
              </th>
              {bllComparativo.colunas.map((c) => (
                <th key={c} scope="col" className="px-4 py-3 font-semibold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {bllComparativo.linhas.map((l) => (
              <tr key={l.criterio} className="align-top">
                <th scope="row" className="px-4 py-3 font-semibold">
                  {l.criterio}
                </th>
                {l.valores.map((v, i) => (
                  <td key={i} className="px-4 py-3 text-muted-foreground">
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Vai vender para o Governo do Estado de São Paulo? Conheça nossa{" "}
        <Link to="/caufesp" className="font-semibold text-brand hover:underline">
          assessoria para o processo do CAUFESP
        </Link>
        .
      </p>
    </GuideSection>
  );
}

function ErrosSection() {
  return (
    <GuideSection id="erros" title="Erros comuns de quem está começando na BLL">
      <ul className="grid gap-3 sm:grid-cols-2">
        {bllErros.map((e) => (
          <li
            key={e}
            className="flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-4 text-[15px]"
          >
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden />
            {e}
          </li>
        ))}
      </ul>
      <InlineCta
        title="Evite esses erros com análise de edital e documentos organizados."
        intent="Quero ajuda para analisar um edital da BLL."
      />
    </GuideSection>
  );
}

function FaqSection() {
  return (
    <GuideSection id="faq" title="Perguntas frequentes sobre a BLL Compras">
      <FaqList items={bllFaqs} />
    </GuideSection>
  );
}

function FontesSection() {
  return (
    <GuideSection id="fontes" title="Fontes oficiais consultadas">
      <ul className="space-y-2 text-[15px]">
        {bllFontes.map((f) => (
          <li key={f.url}>
            <a
              href={f.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 font-medium text-brand hover:underline"
            >
              {f.label} <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted-foreground">
        Conteúdo informativo produzido pela CADBrasil, empresa privada sem vínculo com a BLL Compras ou com órgãos
        públicos. Valores e regras conferidos em {bllMeta.updatedLabel}; sempre confirme no edital e nas páginas
        oficiais.
      </p>
    </GuideSection>
  );
}

function LeadSection() {
  return (
    <section
      id="diagnostico"
      className="relative scroll-mt-20 overflow-hidden bg-[oklch(0.22_0.08_260)] py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="CADBrasil para licitantes"
            title="Dispute na BLL com tecnologia e especialistas ao seu lado"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {bllCadbrasilAjuda.map((a) => (
              <div key={a.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <p className="flex items-center gap-2 font-semibold text-white">
                  <Sparkles className="h-4 w-4 text-[oklch(0.82_0.1_250)]" /> {a.title}
                </p>
                <p className="mt-1.5 text-sm text-white/70">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
        <LeadForm source="bll" pageLabel={BLL_PAGE_LABEL} />
      </div>
    </section>
  );
}

function SeoAiBlock() {
  return (
    <div className="hidden" data-seo-ai>
      <p className="ai-summary">{bllMeta.aiCitation}</p>
    </div>
  );
}
