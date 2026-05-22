"use client";

import { useState, type FormEvent, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ContactFormProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  successMessage?: string;
  /** Optional aside content (address, phone, etc.) rendered on the right */
  aside?: {
    title?: string;
    items: { icon?: string; label: string; value: string }[];
  };
  onSubmit?: (data: Record<string, string>) => void | Promise<void>;
  className?: string;
  style?: CSSProperties;
}

export function ContactForm({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Envoyer le message",
  successMessage = "Message envoyé ! Nous vous répondrons sous 24 h.",
  aside,
  onSubmit,
  className,
  style,
}: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as unknown as Iterable<[string, string]>);
    await onSubmit?.(data);
    setSent(true);
    setLoading(false);
  }

  const inputStyle: CSSProperties = {
    width: "100%",
    background: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    padding: "10px 12px",
    fontSize: "14px",
    color: "var(--foreground)",
    outline: "none",
  };

  return (
    <section
      className={cn("w-full py-20 md:py-24", className)}
      style={{ background: "var(--background)", ...style }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left — form */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              {eyebrow && (
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {eyebrow}
                </span>
              )}
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {title}
              </h2>
              {subtitle && (
                <p className="text-base leading-relaxed text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>

            {sent ? (
              <div
                className="rounded-xl p-6"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <p className="text-sm font-medium text-foreground">{successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground">Prénom</label>
                    <input name="firstName" type="text" required placeholder="Jean" style={inputStyle} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground">Nom</label>
                    <input name="lastName" type="text" required placeholder="Dupont" style={inputStyle} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground">Email professionnel</label>
                  <input name="email" type="email" required placeholder="jean@entreprise.com" style={inputStyle} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground">Entreprise</label>
                  <input name="company" type="text" placeholder="Acme Corp" style={inputStyle} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Décrivez votre projet..."
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md py-2.5 text-sm font-medium transition-opacity hover:opacity-80 disabled:opacity-50"
                  style={{
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  {loading ? "Envoi en cours…" : ctaLabel}
                </button>
              </form>
            )}
          </div>

          {/* Right — aside */}
          {aside && (
            <div className="flex flex-col gap-8 lg:pt-[72px]">
              {aside.title && (
                <h3 className="text-lg font-semibold text-foreground">{aside.title}</h3>
              )}
              <div className="flex flex-col gap-6">
                {aside.items.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
