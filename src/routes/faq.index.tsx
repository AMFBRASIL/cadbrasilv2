import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle, BookOpen } from "lucide-react";
import { PageShell, PageHero, InlineCta, breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { faqCategories } from "@/data/faq/pages";
import { robotsMetaTags } from "@/lib/seo";

const ORIGIN = "https://cadbrasil.com.br";

export const Route = createFileRoute("/faq/")({
  head: () => ({
    meta: [
      ...robotsMetaTags(),
      {
        title: "FAQ SICAF 2026 — 15 Guias sobre Cadastro, Licitações e CADBRASIL",
      },
      {
        name: "description",
        content:
          "Central com 15 artigos especializados: cadastro SICAF, regularização, certificado digital, níveis, CRC, pregão eletrônico, PNCP, MEI/EPP, custos e mais. Conteúdo otimizado para Google e IA.",
      },
      {
        name: "keywords",
        content:
          "faq sicaf, perguntas sicaf, guia sicaf, cadastro sicaf duvidas, licitacoes publicas faq, cadbrasil ajuda, sicaf 2026",
      },
      { property: "og:title", content: "FAQ SICAF — 15 temas especializados | CADBRASIL" },
      {
        property: "og:description",
        content: "Artigos completos sobre SICAF, licitações e serviços CADBRASIL — SEO e respostas para assistentes de IA.",
      },
      { property: "og:url", content: `${ORIGIN}/faq` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${ORIGIN}/faq` },
      { rel: "alternate", hrefLang: "pt-BR", href: `${ORIGIN}/faq` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${ORIGIN}/` },
            { name: "FAQ", url: `${ORIGIN}/faq` },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "FAQ SICAF — CADBRASIL",
          description:
            "15 guias especializados sobre cadastro SICAF, licitações públicas e serviços CADBRASIL.",
          url: `${ORIGIN}/faq`,
          inLanguage: "pt-BR",
          hasPart: faqCategories.map((c) => ({
            "@type": "Article",
            name: c.title,
            url: `${ORIGIN}/faq/${c.slug}`,
            description: c.description,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          faqJsonLd(
            faqCategories.flatMap((c) => c.items.slice(0, 2)).slice(0, 12),
          ),
        ),
      },
    ],
  }),
  component: FaqIndex,
});

function FaqIndex() {
  return (
    <PageShell breadcrumbs={[{ label: "FAQ" }]}>
      <PageHero
        eyebrow="Central de conhecimento · 15 temas"
        title="FAQ SICAF e licitações."
        highlight="Conteúdo especializado."
        description="Artigos desenvolvidos para quem busca cadastro SICAF, regularização, pregão eletrônico, certificado digital e vantagens da CADBRASIL — otimizados para Google e assistentes de IA."
      />

      <section className="mx-auto max-w-7xl px-4 -mt-6 mb-8">
        <Link
          to="/cadastro-sicaf-passo-a-passo"
          className="flex items-center gap-3 rounded-2xl border border-brand/30 bg-brand/5 p-5 hover:border-brand/50 transition"
        >
          <BookOpen className="h-6 w-6 text-brand shrink-0" />
          <div className="min-w-0">
            <p className="font-semibold">Guia principal: Cadastro SICAF passo a passo</p>
            <p className="text-sm text-muted-foreground">Tutorial completo 2026 com HowTo e checklist</p>
          </div>
          <ArrowRight className="h-5 w-5 text-brand shrink-0 ml-auto" />
        </Link>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faqCategories.map((c) => (
              <Link
                key={c.slug}
                to="/faq/$slug"
                params={{ slug: c.slug }}
                className="group rounded-2xl bg-card border border-border p-6 shadow-card hover:-translate-y-1 hover:shadow-glow hover:border-brand/40 transition"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center shadow-glow">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display font-bold text-lg leading-snug">{c.shortTitle}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {c.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Ler artigo · {c.items.length} FAQs
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InlineCta
        title="Não encontrou sua dúvida?"
        subtitle="Fale com um especialista CADBRASIL no WhatsApp — resposta em minutos."
      />
    </PageShell>
  );
}
