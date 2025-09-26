"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    // Trigger animation on mount for page-based navigation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vinitabharti1504@gmail.com',
      href: 'mailto:vinitabharti1504@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9572703604',
      href: 'tel:+919572703604',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bihar, India',
      href: 'https://maps.app.goo.gl/U5i2cUY1vY3zVjTz9',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Vinita1504', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vinita-bharti-07752b315/', label: 'LinkedIn' },
  ];

  return (
    <section className="min-h-screen bg-background py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mb-8"></div>
          <p className="text-muted-foreground text-lg mb-16">
            Ready to bring your ideas to life? Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card 
            className={`bg-card/30 backdrop-blur-sm border-border transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-primary-foreground font-medium py-3 transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={info.label} className="bg-card/30 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                            <Icon className="text-foreground" size={20} />
                          </div>
                          <div>
                            <div className="text-muted-foreground text-sm">{info.label}</div>
                            <a 
                              href={info.href}
                              className="text-foreground font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-2xl font-bold text-foreground mb-4">
            Let's build something amazing together.
          </p>
          <p className="text-muted-foreground">
            I'm currently available for freelance work and exciting full-time opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}