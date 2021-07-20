import React from 'react';
import ProjectsContainer from './ProjectsContainer';

function Projects() {
  return (
    <div>
      <header>
        <div className="header">
          <h1 className="heading-primary content-container">
            <span className="header__main heading-primary--main">Projects</span>
            <span className="header__sub heading-primary--sub">
              This is a showcase off my projects.
            </span>
          </h1>
        </div>
      </header>
      <main>
        <ProjectsContainer />
      </main>
    </div>
  );
}

export default Projects;
