import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function About({ aboutRef }) {
  return (
    <div className="about" ref={aboutRef}>
      <div className="about__container section-container">
        <h1 className="heading-primary about__title">About me.</h1>
        <div className="about__content">
          <div className="about__speech-bubble">
            {/* <svg
              className="about__svg"
              viewBox="0 0 900 400"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C0 8.95433 8.95431 2.87515e-05 20 2.87515e-05H841.12C852.344 2.87515e-05 861.374 9.16691 861.13 20.3882C859.974 73.4792 857 216.195 857 278.5C857 285.079 857 331 857 350.5C857 374.087 869.592 379.74 872.776 380.792C873.116 380.904 873.249 381.306 872.98 381.542C871.608 382.749 867.266 385.369 857 383C857 393.128 848.79 396 838.662 396H831H22.6434H20C8.95431 396 0 387.046 0 376V20Z"
                fill="#006ACC"
              />
            </svg> */}
            <svg
              className="about__svg about__svg--big"
              viewBox="0 0 960 990"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20.0001C0 8.9544 8.95431 7.18788e-05 20 7.18788e-05H923.357C934.48 7.18788e-05 943.469 8.89066 943.361 20.0138C942.434 115.363 938.54 525.954 938.54 696.25C938.54 712.697 938.54 808.28 938.54 857.03C938.54 909.719 951.616 920.031 957.354 922.02C958.231 922.323 958.621 923.593 957.805 924.037C954.683 925.737 948.239 927.589 938.54 922.48C938.54 944.889 938.54 959.942 938.54 970.021C938.54 981.067 929.586 990 918.54 990H910.066H24.7978H20C8.95432 990 0 981.046 0 970V20.0001Z"
                fill="#006ACC"
              />
            </svg>
            <svg
              className="about__svg about__svg--small"
              viewBox="0 0 520 830"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20C0 8.95435 8.95431 6.0262e-05 20 6.0262e-05H499.908C510.989 6.0262e-05 519.96 8.65637 519.91 19.738C519.434 124.61 517.235 617.152 517.235 761.687C517.235 720.816 517.235 775.476 517.235 761.687C517.235 786.727 517.235 803.609 517.235 814.325C517.235 822.992 510.21 830 501.543 830V830H13.6662V830C6.11858 830 0 823.881 0 816.334V20Z"
                fill="#006ACC"
              />
            </svg>
            <div className="about__text">
              <span>
                Hey! I'm Jon, an aspiring web and software developer with a passion for creating enjoyable user
                experiences and making people's lives better through code! I find great motivation in working together
                with others towards a common goal, this has always been a big part of my life through my previous
                working experiences and playing football since I was a kid. From, and currently based in Oslo, Norway,
                where I have just completed my bachelor's degree in Information Technology at OsloMet!
                <br />
                <br />I enjoy writing Javascript and especially React, but I'm also well versed with Angular and
                Typescript as I spent the last six months working with them for my bachelor's project. For the backend,
                I prefer ExpressJS and .NET Core. In my spare time I like to play football, guitar, video games, and
                dabble in various technologies I find interesting. The technological rabbit hole I currently find myself
                in is cryptocurrency.
              </span>
            </div>
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
