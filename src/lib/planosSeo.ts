import { breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { planosFaqs, planosMeta, plans } from "@/data/planos";
import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";
import { qaPageJsonLd } from "@/lib/structuredData";

export function buildPlanosHead() {
  const canonical = `${SITE_ORIGIN}${planosMeta.path}`;

  const offers = plans
    .filter((p) => !p.customPrice)
    .map((p) => ({
      "@type": "Offer",
      name: `Plano ${p.name} CADBRASIL`,
      description: p.description,
      priceCurrency: "BRL",
      url: `${canonical}#comparar`,
      seller: { "@type": "Organization", name: "CADBRASIL" },
    }));

  return {
    meta: [
      { title: planosMeta.title },
      { name: "description", content: planosMeta.description },
      { name: "keywords", content: planosMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: planosMeta.title },
      { property: "og:description", content: planosMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: planosMeta.title },
      { name: "twitter:description", content: planosMeta.description },
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
          "@type": "WebPage",
          name: planosMeta.title,
          description: planosMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "CADBRASIL — Plataforma de Licitações",
          description: planosMeta.description,
          brand: { "@type": "Brand", name: "CADBRASIL" },
          offers: {
            "@type": "AggregateOffer",
            offerCount: offers.length,
            lowPrice: "149",
            highPrice: "399",
            priceCurrency: "BRL",
            offers,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Planos", url: canonical },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(planosFaqs, canonical)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          qaPageJsonLd({
            questionName: "Quais são os planos da CADBRASIL?",
            questionText: "Quanto custa a plataforma CADBRASIL de licitações?",
            answerText: planosMeta.quickAnswer,
            pageUrl: canonical,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Planos CADBRASIL",
          numberOfItems: plans.length,
          itemListElement: plans.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Plano ${p.name}`,
            description: p.description,
          })),
        }),
      },
    ],
  };
}
