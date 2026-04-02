"use client";

import { PauseCircle, PlayCircle, Volume2 } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NarrationAsset } from "@/data/media";
import type { ContentNarration } from "@/types/content";

const AUDIO_PLAY_EVENT = "homeslp:audio-play";

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}

interface ReadAloudButtonProps {
  asset?: NarrationAsset | null;
  narration?: ContentNarration | null;
  label?: string;
  className?: string;
  compact?: boolean;
}

export function ReadAloudButton({
  asset,
  narration,
  label,
  className,
  compact = false,
}: ReadAloudButtonProps) {
  const normalizedAsset = useMemo(() => {
    if (asset) return asset;
    if (!narration) return null;

    return {
      audioSrc: narration.audioSrc,
      durationSeconds: 0,
      durationLabel: narration.durationLabel,
      label: label ?? narration.title,
      transcript: narration.transcript ?? "",
      voiceName: narration.voice ?? "HomeSLP narration",
    };
  }, [asset, label, narration]);
  const normalizedAudioSrc = normalizedAsset?.audioSrc ?? null;
  const id = useId();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!normalizedAudioSrc || typeof window === "undefined") return undefined;

    const handleExternalPlay = (event: Event) => {
      const customEvent = event as CustomEvent<{ id: string }>;
      if (customEvent.detail?.id !== id && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setPlaying(false);
      }
    };

    window.addEventListener(AUDIO_PLAY_EVENT, handleExternalPlay as EventListener);
    return () => window.removeEventListener(AUDIO_PLAY_EVENT, handleExternalPlay as EventListener);
  }, [id, normalizedAudioSrc]);

  if (!normalizedAsset) return null;

  const handleToggle = async () => {
    if (!audioRef.current || typeof window === "undefined") return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    window.dispatchEvent(new CustomEvent(AUDIO_PLAY_EVENT, { detail: { id } }));
    await audioRef.current.play();
    setPlaying(true);
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <audio
        ref={audioRef}
        preload="none"
        src={normalizedAsset.audioSrc}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />
      <Button
        type="button"
        variant="outline"
        size={compact ? "sm" : "default"}
        onClick={() => {
          void handleToggle();
        }}
        aria-pressed={playing}
      >
        {playing ? <PauseCircle className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
        {playing ? "Pause audio" : "Read aloud"}
      </Button>
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Volume2 className="h-3.5 w-3.5 text-primary" />
            {normalizedAsset.label}
          </span>
        </p>
        <p className="text-xs text-muted-foreground">
          {"durationLabel" in normalizedAsset && normalizedAsset.durationLabel
            ? normalizedAsset.durationLabel
            : normalizedAsset.durationSeconds > 0
              ? formatDuration(normalizedAsset.durationSeconds)
              : "Audio"}
        </p>
      </div>
    </div>
  );
}
