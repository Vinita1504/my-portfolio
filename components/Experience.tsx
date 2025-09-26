"use client";

import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase, Download, ArrowRight, Check } from 'lucide-react';
import InteractiveBackground from '@/components/ui/InteractiveBackground';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger animation on mount for page-based navigation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: 'Software Developer',
      company: 'GEETBIH TECH LLP',
      location: 'Siliguri, India',
      period: '2025 - Present',
      description: 'Currently working as a Software Developer, building both web and mobile applications. Developing end-to-end solutions using Next.js for web apps and Flutter for cross-platform mobile applications.',
      technologies: ['React', 'Next.js', 'Node.js', 'Flutter', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Frontend Developer',
      company: 'ParivartanX',
      location: 'Patna, India',
      period: '2024-2025',
      description: 'Worked as a Frontend Developer, creating both web and mobile applications. Built responsive web interfaces using Next.js and cross-platform mobile apps using Flutter for seamless user experiences.',
      technologies: ['React', 'Next.js', 'Flutter', 'JavaScript', 'CSS', 'HTML'],
    },
    {
      title: 'Flutter Developer',
      company: 'Chiggos Software Pvt Ltd',
      location: 'Patna, India',
      period: '2022 - 2024',
      description: 'Started as an Intern for 6 months, then promoted to Flutter Developer. Developed both web applications and mobile apps using Flutter, gaining expertise in cross-platform development.',
      technologies: ['Flutter', 'React', 'Dart', 'Firebase', 'JavaScript'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Indira Gandhi National Open University (IGNOU)',
      period: '2023 - 2025',
      description: 'Currently pursuing BCA with focus on computer applications and software development.',
    },
  ];

  return (
    <InteractiveBackground className="min-h-screen py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-accent font-semibold">Professional journey</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Where passion meets <span className="text-primary">expertise</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Building digital experiences that make a difference
          </p>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left Side - For Hiring Managers */}
          <div className="lg:col-span-1">
            <div 
              className="transition-transform duration-300 ease-out"
              style={{
                transform: `translateY(${Math.min(scrollY * 0.3, 800)}px)`
              }}
            >
              <div className="text-accent text-sm font-medium mb-3">
                &lt; For hiring managers &gt;
              </div>
              <h3 className="text-2xl font-bold text-accent mb-6">
                Software Developer with 3+ years of experience
                <ArrowRight className="inline-block ml-2" size={18} />
              </h3>
              <button className="bg-white text-black border border-black rounded-lg px-4 py-2.5 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm w-fit">
                <Download size={14} />
                Download resume
              </button>
            </div>
          </div>
          
          {/* Right Side - Experience Entries */}
          <div className="lg:col-span-2">
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Company Icon */}
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {exp.company.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-2">
                        <h4 className="text-xl font-bold text-foreground mb-1">{exp.title}</h4>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                      
                      <p className="text-muted-foreground mb-3 leading-relaxed text-sm">{exp.description}</p>
                      
                      {/* <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-secondary text-secondary-foreground hover:bg-primary/20 px-2 py-1 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Side - Heading */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-accent leading-tight">
              And here's what I<br />
              studied →
            </h3>
          </div>
          
          {/* Right Side - Education Entries */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={edu.institution}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{edu.institution}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </InteractiveBackground>
  );
}