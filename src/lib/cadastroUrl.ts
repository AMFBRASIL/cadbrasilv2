export const CADASTRO_BASE = "https://cadastro.cadbrasil.com.br";

/** URL base sem query — fallback SSR. */
export const CADASTRO_URL = CADASTRO_BASE;

const STORAGE_KEY = "cadbrasil_tracking_params";

/** Parâmetros de campanha repassados ao portal cadastro.cadbrasil.com.br */
const EXACT_TRACKING_PARAMS = new Set([
  "gclid",
  "gbraid",
  "wbraid",
  "gad_source",
  "gad_campaignid",
  "fbclid",
  "msclkid",
  "dclid",
  "ref",
]);

function isTrackingParam(name: string): boolean {
  const lower = name.toLowerCase();
  return lower.startsWith("utm_") || EXACT_TRACKING_PARAMS.has(lower);
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

/** Persiste parâmetros de campanha da URL (Google Ads, UTMs, etc.) na sessão. */
export function captureTrackingParams(search?: string) {
  if (typeof window === "undefined") return;
  storeTrackingParams(readParamsFromSearch(search));
}

/** Monta URL do portal de cadastro com parâmetros de campanha preservados. */
export function buildCadastroUrl(search?: string): string {
  if (typeof window === "undefined") return CADASTRO_BASE;

  captureTrackingParams(search);
  const merged = {
    ...getStoredTrackingParams(),
    ...readParamsFromSearch(search ?? window.location.search),
  };

  const target = new URL(CADASTRO_BASE);
  for (const [key, value] of Object.entries(merged)) {
    if (value) target.searchParams.set(key, value);
  }

  const qs = target.searchParams.toString();
  return qs ? `${CADASTRO_BASE}?${qs}` : CADASTRO_BASE;
}

export function isCadastroPortalUrl(href: string): boolean {
  return (
    href === CADASTRO_BASE ||
    href === CADASTRO_URL ||
    href.startsWith(`${CADASTRO_BASE}?`) ||
    href.startsWith(`${CADASTRO_BASE}/`)
  );
}
