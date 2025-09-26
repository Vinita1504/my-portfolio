"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Coffee, Rocket } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount for page-based navigation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Rocket, label: 'Projects Completed', value: '10+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '500+' },
    { icon: Calendar, label: 'Years Experience', value: '3+' },
    { icon: MapPin, label: 'Happy Clients', value: '15+' },
  ];

  return (
    <section className="h-max bg-background py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-8 sm:mb-12 lg:mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              I'm Vinita Bharti, a passionate Fullstack Developer and Flutter developer with over 3 years of experience crafting 
              beautiful, functional digital experiences. I specialize in building scalable web applications, 
              mobile apps, and e-commerce platforms with modern technologies and clean, intuitive user interfaces.
            </p>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Flutter', 'Dart', 'AWS', 'MongoDB', 'PostgreSQL'].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-primary/20 text-xs sm:text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={stat.label} className="glass-card hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3 sm:mb-4" />
                      <div className="text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2">{stat.value}</div>
                      <div className="text-muted-foreground text-xs sm:text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}