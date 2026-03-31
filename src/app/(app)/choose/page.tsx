"use client";

import { useRouter } from "next/navigation";
import { usePath } from "@/components/path/PathProvider";
import { ArrowRight, Baby, CheckCircle2, Heart } from "lucide-react";
import { useState } from "react";

export default function ChoosePath() {
  const router = useRouter();
  const { setPath } = usePath();
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    setLoading(true);
    await setPath("child");
    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="guide-surface max-w-3xl p-8 sm:p-10">
        <div className="relative z-10 space-y-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-primary/20 bg-primary/12 text-primary shadow-warm-sm">
            <Baby className="h-8 w-8" />
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              Set up your child&apos;s guide
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">
              HomeSLP is now focused entirely on children. Continue to unlock milestone
              guidance, home activities, feeding watch-fors, language support, and parent
              coaching built for everyday routines.
            </p>
          </div>

          <div className="grid gap-3 text-left sm:grid-cols-3">
            {[
              "Research-backed milestone guidance",
              "Daily parent tips and weekly blueprints",
              "Tools for speech, language, play, feeding, and regulation",
            ].map((item) => (
              <div key={item} className="soft-panel flex items-start gap-3 p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm leading-7 text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleContinue}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm-sm transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            <Heart className="h-4 w-4 fill-current" />
            Continue to child dashboard
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
