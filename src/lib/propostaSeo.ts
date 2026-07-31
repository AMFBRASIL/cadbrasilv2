import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import {
  calcTotalAnual,
  mercadoReferenciaAnual,
  modulosOpcionais,
  pacoteBase,
  propostaFaqs,
  propostaMeta,
} from "@/data/proposta";
import { CADASTRO_CREDENCIAMENTO_URL } from "@/lib/cadastroUrl";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

const PAGE_PUBLISHED = "2026-07-28T21:00:00-03:00";
const PAGE_MODIFIED = "2026-07-28T21:00:00-03:00";

export function buildPropostaHead() {
  const canonical = `${SITE_ORIGIN}${propostaMeta.path}`;
  const maxTotal = calcTotalAnual(modulosOpcionais.map((m) => m.id));

  return {
    meta: [
      { title: propostaMeta.metaTitle },
      { name: "description", content: propostaMeta.metaDescription },
      { name: "keywords", content: propostaMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      { name: "summary", content: propostaMeta.quickAnswer },
      { name: "topic", content: "Proposta CADBRASIL, módulos SICAF, preço anual" },
      { name: "ai-content-declaration", content: "human-reviewed-expert-guide" },
      ...robotsMetaTags(),
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: propostaMeta.metaTitle },
      { property: "og:description", content: propostaMeta.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: propostaMeta.metaTitle },
      { name: "twitter:description", content: propostaMeta.metaDescription },
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
          "@type": "WebPage",
          "@id": canonical,
          name: propostaMeta.metaTitle,
          description: propostaMeta.metaDescription,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: PAGE_PUBLISHED,
          dateModified: PAGE_MODIFIED,
          abstract: propostaMeta.quickAnswer,
          isPartOf: { "@type": "WebSite", name: "CADBRASIL", url: SITE_ORIGIN },
          potentialAction: {
            "@type": "RegisterAction",
            name: "Iniciar cadastro SICAF",
            target: CADASTRO_CREDENCIAMENTO_URL,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Proposta CADBRASIL — pacote configurável anual",
          description: propostaMeta.metaDescription,
          brand: { "@type": "Brand", name: "CADBRASIL" },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: pacoteBase.precoAnual,
            highPrice: maxTotal,
            offerCount: modulosOpcionais.length + 1,
            availability: "https://schema.org/InStock",
            url: canonical,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Módulos da proposta CADBRASIL",
          numberOfItems: modulosOpcionais.length + 1,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: pacoteBase.titulo,
              description: `Pacote base anual ${pacoteBase.precoAnual}`,
            },
            ...modulosOpcionais.map((m, i) => ({
              "@type": "ListItem",
              position: i + 2,
              name: m.nome,
              description: `${m.resumo} — R$ ${m.precoAnual}/ano`,
            })),
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(propostaFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Quanto custa a proposta CADBRASIL?",
            questionText: "Qual o valor mínimo e como montar a proposta anual?",
            answerText: propostaMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Proposta", url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Offer",
          name: "Pacote base CADBRASIL",
          price: pacoteBase.precoAnual,
          priceCurrency: "BRL",
          description: mercadoReferenciaAnual
            ? `Pacote anual a partir de R$ ${pacoteBase.precoAnual}`
            : undefined,
          url: canonical,
        }),
      },
    ],
  };
}
