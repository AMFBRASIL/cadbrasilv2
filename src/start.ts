import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

// Add legacy URLs from Search Console / analytics here.
// Keep values as destination paths in this new site.
const LEGACY_REDIRECTS: Record<string, string> = {
  "/versao2": "/",
  // Consolida canibalização do cluster "cadastro/credenciamento SICAF"
  "/cadastro-sicaf": "/cadastro",
  "/credenciamento-sicaf-digital": "/credenciamento",
  // Consolida "o que é SICAF" no guia pilar
  "/o-que-e-sicaf": "/o-que-e-sicaf-e-como-se-cadastrar",
};

function normalizePathname(pathname: string) {
  if (!pathname) return "/";
  const withoutTrailingSlash = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname;
  return withoutTrailingSlash.toLowerCase() || "/";
}

const legacyRedirectMiddleware = createMiddleware().server(async ({ request, next }) => {
  const url = new URL(request.url);
  const normalizedPath = normalizePathname(url.pathname);
  const destination = LEGACY_REDIRECTS[normalizedPath];

  if (destination) {
    const redirectUrl = new URL(destination, url.origin);
    return Response.redirect(redirectUrl.toString(), 301);
  }

  return next();
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    // Preserve real 404 responses — soft-404 (302→/) harms crawl signals.
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [legacyRedirectMiddleware, errorMiddleware],
}));
