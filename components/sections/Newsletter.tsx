"use client";

import { useState, type FormEvent, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface NewsletterProps {
  title: string;
  description?: string;
  placeholder?: string;
  ctaLabel?: string;
  onSubmit?: (email: string) => void;
  className?: string;
  style?: CSSProperties;
}

export function Newsletter({
  title,
  description,
  placeholder = "your@email.com",
  ctaLabel = "Subscribe",
  onSubmit,
  className,
  style,
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    onSubmit?.(email);
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className={cn("w-full bg-muted py-16 md:py-20", className)} style={style}>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {submitted ? (
          <p className="text-sm font-medium text-foreground">
            Thanks — you're on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className={cn(
                "flex-1 rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground",
                "placeholder:text-muted-foreground",
                "outline-none focus:ring-2 focus:ring-foreground/20"
              )}
            />
            <button
              type="submit"
              className="rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              {ctaLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
