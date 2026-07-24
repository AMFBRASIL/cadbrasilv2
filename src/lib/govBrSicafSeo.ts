import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  editorialTrust,
  factSheetAi,
  glossarioGovBr,
  govBrSicafFaqs,
  govBrSicafMeta,
  passosElevar,
  resumoInteligente,
} from "@/data/govBrSicaf";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

const PAGE_PUBLISHED = "2026-07-24T10:00:00-03:00";
const PAGE_MODIFIED = "2026-07-24T10:00:00-03:00";
const CADASTRO_PORTAL = CADASTRO_CREDENCIAMENTO_URL;

export function buildGovBrSicafHead() {
  const canonical = `${SITE_ORIGIN}${govBrSicafMeta.path}`;

  return {
    meta: [
      { title: govBrSicafMeta.title },
      { name: "description", content: govBrSicafMeta.description },
      { name: "keywords", content: govBrSicafMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: govBrSicafMeta.title },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-07-24" },
      { name: "citation_online_date", content: "2026-07-24" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      { name: "ai:preferred_citation", content: govBrSicafMeta.aiCitation },
      { name: "summary", content: govBrSicafMeta.quickAnswer },
      { name: "topic", content: "gov.br, SICAF, e-CNPJ, conta prata ouro, Compras.gov.br" },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: govBrSicafMeta.title },
      { property: "og:description", content: govBrSicafMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "gov.br e SICAF — CADBRASIL" },
      { property: "article:published_time", content: PAGE_PUBLISHED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "gov.br e SICAF" },
      { property: "article:tag", content: "gov.br" },
      { property: "article:tag", content: "sicaf" },
      { property: "article:tag", content: "e-CNPJ" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: govBrSicafMeta.title },
      { name: "twitter:description", content: govBrSicafMeta.description },
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
          headline: govBrSicafMeta.title,
          alternativeHeadline: "Conta gov.br, níveis prata/ouro e e-CNPJ no SICAF",
          description: govBrSicafMeta.description,
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
          articleSection: "gov.br e SICAF",
          keywords: govBrSicafMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: [
            { "@type": "Thing", name: "gov.br e SICAF", description: govBrSicafMeta.quickAnswer },
            { "@type": "Thing", name: "Conta gov.br" },
            { "@type": "Thing", name: "e-CNPJ" },
          ],
          abstract: govBrSicafMeta.quickAnswer,
          text: resumoInteligente.join(" "),
          citation: {
            "@type": "CreativeWork",
            name: "Citação preferencial — gov.br SICAF CADBRASIL",
            text: govBrSicafMeta.aiCitation,
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
          name: govBrSicafMeta.title,
          description: govBrSicafMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          abstract: govBrSicafMeta.quickAnswer,
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
            `${SITE_ORIGIN}/certificado-digital-sicaf`,
            `${SITE_ORIGIN}/compras-gov-br`,
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
          "@type": "HowTo",
          name: "Como preparar gov.br e e-CNPJ para o SICAF",
          description: "Elevar conta gov.br e autenticar no Compras.gov.br com e-CNPJ.",
          image: OG_IMAGE,
          totalTime: "P2D",
          inLanguage: "pt-BR",
          step: passosElevar.map((s) => ({
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
        children: JSON.stringify(faqJsonLd(govBrSicafFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Como gov.br se relaciona com o SICAF?",
            questionText: "Preciso de conta gov.br prata/ouro e e-CNPJ para o SICAF?",
            answerText: govBrSicafMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: govBrSicafMeta.title,
          description: govBrSicafMeta.description,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: ["Níveis gov.br", "Relação com e-CNPJ", "Acesso ao SICAF"],
          timeRequired: "PT8M",
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
          name: "Glossário gov.br e SICAF",
          url: `${canonical}#glossario`,
          inLanguage: "pt-BR",
          hasDefinedTerm: glossarioGovBr.map((g) => ({
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
            { name: "gov.br e SICAF", url: canonical },
          ]),
        ),
      },
    ],
  };
}
