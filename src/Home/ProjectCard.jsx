import React from 'react';

function ProjectCard() {
  return (
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__image card__image--1 u-mb-medium">&nbsp;</div>
        <div className="heading-tertiary card__title">
          <h3>
            <span className="card__title--span">Lorem ipsum dolor.</span>
          </h3>
        </div>
        <div className="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam
          sapiente tempore excepturi! Repellat delectus quos excepturi, quasi
          porro eos!
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
        <div className="card__learned">
          <h4 className="card__list-title heading-tertiary u-mb-small">
            Learned
          </h4>
          <ul className="card__list">
            <li className="card__item">
              Lorem, ipsum dolor loremloremlorem lorem lorem.
            </li>
            <li className="card__item">Lorem, ipsum.</li>
            <li className="card__item">Lorem ipsum dolor sit.</li>
            <li className="card__item">Lorem.</li>
            <li className="card__item">Lorem, ipsum.</li>
          </ul>
        </div>
        <div className="card__btn">
          <button type="button" className="btn btn--white">
            Read more!
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
