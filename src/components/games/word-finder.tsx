"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

const QUESTIONS = [
  { prompt: "Which word means 'to eat'?", options: ["Consume", "Construct", "Compute", "Compose"], correct: 0 },
  { prompt: "What does 'swallow' mean?", options: ["To jump", "To push food/liquid to the stomach", "To breathe deeply", "To speak loudly"], correct: 1 },
  { prompt: "Which is a body part used for speech?", options: ["Elbow", "Kneecap", "Tongue", "Ankle"], correct: 2 },
  { prompt: "What does 'articulate' mean?", options: ["To run fast", "To dance", "To pronounce clearly", "To paint"], correct: 2 },
  { prompt: "Which word relates to voice?", options: ["Larynx", "Femur", "Retina", "Patella"], correct: 0 },
  { prompt: "What is 'dysphagia'?", options: ["Difficulty reading", "Difficulty swallowing", "Difficulty walking", "Difficulty sleeping"], correct: 1 },
  { prompt: "Which word means 'to communicate'?", options: ["Isolate", "Express", "Demolish", "Excavate"], correct: 1 },
  { prompt: "What does 'fluency' describe?", options: ["Physical strength", "Smooth flow of speech", "Visual acuity", "Musical talent"], correct: 1 },
  { prompt: "Which is related to language development?", options: ["Vocabulary", "Velocity", "Viscosity", "Volatility"], correct: 0 },
  { prompt: "What does 'aspiration' mean in medical terms?", options: ["A big dream", "Food/liquid entering the airway", "Deep breathing", "Sweating"], correct: 1 },
];

export function WordFinder() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = useCallback((idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === QUESTIONS[currentQ].correct;
    setIsCorrect(correct);
    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ((q) => q + 1);
        setSelected(null);
        setIsCorrect(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  }, [selected, currentQ]);

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setIsCorrect(null);
    setFinished(false);
  };

  if (finished) {
    const percent = Math.round((score / QUESTIONS.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border bg-card p-8 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <Trophy className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-heading text-2xl font-bold">Game Complete!</h2>
        <p className="text-3xl font-heading font-bold text-primary">{score}/{QUESTIONS.length}</p>
        <p className="text-muted-foreground">{percent >= 80 ? "Excellent work!" : percent >= 60 ? "Good effort! Keep practicing." : "Keep at it \u2014 practice makes progress!"}</p>
        <button onClick={restart} className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          <RotateCcw className="w-4 h-4" /> Play Again
        </button>
      </motion.div>
    );
  }

  const q = QUESTIONS[currentQ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Question {currentQ + 1} of {QUESTIONS.length}</span>
        <span className="font-medium">Score: {score}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${((currentQ + 1) / QUESTIONS.length) * 100}%` }} transition={{ duration: 0.3 }} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
          <h3 className="font-heading text-xl font-semibold">{q.prompt}</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {q.options.map((option, i) => {
              let bg = "border bg-card hover:border-primary hover:bg-primary/5";
              if (selected !== null) {
                if (i === q.correct) bg = "border-sage-500 bg-sage-50 text-sage-700";
                else if (i === selected && !isCorrect) bg = "border-destructive bg-destructive/5 text-destructive";
                else bg = "border bg-card opacity-50";
              }
              return (
                <motion.button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selected !== null}
                  whileTap={selected === null ? { scale: 0.97 } : undefined}
                  className={`rounded-xl p-4 text-left text-sm font-medium transition-colors ${bg}`}
                >
                  <span className="flex items-center justify-between gap-2">
                    {option}
                    {selected !== null && i === q.correct && <CheckCircle2 className="w-5 h-5 text-sage-500" />}
                    {selected === i && !isCorrect && <XCircle className="w-5 h-5 text-destructive" />}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
