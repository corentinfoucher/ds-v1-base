import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface HeroCTA {
  label: string;
  href: string;
}

export interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaPrimary: HeroCTA;
  ctaSecondary?: HeroCTA;
  inverted?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Hero({
  eyebrow,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  inverted = false,
  className,
  style,
}: HeroProps) {
  return (
    <section
      className={cn("w-full py-24 md:py-32", className)}
      style={{
        background: inverted ? "var(--surface-inverse)" : "var(--background)",
        ...style,
      }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        {eyebrow && (
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={
              inverted
                ? {
                    border: "1px solid var(--surface-inverse-border)",
                    color: "var(--surface-inverse-muted)",
                  }
                : {
                    border: "1px solid var(--border)",
                    background: "var(--muted)",
                    color: "var(--muted-foreground)",
                  }
            }
          >
            {eyebrow}
          </span>
        )}

        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          style={{ color: inverted ? "#FFFFFF" : "var(--foreground)" }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="max-w-xl text-lg leading-relaxed"
            style={{
              color: inverted
                ? "var(--surface-inverse-muted)"
                : "var(--muted-foreground)",
            }}
          >
            {subtitle}
          </p>
        )}

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href={ctaPrimary.href}
            className="rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            {ctaPrimary.label}
          </a>
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              className="rounded-md px-5 py-2.5 text-sm font-medium transition-colors"
              style={
                inverted
                  ? {
                      border: "1px solid var(--surface-inverse-border)",
                      color: "#FFFFFF",
                    }
                  : {
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }
              }
            >
              {ctaSecondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
