import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Gavel,
  MessageCircle,
  Scale,
  Target,
} from "lucide-react";
import { GovFooter } from "@/components/site/gov/GovFooter";
import { GovNav } from "@/components/site/gov/GovNav";
import { ContactSection } from "@/components/site/ContactSection";
import { FloatingCta } from "@/components/site/FloatingCta";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import {
  errosFatais,
  fasesCertame,
  licitacaoResumoFaqs,
  licitacaoResumoMeta,
  modalidades,
  passosLicitacao,
  requisitosTabela,
  resumoInteligente,
} from "@/data/comoParticiparLicitacaoResumo";
import { getDefaultIntent } from "@/lib/whatsapp";

const RELATED = [
  { to: "/como-participar-de-licitacao", label: "Guia completo licitação" },
  { to: "/pregao-eletronico", label: "Pregão eletrônico" },
  { to: "/documentacao-licitacao", label: "Documentação licitação" },
  { to: "/cadastro", label: "Cadastro SICAF" },
  { to: "/documentacao-sicaf", label: "Documentos SICAF" },
  { to: "/faq/licitacoes-publicas", label: "FAQ licitações" },
] as const;

function BtnCadastroGrande({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <CadastroLink
      className={`inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 rounded-xl bg-[#FFCD07] text-[#0a4d2c] font-bold text-lg shadow-xl hover:bg-[#ffe566] hover:scale-[1.02] transition-all ${className}`}
    >
      {label ?? "Cadastrar no SICAF — CADBRASIL"}
      <ArrowRight className="h-5 w-5 shrink-0" />
    </CadastroLink>
  );
}

function CtaBand({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="rounded-2xl border-2 border-[#168821]/30 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-8 sm:p-10 text-center shadow-xl my-10">
      <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
        <BtnCadastroGrande className="!text-base sm:!text-lg" />
        <WhatsAppLink
          pageLabel={licitacaoResumoMeta.shortTitle}
          intent={getDefaultIntent(licitacaoResumoMeta.path)}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0a4d2c] font-bold hover:bg-[#f0f7f2] transition"
        >
          <MessageCircle className="h-5 w-5" /> Falar com especialista CADBRASIL
        </WhatsAppLink>
      </div>
    </div>
  );
}

export function ComoParticiparLicitacaoResumoPage() {
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
            <li>
              <Link to="/como-participar-de-licitacao" className="hover:text-[#168821] font-medium">
                Licitação
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#0a4d2c] font-semibold">Resumo</li>
          </ol>
        </nav>

        <section className="relative pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821]" aria-hidden />
          <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide bg-white/15 border border-white/25 text-white px-3 py-1.5 rounded-md">
              <Gavel className="h-3.5 w-3.5" /> Guia resumido 2026
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Como participar de <span className="text-[#FFCD07]">licitação</span> — resumo prático
            </h1>
            <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
              Do cadastro SICAF ao contrato: o essencial para vender ao governo, sem enrolação.
            </p>
            <p className="page-hero-summary ai-summary mt-4 text-sm text-white/85 max-w-2xl mx-auto leading-relaxed">
              {licitacaoResumoMeta.quickAnswer}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center max-w-3xl mx-auto">
              <BtnCadastroGrande label="Começar pelo SICAF — cadastro CADBRASIL" className="w-full sm:flex-1" />
              <CadastroLink
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition"
              >
                Acessar portal de cadastro
              </CadastroLink>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-[#168821]/20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="licitacao-resumo-box rounded-xl border border-[#168821]/25 bg-[#f0f7f2] p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#0a4d2c] flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-[#168821]" />
                Resumo inteligente em 7 pontos
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {resumoInteligente.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-[#0a4d2c]/85">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#168821] mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 text-center">
              <BtnCadastroGrande label="Regularizar SICAF antes de licitar" className="!text-base" />
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f0f7f2]">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] text-center mb-10">
              Passo a passo para participar
            </h2>
            <ol className="space-y-4">
              {passosLicitacao.map((passo) => (
                <li
                  key={passo.id}
                  id={passo.id}
                  className="scroll-mt-28 flex gap-4 sm:gap-6 rounded-xl border border-[#168821]/20 bg-white p-5 sm:p-6 shadow-sm"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#168821] text-white font-bold">
                    {passo.numero}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-[#0a4d2c] text-lg">{passo.titulo}</h3>
                      <span className="text-xs font-medium text-[#168821] bg-[#f0f7f2] px-2 py-0.5 rounded border border-[#168821]/20">
                        {passo.prazo}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#0a4d2c]/75 leading-relaxed">{passo.descricao}</p>
                    {passo.numero === "02" && (
                      <div className="mt-4">
                        <BtnCadastroGrande label="Fazer cadastro SICAF agora" className="!text-sm !py-3 !px-6" />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <CtaBand
              title="Sem SICAF regular, você não habilita no federal"
              subtitle="A CADBRASIL conduz credenciamento, documentação e CRC em fluxo assistido."
            />

            <article id="requisitos" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-[#0a4d2c] mb-6 flex items-center gap-2">
                <Scale className="h-7 w-7 text-[#168821]" />
                Requisitos para participar
              </h2>
              <div className="overflow-x-auto rounded-xl border border-[#168821]/20 bg-white">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#0a4d2c] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Requisito</th>
                      <th className="px-4 py-3 font-semibold">O que é necessário</th>
                      <th className="px-4 py-3 font-semibold hidden md:table-cell">Dica CADBRASIL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#168821]/10">
                    {requisitosTabela.map((row) => (
                      <tr key={row.requisito} className="hover:bg-[#f0f7f2]/50">
                        <td className="px-4 py-3 font-medium text-[#0a4d2c]">{row.requisito}</td>
                        <td className="px-4 py-3 text-[#0a4d2c]/75">{row.necessario}</td>
                        <td className="px-4 py-3 text-[#0a4d2c]/65 hidden md:table-cell">{row.dica}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-center">
                <BtnCadastroGrande label="Resolver requisitos com a CADBRASIL" className="!text-base" />
              </div>
            </article>
          </div>
        </section>

        <section className="py-12 bg-white border-y border-[#168821]/15">
          <div className="mx-auto max-w-5xl px-4 grid lg:grid-cols-2 gap-10">
            <article id="modalidades">
              <h2 className="text-xl font-bold text-[#0a4d2c] mb-4">Modalidades de licitação</h2>
              <ul className="space-y-3">
                {modalidades.map((m) => (
                  <li key={m.nome} className="rounded-lg border border-[#168821]/15 p-4 bg-[#f0f7f2]">
                    <p className="font-bold text-[#168821]">{m.nome}</p>
                    <p className="text-sm text-[#0a4d2c]/75 mt-1">{m.uso}</p>
                  </li>
                ))}
              </ul>
            </article>
            <article id="fases">
              <h2 className="text-xl font-bold text-[#0a4d2c] mb-4">Fases do certame</h2>
              <ol className="space-y-3">
                {fasesCertame.map((f, i) => (
                  <li key={f.fase} className="flex gap-3 rounded-lg border border-[#168821]/15 p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#168821]/15 text-[#168821] font-bold text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[#0a4d2c]">{f.fase}</p>
                      <p className="text-sm text-[#0a4d2c]/70">{f.descricao}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>
          <div className="mx-auto max-w-5xl px-4 mt-8">
            <CtaBand title="Primeiro passo: cadastro SICAF regular" />
          </div>
        </section>

        <section className="py-12 bg-[#f0f7f2]">
          <div className="mx-auto max-w-5xl px-4">
            <article id="erros-fatais" className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-[#0a4d2c] mb-4 flex items-center gap-2">
                <AlertTriangle className="h-7 w-7 text-amber-600" />
                Erros que eliminam sua empresa
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {errosFatais.map((e) => (
                  <li
                    key={e}
                    className="flex gap-2 text-sm text-[#0a4d2c]/80 bg-white border border-amber-200/60 rounded-lg p-4"
                  >
                    <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    {e}
                  </li>
                ))}
              </ul>
            </article>

            <article id="faq" className="scroll-mt-28 mt-12">
              <h2 className="text-2xl font-bold text-[#0a4d2c] mb-6 text-center">Perguntas frequentes</h2>
              <div className="space-y-3 max-w-3xl mx-auto">
                {licitacaoResumoFaqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg border border-[#168821]/20 bg-white overflow-hidden"
                  >
                    <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-[#0a4d2c] hover:bg-[#f0f7f2]/50 flex justify-between gap-2">
                      {faq.question}
                      <span className="text-[#168821] group-open:rotate-45 transition-transform text-xl">+</span>
                    </summary>
                    <p className="px-5 pb-4 text-sm text-[#0a4d2c]/75 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </article>

            <div className="mt-10 text-center space-y-4">
              <BtnCadastroGrande />
              <p className="text-sm text-[#0a4d2c]/65 flex items-center justify-center gap-2">
                <FileText className="h-4 w-4" />
                Credenciamento assistido · CRC regular · Até 24 horas
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white border-t border-[#168821]/15">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-lg font-bold text-[#0a4d2c] mb-4">Aprofunde o tema</h2>
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
