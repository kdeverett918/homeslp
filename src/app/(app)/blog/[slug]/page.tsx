"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Info,
  Lightbulb,
  Newspaper,
  Share2,
  Sparkles,
} from "lucide-react";
import { ContentImage } from "@/components/media/content-image";
import { ReadAloudButton } from "@/components/media/read-aloud-button";
import { FadeIn } from "@/components/motion";
import { PrintControls } from "@/components/ui/print-controls";
import { blogArticles, blogCategories } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

const calloutConfig = {
  tip: {
    icon: Lightbulb,
    bg: "bg-sage-50 border-sage-200",
    text: "text-sage-800",
    label: "Pro Tip",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-800",
    label: "Important",
  },
  note: {
    icon: Info,
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-800",
    label: "Good to Know",
  },
  "fun-fact": {
    icon: Sparkles,
    bg: "bg-purple-50 border-purple-200",
    text: "text-purple-800",
    label: "Fun Fact",
  },
};

export default function BlogArticlePage({ params }: Props) {
  const { slug } = use(params);
  const [copied, setCopied] = useState(false);
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-2xl space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" /> All Articles
        </Link>
        <div className="rounded-xl border bg-card p-8 text-center">
          <Newspaper className="mx-auto h-12 w-12 text-muted-foreground/40" />
          <h1 className="mt-4 font-heading text-xl font-bold">
            Article Not Found
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            The article you are looking for does not exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  const catLabel = blogCategories.find(
    (c) => c.value === article.category,
  )?.label;

  // Get related articles (same category, excluding current)
  const related = blogArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.subtitle,
          url: window.location.href,
        });
      } catch {
        // User cancelled share
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Clipboard API not available
      }
    }
  };

  return (
    <div className="max-w-2xl space-y-6">
      {/* Top bar */}
      <FadeIn>
        <div className="flex items-center justify-between gap-4 print:hidden">
          <Link
            href="/blog"
            className="trust-pill text-sm hover:border-primary/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="trust-pill text-sm hover:border-primary/30 transition-colors"
              aria-label="Share article"
            >
              {copied ? (
                <CheckCircle2 className="w-4 h-4 text-primary" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">
                {copied ? "Copied!" : "Share"}
              </span>
            </button>
            <PrintControls targetId="blog-article-print" />
          </div>
        </div>
      </FadeIn>

      {/* Article content */}
      <FadeIn delay={0.1}>
        <article
          id="blog-article-print"
          className="space-y-8 print:p-0"
        >
          {/* Header */}
          <header className="guide-surface p-6 sm:p-8 space-y-4 print:block print:border-0 print:shadow-none print:bg-transparent">
            <div className="relative z-10 grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] md:items-center">
              <div className="space-y-4 text-center md:text-left">
                <div className="section-kicker mx-auto md:mx-0">{catLabel}</div>
                <span className="text-5xl block">{article.heroEmoji}</span>
                <h1 className="font-heading text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                  {article.title}
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
                  {article.subtitle}
                </p>
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-1 md:justify-start">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTimeMinutes} min read
                  </span>
                  <span className="text-border">|</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.publishedDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-1.5 pt-1 md:justify-start">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="trust-pill text-[11px] py-0.5 px-2.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {article.narration && (
                  <div className="flex justify-center pt-2 print:hidden md:justify-start">
                    <ReadAloudButton narration={article.narration} />
                  </div>
                )}
              </div>
              {article.heroImage && (
                <ContentImage
                  image={article.heroImage}
                  aspect="hero"
                  priority
                  sizes="(max-width: 768px) 100vw, 38vw"
                  containerClassName="print:hidden"
                />
              )}
            </div>
          </header>

          {/* Introduction */}
          <div className="text-sm sm:text-base leading-7 text-foreground/85">
            {article.introduction}
          </div>

          {/* Fun facts banner */}
          {article.funFacts.length > 0 && (
            <div className="field-note p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Quick Fun Facts
                </h2>
              </div>
              <ul className="space-y-2.5">
                {article.funFacts.map((fact, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                  >
                    <span className="text-lg shrink-0 leading-5">
                      {fact.emoji}
                    </span>
                    <span>{fact.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sections */}
          {article.sections.map((section, i) => (
            <div key={i} className="space-y-3">
              <h2 className="font-heading text-lg font-semibold pl-3 border-l-2 border-primary/40">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base leading-7 text-foreground/85">
                {section.content}
              </p>
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2 text-sm sm:text-base pl-1">
                  {section.bulletPoints.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.callout && (
                <div
                  className={`rounded-2xl border p-4 sm:p-5 ${calloutConfig[section.callout.type].bg}`}
                >
                  <div className="flex items-start gap-2.5">
                    {(() => {
                      const Icon =
                        calloutConfig[section.callout.type].icon;
                      return (
                        <Icon
                          className={`mt-0.5 h-4 w-4 shrink-0 ${calloutConfig[section.callout.type].text}`}
                        />
                      );
                    })()}
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-wide ${calloutConfig[section.callout.type].text}`}
                      >
                        {calloutConfig[section.callout.type].label}
                      </p>
                      <p
                        className={`mt-1 text-sm ${calloutConfig[section.callout.type].text}`}
                      >
                        {section.callout.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Key Takeaways */}
          {article.keyTakeaways.length > 0 && (
            <div className="soft-panel p-5 sm:p-6 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Takeaways
                </h2>
              </div>
              <ul className="space-y-2.5">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sources */}
          {article.sources.length > 0 && (
            <details className="border-t pt-5 group">
              <summary className="flex items-center gap-2 cursor-pointer text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                <BookOpen className="w-4 h-4" />
                Evidence & Sources ({article.sources.length})
              </summary>
              <div className="mt-3">
                <ol className="space-y-1.5 text-xs text-muted-foreground list-decimal list-inside">
                  {article.sources.map((source, i) => (
                    <li key={i}>
                      <span className="font-medium">{source.label}</span>
                      {" — "}
                      {source.detail}
                    </li>
                  ))}
                </ol>
              </div>
            </details>
          )}

          {/* Disclaimer */}
          <div className="border-t pt-4 space-y-2">
            <p className="text-xs text-muted-foreground italic text-center">
              {article.disclaimer}
            </p>
            <p className="text-xs text-muted-foreground text-center">
              HomeSLP — homeslp.onrender.com
            </p>
          </div>
        </article>
      </FadeIn>

      {/* Related articles */}
      {related.length > 0 && (
        <FadeIn delay={0.2}>
          <div className="space-y-4 print:hidden">
            <h2 className="font-heading text-lg font-semibold">
              Related Articles
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
                  className="group card-lift rounded-2xl border border-border/70 bg-card p-4 shadow-warm-sm"
                >
                  <span className="text-2xl">{rel.heroEmoji}</span>
                  <h3 className="mt-2 font-heading text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {rel.readingTimeMinutes} min read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}
