import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface QuoteProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  className?: string;
  style?: CSSProperties;
}

export function Quote({ quote, author, role, company, className, style }: QuoteProps) {
  return (
    <section className={cn("w-full bg-background py-20 md:py-28", className)} style={style}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <blockquote className="flex flex-col gap-8">
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="currentColor"
            className="mx-auto text-muted-foreground opacity-30"
          >
            <path d="M0 26V15.5C0 9 3.5 4.167 10.5 1L12 3.5C9.333 4.833 7.5 6.667 6.5 9H11V26H0ZM21 26V15.5C21 9 24.5 4.167 31.5 1L33 3.5C30.333 4.833 28.5 6.667 27.5 9H32V26H21Z" />
          </svg>

          <p className="text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {quote}
          </p>

          <figcaption className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-foreground">
              {author}
            </span>
            {(role || company) && (
              <span className="text-sm text-muted-foreground">
                {role}
                {role && company && " · "}
                {company}
              </span>
            )}
          </figcaption>
        </blockquote>
      </div>
    </section>
  );
}
