import type { ContentPath, AccessTier, RiskLevel } from './index';

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
