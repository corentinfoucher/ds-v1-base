import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ArticleHeroProps {
  category?: string;
  title: string;
  subtitle?: string;
  author?: string;
  date?: string;
  readTime?: string;
  image?: ReactNode;
  backLabel?: string;
  backHref?: string;
  /** Full article body rendered below the hero */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function ArticleHero({
  category,
  title,
  subtitle,
  author,
  date,
  readTime,
  image,
  backLabel,
  backHref,
  children,
  className,
  style,
}: ArticleHeroProps) {
  return (
    <article
      className={cn("w-full", className)}
      style={{ background: "var(--background)", ...style }}
    >
      {/* Hero */}
      <div className="mx-auto max-w-3xl px-6 pt-12 pb-0">
        {backLabel && (
          <a
            href={backHref ?? "#"}
            className="mb-8 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-opacity hover:opacity-70"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2L4 6l4 4" />
            </svg>
            {backLabel}
          </a>
        )}

        <div className="flex flex-col gap-5">
          {category && (
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--primary)" }}
            >
              {category}
            </span>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
          )}

          {/* Meta */}
          {(author || date || readTime) && (
            <div
              className="flex items-center gap-3 border-t pt-5 text-sm text-muted-foreground"
              style={{ borderColor: "var(--border)" }}
            >
              {author && (
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold"
                    style={{ background: "var(--surface-2)", color: "var(--foreground)" }}
                  >
                    {author.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium text-foreground">{author}</span>
                </div>
              )}
              {author && date && <span style={{ opacity: 0.3 }}>·</span>}
              {date && <span>{date}</span>}
              {readTime && (
                <>
                  <span style={{ opacity: 0.3 }}>·</span>
                  <span>{readTime} de lecture</span>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Cover image */}
      <div className="mx-auto mt-8 max-w-5xl px-6">
        <div
          className="aspect-[21/9] w-full overflow-hidden rounded-xl"
          style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
        >
          {image ?? (
            <div className="flex h-full w-full items-center justify-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                style={{ color: "var(--muted-foreground)", opacity: 0.25 }}
              >
                <rect x="3" y="3" width="30" height="30" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 26l9-8 6 5 6-7 9 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Article body */}
      {children && (
        <div
          className="mx-auto max-w-3xl px-6 py-12"
          style={{
            color: "var(--foreground)",
            lineHeight: "1.8",
            fontSize: "16px",
          }}
        >
          {children}
        </div>
      )}
    </article>
  );
}
