import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  passosOficiais,
  glossarioSicaf,
  documentosSicaf,
} from "@/data/guiaCadastroSicaf";
import {
  sicafCadastroFaqs,
  sicafCadastroMeta,
  passosCadastroResumo,
} from "@/data/oQueESicafComoSeCadastrar";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

export function buildSicafCadastroHead() {
  const canonical = `${SITE_ORIGIN}${sicafCadastroMeta.path}`;

  const howToSteps = passosOficiais.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.t,
    text: s.d,
    url: `${canonical}#passo-${i + 1}`,
  }));

  return {
    meta: [
      { title: sicafCadastroMeta.title },
      { name: "description", content: sicafCadastroMeta.description },
      { name: "keywords", content: sicafCadastroMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: sicafCadastroMeta.title },
      { property: "og:description", content: sicafCadastroMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "SICAF e cadastro" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: sicafCadastroMeta.title },
      { name: "twitter:description", content: sicafCadastroMeta.description },
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
          headline: sicafCadastroMeta.title,
          description: sicafCadastroMeta.description,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "SICAF — o que é e como se cadastrar",
          keywords: sicafCadastroMeta.keywords,
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
          name: "Como se cadastrar no SICAF",
          description: sicafCadastroMeta.description,
          image: OG_IMAGE,
          totalTime: "P14D",
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
          "@type": "HowTo",
          name: "Resumo: cadastro SICAF em 6 passos",
          description: "Fluxo resumido para credenciamento SICAF",
          inLanguage: "pt-BR",
          step: passosCadastroResumo.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.t,
            text: s.d,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Documentos para cadastro SICAF",
          numberOfItems: documentosSicaf.length,
          itemListElement: documentosSicaf.map((d, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: d.doc,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "O que é SICAF e como se cadastrar", url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(sicafCadastroFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "O que é SICAF e como se cadastrar?",
            questionText: "Como faço para me cadastrar no SICAF para vender ao governo?",
            answerText: sicafCadastroMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: sicafCadastroMeta.title,
          description: sicafCadastroMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "SICAF — cadastro de fornecedores",
            description: sicafCadastroMeta.quickAnswer,
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
          name: "Glossário SICAF",
          hasDefinedTerm: glossarioSicaf.map((g) => ({
            "@type": "DefinedTerm",
            name: g.term,
            description: g.def,
          })),
        }),
      },
    ],
  };
}
