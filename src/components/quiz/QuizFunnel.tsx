"use client";

import { useState, useCallback } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import type { QuizFunnelData, QuizResultBand } from "@/types/content";
import type { RiskLevel } from "@/types";
import { QuizResultsPrintable } from "./QuizResultsPrintable";

type Stage = "intro" | "questions" | "email" | "results";

interface QuizFunnelProps {
  quiz: QuizFunnelData;
  onComplete?: (email: string, score: number, riskLevel: RiskLevel) => void;
}

export function QuizFunnel({ quiz, onComplete }: QuizFunnelProps) {
  const [stage, setStage] = useState<Stage>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const totalScore = answers.reduce((sum, v) => sum + v, 0);

  const getResult = useCallback((): QuizResultBand | null => {
    return (
      quiz.resultBands.find(
        (band) => totalScore >= band.min && totalScore <= band.max
      ) ?? null
    );
  }, [totalScore, quiz.resultBands]);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion((q) => q + 1);
      } else {
        setStage("email");
      }
    }, 400);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const result = getResult();

    try {
      await fetch("/api/quiz/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          quizType: quiz.id,
          score: totalScore,
          riskLevel: result?.riskLevel,
        }),
      });
    } catch {
      // Continue to results even if capture fails
    }

    onComplete?.(email, totalScore, result?.riskLevel ?? "low");
    setSubmitting(false);
    setStage("results");
  };

  const result = getResult();
  const progress =
    stage === "questions"
      ? ((currentQuestion + 1) / quiz.questions.length) * 100
      : stage === "email" || stage === "results"
        ? 100
        : 0;

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Progress bar */}
      {stage !== "intro" && (
        <div className="h-2 bg-muted rounded-full mb-8 overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Intro */}
      {stage === "intro" && (
        <div className="text-center space-y-6">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            {quiz.title}
          </h2>
          <p className="text-muted-foreground text-lg">{quiz.subtitle}</p>
          <button
            onClick={() => setStage("questions")}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-warm-md transition-colors hover:bg-primary/90"
          >
            Start Quiz
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-muted-foreground">
            Takes about 60 seconds. No account needed.
          </p>
        </div>
      )}

      {/* Questions */}
      {stage === "questions" && (
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </p>
          <h3 className="font-heading text-xl font-semibold">
            {quiz.questions[currentQuestion].text}
          </h3>
          <div className="space-y-3">
            {quiz.questions[currentQuestion].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="w-full rounded-xl border border-border bg-card p-4 text-left text-sm font-medium transition-all hover:border-primary hover:bg-primary/5 hover:shadow-warm-sm active:scale-[0.98]"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Email capture */}
      {stage === "email" && (
        <div className="space-y-6 text-center">
          <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-sage-600" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold">
              Your results are ready!
            </h3>
            <p className="text-muted-foreground mt-2">
              Enter your email to see your personalized results and get a free
              Week 1 Blueprint preview.
            </p>
          </div>
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-xl border border-input bg-background pl-11 pr-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-warm-sm transition-colors hover:bg-primary/90 disabled:opacity-50"
            >
              {submitting ? "Sending..." : "See My Results"}
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-muted-foreground">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      )}

      {/* Results */}
      {stage === "results" && result && (
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ${
                result.riskLevel === "low"
                  ? "bg-sage-100 text-sage-700"
                  : result.riskLevel === "moderate"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-rose-100 text-rose-700"
              }`}
            >
              {result.riskLevel === "low"
                ? "Low Concern"
                : result.riskLevel === "moderate"
                  ? "Moderate Concern"
                  : "Higher Concern"}
            </div>
            <h3 className="font-heading text-2xl font-bold">
              {result.headline}
            </h3>
            <p className="text-muted-foreground">{result.description}</p>
          </div>

          <div className="bg-card border rounded-xl p-6 space-y-3">
            <h4 className="font-heading font-semibold">
              Recommended Next Steps
            </h4>
            <ul className="space-y-2">
              {result.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-sage-50 border rounded-xl p-6 text-center space-y-4">
            <h4 className="font-heading text-lg font-semibold">
              Start your free 7-day trial
            </h4>
            <p className="text-sm text-muted-foreground">
              Get your Week 1 Blueprint with expert-guided videos, activities,
              and printable resources. Only $9/month after trial.
            </p>
            <a
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-warm-sm transition-colors hover:bg-primary/90"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <QuizResultsPrintable
            quizTitle={quiz.title}
            score={totalScore}
            maxScore={quiz.questions.length * Math.max(...quiz.questions.flatMap(q => q.options.map(o => o.value)))}
            result={result}
            dateCompleted={new Date().toLocaleDateString()}
          />

          <p className="text-xs text-muted-foreground text-center italic">
            This screening is for educational purposes only and does not
            constitute a medical diagnosis. Always consult a licensed
            Speech-Language Pathologist for professional evaluation.
          </p>
        </div>
      )}
    </div>
  );
}
