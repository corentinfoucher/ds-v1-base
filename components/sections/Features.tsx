import { type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface Feature {
  icon: ReactNode;
  title: string;
  body: string;
}

export interface FeaturesProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  features: Feature[];
  className?: string;
  style?: CSSProperties;
}

export function Features({
  eyebrow,
  title,
  subtitle,
  features,
  className,
  style,
}: FeaturesProps) {
  return (
    <section className={cn("w-full bg-background py-20 md:py-24", className)} style={style}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        {(eyebrow || title || subtitle) && (
          <div className="mb-14 flex flex-col gap-3 text-center">
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
              <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
              style={{ boxShadow: "var(--shadow-2)" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
