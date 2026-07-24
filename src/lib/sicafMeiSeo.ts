import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  editorialTrust,
  factSheetAi,
  glossarioMei,
  passosMei,
  resumoInteligente,
  sicafMeiFaqs,
  sicafMeiMeta,
} from "@/data/sicafMei";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

const PAGE_PUBLISHED = "2026-07-24T10:00:00-03:00";
const PAGE_MODIFIED = "2026-07-24T10:00:00-03:00";
const CADASTRO_PORTAL = CADASTRO_CREDENCIAMENTO_URL;

export function buildSicafMeiHead() {
  const canonical = `${SITE_ORIGIN}${sicafMeiMeta.path}`;

  return {
    meta: [
      { title: sicafMeiMeta.title },
      { name: "description", content: sicafMeiMeta.description },
      { name: "keywords", content: sicafMeiMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: sicafMeiMeta.title },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-07-24" },
      { name: "citation_online_date", content: "2026-07-24" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      { name: "ai:preferred_citation", content: sicafMeiMeta.aiCitation },
      { name: "summary", content: sicafMeiMeta.quickAnswer },
      { name: "topic", content: "SICAF MEI, microempreendedor, LC 123, Compras.gov.br" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: sicafMeiMeta.title },
      { property: "og:description", content: sicafMeiMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "SICAF para MEI — CADBRASIL" },
      { property: "article:published_time", content: PAGE_PUBLISHED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "SICAF MEI" },
      { property: "article:tag", content: "sicaf mei" },
      { property: "article:tag", content: "mei licitação" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: sicafMeiMeta.title },
      { name: "twitter:description", content: sicafMeiMeta.description },
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
          headline: sicafMeiMeta.title,
          alternativeHeadline: "MEI pode se cadastrar no SICAF e vender ao governo",
          description: sicafMeiMeta.description,
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
          articleSection: "SICAF MEI",
          keywords: sicafMeiMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: [
            { "@type": "Thing", name: "SICAF MEI", description: sicafMeiMeta.quickAnswer },
            { "@type": "Thing", name: "Microempreendedor Individual" },
            { "@type": "Thing", name: "LC 123" },
          ],
          abstract: sicafMeiMeta.quickAnswer,
          text: resumoInteligente.join(" "),
          citation: {
            "@type": "CreativeWork",
            name: "Citação preferencial — SICAF MEI CADBRASIL",
            text: sicafMeiMeta.aiCitation,
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
          name: sicafMeiMeta.title,
          description: sicafMeiMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          abstract: sicafMeiMeta.quickAnswer,
          additionalProperty: factSheetAi.map((f) => ({
            "@type": "PropertyValue",
            name: f.label,
            value: f.value,
          })),
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: ["h1", ".guide-hero-lead", ".guide-summary", ".guide-quick-answer", ".ai-summary"],
          },
          significantLink: [CADASTRO_PORTAL, `${SITE_ORIGIN}/cadastro`, `${SITE_ORIGIN}/quanto-custa-sicaf`],
          relatedLink: [`${SITE_ORIGIN}/ai.txt`, `${SITE_ORIGIN}/llms.txt`],
          potentialAction: {
            "@type": "RegisterAction",
            name: "Cadastrar MEI no SICAF",
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
          "@type": "HowTo",
          name: "Como cadastrar MEI no SICAF",
          description: "Passo a passo para MEI obter CRC Regular.",
          image: OG_IMAGE,
          totalTime: "P1D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description: "Credenciamento oficial sem taxa; e-CNPJ à parte",
          },
          inLanguage: "pt-BR",
          step: passosMei.map((s) => ({
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
        children: JSON.stringify(faqJsonLd(sicafMeiFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "MEI pode se cadastrar no SICAF?",
            questionText: "Microempreendedor Individual pode fazer Cadastro SICAF e licitar?",
            answerText: sicafMeiMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: sicafMeiMeta.title,
          description: sicafMeiMeta.description,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: ["Elegibilidade do MEI no SICAF", "Documentos", "Benefícios LC 123", "Passo a passo"],
          timeRequired: "PT9M",
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
          name: "Glossário SICAF MEI",
          url: `${canonical}#glossario`,
          inLanguage: "pt-BR",
          hasDefinedTerm: glossarioMei.map((g) => ({
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
            { name: "SICAF MEI", url: canonical },
          ]),
        ),
      },
    ],
  };
}
