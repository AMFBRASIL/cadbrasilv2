import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  guiaCadastroSicafMeta,
  guiaFaqs,
  passosOficiais,
  documentosSicaf,
  glossarioSicaf,
  CADASTRO_SICAF_PASSO_A_PASSO_PATH,
} from "@/data/guiaCadastroSicaf";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

const CANONICAL = `${SITE_ORIGIN}${CADASTRO_SICAF_PASSO_A_PASSO_PATH}`;

export function buildGuiaHead(canonicalPath: string = CADASTRO_SICAF_PASSO_A_PASSO_PATH) {
  const canonical = `${SITE_ORIGIN}${canonicalPath}`;

  const howToSteps = passosOficiais.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.t,
    text: s.d,
    url: `${canonical}#passo-${i + 1}`,
  }));

  return {
    meta: [
      { title: guiaCadastroSicafMeta.title },
      { name: "description", content: guiaCadastroSicafMeta.description },
      { name: "keywords", content: guiaCadastroSicafMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: guiaCadastroSicafMeta.title },
      { property: "og:description", content: guiaCadastroSicafMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "article:published_time", content: SEO_PUBLISHED },
      { property: "article:modified_time", content: SEO_MODIFIED },
      { property: "article:section", content: "Guias SICAF" },
      { property: "article:tag", content: "cadastro sicaf passo a passo" },
      { property: "article:tag", content: "tutorial sicaf 2026" },
      { property: "article:tag", content: "licitações públicas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: guiaCadastroSicafMeta.title },
      { name: "twitter:description", content: guiaCadastroSicafMeta.description },
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
          headline: "Cadastro SICAF 2026: passo a passo completo para fornecedores",
          description: guiaCadastroSicafMeta.description,
          image: OG_IMAGE,
          author: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          publisher: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          mainEntityOfPage: canonical,
          articleSection: "Guias e Tutoriais SICAF",
          keywords: guiaCadastroSicafMeta.keywords,
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
          name: "Como fazer cadastro no SICAF passo a passo",
          description: guiaCadastroSicafMeta.description,
          image: OG_IMAGE,
          totalTime: "P14D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description: "Credenciamento oficial gratuito; custos de certificado digital e assessoria podem aplicar-se.",
          },
          supply: documentosSicaf.slice(0, 6).map((item) => ({
            "@type": "HowToSupply",
            name: item.doc,
          })),
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
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Guias", url: `${SITE_ORIGIN}/faq` },
            { name: "Cadastro SICAF passo a passo", url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(guiaFaqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Documentos para cadastro SICAF",
          numberOfItems: documentosSicaf.length,
          itemListElement: documentosSicaf.map((row, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: row.doc,
          })),
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: guiaCadastroSicafMeta.title,
          description: guiaCadastroSicafMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          about: {
            "@type": "Thing",
            name: "Cadastro SICAF passo a passo",
            description:
              "Guia completo para credenciar empresa no SICAF com documentos, níveis, certificado digital, prazos e assessoria CADBRASIL.",
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".guide-hero-lead", ".guide-summary"],
          },
        }),
      },
    ],
  };
}