import { Link } from "@tanstack/react-router";

/** Hub de links internos — cluster “cadastro/cadastrar/credenciar SICAF” */
export const SEO_CADASTRO_HUB = [
  { to: "/cadastro", label: "Cadastro SICAF" },
  { to: "/cadastrar-no-sicaf", label: "Cadastrar no SICAF" },
  { to: "/como-fazer-cadastro-no-sicaf", label: "Como fazer meu SICAF" },
  { to: "/credenciamento", label: "Credenciar minha empresa no SICAF" },
  { to: "/como-cadastrar-empresa-sicaf", label: "SICAF para empresas" },
  { to: "/cadastro-sicaf-passo-a-passo", label: "Cadastro SICAF passo a passo" },
] as const;

type HubProps = {
  className?: string;
  linkClassName?: string;
  title?: string;
  titleClassName?: string;
};

export function SeoCadastroHub({
  className = "space-y-2 text-sm",
  linkClassName = "hover:text-foreground",
  title = "Cadastro SICAF",
  titleClassName = "text-sm font-semibold mb-3",
}: HubProps) {
  return (
    <div>
      <p className={titleClassName}>{title}</p>
      <ul className={className}>
        {SEO_CADASTRO_HUB.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className={linkClassName}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
