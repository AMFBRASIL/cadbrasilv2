import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import type { LandingPageData } from "@/data/sicafLandingPages";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

export function buildLandingHead(page: LandingPageData) {
  const canonical = `${SITE_ORIGIN}${page.path}`;

  const scripts: { type: string; children: string }[] = [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: page.metaTitle,
          description: page.metaDescription,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          keywords: page.keywords,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.shortTitle,
          description: page.metaDescription,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Cadastro e regularização SICAF",
          url: canonical,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: page.shortTitle, url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(page.faqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: page.metaTitle,
          description: page.metaDescription,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: { "@type": "Thing", name: page.shortTitle, description: page.quickAnswer },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".page-hero-summary"],
          },
        }),
      },
    ];

  if (page.howToSteps?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: page.metaTitle,
        description: page.metaDescription,
        inLanguage: "pt-BR",
        step: page.howToSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
          url: `${canonical}#passo-${i + 1}`,
        })),
      }),
    });
  }

  if (page.itemList?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `Documentos — ${page.shortTitle}`,
        numberOfItems: page.itemList.length,
        itemListElement: page.itemList.map((name, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name,
        })),
      }),
    });
  }

  return {
    meta: [
      { title: page.metaTitle },
      { name: "description", content: page.metaDescription },
      { name: "keywords", content: page.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: page.metaTitle },
      { property: "og:description", content: page.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "SICAF e Licitações" },
      { property: "article:tag", content: page.shortTitle },
      { property: "article:tag", content: "SICAF" },
      { property: "article:tag", content: "Licitações públicas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: page.metaTitle },
      { name: "twitter:description", content: page.metaDescription },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "pt-BR", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
    ],
    scripts,
  };
}
