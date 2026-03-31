import type { BlogArticle, BlogCategory } from "@/types/content";
import { earlyDevelopmentArticles } from "./articles-early-development";
import { parentKnowledgeArticles } from "./articles-parent-knowledge";
import { practicalGuideArticles } from "./articles-practical-guides";
import { beyondWordsArticles } from "./articles-beyond-words";
import { currentResearch1Articles } from "./articles-current-research-1";
import { currentResearch2Articles } from "./articles-current-research-2";
import { currentResearch3Articles } from "./articles-current-research-3";
import { currentResearch4Articles } from "./articles-current-research-4";

export type { BlogCategory };
export { BLOG_DISCLAIMER, blogCategoryStyle } from "./constants";

export const blogArticles: BlogArticle[] = [
  ...earlyDevelopmentArticles,
  ...parentKnowledgeArticles,
  ...practicalGuideArticles,
  ...beyondWordsArticles,
  ...currentResearch1Articles,
  ...currentResearch2Articles,
  ...currentResearch3Articles,
  ...currentResearch4Articles,
];

export const blogCategories: { value: BlogCategory; label: string; emoji: string }[] = [
  { value: "speech-development", label: "Speech Development", emoji: "🗣️" },
  { value: "language-development", label: "Language Development", emoji: "💬" },
  { value: "feeding-swallowing", label: "Feeding & Swallowing", emoji: "🍽️" },
  { value: "parent-tips", label: "Parent Tips", emoji: "💡" },
  { value: "myths-facts", label: "Myths & Facts", emoji: "🔍" },
  { value: "milestones", label: "Milestones", emoji: "📊" },
];
