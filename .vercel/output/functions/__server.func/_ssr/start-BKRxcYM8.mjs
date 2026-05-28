import { c as createMiddleware } from "./server-DGdJsztZ.mjs";
import { r as renderErrorPage } from "./index.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function dedupeSerializationAdapters(deduped, serializationAdapters) {
  for (let i = 0, len = serializationAdapters.length; i < len; i++) {
    const current = serializationAdapters[i];
    if (!deduped.has(current)) {
      deduped.add(current);
      if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
    }
  }
}
var createStart = (getOptions) => {
  return {
    getOptions: async () => {
      const options = await getOptions();
      if (options.serializationAdapters) {
        const deduped = /* @__PURE__ */ new Set();
        dedupeSerializationAdapters(deduped, options.serializationAdapters);
        options.serializationAdapters = Array.from(deduped);
      }
      return options;
    },
    createMiddleware
  };
};
const LEGACY_REDIRECTS = {
  // "/old-page": "/new-page",
};
function normalizePathname(pathname) {
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
    const response = await next();
    if (response.status === 404) {
      return Response.redirect("/", 302);
    }
    return response;
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
});
const startInstance = createStart(() => ({
  requestMiddleware: [legacyRedirectMiddleware, errorMiddleware]
}));
export {
  startInstance
};
