import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CircleDot } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { balls } from '@/data/balls';

export const metadata: Metadata = {
  title: 'Padelbälle im Test: Die besten Bälle 2026 — Padel-Pilot.de',
  description:
    'Alle getesteten Padelbälle 2026 im Überblick. Vom offiziellen Wettkampfball bis zum Preis-Leistungs-Sieger, unabhängig getestet und verglichen.',
  alternates: {
    canonical: '/baelle',
  },
  openGraph: {
    title: 'Padelbälle im Test: Die besten Bälle 2026',
    description:
      'Alle getesteten Padelbälle 2026 im Überblick, unabhängig getestet und verglichen.',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function BaelleOverviewPage() {
  const sortedBalls = [...balls].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -left-32 -top-16 h-[420px] w-[420px] rounded-full bg-neon/10 blur-3xl" />
          <div className="mx-auto max-w-4xl container-px py-12 lg:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <CircleDot className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
              Padelbälle 2026
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Die besten Padelbälle im Test
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Der richtige Ball beeinflusst Tempo, Sprungverhalten und Haltbarkeit
              genauso stark wie der Schläger selbst. Wir haben offizielle
              Wettkampfbälle, Allrounder und Preis-Leistungs-Sieger verglichen, damit
              du den passenden Ball für dein Spielniveau findest.
            </p>
          </div>
        </section>

        {/* Ball cards */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl container-px py-12 lg:py-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedBalls.map((ball, i) => (
                <Link
                  key={ball.slug}
                  href={`/baelle/${ball.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/40 hover:shadow-lg animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="relative aspect-[4/3] w-full bg-secondary">
                    <Image
                      src={ball.image}
                      alt={ball.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-bold shadow-sm backdrop-blur">
                      {ball.score.toFixed(1)}
                      <span className="font-medium text-muted-foreground">/10</span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-neon-600 dark:text-neon-400">
                      {ball.badge}
                    </span>

                    <h2 className="mt-2 font-display text-xl font-bold leading-snug transition-colors group-hover:text-neon-600 dark:group-hover:text-neon-400">
                      {ball.brand} {ball.name}
                    </h2>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {ball.teaser}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-semibold">ab {ball.price}</span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                        Zum Test
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
