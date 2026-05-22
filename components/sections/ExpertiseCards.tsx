import { type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ExpertiseCard {
  icon?: ReactNode;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ExpertiseCardsProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  cards: ExpertiseCard[];
  className?: string;
  style?: CSSProperties;
}

export function ExpertiseCards({
  eyebrow,
  title,
  subtitle,
  cards,
  className,
  style,
}: ExpertiseCardsProps) {
  return (
    <section
      className={cn("w-full py-20 md:py-24", className)}
      style={{ background: "var(--background)", ...style }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || subtitle) && (
          <div className="mb-14 flex flex-col gap-3">
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
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <a
              key={i}
              href={card.ctaHref ?? "#"}
              className="group flex flex-col gap-5 rounded-xl p-7 transition-shadow duration-150 hover:shadow-[var(--shadow-5)]"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-3)",
                textDecoration: "none",
              }}
            >
              {/* Icon — top left */}
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-150"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                }}
              >
                {card.icon ?? (
                  <span className="font-mono text-sm font-bold" style={{ opacity: 0.4 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </div>

              {/* CTA — glisse vers le haut au hover */}
              {card.ctaLabel && (
                <div className="flex translate-y-1 items-center gap-1.5 text-xs font-medium text-foreground opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
                  {card.ctaLabel}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" />
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
