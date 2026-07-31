import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileText,
  RefreshCw,
  Scale,
  Shield,
} from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { CadastroLink } from "@/components/site/CadastroLink";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { SEO_CADASTRO_HUB } from "@/components/site/SeoCadastroHub";
import { homeFaqItems } from "@/data/homeFaq";

const beneficios = [
  "Acesso a oportunidades de compras públicas",
  "Conformidade com exigências legais",
  "Redução de risco de desclassificação",
  "Economia de tempo da sua equipe",
  "Atualização contínua de certidões",
  "Suporte humano especializado",
];

const servicos = [
  {
    icon: Shield,
    title: "Cadastro SICAF",
    text: "Credenciamento completo no Compras.gov.br até o CRC Regular.",
  },
  {
    icon: RefreshCw,
    title: "Renovação SICAF",
    text: "Monitoramento e renovação de certidões antes do vencimento.",
  },
  {
    icon: FileText,
    title: "Gestão documental",
    text: "Checklist, validação e organização dos níveis de habilitação.",
  },
  {
    icon: Scale,
    title: "Suporte em licitações",
    text: "Orientação para participar com SICAF regular e documentação ok.",
  },
];

const conceitos = [
  {
    title: "SICAF",
    subtitle: "Cadastro unificado de fornecedores",
    text: "Banco de dados federal onde sua empresa comprova capacidade jurídica, fiscal, técnica e econômico-financeira para licitar.",
  },
  {
    title: "Compras.gov.br",
    subtitle: "Portal de compras do Governo Federal",
    text: "Ambiente oficial onde ocorre o credenciamento SICAF e a participação em pregões e demais modalidades.",
  },
  {
    title: "PNCP",
    subtitle: "Portal Nacional de Contratações",
    text: "Centraliza publicidade de contratações públicas. Complementa — não substitui — o cadastro SICAF.",
  },
];

const passos = [
  {
    n: "1",
    title: "Cadastre-se",
    text: "Informe o CNPJ e inicie o credenciamento no portal CADBRASIL em poucos minutos.",
  },
  {
    n: "2",
    title: "Envie os documentos",
    text: "Receba o checklist e envie os arquivos. Validamos antes do envio oficial.",
  },
  {
    n: "3",
    title: "Acompanhe o CRC",
    text: "Conduzimos o SICAF até o status Regular — em até 24h com documentação ok.",
  },
];

export function LightHero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#f3faf5] via-white to-white">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(22,136,33,0.18), transparent)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#168821]">
          Assessoria especializada em SICAF
        </p>

        <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight text-[#0a4d2c] text-balance">
          Cadastro e renovação SICAF, sem complicação
        </h1>
        <p className="mt-5 text-base sm:text-lg text-[#0a4d2c]/75 leading-relaxed max-w-2xl mx-auto">
          O SICAF é o cadastro oficial de fornecedores do Governo Federal. A CADBRASIL orienta sua
          empresa no credenciamento, na conferência dos documentos e na manutenção da regularidade
          no Compras.gov.br.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
          <CadastroLink className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#168821] text-white font-semibold hover:bg-[#0a4d2c] transition shadow-sm">
            Novo Cadastro SICAF
            <ArrowRight className="h-4 w-4" />
          </CadastroLink>
          <Link
            to="/renovar-sicaf"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#168821]/30 bg-white text-[#0a4d2c] font-semibold hover:border-[#168821] hover:bg-[#f3faf5] transition"
          >
            Renovação SICAF
          </Link>
        </div>
        <p className="mt-5 text-xs leading-relaxed text-[#0a4d2c]/55">
          Assessoria privada e independente. O cadastro realizado diretamente no SICAF é gratuito.
        </p>
      </div>
    </section>
  );
}

export function LightTrustFacts() {
  return (
    <section
      aria-label="Informações de confiança"
      className="border-y border-[#168821]/10 bg-white"
    >
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-7 sm:grid-cols-3 sm:gap-0">
        <div className="sm:border-r sm:border-[#168821]/10 sm:px-6 sm:first:pl-0">
          <p className="text-sm font-semibold text-[#0a4d2c]">Atendimento nacional</p>
          <p className="mt-1 text-sm text-[#0a4d2c]/65">
            Processo remoto para empresas de todas as UFs.
          </p>
        </div>
        <div className="sm:border-r sm:border-[#168821]/10 sm:px-6">
          <p className="text-sm font-semibold text-[#0a4d2c]">Empresa identificada</p>
          <p className="mt-1 text-sm text-[#0a4d2c]/65">CNPJ 52.841.613/0001-55.</p>
        </div>
        <div className="sm:px-6 sm:last:pr-0">
          <a
            href="https://www.gov.br/compras/pt-br/fornecedor/cadastro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#168821] hover:underline"
          >
            Consultar a fonte oficial
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <p className="mt-1 text-sm text-[#0a4d2c]/65">Portal de Compras do Governo Federal.</p>
        </div>
      </div>
    </section>
  );
}

export function LightPorte() {
  return (
    <section className="py-14 sm:py-16 bg-white border-t border-[#168821]/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0a4d2c] text-balance">
          Cadastro SICAF para qualquer tipo de empresa
        </h2>
        <p className="mt-3 text-center text-[#0a4d2c]/65 max-w-xl mx-auto text-sm sm:text-base">
          MEI, ME, EPP, LTDA, S/A e demais portes — em todo o Brasil.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { t: "Empresas pequenas", d: "MEI, ME e EPP" },
            { t: "Empresas médias", d: "LTDA e estrutura em crescimento" },
            { t: "Empresas grandes", d: "S/A e grupos empresariais" },
            { t: "Todo o Brasil", d: "Atendimento 100% remoto" },
          ].map((item) => (
            <div
              key={item.t}
              className="text-center px-4 py-6 rounded-2xl bg-[#f3faf5]/80 border border-[#168821]/10"
            >
              <Building2 className="h-6 w-6 text-[#168821] mx-auto" />
              <p className="mt-3 font-semibold text-[#0a4d2c]">{item.t}</p>
              <p className="mt-1 text-sm text-[#0a4d2c]/60">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LightBeneficios() {
  return (
    <section className="py-14 sm:py-16 bg-[#f3faf5]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0a4d2c]">
          Por que escolher a CADBRASIL
        </h2>
        <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {beneficios.map((b) => (
            <li key={b} className="flex gap-3 items-start text-sm sm:text-base text-[#0a4d2c]/85">
              <CheckCircle2 className="h-5 w-5 text-[#168821] shrink-0 mt-0.5" />
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <CadastroLink className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#168821] text-white font-semibold hover:bg-[#0a4d2c] transition">
            Fazer meu cadastro
            <ArrowRight className="h-4 w-4" />
          </CadastroLink>
        </div>
      </div>
    </section>
  );
}

export function LightServicos() {
  return (
    <section className="py-14 sm:py-16 bg-white border-y border-[#168821]/10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0a4d2c]">
          Nossos serviços
        </h2>
        <p className="mt-3 text-center text-[#0a4d2c]/65 text-sm sm:text-base">
          Credenciamento SICAF 100% digital, com acompanhamento humano.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((s) => (
            <div key={s.title} className="text-center sm:text-left">
              <s.icon className="h-7 w-7 text-[#168821] mx-auto sm:mx-0" />
              <h3 className="mt-3 font-semibold text-[#0a4d2c]">{s.title}</h3>
              <p className="mt-2 text-sm text-[#0a4d2c]/65 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LightConceitos() {
  return (
    <section className="py-14 sm:py-16 bg-[#f3faf5]">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0a4d2c] text-balance">
          Seja um fornecedor qualificado no Compras.gov.br
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {conceitos.map((c) => (
            <div key={c.title}>
              <h3 className="text-lg font-bold text-[#168821]">{c.title}</h3>
              <p className="mt-1 text-sm font-semibold text-[#0a4d2c]">{c.subtitle}</p>
              <p className="mt-3 text-sm text-[#0a4d2c]/70 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link to="/compras-gov-br" className="text-[#168821] font-medium hover:underline">
            Tutorial Compras.gov.br
          </Link>
          <span className="text-[#0a4d2c]/30">·</span>
          <Link
            to="/o-que-e-sicaf-e-como-se-cadastrar"
            className="text-[#168821] font-medium hover:underline"
          >
            O que é SICAF
          </Link>
          <span className="text-[#0a4d2c]/30">·</span>
          <Link to="/proposta" className="text-[#168821] font-medium hover:underline">
            Montar proposta
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LightPassos() {
  return (
    <section className="py-14 sm:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#0a4d2c]">Como funciona</h2>
        <p className="mt-3 text-center text-[#0a4d2c]/65 text-sm sm:text-base">
          Três etapas simples até o SICAF regular.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {passos.map((p) => (
            <div key={p.n} className="text-center">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#168821] text-white font-bold">
                {p.n}
              </span>
              <h3 className="mt-4 font-semibold text-[#0a4d2c] text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-[#0a4d2c]/65 leading-relaxed max-w-xs mx-auto">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LightCta() {
  return (
    <section className="py-16 sm:py-20 bg-[#0a4d2c] text-white">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-balance">Pronto para iniciar?</h2>
        <p className="mt-3 text-white/75 text-sm sm:text-base">
          Crie sua conta e comece o Cadastro SICAF com a CADBRASIL.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <CadastroLink className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#FFCD07] text-[#0a4d2c] font-bold hover:bg-[#ffe566] transition">
            Criar conta / Cadastrar
            <ArrowRight className="h-4 w-4" />
          </CadastroLink>
          <WhatsAppLink
            intent="Quero iniciar meu Cadastro SICAF pela home."
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition"
          >
            Falar conosco
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

export function LightFaqSlim() {
  return (
    <section id="faq" className="py-14 sm:py-16 bg-white border-t border-[#168821]/10">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-center text-2xl font-bold text-[#0a4d2c]">Perguntas frequentes</h2>
        <div className="mt-8 space-y-3">
          {homeFaqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-[#168821]/15 bg-[#f3faf5]/50"
            >
              <summary className="cursor-pointer list-none p-4 font-semibold text-[#0a4d2c] flex justify-between gap-3">
                {item.q}
                <span className="text-[#168821] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="px-4 pb-4 text-sm text-[#0a4d2c]/70 leading-relaxed border-t border-[#168821]/10 pt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-center text-sm">
          <Link to="/faq" className="text-[#168821] font-medium hover:underline">
            Ver todas as dúvidas
          </Link>
        </p>
      </div>
    </section>
  );
}

export function LightFooter() {
  return (
    <footer className="bg-white border-t border-[#168821]/15">
      <div className="mx-auto max-w-6xl px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <BrandLogo asLink />
          <p className="mt-4 text-sm text-[#0a4d2c]/65 max-w-sm leading-relaxed">
            Assessoria em SICAF e licitações públicas. Atendimento privado — sem vínculo com órgãos
            governamentais.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0a4d2c] mb-3">Cadastro SICAF</p>
          <ul className="space-y-2 text-sm text-[#0a4d2c]/70">
            {SEO_CADASTRO_HUB.slice(0, 4).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-[#168821]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0a4d2c] mb-3">Empresa</p>
          <ul className="space-y-2 text-sm text-[#0a4d2c]/70">
            <li>
              <Link to="/cadbrasil" className="hover:text-[#168821]">
                Sobre a CADBRASIL
              </Link>
            </li>
            <li>
              <Link to="/proposta" className="hover:text-[#168821]">
                Proposta
              </Link>
            </li>
            <li>
              <Link to="/planos" className="hover:text-[#168821]">
                Planos
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[#168821]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#168821]/10 py-4 px-4 text-center text-xs text-[#0a4d2c]/50 space-y-1">
        <p>© {new Date().getFullYear()} CADBRASIL · Assessoria SICAF e licitações</p>
        <p>52.841.613/0001-55 · CADBRASIL PORTAL LICITACOES LTDA</p>
      </div>
    </footer>
  );
}
