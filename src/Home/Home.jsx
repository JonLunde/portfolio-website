/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ProjectsContainer from './ProjectsContainer';

function Home() {
  return (
    <div>
      <div className="main-container">
        <h1 className="header-primary">
          <span className="header-primary-main">Hi, I&apos;m Jon!</span>
          <span className="header-primary-sub clearfix">
            <img
              src="https://via.placeholder.com/300/300"
              alt="Picture of me."
            />{' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            corporis quae ipsa tempore itaque fugiat facere quas velit magnam
            qui?
          </span>
        </h1>
      </div>
      <div className="extra-container" />
      <ProjectsContainer />
    </div>
  );
}

export default Home;
