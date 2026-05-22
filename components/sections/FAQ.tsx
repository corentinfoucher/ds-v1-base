"use client";

import { useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
  style?: CSSProperties;
}

export function FAQ({ eyebrow, title, subtitle, items, className, style }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className={cn("w-full py-20 md:py-24", className)}
      style={{ background: "var(--background)", ...style }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 flex flex-col gap-3 text-center">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col" style={{ borderTop: "1px solid var(--border)" }}>
          {items.map((item, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
              <button
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-foreground">
                  {item.question}
                </span>
                <span
                  className="shrink-0 transition-transform duration-200"
                  style={{
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    color: "var(--muted-foreground)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="8" y1="2" x2="8" y2="14" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-200"
                style={{ maxHeight: open === i ? "400px" : "0px" }}
              >
                <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
