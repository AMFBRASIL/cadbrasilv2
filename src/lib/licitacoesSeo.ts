import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  etapasProcesso,
  ferramentas,
  glossarioLicitacoes,
  itemListFerramentas,
  licitacoesFaqs,
  licitacoesMeta,
} from "@/data/licitacoes";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

export function buildLicitacoesHead() {
  const canonical = `${SITE_ORIGIN}${licitacoesMeta.path}`;

  const howToSteps = etapasProcesso.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.t,
    text: s.d,
    url: `${canonical}#etapa-${i + 1}`,
  }));

  return {
    meta: [
      { title: licitacoesMeta.title },
      { name: "description", content: licitacoesMeta.description },
      { name: "keywords", content: licitacoesMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: licitacoesMeta.title },
      { property: "og:description", content: licitacoesMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Plataforma de licitações" },
      { property: "article:tag", content: "licitações" },
      { property: "article:tag", content: "sicaf" },
      { property: "article:tag", content: "fornecedor governo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: licitacoesMeta.title },
      { name: "twitter:description", content: licitacoesMeta.description },
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
          headline: licitacoesMeta.title,
          description: licitacoesMeta.description,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "Plataforma de licitações para fornecedores",
          keywords: licitacoesMeta.keywords,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "CADBRASIL — Plataforma de Licitações",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Windows, macOS",
          description: licitacoesMeta.description,
          url: canonical,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "BRL",
            description: "Cadastro e avaliação gratuita da plataforma",
          },
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como vender ao governo com a plataforma CADBRASIL",
          description: licitacoesMeta.description,
          image: OG_IMAGE,
          totalTime: "P30D",
          inLanguage: "pt-BR",
          step: howToSteps,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Ferramentas da plataforma CADBRASIL",
          numberOfItems: itemListFerramentas.length,
          itemListElement: itemListFerramentas.map((name, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Plataforma de licitações", url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(licitacoesFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "O que é a plataforma de licitações CADBRASIL?",
            questionText: "Como a CADBRASIL ajuda fornecedores a vender ao governo?",
            answerText: licitacoesMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: licitacoesMeta.title,
          description: licitacoesMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Plataforma de licitações para fornecedores do governo",
            description: licitacoesMeta.quickAnswer,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".guide-hero-lead", ".guide-summary"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Glossário de licitações públicas",
          hasDefinedTerm: glossarioLicitacoes.map((g) => ({
            "@type": "DefinedTerm",
            name: g.term,
            description: g.def,
          })),
        }),
      },
    ],
  };
}
