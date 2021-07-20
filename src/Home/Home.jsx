/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ProjectsCardContainer from './ProjectsCardContainer';
import portrait from '../assets/img/cvPhotoBlurCirc400px.png';

function Home() {
  return (
    <div>
      <header>
        <div className="header-intro">
          <h1 className="heading-intro">
            <span className="header__main heading-intro--main">
              Hi, I&apos;m Jon!
            </span>
            <span className="header__sub heading-intro--sub">
              <img
                className="heading-intro__img"
                src={portrait}
                alt="Portrait of me."
              />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              corporis quae ipsa tempore itaque fugiat facere quas velit magnam
              qui?
            </span>
          </h1>
        </div>
      </header>
      <main>
        <ProjectsCardContainer />
      </main>
    </div>
  );
}

export default Home;
