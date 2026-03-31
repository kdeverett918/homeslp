"use client";

import { useState } from "react";
import { BookOpen, Plus, Trash2, Search, TrendingUp } from "lucide-react";
import { useWordTracker, type TrackedWord } from "@/lib/stores/word-tracker";
import { useChildProfile } from "@/lib/stores/child-profile";
import { wordNorms, getNormForAge } from "@/data/word-norms";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";

const CATEGORIES: TrackedWord["category"][] = ["noun", "verb", "social", "adjective", "other"];

export default function WordsPage() {
  const { words, addWord, removeWord } = useWordTracker();
  const { childAgeMonths } = useChildProfile();
  const [newWord, setNewWord] = useState("");
  const [newCategory, setNewCategory] = useState<TrackedWord["category"]>("noun");
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const norm = childAgeMonths ? getNormForAge(childAgeMonths) : null;
  const wordCount = words.length;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWord.trim()) return;
    addWord({ word: newWord.trim().toLowerCase(), category: newCategory });
    setNewWord("");
    setShowForm(false);
  };

  const filtered = search
    ? words.filter(w => w.word.toLowerCase().includes(search.toLowerCase()))
    : words;

  const sorted = [...filtered].sort((a, b) => b.dateAdded.localeCompare(a.dateAdded));

  return (
    <div className="max-w-3xl space-y-6">
      <FadeIn>
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-primary" />
              <h1 className="font-heading text-2xl font-bold sm:text-3xl">Word Tracker</h1>
            </div>
            <p className="mt-1.5 text-muted-foreground">Log every word your child says. Watch the list grow!</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-4 h-4" /> Add Word
          </button>
        </div>
      </FadeIn>

      {/* Word count + norm comparison */}
      <FadeIn delay={0.1}>
        <div className="rounded-xl bg-gradient-to-br from-primary/5 to-sage-50 border p-5">
          <div className="text-center">
            <p className="font-heading text-4xl font-bold text-primary">{wordCount}</p>
            <p className="text-sm text-muted-foreground">words logged</p>
          </div>
          {norm && childAgeMonths && (
            <div className="mt-4 space-y-2">
              <p className="text-xs text-muted-foreground text-center">
                Typical range at {childAgeMonths} months: {norm.p25}–{norm.p75} words (median: {norm.p50})
              </p>
              <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                {/* Typical range bar */}
                <div
                  className="absolute h-full bg-sage-200 rounded-full"
                  style={{
                    left: `${Math.min((norm.p25 / norm.p90) * 100, 100)}%`,
                    width: `${Math.min(((norm.p75 - norm.p25) / norm.p90) * 100, 70)}%`
                  }}
                />
                {/* Child's position */}
                <div
                  className="absolute h-full w-1 bg-primary rounded-full"
                  style={{ left: `${Math.min((wordCount / norm.p90) * 100, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>0</span>
                <span>Typical range</span>
                <span>{norm.p90}+</span>
              </div>
            </div>
          )}
          {!norm && (
            <p className="mt-3 text-xs text-muted-foreground text-center">
              Set your child&apos;s age in Settings to see how their vocabulary compares to typical ranges.
            </p>
          )}
        </div>
      </FadeIn>

      {/* Add word form */}
      {showForm && (
        <FadeIn>
          <form onSubmit={handleAdd} className="rounded-xl border bg-card p-5 space-y-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
                placeholder="Type a word your child says..."
                autoFocus
                className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button type="submit" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setNewCategory(cat)}
                  className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                    newCategory === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Sound effects count! &quot;Vroom&quot;, &quot;moo&quot;, &quot;uh-oh&quot; are all words. So are signs and gestures if used consistently.
            </p>
          </form>
        </FadeIn>
      )}

      {/* Search */}
      {words.length > 5 && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search words..."
            className="w-full rounded-lg border border-input bg-background pl-10 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      )}

      {/* Word list */}
      {sorted.length > 0 ? (
        <StaggerChildren className="space-y-1.5">
          {sorted.map((w) => (
            <StaggerItem key={w.id}>
              <div className="flex items-center justify-between rounded-lg border bg-card px-4 py-2.5 group hover:shadow-warm-sm transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-sm">{w.word}</span>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] capitalize text-muted-foreground">{w.category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-muted-foreground">{new Date(w.dateAdded).toLocaleDateString()}</span>
                  <button onClick={() => removeWord(w.id)} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      ) : (
        <div className="rounded-xl bg-muted/30 p-8 text-center text-sm text-muted-foreground">
          <BookOpen className="w-8 h-8 mx-auto mb-3 text-muted-foreground/50" />
          <p>No words logged yet. Tap &quot;Add Word&quot; to start tracking!</p>
          <p className="text-xs mt-2">Remember: animal sounds, sound effects, and signs all count as words.</p>
        </div>
      )}

      <p className="text-xs text-muted-foreground text-center italic">
        Word tracking is an educational tool. Vocabulary norms vary widely and this tracker does not replace professional assessment. If you have concerns, consult a licensed SLP.
      </p>
    </div>
  );
}
