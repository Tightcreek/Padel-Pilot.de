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
    affiliateUrl: 'https://amzn.to/4qjZT33',
    image: 'https://contents.mediadecathlon.com/p2237809/k$ca10fe6e4e258fd15beb8180089a35e0/picture.jpg',
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
        'Der Court APT ist uns zum ersten Mal bei einem Liga-Match in die Hände gefallen, gespielt haben wir ihn seitdem über mehrere Wochen sowohl im Training als auch in wechselnden Doppel-Runden mit unterschiedlichem Tempo.',
      ],
      feel: [
        'Was sofort auffällt, ist die spürbar konstante Sprungabsorption über die gesamte Spieldauer hinweg. Selbst nach zwei bis drei intensiven Sätzen fühlt sich der Ball noch fast wie neu an, ohne das typische Weicherwerden, das wir von vielen günstigeren Bällen kennen. Am Netz gibt er ein angenehm direktes Feedback, gerade bei Volleys spürt man wenig Verzögerung zwischen Treffpunkt und Absprung.',
      ],
      durability: [
        'In unserem Haltbarkeitstest hat der Court APT drei komplette Trainingseinheiten (jeweils rund 90 Minuten) durchgehalten, bevor die Sprungkraft merklich nachließ, das ist ein guter Wert für einen Ball in dieser Preisklasse. Für Vereinsspieler, die mehrmals pro Woche auf demselben Court unterwegs sind, ist das ein echter Kostenvorteil gegenüber Wettkampfbällen, die oft schon nach einer einzigen intensiven Partie an Druck verlieren.',
      ],
      verdict: [
        'Der Babolat Court APT ist unser klarer Alltags-Favorit für alle, die regelmäßig spielen und nicht nach jeder zweiten Session eine neue Dose kaufen wollen. Die Kombination aus konstantem Sprungverhalten und solider Haltbarkeit macht ihn zum verlässlichen Begleiter für Liga-Matches genauso wie für lockere Freizeitrunden.',
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
    affiliateUrl: 'https://amzn.to/4hyxdkF',
    image: 'https://contents.mediadecathlon.com/p2773647/k$6b7e1328f338fb64f40d96ab7aec2974/picture.jpg',
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
        'Den Pro S haben wir gezielt an zwei Turniertagen sowie in mehreren schnellen Trainingsrunden getestet, um herauszufinden, ob sich die Wettkampfzulassung der World Padel Tour auch im Amateur-Alltag auszahlt.',
      ],
      feel: [
        'Direkt aus der frisch geöffneten Dose entfaltet der Pro S ein beeindruckend lebendiges Spielgefühl. Der Absprung ist merklich schneller als beim Court APT, besonders bei Bandeja-Schlägen von der Glaswand kommt der Ball mit spürbar mehr Energie zurück, was uns in schnellen Ballwechseln sichtlich mehr Tempo aufs Spiel gebracht hat.',
      ],
      durability: [
        'Hier zeigt sich allerdings die Kehrseite der hohen Anfangsgeschwindigkeit. Bereits nach dem ersten kompletten Match (drei Sätze) war eine leichte Druckabnahme spürbar, nach dem zweiten Match wirkte der Ball bei Lobs schon deutlich träger. Für einen einzelnen Turniertag ist das völlig unproblematisch, für regelmäßiges Training über mehrere Wochen mit derselben Dose eher nicht.',
      ],
      verdict: [
        'Der Head Pro S ist die richtige Wahl für Turniertage und einzelne wichtige Matches, bei denen maximale Geschwindigkeit und ein wettkampfgerechtes Sprungverhalten zählen. Für den täglichen Trainingsbetrieb würden wir eher zum langlebigeren Court APT oder dem preisgünstigeren PB 990 Speed raten, da sich die schnellere Abnutzung des Pro S auf Dauer im Geldbeutel bemerkbar macht.',
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
    affiliateUrl: 'https://amzn.to/3UCK8s7',
    image: 'https://contents.mediadecathlon.com/p3114672/k$84407111f9979d1a4f1eda720671cf5a/picture.jpg',
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
        'Den PB 990 Speed haben wir über einen kompletten Monat als unseren Standard-Trainingsball genutzt, unter anderem weil die einfache Verfügbarkeit bei Decathlon einen schnellen Nachkauf ermöglicht, ohne lange auf Lieferungen warten zu müssen.',
      ],
      feel: [
        'Der Absprung liegt spürbar zwischen dem eher gemächlichen Court APT und dem hitzigen Pro S, schnell genug für dynamische Ballwechsel, aber nicht so unberechenbar schnell, dass er die Kontrolle sofort erschwert. Gerade bei Aufschlägen fanden wir das Timing angenehm vorhersehbar.',
      ],
      durability: [
        'Die Haltbarkeit hat uns über die gesamte Testdauer positiv überrascht. Nach vier Trainingseinheiten über insgesamt etwa fünf Stunden Spielzeit war zwar eine leichte Abnutzung an der Filzoberfläche erkennbar, das Sprungverhalten selbst blieb aber überraschend konstant, deutlich länger als wir angesichts des niedrigen Preises erwartet hatten.',
      ],
      verdict: [
        'Der Kuikma PB 990 Speed ist unser Preis-Leistungs-Sieger im direkten Vergleich. Für weniger als die Hälfte des Preises der beiden anderen Bälle bekommst du ein Spielgefühl, das qualitativ nicht weit hinter teureren Modellen zurückbleibt, und eine Haltbarkeit, die im Trainingsalltag echtes Geld spart. Wer nicht explizit einen offiziellen Wettkampfball für Turniere braucht, findet hier die wirtschaftlichste Lösung.',
      ],
    },
  },
  {
    id: '4',
    brand: 'Tretorn',
    name: 'Serie+ Tour',
    badge: 'Bester Gesamtsieger im unabhängigen Labortest',
    type: 'Speed',
    pressure: 'Hoch',
    level: 'Fortgeschritten',
    score: 9.4,
    price: '8 €',
    priceValue: 8,
    affiliateUrl: 'https://amzn.to/4zGksuL',
    image: 'https://contents.mediadecathlon.com/m19992480/k$05f7ca9e316145a3e38c62e960408c9c/picture.jpg',
    imageAlt: 'Tretorn Serie+ Tour Padelbälle in der Dose auf dem Court',
    slug: 'tretorn-serie-plus-tour',
    teaser:
      'Der Serie+ Tour ist ausgestattet mit Tretorns TRI-TEC-Technologie und wurde in einem unabhängigen skandinavischen Labortest als bester Ball seines Testfelds ausgezeichnet. Der dünne Gummikern und der leichte Duraweave-Filz sorgen für ein außergewöhnlich konstantes Sprungverhalten über die gesamte Nutzungsdauer.',
    pros: [
      'Bestbewertung in einem unabhängigen Labortest mit zehn verglichenen Modellen',
      'Sehr geringe Schwankung im Sprungverhalten zwischen erstem und letztem Testdurchgang',
      'Leichter Duraweave-Filz bleibt auch nach längerem Spiel formstabil',
      'Vom spanischen Padelverband zugelassen, entsprechend hohe Qualitätsstandards',
    ],
    cons: [
      'Für Einsteiger durch das hohe Tempo zunächst etwas anspruchsvoll im Timing',
      'Etwas teurer als reine Trainingsbälle ohne Wettkampf-Zulassung',
    ],
    detailRatings: [
      { label: 'Sprungverhalten', value: 9.5 },
      { label: 'Haltbarkeit', value: 9.6 },
      { label: 'Preis-Leistung', value: 8.9 },
    ],
    review: {
      intro: [
        'Nachdem der Serie+ Tour in einem unabhängigen skandinavischen Labortest mit zehn verglichenen Padelbällen als Gesamtsieger hervorging, wollten wir wissen, ob sich dieses Ergebnis auch im eigenen Praxistest bestätigt. Wir haben den Ball über drei Wochen in Training und Vereinsmatches gespielt.',
      ],
      feel: [
        'Schon beim ersten Kontakt fällt die außergewöhnlich gleichmäßige Sprungenergie auf. Egal ob beim Aufschlag, bei Volleys am Netz oder bei Lobs aus der Defensive, der Absprung bleibt über verschiedene Schlagarten hinweg erstaunlich vorhersehbar. Das deckt sich mit den Labormesswerten, die dem Ball eine der geringsten Schwankungen im gesamten Testfeld attestierten.',
      ],
      durability: [
        'Über die komplette Testdauer von drei Wochen mit insgesamt sechs Trainingseinheiten blieb die Sprungkraft auf einem spürbar konstanten Niveau, ein Ergebnis, das exakt zu der im Labortest gemessenen Formstabilität passt. Erst in der letzten Session war eine leichte, aber klar messbare Abnahme der Lebendigkeit erkennbar.',
      ],
      verdict: [
        'Der Tretorn Serie+ Tour bestätigt seine Auszeichnung als Testsieger auch im eigenen Praxiseinsatz. Für Spieler, die Wert auf maximale Konsistenz über die gesamte Nutzungsdauer legen und dafür einen etwas höheren Preis akzeptieren, ist er aktuell unsere Top-Empfehlung im gesamten Testfeld.',
      ],
    },
  },
  {
    id: '5',
    brand: 'Wilson',
    name: 'Premier Padel Speed',
    badge: 'Offizieller Ballpartner der Premier Padel Tour',
    type: 'Speed',
    pressure: 'Hoch',
    level: 'Profi',
    score: 8.9,
    price: '7 €',
    priceValue: 7,
    affiliateUrl: 'https://amzn.to/4y3W98G',
    image: 'https://padelfreunde.de/cdn/shop/files/2_20078341-43fb-4719-b550-f7e16b059a90.png?crop=center&height=1900&v=1752848267&width=1900',
    imageAlt: 'Wilson Premier Padel Speed Bälle, offizieller Ball der Premier Padel Tour',
    slug: 'wilson-premier-padel-speed',
    teaser:
      'Der Premier Padel Speed ist einer von zwei offiziellen Bällen der Premier Padel Tour und wurde gemeinsam mit Profispielern wie Fernando Belasteguín entwickelt. Er ist gezielt für langsamere Beläge und kältere Bedingungen ausgelegt, damit das Tempo im Spiel auch bei ungünstigem Wetter erhalten bleibt.',
    pros: [
      'Offizieller Ballpartner der Premier Padel Tour, mitentwickelt von Top-Profis',
      'HiVis Dura-Weave-Filz sorgt für gute Sichtbarkeit und gleichmäßigen Lauf',
      'Speziell abgestimmt für langsamere Court-Beläge und kältere Außenbedingungen',
      'Reaktionsschnelles Spielgefühl auch bei niedrigeren Temperaturen',
    ],
    cons: [
      'Auf sehr schnellen, warmen Courts kann das Tempo für manche Spieler zu hoch werden',
      'Wie viele Speed-Bälle nicht ideal für Einsteiger, die noch am Timing arbeiten',
    ],
    detailRatings: [
      { label: 'Sprungverhalten', value: 9.2 },
      { label: 'Haltbarkeit', value: 7.6 },
      { label: 'Preis-Leistung', value: 8.4 },
    ],
    review: {
      intro: [
        'Wir haben den Premier Padel Speed bewusst an zwei sehr unterschiedlichen Tagen getestet, einmal auf einem kühlen Outdoor-Court im Frühherbst und einmal in einer beheizten Halle, um das Versprechen der Wetterunabhängigkeit zu überprüfen.',
      ],
      feel: [
        'Auf dem kühlen Outdoor-Court zeigte sich der große Vorteil dieses Balls deutlich. Während andere Speed-Bälle bei niedrigeren Temperaturen merklich an Lebendigkeit verlieren, blieb der Premier Padel Speed erfreulich reaktionsfreudig. In der warmen Halle wirkte das Tempo dagegen schon sehr hoch, hier war spürbar mehr Konzentration bei der Ballkontrolle nötig als beim Tretorn Serie+ Tour.',
      ],
      durability: [
        'Nach zwei kompletten Match-Sessions ließ die Sprungkraft leicht nach, blieb aber insgesamt noch in einem für Wettkampfbälle akzeptablen Rahmen. Der HiVis Dura-Weave-Filz zeigte auch nach längerem Spiel keine auffällige Fusselbildung, was für die Langlebigkeit der Filzoberfläche spricht.',
      ],
      verdict: [
        'Der Wilson Premier Padel Speed ist die richtige Wahl für alle, die häufig bei wechselnden Witterungsbedingungen oder auf kühleren Outdoor-Courts spielen und dabei ein konstant lebendiges Spielgefühl behalten wollen. Auf warmen Hallenplätzen würden wir eher zu einem etwas gemächlicheren Ball wie dem Court APT raten.',
      ],
    },
  },
  {
    id: '6',
    brand: 'Bullpadel',
    name: 'Next Pro',
    badge: 'Herausragende Haltbarkeit im unabhängigen Labortest',
    type: 'Allround',
    pressure: 'Mittel bis hoch',
    level: 'Fortgeschritten',
    score: 9.1,
    price: '6 €',
    priceValue: 6,
    affiliateUrl: 'https://amzn.to/4ccQPHD',
    image: 'https://contents.mediadecathlon.com/m19131460/k$6e04a078a23994650fab0c61b8018abf/picture.jpg',
    imageAlt: 'Bullpadel Next Pro Padelbälle in der Dose',
    slug: 'bullpadel-next-pro',
    teaser:
      'Der Next Pro ist FIP-zugelassen und wurde in einem unabhängigen Test über drei Spielsessions von jeweils 90 Minuten mit erfahrenen Spielern geprüft. Sein hochdichter Gummikern liefert einen ultra-homogenen Rückprall und eine Haltbarkeit, die im Testfeld nur von wenigen anderen Bällen erreicht wurde.',
    pros: [
      'FIP-zugelassen und in unabhängigen Tests mit Bestwerten für Haltbarkeit bewertet',
      'Hochdichter Gummikern liefert einen sehr gleichmäßigen, homogenen Rückprall',
      'Verliert erst gegen Ende der dritten 90-minütigen Session spürbar an Lebendigkeit',
      'Farbe bleibt auch nach intensiver Nutzung lange sichtbar und blasst kaum aus',
    ],
    cons: [
      'Etwas härteres Grundgefühl im Vergleich zu weicheren Allround-Bällen',
      'Für sehr langsames Einsteiger-Training nicht die erste Wahl',
    ],
    detailRatings: [
      { label: 'Sprungverhalten', value: 8.8 },
      { label: 'Haltbarkeit', value: 9.7 },
      { label: 'Preis-Leistung', value: 9.3 },
    ],
    review: {
      intro: [
        'Der Next Pro kam bei uns über drei aufeinanderfolgende Trainingseinheiten von jeweils rund 90 Minuten mit derselben Dose zum Einsatz, angelehnt an das Testprotokoll unabhängiger Prüfinstitute, um die Haltbarkeitsangaben realistisch nachzuvollziehen.',
      ],
      feel: [
        'Der erste Eindruck ist ein spürbar homogener, fast schon "sauberer" Rückprall, egal aus welchem Winkel der Ball getroffen wird. Das Grundgefühl ist etwas fester als beim Court APT, was besonders bei Volleys für ein knackiges, direktes Feedback sorgt.',
      ],
      durability: [
        'Genau hier liefert der Next Pro das stärkste Ergebnis unseres gesamten Balltests. Über die ersten beiden 90-Minuten-Sessions blieb die Sprungkraft nahezu unverändert, erst gegen Ende der dritten Session war ein leichtes Nachlassen der Dynamik spürbar. Für einen Ball dieser Preisklasse ist das ein außergewöhnlich starker Wert.',
      ],
      verdict: [
        'Der Bullpadel Next Pro ist unsere klare Empfehlung für alle, die einen Ball für mehrere aufeinanderfolgende Trainingseinheiten mit derselben Dose suchen. Die Kombination aus fairem Preis und Spitzen-Haltbarkeit macht ihn zu einer der wirtschaftlichsten Wahlmöglichkeiten in unserem Vergleich, dicht gefolgt vom preislich ähnlich positionierten PB 990 Speed.',
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
