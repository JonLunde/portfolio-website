/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ProjectsContainer from './ProjectsContainer';

function Home() {
  return (
    <div>
      <header>
        <div className="header">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Hi, I&apos;m Jon!</span>
            <span className="heading-primary--sub">
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
      </header>
      <main>
        <ProjectsContainer />
      </main>
    </div>
  );
}

export default Home;
