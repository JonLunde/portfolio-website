import React from 'react';
import Project from './Project';
import projectDetails from './projectDetails';

export default function ProjectsContainer({ children }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
