import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
  const { title, text, img, imgAlt, stack, gitUrl, websiteUrl } = props;
  return (
    <div>
      <div className="project">
        <div className="project__img-container">
          <img src={img} alt={imgAlt} className="project__img" />
        </div>
        <div className="project__text-container">
          <div className="project__text-flex-container">
            <h2 className="heading-secondary project__title">{title}</h2>
            <span className="project__text">{text}</span>
            <hr />
            <span className="project__stack">
              {'Stack: '}
              {stack.map((item) => `${item}, `)}
            </span>
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

              <button type="button" className="btn btn__project">
                Write up{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  gitUrl: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
};

export default Project;
