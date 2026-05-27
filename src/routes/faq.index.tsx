import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HelpCircle } from "lucide-react";
import { PageShell, PageHero, InlineCta, breadcrumbJsonLd } from "@/components/site/PageShell";
import { faqCategories } from "@/components/site/faqData";

const ORIGIN = "https://cadbrasil.com.br";

export const Route = createFileRoute("/faq/")({
  head: () => ({
    meta: [
      { title: "FAQ SICAF — Perguntas Frequentes sobre Cadastro e Licitações" },
      { name: "description", content: "Central de perguntas frequentes da CADBRASIL. Tire dúvidas sobre cadastro SICAF, regularização, atualização, Assistente CADBRASIL e licitações públicas." },
      { name: "keywords", content: "faq sicaf, perguntas frequentes sicaf, duvidas sicaf, ajuda sicaf, sicaf cadbrasil" },
      { property: "og:title", content: "Central de FAQ SICAF — CADBRASIL" },
      { property: "og:description", content: "5 categorias, dezenas de respostas práticas para tudo o que envolve SICAF e licitações." },
      { property: "og:url", content: `${ORIGIN}/faq` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([
          { name: "Início", url: `${ORIGIN}/` },
          { name: "FAQ", url: `${ORIGIN}/faq` },
        ])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "FAQ SICAF — CADBRASIL",
          description: "Central de perguntas frequentes sobre SICAF e licitações públicas.",
          inLanguage: "pt-BR",
          hasPart: faqCategories.map((c) => ({
            "@type": "FAQPage",
            name: c.title,
            url: `${ORIGIN}/faq/${c.slug}`,
            description: c.description,
          })),
        }),
      },
    ],
  }),
  component: FaqIndex,
});

function FaqIndex() {
  return (
    <PageShell breadcrumbs={[{ label: "FAQ" }]}>
      <PageHero
        eyebrow="Central de ajuda"
        title="Perguntas frequentes."
        highlight="Tudo sobre SICAF."
        description="Organizamos as dúvidas mais comuns em categorias temáticas. Escolha o tema abaixo ou fale com um especialista a qualquer momento."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faqCategories.map((c) => (
              <Link
                key={c.slug}
                to="/faq/$slug"
                params={{ slug: c.slug }}
                className="group rounded-2xl bg-card border border-border p-7 shadow-card hover:-translate-y-1 hover:shadow-glow hover:border-brand/40 transition"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center shadow-glow">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display font-bold text-xl">{c.shortTitle}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Ver {c.items.length} perguntas
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
