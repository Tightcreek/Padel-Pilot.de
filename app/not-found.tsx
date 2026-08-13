import Link from 'next/link';
import { ArrowLeft, SearchX } from 'lucide-react';
import { Header } from '@/components/header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto flex max-w-3xl flex-col items-center justify-center container-px py-24 text-center lg:py-32">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
          <SearchX className="h-8 w-8 text-neon-600 dark:text-neon-400" strokeWidth={2} />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Fehler 404
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Schläger nicht gefunden
        </h1>
        <p className="mt-4 max-w-md text-muted-foreground">
          Der gesuchte Schläger existiert nicht oder wurde aus unserer Datenbank
          entfernt. Vielleicht findest du ihn in unserer Bestenliste.
        </p>
        <Link
          href="/#tests"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-neon px-6 py-3.5 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
          Zurück zur Bestenliste
        </Link>
      </main>
    </div>
  );
}
