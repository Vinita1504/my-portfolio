"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount for page-based navigation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Framer Motion'],
        gradient: 'from-primary to-primary/80'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'Django', 'GraphQL', 'REST APIs'],
        gradient: 'from-primary/80 to-primary'
    },
    {
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma', 'MySQL'],
        gradient: 'from-tertiary to-accent'
    },
    {
      title: 'Tools & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Git', 'CI/CD', 'Vercel'],
      gradient: 'from-emerald-500 to-emerald-600'
    },
  ];

  return (
    <section className="min-h-screen bg-background py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className={`inline-block bg-gradient-to-r ${category.gradient} text-primary-foreground px-4 py-2 rounded-lg font-semibold mb-6`}>
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-secondary text-secondary-foreground hover:bg-muted transition-all duration-300 hover:scale-110"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}