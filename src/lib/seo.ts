/** Constantes SEO compartilhadas — Google, Bing e crawlers de IA. */
export const SITE_ORIGIN = "https://cadbrasil.com.br";

/** Imagem OG/Twitter (hospedada no domínio canônico). */
export const OG_IMAGE = `${SITE_ORIGIN}/og.png`;

export const ROBOTS_INDEX =
  "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

/** Hosts de produção — indexação permitida */
export const PRODUCTION_HOSTS = new Set(["cadbrasil.com.br", "www.cadbrasil.com.br"]);

/** Meta tags robots para todas as páginas indexáveis */
export function robotsMetaTags() {
  return [
    { name: "robots", content: ROBOTS_INDEX },
    { name: "googlebot", content: ROBOTS_INDEX },
  ] as const;
}

export const SEO_PUBLISHED = "2026-01-15T08:00:00-03:00";
export const SEO_MODIFIED = "2026-08-07T23:55:00-03:00";

export function canonical(path: string) {
  return path.startsWith("http") ? path : `${SITE_ORIGIN}${path}`;
}
