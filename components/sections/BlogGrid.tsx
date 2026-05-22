import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface BlogArticle {
  category?: string;
  title: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  href?: string;
  image?: ReactNode;
}

export interface BlogGridProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  articles: BlogArticle[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  style?: CSSProperties;
}

export function BlogGrid({
  eyebrow,
  title,
  subtitle,
  articles,
  ctaLabel,
  ctaHref,
  className,
  style,
}: BlogGridProps) {
  return (
    <section
      className={cn("w-full py-20 md:py-24", className)}
      style={{ background: "var(--background)", ...style }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || subtitle) && (
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2">
              {eyebrow && (
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {eyebrow}
                </span>
              )}
              {title && (
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
            {ctaLabel && (
              <a
                href={ctaHref ?? "#"}
                className="shrink-0 text-sm font-medium text-foreground underline underline-offset-4 transition-opacity hover:opacity-60"
              >
                {ctaLabel} →
              </a>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.href ?? "#"}
              className="group flex flex-col overflow-hidden rounded-xl"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-2)",
                textDecoration: "none",
              }}
            >
              {/* Image slot */}
              <div
                className="aspect-[16/9] w-full overflow-hidden"
                style={{ background: "var(--surface-2)" }}
              >
                {article.image ?? (
                  <div className="flex h-full w-full items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      style={{ color: "var(--muted-foreground)", opacity: 0.3 }}
                    >
                      <rect x="2" y="2" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="9.5" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M2 19l7-6 5 4 4-4 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                {article.category && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {article.category}
                  </span>
                )}
                <h3 className="text-sm font-semibold leading-snug text-foreground transition-opacity group-hover:opacity-70">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                )}
                {(article.date || article.readTime) && (
                  <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                    {article.date && <span>{article.date}</span>}
                    {article.date && article.readTime && (
                      <span style={{ opacity: 0.4 }}>·</span>
                    )}
                    {article.readTime && <span>{article.readTime}</span>}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
