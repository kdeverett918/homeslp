"use client";

import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarHeart,
  Lightbulb,
  Microscope,
  Sparkles,
} from "lucide-react";
import { ContentImage } from "@/components/media/content-image";
import { ReadAloudButton } from "@/components/media/read-aloud-button";
import type { DailyTip } from "@/data/daily-tips";
import { formatFriendlyAgeRange } from "@/lib/format-age";

function getTodaysTip(
  tips: DailyTip[],
  path: string,
  ageMonths: number | null,
): DailyTip | null {
  const pathMatched = tips.filter((tip) => tip.path === path);
  if (pathMatched.length === 0) return null;

  const eligible = pathMatched.filter((tip) => {
    if (ageMonths !== null && (ageMonths < tip.ageRangeStart || ageMonths > tip.ageRangeEnd)) {
      return false;
    }

    return true;
  });

  const mediaReady = (eligible.length > 0 ? eligible : pathMatched).filter(
    (tip) => tip.image || tip.narration,
  );
  const dailyPool = mediaReady.length > 0 ? mediaReady : eligible.length > 0 ? eligible : pathMatched;
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000,
  );

  return dailyPool[dayOfYear % dailyPool.length] ?? null;
}

interface DailyTipCardProps {
  tips: DailyTip[];
  path: string;
  ageMonths: number | null;
}

const contextLabels = {
  mealtime: "Mealtime",
  bath: "Bath time",
  play: "Play",
  bedtime: "Bedtime",
  errands: "Errands",
  anytime: "Any routine",
} satisfies Record<DailyTip["context"], string>;

const contextFrames = {
  mealtime: {
    label: "Meals + requesting",
    why:
      "Predictable routines and motivated choices create natural reasons to look, point, gesture, or use words.",
  },
  bath: {
    label: "Routines + repetition",
    why:
      "Bath time is repetitive and sensory-rich, which helps language patterns stick without feeling like a lesson.",
  },
  play: {
    label: "Play + joint attention",
    why:
      "Following a child’s lead in play supports imitation, shared attention, and language growth at the same time.",
  },
  bedtime: {
    label: "Books + recall",
    why:
      "Bedtime routines slow the pace and support listening, memory, and early narrative language.",
  },
  errands: {
    label: "Real-life carryover",
    why:
      "Language grows faster when children hear the same ideas across everyday places, people, and routines.",
  },
  anytime: {
    label: "Daily parent habit",
    why:
      "Small changes in wait time, modeling, and responsiveness compound across the week.",
  },
} satisfies Record<DailyTip["context"], { label: string; why: string }>;

export function DailyTipCard({ tips, path, ageMonths }: DailyTipCardProps) {
  const tip = useMemo(() => getTodaysTip(tips, path, ageMonths), [tips, path, ageMonths]);

  if (!tip) return null;

  const frame = contextFrames[tip.context];

  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="guide-surface p-5 sm:p-6"
    >
      <div className="relative z-10 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
              <Lightbulb className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Today&apos;s tip
              </p>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">{tip.title}</h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              {contextLabels[tip.context]}
            </span>
            <span className="rounded-full border border-border/70 bg-white/75 px-3 py-1 text-xs font-semibold text-foreground">
              {formatFriendlyAgeRange(tip.ageRangeStart, tip.ageRangeEnd)}
            </span>
          </div>
        </div>

        <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">{tip.technique}</p>

        <div className="flex flex-wrap items-center gap-3">
          {tip.narration ? (
            <ReadAloudButton narration={tip.narration} label="Listen to this tip" compact />
          ) : null}
          <span className="text-sm font-medium text-muted-foreground">{frame.label}</span>
        </div>

        {tip.image ? (
          <ContentImage
            image={tip.image}
            className="aspect-[16/9]"
            imageClassName="aspect-[16/9] object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 44vw"
          />
        ) : null}

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-xl border border-border/70 bg-background/88 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Try this line
            </p>
            <p className="mt-3 text-sm leading-7 italic text-muted-foreground">{tip.example}</p>
          </div>

          <div className="soft-panel p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                <Microscope className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Why this works
                </p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  <strong className="text-foreground">{frame.label}:</strong> {frame.why}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarHeart className="h-4 w-4 text-primary" />
            A fresh routine-based idea each day, grounded in how parents actually practice.
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Why these tips work
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Browse more daily ideas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
