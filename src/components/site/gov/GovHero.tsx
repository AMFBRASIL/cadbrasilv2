import { ArrowRight, Clock, MessageCircle, ShieldCheck, FileCheck } from "lucide-react";
import { GovHeroDashboard } from "@/components/site/gov/GovHeroDashboard";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";

export function GovHero() {
  return (
    <section
      id="top"
      className="relative pt-[6.75rem] sm:pt-32 pb-16 sm:pb-28 overflow-x-clip bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821]"
    >
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
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#FFCD07]">CADBRASIL</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70">
              Especialistas em SICAF · Compras.gov.br
            </p>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-balance">
              Cadastre seu SICAF e comece a{" "}
              <span className="text-[#FFCD07]">licitar em até 24 horas</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
              Credenciamento, regularização e CRC com assessoria especializada — documentação
              validada e níveis de habilitação prontos para o Governo Federal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CadastroLink className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold shadow-lg hover:bg-[#ffe566] hover:scale-[1.02] transition">
                Iniciar cadastro SICAF
                <ArrowRight className="h-4 w-4" />
              </CadastroLink>
              <WhatsAppLink
                intent="Quero credenciar ou regularizar minha empresa no SICAF (hero da home)."
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/15 transition"
              >
                <MessageCircle className="h-4 w-4" /> Falar com especialista
              </WhatsAppLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/75">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#FFCD07]" /> +15 anos de experiência
              </span>
              <span className="inline-flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-[#FFCD07]" /> +8.000 fornecedores
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#FFCD07]" /> CRC em até 24h
              </span>
            </div>
          </div>

          <GovHeroDashboard />
        </div>
      </div>
    </section>
  );
}
