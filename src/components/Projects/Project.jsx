import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Project(props) {
  const {
    frontmatter: { title, image, imageAlt, stack, gitUrl, websiteUrl },
    html: text,
  } = props;
  // console.log(props);

  return (
    <div className="project">
      <h2 className="heading-secondary project__title">{title}</h2>
      <div className="project__stack">Stack: {stack}</div>
      <div className="project__image-container">
        <GatsbyImage className="project__image" image={getImage(image)} alt={imageAlt} />
      </div>
      <div className="project__text-container">
        <div className="project__description" dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className="project__buttons">
          {gitUrl && (
            <button type="button" href={gitUrl} className="btn btn__project">
              CODE
            </button>
          )}

          {websiteUrl && (
            <button type="button" href={websiteUrl} className="btn btn__project">
              Website
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
