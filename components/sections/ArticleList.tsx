import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ArticleListItem {
  category?: string;
  title: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  author?: string;
  href?: string;
  featured?: boolean;
}

export interface ArticleListProps {
  eyebrow?: string;
  title?: string;
  articles: ArticleListItem[];
  /** Show top article as featured full-width card */
  featuredFirst?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function ArticleList({
  eyebrow,
  title,
  articles,
  featuredFirst = false,
  className,
  style,
}: ArticleListProps) {
  const featured = featuredFirst ? articles[0] : null;
  const list = featuredFirst ? articles.slice(1) : articles;

  return (
    <section
      className={cn("w-full py-16 md:py-20", className)}
      style={{ background: "var(--background)", ...style }}
    >
      <div className="mx-auto max-w-5xl px-6">
        {(eyebrow || title) && (
          <div className="mb-10 flex flex-col gap-2">
            {eyebrow && (
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {eyebrow}
              </span>
            )}
            {title && (
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h1>
            )}
          </div>
        )}

        {/* Featured article */}
        {featured && (
          <a
            href={featured.href ?? "#"}
            className="group mb-8 flex flex-col overflow-hidden rounded-xl"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-3)",
              textDecoration: "none",
            }}
          >
            {/* Image placeholder */}
            <div
              className="aspect-[21/9] w-full"
              style={{ background: "var(--surface-2)" }}
            />
            <div className="flex flex-col gap-3 p-7">
              {featured.category && (
                <span className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--primary)" }}>
                  {featured.category}
                </span>
              )}
              <h2 className="text-2xl font-bold tracking-tight text-foreground transition-opacity group-hover:opacity-70 sm:text-3xl">
                {featured.title}
              </h2>
              {featured.excerpt && (
                <p className="text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
              )}
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                {featured.author && <span>{featured.author}</span>}
                {featured.author && featured.date && <span style={{ opacity: 0.4 }}>·</span>}
                {featured.date && <span>{featured.date}</span>}
                {featured.readTime && <span style={{ opacity: 0.4 }}>·</span>}
                {featured.readTime && <span>{featured.readTime}</span>}
              </div>
            </div>
          </a>
        )}

        {/* List */}
        <div className="flex flex-col" style={{ borderTop: "1px solid var(--border)" }}>
          {list.map((article, i) => (
            <a
              key={i}
              href={article.href ?? "#"}
              className="group flex items-start gap-6 py-6"
              style={{ borderBottom: "1px solid var(--border)", textDecoration: "none" }}
            >
              {/* Thumbnail placeholder */}
              <div
                className="hidden h-16 w-24 shrink-0 rounded-lg sm:block"
                style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
              />
              <div className="flex flex-1 flex-col gap-2">
                {article.category && (
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--primary)" }}
                  >
                    {article.category}
                  </span>
                )}
                <h3 className="text-sm font-semibold text-foreground transition-opacity group-hover:opacity-60">
                  {article.title}
                </h3>
                {article.excerpt && (
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </p>
                )}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  {article.author && <span>{article.author}</span>}
                  {article.author && article.date && <span style={{ opacity: 0.4 }}>·</span>}
                  {article.date && <span>{article.date}</span>}
                  {article.readTime && (
                    <>
                      <span style={{ opacity: 0.4 }}>·</span>
                      <span>{article.readTime}</span>
                    </>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
