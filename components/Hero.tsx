"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Instagram, Mail, Download, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Tilt from 'react-parallax-tilt';
import InteractiveBackground from '@/components/ui/InteractiveBackground';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale based on scroll (1.0 to 1.5) - starts normal, gets bigger on scroll
  const scale = Math.max(1.0, Math.min(1.5, 1.0 + scrollY * 0.0005));

  const socialIcons = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vinita-bharti-07752b315/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/Vinita1504', label: 'GitHub' },
  ];

  const skillTags = [
    { text: 'Branding & Identity', position: 'top-left', color: 'from-orange-500 to-red-500' },
    { text: 'Product & UX', position: 'top-right', color: 'from-blue-500 to-blue-600' },
    { text: 'Business Strategy', position: 'bottom-left', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <InteractiveBackground className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-8">
        {/* Intro Text */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground text-sm mb-2 text-center">Hi, My name is Vinita</p>
        </div>

        {/* Main Heading */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 leading-tight"
            style={{ transform: `scale(${scale})` }}
          >
            Crafting Digital Interfaces<br />
            That Drive{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Growth
            </span>{' '}
            and{' '}
            <span className="bg-gradient-to-r from-tertiary to-accent bg-clip-text text-transparent">
              Delight
            </span>
          </h1>
        </div>

        {/* Portrait with Floating Tags and Overlay Social Section */}
        <div className={`relative mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1500}
            gyroscope={true}
            className="tilt-container"
          >
            <div style={{ transform: `scale(${scale})` }}>
            <div 
              className="relative w-96 h-96 mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src="/vinita.jpeg"
                alt="Vinita Bharti - Full Stack Developer"
                fill
                className="rounded-3xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-3xl"></div>
            </div>

            {/* Floating Skill Tags */}
            {skillTags.map((tag, index) => (
              <div 
                key={tag.text}
                className={`absolute animate-float ${
                  tag.position === 'top-left' ? '-top-4 -left-8' :
                  tag.position === 'top-right' ? 'top-16 -right-8' :
                  tag.position === 'bottom-left' ? 'bottom-10 -left-12' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.5}s`
                }}
                data-tilt-depth="30"
              >
                <div className={`bg-gradient-to-r ${tag.color} text-white px-4 py-2 rounded-full text-xs font-medium shadow-xl`}>
                  {tag.text}
                </div>
              </div>
            ))}

            </div>
          </Tilt>
        </div>
      </div>

      {/* Fixed Social Media Bar at Bottom */}
      <div className="fixed bottom-6 left-[70%] -translate-x-[70%] z-50">
        <div className="flex items-center space-x-4 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-4 shadow-2xl">
          {/* Profile Picture */}
          <div className="relative group cursor-pointer">
            <div className="w-12 h-12 rounded-lg overflow-hidden hover:scale-110 hover:rotate-3 hover:translate-x-2 transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
              <Image
                src="/vinita.jpeg"
                alt="Profile"
                width={48}
                height={48}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            {/* Pop out text */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 whitespace-nowrap">
              Vinita Bharti
            </div>
          </div>

          {/* Social Icons */}
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <div key={social.label} className="relative group">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:translate-x-2 hover:shadow-lg hover:shadow-white/20"
                >
                  <Icon size={18} />
                </a>
                {/* Pop out text */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 whitespace-nowrap">
                  {social.label}
                </div>
              </div>
            );
          })}

          {/* Get in Touch Button */}
          <div className="relative group ml-2">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-110 hover:rotate-3 hover:translate-x-2 hover:shadow-lg hover:shadow-purple-500/30">
              <Mail className="mr-2" size={16} />
              Get in touch
            </Button>
            {/* Pop out text */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 whitespace-nowrap">
              vinitabharti1504@gmail.com
            </div>
          </div>
        </div>
      </div>
    </InteractiveBackground>
  );
}