import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Project(props) {
  const {
    frontmatter: { slug, title, image, imageAlt, stack, gitUrl, websiteUrl },
    body: text,
  } = props;
  // console.log(props);

  return (
    <div>
      <div className="project">
        <div className="project__img-container">
          <GatsbyImage
            image={getImage(image)}
            alt={imageAlt}
            className="project__img"
          />
        </div>
        <div className="project__text-container">
          <div className="project__text-flex-container">
            <h2 className="heading-secondary project__title">{title}</h2>
            <div className="project__text">
              <MDXRenderer>{text}</MDXRenderer>
            </div>
            <hr />
            <span className="project__stack">Stack: {stack}</span>
            <div className="project__buttons-container">
              {gitUrl && (
                <button
                  type="button"
                  href={gitUrl}
                  className="btn btn__project"
                >
                  CODE
                </button>
              )}

              {websiteUrl && (
                <button
                  type="button"
                  href={websiteUrl}
                  className="btn btn__project"
                >
                  Website
                </button>
              )}

              {/* <button type="button" className="btn btn__project">
                Write up
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
