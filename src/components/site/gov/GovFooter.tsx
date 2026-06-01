import { Link } from "@tanstack/react-router";

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
            Especialistas em SICAF, credenciamento no Compras.gov.br e participação em licitações
            públicas em todo o Brasil.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#FFCD07] mb-3">Serviços</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to="/cadastro-sicaf-passo-a-passo" className="hover:text-white">
                Guia cadastro SICAF
              </Link>
            </li>
            <li>
              <a href="https://cadastro.cadbrasil.com.br" className="hover:text-white">
                Cadastro online
              </a>
            </li>
            <li>
              <Link to="/como-regularizar-sicaf-empresa" className="hover:text-white">
                Regularização
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#FFCD07] mb-3">Portal</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link to="/como-funciona" className="hover:text-white">
                Como funciona
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                Perguntas frequentes
              </Link>
            </li>
            <li>
              <a href="https://www.gov.br/compras" target="_blank" rel="noreferrer" className="hover:text-white">
                Compras.gov.br ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} CADBRASIL · Assessoria SICAF e licitações públicas
      </div>
    </footer>
  );
}
