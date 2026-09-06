import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Sun, ArrowRight, MapPinned, Sparkles } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PlaceSearch } from '@/components/place-search';
import { atlasCities, getCityCourtStats, getKnownStartingPrices } from '@/data/places';

export const metadata: Metadata = {
  title: 'Padel-Courts in Deutschland, Österreich & der Schweiz finden | Padel-Pilot.de',
  description:
    'Finde Padel-Courts in deiner Stadt: Indoor- und Outdoor-Anlagen, Preise, Ausstattung und Buchungslinks für die besten Padel-Plätze im DACH-Raum.',
  alternates: {
    canonical: 'https://www.padel-pilot.de/plaetze',
  },
};

export default function PlaetzePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl container-px py-12 lg:py-16">
        <PlaceSearch />

        <section className="mt-14" aria-labelledby="cities-heading">
          <div className="flex items-end justify-between">
            <div>
              <h2 id="cities-heading" className="font-display text-2xl font-bold tracking-tight">
                Alle Städte im Überblick
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {atlasCities.length} {atlasCities.length === 1 ? 'Stadt' : 'Städte'} bereits im Atlas
                erfasst
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {atlasCities.map((city) => {
              const stats = getCityCourtStats(city.venues);
              const prices = getKnownStartingPrices(city.venues);
              const lowestPrice = prices.length > 0 ? Math.min(...prices) : null;

              return (
                <Link
                  key={city.id}
                  href={`/plaetze/${city.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-neon-500/60 hover:shadow-xl hover:shadow-neon-500/10"
                >
                  {/* Farbiger Kopfbereich */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-neon/15 via-neon/5 to-transparent p-6 pb-5">
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-neon/10 blur-2xl transition-all duration-300 group-hover:bg-neon/20" />

                    <div className="relative flex items-start justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon text-neon-foreground shadow-sm">
                          <MapPinned className="h-5 w-5" strokeWidth={2.25} />
                        </span>
                        <div>
                          <h3 className="font-display text-xl font-bold tracking-tight">
                            {city.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {city.venues.length} {city.venues.length === 1 ? 'Anlage' : 'Anlagen'}{' '}
                            verifiziert
                          </p>
                        </div>
                      </div>

                      <ArrowRight className="mt-1.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-neon-600 dark:group-hover:text-neon-400" />
                    </div>
                  </div>

                  {/* Court-Statistik */}
                  <div className="flex flex-1 flex-col justify-between p-6 pt-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl font-bold tracking-tight">
                        {stats.total}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        Padel-Courts
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {stats.indoor > 0 && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                          <Building2 className="h-3 w-3" />
                          {stats.indoor} Indoor
                        </span>
                      )}
                      {stats.outdoor > 0 && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                          <Sun className="h-3 w-3" />
                          {stats.outdoor} Outdoor
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      {lowestPrice !== null ? (
                        <p className="text-sm text-muted-foreground">
                          Preise ab{' '}
                          <strong className="font-semibold text-foreground">
                            {lowestPrice} €
                          </strong>
                          <span className="text-xs"> / Std.</span>
                        </p>
                      ) : (
                        <span />
                      )}

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-neon-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-neon-400">
                        Ansehen <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}

            <div className="flex flex-col items-start justify-center gap-2 rounded-2xl border border-dashed border-border bg-secondary/20 p-6 text-sm text-muted-foreground">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                <Sparkles className="h-5 w-5 text-muted-foreground" />
              </span>
              <p className="mt-1 font-semibold text-foreground">Weitere Städte folgen</p>
              <p>
                Wir erweitern den Atlas laufend um weitere Städte in Deutschland, Österreich und
                der Schweiz.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
