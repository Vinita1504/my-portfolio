"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Instagram, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialIcons = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
  ];

  const companyLogos = [
    'AXIS BANK', 'SBM BANK', 'MTV', '63 MOONS'
  ];

  const skillTags = [
    { text: 'Branding & Identity', position: 'top-left' },
    { text: 'Product & UX', position: 'top-right' },
    { text: 'Business Strategy', position: 'bottom-left' },
  ];

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-primary/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-8">
        {/* Intro Text */}
        <div className={` pt-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground text-sm mb-2 text-center">Hi, My name is ViNiTa</p>
        </div>

        {/* Main Heading */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 leading-tight">
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
          <div className="relative w-96 h-96 mx-auto">
            <Image
              src="/vinita.jpeg"
              alt="ViNiTa BhArTi - Full Stack Developer"
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
                tag.position === 'bottom-left' ? '-bottom-4 -left-12' : ''
              }`}
              style={{animationDelay: `${index * 0.5}s`}}
            >
              <div className="bg-gradient-to-r from-tertiary to-accent text-tertiary-foreground px-4 py-2 rounded-full text-xs font-medium shadow-xl">
                {tag.text}
              </div>
            </div>
          ))}

          {/* Overlay Social Media Bar */}
          <div className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center space-x-4 bg-card/90 backdrop-blur-sm border border-border rounded-2xl px-6 py-4 shadow-2xl">
              {/* Profile Picture Icon */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-background"></div>
              </div>

              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}

              {/* Get in Touch Button */}
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ml-2">
                <Mail className="mr-2" size={16} />
                Get in touch
              </Button>
            </div>
          </div>
        </div>

        {/* Company Logos */}
        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-8 opacity-60 mt-8">
            {companyLogos.map((company, index) => (
              <div key={company} className="text-muted-foreground font-medium text-sm">
                {company}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}