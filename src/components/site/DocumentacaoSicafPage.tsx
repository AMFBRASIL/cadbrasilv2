import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  FileText,
  MessageCircle,
  ShieldCheck,
  Clock,
  Layers,
} from "lucide-react";
import { GovFooter } from "@/components/site/gov/GovFooter";
import { GovNav } from "@/components/site/gov/GovNav";
import { ContactSection } from "@/components/site/ContactSection";
import { FloatingCta } from "@/components/site/FloatingCta";
import { CADASTRO_URL } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import {
  documentacaoSicafFaqs,
  documentacaoSicafMeta,
  niveisDocumentacao,
} from "@/data/documentacaoSicaf";
import { getDefaultIntent } from "@/lib/whatsapp";

const RELATED = [
  { to: "/cadastrar-no-sicaf", label: "Cadastrar no SICAF" },
  { to: "/documentos-necessarios-cadastro-sicaf", label: "Documentos cadastro SICAF (guia)" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Cadastro passo a passo" },
  { to: "/regularidade-fiscal", label: "Regularidade fiscal" },
  { to: "/emitir-crc", label: "Emitir CRC" },
  { to: "/documentacao-licitacao", label: "Documentação para licitação" },
  { to: "/quem-pode-se-cadastrar-no-sicaf", label: "Quem pode se cadastrar no SICAF" },
  { to: "/faq", label: "Perguntas frequentes" },
] as const;

const totalDocs = niveisDocumentacao.reduce((n, l) => n + l.documentos.length, 0);

function CtaBand({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-xl border-2 border-[#168821]/30 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-6 sm:p-8 text-center shadow-lg ${compact ? "" : "my-10"}`}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        {compact ? "Pronto para validar sua documentação?" : "Valide seus documentos e inicie o SICAF"}
      </h2>
      <p className="mt-2 text-sm sm:text-base text-white/90 max-w-xl mx-auto">
        A CADBRASIL organiza o checklist, corrige pendências e conduz o credenciamento até o CRC regular.
      </p>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <a
          href={CADASTRO_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold hover:bg-[#ffe566] transition"
        >
          Fazer cadastro SICAF
          <ArrowRight className="h-4 w-4" />
        </a>
        <WhatsAppLink
          pageLabel={documentacaoSicafMeta.shortTitle}
          intent={getDefaultIntent(documentacaoSicafMeta.path)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition"
        >
          <MessageCircle className="h-4 w-4" /> Tirar dúvidas no WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  );
}

export function DocumentacaoSicafPage() {
  const allIds = useMemo(
    () => niveisDocumentacao.flatMap((n) => n.documentos.map((d) => d.id)),
    [],
  );
  const [checked, setChecked] = useState<Set<string>>(() => new Set());

  const progress = checked.size;
  const progressPct = allIds.length ? Math.round((progress / allIds.length) * 100) : 0;

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
            <li className="text-[#0a4d2c] font-semibold">{documentacaoSicafMeta.shortTitle}</li>
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
              <FileText className="h-3.5 w-3.5" /> Referência documental SICAF
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-white text-balance">
              Documentação completa para{" "}
              <span className="text-[#FFCD07]">cadastro no SICAF</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Checklist profissional por nível de habilitação (I a VI), validades de certidões e
              pré-requisitos. Use como guia interno ou confie na CADBRASIL para conduzir todo o
              credenciamento.
            </p>
            <p className="page-hero-summary mt-4 text-sm text-white/80 max-w-2xl mx-auto">
              Para credenciar no SICAF você precisa de e-CNPJ, dados cadastrais (Nível I), documentos
              jurídicos (II), certidões fiscais e trabalhistas válidas (III) e, conforme o edital,
              comprovações técnicas e financeiras (IV e V) e linhas de fornecimento (VI).
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
                pageLabel={documentacaoSicafMeta.shortTitle}
                intent={getDefaultIntent(documentacaoSicafMeta.path)}
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
              { icon: FileText, label: `${totalDocs}+ itens`, sub: "no checklist completo" },
              { icon: Layers, label: "6 níveis", sub: "de habilitação SICAF" },
              { icon: Clock, label: "180 dias", sub: "validade típica de certidões" },
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
            <article id="checklist-interativo" className="scroll-mt-28">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c]">
                    Checklist por nível
                  </h2>
                  <p className="mt-2 text-[#0a4d2c]/75 max-w-2xl leading-relaxed">
                    Marque os itens que sua empresa já possui. Itens em{" "}
                    <strong className="text-[#168821]">verde</strong> indicam documentos
                    normalmente obrigatórios na fase correspondente.
                  </p>
                </div>
                <div className="shrink-0 rounded-lg border border-[#168821]/25 bg-[#f0f7f2] px-4 py-3 text-sm">
                  <span className="font-semibold text-[#0a4d2c]">
                    {progress} / {allIds.length}
                  </span>{" "}
                  <span className="text-[#0a4d2c]/70">({progressPct}%)</span>
                  <div className="mt-2 h-2 w-40 max-w-full rounded-full bg-[#168821]/20 overflow-hidden">
                    <div
                      className="h-full bg-[#168821] transition-all duration-300"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {niveisDocumentacao.map((nivel) => (
                  <div
                    key={nivel.nivel}
                    id={`nivel-${nivel.nivel.toLowerCase()}`}
                    className="scroll-mt-28 rounded-xl border border-[#168821]/20 overflow-hidden"
                  >
                    <div className="bg-[#0a4d2c] px-5 py-4">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center justify-center min-w-[2.5rem] px-2 py-0.5 rounded bg-[#FFCD07] text-[#0a4d2c] text-xs font-bold">
                          {nivel.nivel}
                        </span>
                        <h3 className="text-lg font-bold text-white">{nivel.titulo}</h3>
                      </div>
                      <p className="mt-1 text-sm text-white/85">{nivel.descricao}</p>
                    </div>
                    <ul className="divide-y divide-[#168821]/10 bg-white">
                      {nivel.documentos.map((doc) => {
                        const isChecked = checked.has(doc.id);
                        return (
                          <li key={doc.id}>
                            <button
                              type="button"
                              onClick={() => toggle(doc.id)}
                              className={`w-full flex gap-3 items-start text-left px-5 py-4 transition hover:bg-[#f0f7f2]/80 ${
                                isChecked ? "bg-[#f0f7f2]/60" : ""
                              }`}
                            >
                              <span className="mt-0.5 shrink-0 text-[#168821]">
                                {isChecked ? (
                                  <CheckCircle2 className="h-5 w-5" aria-hidden />
                                ) : (
                                  <Circle className="h-5 w-5 text-[#168821]/40" aria-hidden />
                                )}
                              </span>
                              <span className="flex-1 min-w-0">
                                <span
                                  className={`font-medium ${
                                    doc.obrigatorio ? "text-[#0a4d2c]" : "text-[#0a4d2c]/90"
                                  }`}
                                >
                                  {doc.nome}
                                  {doc.obrigatorio && (
                                    <span className="ml-2 text-[10px] uppercase tracking-wide font-bold text-[#168821]">
                                      Essencial
                                    </span>
                                  )}
                                </span>
                                {doc.detalhe && (
                                  <span className="block text-sm text-[#0a4d2c]/65 mt-0.5">
                                    {doc.detalhe}
                                  </span>
                                )}
                                {doc.validade && (
                                  <span className="inline-block mt-1 text-xs font-medium text-[#0a4d2c]/55 bg-[#f0f7f2] px-2 py-0.5 rounded">
                                    Validade: {doc.validade}
                                  </span>
                                )}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <CtaBand />

            <article id="mei-porte" className="scroll-mt-28 mt-12">
              <h2 className="text-2xl font-bold text-[#0a4d2c] mb-4 flex items-center gap-2">
                <ShieldCheck className="h-7 w-7 text-[#168821]" />
                MEI, ME e EPP
              </h2>
              <div className="rounded-lg border border-[#168821]/20 bg-[#f0f7f2] p-5 space-y-3 text-[#0a4d2c]/80 leading-relaxed text-sm sm:text-base">
                <p>
                  <strong className="text-[#0a4d2c]">MEI:</strong> utiliza CCMEI em substituição a
                  contrato social, com certidões simplificadas, mas mantém exigência de e-CNPJ e
                  regularidade fiscal/trabalhista para habilitação.
                </p>
                <p>
                  <strong className="text-[#0a4d2c]">ME e EPP:</strong> seguem estrutura completa de
                  Níveis I a III; níveis IV a VI dependem do objeto e do valor estimado do edital.
                </p>
                <p>
                  <strong className="text-[#0a4d2c]">Demais portes:</strong> atenção redobrada a
                  balanços auditados, atestados de maior porte e cadastro em CATMAT/CATSER quando o
                  edital exigir.
                </p>
              </div>
            </article>

            <article id="boas-praticas" className="scroll-mt-28 mt-12">
              <h2 className="text-2xl font-bold text-[#0a4d2c] mb-4">Boas práticas documentais</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Renove certidões com 30 a 45 dias de antecedência do vencimento.",
                  "Mantenha o e-CNPJ válido e com poderes alinhados ao representante no portal.",
                  "Consolide alterações contratuais antes do envio — versões desatualizadas geram indeferimento.",
                  "Arquive PDFs legíveis, sem cortes e com assinaturas quando exigidas.",
                  "Cruze o checklist com o edital: o SICAF não substitui exigências específicas do pregão.",
                  "Monitore o CRC: status irregular bloqueia habilitação mesmo com documentos em dia.",
                ].map((tip) => (
                  <li
                    key={tip}
                    className="flex gap-2 text-sm text-[#0a4d2c]/80 bg-white border border-[#168821]/15 rounded-lg p-4"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#168821] mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="py-12 bg-[#f0f7f2]">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-8 text-center">
              Perguntas frequentes
            </h2>
            <div className="space-y-3 max-w-3xl mx-auto">
              {documentacaoSicafFaqs.map((faq) => (
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
              <CtaBand compact />
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
