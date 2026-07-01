import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  nivelIVContent,
  niveisResumoTabela,
  sicafNiveisFaqs,
  sicafNiveisMeta,
} from "@/data/sicafNiveis";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

export function buildSicafNiveisHead() {
  const canonical = `${SITE_ORIGIN}${sicafNiveisMeta.path}`;

  const howToNivelIV = nivelIVContent.passos.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.titulo,
    text: s.descricao,
    url: `${canonical}#nivel-iv-passo-${i + 1}`,
  }));

  return {
    meta: [
      { title: sicafNiveisMeta.title },
      { name: "description", content: sicafNiveisMeta.description },
      { name: "keywords", content: sicafNiveisMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: sicafNiveisMeta.title },
      { property: "og:description", content: sicafNiveisMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Níveis SICAF" },
      { property: "article:tag", content: "níveis sicaf" },
      { property: "article:tag", content: "atualização sicaf" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: sicafNiveisMeta.title },
      { name: "twitter:description", content: sicafNiveisMeta.description },
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
          headline: sicafNiveisMeta.title,
          description: sicafNiveisMeta.description,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "Manual de treinamento — Níveis SICAF",
          keywords: sicafNiveisMeta.keywords,
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
          name: "Como atualizar certidão no Nível IV do SICAF",
          description: "Procedimento para excluir certidão vencida e cadastrar nova no SICAF.",
          inLanguage: "pt-BR",
          step: howToNivelIV,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Níveis de habilitação SICAF I a VI",
          numberOfItems: 6,
          itemListElement: niveisResumoTabela.map((n, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: `Nível ${n.nivel} — ${n.nome}`,
            description: n.atualizacao,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Níveis do SICAF", url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(sicafNiveisFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Quais são os 6 níveis do SICAF?",
            questionText: "Como atualizar os níveis do SICAF no Portal do Fornecedor?",
            answerText: sicafNiveisMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: sicafNiveisMeta.title,
          description: sicafNiveisMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Níveis de habilitação SICAF",
            description: sicafNiveisMeta.quickAnswer,
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
          "@type": "LearningResource",
          name: "Manual de Atualização dos Níveis do SICAF",
          description: sicafNiveisMeta.description,
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          url: canonical,
        }),
      },
    ],
  };
}
