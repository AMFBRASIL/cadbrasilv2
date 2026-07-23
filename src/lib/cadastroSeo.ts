import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { qaPageJsonLd } from "@/lib/structuredData";
import {
  cadastroPageFaqs,
  cadastroPageMeta,
  editorialTrust,
  glossarioCadastro,
  incluiNoCadastro,
  itemListBeneficios,
  passosRapidos,
} from "@/data/cadastroPage";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";

const PAGE_PUBLISHED = "2026-01-15T10:00:00-03:00";
const PAGE_MODIFIED = "2026-07-23T21:15:00-03:00";
const CADASTRO_PORTAL = CADASTRO_CREDENCIAMENTO_URL;

export function buildCadastroHead() {
  const canonical = `${SITE_ORIGIN}${cadastroPageMeta.path}`;

  return {
    meta: [
      { title: cadastroPageMeta.metaTitle },
      { name: "description", content: cadastroPageMeta.metaDescription },
      { name: "keywords", content: cadastroPageMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: cadastroPageMeta.metaTitle },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-01-15" },
      { name: "citation_online_date", content: "2026-07-23" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      { name: "ai:preferred_citation", content: cadastroPageMeta.aiCitation },
      { name: "summary", content: cadastroPageMeta.quickAnswer },
      {
        name: "topic",
        content: "Cadastro SICAF online, credenciamento Compras.gov.br, CRC Regular, CADBRASIL",
      },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: cadastroPageMeta.metaTitle },
      { property: "og:description", content: cadastroPageMeta.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Cadastro SICAF 2026 online — CADBRASIL" },
      { property: "article:published_time", content: PAGE_PUBLISHED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "Cadastro SICAF" },
      { property: "article:tag", content: "cadastro sicaf" },
      { property: "article:tag", content: "cadastro sicaf online" },
      { property: "article:tag", content: "credenciamento sicaf" },
      { property: "article:tag", content: "CRC" },
      { property: "article:tag", content: "Compras.gov.br" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: cadastroPageMeta.metaTitle },
      { name: "twitter:description", content: cadastroPageMeta.metaDescription },
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
          headline: cadastroPageMeta.metaTitle,
          alternativeHeadline: "Como fazer Cadastro SICAF online com a CADBRASIL em até 24h",
          description: cadastroPageMeta.metaDescription,
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
          articleSection: "Cadastro SICAF — conversão",
          keywords: cadastroPageMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: [
            { "@type": "Thing", name: "Cadastro SICAF", description: cadastroPageMeta.quickAnswer },
            { "@type": "Thing", name: "Credenciamento SICAF" },
            { "@type": "Thing", name: "CRC Regular" },
            { "@type": "Thing", name: "Compras.gov.br" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": canonical,
          name: cadastroPageMeta.metaTitle,
          description: cadastroPageMeta.metaDescription,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          about: {
            "@type": "Thing",
            name: "Cadastro SICAF online",
            description: cadastroPageMeta.quickAnswer,
          },
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [
              "h1",
              ".page-hero-summary",
              ".guide-quick-answer",
              ".ai-summary",
              ".ai-citation",
              ".ai-fact-sheet",
              ".cadastro-cta-hero",
            ],
          },
          significantLink: [
            CADASTRO_PORTAL,
            `${SITE_ORIGIN}/cadastro-sicaf-passo-a-passo`,
            `${SITE_ORIGIN}/cadbrasil`,
            `${SITE_ORIGIN}/o-que-e-sicaf-e-como-se-cadastrar`,
            `${SITE_ORIGIN}/planos`,
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
          "@type": "Service",
          name: "Cadastro SICAF online — CADBRASIL",
          description: cadastroPageMeta.metaDescription,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Cadastro e credenciamento SICAF",
          category: "Cadastro SICAF",
          url: canonical,
          offers: {
            "@type": "Offer",
            url: CADASTRO_PORTAL,
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
            eligibleRegion: { "@type": "Country", name: "Brasil" },
          },
          potentialAction: {
            "@type": "RegisterAction",
            name: "Iniciar credenciamento SICAF",
            target: CADASTRO_PORTAL,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Credenciamento SICAF CADBRASIL",
          description: cadastroPageMeta.quickAnswer,
          url: canonical,
          image: OG_IMAGE,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: ["Cadastro SICAF", "Credenciamento Compras.gov.br", "Emissão de CRC"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "O que inclui o Cadastro SICAF",
            numberOfItems: incluiNoCadastro.length,
            itemListElement: incluiNoCadastro.map((s, i) => ({
              "@type": "Offer",
              position: i + 1,
              itemOffered: {
                "@type": "Service",
                name: s.titulo,
                description: s.descricao,
              },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como fazer cadastro SICAF com a CADBRASIL",
          description:
            "Três passos para iniciar o Cadastro SICAF online: portal de credenciamento, documentos e CRC Regular.",
          image: OG_IMAGE,
          totalTime: "P1D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description: "Credenciamento oficial sem taxa no governo; assessoria CADBRASIL à parte",
          },
          tool: [
            { "@type": "HowToTool", name: "Certificado digital e-CNPJ" },
            { "@type": "HowToTool", name: "Portal cadastro.cadbrasil.com.br/credenciamento" },
            { "@type": "HowToTool", name: "Compras.gov.br" },
          ],
          supply: [
            { "@type": "HowToSupply", name: "CNPJ ativo" },
            { "@type": "HowToSupply", name: "Documentos societários e certidões em PDF" },
          ],
          inLanguage: "pt-BR",
          step: passosRapidos.map((s) => ({
            "@type": "HowToStep",
            position: Number(s.n),
            name: s.titulo,
            text: s.texto,
            url: `${canonical}#passo-${s.n}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "O que inclui o cadastro SICAF CADBRASIL",
          numberOfItems: itemListBeneficios.length,
          itemListElement: incluiNoCadastro.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.titulo,
            description: item.descricao,
            url: `${canonical}#inclui`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(cadastroPageFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Como fazer cadastro SICAF online?",
            questionText: "Qual é a forma mais rápida de cadastrar minha empresa no SICAF?",
            answerText: cadastroPageMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: cadastroPageMeta.metaTitle,
          description: cadastroPageMeta.metaDescription,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: [
            "Como iniciar o Cadastro SICAF online",
            "Fluxo de credenciamento CADBRASIL",
            "O que está incluso até o CRC Regular",
            "Pré-requisitos (e-CNPJ e documentação)",
          ],
          timeRequired: "PT5M",
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
          name: "Glossário Cadastro SICAF",
          description: "Termos essenciais da landing de Cadastro SICAF CADBRASIL.",
          url: `${canonical}#glossario`,
          inLanguage: "pt-BR",
          hasDefinedTerm: glossarioCadastro.map((g) => ({
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
            { name: cadastroPageMeta.shortTitle, url: canonical },
          ]),
        ),
      },
    ],
  };
}
