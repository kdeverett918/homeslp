import type { BlogArticle, BlogCategory } from "@/types/content";
import { earlyDevelopmentArticles } from "./articles-early-development";
import { parentKnowledgeArticles } from "./articles-parent-knowledge";
import { practicalGuideArticles } from "./articles-practical-guides";
import { beyondWordsArticles } from "./articles-beyond-words";

export type { BlogCategory };

export const blogArticles: BlogArticle[] = [
  ...earlyDevelopmentArticles,
  ...parentKnowledgeArticles,
  ...practicalGuideArticles,
  ...beyondWordsArticles,
];

export const blogCategories: { value: BlogCategory; label: string; emoji: string }[] = [
  { value: "speech-development", label: "Speech Development", emoji: "🗣️" },
  { value: "language-development", label: "Language Development", emoji: "💬" },
  { value: "feeding-swallowing", label: "Feeding & Swallowing", emoji: "🍽️" },
  { value: "parent-tips", label: "Parent Tips", emoji: "💡" },
  { value: "myths-facts", label: "Myths & Facts", emoji: "🔍" },
  { value: "milestones", label: "Milestones", emoji: "📊" },
];
