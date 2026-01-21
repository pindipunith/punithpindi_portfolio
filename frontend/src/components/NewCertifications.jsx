import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { certifications } from '../data/mock';
import { ExternalLink, Award } from 'lucide-react';

const NewCertifications = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="certifications" 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`mb-20 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="condensed-heading text-6xl lg:text-7xl text-black mb-6">
            CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-black"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`design-card bg-cream p-8 group ${
                isVisible ? `animate-fade-in-up delay-${(index + 2) * 100}` : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-lg text-gray-700 font-semibold mb-2">
                {cert.issuer}
              </p>
              
              <p className="text-gray-600 mb-6">{cert.date}</p>
              
              <button
                onClick={() => window.open(cert.link, '_blank')}
                className="pill-button bg-black text-white px-6 py-3 text-sm font-medium inline-flex items-center gap-2 w-full justify-center"
              >
                View Certificate
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCertifications;
