import React from 'react';
import { Link } from 'gatsby';

export default function NotFound() {
  return (
    <div className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <span className="page-not-found__subtitle">Sorry, but the requested page was not found</span>

      <Link to="/">
        <button type="button" className="page-not-found__button btn btn--white">
          Homepage
        </button>
      </Link>
    </div>
  );
}
