import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  howToStepsSchema,
  itemListJornada,
  itemListRequisitos,
  venderGovernoFaqs,
  venderGovernoMeta,
} from "@/data/comoCadastrarSicafVenderGoverno";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

export function buildVenderGovernoHead() {
  const canonical = `${SITE_ORIGIN}${venderGovernoMeta.path}`;

  return {
    meta: [
      { title: venderGovernoMeta.metaTitle },
      { name: "description", content: venderGovernoMeta.metaDescription },
      { name: "keywords", content: venderGovernoMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: venderGovernoMeta.metaTitle },
      { property: "og:description", content: venderGovernoMeta.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Cadastro SICAF e licitações" },
      { property: "article:tag", content: "cadastrar sicaf vender governo" },
      { property: "article:tag", content: "fornecedor governo federal" },
      { property: "article:tag", content: "credenciamento sicaf 2026" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: venderGovernoMeta.metaTitle },
      { name: "twitter:description", content: venderGovernoMeta.metaDescription },
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
          headline: venderGovernoMeta.metaTitle,
          description: venderGovernoMeta.metaDescription,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "Como cadastrar no SICAF e vender ao governo",
          keywords: venderGovernoMeta.keywords,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como cadastrar no SICAF e vender para o governo",
          description: venderGovernoMeta.metaDescription,
          image: OG_IMAGE,
          totalTime: "P7D",
          inLanguage: "pt-BR",
          step: howToStepsSchema.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
            url: `${canonical}#jornada-${i + 1}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Cadastro SICAF e habilitação para vender ao governo",
          description: venderGovernoMeta.metaDescription,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Credenciamento SICAF e consultoria em licitações públicas",
          offers: {
            "@type": "Offer",
            url: "https://cadastro.cadbrasil.com.br",
            availability: "https://schema.org/InStock",
            eligibleRegion: { "@type": "Country", name: "Brasil" },
          },
          url: canonical,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Cadastro SICAF", url: `${SITE_ORIGIN}/cadastro` },
            { name: venderGovernoMeta.shortTitle, url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(venderGovernoFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Jornada: cadastrar no SICAF e vender ao governo",
          numberOfItems: itemListJornada.length,
          itemListElement: itemListJornada.map((name, index) => ({
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
          "@type": "ItemList",
          name: "Requisitos para cadastro SICAF e venda ao governo",
          numberOfItems: itemListRequisitos.length,
          itemListElement: itemListRequisitos.map((name, index) => ({
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
          "@type": "WebPage",
          name: venderGovernoMeta.metaTitle,
          description: venderGovernoMeta.metaDescription,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Cadastrar no SICAF e vender para o governo",
            description: venderGovernoMeta.quickAnswer,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".page-hero-summary", ".ai-summary", ".vender-governo-resumo"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Como cadastrar no SICAF e vender para o governo?",
            questionText:
              "Qual é o passo a passo para credenciar no SICAF e começar a vender para o governo federal?",
            answerText: venderGovernoMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
    ],
  };
}
