"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className="w-12 h-8 p-0 border-border bg-muted/50 hover:bg-primary/20 transition-all duration-300 hover:scale-105 relative overflow-hidden"
    >
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
        theme === 'light' ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <Sun className="h-4 w-4" />
      </div>
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
        theme === 'dark' ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <Moon className="h-4 w-4" />
      </div>
      <span className="sr-only">
        {theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      </span>
    </Button>
  );
}
