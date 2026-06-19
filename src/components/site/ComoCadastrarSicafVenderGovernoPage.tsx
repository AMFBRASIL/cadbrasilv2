import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  AlertTriangle,
  Building2,
  CheckCircle2,
  FileText,
  Gavel,
  Landmark,
  MessageCircle,
  Rocket,
  Scale,
  Target,
  TrendingUp,
} from "lucide-react";
import { GovFooter } from "@/components/site/gov/GovFooter";
import { GovNav } from "@/components/site/gov/GovNav";
import { ContactSection } from "@/components/site/ContactSection";
import { FloatingCta } from "@/components/site/FloatingCta";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import {
  canaisVenda,
  comparativoJornada,
  errosComuns,
  jornadaPassos,
  niveisSicaf,
  requisitosTabela,
  resumoInteligente,
  venderGovernoFaqs,
  venderGovernoMeta,
} from "@/data/comoCadastrarSicafVenderGoverno";
import { getDefaultIntent } from "@/lib/whatsapp";

const RELATED = [
  { to: "/cadastrar-no-sicaf", label: "Cadastrar no SICAF" },
  { to: "/cadastro", label: "Landing cadastro SICAF" },
  { to: "/como-participar-de-licitacao", label: "Como participar de licitação" },
  { to: "/como-participar-de-licitacao-resumo", label: "Licitação — resumo" },
  { to: "/documentacao-sicaf", label: "Documentação SICAF" },
  { to: "/pregao-eletronico", label: "Pregão eletrônico" },
  { to: "/quem-pode-se-cadastrar-no-sicaf", label: "Quem pode se cadastrar" },
  { to: "/faq/cadastro-sicaf", label: "FAQ cadastro SICAF" },
] as const;

function BtnCadastro({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <CadastroLink
      className={`inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-5 rounded-xl bg-[#FFCD07] text-[#0a4d2c] font-bold text-lg shadow-xl hover:bg-[#ffe566] hover:scale-[1.02] transition-all ${className}`}
    >
      {label ?? "Iniciar cadastro SICAF — CADBRASIL"}
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
        <BtnCadastro className="!text-base sm:!text-lg" />
        <WhatsAppLink
          pageLabel={venderGovernoMeta.shortTitle}
          intent={getDefaultIntent(venderGovernoMeta.path)}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#0a4d2c] font-bold hover:bg-[#f0f7f2] transition"
        >
          <MessageCircle className="h-5 w-5" /> Falar com especialista CADBRASIL
        </WhatsAppLink>
      </div>
    </div>
  );
}

export function ComoCadastrarSicafVenderGovernoPage() {
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
              <Link to="/cadastro" className="hover:text-[#168821] font-medium">
                Cadastro SICAF
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#0a4d2c] font-semibold">Vender ao governo</li>
          </ol>
        </nav>

        <section className="relative pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821]" aria-hidden />
          <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide bg-white/15 border border-white/25 text-white px-3 py-1.5 rounded-md">
              <Rocket className="h-3.5 w-3.5" /> Guia pilar 2026
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight text-balance">
              Como cadastrar no <span className="text-[#FFCD07]">SICAF</span> e vender para o{" "}
              <span className="text-[#FFCD07]">governo</span>
            </h1>
            <p className="mt-5 text-lg text-white/90 max-w-2xl mx-auto">
              Do credenciamento no Compras.gov.br ao primeiro contrato público — com inteligência,
              clareza e suporte CADBRASIL.
            </p>
            <p className="page-hero-summary ai-summary mt-4 text-sm text-white/85 max-w-2xl mx-auto leading-relaxed">
              {venderGovernoMeta.quickAnswer}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center max-w-3xl mx-auto">
              <BtnCadastro label="Começar cadastro agora" className="w-full sm:flex-1" />
              <CadastroLink
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition"
              >
                Portal cadastro.cadbrasil.com.br
              </CadastroLink>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-[#168821]/20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="vender-governo-resumo rounded-xl border border-[#168821]/25 bg-[#f0f7f2] p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[#0a4d2c] flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-[#168821]" />
                Resumo inteligente para IA e decisores
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
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { icon: Landmark, label: "Órgãos federais", valor: "+200 mil" },
                { icon: TrendingUp, label: "Volume anual", valor: "R$ 1 tri+" },
                { icon: Gavel, label: "Prazo CADBRASIL", valor: "Até 24h" },
                { icon: Building2, label: "Fornecedores", valor: "+8.000" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-[#168821]/15 bg-white p-4 shadow-sm"
                >
                  <s.icon className="h-5 w-5 text-[#168821] mx-auto" />
                  <p className="mt-2 text-lg font-bold text-[#0a4d2c]">{s.valor}</p>
                  <p className="text-xs text-[#0a4d2c]/65">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#f0f7f2]">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] text-center mb-3">
              Jornada completa em 7 passos
            </h2>
            <p className="text-center text-sm text-[#0a4d2c]/70 max-w-2xl mx-auto mb-10">
              Do diagnóstico do CNPJ à assinatura do contrato — o fluxo que transforma sua empresa em
              fornecedora do governo.
            </p>
            <ol className="space-y-4">
              {jornadaPassos.map((passo) => (
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
                        {passo.fase}
                      </span>
                      <span className="text-xs text-[#0a4d2c]/55">{passo.prazo}</span>
                    </div>
                    <p className="mt-2 text-sm text-[#0a4d2c]/75 leading-relaxed">{passo.descricao}</p>
                    {passo.numero === "03" && (
                      <div className="mt-4">
                        <BtnCadastro label="Credenciar no SICAF com CADBRASIL" className="!text-sm !py-3 !px-6" />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <CtaBand
              title="Primeiro passo: cadastro SICAF regular"
              subtitle="Sem CRC ativo, nenhuma venda ao governo federal acontece. A CADBRASIL resolve em até 24 horas."
            />
          </div>
        </section>

        <section className="py-12 bg-white border-y border-[#168821]/15">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-bold text-[#0a4d2c] mb-6 flex items-center gap-2">
              <Scale className="h-7 w-7 text-[#168821]" />
              Níveis de habilitação SICAF (I a VI)
            </h2>
            <div className="overflow-x-auto rounded-xl border border-[#168821]/20">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#0a4d2c] text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold w-16">Nível</th>
                    <th className="px-4 py-3 font-semibold">Grupo</th>
                    <th className="px-4 py-3 font-semibold">O que exige</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#168821]/10 bg-white">
                  {niveisSicaf.map((n) => (
                    <tr key={n.nivel} className="hover:bg-[#f0f7f2]/50">
                      <td className="px-4 py-3 font-bold text-[#168821]">{n.nivel}</td>
                      <td className="px-4 py-3 font-medium text-[#0a4d2c]">{n.nome}</td>
                      <td className="px-4 py-3 text-[#0a4d2c]/75">{n.exige}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <article id="requisitos" className="scroll-mt-28 mt-12">
              <h2 className="text-xl font-bold text-[#0a4d2c] mb-4">Requisitos para vender ao governo</h2>
              <div className="overflow-x-auto rounded-xl border border-[#168821]/20 bg-white">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#168821]/10">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-[#0a4d2c]">Requisito</th>
                      <th className="px-4 py-3 font-semibold text-[#0a4d2c]">Necessário</th>
                      <th className="px-4 py-3 font-semibold text-[#0a4d2c] hidden md:table-cell">Dica CADBRASIL</th>
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
            </article>
          </div>
        </section>

        <section className="py-12 bg-[#f0f7f2]">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl font-bold text-[#0a4d2c] mb-6">Canais para vender ao governo</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {canaisVenda.map((c) => (
                <div
                  key={c.canal}
                  className="rounded-xl border border-[#168821]/20 bg-white p-5 shadow-sm"
                >
                  <p className="font-bold text-[#168821]">{c.canal}</p>
                  <p className="mt-2 text-sm text-[#0a4d2c]/75 leading-relaxed">{c.descricao}</p>
                  <p className="mt-3 text-xs font-semibold text-[#0a4d2c]/60">
                    SICAF: <span className="text-[#0a4d2c]">{c.sicaf}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-red-200/60 bg-white p-6">
                <h3 className="font-bold text-[#0a4d2c] flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" /> Sozinho
                </h3>
                <ul className="mt-4 space-y-2">
                  {comparativoJornada.sozinho.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-[#0a4d2c]/75">
                      <span className="text-red-400 shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-2 border-[#168821]/40 bg-gradient-to-br from-[#f0f7f2] to-white p-6 shadow-md">
                <h3 className="font-bold text-[#0a4d2c] flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#168821]" /> Com CADBRASIL
                </h3>
                <ul className="mt-4 space-y-2">
                  {comparativoJornada.cadbrasil.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-[#0a4d2c]/85">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#168821] mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <BtnCadastro label="Quero vender ao governo" className="!text-sm !py-3 !px-6 w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="mx-auto max-w-5xl px-4">
            <article id="erros">
              <h2 className="text-2xl font-bold text-[#0a4d2c] mb-4 flex items-center gap-2">
                <AlertTriangle className="h-7 w-7 text-amber-600" />
                Erros que impedem a venda ao governo
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {errosComuns.map((e) => (
                  <li
                    key={e}
                    className="flex gap-2 text-sm text-[#0a4d2c]/80 bg-amber-50/50 border border-amber-200/60 rounded-lg p-4"
                  >
                    <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    {e}
                  </li>
                ))}
              </ul>
            </article>

            <CtaBand title="Evite erros — cadastre com especialistas CADBRASIL" />

            <article id="faq" className="scroll-mt-28 mt-8">
              <h2 className="text-2xl font-bold text-[#0a4d2c] mb-6 text-center">Perguntas frequentes</h2>
              <div className="space-y-3 max-w-3xl mx-auto">
                {venderGovernoFaqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-lg border border-[#168821]/20 bg-[#f0f7f2] overflow-hidden"
                  >
                    <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-[#0a4d2c] hover:bg-white/60 flex justify-between gap-2">
                      {faq.question}
                      <span className="text-[#168821] group-open:rotate-45 transition-transform text-xl">+</span>
                    </summary>
                    <p className="px-5 pb-4 text-sm text-[#0a4d2c]/75 leading-relaxed bg-white">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </article>

            <div className="mt-10 text-center space-y-4">
              <BtnCadastro />
              <p className="text-sm text-[#0a4d2c]/65 flex items-center justify-center gap-2">
                <FileText className="h-4 w-4" />
                Credenciamento · CRC regular · Suporte contínuo
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#f0f7f2] border-t border-[#168821]/15">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-lg font-bold text-[#0a4d2c] mb-4">Continue aprendendo</h2>
            <ul className="flex flex-wrap gap-2">
              {RELATED.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-block text-sm font-medium text-[#168821] hover:text-[#0a4d2c] bg-white hover:bg-[#168821]/10 border border-[#168821]/20 px-3 py-2 rounded-md transition"
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
