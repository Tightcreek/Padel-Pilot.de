'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
  Search,
  Sparkles,
  Trophy,
  Wallet,
  Zap,
} from 'lucide-react';
import { rackets, type Racket, type RacketLevel, type RacketShape } from '@/data/rackets';
import { cn } from '@/lib/utils';

type Step = 0 | 1 | 2 | 3;

interface LevelOption {
  label: string;
  description: string;
  icon: typeof Sparkles;
  match: RacketLevel;
}

const levelOptions: LevelOption[] = [
  {
    label: 'Anfänger / Einsteiger',
    description: 'Ich spiele seit kurzem und lerne noch die Grundlagen.',
    icon: Sparkles,
    match: 'Anfänger',
  },
  {
    label: 'Fortgeschritten',
    description: 'Ich spiele regelmäßig und beherrsche die wichtigsten Schläge.',
    icon: Zap,
    match: 'Fortgeschritten',
  },
  {
    label: 'Turnier- / Profispieler',
    description: 'Ich spiele auf hohem Niveau und suche maximale Performance.',
    icon: Trophy,
    match: 'Profi',
  },
];

interface ShapeOption {
  label: string;
  description: string;
  icon: typeof Zap;
  match: RacketShape;
}

const shapeOptions: ShapeOption[] = [
  {
    label: 'Maximale Kontrolle & verzeihender Sweet Spot',
    description: 'Großer Treffpunkt, viel Gefühl — ideal für sicheres Spiel.',
    icon: CheckCircle2,
    match: 'Rund',
  },
  {
    label: 'Ausgewogene Allround-Performance',
    description: 'Der Mittelweg: Kontrolle trifft auf spürbare Power.',
    icon: Sparkles,
    match: 'Tropfenform',
  },
  {
    label: 'Kompromisslose Schlagkraft & Power',
    description: 'Maximaler Hebel für harte Smashes und offensive Bälle.',
    icon: Zap,
    match: 'Diamant',
  },
];

interface PriceOption {
  label: string;
  description: string;
  icon: typeof Wallet;
  min: number;
  max: number;
}

const priceOptions: PriceOption[] = [
  {
    label: 'Bis 150 €',
    description: 'Solide Einsteiger- und Mittelklasse-Schläger.',
    icon: Wallet,
    min: 0,
    max: 150,
  },
  {
    label: '150 € bis 250 €',
    description: 'Hochwertige Schläger für ambitionierte Spieler.',
    icon: Wallet,
    min: 150,
    max: 250,
  },
  {
    label: 'Über 250 € / Egal',
    description: 'Premium-Modelle ohne Budget-Limit.',
    icon: Wallet,
    min: 250,
    max: Infinity,
  },
];

const stepMeta = [
  { title: 'Wie gut spielst du Padel?', subtitle: 'Schritt 1 von 3 — dein Können', icon: Sparkles },
  { title: 'Was ist dir bei deinem Schläger am wichtigsten?', subtitle: 'Schritt 2 von 3 — die Form', icon: Zap },
  { title: 'Wie viel möchtest du investieren?', subtitle: 'Schritt 3 von 3 — dein Budget', icon: Wallet },
];

interface ScoredRacket {
  racket: Racket;
  matchScore: number;
}

function scoreRackets(
  level: RacketLevel,
  shape: RacketShape,
  price: PriceOption,
): ScoredRacket[] {
  const WEIGHT_LEVEL = 34;
  const WEIGHT_SHAPE = 33;
  const WEIGHT_PRICE = 33;

  const scored = rackets.map((racket) => {
    let score = 0;
    if (racket.level === level) score += WEIGHT_LEVEL;
    if (racket.shape === shape) score += WEIGHT_SHAPE;
    if (racket.priceValue >= price.min && racket.priceValue <= price.max) score += WEIGHT_PRICE;
    return { racket, matchScore: score };
  });

  return scored.sort((a, b) => {
    if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
    return b.racket.score - a.racket.score;
  });
}

function matchLabel(score: number): string {
  if (score >= 99) return 'Perfekter Match';
  if (score >= 80) return 'Sehr starker Match';
  if (score >= 60) return 'Guter Match';
  if (score >= 40) return 'Solider Match';
  return 'Bedingt passend';
}

export function RacketFinderQuiz() {
  const [step, setStep] = useState<Step>(0);
  const [level, setLevel] = useState<RacketLevel | null>(null);
  const [shape, setShape] = useState<RacketShape | null>(null);
  const [price, setPrice] = useState<PriceOption | null>(null);

  const results: ScoredRacket[] =
    step === 3 && level && shape && price ? scoreRackets(level, shape, price) : [];

  const reset = () => {
    setStep(0);
    setLevel(null);
    setShape(null);
    setPrice(null);
  };

  const progress = step === 3 ? 100 : (step / 3) * 100;

  return (
    <section id="schlaeger-finder" className="scroll-mt-24 border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-5xl container-px py-16 lg:py-24">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-neon-600 dark:text-neon-400">
            <Search className="h-3.5 w-3.5" strokeWidth={2.5} />
            Schläger-Finder
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Finde deinen perfekten Schläger in 3 Schritten
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Beantworte drei kurze Fragen — wir vergleichen deine Antworten mit
            allen getesteten Modellen und zeigen dir die Schläger, die am besten
            zu dir passen.
          </p>
        </div>

        {/* Card */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          {/* Progress bar */}
          <div className="border-b border-border px-6 py-4 sm:px-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {step < 3 ? stepMeta[step].subtitle : 'Ergebnis'}
              </span>
              <span className="font-display text-sm font-bold tabular-nums">
                {step < 3 ? `${step + 1} / 3` : 'Fertig'}
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-neon transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-10">
            {step < 3 ? (
              <div className="animate-fade-up">
                {/* Question */}
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon-600 dark:text-neon-400">
                    {(() => {
                      const Icon = stepMeta[step].icon;
                      return <Icon className="h-5 w-5" strokeWidth={2.5} />;
                    })()}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {stepMeta[step].title}
                  </h3>
                </div>

                {/* Options */}
                <div className="mt-6 grid grid-cols-1 gap-3">
                  {step === 0 &&
                    levelOptions.map((opt) => {
      const selected = level === opt.match;
                    return (
                      <OptionButton
                        key={opt.label}
                        label={opt.label}
                        description={opt.description}
                        icon={opt.icon}
                        selected={selected}
                        onClick={() => {
                          setLevel(opt.match);
                          setTimeout(() => setStep(1), 250);
                        }}
                      />
                    );
                  })}
                  {step === 1 &&
                    shapeOptions.map((opt) => {
      const selected = shape === opt.match;
                    return (
                      <OptionButton
                        key={opt.label}
                        label={opt.label}
                        description={opt.description}
                        icon={opt.icon}
                        selected={selected}
                        onClick={() => {
                          setShape(opt.match);
                          setTimeout(() => setStep(2), 250);
                        }}
                      />
                    );
                  })}
                  {step === 2 &&
                    priceOptions.map((opt) => {
      const selected = price?.label === opt.label;
                    return (
                      <OptionButton
                        key={opt.label}
                        label={opt.label}
                        description={opt.description}
                        icon={opt.icon}
                        selected={selected}
                        onClick={() => {
                          setPrice(opt);
                          setTimeout(() => setStep(3), 250);
                        }}
                      />
                    );
                  })}
                </div>

                {/* Back */}
                {step > 0 && (
                  <button
                    onClick={() => setStep((step - 1) as Step)}
                    className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
                    Zurück
                  </button>
                )}
              </div>
            ) : (
              /* Results */
              <div className="animate-fade-up">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                      Deine Top-Empfehlungen
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Basierend auf deinen Angaben haben wir diese Schläger
                      ausgewählt.
                    </p>
                  </div>
                  <button
                    onClick={reset}
                    className="group inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    <RotateCcw className="h-4 w-4 transition-transform group-hover:-rotate-180 duration-500" strokeWidth={2.5} />
                    Quiz neustarten
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {results.slice(0, 2).map(({ racket, matchScore }, idx) => {
                    const href = `/schlaeger/${racket.slug}`;
                    return (
                      <article
                        key={racket.id}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neon/40 animate-fade-up"
                        style={{ animationDelay: `${idx * 120}ms` }}
                      >
                        {/* Rank badge */}
                        {idx === 0 && matchScore >= 66 && (
                          <div className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-neon px-3 py-1 text-[11px] font-semibold text-neon-foreground shadow-sm">
                            <Trophy className="h-3.5 w-3.5" strokeWidth={2.5} fill="currentColor" />
                            Top-Empfehlung
                          </div>
                        )}

                        {/* Image */}
                        <Link
                          href={href}
                          className="relative aspect-[16/10] overflow-hidden bg-secondary"
                          aria-label={`${racket.brand} ${racket.name} Test ansehen`}
                        >
                          <Image
                            src={racket.image}
                            alt={racket.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          {/* Match score overlay */}
                          <div className="absolute bottom-3 left-3 rounded-lg bg-black/70 px-3 py-1.5 backdrop-blur-sm">
                            <span className="font-display text-lg font-bold tabular-nums text-white">
                              {matchScore}%
                            </span>
                            <span className="ml-1.5 text-xs font-medium text-white/80">
                              {matchLabel(matchScore)}
                            </span>
                          </div>
                        </Link>

                        {/* Body */}
                        <div className="flex flex-1 flex-col p-5">
                          <span className="inline-flex w-fit items-center gap-1 rounded-full bg-neon px-2.5 py-0.5 text-[10px] font-semibold text-neon-foreground">
                            {racket.badge}
                          </span>
                          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {racket.brand}
                          </p>
                          <Link
                            href={href}
                            className="mt-0.5 font-display text-lg font-bold leading-tight transition-colors hover:text-neon-600 dark:hover:text-neon-400"
                          >
                            {racket.name}
                          </Link>

                          {/* Match score bar */}
                          <div className="mt-4">
                            <div className="flex items-baseline justify-between">
                              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                Match-Score
                              </span>
                              <span className="font-display text-sm font-bold tabular-nums">
                                {matchScore}%
                              </span>
                            </div>
                            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                              <div
                                className="h-full rounded-full bg-neon transition-all duration-700 ease-out"
                                style={{ width: `${matchScore}%` }}
                              />
                            </div>
                          </div>

                          {/* Price */}
                          <div className="mt-4 flex items-baseline gap-1.5">
                            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                              ab
                            </span>
                            <span className="font-display text-xl font-bold">{racket.price}</span>
                          </div>

                          {/* Actions */}
                          <div className="mt-5 flex flex-col gap-2.5 pt-4 border-t border-border">
                            <a
                              href={racket.affiliateUrl}
                              target="_blank"
                              rel="noopener noreferrer sponsored"
                              className="group/btn inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-4 py-3 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95"
                            >
                              Aktuellen Preis prüfen
                              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
                            </a>
                            <Link
                              href={href}
                              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
                            >
                              Testbericht lesen
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Summary of answers */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span className="font-semibold uppercase tracking-wider">Deine Auswahl:</span>
                  <span className="rounded-full border border-border bg-secondary/60 px-3 py-1">{level}</span>
                  <span className="rounded-full border border-border bg-secondary/60 px-3 py-1">{shape}</span>
                  <span className="rounded-full border border-border bg-secondary/60 px-3 py-1">{price?.label}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface OptionButtonProps {
  label: string;
  description: string;
  icon: typeof Sparkles;
  selected: boolean;
  onClick: () => void;
}

function OptionButton({ label, description, icon: Icon, selected, onClick }: OptionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group flex items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-200 sm:p-5',
        selected
          ? 'border-neon bg-neon/5 ring-1 ring-neon/30'
          : 'border-border bg-card hover:border-neon/40 hover:bg-secondary/40',
      )}
    >
      <span
        className={cn(
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors',
          selected
            ? 'bg-neon text-neon-foreground'
            : 'bg-secondary text-muted-foreground group-hover:text-foreground',
        )}
      >
        <Icon className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <div className="flex-1">
        <p className="font-display text-base font-bold leading-tight">{label}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <span
        className={cn(
          'mt-1 transition-opacity',
          selected ? 'opacity-100' : 'opacity-0',
        )}
      >
        <CheckCircle2 className="h-5 w-5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
      </span>
    </button>
  );
}
