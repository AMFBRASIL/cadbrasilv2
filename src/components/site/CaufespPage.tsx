"use client";

import {
  AlertTriangle,
  ArrowRight,
  BellRing,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileCheck2,
  FileStack,
  Info,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CtaBand } from "@/components/site/cadbrasil/CtaBand";
import { FaqList } from "@/components/site/cadbrasil/FaqList";
import { FeatureCard } from "@/components/site/cadbrasil/FeatureCard";
import { LandingFloatingCta } from "@/components/site/cadbrasil/LandingFloatingCta";
import { LandingFooter } from "@/components/site/cadbrasil/LandingFooter";
import { LandingHeader } from "@/components/site/cadbrasil/LandingHeader";
import { LeadForm } from "@/components/site/cadbrasil/LeadForm";
import { PrivateCompanyNotice } from "@/components/site/cadbrasil/PrivateCompanyNotice";
import { SectionHeading } from "@/components/site/cadbrasil/SectionHeading";
import { LEAD_FORM_ANCHOR, btnPrimary, btnSecondary } from "@/components/site/cadbrasil/styles";
import {
  BEC_SP_OFFICIAL_URL,
  CAUFESP_PAGE_LABEL,
  caufespFactSheet,
  caufespFaqs,
  caufespHero,
  caufespMeta,
  caufespNotice,
  caufespServices,
  caufespStats,
  caufespSteps,
  errosComuns,
  oQueECaufesp,
  processoOficial,
  registroTypes,
  type CaufespServiceIcon,
} from "@/data/caufespPage";

const serviceIcons: Record<CaufespServiceIcon, LucideIcon> = {
  diagnostico: Search,
  checklist: ClipboardList,
  conferencia: FileCheck2,
  orientacao: UserCheck,
  relacao: FileStack,
  pendencias: ShieldCheck,
  alertas: BellRing,
  bec: TrendingUp,
};

const navLinks = [
  { href: "#o-que-e", label: "O que é" },
  { href: "#processo", label: "Processo" },
  { href: "#assessoria", label: "Assessoria" },
  { href: "#faq", label: "Dúvidas" },
];

const officialNote = (
  <>
    O cadastro no CAUFESP é gratuito e solicitado pelo fornecedor no portal oficial do Governo de SP:{" "}
    <a
      href={BEC_SP_OFFICIAL_URL}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-brand hover:underline"
    >
      bec.sp.gov.br
    </a>
    .
  </>
);

const relatedLinks = [
  { to: "/cadbrasil", label: "Sobre a CADBrasil" },
  { to: "/bll-compras-guia-para-licitantes", label: "Guia BLL Compras" },
  { to: "/licitacoes", label: "Plataforma de licitações" },
];

export function CaufespPage() {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <LandingHeader links={navLinks} />

      <main>
        <Hero />

        <div className="relative z-10 -mt-12 sm:-mt-16 mx-auto max-w-5xl px-4">
          <PrivateCompanyNotice title={caufespNotice.title} text={caufespNotice.text} />
        </div>

        <WhatIsSection />
        <RegistroTypesSection />

        <CtaBand
          title="RC ou RCS? Comece pelo diagnóstico certo"
          subtitle="Um especialista analisa o que sua empresa vende e indica o caminho mais rápido para chegar às negociações do Estado de São Paulo."
          primary={{ label: "Solicitar diagnóstico", href: LEAD_FORM_ANCHOR }}
          whatsapp={{ label: "Falar com um especialista", intent: "Tenho dúvidas entre RC e RCS no CAUFESP." }}
          pageLabel={CAUFESP_PAGE_LABEL}
        />

        <OfficialProcessSection />
        <CommonMistakesSection />
        <ServicesSection />
        <StepsSection />
        <LeadSection />
        <FaqSection />

        <CtaBand
          title="Venda para o Governo de São Paulo com quem conhece o caminho"
          subtitle="Documentação organizada, processo orientado e acompanhamento até a validação."
          primary={{ label: "Falar com um especialista", href: LEAD_FORM_ANCHOR }}
          whatsapp={{ label: "Chamar no WhatsApp", intent: "Quero assessoria para o processo do CAUFESP." }}
          pageLabel={CAUFESP_PAGE_LABEL}
        />

        <SeoAiBlock />
      </main>

      <LandingFooter
        pageLabel={CAUFESP_PAGE_LABEL}
        officialTitle="Portal oficial"
        officialNote={officialNote}
        relatedLinks={relatedLinks}
      />
      <LandingFloatingCta pageLabel={CAUFESP_PAGE_LABEL} intent="Quero assessoria para o CAUFESP" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.22_0.08_260)] pt-28 pb-28 sm:pt-36 sm:pb-36">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[oklch(0.42_0.16_258/0.45)] blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.15fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[oklch(0.82_0.08_250)]">
            <Sparkles className="h-3.5 w-3.5" /> {caufespHero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {caufespHero.title}{" "}
            <span className="bg-gradient-to-r from-[oklch(0.82_0.1_250)] to-[oklch(0.9_0.08_200)] bg-clip-text text-transparent">
              {caufespHero.highlight}
            </span>
          </h1>
          <p className="guide-hero-lead mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {caufespHero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={LEAD_FORM_ANCHOR} className={`${btnPrimary} uppercase tracking-wide text-sm`}>
              {caufespHero.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#processo"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/10"
            >
              {caufespHero.secondaryCta}
            </a>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {caufespHero.trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-success" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4" aria-label="Números do processo oficial do CAUFESP">
          {caufespStats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="font-display text-3xl font-bold text-white sm:text-4xl tabular-nums">{s.value}</div>
              <div className="mt-2 text-sm leading-snug text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  return (
    <section id="o-que-e" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.1fr]">
        <SectionHeading
          align="left"
          eyebrow="Entenda o CAUFESP"
          title="O cadastro que abre as portas do Governo de São Paulo"
          description="Antes de vender para secretarias, autarquias e demais unidades do Estado, sua empresa precisa estar validada no CAUFESP."
        />
        <div className="reveal space-y-4">
          {oQueECaufesp.map((p, i) => (
            <div key={p} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-sm font-bold text-brand">
                {i + 1}
              </span>
              <p className="leading-relaxed text-foreground/85">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RegistroTypesSection() {
  return (
    <section className="border-y border-border bg-accent/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Tipos de registro"
          title="RC ou RCS: a primeira decisão importa"
          description="O tipo de registro define documentos, prazos e em quais negociações sua empresa poderá participar."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {registroTypes.map((r) => (
            <article
              key={r.sigla}
              className="reveal relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand font-display text-lg font-bold text-brand-foreground shadow-glow">
                  {r.sigla}
                </span>
                <h3 className="text-2xl font-bold">{r.nome}</h3>
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">{r.resumo}</p>
              <ul className="mt-6 space-y-3">
                {r.pontos.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfficialProcessSection() {
  return (
    <section id="processo" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Processo oficial"
          title="Como funciona o processo do CAUFESP"
          description="Etapas realizadas pelo fornecedor no portal oficial da BEC/SP, conforme as orientações publicadas pelo Governo de São Paulo."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {processoOficial.map((step, i) => (
            <li key={step.title} className="reveal rounded-3xl border border-border bg-card p-7 shadow-card">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 font-display text-lg font-bold text-brand">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-10 flex max-w-3xl gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
          <p className="text-sm leading-relaxed text-foreground/80">
            O cadastro e a análise são realizados no sistema oficial e pela Unidade Cadastradora. A CADBrasil presta
            assessoria privada para que o responsável da sua empresa conduza cada etapa com segurança.{" "}
            <a
              href={BEC_SP_OFFICIAL_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
            >
              Portal oficial BEC/SP <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function CommonMistakesSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Atenção"
          title="Onde as empresas mais perdem tempo"
          description="Detalhes que geram notificações, retrabalho e semanas de atraso — e que a assessoria ajuda a evitar."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {errosComuns.map((e) => (
            <article
              key={e.title}
              className="reveal rounded-3xl border border-amber-500/20 bg-amber-500/[0.04] p-7 transition hover:-translate-y-1"
            >
              <AlertTriangle className="h-6 w-6 text-amber-500" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">{e.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{e.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="assessoria" className="scroll-mt-20 border-y border-border bg-accent/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Assessoria CADBrasil"
          title="Como a CADBrasil ajuda no seu processo CAUFESP"
          description="Especialistas e tecnologia ao lado do seu responsável, do diagnóstico às primeiras negociações na BEC/SP."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caufespServices.map((s) => (
            <FeatureCard
              key={s.title}
              variant="compact"
              icon={serviceIcons[s.icon]}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={LEAD_FORM_ANCHOR} className={btnPrimary}>
            Quero assessoria no CAUFESP <ArrowRight className="h-4 w-4" />
          </a>
          <WhatsAppLink
            intent="Quero conhecer a assessoria CADBrasil para o CAUFESP."
            pageLabel={CAUFESP_PAGE_LABEL}
            className={btnSecondary}
          >
            <MessageCircle className="h-4 w-4 text-success" /> Tirar dúvidas no WhatsApp
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Como trabalhamos" title="Quatro etapas, zero improviso" />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {caufespSteps.map((step, i) => (
            <li key={step.title} className="reveal rounded-3xl border border-border bg-card p-7 shadow-card">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand font-display text-xl font-bold text-brand-foreground shadow-glow">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LeadSection() {
  return (
    <section
      id="diagnostico"
      className="relative scroll-mt-20 overflow-hidden bg-[oklch(0.22_0.08_260)] py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.07]" aria-hidden />
      <div
        className="absolute -bottom-40 -left-20 h-[28rem] w-[40rem] rounded-full bg-[oklch(0.42_0.16_258/0.4)] blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="Diagnóstico CAUFESP"
            title="Fale com um especialista em CAUFESP"
            description="Conte o momento da sua empresa. Retornamos com o tipo de registro indicado e os próximos passos para vender ao Estado de São Paulo."
          />
          <ul className="mt-8 space-y-3 text-white/85">
            {[
              "Indicação entre RC e RCS para o seu caso",
              "Visão clara dos documentos necessários",
              "Acompanhamento até a validação",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success" aria-hidden /> {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-3 text-sm text-white/60">
            <Info className="h-4 w-4" aria-hidden /> Cadastro oficial gratuito no portal bec.sp.gov.br
          </div>
        </div>
        <LeadForm source="caufesp" pageLabel={CAUFESP_PAGE_LABEL} />
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas sobre o CAUFESP"
          description="Transparência sobre o processo oficial e sobre o papel da assessoria CADBrasil."
        />
        <div className="mt-12">
          <FaqList items={caufespFaqs} />
        </div>
      </div>
    </section>
  );
}

function SeoAiBlock() {
  return (
    <div className="hidden" data-seo-ai>
      <p className="guide-quick-answer ai-summary">{caufespMeta.quickAnswer}</p>
      <dl>
        {caufespFactSheet.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
