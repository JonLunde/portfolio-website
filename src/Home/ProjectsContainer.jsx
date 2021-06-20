import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsContainer() {
  return (
    <div className="section-container projects">
      <h2 className="heading-secondary">Projects.</h2>
      <div className="row">
        <div className="col-1-of-2">
          <ProjectCard />
        </div>
        <div className="col-1-of-2">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
