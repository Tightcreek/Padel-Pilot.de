export type RacketLevel = 'Anfänger' | 'Fortgeschritten' | 'Profi';
export type RacketShape = 'Tropfenform' | 'Rund' | 'Diamant';

export interface DetailRating {
  label: string;
  value: number;
}

export interface Racket {
  id: string;
  brand: string;
  name: string;
  badge: string;
  shape: RacketShape;
  weight: string;
  level: RacketLevel;
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
  detailRatings: DetailRating[];
  review: {
    intro: string[];
    feel: string[];
    powerVsControl: string[];
    verdict: string[];
  };
}

export const rackets: Racket[] = [
{
    id: '1',
    brand: 'Babolat',
    name: 'Technical Viper',
    badge: 'Preis-Leistungs-Sieger',
    shape: 'Diamant',
    weight: '370g',
    level: 'Fortgeschritten',
    score: 9.2,
    price: '139 €',
    priceValue: 139,
    affiliateUrl: 'https://amzn.to/4xnovdA',
    image:
      'https://contents.mediadecathlon.com/p3031598/k$c46be511bbb20e044ad1db1fb7eee86b/picture.jpg',
    imageAlt: 'Babolat Technical Viper Padel-Schläger im Praxistest auf dem Court',
    slug: 'babolat-technical-viper-2026',
    teaser:
      'Die Babolat Technical Viper steht für kompromisslose Schlagkraft bei Angriffsspielern. Dank harter Carbon-Oberfläche und kopflastiger Diamantform fliegen Smashes mühelos aus dem Platz. Im aktuellen Testbericht erfährst du, für wen sich die Investition wirklich lohnt.',
    pros: [
      'Enorme Durchschlagskraft bei Smashes und Angriffsbällen am Netz',
      'Starker, gut dosierbarer Spin durch die spürbar raue 3D-Spin-Oberfläche',
      'Sehr direkte Ballrückmeldung für Spieler mit sauberer Technik',
      'Exzellenter Straßenpreis im Vergleich zur ursprünglichen UVP des Herstellers',
    ],
    cons: [
      'Kopflastige Balance fordert am Netz schnelle Reaktionen und ein starkes Handgelenk',
      'Der hoch angesetzte Sweet Spot verzeiht ungenaue Treffer nur bedingt',
    ],
    detailRatings: [
      { label: 'Power', value: 9.6 },
      { label: 'Kontrolle', value: 7.9 },
      { label: 'Handling', value: 7.8 },
    ],
    review: {
      intro: [
        'Unter Offensivspielern genießt die Babolat Technical Viper seit Jahren einen extrem starken Ruf. Die ausgeprägte Diamantform mit ihrer klaren Kopflastigkeit richtet sich gezielt an Spieler, die den Ballwechsel am Netz schnell beenden wollen. Im Gegensatz zu universellen Tropfen-Schlägern liegt der Fokus bei diesem Modell ganz eindeutig auf maximaler Beschleunigung.',
        'Wir haben das Racket intensiv über mehrere Wochen auf unterschiedlichen Court-Belägen getestet. Dabei stand vor allem die Frage im Mittelpunkt, wie gut sich die enorme Power in der alltäglichen Match-Defensive an der Grundlinie noch kontrollieren lässt.',
      ],
      feel: [
        'Schon bei den ersten Ballwechseln spürt man das straffe Feedback der Schlagfläche. Das verbaute 16K-Carbon in Kombination mit dem mehrschichtigen X-EVA-Kern gibt den Ball ohne spürbare Verzögerung weiter. Schnelle Volleys kommen dadurch extrem präzise und mit hoher Grundgeschwindigkeit von der Hand.',
        'Am Netz macht sich das Gewicht im Schlägerkopf allerdings schnell bemerkbar. Wer in hektischen Abwehrsituationen nicht rechtzeitig hinter den Ball kommt, muss deutlich mehr Kraft aus dem Unterarm aufwenden. Dafür greift die raue Oberflächenstruktur hervorragend beim Kick-Smash oder bei gezielten Bandeja-Schlägen.',
      ],
      powerVsControl: [
        'Power: In dieser Disziplin gehört die Technical Viper zur absoluten Spitzenklasse. Wenn der Ball im oberen Drittel der Schlagfläche zentriert getroffen wird, entwickelt der Schläger eine enorme Hebelwirkung. Smashes aus dem Rückfeld lassen sich extrem druckvoll umsetzen.',
        'Kontrolle: In der Defensive erfordert der Schläger eine saubere Beinarbeit und ein exaktes Timing. Der eher kleine Sweet Spot verzeiht ungenaue Treffer nicht ohne Weiteres. Wer unkonzentriert trifft, verliert schnell an Länge bei Lobs oder schlägt den Ball zu kurz ins gegnerische Feld.',
      ],
      verdict: [
        'Die Babolat Technical Viper ist eine kompromisslose Offensiv-Waffe für ambitionierte Spieler mit ausgereifter Technik. Wer primär über Druck am Netz punktet und die nötige Armkraft mitbringt, findet kaum ein besseres Werkzeug für maximale Schlagkraft.',
        'Einsteiger und defensive Taktiker sollten wegen des kleinen Sweet Spots und der spürbaren Kopflastigkeit eher zu wendigeren Rund- oder Tropfenformen greifen.',
      ],
    },
  },
  {
    id: '2',
    brand: 'Head',
    name: 'Gravity Pro',
    badge: 'Bester Kontrollschläger',
    shape: 'Rund',
    weight: '365g',
    level: 'Fortgeschritten',
    score: 9.3,
    price: '159 €',
    priceValue: 159,
    affiliateUrl: 'https://amzn.to/4gi7Nph',
    image:
      'https://contents.mediadecathlon.com/m33989587/k$57f54a2ea6bed5bc772930a36ab981fc/picture.jpg',
    imageAlt: 'Head Gravity Pro Padel-Schläger auf dem Court im Praxistest',
    slug: 'head-gravity-pro-2026',
    teaser:
      'Der Head Gravity Pro gehört zu den beliebtesten Kontrollschlägern auf dem Markt. Die runde Kopfform mit vergrößertem Sweet Spot bietet maximale Präzision und außergewöhnliche Manövrierfähigkeit. Erfahre im Testbericht, wie sich das Racket in der Match-Praxis schlägt.',
    pros: [
      'Herausragende Ballkontrolle und extrem großer, verzeihender Sweet Spot durch die runde Form',
      'Überraschend leichtes Handling trotz solider Bauweise für ermüdungsfreies Spielen über mehrere Sätze',
      'Effektive Vibrationsdämpfung an der Griffkappe schont Unterarm und Handgelenk spürbar',
      'Sehr vorhersehbares Ballgefühl für chirurgisch präzise Lobs und Chiquitas',
    ],
    cons: [
      'Für kompromisslose Offensivspieler fehlt es bei Smashes spürbar an natürlichem Hebel',
      'Die steifere Carbon-Schlagfläche erfordert eine saubere Trefftechnik in der Defensive',
    ],
    detailRatings: [
      { label: 'Power', value: 7.8 },
      { label: 'Kontrolle', value: 9.7 },
      { label: 'Handling', value: 9.2 },
    ],
    review: {
      intro: [
        'Der Head Gravity Pro richtet sich speziell an fortgeschrittene Spieler und Taktiker, die das Spiel über Ballkontrolle und präzise Platzierung diktieren. Die runde Kopfform gepaart mit einer ausgewogenen Balance stellt das exakte Gegenteil zu reinen Power-Waffen dar.',
        'In unserem mehrwöchigen Praxistest haben wir das Racket in intensiven Match-Situationen gefordert. Dabei lag das Hauptaugenmerk auf der Manövrierfähigkeit am Netz, der Präzision bei Grundlinien-Lobs und dem Verhalten bei schnellen Ballwechseln.',
      ],
      feel: [
        'Schon bei den ersten Ballkontakten überzeugt das direkte und dennoch angenehm gedämpfte Spielgefühl. Die moderne Auxetic-Technologie im Rahmen sorgt für ein hervorragendes Feedback im Treffpunkt, sodass man die Länge der Bälle exakt dosieren kann.',
        'Dank der durchdachten Gewichtsverteilung lässt sich der Schläger bei schnellen Volley-Duellen am Netz blitzschnell ausrichten. Die weiche Kappe am Griffende nimmt harte Stoßwellen ab, was den Spielkomfort bei langen Sätzen spürbar erhöht.',
      ],
      powerVsControl: [
        'Power: Der Gravity Pro verhält sich hier gewollt zurückhaltend. Wer aus der Vorhand oder beim Smash hohes Tempo erzeugen möchte, muss mit viel Körpereinsatz und sauberer Technik nachhelfen.',
        'Kontrolle: In dieser Kategorie setzt das Modell Maßstäbe. Chiquitas, Lobs und gezielte Bälle an die Glaswand gelingen mit chirurgischer Präzision. Der großzügige Sweet Spot fängt auch dezentral getroffene Bälle zuverlässig ab.',
      ],
      verdict: [
        'Der Head Gravity Pro ist eine absolute Empfehlung für kontrollorientierte Spieler, die ihre Punkte durch Taktik, Ausdauer und exakte Platzierung vorbereiten. Die gelungene Kombination aus Präzision und Wendigkeit macht ihn zu einem der stärksten Kontrollschläger seiner Klasse.',
        'Reine Power-Spieler, die den schnellen Punktgewinn suchen, sollten hingegen zu diamantförmigen Alternativen greifen.',
      ],
    },
  },
  {
  id: '4',
  brand: 'Bullpadel',
  name: 'Vertex 04 Hybrid',
  badge: 'Meistgesuchte Bullpadel-Variante',
  shape: 'Rund',
  weight: '370g',
  level: 'Fortgeschritten',
  score: 9.0,
  price: '160 €',
  priceValue: 160,
  affiliateUrl: 'https://amzn.to/4w7CYtf',
  image:
    'https://contents.mediadecathlon.com/m14282930/k$84f3ef9068bfb671a52a8ba77918746e/picture.jpg',
  imageAlt: 'Bullpadel Vertex 04 Hybrid Padel-Schläger auf dem Court',
  slug: 'bullpadel-vertex-04-hybrid-2025',
  teaser:
    'Der Vertex 04 Hybrid ist Bullpadels Antwort auf alle, die Kontrolle über blinde Power stellen. Trotz des Namens steckt darin kein Hybrid-Kopf, sondern eine runde Form mit niedriger Balance, die den Sweet Spot schön mittig hält. Für Spieler mit sauberer Technik einer der präzisesten Schläger, die wir dieses Jahr getestet haben.',
  pros: [
    'Sehr großer, zentrierter Sweet Spot dank runder Form, verzeiht auch dezentrale Treffer',
    'Herausragende Kontrolle bei Lobs, Chiquitas und Bandejas',
    'Xtend Carbon 12K und MultiEva-Kern sorgen für kraftvollen, aber komfortablen Ballkontakt',
    'Bewährte Bullpadel Pro-Line Qualität zu einem fairen Preis für ein Kontroll-Flaggschiff',
  ],
  cons: [
    'Gegenüber dem diamantförmigen Standard-Vertex 04 fehlt spürbar Durchschlagskraft bei Smashes',
    'Kein Schläger für Anfänger, braucht gefestigte Technik',
    'Namensverwirrung: Trotz "Hybrid" im Namen ist es eine runde Form mit niedriger statt mittlerer Balance',
    'Die raue 3D-Oberfläche nutzt sich bei intensivem Spiel mit der Zeit ab',
  ],
  detailRatings: [
    { label: 'Power', value: 7.8 },
    { label: 'Kontrolle', value: 9.4 },
    { label: 'Handling', value: 9.1 },
  ],
  review: {
    intro: [
      'Der Name "Hybrid" führt hier ein bisschen in die Irre. Wer eine Mischform zwischen Diamant und Tropfen erwartet, bekommt stattdessen eine klassische runde Kopfform mit niedriger Balance, sozusagen die kontrollierte kleine Schwester des Power-orientierten Standard-Vertex 04.',
      'Wir haben den Schläger über mehrere Wochen im Vergleich zum regulären Vertex 04 getestet, mit Fokus auf Sweet-Spot-Größe, Manövrierfähigkeit am Netz und dem Zusammenspiel zwischen Kontrolle und Restpower.',
    ],
    feel: [
      'Schon beim ersten Ballkontakt merkt man, wofür dieser Schläger gebaut ist. Der Sweet Spot sitzt zentral und großzügig, Fehltreffer werden erstaunlich gnädig behandelt. Das Zusammenspiel aus Xtend Carbon 12K und dem MultiEva-Kern gibt ein sauberes, eher trockenes Feedback ohne unangenehme Härte.',
      'Am Netz reagiert der Vertex 04 Hybrid schnell und lässt sich gut positionieren, was bei einem Pro-Line-Schläger nicht selbstverständlich ist. Für lange Ballwechsel aus der Defensive bringt die niedrige Balance zusätzliche Ruhe ins Spiel.',
    ],
    powerVsControl: [
      'Power: Hier zeigt sich der einzige echte Kompromiss. Im direkten Vergleich zum diamantförmigen Vertex 04 fehlt bei Smashes und Überkopfschlägen spürbar der letzte Punch.',
      'Kontrolle: Das ist eindeutig die Domäne des Schlägers. Chiquitas, Lobs und Bandejas lassen sich sehr fein dosieren, und die Konsistenz bleibt auch nach langen Ballwechseln hoch.',
    ],
    verdict: [
      'Der Bullpadel Vertex 04 Hybrid ist ein hervorragender Kontrollschläger für fortgeschrittene Spieler, die Wert auf Präzision statt auf rohe Power legen, verpackt in bewährter Bullpadel-Qualität.',
      'Wer aus der Defensive das Spiel diktieren will und bereit ist, für Power selbst zu sorgen, bekommt hier einen der besten Kontrollschläger seiner Preisklasse. Reine Offensivspieler sollten eher zum Standard-Vertex 04 in Diamantform greifen.',
    ],
  },
},
{
  id: '5',
  brand: 'Babolat',
  name: 'Viper Juan Lebrón 3.0',
  badge: 'Signature-Schläger von Juan Lebrón',
  shape: 'Diamant',
  weight: '370g',
  level: 'Fortgeschritten',
  score: 8.8,
  price: '169 €',
  priceValue: 169,
  affiliateUrl: 'https://amzn.to/4wEggd6',
  image:
    'https://contents.mediadecathlon.com/p3031617/k$96ebdc4c442cc641886fa4dcabdbf78a/picture.jpg',
  imageAlt: 'Babolat Viper Juan Lebrón 3.0 Padel-Schläger auf dem Court',
  slug: 'babolat-viper-juan-lebron-3-0-2026',
  teaser:
    'Der Viper Juan Lebrón 3.0 ist Babolats Interpretation von roher Gewalt: eine kopflastige Diamantform, ein steifer Hard-EVA-Kern und ein Dynamic Stability System, das jeden Smash mit maximaler Härte an den Ball weitergibt. Der Signature-Schläger des amtierenden Weltranglisten-Ersten ist nichts für schwache Nerven, aber ein Traum für Netzspieler mit sauberer Technik.',
  pros: [
    'Kompromisslose Power dank 3K-Carbon-Oberfläche und steifem Hard-EVA-Kern',
    'Dynamic Stability System hält den Schläger auch bei harten Blocks extrem solide',
    'Ikonischer Signature-Schläger des amtierenden Weltranglisten-Ersten',
    'Ausgeprägte Reliefstruktur liefert starken, gut kontrollierbaren Spin bei Smash und Vibora',
  ],
  cons: [
    'Sehr kopflastige Balance fordert Unterarm und Schulter spürbar, besonders am Netz',
    'Kleiner, hoch angesetzter Sweet Spot verzeiht ungenaue Treffer kaum',
    'Für Einsteiger und Defensivspieler nahezu ungeeignet, fühlt sich schnell wie ein Brett an',
    'Hoher Preis, typisch für ein Signature-Modell dieses Kalibers',
  ],
  detailRatings: [
    { label: 'Power', value: 9.7 },
    { label: 'Kontrolle', value: 7.2 },
    { label: 'Handling', value: 6.9 },
  ],
  review: {
    intro: [
      'Unter Offensivspielern genießt die Viper-Reihe schon lange einen starken Ruf, und mit der Juan-Lebrón-Edition dreht Babolat die Power-Schraube noch einmal spürbar weiter. Diamantform, hohe Balance und ein neuer, steiferer Hard-EVA-Kern richten sich klar an Spieler, die den Punkt am liebsten selbst beenden.',
      'Wir haben den Schläger über mehrere Wochen im Vergleich zum Vorgängermodell und zur Technical Viper getestet, mit besonderem Fokus darauf, wie gut sich die enorme Power in der alltäglichen Match-Defensive noch händeln lässt.',
    ],
    feel: [
      'Schon bei den ersten Ballwechseln spürt man das straffe, direkte Feedback der Schlagfläche. Der Hard-EVA-Kern gibt Energie ohne spürbare Verzögerung weiter, was Smashes und Viboras enorm druckvoll macht.',
      'Am Netz macht sich das Gewicht im Kopf allerdings schnell bemerkbar. Wer nicht rechtzeitig hinter dem Ball steht, muss deutlich mehr aus dem Unterarm herausholen. Das Dynamic Stability System sorgt dafür, dass der Schläger auch bei harten Bandenbällen bemerkenswert ruhig bleibt.',
    ],
    powerVsControl: [
      'Power: In dieser Disziplin spielt der Viper Juan Lebrón 3.0 in der Spitzenklasse. Zentral getroffene Bälle entwickeln eine enorme Hebelwirkung, Smashes aus dem Rückfeld lassen sich mit wenig Kraftaufwand druckvoll umsetzen.',
      'Kontrolle: Hier verlangt der Schläger volle Konzentration. Der kleine Sweet Spot verzeiht Ungenauigkeiten nicht, wer unkonzentriert trifft, verliert schnell an Länge bei Lobs.',
    ],
    verdict: [
      'Der Babolat Viper Juan Lebrón 3.0 ist eine kompromisslose Offensivwaffe für ambitionierte Spieler mit ausgereifter Technik und der nötigen Armkraft.',
      'Wer primär über Druck am Netz punktet, findet kaum ein besseres Werkzeug für maximale Schlagkraft. Einsteiger und defensive Taktiker sollten wegen des kleinen Sweet Spots und der ausgeprägten Kopflastigkeit lieber zu wendigeren Formen greifen.',
    ],
  },
},
{
  id: '6',
  brand: 'adidas',
  name: 'Metalbone 2026',
  badge: 'Ale Galáns Wahl',
  shape: 'Diamant',
  weight: '355g',
  level: 'Fortgeschritten',
  score: 8.9,
  price: '149 €',
  priceValue: 149,
  affiliateUrl: 'https://amzn.to/3U23yq9',
  image:
    'https://contents.mediadecathlon.com/p2858035/k$a068cbdc649321151beef0e7938f1937/picture.jpg',
  imageAlt: 'adidas Metalbone 2026 Padel-Schläger auf dem Court',
  slug: 'adidas-metalbone-2026',
  teaser:
    'Der Metalbone ist Adidas’ Flaggschiff für den Angriff, entwickelt gemeinsam mit dem Weltranglisten-Ersten Ale Galán. Die Kombination aus Diamantform, aluminisiertem 16K-Carbon und einem individuell verstellbaren Gewichtssystem macht ihn zu einem der ausgereiftesten Power-Schläger auf dem Markt, allerdings auch zu einem der teuersten.',
  pros: [
    'Herausragende Schlagkraft dank Diamantform und 16K Carbon Aluminized-Oberfläche',
    'Weight & Balance System erlaubt individuelle Anpassung von Gewicht und Balance um bis zu 11,2 g',
    'Octagonal Structure reduziert Torsion spürbar, sehr präzises Treffgefühl trotz Power-Fokus',
    'EVA Soft Performance-Kern bietet überraschend viel Komfort für einen reinen Power-Schläger',
  ],
  cons: [
    'Kopflastige Balance macht spontane Volleys und schnelle Reaktionen am Netz träger',
    'Kleiner Sweet Spot bestraft Fehltreffer deutlich',
    'Mit rund 370 € UVP eines der teuersten Modelle am Markt',
    'Das Feintuning des Weight & Balance Systems braucht etwas Eingewöhnungszeit',
  ],
  detailRatings: [
    { label: 'Power', value: 9.5 },
    { label: 'Kontrolle', value: 7.4 },
    { label: 'Handling', value: 7.2 },
  ],
  review: {
    intro: [
      'Der Metalbone ist Adidas’ Antwort auf die Frage, wie viel Power sich technisch noch aus einem Padelschläger herausholen lässt. Gemeinsam mit Ale Galán entwickelt, verbindet er eine kopflastige Diamantform mit einem Gewichtssystem, das sich bis ins Detail an den eigenen Spielstil anpassen lässt.',
      'Wir haben den Schläger mehrere Wochen im Wettkampf getestet und dabei besonders auf das Zusammenspiel zwischen der enormen Schlagkraft, dem Komfort des Kerns und der Feinjustierbarkeit über das Weight & Balance System geachtet.',
    ],
    feel: [
      'Direkt beim Einschwingen spürt man das Gewicht im Kopf, typisch für einen reinrassigen Power-Schläger dieser Klasse. Die Octagonal Structure des Rahmens hält die Torsion trotzdem überraschend gering, Treffer wirken präzise statt wackelig.',
      'Der EVA Soft Performance-Kern nimmt der Härte des 16K-Carbons einiges an Schärfe, was sich vor allem bei langen Matches im Arm bemerkbar macht. Das Weight & Balance System braucht ein paar Sessions, um die für einen selbst passende Konfiguration zu finden, danach lässt sich der Schläger aber sehr gezielt auf den eigenen Spielstil zuschneiden.',
    ],
    powerVsControl: [
      'Power: Das ist die klare Paradedisziplin. Bei Smashes und Bandejas entfaltet die Kombination aus Diamantform und aluminisiertem Carbon eine Durchschlagskraft, die in der Preisklasse ihresgleichen sucht.',
      'Kontrolle: Zweitrangig, aber nicht vernachlässigbar. Die Octagonal Structure sorgt für ein stabileres, präziseres Treffgefühl als bei vielen anderen reinen Power-Diamanten, ersetzt aber keine saubere Technik.',
    ],
    verdict: [
      'Der adidas Metalbone 2026 ist ein technisch beeindruckender Power-Schläger, der genau das liefert, was man von Ale Galáns Signature-Modell erwartet: maximale Schlagkraft, gepaart mit durchdachter Anpassbarkeit.',
      'Für ambitionierte Offensivspieler mit dem nötigen Budget eine klare Empfehlung. Wer Kontrolle über Power stellt oder preissensibel ist, findet in unserem Vergleich günstigere und verzeihendere Alternativen.',
    ],
  },
  },
  {
  id: '7',
  brand: 'Babolat',
  name: 'Counter Origin',
  badge: 'Einsteiger-Empfehlung',
  shape: 'Rund',
  weight: '355g',
  level: 'Anfänger',
  score: 8.3,
  price: '99 €',
  priceValue: 99,
  affiliateUrl: 'https://amzn.to/4z0JwML',
  image:
    'https://contents.mediadecathlon.com/m22733401/k$be3c001a1b5e95d92f8123d525737e46/picture.jpg',
  imageAlt: 'Babolat Counter Origin Padel-Schläger auf dem Court',
  slug: 'babolat-counter-origin-2025',
  teaser:
    'Der Counter Origin ist Babolats Antwort auf die Frage, wie ein guter erster Schläger aussehen sollte. Runde Form, großzügiger Sweet Spot und ein weicher EVA-Kern nehmen viel Druck aus den ersten Trainingsstunden, ohne dass man dafür tief in die Tasche greifen muss.',
  pros: [
    'Riesiger Sweet Spot durch die runde Kopfform, verzeiht auch unsaubere Treffer',
    'Sehr geringes Gewicht macht das Handling angenehm leicht, ideal zum Techniklernen',
    'Hybridrahmen aus Carbon und Glasfaser dämpft Vibrationen spürbar gut',
    'Fairer Preis für eine bekannte Marke, kein Noname-Einstiegsschläger',
  ],
  cons: [
    'Wenig Power, wer athletisch spielt oder hart schmettern will, stößt schnell an Grenzen',
    'Eher ein Schläger für die ersten ein bis zwei Jahre als ein dauerhafter Begleiter',
    'Einfachere Materialien im Vergleich zu Babolats Carbon-Flaggschiffen',
  ],
  detailRatings: [
    { label: 'Power', value: 5.6 },
    { label: 'Kontrolle', value: 8.8 },
    { label: 'Handling', value: 9.0 },
  ],
  review: {
    intro: [
      'Nicht jeder Schläger muss ein Diamant mit 16K-Carbon sein. Der Counter Origin verfolgt das genaue Gegenteil: maximale Fehlertoleranz für Leute, die gerade erst anfangen, Padel für sich zu entdecken.',
      'Wir haben den Schläger mit mehreren blutigen Anfängern über einige Wochen getestet, dabei ging es vor allem um eine Frage: Wie schnell stellt sich ein Erfolgserlebnis ein, ohne dass Frust aufkommt?',
    ],
    feel: [
      'Der große, runde Kopf macht genau das, was er soll. Bälle, die man eigentlich vergeigt hätte, landen trotzdem sauber im Feld. Das gibt gerade in den ersten Stunden ein Gefühl von Kontrolle, das man sich sonst hart erarbeiten müsste.',
      'Der weiche EVA-Kern schluckt Vibrationen zuverlässig, was beim Erlernen der richtigen Schlagtechnik hilft, weil man auch unsaubere Treffer nicht im Arm spürt. Der Hybridrahmen aus Carbon und Glasfaser bleibt dabei überraschend stabil für einen Einsteigerschläger.',
    ],
    powerVsControl: [
      'Power: Hier muss man ehrlich sein, viel ist nicht drin. Der Fokus liegt komplett auf Kontrolle, wer harte Smashes sucht, wird enttäuscht.',
      'Kontrolle: Das ist die ganze Existenzberechtigung dieses Schlägers, und hier liefert er zuverlässig. Bälle lassen sich ruhig aufbauen, Fehler werden verziehen statt bestraft.',
    ],
    verdict: [
      'Der Babolat Counter Origin ist genau das, was ein erster Schläger sein sollte: verzeihend, leicht und günstig genug, um ohne schlechtes Gewissen zuzuschlagen.',
      'Wer merkt, dass er nach ein bis zwei Saisons mehr Power braucht, wird irgendwann umsteigen wollen, aber für den Einstieg gibt es kaum eine bessere Wahl in dieser Preisklasse.',
    ],
  },
},
{
  id: '8',
  brand: 'Bullpadel',
  name: 'Pearl 26',
  badge: 'Signature-Schläger von Bea González',
  shape: 'Diamant',
  weight: '360g',
  level: 'Fortgeschritten',
  score: 8.7,
  price: '250 €',
  priceValue: 250,
  affiliateUrl: 'https://amzn.to/4w9TlW8', 
  image:
    'https://contents.mediadecathlon.com/m23016404/k$c4ff25ecce225aa555b7320419be9f00/picture.jpg',
  imageAlt: 'Bullpadel Pearl 26 Padel-Schläger auf dem Court',
  slug: 'bullpadel-pearl-26-2026',
  teaser:
    'Der Pearl 26 ist Bea Gonzálezs offizieller Schläger und steht bei Bullpadel für das Konzept "Easy Power": spürbare Schlagkraft, die sich trotzdem leicht und agil anfühlt. Die Diamantform mit invertierter Trinamic-Struktur im Herzen macht ihn zu einem der interessantesten Power-Schläger für Spielerinnen und Spieler mit gefestigter Technik.',
  pros: [
    'Diamantform mit hoher Balance liefert spürbar mehr Schlagkraft als klassische Kontrollschläger',
    'CustomWeight-System erlaubt Feinjustierung der Balance um bis zu 12 g',
    'Air React Channel sorgt für auffällig leichtes und agiles Handling trotz Power-Fokus',
    'Vibradrive dämpft Vibrationen im Griff, angenehm auch über lange Matches',
  ],
  cons: [
    'Diamantform verzeiht Fehltreffer deutlich weniger als runde oder Tropfenformen',
    'Nicht für Einsteiger gedacht, braucht bereits eine gefestigte Schlagtechnik',
    'Mit Straßenpreisen um 250 € kein günstiger Schläger',
    'Das "Easy Power"-Versprechen ersetzt keine saubere Ausholbewegung, bei schlechten Treffern merkt man die Diamantform deutlich',
  ],
  detailRatings: [
    { label: 'Power', value: 8.5 },
    { label: 'Kontrolle', value: 7.6 },
    { label: 'Handling', value: 8.5 },
  ],
  review: {
    intro: [
      'Mit dem Pearl 26 bringt Bullpadel den offiziellen Schläger von Bea González auf den Platz, und das Marketing-Versprechen "Easy Power" trifft die Sache erstaunlich gut. Eine Diamantform mit hoher Balance, verpackt in einem der leichtesten Rahmen der Bullpadel Pro Line.',
      'Wir haben den Schläger mehrere Wochen im Wettkampf getestet, mit besonderem Blick darauf, ob sich das Versprechen von Power ohne Kraftaufwand auch bei Spielern ohne Bea Gonzálezs Schlagtechnik einlöst.',
    ],
    feel: [
      'Die invertierte Trinamic-Struktur im Herzen des Schlägers verteilt die Belastung spürbar gleichmäßiger als bei klassischen Diamant-Modellen, das Treffgefühl wirkt dadurch präziser als erwartet. Der Air React Channel macht sich vor allem am Netz bemerkbar, der Schläger lässt sich schneller ausrichten, als sein Power-Profil vermuten lässt.',
      'Vibradrive im Griff nimmt harten Schlägen einiges an Härte, was gerade bei längeren Matches im Unterarm spürbar wird. Das CustomWeight-System braucht ein paar Sessions, um die passende Konfiguration zu finden, danach lässt sich der Schläger aber gut auf den eigenen Spielstil zuschneiden.',
    ],
    powerVsControl: [
      'Power: Hier zeigt der Pearl 26, warum er als Power-Schläger geführt wird. Bei Smashes und Bandejas kommt spürbar mehr Wucht durch als bei runden Kontrollschlägern, ohne dass man dafür extrem viel Kraft investieren muss.',
      'Kontrolle: Solide, aber klar zweitrangig. Die Diamantform verlangt saubere Treffer, wer den Ball nicht zentral erwischt, verliert schneller an Präzision als bei fehlerverzeihenderen Formen.',
    ],
    verdict: [
      'Der Bullpadel Pearl 26 ist ein technisch durchdachter Power-Schläger, der sein "Easy Power"-Versprechen für Spielerinnen und Spieler mit solider Technik tatsächlich einlöst.',
      'Für ambitionierte Fortgeschrittene, die von einem Kontrollschläger kommen und mehr Schlagkraft suchen, eine klare Empfehlung. Wer noch an seiner Grundtechnik arbeitet, sollte wegen der Diamantform lieber bei einer runden oder Tropfenform bleiben.',
    ],
  },
},
  {
    id: '3',
    brand: 'Nox',
    name: 'NextGen Pro Hybrid 3K NFA Series 2025',
    badge: 'Allround-Tipp 2026',
    shape: 'Tropfenform',
    weight: '365g',
    level: 'Fortgeschritten',
    score: 9.1,
    price: '125 €',
    priceValue: 125,
    image:
      'https://contents.mediadecathlon.com/m34230592/k$5747a01046165dc060c82a43f10b5592/picture.jpg',
    imageAlt: 'Nox Nextgen Pro Hybrid 2025 Padel-Schläger im Praxistest auf dem Court',
    slug: 'nox-nextgen-pro-hybrid-3k-nfa-2025',
    teaser:
      'Der Nox Nextgen Pro Hybrid 2025 verbindet die dynamische Power von Carbon mit der Präzision einer ausgewogenen Tropfenform. Ein extrem vielseitiger Padel-Schläger für ambitionierte Allrounder, die am Netz wie auch an der Grundlinie volle Spielkontrolle suchen.',
    affiliateUrl:
      'https://amzn.to/4xgOxz4',
    pros: [
      'Hervorragende Balance zwischen offensiver Schlagkraft und defensiver Ballkontrolle',
      'Großzügiger Sweet Spot dank moderner Hybrid-Kopfform',
      'Knackiges, aber armschonendes Feedback im Treffpunkt ohne störende Vibrationen',
      'Raues Oberflächen-Finish für spürbar mehr Spin bei Slice-Schlägen',
    ],
    cons: [
      'Erfordert solide Grundlagentechnik, um die maximale Power bei Smashes abzurufen',
      'Kein reiner Leichtgewicht-Schläger für Spieler mit bestehenden Gelenkproblemen',
    ],
    detailRatings: [
      { label: 'Power', value: 8.9 },
      { label: 'Kontrolle', value: 9.1 },
      { label: 'Handling', value: 9.0 },
    ],
    review: {
      intro: [
        'Mit der Nextgen-Serie richtet sich die spanische Kultmarke Nox an die neue Generation von Padel-Spielern, die ein modernes und sehr flexibles Racket verlangen. Der Nox Nextgen Pro Hybrid 2025 setzt auf die bewährte Tropfenform in Kombination mit einer mittig austarierten Balance. Das macht das Modell zur idealen Wahl für variable Allround-Spieler.',
        'Wir haben den Schläger über mehrere Wochen intensiv im Wettkampf- und Trainingsbetrieb auf Herz und Nieren getestet. Dabei stand vor allem die Frage im Fokus, wie flüssig der Wechsel zwischen harter Netz-Offensive und kontrollierter Grundlinien-Verteidigung gelingt.',
      ],
      feel: [
        'Bereits bei den ersten Ballwechseln überzeugt das präzise Gefühl im Treffpunkt. Das hochwertige Carbon-Gewebe auf den Schlagflächen nimmt in Kombination mit dem bewährten EVA-Kern harte Bälle kontrolliert auf und gibt sie mit hoher Eigendynamik wieder ab. Die Rückmeldung ist knackig, ohne dabei unangenehm steif in den Arm zu ziehen.',
        'Dank der ausgewogenen Gewichtsverteilung reagiert der Schläger auch in hektischen Volley-Duellen am Netz erfreulich schnell. Die strukturierte Oberfläche greift den Ball hervorragend beim Aufschlag sowie bei gezielten Chiquitas und Slices.',
      ],
      powerVsControl: [
        'Power: Wer aus der Vorhand heraus das Tempo anziehen oder am Netz mit einem Smash abschließen möchte, bekommt beim Nextgen Pro Hybrid reichlich Durchschlagskraft geboten. Die Kopfform erlaubt eine hohe Ballgeschwindigkeit bei moderatem Kraftaufwand.',
        'Kontrolle: In dieser Kategorie liegt die große Stärke des Schlägers. Lobs aus dem Rückfeld lassen sich zentimetergenau platzieren, und der verzeihende Sweet Spot fängt auch dezentral getroffene Bälle noch sicher ab.',
      ],
      verdict: [
        'Der Nox Nextgen Pro Hybrid 2025 überzeugt im Test als extrem ausgewogener Allround-Schläger. Er bietet fortgeschrittenen Spielern genau die richtige Mischung aus Offensivstärke und zuverlässiger Verteidigung.',
        'Für Spieler, die sich nicht auf ein reines Kontroll- oder Power-Extrem festlegen wollen, gehört dieser Schläger zu den aktuell stärksten Kaufempfehlungen auf dem Markt.',
      ],
    },
  },
  {
    id: '9',
    brand: 'Nox',
    name: 'AT10 Genius 18K Alum',
    badge: 'Signature-Schläger von Agustín Tapia',
    shape: 'Tropfenform',
    weight: '370g',
    level: 'Profi',
    score: 9.0,
    price: '169 €',
    priceValue: 169,
    affiliateUrl: 'https://amzn.to/4gfJKXR',
    image:
      'https://contents.mediadecathlon.com/m25289368/k$d37f8b3386ae6c09315a5fe68239a5a4/picture.jpg',
    imageAlt: 'Nox AT10 Genius 18K Alum Padel-Schläger im Praxistest auf dem Court',
    slug: 'nox-at10-genius-18k-2026',
    teaser:
      'Der AT10 Genius 18K Alum ist der Signature-Schläger von Agustín Tapia, aktuell einer der besten Spieler der Welt. Die Tropfenform mit aluminisierter 18K-Carbon-Oberfläche verspricht eine seltene Balance aus Power und Kontrolle. Im Testbericht erfährst du, ob der Allrounder auch auf Amateur-Courts hält, was er auf der Profi-Tour zeigt.',
    pros: [
      'Sehr ausgewogenes Verhältnis aus Power und Kontrolle dank Tropfenform mit mittlerer Balance',
      'Aluminisierte 18K-Carbon-Oberfläche mit Exclusive Spin Textur liefert kräftigen, gut dosierbaren Spin',
      'MLD Black EVA Kern gibt komfortables, aber direktes Feedback ohne harte Vibrationen im Arm',
      'Signature-Modell des amtierenden Weltklassespielers Agustín Tapia, konstant weiterentwickelt',
    ],
    cons: [
      'Mit rund 370 Gramm kein Leichtgewicht, bei langen Matches spürbar für ungeübte Unterarme',
      'Preislich im oberen Segment, günstigere Vorjahresmodelle bieten teils ähnliche Werte',
      'Für reine Einsteiger eher ungeeignet, das Racket verlangt schon eine gefestigte Grundtechnik',
    ],
    detailRatings: [
      { label: 'Power', value: 8.7 },
      { label: 'Kontrolle', value: 8.8 },
      { label: 'Handling', value: 8.5 },
    ],
    review: {
      intro: [
        'Kaum ein Schläger wird aktuell so oft gesucht wie der AT10 Genius, und das aus gutem Grund. Agustín Tapia zählt zu den dominantesten Spielern der Welt, und Nox hat mit dem 18K Alum eine Tropfenform gebaut, die genau das verspricht, was viele Spieler suchen, eine Waffe, die weder reiner Power-Diamant noch reiner Kontroll-Rundkopf ist.',
        'Wir haben den Schläger über mehrere Wochen im Vergleich zu unseren bisherigen Testsiegern in der Tropfenform-Kategorie gespielt, mit besonderem Fokus darauf, wie sich das Profi-Image auf einem Amateur- und Fortgeschrittenen-Court tatsächlich anfühlt.',
      ],
      feel: [
        'Der erste Eindruck ist die spürbar hochwertige Verarbeitung. Die raue, aluminisierte Carbon-Oberfläche greift den Ball beim ersten Kontakt sofort griffig, ohne dass man dafür extremen Krafteinsatz braucht. Der MLD Black EVA Kern fängt harte Bälle sauber ab und gibt sie mit einem satten, aber nicht unangenehm harten Klang wieder frei.',
        'Am Netz merkt man das Gewicht des Schlägers zunächst, gerade bei sehr schnellen Reflexvolleys. Nach ein paar Trainingseinheiten pendelt sich das Handling aber gut ein, die mittlere Balance sorgt dafür, dass der Schläger weder kopf- noch grifflastig wirkt.',
      ],
      powerVsControl: [
        'Power: Bei Smashes und Viboras liefert der AT10 Genius spürbar mehr Wucht als klassische Kontrollschläger. Die Tropfenform mit ihrem etwas höher angesetzten Sweet Spot begünstigt druckvolle Angriffsschläge, ohne dabei komplett auf Fehlertoleranz zu verzichten.',
        'Kontrolle: Genau hier liegt die eigentliche Stärke. Chiquitas und Lobs lassen sich überraschend fein dosieren für einen Schläger, der auf der Profi-Tour für harte Angriffsschläge bekannt ist. Das macht ihn zu einem der wenigen Modelle, die beide Spielstile glaubwürdig bedienen.',
      ],
      verdict: [
        'Der Nox AT10 Genius 18K Alum ist ein sehr ausgewogener Tropfenform-Schläger, der dem Signature-Anspruch von Agustín Tapia gerecht wird, ohne dabei nur für Profis spielbar zu sein. Fortgeschrittene mit gefestigter Technik bekommen ein Racket, das Power und Kontrolle glaubwürdig verbindet.',
        'Wer noch am Anfang steht oder ein reines Leichtgewicht sucht, findet in unserem Vergleich verzeihendere und günstigere Alternativen. Für alle anderen gehört der AT10 Genius zu den spannendsten Allroundern seiner Preisklasse.',
      ],
    },
  },
  {
    id: '10',
    brand: 'Nox',
    name: 'ML10 Pro Cup',
    badge: 'Meistgespielter Kontroll-Klassiker',
    shape: 'Rund',
    weight: '365g',
    level: 'Fortgeschritten',
    score: 9.0,
    price: '125 €',
    priceValue: 125,
    affiliateUrl: 'https://amzn.to/4zn38L9',
    image: 'https://contents.mediadecathlon.com/p3095256/k$8ccb6ba416b324a1574491a675b9752b/picture.jpg?format=auto&f=550x550',
    imageAlt: 'Nox ML10 Pro Cup Padel-Schläger im Praxistest auf dem Court',
    slug: 'nox-ml10-pro-cup-2026',
    teaser:
      'Der ML10 Pro Cup ist seit über einem Jahrzehnt eine Institution im Padel-Sport. In Zusammenarbeit mit Padel-Legende Miguel Lamperti entwickelt, dominiert die runde Kopfform mit riesigem Sweet Spot bis heute die Kontroll-Kategorie. Im Testbericht erfährst du, warum dieser Klassiker auch 2026 zu den meistgespielten Schlägern der Welt zählt.',
    pros: [
      'Riesiger, extrem fehlerverzeihender Sweet Spot dank runder Kopfform',
      'Sehr armschonend durch die weiche Glasfaser-Oberfläche und den HR3-EVA-Kern',
      'Legendäres Handling in der Defensive, ideal für schnelle Reflexe am Netz',
      'Austauschbares Smartstrap-System für individuelle Anpassung und einfache Pflege',
      'Hervorragendes Preis-Leistungs-Verhältnis für einen etablierten Kontroll-Schläger',
    ],
    cons: [
      'Fehlende Durchschlagskraft für Spieler, die primär auf harte Smashes setzen',
      'Glattere Oberfläche bietet spürbar weniger Spin-Grip als die Rough-Surface-Variante',
    ],
    detailRatings: [
      { label: 'Power', value: 7.0 },
      { label: 'Kontrolle', value: 9.8 },
      { label: 'Handling', value: 9.0 },
    ],
    review: {
      intro: [
        'Der ML10 Pro Cup ist mehr als nur ein Padel-Schläger, er ist eine echte Institution. Entwickelt in Zusammenarbeit mit der Padel-Legende Miguel Lamperti, dominiert dieses Modell seit über einem Jahrzehnt die Kontroll-Kategorie und gilt bis heute als einer der meistgespielten Schläger überhaupt, weit über den Amateur-Bereich hinaus.',
        'Wir haben den Klassiker über mehrere Wochen im direkten Vergleich zu unseren bisherigen Kontroll-Testsiegern gespielt, mit besonderem Fokus darauf, ob die runde Kopfform auch nach so langer Marktpräsenz noch mit modernen Schlägern mithalten kann.',
      ],
      feel: [
        'Schon beim ersten Ballkontakt fällt die außergewöhnlich weiche Glasfaser-Oberfläche auf. In Kombination mit dem HR3-EVA-Kern fühlt sich der Schläger deutlich sanfter an als die meisten Carbon-lastigen Modelle in unserem Vergleich, was sich vor allem bei langen Trainingseinheiten im Unterarm bemerkbar macht.',
        'Am Netz zeigt sich, warum der ML10 Pro Cup als defensives Referenzmodell gilt. Schnelle Reflexvolleys und Blocks gelingen mit bemerkenswerter Ruhe, der riesige Sweet Spot fängt auch unsauber getroffene Bälle zuverlässig ab, ohne dass die Energie komplett verloren geht.',
      ],
      powerVsControl: [
        'Power: Hier zeigt sich der einzige echte Kompromiss des Schlägers. Wer auf kompromisslose Smash-Power setzt, muss beim ML10 Pro Cup deutlich mehr Eigenleistung einbringen als bei kopflastigen Diamant-Modellen aus unserem Vergleich.',
        'Kontrolle: Das ist die unangefochtene Stärke dieses Klassikers. Lobs, Chiquitas und defensive Blocks lassen sich mit einer Präzision platzieren, die auch modernen Kontrollschlägern nur selten gelingt. Der große Sweet Spot verzeiht dabei erstaunlich viel.',
      ],
      verdict: [
        'Der Nox ML10 Pro Cup beweist eindrucksvoll, warum er auch nach vielen Jahren noch zu den meistgespielten Schlägern der Welt gehört. Für kontrollorientierte Spieler und alle, die Wert auf einen armschonenden, verzeihenden Spielstil legen, bleibt er eine der stärksten Empfehlungen in unserem gesamten Testfeld.',
        'Wer primär Power und Durchschlagskraft sucht, sollte eher zu einem der diamantförmigen Modelle aus unserem Vergleich greifen. Für alle anderen ist der ML10 Pro Cup ein zeitloser, verlässlicher Begleiter.',
      ],
    },
  },
  {
    id: '11',
    brand: 'Wilson',
    name: 'Bela V3',
    badge: 'BelastegúIns Signature-Allrounder',
    shape: 'Tropfenform',
    weight: '365g',
    level: 'Fortgeschritten',
    score: 8.5,
    price: '175 €',
    priceValue: 175,
    affiliateUrl: 'https://amzn.to/466blWE',
    image: 'https://contents.mediadecathlon.com/p2948887/k$b992ae2609aebbfc82dfa90466b43197/picture.jpg',
    imageAlt: 'Wilson Bela V3 Padel-Schläger im Praxistest auf dem Court',
    slug: 'wilson-bela-v3-2025',
    teaser:
      'Der Bela V3 ist Wilsons Signature-Schläger in Zusammenarbeit mit Padel-Legende Fernando Belastegúín. Die Tropfenform mit V-Bridge-Halskonstruktion und der charakteristischen Spin2-Textur verspricht kraftvolle Angriffsschläge bei gleichzeitig solider Kontrolle. Im Testbericht erfährst du, wie sich Wilsons Flaggschiff gegen die etablierte Konkurrenz schlägt.',
    pros: [
      'Kraftvolle Schlagabgabe dank Power-Foam-Kern und 3K-Carbon-Oberfläche',
      'Starker, gut dosierbarer Spin durch die charakteristische Spin2-Textur',
      'V-Bridge-Halskonstruktion sorgt für spürbar mehr Stabilität bei harten Schlägen',
      'Duo-Grid-Lochmuster erhöht die Fehlertoleranz auch außerhalb des Sweet Spots',
      'Bewährte Belastegúín-Signature-Qualität von einer der größten Marken im Racketsport',
    ],
    cons: [
      'Anspruchsvoll in der Defensive, verlangt bereits gefestigte Grundtechnik',
      'Eher für fortgeschrittene Spieler konzipiert, für Einsteiger zu direkt und unverzeihend',
    ],
    detailRatings: [
      { label: 'Power', value: 8.3 },
      { label: 'Kontrolle', value: 8.2 },
      { label: 'Handling', value: 7.8 },
    ],
    review: {
      intro: [
        'Mit dem Bela V3 bringt Wilson die nächste Generation seines bekanntesten Signature-Schlägers auf den Platz, entwickelt in enger Zusammenarbeit mit der argentinischen Padel-Legende Fernando Belastegúín. Die Tropfenform mit ihrer neuen V-Bridge-Halskonstruktion soll dabei genau die Balance zwischen Offensivstärke und Führbarkeit treffen, die viele fortgeschrittene Angriffsspieler suchen.',
        'Wir haben den Schläger über mehrere Wochen im direkten Vergleich zu unseren bisherigen Tropfenform-Testsiegern gespielt, mit besonderem Fokus darauf, wie sich die neue Rahmenkonstruktion und die charakteristische Spin2-Textur in der Praxis gegenüber der etablierten Konkurrenz behaupten.',
      ],
      feel: [
        'Schon beim ersten Ballkontakt spürt man den festen, aber nicht unangenehm harten Aufprall, den der Power-Foam-Kern erzeugt. Die raue 3K-Carbon-Oberfläche mit ihrer Spin2-Textur greift den Ball hervorragend, besonders bei Aufschlägen und Vibora-Schlägen macht sich das im deutlich spürbaren Spin bemerkbar.',
        'Die neue V-Bridge-Halskonstruktion sorgt für ein spürbar stabileres Gefühl bei harten Schmetterbällen als bei vielen Modellen der Vorgängergeneration. Das Duo-Grid-Lochmuster hilft zusätzlich dabei, auch leicht dezentrale Treffer noch kontrolliert zu verarbeiten, ohne dass der Ball komplett verspringt.',
      ],
      powerVsControl: [
        'Power: Der Bela V3 liefert solide Durchschlagskraft, vor allem bei Überkopfschlägen und Angriffsvolleys am Netz. Die Kraftentfaltung liegt spürbar über reinen Kontrollschlägern, bleibt aber hinter den kopflastigsten Diamant-Modellen in unserem Vergleich zurück.',
        'Kontrolle: Hier zeigt sich der Schläger überraschend zugänglich für seine Offensiv-Ausrichtung. Die Kombination aus Duo-Grid-Lochmuster und der ausgewogenen Balance macht Lobs und defensive Blocks deutlich berechenbarer, als man bei einem reinen Angriffsschläger erwarten würde.',
      ],
      verdict: [
        'Der Wilson Bela V3 ist ein solider, gut verarbeiteter Allround-Schläger für fortgeschrittene Angriffsspieler, die Wert auf eine bewährte Signature-Qualität legen. Die V-Bridge-Konstruktion und das Duo-Grid-Lochmuster machen ihn zugänglicher als viele reine Power-Diamanten.',
        'Wer bereits eine gefestigte Grundtechnik mitbringt und einen ausgewogenen Tropfenform-Schläger sucht, bekommt hier eine ernstzunehmende Alternative zu den etablierten Marken. Einsteiger sollten aufgrund der direkten Ballabgabe eher zu verzeihenderen Modellen greifen.',
      ],
    },
  },
];

export function getRacketBySlug(slug: string): Racket | undefined {
  return rackets.find((r) => r.slug === slug);
}

export function getRacketById(id: string): Racket | undefined {
  return rackets.find((r) => r.id === id);
}
