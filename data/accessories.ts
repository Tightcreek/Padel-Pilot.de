export type AccessoryCategory =
  | 'Tasche'
  | 'Griffband'
  | 'Vibrationsdämpfer'
  | 'Schutz'
  | 'Bekleidung'
  | 'Sonstiges';

export interface AccessoryDetailRating {
  label: string;
  value: number;
}

export interface Accessory {
  id: string;
  brand: string;
  name: string;
  badge: string;
  category: AccessoryCategory;
  keySpec: string;
  score: number;
  price: string;
  priceValue: number;
  affiliateUrl: string;
  image: string;
  imageAlt: string;
  slug: string;
  teaser: string;
  pros: string[];
  cons: string[];
  detailRatings: AccessoryDetailRating[];
  review: {
    intro: string[];
    feel: string[];
    durability: string[];
    verdict: string[];
  };
}

export const accessories: Accessory[] = [
  {
    id: '1',
    brand: 'Bullpadel',
    name: 'BPP24009 Padel-Tasche',
    badge: 'Beliebte Einsteiger-Tasche',
    category: 'Tasche',
    keySpec: 'Fasst bis zu 2 Schläger, gepolstertes Hauptfach, separates Schuhfach',
    score: 8.6,
    price: '35 €',
    priceValue: 35,
    affiliateUrl: 'https://amzn.to/PLACEHOLDER-ACCESSORY-1',
    image: 'https://PLACEHOLDER-EIGENES-FOTO/bullpadel-tasche.jpg',
    imageAlt: 'Bullpadel Padel-Tasche mit zwei Schlägerfächern auf dem Court',
    slug: 'bullpadel-bpp24009-tasche',
    teaser:
      'Die BPP24009 ist eine solide Einsteiger-Tasche, die Platz für zwei Schläger sowie ein separates Schuhfach bietet. Für Gelegenheitsspieler und Vereinseinsteiger eine unkomplizierte, günstige Wahl.',
    pros: [
      'Separates Fach für Schuhe hält den Rest der Tasche sauber',
      'Gepolstertes Hauptfach schützt den Schläger vor Stößen',
      'Fairer Preis für den gebotenen Funktionsumfang',
    ],
    cons: [
      'Kein isoliertes Thermofach für Hitzeschutz der Schläger im Sommer',
      'Weniger Zusatzfächer als teurere Premium-Taschen',
    ],
    detailRatings: [
      { label: 'Verarbeitung', value: 8.4 },
      { label: 'Stauraum', value: 8.2 },
      { label: 'Preis-Leistung', value: 9.1 },
    ],
    review: {
      intro: [
        'PLATZHALTER: Einleitung zum Testkontext, für wen diese Tasche gedacht ist.',
      ],
      feel: [
        'PLATZHALTER: Praxiseindruck zu Tragekomfort, Fächeraufteilung und Verarbeitung.',
      ],
      durability: [
        'PLATZHALTER: Beobachtungen zur Haltbarkeit von Reißverschlüssen und Material.',
      ],
      verdict: [
        'PLATZHALTER: Abschließende Kaufempfehlung und Zielgruppe.',
      ],
    },
  },
];

export function getAccessoryBySlug(slug: string): Accessory | undefined {
  return accessories.find((a) => a.slug === slug);
}

export function getAccessoryById(id: string): Accessory | undefined {
  return accessories.find((a) => a.id === id);
}

export function getAccessoriesByCategory(category: AccessoryCategory): Accessory[] {
  return accessories.filter((a) => a.category === category);
}
