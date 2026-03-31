import type { BlogCategory } from "@/types/content";

export const BLOG_DISCLAIMER =
  "This article is for educational purposes only and does not replace professional evaluation or treatment by a licensed speech-language pathologist. If you have concerns about your child's development, please consult a qualified professional.";

export const blogCategoryStyle: Record<BlogCategory, { bg: string; text: string }> = {
  "speech-development": { bg: "bg-rose-100", text: "text-rose-700" },
  "language-development": { bg: "bg-blue-100", text: "text-blue-700" },
  "feeding-swallowing": { bg: "bg-amber-100", text: "text-amber-700" },
  "parent-tips": { bg: "bg-sage-100", text: "text-sage-700" },
  "myths-facts": { bg: "bg-purple-100", text: "text-purple-700" },
  milestones: { bg: "bg-orange-100", text: "text-orange-700" },
};
