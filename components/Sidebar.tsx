"use client";

import { Github, Linkedin, Mail, User, Briefcase, Code, FolderOpen, GraduationCap, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

interface SidebarProps {
  activeSection?: string;
}

const navigation = [
  { id: 'home', label: 'Home', icon: User, href: '/' },
  { id: 'skills', label: 'Skills', icon: Code, href: '/skills' },
  { id: 'projects', label: 'Projects', icon: FolderOpen, href: '/projects' },
  { id: 'experience', label: 'Experience', icon: Briefcase, href: '/experience' },
  { id: 'contact', label: 'Contact', icon: MessageCircle, href: '/contact' },
];

export default function Sidebar({ activeSection }: SidebarProps) {
  const pathname = usePathname();
  
  const getActiveSection = () => {
    if (activeSection) return activeSection;
    if (pathname === '/') return 'home';
    return pathname.slice(1); // Remove leading slash
  };
  
  const currentSection = getActiveSection();

  return (
    <div className="fixed left-0 top-0 h-screen w-80 bg-background/95 backdrop-blur-xl border-r border-border z-50">
      <div className="flex flex-col h-full p-8">
        {/* Profile Section */}
        <div className="text-center mb-8 relative">
          {/* Theme Toggle - Top Right */}
          <div className="absolute top-0 right-0">
            <ThemeToggle />
          </div>
          
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/vinita.jpeg"
              alt="ViNiTa BhArTi - Profile"
              fill
              className="rounded-full object-cover border-4 border-primary/30 shadow-xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">ViNiTa BhArTi</h2>
          <p className="text-muted-foreground text-sm">Full Stack Developer | SaaS Builder</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-foreground shadow-lg border border-primary/30'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 pt-8 border-t border-border">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 rounded-xl bg-muted text-muted-foreground hover:text-foreground hover:bg-tertiary/20 transition-all duration-300 hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}