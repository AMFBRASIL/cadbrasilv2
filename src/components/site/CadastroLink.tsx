"use client";

import { useRouterState } from "@tanstack/react-router";
import { useLayoutEffect, useState, type ComponentProps, type MouseEvent } from "react";
import {
  buildCadastroUrl,
  CADASTRO_BASE,
  captureTrackingParams,
  isCadastroPortalUrl,
} from "@/lib/cadastroUrl";
import { isModifiedClick } from "@/lib/whatsapp";

function portalBaseFromHref(href?: string): string {
  if (href && isCadastroPortalUrl(href)) {
    return href.split("?")[0]?.replace(/\/+$/, "") || CADASTRO_BASE;
  }
  return CADASTRO_BASE;
}

/** URL do portal com UTMs + Google Ads + Bing Ads + OpenAI Ads (oppref) da sessão. */
export function useCadastroUrl(href?: string): string {
  const search = useRouterState({ select: (s) => s.location.searchStr });
  const portalBase = portalBaseFromHref(href);
  const [url, setUrl] = useState(portalBase);

  useLayoutEffect(() => {
    const qs = search || window.location.search;
    captureTrackingParams(qs || undefined);
    setUrl(buildCadastroUrl(qs || undefined, portalBase));
  }, [search, portalBase]);

  return url;
}

type CadastroLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href?: string;
};

/**
 * Link para cadastro.cadbrasil.com.br preservando tracking de campanha:
 * gclid/gbraid/wbraid (Google), msclkid (Bing), oppref (OpenAI Ads), utm_* e afins.
 * Aceita path customizado (ex.: /credenciamento) via `href`.
 */
export function CadastroLink({ href, onClick, target = "_blank", rel = "noreferrer", ...props }: CadastroLinkProps) {
  const portalBase = portalBaseFromHref(href);
  const cadastroUrl = useCadastroUrl(href);
  const resolvedHref =
    href === undefined || isCadastroPortalUrl(href) ? cadastroUrl : href;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (!event.defaultPrevented && !isModifiedClick(event) && isCadastroPortalUrl(resolvedHref)) {
      event.currentTarget.href = buildCadastroUrl(undefined, portalBase);
    }
  };

  return (
    <a href={resolvedHref} target={target} rel={rel} onClick={handleClick} {...props} />
  );
}
