import React from 'react';
import Project from './Project';
import projectDetails from './projectDetails';

function ProjectsContainer() {
  return (
    <div>
      {projectDetails.map((project) => (
        <Project
          title={project.title}
          text={project.text}
          img={project.img}
          imgAlt={project.imgAlt}
          stack={project.stack}
          gitUrl={project.gitUrl}
          websiteUrl={project.websiteUrl}
        />
      ))}
    </div>
  );
}

export default ProjectsContainer;
