import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  comprasnetFaqs,
  comprasnetMeta,
  glossarioComprasnet,
  itemListBeneficios,
  itemListModulos,
  passosAcesso,
} from "@/data/comprasnet";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

export function buildComprasnetHead() {
  const canonical = `${SITE_ORIGIN}${comprasnetMeta.path}`;

  const howToSteps = passosAcesso.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.t,
    text: s.d,
    url: `${canonical}#passo-${i + 1}`,
  }));

  return {
    meta: [
      { title: comprasnetMeta.title },
      { name: "description", content: comprasnetMeta.description },
      { name: "keywords", content: comprasnetMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: comprasnetMeta.title },
      { property: "og:description", content: comprasnetMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Compras públicas" },
      { property: "article:tag", content: "comprasnet" },
      { property: "article:tag", content: "compras.gov.br" },
      { property: "article:tag", content: "sicaf" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: comprasnetMeta.title },
      { name: "twitter:description", content: comprasnetMeta.description },
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
          headline: "Comprasnet (Compras.gov.br): o que é, para que serve e benefícios",
          description: comprasnetMeta.description,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "Compras públicas e Comprasnet",
          keywords: comprasnetMeta.keywords,
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
          name: "Como acessar o Comprasnet (Compras.gov.br) como fornecedor",
          description: comprasnetMeta.description,
          image: OG_IMAGE,
          totalTime: "P7D",
          tool: [
            { "@type": "HowToTool", name: "Certificado digital e-CNPJ" },
            { "@type": "HowToTool", name: "Portal Compras.gov.br" },
          ],
          inLanguage: "pt-BR",
          step: howToSteps,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Compras.gov.br (Comprasnet)",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Portal federal de compras públicas para licitações, pregão eletrônico, SICAF e gestão de contratos.",
          url: "https://www.gov.br/compras",
          offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
          provider: { "@type": "Organization", name: "Governo Federal do Brasil" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Guias", url: `${SITE_ORIGIN}/faq` },
            { name: "Comprasnet", url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(comprasnetFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Benefícios do Comprasnet para fornecedores",
          numberOfItems: itemListBeneficios.length,
          itemListElement: itemListBeneficios.map((name, index) => ({
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
          name: "Módulos do Compras.gov.br",
          numberOfItems: itemListModulos.length,
          itemListElement: itemListModulos.map((name, index) => ({
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
          name: "Glossário Comprasnet e Compras.gov.br",
          hasDefinedTerm: glossarioComprasnet.map((g) => ({
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
          name: comprasnetMeta.title,
          description: comprasnetMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Comprasnet — portal de compras públicas",
            description: comprasnetMeta.quickAnswer,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".guide-hero-lead", ".guide-summary", ".comprasnet-resumo"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "O que é Comprasnet?",
            questionText: "O que é o Comprasnet e qual a relação com o Compras.gov.br?",
            answerText: comprasnetMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
    ],
  };
}
