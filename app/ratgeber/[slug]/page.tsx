import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock, Info, ShoppingBag, Sparkles, User } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getPostBySlug, posts } from '@/data/posts';
import { getRacketById, type Racket } from '@/data/rackets';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Artikel nicht gefunden — Padel-Pilot.de' };
  }

  const title = `${post.title} — Padel-Pilot.de`;
  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      type: 'article',
      locale: 'de_DE',
      authors: [post.author.name],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/ratgeber/${post.slug}`,
    },
  };
}

function buildArticleJsonLd(post: NonNullable<ReturnType<typeof getPostBySlug>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.bio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Padel-Pilot.de',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.padel-pilot.de/ratgeber/${post.slug}`,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = buildArticleJsonLd(post);

  const meta = [
    { icon: User, label: post.author.name },
    { icon: CalendarDays, label: post.date },
    { icon: Clock, label: `${post.readTime} Lesezeit` },
  ];

  const intro = post.content[0];
  const body = post.content.slice(1);
  const fazitIndex = body.findIndex(
    (b) => b.startsWith('Fazit') || b.toLowerCase().includes('<h2') && b.toLowerCase().includes('fazit'),
  );
  const fazitBlock = fazitIndex >= 0 ? body[fazitIndex] : null;
  const bodyBlocks = fazitIndex >= 0 ? body.slice(0, fazitIndex) : body;

  const recommendedRackets: Racket[] =
    post.recommendedRacketIds
      ?.map((id) => getRacketById(id))
      .filter((r): r is Racket => r !== undefined) ?? [];

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main>
        {/* Article header */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute -left-32 -top-16 h-[420px] w-[420px] rounded-full bg-neon/10 blur-3xl" />
          <div className="mx-auto max-w-3xl container-px py-12 lg:py-16">
            <Link
              href="/ratgeber"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
              Zurück zum Ratgeber
            </Link>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-neon-600 dark:text-neon-400">
              {post.category}
            </p>

            <h1 className="mt-3 font-display text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {meta.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5">
                  <item.icon className="h-4 w-4 text-neon-600 dark:text-neon-400" strokeWidth={2} />
                  {item.label}
                </span>
              ))}
            </div>

            <p className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Info className="h-3.5 w-3.5" strokeWidth={2} />
              Redaktionell unabhängig. Beinhaltet Affiliate-Links.
            </p>
          </div>
        </section>

        {/* Article body */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-2xl container-px py-12 lg:py-16">
            {/* Hero image */}
            <div className="relative -mt-4 mb-10 overflow-hidden rounded-2xl border border-border shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Intro paragraph */}
            {intro && !intro.startsWith('<') && (
              <p className="text-[1.0625rem] leading-relaxed text-foreground/90">
                {intro}
              </p>
            )}
            {intro && intro.startsWith('<') && (
              <div
                className="post-content text-[1.0625rem] leading-relaxed text-foreground/90"
                dangerouslySetInnerHTML={{ __html: intro }}
              />
            )}

            {/* Auf einen Blick box */}
            <aside className="mt-8 overflow-hidden rounded-2xl border border-border bg-secondary/40">
              <div className="flex items-center gap-2 border-b border-border bg-neon/10 px-5 py-3">
                <Sparkles className="h-4 w-4 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
                <h2 className="font-display text-sm font-bold uppercase tracking-wider text-foreground">
                  Auf einen Blick
                </h2>
              </div>
              <ul className="space-y-3 p-5">
                {post.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-foreground/90">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-neon-600 dark:text-neon-400" strokeWidth={2} />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Article content */}
            <article className="mt-10 space-y-6">
              {bodyBlocks.map((block, i) => {
                if (block.startsWith('<')) {
                  return (
                    <div
                      key={i}
                      className="post-content text-[1.0625rem] leading-relaxed text-foreground/90"
                      dangerouslySetInnerHTML={{ __html: block }}
                    />
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[1.0625rem] leading-relaxed text-foreground/90"
                  >
                    {block}
                  </p>
                );
              })}
            </article>

            {/* Recommended rackets */}
            {recommendedRackets.length > 0 && (
              <section className="mt-12">
                <div className="flex items-center gap-2 mb-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon text-neon-foreground">
                    <ShoppingBag className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <h2 className="font-display text-xl font-bold tracking-tight">
                    Passende Schläger-Empfehlungen zu diesem Artikel
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {recommendedRackets.map((racket) => {
                    const href = `/schlaeger/${racket.slug}`;
                    return (
                      <article
                        key={racket.id}
                        className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-neon/40"
                      >
                        <div className="flex gap-4 p-4">
                          <Link
                            href={href}
                            className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-secondary"
                            aria-label={`${racket.brand} ${racket.name} Test ansehen`}
                          >
                            <Image
                              src={racket.image}
                              alt={racket.imageAlt}
                              fill
                              sizes="96px"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </Link>
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center gap-1 rounded-full bg-neon px-2.5 py-0.5 text-[10px] font-semibold text-neon-foreground">
                                {racket.badge}
                              </span>
                            </div>
                            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              {racket.brand}
                            </p>
                            <Link
                              href={href}
                              className="mt-0.5 font-display text-base font-bold leading-tight transition-colors hover:text-neon-600 dark:hover:text-neon-400"
                            >
                              {racket.name}
                            </Link>
                            <div className="mt-auto flex items-baseline gap-2 pt-2">
                              <span className="font-display text-lg font-bold tabular-nums">
                                {racket.score.toFixed(1)}
                                <span className="text-xs font-medium text-muted-foreground">/10</span>
                              </span>
                              <span className="text-xs text-muted-foreground">Gesamtnote</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between border-t border-border px-4 py-3">
                          <div>
                            <span className="block text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                              ab
                            </span>
                            <span className="font-display text-base font-bold">{racket.price}</span>
                          </div>
                          <a
                            href={racket.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="group/btn inline-flex items-center gap-1.5 rounded-lg bg-neon px-4 py-2.5 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95"
                          >
                            Preis prüfen
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={2.5} />
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Fazit card */}
            {fazitBlock && (
              <aside className="mt-10 overflow-hidden rounded-2xl border-2 border-neon/60 bg-neon/5">
                <div className="flex items-center gap-2 border-b border-neon/30 px-6 py-4">
                  <Sparkles className="h-5 w-5 text-neon-600 dark:text-neon-400" strokeWidth={2.5} />
                  <h2 className="font-display text-lg font-bold tracking-tight text-foreground">
                    Fazit
                  </h2>
                </div>
                <div className="px-6 py-5">
                  {fazitBlock.startsWith('<') ? (
                    <div
                      className="post-content text-[1.0625rem] leading-relaxed text-foreground/90 [&_h2]:mt-0 [&_h2]:mb-0 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: fazitBlock.replace(/<h2[^>]*>.*?<\/h2>/i, '') }}
                    />
                  ) : (
                    <p className="text-[1.0625rem] leading-relaxed text-foreground/90">
                      {fazitBlock.replace(/^Fazit[:\s]*/i, '')}
                    </p>
                  )}
                </div>
              </aside>
            )}

            {/* Internal linking CTA */}
            <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-neon/40 bg-neon/5 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neon text-neon-foreground">
                  <ShoppingBag className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <div>
                  <p className="font-display text-lg font-bold leading-tight">
                    Den passenden Schläger finden?
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Vergleiche alle getesteten Modelle in unserer Kaufberatung.
                  </p>
                </div>
              </div>
              <Link
                href="/kaufberatung"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-neon px-6 py-3.5 text-sm font-semibold text-neon-foreground shadow-sm transition-all hover:shadow-md hover:shadow-neon/30 active:scale-95 sm:w-auto"
              >
                Zur Kaufberatung
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Author / E-E-A-T box */}
            <div className="mt-10 rounded-2xl border border-border bg-secondary/30 p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neon text-neon-foreground">
                  <User className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Über {post.author.name}
                  </p>
                  <p className="mt-1 font-display text-base font-bold">{post.author.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More articles */}
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl container-px py-12 lg:py-16">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Weiterlesen
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {posts
                .filter((p) => p.slug !== post.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/ratgeber/${p.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-neon/40 hover:shadow-md"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-neon-600 dark:text-neon-400">
                      {p.category}
                    </span>
                    <h3 className="mt-2 font-display text-base font-bold leading-snug transition-colors group-hover:text-neon-600 dark:group-hover:text-neon-400">
                      {p.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" strokeWidth={2} />
                      {p.readTime}
                    </span>
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
