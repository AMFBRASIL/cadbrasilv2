import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, FileText, HelpCircle } from "lucide-react";
import { CADASTRO_URL, InlineCta, PageHero, PageShell, WHATSAPP_URL } from "@/components/site/PageShell";
import type { LandingPageData } from "@/data/sicafLandingPages";

export function SicafLandingPage({ page }: { page: LandingPageData }) {
  return (
    <PageShell breadcrumbs={[{ label: page.shortTitle }]}>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        highlight={page.highlight}
        description={page.description}
        primaryCta={{ label: "Iniciar cadastro SICAF", href: CADASTRO_URL, external: true }}
        secondaryCta={{ label: "Falar com especialista", href: WHATSAPP_URL, external: true }}
      />

      <section className="pb-4">
        <div className="mx-auto max-w-4xl px-4">
          <p className="rounded-xl border border-brand/20 bg-brand/5 px-4 py-3 text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Resposta rápida:</strong>{" "}
            <span className="page-hero-summary">{page.quickAnswer}</span>
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 space-y-10">
          {page.sections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 20)} className="text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-brand" />
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            {page.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card"
              >
                <summary className="cursor-pointer p-5 font-semibold list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-brand text-xl group-open:rotate-45 transition">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 rounded-2xl border border-border bg-card p-6">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <FileText className="h-5 w-5 text-brand" />
            Continue explorando
          </h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-2">
            <Link to="/guia/cadastro-sicaf-passo-passo" className="text-brand text-sm font-medium hover:underline">
              Guia completo: cadastro SICAF passo a passo →
            </Link>
            <Link to="/faq" className="text-brand text-sm font-medium hover:underline">
              Central FAQ com temas especializados →
            </Link>
            <Link to="/como-funciona" className="text-brand text-sm font-medium hover:underline">
              Como funciona o processo CADBRASIL →
            </Link>
            <Link to="/assistente" className="text-brand text-sm font-medium hover:underline">
              Assistente CADBRASIL com IA →
            </Link>
          </div>
          <a
            href={CADASTRO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-brand text-brand-foreground font-semibold"
          >
            Começar agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <InlineCta />
    </PageShell>
  );
}
