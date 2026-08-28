import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Eye,
  Info,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { RacketComparisonTable } from '@/components/racket-comparison-table';
import { rackets } from '@/data/rackets';

export const metadata: Metadata = {
  title: 'Kaufberatung: Die besten Padel-Schläger 2026 — Padel-Pilot.de',
  description:
    'Unabhängige Kaufberatung 2026: Wir haben alle aktuellen Padel-Schläger getestet. Vergleiche Form, Gewicht, Score und Preis und finde den perfekten Schläger für dein Spielniveau.',
  openGraph: {
    title: 'Kaufberatung: Die besten Padel-Schläger 2026 — Padel-Pilot.de',
    description:
      'Unabhängige Kaufberatung 2026: Vergleiche alle getesteten Padel-Schläger und finde den perfekten Schläger für dein Spielniveau.',
    type: 'article',
    locale: 'de_DE',
  },
  alternates: {
    canonical: '/kaufberatung',
  },
};

const trustBadges = [
  { icon: ShieldCheck, label: 'Unabhängig getestet' },
  { icon: Clock, label: '180h Spielpraxis' },
  { icon: Eye, label: `${rackets.length} Modelle verglichen` },
];

export default function KaufberatungPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-neon/10 blur-3xl" />
          <div className="mx-auto max-w-4xl container-px py-16 text-center lg:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" />
              Kaufberatung 2026 · Aktualisiert im August
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Kaufberatung: Die besten{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Padel-Schläger 2026</span>
                <span className="absolute inset-x-0 bottom-1.5 -z-0 h-3 bg-neon/70 sm:bottom-2 sm:h-4" />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Wir haben die aktuellen Modelle getestet. Finde den perfekten
              Schläger für dein Spielniveau, mit transparenten Scores, echten
              Spielerfahrungen und ohne Marketing-Blabla.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <badge.icon className="h-4 w-4 text-neon-600 dark:text-neon-400" strokeWidth={2} />
                  {badge.label}
                </div>
              ))}
            </div>

            {/* Affiliate transparency */}
            <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Info className="h-3.5 w-3.5" strokeWidth={2} />
              Redaktionell unabhängig. Beinhaltet Affiliate-Links.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl container-px py-12 lg:py-20">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Vergleichstabelle
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                  Alle getesteten Modelle im direkten Vergleich. Wische nach
                  rechts, um alle Eigenschaften zu sehen.
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 self-start text-xs font-medium text-muted-foreground sm:self-auto">
                <BadgeCheck className="h-4 w-4 text-neon-600 dark:text-neon-400" strokeWidth={2} />
                {rackets.length} Modelle im Test
              </span>
            </div>

            <RacketComparisonTable rackets={rackets} />
          </div>
        </section>

        {/* Deep-Dive: full-width editorial cards */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl container-px py-12 lg:py-20">
            <div className="mb-10">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Warum diese Schläger in unserer Liste stehen
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Detaillierte Begründung für jede Empfehlung, damit du
                einschätzen kannst, welcher Schläger zu deinem Spiel passt.
              </p>
            </div>

            <div className="space-y-8">
              {rackets.map((racket, i) => (
                <article
                  key={racket.id}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-colors hover:border-neon/30"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                    {/* Image */}
                    <Link
                      href={`/schlaeger/${racket.slug}`}
                      className="group relative block aspect-[4/3] overflow-hidden bg-secondary sm:aspect-auto"
                      aria-label={`${racket.brand} ${racket.name} Test ansehen`}
                    >
                      <Image
                        src={racket.image}
                        alt={racket.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        priority={i === 0}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    {/* Content */}
                    <div className="sm:col-span-2 flex flex-col p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {racket.brand}
                          </p>
                          <Link
                            href={`/schlaeger/${racket.slug}`}
                            className="mt-1 block font-display text-2xl font-bold leading-tight tracking-tight transition-colors hover:text-neon-600 dark:hover:text-neon-400"
                          >
                            {racket.name}
                          </Link>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neon px-2.5 py-1 text-[11px] font-semibold text-neon-foreground">
                          {racket.badge}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                        {racket.review.verdict[0]}
                      </p>

                      {/* Meta row */}
                      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
                        <span className="font-medium">Form: <span className="text-foreground">{racket.shape}</span></span>
                        <span className="font-medium">Gewicht: <span className="text-foreground">{racket.weight}</span></span>
                        <span className="font-medium">Härte: <span className="text-foreground capitalize">{racket.hardness}</span></span>
                        <span className="font-medium">Niveau: <span className="text-foreground">{racket.level}</span></span>
                        <span className="font-medium">Score: <span className="font-display font-bold text-foreground">{racket.score.toFixed(1)}/10</span></span>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                        <span className="font-display text-lg font-bold">ab {racket.price}</span>
                        <Link
                          href={`/schlaeger/${racket.slug}`}
                          className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-neon px-4 py-2.5 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95"
                        >
                          Zum ausführlichen Test
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
