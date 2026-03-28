"use client";

import { useRouter } from "next/navigation";
import { usePath } from "@/components/path/PathProvider";
import { Baby, Heart, UserRound } from "lucide-react";
import { useState } from "react";

export default function ChoosePath() {
  const router = useRouter();
  const { setPath } = usePath();
  const [loading, setLoading] = useState(false);

  const handleChoose = async (path: "child" | "adult") => {
    setLoading(true);
    await setPath(path);
    // Also set a cookie so server components can read it in beta mode
    document.cookie = `homeslp-beta-path=${path};path=/;max-age=31536000`;
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">
            Who are we helping today?
          </h1>
          <p className="mt-3 text-muted-foreground">
            Choose your path to get personalized content. You can switch anytime
            in settings.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <button
            onClick={() => handleChoose("child")}
            disabled={loading}
            className="group rounded-2xl border-2 border-border bg-card p-8 text-left transition-all hover:border-primary hover:shadow-warm-md disabled:opacity-50"
          >
            <div className="w-14 h-14 rounded-xl bg-rose-100 flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
              <Baby className="w-7 h-7 text-rose-600" />
            </div>
            <h2 className="font-heading text-xl font-bold">My Child</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Speech delays, late talking, language development for toddlers and
              young children.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-primary" />
                Weekly language-building blueprints
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-primary" />
                Curated videos with SLP annotations
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-primary" />
                Printable activity cards
              </li>
            </ul>
          </button>

          <button
            onClick={() => handleChoose("adult")}
            disabled={loading}
            className="group rounded-2xl border-2 border-border bg-card p-8 text-left transition-all hover:border-sage-500 hover:shadow-warm-md disabled:opacity-50"
          >
            <div className="w-14 h-14 rounded-xl bg-sage-100 flex items-center justify-center mb-4 group-hover:bg-sage-200 transition-colors">
              <UserRound className="w-7 h-7 text-sage-600" />
            </div>
            <h2 className="font-heading text-xl font-bold">
              My Loved One (Adult)
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Stroke recovery, swallowing difficulties, communication challenges,
              Parkinson&apos;s, TBI.
            </p>
            <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-sage-500" />
                IDDSI recipe library
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-sage-500" />
                Swallowing exercise videos
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3 h-3 text-sage-500" />
                Communication boards & tools
              </li>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
}
