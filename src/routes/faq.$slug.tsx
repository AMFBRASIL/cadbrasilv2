import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { FaqCategoryRichPage } from "@/components/site/FaqCategoryRichPage";
import { getFaqCategory } from "@/data/faq/pages";
import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { OG_IMAGE, ROBOTS_INDEX, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

export const Route = createFileRoute("/faq/$slug")({
  loader: ({ params }) => {
    const category = getFaqCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "FAQ — CADBRASIL" }] };
    const c = loaderData.category;
    const canonical = `${SITE_ORIGIN}/faq/${c.slug}`;

    return {
      meta: [
        { title: c.metaTitle },
        { name: "description", content: c.metaDescription },
        { name: "keywords", content: c.keywords },
        { name: "author", content: "CADBRASIL" },
        { name: "robots", content: ROBOTS_INDEX },
        { name: "googlebot", content: ROBOTS_INDEX },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "pt_BR" },
        { property: "og:site_name", content: "CADBRASIL" },
        { property: "og:title", content: c.metaTitle },
        { property: "og:description", content: c.metaDescription },
        { property: "og:url", content: canonical },
        { property: "og:image", content: OG_IMAGE },
        { property: "article:published_time", content: SEO_PUBLISHED },
        { property: "article:modified_time", content: SEO_MODIFIED },
        { property: "article:section", content: "FAQ SICAF" },
        { property: "article:tag", content: "SICAF" },
        { property: "article:tag", content: c.shortTitle },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: c.metaTitle },
        { name: "twitter:description", content: c.metaDescription },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [
        { rel: "canonical", href: canonical },
        { rel: "alternate", hrefLang: "pt-BR", href: canonical },
        { rel: "alternate", hrefLang: "x-default", href: canonical },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.title,
            description: c.metaDescription,
            image: OG_IMAGE,
            author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
            publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
            mainEntityOfPage: canonical,
            articleSection: "FAQ SICAF",
            keywords: c.keywords,
            inLanguage: "pt-BR",
            datePublished: SEO_PUBLISHED,
            dateModified: SEO_MODIFIED,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqJsonLd(c.items)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Início", url: `${SITE_ORIGIN}/` },
              { name: "FAQ", url: `${SITE_ORIGIN}/faq` },
              { name: c.shortTitle, url: canonical },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: c.metaTitle,
            description: c.metaDescription,
            url: canonical,
            inLanguage: "pt-BR",
            datePublished: SEO_PUBLISHED,
            dateModified: SEO_MODIFIED,
            about: {
              "@type": "Thing",
              name: c.shortTitle,
              description: c.quickAnswer,
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".faq-page-summary"],
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-bold">Página FAQ não encontrada</h1>
        <p className="mt-3 text-muted-foreground">O tema que você procura não existe ou foi movido.</p>
        <Link
          to="/faq"
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-brand text-brand-foreground font-semibold"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar ao FAQ
        </Link>
      </div>
    </div>
  ),
  component: FaqSlugPage,
});

function FaqSlugPage() {
  const { category } = Route.useLoaderData();
  return <FaqCategoryRichPage category={category} />;
}
