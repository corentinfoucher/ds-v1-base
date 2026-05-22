"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  logo: string;
  navLinks?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export function Header({
  logo,
  navLinks = [],
  ctaLabel,
  ctaHref = "#",
  className,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border",
        "bg-background/80 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <span className="text-sm font-semibold tracking-tight text-foreground">
          {logo}
        </span>

        {/* Nav — desktop */}
        {navLinks.length > 0 && (
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-hover hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* CTA + burger */}
        <div className="flex items-center gap-3">
          {ctaLabel && (
            <a
              href={ctaHref}
              className="hidden rounded-md bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-80 md:inline-flex"
            >
              {ctaLabel}
            </a>
          )}

          {/* Burger — mobile */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-foreground transition-colors hover:bg-hover md:hidden"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="3" y1="3" x2="13" y2="13" />
                  <line x1="13" y1="3" x2="3" y2="13" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="14" y2="5" />
                  <line x1="2" y1="8" x2="14" y2="8" />
                  <line x1="2" y1="11" x2="14" y2="11" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-hover hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {ctaLabel && (
              <a
                href={ctaHref}
                className="mt-2 rounded-md bg-foreground px-3 py-2 text-center text-sm font-medium text-background"
              >
                {ctaLabel}
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
