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
      <div className="project__image-container">
        <GatsbyImage imgClassName="project__image" image={getImage(image)} alt={imageAlt} />
      </div>

      <div className="project__text-container">
        <h2 className="heading-secondary project__title">{title}</h2>
        <div className="project__description" dangerouslySetInnerHTML={{ __html: text }}></div>
        <div className="project__stack">Stack: {stack}</div>
        <div className="project__buttons">
          {gitUrl && (
            <a href={gitUrl} className="btn btn--white" target="_blank" rel="noopener noreferrer">
              CODE
            </a>
          )}

          {websiteUrl && (
            <a href={websiteUrl} className="btn btn--white" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
