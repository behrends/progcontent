import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import 'prismjs/themes/prism-coy.css';

export default ({ children, indexLink }) => (
  <div
    style={{ margin: `3rem auto`, maxWidth: 1080, padding: `0 1rem` }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Prog Platform</title>
      <link
        rel="canonical"
        href="https://prog-platform.netlify.com/"
      />
    </Helmet>
    <Link to="/">Startseite</Link>
    &nbsp;&nbsp;{indexLink}
    <br />
    {children}
  </div>
);
