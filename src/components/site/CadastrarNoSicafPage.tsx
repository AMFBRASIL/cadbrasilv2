import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck,
  MessageCircle,
  Rocket,
  Shield,
  X,
} from "lucide-react";
import { GovFooter } from "@/components/site/gov/GovFooter";
import { GovNav } from "@/components/site/gov/GovNav";
import { ContactSection } from "@/components/site/ContactSection";
import { FloatingCta } from "@/components/site/FloatingCta";
import { CADASTRO_URL } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import {
  antesDeComecar,
  cadastrarNoSicafFaqs,
  cadastrarNoSicafMeta,
  comparativo,
  passosCadastroCadbrasil,
  vantagensCadbrasil,
} from "@/data/cadastrarNoSicaf";
import { getDefaultIntent } from "@/lib/whatsapp";

const RELATED = [
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia passo a passo completo" },
  { to: "/quem-pode-se-cadastrar-no-sicaf", label: "Quem pode se cadastrar" },
  { to: "/documentacao-sicaf", label: "Documentação necessária" },
  { to: "/credenciamento", label: "Credenciamento SICAF" },
  { to: "/emitir-crc", label: "Emitir CRC" },
  { to: "/faq/cadastro-sicaf", label: "FAQ cadastro" },
] as const;

function CtaBand({ title, compact }: { title?: string; compact?: boolean }) {
  return (
    <div
      className={`rounded-xl border-2 border-[#168821]/30 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-6 sm:p-8 text-center shadow-lg ${compact ? "" : "my-10"}`}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        {title ?? "Cadastre sua empresa no SICAF agora"}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-white/90 max-w-xl mx-auto">
        Inicie em minutos no portal CADBRASIL. Credenciamento assistido, documentação validada e CRC
        regular em até 24 horas.
      </p>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <a
          href={CADASTRO_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold hover:bg-[#ffe566] transition shadow-md"
        >
          Cadastrar no SICAF — CADBRASIL
          <ArrowRight className="h-4 w-4" />
        </a>
        <WhatsAppLink
          pageLabel={cadastrarNoSicafMeta.shortTitle}
          intent={getDefaultIntent(cadastrarNoSicafMeta.path)}
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition"
        >
          <MessageCircle className="h-4 w-4" /> Tirar dúvidas
        </WhatsAppLink>
      </div>
    </div>
  );
}

export function CadastrarNoSicafPage() {
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
            <li className="text-[#0a4d2c] font-semibold">{cadastrarNoSicafMeta.shortTitle}</li>
          </ol>
        </nav>

        <section className="relative pb-12 sm:pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821] opacity-[0.97]"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.2) 12px, rgba(255,255,255,0.2) 13px)`,
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-5xl px-4 text-center py-10 sm:py-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold bg-white/15 border border-white/25 text-white px-3 py-1.5 rounded-md">
              <Rocket className="h-3.5 w-3.5" /> Cadastro SICAF 2026
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-white text-balance">
              Como <span className="text-[#FFCD07]">cadastrar no SICAF</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Passo a passo intuitivo para credenciar sua empresa no Sistema de Cadastramento
              Unificado de Fornecedores — com assessoria CADBRASIL do início ao CRC regular.
            </p>
            <p className="page-hero-summary ai-summary mt-4 text-sm text-white/85 max-w-2xl mx-auto leading-relaxed">
              {cadastrarNoSicafMeta.quickAnswer}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href={CADASTRO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold shadow-lg hover:bg-[#ffe566] transition"
              >
                Iniciar cadastro na CADBRASIL
                <ArrowRight className="h-4 w-4" />
              </a>
              <WhatsAppLink
                pageLabel={cadastrarNoSicafMeta.shortTitle}
                intent={getDefaultIntent(cadastrarNoSicafMeta.path)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition"
              >
                <MessageCircle className="h-4 w-4" /> Falar com especialista
              </WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="pb-6 -mt-4 relative z-10">
          <div className="mx-auto max-w-5xl px-4 grid sm:grid-cols-3 gap-3">
            {[
              { icon: Clock, label: "Até 24 horas", sub: "com documentação completa" },
              { icon: FileCheck, label: "5 passos", sub: "fluxo guiado CADBRASIL" },
              { icon: Shield, label: "CRC regular", sub: "habilitado para licitar" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-lg border border-[#168821]/20 bg-white px-4 py-3 shadow-md"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#168821]/15 text-[#168821]">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <p className="font-bold text-[#0a4d2c]">{label}</p>
                  <p className="text-xs text-[#0a4d2c]/65">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 bg-white border-y border-[#168821]/15">
          <div className="mx-auto max-w-5xl px-4">
            <article id="passo-a-passo" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-2 text-center">
                Passo a passo para cadastrar no SICAF
              </h2>
              <p className="text-center text-[#0a4d2c]/75 mb-10 max-w-2xl mx-auto">
                Fluxo assistido pela CADBRASIL — do primeiro clique ao CRC regular.
              </p>
              <ol className="space-y-4">
                {passosCadastroCadbrasil.map((passo) => (
                  <li
                    key={passo.id}
                    id={passo.id}
                    className="scroll-mt-28 flex gap-4 sm:gap-6 rounded-xl border border-[#168821]/20 bg-[#f0f7f2] p-5 sm:p-6"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#168821] text-white font-bold text-lg">
                      {passo.numero}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-[#0a4d2c] text-lg">{passo.titulo}</h3>
                        <span className="text-xs font-medium text-[#168821] bg-white border border-[#168821]/25 px-2 py-0.5 rounded">
                          {passo.prazo}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[#0a4d2c]/75 leading-relaxed">
                        {passo.descricao}
                      </p>
                      {passo.numero === "01" && (
                        <a
                          href={CADASTRO_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#168821] hover:text-[#0a4d2c] transition"
                        >
                          Acessar cadastro.cadbrasil.com.br
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <CtaBand title="Pronto para o passo 1? Cadastre-se na CADBRASIL" />

            <div className="grid lg:grid-cols-2 gap-8">
              <article id="antes-de-comecar" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a4d2c] mb-4">
                  Antes de cadastrar, tenha em mãos
                </h2>
                <ul className="space-y-2">
                  {antesDeComecar.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 rounded-lg border border-[#168821]/15 bg-white px-4 py-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#168821] mt-0.5" />
                      <span className="text-sm text-[#0a4d2c]/85">
                        {item.item}
                        {item.essencial && (
                          <span className="ml-2 text-[10px] uppercase font-bold text-[#168821]">
                            Obrigatório
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/documentacao-sicaf"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#168821] hover:underline"
                >
                  Ver checklist completo de documentos
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>

              <article id="vantagens" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a4d2c] mb-4">
                  Por que cadastrar com a CADBRASIL
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {vantagensCadbrasil.map((v) => (
                    <div
                      key={v.titulo}
                      className="rounded-lg border border-[#168821]/15 bg-white p-4"
                    >
                      <p className="font-bold text-[#168821]">{v.titulo}</p>
                      <p className="mt-1 text-sm text-[#0a4d2c]/75 leading-relaxed">{v.descricao}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <article id="comparativo" className="scroll-mt-28 mt-12">
              <h2 className="text-2xl font-bold text-[#0a4d2c] mb-6 text-center">
                Sozinho vs. com a CADBRASIL
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-red-200/80 bg-red-50/40 p-5">
                  <h3 className="font-bold text-[#0a4d2c] mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600" /> Cadastrar sozinho
                  </h3>
                  <ul className="space-y-2">
                    {comparativo.sozinho.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-[#0a4d2c]/75">
                        <X className="h-4 w-4 shrink-0 text-red-500 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-[#168821]/40 bg-[#f0f7f2] p-5">
                  <h3 className="font-bold text-[#0a4d2c] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#168821]" /> Com a CADBRASIL
                  </h3>
                  <ul className="space-y-2">
                    {comparativo.cadbrasil.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-[#0a4d2c]/85">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#168821] mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CADASTRO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#168821] text-white font-semibold hover:bg-[#0f6b38] transition"
                  >
                    Cadastrar agora
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="py-12 bg-[#f0f7f2]">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-8 text-center">
              Perguntas frequentes
            </h2>
            <div className="space-y-3 max-w-3xl mx-auto">
              {cadastrarNoSicafFaqs.map((faq) => (
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
            <div className="mt-10">
              <CtaBand compact title="Cadastre no SICAF hoje — comece em 5 minutos" />
            </div>
          </div>
        </section>

        <section className="py-10 bg-white border-t border-[#168821]/15">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-lg font-bold text-[#0a4d2c] mb-4">Continue explorando</h2>
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
