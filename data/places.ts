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
    id: "de-muenchen",
    name: "München",
    slug: "muenchen",
    countryCode: 'DE',
    region: "Bayern",
    timezone: 'Europe/Berlin',
    seo: {
      primaryKeyword: "Padel spielen München",
      pageTitle: "Padel spielen in München: Die 5 besten Courts 2026",
      metaDescription:
        "Finde Padel-Courts in München: Indoor- und Outdoor-Anlagen, Preise, Schläger-Verleih, Turniere und Buchungslinks.",
    },
    venues: [
      {
        id: "de-muenchen-casa-padel-pineapple-park",
        name: "Casa Padel Pineapple Park",
        slug: "casa-padel-pineapple-park",
        status: "approved",
        address: {
          street: "Arnulfstraße 195-199",
          postalCode: "80634",
          city: "München",
          district: "Neuhausen-Nymphenburg",
          region: "Bayern",
          countryCode: "DE",
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: "https://casapadel.de/home/casa-padel-pineapple-park/",
        bookingUrl: "https://playtomic.com/clubs/casa-padel-pineapple-park",
        telephone: null,
        openingHours: [
          {
            label: "Täglich",
            opens: null,
            closes: null,
            notes: "365 Tage geöffnet. Öffnungszeiten vor der Buchung beim Betreiber prüfen.",
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
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: 4,
          gastro: "unknown",
          coaching: "yes",
          beginnerCourses: "yes",
          tournaments: "unknown",
          showers: "yes",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 32,
          priceTo: null,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "high",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Platzmiete ab 32 € pro Court und Stunde. Einzeltraining: 90 bis 120 € pro Stunde inklusive Platzmiete. Schläger-Verleih: 4 € bis 4 Stunden. Balldose: 7,50 €.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.0,
            bestRating: 5,
            reviewCount: 47,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Indoor-Halle im Pineapple Park, ehemaliger Alte-Paketposthalle-Standort. Deckenhöhe von 6 Metern. Kostenfreies Parken, an Wochenenden gegebenenfalls eingeschränkt.",
        sources: [
          {
            name: "official_website",
            url: "https://casapadel.de/home/casa-padel-pineapple-park/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "playtomic",
            url: "https://playtomic.com/padel-courts/munchen",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/plaetze/bayern/muenchen",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Ganzjähriges Spielen", "Indoor-Padel", "Outdoor-Padel", "Training"],
          shortDescription:
            "Eine der größten Padel-Anlagen Münchens mit neun Courts sowie Indoor- und Outdoor-Option.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-muenchen-padel-seasons",
        name: "Padel Seasons",
        slug: "padel-seasons",
        status: "approved",
        address: {
          street: "Paul-Ehrlich-Weg 6",
          postalCode: "80999",
          city: "München",
          district: "Allach-Untermenzing",
          region: "Bayern",
          countryCode: "DE",
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: "https://padel-seasons.de/",
        bookingUrl: "https://playtomic.com/clubs/padel-seasons-padel-tennis",
        telephone: null,
        openingHours: [
          {
            label: "Padel Indoor",
            opens: "06:00",
            closes: "02:00",
            notes: "Täglich.",
          },
          {
            label: "Padel Outdoor",
            opens: "09:00",
            closes: "22:00",
            notes: "Täglich.",
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
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: 4,
          gastro: "yes",
          coaching: "yes",
          beginnerCourses: "yes",
          tournaments: "yes",
          showers: "yes",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: null,
          priceTo: null,
          priceModel: "mixed",
          priceConfidence: "medium",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Dynamische Preise nach Saison und Uhrzeit. Winter-Preisliste 2025/2026 auf der Website. Schläger-Verleih: 4 € pro Match.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.7,
            bestRating: 5,
            reviewCount: 87,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Ehemaliger Tennisclub. Seit 2024 Indoor-Padel, seit 2025 auch Outdoor-Padel. Clubhaus mit Bar und Küche, große Sonnenterrasse, eigene Club League und WhatsApp-Community mit mehr als 1.000 Mitgliedern.",
        sources: [
          {
            name: "official_website",
            url: "https://padel-seasons.de/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "playtomic",
            url: "https://playtomic.com/clubs/padel-seasons-padel-tennis",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/plaetze/bayern/muenchen",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Outdoor-Padel", "Einsteiger", "Turniere", "Community"],
          shortDescription:
            "Große Allach-Anlage mit vier Indoor- und vier Outdoor-Courts, Clubhaus, Academy und langen Indoor-Öffnungszeiten.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-muenchen-padelcity-tucherpark",
        name: "PadelCity München Tucherpark",
        slug: "padelcity-muenchen-tucherpark",
        status: "approved",
        address: {
          street: "Am Eisbach 5",
          postalCode: "80538",
          city: "München",
          district: "Schwabing-Freimann",
          region: "Bayern",
          countryCode: "DE",
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: "https://padelcity.de/muenchen-tucherpark/",
        bookingUrl: "https://padelcity.de/muenchen-tucherpark/",
        telephone: null,
        openingHours: [
          {
            label: "Outdoor-Courts",
            opens: "07:30",
            closes: "23:00",
            notes: "Montag bis Sonntag. Bei schlechter Witterung entscheidet der Clubmanager über die Bespielbarkeit.",
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
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: null,
          gastro: "unknown",
          coaching: "unknown",
          beginnerCourses: "unknown",
          tournaments: "unknown",
          showers: "unknown",
          parking: "unknown",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 28,
          priceTo: 42,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "high",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Mo-Fr bis 16 Uhr: 36 € Double, 28 € Single und 18 € Tennis. Mo-Fr ab 16 Uhr: 42 € Double, 28 € Single und 26 € Tennis. Samstag, Sonntag und Feiertage ganztägig: 42 € Double, 28 € Single und 26 € Tennis. Zusätzlich Tennis-Courts mit Kunstrasen.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.5,
            bestRating: 5,
            reviewCount: 71,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Pay-and-Play-Konzept ohne Mitgliedschaft. Drei Outdoor-Courts, darunter ein Single-Court. Bei nicht bespielbarer Witterung ist laut Betreiber eine Umbuchung oder ein Gutschein möglich.",
        sources: [
          {
            name: "official_website",
            url: "https://padelcity.de/muenchen-tucherpark/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/plaetze/bayern/muenchen/padelcity-muenchen-tucherpark-muenchen",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Outdoor-Padel", "Single-Padel", "Pay and Play", "Zentrale Lage"],
          shortDescription:
            "Outdoor-Anlage im Tucherpark mit drei Courts, darunter einem Single-Court, und Buchung ohne Mitgliedschaft.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-muenchen-muenchner-sportclub",
        name: "Münchner Sportclub e.V.",
        slug: "muenchner-sportclub",
        status: "approved",
        address: {
          street: "Eberwurzstraße 28",
          postalCode: "80935",
          city: "München",
          district: "Feldmoching-Hasenbergl",
          region: "Bayern",
          countryCode: "DE",
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: "https://www.muenchner-sportclub.de/",
        bookingUrl: "https://playtomic.com/clubs/munchner-sportclub-court-1-court-wechselpilot",
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
          floodlights: "unknown",
          racketRental: "unknown",
          racketRentalPrice: null,
          gastro: "unknown",
          coaching: "yes",
          beginnerCourses: "unknown",
          tournaments: "yes",
          showers: "unknown",
          parking: "unknown",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 20,
          priceTo: 60,
          priceModel: "mixed",
          priceConfidence: "low",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Preisspanne von 20 bis 60 € pro Stunde laut Drittanbieter-Verzeichnis. Buchung laut Recherche über eBusy-System; wochentags bis 16 Uhr 60 Minuten, ab 16 Uhr und am Wochenende 90 Minuten.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.4,
            bestRating: 5,
            reviewCount: 153,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Traditionsverein mit weiteren Sportangeboten wie Tennis und Fußball. Zwei neue Outdoor-Padel-Courts seit Ende März 2025, gesponsert von Wechselpilot.",
        sources: [
          {
            name: "official_website",
            url: "https://www.muenchner-sportclub.de/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "padelfinder",
            url: "https://padelfinder.de/padelplatz/muenchner-sportclub-e-v/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/plaetze/bayern/muenchen/muenchner-sportclub-e-v-muenchen",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Outdoor-Padel", "Vereinsumfeld", "Training", "Turniere"],
          shortDescription:
            "Vereinsanlage im Münchner Norden mit zwei neuen Outdoor-Padel-Courts und weiteren Sportangeboten.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-muenchen-padelpit",
        name: "PadelPit",
        slug: "padelpit",
        status: "approved",
        address: {
          street: "Heiglhofstraße 25",
          postalCode: "81377",
          city: "München",
          district: "Hadern",
          region: "Bayern",
          countryCode: "DE",
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: "https://www.padelpit.de/",
        bookingUrl: "https://playtomic.com/clubs/padelpit",
        telephone: null,
        openingHours: [
          {
            label: "Montag bis Freitag",
            opens: "08:00",
            closes: "20:00",
            notes: null,
          },
          {
            label: "Samstag und Sonntag",
            opens: "09:00",
            closes: "20:00",
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
          floodlights: "unknown",
          racketRental: "yes",
          racketRentalPrice: null,
          gastro: "unknown",
          coaching: "yes",
          beginnerCourses: "yes",
          tournaments: "unknown",
          showers: "unknown",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: null,
          priceTo: null,
          priceModel: "mixed",
          priceConfidence: "unknown",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Beginner- und Starter-Kurse laut Playtomic ab 35 bis 40 € pro Person. Early-Bird-Mitgliedschaft: 80 € monatlich mit 25 % Rabatt vor 15 Uhr an Werktagen sowie 120 € Wallet-Guthaben.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.9,
            bestRating: 5,
            reviewCount: 13,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Betrieben am Standort TSV Großhadern. Laut Playtomic mit Equipment Rental, kostenlosem Parken und Verkaufsautomat.",
        sources: [
          {
            name: "playtomic",
            url: "https://playtomic.com/clubs/padelpit",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/plaetze/bayern/muenchen",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Outdoor-Padel", "Einsteiger", "Kurse", "Hadern"],
          shortDescription:
            "Kompakte Outdoor-Anlage am TSV Großhadern mit drei Courts, Einsteigerkursen und Schläger-Verleih.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
    ],
  },
  {
    id: "de-berlin",
    name: "Berlin",
    slug: "berlin",
    countryCode: 'DE',
    region: "Berlin",
    timezone: 'Europe/Berlin',
    seo: {
      primaryKeyword: "Padel spielen Berlin",
      pageTitle: "Padel spielen in Berlin: Die 5 besten Courts 2026",
      metaDescription:
        "Finde Padel-Courts in Berlin: Indoor- und Outdoor-Anlagen, Preise, Schläger-Verleih, Turniere und Buchungslinks.",
    },
    venues: [
      {
        id: "de-berlin-padel-berlin",
        name: "Padel Berlin",
        slug: "padel-berlin",
        status: "approved",
        address: {
          street: "Wiesenweg 1-4",
          postalCode: "10365",
          city: "Berlin",
          district: "Friedrichshain-Kreuzberg",
          region: "Berlin",
          countryCode: "DE",
        },
        geo: {
          latitude: 52.507804,
          longitude: 13.4740868,
        },
        website: "https://padelberlin.de/",
        bookingUrl: "https://padelberlin.de/pricing/",
        telephone: "+49 30 20256790",
        openingHours: [
          {
            label: "Montag bis Freitag",
            opens: "09:00",
            closes: "22:00",
            notes: null,
          },
          {
            label: "Samstag und Sonntag",
            opens: "08:00",
            closes: "22:00",
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
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: 5,
          gastro: "unknown",
          coaching: "unknown",
          beginnerCourses: "unknown",
          tournaments: "unknown",
          showers: "unknown",
          parking: "unknown",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 37.5,
          priceTo: 69,
          priceModel: "mixed",
          priceConfidence: "high",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Sommer-Saisonpreise: 46 € pro Stunde bzw. 69 € pro 1,5 Stunden in der Hauptzeit (Mo-Fr 09-15 Uhr), 37,50 € bzw. 56,50 € in der Nebenzeit (Mo-Fr 15-22 Uhr). Wochenende mit eigener Preisstaffelung. Schläger-Verleih 5 €, Bälle 4 €.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.8,
            bestRating: 5,
            reviewCount: 435,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          'Historisch erste kommerzielle Padel-Anlage Berlins, seit 2012 in Friedrichshain aktiv (vormals "Padel Berlin Friedrichshain"). Bestbewertete und reviewstärkste Anlage der Stadt.',
        sources: [
          {
            name: "official_website",
            url: "https://padelberlin.de/pricing/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "http://padelberlin.de/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/en/courts/berlin/padel-berlin-berlin",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Outdoor-Padel", "Erfahrene Community", "Zentrale Lage"],
          shortDescription:
            "Berlins Padel-Pionier seit 2012 mit einem Indoor- und zwei Outdoor-Courts sowie der besten Bewertung der Stadt.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-berlin-padel-factory-berlin",
        name: "Padel Factory Berlin",
        slug: "padel-factory-berlin",
        status: "approved",
        address: {
          street: "Am Gewerbepark 5",
          postalCode: "12683",
          city: "Berlin",
          district: "Biesdorf (Marzahn-Hellersdorf)",
          region: "Berlin",
          countryCode: "DE",
        },
        geo: {
          latitude: 52.522105,
          longitude: 13.5661185,
        },
        website: "https://www.padelfactory.berlin/",
        bookingUrl: "https://playtomic.com/clubs/padel-factory-berlin",
        telephone: "+49 1579 2510408",
        openingHours: [
          {
            label: "Täglich",
            opens: "08:00",
            closes: "23:00",
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
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: null,
          gastro: "yes",
          coaching: "yes",
          beginnerCourses: "yes",
          tournaments: "yes",
          showers: "unknown",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: null,
          priceTo: null,
          priceModel: "unknown",
          priceConfidence: "unknown",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Keine öffentliche Preisliste gefunden (Stand: Neueröffnung 2026). Buchung ausschließlich über Playtomic. Reformer Pilates, Fitness, Co-Working und Sauna laut Website ab Q4 2026 geplant.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 5.0,
            bestRating: 5,
            reviewCount: 134,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          'Berlins größte Indoor-Padel-Anlage: 13 Panorama-Courts (10 Doppel, 2 Single, 1 Kids-Court) auf 4.500 m² in zwei Hallen mit bis zu 16 m Deckenhöhe, darunter 3 Smart-Courts mit KI-Videoanalyse. Offizieller Hexagon-Cup-Center-Court. Neue Anlage, daher wenige Reviews trotz Top-Rating. Drittanbieter-Verzeichnisse widersprechen sich teils zur Indoor/Outdoor-Zuordnung; offizielle Website und Playtomic bestätigen konsistent "Indoor".',
        sources: [
          {
            name: "official_website",
            url: "https://www.padelfactory.berlin/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "playtomic",
            url: "https://playtomic.com/clubs/padel-factory-berlin",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/en/courts/berlin/padel-factory-berlin-berlin",
            checkedAt: "2026-09-06",
            confidence: "low",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Große Anlage", "Academy", "Events", "Wellness"],
          shortDescription:
            "Neue Indoor-Großanlage in Biesdorf mit 13 Panorama-Courts, KI-Smart-Courts und geplantem Wellness-Bereich.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-berlin-padelbros",
        name: "PadelBros",
        slug: "padelbros",
        status: "approved",
        address: {
          street: "Wittestraße 46",
          postalCode: "13509",
          city: "Berlin",
          district: "Reinickendorf (Tegel)",
          region: "Berlin",
          countryCode: "DE",
        },
        geo: {
          latitude: 52.5762493,
          longitude: 13.3049735,
        },
        website: "https://padel-bros.de/",
        bookingUrl: "https://padel-bros.de/",
        telephone: "+49 178 4709400",
        openingHours: [
          {
            label: "Montag bis Freitag",
            opens: "09:00",
            closes: "23:00",
            notes: null,
          },
          {
            label: "Samstag und Sonntag",
            opens: "08:00",
            closes: "23:00",
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
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: 4,
          gastro: "unknown",
          coaching: "yes",
          beginnerCourses: "unknown",
          tournaments: "unknown",
          showers: "unknown",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 16,
          priceTo: 40,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "high",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Mo-Fr 09-17 Uhr: 32 € pro Stunde Doppel, 16 € Single. Mo-Fr 17-23 Uhr: 40 € Doppel, 24 € Single. Sa-So 08-23 Uhr: 40 € Doppel, 24 € Single. Leihschläger 4 € pro Person, Bälle leihen 2 €, Bälle kaufen 6 €.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.8,
            bestRating: 5,
            reviewCount: 92,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Website nennt zwei leicht abweichende Court-Zahlen (6 Doppel + 2 Einzel + 1 Pickleball bzw. 7 Doppel + 1 Einzel + 1 Pickleball je nach Seitenbereich); hier konservativ mit 7 Doppel- plus 1 Single-Court als Padel-Courts gewertet, zzgl. separatem Pickleball-Court. Erreichbar via S25 Eichborndamm oder U6 Otisstraße.",
        sources: [
          {
            name: "official_website",
            url: "https://padel-bros.de/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://mypadelway.com/de/berlin/padelbros-berlin",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Günstige Preise", "Single-Padel", "Pickleball"],
          shortDescription:
            "Indoor-Anlage in Tegel mit acht Padel-Courts, günstigen Nebenzeit-Preisen und zusätzlichem Pickleball-Court.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-berlin-padel-arena-berlin",
        name: "Padel Arena Berlin",
        slug: "padel-arena-berlin",
        status: "approved",
        address: {
          street: "Haberstraße 18",
          postalCode: "12057",
          city: "Berlin",
          district: "Neukölln",
          region: "Berlin",
          countryCode: "DE",
        },
        geo: {
          latitude: 52.46244,
          longitude: 13.46079,
        },
        website: "https://padelarena.berlin/",
        bookingUrl: "https://playtomic.com/clubs/grenzallee-padel",
        telephone: "+49 176 31219740",
        openingHours: [
          {
            label: "Täglich",
            opens: "09:00",
            closes: "24:00",
            notes: "Manche Quellen nennen abweichend bis 22 Uhr; vor Buchung prüfen.",
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
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: 5,
          gastro: "yes",
          coaching: "unknown",
          beginnerCourses: "unknown",
          tournaments: "yes",
          showers: "unknown",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 25,
          priceTo: 53,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "medium",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Nebenzeit ca. 25-36 € pro Stunde (Mo-Fr 09-15 Uhr, Sa-So 08-10 Uhr), Hauptzeit bis 53 € pro Stunde (Mo-Fr 15-22 Uhr, Sa-So 10-22 Uhr). Schlägerverleih ca. 5 €, Bälle laut einer Quelle nur käuflich für ca. 9,99 €.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.3,
            bestRating: 5,
            reviewCount: 43,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          'Größte Outdoor-Anlage Berlins, als "Sport-Park" mit Panorama-Courts unter altem Baumbestand beworben. Court-Anzahl schwankt je nach Quelle stark zwischen 11 und 16; Playtomic (offizielle Buchungsplattform) zeigt aktuell 13 nummerierte Doppel-Courts plus 1 Single-Court, andere Verzeichnisse (PadelCompass, padelgrid) nennen nur 11, vermutlich veraltet. Auch als "Grenzallee Padel" gelistet.',
        sources: [
          {
            name: "playtomic",
            url: "https://playtomic.com/clubs/grenzallee-padel",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://padelarena.berlin/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/plaetze/berlin/grenzallee-padel-berlin",
            checkedAt: "2026-09-06",
            confidence: "low",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Outdoor-Padel", "Große Anlage", "Turniere", "Gastro"],
          shortDescription:
            "Berlins größte Outdoor-Anlage in Neukölln mit rund 14 Panorama-Courts unter altem Baumbestand.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-berlin-padel-mitte",
        name: "Padel Mitte",
        slug: "padel-mitte",
        status: "approved",
        address: {
          street: "Müllerstraße 185 (Erika-Heß-Eisstadion)",
          postalCode: "13353",
          city: "Berlin",
          district: "Mitte (Wedding)",
          region: "Berlin",
          countryCode: "DE",
        },
        geo: {
          latitude: 52.5371216,
          longitude: 13.3691946,
        },
        website: "https://www.padelmitte.de/",
        bookingUrl: "https://www.padelmitte.de/",
        telephone: "+49 15563 580835",
        openingHours: [
          {
            label: "Montag bis Freitag",
            opens: "09:00",
            closes: "22:00",
            notes: null,
          },
          {
            label: "Samstag und Sonntag",
            opens: "09:00",
            closes: "20:00",
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
          floodlights: "unknown",
          racketRental: "yes",
          racketRentalPrice: null,
          gastro: "yes",
          coaching: "yes",
          beginnerCourses: "yes",
          tournaments: "yes",
          showers: "unknown",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 18,
          priceTo: 24,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "medium",
          lastVerifiedAt: "2026-09-06",
          notes:
            'Ab 18 € pro Stunde laut Startseite, spontane Buchung ohne Mitgliedschaft ab 24 € pro Stunde. "Schön-Wetter-Garantie": bei Regen Gutschrift als Guthaben. Urban-Sports-Club-Mitglieder können kostenlos spielen bzw. am Beginner-Kurs teilnehmen.',
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.7,
            bestRating: 5,
            reviewCount: 107,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          'Saisonale Sommer-Anlage auf der Eisbahn-Fläche des Erika-Heß-Eisstadions in Wedding; laut offizieller Website nur ein Court für vier Personen, trotzdem sehr gute Bewertungen. Bietet Beginner-Kurse, After-Work-Padel, Kinderkurse, Padel-Camp und ein "Fiesta Friday"-Turnier. Betreiberstruktur teils identisch mit Padel Lankwitz und Padel Neukölln.',
        sources: [
          {
            name: "official_website",
            url: "https://www.padelmitte.de/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://www.padelmitte.de/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Outdoor-Padel", "Einsteiger", "Familien", "Saisonal"],
          shortDescription:
            "Saisonale Sommer-Anlage im Wedding mit einem Court, Beginner-Kursen und Schön-Wetter-Garantie.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
    ],
  },
  {
    id: "de-hamburg",
    name: "Hamburg",
    slug: "hamburg",
    countryCode: 'DE',
    region: "Hamburg",
    timezone: 'Europe/Berlin',
    seo: {
      primaryKeyword: "Padel spielen Hamburg",
      pageTitle: "Padel spielen in Hamburg: Die 5 besten Courts 2026",
      metaDescription:
        "Finde Padel-Courts in Hamburg: Indoor- und Outdoor-Anlagen, Preise, Schläger-Verleih, Turniere und Buchungslinks.",
    },
    venues: [
      {
        id: "de-hamburg-mitte-dolce-vita",
        name: "mitte — dolce vita | Boutique Padel Club",
        slug: "mitte-dolce-vita",
        status: "approved",
        address: {
          street: "Beerenweg 3",
          postalCode: "22761",
          city: "Hamburg",
          district: "Altona",
          region: "Hamburg",
          countryCode: "DE",
        },
        geo: {
          latitude: 53.5664433,
          longitude: 9.9207232,
        },
        website: "https://www.mittepadel.com/",
        bookingUrl: "https://playtomic.com/de/clubs/mitte-dolce-vita",
        telephone: null,
        openingHours: [
          {
            label: "Montag bis Freitag",
            opens: "07:00",
            closes: "23:00",
            notes: null,
          },
          {
            label: "Samstag und Sonntag",
            opens: "09:00",
            closes: "23:00",
            notes: null,
          },
        ],
        courts: {
          total: 6,
          indoor: 6,
          outdoor: 0,
          coveredOutdoor: 0,
          singleCourts: 2,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "unknown",
          racketRentalPrice: null,
          gastro: "yes",
          coaching: "unknown",
          beginnerCourses: "unknown",
          tournaments: "yes",
          showers: "unknown",
          parking: "unknown",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 20,
          priceTo: 45,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "medium",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Doppelcourt Indoor laut Drittanbieter-Verzeichnis ca. 40-45 € pro Stunde, Einzelcourt ca. 20-23 €. Offene Spielformate ('Open Play') teils ab 20 € pro Person auf Playtomic buchbar. Offizielle Preisliste nicht auf der Markenwebsite hinterlegt (nur Buchung über Playtomic).",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.9,
            bestRating: 5,
            reviewCount: 738,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Teil der bundesweiten 'mitte'-Kette (The Padel Company GmbH, Berlin), Standort 'dolce vita' in Altona. Sechs Indoor-Courts (4 Doppel, 2 Einzel) inklusive einem 'Center Court'. Sehr moderne, hochwertig gestaltete Halle laut zahlreichen Reviews, hundefreundlich. Zweitstärkste Reviewzahl aller Hamburger Anlagen.",
        sources: [
          {
            name: "other",
            url: "https://www.mittepadel.com/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "playtomic",
            url: "https://playtomic.com/de/clubs/mitte-dolce-vita",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://netz.app/padel-court/mitte-dolce-vita-altona-hamburg/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Moderne Anlage", "Community", "Zentrale Lage"],
          shortDescription:
            "Hochwertiger Boutique-Padel-Club in Altona mit sechs modernen Indoor-Courts und starker Community.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-hamburg-p3-padel-club",
        name: "P3 Padel Club Hamburg",
        slug: "p3-padel-club-hamburg",
        status: "approved",
        address: {
          street: "Havighorster Weg 16",
          postalCode: "21031",
          city: "Hamburg",
          district: "Bergedorf",
          region: "Hamburg",
          countryCode: "DE",
        },
        geo: {
          latitude: 53.5166703,
          longitude: 10.2106098,
        },
        website: "https://p3-padel.club/",
        bookingUrl: "https://playtomic.com/de/clubs/p3-padel-club-hamburg",
        telephone: "040 55779009",
        openingHours: [
          {
            label: "Täglich",
            opens: "06:00",
            closes: "24:00",
            notes: "Telefonische Erreichbarkeit eingeschränkt: Wochentags 16-24 Uhr, Wochenende 10-23 Uhr.",
          },
        ],
        courts: {
          total: 7,
          indoor: 7,
          outdoor: 0,
          coveredOutdoor: 0,
          singleCourts: 2,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "unknown",
          racketRentalPrice: null,
          gastro: "unknown",
          coaching: "yes",
          beginnerCourses: "unknown",
          tournaments: "yes",
          showers: "unknown",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 20,
          priceTo: 42,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "high",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Double Court: 42 € (Hauptzeit) bzw. 24 € (Nebenzeit) pro Stunde. Single Court: 24 € (Hauptzeit) bzw. 16 € (Nebenzeit) pro Stunde. Drittanbieter nennen Einstiegspreise ab 20 €.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.8,
            bestRating: 5,
            reviewCount: 104,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Sieben Indoor-Courts (5 Doppel, 2 Einzel) mit Adidas-AFP-Bodenbelag laut Drittanbieter-Beschreibung. Zufahrt über 'Monkey Island' mit gesonderter Beschilderung zur hinteren Halle. Bietet Training mit eigenen Coaches und Turniere.",
        sources: [
          {
            name: "official_website",
            url: "https://p3-padel.club/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "playtomic",
            url: "https://playtomic.com/de/clubs/p3-padel-club-hamburg",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://netz.app/padel-court/p3-padel-club-hamburg/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Training", "Turniere", "Single-Padel"],
          shortDescription:
            "Indoor-Anlage in Bergedorf mit sieben Courts, Adidas-Belag und eigenem Trainerteam.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-hamburg-padel-amigos-halstenbek",
        name: "padel amigos Hamburg-Halstenbek",
        slug: "padel-amigos-halstenbek",
        status: "approved",
        address: {
          street: "Am Bahndamm 88",
          postalCode: "25469",
          city: "Halstenbek",
          district: "Hamburg-Umland (Kreis Pinneberg)",
          region: "Schleswig-Holstein",
          countryCode: "DE",
        },
        geo: {
          latitude: 53.6175333,
          longitude: 9.860174,
        },
        website: "https://padelamigos.de/",
        bookingUrl: "https://playtomic.com/clubs/padel-amigos-hamburg-halstenbek",
        telephone: "0160 99429999",
        openingHours: [
          {
            label: "Sonntag bis Freitag",
            opens: "08:00",
            closes: "23:00",
            notes: null,
          },
          {
            label: "Samstag",
            opens: "08:00",
            closes: "21:30",
            notes: null,
          },
        ],
        courts: {
          total: 9,
          indoor: 4,
          outdoor: 4,
          coveredOutdoor: 0,
          singleCourts: 1,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: 4,
          gastro: "yes",
          coaching: "yes",
          beginnerCourses: "yes",
          tournaments: "yes",
          showers: "unknown",
          parking: "yes",
          publicTransportNearby: "yes",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 24,
          priceTo: 42,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "high",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Outdoor: 24 €/Std (08-16 & 22-00 Uhr), 36 €/Std (16-22 Uhr). Indoor: 28 €/Std (08-16 & 22-00 Uhr), 42 €/Std (16-22 Uhr). Wochenende ganztägig 36 € Outdoor bzw. 42 € Indoor (ab 22 Uhr 28 €). Schlägerverleih 4 €, Ballverleih 2 € pro Buchung.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.8,
            bestRating: 5,
            reviewCount: 146,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Familiengeführter Club mit spanischen Wurzeln, 4 Indoor- und 4 Outdoor-Courts plus 1 Single-Court sowie separatem Pickleball-Platz (Norddeutschlands erster fest installierter). Restaurant 'Netzroller' vor Ort, kostenfreie Parkplätze direkt an der Anlage, gut per S3 (Halt Krupunder) erreichbar. Liegt administrativ in Halstenbek, wird aber durchgängig als Hamburger Padel-Standort geführt. Betreibt zusätzlichen Standort in Jesteburg.",
        sources: [
          {
            name: "official_website",
            url: "https://padelamigos.de/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "playtomic",
            url: "https://playtomic.com/clubs/padel-amigos-hamburg-halstenbek",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/en/courts/hamburg/padel-amigos-hamburg-halstenbek-halstenbek",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Outdoor-Padel", "Familien", "Community", "Pickleball"],
          shortDescription:
            "Familiengeführter Club im Hamburger Umland mit neun Courts, eigenem Restaurant und starker Community.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-hamburg-padelon-hummelsbuettel",
        name: "Padelon Hamburg-Hummelsbüttel",
        slug: "padelon-hummelsbuettel",
        status: "approved",
        address: {
          street: "Glashütter Landstraße 43",
          postalCode: "22339",
          city: "Hamburg",
          district: "Wandsbek (Hummelsbüttel)",
          region: "Hamburg",
          countryCode: "DE",
        },
        geo: {
          latitude: 53.6525864,
          longitude: 10.0432153,
        },
        website: "https://www.padelon.de/hamburg-hummelsbuettel",
        bookingUrl: "https://www.padelon.de/hamburg-hummelsbuettel",
        telephone: null,
        openingHours: [
          {
            label: "Täglich",
            opens: null,
            closes: null,
            notes: "24 Stunden geöffnet laut offizieller Website.",
          },
        ],
        courts: {
          total: 9,
          indoor: 6,
          outdoor: 3,
          coveredOutdoor: 0,
          singleCourts: 2,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: 4,
          gastro: "yes",
          coaching: "yes",
          beginnerCourses: "yes",
          tournaments: "unknown",
          showers: "yes",
          parking: "unknown",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 12,
          priceTo: 44,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "high",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Doppelcourt Indoor: 36 € (Nebenzeit Mo-Fr 07-16 Uhr) bzw. 44 € (Hauptzeit Mo-Fr 16-23 Uhr sowie Sa/So ganztägig). Single Court Indoor: 24 € bzw. 28 €. Nachtschwärmer-Tarif (täglich 23-06 Uhr): 24 € Doppel, 12 € Single. Schläger-Verleih 4 €, Bälle 7,50 € (Kauf, 3 Stück) bzw. 3 € (Leihe).",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.2,
            bestRating: 5,
            reviewCount: 222,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Deutschlands erstes Padelon-Center, im ehemaligen Pro Tennis Hamburg auf über 13.000 m² Gesamtfläche. 4 Doppel- und 2 Single-Courts Indoor ganzjährig, zusätzlich 3 Doppel-Courts Outdoor sowie 6 Sand-Tennisplätze in der Außensaison (April bis Oktober). Lounge mit Bar und Terrasse, Pro-Shop, Umkleiden und Duschen vorhanden. Partnerschaft mit CUPRA Garage Hamburg.",
        sources: [
          {
            name: "official_website",
            url: "https://www.padelon.de/hamburg-hummelsbuettel",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://www.padelon.de/hamburg-hummelsbuettel",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Outdoor-Padel", "Große Anlage", "Nachtspiel", "Tennis"],
          shortDescription:
            "Erstes Padelon-Center Deutschlands mit sechs Indoor- und drei saisonalen Outdoor-Courts sowie Tennisplätzen.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-hamburg-mitte-the-cabrio",
        name: "mitte — the cabrio | Boutique Padel Club",
        slug: "mitte-the-cabrio",
        status: "approved",
        address: {
          street: "Wandsbeker Zollstraße 25-29",
          postalCode: "22041",
          city: "Hamburg",
          district: "Wandsbek",
          region: "Hamburg",
          countryCode: "DE",
        },
        geo: {
          latitude: 53.575325,
          longitude: 10.0746053,
        },
        website: "https://www.mittepadel.com/",
        bookingUrl: "https://playtomic.com/clubs/mitte-the-cabrio",
        telephone: null,
        openingHours: [
          {
            label: "Montag bis Freitag",
            opens: "07:00",
            closes: "23:00",
            notes: null,
          },
          {
            label: "Samstag und Sonntag",
            opens: "09:00",
            closes: "23:00",
            notes: null,
          },
        ],
        courts: {
          total: 5,
          indoor: 5,
          outdoor: 0,
          coveredOutdoor: 5,
          singleCourts: null,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "unknown",
          racketRentalPrice: null,
          gastro: "unknown",
          coaching: "unknown",
          beginnerCourses: "yes",
          tournaments: "unknown",
          showers: "unknown",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 20,
          priceTo: null,
          priceModel: "per_person",
          priceConfidence: "low",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Open-Play-Formate auf Playtomic ab 20 € pro Person (90 Minuten) buchbar. Keine öffentliche Court-Preisliste pro Stunde auf der Markenwebsite gefunden; Buchung ausschließlich über Playtomic.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.9,
            bestRating: 5,
            reviewCount: 508,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Zweiter Hamburger 'mitte'-Standort (The Padel Company GmbH) in Wandsbek, Besonderheit sind Courts mit versenkbarem Dach ('Cabrio') für Freiluft-Gefühl bei Indoor-Absicherung. Höchste Reviewzahl unter den fünf ausgewählten Anlagen nach 'dolce vita'. Drittanbieter nennen unterschiedliche Court-Zahlen (5 laut MyPadelWay, weitere Quellen unklar); Playtomic-Buchungsseite als aktuellste Referenz herangezogen.",
        sources: [
          {
            name: "other",
            url: "https://www.mittepadel.com/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "playtomic",
            url: "https://playtomic.com/clubs/mitte-the-cabrio",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://mypadelway.com/de/hamburg/mitte-the-cabrio-boutique-padel-club-hamburg",
            checkedAt: "2026-09-06",
            confidence: "low",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Design-Anlage", "Community", "Open Play"],
          shortDescription:
            "Boutique-Padel-Club in Wandsbek mit versenkbaren Dach-Courts und der höchsten Reviewzahl der Auswahl.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
    ],
  },
  {
    id: "de-koeln",
    name: "Köln",
    slug: "koeln",
    countryCode: 'DE',
    region: "Nordrhein-Westfalen",
    timezone: 'Europe/Berlin',
    seo: {
      primaryKeyword: "Padel spielen Köln",
      pageTitle: "Padel spielen in Köln: Die 5 besten Courts 2026",
      metaDescription:
        "Finde Padel-Courts in Köln: Indoor- und Outdoor-Anlagen, Preise, Schläger-Verleih, Turniere und Buchungslinks.",
    },
    venues: [
      {
        id: "de-koeln-mitte-oskar",
        name: "mitte — oskar | Boutique Padel Club",
        slug: "mitte-oskar",
        status: "approved",
        address: {
          street: "Oskar-Jäger-Straße 192",
          postalCode: "50825",
          city: "Köln",
          district: "Ehrenfeld",
          region: "Nordrhein-Westfalen",
          countryCode: "DE",
        },
        geo: {
          latitude: 50.9503823,
          longitude: 6.9098268,
        },
        website: "https://mittepadel.com/",
        bookingUrl: "https://playtomic.com/clubs/mitte-oskar",
        telephone: "+49 1520 3988758",
        openingHours: [
          {
            label: "Montag bis Freitag",
            opens: "07:00",
            closes: "23:00",
            notes: null,
          },
          {
            label: "Samstag und Sonntag",
            opens: "09:00",
            closes: "23:00",
            notes: null,
          },
        ],
        courts: {
          total: 12,
          indoor: 12,
          outdoor: 0,
          coveredOutdoor: 0,
          singleCourts: null,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "unknown",
          racketRentalPrice: null,
          gastro: "unknown",
          coaching: "unknown",
          beginnerCourses: "unknown",
          tournaments: "yes",
          showers: "yes",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: null,
          priceTo: null,
          priceModel: "unknown",
          priceConfidence: "unknown",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Keine öffentliche Preisliste pro Stunde auf der Markenwebsite gefunden; Buchung ausschließlich über Playtomic. Wie bei anderen mitte-Standorten vermutlich Open-Play-Formate ab ca. 20 € pro Person.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.9,
            bestRating: 5,
            reviewCount: 199,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Dritter Standort der bundesweiten 'mitte'-Kette (The Padel Company GmbH, Berlin) in einer ehemaligen Industriehalle in Ehrenfeld. Mit 12 Indoor-Courts die größte reine Indoor-Padel-Anlage Kölns laut mehreren unabhängigen Drittanbieter-Rankings (Padelscout, Padelfinder). Reviews loben moderne Ausstattung, jedoch teils suboptimale Lichtverhältnisse durch Oberlichter. Unterschiedliche Reviewzahlen zwischen 172 und 199 je nach Quelle/Abrufzeitpunkt.",
        sources: [
          {
            name: "other",
            url: "https://mittepadel.com/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "other",
            url: "https://padelscout.io/de-de/clubs/mitte-oskar-ehrenfeld",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelfinder",
            url: "https://padelfinder.de/padel-plaetze-rund-um-koeln-bonn/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Große Anlage", "Moderne Anlage", "Community"],
          shortDescription:
            "Kölns größte Indoor-Padel-Anlage in einer stilvollen Industriehalle in Ehrenfeld mit 12 Courts.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-koeln-the-cube-padel",
        name: "The Cube Padel - Carlswerk",
        slug: "the-cube-padel-carlswerk",
        status: "approved",
        address: {
          street: "Schanzenstraße 6-20",
          postalCode: "51063",
          city: "Köln",
          district: "Mülheim",
          region: "Nordrhein-Westfalen",
          countryCode: "DE",
        },
        geo: {
          latitude: 50.9650379,
          longitude: 7.0176508,
        },
        website: "https://thecubepadel.de/",
        bookingUrl: "https://playtomic.com/de/clubs/the-cube-padel",
        telephone: "+49 1575 6132813",
        openingHours: [
          {
            label: "Täglich",
            opens: "08:00",
            closes: "23:00",
            notes: "Playtomic nennt teils abweichend 05:00-23:00 Uhr; vor Buchung prüfen.",
          },
        ],
        courts: {
          total: 13,
          indoor: 11,
          outdoor: 2,
          coveredOutdoor: 0,
          singleCourts: 2,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: null,
          gastro: "yes",
          coaching: "unknown",
          beginnerCourses: "unknown",
          tournaments: "yes",
          showers: "yes",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 34,
          priceTo: 44,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "high",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Off-Peak (Mo-Fr 08-16 Uhr): 34 € pro Court/Stunde. Peak (Mo-Do 16-23 Uhr): 44 € pro Court/Stunde. Winter-Abo ab 884 € für 26 Termine (Off-Peak) bzw. 1.144 € (Peak). Single-Courts günstiger laut Drittanbieter (ca. 28-32 €). Schläger-Verleih (Adidas) und Bälle im Automat verfügbar.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.6,
            bestRating: 5,
            reviewCount: 85,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Moderne Anlage im historischen Industriequartier Carlswerk, zwei Hallen ('Aluhalle' und 'Kupferzug') mit 11 Indoor-Courts (9 Doppel, 2 Single) plus 2 Outdoor-Courts mit Sonnenterrasse, offiziell von der Betreiber-Website bestätigt. Enthält Kölns einzigen pinken Padel-Court. Drittanbieter-Verzeichnisse nennen teils abweichende Zahlen (8, 10 oder 13 Courts je nach Aktualität); offizielle Website als verlässlichste Quelle herangezogen. Bar mit Espresso und Getränken, Lounge-Bereiche, Kooperation mit Urban Sports Club/Hansefit/Wellpass.",
        sources: [
          {
            name: "official_website",
            url: "https://thecubepadel.de/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "playtomic",
            url: "https://playtomic.com/de/clubs/the-cube-padel",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://padelcompass.de/plaetze/nordrhein-westfalen/koeln/the-cube-padel-carlswerk-koeln",
            checkedAt: "2026-09-06",
            confidence: "low",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Outdoor-Padel", "Große Anlage", "Events", "Gastro"],
          shortDescription:
            "Kölns modernste Padel-Anlage im Industriequartier Carlswerk mit 13 Courts, darunter dem einzigen pinken Court der Stadt.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-koeln-padelbox-weiden",
        name: "padelBOX Köln-Weiden",
        slug: "padelbox-koeln-weiden",
        status: "approved",
        address: {
          street: "Kronstädter Str. 100",
          postalCode: "50858",
          city: "Köln",
          district: "Lindenthal (Weiden)",
          region: "Nordrhein-Westfalen",
          countryCode: "DE",
        },
        geo: {
          latitude: 50.9284254,
          longitude: 6.8409741,
        },
        website: "https://padelbox.de/koeln-weiden/",
        bookingUrl: "https://padelbox.de/koeln-weiden/",
        telephone: "+49 2234 9278866",
        openingHours: [
          {
            label: "Täglich",
            opens: "08:00",
            closes: "24:00",
            notes: null,
          },
        ],
        courts: {
          total: 8,
          indoor: 8,
          outdoor: 0,
          coveredOutdoor: 0,
          singleCourts: null,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "unknown",
          racketRentalPrice: null,
          gastro: "unknown",
          coaching: "yes",
          beginnerCourses: "unknown",
          tournaments: "yes",
          showers: "unknown",
          parking: "yes",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 20,
          priceTo: 55,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "medium",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Preisspanne laut Drittanbietern ca. 40-55 € pro Court/Stunde je nach Slot; ältere Quelle nennt auch 20-30 € für bestimmte Zeiten. Zusätzlich 5 Tennisplätze am selben Standort mit Winter-/Jahresabo (659-1.129 €).",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.6,
            bestRating: 5,
            reviewCount: 297,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Teil der bundesweiten padelBOX-Kette (seit 2016, 'Das Original'), größte reine Indoor-Padel-Anlage Kölns mit 8 Courts plus 5 Tennisplätzen für Cross-Sport am selben Standort. Buchung erfolgt über eigenes padelBOX-Buchungssystem, nicht Playtomic. Reviewzahl schwankt je nach Quelle zwischen 233 und 297.",
        sources: [
          {
            name: "official_website",
            url: "https://padelbox.de/koeln-weiden/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://netz.app/padel-court/padelbox-weiden-koeln/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelcompass",
            url: "https://padelcompass.de/plaetze/nordrhein-westfalen/koeln/padelbox-koeln-weiden-koeln",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Große Anlage", "Tennis", "Training", "Turniere"],
          shortDescription:
            "Größte reine Indoor-Padel-Anlage Kölns mit 8 Courts und zusätzlichen Tennisplätzen in Weiden.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-koeln-padelbox-loevenich",
        name: "padelBOX Köln-Lövenich",
        slug: "padelbox-koeln-loevenich",
        status: "approved",
        address: {
          street: "Ottostraße 14",
          postalCode: "50859",
          city: "Köln",
          district: "Lindenthal (Lövenich)",
          region: "Nordrhein-Westfalen",
          countryCode: "DE",
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: "https://padelbox.de/koeln-loevenich/",
        bookingUrl: "https://padelbox.de/koeln-loevenich/",
        telephone: "+49 2234 4304601",
        openingHours: [
          {
            label: "Montag bis Freitag",
            opens: "08:00",
            closes: "23:00",
            notes: null,
          },
          {
            label: "Samstag und Sonntag",
            opens: "10:00",
            closes: "20:00",
            notes: null,
          },
        ],
        courts: {
          total: 4,
          indoor: 4,
          outdoor: 0,
          coveredOutdoor: 0,
          singleCourts: 1,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "unknown",
          racketRentalPrice: null,
          gastro: "unknown",
          coaching: "unknown",
          beginnerCourses: "yes",
          tournaments: "unknown",
          showers: "unknown",
          parking: "unknown",
          publicTransportNearby: "unknown",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 36,
          priceTo: 52,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "medium",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Preisspanne laut Drittanbieter ca. 36 € Off-Peak bis 52 € Peak pro Court/Stunde, vergleichbar mit anderen padelBOX-Standorten. Zusätzlich 4 Badmintonplätze am selben Standort.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.7,
            bestRating: 5,
            reviewCount: 124,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Drei Doppel-Courts plus ein Single-Court, offiziell von der padelBOX-Website bestätigt ('drei Padel Courts, einem Single Padel Court'). Zusätzlich vier Badmintonplätze am selben Standort. Zweiter Kölner padelBOX-Standort neben Weiden, laut unabhängigen Rankings (Padelfinder) sogar leicht besser bewertet als Weiden.",
        sources: [
          {
            name: "official_website",
            url: "https://padelbox.de/koeln-loevenich/",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://padelblend.de/courts/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelfinder",
            url: "https://padelfinder.de/padel-plaetze-rund-um-koeln-bonn/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Indoor-Padel", "Single-Padel", "Badminton", "Einsteiger"],
          shortDescription:
            "Kompakte padelBOX-Anlage in Lövenich mit vier Indoor-Courts, darunter einem Single-Court, plus Badminton.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
        id: "de-koeln-unisport",
        name: "UniSport Köln (Pádel Colonia)",
        slug: "unisport-koeln",
        status: "approved",
        address: {
          street: "Zülpicher Wall 1",
          postalCode: "50674",
          city: "Köln",
          district: "Neustadt-Süd",
          region: "Nordrhein-Westfalen",
          countryCode: "DE",
        },
        geo: {
          latitude: 50.9284292,
          longitude: 6.9336193,
        },
        website: "https://unisport.koeln/sportspiele/padel/index_ger.html",
        bookingUrl: "https://unisport.koeln/sports_games/padel/padel_courtreservation/index_eng.html",
        telephone: null,
        openingHours: [
          {
            label: "Montag bis Freitag",
            opens: "09:30",
            closes: "21:30",
            notes: "Flutlicht schaltet automatisch um 21:35 Uhr ab.",
          },
          {
            label: "Samstag",
            opens: "10:00",
            closes: "16:00",
            notes: null,
          },
          {
            label: "Sonntag",
            opens: null,
            closes: null,
            notes: "Sonntags spielfrei.",
          },
        ],
        courts: {
          total: 2,
          indoor: 0,
          outdoor: 2,
          coveredOutdoor: 0,
          singleCourts: null,
        },
        amenities: {
          floodlights: "yes",
          racketRental: "yes",
          racketRentalPrice: 2,
          gastro: "unknown",
          coaching: "yes",
          beginnerCourses: "yes",
          tournaments: "yes",
          showers: "unknown",
          parking: "unknown",
          publicTransportNearby: "yes",
        },
        pricing: {
          currency: "EUR",
          priceFrom: 8,
          priceTo: 30,
          priceModel: "per_court_per_60_minutes",
          priceConfidence: "high",
          lastVerifiedAt: "2026-09-06",
          notes:
            "Gestaffelte Preise nach Status: Studierende 8-18 €, Uni-Beschäftigte 12-24 €, externe Gäste 16-30 € pro Stunde, je nach Uhrzeit (günstiger vormittags bis 17:30 Uhr). Schläger-Verleih 2 € pro Schläger, Bälle nur käuflich für 6 € pro Dose.",
        },
        ratings: [
          {
            source: "google_business_profile",
            ratingValue: 4.7,
            bestRating: 5,
            reviewCount: 237,
            retrievedAt: "2026-09-06",
            displayAllowed: false,
          },
        ],
        notes:
          "Historisch die erste Padel-Anlage Nordrhein-Westfalens, eröffnet im Mai 2013 als Kooperation zwischen Universitätssport Köln und padel concept GmbH ('padel colonia'). Zwei Outdoor-Courts mit Kunstrasen und Flutlicht auf dem Campus, öffentlich zugänglich auch für Nicht-Studierende (zu höheren Gästepreisen). Buchung ausschließlich direkt über UniSport, nicht über Playtomic.",
        sources: [
          {
            name: "official_website",
            url: "https://unisport.koeln/sportspiele/padel/index_ger.html",
            checkedAt: "2026-09-06",
            confidence: "high",
          },
          {
            name: "other",
            url: "https://www.padel-test.de/padel-standorte/padel-koeln-unisport/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
          {
            name: "padelfinder",
            url: "https://padelfinder.de/en/paddle-court/unisport-koeln/",
            checkedAt: "2026-09-06",
            confidence: "medium",
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: ["Outdoor-Padel", "Historisch", "Günstige Preise", "Studierende", "Zentrale Lage"],
          shortDescription:
            "NRWs erste Padel-Anlage von 2013 auf dem Uni-Campus, zwei Outdoor-Courts mit gestaffelten Preisen für alle offen.",
          lastHumanReviewAt: "2026-09-06",
        },
      },
      {
    id: 'de-frankfurt',
    name: 'Frankfurt am Main',
    slug: 'frankfurt',
    countryCode: 'DE',
    region: 'Hessen',
    timezone: 'Europe/Berlin',
    seo: {
      primaryKeyword: 'Padel spielen Frankfurt',
      pageTitle: 'Padel spielen in Frankfurt am Main: Alle Courts & Anlagen 2026',
      metaDescription:
        'Finde die besten Padel-Courts in Frankfurt: Sportpark, Makkabi Campus, Gibson Beach Club und mehr. Preise, Indoor/Outdoor-Infos und direkte Buchungslinks.',
    },
    venues: [
      {
        id: 'de-frankfurt-sf-sportpark',
        name: 'SF Sportpark Frankfurt',
        slug: 'sf-sportpark-frankfurt',
        status: 'approved',
        address: {
          street: 'August-Schanz-Str. 24-26',
          postalCode: '60433',
          city: 'Frankfurt am Main',
          district: 'Eschersheim',
          region: 'Hessen',
          countryCode: 'DE',
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: 'https://www.sportpark-frankfurt.de/',
        bookingUrl: 'https://playtomic.com/de/clubs/sportpark-frankfurt',
        telephone: null,
        openingHours: [
          {
            label: 'Montag bis Freitag',
            opens: '11:00',
            closes: '23:30',
            notes: 'Am Wochenende abweichende Zeiten möglich. Buchung über Playtomic prüfen.',
          },
        ],
        courts: {
          total: 9,
          indoor: 0,
          outdoor: 9,
          coveredOutdoor: 0,
          singleCourts: 3,
        },
        amenities: {
          floodlights: 'yes',
          racketRental: 'yes',
          racketRentalPrice: null,
          gastro: 'unknown',
          coaching: 'yes',
          beginnerCourses: 'yes',
          tournaments: 'yes',
          showers: 'unknown',
          parking: 'unknown',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 20,
          priceTo: 28,
          priceModel: 'per_court_per_60_minutes',
          priceConfidence: 'high',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Nebenzeit 20 € pro Stunde. Hauptzeit 28 € pro Stunde inklusive Flutlicht.',
        },
        ratings: [],
        notes:
          'Größte Padel-Anlage in Frankfurt mit einer großen Padel-Schule und drei speziellen Single-Courts.',
        sources: [
          {
            name: 'official_website',
            url: 'https://www.sportpark-frankfurt.de/padel-tennis-platz-buchen/playtomic',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'playtomic',
            url: 'https://playtomic.com/de/clubs/sportpark-frankfurt',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Outdoor-Padel',
            'Single-Padel',
            'Kurse',
          ],
          shortDescription:
            'Die größte Padel-Anlage Frankfurts bietet neun reine Outdoor-Courts, darunter drei Single-Plätze, im Stadtteil Eschersheim.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-frankfurt-makkabi-campus',
        name: 'Makkabi Campus by TuS Makkabi Frankfurt',
        slug: 'makkabi-campus-frankfurt',
        status: 'approved',
        address: {
          street: 'Wilhelm-Epstein-Straße 95b',
          postalCode: '60431',
          city: 'Frankfurt am Main',
          district: 'Bockenheim',
          region: 'Hessen',
          countryCode: 'DE',
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: 'https://makkabi-frankfurt.de/abteilung/padel/',
        bookingUrl: 'https://playtomic.com/de/clubs/makkabi-campus',
        telephone: null,
        openingHours: [
          {
            label: 'Täglich',
            opens: '08:00',
            closes: '22:00',
            notes: 'Buchung direkt über Playtomic. Keine vorherige Kontaktaufnahme mit dem Verein nötig.',
          },
        ],
        courts: {
          total: 3,
          indoor: 0,
          outdoor: 3,
          coveredOutdoor: 0,
          singleCourts: 0,
        },
        amenities: {
          floodlights: 'yes',
          racketRental: 'yes',
          racketRentalPrice: 3,
          gastro: 'unknown',
          coaching: 'yes',
          beginnerCourses: 'yes',
          tournaments: 'unknown',
          showers: 'unknown',
          parking: 'unknown',
          publicTransportNearby: 'unknown',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 20,
          priceTo: 36,
          priceModel: 'per_court_per_60_minutes',
          priceConfidence: 'high',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Preise werden pro Person abgerechnet. Mitglieder zahlen 5 € p.P. (20 € pro Court), Nichtmitglieder 9 € p.P. (36 € pro Court). Bälle kosten 6 € (Kauf).',
        },
        ratings: [],
        notes:
          'Zukünftig sind ab Frühjahr 2027 auch offizielle Trainings und Mannschaftsbetrieb geplant. Bislang kann Privattraining gebucht werden.',
        sources: [
          {
            name: 'official_website',
            url: 'https://makkabi-frankfurt.de/abteilung/padel/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'playtomic',
            url: 'https://playtomic.com/de/clubs/makkabi-campus',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Outdoor-Padel',
            'Vereinsumfeld',
            'Einsteiger',
          ],
          shortDescription:
            'Drei moderne Outdoor-Panoramic-Courts auf dem weitläufigen Vereinsgelände des TuS Makkabi, frei buchbar über Playtomic.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-frankfurt-gibson-beach-club',
        name: 'Gibson Beach Club',
        slug: 'gibson-beach-club',
        status: 'approved',
        address: {
          street: 'Mainzer Landstraße 23',
          postalCode: '60329',
          city: 'Frankfurt am Main',
          district: 'Bankenviertel',
          region: 'Hessen',
          countryCode: 'DE',
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: 'https://gibson-club.de/beach-club/',
        bookingUrl: 'https://playtomic.com/de/clubs/gibson-beach-club',
        telephone: null,
        openingHours: [
          {
            label: 'Täglich (Saison April - September)',
            opens: '07:00',
            closes: '22:00',
            notes: 'Padel-Courts sind täglich bespielbar (eigener Zugang), auch wenn der reguläre Beach Club geschlossen hat.',
          },
        ],
        courts: {
          total: 2,
          indoor: 0,
          outdoor: 2,
          coveredOutdoor: 0,
          singleCourts: 0,
        },
        amenities: {
          floodlights: 'unknown',
          racketRental: 'yes',
          racketRentalPrice: 5,
          gastro: 'yes',
          coaching: 'unknown',
          beginnerCourses: 'unknown',
          tournaments: 'unknown',
          showers: 'yes',
          parking: 'yes',
          publicTransportNearby: 'yes',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: 20,
          priceTo: null,
          priceModel: 'per_court_per_60_minutes',
          priceConfidence: 'medium',
          lastVerifiedAt: '2026-09-06',
          notes:
            'Platzmiete ab ca. 20 € pro Stunde. Schläger gibt es im Verleih-Automaten für 5 € pro Stunde. Bälle können für 8 € gekauft werden.',
        },
        ratings: [],
        notes:
          'Saisonale Anlage inmitten von Wolkenkratzern. Parken ist ca. 5 Minuten entfernt im Holiday Inn (Mainzer Landstraße 27) möglich.',
        sources: [
          {
            name: 'official_website',
            url: 'https://gibson-club.de/beach-club/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
          {
            name: 'padelcompass',
            url: 'https://padelcompass.de/plaetze/hessen/frankfurt-am-main/gibson-beach-club-frankfurt-am-main',
            checkedAt: '2026-09-06',
            confidence: 'medium',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: true,
          recommendedFor: [
            'Outdoor-Padel',
            'Afterwork',
            'Skyline-View',
          ],
          shortDescription:
            'Einzigartige Location: Padel-Courts auf Sand im Gibson Beach Club mit Drinks und direktem Blick auf die Frankfurter Skyline.',
          lastHumanReviewAt: '2026-09-06',
        },
      },
      {
        id: 'de-frankfurt-jpadel-skyline',
        name: 'JPadel Skyline Frankfurt',
        slug: 'jpadel-skyline-frankfurt',
        status: 'research',
        address: {
          street: 'Europa-Allee 6 (Skyline Plaza)',
          postalCode: '60327',
          city: 'Frankfurt am Main',
          district: 'Gallus / Europaviertel',
          region: 'Hessen',
          countryCode: 'DE',
        },
        geo: {
          latitude: null,
          longitude: null,
        },
        website: 'https://www.skylineplaza.de/refurbishment/aufregend-und-mit-aussicht/',
        bookingUrl: null,
        telephone: null,
        openingHours: [],
        courts: {
          total: 4,
          indoor: null,
          outdoor: null,
          coveredOutdoor: null,
          singleCourts: null,
        },
        amenities: {
          floodlights: 'unknown',
          racketRental: 'unknown',
          racketRentalPrice: null,
          gastro: 'yes',
          coaching: 'unknown',
          beginnerCourses: 'unknown',
          tournaments: 'unknown',
          showers: 'unknown',
          parking: 'yes',
          publicTransportNearby: 'yes',
        },
        pricing: {
          currency: 'EUR',
          priceFrom: null,
          priceTo: null,
          priceModel: 'unknown',
          priceConfidence: 'unknown',
          lastVerifiedAt: '2026-09-06',
          notes: null,
        },
        ratings: [],
        notes:
          'Das Projekt ist noch in Bau/Planung. Es handelt sich um ein Rooftop-Padel-Erlebnis im "Skyline Garden" auf dem Dach des Skyline Plaza Einkaufszentrums. Ursprünglich für Sommer 2026 angekündigt, aktuell laut Betreiberseite auf Frühjahr 2027 terminiert.',
        sources: [
          {
            name: 'other',
            url: 'https://www.skylineplaza.de/refurbishment/aufregend-und-mit-aussicht/',
            checkedAt: '2026-09-06',
            confidence: 'high',
          },
        ],
        editorial: {
          atlasScore: null,
          rankingEligible: false,
          recommendedFor: [],
          shortDescription:
            'Spektakuläres Rooftop-Padel-Projekt auf dem Dach des Skyline Plaza (geplante Eröffnung 2027).',
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
