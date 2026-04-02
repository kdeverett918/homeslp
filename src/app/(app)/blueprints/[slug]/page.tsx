export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, Download, ExternalLink, Play, Stethoscope } from "lucide-react";
import { ContentImage } from "@/components/media/content-image";
import { ReadAloudButton } from "@/components/media/read-aloud-button";
import { FadeIn } from "@/components/motion";
import { getBlueprintMedia } from "@/data/media";
import { pediatricBlueprints } from "@/data/blueprints/pediatric";
import { getBetaModeServer } from "@/lib/beta-server";
import { createClient } from "@/lib/supabase/server";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bp = pediatricBlueprints.find((item) => item.slug === slug);
  return { title: bp?.title ?? "Blueprint" };
}

export default async function BlueprintDetailPage({ params }: Props) {
  const betaMode = await getBetaModeServer();
  const { slug } = await params;
  const bp = pediatricBlueprints.find((item) => item.slug === slug);
  const media = bp ? getBlueprintMedia(bp.slug) : null;

  if (!bp) notFound();

  if (!betaMode) {
    const supabase = await createClient();
    if (!supabase) redirect("/login");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect("/login");
  }

  return (
    <div className="max-w-3xl space-y-8">
      <Link
        href="/blueprints"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All Blueprints
      </Link>

      <FadeIn>
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100">
              <span className="font-heading text-sm font-bold">W{bp.weekNumber}</span>
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold sm:text-3xl">{bp.title}</h1>
              <p className="text-muted-foreground">{bp.subtitle}</p>
            </div>
          </div>

          <p className="text-muted-foreground">{bp.description}</p>

          {media?.image ? (
            <ContentImage
              src={media.image.src}
              alt={media.image.alt}
              aspect="landscape"
              sizes="(max-width: 1280px) 100vw, 55vw"
              className="object-cover"
            />
          ) : null}
        </div>
      </FadeIn>

      <FadeIn>
        <section className="rounded-xl border bg-card p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Stethoscope className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Expert SLP Commentary</p>
                <p className="text-xs text-muted-foreground">MA, CCC-SLP</p>
              </div>
            </div>
            <ReadAloudButton asset={media?.narration ?? null} compact />
          </div>

          <div className="space-y-3 text-sm leading-relaxed">
            <p>{bp.commentary.textContent}</p>
            {bp.commentary.slpNote ? (
              <div className="rounded-lg border border-primary/10 bg-primary/5 p-4">
                <p className="mb-1 text-sm font-medium text-primary">SLP Tip</p>
                <p className="text-sm text-muted-foreground">{bp.commentary.slpNote}</p>
              </div>
            ) : null}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="space-y-4">
          <h2 className="flex items-center gap-2 font-heading text-lg font-semibold">
            <Play className="h-5 w-5" /> This Week&apos;s Video
          </h2>
          <div className="aspect-video overflow-hidden rounded-xl bg-muted">
            <iframe
              src={`https://www.youtube.com/embed/${bp.curatedMedia.youtubeVideoId}${bp.curatedMedia.startTimeSeconds ? `?start=${bp.curatedMedia.startTimeSeconds}` : ""}`}
              title={bp.curatedMedia.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <div className="rounded-lg bg-muted/50 p-4 text-sm">
            <p className="mb-1 font-medium">What to watch for:</p>
            <p className="text-muted-foreground">{bp.curatedMedia.slpAnnotation}</p>
          </div>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <ExternalLink className="h-3 w-3" />
            {bp.curatedMedia.title} by {bp.curatedMedia.channelName} on YouTube
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center gap-2 font-heading text-lg font-semibold">
              <Download className="h-5 w-5" /> Refrigerator Card
            </h2>
            <a
              href={bp.refrigeratorPdf.pdfUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-lg border bg-background px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent"
            >
              <Download className="h-3.5 w-3.5" /> Download PDF
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            Print this and stick it on your fridge for quick reference.
          </p>
          <div className="space-y-3">
            {bp.refrigeratorPdf.techniques.map((technique, index) => (
              <div key={index} className="space-y-2 rounded-xl border bg-card p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-600">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium">{technique.activityContext}</p>
                </div>
                <p className="text-sm">{technique.technique}</p>
                <div className="rounded-lg bg-muted/50 p-3 text-sm">
                  <p className="mb-1 text-xs font-medium text-muted-foreground">Example:</p>
                  <p className="text-sm italic">{technique.example}</p>
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Tip:</strong> {technique.parentTip}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <p className="font-medium">Educational Content Only</p>
          <p className="mt-1 text-amber-700">
            This content is for general educational purposes. It does not replace a professional
            evaluation or constitute medical advice.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
