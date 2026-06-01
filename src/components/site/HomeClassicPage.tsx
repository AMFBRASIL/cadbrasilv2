import { ArrowRight, Download, MessageCircle, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { HeroDashboard } from "@/components/site/HeroDashboard";
import {
  ServiceStatusBar,
  LogosBar,
  WhatIsSicaf,
  Process,
  ReadinessCalculator,
  DocumentChecklist,
  ComparisonSection,
  Assistant,
  Benefits,
  Stats,
  Testimonials,
  StartIn2Minutes,
  FinalCTA,
} from "@/components/site/Sections";
import { Faq } from "@/components/site/Faq";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute inset-0 bg-gradient-radial" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <a
            href="#assistente"
            className="inline-flex items-center gap-2 text-xs font-semibold bg-card border border-border px-3 py-1.5 rounded-full shadow-card hover:shadow-soft transition"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success pulse-ring" />
            SICAF | COMPRASNET - 2026
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-balance">
            <span className="bg-gradient-brand bg-clip-text text-transparent">SICAF | COMPRASNET</span>
            {", Cadastre sua empresa e participe de licitações em todo o Brasil"}
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Especialistas em <strong className="text-foreground">Cadastro, Atualização e Regularização SICAF</strong>{" "}
            com suporte completo e tecnologia inteligente. Pronto para licitar em até 24h.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="https://cadastro.cadbrasil.com.br"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition"
            >
              🚀 Fazer Cadastro SICAF
            </a>
            <WhatsAppLink
              intent="Quero tirar dúvidas sobre SICAF (layout clássico)."
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-card border border-border font-semibold hover:bg-accent transition"
            >
              <MessageCircle className="h-4 w-4 text-success" /> Falar no WhatsApp
            </WhatsAppLink>
            <a
              href="#assistente"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-foreground text-background font-semibold hover:opacity-90 transition"
            >
              <Download className="h-4 w-4" /> Instalar Assistente
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-success" /> +15 anos de experiência
            </span>
            <span className="inline-flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="h-5 w-5 rounded-full bg-gradient-brand border-2 border-background" />
                ))}
              </div>
              +8.000 fornecedores atendidos
            </span>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

/** Layout anterior da home (backup interno). */
export function HomeClassicPage() {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <Nav />
      <main>
        <Hero />
        <ServiceStatusBar />
        <LogosBar />
        <WhatIsSicaf />
        <Process />
        <ReadinessCalculator />
        <DocumentChecklist />
        <ComparisonSection />
        <Assistant />
        <Benefits />
        <Stats />
        <Testimonials />
        <StartIn2Minutes />
        <FinalCTA />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
