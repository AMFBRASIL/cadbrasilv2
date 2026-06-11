import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2, FileText, Building2, Scale, ShieldCheck, AlertTriangle,
  Award, ArrowRight, Gavel, Landmark,
} from "lucide-react";
import { PageShell, PageHero, InlineCta, CADASTRO_URL, breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { robotsMetaTags } from "@/lib/seo";

const ORIGIN = "https://cadbrasil.com.br";

const miniFaq = [
  { question: "SICAF é obrigatório?", answer: "Sim. Sem cadastro ativo no SICAF a empresa não pode participar de licitações públicas federais e de boa parte dos pregões estaduais e municipais." },
  { question: "Quais empresas podem se cadastrar no SICAF?", answer: "Qualquer pessoa jurídica regularmente constituída no Brasil — MEI, ME, EPP, LTDA, S/A, EIRELI — desde que possua CNPJ ativo e regularidade fiscal." },
  { question: "O SICAF tem custo para o fornecedor?", answer: "O cadastro no SICAF junto ao governo é gratuito. O que tem custo é a estrutura, o tempo e o conhecimento técnico para mantê-lo regular — é aí que entra a CADBRASIL." },
  { question: "Quanto tempo leva para fazer o SICAF?", answer: "Com a CADBRASIL, em até 24 horas com a documentação em mãos. Sem apoio especializado, pode levar semanas devido a pendências fiscais e níveis de habilitação." },
];

export const Route = createFileRoute("/o-que-e-sicaf")({
  head: () => ({
    meta: [
      ...robotsMetaTags(),
      { title: "O que é SICAF? Guia Completo do Cadastro de Fornecedores" },
      { name: "description", content: "Entenda o que é o SICAF, como funciona, níveis de habilitação e por que ele é obrigatório para vender ao governo. Saiba como regularizar com a CADBRASIL." },
      { name: "keywords", content: "o que é sicaf, sistema cadastramento unificado fornecedores, sicaf compras gov br, cadastro sicaf, níveis sicaf, habilitação licitação, fornecedor governo federal" },
      { property: "og:title", content: "O que é SICAF? Guia Completo — CADBRASIL" },
      { property: "og:description", content: "Tudo sobre o SICAF: definição, níveis, obrigatoriedade, processo e como regularizar com a CADBRASIL em até 24h." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${ORIGIN}/o-que-e-sicaf` },
      { property: "article:section", content: "Guias SICAF" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/o-que-e-sicaf` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "O que é SICAF? Guia Completo do Cadastro de Fornecedores",
          description: "Guia definitivo sobre o Sistema de Cadastramento Unificado de Fornecedores (SICAF).",
          author: { "@type": "Organization", name: "CADBRASIL" },
          publisher: { "@type": "Organization", name: "CADBRASIL" },
          mainEntityOfPage: `${ORIGIN}/o-que-e-sicaf`,
          inLanguage: "pt-BR",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([
          { name: "Início", url: `${ORIGIN}/` },
          { name: "O que é SICAF", url: `${ORIGIN}/o-que-e-sicaf` },
        ])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd(miniFaq, `${ORIGIN}/o-que-e-sicaf`)),
      },
    ],
  }),
  component: OQueESicaf,
});

const niveis = [
  { n: "I", t: "Credenciamento", d: "Dados básicos da empresa, sócios e contatos. Porta de entrada obrigatória do SICAF." },
  { n: "II", t: "Habilitação Jurídica", d: "Contrato social, atos constitutivos, procurações e documentos societários atualizados." },
  { n: "III", t: "Regularidade Fiscal e Trabalhista", d: "CND Federal, FGTS, CND Estadual, CND Municipal e CNDT — o nível mais comum de pendência." },
  { n: "IV", t: "Qualificação Técnica", d: "Atestados de capacidade técnica que comprovam experiência em objetos similares ao licitado." },
  { n: "V", t: "Qualificação Econômico-Financeira", d: "Balanço patrimonial, índices contábeis e demonstrações financeiras do último exercício." },
  { n: "VI", t: "Linhas de Fornecimento", d: "Catálogo CATMAT/CATSER dos produtos e serviços que sua empresa pode fornecer." },
];

function OQueESicaf() {
  return (
    <PageShell breadcrumbs={[{ label: "O que é SICAF" }]}>
      <PageHero
        eyebrow="Guia Completo SICAF"
        title="O que é"
        highlight="SICAF?"
        description="O Sistema de Cadastramento Unificado de Fornecedores é o registro nacional obrigatório que habilita sua empresa a vender para órgãos públicos federais, estaduais e municipais."
        primaryCta={{ label: "Fazer Cadastro SICAF Agora", href: CADASTRO_URL, external: true }}
        secondaryCta={{
          label: "Falar com Especialista",
          whatsapp: true,
          intent: "Quero entender melhor o que é o SICAF e como me cadastrar.",
        }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 prose prose-lg prose-neutral">
        <h2 className="text-3xl font-bold mb-4">Definição oficial</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          O <strong className="text-foreground">SICAF (Sistema de Cadastramento Unificado de Fornecedores)</strong> é mantido pelo Ministério da Gestão e da Inovação em Serviços Públicos e integra o portal <a href="https://www.gov.br/compras" target="_blank" rel="noreferrer" className="text-brand underline underline-offset-4">Compras.gov.br</a>. É o cadastro central usado por todos os órgãos do Governo Federal — e adotado por milhares de prefeituras, governos estaduais, autarquias e fundações.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          Sem SICAF ativo e regular, sua empresa <strong className="text-foreground">não consegue assinar contratos públicos</strong>, mesmo que vença a licitação. Por isso ele é o primeiro passo de qualquer estratégia de venda ao governo.
        </p>
        <div className="mt-8 rounded-2xl border border-brand/30 bg-brand/5 p-6 not-prose">
          <p className="font-semibold text-foreground">Quer o passo a passo prático?</p>
          <p className="mt-2 text-muted-foreground text-base">
            Veja nosso tutorial completo com documentos, prazos, níveis I a VI e FAQ —{" "}
            <Link to="/cadastro-sicaf-passo-a-passo" className="text-brand font-medium underline underline-offset-4">
              Cadastro SICAF passo a passo 2026
            </Link>
            .
          </p>
        </div>
      </article>

      <section className="py-16 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-balance">
              Os 6 níveis do SICAF.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              O cadastro é dividido em níveis. Cada órgão exige um conjunto diferente — a CADBRASIL garante que todos estejam sempre ativos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {niveis.map((n) => (
              <div key={n.n} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-brand text-brand-foreground grid place-items-center font-display font-bold">
                    {n.n}
                  </div>
                  <h3 className="font-display font-semibold text-lg">{n.t}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-balance">
              Quem precisa do SICAF?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Qualquer empresa que queira <strong className="text-foreground">vender produtos ou serviços para órgãos públicos</strong> — federais, estaduais ou municipais — precisa estar cadastrada e regular no SICAF.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "MEI e Microempresas que vendem para prefeituras",
                "Empresas de médio porte fornecendo para autarquias",
                "Indústrias e fabricantes em pregões federais",
                "Prestadores de serviço para o Governo Federal",
                "Cooperativas e associações que participam de licitações",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { i: Landmark, t: "Governo Federal", v: "Ministérios, INSS, Receita, IBAMA" },
              { i: Building2, t: "Estados", v: "Secretarias e autarquias estaduais" },
              { i: Gavel, t: "Municípios", v: "Prefeituras e órgãos municipais" },
              { i: Scale, t: "Judiciário", v: "Tribunais e Ministério Público" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-card border border-border p-5 shadow-card">
                <c.i className="h-5 w-5 text-brand" />
                <div className="mt-3 font-display font-semibold">{c.t}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            Documentos necessários
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Contrato Social ou Estatuto consolidado",
              "Cartão CNPJ atualizado",
              "RG e CPF dos sócios",
              "Comprovante de endereço da empresa",
              "Certidão Negativa Federal (CND)",
              "Certificado de Regularidade do FGTS",
              "CND Estadual e Municipal",
              "Certidão Negativa de Débitos Trabalhistas (CNDT)",
              "Balanço Patrimonial (para níveis V e VI)",
              "Atestados de Capacidade Técnica (se aplicável)",
            ].map((d) => (
              <div key={d} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
                <FileText className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span className="text-sm">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-3 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm">
              <strong>Não se preocupe se faltar algo.</strong> A CADBRASIL envia uma checklist personalizada para sua empresa e cuida de obter o que estiver pendente.
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Perguntas rápidas sobre o SICAF.
          </h2>
          <div className="space-y-4">
            {miniFaq.map((q) => (
              <details key={q.question} className="group rounded-2xl bg-card border border-border p-5">
                <summary className="cursor-pointer font-display font-semibold text-lg flex items-center justify-between gap-3 list-none">
                  {q.question}
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-open:rotate-90 transition" />
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{q.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/faq" className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
              Ver todas as perguntas frequentes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <InlineCta
        title="Faça seu cadastro SICAF agora."
        subtitle="Plataforma oficial CADBRASIL. Comece em 2 minutos e tenha sua empresa habilitada em até 24h."
      />
    </PageShell>
  );
}
