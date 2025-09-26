import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vinitabharti.dev'),
  title: 'Vinita Bharti - Software Developer & Full Stack Developer',
  description: 'Professional portfolio of Vinita Bharti, a software developer specializing in React, Next.js, Flutter, and modern web applications. Building digital experiences that matter.',
  keywords: 'software developer, full-stack developer, React, Next.js, Flutter, TypeScript, portfolio, Vinita Bharti',
  authors: [{ name: 'Vinita Bharti' }],
  creator: 'Vinita Bharti',
  openGraph: {
    title: 'Vinita Bharti - Software Developer & Full Stack Developer',
    description: 'Building digital experiences that matter. Passionate developer crafting beautiful, functional solutions.',
    url: 'https://vinitabharti.dev',
    siteName: 'Vinita Bharti Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/vinita.jpeg',
        width: 1200,
        height: 630,
        alt: 'Vinita Bharti - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vinita Bharti - Software Developer & Full Stack Developer',
    description: 'Building digital experiences that matter. Passionate developer crafting beautiful, functional solutions.',
    images: ['/vinita.jpeg'],
    creator: '@vinita1504',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}