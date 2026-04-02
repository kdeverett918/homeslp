"use client";

import { useSubscription } from "./SubscriptionProvider";
import { Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrialBanner() {
  const { isTrialing, daysLeftInTrial, isActive } = useSubscription();

  if (!isTrialing || isActive) return null;

  return (
    <div className="bg-gradient-to-r from-rose-50 to-sage-50 border border-rose-200/50 rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="font-medium text-sm">
            {daysLeftInTrial > 1
              ? `${daysLeftInTrial} days left in your free trial`
              : daysLeftInTrial === 1
                ? "Last day of your free trial!"
                : "Your trial has ended"}
          </p>
          <p className="text-xs text-muted-foreground">
            Upgrade to keep access to all content
          </p>
        </div>
      </div>
      <Button size="sm" className="gap-1.5">
        <Sparkles className="w-4 h-4" />
        Upgrade Now
      </Button>
    </div>
  );
}
