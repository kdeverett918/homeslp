"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  Clock,
  Newspaper,
  Search,
  Sparkles,
} from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { FilterPills } from "@/components/ui/filter-pills";
import {
  blogArticles,
  blogCategories,
  blogCategoryStyle,
  type BlogCategory,
} from "@/data/blog";

const filterOptions = ["All", ...blogCategories.map((c) => c.label)] as const;
type FilterOption = (typeof filterOptions)[number];

function filterToCategory(filter: FilterOption): BlogCategory | null {
  const found = blogCategories.find((c) => c.label === filter);
  return found?.value ?? null;
}

export default function BlogPage() {
  const [filter, setFilter] = useState<FilterOption>("All");
  const [search, setSearch] = useState("");
  const [randomFact] = useState(() => {
    const article =
      blogArticles[Math.floor(Math.random() * blogArticles.length)];
    return (
      article?.funFacts[0]?.text ??
      "Babies can distinguish all speech sounds in all languages until about 10 months of age!"
    );
  });

  const category = filterToCategory(filter);
  let filtered = category
    ? blogArticles.filter((a) => a.category === category)
    : blogArticles;

  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.subtitle.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }

  return (
    <div className="max-w-5xl space-y-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Dashboard
      </Link>

      {/* Hero Section */}
      <FadeIn>
        <div className="guide-surface p-6 sm:p-8">
          <div className="relative z-10 space-y-3">
            <div className="section-kicker">Parent Articles</div>
            <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Understanding Your Child&apos;s Development
            </h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Evidence-based articles written by SLPs to help you understand
              speech, language, and feeding milestones. Print or save any
              article.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
              <Newspaper className="w-4 h-4" />
              <span>{blogArticles.length} articles</span>
              <span className="text-border">|</span>
              <BookOpen className="w-4 h-4" />
              <span>Evidence-based</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Fun fact banner */}
      <FadeIn delay={0.05}>
        <div className="field-note p-4 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Did you know?
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {randomFact}
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Search */}
      <FadeIn delay={0.1}>
        <search>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              aria-label="Search articles"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border/70 bg-card pl-10 pr-4 py-2.5 text-sm shadow-warm-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
            />
          </div>
        </search>
      </FadeIn>

      {/* Category filters */}
      <FadeIn delay={0.15}>
        <FilterPills
          options={filterOptions}
          value={filter}
          onChange={setFilter}
          formatLabel={(opt) => {
            const cat = blogCategories.find((c) => c.label === opt);
            return cat ? `${cat.emoji} ${opt}` : opt;
          }}
        />
      </FadeIn>

      {/* Results count */}
      <FadeIn delay={0.2}>
        <p className="text-xs text-muted-foreground tracking-wide">
          Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          {category ? ` in ${filter}` : ""}
          {search.trim() ? ` matching "${search}"` : ""}
        </p>
      </FadeIn>

      {/* Article grid */}
      {filtered.length === 0 ? (
        <FadeIn delay={0.25}>
          <div className="soft-panel p-8 text-center">
            <Newspaper className="mx-auto h-12 w-12 text-muted-foreground/30" />
            <h2 className="mt-4 font-heading text-lg font-bold">
              No articles found
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your search or filter to find what you&apos;re
              looking for.
            </p>
          </div>
        </FadeIn>
      ) : (
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => {
            const style = blogCategoryStyle[article.category];
            const catLabel = blogCategories.find(
              (c) => c.value === article.category,
            )?.label;
            return (
              <StaggerItem key={article.id}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group card-lift flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5 shadow-warm-sm"
                >
                  {/* Emoji in a colored circle */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-gradient-to-br from-white to-muted/50 text-2xl shadow-warm-sm">
                      {article.heroEmoji}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTimeMinutes} min
                    </div>
                  </div>

                  {/* Category badge */}
                  <span
                    className={`inline-block self-start rounded-full px-2.5 py-0.5 text-[11px] font-semibold mb-2 ${style.bg} ${style.text}`}
                  >
                    {catLabel}
                  </span>

                  {/* Title and subtitle */}
                  <h2 className="font-heading text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {article.subtitle}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/50 bg-muted/50 px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <div className="mt-auto pt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read article
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      )}
    </div>
  );
}
