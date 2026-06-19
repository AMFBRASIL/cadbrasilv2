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

/** URL do portal de cadastro com UTMs e parâmetros Google Ads da sessão. */
export function useCadastroUrl(): string {
  const search = useRouterState({ select: (s) => s.location.searchStr });
  const [url, setUrl] = useState(CADASTRO_BASE);

  useLayoutEffect(() => {
    const qs = search || window.location.search;
    captureTrackingParams(qs || undefined);
    setUrl(buildCadastroUrl(qs || undefined));
  }, [search]);

  return url;
}

type CadastroLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href?: string;
};

/**
 * Link para cadastro.cadbrasil.com.br preservando gclid, utm_* e demais parâmetros de campanha.
 */
export function CadastroLink({ href, onClick, target = "_blank", rel = "noreferrer", ...props }: CadastroLinkProps) {
  const cadastroUrl = useCadastroUrl();
  const resolvedHref =
    href === undefined || isCadastroPortalUrl(href) ? cadastroUrl : href;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (!event.defaultPrevented && !isModifiedClick(event) && isCadastroPortalUrl(resolvedHref)) {
      event.currentTarget.href = buildCadastroUrl();
    }
  };

  return (
    <a href={resolvedHref} target={target} rel={rel} onClick={handleClick} {...props} />
  );
}
