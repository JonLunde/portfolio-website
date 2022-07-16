import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__accounts">
        <a
          id="github"
          href="https://github.com/JonLunde"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <StaticImage
            className="footer__logo"
            src="../../images/github.png"
            type="image/png"
            alt="Github logo"
            loading="lazy"
            placeholder="none"
          />
        </a>
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/jon-magnar-lunde-32i23"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <StaticImage
            className="footer__logo"
            src="../../images/linkedIn.png"
            type="image/png"
            alt="LinkedIn logo"
            loading="lazy"
            placeholder="none"
          />
        </a>
      </div>
      <div className="footer__legal">&copy; 2021 Jon Lunde</div>
    </footer>
  );
}
