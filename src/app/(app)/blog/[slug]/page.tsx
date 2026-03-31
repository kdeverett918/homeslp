"use client";

import { use, useState } from "react";
import { FadeIn } from "@/components/motion";
import { PrintControls } from "@/components/ui/print-controls";
import { blogArticles, blogCategories, blogCategoryStyle } from "@/data/blog";
import Link from "next/link";
import {
  ArrowLeft,
  Newspaper,
  Clock,
  Calendar,
  Lightbulb,
  AlertTriangle,
  Info,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Share2,
} from "lucide-react";

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
    (c) => c.value === article.category
  )?.label;
  const style = blogCategoryStyle[article.category];

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
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-accent transition-colors"
              aria-label="Share article"
            >
              {copied ? (
                <CheckCircle2 className="w-4 h-4 text-primary" />
              ) : (
                <Share2 className="w-4 h-4" />
              )}
              <span className="hidden sm:inline">{copied ? "Copied!" : "Share"}</span>
            </button>
            <PrintControls targetId="blog-article-print" />
          </div>
        </div>
      </FadeIn>

      {/* Article content */}
      <FadeIn delay={0.1}>
        <article
          id="blog-article-print"
          className="rounded-2xl border bg-card p-6 sm:p-8 space-y-6 print:border-0 print:shadow-none print:p-0"
        >
          {/* Header */}
          <header className="text-center border-b pb-6 space-y-3 print:block">
            <p className="text-xs font-medium text-primary tracking-wide uppercase print:text-black">
              HomeSLP
            </p>
            <span className="text-5xl block">{article.heroEmoji}</span>
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${style.bg} ${style.text}`}
            >
              {catLabel}
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold leading-tight">
              {article.title}
            </h1>
            <p className="text-muted-foreground">{article.subtitle}</p>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTimeMinutes} min read
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(article.publishedDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-1.5 pt-1">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Introduction */}
          <div className="text-sm sm:text-base leading-relaxed text-foreground/90">
            {article.introduction}
          </div>

          {/* Fun facts banner */}
          {article.funFacts.length > 0 && (
            <div className="rounded-xl bg-gradient-to-br from-accent/20 via-primary/5 to-secondary/10 border border-accent/20 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="font-heading text-sm font-bold uppercase tracking-wide">
                  Quick Fun Facts
                </h2>
              </div>
              <ul className="space-y-2">
                {article.funFacts.map((fact, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
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
              <h2 className="font-heading text-lg font-semibold flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/85">
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
                  className={`rounded-lg border p-4 ${calloutConfig[section.callout.type].bg}`}
                >
                  <div className="flex items-start gap-2.5">
                    {(() => {
                      const Icon = calloutConfig[section.callout.type].icon;
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
            <div className="rounded-xl bg-primary/5 border border-primary/10 p-5 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h2 className="font-heading text-sm font-bold uppercase tracking-wide">
                  Key Takeaways
                </h2>
              </div>
              <ul className="space-y-2">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sources */}
          {article.sources.length > 0 && (
            <div className="space-y-3 border-t pt-5">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-muted-foreground" />
                <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Evidence & Sources
                </h2>
              </div>
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
                  className="group rounded-xl border bg-card p-4 shadow-warm-sm transition-all hover:shadow-warm-md hover:border-primary/20"
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
