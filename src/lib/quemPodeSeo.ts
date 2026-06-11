import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { qaPageJsonLd } from "@/lib/structuredData";
import {
  definedTermsPorte,
  elegiveisItemList,
  quemPodeFaqs,
  quemPodeMeta,
} from "@/data/quemPodeSeCadastrarSicaf";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

export function buildQuemPodeHead() {
  const canonical = `${SITE_ORIGIN}${quemPodeMeta.path}`;

  return {
    meta: [
      { title: quemPodeMeta.metaTitle },
      { name: "description", content: quemPodeMeta.metaDescription },
      { name: "keywords", content: quemPodeMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: quemPodeMeta.metaTitle },
      { property: "og:description", content: quemPodeMeta.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Elegibilidade SICAF" },
      { property: "article:tag", content: "quem pode se cadastrar no sicaf" },
      { property: "article:tag", content: "SICAF MEI" },
      { property: "article:tag", content: "SICAF EPP" },
      { property: "article:tag", content: "Fornecedor governo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: quemPodeMeta.metaTitle },
      { name: "twitter:description", content: quemPodeMeta.metaDescription },
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
          headline: quemPodeMeta.metaTitle,
          description: quemPodeMeta.metaDescription,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "Elegibilidade e requisitos SICAF",
          keywords: quemPodeMeta.keywords,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Cadastro SICAF para MEI, ME, EPP e demais portes",
          description: quemPodeMeta.metaDescription,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Credenciamento SICAF por porte empresarial",
          audience: {
            "@type": "BusinessAudience",
            audienceType: "MEI, ME, EPP, LTDA, S/A, EIRELI",
          },
          url: canonical,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: quemPodeMeta.shortTitle, url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(quemPodeFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Tipos de empresa que podem se cadastrar no SICAF",
          description:
            "Perfis elegíveis para credenciamento no Sistema de Cadastramento Unificado de Fornecedores.",
          numberOfItems: elegiveisItemList.length,
          itemListElement: elegiveisItemList.map((name, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Portes e naturezas jurídicas no SICAF",
          description: "Definições de elegibilidade por tipo de empresa para cadastro SICAF.",
          hasDefinedTerm: definedTermsPorte.map((g) => ({
            "@type": "DefinedTerm",
            name: g.term,
            description: g.def,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: quemPodeMeta.metaTitle,
          description: quemPodeMeta.metaDescription,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Elegibilidade para cadastro SICAF",
            description: quemPodeMeta.quickAnswer,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".page-hero-summary", ".ai-summary"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Quem pode se cadastrar no SICAF?",
            questionText:
              "Quais tipos de empresa podem se credenciar no SICAF para licitar com o governo federal?",
            answerText: quemPodeMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
    ],
  };
}
