import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Info,
  ListChecks,
  ShoppingBag,
  Trophy,
  X,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { balls } from '@/data/balls';

export const metadata: Metadata = {
  title: 'Die besten Padel-Bälle 2026 im Test: Vergleich & Empfehlungen',
  description:
    'Alle Padel-Bälle im Test 2026: Speed, Allround und Preis-Leistung im Vergleich. Wir haben Haltbarkeit, Sprungverhalten und Spielgefühl unabhängig getestet.',
  alternates: {
    canonical: '/baelle',
  },
  openGraph: {
    title: 'Die besten Padel-Bälle 2026 im Test: Vergleich & Empfehlungen',
    description:
      'Alle Padel-Bälle im Test 2026: Speed, Allround und Preis-Leistung im Vergleich, unabhängig getestet.',
    type: 'website',
    locale: 'de_DE',
  },
};

function buildItemListJsonLd() {
  const items = [...balls].sort((a, b) => b.score - a.score);
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Beste Padel-Bälle 2026',
    itemListElement: items.map((ball, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `${ball.brand} ${ball.name}`,
        image: ball.image,
        brand: { '@type': 'Brand', name: ball.brand },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: ball.score,
          bestRating: 10,
          ratingCount: 24,
        },
        offers: {
          '@type': 'Offer',
          price: ball.priceValue,
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };
}

export default function BaellePage() {
  const rankedBalls = [...balls].sort((a, b) => b.score - a.score);
  const jsonLd = buildItemListJsonLd();

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
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <ListChecks className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
              Bälle-Tests 2026 · {balls.length} Modelle
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Die besten Padel-Bälle 2026 im Test
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
              <p className="text-[1.0625rem] leading-relaxed text-foreground/90">
                Der richtige Padel-Ball entscheidet über Tempo, Kontrolle und Haltbarkeit
                deiner Matches, und die Unterschiede zwischen den Modellen sind größer,
                als viele Einsteiger denken. Wir haben die aktuell relevantesten Bälle
                über mehrere Wochen im Training und in Vereinsmatches gespielt und dabei
                gezielt auf Sprungverhalten, Haltbarkeit und das Preis-Leistungs-Verhältnis
                geachtet.
              </p>
              <p className="text-[1.0625rem] leading-relaxed text-foreground/90">
                Schnelle Speed-Bälle wie der Head Pro S oder der Wilson Premier Padel
                Speed liefern maximale Sprungkraft für Turniertage, verlieren aber
                schneller an Druck. Allround-Bälle wie der Babolat Court APT oder der
                Bullpadel Next Pro sind die verlässlicheren Begleiter für den
                Trainingsalltag, da sie ihre Sprungeigenschaften über deutlich mehr
                Spielstunden konstant halten.
              </p>
              <p className="text-[1.0625rem] leading-relaxed text-foreground/90">
                Achte beim Kauf außerdem auf die passende Druckstärke für deinen
                Court-Belag und deine Spielstärke. Fortgeschrittene und Profis kommen
                mit höherem Druck meist besser zurecht, während Einsteiger von etwas
                weicheren, langsameren Bällen profitieren, die mehr Zeit zum Reagieren
                lassen.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl container-px py-10 lg:py-14">
            <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
              Alle Bälle auf einen Blick
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Sortiert nach Gesamtnote. Klicke auf ein Modell für die ausführliche Bewertung.
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th scope="col" className="px-4 py-3 font-semibold">Ball</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Typ</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Druck</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Level</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-right">Score</th>
                    <th scope="col" className="px-4 py-3 font-semibold text-right">Preis</th>
                    <th scope="col" className="px-4 py-3 font-semibold sr-only sm:not-sr-only">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {rankedBalls.map((ball, idx) => (
                    <tr
                      key={ball.id}
                      className={`border-b border-border/60 last:border-0 transition-colors hover:bg-secondary/40 ${
                        idx === 0 ? 'bg-neon/5' : ''
                      }`}
                    >
                      <td className="px-4 py-3">
                        <a href={`#ball-${ball.slug}`} className="flex items-center gap-3 font-medium hover:text-neon-600 dark:hover:text-neon-400">
                          {idx === 0 && (
                            <Trophy className="h-4 w-4 shrink-0 text-neon-600 dark:text-neon-400" strokeWidth={2.5} fill="currentColor" />
                          )}
                          <span>
                            <span className="block text-xs text-muted-foreground">{ball.brand}</span>
                            {ball.name}
                          </span>
                        </a>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{ball.type}</td>
                      <td className="px-4 py-3 text-muted-foreground">{ball.pressure}</td>
                      <td className="px-4 py-3 text-muted-foreground">{ball.level}</td>
                      <td className="px-4 py-3 text-right font-display font-bold tabular-nums">
                        {ball.score.toFixed(1)}
                      </td>
                      <td className="px-4 py-3 text-right font-medium">{ball.price}</td>
                      <td className="px-4 py-3 text-right">
                        <a
                          href={`#ball-${ball.slug}`}
                          className="hidden rounded-md border border-border px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-secondary sm:inline-block"
                        >
                          Ansehen
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Ranked list */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl container-px py-12 lg:py-16">
            <div className="flex items-center gap-2 mb-8">
              <Trophy className="h-5 w-5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Alle getesteten Bälle im Vergleich
              </h2>
            </div>

            <div className="space-y-6">
              {rankedBalls.map((ball, idx) => {
                const rank = idx + 1;
                const href = `/baelle/${ball.slug}`;
                const isTop = rank === 1;
                return (
                  <article
                    key={ball.id}
                    id={`ball-${ball.slug}`}
                    className={`group scroll-mt-24 overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:shadow-lg animate-fade-up ${
                      isTop ? 'border-neon/50' : 'border-border hover:border-neon/30'
                    }`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                      {/* Image with rank badge */}
                      <Link
                        href={href}
                        className="group/img relative block aspect-[4/3] overflow-hidden bg-secondary sm:aspect-auto"
                        aria-label={`${ball.brand} ${ball.name} Test ansehen`}
                      >
                        <Image
                          src={ball.image}
                          alt={ball.imageAlt}
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
                              {ball.brand}
                            </p>
                            <Link
                              href={href}
                              className="mt-1 block font-display text-2xl font-bold leading-tight tracking-tight transition-colors hover:text-neon-600 dark:hover:text-neon-400"
                            >
                              {ball.name}
                            </Link>
                          </div>
                          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neon px-2.5 py-1 text-[11px] font-semibold text-neon-foreground">
                            {ball.badge}
                          </span>
                        </div>

                        {/* Pros & Cons compact */}
                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                              Stärken
                            </p>
                            <ul className="mt-2 space-y-1.5">
                              {ball.pros.slice(0, 2).map((pro) => (
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
                              {ball.cons.slice(0, 2).map((con) => (
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
                                {ball.score.toFixed(1)}
                                <span className="text-sm font-medium text-muted-foreground">/10</span>
                              </span>
                            </div>
                            <div>
                              <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                                ab
                              </span>
                              <span className="font-display text-2xl font-bold">{ball.price}</span>
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
                              href={ball.affiliateUrl}
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
