import { landingPages } from "@/data/sicafLandingPages";

export const WHATSAPP_NUMBER = "551121220202";

const UTM_TERM_KEY = "cadbrasil_utm_term";
const UTM_SOURCE_KEY = "cadbrasil_utm_source";
const UTM_CAMPAIGN_KEY = "cadbrasil_utm_campaign";

/** Rótulos amigáveis por rota (SEO / atendimento). */
const PATH_LABELS: Record<string, string> = {
  "/": "Home — SICAF",
  "/layout-classico": "Home (layout clássico)",
  "/como-funciona": "Como funciona",
  "/o-que-e-sicaf": "O que é SICAF",
  "/assistente": "Assistente CADBRASIL",
  "/beneficios": "Benefícios CADBRASIL",
  "/faq": "FAQ — central de dúvidas",
  "/cadastro-sicaf-passo-a-passo": "Guia cadastro SICAF passo a passo",
  "/como-participar-de-licitacao": "Como participar de licitação",
  "/cadastro-fornecedor-governo": "Cadastro fornecedor governo",
  "/pregao-eletronico": "Pregão eletrônico",
  "/documentacao-licitacao": "Documentação para licitação",
};

export type WhatsAppMessageOptions = {
  /** Caminho atual (ex.: `/cadastro-sicaf`). */
  pathname?: string;
  /** Sobrescreve o nome da página. */
  pageLabel?: string;
  /** O que o visitante quer (1 frase). */
  intent?: string;
  /** Linhas extras (dados do formulário, score, checklist…). */
  detail?: string;
  /** utm_term explícito; se omitido, usa sessionStorage no cliente. */
  utmTerm?: string | null;
  utmSource?: string | null;
  utmCampaign?: string | null;
};

export function getPageLabel(pathname: string): string {
  const normalized = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  const landing = landingPages[normalized];
  if (landing) return landing.shortTitle;
  if (PATH_LABELS[normalized]) return PATH_LABELS[normalized];
  if (normalized.startsWith("/faq/")) {
    return `FAQ — ${normalized.replace("/faq/", "").replace(/-/g, " ")}`;
  }
  return normalized === "/" ? "Home" : normalized.slice(1).replace(/-/g, " ");
}

function parseSearchParams(search: string): URLSearchParams {
  const normalized = search.trim().replace(/^\?/, "");
  return new URLSearchParams(normalized);
}

/** Lê UTMs da URL atual (síncrono — use no clique do WhatsApp). */
export function readUtmFromUrl(search?: string): {
  term: string | null;
  source: string | null;
  campaign: string | null;
} {
  if (typeof window === "undefined") {
    return { term: null, source: null, campaign: null };
  }

  let params: URLSearchParams;
  if (search !== undefined && search.length > 0) {
    params = parseSearchParams(search);
  } else {
    params = new URL(window.location.href).searchParams;
  }

  return {
    term: params.get("utm_term")?.trim() || null,
    source: params.get("utm_source")?.trim() || null,
    campaign: params.get("utm_campaign")?.trim() || null,
  };
}

/** Grava UTMs da URL na sessão (para navegação SPA sem query na barra). */
export function captureUtmParams(search?: string) {
  if (typeof window === "undefined") return;
  const { term, source, campaign } = readUtmFromUrl(search);
  if (term) sessionStorage.setItem(UTM_TERM_KEY, term);
  if (source) sessionStorage.setItem(UTM_SOURCE_KEY, source);
  if (campaign) sessionStorage.setItem(UTM_CAMPAIGN_KEY, campaign);
}

export function getStoredUtmTerm(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(UTM_TERM_KEY);
}

export function getStoredUtmSource(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(UTM_SOURCE_KEY);
}

export function getStoredUtmCampaign(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(UTM_CAMPAIGN_KEY);
}

/** Intenção padrão conforme a página. */
export function getDefaultIntent(pathname: string): string {
  const p = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  if (p === "/") return "Quero credenciar ou regularizar minha empresa no SICAF para licitar.";
  if (p.includes("licitacao") || p.includes("pregao") || p.includes("documentacao"))
    return "Preciso de orientação para participar de licitações com SICAF regular.";
  if (p.includes("cadastro") || p.includes("credenciamento") || p.includes("crc"))
    return "Quero fazer ou concluir meu cadastro SICAF com apoio especializado.";
  if (p.includes("regulariz") || p.includes("inapta") || p.includes("renovacao"))
    return "Preciso regularizar ou renovar meu SICAF e certidões.";
  if (p.includes("assistente")) return "Quero saber mais sobre o Assistente CADBRASIL e monitoramento.";
  if (p.includes("faq")) return "Tenho dúvidas sobre SICAF, documentos ou licitações.";
  if (p.includes("passo-a-passo") || p.includes("guia"))
    return "Estou seguindo o guia de cadastro e preciso de ajuda em alguma etapa.";
  return "Gostaria de falar com um especialista em SICAF e licitações públicas.";
}

export function buildWhatsAppMessage(options: WhatsAppMessageOptions = {}): string {
  if (typeof window !== "undefined") {
    captureUtmParams();
  }

  const pathname = options.pathname ?? (typeof window !== "undefined" ? window.location.pathname : "/");
  const pageLabel = options.pageLabel ?? getPageLabel(pathname);
  const fromUrl = readUtmFromUrl();

  const utmTerm =
    options.utmTerm !== undefined && options.utmTerm !== null
      ? options.utmTerm
      : fromUrl.term ?? getStoredUtmTerm();
  const utmSource =
    options.utmSource !== undefined && options.utmSource !== null
      ? options.utmSource
      : fromUrl.source ?? getStoredUtmSource();
  const utmCampaign =
    options.utmCampaign !== undefined && options.utmCampaign !== null
      ? options.utmCampaign
      : fromUrl.campaign ?? getStoredUtmCampaign();

  const intent = options.intent ?? getDefaultIntent(pathname);

  // Sem emojis: quebram em wa.me/?text= em alguns dispositivos/navegadores.
  const lines = [
    "Olá! Vim pelo site CADBRASIL (cadbrasil.com.br).",
    "",
    `Página: ${pageLabel}`,
    utmTerm
      ? `Palavra-chave (utm_term): ${utmTerm}`
      : "Palavra-chave: não informada na URL (acesso direto ou orgânico)",
  ];

  if (utmSource) lines.push(`Origem (utm_source): ${utmSource}`);
  if (utmCampaign) lines.push(`Campanha (utm_campaign): ${utmCampaign}`);

  lines.push("", `Assunto: ${intent}`);

  if (options.detail?.trim()) {
    lines.push("", "Detalhes:", options.detail.trim());
  }

  lines.push("", "Aguardo retorno. Obrigado!");

  return lines.join("\n");
}

export function buildWhatsAppUrl(options: WhatsAppMessageOptions = {}): string {
  const text = buildWhatsAppMessage(options);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Abre WhatsApp com mensagem montada no instante do clique (garante UTMs da URL). */
export function openWhatsApp(options: WhatsAppMessageOptions = {}) {
  if (typeof window === "undefined") return;
  captureUtmParams();
  const pathname = options.pathname ?? window.location.pathname;
  const url = buildWhatsAppUrl({ ...options, pathname });
  window.open(url, "_blank", "noopener,noreferrer");
}

export function isModifiedClick(event: { metaKey: boolean; ctrlKey: boolean; shiftKey: boolean; altKey: boolean; button: number }) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

/** URL estática para SSR (sem utm da sessão). */
export function buildWhatsAppUrlForPath(pathname: string, intent?: string): string {
  return buildWhatsAppUrl({ pathname, intent, utmTerm: null, utmSource: null, utmCampaign: null });
}
