import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Brain, Database, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: skills.programming,
      color: 'bg-blue-100 text-blue-900'
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: skills.aiml,
      color: 'bg-blue-100 text-blue-900'
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: skills.webDev,
      color: 'bg-blue-100 text-blue-900'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: skills.tools,
      color: 'bg-blue-100 text-blue-900'
    },
    {
      title: 'Data Analytics',
      icon: Database,
      skills: skills.dataAnalytics,
      color: 'bg-blue-100 text-blue-900'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Grid Pattern Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 64, 175, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-900 rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={category.color}
                        variant="secondary"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}</div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
