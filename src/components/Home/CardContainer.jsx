import React from 'react';
import ProjectCard from './ProjectCard';

export default function CardContainer() {
  return (
    <div className="content-container ">
      <h2 className="heading-secondary u-mb-medium">Projects</h2>
      <div className="row cards-container">
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
