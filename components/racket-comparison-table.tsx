import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Racket } from '@/data/rackets';

interface RacketComparisonTableProps {
  rackets: Racket[];
}

const levelStyles: Record<Racket['level'], string> = {
  Anfänger: 'text-emerald-700 dark:text-emerald-400',
  Fortgeschritten: 'text-amber-700 dark:text-amber-400',
  Profi: 'text-rose-700 dark:text-rose-400',
};

export function RacketComparisonTable({ rackets }: RacketComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm [scrollbar-width:thin]">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-secondary/60">
            <th
              scope="col"
              className="sticky left-0 z-20 bg-secondary/60 px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur-sm sm:px-5"
            >
              Modell
            </th>
            <th scope="col" className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-5">
              Form
            </th>
            <th scope="col" className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-5">
              Niveau
            </th>
            <th scope="col" className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-5">
              Score
            </th>
            <th scope="col" className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-5">
              Preis
            </th>
            <th scope="col" className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:px-5">
              Aktion
            </th>
          </tr>
        </thead>
        <tbody>
          {rackets.map((racket, i) => (
            <tr
              key={racket.id}
              className={`border-b border-border transition-colors hover:bg-secondary/30 ${i === rackets.length - 1 ? 'border-b-0' : ''}`}
            >
              {/* Sticky model column */}
              <td className="sticky left-0 z-10 bg-card px-4 py-4 sm:px-5">
                <Link
                  href={`/schlaeger/${racket.slug}`}
                  className="group flex items-center gap-3"
                  aria-label={`${racket.brand} ${racket.name} Test ansehen`}
                >
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-border bg-secondary">
                    <Image
                      src={racket.image}
                      alt={racket.imageAlt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {racket.brand}
                    </p>
                    <p className="truncate font-display text-sm font-bold leading-tight transition-colors group-hover:text-neon-600 dark:group-hover:text-neon-400">
                      {racket.name}
                    </p>
                  </div>
                </Link>
              </td>

              <td className="px-4 py-4 text-sm sm:px-5">{racket.shape}</td>
              <td className={`px-4 py-4 text-sm font-medium sm:px-5 ${levelStyles[racket.level]}`}>
                {racket.level}
              </td>
              <td className="px-4 py-4 sm:px-5">
                <div className="flex items-center gap-2">
                  <span className="font-display text-base font-bold tabular-nums">
                    {racket.score.toFixed(1)}
                  </span>
                  <div className="hidden h-1.5 w-14 overflow-hidden rounded-full bg-secondary sm:block">
                    <div
                      className="h-full rounded-full bg-neon"
                      style={{ width: `${(racket.score / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 sm:px-5">
                <span className="font-display text-base font-bold">{racket.price}</span>
              </td>
              <td className="px-4 py-4 sm:px-5">
                <button
                  type="button"
                  className="group/btn inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-neon px-3.5 py-2 text-xs font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95"
                >
                  Preis prüfen
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
