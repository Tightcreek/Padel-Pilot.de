'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, MapPin, Building2, Sun, X } from 'lucide-react';
import { getAllPadelVenues, atlasCities } from '@/data/places';

type FilterKey = 'all' | 'indoor' | 'outdoor';

export function PlaceSearch() {
  const [query, setQuery] = React.useState('');
  const [filter, setFilter] = React.useState<FilterKey>('all');
  const [focused, setFocused] = React.useState(false);

  const allVenues = React.useMemo(() => getAllPadelVenues(), []);
  const totalCourts = React.useMemo(
    () => allVenues.reduce((sum, venue) => sum + (venue.courts.total ?? 0), 0),
    [allVenues],
  );

  const results = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allVenues
      .filter((venue) => {
        if (filter === 'indoor' && !(venue.courts.indoor && venue.courts.indoor > 0)) {
          return false;
        }
        if (filter === 'outdoor' && !(venue.courts.outdoor && venue.courts.outdoor > 0)) {
          return false;
        }

        if (!normalizedQuery) return true;

        const haystack = [
          venue.name,
          venue.cityName,
          venue.address.district ?? '',
          venue.address.postalCode,
        ]
          .join(' ')
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [allVenues, query, filter]);

  const showDropdown = focused && (query.trim().length > 0 || filter !== 'all');

  return (
    <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <p className="text-sm font-medium text-muted-foreground">Padel spielen im DACH-Raum:</p>
      <h1 className="mt-1 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Entdecke {totalCourts} Padel-Courts!
      </h1>

      <p className="mt-4 text-sm font-semibold text-foreground">
        Finde Padel-Courts in deiner Nähe:
      </p>

      <div className="relative mt-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 150)}
              placeholder="Stadt, Stadtteil oder Anlage eingeben..."
              className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-9 text-sm outline-none transition-colors focus:border-neon-500"
            />
            {query.length > 0 && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Suche zurücksetzen"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setFocused(true)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3 text-sm font-semibold text-neon-foreground transition-transform hover:scale-[1.02]"
          >
            <Search className="h-4 w-4" />
            Courts finden
          </button>
        </div>

        {showDropdown && (
          <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-96 overflow-y-auto rounded-xl border border-border bg-card shadow-lg">
            {results.length === 0 ? (
              <p className="p-4 text-sm text-muted-foreground">
                Keine Treffer. Versuche einen anderen Suchbegriff oder wähle unten eine Stadt aus.
              </p>
            ) : (
              <ul className="divide-y divide-border">
                {results.map((venue) => (
                  <li key={venue.id}>
                    <Link
                      href={`/plaetze/${venue.citySlug}/${venue.slug}`}
                      className="flex items-center justify-between gap-3 px-4 py-3 text-sm transition-colors hover:bg-secondary/50"
                    >
                      <span className="flex flex-col">
                        <span className="font-medium text-foreground">{venue.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {venue.address.district ?? venue.cityName}, {venue.cityName}
                        </span>
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        {(venue.courts.indoor ?? 0) > 0 && (
                          <Building2 className="h-3.5 w-3.5" />
                        )}
                        {(venue.courts.outdoor ?? 0) > 0 && <Sun className="h-3.5 w-3.5" />}
                        {venue.courts.total ?? '–'} Courts
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="text-neon-600 dark:text-neon-400">✓</span> Redaktionell geprüft
        </span>
        <span className="flex items-center gap-1">
          <span className="text-neon-600 dark:text-neon-400">✓</span> Unabhängig
        </span>
        <span className="flex items-center gap-1">
          <span className="text-neon-600 dark:text-neon-400">✓</span> Immer aktuell
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter(filter === 'indoor' ? 'all' : 'indoor')}
          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
            filter === 'indoor'
              ? 'border-neon-500 bg-neon/10 text-neon-700 dark:text-neon-400'
              : 'border-border bg-secondary/40 text-muted-foreground hover:text-foreground'
          }`}
        >
          <Building2 className="h-3.5 w-3.5" />
          Indoor
        </button>
        <button
          type="button"
          onClick={() => setFilter(filter === 'outdoor' ? 'all' : 'outdoor')}
          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
            filter === 'outdoor'
              ? 'border-neon-500 bg-neon/10 text-neon-700 dark:text-neon-400'
              : 'border-border bg-secondary/40 text-muted-foreground hover:text-foreground'
          }`}
        >
          <Sun className="h-3.5 w-3.5" />
          Outdoor
        </button>

        {atlasCities.map((city) => (
          <Link
            key={city.id}
            href={`/plaetze/${city.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <MapPin className="h-3.5 w-3.5" />
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
