import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Download, MessageCircle, ShieldCheck } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { HeroDashboard } from "@/components/site/HeroDashboard";
import {
  LogosBar, WhatIsSicaf, Process, Benefits, Assistant, Stats, Testimonials, FinalCTA,
} from "@/components/site/Sections";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";

const ORIGIN = "https://cadbrasil.com.br";
const SOCIAL_PREVIEW_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c46af53-295b-4a74-8239-56f32ba6ed77/id-preview-d78bce4c--3b6f7a39-c5c1-4555-ad8d-dccb06150a62.lovable.app-1779886304111.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CADBRASIL · Cadastro e Regularização SICAF em até 24h" },
      { name: "description", content: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas. Tecnologia, IA e atendimento humano. Marca CADBRASIL." },
      { name: "keywords", content: "cadastro sicaf, atualizar sicaf, regularizar sicaf, consultoria sicaf, cadastro compras.gov.br, fornecedor governo, licitações públicas, emitir CRC sicaf, regularidade fiscal sicaf" },
      { property: "og:title", content: "CADBRASIL · Seu SICAF Regularizado Sem Complicação" },
      { property: "og:description", content: "Cadastro, regularização e atualização SICAF em até 24h. Especialistas em licitações públicas." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${ORIGIN}/` },
      { property: "og:image", content: SOCIAL_PREVIEW_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SOCIAL_PREVIEW_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/` }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "CADBRASIL",
        brand: "CADBRASIL",
        description: "Especialistas em SICAF: cadastro, regularização, atualização e suporte completo para licitações públicas.",
        areaServed: "BR",
        serviceType: ["Cadastro SICAF", "Regularização SICAF", "Atualização SICAF", "Renovação SICAF"],
      }),
    }],
  }),
  component: Index,
});

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
            Novo: Assistente CADBRASIL 2026 com IA
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight text-balance">
            Seu SICAF{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-brand bg-clip-text text-transparent">regularizado</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6 Q100 0 198 5" stroke="oklch(0.68 0.17 158)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{" "}
            sem complicação.
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
            <a
              href="https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-card border border-border font-semibold hover:bg-accent transition"
            >
              <MessageCircle className="h-4 w-4 text-success" /> Falar no WhatsApp
            </a>
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
                {[0,1,2,3].map(i => (
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

function Index() {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <Nav />
      <main>
        <Hero />
        <LogosBar />
        <WhatIsSicaf />
        <Process />
        <Assistant />
        <Benefits />
        <Stats />
        <Testimonials />
        <FinalCTA />
        <Faq />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
