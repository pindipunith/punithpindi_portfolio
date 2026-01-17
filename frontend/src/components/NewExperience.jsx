import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../data/mock';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const NewExperience = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`mb-20 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="condensed-heading text-6xl lg:text-7xl text-black mb-6">
            EXPERIENCE
          </h2>
          <div className="w-24 h-1 bg-black"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className={`design-card bg-white p-8 lg:p-12 border-l-4 border-black ${
                isVisible ? `animate-fade-in-up delay-${(index + 2) * 100}` : 'opacity-0'
              }`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Company Info */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                    {exp.title}
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Description & Skills */}
                <div className="lg:col-span-2">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-cream text-black rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewExperience;