import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { qaPageJsonLd } from "@/lib/structuredData";
import {
  howToStepsSchema,
  itemListResumo,
  licitacaoResumoFaqs,
  licitacaoResumoMeta,
  passosLicitacao,
} from "@/data/comoParticiparLicitacaoResumo";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

export function buildLicitacaoResumoHead() {
  const canonical = `${SITE_ORIGIN}${licitacaoResumoMeta.path}`;

  return {
    meta: [
      { title: licitacaoResumoMeta.metaTitle },
      { name: "description", content: licitacaoResumoMeta.metaDescription },
      { name: "keywords", content: licitacaoResumoMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: licitacaoResumoMeta.metaTitle },
      { property: "og:description", content: licitacaoResumoMeta.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Licitações públicas" },
      { property: "article:tag", content: "como participar de licitação" },
      { property: "article:tag", content: "SICAF" },
      { property: "article:tag", content: "pregão eletrônico" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: licitacaoResumoMeta.metaTitle },
      { name: "twitter:description", content: licitacaoResumoMeta.metaDescription },
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
          headline: licitacaoResumoMeta.metaTitle,
          description: licitacaoResumoMeta.metaDescription,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "Guia resumido — licitações públicas",
          keywords: licitacaoResumoMeta.keywords,
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
          name: "Como participar de licitação pública — passo a passo resumido",
          description: licitacaoResumoMeta.metaDescription,
          totalTime: "P14D",
          inLanguage: "pt-BR",
          step: passosLicitacao.map((s, i) => ({
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
          name: "Assessoria CADBRASIL para licitações e SICAF",
          description:
            "Cadastro SICAF, regularização documental e suporte para habilitação em licitações públicas federais.",
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Cadastro SICAF e habilitação em licitações",
          url: canonical,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Como participar de licitação", url: `${SITE_ORIGIN}/como-participar-de-licitacao` },
            { name: "Resumo", url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(licitacaoResumoFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Resumo — como participar de licitação",
          numberOfItems: itemListResumo.length,
          itemListElement: itemListResumo.map((name, index) => ({
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
          name: licitacaoResumoMeta.metaTitle,
          description: licitacaoResumoMeta.metaDescription,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Como participar de licitação pública",
            description: licitacaoResumoMeta.quickAnswer,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".page-hero-summary", ".ai-summary", ".licitacao-resumo-box"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Como participar de uma licitação do governo?",
            questionText:
              "Qual é o passo a passo resumido para participar de licitação pública no Brasil?",
            answerText: licitacaoResumoMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
    ],
  };
}
