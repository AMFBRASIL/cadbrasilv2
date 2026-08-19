import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  editorialTrust,
  factSheetAi,
  ferramentas,
  glossarioLicitacoes,
  itemListFerramentas,
  licitacoesFaqs,
  licitacoesMeta,
  passosHowToInicio,
  resumoInteligente,
} from "@/data/licitacoes";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

const PAGE_PUBLISHED = "2026-01-15T08:00:00-03:00";
const PAGE_MODIFIED = "2026-08-19T20:30:00-03:00";
const CADASTRO_PORTAL = CADASTRO_CREDENCIAMENTO_URL;

export function buildLicitacoesHead() {
  const canonical = `${SITE_ORIGIN}${licitacoesMeta.path}`;

  return {
    meta: [
      { title: licitacoesMeta.title },
      { name: "description", content: licitacoesMeta.description },
      { name: "keywords", content: licitacoesMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "citation_title", content: licitacoesMeta.title },
      { name: "citation_author", content: "CADBRASIL" },
      { name: "citation_publication_date", content: "2026-01-15" },
      { name: "citation_online_date", content: "2026-08-19" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      { name: "ai:preferred_citation", content: licitacoesMeta.aiCitation },
      { name: "summary", content: licitacoesMeta.quickAnswer },
      {
        name: "topic",
        content:
          "Plataforma de licitações, iniciar minha licitação, SICAF, pregão eletrônico, credenciamento, vender ao governo, CADBRASIL",
      },
      ...robotsMetaTags(),
      { property: "og:type", content: "article" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: licitacoesMeta.title },
      { property: "og:description", content: licitacoesMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Plataforma de licitações CADBRASIL — Iniciar Minha Licitação",
      },
      { property: "article:published_time", content: PAGE_PUBLISHED },
      { property: "article:modified_time", content: PAGE_MODIFIED },
      { property: "article:section", content: "Plataforma de licitações" },
      { property: "article:tag", content: "plataforma de licitações" },
      { property: "article:tag", content: "iniciar licitação" },
      { property: "article:tag", content: "sicaf" },
      { property: "article:tag", content: "pregão eletrônico" },
      { property: "article:tag", content: "vender ao governo" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: licitacoesMeta.title },
      { name: "twitter:description", content: licitacoesMeta.description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Iniciar Minha Licitação — CADBRASIL" },
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
          headline: licitacoesMeta.title,
          alternativeHeadline: "Como iniciar sua licitação na plataforma CADBRASIL",
          description: licitacoesMeta.description,
          image: [OG_IMAGE],
          author: {
            "@type": "Organization",
            "@id": `${SITE_ORIGIN}/#organization`,
            name: editorialTrust.who.organization,
            url: SITE_ORIGIN,
            description: editorialTrust.who.experience,
          },
          publisher: {
            "@type": "Organization",
            "@id": `${SITE_ORIGIN}/#organization`,
            name: "CADBRASIL",
            url: SITE_ORIGIN,
            logo: { "@type": "ImageObject", url: OG_IMAGE },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          articleSection: "Plataforma de licitações para fornecedores",
          keywords: licitacoesMeta.keywords,
          inLanguage: "pt-BR",
          isAccessibleForFree: true,
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          about: [
            { "@type": "Thing", name: "Plataforma de licitações", description: licitacoesMeta.quickAnswer },
            { "@type": "Thing", name: "Iniciar Minha Licitação" },
            { "@type": "Thing", name: "Credenciamento SICAF" },
            { "@type": "Thing", name: "Pregão eletrônico" },
            { "@type": "Thing", name: "Compras.gov.br" },
          ],
          mentions: [
            { "@type": "Thing", name: "SICAF" },
            { "@type": "Thing", name: "PNCP" },
            { "@type": "Thing", name: "Lei 14.133/2021" },
            { "@type": "Thing", name: "e-CNPJ" },
          ],
          abstract: licitacoesMeta.quickAnswer,
          text: resumoInteligente.join(" "),
          citation: {
            "@type": "CreativeWork",
            name: "Citação preferencial — plataforma de licitações CADBRASIL",
            text: licitacoesMeta.aiCitation,
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
          name: licitacoesMeta.title,
          description: licitacoesMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          primaryImageOfPage: { "@type": "ImageObject", url: OG_IMAGE },
          abstract: licitacoesMeta.quickAnswer,
          about: {
            "@type": "Thing",
            name: "Plataforma de licitações para fornecedores do governo",
            description: licitacoesMeta.quickAnswer,
          },
          author: {
            "@type": "Organization",
            name: editorialTrust.who.organization,
            description: editorialTrust.who.experience,
          },
          additionalProperty: factSheetAi.map((f) => ({
            "@type": "PropertyValue",
            name: f.label,
            value: f.value,
          })),
          speakable: {
            "@type": "SpeakableSpecification",
            cssSelector: [
              "h1",
              ".guide-hero-lead",
              ".guide-summary",
              ".guide-quick-answer",
              ".ai-summary",
            ],
          },
          significantLink: [
            CADASTRO_PORTAL,
            `${SITE_ORIGIN}/cadastro`,
            `${SITE_ORIGIN}/o-que-e-sicaf-e-como-se-cadastrar`,
            `${SITE_ORIGIN}/como-participar-de-licitacao`,
            `${SITE_ORIGIN}/planos`,
            `${SITE_ORIGIN}/proposta`,
          ],
          relatedLink: [`${SITE_ORIGIN}/ai.txt`, `${SITE_ORIGIN}/llms.txt`],
          potentialAction: {
            "@type": "RegisterAction",
            name: "Iniciar Minha Licitação",
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
          name: "CADBRASIL — Plataforma de Licitações",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Windows, macOS",
          description: licitacoesMeta.description,
          url: canonical,
          featureList: ferramentas.map((f) => f.nome),
          offers: {
            "@type": "Offer",
            url: CADASTRO_PORTAL,
            availability: "https://schema.org/InStock",
            priceCurrency: "BRL",
            eligibleRegion: { "@type": "Country", name: "Brasil" },
            description: "Triagem de credenciamento e proposta alinhada ao CNPJ",
          },
          provider: {
            "@type": "Organization",
            "@id": `${SITE_ORIGIN}/#organization`,
            name: "CADBRASIL",
            url: SITE_ORIGIN,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Plataforma de licitações CADBRASIL",
          description: licitacoesMeta.quickAnswer,
          provider: { "@type": "Organization", name: "CADBRASIL", url: SITE_ORIGIN },
          areaServed: { "@type": "Country", name: "Brasil" },
          serviceType: "Plataforma e assessoria para licitações públicas",
          category: "Licitações públicas",
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
            name: "Iniciar Minha Licitação",
            target: CADASTRO_PORTAL,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como iniciar minha licitação na CADBRASIL",
          description:
            "Cinco passos: triagem em cadastro.cadbrasil.com.br/credenciamento, diagnóstico, SICAF, documentos e disputa de editais até o contrato.",
          image: OG_IMAGE,
          totalTime: "P1D",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "BRL",
            value: "0",
            description:
              "Credenciamento oficial sem taxa no governo; assessoria e plataforma CADBRASIL à parte",
          },
          tool: [
            { "@type": "HowToTool", name: "Portal cadastro.cadbrasil.com.br/credenciamento" },
            { "@type": "HowToTool", name: "Certificado digital e-CNPJ ou e-CPF" },
            { "@type": "HowToTool", name: "Portal Compras.gov.br" },
            { "@type": "HowToTool", name: "PNCP" },
          ],
          supply: [
            { "@type": "HowToSupply", name: "CNPJ ativo ou CPF (orientação para MEI)" },
            { "@type": "HowToSupply", name: "Documentos societários e certidões em PDF" },
          ],
          inLanguage: "pt-BR",
          step: passosHowToInicio.map((s) => ({
            "@type": "HowToStep",
            position: Number(s.n),
            name: s.t,
            text: s.d,
            url: `${canonical}#${s.urlHash}`,
          })),
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
            url: `${canonical}#ferramentas`,
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
            questionName: "Como iniciar minha licitação na CADBRASIL?",
            questionText: "O que fazer para começar a licitar com a plataforma CADBRASIL?",
            answerText: licitacoesMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LearningResource",
          name: licitacoesMeta.title,
          description: licitacoesMeta.description,
          url: canonical,
          learningResourceType: "Guide",
          educationalLevel: "Professional",
          inLanguage: "pt-BR",
          teaches: [
            "Como iniciar uma licitação na CADBRASIL",
            "O que é a triagem de credenciamento",
            "Papel do SICAF e do certificado digital",
            "Ferramentas da plataforma (editais, documentos, pregão, IA)",
            "Etapas do processo até o contrato",
          ],
          timeRequired: "PT12M",
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
          name: "Glossário de licitações públicas",
          description: "Termos essenciais da plataforma de licitações CADBRASIL.",
          url: `${canonical}#glossario`,
          inLanguage: "pt-BR",
          hasDefinedTerm: glossarioLicitacoes.map((g) => ({
            "@type": "DefinedTerm",
            name: g.term,
            description: g.def,
            inDefinedTermSet: `${canonical}#glossario`,
          })),
        }),
      },
    ],
  };
}
