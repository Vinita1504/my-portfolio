"use client";

import { useEffect, useState, useRef } from 'react';

interface InteractiveBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function InteractiveBackground({ children, className = "" }: InteractiveBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-70">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/40 via-blue-600/25 to-transparent rounded-full blur-3xl"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-purple-500/35 via-purple-600/20 to-transparent rounded-full blur-3xl"
          style={{ animation: 'float 6s ease-in-out infinite reverse' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-radial from-green-500/40 via-green-600/25 to-transparent rounded-full blur-3xl"
          style={{ animation: 'float 10s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-0 right-1/3 w-64 h-64 bg-gradient-radial from-cyan-500/35 via-cyan-600/20 to-transparent rounded-full blur-3xl"
          style={{ animation: 'float 7s ease-in-out infinite reverse' }}
        />
      </div>

      {/* Interactive Grid Pattern */}
      <div className="absolute inset-0">
        {/* Base Grid */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-300"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Hover Effect Grid */}
        <div 
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
        
        {/* Dynamic Cursor Light Effect */}
        <div 
          className="absolute w-96 h-96 pointer-events-none transition-all duration-300"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background: `radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, hsl(var(--primary) / 0.2) 20%, transparent 60%)`,
            borderRadius: '50%',
            opacity: mousePosition.x > 0 ? 1 : 0
          }}
        />
        
        {/* Grid Lines that react to cursor */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
