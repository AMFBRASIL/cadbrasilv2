import { createFileRoute } from "@tanstack/react-router";
import {
  Gauge, ShieldCheck, Bot, RefreshCw, FolderSync, Headphones,
  TrendingUp, Award, Users, Clock,
} from "lucide-react";
import { PageShell, PageHero, InlineCta, CADASTRO_URL, breadcrumbJsonLd } from "@/components/site/PageShell";
import { robotsMetaTags } from "@/lib/seo";

const ORIGIN = "https://cadbrasil.com.br";

export const Route = createFileRoute("/beneficios")({
  head: () => ({
    meta: [
      ...robotsMetaTags(),
      { title: "Benefícios CADBRASIL — Por Que Empresas Escolhem Nosso SICAF" },
      { name: "description", content: "Velocidade, segurança jurídica, tecnologia com IA, suporte humano especializado e gestão contínua de certidões. Veja por que +8.000 fornecedores confiam na CADBRASIL." },
      { name: "keywords", content: "beneficios sicaf, vantagens cadbrasil, melhor consultoria sicaf, suporte sicaf, gestao certidoes, regularidade fiscal automatica" },
      { property: "og:title", content: "Benefícios CADBRASIL · SICAF sem dor de cabeça" },
      { property: "og:description", content: "Por que +8.000 fornecedores escolheram a CADBRASIL para cuidar do SICAF." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${ORIGIN}/beneficios` },
    ],
    links: [{ rel: "canonical", href: `${ORIGIN}/beneficios` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbJsonLd([
          { name: "Início", url: `${ORIGIN}/` },
          { name: "Benefícios", url: `${ORIGIN}/beneficios` },
        ])),
      },
    ],
  }),
  component: Beneficios,
});

const grandes = [
  { i: Gauge, t: "Velocidade absurda", d: "SICAF regularizado em até 24 horas. Não dias, não semanas — horas. Nossa estrutura está calibrada para resposta imediata." },
  { i: ShieldCheck, t: "Segurança jurídica", d: "Equipe formada em direito administrativo e licitações. Cada documento é validado por quem entende da Lei 14.133/2021 e da IN 03/2018." },
  { i: Bot, t: "IA + humanos no controle", d: "Tecnologia que valida em segundos, especialista que decide com critério. Sem robotização cega, sem despachante manual." },
];

const todos = [
  { i: RefreshCw, t: "Atualização automática", d: "Monitoramento 24/7 das suas certidões. Renovação iniciada antes do vencimento." },
  { i: FolderSync, t: "Gestão documental completa", d: "Todo seu acervo organizado, indexado e acessível em qualquer dispositivo." },
  { i: Headphones, t: "Suporte humano real", d: "WhatsApp, telefone, AnyDesk e e-mail. Sem chatbot eterno, sem URA infinita." },
  { i: TrendingUp, t: "Histórico e indicadores", d: "Painel mostra desempenho do seu SICAF ao longo do tempo e oportunidades." },
  { i: Award, t: "Especialização real", d: "+15 anos exclusivamente em licitações públicas. Não somos contabilidade que faz SICAF." },
  { i: Users, t: "Atendimento dedicado", d: "Você tem um time atribuído ao seu CNPJ. Sem cair em fila genérica." },
];

const comparison = [
  { f: "Tempo médio de regularização", CADBRASIL: "Até 24h", outros: "1 a 4 semanas" },
  { f: "Monitoramento de certidões", CADBRASIL: "Automático 24/7", outros: "Manual ou inexistente" },
  { f: "Análise por IA", CADBRASIL: "Sim, integrada", outros: "Não" },
  { f: "Suporte via AnyDesk", CADBRASIL: "Incluso", outros: "Raro" },
  { f: "Painel do cliente", CADBRASIL: "Em tempo real", outros: "E-mail e WhatsApp" },
  { f: "Especialização em licitação", CADBRASIL: "Exclusiva", outros: "Genérica" },
];

function Beneficios() {
  return (
    <PageShell breadcrumbs={[{ label: "Benefícios" }]}>
      <PageHero
        eyebrow="Por que CADBRASIL"
        title="Não somos despachantes."
        highlight="Somos engenharia para licitações."
        description="Combinamos tecnologia de ponta, especialistas reais e processos calibrados para entregar o que despachante tradicional não consegue: velocidade, previsibilidade e segurança."
        primaryCta={{ label: "Contratar Agora", href: CADASTRO_URL, external: true }}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {grandes.map((g) => (
            <div key={g.t} className="rounded-3xl bg-card border border-border p-8 shadow-card hover:shadow-glow hover:border-brand/40 transition">
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand text-brand-foreground grid place-items-center shadow-glow">
                <g.i className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-2xl font-display font-bold">{g.t}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{g.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-balance mb-12 max-w-3xl">
            Tudo o que você ganha ao escolher a CADBRASIL.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {todos.map((b) => (
              <div key={b.t} className="rounded-2xl bg-card border border-border p-6 shadow-card">
                <div className="h-11 w-11 rounded-xl bg-accent text-brand grid place-items-center">
                  <b.i className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-balance mb-10 text-center">
            CADBRASIL vs. despachante tradicional.
          </h2>
          <div className="rounded-3xl overflow-hidden border border-border shadow-card bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent/60 text-left">
                  <th className="p-4 font-semibold">Comparativo</th>
                  <th className="p-4 font-semibold text-brand">CADBRASIL</th>
                  <th className="p-4 font-semibold text-muted-foreground">Outros</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.f} className="border-t border-border">
                    <td className="p-4 font-medium">{c.f}</td>
                    <td className="p-4 text-brand font-semibold">{c.CADBRASIL}</td>
                    <td className="p-4 text-muted-foreground">{c.outros}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-accent/30">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: Users, v: "+8.000", l: "fornecedores ativos" },
            { i: Clock, v: "24h", l: "tempo médio de entrega" },
            { i: Award, v: "+15 anos", l: "em licitações públicas" },
            { i: ShieldCheck, v: "98%", l: "índice de satisfação" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <s.i className="h-6 w-6 mx-auto text-brand" />
              <div className="mt-3 text-4xl font-display font-bold bg-gradient-brand bg-clip-text text-transparent">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <InlineCta
        title="Junte-se aos +8.000 fornecedores que escolheram a CADBRASIL."
        subtitle="Comece seu cadastro em 2 minutos."
      />
    </PageShell>
  );
}
