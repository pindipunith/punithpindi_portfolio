import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '../data/mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Certifications = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className={`py-20 bg-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Subtle Wave Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 30, 50 50 T 100 50" fill="none" stroke="#1e40af" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-500 group border-t-4 border-t-blue-900 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0 rotate-0' 
                  : 'opacity-0 translate-y-10 rotate-3'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-6 h-6 text-blue-900 group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-lg text-gray-900 leading-tight">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-900 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-600 text-sm mb-4">{cert.date}</p>
                <Button
                  onClick={() => window.open(cert.link, '_blank')}
                  variant="outline"
                  size="sm"
                  className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;