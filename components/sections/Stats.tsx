import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface StatsProps {
  stats: Stat[];
  className?: string;
  style?: CSSProperties;
}

export function Stats({ stats, className, style }: StatsProps) {
  return (
    <section className={cn("w-full bg-background py-16 md:py-20", className)} style={style}>
      <div className="mx-auto max-w-6xl px-6">
        <dl
          className={cn(
            "grid grid-cols-2 gap-px border border-border bg-border",
            "rounded-xl overflow-hidden",
            stats.length >= 4 ? "lg:grid-cols-4" : `lg:grid-cols-${stats.length}`
          )}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 bg-background px-8 py-8"
            >
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </dd>
              {stat.description && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
