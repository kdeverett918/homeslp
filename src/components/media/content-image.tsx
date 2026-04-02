import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ContentImageAsset } from "@/types/content";

type ContentImageAspect = "card" | "hero" | "landscape";

const aspectClasses: Record<ContentImageAspect, string> = {
  card: "aspect-[6/5]",
  hero: "aspect-[4/3]",
  landscape: "aspect-[16/9]",
};

interface ContentImageProps {
  src?: string;
  alt?: string;
  image?: ContentImageAsset;
  aspect?: ContentImageAspect;
  sizes?: string;
  preload?: boolean;
  priority?: boolean;
  loading?: "lazy" | "eager";
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

export function ContentImage({
  src,
  alt,
  image,
  aspect = "card",
  sizes = "(max-width: 768px) 100vw, 40vw",
  preload = false,
  priority = false,
  loading,
  className,
  containerClassName,
  imageClassName,
}: ContentImageProps) {
  const resolvedSrc = image?.src ?? src;
  const resolvedAlt = image?.alt ?? alt;
  const resolvedPreload = image?.preload ?? preload;

  if (!resolvedSrc || !resolvedAlt) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.4rem] border border-border/70 bg-white/70 shadow-warm-sm",
        aspectClasses[aspect],
        containerClassName
      )}
    >
      <Image
        src={resolvedSrc}
        alt={resolvedAlt}
        fill
        sizes={sizes}
        preload={resolvedPreload || priority}
        loading={loading}
        className={cn("object-cover", className, imageClassName)}
      />
    </div>
  );
}
