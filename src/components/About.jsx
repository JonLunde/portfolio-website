import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
  return (
    <div className="about">
      <div className="about__container section-container">
        <h1 className="heading-primary about__title">About me.</h1>
        <div className="about__content">
          <div className="about__speech-bubble">
            <span className="about__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat labore eligendi commodi
              consequuntur quibusdam iusto ad ducimus veniam officiis, distinctio corporis doloremque a molestias
              tempora temporibus corrupti consectetur id cupiditate dolore. Atque aliquam voluptas suscipit amet
              delectus ratione dicta, totam sed ad libero exercitationem sequi, maxime eum laboriosam similique.
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
