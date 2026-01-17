import React from 'react';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Globe } from 'lucide-react';
import { about } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
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
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-blue-900" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-6">
              {about.education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-blue-900 hover:shadow-lg transition-shadow">
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
