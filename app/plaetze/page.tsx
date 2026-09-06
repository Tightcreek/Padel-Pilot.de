import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Building2, Sun, ArrowRight } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
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
  const totalVenues = atlasCities.reduce((sum, city) => sum + city.venues.length, 0);
  const totalCourts = atlasCities.reduce((sum, city) => {
    const stats = getCityCourtStats(city.venues);
    return sum + stats.total;
  }, 0);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl container-px py-12 lg:py-16">
        <header className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-600 dark:text-neon-400">
            <MapPin className="h-3.5 w-3.5" />
            Padel-Court-Atlas
          </p>

          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Padel-Courts finden
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Wir haben aktuell <strong className="text-foreground">{totalVenues} Padel-Anlagen</strong> mit
            zusammen <strong className="text-foreground">{totalCourts} Courts</strong> im DACH-Raum
            recherchiert und verifiziert. Wähle deine Stadt, um Adressen, Preise, Ausstattung und
            Buchungslinks zu sehen.
          </p>
        </header>

        <section className="mt-10" aria-labelledby="cities-heading">
          <h2 id="cities-heading" className="sr-only">
            Verfügbare Städte
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {atlasCities.map((city) => {
              const stats = getCityCourtStats(city.venues);
              const prices = getKnownStartingPrices(city.venues);
              const lowestPrice = prices.length > 0 ? Math.min(...prices) : null;

              return (
                <Link
                  key={city.id}
                  href={`/plaetze/${city.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-neon/50 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {city.name}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-neon-600" />
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {city.venues.length} {city.venues.length === 1 ? 'Anlage' : 'Anlagen'} verifiziert
                  </p>

                  <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-lg bg-secondary/50 py-2">
                      <dt className="text-xs text-muted-foreground">Courts</dt>
                      <dd className="font-semibold">{stats.total}</dd>
                    </div>
                    <div className="rounded-lg bg-secondary/50 py-2">
                      <dt className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                        <Building2 className="h-3 w-3" /> Indoor
                      </dt>
                      <dd className="font-semibold">{stats.indoor}</dd>
                    </div>
                    <div className="rounded-lg bg-secondary/50 py-2">
                      <dt className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                        <Sun className="h-3 w-3" /> Outdoor
                      </dt>
                      <dd className="font-semibold">{stats.outdoor}</dd>
                    </div>
                  </dl>

                  {lowestPrice !== null && (
                    <p className="mt-4 text-sm text-muted-foreground">
                      Preise ab <strong className="text-foreground">{lowestPrice} €</strong> pro Court/Stunde
                    </p>
                  )}
                </Link>
              );
            })}

            <div className="flex flex-col items-start justify-center rounded-xl border border-dashed border-border bg-secondary/20 p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Weitere Städte folgen</p>
              <p className="mt-1">
                Wir erweitern den Atlas laufend um weitere Städte in Deutschland, Österreich und der
                Schweiz.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
