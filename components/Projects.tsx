"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe, Heart, Sun, Users, Building, MoreHorizontal } from 'lucide-react';
import InteractiveBackground from '@/components/ui/InteractiveBackground';
import Image from 'next/image';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: '2gather App',
      image: '/images/2gather-app.png',
      category: 'App',
      github: 'https://github.com',
      demo: 'https://2gather.in',
      size: 'landscape'
    },
    {
      id: 2,
      title: 'Hamara Ticket',
      image: '/images/hamara-ticket.png',
      category: 'App',
      github: 'https://github.com',
      demo: 'https://hamaraticket.com',
      size: 'portrait'
    },
    {
      id: 3,
      title: 'UIDMT',
      image: '/images/uidmt.png',
      category: 'Website',
      github: 'https://github.com',
      demo: 'https://uidmt.com',
      size: 'square'
    },
    {
      id: 4,
      title: 'Parivartanx',
      image: '/images/parivartanx.png',
      category: 'Website',
      github: 'https://github.com',
      demo: 'https://parivartanx.com',
      size: 'square'
    },
    {
      id: 5,
      title: '2gather.in',
      image: '/images/2gather-web.png',
      category: 'Website',
      github: 'https://github.com',
      demo: 'https://2gather.in',
      size: 'square'
    },
    {
      id: 6,
      title: 'Veliciae',
      image: '/images/veliciae.png',
      category: 'E-commerce',
      github: 'https://github.com',
      demo: 'https://www.veliciae.in/',
      size: 'portrait'
    },
    {
      id: 7,
      title: 'DRS Solar',
      image: '/images/drs-solar.png',
      category: 'Website',
      github: 'https://github.com',
      demo: 'https://www.drssolar.com/',
      size: 'square'
    },
    {
      id: 8,
      title: 'Maurya Urja Matrimony',
      image: '/images/matrimony.png',
      category: 'App',
      github: 'https://github.com',
      demo: 'https://www.mauryaurjamatrimony.com/',
      size: 'landscape'
    },
  ];

  return (
    <InteractiveBackground className="min-h-screen bg-background py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Matching the image style */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6 lg:mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-muted-foreground font-medium">Latest work</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6">
            Design That Performs
          </h1>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            A peek into the thinking behind every pixel
          </p>
        </div>

        {/* Simple Bento Grid - Image Cards Only */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                project.size === 'landscape' ? 'col-span-2 lg:col-span-2 xl:col-span-2' : 
                project.size === 'portrait' ? 'col-span-1 lg:col-span-1 xl:col-span-1 row-span-2' :
                'sm:col-span-1 lg:col-span-1 xl:col-span-1'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Full Height Image Background */}
              <div className="relative h-full min-h-[150px] sm:min-h-[200px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className={`${project.size=== 'portrait'?"object-cover":"object-cover aspect-square"} group-hover:scale-105 transition-transform duration-500`}
                />
                
                {/* Blackish Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Project Name */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {project.title}
                  </h3>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/60 text-white border-white/20 text-xs px-3 py-1">
                    {project.category}
                  </Badge>
                </div>

                {/* Action Button on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button 
                    size="sm" 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="mr-2" size={14} />
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </InteractiveBackground>
  );
}