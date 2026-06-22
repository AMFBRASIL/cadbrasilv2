import { OG_IMAGE, robotsMetaTags, SEO_MODIFIED, SEO_PUBLISHED, SITE_ORIGIN } from "@/lib/seo";

export const licitacoesCadastroMeta = {
  path: "/licitacoes-cadastro",
  title: "Cadastro Gratuito | Plataforma de Licitações CADBRASIL",
  description:
    "Cadastre-se gratuitamente na plataforma CADBRASIL: encontre licitações, gerencie documentos, SICAF, pregão eletrônico e consultoria jurídica. Comece a vender ao governo hoje.",
  keywords:
    "cadastro plataforma licitações, teste gratuito licitações, cadastro CADBRASIL, gestão licitações, software licitações grátis, fornecedor governo cadastro",
};

export function buildLicitacoesCadastroHead() {
  const canonical = `${SITE_ORIGIN}${licitacoesCadastroMeta.path}`;

  return {
    meta: [
      { title: licitacoesCadastroMeta.title },
      { name: "description", content: licitacoesCadastroMeta.description },
      { name: "keywords", content: licitacoesCadastroMeta.keywords },
      { name: "author", content: "CADBRASIL" },
      ...robotsMetaTags(),
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:title", content: licitacoesCadastroMeta.title },
      { property: "og:description", content: licitacoesCadastroMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: licitacoesCadastroMeta.title },
      { name: "twitter:description", content: licitacoesCadastroMeta.description },
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
          name: licitacoesCadastroMeta.title,
          description: licitacoesCadastroMeta.description,
          url: canonical,
          inLanguage: "pt-BR",
          datePublished: SEO_PUBLISHED,
          dateModified: SEO_MODIFIED,
          potentialAction: {
            "@type": "RegisterAction",
            target: canonical,
            name: "Cadastro gratuito plataforma CADBRASIL",
          },
        }),
      },
    ],
  };
}
