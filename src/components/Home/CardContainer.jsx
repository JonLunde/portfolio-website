import React from 'react';
import ProjectCard from './ProjectCard';

export default function CardContainer({ children }) {
  return (
    <div className="section-container ">
      <h2 className="heading-secondary u-mb-medium">Projects</h2>
      <div className="cards-container">{children}</div>
    </div>
  );
}
