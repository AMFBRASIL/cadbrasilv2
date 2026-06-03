import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  cadastrarNoSicafFaqs,
  cadastrarNoSicafMeta,
  itemListAntesDeComecar,
  passosCadastroCadbrasil,
} from "@/data/cadastrarNoSicaf";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

export function buildCadastrarNoSicafHead() {
  const canonical = `${SITE_ORIGIN}${cadastrarNoSicafMeta.path}`;

  return {
    meta: [
      { title: cadastrarNoSicafMeta.metaTitle },
      { name: "description", content: cadastrarNoSicafMeta.metaDescription },
      { name: "keywords", content: cadastrarNoSicafMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: cadastrarNoSicafMeta.metaTitle },
      { property: "og:description", content: cadastrarNoSicafMeta.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Cadastro SICAF" },
      { property: "article:tag", content: "cadastrar no sicaf" },
      { property: "article:tag", content: "cadastro sicaf 2026" },
      { property: "article:tag", content: "credenciamento fornecedor" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: cadastrarNoSicafMeta.metaTitle },
      { name: "twitter:description", content: cadastrarNoSicafMeta.metaDescription },
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
          headline: cadastrarNoSicafMeta.metaTitle,
          description: cadastrarNoSicafMeta.metaDescription,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "Como cadastrar no SICAF",
          keywords: cadastrarNoSicafMeta.keywords,
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
          name: "Como cadastrar no SICAF com a CADBRASIL",
          description: cadastrarNoSicafMeta.metaDescription,
          image: OG_IMAGE,
          totalTime: "P1D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description:
              "Credenciamento oficial gratuito no governo; assessoria CADBRASIL conforme plano contratado.",
          },
          tool: [
            { "@type": "HowToTool", name: "Certificado digital e-CNPJ" },
            { "@type": "HowToTool", name: "Portal cadastro.cadbrasil.com.br" },
          ],
          inLanguage: "pt-BR",
          step: passosCadastroCadbrasil.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.titulo,
            text: s.descricao,
            url: `${canonical}#${s.id}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Cadastro assistido no SICAF",
          description: cadastrarNoSicafMeta.metaDescription,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Cadastrar no SICAF — credenciamento federal",
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
            { name: cadastrarNoSicafMeta.shortTitle, url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(cadastrarNoSicafFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "O que você precisa antes de cadastrar no SICAF",
          numberOfItems: itemListAntesDeComecar.length,
          itemListElement: itemListAntesDeComecar.map((name, index) => ({
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
          name: cadastrarNoSicafMeta.metaTitle,
          description: cadastrarNoSicafMeta.metaDescription,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Cadastrar no SICAF",
            description: cadastrarNoSicafMeta.quickAnswer,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".page-hero-summary", ".ai-summary"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "QAPage",
          mainEntity: {
            "@type": "Question",
            name: "Como cadastrar no SICAF?",
            text: "Qual é o processo para cadastrar uma empresa no SICAF em 2026?",
            answerCount: 1,
            acceptedAnswer: {
              "@type": "Answer",
              text: cadastrarNoSicafMeta.quickAnswer,
            },
          },
        }),
      },
    ],
  };
}
