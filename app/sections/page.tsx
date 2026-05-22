import Link from "next/link";

const sections = [
  // ── Layout ──────────────────────────────────────────────────────────────────
  {
    name: "Header",
    description: "Logo texte gauche, nav centre, CTA droite. Sticky + backdrop-blur.",
    props: ["logo", "navLinks[]", "ctaLabel", "ctaHref"],
    file: "components/sections/Header.tsx",
    group: "Layout",
  },
  {
    name: "Footer",
    description: "Logo + tagline gauche, colonnes de liens, copyright. Prop `inverted` pour fond sombre.",
    props: ["logo", "tagline", "columns[]", "copyright", "inverted?"],
    file: "components/sections/Footer.tsx",
    group: "Layout",
  },

  // ── Heroes ───────────────────────────────────────────────────────────────────
  {
    name: "Hero",
    description: "Centré : eyebrow + H1 + sous-titre + 2 CTA. Prop `inverted` pour fond sombre.",
    props: ["eyebrow", "title", "subtitle", "ctaPrimary", "ctaSecondary", "inverted?"],
    file: "components/sections/Hero.tsx",
    group: "Heroes",
  },
  {
    name: "HeroSplit",
    description: "Texte gauche + placeholder image droite. Layout 50/50.",
    props: ["eyebrow", "title", "subtitle", "ctaPrimary", "ctaSecondary", "image"],
    file: "components/sections/HeroSplit.tsx",
    group: "Heroes",
  },

  // ── Content ──────────────────────────────────────────────────────────────────
  {
    name: "TextImage",
    description: "Texte + image côte à côte. Prop `reverse` pour inverser gauche/droite.",
    props: ["eyebrow", "title", "body", "image", "reverse?"],
    file: "components/sections/TextImage.tsx",
    group: "Content",
  },
  {
    name: "Features",
    description: "Grille 3 colonnes avec icône, titre et texte par feature.",
    props: ["eyebrow", "title", "subtitle", "features[]"],
    file: "components/sections/Features.tsx",
    group: "Content",
  },
  {
    name: "ExpertiseCards",
    description: "Grandes cards horizontales : numéro + titre + corps + tags + CTA optionnel.",
    props: ["eyebrow", "title", "cards[]{number,title,body,tags[],ctaLabel}"],
    file: "components/sections/ExpertiseCards.tsx",
    group: "Content",
  },
  {
    name: "Stats",
    description: "Chiffres clés en ligne. Grille responsive 2 → 4 colonnes.",
    props: ["stats[]"],
    file: "components/sections/Stats.tsx",
    group: "Content",
  },
  {
    name: "Quote",
    description: "Grande citation centrée avec auteur et rôle.",
    props: ["quote", "author", "role", "company"],
    file: "components/sections/Quote.tsx",
    group: "Content",
  },

  // ── Social proof ─────────────────────────────────────────────────────────────
  {
    name: "LogoStrip",
    description: "Bande de logos partenaires / clients. Affichés en grisé, opacité réduite.",
    props: ["eyebrow", "logos[]{name,logo?}"],
    file: "components/sections/LogoStrip.tsx",
    group: "Social proof",
  },
  {
    name: "Testimonials",
    description: "Cards avec citation, nom, rôle et entreprise.",
    props: ["title", "subtitle", "testimonials[]"],
    file: "components/sections/Testimonials.tsx",
    group: "Social proof",
  },
  {
    name: "Team",
    description: "Grille de cards membres : avatar initiales, nom, rôle, bio optionnelle.",
    props: ["eyebrow", "title", "subtitle", "members[]{name,role,bio?,initials?}"],
    file: "components/sections/Team.tsx",
    group: "Social proof",
  },

  // ── Conversion ───────────────────────────────────────────────────────────────
  {
    name: "Pricing",
    description: "Grille de plans tarifaires. Plan highlighted sur fond sombre, badge optionnel.",
    props: ["eyebrow", "title", "plans[]{name,price,features[],ctaLabel,highlighted?}"],
    file: "components/sections/Pricing.tsx",
    group: "Conversion",
  },
  {
    name: "CTABanner",
    description: "Bande pleine largeur : titre + sous-titre + bouton. Prop `inverted` fond sombre.",
    props: ["title", "subtitle", "ctaLabel", "ctaHref", "inverted?"],
    file: "components/sections/CTABanner.tsx",
    group: "Conversion",
  },
  {
    name: "Newsletter",
    description: "Titre + champ email + bouton submit. Gestion d'état interne.",
    props: ["title", "description", "placeholder", "ctaLabel", "onSubmit?"],
    file: "components/sections/Newsletter.tsx",
    group: "Conversion",
  },
  {
    name: "ContactForm",
    description: "Formulaire 2 colonnes (form + aside coordonnées). Gestion succès interne.",
    props: ["title", "subtitle", "ctaLabel", "aside?{items[]}", "onSubmit?"],
    file: "components/sections/ContactForm.tsx",
    group: "Conversion",
  },

  // ── Blog / Articles ──────────────────────────────────────────────────────────
  {
    name: "BlogGrid",
    description: "Grille 3 colonnes d'articles : image, catégorie, titre, excerpt, date.",
    props: ["eyebrow", "title", "articles[]{category,title,excerpt,date,readTime}", "ctaLabel?"],
    file: "components/sections/BlogGrid.tsx",
    group: "Blog",
  },
  {
    name: "ArticleList",
    description: "Liste paginable d'articles avec article featured en pleine largeur en option.",
    props: ["eyebrow", "title", "articles[]", "featuredFirst?"],
    file: "components/sections/ArticleList.tsx",
    group: "Blog",
  },
  {
    name: "ArticleHero",
    description: "Hero d'article : catégorie, H1, sous-titre, méta auteur/date, image cover + body slot.",
    props: ["category", "title", "subtitle", "author", "date", "readTime", "image?", "children?"],
    file: "components/sections/ArticleHero.tsx",
    group: "Blog",
  },

  // ── Misc ─────────────────────────────────────────────────────────────────────
  {
    name: "FAQ",
    description: "Accordion questions/réponses. État local, animation CSS max-height.",
    props: ["eyebrow", "title", "items[]{question,answer}"],
    file: "components/sections/FAQ.tsx",
    group: "Misc",
  },
];

const groups = Array.from(new Set(sections.map((s) => s.group)));

export default function SectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="border-b border-border bg-background px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            DS V1
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Sections
          </h1>
          <p className="mt-3 text-base text-muted-foreground">
            {sections.length} sections réutilisables —{" "}
            <Link
              href="/showcase"
              className="underline underline-offset-2 hover:text-foreground"
            >
              voir la showcase complète →
            </Link>
          </p>
        </div>
      </div>

      {/* Section list grouped */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-12">
          {groups.map((group) => (
            <div key={group}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group}
              </h2>
              <div className="flex flex-col gap-2.5">
                {sections
                  .filter((s) => s.group === group)
                  .map((section) => (
                    <div
                      key={section.name}
                      className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-start sm:gap-8"
                      style={{ boxShadow: "var(--shadow-2)" }}
                    >
                      {/* Info */}
                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex items-baseline gap-3">
                          <h3 className="text-sm font-semibold text-foreground">
                            {section.name}
                          </h3>
                          <code className="text-xs text-muted-foreground">
                            {section.file}
                          </code>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {section.description}
                        </p>
                      </div>

                      {/* Props */}
                      <div className="flex shrink-0 flex-wrap gap-1.5 sm:max-w-[260px]">
                        {section.props.map((prop) => (
                          <span
                            key={prop}
                            className="rounded-md border border-border bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                          >
                            {prop}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
