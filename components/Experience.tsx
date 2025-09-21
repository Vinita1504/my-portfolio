"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount for page-based navigation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp India',
      location: 'Mumbai, India',
      period: '2022 - Present',
      description: 'Lead development of scalable SaaS platforms serving 100k+ users. Architected microservices infrastructure and mentored junior developers.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Pvt Ltd',
      location: 'Bangalore, India',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and e-commerce solutions. Collaborated with design teams to implement pixel-perfect UIs.',
      technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Web Developer',
      company: 'StartupHub India',
      location: 'Delhi, India',
      period: '2019 - 2020',
      description: 'Built MVPs for multiple startups. Worked across the full stack from database design to user interface implementation.',
      technologies: ['React', 'Express', 'MongoDB'],
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Indian Institute of Technology (IIT)',
      period: '2017 - 2019',
      description: 'Specialized in Human-Computer Interaction and Software Engineering.',
    },
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'University of Mumbai',
      period: '2013 - 2017',
      description: 'Graduated with distinction with focus on web technologies and algorithms.',
    },
  ];

  return (
    <section className="min-h-screen bg-background py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-16"></div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Briefcase className="mr-3 text-primary" size={24} />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className={`bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{exp.title}</h4>
                      <div className="flex items-center text-primary mb-2">
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin size={16} className="mr-2" />
                        <span className="mr-4">{exp.location}</span>
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-secondary text-secondary-foreground hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <svg className="mr-3 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zM5 13.18l7 3.82 7-3.82V11L12 15 5 11v2.18z"/>
            </svg>
            Education
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={edu.institution}
                className={`bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                      <div className="flex items-center text-primary mb-2">
                        <span className="font-semibold">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}