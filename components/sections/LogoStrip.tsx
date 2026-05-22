import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface LogoItem {
  name: string;
  /** Optional SVG markup or text acronym — rendered as-is */
  logo?: string;
}

export interface LogoStripProps {
  eyebrow?: string;
  logos: LogoItem[];
  className?: string;
  style?: CSSProperties;
}

export function LogoStrip({ eyebrow, logos, className, style }: LogoStripProps) {
  return (
    <section
      className={cn("w-full py-12 md:py-16", className)}
      style={{ background: "var(--background)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", ...style }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
          {logos.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-center"
              style={{ opacity: 0.4 }}
              title={item.name}
            >
              {item.logo ? (
                <span
                  className="text-foreground"
                  dangerouslySetInnerHTML={{ __html: item.logo }}
                />
              ) : (
                <span
                  className="text-sm font-bold uppercase tracking-widest text-foreground"
                  style={{ letterSpacing: "0.15em" }}
                >
                  {item.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
