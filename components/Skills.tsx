"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench,
  Code,
  FileCode,
  Network,
  Settings,
  Cloud,
  Container,
  GitBranch,
  Workflow,
  Layers,
  Circle,
  Square,
  Triangle,
  Hexagon
} from 'lucide-react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      description: 'Modern web interfaces and user experiences',
      skills: [
        { name: 'React', icon: Hexagon, level: 95 },
        { name: 'Next.js', icon: FileCode, level: 90 },
        { name: 'TypeScript', icon: Code, level: 88 },
        { name: 'Vue.js', icon: Circle, level: 75 },
        { name: 'Tailwind CSS', icon: Square, level: 92 },
        { name: 'Framer Motion', icon: Triangle, level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      description: 'Robust server-side applications and APIs',
      skills: [
        { name: 'Node.js', icon: Circle, level: 90 },
        { name: 'Python', icon: Triangle, level: 85 },
        { name: 'Express', icon: Network, level: 88 },
        { name: 'Django', icon: Settings, level: 75 },
        { name: 'GraphQL', icon: Database, level: 80 },
        { name: 'REST APIs', icon: Network, level: 92 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      description: 'Data management and optimization',
      skills: [
        { name: 'PostgreSQL', icon: Database, level: 90 },
        { name: 'MongoDB', icon: Circle, level: 85 },
        { name: 'Redis', icon: Square, level: 80 },
        { name: 'Supabase', icon: Database, level: 75 },
        { name: 'Prisma', icon: Layers, level: 85 },
        { name: 'MySQL', icon: Database, level: 88 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      description: 'Infrastructure and development workflow',
      skills: [
        { name: 'AWS', icon: Cloud, level: 85 },
        { name: 'Docker', icon: Container, level: 88 },
        { name: 'Kubernetes', icon: Settings, level: 75 },
        { name: 'Git', icon: GitBranch, level: 95 },
        { name: 'CI/CD', icon: Workflow, level: 80 },
        { name: 'Vercel', icon: Cloud, level: 90 }
      ]
    },
  ];

  return (
    <section className="min-h-screen bg-background py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technical Expertise
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive skill set spanning modern web technologies, 
            from frontend frameworks to cloud infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-700 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Category Header */}
                <div className="flex items-start space-x-4 mb-8">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group/skill flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 border border-border/20 hover:border-primary/20 transition-all duration-300"
                      style={{ 
                        transitionDelay: `${(index * 150) + (skillIndex * 50)}ms` 
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-md bg-background/50 group-hover/skill:bg-primary/10 transition-colors duration-300">
                          <skill.icon className="w-4 h-4 text-muted-foreground group-hover/skill:text-primary transition-colors duration-300" />
                        </div>
                        <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <div className="flex items-center space-x-3">
                        <div className="w-20 h-1 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(index * 150) + (skillIndex * 50) + 500}ms`
                            }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground font-mono w-8 text-right">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`mt-20 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Continuously evolving with technology</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}