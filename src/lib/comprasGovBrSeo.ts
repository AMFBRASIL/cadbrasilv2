import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  comprasGovBrFaqs,
  comprasGovBrMeta,
  editorialTrust,
  factSheetAi,
  glossarioComprasGov,
  modulos,
  passosAcesso,
  resumoInteligente,
} from "@/data/comprasGovBr";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

const PAGE_PUBLISHED = "2026-07-24T10:00:00-03:00";
const PAGE_MODIFIED = "2026-07-24T10:00:00-03:00";
const CADASTRO_PORTAL = CADASTRO_CREDENCIAMENTO_URL;

export function buildComprasGovBrHead() {
  const canonical = `${SITE_ORIGIN}${comprasGovBrMeta.path}`;

  return {
    meta: [
      { title: comprasGovBrMeta.title },
      { name: "description", content: comprasGovBrMeta.description },
      { name: "keywords", content: comprasGovBrMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: comprasGovBrMeta.title },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-07-24" },
      { name: "citation_online_date", content: "2026-07-24" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      { name: "ai:preferred_citation", content: comprasGovBrMeta.aiCitation },
      { name: "summary", content: comprasGovBrMeta.quickAnswer },
      {
        name: "topic",
        content: "Compras.gov.br, SICAF, portal de compras federal, e-CNPJ, Comprasnet",
      },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: comprasGovBrMeta.title },
      { property: "og:description", content: comprasGovBrMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Tutorial Compras.gov.br e SICAF — CADBRASIL" },
      { property: "article:published_time", content: PAGE_PUBLISHED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "Compras.gov.br" },
      { property: "article:tag", content: "compras.gov.br" },
      { property: "article:tag", content: "sicaf" },
      { property: "article:tag", content: "comprasnet" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: comprasGovBrMeta.title },
      { name: "twitter:description", content: comprasGovBrMeta.description },
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
          "@type": "Article",
          headline: comprasGovBrMeta.title,
          alternativeHeadline: "Como acessar Compras.gov.br e o SICAF",
          description: comprasGovBrMeta.description,
          image: [OG_IMAGE],
          author: {
            "@type": "Organization",
            name: editorialTrust.who.organization,
            url: SITE_ORIGIN,
            description: editorialTrust.who.experience,
          },
          publisher: {
            "@type": "Organization",
            name: "CADBRASIL",
            url: SITE_ORIGIN,
            logo: { "@type": "ImageObject", url: OG_IMAGE },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          articleSection: "Compras.gov.br",
          keywords: comprasGovBrMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: [
            { "@type": "Thing", name: "Compras.gov.br", description: comprasGovBrMeta.quickAnswer },
            { "@type": "Thing", name: "SICAF" },
            { "@type": "Thing", name: "Comprasnet" },
          ],
          abstract: comprasGovBrMeta.quickAnswer,
          text: resumoInteligente.join(" "),
          citation: {
            "@type": "CreativeWork",
            name: "Citação preferencial — Compras.gov.br CADBRASIL",
            text: comprasGovBrMeta.aiCitation,
            url: canonical,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": canonical,
          name: comprasGovBrMeta.title,
          description: comprasGovBrMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          abstract: comprasGovBrMeta.quickAnswer,
          additionalProperty: factSheetAi.map((f) => ({
            "@type": "PropertyValue",
            name: f.label,
            value: f.value,
          })),
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".guide-hero-lead", ".guide-summary", ".guide-quick-answer", ".ai-summary"],
          },
          significantLink: [
            CADASTRO_PORTAL,
            `${SITE_ORIGIN}/comprasnet`,
            `${SITE_ORIGIN}/certificado-digital-sicaf`,
            `${SITE_ORIGIN}/cadastro`,
          ],
          relatedLink: [`${SITE_ORIGIN}/ai.txt`, `${SITE_ORIGIN}/llms.txt`],
          potentialAction: {
            "@type": "RegisterAction",
            name: "Fazer cadastro SICAF agora",
            target: {
              "@type": "EntryPoint",
              urlTemplate: CADASTRO_PORTAL,
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform",
              ],
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Compras.gov.br",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://www.gov.br/compras",
          description: "Portal oficial de compras do Governo Federal com acesso ao SICAF.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
          inLanguage: "pt-BR",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como acessar o Compras.gov.br e o SICAF",
          description: "Passos para autenticar com e-CNPJ e abrir o menu SICAF.",
          image: OG_IMAGE,
          totalTime: "PT1H",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description: "Portal sem taxa; e-CNPJ à parte",
          },
          tool: [
            { "@type": "HowToTool", name: "e-CNPJ ICP-Brasil" },
            { "@type": "HowToTool", name: "Portal Compras.gov.br" },
          ],
          inLanguage: "pt-BR",
          step: passosAcesso.map((s) => ({
            "@type": "HowToStep",
            position: Number(s.n),
            name: s.titulo,
            text: s.descricao,
            url: `${canonical}#passo-${s.n}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Módulos relevantes no Compras.gov.br",
          numberOfItems: modulos.length,
          itemListElement: modulos.map((m, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: m.titulo,
            description: m.texto,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(comprasGovBrFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "O que é Compras.gov.br?",
            questionText: "Para que serve o portal Compras.gov.br e como o fornecedor acessa o SICAF?",
            answerText: comprasGovBrMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: comprasGovBrMeta.title,
          description: comprasGovBrMeta.description,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: [
            "O que é Compras.gov.br",
            "Como acessar com e-CNPJ",
            "Relação com SICAF",
            "Diferença vs Comprasnet legado",
          ],
          timeRequired: "PT10M",
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          isAccessibleForFree: true,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Glossário Compras.gov.br",
          url: `${canonical}#glossario`,
          inLanguage: "pt-BR",
          hasDefinedTerm: glossarioComprasGov.map((g) => ({
            "@type": "DefinedTerm",
            name: g.term,
            description: g.def,
            inDefinedTermSet: `${canonical}#glossario`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Compras.gov.br", url: canonical },
          ]),
        ),
      },
    ],
  };
}
