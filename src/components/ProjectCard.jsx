import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Project Image */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.heading}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Heading */}
        <h3 className="text-xl font-bold text-white mb-3">
          {project.heading}
        </h3>

        {/* Description Accordion */}
        <div className="mb-4">
          <button
            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            className="w-full text-left text-gray-300 hover:text-white transition-colors duration-200 flex justify-between items-center"
          >
            <span className="font-medium">Description</span>
            <span className={`transform transition-transform duration-200 ${isDescriptionOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          
          {isDescriptionOpen && (
            <div className="mt-3 max-h-32 overflow-y-auto pr-2">
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Demo
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
