import React from 'react';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const NewHero = () => {
  const [heroRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-sky-gradient relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center relative z-10">
        {/* Main Content */}
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Open to opportunities
          </div>

          {/* Huge Condensed Heading */}
          <h1 className="condensed-heading text-7xl sm:text-8xl lg:text-9xl text-black">
            PUNITH PINDI
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-light max-w-4xl mx-auto">
            Computer Science Graduate specializing in <span className="font-semibold">AI/ML</span>, 
            <span className="font-semibold"> Full-Stack Development</span>, and 
            <span className="font-semibold"> Data Analytics</span>
          </h2>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 ${
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          }`}>
            <button
              onClick={scrollToContact}
              className="pill-button bg-black text-white px-8 py-4 text-lg font-medium inline-flex items-center gap-2 shadow-lg"
            >
              Get in Touch
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => window.open(personalInfo.resumeLink, '_blank')}
              className="pill-button bg-white text-black px-8 py-4 text-lg font-medium border-2 border-black"
            >
              View Resume
            </button>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center gap-6 pt-8 ${
            isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0'
          }`}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
            >
              <Github size={24} className="text-black" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
            >
              <Linkedin size={24} className="text-black" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
            >
              <Mail size={24} className="text-black" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 ${
          isVisible ? 'animate-fade-in delay-400' : 'opacity-0'
        }`}>
          <div className="text-sm text-gray-700 mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-black rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;