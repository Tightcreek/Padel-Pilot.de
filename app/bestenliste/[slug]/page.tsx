import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Compass,
  Info,
  ListChecks,
  ShoppingBag,
  Trophy,
  X,
} from 'lucide-react';
import { Header } from '@/components/header';
import {
  bestlists,
  getBestlistBySlug,
  getRacketsForBestlist,
} from '@/data/bestlists';

export const dynamicParams = false;

export function generateStaticParams() {
  return bestlists.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const bestlist = getBestlistBySlug(params.slug);
  if (!bestlist) {
    return { title: 'Bestenliste nicht gefunden — Padel-Pilot.de' };
  }

  return {
    title: bestlist.metaTitle,
    description: bestlist.metaDescription,
    openGraph: {
      title: bestlist.metaTitle,
      description: bestlist.metaDescription,
      type: 'article',
      locale: 'de_DE',
    },
    twitter: {
      card: 'summary_large_image',
      title: bestlist.metaTitle,
      description: bestlist.metaDescription,
    },
    alternates: {
      canonical: `/bestenliste/${bestlist.slug}`,
    },
  };
}

function buildItemListJsonLd(bestlist: ReturnType<typeof getBestlistBySlug>) {
  if (!bestlist) return null;
  const items = getRacketsForBestlist(bestlist);
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: bestlist.title,
    itemListElement: items.map((racket, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `${racket.brand} ${racket.name}`,
        image: racket.image,
        brand: { '@type': 'Brand', name: racket.brand },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: racket.score,
          bestRating: 10,
          ratingCount: 47,
        },
        offers: {
          '@type': 'Offer',
          price: racket.priceValue,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };
}

export default function BestlistPage({
  params,
}: {
  params: { slug: string };
}) {
  const bestlist = getBestlistBySlug(params.slug);
  if (!bestlist) notFound();

  const rankedRackets = getRacketsForBestlist(bestlist);
  const jsonLd = buildItemListJsonLd(bestlist);

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
          <div className="mx-auto max-w-4xl container-px py-12 lg:py-16">
            <Link
              href="/#tests"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
              Zurück zur Übersicht
            </Link>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <ListChecks className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
              Bestenliste 2026 · {bestlist.filterLabel}
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {bestlist.h1}
            </h1>

            <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Info className="h-3.5 w-3.5" strokeWidth={2} />
              Redaktionell unabhängig. Beinhaltet Affiliate-Links.
            </p>
          </div>
        </section>

        {/* Intro content */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-2xl container-px py-10 lg:py-14">
            <div className="space-y-4">
              {bestlist.intro.map((para, i) => (
                <p
                  key={i}
                  className="text-[1.0625rem] leading-relaxed text-foreground/90"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Ranked list */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl container-px py-12 lg:py-16">
            <div className="flex items-center gap-2 mb-8">
              <Trophy className="h-5 w-5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Die Top-Empfehlungen in dieser Kategorie
              </h2>
            </div>

            {rankedRackets.length === 0 ? (
              <p className="text-muted-foreground">
                Aktuell sind keine Schläger in dieser Kategorie verfügbar.
              </p>
            ) : (
              <div className="space-y-6">
                {rankedRackets.map((racket, idx) => {
                  const rank = idx + 1;
                  const href = `/schlaeger/${racket.slug}`;
                  const isTop = rank === 1;
                  return (
                    <article
                      key={racket.id}
                      className={`group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-up ${
                        isTop ? 'border-neon/50' : 'border-border hover:border-neon/30'
                      }`}
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                        {/* Image with rank badge */}
                        <Link
                          href={href}
                          className="group/img relative block aspect-[4/3] overflow-hidden bg-secondary sm:aspect-auto"
                          aria-label={`${racket.brand} ${racket.name} Test ansehen`}
                        >
                          <Image
                            src={racket.image}
                            alt={racket.imageAlt}
                            fill
                            priority={idx === 0}
                            sizes="(max-width: 640px) 100vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover/img:scale-105"
                          />
                          <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-neon px-3 py-1 text-xs font-bold text-neon-foreground shadow-sm">
                            <Trophy className="h-3.5 w-3.5" strokeWidth={2.5} fill="currentColor" />
                            #{rank} {rank === 1 ? 'Empfehlung' : 'Platz'}
                          </div>
                        </Link>

                        {/* Content */}
                        <div className="sm:col-span-2 flex flex-col p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                {racket.brand}
                              </p>
                              <Link
                                href={href}
                                className="mt-1 block font-display text-2xl font-bold leading-tight tracking-tight transition-colors hover:text-neon-600 dark:hover:text-neon-400"
                              >
                                {racket.name}
                              </Link>
                            </div>
                            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neon px-2.5 py-1 text-[11px] font-semibold text-neon-foreground">
                              {racket.badge}
                            </span>
                          </div>

                          {/* Pros & Cons compact */}
                          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                Stärken
                              </p>
                              <ul className="mt-2 space-y-1.5">
                                {racket.pros.slice(0, 2).map((pro) => (
                                  <li key={pro} className="flex items-start gap-2 text-xs leading-relaxed">
                                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                      <Check className="h-3 w-3" strokeWidth={3} />
                                    </span>
                                    <span className="text-foreground/90">{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                                Schwächen
                              </p>
                              <ul className="mt-2 space-y-1.5">
                                {racket.cons.slice(0, 2).map((con) => (
                                  <li key={con} className="flex items-start gap-2 text-xs leading-relaxed">
                                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/15 text-rose-600 dark:text-rose-400">
                                      <X className="h-3 w-3" strokeWidth={3} />
                                    </span>
                                    <span className="text-foreground/90">{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Score + price + CTA */}
                          <div className="mt-5 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-6">
                              <div>
                                <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                                  Gesamtnote
                                </span>
                                <span className="font-display text-2xl font-bold tabular-nums">
                                  {racket.score.toFixed(1)}
                                  <span className="text-sm font-medium text-muted-foreground">/10</span>
                                </span>
                              </div>
                              <div>
                                <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                                  ab
                                </span>
                                <span className="font-display text-2xl font-bold">{racket.price}</span>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 sm:flex-row">
                              <Link
                                href={href}
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                              >
                                Testbericht
                              </Link>
                              <a
                                href={racket.affiliateUrl}
                                target="_blank"
                                rel="noopener noreferrer sponsored"
                                className="group/btn inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-5 py-2.5 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95"
                              >
                                <ShoppingBag className="h-4 w-4" strokeWidth={2.5} />
                                Preis prüfen
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Other bestlists */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl container-px py-12 lg:py-16">
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Beliebte Bestenlisten
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {bestlists
                .filter((b) => b.slug !== bestlist.slug)
                .map((b) => (
                  <Link
                    key={b.slug}
                    href={`/bestenliste/${b.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-neon/40 hover:shadow-md"
                  >
                    <ListChecks className="h-5 w-5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
                    <h3 className="mt-3 font-display text-base font-bold leading-snug transition-colors group-hover:text-neon-600 dark:group-hover:text-neon-400">
                      {b.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                      Zur Bestenliste
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto max-w-7xl container-px py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon text-neon-foreground">
                  <Compass className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="font-display text-base font-bold">
                  Padel-Pilot<span className="text-neon-600 dark:text-neon-400">.de</span>
                </span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Unabhängige Padel-Schläger-Tests und Kaufberatung.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tests
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/#tests" className="text-muted-foreground hover:text-foreground">Bestenliste</Link></li>
                <li><Link href="/kaufberatung" className="text-muted-foreground hover:text-foreground">Kaufberatung</Link></li>
                <li><Link href="/#ratgeber" className="text-muted-foreground hover:text-foreground">Ratgeber</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Beliebte Bestenlisten
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {bestlists.map((b) => (
                  <li key={b.slug}>
                    <Link
                      href={`/bestenliste/${b.slug}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Rechtliches
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/impressum" className="text-muted-foreground hover:text-foreground">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-muted-foreground hover:text-foreground">Datenschutz</Link></li>
                <li><Link href="/testkriterien" className="text-muted-foreground hover:text-foreground">Wie wir testen</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Padel-Pilot.de. Alle Rechte vorbehalten.</p>
            <p>Wir nutzen Affiliate-Links. Der Preis bleibt für dich gleich.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
