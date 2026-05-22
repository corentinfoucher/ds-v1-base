import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logo: string;
  tagline?: string;
  columns?: FooterColumn[];
  copyright?: string;
  inverted?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Footer({
  logo,
  tagline,
  columns = [],
  copyright,
  inverted = false,
  className,
  style,
}: FooterProps) {
  const fg = inverted ? "#FFFFFF" : "var(--foreground)";
  const muted = inverted ? "var(--surface-inverse-muted)" : "var(--muted-foreground)";
  const border = inverted ? "var(--surface-inverse-border)" : "var(--border)";

  return (
    <footer
      className={cn("w-full", className)}
      style={{
        background: inverted ? "var(--surface-inverse)" : "var(--background)",
        borderTop: `1px solid ${border}`,
        ...style,
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          {/* Brand */}
          <div className="flex min-w-[160px] flex-col gap-2">
            <span className="text-sm font-semibold" style={{ color: fg }}>
              {logo}
            </span>
            {tagline && (
              <p className="text-sm leading-relaxed" style={{ color: muted }}>
                {tagline}
              </p>
            )}
          </div>

          {/* Link columns */}
          {columns.length > 0 && (
            <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              {columns.map((col) => (
                <div key={col.title} className="flex flex-col gap-3">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: muted }}
                  >
                    {col.title}
                  </span>
                  <ul className="flex flex-col gap-2">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm transition-opacity hover:opacity-100"
                          style={{ color: muted, opacity: 0.8 }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Copyright */}
        {copyright && (
          <div
            className="mt-10 pt-6"
            style={{ borderTop: `1px solid ${border}` }}
          >
            <p className="text-xs" style={{ color: muted }}>
              {copyright}
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}
