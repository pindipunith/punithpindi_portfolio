import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { about } from '../data/mock';
import { GraduationCap, Globe, Award } from 'lucide-react';

const NewAbout = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`mb-20 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="condensed-heading text-6xl lg:text-7xl text-black mb-6">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-black"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Bio Card */}
          <div className={`${
            isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'
          }`}>
            <div className="design-card bg-cream p-10 lg:p-12">
              <h3 className="text-3xl font-bold text-black mb-6">Background</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {about.bio}
              </p>
              
              {/* Languages */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl">
                <Globe className="w-6 h-6 text-black mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-black mb-2">Languages</h4>
                  <p className="text-gray-700">{about.languages.join(' • ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Education Cards */}
          <div className={`space-y-6 ${
            isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-black" />
              <h3 className="text-3xl font-bold text-black">Education</h3>
            </div>

            {about.education.map((edu, index) => (
              <div
                key={index}
                className="design-card bg-white border-2 border-black p-8"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg text-gray-700 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAbout;