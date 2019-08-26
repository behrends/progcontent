import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import 'prismjs/themes/prism-coy.css';

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 740, padding: `0 1rem` }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gestalt Prog</title>
      <link rel="canonical" href="https://gestaltprog.netlify.com/" />
    </Helmet>
    <Link to="/">HOME</Link>
    {children}
  </div>
);
