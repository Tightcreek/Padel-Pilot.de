'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Droplet, Gauge, Target, ArrowRight } from 'lucide-react';
import type { Racket } from '@/data/rackets';
import { cn } from '@/lib/utils';

interface RacketCardProps {
  racket: Racket;
  priority?: boolean;
}

const levelStyles: Record<Racket['level'], string> = {
  Anfänger: 'text-emerald-700 dark:text-emerald-400',
  Fortgeschritten: 'text-amber-700 dark:text-amber-400',
  Profi: 'text-rose-700 dark:text-rose-400',
};

export function RacketCard({ racket, priority = false }: RacketCardProps) {
  const href = `/schlaeger/${racket.slug}`;
  const pills = [
    { icon: Droplet, label: racket.shape },
    { icon: Gauge, label: racket.weight },
    { icon: Target, label: racket.level, accent: true },
  ];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neon/40">
      {/* Award badge */}
      <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-neon px-3 py-1 text-[11px] font-semibold text-neon-foreground shadow-sm">
        <Award className="h-3.5 w-3.5" strokeWidth={2.5} fill="currentColor" />
        <span className="whitespace-nowrap">{racket.badge}</span>
      </div>

      {/* Image container */}
      <Link href={href} className="relative aspect-[4/3] overflow-hidden bg-secondary" aria-label={`${racket.brand} ${racket.name} Test ansehen`}>
        <Image
          src={racket.image}
          alt={racket.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {racket.brand}
        </p>
        <Link href={href} className="mt-1 font-display text-xl font-bold leading-tight tracking-tight transition-colors hover:text-neon-600 dark:hover:text-neon-400">
          {racket.name}
        </Link>

        {/* Data pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {pills.map((pill) => (
            <span
              key={pill.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium',
                pill.accent && levelStyles[racket.level],
              )}
            >
              <pill.icon className="h-3.5 w-3.5" strokeWidth={2} />
              {pill.label}
            </span>
          ))}
        </div>

        {/* Score */}
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Bewertung
            </span>
            <span className="font-display text-2xl font-bold tabular-nums">
              {racket.score.toFixed(1)}
              <span className="text-sm font-medium text-muted-foreground">/10</span>
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-neon transition-all duration-700 ease-out"
              style={{ width: `${(racket.score / 10) * 100}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-end justify-between pt-4 border-t border-border">
          <div>
            <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              ab
            </span>
            <span className="font-display text-lg font-bold">{racket.price}</span>
          </div>
          <Link
            href={href}
            className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-neon px-4 py-2.5 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95"
          >
            Zum Test
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </article>
  );
}
