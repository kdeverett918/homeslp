import type { QuizFunnelData } from "@/types/content";

export const speechMilestonesQuiz: QuizFunnelData = {
  id: "speech-milestones",
  path: "child",
  title: "Speech Milestones Check",
  subtitle: "Answer 5 quick questions about your child's communication",
  questions: [
    {
      id: 1,
      text: "How old is your child?",
      options: [
        { label: "12-18 months", value: 0 },
        { label: "18-24 months", value: 1 },
        { label: "24-30 months", value: 2 },
        { label: "30-36 months", value: 3 },
        { label: "36+ months", value: 4 },
      ],
    },
    {
      id: 2,
      text: "How many words does your child say?",
      options: [
        { label: "50+ words", value: 0 },
        { label: "20-50 words", value: 1 },
        { label: "10-20 words", value: 2 },
        { label: "Under 10 words", value: 3 },
        { label: "No words yet", value: 4 },
      ],
    },
    {
      id: 3,
      text: 'Does your child combine two words? (e.g., "more milk," "daddy go")',
      options: [
        { label: "Yes, frequently", value: 0 },
        { label: "Sometimes", value: 1 },
        { label: "Rarely", value: 2 },
        { label: "Not yet", value: 3 },
      ],
    },
    {
      id: 4,
      text: "How does your child usually communicate their needs?",
      options: [
        { label: "Words or short phrases", value: 0 },
        { label: "Mix of words and gestures", value: 1 },
        { label: "Mostly pointing or gestures", value: 2 },
        { label: "Mostly crying or pulling you", value: 3 },
      ],
    },
    {
      id: 5,
      text: "Can familiar people understand your child?",
      options: [
        { label: "Most of what they say", value: 0 },
        { label: "About half", value: 1 },
        { label: "Less than half", value: 2 },
        { label: "Very little", value: 3 },
      ],
    },
  ],
  resultBands: [
    {
      min: 0,
      max: 4,
      riskLevel: "low",
      headline: "Looking Good!",
      description:
        "Based on your answers, your child appears to be developing within or near the typical range for their age. That said, every child is unique.",
      recommendations: [
        "Continue talking, reading, and singing with your child daily",
        "Follow our free Week 1 Blueprint for fun language-building activities",
        "Monitor progress and re-take this check in a few months",
      ],
    },
    {
      min: 5,
      max: 10,
      riskLevel: "moderate",
      headline: "Some Areas May Need Support",
      description:
        "Your child may benefit from targeted strategies to boost their communication. The great news? There's so much you can do at home right now.",
      recommendations: [
        "Start our guided weekly roadmap with evidence-based techniques",
        "Learn strategies like 'Wait and Model' used by licensed SLPs",
        "Request an evaluation from your pediatrician or local early intervention program",
      ],
    },
    {
      min: 11,
      max: 17,
      riskLevel: "high",
      headline: "Early Support Can Make a Big Difference",
      description:
        "Your answers suggest your child could significantly benefit from speech-language support. While you wait for professional services, you can start helping today.",
      recommendations: [
        "Contact your pediatrician to request a speech-language evaluation",
        "Call your state's Early Intervention program (birth-3) or school district (3+)",
        "Start our weekly roadmap immediately - don't lose time on a waitlist",
      ],
    },
  ],
};
