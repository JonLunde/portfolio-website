import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function About({ aboutRef }) {
  return (
    <div className="about" ref={aboutRef}>
      <div className="about__container section-container">
        <h1 className="heading-primary about__title">About me.</h1>
        <div className="about__content">
          <div className="about__speech-bubble">
            <span className="about__text">
              Hey! I'm Jon, an aspiring web and software developer with a passion for creating enjoyable user
              experiences and making people's life better through code! I find great motivation in working together with
              others towards a common goal, this has always been a big part of my life through my previous working
              experiences and playing football since I was a kid. From and currently based in Oslo, Norway, where I have
              just completed my bachelor's degree in Information Technology at OsloMet!
              <br />
              <br />I enjoy writing Javascript, and especially React, but I'm also well versed with Angular and
              Typescript as I spent the last six months working with them for my bachelor's project. For backend I enjoy
              ExpressJS and .NET Core. In my sparetime I like to play football, guitar, video games and dabble in
              various technolgies I find interesting, the technolgical rabbit hole I currently find myself in is
              cryptocurrency.
            </span>
            <svg
              className="about__svg"
              viewBox="0 0 900 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C0 8.95433 8.95431 2.87515e-05 20 2.87515e-05H841.12C852.344 2.87515e-05 861.374 9.16691 861.13 20.3882C859.974 73.4792 857 216.195 857 278.5C857 285.079 857 331 857 350.5C857 374.087 869.592 379.74 872.776 380.792C873.116 380.904 873.249 381.306 872.98 381.542C871.608 382.749 867.266 385.369 857 383C857 393.128 848.79 396 838.662 396H831H22.6434H20C8.95431 396 0 387.046 0 376V20Z"
                fill="#006ACC"
              />
            </svg>
          </div>
          <StaticImage
            className="about__image"
            src="../images/cvPhotoBlurCirc.png"
            alt="Portrait of me, Jon Lunde."
            loading="eager"
            placeholder="none"
          />
        </div>
      </div>
    </div>
  );
}
