import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Globe } from 'lucide-react';
import { about } from '../data/mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [bioRef, bioVisible] = useScrollAnimation({ threshold: 0.3 });
  const [eduRef, eduVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 bg-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gray-100 rounded-full filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div 
            ref={bioRef}
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              bioVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {about.bio}
            </p>
            
            {/* Languages */}
            <div className="flex items-start gap-3">
              <Globe className="w-6 h-6 text-blue-900 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                <p className="text-gray-700">{about.languages.join(' • ')}</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div 
            ref={eduRef}
            className={`transition-all duration-1000 delay-400 ${
              eduVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {about.education.map((edu, index) => (
                <Card 
                  key={index} 
                  className="border-l-4 border-l-blue-900 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  style={{ 
                    animationDelay: `${index * 0.2}s` 
                  }}
                >
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-900 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 text-sm">{edu.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
