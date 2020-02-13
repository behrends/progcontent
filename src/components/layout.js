import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import 'prismjs/themes/prism-coy.css';

export default ({ children, indexLink }) => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 1080,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Prog Content</title>
      <link rel="canonical" href="https://www.progcontent.com" />
    </Helmet>
    <header>
      <Link to="/">Startseite</Link>
      &nbsp;&nbsp;{indexLink}
    </header>
    <div style={{ flex: 1 }}>{children}</div>
    <footer
      style={{
        marginTop: '1rem',
        textAlign: 'right'
      }}
    >
      &copy; {new Date().getFullYear()} &nbsp;
      <a href="https://www.behrends.io">Erik Behrends</a>
      &nbsp;&nbsp;&nbsp;
      <Link to="/impressum">Impressum</Link>
    </footer>
  </div>
);
