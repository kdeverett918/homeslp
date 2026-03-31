"use client";

import { useState } from "react";
import { Newspaper, Clock, ChevronRight, Sparkles, Search } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion";
import { blogArticles, blogCategories, type BlogCategory } from "@/data/blog";

const filterOptions = ["All", ...blogCategories.map((c) => c.label)] as const;
type FilterOption = (typeof filterOptions)[number];

function filterToCategory(filter: FilterOption): BlogCategory | null {
  const found = blogCategories.find((c) => c.label === filter);
  return found?.value ?? null;
}

const categoryStyle: Record<BlogCategory, { bg: string; text: string }> = {
  "speech-development": { bg: "bg-rose-100", text: "text-rose-700" },
  "language-development": { bg: "bg-blue-100", text: "text-blue-700" },
  "feeding-swallowing": { bg: "bg-amber-100", text: "text-amber-700" },
  "parent-tips": { bg: "bg-sage-100", text: "text-sage-700" },
  "myths-facts": { bg: "bg-purple-100", text: "text-purple-700" },
  milestones: { bg: "bg-orange-100", text: "text-orange-700" },
};

export default function BlogPage() {
  const [filter, setFilter] = useState<FilterOption>("All");
  const [search, setSearch] = useState("");

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
        a.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return (
    <div className="max-w-5xl space-y-6">
      <FadeIn>
        <PageHeader
          icon={Newspaper}
          title="Parent Articles"
          subtitle="Evidence-based articles to help you understand your child's speech and language development. Download or print any article to keep."
        />
      </FadeIn>

      {/* Fun fact banner */}
      <FadeIn delay={0.05}>
        <div className="rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/20 border border-primary/10 p-4 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-foreground/80">
            <span className="font-semibold">Did you know?</span>{" "}
            {blogArticles[Math.floor(Math.random() * blogArticles.length)]?.funFacts[0]?.text ??
              "Babies can distinguish all speech sounds in all languages until about 10 months of age!"}
          </p>
        </div>
      </FadeIn>

      {/* Search */}
      <FadeIn delay={0.1}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border bg-card pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          />
        </div>
      </FadeIn>

      {/* Category filters */}
      <FadeIn delay={0.15}>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors whitespace-nowrap ${
                filter === option
                  ? "bg-primary text-primary-foreground shadow-warm-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {option !== "All" && (
                <span className="mr-1.5">
                  {blogCategories.find((c) => c.label === option)?.emoji}
                </span>
              )}
              {option}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Results count */}
      <FadeIn delay={0.2}>
        <p className="text-sm text-muted-foreground">
          {filtered.length} article{filtered.length !== 1 ? "s" : ""}
          {category ? ` in ${filter}` : ""}
          {search.trim() ? ` matching "${search}"` : ""}
        </p>
      </FadeIn>

      {/* Article grid */}
      {filtered.length === 0 ? (
        <FadeIn delay={0.25}>
          <div className="rounded-xl border bg-card p-8 text-center">
            <Newspaper className="mx-auto h-12 w-12 text-muted-foreground/40" />
            <h2 className="mt-4 font-heading text-lg font-bold">No articles found</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
          </div>
        </FadeIn>
      ) : (
        <StaggerChildren className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => {
            const style = categoryStyle[article.category];
            const catLabel = blogCategories.find(
              (c) => c.value === article.category
            )?.label;
            return (
              <StaggerItem key={article.id}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="group flex h-full flex-col rounded-xl border bg-card p-5 shadow-warm-sm transition-all hover:shadow-warm-md hover:border-primary/20"
                >
                  {/* Hero emoji */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-3xl">{article.heroEmoji}</span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTimeMinutes} min read
                    </div>
                  </div>

                  {/* Category badge */}
                  <span
                    className={`inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-medium mb-2 ${style.bg} ${style.text}`}
                  >
                    {catLabel}
                  </span>

                  {/* Title */}
                  <h2 className="font-heading text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                    {article.subtitle}
                  </p>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Read article
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
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
