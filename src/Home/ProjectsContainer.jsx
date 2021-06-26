import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsContainer() {
  return (
    <div className="section-projects container ">
      <h2 className="heading-secondary u-mb-medium">Projects</h2>
      <div className="row">
        <div className="col-1-of-3">
          <ProjectCard />
        </div>
        <div className="col-1-of-3">
          <ProjectCard />
        </div>
        <div className="col-1-of-3">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
