import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function Intro({ aboutRef, projectsRef, contactRef }) {
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
          <a className="btn btn--orange" onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>
            About Me.
          </a>
          <a className="btn btn--orange" onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>
            Projects.
          </a>
          <a className="btn btn--orange" onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>
            Contact me.
          </a>
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
              src="../../images/github.png"
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
              src="../../images/linkedIn.png"
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
