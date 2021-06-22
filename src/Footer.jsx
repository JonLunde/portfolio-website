import React from 'react';
import githubLogo from './assets/img/github.png';
import linkedInLogo from './assets/img/linkedIn.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="footer__account">
          <a
            id="github"
            href="https://github.com/JonLunde"
            target="_blank"
            rel="noreferrer noopner"
            className="footer__link"
          >
            <img
              className="footer__logo"
              src={githubLogo}
              type="image/png"
              alt="Github logo"
            />
          </a>
        </div>
        <div className="footer__account">
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/jon-magnar-lunde-32i23"
            target="_blank"
            rel="noreferrer noopner"
            className="footer__link"
          >
            <img
              className="footer__logo"
              src={linkedInLogo}
              type="image/png"
              alt="LinkedIn logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
