"use client";

import { useState, useMemo, useCallback } from "react";
import { Shuffle, Clock, Zap, Filter } from "lucide-react";
import { actionCards } from "@/data/action-cards";
import { useChildProfile } from "@/lib/stores/child-profile";
import { FadeIn } from "@/components/motion";
import { motion, AnimatePresence } from "framer-motion";

const CONTEXTS = ["all", "mealtime", "bath", "play", "bedtime", "errands", "anytime"] as const;

export default function ActivitiesPage() {
  const { childAgeMonths } = useChildProfile();
  const [context, setContext] = useState<string>("all");
  const [cardIndex, setCardIndex] = useState(0);

  const eligible = useMemo(() => {
    let cards = actionCards.filter(c => c.path === "child");
    if (childAgeMonths) {
      cards = cards.filter(c => childAgeMonths >= c.ageRangeStart && childAgeMonths <= c.ageRangeEnd);
    }
    if (context !== "all") {
      cards = cards.filter(c => c.context === context);
    }
    return cards.length > 0 ? cards : actionCards.filter(c => c.path === "child").slice(0, 10);
  }, [childAgeMonths, context]);

  const currentCard = eligible[cardIndex % eligible.length];

  const shuffle = useCallback(() => {
    setCardIndex(i => (i + 1) % Math.max(eligible.length, 1));
  }, [eligible.length]);

  return (
    <div className="max-w-2xl space-y-6">
      <FadeIn>
        <div className="flex items-center gap-3">
          <Zap className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Quick Activities</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">Got 5 minutes? Pick a context and get a language-building activity.</p>
      </FadeIn>

      {/* Context filter */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-2">
          {CONTEXTS.map(c => (
            <button
              key={c}
              onClick={() => { setContext(c); setCardIndex(0); }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                context === c ? "bg-primary text-primary-foreground shadow-warm-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {c === "all" ? "Any moment" : c}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Activity card */}
      {currentCard && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-primary capitalize rounded-full bg-primary/10 px-3 py-1">{currentCard.context}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{currentCard.estimatedMinutes} min</span>
            </div>
            <h2 className="font-heading text-xl font-bold">{currentCard.title}</h2>
            <p className="text-sm leading-relaxed">{currentCard.technique}</p>
            <div className="rounded-xl bg-background/80 p-4 text-sm italic text-muted-foreground">
              &ldquo;{currentCard.example}&rdquo;
            </div>
            <div className="rounded-lg bg-sage-50 border border-sage-200 p-3 text-xs text-sage-800">
              <strong>Tip:</strong> {currentCard.parentTip}
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Shuffle button */}
      <div className="flex justify-center">
        <button
          onClick={shuffle}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-warm-sm hover:bg-primary/90 transition-colors"
        >
          <Shuffle className="w-4 h-4" /> Next Activity
        </button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        {eligible.length} activities available{context !== "all" ? ` for ${context}` : ""}{childAgeMonths ? ` at ${childAgeMonths} months` : ""}
      </p>

      <p className="text-xs text-muted-foreground text-center italic">
        These activities are for educational purposes and do not replace professional speech-language therapy. Always consult a licensed SLP for personalized guidance.
      </p>
    </div>
  );
}
