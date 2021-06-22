import React from 'react';

function Navbar() {
  return (
    <nav className="navigation">
      <div className="navigation__brand">
        <a className="navigation__link" href="/">
          <span>Jon Lunde</span>
        </a>
      </div>
      <div className="navigation__menu">
        <a href="/projects" className="navigation__link navigation__item">
          Projects
        </a>
        <a href="/about" className="navigation__link navigation__item">
          About Me
        </a>
      </div>
      <div className="navigation__dark-mode">
        <button type="button" sid="btn btn-dark-mode">
          🌙
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
