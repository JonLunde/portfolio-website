import React from 'react';

function Navbar() {
  return (
    <nav>
      <div>
        <a aria-current="page" className="brand" href="/">
          <span>Jon Lunde</span>
        </a>
      </div>
      <div className="menu-item">
        <a href="/projects">Projects</a>
        <a href="/about">About Me</a>
      </div>
      <div className="button-item">
        <button type="button" sid="dark-mode-button">
          🌙
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
