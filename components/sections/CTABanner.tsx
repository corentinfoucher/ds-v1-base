import { cn } from "@/lib/utils";

export interface CTABannerProps {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref?: string;
  inverted?: boolean;
  className?: string;
}

export function CTABanner({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "#",
  inverted = false,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn("w-full py-20 md:py-24", className)}
      style={
        inverted
          ? { background: "var(--foreground)" }
          : { background: "var(--card)", boxShadow: "var(--shadow-1)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }
      }
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: inverted ? "var(--background)" : "var(--foreground)" }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="max-w-xl text-base leading-relaxed"
            style={{
              color: inverted
                ? "color-mix(in oklab, var(--background) 70%, transparent)"
                : "var(--muted-foreground)",
            }}
          >
            {subtitle}
          </p>
        )}

        <a
          href={ctaHref}
          className="rounded-md px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
          style={
            inverted
              ? { background: "var(--background)", color: "var(--foreground)" }
              : { background: "var(--foreground)", color: "var(--background)" }
          }
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
