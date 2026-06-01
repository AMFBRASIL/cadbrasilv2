import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle, FileCheck2, Bot, ShieldCheck, ArrowRight, Clock, Headphones, Sparkles,
} from "lucide-react";
import { PageShell, PageHero, InlineCta, CADASTRO_URL, breadcrumbJsonLd } from "@/components/site/PageShell";
import { robotsMetaTags } from "@/lib/seo";

const ORIGIN = "https://cadbrasil.com.br";

const steps = [
  {
    n: "01",
    i: MessageCircle,
    t: "Contato inicial",
    d: "Fale com a CADBRASIL via WhatsApp, formulário no site ou pelo Assistente CADBRASIL. Em minutos um especialista atende e entende seu cenário.",
    time: "5 minutos",
  },
  {
    n: "02",
    i: FileCheck2,
    t: "Checklist personalizada",
    d: "Enviamos uma lista clara e objetiva dos documentos necessários para o porte e atividade da sua empresa. Nada de pedido genérico.",
    time: "Mesmo dia",
  },
  {
    n: "03",
    i: Bot,
    t: "Análise por IA + revisão humana",
    d: "Nossa tecnologia valida cada documento, identifica certidões vencidas e pendências fiscais. Em seguida, um especialista revisa caso a caso.",
    time: "2 a 6 horas",
  },
  {
    n: "04",
    i: ShieldCheck,
    t: "Cadastro e habilitação",
    d: "Realizamos o cadastro no SICAF, ativamos os níveis necessários, emitimos o CRC e entregamos tudo no seu painel CADBRASIL.",
    time: "Até 24h",
  },
  {
    n: "05",
    i: Headphones,
    t: "Suporte contínuo",
    d: "Monitoramos automaticamente vencimentos de certidões. Antes de qualquer prazo, renovamos. Suporte humano por WhatsApp e AnyDesk.",
    time: "Permanente",
  },
];

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      ...robotsMetaTags(),
      { title: "Como Funciona o Processo SICAF com a CADBRASIL — Passo a Passo" },
      { name: "description", content: "Veja como funciona o processo CADBRASIL para Cadastro, Regularização e Atualização SICAF: 5 passos simples, com IA, especialistas e suporte contínuo. Pronto em até 24h." },
      { name: "keywords", content: "como fazer sicaf, processo sicaf, passo a passo sicaf, consultoria sicaf, regularizar sicaf rapido, cadastro sicaf compras.gov.br" },
      { property: "og:title", content: "Como Funciona o SICAF com a CADBRASIL" },
      { property: "og:description", content: "Processo simples em 5 passos. IA + especialistas. SICAF pronto em até 24h." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${ORIGIN}/como-funciona` },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/como-funciona` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como cadastrar e regularizar o SICAF com a CADBRASIL",
          description: "Processo em 5 passos para ter o SICAF ativo e regular em até 24 horas.",
          totalTime: "PT24H",
          step: steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.t,
            text: s.d,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([
          { name: "Início", url: `${ORIGIN}/` },
          { name: "Como funciona", url: `${ORIGIN}/como-funciona` },
        ])),
      },
    ],
  }),
  component: ComoFunciona,
});

function ComoFunciona() {
  return (
    <PageShell breadcrumbs={[{ label: "Como funciona" }]}>
      <PageHero
        eyebrow="Processo CADBRASIL"
        title="Como funciona,"
        highlight="do início ao fim."
        description="Um processo desenhado para quem não tem tempo a perder. Você nos passa as informações, nós cuidamos do resto. Em 24h sua empresa está pronta para licitar."
        primaryCta={{ label: "Começar Agora", href: CADASTRO_URL, external: true }}
        secondaryCta={{ label: "Tirar Dúvidas", href: "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.", external: true }}
      />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative">
            <div className="absolute left-7 sm:left-9 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-border to-transparent" aria-hidden />
            {steps.map((s) => (
              <div key={s.n} className="relative flex gap-5 sm:gap-8 pb-10">
                <div className="relative shrink-0">
                  <div className="h-14 w-14 sm:h-[72px] sm:w-[72px] rounded-2xl bg-gradient-brand text-brand-foreground grid place-items-center shadow-glow">
                    <s.i className="h-6 w-6" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-background border border-border rounded-full px-2 py-0.5 text-[10px] font-bold text-brand">
                    {s.n}
                  </div>
                </div>
                <div className="flex-1 rounded-2xl bg-card border border-border p-6 shadow-card">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display font-semibold text-xl">{s.t}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand bg-brand/10 px-2.5 py-1 rounded-full">
                      <Clock className="h-3 w-3" /> {s.time}
                    </span>
                  </div>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
            <Sparkles className="h-3.5 w-3.5" /> O diferencial CADBRASIL
          </span>
          <h2 className="mt-6 text-3xl sm:text-5xl font-bold leading-tight text-balance">
            Por que somos diferentes do despachante tradicional.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-5 text-left">
            {[
              { t: "Tecnologia primeiro", d: "IA valida cada documento. Erros são identificados antes mesmo de chegar no portal." },
              { t: "Especialistas reais", d: "Equipe formada em direito administrativo e licitações. Não somos generalistas." },
              { t: "Transparência total", d: "Você acompanha tudo em tempo real pelo painel CADBRASIL. Sem caixa preta." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                <h3 className="font-display font-semibold text-lg">{b.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            E depois do cadastro?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O SICAF não é "cadastrou e esqueceu". Cada certidão tem prazo de validade — e se uma vence, sua empresa <strong className="text-foreground">cai automaticamente da licitação</strong>. Por isso, depois do cadastro, ativamos a gestão contínua:
          </p>
          <ul className="mt-7 space-y-3 text-foreground">
            {[
              { t: "Monitoramento 24/7", d: "Acompanhamos o vencimento de cada certidão automaticamente." },
              { t: "Renovação proativa", d: "Iniciamos a renovação antes de vencer — você nem percebe." },
              { t: "Alertas inteligentes", d: "Avisos por WhatsApp e e-mail sobre qualquer mudança no seu cadastro." },
              { t: "Painel CADBRASIL", d: "Acesso permanente à situação do seu SICAF, em qualquer dispositivo." },
            ].map((it) => (
              <li key={it.t} className="flex gap-3">
                <ArrowRight className="h-5 w-5 text-brand shrink-0 mt-1" />
                <div>
                  <strong>{it.t}.</strong>{" "}
                  <span className="text-muted-foreground">{it.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <InlineCta />
    </PageShell>
  );
}
