"use client";

import {
  ArrowRight,
  BellRing,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  FileSearch,
  FolderCheck,
  FolderKanban,
  Handshake,
  Headset,
  Info,
  LayoutDashboard,
  MessageCircle,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { CtaBand } from "@/components/site/cadbrasil/CtaBand";
import { FaqList } from "@/components/site/cadbrasil/FaqList";
import { FeatureCard } from "@/components/site/cadbrasil/FeatureCard";
import { HeroDashboard } from "@/components/site/cadbrasil/HeroDashboard";
import { LandingFloatingCta } from "@/components/site/cadbrasil/LandingFloatingCta";
import { LandingFooter } from "@/components/site/cadbrasil/LandingFooter";
import { LandingHeader } from "@/components/site/cadbrasil/LandingHeader";
import { LeadForm } from "@/components/site/cadbrasil/LeadForm";
import { PrivateCompanyNotice } from "@/components/site/cadbrasil/PrivateCompanyNotice";
import { SectionHeading } from "@/components/site/cadbrasil/SectionHeading";
import {
  LEAD_FORM_ANCHOR,
  PLATFORM_ANCHOR,
  btnPrimary,
  btnSecondary,
} from "@/components/site/cadbrasil/styles";
import {
  audiences,
  cadbrasilFaqs,
  cadbrasilMeta,
  COMPRAS_GOV_OFFICIAL_URL,
  factSheetAi,
  hero,
  howItWorks,
  resumoInteligente,
  sicafOrientation,
  solutions,
  techFeatures,
  type SolutionIcon,
  type TechIcon,
} from "@/data/cadbrasilPage";

const PAGE_LABEL = "CADBrasil — Tecnologia e assessoria em licitações";

const solutionIcons: Record<SolutionIcon, LucideIcon> = {
  assessoria: Handshake,
  documentos: FolderCheck,
  alertas: BellRing,
  editais: FileSearch,
  oportunidades: Radar,
  assistente: Bot,
};

const techIcons: Record<TechIcon, LucideIcon> = {
  assistente: Bot,
  ia: Sparkles,
  organizacao: FolderKanban,
  oportunidades: Radar,
  alertas: BellRing,
  cadastral: ClipboardCheck,
  central: LayoutDashboard,
  suporte: Headset,
};

const audienceIcons: LucideIcon[] = [Rocket, TrendingUp, FolderKanban];

export function CadbrasilPage() {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <LandingHeader />

      <main>
        <HeroSection />

        <div className="relative z-10 -mt-12 sm:-mt-16 mx-auto max-w-5xl px-4">
          <PrivateCompanyNotice />
        </div>

        <SolutionsSection />

        <CtaBand
          title="Quero preparar minha empresa para licitar"
          subtitle="Comece com um diagnóstico e descubra o que sua empresa precisa organizar para disputar oportunidades no mercado público."
          primary={{ label: "Solicitar diagnóstico", href: LEAD_FORM_ANCHOR }}
          whatsapp={{
            label: "Falar com um especialista",
            intent: "Quero preparar minha empresa para participar de licitações.",
          }}
        />

        <SicafOrientationSection />
        <HowItWorksSection />
        <PlatformSection />
        <AudienceSection />
        <LeadSection />
        <FaqSection />

        <CtaBand
          title="Sua empresa pronta para vender ao poder público"
          subtitle="Tecnologia, organização e especialistas ao lado do seu time em cada oportunidade."
          primary={{ label: "Falar com um especialista", href: LEAD_FORM_ANCHOR }}
          whatsapp={{
            label: "Chamar no WhatsApp",
            intent: "Quero falar com um especialista CADBrasil sobre licitações.",
          }}
        />

        <SeoAiBlock />
      </main>

      <LandingFooter />
      <LandingFloatingCta />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.22_0.08_260)] pt-28 pb-28 sm:pt-36 sm:pb-36">
      <div className="absolute inset-0 bg-grid opacity-[0.08]" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[oklch(0.42_0.16_258/0.45)] blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-[oklch(0.82_0.08_250)]">
            <Sparkles className="h-3.5 w-3.5" /> {hero.eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.04] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {hero.title}{" "}
            <span className="bg-gradient-to-r from-[oklch(0.82_0.1_250)] to-[oklch(0.9_0.08_200)] bg-clip-text text-transparent">
              {hero.highlight}
            </span>
          </h1>
          <p className="guide-hero-lead mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={LEAD_FORM_ANCHOR} className={`${btnPrimary} uppercase tracking-wide text-sm`}>
              {hero.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={PLATFORM_ANCHOR}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:bg-white/10"
            >
              {hero.secondaryCta}
            </a>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {hero.trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-success" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <HeroDashboard />
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solucoes" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Soluções"
          title="O que a CADBrasil faz"
          description="Tecnologia e assessoria especializada para sua empresa organizar a operação, entender editais e encontrar oportunidades no mercado público."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <FeatureCard
              key={s.title}
              icon={solutionIcons[s.icon]}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SicafOrientationSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 lg:grid-cols-2">
        <div className="reveal">
          <SectionHeading
            align="left"
            eyebrow={sicafOrientation.eyebrow}
            title={sicafOrientation.title}
            description={sicafOrientation.text}
          />
          <div className="mt-8 flex gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden />
            <p className="text-sm leading-relaxed text-foreground/80">
              {sicafOrientation.clarification}{" "}
              <a
                href={COMPRAS_GOV_OFFICIAL_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
              >
                Portal oficial Compras.gov.br <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={LEAD_FORM_ANCHOR} className={btnPrimary}>
              Solicitar diagnóstico <ArrowRight className="h-4 w-4" />
            </a>
            <WhatsAppLink
              intent="Tenho dúvidas sobre SICAF/Compras.gov.br e quero orientação de um especialista."
              pageLabel={PAGE_LABEL}
              className={btnSecondary}
            >
              <MessageCircle className="h-4 w-4 text-success" /> Tirar dúvidas no WhatsApp
            </WhatsAppLink>
          </div>
        </div>

        <ul className="reveal grid gap-3 sm:grid-cols-2">
          {sicafOrientation.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-0.5 hover:border-brand/30"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden />
              <span className="font-medium leading-snug">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="como-funciona" className="scroll-mt-20 border-y border-border bg-accent/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do diagnóstico ao acompanhamento contínuo"
          description="Um processo simples para sua empresa ganhar clareza, organização e ritmo no mercado público."
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, i) => (
            <li
              key={step.title}
              className="reveal relative rounded-3xl border border-border bg-card p-7 shadow-card"
            >
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand font-display text-xl font-bold text-brand-foreground shadow-glow">
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

function PlatformSection() {
  return (
    <section id="plataforma" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Plataforma CADBrasil"
          title="Tecnologia que trabalha junto com sua empresa"
          description="Ferramentas digitais e inteligência artificial para reduzir trabalho manual, evitar surpresas com prazos e dar visibilidade a cada oportunidade."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techFeatures.map((f) => (
            <FeatureCard
              key={f.title}
              variant="compact"
              icon={techIcons[f.icon]}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <WhatsAppLink
            intent="Quero conhecer as soluções e a plataforma CADBrasil."
            pageLabel={PAGE_LABEL}
            className={btnPrimary}
          >
            Conhecer as soluções CADBrasil <ArrowRight className="h-4 w-4" />
          </WhatsAppLink>
          <a href={LEAD_FORM_ANCHOR} className={btnSecondary}>
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading eyebrow="Para quem é" title="Feito para empresas que querem vender ao governo" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map((a, i) => (
            <FeatureCard
              key={a.title}
              icon={audienceIcons[i] ?? Rocket}
              title={a.title}
              description={a.description}
            />
          ))}
        </div>
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
            eyebrow="Diagnóstico com especialista"
            title="Fale com um especialista CADBrasil"
            description="Conte o momento da sua empresa. Um especialista retorna para entender seus objetivos e indicar o melhor caminho com tecnologia e assessoria."
          />
          <ul className="mt-8 space-y-3 text-white/85">
            {[
              "Retorno rápido em horário comercial",
              "Análise do momento da sua empresa no mercado público",
              "Indicação das soluções CADBrasil mais adequadas",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-success" aria-hidden /> {item}
              </li>
            ))}
          </ul>
          <WhatsAppLink
            intent="Prefiro falar com um especialista CADBrasil pelo WhatsApp."
            pageLabel={PAGE_LABEL}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-white hover:underline"
          >
            <MessageCircle className="h-4 w-4 text-success" /> Prefere WhatsApp? Fale agora
          </WhatsAppLink>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading
          eyebrow="Transparência"
          title="Perguntas frequentes"
          description="Clareza sobre quem somos, o que fazemos e como cobramos."
        />
        <div className="mt-12">
          <FaqList items={cadbrasilFaqs} />
        </div>
      </div>
    </section>
  );
}

/** Conteúdo para buscadores e IA — fora da interface visível. */
function SeoAiBlock() {
  return (
    <div className="hidden" data-seo-ai>
      <p className="guide-quick-answer ai-summary">{cadbrasilMeta.quickAnswer}</p>
      <ul className="guide-summary">
        {resumoInteligente.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <dl>
        {factSheetAi.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
