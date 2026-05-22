import React from "react";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HeroSplit } from "@/components/sections/HeroSplit";
import { TextImage } from "@/components/sections/TextImage";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { Quote } from "@/components/sections/Quote";
import { CTABanner } from "@/components/sections/CTABanner";
import { Newsletter } from "@/components/sections/Newsletter";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Pricing } from "@/components/sections/Pricing";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { FAQ } from "@/components/sections/FAQ";
import { Team } from "@/components/sections/Team";
import { ContactForm } from "@/components/sections/ContactForm";
import { ExpertiseCards } from "@/components/sections/ExpertiseCards";
import { ArticleList } from "@/components/sections/ArticleList";
import { ArticleHero } from "@/components/sections/ArticleHero";

// ─── Shared placeholder factories ───────────────────────────────────────────

function ImagePlaceholder({
  ratio = "4/3",
  minHeight,
}: {
  ratio?: "16/9" | "4/3";
  minHeight?: string;
}) {
  return (
    <div
      className="w-full overflow-hidden rounded-xl"
      style={{
        aspectRatio: ratio,
        minHeight,
        backgroundColor: "var(--surface-3)",
        boxShadow: "var(--shadow-3)",
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{ color: "var(--muted-foreground)", opacity: 0.35 }}
        >
          <rect x="3" y="3" width="26" height="26" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 22l7-6 5 4 5-5 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--muted-foreground)", opacity: 0.5 }}
        >
          Image
        </span>
      </div>
    </div>
  );
}

// ─── Static data ─────────────────────────────────────────────────────────────

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Status", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const features = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2L11.09 6.26L16 7.27L12.5 10.68L13.18 15.59L9 13.4L4.82 15.59L5.5 10.68L2 7.27L6.91 6.26L9 2Z" />
      </svg>
    ),
    title: "Token-based design",
    body: "Every visual decision lives in a CSS custom property. Swap themes without touching a single component.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="14" height="12" rx="2" />
        <path d="M6 7h6M6 10h4" />
      </svg>
    ),
    title: "Typed props",
    body: "Full TypeScript coverage. Autocomplete everything, catch issues at compile time, not in production.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="9" r="7" />
        <path d="M9 5v4l3 2" />
      </svg>
    ),
    title: "Light & dark native",
    body: "Tokens adapt automatically via @media prefers-color-scheme and .dark / .light class overrides.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9h12M9 3l6 6-6 6" />
      </svg>
    ),
    title: "Composable sections",
    body: "Drop any section into any page. Each component is fully self-contained — no hidden dependencies.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="10" y="2" width="6" height="6" rx="1" />
        <rect x="2" y="10" width="6" height="6" rx="1" />
        <rect x="10" y="10" width="6" height="6" rx="1" />
      </svg>
    ),
    title: "8-level surface ladder",
    body: "Consistent elevation through a paired surface × shadow system. Depth is always legible.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14L14 4M4 4h10v10" />
      </svg>
    ),
    title: "Zero brand coupling",
    body: "No --primary, no brand colors here. The DS stays neutral — project teams inject their palette on top.",
  },
];

const testimonials = [
  {
    quote: "We shipped our redesign in three weeks instead of three months. The token system meant every screen just worked.",
    name: "Sarah Chen",
    role: "Head of Design",
    company: "Meridian Labs",
  },
  {
    quote: "Finally a design system that doesn't fight dark mode. The surface ladder is genuinely clever.",
    name: "Marcus Olivier",
    role: "Staff Engineer",
    company: "Archon",
  },
  {
    quote: "The TypeScript coverage alone saved us from a dozen prop-drilling bugs. Would not ship without it.",
    name: "Priya Nair",
    role: "Frontend Lead",
    company: "Voltline",
  },
];

const stats = [
  { value: "11", label: "Sections", description: "Ready to drop in" },
  { value: "40+", label: "Components", description: "Fully typed" },
  { value: "8", label: "Surface levels", description: "Per theme" },
  { value: "0", label: "Hard-coded values", description: "In any component" },
];

// ─── New section data ─────────────────────────────────────────────────────────

const logos = [
  { name: "Stripe" },
  { name: "Vercel" },
  { name: "Linear" },
  { name: "Notion" },
  { name: "Figma" },
  { name: "Resend" },
  { name: "Supabase" },
  { name: "Planetscale" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Gratuit",
    description: "Pour explorer le design system et prototyper rapidement.",
    features: [
      { label: "11 sections core", included: true },
      { label: "Tokens light & dark", included: true },
      { label: "TypeScript complet", included: true },
      { label: "Sections premium", included: false },
      { label: "Support prioritaire", included: false },
    ],
    ctaLabel: "Commencer gratuitement",
  },
  {
    name: "Pro",
    price: "49 €",
    period: "/ mois",
    description: "Pour les équipes qui livrent des produits en production.",
    badge: "Populaire",
    highlighted: true,
    features: [
      { label: "Toutes les sections", included: true },
      { label: "Tokens light & dark", included: true },
      { label: "TypeScript complet", included: true },
      { label: "Sections premium", included: true },
      { label: "Support prioritaire", included: false },
    ],
    ctaLabel: "Essai 14 jours",
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Accompagnement, SLA et tokens custom pour les grandes équipes.",
    features: [
      { label: "Toutes les sections", included: true },
      { label: "Tokens light & dark", included: true },
      { label: "TypeScript complet", included: true },
      { label: "Sections premium", included: true },
      { label: "Support prioritaire", included: true },
    ],
    ctaLabel: "Nous contacter",
  },
];

const articles = [
  {
    category: "Design System",
    title: "Comment construire une surface ladder qui tient dans le temps",
    excerpt: "Retour d'expérience sur 18 mois de design system en production : ce qui a tenu, ce qui a cassé, et pourquoi la ladder de surfaces est notre meilleure décision.",
    date: "12 mai 2026",
    readTime: "8 min",
    href: "#",
  },
  {
    category: "Tailwind v4",
    title: "Migrer de Tailwind v3 à v4 : le guide complet sans surprises",
    excerpt: "Toutes les breaking changes, les pièges à éviter et les patterns à adopter pour une migration propre en une semaine.",
    date: "5 mai 2026",
    readTime: "12 min",
    href: "#",
  },
  {
    category: "TypeScript",
    title: "Props typées, composants flexibles : le duo gagnant",
    excerpt: "Comment structurer ses interfaces React pour qu'elles soient à la fois strictes pour le dev et libres pour le designer.",
    date: "28 avr. 2026",
    readTime: "6 min",
    href: "#",
  },
];

const faqItems = [
  {
    question: "Puis-je utiliser DS V1 dans un projet commercial ?",
    answer: "Oui, DS V1 est libre d'utilisation pour tout projet, commercial ou non. Aucune attribution requise, bien qu'elle soit toujours appréciée.",
  },
  {
    question: "Comment intégrer DS V1 dans un projet Next.js existant ?",
    answer: "Copiez les composants dans votre dossier components/, importez globals.css dans votre layout racine, puis ajoutez @import 'tailwindcss' en tête de fichier. Toutes les sections sont autonomes — aucune dépendance cachée.",
  },
  {
    question: "Les tokens fonctionnent-ils avec d'autres frameworks CSS ?",
    answer: "Les custom properties CSS sont universelles. Vous pouvez les référencer depuis n'importe quel framework ou en CSS pur. Seules les classes utilitaires (bg-surface-1, etc.) sont spécifiques à Tailwind v4.",
  },
  {
    question: "Comment ajouter ma couleur de marque ?",
    answer: "Définissez --primary et --primary-foreground dans votre CSS projet. DS V1 réserve ces variables mais ne les fixe pas — votre brand s'injecte sans modifier une seule ligne du design system.",
  },
  {
    question: "Le dark mode est-il automatique ?",
    answer: "Oui. Par défaut DS V1 suit @media prefers-color-scheme. Vous pouvez forcer le thème avec la classe .dark ou .light sur n'importe quel parent.",
  },
];

const teamMembers = [
  { name: "Sophie Martin", role: "Lead Designer", bio: "Ancienne Figma, obsédée par les systèmes de tokens." },
  { name: "Lucas Bernard", role: "Frontend Engineer", bio: "React + TypeScript depuis 2018. Contributeur Tailwind." },
  { name: "Inès Durand", role: "Product Manager", bio: "Ancienne Linear. Croit que les specs sont du code." },
  { name: "Tom Lefevre", role: "Design Engineer", bio: "À l'intersection du design et du code depuis toujours." },
  { name: "Camille Roy", role: "QA Engineer", bio: "Traque les régressions visuelles avec snapshot testing." },
  { name: "Axel Moreau", role: "Dev Rel", bio: "Docs, exemples, talks. Fait le lien entre DS et équipes." },
  { name: "Emma Petit", role: "Brand Designer", bio: "Tokens sémantiques et systèmes d'illustration." },
  { name: "Hugo Simon", role: "Backend Engineer", bio: "API, webhooks et intégrations côté serveur." },
];

const expertiseCards = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="6" />
        <path d="M8 4v4l3 2" />
      </svg>
    ),
    title: "Un système de tokens pensé pour durer",
    body: "Chaque décision visuelle — couleur, ombre, rayon — est une CSS custom property. Changer de thème ou injecter une brand est un problème résolu en un seul fichier.",
    ctaLabel: "Voir les tokens",
    ctaHref: "#",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="5" height="5" rx="1" />
        <rect x="9" y="2" width="5" height="5" rx="1" />
        <rect x="2" y="9" width="5" height="5" rx="1" />
        <rect x="9" y="9" width="5" height="5" rx="1" />
      </svg>
    ),
    title: "Des sections autonomes, sans couplage caché",
    body: "Chaque section est un composant React isolé : props typées, aucun état global, aucune dépendance externe hormis Tailwind. Drop-in ready dans n'importe quel projet.",
    ctaLabel: "Explorer les sections",
    ctaHref: "#",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 6 2 8 4 10" />
        <polyline points="12 6 14 8 12 10" />
        <line x1="8.5" y1="4" x2="7.5" y2="12" />
      </svg>
    ),
    title: "Le repo est la source de vérité, pas Figma",
    body: "Le design system vit dans le code. Les tokens sont dans globals.css, les composants dans components/ui/. Figma suit — il ne dicte pas.",
    ctaLabel: "Lire la doc",
    ctaHref: "#",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const bg1: React.CSSProperties = { background: "var(--surface-1)", width: "100%" };
const bg2: React.CSSProperties = { background: "var(--surface-2)", width: "100%" };

export default function ShowcasePage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: "var(--background)" }}>
      <main className="flex flex-col">

        {/* 1 — Hero · inverted (fond sombre) */}
        <Hero
          eyebrow="Design System V1"
          title="Build products that scale without the friction."
          subtitle="A neutral, token-based design system for teams that ship fast and want to look good doing it."
          ctaPrimary={{ label: "Start building", href: "#" }}
          ctaSecondary={{ label: "View docs", href: "#" }}
          inverted
          className="!py-16 md:!py-20"
        />

        {/* 2 — LogoStrip · surface-2 */}
        <LogoStrip
          eyebrow="Ils nous font confiance"
          logos={logos}
          style={bg2}
        />

        {/* 3 — Stats · surface-1 */}
        <Stats
          stats={stats}
          style={bg1}
          className="!py-12"
        />

        {/* 4 — HeroSplit · surface-2 */}
        <HeroSplit
          eyebrow="The split hero"
          title="Everything your team needs to move fast."
          subtitle="Reusable sections, typed props, and a surface system that makes light and dark mode a non-issue."
          ctaPrimary={{ label: "Explore sections", href: "#" }}
          ctaSecondary={{ label: "Read the docs", href: "#" }}
          image={<ImagePlaceholder ratio="16/9" minHeight="480px" />}
          style={bg2}
          className="!py-16 md:!py-20"
        />

        {/* 5 — ExpertiseCards · surface-1 */}
        <ExpertiseCards
          eyebrow="Notre approche"
          title="Trois principes qui guident chaque décision."
          cards={expertiseCards}
          style={bg1}
          className="!py-16 md:!py-20"
        />

        {/* 6 — Features · surface-2 */}
        <Features
          eyebrow="Why DS V1"
          title="Designed to disappear into your product."
          subtitle="The best design system is one your users never notice — only the craft it enables."
          features={features}
          style={bg2}
          className="!py-16 md:!py-20"
        />

        {/* 7 — TextImage · surface-1 */}
        <TextImage
          eyebrow="Comment ça marche"
          title="Les tokens définissent tout. Les composants ne réfèrent à rien d'autre."
          body="Chaque couleur, ombre et rayon est une CSS custom property. Les composants ne contiennent jamais de valeurs en dur — ce qui signifie qu'un changement de thème ou l'injection d'une brand est une modification d'un seul fichier."
          image={<ImagePlaceholder ratio="4/3" />}
          style={bg1}
          className="!py-16 md:!py-20"
        />

        {/* 8 — TextImage reverse · surface-2 */}
        <TextImage
          eyebrow="Flexibilité"
          title="Inversez le layout avec une seule prop."
          body="La section TextImage accepte un booléen `reverse`. Même composant, mêmes tokens, layout opposé — aucune duplication, aucun CSS supplémentaire. C'est la philosophie en microcosme."
          reverse
          image={<ImagePlaceholder ratio="4/3" />}
          style={bg2}
          className="!py-16 md:!py-20"
        />

        {/* 9 — Team · surface-1 */}
        <Team
          eyebrow="L'équipe"
          title="Des gens qui font confiance au système."
          subtitle="Designers, ingénieurs et product managers qui utilisent DS V1 au quotidien."
          members={teamMembers}
          style={bg1}
          className="!py-16 md:!py-20"
        />

        {/* 10 — Testimonials · surface-2 */}
        <Testimonials
          title="Ce que disent les équipes qui l'utilisent."
          subtitle="Retours après un premier produit livré avec DS V1."
          testimonials={testimonials}
          style={bg2}
          className="!py-16 md:!py-20"
        />

        {/* 11 — Pricing · surface-1 */}
        <Pricing
          eyebrow="Tarifs"
          title="Simple, transparent, sans surprise."
          subtitle="Un seul plan suffit pour la plupart des équipes. Passez à Pro quand vous grandissez."
          plans={pricingPlans}
          style={bg1}
          className="!py-16 md:!py-20"
        />

        {/* 12 — FAQ · surface-2 */}
        <FAQ
          eyebrow="FAQ"
          title="Questions fréquentes."
          items={faqItems}
          style={bg2}
          className="!py-16 md:!py-20"
        />

        {/* 13 — BlogGrid · surface-1 */}
        <BlogGrid
          eyebrow="Blog"
          title="Actualités & ressources."
          subtitle="Design system, tokens, et best practices — directement depuis l'équipe DS V1."
          articles={articles}
          ctaLabel="Voir tous les articles"
          style={bg1}
          className="!py-16 md:!py-20"
        />

        {/* 14 — ArticleList · surface-2 */}
        <ArticleList
          eyebrow="Ressources"
          title="Tous les articles"
          articles={articles}
          featuredFirst
          style={bg2}
          className="!py-16 md:!py-20"
        />

        {/* 15 — ArticleHero · surface-1 */}
        <ArticleHero
          category="Design System"
          title="Comment construire une surface ladder qui tient dans le temps"
          subtitle="Retour d'expérience sur 18 mois de design system en production."
          author="Sophie Martin"
          date="12 mai 2026"
          readTime="8 min"
          style={bg1}
        >
          <p style={{ color: "var(--muted-foreground)", marginBottom: "1.5rem" }}>
            Ceci est un exemple de corps d&apos;article. Le composant ArticleHero accepte des children
            pour le contenu de l&apos;article — texte riche, images, blocs de code, etc.
          </p>
          <p style={{ color: "var(--muted-foreground)" }}>
            Les tokens CSS garantissent une typographie cohérente quel que soit le thème.
            Le fond suit automatiquement le mode clair ou sombre.
          </p>
        </ArticleHero>

        {/* 16 — Quote · surface-2 */}
        <Quote
          quote="Un bon design system donne des contraintes qui ressemblent à de la liberté."
          author="Micka"
          role="Design & Engineering"
          company="DS V1"
          style={bg2}
          className="!py-16 md:!py-20"
        />

        {/* 17 — ContactForm · surface-1 */}
        <ContactForm
          eyebrow="Contact"
          title="Parlons de votre projet."
          subtitle="Une question sur DS V1 ? Besoin d'un accompagnement sur mesure ? On vous répond sous 24 h."
          aside={{
            title: "Nos coordonnées",
            items: [
              { label: "Email", value: "hello@ds-v1.com" },
              { label: "Réponse garantie", value: "Sous 24 heures ouvrées" },
              { label: "Basé à", value: "Paris, France" },
            ],
          }}
          style={bg1}
          className="!py-16 md:!py-20"
        />

        {/* 18 — Newsletter · surface-2 */}
        <Newsletter
          title="Restez informé."
          description="Nouvelles sections, mises à jour de tokens et notes de design — dans votre boîte mail."
          placeholder="vous@exemple.com"
          ctaLabel="S'abonner"
          style={bg2}
          className="!py-16"
        />

        {/* 19 — CTABanner · fond sombre inversé */}
        <CTABanner
          title="Prêt à construire quelque chose de grand ?"
          subtitle="Intégrez DS V1 dans votre projet Next.js et commencez à composer des pages en quelques minutes."
          ctaLabel="Démarrer gratuitement"
          ctaHref="#"
          inverted
          className="!w-full !py-16 md:!py-20"
        />

      </main>

      {/* Footer · inverted (fond sombre) */}
      <Footer
        logo="DS V1"
        tagline="A neutral design system for teams that ship."
        columns={footerColumns}
        copyright="© 2026 DS V1. All rights reserved."
        inverted
      />
    </div>
  );
}
