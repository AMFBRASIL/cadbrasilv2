import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileText, HelpCircle, MessageCircle } from "lucide-react";
import { GovFooter } from "@/components/site/gov/GovFooter";
import { GovNav } from "@/components/site/gov/GovNav";
import { ContactSection } from "@/components/site/ContactSection";
import { FloatingCta } from "@/components/site/FloatingCta";
import { CADASTRO_URL, WHATSAPP_URL } from "@/components/site/PageShell";
import type { LandingPageData } from "@/data/sicafLandingPages";

const RELATED_LINKS = [
  { to: "/como-participar-de-licitacao", label: "Como participar de licitação" },
  { to: "/cadastro-fornecedor-governo", label: "Cadastro fornecedor governo" },
  { to: "/pregao-eletronico", label: "Pregão eletrônico" },
  { to: "/documentacao-licitacao", label: "Documentação para licitação" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Guia cadastro SICAF passo a passo" },
  { to: "/faq", label: "Central de perguntas frequentes" },
] as const;

export function GovLandingPage({ page }: { page: LandingPageData }) {
  const related = RELATED_LINKS.filter((l) => l.to !== page.path);

  return (
    <div className="theme-gov-compras min-h-screen bg-[#f0f7f2] pb-16 sm:pb-0">
      <GovNav />
      <main>
        <nav
          aria-label="Breadcrumb"
          className="pt-[5.5rem] sm:pt-28 pb-2 mx-auto max-w-4xl px-4 text-sm text-[#0a4d2c]/70"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-[#168821] font-medium">
                Início
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-[#0a4d2c] font-semibold">{page.shortTitle}</li>
          </ol>
        </nav>

        <section className="relative pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a4d2c] via-[#0f6b38] to-[#168821] opacity-[0.97]" aria-hidden />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(255,255,255,0.2) 12px, rgba(255,255,255,0.2) 13px)`,
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-4xl px-4 text-center py-10 sm:py-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold bg-white/15 border border-white/25 text-white px-3 py-1.5 rounded-md">
              {page.eyebrow}
            </span>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-white text-balance">
              {page.title}{" "}
              {page.highlight && <span className="text-[#FFCD07]">{page.highlight}</span>}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              {page.description}
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
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md bg-white text-[#0a4d2c] font-semibold hover:bg-[#f0f7f2] transition"
              >
                <MessageCircle className="h-4 w-4" /> Falar com especialista
              </a>
            </div>
          </div>
        </section>

        <section className="pb-6 -mt-4 relative z-10">
          <div className="mx-auto max-w-4xl px-4">
            <p className="rounded-lg border-2 border-[#168821]/25 bg-white px-4 py-3 text-sm text-[#0a4d2c]/80 leading-relaxed shadow-md">
              <strong className="text-[#0a4d2c]">Resposta rápida:</strong>{" "}
              <span className="page-hero-summary">{page.quickAnswer}</span>
            </p>
          </div>
        </section>

        <section className="py-10 bg-white border-y border-[#168821]/15">
          <div className="mx-auto max-w-4xl px-4 space-y-10">
            {page.itemList && page.itemList.length > 0 && (
              <article id="checklist-documentos" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-4">
                  Checklist de documentos
                </h2>
                <ol className="space-y-2 rounded-lg border border-[#168821]/20 bg-[#f0f7f2] p-5">
                  {page.itemList.map((item, i) => (
                    <li key={item} className="flex gap-3 text-sm text-[#0a4d2c]/80">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#168821] text-white font-semibold text-xs">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </article>
            )}

            {page.sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-4">{section.title}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)} className="text-[#0a4d2c]/75 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-2">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-[#0a4d2c]/80">
                        <CheckCircle2 className="h-4 w-4 text-[#168821] mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            {page.howToSteps && page.howToSteps.length > 0 && (
              <article id="passo-a-passo" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-4">Passo a passo</h2>
                <ol className="space-y-3">
                  {page.howToSteps.map((step, i) => (
                    <li
                      key={step.name}
                      id={`passo-${i + 1}`}
                      className="scroll-mt-28 rounded-lg border border-[#168821]/20 bg-[#f0f7f2] p-5 flex gap-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#168821] text-white font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-semibold text-[#0a4d2c]">{step.name}</h3>
                        <p className="mt-1 text-sm text-[#0a4d2c]/75 leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            )}
          </div>
        </section>

        <section className="py-8 bg-[#e8f3eb]">
          <div className="mx-auto max-w-4xl px-4">
            <div className="rounded-lg border-2 border-[#FFCD07]/40 bg-gradient-to-br from-[#0a4d2c] to-[#168821] p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xl">
              <div>
                <p className="font-bold text-lg">Cadastre sua empresa no SICAF com a CADBRASIL</p>
                <p className="mt-1 text-sm text-white/85">
                  Habilitação em até 24h · Validação documental · Especialistas em licitações
                </p>
              </div>
              <a
                href={CADASTRO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#FFCD07] text-[#0a4d2c] font-bold shrink-0 hover:bg-[#ffe566] transition"
              >
                Iniciar cadastro
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#f0f7f2]">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a4d2c] mb-6 flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-[#168821]" />
              Perguntas frequentes
            </h2>
            <div className="space-y-3">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg border border-[#168821]/20 bg-white overflow-hidden shadow-sm"
                >
                  <summary className="cursor-pointer p-5 font-semibold text-[#0a4d2c] list-none flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-[#168821] text-xl group-open:rotate-45 transition">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-[#0a4d2c]/75 leading-relaxed border-t border-[#168821]/15 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white border-t border-[#168821]/15">
          <div className="mx-auto max-w-4xl px-4 rounded-lg border border-[#168821]/20 bg-[#f0f7f2] p-6">
            <h3 className="font-semibold text-lg text-[#0a4d2c] flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#168821]" />
              Continue explorando
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-2">
              {related.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[#168821] text-sm font-medium hover:underline"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-[#f0f7f2]">
          <ContactSection />
        </div>
      </main>
      <GovFooter />
      <FloatingCta />
    </div>
  );
}
