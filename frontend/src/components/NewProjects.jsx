import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { featuredProjects, githubProjects } from '../data/mock';
import { ExternalLink, Github, Award, ArrowRight } from 'lucide-react';

const NewProjects = () => {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const [githubRef, githubVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-sky-gradient"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className={`mb-20 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          <h2 className="condensed-heading text-6xl lg:text-7xl text-black mb-6">
            FEATURED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-black"></div>
          <p className="text-xl text-gray-800 mt-6 max-w-3xl">
            Showcasing AI/ML, full-stack development, and data analytics projects
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`design-card bg-white p-8 ${
                isVisible ? `animate-fade-in-up delay-${(index + 2) * 100}` : 'opacity-0'
              }`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-cream text-black rounded-full text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <div className="text-sm font-bold text-green-600">
                        {project.metrics}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-2xl font-bold text-black mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-cream text-black rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact */}
              {project.impact && (
                <p className="text-sm text-gray-600 italic mb-6 pl-4 border-l-2 border-black">
                  {project.impact}
                </p>
              )}

              {/* Links */}
              <div className="flex gap-3">
                {project.liveLink && (
                  <button
                    onClick={() => window.open(project.liveLink, '_blank')}
                    className="pill-button bg-black text-white px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </button>
                )}
                {project.link && (
                  <button
                    onClick={() => window.open(project.link, '_blank')}
                    className="pill-button bg-cream text-black px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
                  >
                    Code
                    <Github size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Projects */}
        <div ref={githubRef}>
          <div className={`mb-12 ${
            githubVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <h3 className="condensed-heading text-4xl lg:text-5xl text-black mb-4">
              MORE PROJECTS
            </h3>
            <div className="w-20 h-0.5 bg-black/50"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {githubProjects.map((project, index) => (
              <div
                key={index}
                className={`design-card bg-white/70 backdrop-blur-sm p-6 ${
                  githubVisible ? `animate-fade-in-up delay-${(index + 2) * 100}` : 'opacity-0'
                }`}
              >
                <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-xs font-medium mb-4">
                  {project.category}
                </span>
                <h4 className="text-xl font-bold text-black mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-cream text-black rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button
              onClick={() => window.open('https://github.com/pindipunith', '_blank')}
              className="pill-button bg-black text-white px-8 py-4 text-lg font-medium inline-flex items-center gap-2"
            >
              View All on GitHub
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProjects;