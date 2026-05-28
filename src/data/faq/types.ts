export type FaqItem = { question: string; answer: string };

export type FaqSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type FaqCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  quickAnswer: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  sections: FaqSection[];
  items: FaqItem[];
  relatedSlugs: string[];
  relatedGuides?: readonly { to: string; label: string }[];
};
