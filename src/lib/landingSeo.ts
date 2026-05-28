import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import type { LandingPageData } from "@/data/sicafLandingPages";
import { OG_IMAGE, ROBOTS_INDEX, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

export function buildLandingHead(page: LandingPageData) {
  const canonical = `${SITE_ORIGIN}${page.path}`;

  return {
    meta: [
      { title: page.metaTitle },
      { name: "description", content: page.metaDescription },
      { name: "keywords", content: page.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "robots", content: ROBOTS_INDEX },
      { name: "googlebot", content: ROBOTS_INDEX },
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
    scripts: [
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
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: page.shortTitle, url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(page.faqs)),
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
    ],
  };
}
