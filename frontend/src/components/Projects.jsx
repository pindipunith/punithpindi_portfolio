import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Award } from 'lucide-react';
import { featuredProjects, githubProjects } from '../data/mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [githubRef, githubVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Floating Circles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-2xl opacity-40 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-gray-200 rounded-full filter blur-2xl opacity-40 animate-float-medium"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Featured Projects */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className={`hover:shadow-xl transition-all duration-500 flex flex-col h-full border-t-4 border-t-blue-900 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-blue-900 text-white">
                      {project.category}
                    </Badge>
                    {project.metrics && (
                      <Award className="w-5 h-5 text-yellow-500" />
                    )}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {project.title}
                  </CardTitle>
                  {project.metrics && (
                    <CardDescription className="text-blue-900 font-semibold">
                      {project.metrics}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.impact && (
                    <p className="text-sm text-gray-600 italic mb-4">
                      Impact: {project.impact}
                    </p>
                  )}

                  <div className="mt-auto flex gap-2">
                    {project.liveLink && (
                      <Button
                        onClick={() => window.open(project.liveLink, '_blank')}
                        variant="default"
                        size="sm"
                        className="flex-1 bg-blue-900 hover:bg-blue-800"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.link && (
                      <Button
                        onClick={() => window.open(project.link, '_blank')}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Projects */}
        <div ref={githubRef}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Other GitHub Projects
            </h3>
            <div className="w-20 h-1 bg-gray-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {githubProjects.map((project, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-all duration-500 border-l-4 border-l-gray-400 transform ${
                  githubVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-lg text-gray-900">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => window.open('https://github.com/pindipunith', '_blank')}
              size="lg"
              variant="outline"
              className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transform hover:scale-105 transition-all"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;