import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Compass,
  Ruler,
  Scale,
  Sparkles,
  Target,
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { RacketCard } from '@/components/racket-card';
import { RacketFinderQuiz } from '@/components/RacketFinderQuiz';
import { rackets } from '@/data/rackets';
import { posts } from '@/data/posts';
import heroImage from '@/data/padel-hero-sunset.png';

const heroStats = [
  { value: rackets.length.toString(), label: 'Schläger getestet' },
  { value: new Set(rackets.map((r) => r.brand)).size.toString(), label: 'Marken verglichen' },
  { value: '180h', label: 'Spielpraxis' },
];

const guideSteps = [
  {
    icon: Target,
    title: 'Spiellevel bestimmen',
    text: 'Anfänger, Fortgeschritten oder Profi, der Schläger muss zu deinem Können passen.',
  },
  {
    icon: Ruler,
    title: 'Form wählen',
    text: 'Rund für Kontrolle, Tropfenform für den Mittelweg, Diamant für maximale Power.',
  },
  {
    icon: Scale,
    title: 'Gewicht & Balance',
    text: '365–370g ist der Sweet-Spot. Die Balance bestimmt, ob du Kraft oder Kontrolle spürst.',
  },
];

const topPicks = [...rackets].sort((a, b) => b.score - a.score).slice(0, 3);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero — editorial magazine look, asymmetric */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-neon/10 blur-3xl" />
          <div className="mx-auto max-w-7xl container-px py-16 lg:py-28">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left: editorial copy */}
              <div className="lg:col-span-7 xl:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-muted-foreground animate-fade-in">
                  <Sparkles className="h-3.5 w-3.5 text-neon-600 dark:text-neon-400" />
                  Ausgabe 2026 · Neu erschienen
                </div>

                <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl animate-fade-up">
                  Vom Einsteiger- bis zum{' '}
                  Profi-Schläger:{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">Guide 2026</span>
                    <span className="absolute inset-x-0 bottom-1.5 -z-0 h-3 bg-neon/70 sm:bottom-2 sm:h-4" />
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground animate-fade-up [animation-delay:80ms]">
                  Vom ersten Schläger-Kauf bis zum ersten Match: Wir haben die beliebtesten Modelle
                  über 180 Stunden auf dem Court getestet. Hier ist alles, was du
                  wissen musst. Ohne Marketing-Blabla.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up [animation-delay:160ms]">
                  <Link
                    href="#tests"
                    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3.5 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95"
                  >
                    Top-Empfehlungen ansehen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </Link>
                  <Link
                    href="#kaufberatung"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    Zur Kaufberatung
                  </Link>
                </div>

                {/* Stats */}
                <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 animate-fade-up [animation-delay:240ms]">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="font-display text-3xl font-bold tabular-nums sm:text-4xl">
                        {stat.value}
                      </dt>
                      <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                        {stat.label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Right: editorial image */}
              <div className="lg:col-span-5 xl:col-span-6">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-border bg-secondary animate-scale-in">
                  <Image
                    src={heroImage}
                    alt="Padel-Spieler bei der Vorhand auf einem Outdoor-Court bei Sonnenuntergang"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                      Im Test
                    </p>
                    <p className="mt-1 font-display text-lg font-bold leading-tight">
                      Babolat Technical Viper: 9,2/10
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Racket Finder Quiz */}
        <RacketFinderQuiz />

        {/* Top recommendations */}
        <section id="tests" className="scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-7xl container-px py-16 lg:py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neon-600 dark:text-neon-400">
                  <Compass className="h-4 w-4" strokeWidth={2.5} />
                  Ausgewählt von der Redaktion
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Unsere Top-Empfehlungen
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Drei Schläger, die in jeder Kategorie überzeugt haben, vom
                  Preis-Leistungs-Sieger bis zum Pro-Modell.
                </p>
              </div>
              <Link
                href="/bestenliste"
                className="group inline-flex items-center gap-1.5 self-start text-sm font-semibold sm:self-auto"
              >
                Alle Tests ansehen
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {topPicks.map((racket, i) => (
                <div
                  key={racket.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <RacketCard racket={racket} priority={i === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Buying guide */}
        <section id="kaufberatung" className="scroll-mt-24 border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-7xl container-px py-16 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neon-600 dark:text-neon-400">
                  <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                  In 3 Schritten zum richtigen Schläger
                </div>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Kaufberatung: So findest du deinen Schläger
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Padel-Schläger sind nicht gleich. Bevor du kaufst, solltest du drei
                  Dinge kennen: dein Level, die Form und das Gewicht. Hier die
                  Kurzfassung.
                </p>
                <Link
                  href="/ratgeber"
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
                >
                  Zum ausführlichen Ratgeber
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </Link>
              </div>

              <div className="lg:col-span-7">
                <ol className="space-y-4">
                  {guideSteps.map((step, i) => (
                    <li
                      key={step.title}
                      className="flex gap-5 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-neon/40"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                        <step.icon className="h-6 w-6 text-neon-600 dark:text-neon-400" strokeWidth={2} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm font-bold text-muted-foreground tabular-nums">
                            0{i + 1}
                          </span>
                          <h3 className="font-display text-lg font-bold">{step.title}</h3>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial / Ratgeber */}
        <section id="ratgeber" className="scroll-mt-24 border-b border-border">
          <div className="mx-auto max-w-7xl container-px py-16 lg:py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Aus dem Ratgeber
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Tiefere Einblicke, Kauf-Tipps und Tests jenseits der Bestenliste.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {posts.map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/ratgeber/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-neon/40 hover:shadow-lg animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className="inline-flex w-fit items-center rounded-full bg-neon px-2.5 py-1 text-[11px] font-semibold text-neon-foreground">
                    {post.category}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug group-hover:text-neon-600 dark:group-hover:text-neon-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                      {post.readTime} Lesezeit
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground">
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
