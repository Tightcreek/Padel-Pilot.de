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
    metaTitle: 'Beste Padel-Schläger für Anfänger 2026 im Vergleich — Padel-Pilot.de',
    metaDescription:
      'Die besten Padel-Schläger für Anfänger 2026: Wir haben alle Einsteiger-Modelle getestet. Vergleich von Kontrolle, Sweet Spot, Gewicht und Preis-Leistung.',
    filterLabel: 'Einsteiger-Schläger (Level: Anfänger)',
    intro: [
      'Wer mit dem Padel-Sport startet, braucht einen Schläger, der Fehler verzeiht statt sie zu bestrafen. Anfänger profitieren am meisten von runden Schlägerformen mit großem Sweet Spot und ausgewogener Balance — sie geben Sicherheit im Ballgefühl und erleichtern das Erlernen der richtigen Schlagtechnik.',
      'In unserer Bestenliste für Anfänger zeigen wir die Modelle, die im Test besonders durch Fehlertoleranz, leichtes Handling und ein faires Preis-Leistungs-Verhältnis überzeugt haben. Alle Schläger wurden über mehrere Wochen auf dem Court von Spielern unterschiedlicher Niveaus getestet.',
      'Achte beim Kauf besonders auf ein Gewicht zwischen 355 und 370 Gramm sowie auf eine weiche EVA-Kern-Dämpfung, die Vibrationen zuverlässig absorbiert. So schonst du von Anfang an Unterarm und Handgelenk.',
    ],
    filter: (r) => r.level === 'Anfänger',
  },
  {
    slug: 'beste-padelschlaeger-unter-200-euro',
    h1: 'Padel-Schläger unter 200 Euro im Test 2026',
    title: 'Padel-Schläger unter 200 Euro',
    metaTitle: 'Padel-Schläger unter 200 Euro im Test 2026 — Padel-Pilot.de',
    metaDescription:
      'Die besten Padel-Schläger unter 200 Euro 2026: Unabhängig getestet und verglichen. Top-Modelle mit bestem Preis-Leistungs-Verhältnis für jedes Spielniveau.',
    filterLabel: 'Schläger bis 200 €',
    intro: [
      'Guter Padel-Sport muss nicht teuer sein. Unter 200 Euro findest du eine breite Auswahl an hochwertigen Schlägern, die auch anspruchsvolle Spieler überzeugen — von kontrollorientierten Einsteigermodellen bis hin zu echten Power-Schlägern mit Carbon-Oberfläche.',
      'In dieser Bestenliste haben wir alle getesteten Schläger mit einem Straßenpreis bis 200 Euro zusammengestellt. Besonders wichtig war uns dabei das Preis-Leistungs-Verhältnis: Ein günstiger Schläger muss nicht nur preiswert sein, sondern auch in den Kategorien Kontrolle, Power und Handling mithalten können.',
      'Unsere Empfehlung: Orientiere dich am Gesamtscore und an der Schlägerform, nicht allein am Preis. Ein rundes Modell unter 200 Euro kann für kontrollorientierte Spieler die bessere Wahl sein als ein teurer Diamant-Schläger, der zwar Power verspricht, aber saubere Technik voraussetzt.',
    ],
    filter: (r) => r.priceValue <= 200,
  },
  {
    slug: 'beste-padelschlaeger-kontrolle',
    h1: 'Die besten Padel-Schläger für Kontrolle & Präzision 2026',
    title: 'Beste Padel-Schläger für Kontrolle',
    metaTitle: 'Beste Padel-Schläger für Kontrolle & Präzision 2026 — Padel-Pilot.de',
    metaDescription:
      'Die besten Kontroll-Schläger für Padel 2026: Runde Form, großer Sweet Spot, maximale Präzision. Unabhängig getestet und verglichen für taktikorientierte Spieler.',
    filterLabel: 'Kontrollschläger (Form: Rund)',
    intro: [
      'Kontrollspieler gewinnen ihre Punkte durch Taktik, Ausdauer und präzise Platzierung — nicht durch rohe Power. Für diesen Spielstil sind runde Schläger mit niedriger Balance und großem Sweet Spot die erste Wahl, da sie maximale Fehlertoleranz und ein vorhersehbares Ballgefühl bieten.',
      'In unserer Bestenliste für Kontrolle & Präzision findest du die Modelle, die in der Kategorie Kontrolle die höchsten Detail-Scores erreicht haben. Diese Schläger zeichnen sich durch eine runde Kopfform aus, die den Sweet Spot zentral und großzügig platziert — ideal für Chiquitas, Lobs und präzise Bälle an die Glaswand.',
      'Besonders wichtig für kontrollorientierte Spieler ist eine saubere Vibrationsdämpfung am Griff, die auch über lange Ballwechsel ermüdungsfreies Spielen ermöglicht. Achte außerdem auf ein Gewicht im Bereich 365 bis 370 Gramm für die beste Balance zwischen Wendigkeit und Stabilität.',
    ],
    filter: (r) => r.shape === 'Rund',
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
