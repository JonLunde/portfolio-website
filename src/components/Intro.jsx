import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

export default function Intro({ aboutRef, projectsRef, contactRef }) {
  return (
    <div className="intro">
      <div className="intro__container">
        <div className="intro__inline-wrapper">
          <h1 className="intro__title">
            Jon Lunde<span className="intro__title__blinking">_</span>
          </h1>

          <h2 className="intro__subtitle">Web developer. Designer. Problem Solver.</h2>
        </div>

        <StaticImage
          className="intro__image"
          src="../images/cvPhotoBlurCirc.png"
          alt="Portrait of me, Jon Lunde."
          loading="eager"
          placeholder="none"
        />
        <div className="intro__button-container">
          <button
            type="button"
            className="btn btn--intro"
            onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}
          >
            About Me
          </button>
          <button
            type="button"
            className="btn btn--intro"
            onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}
          >
            Projects
          </button>
          <button
            type="button"
            className="btn btn--intro"
            onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact me
          </button>
        </div>
        <div className="intro__social-container">
          <a
            id="github"
            href="https://github.com/JonLunde"
            target="_blank"
            rel="noopener noreferrer"
            className="intro__social"
          >
            <StaticImage
              src="../images/github.png"
              type="image/png"
              alt="Github logo"
              loading="lazy"
              placeholder="none"
            />
          </a>

          <a
            id="linkedin"
            href="https://www.linkedin.com/in/jon-magnar-lunde-32i23"
            target="_blank"
            rel="noopener noreferrer"
            className="intro__social"
          >
            <StaticImage
              src="../images/linkedIn.png"
              type="image/png"
              alt="LinkedIn logo"
              loading="lazy"
              placeholder="none"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
