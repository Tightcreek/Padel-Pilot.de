import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin,
  Building2,
  Sun,
  ExternalLink,
  Phone,
  Globe,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import {
  atlasCities,
  getAtlasCityBySlug,
  getVenueBySlug,
  type PadelVenue,
} from '@/data/places';

interface VenuePageProps {
  params: { city: string; venue: string };
}

export function generateStaticParams() {
  return atlasCities.flatMap((city) =>
    city.venues.map((venue) => ({ city: city.slug, venue: venue.slug })),
  );
}

export function generateMetadata({ params }: VenuePageProps): Metadata {
  const city = getAtlasCityBySlug(params.city);
  const venue = city ? getVenueBySlug(city.slug, params.venue) : undefined;

  if (!city || !venue) {
    return {};
  }

  return {
    title: `${venue.name}: Courts, Preise und Buchung in ${city.name}`,
    description:
      venue.editorial.shortDescription ??
      `Alle Infos zu ${venue.name} in ${city.name}: Adresse, Court-Anzahl, Indoor/Outdoor, Preise, Ausstattung und Buchung.`,
    alternates: {
      canonical: `https://www.padel-pilot.de/plaetze/${city.slug}/${venue.slug}`,
    },
  };
}

const amenityLabels: { key: keyof PadelVenue['amenities']; label: string }[] = [
  { key: 'floodlights', label: 'Flutlicht' },
  { key: 'racketRental', label: 'Schläger-Verleih' },
  { key: 'gastro', label: 'Gastro / Café' },
  { key: 'coaching', label: 'Coaching' },
  { key: 'beginnerCourses', label: 'Anfänger-Kurse' },
  { key: 'tournaments', label: 'Turniere' },
  { key: 'showers', label: 'Duschen' },
  { key: 'parking', label: 'Parken' },
  { key: 'publicTransportNearby', label: 'ÖPNV in der Nähe' },
];

function formatPriceModel(model: string) {
  switch (model) {
    case 'per_court_per_60_minutes':
      return 'pro Court / 60 Minuten';
    case 'per_court_per_90_minutes':
      return 'pro Court / 90 Minuten';
    case 'per_person':
      return 'pro Person';
    case 'mixed':
      return 'variabel je Zeit/Saison';
    default:
      return 'unbekannt';
  }
}

export default function VenuePage({ params }: VenuePageProps) {
  const city = getAtlasCityBySlug(params.city);
  const venue = city ? getVenueBySlug(city.slug, params.venue) : undefined;

  if (!city || !venue) {
    notFound();
  }

  const knownAmenities = amenityLabels.filter(
    (item) => venue!.amenities[item.key] === 'yes',
  );
  const unknownAmenities = amenityLabels.filter(
    (item) => venue!.amenities[item.key] === 'unknown',
  );

  const venueJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `https://www.padel-pilot.de/plaetze/${city!.slug}/${venue!.slug}#venue`,
    name: venue!.name,
    url: `https://www.padel-pilot.de/plaetze/${city!.slug}/${venue!.slug}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: venue!.address.street,
      postalCode: venue!.address.postalCode,
      addressLocality: venue!.address.city,
      addressRegion: venue!.address.region,
      addressCountry: venue!.address.countryCode,
    },
    ...(venue!.geo.latitude && venue!.geo.longitude
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: venue!.geo.latitude,
            longitude: venue!.geo.longitude,
          },
        }
      : {}),
    ...(venue!.telephone ? { telephone: venue!.telephone } : {}),
    ...(venue!.website ? { sameAs: [venue!.website] } : {}),
    ...(venue!.pricing.priceFrom !== null
      ? {
          priceRange: venue!.pricing.priceTo
            ? `${venue!.pricing.priceFrom}-${venue!.pricing.priceTo} ${venue!.pricing.currency}`
            : `ab ${venue!.pricing.priceFrom} ${venue!.pricing.currency}`,
        }
      : {}),
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl container-px py-12 lg:py-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(venueJsonLd) }}
        />

        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <Link href="/plaetze" className="hover:text-foreground">
            Plätze
          </Link>{' '}
          /{' '}
          <Link href={`/plaetze/${city!.slug}`} className="hover:text-foreground">
            {city!.name}
          </Link>{' '}
          / <span className="text-foreground">{venue!.name}</span>
        </nav>

        <header>
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neon-600 dark:text-neon-400">
            <MapPin className="h-3.5 w-3.5" />
            {venue!.address.district ?? city!.name}
          </p>

          <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {venue!.name}
          </h1>

          <p className="mt-2 text-muted-foreground">
            {venue!.address.street}, {venue!.address.postalCode} {venue!.address.city}
          </p>

          {venue!.editorial.shortDescription && (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {venue!.editorial.shortDescription}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {venue!.bookingUrl && (
              <a
                href={venue!.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-neon px-5 py-2.5 text-sm font-semibold text-neon-foreground transition-transform hover:scale-[1.02]"
              >
                Court buchen <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {venue!.website && (
              <a
                href={venue!.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Globe className="h-4 w-4" /> Website
              </a>
            )}
            {venue!.telephone && (
              <a
                href={`tel:${venue!.telephone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" /> {venue!.telephone}
              </a>
            )}
          </div>
        </header>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5 text-center">
            <p className="text-2xl font-bold">{venue!.courts.total ?? '–'}</p>
            <p className="text-sm text-muted-foreground">Courts gesamt</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 text-center">
            <Building2 className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
            <p className="text-2xl font-bold">{venue!.courts.indoor ?? '–'}</p>
            <p className="text-sm text-muted-foreground">Indoor</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 text-center">
            <Sun className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
            <p className="text-2xl font-bold">{venue!.courts.outdoor ?? '–'}</p>
            <p className="text-sm text-muted-foreground">Outdoor</p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="font-display text-xl font-bold tracking-tight">
            Preise
          </h2>
          <div className="mt-3 rounded-xl border border-border bg-card p-5">
            <p className="font-semibold">
              {venue!.pricing.priceFrom !== null
                ? `ab ${venue!.pricing.priceFrom}${
                    venue!.pricing.priceTo ? `–${venue!.pricing.priceTo}` : ''
                  } ${venue!.pricing.currency}`
                : 'Preis auf Anfrage'}
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({formatPriceModel(venue!.pricing.priceModel)})
              </span>
            </p>
            {venue!.pricing.notes && (
              <p className="mt-2 text-sm text-muted-foreground">{venue!.pricing.notes}</p>
            )}
            <p className="mt-3 text-xs text-muted-foreground">
              Preisstand: {new Date(venue!.pricing.lastVerifiedAt).toLocaleDateString('de-DE')} ·
              Verlässlichkeit: {venue!.pricing.priceConfidence}
            </p>
          </div>
        </section>

        {venue!.openingHours.length > 0 && (
          <section className="mt-10" aria-labelledby="hours-heading">
            <h2 id="hours-heading" className="font-display text-xl font-bold tracking-tight">
              Öffnungszeiten
            </h2>
            <ul className="mt-3 space-y-2 rounded-xl border border-border bg-card p-5 text-sm">
              {venue!.openingHours.map((entry, index) => (
                <li key={index} className="flex justify-between gap-4">
                  <span className="font-medium">{entry.label}</span>
                  <span className="text-muted-foreground">
                    {entry.opens && entry.closes
                      ? `${entry.opens}–${entry.closes} Uhr`
                      : entry.notes ?? 'Zeiten beim Betreiber erfragen'}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-10" aria-labelledby="amenities-heading">
          <h2 id="amenities-heading" className="font-display text-xl font-bold tracking-tight">
            Ausstattung
          </h2>

          {knownAmenities.length > 0 && (
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {knownAmenities.map((item) => (
                <li key={item.key} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-neon-600 dark:text-neon-400" />
                  {item.label}
                </li>
              ))}
            </ul>
          )}

          {unknownAmenities.length > 0 && (
            <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <HelpCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
              Keine verifizierten Angaben zu: {unknownAmenities.map((item) => item.label).join(', ')}.
              Bitte vor Ort oder auf der Betreiber-Website prüfen.
            </p>
          )}
        </section>

        {venue!.notes && (
          <section className="mt-10" aria-labelledby="notes-heading">
            <h2 id="notes-heading" className="font-display text-xl font-bold tracking-tight">
              Gut zu wissen
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{venue!.notes}</p>
          </section>
        )}

        <section className="mt-10 border-t border-border pt-6" aria-labelledby="sources-heading">
          <h2 id="sources-heading" className="text-sm font-semibold text-muted-foreground">
            Quellen &amp; Datenstand
          </h2>
          <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
            {venue!.sources.map((source, index) => (
              <li key={index}>
                {source.name} · geprüft am{' '}
                {new Date(source.checkedAt).toLocaleDateString('de-DE')}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10">
          <Link
            href={`/plaetze/${city!.slug}`}
            className="text-sm font-medium text-neon-600 hover:underline dark:text-neon-400"
          >
            ← Alle Padel-Courts in {city!.name}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
