import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import { AnalyticsPageView } from "@/components/site/AnalyticsPageView";
import { UtmCapture } from "@/components/site/UtmCapture";
import { BING_UET_SCRIPT, GTAG_AW_ID, GTM_ID, GTM_SCRIPT, GTAG_INIT_SCRIPT } from "@/lib/analytics";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";

import appCss from "../styles.css?url";

const BRAND_THEME_COLOR = "#1a2c66";
const DEFAULT_TITLE = "CADBRASIL - Cadastro SICAF e Consultoria em Licitações";
const DEFAULT_DESCRIPTION =
  "Cadastre sua empresa no SICAF em até 24 horas. Especialistas em cadastramento, regularização e consultoria em licitações públicas.";

function NotFoundComponent() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.location.replace("/");
    }, 50);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Redirecionando para a página inicial...
        </p>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Não foi possível carregar esta página
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro temporário. Atualize a página ou volte para o início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Ir para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "author", content: "CADBRASIL" },
      { name: "language", content: "pt-BR" },
      { name: "geo.region", content: "BR" },
      { name: "theme-color", content: BRAND_THEME_COLOR },
      { name: "msapplication-TileColor", content: BRAND_THEME_COLOR },
      ...robotsMetaTags(),
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_ORIGIN}/` },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@cadbrasil" },
      { name: "twitter:title", content: "CADBRASIL - Cadastro SICAF" },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "sitemap", href: `${SITE_ORIGIN}/sitemap.xml`, type: "application/xml" },
      { rel: "alternate", hrefLang: "pt-BR", href: `${SITE_ORIGIN}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_ORIGIN}/` },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      { children: GTM_SCRIPT },
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GTAG_AW_ID}`,
        async: true,
      },
      { children: GTAG_INIT_SCRIPT },
      { children: BING_UET_SCRIPT },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_ORIGIN}/#organization`,
              name: "CADBRASIL",
              alternateName: "CADBRASIL",
              url: SITE_ORIGIN,
              logo: OG_IMAGE,
              description: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas.",
              areaServed: "BR",
              knowsAbout: ["SICAF", "Licitações públicas", "Credenciamento de fornecedores"],
              sameAs: ["https://cadastro.cadbrasil.com.br"],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_ORIGIN}/#website`,
              url: SITE_ORIGIN,
              name: "CADBRASIL",
              inLanguage: "pt-BR",
              publisher: { "@id": `${SITE_ORIGIN}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <UtmCapture />
      <AnalyticsPageView />
      <Outlet />
    </QueryClientProvider>
  );
}
