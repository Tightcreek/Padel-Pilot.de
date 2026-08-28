import { rackets, type Racket } from './rackets';

export interface Bestlist {
  slug: string;
  h1: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  filter: (r: Racket) => boolean;
  filterLabel: string;
}

export const bestlists: Bestlist[] = [
  {
    slug: 'beste-padelschlaeger-anfaenger',
    h1: 'Die besten Padel-Schläger für Anfänger 2026 im Vergleich',
    title: 'Beste Padel-Schläger für Anfänger',
    metaTitle: 'Beste Padel-Schläger für Anfänger 2026 im Vergleich | Padel-Pilot.de',
    metaDescription:
      'Die besten Padel-Schläger für Anfänger 2026: Wir haben alle Einsteiger-Modelle getestet. Vergleich von Kontrolle, Sweet Spot, Gewicht und Preis-Leistung.',
    filterLabel: 'Einsteiger-Schläger (Level: Anfänger)',
    intro: [
      'Wer mit dem Padel-Sport startet, braucht einen Schläger, der Fehler verzeiht statt sie zu bestrafen. Anfänger profitieren am meisten von runden Schlägerformen mit großem Sweet Spot und ausgewogener Balance. Diese Schläger geben hohe Sicherheit im Ballgefühl und erleichtern das Erlernen der richtigen Schlagtechnik.',
      'In unserer Bestenliste für Anfänger zeigen wir dir die Modelle, die im Praxistest besonders durch hohe Fehlertoleranz, leichtes Handling und ein faires Preis-Leistungs-Verhältnis überzeugen. Alle Schläger wurden über mehrere Wochen auf dem Court von Spielern unterschiedlicher Spielstärken getestet.',
      'Achte beim Kauf besonders auf ein Gesamtgewicht zwischen 355 und 370 Gramm sowie eine weiche EVA-Kern-Dämpfung, die Stöße zuverlässig absorbiert. So schonst du von Anfang an deinen Unterarm und beugst Armschmerzen effektiv vor.',
    ],
    filter: (r) =>
      r.level.toLowerCase().includes('anfänger') ||
      r.level.toLowerCase().includes('einsteiger'),
  },
  {
    slug: 'beste-padelschlaeger-unter-200-euro',
    h1: 'Padel-Schläger unter 200 Euro im Test 2026',
    title: 'Padel-Schläger unter 200 Euro',
    metaTitle: 'Padel-Schläger unter 200 Euro im Test 2026 | Padel-Pilot.de',
    metaDescription:
      'Die besten Padel-Schläger unter 200 Euro 2026: Unabhängig getestet und verglichen. Top-Modelle mit bestem Preis-Leistungs-Verhältnis für jedes Spielniveau.',
    filterLabel: 'Schläger bis 200 €',
    intro: [
      'Guter Padel-Sport muss keineswegs teuer sein. In der Preisklasse unter 200 Euro findest du bereits eine breite Auswahl hochwertiger Schläger, die selbst anspruchsvolle Spieler überzeugen. Das Angebot reicht von kontrollorientierten Einsteigermodellen bis hin zu echten Power-Schlägern mit robuster Carbon-Oberfläche.',
      'In dieser Bestenliste haben wir alle getesteten Schläger mit einem aktuellen Marktpreis bis 200 Euro übersichtlich zusammengefasst. Besonders wichtig war uns dabei das reale Preis-Leistungs-Verhältnis. Ein preiswerter Schläger sollte auch in den Disziplinen Kontrolle, Power und Handling auf dem Court überzeugen.',
      'Unsere Empfehlung lautet daher: Orientiere dich am Gesamtergebnis und der Schlägerform, statt rein auf den Anschaffungspreis zu schauen. Ein rundes Modell unter 200 Euro bietet kontrollorientierten Spielern oft eine deutlich bessere Spielbarkeit als ein teurer Diamant-Schläger mit kleinem Sweet Spot.',
    ],
    filter: (r) => r.priceValue <= 200,
  },
  {
    slug: 'beste-padelschlaeger-kontrolle',
    h1: 'Die besten Padel-Schläger für Kontrolle & Präzision 2026',
    title: 'Beste Padel-Schläger für Kontrolle',
    metaTitle: 'Beste Padel-Schläger für Kontrolle & Präzision 2026 | Padel-Pilot.de',
    metaDescription:
      'Die besten Kontroll-Schläger für Padel 2026: Runde Form, großer Sweet Spot, maximale Präzision. Unabhängig getestet und verglichen für taktikorientierte Spieler.',
    filterLabel: 'Kontrollschläger (Form: Rund)',
    intro: [
      'Kontrollorientierte Spieler gewinnen ihre Punkte durch kluge Taktik, Ausdauer und exakte Platzierung statt durch reine Schlagkraft. Für diesen Spielstil sind runde Schläger mit grifflastiger Balance und großem Sweet Spot die beste Wahl, da sie maximale Fehlertoleranz und ein exzellentes Ballgefühl bieten.',
      'In unserer Bestenliste für Kontrolle und Präzision findest du die Modelle, die in unserem Test die besten Detailnoten für Kontrolle erzielt haben. Diese Schläger zeichnen sich durch eine runde Kopfform mit zentralem Sweet Spot aus. Das macht sie ideal für gefühlvolle Chiquitas, Lobs und präzise Bälle an die Glaswand.',
      'Besonders wichtig für defensive Taktiker ist zudem eine wirksame Vibrationsdämpfung im Griff, um Armschmerzen über lange Matches vorzubeugen. Ein Gesamtgewicht zwischen 355 und 365 Gramm sorgt hier für die optimale Kombination aus Wendigkeit und hoher Stabilität.',
    ],
    filter: (r) => r.shape.toLowerCase().includes('rund'),
  },
  {
    slug: 'beste-padelschlaeger-unter-100-euro',
    h1: 'Die besten Padel-Schläger unter 100 Euro 2026 im Test',
    title: 'Padel-Schläger unter 100 Euro',
    metaTitle: 'Beste Padel-Schläger unter 100 Euro 2026 im Test | Padel-Pilot.de',
    metaDescription:
      'Die besten Padel-Schläger unter 100 Euro 2026: Unabhängig getestet und verglichen. Top-Einsteigermodelle mit dem besten Preis-Leistungs-Verhältnis.',
    filterLabel: 'Schläger bis 100 €',
    intro: [
      'Du musst für einen guten ersten oder zweiten Schläger nicht gleich 150 Euro oder mehr ausgeben. Auch unterhalb der 100-Euro-Marke gibt es solide Modelle, die in unserem Test durch großen Sweet Spot, geringes Gewicht und faire Verarbeitung überzeugen konnten.',
      'In dieser Bestenliste haben wir alle getesteten Schläger mit einem aktuellen Marktpreis bis 100 Euro zusammengefasst. Die meisten Modelle in dieser Preisklasse setzen auf Fiberglas- statt Carbon-Oberflächen und richten sich klar an Einsteiger, die zunächst ohne großes Risiko in die eigene Ausrüstung investieren wollen.',
      'Erwarte in dieser Preisklasse keine maximale Schlagkraft, sondern vor allem Fehlertoleranz und ein angenehmes, leichtes Handling. Wer nach den ersten Saisons mehr Power braucht, kann später gezielt in ein teureres Carbon-Modell aufsteigen, ohne beim Einstieg schon zu viel investiert zu haben.',
    ],
    filter: (r) => r.priceValue <= 100,
  },
  {
    slug: 'beste-padelschlaeger-fortgeschrittene',
    h1: 'Die besten Padel-Schläger für Fortgeschrittene 2026 im Vergleich',
    title: 'Beste Padel-Schläger für Fortgeschrittene',
    metaTitle: 'Beste Padel-Schläger für Fortgeschrittene 2026 im Vergleich | Padel-Pilot.de',
    metaDescription:
      'Die besten Padel-Schläger für Fortgeschrittene 2026: Allround-Modelle mit ausgewogenem Verhältnis aus Power und Kontrolle. Unabhängig getestet und verglichen.',
    filterLabel: 'Schläger für Fortgeschrittene',
    intro: [
      'Wer die Grundtechnik beherrscht und regelmäßig spielt, braucht einen Schläger, der mit dem eigenen Spiel mitwachsen kann. Fortgeschrittene profitieren meist von einem ausgewogenen Verhältnis aus Power und Kontrolle, statt sich schon auf ein reines Power- oder Kontroll-Extrem festzulegen.',
      'In dieser Bestenliste zeigen wir dir die Modelle, die im Praxistest genau dieses Gleichgewicht am überzeugendsten umsetzen. Die meisten dieser Schläger setzen auf hochwertigere Carbon-Oberflächen und anspruchsvollere Kernkonstruktionen als reine Einsteigermodelle, verzeihen aber weiterhin einen Großteil kleinerer Trefffehler.',
      'Achte bei der Wahl vor allem auf deinen bevorzugten Spielstil: Tropfenform-Schläger bieten die vielseitigste Basis, während runde Modelle weiterhin auf Kontrolle setzen und Diamantformen bereits deutlich mehr Schlagkraft verlangen und liefern.',
    ],
    filter: (r) => r.level.toLowerCase().includes('fortgeschritten'),
  },
];

export function getBestlistBySlug(slug: string): Bestlist | undefined {
  return bestlists.find((b) => b.slug === slug);
}

export function getRacketsForBestlist(bestlist: Bestlist): Racket[] {
  return rackets
    .filter(bestlist.filter)
    .sort((a, b) => b.score - a.score);
}
