"use client";

import { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Network,
  Code,
  Server,
  Database,
  Cloud,
  GitBranch,
  Layers,
  Zap,
  Globe,
  Container,
  Triangle,
  Hexagon,
  Square,
  Circle
} from 'lucide-react';
import InteractiveBackground from '@/components/ui/InteractiveBackground';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: 'React', icon: Hexagon, color: 'text-blue-400' },
    { name: 'Next.js', icon: Triangle, color: 'text-gray-300' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-500' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'Express', icon: Network, color: 'text-gray-400' },
    { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: Layers, color: 'text-cyan-400' },
    { name: 'GraphQL', icon: Globe, color: 'text-pink-500' },
    { name: 'REST APIs', icon: Network, color: 'text-purple-400' },
    { name: 'Docker', icon: Container, color: 'text-blue-500' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-400' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
    { name: 'Vercel', icon: Zap, color: 'text-gray-300' }
  ];

  // Split skills into three columns for bento grid
  const column1 = skills.slice(0, 5);
  const column2 = skills.slice(5, 10);
  const column3 = skills.slice(10, 14);

  return (
    <InteractiveBackground className="min-h-screen bg-background py-24 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted-foreground font-medium">Available for work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How I add value?
          </h2>
        </div>

        {/* Tech Stacks Card */}
        <div className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '200ms' }}>
          <Card className="group relative overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 border border-gray-600/30 hover:border-gray-500/40 transition-all duration-500">
            {/* Dark Glass Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/70 to-gray-900/90" />
            
            {/* Green Glow from Bottom Left */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/15 to-transparent opacity-60" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-500/20 via-green-400/10 to-transparent rounded-full blur-3xl" />
            
            {/* Subtle Border Highlights */}
            <div className="absolute inset-0 rounded-lg border border-gray-500/20" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/30 to-transparent" />
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gray-400/30 to-transparent" />
            
            {/* Dynamic Light Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300/20 to-transparent" />
            </div>
            
            {/* Content */}
            <CardContent className="relative p-0 h-80">
              <div className="flex h-full">
                {/* Left Side - Title and Description */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-1 h-1 bg-green-400 rounded-sm"></div>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      Tech Stacks
                    </h3>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      My core workflow—<br/>
                      built for thinking,<br/>
                      designing, and building<br/>
                      smarter.
                    </p>
                  </div>
                </div>

                {/* Right Side - Advanced Bento Grid */}
                <div className="w-96 h-full relative overflow-hidden bg-gradient-to-br from-gray-800/20 via-gray-700/10 to-gray-800/20 backdrop-blur-sm border-l border-gray-600/20">
                  {/* Gradient overlay for fade effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/60 z-10 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-900/60 z-10 pointer-events-none"></div>
                  
                  <div className="flex h-full">
                    {/* Column 1 - Frontend (Scroll Up) */}
                    <div className="flex-1 relative overflow-hidden">
                      <div className="animate-scroll-up-smooth space-y-4 py-4">
                        {[...column1, ...column1, ...column1].map((skill, index) => (
                          <div 
                            key={`col1-${index}`}
                            className="group mx-3"
                          >
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30 hover:border-gray-500/50 hover:bg-gray-700/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-primary/10">
                              <div className="flex flex-col items-center text-center space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center border border-gray-600/30 group-hover:border-gray-500/50 transition-all duration-300">
                                  <skill.icon className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                                </div>
                                <div>
                                  <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 2 - Backend (Scroll Down) */}
                    <div className="flex-1 relative overflow-hidden">
                      <div className="animate-scroll-down-smooth space-y-4 py-4">
                        {[...column2, ...column2, ...column2].map((skill, index) => (
                          <div 
                            key={`col2-${index}`}
                            className="group mx-3"
                          >
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30 hover:border-gray-500/50 hover:bg-gray-700/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-accent/10">
                              <div className="flex flex-col items-center text-center space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center border border-gray-600/30 group-hover:border-gray-500/50 transition-all duration-300">
                                  <skill.icon className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                                </div>
                                <div>
                                  <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 3 - Tools (Scroll Up) */}
                    <div className="flex-1 relative overflow-hidden">
                      <div className="animate-scroll-up-smooth space-y-4 py-4">
                        {[...column3, ...column3, ...column3].map((skill, index) => (
                          <div 
                            key={`col3-${index}`}
                            className="group mx-3"
                          >
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-600/30 hover:border-gray-500/50 hover:bg-gray-700/60 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-tertiary/10">
                              <div className="flex flex-col items-center text-center space-y-3">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center border border-gray-600/30 group-hover:border-gray-500/50 transition-all duration-300">
                                  <skill.icon className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                                </div>
                                <div>
                                  <p className="text-gray-200 text-sm font-medium group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </CardContent>

            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
        </div>

        {/* Bottom Status */}
        <div className={`mt-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Network className="w-4 h-4" />
              <span>Patna, India</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </InteractiveBackground>
  );
}