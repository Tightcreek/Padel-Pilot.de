import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Droplet,
  Gauge,
  Info,
  Target,
  X,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getRacketBySlug, rackets } from '@/data/rackets';

export const dynamicParams = false;

export function generateStaticParams() {
  return rackets.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const racket = getRacketBySlug(params.slug);
  if (!racket) {
    return {
      title: 'Schläger nicht gefunden — Padel-Pilot.de',
    };
  }

  const title = `${racket.brand} ${racket.name} Test 2026: Erfahrungen & Bewertung`;
  const description = racket.teaser;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'de_DE',
      images: [{ url: racket.image, alt: racket.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/schlaeger/${racket.slug}`,
    },
  };
}

function buildJsonLd(racket: ReturnType<typeof getRacketBySlug> extends infer T ? NonNullable<T> : never) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${racket.brand} ${racket.name}`,
    image: racket.image,
    description: racket.teaser,
    brand: {
      '@type': 'Brand',
      name: racket.brand,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: racket.score,
      bestRating: 10,
      ratingCount: 47,
      reviewCount: 1,
    },
    review: {
      '@type': 'Review',
      reviewBody: racket.review.verdict.join(' '),
      author: {
        '@type': 'Organization',
        name: 'Padel-Pilot.de',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Padel-Pilot.de',
      },
      datePublished: '2026-01-15',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: racket.score,
        bestRating: 10,
        worstRating: 1,
      },
    },
    offers: {
      '@type': 'Offer',
      price: racket.priceValue,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  };
}

const reviewSections = [
  { key: 'intro', heading: 'Einleitung' },
  { key: 'feel', heading: 'Spielgefühl' },
  { key: 'powerVsControl', heading: 'Power vs. Kontrolle' },
  { key: 'verdict', heading: 'Fazit' },
] as const;

export default function RacketReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const racket = getRacketBySlug(params.slug);
  if (!racket) notFound();

  const jsonLd = buildJsonLd(racket);
  const scorePercent = (racket.score / 10) * 100;

  const pills = [
    { icon: Droplet, label: racket.shape },
    { icon: Gauge, label: racket.weight },
    { icon: Target, label: racket.level },
  ];

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -left-32 -top-16 h-[420px] w-[420px] rounded-full bg-neon/10 blur-3xl" />
          <div className="mx-auto max-w-7xl container-px py-10 lg:py-16">
            <Link
              href="/bestenliste"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
              Zurück zur Bestenliste
            </Link>

            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              {/* Image */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-secondary">
                  <Image
                    src={racket.image}
                    alt={racket.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title + score */}
              <div className="flex flex-col justify-center lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-neon-600 dark:text-neon-400">
                  Testbericht 2026 · {racket.badge}
                </p>
                <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  {racket.brand} {racket.name}{' '}
                  <span className="text-muted-foreground">Test 2026</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {racket.teaser}
                </p>

                {/* Affiliate transparency */}
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5" strokeWidth={2} />
                  Redaktionell unabhängig. Beinhaltet Affiliate-Links.
                </p>

                {/* Score */}
                <div className="mt-8 flex items-end gap-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Gesamt-Score
                    </p>
                    <p className="mt-1 font-display text-6xl font-bold tabular-nums leading-none">
                      {racket.score.toFixed(1)}
                      <span className="text-2xl font-medium text-muted-foreground">/10</span>
                    </p>
                  </div>
                  <div className="flex-1 pb-2">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-neon"
                        style={{ width: `${scorePercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two-column layout */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl container-px py-12 lg:py-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Review body — 2/3 */}
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-2">
                  {pills.map((pill) => (
                    <span
                      key={pill.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium"
                    >
                      <pill.icon className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" strokeWidth={2} />
                      {pill.label}
                    </span>
                  ))}
                </div>

                <article className="mt-10 space-y-12">
                  {reviewSections.map((section) => (
                    <div key={section.key}>
                      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                        {section.heading}
                      </h2>
                      <div className="mt-4 space-y-4">
                        {racket.review[section.key].map((para, i) => (
                          <p
                            key={i}
                            className="text-base leading-relaxed text-foreground/90 sm:text-lg"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </article>

                {/* Bottom CTA */}
                <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-border bg-secondary/30 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-lg font-bold">
                      Bereit, selbst durchzustarten?
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Prüfe den aktuellen Preis des {racket.brand} {racket.name}.
                    </p>
                  </div>
                  <a
                    href={racket.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3.5 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95 sm:w-auto"
                  >
                    Preis prüfen ab {racket.price}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                </div>
              </div>

              {/* Sticky sidebar — 1/3 */}
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* Pros & Cons */}
                  <div className="rounded-2xl border border-border bg-secondary/30 p-5">
                    <h3 className="font-display text-lg font-bold">Pros &amp; Cons</h3>
                    <ul className="mt-4 space-y-2.5">
                      {racket.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2.5 text-sm">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          <span className="leading-relaxed">{pro}</span>
                        </li>
                      ))}
                      {racket.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2.5 text-sm">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-600 dark:text-rose-400">
                            <X className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          <span className="leading-relaxed">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detail ratings */}
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="font-display text-lg font-bold">Detail-Ratings</h3>
                    <div className="mt-4 space-y-4">
                      {racket.detailRatings.map((rating) => (
                        <div key={rating.label}>
                          <div className="flex items-baseline justify-between">
                            <span className="text-sm font-medium">{rating.label}</span>
                            <span className="font-display text-sm font-bold tabular-nums">
                              {rating.value.toFixed(1)}
                              <span className="text-muted-foreground">/10</span>
                            </span>
                          </div>
                          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                            <div
                              className="h-full rounded-full bg-neon transition-all duration-700"
                              style={{ width: `${(rating.value / 10) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sticky CTA */}
                  <div className="rounded-2xl border border-border bg-card p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Aktueller Preis
                    </p>
                    <p className="mt-1 font-display text-3xl font-bold">
                      ab {racket.price}
                    </p>
                    <a
                      href={racket.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neon px-5 py-3.5 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95"
                    >
                      Aktuellen Preis prüfen
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </a>
                    <p className="mt-3 text-center text-[11px] text-muted-foreground">
                      Preis inkl. MwSt. · Lieferung je nach Shop
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
