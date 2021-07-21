import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Test() {
  return (
    <div className="test">
      <div className="test__container">
        <div className="test__intro--main">
          <h1 className="test__header">Jon Lunde,</h1>
        </div>
        <div className="test__intro--sub">
          <span className="test__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti
            architecto molestiae aut et ea, sit aliquid cupiditate quos vitae
            sunt numquam harum illum consequatur.
          </span>
          <div className="test__image-container">
            <StaticImage
              className="test__image"
              src="../images/cvPhotoBlurCirc400px.png"
              alt="Portrait of me."
              loading="eager"
              placeholder="none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
