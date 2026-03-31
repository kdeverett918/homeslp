"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

interface Question {
  prompt: string;
  options: string[];
  correct: number;
}

const PEDIATRIC_QUESTIONS: Question[] = [
  { prompt: "Which word means a baby animal?", options: ["Cub", "Cup", "Cut", "Cud"], correct: 0 },
  { prompt: "What does \"big\" mean?", options: ["Tall and large", "Small and tiny", "Fast and quick", "Wet and cold"], correct: 0 },
  { prompt: "Which one is a fruit?", options: ["Apple", "Table", "Shoe", "Clock"], correct: 0 },
  { prompt: "What does \"happy\" mean?", options: ["Feeling glad", "Feeling tired", "Feeling cold", "Feeling hungry"], correct: 0 },
  { prompt: "Which animal says \"moo\"?", options: ["Cow", "Cat", "Dog", "Duck"], correct: 0 },
  { prompt: "What does \"under\" mean?", options: ["Below something", "On top of", "Next to", "Far away"], correct: 0 },
  { prompt: "Which one can you drink?", options: ["Juice", "Book", "Hat", "Ball"], correct: 0 },
  { prompt: "What does \"soft\" mean?", options: ["Gentle to touch", "Very loud", "Really fast", "Super bright"], correct: 0 },
  { prompt: "Which one is a color?", options: ["Purple", "Pencil", "Pizza", "Pillow"], correct: 0 },
  { prompt: "What does \"cold\" mean?", options: ["Not warm", "Very fast", "Really tall", "Super loud"], correct: 0 },
  { prompt: "Which animal has wings?", options: ["Bird", "Fish", "Snake", "Frog"], correct: 0 },
  { prompt: "What does \"run\" mean?", options: ["Move legs fast", "Sit still", "Fall asleep", "Eat food"], correct: 0 },
  { prompt: "Which one do you wear?", options: ["Shirt", "Spoon", "Ball", "Book"], correct: 0 },
  { prompt: "What does \"loud\" mean?", options: ["Making big sounds", "Very quiet", "Really small", "Super slow"], correct: 0 },
  { prompt: "Which one is round?", options: ["Ball", "Stick", "Box", "Book"], correct: 0 },
  { prompt: "What does \"open\" mean?", options: ["Not closed", "Very tall", "Really wet", "Super hot"], correct: 0 },
  { prompt: "Which one has wheels?", options: ["Car", "Chair", "Bed", "Cup"], correct: 0 },
  { prompt: "What does \"push\" mean?", options: ["Press forward", "Pull back", "Jump up", "Sit down"], correct: 0 },
  { prompt: "Which one is hot?", options: ["Fire", "Ice", "Snow", "Rain"], correct: 0 },
  { prompt: "What does \"night\" mean?", options: ["When it's dark outside", "When it's sunny", "When it rains", "When it's windy"], correct: 0 },
];

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function WordFinder() {
  const pool = PEDIATRIC_QUESTIONS;

  const [questions, setQuestions] = useState<Question[]>(() => shuffleArray(pool).slice(0, 10));
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [finished, setFinished] = useState(false);

  const handleAnswer = useCallback((idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === questions[currentQ].correct;
    setIsCorrect(correct);
    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ((q) => q + 1);
        setSelected(null);
        setIsCorrect(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  }, [selected, currentQ, questions]);

  const restart = () => {
    setQuestions(shuffleArray(pool).slice(0, 10));
    setCurrentQ(0);
    setScore(0);
    setSelected(null);
    setIsCorrect(null);
    setFinished(false);
  };

  if (finished) {
    const percent = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl border bg-card p-8 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
          <Trophy className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-heading text-2xl font-bold">Game Complete!</h2>
        <p className="text-3xl font-heading font-bold text-primary">{score}/{questions.length}</p>
        <p className="text-muted-foreground">{percent >= 80 ? "Excellent work!" : percent >= 60 ? "Good effort! Keep practicing." : "Keep at it — practice makes progress!"}</p>
        <button onClick={restart} className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          <RotateCcw className="w-4 h-4" /> Play Again
        </button>
      </motion.div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Question {currentQ + 1} of {questions.length}</span>
        <span className="font-medium">Score: {score}</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} transition={{ duration: 0.3 }} />
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
