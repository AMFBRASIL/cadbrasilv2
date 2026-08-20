export const CADASTRO_BASE = "https://cadastro.cadbrasil.com.br";

/** URL base sem query — fallback SSR. */
export const CADASTRO_URL = CADASTRO_BASE;

/** Destino de conversão da landing /cadastro e CTAs de /licitacoes */
export const CADASTRO_CREDENCIAMENTO_URL = `${CADASTRO_BASE}/credenciamento`;

const STORAGE_KEY = "cadbrasil_tracking_params";

/**
 * Click IDs e parâmetros exatos de campanha (Google Ads, Microsoft/Bing Ads,
 * OpenAI/ChatGPT Ads, Meta e demais redes).
 * Repassados ao portal cadastro.cadbrasil.com.br/credenciamento.
 */
const EXACT_TRACKING_PARAMS = new Set([
  // Google Ads / Google Marketing Platform
  "gclid",
  "gbraid",
  "wbraid",
  "gclsrc",
  "gad_source",
  "gad_campaignid",
  "dclid",
  // Microsoft Advertising (Bing Ads)
  "msclkid",
  // OpenAI Ads / ChatGPT Ads — click reference oficial
  "oppref",
  // Meta / Facebook / Instagram
  "fbclid",
  // Outras redes comuns
  "ttclid",
  "twclid",
  "li_fat_id",
  "rdt_cid",
  "epik",
  "ref",
]);

/** Prefixos de query string sempre capturados (UTMs + extensões de plataforma). */
const TRACKING_PARAM_PREFIXES = ["utm_", "gad_", "oai_", "openai_"] as const;

function isTrackingParam(name: string): boolean {
  const lower = name.toLowerCase();
  if (EXACT_TRACKING_PARAMS.has(lower)) return true;
  return TRACKING_PARAM_PREFIXES.some((prefix) => lower.startsWith(prefix));
}

function parseSearch(search?: string): URLSearchParams {
  const raw =
    search !== undefined
      ? search
      : typeof window !== "undefined"
        ? window.location.search
        : "";
  return new URLSearchParams(raw.replace(/^\?/, ""));
}

function readParamsFromSearch(search?: string): Record<string, string> {
  const params = parseSearch(search);
  const out: Record<string, string> = {};
  params.forEach((value, key) => {
    const trimmed = value.trim();
    if (trimmed && isTrackingParam(key)) {
      out[key] = trimmed;
    }
  });
  return out;
}

export function getStoredTrackingParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function storeTrackingParams(params: Record<string, string>) {
  if (typeof window === "undefined" || Object.keys(params).length === 0) return;
  const merged = { ...getStoredTrackingParams(), ...params };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
}

/**
 * Persiste parâmetros de campanha da URL na sessão
 * (Google Ads, Bing/Microsoft Ads, OpenAI Ads / oppref, UTMs, etc.).
 */
export function captureTrackingParams(search?: string) {
  if (typeof window === "undefined") return;
  storeTrackingParams(readParamsFromSearch(search));
}

function normalizePortalBase(baseUrl: string = CADASTRO_BASE): string {
  try {
    const u = new URL(baseUrl);
    if (u.origin !== new URL(CADASTRO_BASE).origin) return CADASTRO_BASE;
    const path = u.pathname.replace(/\/+$/, "") || "";
    return path && path !== "/" ? `${u.origin}${path}` : u.origin;
  } catch {
    return CADASTRO_BASE;
  }
}

/** Monta URL do portal de cadastro com parâmetros de campanha preservados. */
export function buildCadastroUrl(search?: string, baseUrl: string = CADASTRO_BASE): string {
  const portalBase = normalizePortalBase(baseUrl);

  if (typeof window === "undefined") return portalBase;

  captureTrackingParams(search);
  const merged = {
    ...getStoredTrackingParams(),
    ...readParamsFromSearch(search ?? window.location.search),
  };

  const target = new URL(portalBase);
  for (const [key, value] of Object.entries(merged)) {
    if (value) target.searchParams.set(key, value);
  }

  return target.toString();
}

export function isCadastroPortalUrl(href: string): boolean {
  return (
    href === CADASTRO_BASE ||
    href === CADASTRO_URL ||
    href === CADASTRO_CREDENCIAMENTO_URL ||
    href.startsWith(`${CADASTRO_BASE}?`) ||
    href.startsWith(`${CADASTRO_BASE}/`)
  );
}
