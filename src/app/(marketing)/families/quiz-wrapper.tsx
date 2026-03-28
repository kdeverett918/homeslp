"use client";

import { QuizFunnel } from "@/components/quiz/QuizFunnel";
import { speechMilestonesQuiz } from "@/data/quiz/speech-milestones";

export function QuizFunnelWrapper() {
  return <QuizFunnel quiz={speechMilestonesQuiz} />;
}
