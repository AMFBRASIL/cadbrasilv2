import { Link } from "@tanstack/react-router";
import { CadastroLink } from "@/components/site/CadastroLink";
import { SEO_CADASTRO_HUB } from "@/components/site/SeoCadastroHub";

const GUIAS = [
  { to: "/o-que-e-sicaf-e-como-se-cadastrar", label: "O que é SICAF" },
  { to: "/renovar-sicaf", label: "Renovar SICAF" },
  { to: "/quanto-custa-sicaf", label: "Quanto custa o SICAF" },
  { to: "/sicaf-irregular", label: "SICAF irregular" },
  { to: "/cadbrasil", label: "Sobre a CADBRASIL" },
] as const;

export function GovFooter() {
  return (
    <footer className="bg-[#0a4d2c] text-white border-t-4 border-[#FFCD07]">
      <div className="mx-auto max-w-7xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <p className="font-display font-bold text-xl">
            CAD <span className="text-white/50 font-normal">|</span>{" "}
            <span className="text-[#b8e6c8]">BRASIL</span>
          </p>
          <p className="mt-4 text-sm text-white/75 max-w-sm leading-relaxed">
            Especialistas em SICAF, credenciamento de fornecedores e participação em licitações
            públicas em todo o Brasil. Assessoria privada — sem vínculo com órgãos governamentais.
          </p>
          <p className="mt-4 text-xs text-white/55">
            Fonte oficial:{" "}
            <a
              href="https://www.gov.br/compras/pt-br/fornecedor/cadastro"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              Portal de Compras do Governo Federal
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#FFCD07] mb-3">Cadastro SICAF</p>
          <ul className="space-y-2 text-sm text-white/80">
            {SEO_CADASTRO_HUB.slice(0, 4).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#FFCD07] mb-3">Guias</p>
          <ul className="space-y-2 text-sm text-white/80">
            {GUIAS.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/acesso-remoto" className="hover:text-white">
                Acesso remoto
              </Link>
            </li>
            <li>
              <CadastroLink className="hover:text-white">Cadastro online</CadastroLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 px-4 text-center text-xs text-white/60 space-y-1">
        <p>© {new Date().getFullYear()} CADBRASIL · Assessoria SICAF e licitações públicas</p>
        <p className="text-white/50">52.841.613/0001-55 · CADBRASIL PORTAL LICITACOES LTDA</p>
        <p className="text-white/45">
          <a href="/ai.txt" className="hover:text-white underline-offset-2 hover:underline">
            ai.txt
          </a>
          {" · "}
          <a href="/llms.txt" className="hover:text-white underline-offset-2 hover:underline">
            llms.txt
          </a>
        </p>
      </div>
    </footer>
  );
}
