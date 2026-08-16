import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ListChecks, Trophy } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { bestlists, getRacketsForBestlist } from '@/data/bestlists';

export const metadata: Metadata = {
  title: 'Alle Bestenlisten: Padel-Schläger nach Kategorie 2026 — Padel-Pilot.de',
  description:
    'Alle Padel-Schläger-Bestenlisten 2026 im Überblick. Finde die besten Modelle für Anfänger, unter 200 Euro oder mit Fokus auf Kontrolle, unabhängig getestet.',
  alternates: {
    canonical: '/bestenliste',
  },
  openGraph: {
    title: 'Alle Bestenlisten: Padel-Schläger nach Kategorie 2026',
    description:
      'Alle Padel-Schläger-Bestenlisten 2026 im Überblick, unabhängig getestet und verglichen.',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function BestenlisteOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -left-32 -top-16 h-[420px] w-[420px] rounded-full bg-neon/10 blur-3xl" />
          <div className="mx-auto max-w-4xl container-px py-12 lg:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <ListChecks className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
              Bestenlisten 2026
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Alle Bestenlisten im Überblick
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Jeder Spieler hat andere Ansprüche. Wir haben unsere Testergebnisse nach
              Spielniveau, Budget und Spielstil sortiert, damit du direkt die Schläger
              siehst, die zu dir passen. Alle Empfehlungen basieren auf echten
              Praxistests auf dem Court.
            </p>
          </div>
        </section>

        {/* Bestlist cards */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl container-px py-12 lg:py-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {bestlists.map((bestlist, i) => {
                const rankedRackets = getRacketsForBestlist(bestlist);
                const topRacket = rankedRackets[0];

                return (
                  <Link
                    key={bestlist.slug}
                    href={`/bestenliste/${bestlist.slug}`}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/40 hover:shadow-lg animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <ListChecks className="h-5 w-5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {bestlist.filterLabel}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-xl font-bold leading-snug transition-colors group-hover:text-neon-600 dark:group-hover:text-neon-400">
                      {bestlist.title}
                    </h2>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {bestlist.intro[0]}
                    </p>

                    {topRacket && (
                      <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-3 py-2.5">
                        <Trophy className="h-4 w-4 shrink-0 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
                        <span className="text-xs text-muted-foreground">
                          Testsieger:{' '}
                          <span className="font-semibold text-foreground">
                            {topRacket.brand} {topRacket.name}
                          </span>
                        </span>
                      </div>
                    )}

                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                      Zur Bestenliste
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </span>
                  </Link>
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
