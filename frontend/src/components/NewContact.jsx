import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { personalInfo } from '../data/mock';
import { Mail, Phone, Linkedin, Github, Send, Loader2, Check } from 'lucide-react';
import { sendEmail } from '../services/emailService';
import { useToast } from '../hooks/use-toast';

const NewContact = () => {
  const { toast } = useToast();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: result.message,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/pindipunith',
      link: personalInfo.linkedin
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '/pindipunith',
      link: personalInfo.github
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`mb-20 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="condensed-heading text-6xl lg:text-7xl text-black mb-6">
            LET'S CONNECT
          </h2>
          <div className="w-24 h-1 bg-black"></div>
          <p className="text-xl text-gray-800 mt-6 max-w-3xl">
            Open to opportunities in GenAI, AI/ML, Software Development, and Data Analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Methods */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-black mb-8">Get in Touch</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <a
                    key={index}
                    href={method.link}
                    target={method.icon === Phone ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`design-card bg-white p-6 flex items-center gap-4 group ${
                      isVisible ? `animate-slide-in-left delay-${(index + 2) * 100}` : 'opacity-0'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 font-medium">{method.label}</div>
                      <div className="text-black font-semibold">{method.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={`lg:col-span-3 ${
            isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'
          }`}>
            <div className="design-card bg-white p-8 lg:p-10">
              <h3 className="text-3xl font-bold text-black mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black/10 rounded-2xl focus:border-black focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black/10 rounded-2xl focus:border-black focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-black/10 rounded-2xl focus:border-black focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="pill-button bg-black text-white px-8 py-4 text-lg font-medium w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContact;