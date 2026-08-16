import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Compass } from 'lucide-react';
import { Header } from '@/components/header';
import { posts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Padel-Wissen & Ratgeber — Padel-Pilot.de',
  description:
    'Padel Regeln, Vergleiche und Ausrüstungs-Guides: Verständlich erklärt von der Padel-Pilot-Redaktion. Alles, was du als Anfänger und Fortgeschrittener wissen musst.',
  openGraph: {
    title: 'Padel-Wissen & Ratgeber — Padel-Pilot.de',
    description:
      'Regeln, Vergleiche und Ausrüstungs-Guides — verständlich erklärt von der Padel-Pilot-Redaktion.',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: '/ratgeber',
  },
};

const categoryStyles: Record<string, string> = {
  Regeln: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400',
  Vergleich: 'bg-amber-500/15 text-amber-700 dark:text-amber-400',
  Ausrüstung: 'bg-sky-500/15 text-sky-700 dark:text-sky-400',
};

export default function RatgeberPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-neon/10 blur-3xl" />
          <div className="mx-auto max-w-4xl container-px py-16 text-center lg:py-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" />
              Ratgeber · {posts.length} Artikel
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Padel-Wissen &amp;{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Ratgeber</span>
                <span className="absolute inset-x-0 bottom-1.5 -z-0 h-3 bg-neon/70 sm:bottom-2 sm:h-4" />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Regeln, Vergleiche und Ausrüstungs-Guides — verständlich erklärt,
              damit du schneller auf dem Court stehst und bessere Entscheidungen
              triffst.
            </p>
          </div>
        </section>

        {/* Article grid */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl container-px py-12 lg:py-20">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/ratgeber/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-neon/40 hover:shadow-lg animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span
                    className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryStyles[post.category] ?? 'bg-secondary text-muted-foreground'}`}
                  >
                    {post.category}
                  </span>

                  <h2 className="mt-4 font-display text-xl font-bold leading-snug transition-colors group-hover:text-neon-600 dark:group-hover:text-neon-400">
                    {post.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                      {post.readTime} Lesezeit
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-foreground">
                      Lesen
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background">
        <div className="mx-auto max-w-7xl container-px py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
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
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tests</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/bestenliste" className="text-muted-foreground hover:text-foreground">Bestenliste</Link></li>
                <li><Link href="/kaufberatung" className="text-muted-foreground hover:text-foreground">Kaufberatung</Link></li>
                <li><Link href="/ratgeber" className="text-muted-foreground hover:text-foreground">Ratgeber</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ratgeber</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/ratgeber" className="text-muted-foreground hover:text-foreground">Alle Artikel</Link></li>
                <li><Link href="/ratgeber/padel-regeln-fuer-anfaenger" className="text-muted-foreground hover:text-foreground">Padel Regeln</Link></li>
                <li><Link href="/ratgeber/welche-schuhe-brauche-ich-fuer-padel" className="text-muted-foreground hover:text-foreground">Padel-Schuhe</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rechtliches</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link href="/impressum" className="text-muted-foreground hover:text-foreground">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-muted-foreground hover:text-foreground">Datenschutz</Link></li>
                <li><Link href="/testkriterien" className="text-muted-foreground hover:text-foreground">Wie wir testen</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Padel-Pilot.de. Alle Rechte vorbehalten.</p>
            <p>Wir nutzen Affiliate-Links. Der Preis bleibt für dich gleich.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
