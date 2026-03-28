import type { QuizFunnelData } from "@/types/content";

export const swallowRiskQuiz: QuizFunnelData = {
  id: "swallow-risk",
  path: "adult",
  title: "Swallow Safety Check",
  subtitle:
    "Answer 5 quick questions about your loved one's eating and swallowing",
  questions: [
    {
      id: 1,
      text: "Does your loved one cough or choke during meals?",
      options: [
        { label: "Never", value: 0 },
        { label: "Occasionally", value: 1 },
        { label: "Frequently", value: 2 },
        { label: "Almost every meal", value: 3 },
      ],
    },
    {
      id: 2,
      text: "Has eating become stressful or unpleasant for them?",
      options: [
        { label: "Not at all", value: 0 },
        { label: "Somewhat", value: 1 },
        { label: "Very much so", value: 2 },
        { label: "They avoid eating", value: 3 },
      ],
    },
    {
      id: 3,
      text: "Do they have trouble swallowing pills or certain textures?",
      options: [
        { label: "No trouble", value: 0 },
        { label: "Mild difficulty", value: 1 },
        { label: "Significant difficulty", value: 2 },
        { label: "Cannot swallow pills or certain foods", value: 3 },
      ],
    },
    {
      id: 4,
      text: "Have they lost weight since their condition started?",
      options: [
        { label: "No change", value: 0 },
        { label: "Slight weight loss", value: 1 },
        { label: "Noticeable weight loss", value: 2 },
        { label: "Significant weight loss", value: 3 },
      ],
    },
    {
      id: 5,
      text: "Do they feel like food gets stuck in their throat?",
      options: [
        { label: "Never", value: 0 },
        { label: "Sometimes", value: 1 },
        { label: "Often", value: 2 },
        { label: "Almost always", value: 3 },
      ],
    },
  ],
  resultBands: [
    {
      min: 0,
      max: 4,
      riskLevel: "low",
      headline: "Manageable Symptoms",
      description:
        "Based on your answers, your loved one's swallowing appears manageable right now. However, monitoring is important, especially after a stroke or neurological diagnosis.",
      recommendations: [
        "Continue monitoring during meals for any changes",
        "Learn mealtime safety basics with our free Week 1 guide",
        "Re-take this check monthly to track changes over time",
      ],
    },
    {
      min: 5,
      max: 10,
      riskLevel: "moderate",
      headline: "Guided Support Recommended",
      description:
        "These symptoms suggest swallowing difficulties that could benefit from structured guidance. With the right knowledge, you can make mealtimes safer and more enjoyable.",
      recommendations: [
        "Learn about safe food textures with our IDDSI recipe library",
        "Follow our weekly caregiver blueprint for evidence-based strategies",
        "Discuss these symptoms with your loved one's doctor",
      ],
    },
    {
      min: 11,
      max: 15,
      riskLevel: "high",
      headline: "Seek Professional Evaluation",
      description:
        "These symptoms indicate significant swallowing challenges. A formal evaluation is strongly recommended. In the meantime, our platform can help you navigate safe mealtimes.",
      recommendations: [
        "Contact their doctor to request a swallowing evaluation (MBSS or FEES)",
        "Start learning about safe food preparation with our guided resources",
        "Never change a prescribed diet without medical clearance",
      ],
    },
  ],
};
