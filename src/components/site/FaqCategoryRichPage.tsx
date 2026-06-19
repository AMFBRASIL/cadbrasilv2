import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";
import type { FaqCategory, FaqItem } from "@/data/faq/types";
import { faqCategories } from "@/data/faq/pages";
import { PageShell, PageHero, InlineCta, CADASTRO_URL } from "@/components/site/PageShell";
import { CadastroLink } from "@/components/site/CadastroLink";

export function FaqCategoryRichPage({ category }: { category: FaqCategory }) {
  const others = faqCategories.filter((c) => c.slug !== category.slug).slice(0, 6);

  return (
    <PageShell breadcrumbs={[{ label: "FAQ", to: "/faq" }, { label: category.shortTitle }]}>
      <PageHero
        eyebrow="FAQ especializado · CADBRASIL · 2026"
        title={category.title}
        description={category.quickAnswer}
      />

      <div className="mx-auto max-w-4xl px-4 pb-4">
        <p className="faq-page-summary text-sm text-muted-foreground border-l-2 border-brand/40 pl-4">
          {category.description}
        </p>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-10 space-y-14">
        {category.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-muted-foreground leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-2 text-muted-foreground">
                {section.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm">
                    <span className="text-brand font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {category.relatedGuides && category.relatedGuides.length > 0 && (
          <div className="rounded-2xl border border-brand/20 bg-brand/5 p-6">
            <h3 className="font-semibold flex items-center gap-2 mb-3">
              <BookOpen className="h-5 w-5 text-brand" />
              Guias relacionados
            </h3>
            <ul className="space-y-2">
              {category.relatedGuides.map((g) => (
                <li key={g.to}>
                  <Link to={g.to} className="text-brand text-sm font-medium hover:underline">
                    {g.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      <section className="py-4 bg-accent/20" aria-labelledby="faq-perguntas">
        <div className="mx-auto max-w-4xl px-4">
          <h2 id="faq-perguntas" className="text-2xl sm:text-3xl font-bold mb-8">
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            {category.items.map((it, i) => (
              <FaqAccordion key={it.question} {...it} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold mb-8">Outros temas no FAQ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {others.map((c) => (
              <Link
                key={c.slug}
                to="/faq/$slug"
                params={{ slug: c.slug }}
                className="group rounded-2xl bg-card border border-border p-5 hover:border-brand/40 hover:shadow-soft transition"
              >
                <HelpCircle className="h-5 w-5 text-brand" />
                <div className="mt-3 font-display font-semibold text-sm">{c.shortTitle}</div>
                <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{c.description}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                  Ler artigo
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/faq" className="text-sm font-semibold text-brand hover:underline">
              Ver todas as {faqCategories.length} categorias →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-8 text-center">
        <CadastroLink
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition"
        >
          Iniciar cadastro SICAF
          <ArrowRight className="h-4 w-4" />
        </CadastroLink>
      </section>

      <InlineCta
        title={`Dúvidas sobre ${category.shortTitle}?`}
        subtitle="Fale com um especialista CADBRASIL — diagnóstico e orientação em minutos."
      />
    </PageShell>
  );
}

function FaqAccordion({
  question,
  answer,
  defaultOpen = false,
}: FaqItem & { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden">
      <button
        type="button"
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
        <div className="px-5 sm:px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-up border-t border-border pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}
