import React from 'react';
import { Link } from 'gatsby';

export default ({ prev = null, next = null }) => {
  if (!prev && !next) {
    return null;
  }

  return (
    <div>
      {prev && (
        <Link to={prev.link}>
          <h4>Zurück</h4>
          {prev.title}
        </Link>
      )}
      {next && (
        <Link to={next.link}>
          <h4>Weiter</h4>
          {next.title}
        </Link>
      )}
    </div>
  );
};
