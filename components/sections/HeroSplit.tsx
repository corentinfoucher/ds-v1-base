import { type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface HeroSplitCTA {
  label: string;
  href: string;
}

export interface HeroSplitProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaPrimary: HeroSplitCTA;
  ctaSecondary?: HeroSplitCTA;
  image?: ReactNode;
  imageAlt?: string;
  className?: string;
  style?: CSSProperties;
}

export function HeroSplit({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  image,
  imageAlt = "Image placeholder",
  className,
  style,
}: HeroSplitProps) {
  return (
    <section
      className={cn("w-full bg-background py-20 md:py-28", className)}
      style={style}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <div className="flex flex-col gap-6">
          {eyebrow && (
            <span className="inline-flex w-fit items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </span>
          )}

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={ctaPrimary.href}
              className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              {ctaPrimary.label}
            </a>
            {ctaSecondary && (
              <a
                href={ctaSecondary.href}
                className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-hover"
              >
                {ctaSecondary.label}
              </a>
            )}
          </div>
        </div>

        {/* Image */}
        {image ?? (
          <div
            className="aspect-[4/3] w-full rounded-xl border border-border bg-muted"
            role="img"
            aria-label={imageAlt}
          >
            <div className="flex h-full w-full items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="text-muted-foreground opacity-30"
              >
                <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="14" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 28l8-7 6 5 6-6 12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
