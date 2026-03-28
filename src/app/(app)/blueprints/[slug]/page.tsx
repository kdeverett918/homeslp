export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Download, ExternalLink, Play, Stethoscope } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { createClient } from "@/lib/supabase/server";
import { BETA_MODE } from "@/lib/beta";
import { pediatricBlueprints } from "@/data/blueprints/pediatric";
import { adultBlueprints } from "@/data/blueprints/adult";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const all = [...pediatricBlueprints, ...adultBlueprints];
  const bp = all.find((b) => b.slug === slug);
  return { title: bp?.title ?? "Blueprint" };
}

export default async function BlueprintDetailPage({ params }: Props) {
  const { slug } = await params;
  const all = [...pediatricBlueprints, ...adultBlueprints];
  const bp = all.find((b) => b.slug === slug);

  if (!bp) notFound();

  if (!BETA_MODE) {
    const supabase = await createClient();
    if (!supabase) redirect("/login");
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect("/login");
  }

  return (
    <div className="max-w-3xl space-y-8">
      <Link href="/blueprints" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> All Blueprints
      </Link>

      {/* Header */}
      <FadeIn>
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${bp.path === "child" ? "bg-rose-100" : "bg-sage-100"}`}>
              <span className="font-heading font-bold text-sm">W{bp.weekNumber}</span>
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold sm:text-3xl">{bp.title}</h1>
              <p className="text-muted-foreground">{bp.subtitle}</p>
            </div>
          </div>
          <p className="text-muted-foreground">{bp.description}</p>
        </div>
      </FadeIn>

      {/* SLP Commentary */}
      <FadeIn>
        <section className="rounded-xl border bg-card p-6 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Expert SLP Commentary</p>
              <p className="text-xs text-muted-foreground">MA, CCC-SLP</p>
            </div>
          </div>
          <div className="text-sm leading-relaxed space-y-3">
            <p>{bp.commentary.textContent}</p>
            {bp.commentary.slpNote && (
              <div className="rounded-lg bg-primary/5 border border-primary/10 p-4">
                <p className="text-sm font-medium text-primary mb-1">SLP Tip</p>
                <p className="text-sm text-muted-foreground">{bp.commentary.slpNote}</p>
              </div>
            )}
          </div>
        </section>
      </FadeIn>

      {/* Video */}
      <FadeIn>
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-semibold flex items-center gap-2">
            <Play className="w-5 h-5" /> This Week&apos;s Video
          </h2>
          <div className="aspect-video rounded-xl overflow-hidden bg-muted">
            <iframe
              src={`https://www.youtube.com/embed/${bp.curatedMedia.youtubeVideoId}${bp.curatedMedia.startTimeSeconds ? `?start=${bp.curatedMedia.startTimeSeconds}` : ""}`}
              title={bp.curatedMedia.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="rounded-lg bg-muted/50 p-4 text-sm">
            <p className="font-medium mb-1">What to watch for:</p>
            <p className="text-muted-foreground">{bp.curatedMedia.slpAnnotation}</p>
          </div>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <ExternalLink className="w-3 h-3" />
            {bp.curatedMedia.title} by {bp.curatedMedia.channelName} on YouTube
          </p>
        </section>
      </FadeIn>

      {/* Refrigerator PDF */}
      <FadeIn>
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-lg font-semibold flex items-center gap-2">
            <Download className="w-5 h-5" /> Refrigerator Card
          </h2>
          <a href={bp.refrigeratorPdf.pdfUrl} download className="inline-flex items-center gap-1.5 rounded-lg border bg-background px-3 py-1.5 text-xs font-medium hover:bg-accent transition-colors">
            <Download className="w-3.5 h-3.5" /> Download PDF
          </a>
        </div>
        <p className="text-sm text-muted-foreground">Print this and stick it on your fridge for quick reference.</p>
        <div className="space-y-3">
          {bp.refrigeratorPdf.techniques.map((tech, i) => (
            <div key={i} className="rounded-xl border bg-card p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${bp.path === "child" ? "bg-rose-100 text-rose-600" : "bg-sage-100 text-sage-600"}`}>
                  {i + 1}
                </span>
                <p className="text-sm font-medium">{tech.activityContext}</p>
              </div>
              <p className="text-sm">{tech.technique}</p>
              <div className="rounded-lg bg-muted/50 p-3 text-sm">
                <p className="font-medium text-xs text-muted-foreground mb-1">Example:</p>
                <p className="text-sm italic">{tech.example}</p>
              </div>
              <p className="text-xs text-muted-foreground"><strong>Tip:</strong> {tech.parentTip}</p>
            </div>
          ))}
        </div>
      </section>
      </FadeIn>

      {/* Disclaimer */}
      <FadeIn>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
          <p className="font-medium">Educational Content Only</p>
          <p className="text-amber-700 mt-1">
            This content is for general educational purposes. It does not replace a professional evaluation or constitute medical advice.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
