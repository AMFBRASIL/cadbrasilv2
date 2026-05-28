import type { FaqCategory } from "./types";
import { faqPagesPart1 } from "./pages-part1";
import { faqPagesPart2 } from "./pages-part2";

export const faqCategories: FaqCategory[] = [...faqPagesPart1, ...faqPagesPart2];

export function getFaqCategory(slug: string): FaqCategory | undefined {
  return faqCategories.find((c) => c.slug === slug);
}
