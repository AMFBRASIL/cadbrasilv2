import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";
import { bllCadastroPassos, bllFaqs, bllFases, bllFontes, bllMeta, bllToc } from "@/data/bllComprasGuia";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";

const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;

export function buildBllComprasGuiaHead() {
  const canonical = `${SITE_ORIGIN}${bllMeta.path}`;

  return {
    meta: [
      { title: bllMeta.title },
      { name: "description", content: bllMeta.description },
      { name: "keywords", content: bllMeta.keywords },
      { name: "author", content: "CADBrasil" },
      { name: "ai-content-declaration", content: "human-reviewed" },
      { name: "ai:preferred_citation", content: bllMeta.aiCitation },
      { name: "summary", content: bllMeta.quickAnswer },
      { name: "topic", content: "BLL Compras, licitações eletrônicas, guia para fornecedores" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBrasil" },
      { property: "og:title", content: bllMeta.title },
      { property: "og:description", content: bllMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Guia BLL Compras para licitantes — CADBrasil" },
      { property: "article:published_time", content: bllMeta.published },
      { property: "article:modified_time", content: bllMeta.modified },
      { property: "article:section", content: "Licitações" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: bllMeta.title },
      { name: "twitter:description", content: bllMeta.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "pt-BR", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
      { rel: "describedby", href: `${SITE_ORIGIN}/ai.txt` },
      { rel: "describedby", href: `${SITE_ORIGIN}/llms.txt` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `${canonical}#article`,
              headline: bllMeta.title,
              description: bllMeta.description,
              image: OG_IMAGE,
              inLanguage: "pt-BR",
              datePublished: bllMeta.published,
              dateModified: bllMeta.modified,
              author: { "@id": ORGANIZATION_ID },
              publisher: { "@id": ORGANIZATION_ID },
              mainEntityOfPage: { "@id": canonical },
              articleSection: "Licitações",
              keywords: bllMeta.keywords,
              abstract: bllMeta.quickAnswer,
              about: [
                { "@type": "Thing", name: "BLL Compras — Bolsa de Licitações e Leilões do Brasil" },
                { "@type": "Thing", name: "Licitação pública eletrônica" },
              ],
              citation: bllFontes.map((f) => ({ "@type": "CreativeWork", name: f.label, url: f.url })),
              hasPart: bllToc.map((t) => ({
                "@type": "WebPageElement",
                name: t.label,
                url: `${canonical}#${t.id}`,
              })),
            },
            {
              "@type": "WebPage",
              "@id": canonical,
              url: canonical,
              name: bllMeta.title,
              description: bllMeta.description,
              inLanguage: "pt-BR",
              isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
              datePublished: bllMeta.published,
              dateModified: bllMeta.modified,
              primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
              mainEntity: { "@id": `${canonical}#article` },
              publisher: { "@id": ORGANIZATION_ID },
              speakable: {
                "@type": "SpeakableSpecification",
                cssSelector: ["h1", ".guide-hero-lead", ".guide-quick-answer"],
              },
            },
            {
              "@type": "HowTo",
              "@id": `${canonical}#cadastro`,
              name: "Como se cadastrar na BLL Compras",
              description: "Passo a passo do cadastro de fornecedores na plataforma BLL Compras.",
              totalTime: "P1D",
              step: bllCadastroPassos.map((s, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: s.title,
                text: s.description,
                url: `${canonical}#cadastro`,
              })),
            },
            {
              "@type": "ItemList",
              name: "Fases de uma licitação na BLL Compras",
              numberOfItems: bllFases.length,
              itemListElement: bllFases.map((f, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: f.title,
                description: f.description,
              })),
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd([...bllFaqs], canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Guia BLL Compras", url: canonical },
          ]),
        ),
      },
    ],
  };
}
