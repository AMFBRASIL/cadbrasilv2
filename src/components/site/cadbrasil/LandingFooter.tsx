import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/site/BrandLogo";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import {
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_TAX_ID,
  COMPRAS_GOV_OFFICIAL_URL,
} from "@/data/cadbrasilPage";

const defaultOfficialNote: ReactNode = (
  <>
    Os procedimentos oficiais de SICAF e Compras.gov.br são realizados diretamente no portal do Governo
    Federal:{" "}
    <a
      href={COMPRAS_GOV_OFFICIAL_URL}
      target="_blank"
      rel="noreferrer noopener"
      className="font-medium text-brand hover:underline"
    >
      gov.br/compras
    </a>
    .
  </>
);

export function LandingFooter({
  pageLabel = "CADBrasil — Tecnologia e assessoria em licitações",
  officialTitle = "Plataformas oficiais",
  officialNote = defaultOfficialNote,
  relatedLinks,
}: {
  pageLabel?: string;
  officialTitle?: string;
  officialNote?: ReactNode;
  relatedLinks?: { to: string; label: string }[];
}) {
  return (
    <footer className="border-t border-border bg-card/50">
      <div
        className={`mx-auto grid max-w-7xl gap-10 px-4 py-14 ${
          relatedLinks?.length ? "md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]" : "md:grid-cols-[1.4fr_1fr_1fr]"
        }`}
      >
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Empresa privada de tecnologia, conteúdo e assessoria para fornecedores que participam de
            licitações públicas.
          </p>
        </div>
        {relatedLinks && relatedLinks.length > 0 && (
          <div>
            <div className="mb-3 text-sm font-semibold">Conteúdos</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {relatedLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <div className="mb-3 text-sm font-semibold">Contato</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <WhatsAppLink
                intent="Quero falar com um especialista (rodapé)."
                pageLabel={pageLabel}
                className="hover:text-foreground"
              >
                WhatsApp (11) 2122-0202
              </WhatsAppLink>
            </li>
            <li>
              <a href={`mailto:${COMPANY_EMAIL}`} className="break-all hover:text-foreground">
                {COMPANY_EMAIL}
              </a>
            </li>
            <li>Seg–Sex · 8h às 18h · atendimento remoto</li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold">{officialTitle}</div>
          <p className="text-sm leading-relaxed text-muted-foreground">{officialNote}</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl space-y-2 px-4 py-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            © {new Date().getFullYear()} CADBrasil · {COMPANY_LEGAL_NAME} · CNPJ {COMPANY_TAX_ID}
          </p>
          <p>
            A CADBrasil é uma empresa privada e independente, sem vínculo ou afiliação com órgãos
            governamentais ou plataformas de licitação. Não comercializamos acesso a plataformas oficiais;
            nossos valores correspondem exclusivamente aos serviços privados de tecnologia, assessoria, suporte
            e conteúdo.
          </p>
        </div>
      </div>
    </footer>
  );
}
