import Link from 'next/link';
import { Compass } from 'lucide-react';
import { bestlists } from '@/data/bestlists';

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl container-px py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon text-neon-foreground">
                <Compass className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="font-display text-base font-bold">
                Padel-Pilot<span className="text-neon-600 dark:text-neon-400">.de</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Unabhängige Padel-Schläger-Tests und Kaufberatung.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Tests
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/bestenliste" className="text-muted-foreground hover:text-foreground">Bestenliste</Link></li>
              <li><Link href="/kaufberatung" className="text-muted-foreground hover:text-foreground">Kaufberatung</Link></li>
              <li><Link href="/ratgeber" className="text-muted-foreground hover:text-foreground">Ratgeber</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Beliebte Bestenlisten
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {bestlists.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/bestenliste/${b.slug}`}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Ratgeber
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/ratgeber" className="text-muted-foreground hover:text-foreground">Alle Artikel</Link></li>
              <li><Link href="/ratgeber/padel-regeln-fuer-anfaenger" className="text-muted-foreground hover:text-foreground">Padel Regeln</Link></li>
              <li><Link href="/ratgeber/welche-schuhe-brauche-ich-fuer-padel" className="text-muted-foreground hover:text-foreground">Padel-Schuhe</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Rechtliches
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/impressum" className="text-muted-foreground hover:text-foreground">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-muted-foreground hover:text-foreground">Datenschutz</Link></li>
              <li><Link href="/testkriterien" className="text-muted-foreground hover:text-foreground">Wie wir testen</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>
            Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Wir nutzen Affiliate-Links, unter anderem zu Amazon; der Preis bleibt für dich dabei immer gleich.
          </p>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Padel-Pilot.de. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
