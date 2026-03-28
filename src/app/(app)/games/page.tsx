"use client";

import { useState } from "react";
import { LayoutGrid, Play, Brain, Lightbulb, Clock } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem, ScaleOnHover } from "@/components/motion";
import { WordFinder } from "@/components/games/word-finder";

const GAMES = [
  {
    id: "word-finder",
    title: "Word Finder",
    description: "Match words to their meanings. Great for vocabulary building and word retrieval practice.",
    icon: Lightbulb,
    difficulty: "Easy",
    time: "5 min",
    playable: true,
  },
  {
    id: "memory-match",
    title: "Memory Match",
    description: "Classic card-flip memory game with speech and language vocabulary.",
    icon: Brain,
    difficulty: "Medium",
    time: "10 min",
    playable: false,
  },
  {
    id: "daily-word",
    title: "Daily Word",
    description: "Learn a new speech-language term every day with examples and tips.",
    icon: LayoutGrid,
    difficulty: "Easy",
    time: "2 min",
    playable: false,
  },
];

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
        <p className="mt-1.5 text-muted-foreground">Fun, therapeutic games for language, memory, and cognitive practice.</p>
      </FadeIn>

      <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((game) => (
          <StaggerItem key={game.id}>
            <ScaleOnHover>
              <div className="rounded-xl border bg-card p-6 space-y-4 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <game.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold">{game.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{game.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-sage-100 text-sage-700 px-2 py-0.5 font-medium">{game.difficulty}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{game.time}</span>
                  </div>
                  <button
                    onClick={() => game.playable && setActiveGame(game.id)}
                    disabled={!game.playable}
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      game.playable
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    <Play className="w-3 h-3" />
                    {game.playable ? "Play" : "Soon"}
                  </button>
                </div>
              </div>
            </ScaleOnHover>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
