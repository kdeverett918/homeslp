export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
};

export default function CommunityPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          Community
        </h1>
        <p className="mt-1 text-muted-foreground">
          Connect with other parents and caregivers on the same journey.
        </p>
      </div>

      <div className="rounded-xl border-2 border-dashed bg-muted/30 p-12 text-center space-y-4">
        <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto" />
        <h2 className="font-heading text-lg font-semibold">Coming Soon</h2>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto">
          The community forum is being built. Soon you&apos;ll be able to share
          wins, ask questions, and connect with others who understand.
        </p>
      </div>

      <p className="text-xs text-muted-foreground italic text-center">
        Posts in the community are from other members, not medical professionals.
        Never rely on community advice for medical decisions.
      </p>
    </div>
  );
}
