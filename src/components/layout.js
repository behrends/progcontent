import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import './printLayout.css';
import 'prismjs/themes/prism-coy.css';

export default ({ children, indexLink }) => (
  <div class="flex flex-col min-h-screen bg-gray-200"
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Prog Content</title>
      <link rel="canonical" href="https://www.progcontent.com" />
    </Helmet>
    <header class="w-screen mb-2 p-2 bg-gray-400">
      <Link to="/">Prog Content</Link>
      &nbsp;&nbsp;{indexLink}
    </header>
    <div class="flex-1 px-8">{children}</div>
    <footer class="mt-2 pr-2 text-right">
      &copy; {new Date().getFullYear()} &nbsp;
      <a href="https://www.behrends.io">Erik Behrends</a>
      &nbsp;&nbsp;&nbsp;
      <Link to="/impressum">Impressum</Link>
    </footer>
  </div>
);
