import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { ContactSection } from "@/components/site/ContactSection";

export const CADASTRO_URL = "https://cadastro.cadbrasil.com.br";
export const WHATSAPP_URL = "https://wa.me/551121220202?text=Ola%2C%20estou%20na%20pagina%20da%20cadbrasil%20e%20gostaria%20de%20tirar%20duvidas%20sobre%20o%20processo.";

export function PageShell({
  children,
  breadcrumbs,
}: {
  children: ReactNode;
  breadcrumbs?: { label: string; to?: string }[];
}) {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <Nav />
      <main>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="pt-28 sm:pt-32">
            <nav
              aria-label="Breadcrumb"
              className="mx-auto max-w-7xl px-4 text-sm text-muted-foreground"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link to="/" className="hover:text-foreground">Início</Link>
                </li>
                {breadcrumbs.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span aria-hidden>/</span>
                    {b.to && i < breadcrumbs.length - 1 ? (
                      <Link to={b.to} className="hover:text-foreground">{b.label}</Link>
                    ) : (
                      <span className="text-foreground font-medium">{b.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
        {children}
        <ContactSection />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute inset-0 bg-gradient-radial" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand bg-brand/10 px-3 py-1.5 rounded-full">
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-bold leading-[1.02] tracking-tight text-balance">
          {title}{" "}
          {highlight && (
            <span className="bg-gradient-brand bg-clip-text text-transparent">{highlight}</span>
          )}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-balance max-w-2xl mx-auto">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            {primaryCta && (
              <a
                href={primaryCta.href}
                target={primaryCta.external ? "_blank" : undefined}
                rel={primaryCta.external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-brand text-brand-foreground font-semibold shadow-glow hover:scale-[1.02] transition"
              >
                {primaryCta.label} <ArrowRight className="h-4 w-4" />
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                target={secondaryCta.external ? "_blank" : undefined}
                rel={secondaryCta.external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-card border border-border font-semibold hover:bg-accent transition"
              >
                <MessageCircle className="h-4 w-4 text-success" /> {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export function InlineCta({
  title = "Pronto para regularizar seu SICAF?",
  subtitle = "Faça seu cadastro agora ou fale com um especialista no WhatsApp.",
}: {
  title?: string;
  subtitle?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const contextual = (() => {
    if (pathname.includes("beneficios")) {
      return {
        primary: "Quero reduzir risco fiscal",
        secondary: "Comparar meu cenário no WhatsApp",
      };
    }
    if (pathname.includes("assistente")) {
      return {
        primary: "Quero monitoramento automático",
        secondary: "Ver instalação guiada",
      };
    }
    if (pathname.includes("faq")) {
      return {
        primary: "Falar com especialista agora",
        secondary: "Receber checklist por WhatsApp",
      };
    }
    if (pathname.includes("como-funciona")) {
      return {
        primary: "Iniciar meu processo em 24h",
        secondary: "Tirar dúvidas sobre etapas",
      };
    }
    return {
      primary: "🚀 Fazer Cadastro",
      secondary: "💬 WhatsApp",
    };
  })();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 sm:p-12 text-brand-foreground shadow-glow">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-balance">{title}</h2>
              <p className="mt-3 text-white/85">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={CADASTRO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white text-brand font-bold shadow-soft hover:scale-[1.02] transition whitespace-nowrap"
              >
                {contextual.primary}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/30 text-white font-bold backdrop-blur hover:bg-white/20 transition whitespace-nowrap"
              >
                {contextual.secondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}
