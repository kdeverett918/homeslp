import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Lock, Play } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { BETA_MODE } from "@/lib/beta";
import { pediatricBlueprints } from "@/data/blueprints/pediatric";
import { adultBlueprints } from "@/data/blueprints/adult";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Weekly Blueprints",
};

export default async function BlueprintsPage() {
  let activePath = "child";
  let subStatus: string | null = "active";

  if (BETA_MODE) {
    const cookieStore = await cookies();
    activePath = cookieStore.get("homeslp-beta-path")?.value ?? "child";
  } else {
    const supabase = await createClient();
    if (!supabase) redirect("/login");

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect("/login");

    const { data: profile } = await supabase
      .from("profiles")
      .select("active_path")
      .eq("id", user.id)
      .single();
    activePath = profile?.active_path ?? "child";

    const { data: subscription } = await supabase
      .from("subscriptions")
      .select("status")
      .eq("user_id", user.id)
      .single();
    subStatus = subscription?.status ?? null;
  }

  const isChild = activePath === "child";
  const blueprints = isChild ? pediatricBlueprints : adultBlueprints;
  const isPaid = BETA_MODE || subStatus === "active" || subStatus === "trialing";
  const isFullAccess = BETA_MODE || subStatus === "active";

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold">Weekly Blueprints</h1>
        <p className="mt-1 text-muted-foreground">
          {isChild
            ? "Your 8-week speech development roadmap"
            : "Your 8-week caregiver support roadmap"}
        </p>
      </div>

      <div className="space-y-4">
        {blueprints.map((bp) => {
          const isAccessible = BETA_MODE || (bp.accessTier === "trial" ? isPaid : bp.accessTier === "paid" ? isFullAccess : true);

          return (
            <Link
              key={bp.id}
              href={isAccessible ? `/blueprints/${bp.slug}` : "#"}
              className={`block rounded-xl border bg-card p-6 transition-all ${isAccessible ? "hover:shadow-warm-md hover:border-primary/30" : "opacity-60 cursor-default"}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${isChild ? "bg-rose-100" : "bg-sage-100"}`}>
                  <span className="font-heading text-lg font-bold">W{bp.weekNumber}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h2 className="font-heading text-lg font-semibold">{bp.title}</h2>
                    {!isAccessible && <Lock className="w-4 h-4 text-muted-foreground shrink-0" />}
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">{bp.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-2">{bp.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Play className="w-3.5 h-3.5" /> Video + Commentary</span>
                    <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> Printable PDF</span>
                    <span>{bp.estimatedMinutes} min</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
