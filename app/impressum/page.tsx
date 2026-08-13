import type { Metadata } from 'next';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Impressum — Padel-Pilot.de',
  description: 'Impressum und Anbieterkennzeichnung von Padel-Pilot.de gemäß § 5 TMG.',
  alternates: { canonical: '/impressum' },
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-3xl container-px py-16 lg:py-24">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Impressum
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Angaben gemäß § 5 DDG
        </p>

        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Diensteanbieter
            </h2>
            <div className="mt-3 space-y-1">
              <p>TC Service</p>
              <p>Steingroeverweg 3</p>
              <p>54292 Trier</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Kontakt
            </h2>
            <div className="mt-3 space-y-1">
              <p>
                E-Mail:{' '}
                <a
                  href="mailto:l.s.390@gmx.de"
                  className="font-medium text-foreground underline underline-offset-2 hover:text-neon-600 dark:hover:text-neon-400"
                >
                  l.s.390@gmx.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Redaktionell verantwortlich
            </h2>
            <div className="mt-3 space-y-1">
              <p>TC Service</p>
              <p>Steingroeverweg 3</p>
              <p>54292 Trier</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              EU-Streitschlichtung
            </h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-2 hover:text-neon-600 dark:hover:text-neon-400"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="mt-3">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
