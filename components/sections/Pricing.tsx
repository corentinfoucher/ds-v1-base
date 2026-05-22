import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref?: string;
  highlighted?: boolean;
  badge?: string;
}

export interface PricingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  className?: string;
  style?: CSSProperties;
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2 7 5.5 10.5 12 3.5" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="3" x2="11" y2="11" />
      <line x1="11" y1="3" x2="3" y2="11" />
    </svg>
  );
}

export function Pricing({ eyebrow, title, subtitle, plans, className, style }: PricingProps) {
  return (
    <section className={cn("w-full py-20 md:py-24", className)} style={{ background: "var(--background)", ...style }}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || subtitle) && (
          <div className="mb-14 flex flex-col gap-3 text-center">
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
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-xl p-7"
              style={
                plan.highlighted
                  ? {
                      background: "var(--surface-inverse)",
                      boxShadow: "var(--shadow-5)",
                    }
                  : {
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                      boxShadow: "var(--shadow-2)",
                    }
              }
            >
              {plan.badge && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  {plan.badge}
                </span>
              )}

              {/* Plan header */}
              <div className="mb-6 flex flex-col gap-1">
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: plan.highlighted ? "rgba(255,255,255,0.55)" : "var(--muted-foreground)" }}
                >
                  {plan.name}
                </span>
                <div className="mt-2 flex items-end gap-1">
                  <span
                    className="text-4xl font-bold tracking-tight"
                    style={{ color: plan.highlighted ? "#fff" : "var(--foreground)" }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="mb-1 text-sm"
                      style={{ color: plan.highlighted ? "rgba(255,255,255,0.5)" : "var(--muted-foreground)" }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                {plan.description && (
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: plan.highlighted ? "rgba(255,255,255,0.55)" : "var(--muted-foreground)" }}
                  >
                    {plan.description}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feat) => (
                  <li key={feat.label} className="flex items-center gap-3">
                    <span
                      style={{
                        color: feat.included
                          ? plan.highlighted ? "#fff" : "var(--foreground)"
                          : plan.highlighted ? "rgba(255,255,255,0.25)" : "var(--muted-foreground)",
                        opacity: feat.included ? 1 : 0.5,
                      }}
                    >
                      {feat.included ? <CheckIcon /> : <XIcon />}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: feat.included
                          ? plan.highlighted ? "#fff" : "var(--foreground)"
                          : plan.highlighted ? "rgba(255,255,255,0.35)" : "var(--muted-foreground)",
                      }}
                    >
                      {feat.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref ?? "#"}
                className="rounded-md py-2.5 text-center text-sm font-medium transition-opacity hover:opacity-80"
                style={
                  plan.highlighted
                    ? { background: "#fff", color: "var(--surface-inverse)" }
                    : { background: "var(--primary)", color: "var(--primary-foreground)" }
                }
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
