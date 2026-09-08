import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, Building2, Sun, ExternalLink, ArrowRight, Award } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import {
  atlasCities,
  getAtlasCityBySlug,
  getCityCourtStats,
  getKnownStartingPrices,
  type PadelVenue,
} from '@/data/places';

interface CityPageProps {
  params: { city: string };
}

export function generateStaticParams() {
  return atlasCities.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  const city = getAtlasCityBySlug(params.city);

  if (!city) {
    return {};
  }

  return {
    title: city.seo.pageTitle,
    description: city.seo.metaDescription,
    alternates: {
      canonical: `https://www.padel-pilot.de/plaetze/${city.slug}`,
    },
  };
}

function formatAmenities(venue: PadelVenue) {
  const labels: { key: keyof PadelVenue['amenities']; label: string }[] = [
    { key: 'floodlights', label: 'Flutlicht' },
    { key: 'racketRental', label: 'Schläger-Verleih' },
    { key: 'gastro', label: 'Gastro/Café' },
    { key: 'coaching', label: 'Coaching' },
    { key: 'beginnerCourses', label: 'Anfänger-Kurse' },
    { key: 'tournaments', label: 'Turniere' },
    { key: 'showers', label: 'Duschen' },
    { key: 'parking', label: 'Parken' },
  ];

  return labels
    .filter((item) => venue.amenities[item.key] === 'yes')
    .map((item) => item.label);
}

function formatPrice(venue: PadelVenue) {
  if (venue.pricing.priceFrom === null) return 'Preis auf Anfrage';
  const to = venue.pricing.priceTo ? `–${venue.pricing.priceTo}` : '';
  return `ab ${venue.pricing.priceFrom}${to} € / Court · Std.`;
}

export default function CityPage({ params }: CityPageProps) {
  const city = getAtlasCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  const venues = city!.venues;
  const stats = getCityCourtStats(venues);
  const prices = getKnownStartingPrices(venues);
  const lowestPrice = prices.length > 0 ? Math.min(...prices) : null;
  const medianPrice =
    prices.length > 0
      ? [...prices].sort((a, b) => a - b)[Math.floor(prices.length / 2)]
      : null;

  const ranked = [...venues].sort((a, b) => (b.courts.total ?? 0) - (a.courts.total ?? 0));
  const top5 = ranked.slice(0, 5);

  const outdoorVenues = venues.filter((venue) => (venue.courts.outdoor ?? 0) > 0);
  const beginnerVenues = venues.filter((venue) => venue.amenities.beginnerCourses === 'yes');
  const tournamentVenues = venues.filter((venue) => venue.amenities.tournaments === 'yes');

  const lastVerified = venues
    .map((venue) => venue.pricing.lastVerifiedAt)
    .sort()
    .at(-1);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://www.padel-pilot.de/plaetze/${city!.slug}#webpage`,
    url: `https://www.padel-pilot.de/plaetze/${city!.slug}`,
    name: city!.seo.pageTitle,
    description: city!.seo.metaDescription,
    dateModified: lastVerified ?? undefined,
    mainEntity: {
      '@type': 'ItemList',
      '@id': `https://www.padel-pilot.de/plaetze/${city!.slug}#top-courts`,
      name: `Die ${top5.length} empfohlenen Padel-Anlagen in ${city!.name}`,
      numberOfItems: top5.length,
      itemListElement: top5.map((venue, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SportsActivityLocation',
          '@id': `https://www.padel-pilot.de/plaetze/${city!.slug}/${venue.slug}#venue`,
          name: venue.name,
          url: `https://www.padel-pilot.de/plaetze/${city!.slug}/${venue.slug}`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: venue.address.street,
            postalCode: venue.address.postalCode,
            addressLocality: venue.address.city,
            addressRegion: venue.address.region,
            addressCountry: venue.address.countryCode,
          },
          ...(venue.website ? { sameAs: [venue.website] } : {}),
        },
      })),
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://www.padel-pilot.de/plaetze/${city!.slug}#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: `Wo kann man in ${city!.name} draußen Padel spielen?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            outdoorVenues.length > 0
              ? `Outdoor-Padel findest du aktuell bei ${outdoorVenues
                  .map((venue) => venue.name)
                  .join(', ')}. Prüfe vor der Buchung die aktuelle Verfügbarkeit direkt bei der jeweiligen Anlage.`
              : `Für ${city!.name} haben wir aktuell noch keine verifizierten Outdoor-Anlagen gelistet.`,
        },
      },
      {
        '@type': 'Question',
        name: `Gibt es Padel-Turniere für Anfänger in ${city!.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            tournamentVenues.length > 0
              ? `Ja. In unserem Atlas sind aktuell ${tournamentVenues.length} Anlage(n) mit dokumentierten Turnierangeboten hinterlegt: ${tournamentVenues
                  .map((venue) => venue.name)
                  .join(', ')}. Frage beim Veranstalter direkt nach einem passenden Einsteiger-Level.`
              : `Für ${city!.name} liegen uns aktuell keine verifizierten Turnierangebote vor. Frag am besten direkt bei den Anlagen vor Ort nach.`,
        },
      },
      {
        '@type': 'Question',
        name: `Was kostet Padel in ${city!.name} pro Person?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            lowestPrice !== null
              ? `Die Platzmiete wird meist pro Court abgerechnet und unter bis zu vier Spielern geteilt. Bei einer dokumentierten Preisspanne ab ${lowestPrice} € pro Stunde liegt der Anteil bei voller Besetzung ab etwa ${(
                  lowestPrice / 4
                ).toFixed(2)} € pro Person und Stunde.`
              : `Für ${city!.name} liegen uns noch keine ausreichend verifizierten Preisdaten vor. Prüfe die aktuellen Preise direkt bei den Anlagen.`,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl container-px py-12 lg:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link href="/plaetze" className="hover:text-foreground">
            Plätze
          </Link>{' '}
          / <span className="text-foreground">{city!.name}</span>
        </nav>

        <header className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-600 dark:text-neon-400">
            <MapPin className="h-3.5 w-3.5" />
            Padel-Court-Atlas · {city!.name}
          </p>

          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Padel spielen in {city!.name}: Die {top5.length} besten Courts 2026
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Kurz gesagt:</strong> In {city!.name} sind aktuell{' '}
            <strong className="text-foreground">{venues.length}</strong> verifizierte Padel-Anlagen mit
            zusammen mindestens <strong className="text-foreground">{stats.total} Courts</strong> gelistet,
            davon <strong className="text-foreground">{stats.indoor} Indoor</strong> und{' '}
            <strong className="text-foreground">{stats.outdoor} Outdoor</strong>.
            {lowestPrice !== null && (
              <>
                {' '}
                Die dokumentierte Platzmiete beginnt bei etwa{' '}
                <strong className="text-foreground">{lowestPrice} €</strong> pro Court und Stunde
                {medianPrice !== null && medianPrice !== lowestPrice && (
                  <> (mittlerer Einstiegspreis rund {medianPrice} €)</>
                )}
                .
              </>
            )}
          </p>

          {lastVerified && (
            <p className="mt-2 text-xs text-muted-foreground">
              Datenstand: {new Date(lastVerified).toLocaleDateString('de-DE')}
            </p>
          )}
        </header>

        <section className="mt-12" aria-labelledby="top-5-heading">
          <h2 id="top-5-heading" className="font-display text-2xl font-bold tracking-tight">
            Die {top5.length} empfohlenen Padel-Anlagen in {city!.name}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sortiert nach Court-Kapazität, Ausstattung und Datenaktualität.
          </p>

          <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {top5.map((venue, index) => {
              const amenities = formatAmenities(venue);

              return (
                <li key={venue.id} className="list-none">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-neon/[0.06] via-card to-card transition-all duration-300 hover:-translate-y-1 hover:border-neon-500/60 hover:from-neon/[0.1] hover:shadow-xl hover:shadow-neon-500/10">
                    <Link
                      href={`/plaetze/${city!.slug}/${venue.slug}`}
                      className="absolute inset-0 z-0"
                      aria-label={`Details zu ${venue.name} ansehen`}
                    />

                    {/* Gradient-Kopfbereich mit Rang-Badge */}
                    <div className="pointer-events-none relative overflow-hidden bg-gradient-to-br from-neon/25 via-neon/8 to-transparent p-6 pb-5 transition-all duration-300 group-hover:from-neon/35">
                      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-neon/15 blur-2xl transition-all duration-300 group-hover:bg-neon/25" />

                      <div className="relative flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-neon text-sm font-bold text-neon-foreground shadow-sm">
                            {index === 0 ? <Award className="h-4.5 w-4.5" /> : index + 1}
                          </span>
                          <div>
                            <h3 className="font-display text-lg font-bold leading-tight tracking-tight">
                              {venue.name}
                            </h3>
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              {venue.address.district ?? venue.address.city}
                            </p>
                          </div>
                        </div>

                        <ArrowRight className="pointer-events-none relative z-10 mt-1.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-neon-600 dark:group-hover:text-neon-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pointer-events-none relative flex flex-1 flex-col justify-between p-6 pt-5">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-3xl font-bold tracking-tight">
                            {venue.courts.total ?? '–'}
                          </span>
                          <span className="text-sm font-medium text-muted-foreground">Courts</span>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {(venue.courts.indoor ?? 0) > 0 && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                              <Building2 className="h-3 w-3" />
                              {venue.courts.indoor} Indoor
                            </span>
                          )}
                          {(venue.courts.outdoor ?? 0) > 0 && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                              <Sun className="h-3 w-3" />
                              {venue.courts.outdoor} Outdoor
                            </span>
                          )}
                          {venue.courts.singleCourts && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                              {venue.courts.singleCourts} Single
                            </span>
                          )}
                        </div>

                        <p className="mt-3 text-sm text-muted-foreground">{formatPrice(venue)}</p>

                        {amenities.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {amenities.slice(0, 4).map((label) => (
                              <span
                                key={label}
                                className="rounded-md bg-secondary/70 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                              >
                                {label}
                              </span>
                            ))}
                            {amenities.length > 4 && (
                              <span className="rounded-md bg-secondary/70 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                                +{amenities.length - 4}
                              </span>
                            )}
                          </div>
                        )}

                        {venue.editorial.shortDescription && (
                          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                            {venue.editorial.shortDescription}
                          </p>
                        )}
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
                        <span className="pointer-events-none inline-flex items-center gap-1 text-xs font-semibold text-neon-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-neon-400">
                          Details ansehen <ArrowRight className="h-3 w-3" />
                        </span>

                        {venue.bookingUrl && (
                          <a
                            href={venue.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pointer-events-auto relative z-10 inline-flex items-center gap-1.5 rounded-lg bg-neon px-3.5 py-1.5 text-xs font-semibold text-neon-foreground transition-transform hover:scale-[1.03]"
                          >
                            Buchen <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="mt-14" aria-labelledby="table-heading">
          <h2 id="table-heading" className="font-display text-2xl font-bold tracking-tight">
            Padel-Courts in {city!.name} im Überblick
          </h2>

          <div className="mt-5 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border bg-secondary/50 text-left">
                  <th className="p-3 font-semibold">Anlage</th>
                  <th className="p-3 font-semibold">Stadtteil</th>
                  <th className="p-3 font-semibold text-center">
                    <Building2 className="inline h-3.5 w-3.5" /> Indoor
                  </th>
                  <th className="p-3 font-semibold text-center">
                    <Sun className="inline h-3.5 w-3.5" /> Outdoor
                  </th>
                  <th className="p-3 font-semibold">Preis ab</th>
                </tr>
              </thead>
              <tbody>
                {venues.map((venue) => (
                  <tr key={venue.id} className="border-b border-border last:border-0">
                    <td className="p-3 font-medium">
                      <Link
                        href={`/plaetze/${city!.slug}/${venue.slug}`}
                        className="hover:text-neon-600 dark:hover:text-neon-400"
                      >
                        {venue.name}
                      </Link>
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {venue.address.district ?? '–'}
                    </td>
                    <td className="p-3 text-center">{venue.courts.indoor ?? '–'}</td>
                    <td className="p-3 text-center">{venue.courts.outdoor ?? '–'}</td>
                    <td className="p-3 text-muted-foreground">{formatPrice(venue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 max-w-3xl" aria-labelledby="method-heading">
          <h2 id="method-heading" className="font-display text-2xl font-bold tracking-tight">
            So wählen wir die empfohlenen Courts aus
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Unser Ranking basiert nicht nur auf Sternebewertungen. Berücksichtigt werden
            Court-Anzahl, Indoor- und Outdoor-Angebot, Ausstattung wie Schläger-Verleih, Kurse und
            Gastronomie sowie die Aktualität der Daten. Preise und Verfügbarkeit können sich
            kurzfristig ändern, prüfe sie deshalb vor der Buchung direkt beim Betreiber.
          </p>
        </section>

        <section className="mt-14 max-w-3xl" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-display text-2xl font-bold tracking-tight">
            Häufige Fragen zu Padel in {city!.name}
          </h2>

          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold">Wo kann man in {city!.name} draußen Padel spielen?</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {outdoorVenues.length > 0
                  ? `Outdoor-Padel findest du aktuell bei ${outdoorVenues
                      .map((venue) => venue.name)
                      .join(', ')}. Prüfe vor der Buchung die aktuelle Verfügbarkeit direkt bei der jeweiligen Anlage.`
                  : `Für ${city!.name} haben wir aktuell noch keine verifizierten Outdoor-Anlagen gelistet.`}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Gibt es Padel-Turniere für Anfänger in {city!.name}?
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {tournamentVenues.length > 0
                  ? `Ja. Mehrere Anlagen veröffentlichen Turnierformate, darunter ${tournamentVenues
                      .map((venue) => venue.name)
                      .join(', ')}. Frage bei der Anmeldung direkt nach einem passenden Einsteiger-Level.`
                  : `Für ${city!.name} liegen uns aktuell keine verifizierten Turnierangebote vor. Frag am besten direkt bei den Anlagen vor Ort nach.`}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Was kostet Padel in {city!.name} pro Person?</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {lowestPrice !== null
                  ? `Die Platzmiete wird meist pro Court abgerechnet und unter bis zu vier Spielern geteilt. Bei einer dokumentierten Preisspanne ab ${lowestPrice} € pro Stunde liegt der Anteil bei voller Besetzung ab etwa ${(
                      lowestPrice / 4
                    ).toFixed(2)} € pro Person und Stunde.`
                  : `Für ${city!.name} liegen uns noch keine ausreichend verifizierten Preisdaten vor. Prüfe die aktuellen Preise direkt bei den Anlagen.`}
              </p>
            </div>

            {beginnerVenues.length > 0 && (
              <div>
                <h3 className="font-semibold">
                  Welche Anlagen eignen sich für Einsteiger in {city!.name}?
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Anfänger-Kurse bieten laut unserer Recherche aktuell{' '}
                  {beginnerVenues.map((venue) => venue.name).join(', ')} an.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
