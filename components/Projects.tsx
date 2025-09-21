"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount for page-based navigation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'SaaS Dashboard',
      description: 'A comprehensive analytics dashboard for SaaS businesses with real-time data visualization.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Next.js', 'TypeScript', 'Supabase'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with payment integration and inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
    {
      id: 3,
      title: 'Mobile App UI Kit',
      description: 'Complete design system and component library for mobile applications.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Figma', 'React Native'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
    {
      id: 4,
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot with natural language processing and machine learning capabilities.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'TensorFlow', 'FastAPI'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: true,
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Track and analyze social media performance across multiple platforms.',
      image: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'D3.js', 'PostgreSQL'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Task Management Tool',
      description: 'Collaborative project management tool with real-time updates and team features.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Prisma', 'WebSocket'],
      github: 'https://github.com',
      demo: 'https://example.com',
      featured: false,
    },
  ];

  return (
    <section className="min-h-screen bg-background py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-16"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 overflow-hidden hover:scale-105 ${
                project.featured ? 'md:col-span-2 lg:row-span-2' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={project.featured ? 400 : 300}
                  className="w-full h-48 md:h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-primary hover:bg-primary/80">
                    <ExternalLink className="mr-2" size={16} />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="border-border text-foreground hover:border-primary">
                    <Github className="mr-2" size={16} />
                    Code
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-secondary text-secondary-foreground hover:bg-primary/20 text-xs"
                    >
                      {tag}
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