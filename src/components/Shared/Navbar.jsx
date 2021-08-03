import { Link } from 'gatsby';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__brand">
          <Link className="navigation__link" to="/">
            <span>Jon Lunde</span>
          </Link>
        </div>
        <div className="navigation__menu">
          <Link className="navigation__link navigation__item" to="/projects">
            <span>Projects</span>
          </Link>

          <Link className="navigation__link navigation__item" to="/about">
            <span>About Me</span>
          </Link>
        </div>
        <button
          type="button"
          className="navigation__dark-mode"
          aria-label="Dark Mode Button"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      </div>
      <button type="button" className="navigation__dark-mode" aria-label="Dark Mode Button">
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </nav>
  );
}

export default Navbar;
