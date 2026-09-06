export type CountryCode = 'DE' | 'AT' | 'CH';

export type YesNoUnknown = 'yes' | 'no' | 'unknown';

export type VenueStatus =
  | 'research'
  | 'approved'
  | 'published'
  | 'temporarily_closed'
  | 'permanently_closed';

export type PriceModel =
  | 'per_court_per_60_minutes'
  | 'per_court_per_90_minutes'
  | 'per_person'
  | 'mixed'
  | 'unknown';

export interface CourtAddress {
  street: string;
  postalCode: string;
  city: string;
  district: string | null;
  region?: string;
  countryCode: CountryCode;
}

export interface CourtCounts {
  total: number | null;
  indoor: number | null;
  outdoor: number | null;
  coveredOutdoor: number | null;
  singleCourts: number | null;
}

export interface CourtAmenities {
  floodlights: YesNoUnknown;
  racketRental: YesNoUnknown;
  racketRentalPrice: number | null;
  gastro: YesNoUnknown;
  coaching: YesNoUnknown;
  beginnerCourses: YesNoUnknown;
  tournaments: YesNoUnknown;
  showers: YesNoUnknown;
  parking: YesNoUnknown;
  publicTransportNearby: YesNoUnknown;
}

export interface CourtPricing {
  currency: 'EUR' | 'CHF';
  priceFrom: number | null;
  priceTo: number | null;
  priceModel: PriceModel;
  priceConfidence: 'high' | 'medium' | 'low' | 'unknown';
  lastVerifiedAt: string;
  notes: string | null;
}

export interface CourtRating {
  source:
    | 'google_business_profile'
    | 'playtomic'
    | 'eversports'
    | 'gotcourts'
    | 'other';
  ratingValue: number | null;
  bestRating: number;
  reviewCount: number | null;
  retrievedAt: string;
  displayAllowed: boolean;
}

export interface CourtSource {
  name:
    | 'official_website'
    | 'playtomic'
    | 'eversports'
    | 'padelfinder'
    | 'padelcompass'
    | 'gotcourts'
    | 'other';
  url: string;
  checkedAt: string;
  confidence: 'high' | 'medium' | 'low';
}

export interface CourtOpeningHours {
  label: string;
  opens: string | null;
  closes: string | null;
  notes: string | null;
}

export interface PadelVenue {
  id: string;
  name: string;
  slug: string;
  status: VenueStatus;
  address: CourtAddress;
  geo: {
    latitude: number | null;
    longitude: number | null;
  };
  website: string | null;
  bookingUrl: string | null;
  telephone: string | null;
  openingHours: CourtOpeningHours[];
  courts: CourtCounts;
  amenities: CourtAmenities;
  pricing: CourtPricing;
  ratings: CourtRating[];
  notes: string | null;
  sources: CourtSource[];
  editorial: {
    atlasScore: number | null;
    rankingEligible: boolean;
    recommendedFor: string[];
    shortDescription: string | null;
    lastHumanReviewAt: string | null;
  };
}

export interface AtlasCity {
  id: string;
  name: string;
  slug: string;
  countryCode: CountryCode;
  region: string;
  timezone: string;
  seo: {
    primaryKeyword: string;
    pageTitle: string;
    metaDescription: string;
  };
  venues: PadelVenue[];
}

export const atlasCities: AtlasCity[] = [
  {
    id: 'de-muenchen',
    name: 'München',
    slug: 'muenchen',
    countryCode: 'DE',
    region: 'Bayern',
    timezone: 'Europe/Berlin',
    seo: {
      primaryKeyword: 'Padel spielen München',
      pageTitle: 'Padel spielen in München: Die 5 besten Courts 2026',
      metaDescription:
        'Finde Padel-Courts in München: Indoor- und Outdoor-Anlagen, Preise, Schläger-Verleih, Turniere und Buchungslinks.',
    },
    venues: [
      {
        id: 'de-muenchen-casa-padel-pineapple-park',
        name: 'Casa Padel Pineapple Park',
        slug: 'casa-padel-pineapple-park',
        status: 'approved',
        address: {
          street: 'Arnulfstraße 195-199',
          postalCode: '80634',
          city: 'München',
          district: 'Neuhausen-Nymphenburg',
          region: 'Bayern',
          countryCode: 'DE',
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: 'https://casapadel.de/home/casa-padel-pineapple-park/',
        bookingUrl: 'https://playtomic.com/clubs/casa-padel-pineapple-park',
        telephone: null,
        openingHours: [
          {
            label: 'Täglich',
            opens: null,
            closes: null,
            notes: '365 Tage geöffnet. Öffnungszeiten vor der Buchung beim Betreiber prüfen.',
          },
        ],
        courts: {
          total: 9,
          indoor: 5,
          outdoor: 4,
          coveredOutdoor: 0,
          singleCourts: null,
        },
        amenities: {
          floodlights: 'yes',
          racketRental: 'yes',
          racketRentalPrice: 4,
          gastro: 'unknown',
          coaching: 'yes',
          beginnerCourses: 'yes',
          tournaments: 'unknown',
          showers: 'yes',
          parking: 'yes',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 32,
          priceTo: null,
          priceModel: 'per_court_per_60_minutes',
          priceConfidence: 'high',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Platzmiete ab 32 € pro Court und Stunde. Einzeltraining: 90 bis 120 € pro Stunde inklusive Platzmiete. Schläger-Verleih: 4 € bis 4 Stunden. Balldose: 7,50 €.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 4.0,
            bestRating: 5,
            reviewCount: 47,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Indoor-Halle im Pineapple Park, ehemaliger Alte-Paketposthalle-Standort. Deckenhöhe von 6 Metern. Kostenfreies Parken, an Wochenenden gegebenenfalls eingeschränkt.',
        sources: [
          {
            name: 'official_website',
            url: 'https://casapadel.de/home/casa-padel-pineapple-park/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'playtomic',
            url: 'https://playtomic.com/padel-courts/munchen',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
          {
            name: 'padelcompass',
            url: 'https://padelcompass.de/plaetze/bayern/muenchen',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Ganzjähriges Spielen',
            'Indoor-Padel',
            'Outdoor-Padel',
            'Training',
          ],
          shortDescription:
            'Eine der größten Padel-Anlagen Münchens mit neun Courts sowie Indoor- und Outdoor-Option.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-muenchen-padel-seasons',
        name: 'Padel Seasons',
        slug: 'padel-seasons',
        status: 'approved',
        address: {
          street: 'Paul-Ehrlich-Weg 6',
          postalCode: '80999',
          city: 'München',
          district: 'Allach-Untermenzing',
          region: 'Bayern',
          countryCode: 'DE',
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: 'https://padel-seasons.de/',
        bookingUrl: 'https://playtomic.com/clubs/padel-seasons-padel-tennis',
        telephone: null,
        openingHours: [
          {
            label: 'Padel Indoor',
            opens: '06:00',
            closes: '02:00',
            notes: 'Täglich.',
          },
          {
            label: 'Padel Outdoor',
            opens: '09:00',
            closes: '22:00',
            notes: 'Täglich.',
          },
        ],
        courts: {
          total: 8,
          indoor: 4,
          outdoor: 4,
          coveredOutdoor: 0,
          singleCourts: null,
        },
        amenities: {
          floodlights: 'yes',
          racketRental: 'yes',
          racketRentalPrice: 4,
          gastro: 'yes',
          coaching: 'yes',
          beginnerCourses: 'yes',
          tournaments: 'yes',
          showers: 'yes',
          parking: 'yes',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: null,
          priceTo: null,
          priceModel: 'mixed',
          priceConfidence: 'medium',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Dynamische Preise nach Saison und Uhrzeit. Winter-Preisliste 2025/2026 auf der Website. Schläger-Verleih: 4 € pro Match.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 4.7,
            bestRating: 5,
            reviewCount: 87,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Ehemaliger Tennisclub. Seit 2024 Indoor-Padel, seit 2025 auch Outdoor-Padel. Clubhaus mit Bar und Küche, große Sonnenterrasse, eigene Club League und WhatsApp-Community mit mehr als 1.000 Mitgliedern.',
        sources: [
          {
            name: 'official_website',
            url: 'https://padel-seasons.de/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'playtomic',
            url: 'https://playtomic.com/clubs/padel-seasons-padel-tennis',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
          {
            name: 'padelcompass',
            url: 'https://padelcompass.de/plaetze/bayern/muenchen',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Indoor-Padel',
            'Outdoor-Padel',
            'Einsteiger',
            'Turniere',
            'Community',
          ],
          shortDescription:
            'Große Allach-Anlage mit vier Indoor- und vier Outdoor-Courts, Clubhaus, Academy und langen Indoor-Öffnungszeiten.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-muenchen-padelcity-tucherpark',
        name: 'PadelCity München Tucherpark',
        slug: 'padelcity-muenchen-tucherpark',
        status: 'approved',
        address: {
          street: 'Am Eisbach 5',
          postalCode: '80538',
          city: 'München',
          district: 'Schwabing-Freimann',
          region: 'Bayern',
          countryCode: 'DE',
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: 'https://padelcity.de/muenchen-tucherpark/',
        bookingUrl: 'https://padelcity.de/muenchen-tucherpark/',
        telephone: null,
        openingHours: [
          {
            label: 'Outdoor-Courts',
            opens: '07:30',
            closes: '23:00',
            notes: 'Montag bis Sonntag. Bei schlechter Witterung entscheidet der Clubmanager über die Bespielbarkeit.',
          },
        ],
        courts: {
          total: 3,
          indoor: 0,
          outdoor: 3,
          coveredOutdoor: 0,
          singleCourts: 1,
        },
        amenities: {
          floodlights: 'yes',
          racketRental: 'yes',
          racketRentalPrice: null,
          gastro: 'unknown',
          coaching: 'unknown',
          beginnerCourses: 'unknown',
          tournaments: 'unknown',
          showers: 'unknown',
          parking: 'unknown',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 28,
          priceTo: 42,
          priceModel: 'per_court_per_60_minutes',
          priceConfidence: 'high',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Mo-Fr bis 16 Uhr: 36 € Double, 28 € Single und 18 € Tennis. Mo-Fr ab 16 Uhr: 42 € Double, 28 € Single und 26 € Tennis. Samstag, Sonntag und Feiertage ganztägig: 42 € Double, 28 € Single und 26 € Tennis. Zusätzlich Tennis-Courts mit Kunstrasen.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 4.5,
            bestRating: 5,
            reviewCount: 71,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Pay-and-Play-Konzept ohne Mitgliedschaft. Drei Outdoor-Courts, darunter ein Single-Court. Bei nicht bespielbarer Witterung ist laut Betreiber eine Umbuchung oder ein Gutschein möglich.',
        sources: [
          {
            name: 'official_website',
            url: 'https://padelcity.de/muenchen-tucherpark/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'padelcompass',
            url: 'https://padelcompass.de/plaetze/bayern/muenchen/padelcity-muenchen-tucherpark-muenchen',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Outdoor-Padel',
            'Single-Padel',
            'Pay and Play',
            'Zentrale Lage',
          ],
          shortDescription:
            'Outdoor-Anlage im Tucherpark mit drei Courts, darunter einem Single-Court, und Buchung ohne Mitgliedschaft.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-muenchen-muenchner-sportclub',
        name: 'Münchner Sportclub e.V.',
        slug: 'muenchner-sportclub',
        status: 'approved',
        address: {
          street: 'Eberwurzstraße 28',
          postalCode: '80935',
          city: 'München',
          district: 'Feldmoching-Hasenbergl',
          region: 'Bayern',
          countryCode: 'DE',
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: 'https://www.muenchner-sportclub.de/',
        bookingUrl: 'https://playtomic.com/clubs/munchner-sportclub-court-1-court-wechselpilot',
        telephone: null,
        openingHours: [],
        courts: {
          total: 2,
          indoor: 0,
          outdoor: 2,
          coveredOutdoor: 0,
          singleCourts: null,
        },
        amenities: {
          floodlights: 'unknown',
          racketRental: 'unknown',
          racketRentalPrice: null,
          gastro: 'unknown',
          coaching: 'yes',
          beginnerCourses: 'unknown',
          tournaments: 'yes',
          showers: 'unknown',
          parking: 'unknown',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 20,
          priceTo: 60,
          priceModel: 'mixed',
          priceConfidence: 'low',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Preisspanne von 20 bis 60 € pro Stunde laut Drittanbieter-Verzeichnis. Buchung laut Recherche über eBusy-System; wochentags bis 16 Uhr 60 Minuten, ab 16 Uhr und am Wochenende 90 Minuten.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 4.4,
            bestRating: 5,
            reviewCount: 153,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Traditionsverein mit weiteren Sportangeboten wie Tennis und Fußball. Zwei neue Outdoor-Padel-Courts seit Ende März 2025, gesponsert von Wechselpilot.',
        sources: [
          {
            name: 'official_website',
            url: 'https://www.muenchner-sportclub.de/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'padelfinder',
            url: 'https://padelfinder.de/padelplatz/muenchner-sportclub-e-v/',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
          {
            name: 'padelcompass',
            url: 'https://padelcompass.de/plaetze/bayern/muenchen/muenchner-sportclub-e-v-muenchen',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Outdoor-Padel',
            'Vereinsumfeld',
            'Training',
            'Turniere',
          ],
          shortDescription:
            'Vereinsanlage im Münchner Norden mit zwei neuen Outdoor-Padel-Courts und weiteren Sportangeboten.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-muenchen-padelpit',
        name: 'PadelPit',
        slug: 'padelpit',
        status: 'approved',
        address: {
          street: 'Heiglhofstraße 25',
          postalCode: '81377',
          city: 'München',
          district: 'Hadern',
          region: 'Bayern',
          countryCode: 'DE',
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: 'https://www.padelpit.de/',
        bookingUrl: 'https://playtomic.com/clubs/padelpit',
        telephone: null,
        openingHours: [
          {
            label: 'Montag bis Freitag',
            opens: '08:00',
            closes: '20:00',
            notes: null,
          },
          {
            label: 'Samstag und Sonntag',
            opens: '09:00',
            closes: '20:00',
            notes: null,
          },
        ],
        courts: {
          total: 3,
          indoor: 0,
          outdoor: 3,
          coveredOutdoor: 0,
          singleCourts: null,
        },
        amenities: {
          floodlights: 'unknown',
          racketRental: 'yes',
          racketRentalPrice: null,
          gastro: 'unknown',
          coaching: 'yes',
          beginnerCourses: 'yes',
          tournaments: 'unknown',
          showers: 'unknown',
          parking: 'yes',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: null,
          priceTo: null,
          priceModel: 'mixed',
          priceConfidence: 'unknown',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Beginner- und Starter-Kurse laut Playtomic ab 35 bis 40 € pro Person. Early-Bird-Mitgliedschaft: 80 € monatlich mit 25 % Rabatt vor 15 Uhr an Werktagen sowie 120 € Wallet-Guthaben.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 4.9,
            bestRating: 5,
            reviewCount: 13,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Betrieben am Standort TSV Großhadern. Laut Playtomic mit Equipment Rental, kostenlosem Parken und Verkaufsautomat.',
        sources: [
          {
            name: 'playtomic',
            url: 'https://playtomic.com/clubs/padelpit',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
          {
            name: 'padelcompass',
            url: 'https://padelcompass.de/plaetze/bayern/muenchen',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Outdoor-Padel',
            'Einsteiger',
            'Kurse',
            'Hadern',
          ],
          shortDescription:
            'Kompakte Outdoor-Anlage am TSV Großhadern mit drei Courts, Einsteigerkursen und Schläger-Verleih.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
    ],
  },
  {
    id: 'de-berlin',
    name: 'Berlin',
    slug: 'berlin',
    countryCode: 'DE',
    region: 'Berlin',
    timezone: 'Europe/Berlin',
    seo: {
      primaryKeyword: 'Padel spielen Berlin',
      pageTitle: 'Padel spielen in Berlin: Die 5 besten Courts 2026',
      metaDescription:
        'Finde Padel-Courts in Berlin: Indoor- und Outdoor-Anlagen, Preise, Schläger-Verleih, Turniere und Buchungslinks.',
    },
    venues: [
      {
        id: 'de-berlin-padel-berlin',
        name: 'Padel Berlin',
        slug: 'padel-berlin',
        status: 'approved',
        address: {
          street: 'Wiesenweg 1-4',
          postalCode: '10365',
          city: 'Berlin',
          district: 'Friedrichshain-Kreuzberg',
          region: 'Berlin',
          countryCode: 'DE',
        },
        geo: {
          latitude: 52.507804,
          longitude: 13.4740868,
        },
        website: 'https://padelberlin.de/',
        bookingUrl: 'https://padelberlin.de/pricing/',
        telephone: '+49 30 20256790',
        openingHours: [
          {
            label: 'Montag bis Freitag',
            opens: '09:00',
            closes: '22:00',
            notes: null,
          },
          {
            label: 'Samstag und Sonntag',
            opens: '08:00',
            closes: '22:00',
            notes: null,
          },
        ],
        courts: {
          total: 3,
          indoor: 1,
          outdoor: 2,
          coveredOutdoor: 0,
          singleCourts: null,
        },
        amenities: {
          floodlights: 'yes',
          racketRental: 'yes',
          racketRentalPrice: 5,
          gastro: 'unknown',
          coaching: 'unknown',
          beginnerCourses: 'unknown',
          tournaments: 'unknown',
          showers: 'unknown',
          parking: 'unknown',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 37.5,
          priceTo: 69,
          priceModel: 'mixed',
          priceConfidence: 'high',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Sommer-Saisonpreise: 46 € pro Stunde bzw. 69 € pro 1,5 Stunden in der Hauptzeit (Mo-Fr 09-15 Uhr), 37,50 € bzw. 56,50 € in der Nebenzeit (Mo-Fr 15-22 Uhr). Wochenende mit eigener Preisstaffelung. Schläger-Verleih 5 €, Bälle 4 €.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 4.8,
            bestRating: 5,
            reviewCount: 435,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Historisch erste kommerzielle Padel-Anlage Berlins, seit 2012 in Friedrichshain aktiv (vormals "Padel Berlin Friedrichshain"). Bestbewertete und reviewstärkste Anlage der Stadt.',
        sources: [
          {
            name: 'official_website',
            url: 'https://padelberlin.de/pricing/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'other',
            url: 'http://padelberlin.de/',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
          {
            name: 'padelcompass',
            url: 'https://padelcompass.de/en/courts/berlin/padel-berlin-berlin',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Indoor-Padel',
            'Outdoor-Padel',
            'Erfahrene Community',
            'Zentrale Lage',
          ],
          shortDescription:
            'Berlins Padel-Pionier seit 2012 mit einem Indoor- und zwei Outdoor-Courts sowie der besten Bewertung der Stadt.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-berlin-padel-factory-berlin',
        name: 'Padel Factory Berlin',
        slug: 'padel-factory-berlin',
        status: 'approved',
        address: {
          street: 'Am Gewerbepark 5',
          postalCode: '12683',
          city: 'Berlin',
          district: 'Biesdorf (Marzahn-Hellersdorf)',
          region: 'Berlin',
          countryCode: 'DE',
        },
        geo: {
          latitude: 52.522105,
          longitude: 13.5661185,
        },
        website: 'https://www.padelfactory.berlin/',
        bookingUrl: 'https://playtomic.com/clubs/padel-factory-berlin',
        telephone: '+49 1579 2510408',
        openingHours: [
          {
            label: 'Täglich',
            opens: '08:00',
            closes: '23:00',
            notes: null,
          },
        ],
        courts: {
          total: 13,
          indoor: 13,
          outdoor: 0,
          coveredOutdoor: 0,
          singleCourts: 2,
        },
        amenities: {
          floodlights: 'yes',
          racketRental: 'yes',
          racketRentalPrice: null,
          gastro: 'yes',
          coaching: 'yes',
          beginnerCourses: 'yes',
          tournaments: 'yes',
          showers: 'unknown',
          parking: 'yes',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: null,
          priceTo: null,
          priceModel: 'unknown',
          priceConfidence: 'unknown',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Keine öffentliche Preisliste gefunden (Stand: Neueröffnung 2026). Buchung ausschließlich über Playtomic. Reformer Pilates, Fitness, Co-Working und Sauna laut Website ab Q4 2026 geplant.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 5.0,
            bestRating: 5,
            reviewCount: 134,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Berlins größte Indoor-Padel-Anlage: 13 Panorama-Courts (10 Doppel, 2 Single, 1 Kids-Court) auf 4.500 m² in zwei Hallen mit bis zu 16 m Deckenhöhe, darunter 3 Smart-Courts mit KI-Videoanalyse. Offizieller Hexagon-Cup-Center-Court. Neue Anlage, daher wenige Reviews trotz Top-Rating. Drittanbieter-Verzeichnisse widersprechen sich teils zur Indoor/Outdoor-Zuordnung; offizielle Website und Playtomic bestätigen konsistent "Indoor".',
        sources: [
          {
            name: 'official_website',
            url: 'https://www.padelfactory.berlin/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'playtomic',
            url: 'https://playtomic.com/clubs/padel-factory-berlin',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
          {
            name: 'padelcompass',
            url: 'https://padelcompass.de/en/courts/berlin/padel-factory-berlin-berlin',
            checkedAt: '2026-09-06',
            confidence: 'low',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Indoor-Padel',
            'Große Anlage',
            'Academy',
            'Events',
            'Wellness',
          ],
          shortDescription:
            'Neue Indoor-Großanlage in Biesdorf mit 13 Panorama-Courts, KI-Smart-Courts und geplantem Wellness-Bereich.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-berlin-padelbros',
        name: 'PadelBros',
        slug: 'padelbros',
        status: 'approved',
        address: {
          street: 'Wittestraße 46',
          postalCode: '13509',
          city: 'Berlin',
          district: 'Reinickendorf (Tegel)',
          region: 'Berlin',
          countryCode: 'DE',
        },
        geo: {
          latitude: 52.5762493,
          longitude: 13.3049735,
        },
        website: 'https://padel-bros.de/',
        bookingUrl: 'https://padel-bros.de/',
        telephone: '+49 178 4709400',
        openingHours: [
          {
            label: 'Montag bis Freitag',
            opens: '09:00',
            closes: '23:00',
            notes: null,
          },
          {
            label: 'Samstag und Sonntag',
            opens: '08:00',
            closes: '23:00',
            notes: null,
          },
        ],
        courts: {
          total: 8,
          indoor: 8,
          outdoor: 0,
          coveredOutdoor: 0,
          singleCourts: 1,
        },
        amenities: {
          floodlights: 'yes',
          racketRental: 'yes',
          racketRentalPrice: 4,
          gastro: 'unknown',
          coaching: 'yes',
          beginnerCourses: 'unknown',
          tournaments: 'unknown',
          showers: 'unknown',
          parking: 'yes',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 16,
          priceTo: 40,
          priceModel: 'per_court_per_60_minutes',
          priceConfidence: 'high',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Mo-Fr 09-17 Uhr: 32 € pro Stunde Doppel, 16 € Single. Mo-Fr 17-23 Uhr: 40 € Doppel, 24 € Single. Sa-So 08-23 Uhr: 40 € Doppel, 24 € Single. Leihschläger 4 € pro Person, Bälle leihen 2 €, Bälle kaufen 6 €.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 4.8,
            bestRating: 5,
            reviewCount: 92,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Website nennt zwei leicht abweichende Court-Zahlen (6 Doppel + 2 Einzel + 1 Pickleball bzw. 7 Doppel + 1 Einzel + 1 Pickleball je nach Seitenbereich); hier konservativ mit 7 Doppel- plus 1 Single-Court als Padel-Courts gewertet, zzgl. separatem Pickleball-Court. Erreichbar via S25 Eichborndamm oder U6 Otisstraße.',
        sources: [
          {
            name: 'official_website',
            url: 'https://padel-bros.de/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'other',
            url: 'https://mypadelway.com/de/berlin/padelbros-berlin',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Indoor-Padel',
            'Günstige Preise',
            'Single-Padel',
            'Pickleball',
          ],
          shortDescription:
            'Indoor-Anlage in Tegel mit acht Padel-Courts, günstigen Nebenzeit-Preisen und zusätzlichem Pickleball-Court.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-berlin-padel-arena-berlin',
        name: 'Padel Arena Berlin',
        slug: 'padel-arena-berlin',
        status: 'approved',
        address: {
          street: 'Haberstraße 18',
          postalCode: '12057',
          city: 'Berlin',
          district: 'Neukölln',
          region: 'Berlin',
          countryCode: 'DE',
        },
        geo: {
          latitude: 52.46244,
          longitude: 13.46079,
        },
        website: 'https://padelarena.berlin/',
        bookingUrl: 'https://playtomic.com/clubs/grenzallee-padel',
        telephone: '+49 176 31219740',
        openingHours: [
          {
            label: 'Täglich',
            opens: '09:00',
            closes: '24:00',
            notes: 'Manche Quellen nennen abweichend bis 22 Uhr; vor Buchung prüfen.',
          },
        ],
        courts: {
          total: 14,
          indoor: 0,
          outdoor: 14,
          coveredOutdoor: 0,
          singleCourts: 1,
        },
        amenities: {
          floodlights: 'yes',
          racketRental: 'yes',
          racketRentalPrice: 5,
          gastro: 'yes',
          coaching: 'unknown',
          beginnerCourses: 'unknown',
          tournaments: 'yes',
          showers: 'unknown',
          parking: 'yes',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 25,
          priceTo: 53,
          priceModel: 'per_court_per_60_minutes',
          priceConfidence: 'medium',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Nebenzeit ca. 25-36 € pro Stunde (Mo-Fr 09-15 Uhr, Sa-So 08-10 Uhr), Hauptzeit bis 53 € pro Stunde (Mo-Fr 15-22 Uhr, Sa-So 10-22 Uhr). Schlägerverleih ca. 5 €, Bälle laut einer Quelle nur käuflich für ca. 9,99 €.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 4.3,
            bestRating: 5,
            reviewCount: 43,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Größte Outdoor-Anlage Berlins, als "Sport-Park" mit Panorama-Courts unter altem Baumbestand beworben. Court-Anzahl schwankt je nach Quelle stark zwischen 11 und 16; Playtomic (offizielle Buchungsplattform) zeigt aktuell 13 nummerierte Doppel-Courts plus 1 Single-Court, andere Verzeichnisse (PadelCompass, padelgrid) nennen nur 11, vermutlich veraltet. Auch als "Grenzallee Padel" gelistet.',
        sources: [
          {
            name: 'playtomic',
            url: 'https://playtomic.com/clubs/grenzallee-padel',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'other',
            url: 'https://padelarena.berlin/',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
          {
            name: 'padelcompass',
            url: 'https://padelcompass.de/plaetze/berlin/grenzallee-padel-berlin',
            checkedAt: '2026-09-06',
            confidence: 'low',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Outdoor-Padel',
            'Große Anlage',
            'Turniere',
            'Gastro',
          ],
          shortDescription:
            'Berlins größte Outdoor-Anlage in Neukölln mit rund 14 Panorama-Courts unter altem Baumbestand.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-berlin-padel-mitte',
        name: 'Padel Mitte',
        slug: 'padel-mitte',
        status: 'approved',
        address: {
          street: 'Müllerstraße 185 (Erika-Heß-Eisstadion)',
          postalCode: '13353',
          city: 'Berlin',
          district: 'Mitte (Wedding)',
          region: 'Berlin',
          countryCode: 'DE',
        },
        geo: {
          latitude: 52.5371216,
          longitude: 13.3691946,
        },
        website: 'https://www.padelmitte.de/',
        bookingUrl: 'https://www.padelmitte.de/',
        telephone: '+49 15563 580835',
        openingHours: [
          {
            label: 'Montag bis Freitag',
            opens: '09:00',
            closes: '22:00',
            notes: null,
          },
          {
            label: 'Samstag und Sonntag',
            opens: '09:00',
            closes: '20:00',
            notes: null,
          },
        ],
        courts: {
          total: 1,
          indoor: 0,
          outdoor: 1,
          coveredOutdoor: 0,
          singleCourts: null,
        },
        amenities: {
          floodlights: 'unknown',
          racketRental: 'yes',
          racketRentalPrice: null,
          gastro: 'yes',
          coaching: 'yes',
          beginnerCourses: 'yes',
          tournaments: 'yes',
          showers: 'unknown',
          parking: 'yes',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 18,
          priceTo: 24,
          priceModel: 'per_court_per_60_minutes',
          priceConfidence: 'medium',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Ab 18 € pro Stunde laut Startseite, spontane Buchung ohne Mitgliedschaft ab 24 € pro Stunde. "Schön-Wetter-Garantie": bei Regen Gutschrift als Guthaben. Urban-Sports-Club-Mitglieder können kostenlos spielen bzw. am Beginner-Kurs teilnehmen.',
        },
        ratings: [
          {
            source: 'google_business_profile',
            ratingValue: 4.7,
            bestRating: 5,
            reviewCount: 107,
            retrievedAt: '2026-09-06',
            displayAllowed: false,
          },
        ],
        notes:
          'Saisonale Sommer-Anlage auf der Eisbahn-Fläche des Erika-Heß-Eisstadions in Wedding; laut offizieller Website nur ein Court für vier Personen, trotzdem sehr gute Bewertungen. Bietet Beginner-Kurse, After-Work-Padel, Kinderkurse, Padel-Camp und ein "Fiesta Friday"-Turnier. Betreiberstruktur teils identisch mit Padel Lankwitz und Padel Neukölln.',
        sources: [
          {
            name: 'official_website',
            url: 'https://www.padelmitte.de/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'other',
            url: 'https://www.padelmitte.de/',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Outdoor-Padel',
            'Einsteiger',
            'Familien',
            'Saisonal',
          ],
          shortDescription:
            'Saisonale Sommer-Anlage im Wedding mit einem Court, Beginner-Kursen und Schön-Wetter-Garantie.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
    ],
  },
];

export function getAtlasCityBySlug(slug: string): AtlasCity | undefined {
  return atlasCities.find((city) => city.slug === slug);
}

export function getVenueBySlug(
  citySlug: string,
  venueSlug: string,
): PadelVenue | undefined {
  return getAtlasCityBySlug(citySlug)?.venues.find(
    (venue) => venue.slug === venueSlug,
  );
}

export function getAllPadelVenues() {
  return atlasCities.flatMap((city) =>
    city.venues.map((venue) => ({
      ...venue,
      cityName: city.name,
      citySlug: city.slug,
      countryCode: city.countryCode,
    })),
  );
}

export function getCityCourtStats(venues: PadelVenue[]) {
  return venues.reduce(
    (stats, venue) => ({
      total: stats.total + (venue.courts.total ?? 0),
      indoor: stats.indoor + (venue.courts.indoor ?? 0),
      outdoor: stats.outdoor + (venue.courts.outdoor ?? 0),
    }),
    { total: 0, indoor: 0, outdoor: 0 },
  );
}

export function getKnownStartingPrices(venues: PadelVenue[]) {
  return venues
    .map((venue) => venue.pricing.priceFrom)
    .filter((price): price is number => price !== null);
}
