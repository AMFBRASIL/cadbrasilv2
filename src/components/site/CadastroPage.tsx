import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  MessageCircle,
  Shield,
  Zap,
} from "lucide-react";
import { GovFooter } from "@/components/site/gov/GovFooter";
import { GovNav } from "@/components/site/gov/GovNav";
import { ContactSection } from "@/components/site/ContactSection";
import { FloatingCta } from "@/components/site/FloatingCta";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import {
  cadastroPageFaqs,
  cadastroPageMeta,
  heroBeneficios,
  incluiNoCadastro,
  passosRapidos,
} from "@/data/cadastroPage";
import { getDefaultIntent } from "@/lib/whatsapp";

const RELATED = [
  { to: "/cadastrar-no-sicaf", label: "Como cadastrar no SICAF" },
  { to: "/documentacao-sicaf", label: "Documentação necessária" },
  { to: "/quem-pode-se-cadastrar-no-sicaf", label: "Quem pode se cadastrar" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia passo a passo" },
  { to: "/emitir-crc", label: "Emitir CRC" },
] as const;

function BtnCadastroGrande({ className = "" }: { className?: string }) {
  return (
    <CadastroLink
      className={`cadastro-cta-hero inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 sm:py-6 rounded-xl bg-[#FFCD07] text-[#0a4d2c] font-bold text-lg sm:text-xl shadow-xl hover:bg-[#ffe566] hover:shadow-2xl hover:scale-[1.02] transition-all ${className}`}
    >
      Fazer cadastro SICAF agora
      <ArrowRight className="h-6 w-6 shrink-0" />
    </CadastroLink>
  );
}

function BtnCadastroMedio({ label = "Iniciar cadastro" }: { label?: string }) {
  return (
    <CadastroLink
      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#168821] text-white font-bold text-base hover:bg-[#0f6b38] transition shadow-md"
    >
      {label}
      <ArrowRight className="h-5 w-5" />
    </CadastroLink>
  );
}

function CtaBand({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="rounded-2xl border-2 border-[#168821]/30 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-8 sm:p-12 text-center shadow-xl my-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-white/90 max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
        <BtnCadastroGrande className="!text-base sm:!text-lg !py-4 !px-8" />
        <WhatsAppLink
          pageLabel={cadastroPageMeta.shortTitle}
          intent={getDefaultIntent(cadastroPageMeta.path)}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0a4d2c] font-bold text-base hover:bg-[#f0f7f2] transition"
        >
          <MessageCircle className="h-5 w-5" /> Falar com especialista
        </WhatsAppLink>
      </div>
    </div>
  );
}

export function CadastroPage() {
  return (
    <div className="theme-gov-compras min-h-screen bg-[#f0f7f2] pb-16 sm:pb-0">
      <GovNav />
      <main>
        <nav
          aria-label="Breadcrumb"
          className="pt-[6.75rem] sm:pt-32 pb-2 mx-auto max-w-5xl px-4 text-sm text-[#0a4d2c]/70"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-[#168821] font-medium">
                Início
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#0a4d2c] font-semibold">{cadastroPageMeta.shortTitle}</li>
          </ol>
        </nav>

        {/* Hero conversão — CTAs grandes no topo */}
        <section className="relative pb-14 sm:pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821]"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.2) 12px, rgba(255,255,255,0.2) 13px)`,
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-5xl px-4 text-center py-10 sm:py-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#FFCD07] text-[#0a4d2c] px-4 py-2 rounded-full">
              <Zap className="h-4 w-4" /> Cadastro online — até 24 horas
            </span>
            <h1 className="mt-8 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] text-white text-balance">
              Cadastro <span className="text-[#FFCD07]">SICAF</span> para sua empresa
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Credenciamento assistido, documentação validada e CRC regular. Comece agora no portal
              CADBRASIL.
            </p>
            <p className="page-hero-summary ai-summary mt-4 text-sm text-white/80 max-w-2xl mx-auto">
              {cadastroPageMeta.quickAnswer}
            </p>

            {/* Botões grandes — destaque principal */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-stretch sm:items-center max-w-2xl mx-auto">
              <BtnCadastroGrande className="w-full sm:flex-1 min-w-[280px]" />
              <CadastroLink
                className="w-full sm:flex-1 min-w-[280px] inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition"
              >
                Acessar cadastro.cadbrasil.com.br
              </CadastroLink>
            </div>
            <div className="mt-6">
              <WhatsAppLink
                pageLabel={cadastroPageMeta.shortTitle}
                intent={getDefaultIntent(cadastroPageMeta.path)}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-sm underline-offset-4 hover:underline"
              >
                <MessageCircle className="h-4 w-4" /> Prefere tirar dúvidas antes? Fale no WhatsApp
              </WhatsAppLink>
            </div>

            <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/85">
              {heroBeneficios.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#FFCD07] shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Segunda faixa de CTA — logo abaixo do hero */}
        <section className="py-8 bg-white border-b border-[#168821]/20 shadow-sm">
          <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-xl font-bold text-[#0a4d2c]">Pronto para licitar com o governo?</p>
              <p className="text-sm text-[#0a4d2c]/70 mt-1">
                Início em 5 minutos · Sem burocracia desnecessária
              </p>
            </div>
            <BtnCadastroMedio label="Cadastrar minha empresa" />
          </div>
        </section>

        <section className="py-12 bg-[#f0f7f2]">
          <div className="mx-auto max-w-5xl px-4">
            <article id="como-funciona" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] text-center mb-10">
                Como funciona o cadastro
              </h2>
              <ol className="grid sm:grid-cols-3 gap-6">
                {passosRapidos.map((passo) => (
                  <li
                    key={passo.n}
                    id={`passo-${passo.n}`}
                    className="scroll-mt-28 rounded-xl bg-white border border-[#168821]/20 p-6 text-center shadow-sm"
                  >
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#168821] text-white font-bold text-2xl">
                      {passo.n}
                    </span>
                    <h3 className="mt-4 font-bold text-[#0a4d2c] text-lg">{passo.titulo}</h3>
                    <p className="mt-2 text-sm text-[#0a4d2c]/75 leading-relaxed">{passo.texto}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-10 text-center">
                <BtnCadastroGrande className="!text-base sm:!text-lg" />
              </div>
            </article>

            <CtaBand
              title="Não perca licitações por falta de SICAF"
              subtitle="Milhares de empresas já confiam na CADBRASIL para credenciamento federal."
            />

            <article id="inclui" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-8 text-center">
                O que está incluído no cadastro
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {incluiNoCadastro.map((item) => (
                  <div
                    key={item.titulo}
                    className="rounded-xl border border-[#168821]/15 bg-white p-5 flex gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-[#168821] mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#0a4d2c]">{item.titulo}</h3>
                      <p className="mt-1 text-sm text-[#0a4d2c]/70 leading-relaxed">
                        {item.descricao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <BtnCadastroMedio label="Quero esse cadastro" />
              </div>
            </article>
          </div>
        </section>

        <section className="py-12 bg-white border-y border-[#168821]/15">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-10">
              {[
                { icon: Clock, label: "Até 24h", sub: "com documentação ok" },
                { icon: Shield, label: "CRC regular", sub: "habilitado para licitar" },
                { icon: FileText, label: "Todo o Brasil", sub: "qualquer UF ou porte" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="p-6 rounded-xl bg-[#f0f7f2] border border-[#168821]/15">
                  <Icon className="h-8 w-8 text-[#168821] mx-auto" />
                  <p className="mt-3 font-bold text-[#0a4d2c] text-lg">{label}</p>
                  <p className="text-sm text-[#0a4d2c]/65">{sub}</p>
                </div>
              ))}
            </div>

            <CtaBand
              title="Inicie seu cadastro SICAF hoje"
              subtitle="Clique abaixo e acesse o portal oficial de cadastro CADBRASIL."
            />
          </div>
        </section>

        <section className="py-12 bg-[#f0f7f2]">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-8 text-center">
              Perguntas frequentes
            </h2>
            <div className="space-y-3 max-w-3xl mx-auto">
              {cadastroPageFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-[#168821]/20 bg-white overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-[#0a4d2c] hover:bg-[#f0f7f2]/50 transition flex justify-between gap-2">
                    {faq.question}
                    <span className="text-[#168821] group-open:rotate-45 transition-transform text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-4 text-sm text-[#0a4d2c]/75 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-10 text-center">
              <BtnCadastroGrande className="!text-base sm:!text-lg" />
            </div>
          </div>
        </section>

        <section className="py-10 bg-white border-t border-[#168821]/15">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-lg font-bold text-[#0a4d2c] mb-4">Saiba mais</h2>
            <ul className="flex flex-wrap gap-2">
              {RELATED.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-block text-sm font-medium text-[#168821] hover:text-[#0a4d2c] bg-[#f0f7f2] hover:bg-[#168821]/10 border border-[#168821]/20 px-3 py-2 rounded-md transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ContactSection />
      </main>
      <GovFooter />
      <FloatingCta />
    </div>
  );
}
