import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { posts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Padel-Wissen & Ratgeber — Padel-Pilot.de',
  description:
    'Padel Regeln, Vergleiche und Ausrüstungs-Guides: Verständlich erklärt von der Padel-Pilot-Redaktion. Alles, was du als Anfänger und Fortgeschrittener wissen musst.',
  openGraph: {
    title: 'Padel-Wissen & Ratgeber — Padel-Pilot.de',
    description:
      'Regeln, Vergleiche und Ausrüstungs-Guides, verständlich erklärt von der Padel-Pilot-Redaktion.',
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
              Regeln, Vergleiche und Ausrüstungs-Guides, verständlich erklärt,
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

      <Footer />
    </div>
  );
}
