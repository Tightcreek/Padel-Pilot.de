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
    brand: 'Babolat',
    name: 'Court APT',
    badge: 'Beste Bälle fürs freie Spiel',
    type: 'Allround',
    pressure: 'Mittel bis hoch',
    level: 'Fortgeschritten',
    score: 9.0,
    price: '9 €',
    priceValue: 9,
    affiliateUrl: 'https://amzn.to/PLACEHOLDER-BABOLAT-COURT-APT',
    image: 'https://PLACEHOLDER-EIGENES-FOTO/babolat-court-apt.jpg',
    imageAlt: 'Babolat Court APT Padelbälle in der Dose auf dem Court',
    slug: 'babolat-court-apt',
    teaser:
      'Der Court APT ist der offizielle Ball der APT Padel Tour und überzeugt vor allem durch seine Langlebigkeit. Selbst nach mehreren Partien behält er noch genug Sprungkraft, um flüssig weiterzuspielen. Ein verlässlicher Allrounder für Liga-Matches und Freizeitrunden mit Freunden.',
    pros: [
      'Offizieller Ball der APT Padel Tour, entsprechend hohe Qualitätsstandards',
      'Behält seine Sprungkraft auch nach mehrmaligem Spielen zuverlässig',
      'Angenehm schnelles Spielgefühl, das fortgeschrittene Spieler zu schätzen wissen',
      'Wird nicht so schnell weich wie viele andere schnelle Wettkampfbälle',
    ],
    cons: [
      'Für blutige Anfänger durch die höhere Geschwindigkeit eventuell etwas anspruchsvoll',
      'Kein spezieller Trainingsball für sehr langsames, kontrolliertes Einsteiger-Spiel',
    ],
    detailRatings: [
      { label: 'Sprungverhalten', value: 9.1 },
      { label: 'Haltbarkeit', value: 9.2 },
      { label: 'Preis-Leistung', value: 8.7 },
    ],
    review: {
      intro: [
        'Der Court APT ist ein schneller, langlebiger Druckball mit offizieller Zulassung und ungewöhnlich vollständigen offiziellen Spezifikationen. Er eignet sich besonders für alle, die einen lebendigen Club-Ball suchen und keinen trägen Trainingsball, der das Spieltempo künstlich bremst.',
      ],
      feel: [
        'Im direkten Vergleich zu reinen Trainingsbällen spielt sich der Court APT spürbar dynamischer. Wer schnelle Ballwechsel und ein lebendiges Spielgefühl bevorzugt, wird hier fündig, gerade im normalen Club-Alltag zahlt sich dieses Tempo aus.',
      ],
      durability: [
        'Für Vereinsspieler auf allen Niveaus, vom Einsteiger bis zum fortgeschrittenen Spieler, eignet sich der Ball gut, solange der Fokus auf Club-Spiel, schnellem Spielgefühl und Haltbarkeit liegt statt auf einem gedrosselten Trainingstempo.',
      ],
      verdict: [
        'Wie gut sich ein Ball wirklich schlägt, hängt immer von Tempo, Absprungverhalten und davon ab, wie stabil sich das Spielgefühl über die gewohnten Sessions hält. Auf kalten, feuchten, sandigen oder ungewöhnlich schnellen Plätzen lohnt sich ein Vergleich mit den anderen hier gelisteten Alternativen, bevor man sich festlegt.',
      ],
    },
  },
  {
    id: '2',
    brand: 'Head',
    name: 'Pro S',
    badge: 'Offizieller Ball der World Padel Tour',
    type: 'Speed',
    pressure: 'Hoch',
    level: 'Profi',
    score: 8.7,
    price: '10 €',
    priceValue: 10,
    affiliateUrl: 'https://amzn.to/PLACEHOLDER-HEAD-PRO-S',
    image: 'https://PLACEHOLDER-EIGENES-FOTO/head-pro-s.jpg',
    imageAlt: 'Head Pro S Padelbälle, offizieller Ball der World Padel Tour',
    slug: 'head-pro-s',
    teaser:
      'Der Pro S ist der offizielle Ball der World Padel Tour und liefert maximale Geschwindigkeit und Sprungkraft. Für ein bis zwei intensive Wettkämpfe spielt er sich herausragend, danach wird er spürbar weicher. Die perfekte Wahl für Turniertage, weniger geeignet als Dauerbrenner im Trainingsalltag.',
    pros: [
      'Offizieller Ball der World Padel Tour, höchster Wettkampfstandard',
      'Sehr hohe Geschwindigkeit und Sprungkraft für dynamische, lange Ballwechsel',
      'Kommt kraftvoll von der Glaswand ab, ideal für taktisches Bandenspiel',
      'Angenehm hartes Schlaggefühl bei Smashes',
    ],
    cons: [
      'Verliert bereits nach ein bis zwei Wettkämpfen spürbar an Druck und Sprungkraft',
      'Für den täglichen Trainingsbetrieb wirtschaftlich nicht ideal, da der Nachkauf häufiger nötig wird',
      'Für Anfänger durch die hohe Geschwindigkeit eher ungeeignet',
    ],
    detailRatings: [
      { label: 'Sprungverhalten', value: 9.4 },
      { label: 'Haltbarkeit', value: 6.8 },
      { label: 'Preis-Leistung', value: 7.9 },
    ],
    review: {
      intro: [
        'PLATZHALTER: Einleitung zum eigenen Testkontext, wie und wo der Ball bei uns getestet wurde.',
      ],
      feel: [
        'PLATZHALTER: Eigener Praxiseindruck zum Spielgefühl, Sprunghöhe und Kontrolle beim Vibora- und Smash-Spiel.',
      ],
      durability: [
        'PLATZHALTER: Eigene Beobachtungen zur Haltbarkeit über mehrere Trainingseinheiten und Matches.',
      ],
      verdict: [
        'PLATZHALTER: Abschließende eigene Kaufempfehlung und Zielgruppe.',
      ],
    },
  },
  {
    id: '3',
    brand: 'Kuikma',
    name: 'PB 990 Speed',
    badge: 'Bestes Preis-Leistungs-Verhältnis für schnelles Spiel',
    type: 'Speed',
    pressure: 'Mittel',
    level: 'Fortgeschritten',
    score: 8.8,
    price: '6 €',
    priceValue: 6,
    affiliateUrl: 'https://amzn.to/PLACEHOLDER-KUIKMA-PB990',
    image: 'https://PLACEHOLDER-EIGENES-FOTO/kuikma-pb990-speed.jpg',
    imageAlt: 'Kuikma PB 990 Speed Padelbälle von Decathlon',
    slug: 'kuikma-pb-990-speed',
    teaser:
      'Der PB 990 Speed von Decathlons Eigenmarke Kuikma ist FIP-zugelassen und explizit auf Geschwindigkeit ausgelegt. Er bietet einen robusten, schnellen Ball zu einem sehr fairen Preis und eignet sich vor allem für fortgeschrittene Spieler, die Tempo und Verfügbarkeit bei Decathlon schätzen.',
    pros: [
      'FIP-zugelassen mit klarer Speed-first-Ausrichtung',
      'Sehr hohe Haltbarkeit, hält deutlich länger als viele teurere Konkurrenten',
      'Günstiger Anschaffungspreis bei einfacher Verfügbarkeit über Decathlon',
      'Zügiger, direkter Absprung für dynamisches Spiel',
    ],
    cons: [
      'Für reine Einsteiger durch das hohe Tempo eventuell zu anspruchsvoll',
      'Kein Trainingsball für sehr langsames, kontrolliertes Anfänger-Spiel',
    ],
    detailRatings: [
      { label: 'Sprungverhalten', value: 8.9 },
      { label: 'Haltbarkeit', value: 9.5 },
      { label: 'Preis-Leistung', value: 9.8 },
    ],
    review: {
      intro: [
        'Der PB 990 Speed ist ein starker Preis-Leistungs-Ball von Decathlon/Kuikma mit expliziter FIP-Zulassung und einer klaren Speed-first-Ausrichtung. Er richtet sich an alle, die einen robusten, schnellen Ball suchen, ohne dafür einen Premium-Preis zu zahlen.',
      ],
      feel: [
        'Wer einen zügigen, direkten Absprung schätzt, kommt hier auf seine Kosten, das Tempo steht klar im Vordergrund, ohne dass dabei die Robustheit leidet.',
      ],
      durability: [
        'Besonders geeignet für Spieler mit Fokus auf Preis-Leistung, Geschwindigkeit und einfache Verfügbarkeit bei Decathlon. Empfohlenes Niveau: fortgeschritten bis Profi, da das schnelle Spielgefühl entsprechende Erfahrung voraussetzt.',
      ],
      verdict: [
        'Wie gut sich ein Ball wirklich schlägt, hängt immer von Tempo, Absprungverhalten und davon ab, wie stabil sich das Spielgefühl über die gewohnten Sessions hält. Auf kalten, feuchten, sandigen oder ungewöhnlich schnellen Plätzen lohnt sich ein Vergleich mit den anderen hier gelisteten Alternativen, bevor man sich festlegt.',
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
