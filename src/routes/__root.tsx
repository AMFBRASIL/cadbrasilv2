import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const ORIGIN = "https://cadbrasil.com.br";
const SOCIAL_PREVIEW_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7c46af53-295b-4a74-8239-56f32ba6ed77/id-preview-d78bce4c--3b6f7a39-c5c1-4555-ad8d-dccb06150a62.lovable.app-1779886304111.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
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
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
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
      { title: "CADBRASIL · SICAF sem complicação" },
      { name: "description", content: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas." },
      { name: "author", content: "CADBRASIL" },
      { name: "theme-color", content: "#1a2c66" },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { name: "googlebot", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "CADBRASIL" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${ORIGIN}/` },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "CADBRASIL · SICAF sem complicação" },
      { name: "twitter:title", content: "CADBRASIL · SICAF sem complicação" },
      { property: "og:description", content: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas." },
      { name: "twitter:description", content: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas." },
      { property: "og:image", content: SOCIAL_PREVIEW_IMAGE },
      { name: "twitter:image", content: SOCIAL_PREVIEW_IMAGE },
    ],
    links: [
      { rel: "canonical", href: `${ORIGIN}/` },
      { rel: "sitemap", href: `${ORIGIN}/sitemap.xml`, type: "application/xml" },
      { rel: "alternate", hrefLang: "pt-BR", href: `${ORIGIN}/` },
      { rel: "alternate", hrefLang: "x-default", href: `${ORIGIN}/` },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TRVTMS6M');`,
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=AW-16460586067",
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-16460586067');
gtag('config', 'GT-KTPDP2TV');`,
      },
      {
        children: `(function(w,d,t,r,u){
  var f,n,i;
  w[u]=w[u]||[],f=function(){
    var o={ti:"343231769", enableAutoSpaTracking: true};
    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad");
  },
  n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){
    var s=this.readyState;
    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null);
  },
  i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i);
})(window,document,"script","https://bat.bing.com/bat.js","uetq");`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${ORIGIN}/#organization`,
              name: "CADBRASIL",
              alternateName: "CADBRASIL",
              url: ORIGIN,
              logo: SOCIAL_PREVIEW_IMAGE,
              description: "Especialistas em SICAF: cadastro, atualização, regularização e suporte completo para licitações públicas.",
              areaServed: "BR",
              knowsAbout: ["SICAF", "Licitações públicas", "Compras.gov.br"],
              sameAs: ["https://cadastro.cadbrasil.com.br"],
            },
            {
              "@type": "WebSite",
              "@id": `${ORIGIN}/#website`,
              url: ORIGIN,
              name: "CADBRASIL",
              inLanguage: "pt-BR",
              publisher: { "@id": `${ORIGIN}/#organization` },
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
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
