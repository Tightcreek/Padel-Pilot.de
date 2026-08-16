export type BallLevel = 'Anfänger' | 'Fortgeschritten' | 'Profi';
export type BallType = 'Speed' | 'Kontrolle' | 'Training' | 'Allround';

export interface BallDetailRating {
  label: string;
  value: number;
}

export interface Ball {
  id: string;
  brand: string;
  name: string;
  badge: string;
  type: BallType;
  pressure: string;
  level: BallLevel;
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
  detailRatings: BallDetailRating[];
  review: {
    intro: string[];
    feel: string[];
    durability: string[];
    verdict: string[];
  };
}

export const balls: Ball[] = [
  {
    id: '1',
    brand: 'Head',
    name: 'Padel Pro S',
    badge: 'Beliebtester Allround-Ball',
    type: 'Allround',
    pressure: 'Mittel (drucklos nach Anspielzeit)',
    level: 'Fortgeschritten',
    score: 8.9,
    price: '9 €',
    priceValue: 9,
    affiliateUrl: 'https://amzn.to/PLACEHOLDER-BALL-1',
    image: 'https://PLACEHOLDER-EIGENES-FOTO/head-padel-pro-s.jpg',
    imageAlt: 'Head Padel Pro S Bälle in der Dose auf dem Court',
    slug: 'head-padel-pro-s',
    teaser:
      'Der Padel Pro S von Head ist der meistgespielte Allround-Ball auf deutschen Courts. Ausgewogenes Sprungverhalten und solide Haltbarkeit machen ihn zur sicheren Wahl für Training und Freizeitmatches gleichermaßen.',
    pros: [
      'Sehr ausgewogenes Sprungverhalten, passt zu fast jedem Spielstil',
      'Gute Haltbarkeit über mehrere Sessions bei normaler Belastung',
      'Breit verfügbar und günstig im Nachkauf',
    ],
    cons: [
      'Verliert bei intensiver Nutzung schneller an Druck als Premium-Bälle',
      'Kein spezielles Profil für sehr kalte oder sehr heiße Bedingungen',
    ],
    detailRatings: [
      { label: 'Sprungverhalten', value: 8.8 },
      { label: 'Haltbarkeit', value: 8.3 },
      { label: 'Preis-Leistung', value: 9.4 },
    ],
    review: {
      intro: [
        'PLATZHALTER: Einleitung zum Testkontext, wie und wo der Ball getestet wurde.',
      ],
      feel: [
        'PLATZHALTER: Praxiseindruck zum Spielgefühl, Sprunghöhe und Kontrolle.',
      ],
      durability: [
        'PLATZHALTER: Beobachtungen zur Haltbarkeit über mehrere Trainingseinheiten.',
      ],
      verdict: [
        'PLATZHALTER: Abschließende Kaufempfehlung und Zielgruppe.',
      ],
    },
  },
];

export function getBallBySlug(slug: string): Ball | undefined {
  return balls.find((b) => b.slug === slug);
}

export function getBallById(id: string): Ball | undefined {
  return balls.find((b) => b.id === id);
}
