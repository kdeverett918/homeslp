"use client";

import { useState } from "react";
import { LayoutGrid, Play, Lightbulb, Clock } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem, ScaleOnHover } from "@/components/motion";
import { WordFinder } from "@/components/games/word-finder";

export default function GamesPage() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  if (activeGame === "word-finder") {
    return (
      <div className="max-w-2xl space-y-4">
        <button onClick={() => setActiveGame(null)} className="text-sm text-muted-foreground hover:text-foreground">
          &larr; Back to games
        </button>
        <WordFinder />
      </div>
    );
  }

  return (
    <div className="max-w-3xl space-y-6">
      <FadeIn>
        <div className="flex items-center gap-3">
          <LayoutGrid className="w-7 h-7 text-primary" />
          <h1 className="font-heading text-2xl font-bold sm:text-3xl">Practice Games</h1>
        </div>
        <p className="mt-1.5 text-muted-foreground">Fun, interactive games for vocabulary building and word retrieval practice.</p>
      </FadeIn>

      <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StaggerItem>
          <ScaleOnHover>
            <div className="rounded-xl border bg-card p-6 space-y-4 h-full flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-semibold">Word Finder</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Match words to their meanings with kid-friendly vocabulary for young learners.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-sage-100 text-sage-700 px-2 py-0.5 font-medium">Easy</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />5 min</span>
                </div>
                <button
                  onClick={() => setActiveGame("word-finder")}
                  className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Play className="w-3 h-3" />
                  Play
                </button>
              </div>
            </div>
          </ScaleOnHover>
        </StaggerItem>
      </StaggerChildren>

      <p className="text-xs text-muted-foreground text-center italic">More games coming soon!</p>

      <p className="text-xs text-muted-foreground text-center italic">
        These games are educational tools and do not replace professional speech-language therapy.
      </p>
    </div>
  );
}
