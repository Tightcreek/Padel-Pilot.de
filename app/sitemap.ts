import type { MetadataRoute } from 'next';
import { rackets } from '@/data/rackets';
import { balls } from '@/data/balls';
import { posts } from '@/data/posts';
import { bestlists } from '@/data/bestlists';

const BASE_URL = 'https://www.padel-pilot.de';

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE_URL, changeFrequency: 'weekly', priority: 1 },
  { url: `${BASE_URL}/kaufberatung`, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/bestenliste`, changeFrequency: 'weekly', priority: 0.85 },
  { url: `${BASE_URL}/baelle`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/ratgeber`, changeFrequency: 'weekly', priority: 0.8 },
  { url: `${BASE_URL}/testkriterien`, changeFrequency: 'yearly', priority: 0.4 },
  { url: `${BASE_URL}/impressum`, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/datenschutz`, changeFrequency: 'yearly', priority: 0.3 },
];

const racketRoutes: MetadataRoute.Sitemap = rackets.map((racket) => ({
  url: `${BASE_URL}/schlaeger/${racket.slug}`,
  changeFrequency: 'monthly',
  priority: 0.7,
}));

const ballRoutes: MetadataRoute.Sitemap = balls.map((ball) => ({
  url: `${BASE_URL}/baelle/${ball.slug}`,
  changeFrequency: 'monthly',
  priority: 0.7,
}));

const bestlistRoutes: MetadataRoute.Sitemap = bestlists.map((bestlist) => ({
  url: `${BASE_URL}/bestenliste/${bestlist.slug}`,
  changeFrequency: 'monthly',
  priority: 0.8,
}));

const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
  url: `${BASE_URL}/ratgeber/${post.slug}`,
  changeFrequency: 'monthly',
  priority: 0.6,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...bestlistRoutes, ...racketRoutes, ...ballRoutes, ...postRoutes];
}
