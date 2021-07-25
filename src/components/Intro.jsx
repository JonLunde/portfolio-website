import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__container">
        <h1 className="intro__title">
          Jon Lunde<span className="intro__title__blinking">_</span>
        </h1>
        <h2 className="intro__subtitle">Web developer. Designer. Problem Solver.</h2>
        <StaticImage
          className="intro__image"
          src="../images/cvPhotoBlurCirc.png"
          alt="Portrait of me, Jon Lunde."
          loading="eager"
          placeholder="none"
        />
        <div className="intro__button-container">
          <a className="btn btn--intro" href="#about">
            About Me.
          </a>
          <a className="btn btn--intro" href="#projects">
            Projects.
          </a>
          <button className="btn btn--intro">GitHub/LinkedIn</button>
        </div>
      </div>
    </div>
  );
}
