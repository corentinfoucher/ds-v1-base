# DS V1 — Design System Base

## Stack
Next.js 15.5 · Tailwind v4 · TypeScript · shadcn/ui · Inter Variable

## Philosophie
Système neutre et invisible. Pas de brand dans le DS.
Le brand (--brand, couleurs projet) se définit au niveau projet, jamais ici.
Repo = source of truth. Pas Figma.

## Tokens (globals.css)
Surfaces   : --surface-1 à --surface-8 (ladder light/dark)
Shadows    : --shadow-1 à --shadow-8 (paired avec surfaces)
Sémantique : --background, --foreground, --card, --muted, --border, --destructive
Neutrals   : --neutral-100 à --neutral-900
États      : --hover, --active (via --overlay)

## Règles absolues
- Jamais de valeurs en dur dans les composants — toujours les tokens CSS
- Jamais de --primary ici — défini au niveau projet
- Light/dark natif : @media prefers-color-scheme + classes .light / .dark
- Composants dans components/ui/ uniquement

## Structure
components/ui/     → composants
app/showcase/      → vitrine
app/docs/[slug]/   → documentation live
globals.css        → tokens (source of truth)

## Deploy
Vercel : ds-v1-base.vercel.app
GitHub : github.com/corentinfoucher/ds-v1-base

## Références
- **Relume** (relume.io/react) — source pour les sections React : variantes, structure, patterns
- **Mobbin** (mobbin.com) — source d'inspiration visuelle et UX : screenshots d'apps réelles
Workflow : screenshot Relume/Mobbin → passer à Cursor → adapter aux tokens DS V1
