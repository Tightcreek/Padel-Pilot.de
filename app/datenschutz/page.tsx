import type { Metadata } from 'next';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Datenschutz — Padel-Pilot.de',
  description: 'Datenschutzerklärung von Padel-Pilot.de — Verarbeitung personenbezogener Daten, Cookies und Affiliate-Links.',
  alternates: { canonical: '/datenschutz' },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-3xl container-px py-16 lg:py-24">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Datenschutz
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Stand: Januar 2026
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              1. Datenschutz auf einen Blick
            </h2>
            <p className="mt-3">
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
              Anliegen. Wir behandeln Ihre Daten vertraulich und entsprechend
              der gesetzlichen Datenschutzvorschriften (DSGVO,
              BDSG-neu) sowie dieser Datenschutzerklärung.
            </p>
            <p className="mt-3">
              Personenbezogene Daten sind alle Daten, die auf Sie persönlich
              beziehbar sind, z. B. Name, Adresse, E-Mail-Adressen,
              Nutzerverhalten.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              2. Verantwortliche Stelle
            </h2>
            <p className="mt-3">
              Verantwortlich für die Datenverarbeitung auf dieser Website
              ist:
            </p>
            <div className="mt-3 space-y-1">
              <p>Max Mustermann</p>
              <p>Musterstraße 1</p>
              <p>10115 Berlin</p>
              <p>E-Mail: datenschutz@padel-pilot.de</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              3. Hosting & Server-Logfiles
            </h2>
            <p className="mt-3">
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hosting-Provider). Die personenbezogenen Daten, die auf dieser
              Website erfasst werden, werden auf den Servern des Providers
              gespeichert. Hierbei kann es sich insbesondere um IP-Adressen,
              Zeitstempel und Zugriffsdaten handeln.
            </p>
            <p className="mt-3">
              Die Verarbeitung erfolgt zur Auslieferung der Website und zur
              Gewährleistung der Sicherheit der Informationstechnik des
              Betreibers, basierend auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              4. Cookies
            </h2>
            <p className="mt-3">
              Unsere Internetseiten verwenden teilweise Cookies. Cookies
              richten auf Ihrem Rechner keinen Schaden an und enthalten keine
              Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher,
              effektiverer und sicherer zu machen.
            </p>
            <p className="mt-3">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              5. Nutzung von Affiliate-Links (Amazon PartnerNet etc.)
            </h2>
            <p className="mt-3">
              Auf dieser Website werden Affiliate-Links zu externen
              Anbietern eingesetzt, insbesondere im Rahmen des
              Amazon PartnerNet-Programms sowie weiterer Partnerprogramme.
              Wenn Sie über einen solchen Link ein Produkt erwerben, erhalten
              wir eine kleine Provision. Für Sie entstehen dabei keine
              Mehrkosten — der Preis bleibt identisch.
            </p>
            <p className="mt-3">
              Die Affiliate-Links enthalten in der Regel Parameter, die eine
              Zuordnung der Bestellung zum vermittelnden Partner ermöglichen.
              Dabei kann der Affiliate-Anbieter Cookies auf Ihrem Endgerät
              setzen oder IP-Adressen verarbeiten, um die Provision
              zuzuordnen. Die Verarbeitung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse der
              Finanzierung des Angebots).
            </p>
            <p className="mt-3">
              Weitere Informationen zur Datenverarbeitung durch die
              jeweiligen Anbieter finden Sie in deren eigenen
              Datenschutzerklärungen (z. B.{' '}
              <a
                href="https://www.amazon.de/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MFR9HK"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-2 hover:text-neon-600 dark:hover:text-neon-400"
              >
                Amazon PartnerNet
              </a>
              ).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              6. Analyse-Tools
            </h2>
            <p className="mt-3">
              Wir nutzen ggf. Analyse-Tools zur Auswertung des
              Nutzerverhaltens (z. B. Google Analytics, privacy-friendly
              Alternativen). Die dabei erfassten Daten werden ausschließlich
              in aggregierter Form verarbeitet. Eine Weitergabe an Dritte
              erfolgt nicht, sofern keine gesetzliche Pflicht besteht.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              7. Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die
              Verarbeitung sowie das Recht auf Datenübertragbarkeit (Art. 15
              bis 20 DSGVO). Zudem besteht ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              8. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p className="mt-3">
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von „http://&rdquo;
              auf „https://&rdquo; wechselt und am Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
