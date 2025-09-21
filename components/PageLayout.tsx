"use client";

import Sidebar from '@/components/Sidebar';

interface PageLayoutProps {
  children: React.ReactNode;
  activeSection: string;
}

export default function PageLayout({ children, activeSection }: PageLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeSection={activeSection} />
      <main className="flex-1 ml-80">
        {children}
      </main>
    </div>
  );
}
