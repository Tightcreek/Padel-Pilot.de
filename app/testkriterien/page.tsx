import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ClipboardCheck,
  Heart,
  ShieldCheck,
  Target,
  Hand,
  Gauge,
  Sparkles,
} from 'lucide-react';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'So testen wir — Testkriterien & Methodik | Padel-Pilot.de',
  description:
    'Transparenz statt Datenblatt: Wie wir Padel-Schläger in der Praxis testen, unser 10-Punkte-System funktioniert und warum Affiliate-Links unsere Testnote nicht beeinflussen.',
  alternates: { canonical: '/testkriterien' },
  openGraph: {
    title: 'So testen wir — Transparenz, echte Courts, ehrliche Meinungen | Padel-Pilot.de',
    description:
      'Praxis-Test, 10-Punkte-System, vollständige Unabhängigkeit: So entstehen unsere Padel-Schläger-Tests.',
    type: 'article',
    locale: 'de_DE',
  },
};

const pillars = [
  {
    icon: Hand,
    title: 'Praxis-Test',
    description:
      'Wir stehen selbst auf dem Court. Kein Schläger wird nur nach Datenblatt beurteilt — jeder Test umfasst reale Spielstunden in unterschiedlichen Niveaustufen, Schlag- und Spielsituationen.',
    points: [
      'Mehrere Test-Sessions pro Schläger',
      'Einsatz im Match und Training',
      'Feedback von Spielern unterschiedlicher Niveaustufen',
    ],
  },
  {
    icon: Target,
    title: 'Das 10-Punkte-System',
    description:
      'Jeder Schläger wird in drei Kernkategorien bewertet, die zu einer gewichteten Gesamtnote führen. So bleibt der Vergleich objektiv und nachvollziehbar.',
    points: [
      'Power: Smash-Kraft, Ballbeschleunigung, Druckspiel',
      'Kontrolle: Präzision, Ballgefühl, Platzierung',
      'Handling: Manövrierbarkeit, Komfort, Vibrationsdämpfung',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Unabhängigkeit',
    description:
      'Wir finanzieren uns über Affiliate-Links (u. a. Amazon PartnerNet). Diese haben jedoch keinen Einfluss auf die Testnote — ein schlechter Schläger bekommt auch dann eine ehrliche Kritik, wenn er über einen Partnerlink gekauft wird.',
    points: [
      'Keine Bezahlung für positive Bewertungen',
      'Testergebnisse werden vor Partner-Integration erstellt',
      'Schlechte Noten werden nicht verschwiegen',
    ],
  },
];

const scoreBreakdown = [
  {
    icon: Gauge,
    label: 'Power',
    weight: '35 %',
    description:
      'Wie viel Druck lässt sich im Smash und Volley erzeugen? Wie schnell beschleunigt der Ball?',
  },
  {
    icon: Target,
    label: 'Kontrolle',
    weight: '35 %',
    description:
      'Präzision bei Bande, Stoppbällen und defensiven Schlägen. Wie gut lässt sich der Ball lenken?',
  },
  {
    icon: Sparkles,
    label: 'Handling',
    weight: '30 %',
    description:
      'Gewicht, Balance, Schwung und Vibrationsdämpfung. Wie ermüdungsfrei und komfortabel spielt sich der Schläger?',
  },
];

export default function TestkriterienPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-neon/10 blur-3xl" />
          <div className="mx-auto max-w-4xl container-px py-16 text-center lg:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <ClipboardCheck className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" />
              Methodik &amp; Transparenz
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              So testen wir:{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Transparenz</span>
                <span className="absolute inset-x-0 bottom-1.5 -z-0 h-3 bg-neon/70 sm:bottom-2 sm:h-4" />
              </span>
              , echte Courts, ehrliche Meinungen.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Wir schreiben keine Datenblätter ab. Wir stehen auf dem Platz,
              spielen jeden Schläger selbst und bewerten ihn nach einem
              klaren 10-Punkte-System — unabhängig davon, wo er gekauft wird.
            </p>
          </div>
        </section>

        {/* Three pillars */}
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
                          <Heart
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

        {/* Score breakdown */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-5xl container-px py-16 lg:py-24">
            <div className="text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Das 10-Punkte-System im Detail
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Jede Kategorie wird mit 0 bis 10 Punkten bewertet. Die
                Gesamtnote ergibt sich aus der Gewichtung der drei Säulen.
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
              Sieh dir die Ergebnisse an
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Unsere Tests fließen direkt in die Bestenliste ein. Vergleiche
              die Noten und finde den Schläger, der zu deinem Spiel passt.
            </p>
            <Link
              href="/#tests"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-6 py-3 text-sm font-semibold text-neon-foreground transition-all hover:bg-neon-600 hover:shadow-lg"
            >
              Zur Bestenliste
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
