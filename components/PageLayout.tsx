"use client";

import Sidebar from '@/components/Sidebar';
import { usePathname } from 'next/navigation';

interface PageLayoutProps {
  children: React.ReactNode;
  activeSection: string;
}

export default function PageLayout({ children, activeSection }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen w-80 z-50">
        <Sidebar activeSection={activeSection} />
      </div>
      
      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <MobileBottomNav activeSection={activeSection} />
      </div>
      
      {/* Main Content */}
      <main className="lg:ml-80 pb-20 lg:pb-0">
        {children}
      </main>
    </div>
  );
}

// Mobile Bottom Navigation Component
function MobileBottomNav({ activeSection }: { activeSection?: string }) {
  const pathname = usePathname();
  
  const getActiveSection = () => {
    if (activeSection) return activeSection;
    if (pathname === '/') return 'home';
    return pathname.slice(1);
  };
  
  const currentSection = getActiveSection();

  const navigation = [
    { id: 'home', label: 'Home', icon: '🏠', href: '/' },
    { id: 'skills', label: 'Skills', icon: '💻', href: '/skills' },
    { id: 'projects', label: 'Projects', icon: '📁', href: '/projects' },
    { id: 'experience', label: 'Experience', icon: '💼', href: '/experience' },
    { id: 'contact', label: 'Contact', icon: '📧', href: '/contact' },
  ];

  return (
    <div className="bg-background/95 backdrop-blur-xl border-t border-border overflow-x-hidden">
      <nav className="px-2 py-2">
        <ul className="flex justify-around">
          {navigation.map((item) => {
            const isActive = currentSection === item.id;
            
            return (
              <li key={item.id} className="flex-1">
                <a
                  href={item.href}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span className="text-lg mb-1">{item.icon}</span>
                  <span className="text-xs font-medium">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
