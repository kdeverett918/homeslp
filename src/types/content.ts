import type { ContentPath, AccessTier, RiskLevel } from './index';

// ─── BLOG ARTICLES ─────────────────────────────────────────────────────
export type BlogCategory =
  | "speech-development"
  | "language-development"
  | "feeding-swallowing"
  | "parent-tips"
  | "myths-facts"
  | "milestones";

export interface BlogSource {
  label: string;
  detail: string;
}

export interface BlogFunFact {
  emoji: string;
  text: string;
}

export interface BlogCallout {
  type: "tip" | "warning" | "note" | "fun-fact";
  text: string;
}

export interface BlogSection {
  heading: string;
  content: string;
  bulletPoints?: string[];
  callout?: BlogCallout;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: BlogCategory;
  tags: string[];
  readingTimeMinutes: number;
  publishedDate: string;
  updatedDate?: string;
  author: string;
  heroEmoji: string;
  introduction: string;
  sections: BlogSection[];
  funFacts: BlogFunFact[];
  keyTakeaways: string[];
  sources: BlogSource[];
  disclaimer: string;
}

export interface RefrigeratorTechnique {
  activityContext: string;
  technique: string;
  example: string;
  parentTip: string;
}

export interface WeeklyBlueprint {
  id: string;
  slug: string;
  path: ContentPath;
  weekNumber: number;
  title: string;
  subtitle: string;
  description: string;
  accessTier: AccessTier;
  commentary: {
    type: 'video' | 'text';
    videoUrl?: string;
    videoDurationSeconds?: number;
    textContent?: string;
    slpNote: string;
  };
  curatedMedia: {
    youtubeVideoId: string;
    title: string;
    channelName: string;
    startTimeSeconds?: number;
    slpAnnotation: string;
  };
  refrigeratorPdf: {
    title: string;
    pdfUrl: string;
    previewImageUrl?: string;
    techniques: RefrigeratorTechnique[];
  };
  tags: string[];
  estimatedMinutes: number;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: { label: string; value: number }[];
}

export interface QuizResultBand {
  min: number;
  max: number;
  riskLevel: RiskLevel;
  headline: string;
  description: string;
  recommendations: string[];
}

export interface QuizFunnelData {
  id: string;
  path: ContentPath;
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
  resultBands: QuizResultBand[];
}
