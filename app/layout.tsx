import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Padel-Pilot.de — Padel-Schläger im Test & Vergleich 2026',
  description:
    'Unabhängige Padel-Schläger-Tests, Kaufberatung und Ratgeber. Wir vergleichen Form, Gewicht, Balance und Preis-Leistung der besten Modelle 2026.',
  metadataBase: new URL('https://padel-pilot.de'),
  openGraph: {
    title: 'Padel-Pilot.de — Padel-Schläger im Test & Vergleich 2026',
    description:
      'Unabhängige Padel-Schläger-Tests, Kaufberatung und Ratgeber.',
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Padel-Pilot.de — Padel-Schläger im Test & Vergleich 2026',
    description: 'Unabhängige Padel-Schläger-Tests, Kaufberatung und Ratgeber.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
