"use client";

import { QuizFunnel } from "@/components/quiz/QuizFunnel";
import { swallowRiskQuiz } from "@/data/quiz/swallow-risk";

export function QuizFunnelWrapper() {
  return <QuizFunnel quiz={swallowRiskQuiz} />;
}
