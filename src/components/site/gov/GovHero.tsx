import { ArrowRight, Download, MessageCircle, ShieldCheck, Building2, FileCheck } from "lucide-react";
import { GovHeroDashboard } from "@/components/site/gov/GovHeroDashboard";
import { Link } from "@tanstack/react-router";
import { CADASTRO_URL } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

export function GovHero() {
  return (
    <section
      id="top"
      className="relative pt-[6.75rem] sm:pt-32 pb-16 sm:pb-28 overflow-x-clip bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821]"
    >
      {/* Padrão institucional */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 12px,
            rgba(255,255,255,0.15) 12px,
            rgba(255,255,255,0.15) 13px
          )`,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a4d2c]/80 via-transparent to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 border border-white/20 px-3 py-1.5 rounded-md backdrop-blur-sm">
              <Building2 className="h-3.5 w-3.5 text-[#FFCD07]" />
              SICAF | COMPRASNET — 2026
              <ArrowRight className="h-3.5 w-3.5" />
            </div>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight text-balance">
              <span className="text-[#FFCD07]">SICAF | COMPRASNET</span>
              <span className="text-white/95">
                , Cadastre sua empresa e participe de licitações em todo o Brasil
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
              Credenciamento e regularização no ecossistema de compras públicas com assessoria
              especializada CADBRASIL. Documentação validada, níveis de habilitação e CRC em até{" "}
              <strong className="text-white">24 horas</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CADASTRO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold shadow-lg hover:bg-[#ffe566] transition"
              >
                Iniciar cadastro SICAF
                <ArrowRight className="h-4 w-4" />
              </a>
              <WhatsAppLink
                intent="Quero credenciar ou regularizar minha empresa no SICAF (hero da home)."
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition"
              >
                <MessageCircle className="h-4 w-4" /> Falar com especialista
              </WhatsAppLink>
              <Link
                to="/assistente"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition"
              >
                <Download className="h-4 w-4" /> Assistente CADBRASIL
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-xs text-white/75">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#FFCD07]" /> +15 anos de experiência
              </span>
              <span className="inline-flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-[#FFCD07]" /> +8.000 fornecedores atendidos
              </span>
            </div>
          </div>

          <GovHeroDashboard />
        </div>
      </div>
    </section>
  );
}
