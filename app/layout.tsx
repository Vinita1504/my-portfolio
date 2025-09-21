import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ViNiTa BhArTi - Full Stack Developer & SaaS Builder',
  description: 'Professional portfolio of ViNiTa BhArTi, a full-stack developer specializing in modern web applications, SaaS platforms, and beautiful user interfaces.',
  keywords: 'full-stack developer, web developer, React, Next.js, TypeScript, SaaS, portfolio, ViNiTa BhArTi',
  authors: [{ name: 'ViNiTa BhArTi' }],
  openGraph: {
    title: 'ViNiTa BhArTi - Full Stack Developer & SaaS Builder',
    description: 'Crafting digital interfaces that drive growth and delight',
    type: 'website',
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