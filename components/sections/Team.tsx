import { type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  /** Initials shown in avatar placeholder */
  initials?: string;
}

export interface TeamProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  members: TeamMember[];
  className?: string;
  style?: CSSProperties;
}

export function Team({ eyebrow, title, subtitle, members, className, style }: TeamProps) {
  return (
    <section
      className={cn("w-full py-20 md:py-24", className)}
      style={{ background: "var(--background)", ...style }}
    >
      <div className="mx-auto max-w-6xl px-6">
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

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {members.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center gap-4 rounded-xl p-6 text-center"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-2)",
              }}
            >
              {/* Avatar */}
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full text-sm font-bold"
                style={{
                  background: "var(--surface-2)",
                  color: "var(--foreground)",
                  border: "1px solid var(--border)",
                  letterSpacing: "0.05em",
                }}
              >
                {member.initials ??
                  member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-foreground">
                  {member.name}
                </span>
                <span className="text-xs text-muted-foreground">{member.role}</span>
              </div>

              {member.bio && (
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
