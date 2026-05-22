import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

export interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
  style?: CSSProperties;
}

export function Testimonials({
  title,
  subtitle,
  testimonials,
  className,
  style,
}: TestimonialsProps) {
  return (
    <section className={cn("w-full bg-muted py-20 md:py-24", className)} style={style}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-14 flex flex-col gap-3 text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-3)" }}
            >
              {/* Quote mark */}
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="currentColor"
                className="text-muted-foreground opacity-40"
              >
                <path d="M0 16V9.5C0 5.5 2.167 2.583 6.5.75L7.5 2.25C5.667 3.083 4.5 4.333 4 6H7V16H0ZM13 16V9.5c0-4 2.167-6.917 6.5-8.75l1 1.5c-1.833.833-3 2.083-3.5 3.75H20V16H13Z" />
              </svg>

              <p className="flex-1 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </p>

              <div className="flex flex-col gap-0.5 border-t border-border pt-4">
                <span className="text-sm font-semibold text-foreground">
                  {t.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {t.role}
                  {t.company && ` · ${t.company}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
