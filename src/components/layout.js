import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import 'prismjs/themes/prism-coy.css';

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 740, padding: `0 1rem` }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>JavaScript für React</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Link to="/">Inhalt</Link>
    {children}
  </div>
);
