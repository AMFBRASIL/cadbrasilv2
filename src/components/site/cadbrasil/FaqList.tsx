import { ChevronDown } from "lucide-react";

export function FaqList({ items }: { items: readonly { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-border rounded-3xl border border-border bg-card shadow-card">
      {items.map((item, i) => (
        <details key={item.question} className="group px-6 sm:px-8" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-semibold text-foreground [&::-webkit-details-marker]:hidden">
            <h3 className="text-base sm:text-lg">{item.question}</h3>
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent text-muted-foreground transition group-open:rotate-180 group-open:bg-brand/10 group-open:text-brand"
              aria-hidden
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          </summary>
          <p className="pb-6 -mt-1 text-muted-foreground leading-relaxed">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
