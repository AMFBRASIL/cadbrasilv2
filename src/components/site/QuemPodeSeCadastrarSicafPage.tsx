import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MessageCircle,
  Users,
  XCircle,
  ChevronDown,
  MapPin,
  Clock,
} from "lucide-react";
import { GovFooter } from "@/components/site/gov/GovFooter";
import { GovNav } from "@/components/site/gov/GovNav";
import { ContactSection } from "@/components/site/ContactSection";
import { FloatingCta } from "@/components/site/FloatingCta";
import { CADASTRO_URL } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import {
  passosElegibilidade,
  perfisEmpresa,
  quemNaoPode,
  quemPodeFaqs,
  quemPodeMeta,
  requisitosMinimos,
} from "@/data/quemPodeSeCadastrarSicaf";
import { getDefaultIntent } from "@/lib/whatsapp";

const RELATED = [
  { to: "/cadastrar-no-sicaf", label: "Cadastrar no SICAF" },
  { to: "/cadastro-sicaf", label: "Cadastro SICAF" },
  { to: "/como-cadastrar-empresa-sicaf", label: "Como cadastrar empresa" },
  { to: "/documentacao-sicaf", label: "Documentação SICAF" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia passo a passo" },
  { to: "/faq/sicaf-mei-epp", label: "FAQ MEI e EPP" },
  { to: "/empresa-inapta", label: "Empresa inapta" },
] as const;

function CtaBand({ title, compact }: { title?: string; compact?: boolean }) {
  return (
    <div
      className={`rounded-xl border-2 border-[#168821]/30 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-6 sm:p-8 text-center shadow-lg ${compact ? "" : "my-10"}`}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        {title ?? "Sua empresa pode se cadastrar — comece agora"}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-white/90 max-w-xl mx-auto">
        A CADBRASIL atende MEI, ME, EPP, LTDA, S/A e EIRELI em todo o Brasil. Credenciamento
        assistido em até 24 horas com documentação validada.
      </p>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <a
          href={CADASTRO_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold hover:bg-[#ffe566] transition"
        >
          Fazer cadastro na CADBRASIL
          <ArrowRight className="h-4 w-4" />
        </a>
        <WhatsAppLink
          pageLabel={quemPodeMeta.shortTitle}
          intent={getDefaultIntent(quemPodeMeta.path)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition"
        >
          <MessageCircle className="h-4 w-4" /> Consultar elegibilidade
        </WhatsAppLink>
      </div>
    </div>
  );
}

export function QuemPodeSeCadastrarSicafPage() {
  const [expanded, setExpanded] = useState<string | null>("mei");

  return (
    <div className="theme-gov-compras min-h-screen bg-[#f0f7f2] pb-16 sm:pb-0">
      <GovNav />
      <main>
        <nav
          aria-label="Breadcrumb"
          className="pt-[5.5rem] sm:pt-28 pb-2 mx-auto max-w-5xl px-4 text-sm text-[#0a4d2c]/70"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-[#168821] font-medium">
                Início
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#0a4d2c] font-semibold">{quemPodeMeta.shortTitle}</li>
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
              <Users className="h-3.5 w-3.5" /> Elegibilidade SICAF
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-white text-balance">
              Quem pode se cadastrar no{" "}
              <span className="text-[#FFCD07]">SICAF</span>?
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Guia claro por porte e natureza jurídica: MEI, ME, EPP, LTDA, S/A e EIRELI. Entenda
              requisitos, exceções e como iniciar seu credenciamento com a CADBRASIL.
            </p>
            <p className="page-hero-summary ai-summary mt-4 text-sm text-white/85 max-w-2xl mx-auto leading-relaxed">
              {quemPodeMeta.quickAnswer}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
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
                pageLabel={quemPodeMeta.shortTitle}
                intent={getDefaultIntent(quemPodeMeta.path)}
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
              { icon: Building2, label: "6 perfis", sub: "MEI a S/A — todos elegíveis" },
              { icon: MapPin, label: "Todo o Brasil", sub: "Qualquer UF ou município" },
              { icon: Clock, label: "Até 24h", sub: "Com assessoria CADBRASIL" },
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
            <article id="perfis-empresa" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-2">
                Por tipo de empresa
              </h2>
              <p className="text-[#0a4d2c]/75 mb-8 max-w-2xl leading-relaxed">
                Selecione o perfil da sua empresa para ver documentação, vantagens e pontos de
                atenção no credenciamento SICAF.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                {perfisEmpresa.map((perfil) => (
                  <button
                    key={perfil.id}
                    type="button"
                    onClick={() => setExpanded(expanded === perfil.id ? null : perfil.id)}
                    className={`text-left rounded-xl border-2 p-4 transition shadow-sm hover:shadow-md ${
                      expanded === perfil.id
                        ? "border-[#168821] bg-[#f0f7f2]"
                        : "border-[#168821]/20 bg-white hover:border-[#168821]/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="inline-block text-xs font-bold uppercase tracking-wide text-[#168821] bg-[#168821]/10 px-2 py-0.5 rounded">
                          {perfil.sigla}
                        </span>
                        <p className="mt-2 font-semibold text-[#0a4d2c] text-sm leading-snug">
                          {perfil.nome}
                        </p>
                      </div>
                      {perfil.podeCadastrar ? (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[#168821]" aria-label="Pode cadastrar" />
                      ) : (
                        <XCircle className="h-5 w-5 shrink-0 text-red-500" aria-label="Não pode cadastrar" />
                      )}
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 mt-2 text-[#0a4d2c]/50 transition-transform ${
                        expanded === perfil.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>

              {expanded && (
                <div className="rounded-xl border border-[#168821]/25 bg-[#f0f7f2] p-5 sm:p-6 animate-in fade-in duration-200">
                  {(() => {
                    const perfil = perfisEmpresa.find((p) => p.id === expanded);
                    if (!perfil) return null;
                    return (
                      <>
                        <h3 className="text-lg font-bold text-[#0a4d2c]">
                          {perfil.sigla} — {perfil.nome}
                        </h3>
                        <p className="mt-2 text-[#0a4d2c]/80 leading-relaxed">{perfil.resumo}</p>
                        <p className="mt-3 text-sm">
                          <strong className="text-[#0a4d2c]">Documentação:</strong>{" "}
                          <span className="text-[#0a4d2c]/75">{perfil.documentacao}</span>
                        </p>
                        <ul className="mt-4 space-y-2">
                          {perfil.vantagens.map((v) => (
                            <li key={v} className="flex gap-2 text-sm text-[#0a4d2c]/80">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#168821] mt-0.5" />
                              {v}
                            </li>
                          ))}
                        </ul>
                        {perfil.atencao && (
                          <p className="mt-4 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                            <strong>Atenção:</strong> {perfil.atencao}
                          </p>
                        )}
                        <div className="mt-5 flex flex-wrap gap-2">
                          <a
                            href={CADASTRO_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#168821] text-white text-sm font-semibold hover:bg-[#0f6b38] transition"
                          >
                            Cadastrar {perfil.sigla} na CADBRASIL
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}
            </article>

            <CtaBand title="MEI, ME ou EPP? A CADBRASIL orienta seu porte" />

            <div className="grid lg:grid-cols-2 gap-8 mt-4">
              <article id="requisitos-minimos" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a4d2c] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-[#168821]" />
                  Requisitos mínimos
                </h2>
                <ul className="space-y-3">
                  {requisitosMinimos.map((req) => (
                    <li
                      key={req.id}
                      className="rounded-lg border border-[#168821]/15 bg-white p-4 flex gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#168821] mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#0a4d2c]">{req.titulo}</p>
                        <p className="text-sm text-[#0a4d2c]/70 mt-0.5">{req.descricao}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </article>

              <article id="quem-nao-pode" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0a4d2c] mb-4 flex items-center gap-2">
                  <XCircle className="h-6 w-6 text-red-600" />
                  Quem não pode (ainda)
                </h2>
                <ul className="space-y-3">
                  {quemNaoPode.map((item) => (
                    <li
                      key={item.titulo}
                      className="rounded-lg border border-red-200/60 bg-red-50/50 p-4 flex gap-3"
                    >
                      <XCircle className="h-5 w-5 shrink-0 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#0a4d2c]">{item.titulo}</p>
                        <p className="text-sm text-[#0a4d2c]/70 mt-0.5">{item.descricao}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[#0a4d2c]/70">
                  Empresa inapta ou com pendências?{" "}
                  <Link to="/empresa-inapta" className="text-[#168821] font-medium hover:underline">
                    Veja como regularizar
                  </Link>{" "}
                  antes do cadastro SICAF.
                </p>
              </article>
            </div>

            <article id="como-verificar" className="scroll-mt-28 mt-12">
              <h2 className="text-2xl font-bold text-[#0a4d2c] mb-6 text-center">
                Como verificar se sua empresa pode se cadastrar
              </h2>
              <ol className="grid sm:grid-cols-3 gap-4">
                {passosElegibilidade.map((passo) => (
                  <li
                    key={passo.n}
                    className="rounded-xl border border-[#168821]/20 bg-white p-5 text-center shadow-sm"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#168821] text-white font-bold text-lg">
                      {passo.n}
                    </span>
                    <h3 className="mt-3 font-bold text-[#0a4d2c]">{passo.titulo}</h3>
                    <p className="mt-2 text-sm text-[#0a4d2c]/75 leading-relaxed">{passo.texto}</p>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </section>

        <section className="py-12 bg-[#f0f7f2]">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-8 text-center">
              Perguntas frequentes
            </h2>
            <div className="space-y-3 max-w-3xl mx-auto">
              {quemPodeFaqs.map((faq) => (
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
              <CtaBand compact title="Confirme sua elegibilidade e cadastre-se hoje" />
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
