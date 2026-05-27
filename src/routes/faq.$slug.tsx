import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { PageShell, PageHero, InlineCta, breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { faqCategories, type FaqItem } from "@/components/site/faqData";

const ORIGIN = "https://cadbrasil.com.br";

export const Route = createFileRoute("/faq/$slug")({
  loader: ({ params }) => {
    const category = faqCategories.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "FAQ — CADBRASIL" }] };
    const c = loaderData.category;
    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        { name: "keywords", content: c.keywords },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${ORIGIN}/faq/${c.slug}` },
        { property: "article:section", content: "FAQ" },
      ],
      links: [{ rel: "canonical", href: `${ORIGIN}/faq/${c.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(c.items)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbJsonLd([
            { name: "Início", url: `${ORIGIN}/` },
            { name: "FAQ", url: `${ORIGIN}/faq` },
            { name: c.shortTitle, url: `${ORIGIN}/faq/${c.slug}` },
          ])),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell breadcrumbs={[{ label: "FAQ", to: "/faq" }, { label: "Não encontrado" }]}>
      <div className="py-20 text-center max-w-lg mx-auto px-4">
        <h1 className="text-3xl font-bold">Categoria de FAQ não encontrada</h1>
        <p className="mt-3 text-muted-foreground">A página que você procura não existe ou foi movida.</p>
        <Link to="/faq" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold">
          <ArrowLeft className="h-4 w-4" /> Voltar ao FAQ
        </Link>
      </div>
    </PageShell>
  ),
  component: FaqCategoryPage,
});

function FaqCategoryPage() {
  const { category } = Route.useLoaderData();
  const otherCategories = faqCategories.filter((c) => c.slug !== category.slug);

  return (
    <PageShell breadcrumbs={[{ label: "FAQ", to: "/faq" }, { label: category.shortTitle }]}>
      <PageHero
        eyebrow="FAQ · CADBRASIL"
        title={category.title}
        description={category.description}
      />

      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 space-y-3">
          {category.items.map((it: FaqItem, i: number) => (
            <FaqAccordion key={it.question} {...it} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Outras categorias de FAQ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                to="/faq/$slug"
                params={{ slug: c.slug }}
                className="group rounded-2xl bg-card border border-border p-5 hover:border-brand/40 hover:shadow-soft transition"
              >
                <HelpCircle className="h-5 w-5 text-brand" />
                <div className="mt-3 font-display font-semibold">{c.shortTitle}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.items.length} perguntas</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                  Ver
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InlineCta
        title="Pronto para regularizar?"
        subtitle="Faça seu cadastro CADBRASIL ou fale com um especialista no WhatsApp."
      />
    </PageShell>
  );
}

function FaqAccordion({
  question, answer, defaultOpen = false,
}: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-accent transition"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-base sm:text-lg">{question}</span>
        <span className="shrink-0 h-8 w-8 rounded-full bg-accent grid place-items-center">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up">
          {answer}
        </div>
      )}
    </div>
  );
}
