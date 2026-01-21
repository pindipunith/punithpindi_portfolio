import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/mock';
import { Code, Brain, Database, Wrench, Zap } from 'lucide-react';

const NewSkills = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: skills.programming
    },
    {
      title: 'AI & ML',
      icon: Brain,
      skills: skills.aiml
    },
    {
      title: 'Web Dev',
      icon: Zap,
      skills: skills.webDev
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: skills.tools
    },
    {
      title: 'Data',
      icon: Database,
      skills: skills.dataAnalytics
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`mb-20 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="condensed-heading text-6xl lg:text-7xl text-black mb-6">
            TECHNICAL SKILLS
          </h2>
          <div className="w-24 h-1 bg-black"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`design-card bg-cream p-8 ${
                  isVisible ? `animate-fade-in-up delay-${(index + 2) * 100}` : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-white text-black rounded-full text-sm font-medium border border-black/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewSkills;