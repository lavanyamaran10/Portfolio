import React, { useState } from 'react';
import { getProjects } from "../helpers/projectsData";
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = getProjects();

  const initialProjectsCount = 2;
  const displayedProjects = showAllProjects ? projects : projects.slice(0, initialProjectsCount);

  return (
    <div id="projects" className='w-full min-h-screen bg-slate-900 p-8'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-gray-300 text-lg">A collection of my recent work and side projects</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Read More Button */}
        {projects.length > initialProjectsCount && (
          <div className="text-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {showAllProjects ? 'Show Less' : `Read More (${projects.length - initialProjectsCount} more projects)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects
