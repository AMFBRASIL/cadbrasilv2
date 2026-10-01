import { ArrowRight, MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/site/WhatsAppLink";
import { btnOnDarkPrimary, btnOnDarkSecondary } from "@/components/site/cadbrasil/styles";

export function CtaBand({
  title,
  subtitle,
  primary,
  whatsapp,
}: {
  title: string;
  subtitle?: string;
  primary: { label: string; href: string };
  whatsapp?: { label: string; intent: string };
}) {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-brand p-8 sm:p-12 text-brand-foreground shadow-glow">
          <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
          <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-balance text-white">
                {title}
              </h2>
              {subtitle && <p className="mt-3 text-white/85 max-w-2xl">{subtitle}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={primary.href} className={btnOnDarkPrimary}>
                {primary.label} <ArrowRight className="h-4 w-4" />
              </a>
              {whatsapp && (
                <WhatsAppLink
                  intent={whatsapp.intent}
                  pageLabel="CADBrasil — Tecnologia e assessoria em licitações"
                  className={btnOnDarkSecondary}
                >
                  <MessageCircle className="h-4 w-4" /> {whatsapp.label}
                </WhatsAppLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
