import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  KeyRound,
  Lock,
  Monitor,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import { PageShell, breadcrumbJsonLd, faqJsonLd } from "@/components/site/PageShell";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { OG_IMAGE, robotsMetaTags, SITE_ORIGIN } from "@/lib/seo";

export const ACESSO_REMOTO_DOWNLOAD_URL =
  "https://goodrive.com.br/drive/s/y3jUGqXpRd4SgoJGd6QJCrxUxRslVb";

const PAGE_URL = `${SITE_ORIGIN}/acesso-remoto`;
const PAGE_TITLE = "Acesso remoto CADBRASIL — suporte ao vivo no seu computador";
const PAGE_DESCRIPTION =
  "A CADBRASIL pode prestar suporte via acesso remoto. Baixe o aplicativo, instale, gere o código e envie ao atendente para iniciar o atendimento.";

const PASSOS = [
  {
    n: "1",
    title: "Baixe o aplicativo",
    text: "Clique no botão abaixo e faça o download do arquivo CADBRASIL Remote no seu computador (Windows).",
  },
  {
    n: "2",
    title: "Instale e abra o programa",
    text: "Execute o instalador, aceite as permissões necessárias e abra o aplicativo. Mantenha o computador conectado à internet.",
  },
  {
    n: "3",
    title: "Pegue o código gerado",
    text: "O sistema exibe um código de acesso. Copie esse código com atenção — ele identifica a sua sessão de suporte.",
  },
  {
    n: "4",
    title: "Passe o código ao atendente",
    text: "Envie o código pelo WhatsApp ou telefone para o especialista CADBRASIL. Só então o atendimento remoto começa.",
  },
];

const FAQ_ITEMS = [
  {
    q: "O que é o acesso remoto da CADBRASIL?",
    a: "É um atendimento assistido no qual um especialista CADBRASIL acessa o seu computador, com a sua autorização, para ajudar no SICAF, documentos, certificado digital ou portal Compras.gov.br.",
  },
  {
    q: "Preciso instalar algum programa?",
    a: "Sim. Baixe o aplicativo CADBRASIL Remote, instale, abra o programa e informe ao atendente o código gerado na tela.",
  },
  {
    q: "O atendimento começa sozinho depois do download?",
    a: "Não. O acesso só inicia depois que você passar o código ao atendente. Sem o código, ninguém entra no seu computador.",
  },
  {
    q: "É seguro?",
    a: "O suporte ocorre somente com a sua autorização, durante o atendimento. Não compartilhe o código com terceiros. Encerrado o suporte, você pode fechar o aplicativo.",
  },
];

export const Route = createFileRoute("/acesso-remoto")({
  head: () => ({
    meta: [
      ...robotsMetaTags(),
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: PAGE_URL },
      { rel: "alternate", hrefLang: "pt-BR", href: PAGE_URL },
      { rel: "alternate", hrefLang: "x-default", href: PAGE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Como iniciar o acesso remoto com a CADBRASIL",
          description: PAGE_DESCRIPTION,
          totalTime: "PT10M",
          step: PASSOS.map((p, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: p.title,
            text: p.text,
            url: `${PAGE_URL}#passo-${p.n}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          faqJsonLd(
            FAQ_ITEMS.map((it) => ({ question: it.q, answer: it.a })),
            PAGE_URL,
          ),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Início", url: `${SITE_ORIGIN}/` },
            { name: "Acesso remoto", url: PAGE_URL },
          ]),
        ),
      },
    ],
  }),
  component: AcessoRemotoPage,
});

function DownloadButton({ className }: { className?: string }) {
  return (
    <a
      href={ACESSO_REMOTO_DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "inline-flex w-full max-w-xl items-center justify-center gap-3 rounded-2xl bg-[#168821] px-8 py-6 text-center text-xl font-extrabold text-white shadow-xl shadow-[#168821]/30 transition hover:-translate-y-0.5 hover:bg-[#0a4d2c] sm:text-2xl"
      }
    >
      <Download className="h-7 w-7 shrink-0" aria-hidden />
      Iniciar Acesso remoto Agora
      <ArrowRight className="h-6 w-6 shrink-0" aria-hidden />
    </a>
  );
}

function AcessoRemotoPage() {
  return (
    <PageShell breadcrumbs={[{ label: "Acesso remoto" }]}>
      <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="absolute inset-0 bg-grid" aria-hidden />
        <div className="absolute inset-0 bg-gradient-radial" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand">
            <Headphones className="h-3.5 w-3.5" aria-hidden /> Suporte CADBRASIL
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Suporte via{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">acesso remoto</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A CADBRASIL pode atender você ao vivo no seu computador para ajudar no SICAF,
            documentos, certificado digital e Compras.gov.br. Basta baixar o aplicativo, instalar e
            enviar o código gerado ao atendente.
          </p>

          <div className="mt-10 flex justify-center">
            <DownloadButton />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Download do CADBRASIL Remote · Windows · atendimento somente com o seu código
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-accent/30 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Como funciona
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Siga os 4 passos. O atendente só entra na sessão depois que você passar o código.
          </p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2">
            {PASSOS.map((p) => (
              <li
                key={p.n}
                id={`passo-${p.n}`}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#168821] text-sm font-extrabold text-white">
                  {p.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-3">
          {[
            {
              icon: Monitor,
              title: "Atendimento no seu PC",
              text: "O especialista vê a tela e orienta o cadastro, a renovação ou a correção de pendências no SICAF.",
            },
            {
              icon: KeyRound,
              title: "Só com o seu código",
              text: "Nada acontece automaticamente. O acesso depende do código gerado no aplicativo e enviado por você.",
            },
            {
              icon: ShieldCheck,
              title: "Com a sua autorização",
              text: "Você acompanha o suporte do início ao fim. Ao terminar, feche o programa para encerrar a sessão.",
            },
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <item.icon className="h-6 w-6 text-brand" aria-hidden />
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="border-t border-border bg-accent/20 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight">Dúvidas frequentes</h2>
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-border bg-card">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold">
                  {item.q}
                  <span
                    className="text-brand transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-50 p-5 text-sm text-amber-950">
            <p className="inline-flex items-start gap-2 font-semibold">
              <Lock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              Segurança
            </p>
            <p className="mt-2 leading-relaxed">
              Não envie o código a ninguém além do atendente CADBRASIL. Se alguém pedir o código sem
              você ter solicitado suporte, encerre o contato.
            </p>
          </div>
          <div className="mt-8 text-center">
            <WhatsAppLink
              intent="Quero suporte via acesso remoto. Já posso baixar o aplicativo e enviar o código."
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 font-semibold hover:bg-accent"
            >
              Falar com o atendente no WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
