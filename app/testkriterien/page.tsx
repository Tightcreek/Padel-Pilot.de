import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardCheck,
  CheckCircle2,
  ShieldCheck,
  Target,
  Hand,
  Gauge,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Wie wir testen: Transparente Kriterien & Methodik | Padel-Pilot.de',
  description:
    'Echte Praxistests auf dem Court statt Datenblätter: So bewerten wir Padel-Schläger nach unserem 10-Punkte-System für Power, Kontrolle und Handling.',
  alternates: { canonical: '/testkriterien' },
  openGraph: {
    title: 'Wie wir testen: Transparenz, echte Courts und ehrliche Urteile | Padel-Pilot.de',
    description:
      'Echte Praxistests, klares 10-Punkte-System und vollständige Unabhängigkeit. So entstehen unsere Padel-Schläger-Testberichte.',
    type: 'article',
    locale: 'de_DE',
  },
};

const pillars = [
  {
    icon: Hand,
    title: 'Echte Praxistests',
    description:
      'Wir stehen jede Woche selbst auf dem Court. Kein Schläger wird allein nach den Angaben des Herstellers beurteilt. Jeder Testbericht basiert auf mehreren Spielstunden in echten Match- und Trainingssituationen.',
    points: [
      'Mindestens 4 bis 6 Spielstunden pro Testmodell',
      'Einsatz bei Ballwechseln am Netz, an der Glaswand und beim Aufschlag',
      'Vergleichende Bewertung durch Spieler unterschiedlicher Spielstärken',
    ],
  },
  {
    icon: Target,
    title: 'Das 10-Punkte-System',
    description:
      'Damit unsere Urteile transparent und vergleichbar bleiben, bewerten wir jedes Racket in drei zentralen Hauptkategorien. Aus der Gewichtung dieser Noten berechnet sich die finale Gesamtnote.',
    points: [
      'Power: Schlagkraft bei Smashes, Beschleunigung und Durchsetzungsfähigkeit',
      'Kontrolle: Präzision bei Lobs, Chiquitas und Ballgefühl am Glaselement',
      'Handling: Wendigkeit am Netz, Gewichtsverteilung und Vibrationsdämpfung',
    ],
  },
  {
    icon: ShieldCheck,
    title: '100 % Unabhängigkeit',
    description:
      'Unsere Arbeit finanziert sich über Partner-Links zu etablierten Shops. Diese Provision hat jedoch keinerlei Einfluss auf unsere Bewertungen. Wenn ein Schläger Schwächen zeigt, sprechen wir diese im Testbericht offen an.',
    points: [
      'Keine bezahlten Gefälligkeitsurteile oder gekauften Testergebnisse',
      'Die Notenvergabe erfolgt vor der Einbindung von Shop-Links',
      'Kritische Schwachpunkte werden transparent hervorgehoben',
    ],
  },
];

const scoreBreakdown = [
  {
    icon: Gauge,
    label: 'Power',
    weight: '35 %',
    description:
      'Wie viel Ballgeschwindigkeit und Druck erzeugt der Schläger bei Angriffsschlägen am Netz und Smashes aus dem Rückfeld?',
  },
  {
    icon: Target,
    label: 'Kontrolle',
    weight: '35 %',
    description:
      'Wie präzise lassen sich Bälle platzieren? Bietet der Schläger eine hohe Fehlertoleranz bei defensiven Schlägen an der Glaswand?',
  },
  {
    icon: Sparkles,
    label: 'Handling & Komfort',
    weight: '30 %',
    description:
      'Wie schnell lässt sich das Racket in Reaktionsduellen ausrichten? Dämpft der Kern Stöße wirksam ab, um Armschmerzen vorzubeugen?',
  },
];

export default function TestkriterienPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Testkriterien und Methodik von Padel-Pilot.de',
    description:
      'Erfahre, wie Padel-Pilot Schläger unabhängig auf dem Court auf Power, Kontrolle und Handling prüft.',
    publisher: {
      '@type': 'Organization',
      name: 'Padel-Pilot',
      url: 'https://padel-pilot.de',
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Schema.org für Google E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-neon/10 blur-3xl" />
          <div className="mx-auto max-w-4xl container-px py-16 text-center lg:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <ClipboardCheck className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" />
              Methodik und Transparenz
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              So testen wir:{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Transparenz</span>
                <span className="absolute inset-x-0 bottom-1.5 -z-0 h-3 bg-neon/70 sm:bottom-2 sm:h-4" />
              </span>
              , echte Courts und ehrliche Meinungen.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Wir schreiben keine Marketingtexte der Hersteller ab. Wir stehen selbst auf dem Court, testen jeden Padel-Schläger intensiv in realen Match-Situationen und bewerten ihn nach einem klaren, nachvollziehbaren 10-Punkte-System.
            </p>
          </div>
        </section>

        {/* Die 3 Hauptsäulen */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl container-px py-16 lg:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-neon/40 hover:shadow-lg animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10">
                      <Icon
                        className="h-6 w-6 text-neon-600 dark:text-neon-400"
                        strokeWidth={2}
                      />
                    </div>
                    <h2 className="mt-5 font-display text-xl font-bold">
                      {pillar.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                    <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                      {pillar.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-neon-600 dark:text-neon-400"
                            strokeWidth={2}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Notensystem im Detail */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-5xl container-px py-16 lg:py-24">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Das 10-Punkte-System im Detail
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Jedes Testmodell wird in drei Disziplinen bewertet. Die Gesamtnote ergibt sich aus der klaren Gewichtung dieser Bewertungskriterien.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {scoreBreakdown.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:gap-6 animate-fade-up"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neon/10">
                      <Icon
                        className="h-7 w-7 text-neon-600 dark:text-neon-400"
                        strokeWidth={2}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-lg font-bold">
                          {item.label}
                        </h3>
                        <span className="font-display text-sm font-bold text-neon-600 dark:text-neon-400">
                          {item.weight}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="mx-auto max-w-4xl container-px py-16 text-center lg:py-24">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Finde jetzt den passenden Schläger für dein Spiel
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Sämtliche Praxistests fließen direkt in unsere aktuellen Testberichte und Bestenlisten ein. Vergleiche die Noten und triff eine fundierte Kaufentscheidung.
            </p>
            <Link
              href="/#tests"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-neon-foreground transition-all hover:bg-neon-600 hover:shadow-lg"
            >
              Zu allen Testberichten
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
