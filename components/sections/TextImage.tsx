import { type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface TextImageProps {
  eyebrow?: string;
  title: string;
  body: string;
  reverse?: boolean;
  image?: ReactNode;
  imageAlt?: string;
  className?: string;
  style?: CSSProperties;
}

export function TextImage({
  eyebrow,
  title,
  body,
  reverse = false,
  image,
  imageAlt = "Image placeholder",
  className,
  style,
}: TextImageProps) {
  return (
    <section
      className={cn("w-full bg-background py-20 md:py-24", className)}
      style={style}
    >
      <div
        className={cn(
          "mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16",
          reverse && "md:[&>*:first-child]:order-2"
        )}
      >
        {/* Text */}
        <div className="flex flex-col gap-5">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {body}
          </p>
        </div>

        {/* Image */}
        {image ?? (
          <div
            className="aspect-[4/3] w-full rounded-xl border border-border bg-muted"
            role="img"
            aria-label={imageAlt}
          >
            <div className="flex h-full w-full items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="text-muted-foreground opacity-30"
              >
                <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="14" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 28l8-7 6 5 6-6 12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
